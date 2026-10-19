import express, { Router } from "express";
import Stripe from "stripe";
import { db } from "../db.js";
import { sendPaymentConfirmedEmail } from "../email.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
/** Ancien tarif configuré dans Stripe : ne sert plus qu'à retrouver le produit Synapse. */
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;
/** Abonnement mensuel, fixé dans le code pour ne plus dépendre du tarif saisi dans Stripe. */
const MONTHLY_PRICE_CENTS = 1000;
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

let productIdCache: string | null = null;

/** Produit Stripe « Synapse » existant (via l'ancien tarif), pour ne pas en créer un par paiement. */
async function synapseProductId(): Promise<string | null> {
  if (!stripe || !STRIPE_PRICE_ID) return null;
  if (productIdCache) return productIdCache;
  try {
    const price = await stripe.prices.retrieve(STRIPE_PRICE_ID);
    productIdCache = typeof price.product === "string" ? price.product : price.product.id;
  } catch (error) {
    console.error("[stripe] Tarif STRIPE_PRICE_ID illisible, produit créé à la volée.", error);
  }
  return productIdCache;
}

/**
 * Client Stripe enregistré, s'il existe bien avec la clé actuelle. Un client
 * créé en mode test n'existe pas en mode live (« No such customer ») : on
 * l'oublie, et Checkout en créera un nouveau à partir de l'e-mail.
 */
async function usableCustomerId(userId: number, customerId: string | null): Promise<string | null> {
  if (!stripe || !customerId) return null;
  try {
    const customer = await stripe.customers.retrieve(customerId);
    if (!("deleted" in customer && customer.deleted)) return customerId;
  } catch (error) {
    if (!(error instanceof Stripe.errors.StripeInvalidRequestError && error.code === "resource_missing")) throw error;
  }
  await db
    .prepare("UPDATE users SET stripe_customer_id = NULL, stripe_subscription_id = NULL WHERE id = ?")
    .run(userId);
  return null;
}

/** Crée une session Stripe Checkout pour l'abonnement mensuel de l'étudiant connecté. */
billingRouter.post("/checkout", express.json(), authMiddleware, async (req: AuthedRequest, res) => {
  if (!stripe) {
    return res.status(503).json({ error: "Le paiement n'est pas encore configuré." });
  }
  const user = await db
    .prepare("SELECT id, email, stripe_customer_id FROM users WHERE id = ? AND role = 'student'")
    .get(req.userId);
  if (!user) return res.status(404).json({ error: "Étudiant introuvable." });

  const productId = await synapseProductId();
  const customerId = await usableCustomerId(user.id, user.stripe_customer_id);
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    ...(customerId ? { customer: customerId } : { customer_email: user.email }),
    client_reference_id: String(user.id),
    line_items: [
      {
        price_data: {
          currency: "eur",
          unit_amount: MONTHLY_PRICE_CENTS,
          recurring: { interval: "month", interval_count: 1 },
          ...(productId ? { product: productId } : { product_data: { name: "Synapse — abonnement mensuel" } }),
        },
        quantity: 1,
      },
    ],
    success_url: `${appUrl()}/library?checkout=success`,
    cancel_url: `${appUrl()}/pricing?checkout=cancelled`,
  });

  res.json({ url: session.url });
});

