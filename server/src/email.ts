import { db } from "./db.js";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  idempotencyKey?: string,
): Promise<boolean> {
  if (!RESEND_API_KEY || !EMAIL_FROM) {
    console.warn(`[email] Configuration Resend manquante, email non envoye: "${subject}"`);
    return false;
  }
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
        ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
      },
      body: JSON.stringify({ from: EMAIL_FROM, to, subject, html }),
    });
    if (!response.ok) {
      console.error(`[email] Echec envoi Resend (${response.status}):`, await response.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("[email] Erreur reseau Resend:", error);
    return false;
  }
}

export async function sendEmailOnce(
  dedupeKey: string,
  to: string,
  subject: string,
  html: string,
): Promise<boolean> {
  const now = Date.now();
  const retryBefore = now - 5 * 60 * 1000;
  const reservation = await db
    .prepare(
      `INSERT INTO email_deliveries (dedupe_key, recipient, subject, html, status, attempts, last_attempt_at)
       VALUES (?, ?, ?, ?, 'pending', 1, ?)
       ON CONFLICT (dedupe_key) DO UPDATE
         SET attempts = email_deliveries.attempts + 1,
             last_attempt_at = EXCLUDED.last_attempt_at,
             recipient = EXCLUDED.recipient,
             subject = EXCLUDED.subject,
             html = EXCLUDED.html
       WHERE email_deliveries.status <> 'sent'
         AND (email_deliveries.last_attempt_at IS NULL OR email_deliveries.last_attempt_at < ?)
       RETURNING dedupe_key`,
    )
    .get(dedupeKey, to, subject, html, now, retryBefore);
  if (!reservation) {
    const existing = await db
      .prepare("SELECT status FROM email_deliveries WHERE dedupe_key = ?")
      .get(dedupeKey);
    return existing?.status === "sent";
  }

  const sent = await sendEmail(to, subject, html, dedupeKey);
  if (sent) {
    await db
      .prepare("UPDATE email_deliveries SET status = 'sent', sent_at = ? WHERE dedupe_key = ?")
      .run(Date.now(), dedupeKey);
  }
  return sent;
}

export async function retryPendingEmails(): Promise<void> {
  const retryBefore = Date.now() - 5 * 60 * 1000;
  const pending = await db
    .prepare(
      `SELECT dedupe_key, recipient, subject, html
       FROM email_deliveries
       WHERE status = 'pending' AND html IS NOT NULL
         AND (last_attempt_at IS NULL OR last_attempt_at < ?)
       ORDER BY COALESCE(last_attempt_at, 0) ASC
       LIMIT 20`,
    )
    .all(retryBefore);
  for (const delivery of pending as Array<{ dedupe_key: string; recipient: string; subject: string; html: string }>) {
    await sendEmailOnce(delivery.dedupe_key, delivery.recipient, delivery.subject, delivery.html);
  }
}

export function startEmailDeliveryWorker(): void {
  const timer = setInterval(() => {
    void retryPendingEmails().catch((error) => console.error("[email] Echec de la file d'envoi:", error));
  }, 60_000);
  timer.unref();
  void retryPendingEmails().catch((error) => console.error("[email] Echec de la file d'envoi:", error));
}

function emailShell(title: string, bodyHtml: string): string {
  return `<!doctype html>
<html>
  <body style="font-family: -apple-system, Arial, sans-serif; background: #f8fafc; padding: 24px; color: #0f172a;">
    <div style="max-width: 480px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e2e8f0;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">${title}</h1>
      ${bodyHtml}
      <p style="margin-top: 32px; font-size: 12px; color: #94a3b8;">Synapse - plateforme d'etudes medecine/dentaire</p>
    </div>
  </body>
</html>`;
}

export function welcomeEmailHtml(firstName: string): string {
  const safeFirstName = escapeHtml(firstName);
  return emailShell(
    `Bienvenue sur Synapse, ${safeFirstName} !`,
    `<p style="font-size: 15px; line-height: 1.6;">Ton compte a bien ete cree. Pour acceder aux cours, demande l'ouverture de ton acces depuis ton tableau de bord : nous te confirmerons rapidement l'activation de ton essai gratuit de 48h.</p>`,
  );
}

export function accessGrantedEmailHtml(firstName: string, trialEndsAt: number): string {
  const safeFirstName = escapeHtml(firstName);
  const endDate = new Date(trialEndsAt).toLocaleString("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  });
  return emailShell(
    `Ton acces Synapse est ouvert, ${safeFirstName} !`,
    `<p style="font-size: 15px; line-height: 1.6;">Tu as maintenant acces a la bibliotheque de cours pendant <b>48 heures</b>, jusqu'au <b>${endDate}</b>.</p>
     <p style="font-size: 15px; line-height: 1.6;">Profite-en pour explorer les chapitres et decider si l'abonnement complet te convient.</p>`,
  );
}

export function paymentConfirmedEmailHtml(firstName: string): string {
  const safeFirstName = escapeHtml(firstName);
  return emailShell(
    `Paiement confirme, merci ${safeFirstName} !`,
    `<p style="font-size: 15px; line-height: 1.6;">Ton abonnement Synapse est actif. Tu as desormais un acces complet et continu a la bibliotheque de cours.</p>`,
  );
}
