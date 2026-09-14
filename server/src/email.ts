const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  if (!RESEND_API_KEY || !EMAIL_FROM) {
    console.warn(`[email] RESEND_API_KEY ou EMAIL_FROM manquant, email non envoye: "${subject}" -> ${to}`);
    return;
  }
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: EMAIL_FROM, to, subject, html }),
    });
    if (!response.ok) {
      console.error(`[email] Echec envoi Resend (${response.status}):`, await response.text());
    }
  } catch (error) {
    console.error("[email] Erreur reseau Resend:", error);
  }
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
  return emailShell(
    `Bienvenue sur Synapse, ${firstName} !`,
    `<p style="font-size: 15px; line-height: 1.6;">Ton compte a bien ete cree. Pour acceder aux cours, demande l'ouverture de ton acces depuis ton tableau de bord : nous te confirmerons rapidement l'activation de ton essai gratuit de 48h.</p>`,
  );
}

export function accessGrantedEmailHtml(firstName: string, trialEndsAt: number): string {
  const endDate = new Date(trialEndsAt).toLocaleString("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  });
  return emailShell(
    `Ton acces Synapse est ouvert, ${firstName} !`,
    `<p style="font-size: 15px; line-height: 1.6;">Tu as maintenant acces a la bibliotheque de cours pendant <b>48 heures</b>, jusqu'au <b>${endDate}</b>.</p>
     <p style="font-size: 15px; line-height: 1.6;">Profite-en pour explorer les chapitres et decider si l'abonnement complet te convient.</p>`,
  );
}

export function paymentConfirmedEmailHtml(firstName: string): string {
  return emailShell(
    `Paiement confirme, merci ${firstName} !`,
    `<p style="font-size: 15px; line-height: 1.6;">Ton abonnement Synapse est actif. Tu as desormais un acces complet et continu a la bibliotheque de cours.</p>`,
  );
}
