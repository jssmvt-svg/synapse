import { Resend } from "resend";

type EmailLang = "fr" | "en";

function normEmailLang(lang: string | null | undefined): EmailLang {
  return lang === "en" ? "en" : "fr";
}

function appUrl(): string {
  const domain = process.env.REPLIT_DOMAINS?.split(",")[0]?.trim();
  if (domain) return `https://${domain}`;
  return process.env.APP_URL ?? "https://synapse.replit.app";
}

function fromAddress(): string {
  return process.env.EMAIL_FROM ?? "Synapse <noreply@synapse.replit.app>";
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

function sendEmail(to: string, subject: string, html: string): void {
  if (!process.env.RESEND_API_KEY) {
    console.log("[Email ignoré – RESEND_API_KEY absente]", subject, "->", to);
    return;
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  resend.emails
    .send({ from: fromAddress(), to, subject, html })
    // Le SDK Resend ne rejette PAS sur erreur API : il résout avec { data, error }.
    // Il faut inspecter `error` explicitement, sinon un rejet passe inaperçu.
    .then(({ data, error }) => {
      if (error) console.error("[Email erreur]", JSON.stringify(error), "->", to);
      else console.log("[Email envoyé]", subject, "->", to, data?.id ? `(id ${data.id})` : "");
    })
    .catch((err) => console.error("[Email exception]", err instanceof Error ? err.message : err));
}

interface RecipientUser {
  email: string;
  langPref?: string | null;
  firstName?: string | null;
}

export function sendWelcomeEmail(user: RecipientUser): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const subject = lang === "fr" ? "Bienvenue sur Synapse 🎉" : "Welcome to Synapse 🎉";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `Bienvenue${hi} ! 👋` : `Welcome${hi}! 👋`,
    body:
      lang === "fr"
        ? "Ton compte Synapse est créé. Tu peux dès maintenant demander tes 48 heures d'accès gratuit depuis la page « Adhésion » : Jessica valide chaque demande manuellement et tu recevras un email dès que l'accès est activé."
        : "Your Synapse account has been created. You can now request your 48-hour free trial from the “Membership” page — Jessica reviews each request manually and you'll get an email as soon as your access is activated.",
    buttonUrl: `${appUrl()}/membership`,
    button: lang === "fr" ? "Demander mon accès gratuit" : "Request free access",
  });
  sendEmail(user.email, subject, html);
}

export function sendTrialRequestedEmailToAdmin(user: RecipientUser & { lastName?: string | null; track?: string | null }): void {
  const nom = [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email;
  const filiere = user.track === "dentaire" ? "Dentaire" : user.track === "medecine" ? "Médecine" : "—";
  const html = brandedEmailHtml("fr", {
    greeting: "Nouvelle demande d'essai gratuit",
    body: `${nom} (${user.email}, filière : ${filiere}) vient de demander ses 48 heures d'accès gratuit à Synapse. Rends-toi dans la section admin pour valider ou refuser la demande.`,
    buttonUrl: `${appUrl()}/admin`,
    button: "Ouvrir l'administration",
  });
  sendEmail(adminNotificationEmail(), "🔔 Demande d'essai gratuit — Synapse", html);
}

export function sendTrialGrantedEmail(user: RecipientUser, trialEndsAt: number): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const endDate = new Date(trialEndsAt).toLocaleString(lang === "fr" ? "fr-FR" : "en-GB", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const subject = lang === "fr" ? "Ton accès gratuit de 48h est activé 🎁" : "Your 48h free access is live 🎁";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `C'est activé${hi} ! 🎁` : `It's live${hi}! 🎁`,
    body:
      lang === "fr"
        ? `Jessica vient de t'accorder 48 heures d'accès gratuit à toute la première année (cours, QCM, flashcards, examens). Ton accès expirera le ${endDate}.`
        : `Jessica just granted you 48 hours of free access to all of year one (courses, QCMs, flashcards, exams). Your access expires on ${endDate}.`,
    buttonUrl: `${appUrl()}/library`,
    button: lang === "fr" ? "Commencer à réviser" : "Start studying",
    note:
      lang === "fr"
        ? "À la fin de ton essai, tu pourras t'abonner pour 24,99 € / mois si tu veux continuer."
        : "At the end of your trial, you can subscribe for €24.99 / month if you'd like to continue.",
  });
  sendEmail(user.email, subject, html);
}

export function sendTrialDeniedEmail(user: RecipientUser): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const subject = lang === "fr" ? "À propos de ta demande d'essai" : "About your trial request";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `Salut${hi}` : `Hi${hi}`,
    body:
      lang === "fr"
        ? "Ta demande d'accès gratuit n'a pas pu être validée pour le moment. Tu peux t'abonner directement pour 24,99 € / mois, ou recontacter Jessica pour en discuter."
        : "Your free-access request could not be approved right now. You can subscribe directly for €24.99 / month, or reach out to Jessica about it.",
    buttonUrl: `${appUrl()}/membership`,
    button: lang === "fr" ? "Voir l'abonnement" : "See membership",
  });
  sendEmail(user.email, subject, html);
}

export function sendTrialEndedEmail(user: RecipientUser): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const subject = lang === "fr" ? "Ton essai gratuit est terminé" : "Your free trial has ended";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `Salut${hi}` : `Hi${hi}`,
    body:
      lang === "fr"
        ? "Tes 48 heures d'accès gratuit à Synapse sont terminées. Pour continuer à profiter des cours, QCM et examens de première année, tu peux t'abonner pour 24,99 € / mois."
        : "Your 48-hour free access to Synapse has ended. To keep enjoying year-one courses, QCMs, and exams, you can subscribe for €24.99 / month.",
    buttonUrl: `${appUrl()}/membership`,
    button: lang === "fr" ? "S'abonner maintenant" : "Subscribe now",
  });
  sendEmail(user.email, subject, html);
}

export function sendPaymentConfirmedEmail(user: RecipientUser, amountLabel: string): void {
  const lang = normEmailLang(user.langPref);
  const hi = user.firstName ? ` ${user.firstName}` : "";
  const subject = lang === "fr" ? "Ton paiement est confirmé ✅" : "Your payment is confirmed ✅";
  const html = brandedEmailHtml(lang, {
    greeting: lang === "fr" ? `Merci${hi} ! 🎉` : `Thank you${hi}! 🎉`,
    body:
      lang === "fr"
        ? `Ton paiement de ${amountLabel} a bien été reçu et ton abonnement Synapse est actif. Tu as désormais accès à toute la première année : cours, QCM, flashcards et examens.`
        : `Your payment of ${amountLabel} has been received and your Synapse membership is active. You now have access to all of year one: courses, QCMs, flashcards, and exams.`,
    buttonUrl: `${appUrl()}/library`,
    button: lang === "fr" ? "Accéder à la bibliothèque" : "Go to the library",
  });
  sendEmail(user.email, subject, html);
}
