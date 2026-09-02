import "dotenv/config";
import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Chapitres deja entierement rediges (cours + QCM + examen) en base mais
// laisses inactifs -- probablement un oubli d'activation lors du seed initial.
// On les active tous : chaque chapitre inactif possede au moins un cours,
// un jeu de QCM et un examen (verifie via scripts/inspect-chapter.ts).
async function main() {
  const result = await pool.query(`
    UPDATE library_chapters SET is_active = true WHERE is_active = false
    RETURNING annee, semestre, matiere, ordre, titre_fr
  `);
  console.log(`${result.rowCount} chapitres actives :`);
  for (const r of result.rows) {
    console.log(`  A${r.annee}S${r.semestre} ${r.matiere} [${r.ordre}] ${r.titre_fr}`);
  }
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
