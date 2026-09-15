import { db } from "./db.js";
import { sendEmailOnce, paymentConfirmedEmailHtml } from "./email.js";
import { getStripeSync } from "./stripeClient.js";

function activeStatus(status: string | undefined): boolean {
  return status === "active" || status === "trialing";
}

export class WebhookHandlers {
  static async processWebhook(payload: Buffer, signature: string): Promise<void> {
    const sync = await getStripeSync();
    await sync.processWebhook(payload, signature);

    const event = JSON.parse(payload.toString()) as {
      id?: string;
      type?: string;
      created?: number;
      data?: { object?: Record<string, unknown> };
    };
    const object = event.data?.object ?? {};
    const metadata = (object.metadata ?? {}) as Record<string, string>;
    const userId = Number(metadata.user_id);

    if (event.type === "checkout.session.completed" && Number.isInteger(userId)) {
      if (String(object.client_reference_id ?? "") !== String(userId)) {
        throw new Error("La reference client Stripe ne correspond pas au compte.");
      }
      const customerId = typeof object.customer === "string" ? object.customer : null;
      await db
        .prepare(
          `UPDATE users
           SET stripe_customer_id = COALESCE(?, stripe_customer_id),
               stripe_subscription_id = COALESCE(?, stripe_subscription_id),
               pending_checkout_key = NULL,
               pending_checkout_expires_at = NULL
           WHERE id = ? AND (stripe_customer_id IS NULL OR stripe_customer_id = ?)`,
        )
        .run(
          customerId,
          typeof object.subscription === "string" ? object.subscription : null,
          userId,
          customerId,
        );
    }

    if (
      (event.type === "customer.subscription.created" ||
        event.type === "customer.subscription.updated" ||
        event.type === "customer.subscription.deleted") &&
      Number.isInteger(userId)
    ) {
      const status = typeof object.status === "string" ? object.status : "inactive";
      const periodEnd = typeof object.current_period_end === "number"
        ? object.current_period_end * 1000
        : null;
      const eventCreatedAt = typeof event.created === "number" ? event.created * 1000 : Date.now();
      const customerId = typeof object.customer === "string" ? object.customer : null;
      const previous = await db
        .prepare(
          `SELECT subscription_status FROM users
           WHERE id = ? AND (stripe_customer_id IS NULL OR stripe_customer_id = ?)`,
        )
        .get(userId, customerId);
      if (!previous) throw new Error("Le client Stripe ne correspond pas au compte Synapse.");
      const updated = await db
        .prepare(
          `UPDATE users
           SET stripe_customer_id = COALESCE(?, stripe_customer_id),
               stripe_subscription_id = COALESCE(?, stripe_subscription_id),
               subscription_status = ?,
               subscription_period_end = ?,
               stripe_subscription_event_created = ?
            WHERE id = ? AND stripe_subscription_event_created <= ?
              AND (stripe_customer_id IS NULL OR stripe_customer_id = ?)
           RETURNING id, email, first_name`,
        )
        .get(
          customerId,
          typeof object.id === "string" ? object.id : null,
          activeStatus(status) ? status : "inactive",
          periodEnd,
          eventCreatedAt,
          userId,
          eventCreatedAt,
          customerId,
        );

      if (updated && status === "active") {
        const subscriptionId = typeof object.id === "string" ? object.id : event.id ?? String(userId);
        const sent = await sendEmailOnce(
          `payment-confirmed:${subscriptionId}`,
          updated.email,
          "Paiement confirme - Synapse",
          paymentConfirmedEmailHtml(updated.first_name || ""),
        );
        if (!sent) throw new Error("L'email de confirmation Stripe est en attente de renvoi.");
      }
    }
  }
}