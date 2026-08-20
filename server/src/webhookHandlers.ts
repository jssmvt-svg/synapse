import { db } from "./db.js";
import { getStripeSync } from "./stripeClient.js";

function activeStatus(status: string | undefined): boolean {
  return status === "active" || status === "trialing";
}

export class WebhookHandlers {
  static async processWebhook(payload: Buffer, signature: string): Promise<void> {
    const sync = await getStripeSync();
    await sync.processWebhook(payload, signature);

    const event = JSON.parse(payload.toString()) as {
      type?: string;
      created?: number;
      data?: { object?: Record<string, unknown> };
    };
    const object = event.data?.object ?? {};
    const metadata = (object.metadata ?? {}) as Record<string, string>;
    const userId = Number(metadata.user_id);

    if (event.type === "checkout.session.completed" && Number.isInteger(userId)) {
      await db
        .prepare(
          `UPDATE users
           SET stripe_customer_id = COALESCE(?, stripe_customer_id),
               stripe_subscription_id = COALESCE(?, stripe_subscription_id),
               pending_checkout_key = NULL,
               pending_checkout_expires_at = NULL
           WHERE id = ?`,
        )
        .run(
          typeof object.customer === "string" ? object.customer : null,
          typeof object.subscription === "string" ? object.subscription : null,
          userId,
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
      await db
        .prepare(
          `UPDATE users
           SET stripe_customer_id = COALESCE(?, stripe_customer_id),
               stripe_subscription_id = COALESCE(?, stripe_subscription_id),
               subscription_status = ?,
               subscription_period_end = ?,
               stripe_subscription_event_created = ?
           WHERE id = ? AND stripe_subscription_event_created <= ?`,
        )
        .run(
          typeof object.customer === "string" ? object.customer : null,
          typeof object.id === "string" ? object.id : null,
          activeStatus(status) ? status : "inactive",
          periodEnd,
          eventCreatedAt,
          userId,
          eventCreatedAt,
        );
    }
  }
}