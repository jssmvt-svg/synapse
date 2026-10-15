import { db } from "./db.js";

type EmailLang = "fr" | "en"; // arabe et italien : e-mails en anglais

function normEmailLang(lang: string | null | undefined): EmailLang {
  return lang === "ar" || lang === "it" || lang === "en" ? "en" : "fr";
}

function appUrl(): string {
  const domain = process.env.REPLIT_DOMAINS?.split(",")[0]?.trim();
  if (domain) return `https://${domain}`;
  return process.env.APP_URL ?? "https://synapse.replit.app";
}

/** Adresse de Jessica (administratrice) — reçoit les notifications internes. */
function adminNotificationEmail(): string {
  return process.env.ADMIN_NOTIFICATION_EMAIL ?? "jssmvt@gmail.com";
}

const FOOTER: Record<EmailLang, string> = {
  fr: "À bientôt sur Synapse 🧠",
  en: "See you soon on Synapse 🧠",
};

interface BrandedEmailOptions {
  greeting: string;
  body: string;
  buttonUrl?: string;
  button?: string;
  note?: string;
}

/**
 * Gabarit HTML de marque, styles 100% inline + layout <table> (Gmail retire
 * les <style>, Outlook a besoin de tables). Repris du gabarit Medbyjes.
 */
function brandedEmailHtml(lang: EmailLang, opts: BrandedEmailOptions): string {
  const button = opts.buttonUrl
    ? `
      <tr><td align="center" style="padding:22px 32px 8px">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td align="center" bgcolor="#2563eb" style="border-radius:10px">
            <a href="${opts.buttonUrl}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;border-radius:10px">${opts.button ?? ""}</a>
          </td>
        </tr></table>
      </td></tr>`
    : "";
  const note = opts.note
    ? `<tr><td style="padding:8px 32px 0;text-align:center;color:#a0aec0;font-size:13px;line-height:1.5">${opts.note}</td></tr>`
    : "";
  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:24px 0;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 28px rgba(37,99,235,.10)">
      <tr><td style="background:#2563eb;padding:24px 32px;color:#ffffff;font-size:20px;font-weight:800;letter-spacing:.3px">🧠 Synapse</td></tr>
      <tr><td style="padding:32px 32px 8px;color:#1a202c;font-size:16px;line-height:1.6">
        <p style="margin:0 0 14px;font-size:18px;font-weight:700">${opts.greeting}</p>
        <p style="margin:0 0 10px;color:#4a5568">${opts.body}</p>
      </td></tr>
      ${button}
      ${note}
      <tr><td style="background:#f4f6fb;padding:18px 32px;text-align:center;color:#718096;font-size:13px">${FOOTER[lang]}</td></tr>
    </table>
  </td></tr>
</table>`;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM ?? "Synapse <noreply@synapse.replit.app>";

/**
 * Bas niveau : un seul essai d'envoi via l'API Resend. `sendEmailOnce` est le
 * point d'entrée normal — il ajoute la déduplication et la remise en file en
 * cas d'échec, ce que ce sender seul ne fait pas.
 */
export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  idempotencyKey?: string,
): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.log("[Email ignoré – RESEND_API_KEY absente]", subject, "->", to);
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
      console.error(`[Email erreur] Echec envoi Resend (${response.status}):`, await response.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("[Email exception] Erreur reseau Resend:", error);
    return false;
  }
}

/**
 * Point d'entrée normal pour tout email transactionnel : réserve un envoi
 * sous `dedupeKey` (évite les doublons si l'appelant est retenté), et laisse
 * `retryPendingEmails` reprendre les envois qui ont échoué.
 */
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

interface RecipientUser {
  id: number;
  email: string;
  langPref?: string | null;
  firstName?: string | null;
}

/**
 * Envoyée à l'inscription : le compte vient d'être créé et l'essai gratuit de
 * 8 jours (semestre 1) est accordé immédiatement (pas de validation manuelle), donc ce mail
 * fait à la fois office de bienvenue et de confirmation d'accès.
 */
export function sendWelcomeEmail(user: RecipientUser, trialEndsAt: number): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const endDate = new Date(trialEndsAt).toLocaleString(lang === "fr" ? "fr-FR" : "en-GB", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const subject = lang === "fr" ? "Bienvenue sur Synapse — tes 8 jours d'essai gratuit commencent 🎉" : "Welcome to Synapse — your 8-day free trial starts now 🎉";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `Bienvenue${hi} ! 👋` : `Welcome${hi}! 👋`,
    body:
      lang === "fr"
        ? `Ton compte Synapse est créé, et tu as dès maintenant 8 jours d'accès gratuit au semestre 1 (cours, QCM, examens blancs, questions ouvertes). Ton accès expirera le ${endDate}.`
        : `Your Synapse account has been created, and you now have 8 days of free access to semester 1 (courses, QCMs, mock exams, open questions). Your access expires on ${endDate}.`,
    buttonUrl: `${appUrl()}/library`,
    button: lang === "fr" ? "Commencer à réviser" : "Start studying",
    note:
      lang === "fr"
        ? "Ensuite, l'abonnement est à 10 €/mois, sans engagement, et donne accès aux deux semestres."
        : "After that, the subscription is €10/month, no commitment, and covers both semesters.",
  });
  void sendEmailOnce(`welcome:${user.id}`, user.email, subject, html);
}

