import express, { Router } from "express";
import Stripe from "stripe";
import { db } from "../db.js";
import { sendPaymentConfirmedEmail } from "../email.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;

function appUrl(): string {
  const domain = process.env.REPLIT_DOMAINS?.split(",")[0]?.trim();
  if (domain) return `https://${domain}`;
  return process.env.APP_URL ?? "https://synapse.replit.app";
}

/** Période de facturation en cours (sur l'item, pas sur l'abonnement — mode de facturation flexible). */
function currentPeriodEndMs(subscription: Stripe.Subscription): number | null {
  const seconds = subscription.items.data[0]?.current_period_end;
  return seconds ? seconds * 1000 : null;
}

export const billingRouter = Router();

/** Crée une session Stripe Checkout pour l'abonnement semestriel de l'étudiant connecté. */
billingRouter.post("/checkout", express.json(), authMiddleware, async (req: AuthedRequest, res) => {
  if (!stripe || !STRIPE_PRICE_ID) {
    return res.status(503).json({ error: "Le paiement n'est pas encore configuré." });
  }
  const user = await db
    .prepare("SELECT id, email, stripe_customer_id FROM users WHERE id = ? AND role = 'student'")
    .get(req.userId);
  if (!user) return res.status(404).json({ error: "Étudiant introuvable." });

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    ...(user.stripe_customer_id
      ? { customer: user.stripe_customer_id }
      : { customer_email: user.email }),
    client_reference_id: String(user.id),
    line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
    success_url: `${appUrl()}/library?checkout=success`,
    cancel_url: `${appUrl()}/pricing?checkout=cancelled`,
  });

  res.json({ url: session.url });
});

/** Lien vers le Customer Portal Stripe (annulation, moyen de paiement) pour l'étudiant connecté. */
billingRouter.post("/portal", express.json(), authMiddleware, async (req: AuthedRequest, res) => {
  if (!stripe) return res.status(503).json({ error: "Le paiement n'est pas encore configuré." });
  const user = await db
    .prepare("SELECT stripe_customer_id FROM users WHERE id = ?")
    .get(req.userId);
  if (!user?.stripe_customer_id) {
    return res.status(404).json({ error: "Aucun abonnement Stripe associé à ce compte." });
  }
  const session = await stripe.billingPortal.sessions.create({
    customer: user.stripe_customer_id,
    return_url: `${appUrl()}/dashboard`,
  });
  res.json({ url: session.url });
});

/**
 * Webhook Stripe : source de vérité pour l'activation/désactivation de l'accès.
 * Monté avec un parseur de corps brut (express.raw) AVANT express.json() dans
 * index.ts — la vérification de signature a besoin du corps non modifié.
 */
billingRouter.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  if (!stripe || !STRIPE_WEBHOOK_SECRET) return res.status(503).end();

  let event: Stripe.Event;
  try {
    const signature = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(req.body as Buffer, signature as string, STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    console.error("[stripe] Signature de webhook invalide.", error);
    return res.status(400).send("Signature invalide");
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.payment_status !== "paid") break;
      const userId = Number(session.client_reference_id);
      const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id;
      const subscriptionId =
        typeof session.subscription === "string" ? session.subscription : session.subscription?.id;
      if (!Number.isInteger(userId) || !customerId) break;

      const subscription = subscriptionId ? await stripe.subscriptions.retrieve(subscriptionId) : null;
      const periodEnd = subscription ? currentPeriodEndMs(subscription) : null;

      const updated = await db
        .prepare(
          `UPDATE users
           SET stripe_customer_id = ?, stripe_subscription_id = ?,
               subscription_status = 'active', subscription_period_end = ?,
               trial_status = CASE WHEN trial_status = 'granted' THEN 'expired' ELSE trial_status END
           WHERE id = ?
           RETURNING id, email, lang_pref, first_name`,
        )
        .get(customerId, subscriptionId ?? null, periodEnd, userId);
      if (updated) sendPaymentConfirmedEmail(
        { id: updated.id, email: updated.email, langPref: updated.lang_pref, firstName: updated.first_name },
        periodEnd,
      );
      break;
    }
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;
      const status = subscription.status === "active" ? "active" : subscription.status === "past_due" ? "past_due" : "inactive";
      await db
        .prepare("UPDATE users SET subscription_status = ?, subscription_period_end = ? WHERE stripe_customer_id = ?")
        .run(status, currentPeriodEndMs(subscription), customerId);
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;
      await db
        .prepare(
          "UPDATE users SET subscription_status = 'inactive', stripe_subscription_id = NULL WHERE stripe_customer_id = ?",
        )
        .run(customerId);
      break;
    }
    case "invoice.payment_failed": {
      // Stripe Smart Retries relance automatiquement ; on se contente de tracer l'échec ici.
      const invoice = event.data.object as Stripe.Invoice;
      console.warn(`[stripe] Échec de paiement pour la facture ${invoice.id} (client ${String(invoice.customer)}).`);
      break;
    }
    default:
      break;
  }

  res.json({ received: true });
});