/** Lien vers le Customer Portal Stripe (annulation, moyen de paiement) pour l'étudiant connecté. */
billingRouter.post("/portal", express.json(), authMiddleware, async (req: AuthedRequest, res) => {
  if (!stripe) return res.status(503).json({ error: "Le paiement n'est pas encore configuré." });
  const user = await db
    .prepare("SELECT id, stripe_customer_id FROM users WHERE id = ?")
    .get(req.userId);
  const customerId = user ? await usableCustomerId(user.id, user.stripe_customer_id) : null;
  if (!customerId) {
    return res.status(404).json({ error: "Aucun abonnement Stripe associé à ce compte." });
  }
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${appUrl()}/dashboard`,
  });
  res.json({ url: session.url });
});

/**
 * Page « Mon compte » de l'étudiant : profil, abonnement en cours (prochain
 * prélèvement, résiliation programmée) et historique des paiements Stripe.
 */
billingRouter.get("/account", authMiddleware, async (req: AuthedRequest, res) => {
  const user = await db
    .prepare(
      `SELECT id, email, first_name, last_name, track, study_lang, role, created_at,
              trial_status, trial_ends_at, subscription_status, subscription_period_end,
              stripe_customer_id, stripe_subscription_id
       FROM users WHERE id = ?`,
    )
    .get(req.userId);
  if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });

  let subscription: {
    status: string;
    cancelAtPeriodEnd: boolean;
    currentPeriodEnd: number | null;
    amount: number;
    currency: string;
  } | null = null;
  let payments: Array<{
    id: string;
    date: number;
    amount: number;
    currency: string;
    status: string | null;
    periodStart: number | null;
    periodEnd: number | null;
    pdfUrl: string | null;
    url: string | null;
  }> = [];

  if (stripe) {
    const customerId = await usableCustomerId(user.id, user.stripe_customer_id);
    if (customerId && user.stripe_subscription_id) {
      try {
        const sub = await stripe.subscriptions.retrieve(user.stripe_subscription_id);
        const item = sub.items.data[0];
        subscription = {
          status: sub.status,
          cancelAtPeriodEnd: sub.cancel_at_period_end,
          currentPeriodEnd: currentPeriodEndMs(sub),
          amount: item?.price?.unit_amount ?? MONTHLY_PRICE_CENTS,
          currency: item?.price?.currency ?? "eur",
        };
      } catch (error) {
        console.error("[stripe] Abonnement illisible pour la page compte.", error);
      }
    }
    if (customerId) {
      try {
        const invoices = await stripe.invoices.list({ customer: customerId, limit: 24 });
        payments = invoices.data
          .filter((invoice) => invoice.status === "paid" || invoice.status === "open" || invoice.status === "uncollectible")
          .map((invoice) => {
            const line = invoice.lines.data[0];
            return {
              id: invoice.id ?? "",
              date: invoice.created * 1000,
              amount: invoice.status === "paid" ? invoice.amount_paid : invoice.amount_due,
              currency: invoice.currency,
              status: invoice.status,
              periodStart: line?.period?.start ? line.period.start * 1000 : null,
              periodEnd: line?.period?.end ? line.period.end * 1000 : null,
              pdfUrl: invoice.invoice_pdf ?? null,
              url: invoice.hosted_invoice_url ?? null,
            };
          });
      } catch (error) {
        console.error("[stripe] Factures illisibles pour la page compte.", error);
      }
    }
  }

  res.json({
    profile: {
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      track: user.track,
      studyLang: user.study_lang,
      year: 1,
      createdAt: user.created_at,
    },
    access: {
      role: user.role,
      subscriptionStatus: user.subscription_status,
      subscriptionPeriodEnd: user.subscription_period_end,
      trialStatus: user.trial_status,
      trialEndsAt: user.trial_ends_at,
      premium: user.subscription_status === "active" && Boolean(user.stripe_subscription_id),
      formerSubscriber: Boolean(user.stripe_customer_id) && user.subscription_status !== "active",
    },
    subscription,
    payments,
  });
});

/**
 * Résiliation : l'abonnement s'arrête à la fin du mois déjà payé (plus aucun
 * prélèvement ensuite). Quand la période se termine, Stripe envoie
 * customer.subscription.deleted et le webhook coupe l'accès.
 */
async function setCancelAtPeriodEnd(req: AuthedRequest, res: express.Response, cancel: boolean) {
  if (!stripe) return res.status(503).json({ error: "Le paiement n'est pas encore configuré." });
  const user = await db
    .prepare("SELECT stripe_subscription_id FROM users WHERE id = ?")
    .get(req.userId);
  if (!user?.stripe_subscription_id) {
    return res.status(404).json({ error: "Aucun abonnement en cours sur ce compte." });
  }
  const sub = await stripe.subscriptions.update(user.stripe_subscription_id, { cancel_at_period_end: cancel });
  res.json({ cancelAtPeriodEnd: sub.cancel_at_period_end, currentPeriodEnd: currentPeriodEndMs(sub) });
}

billingRouter.post("/cancel", express.json(), authMiddleware, (req: AuthedRequest, res) => setCancelAtPeriodEnd(req, res, true));
billingRouter.post("/resume", express.json(), authMiddleware, (req: AuthedRequest, res) => setCancelAtPeriodEnd(req, res, false));

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
