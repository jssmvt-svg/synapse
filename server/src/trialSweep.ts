import { db } from "./db.js";
import { sendTrialEndedEmail } from "./email.js";

/**
 * Désactive automatiquement les essais gratuits de 48h arrivés à échéance et
 * prévient l'étudiant par email. Appelé au démarrage puis à intervalle
 * régulier — pas de dépendance à une requête utilisateur pour se déclencher,
 * contrairement à la vérification "paresseuse" faite dans studyAccessPolicy.
 */
export async function runTrialExpirySweep(): Promise<void> {
  const now = Date.now();
  const expired = await db
    .prepare(
      `UPDATE users
       SET trial_status = 'expired', subscription_status = 'inactive'
       WHERE trial_status = 'granted'
         AND subscription_status = 'trialing'
         AND trial_ends_at IS NOT NULL
         AND trial_ends_at <= ?
       RETURNING id, email, lang_pref, first_name`,
    )
    .all(now);

  for (const user of expired as any[]) {
    sendTrialEndedEmail({ email: user.email, langPref: user.lang_pref, firstName: user.first_name });
  }
  if (expired.length > 0) {
    console.log(`[Trial] ${expired.length} essai(s) gratuit(s) expiré(s) et désactivé(s).`);
  }
}

export function startTrialExpirySweep(intervalMs = 5 * 60 * 1000): void {
  void runTrialExpirySweep().catch((error) => console.error("[Trial] Échec du balayage initial.", error));
  setInterval(() => {
    void runTrialExpirySweep().catch((error) => console.error("[Trial] Échec du balayage.", error));
  }, intervalMs);
}