export function sendTrialEndedEmail(user: RecipientUser): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const subject = lang === "fr" ? "Ton essai gratuit est terminé" : "Your free trial has ended";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `Salut${hi}` : `Hi${hi}`,
    body:
      lang === "fr"
        ? "Tes 8 jours d'essai gratuit sur Synapse sont terminés. Pour continuer (et débloquer le semestre 2), l'abonnement est à 10 €/mois, sans engagement."
        : "Your 8-day free trial on Synapse has ended. To keep going (and unlock semester 2), the subscription is €10/month, no commitment.",
    buttonUrl: `${appUrl()}/dashboard`,
    button: lang === "fr" ? "Retourner à mon espace" : "Return to my dashboard",
  });
  void sendEmailOnce(`trial-ended:${user.id}`, user.email, subject, html);
}

/** Octroi manuel par Jessica depuis /admin — en plus de l'octroi automatique à l'inscription. */
export function sendTrialGrantedEmail(user: RecipientUser, trialEndsAt: number): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const endDate = new Date(trialEndsAt).toLocaleString(lang === "fr" ? "fr-FR" : "en-GB", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const subject = lang === "fr" ? "Ton essai gratuit de 8 jours est réactivé 🎁" : "Your 8-day free trial is active again 🎁";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `C'est activé${hi} ! 🎁` : `It's live${hi}! 🎁`,
    body:
      lang === "fr"
        ? `Jessica vient de t'accorder 8 jours d'accès au semestre 1 (cours, QCM, examens blancs, questions ouvertes). Ton accès expirera le ${endDate}.`
        : `Jessica just granted you 8 days of access to semester 1 (courses, QCMs, mock exams, open questions). Your access expires on ${endDate}.`,
    buttonUrl: `${appUrl()}/library`,
    button: lang === "fr" ? "Commencer à réviser" : "Start studying",
  });
  void sendEmailOnce(`trial-granted:${user.id}:${trialEndsAt}`, user.email, subject, html);
}

export function sendPaymentConfirmedEmail(user: RecipientUser, periodEndsAt: number | null): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const endDate = periodEndsAt
    ? new Date(periodEndsAt).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { dateStyle: "long" })
    : null;
  const subject = lang === "fr" ? "Paiement confirmé — accès activé 🎉" : "Payment confirmed — access activated 🎉";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `Merci${hi} ! 🎉` : `Thank you${hi}! 🎉`,
    body:
      lang === "fr"
        ? `Ton paiement a bien été reçu. Ton accès complet à Synapse (cours, QCM, flashcards, examens, duels) est activé${endDate ? ` jusqu'au ${endDate}` : ""}.`
        : `Your payment has been received. Your full access to Synapse (courses, QCMs, flashcards, exams, duels) is now active${endDate ? ` until ${endDate}` : ""}.`,
    buttonUrl: `${appUrl()}/library`,
    button: lang === "fr" ? "Commencer à réviser" : "Start studying",
  });
  void sendEmailOnce(`payment-confirmed:${user.id}:${periodEndsAt ?? "na"}`, user.email, subject, html);
}

/** Construit le contenu de l'email de relance sans l'envoyer — utilisé pour l'aperçu admin. */
export function buildReengagementEmail(user: RecipientUser): { subject: string; html: string } {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const subject =
    lang === "fr"
      ? "Synapse passe à 10 €/mois (au lieu de 15 €) — et il y a du nouveau"
      : "Synapse is now €10/month (down from €15) — and there's new stuff";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `On a pensé à toi${hi} 👋` : `We thought of you${hi} 👋`,
    body:
      lang === "fr"
        ? `Depuis ton essai gratuit, Synapse a bien changé : le prix est passé de 15 € à 10 €/mois, et deux nouveautés sont arrivées. Tu peux maintenant réviser en jouant — des duels en direct contre d'autres étudiants pendant que tu apprends — et de nouveaux schémas ont été ajoutés dans les cours. De quoi prendre de l'avance sur les autres étudiants de ta promo.`
        : `Since your free trial, Synapse has changed a lot: the price dropped from €15 to €10/month, and two new things arrived. You can now study while playing — live duels against other students as you learn — and new diagrams were added to the courses. A real edge over the rest of your class.`,
    buttonUrl: `${appUrl()}/dashboard`,
    button: lang === "fr" ? "Revoir Synapse" : "Take another look",
    note:
      lang === "fr"
        ? "Tu as déjà testé Synapse il y a quelque temps — cette offre ne dure pas indéfiniment."
        : "You already tried Synapse a while back — this offer won't last forever.",
  });
  return { subject, html };
}

/** Relance ciblée : étudiant dont l'essai gratuit est terminé sans abonnement. */
export function sendReengagementEmail(user: RecipientUser): void {
  const { subject, html } = buildReengagementEmail(user);
  void sendEmailOnce(`reengagement:${user.id}`, user.email, subject, html);
}

/** Notification interne à Jessica — utilisée en dehors du flux étudiant (ex : alerte manuelle). */
export function sendAdminNotification(subject: string, body: string): void {
  const html = brandedEmailHtml("fr", { greeting: subject, body, buttonUrl: `${appUrl()}/admin`, button: "Ouvrir l'administration" });
  void sendEmail(adminNotificationEmail(), subject, html);
}
