import { db } from "../server/src/db.js";

/**
 * Avant la normalisation des emails (voir server/src/validation.ts), l'inscription
 * et la connexion comparaient l'email tel quel : "Marie@Gmail.com" et
 * "marie@gmail.com" pouvaient donc coexister comme deux comptes distincts.
 * La migration au démarrage du serveur uniformise automatiquement les emails
 * qui ne sont pas en conflit, mais laisse volontairement intactes les paires
 * déjà en collision — ce script les liste pour une décision humaine (laquelle
 * garder, avec quel deck/progression) plutôt qu'une fusion automatique.
 */
async function findDuplicateAccounts(): Promise<void> {
  await db.init();
  const duplicates = await db
    .prepare(
      `SELECT id, email, first_name, last_name, trial_status, trial_ends_at,
              subscription_status, created_at
       FROM users
       WHERE LOWER(TRIM(email)) IN (
         SELECT LOWER(TRIM(email)) FROM users GROUP BY LOWER(TRIM(email)) HAVING COUNT(*) > 1
       )
       ORDER BY LOWER(TRIM(email)), created_at`,
    )
    .all();

  if (duplicates.length === 0) {
    console.log("Aucun compte en double détecté.");
    return;
  }

  console.log(`${duplicates.length} compte(s) impliqué(s) dans une adresse en double :\n`);
  for (const u of duplicates as any[]) {
    console.log(
      `#${u.id} | ${u.email} | ${u.first_name} ${u.last_name} | essai: ${u.trial_status}` +
        (u.trial_ends_at ? ` (fin ${new Date(Number(u.trial_ends_at)).toLocaleString("fr-FR")})` : "") +
        ` | abonnement: ${u.subscription_status} | créé le ${new Date(Number(u.created_at)).toLocaleString("fr-FR")}`,
    );
  }
  console.log(
    "\nCompare les lignes ci-dessus pour chaque email en double, garde le compte à conserver " +
      "et supprime ou renomme l'autre depuis Supabase avant de granter un accès.",
  );
}

findDuplicateAccounts().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
