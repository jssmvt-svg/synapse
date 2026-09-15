import { Router } from "express";
import { randomUUID } from "node:crypto";
import { db } from "../db.js";
import { sendTrialRequestedEmailToAdmin } from "../email.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";
import { getUncachableStripeClient } from "../stripeClient.js";
import { getStripeAvailability } from "../stripeState.js";

export const billingRouter = Router();
billingRouter.use(authMiddleware);

function publicUrl(req: AuthedRequest): string {
  const domain = process.env.REPLIT_DOMAINS?.split(",")[0]?.trim();
  return domain ? `https://${domain}` : `${req.protocol}://${req.get("host")}`;
}

function hasActiveSubscription(status: string | null | undefined): boolean {
  return status === "active" || status === "trialing";
}

billingRouter.get("/status", async (req: AuthedRequest, res) => {
  const user = await db
    .prepare(
      `SELECT role, subscription_status, subscription_period_end, trial_status, trial_ends_at
       FROM users WHERE id = ?`,
    )
    .get(req.userId);
  if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });
  const trialActive =
    user.trial_status === "granted" &&
    user.subscription_status === "trialing" &&
    (user.trial_ends_at == null || Date.now() < Number(user.trial_ends_at));
  res.json({
    role: user.role,
    subscriptionStatus: user.subscription_status,
    subscriptionPeriodEnd: user.subscription_period_end,
    hasYearOneAccess: user.role === "admin" || hasActiveSubscription(user.subscription_status),
    trialStatus: user.trial_status,
    trialEndsAt: user.trial_ends_at,
    trialActive,
    billingAvailable: getStripeAvailability().ready,
    billingMessage: getStripeAvailability().reason,
  });
});

// Un étudiant demande ses 48h gratuites — jamais accordées automatiquement :
// Jessica valide chaque demande depuis /admin, ce qui déclenche l'email d'accès.
billingRouter.post("/trial/request", async (req: AuthedRequest, res) => {
  const user = await db
    .prepare(
      `SELECT id, email, lang_pref, first_name, last_name, track, trial_status
       FROM users WHERE id = ?`,
    )
    .get(req.userId);
  if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });
  if (user.trial_status === "requested") {
    return res.status(409).json({ error: "Ta demande est déjà en attente de validation." });
  }
  if (user.trial_status === "granted") {
    return res.status(409).json({ error: "Ton accès gratuit est déjà actif." });
  }

  await db
    .prepare("UPDATE users SET trial_status = 'requested', trial_requested_at = ? WHERE id = ?")
    .run(Date.now(), user.id);

  sendTrialRequestedEmailToAdmin({
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    track: user.track,
  });

  res.json({ trialStatus: "requested" });
});

billingRouter.post("/checkout", async (req: AuthedRequest, res) => {
  const availability = getStripeAvailability();
  if (!availability.ready) return res.status(503).json({ error: availability.reason });
  const user = await db
    .prepare(
      `SELECT id, email, stripe_customer_id, subscription_status, pending_checkout_expires_at
       FROM users WHERE id = ?`,
    )
    .get(req.userId);
  if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });
  if (hasActiveSubscription(user.subscription_status)) {
    return res.status(409).json({ error: "Ton abonnement est déjà actif." });
  }

  const now = Date.now();
  const expiresAt = now + 30 * 60 * 1000;
  const checkoutKey = randomUUID();
  const reservation = await db
    .prepare(
      `UPDATE users
       SET pending_checkout_key = ?, pending_checkout_expires_at = ?
       WHERE id = ?
         AND (pending_checkout_expires_at IS NULL OR pending_checkout_expires_at < ?)
       RETURNING id`,
    )
    .get(checkoutKey, expiresAt, user.id, now);
  if (!reservation) {
    return res.status(409).json({
      error: "Un paiement est déjà ouvert pour ce compte. Termine-le ou réessaie dans 30 minutes.",
    });
  }

  const stripe = await getUncachableStripeClient();
  try {
    const prices = await stripe.prices.list({
      lookup_keys: ["synapse_umft_year1_monthly"],
      active: true,
      limit: 1,
    });
    const price = prices.data[0];
    if (!price) {
      await db
        .prepare("UPDATE users SET pending_checkout_key = NULL, pending_checkout_expires_at = NULL WHERE id = ? AND pending_checkout_key = ?")
        .run(user.id, checkoutKey);
      return res.status(503).json({ error: "L'abonnement est en cours de configuration. Réessaie dans quelques instants." });
    }

    let customerId = user.stripe_customer_id;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { user_id: String(user.id), application: "synapse_umft" },
      });
      customerId = customer.id;
      await db.prepare("UPDATE users SET stripe_customer_id = ? WHERE id = ?").run(customerId, user.id);
    }

    const baseUrl = publicUrl(req);
    const session = await stripe.checkout.sessions.create(
      {
        customer: customerId,
        mode: "subscription",
        line_items: [{ price: price.id, quantity: 1 }],
        client_reference_id: String(user.id),
        metadata: { user_id: String(user.id), plan: "umft_year1" },
        subscription_data: { metadata: { user_id: String(user.id), plan: "umft_year1" } },
        expires_at: Math.floor(expiresAt / 1000),
        success_url: `${baseUrl}/membership?success=1`,
        cancel_url: `${baseUrl}/membership?cancelled=1`,
      },
      { idempotencyKey: `synapse-checkout-${user.id}-${checkoutKey}` },
    );
    if (!session.url) throw new Error("Stripe n'a pas créé de lien de paiement.");
    res.json({ url: session.url });
  } catch (error) {
    await db
      .prepare("UPDATE users SET pending_checkout_key = NULL, pending_checkout_expires_at = NULL WHERE id = ? AND pending_checkout_key = ?")
      .run(user.id, checkoutKey);
    throw error;
  }
});

billingRouter.post("/portal", async (req: AuthedRequest, res) => {
  const availability = getStripeAvailability();
  if (!availability.ready) return res.status(503).json({ error: availability.reason });
  const user = await db.prepare("SELECT stripe_customer_id FROM users WHERE id = ?").get(req.userId);
  if (!user?.stripe_customer_id) return res.status(404).json({ error: "Aucun abonnement Stripe n'est associé à ce compte." });
  const stripe = await getUncachableStripeClient();
  const session = await stripe.billingPortal.sessions.create({
    customer: user.stripe_customer_id,
    return_url: `${publicUrl(req)}/membership`,
  });
  res.json({ url: session.url });
});