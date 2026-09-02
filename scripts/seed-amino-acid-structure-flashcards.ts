import "dotenv/config";
import pg from "pg";
import { AMINO_ACIDS, CATEGORY_LABEL_FR } from "../client/src/library-data/amino-acids";

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Traduction anglaise des notes structurales (la source AMINO_ACIDS n'a que note_fr).
const NOTE_EN: Record<string, string> = {
  Gly: "Smallest amino acid — no chiral carbon, gives the backbone great flexibility.",
  Ala: "Simple, small methyl side chain.",
  Val: "Branched-chain amino acid, typical of hydrophobic cores.",
  Leu: "Branched-chain amino acid, very common in α-helices.",
  Ile: "Branched-chain amino acid with a second chiral center at Cβ.",
  Pro: "The only imino acid: the side chain loops back onto the amine nitrogen, rigidifying the backbone and breaking α-helices.",
  Met: "Contains a thioether sulfur; the first amino acid of every polypeptide chain (START codon).",
  Phe: "Aromatic (phenyl) ring, no hydroxyl group.",
  Trp: "The bulkiest of the 20 amino acids; its side chain contains an indole group.",
  Ser: "Hydroxyl group, often phosphorylated (regulation) or part of the serine protease catalytic triad.",
  Thr: "Hydroxyl group on an additional chiral carbon.",
  Tyr: "Aromatic ring with a phenolic hydroxyl group; frequent phosphorylation site.",
  Cys: "Thiol group able to form a disulfide bond (–S–S–) with another cysteine.",
  Asn: "Amide of aspartic acid; uncharged but polar side chain.",
  Gln: "Amide of glutamic acid; uncharged but polar side chain.",
  Asp: "Deprotonated side-chain carboxyl (COO⁻) at physiological pH.",
  Glu: "Deprotonated side-chain carboxyl (COO⁻) at physiological pH.",
  Lys: "Primary amine group, protonated at physiological pH.",
  Arg: "Carries a positively charged guanidinium group.",
  His: "Imidazole group with a pKa near 6, close to physiological pH — frequently plays a catalytic role (readily accepts/donates a proton).",
};

const CATEGORY_LABEL_EN: Record<string, string> = {
  hydrophobe: "Hydrophobic",
  polaire: "Polar, uncharged",
  charge_positif: "Positively charged",
  charge_negatif: "Negatively charged",
};

// Les cartes de structure trouvent leur place naturelle dans le chapitre qui
// introduit deja la composition des acides amines (squelette, zwitterion).
const CHAPTER_ID = 76; // "Composition et structure des protéines (partie 1)"
const START_ORDRE = 100; // au-dela des 6 cartes conceptuelles existantes (1-6)

async function main() {
  const now = Date.now();

  for (let i = 0; i < AMINO_ACIDS.length; i++) {
    const aa = AMINO_ACIDS[i];
    const ordre = START_ORDRE + i;
    const categoryLabelFr = CATEGORY_LABEL_FR[aa.category];
    const categoryLabelEn = CATEGORY_LABEL_EN[aa.category];
    const aromaticFr = aa.aromatic ? " (aromatique)" : "";
    const aromaticEn = aa.aromatic ? " (aromatic)" : "";

    const question_fr = `Quelle est la structure et la classification de la ${aa.name_fr} (${aa.code3}, ${aa.code1}) ?`;
    const question_en = `What is the structure and classification of ${aa.name_en} (${aa.code3}, ${aa.code1})?`;
    const answer_fr = `Chaîne latérale R = ${aa.rGroupFormula} — ${categoryLabelFr}${aromaticFr}. ${aa.note_fr}`;
    const answer_en = `Side chain R = ${aa.rGroupFormula} — ${categoryLabelEn}${aromaticEn}. ${NOTE_EN[aa.code3]}`;
    const visual_key = `amino/${aa.code3}`;

    await pool.query(
      `INSERT INTO library_flashcards
         (chapter_id, ordre, question_fr, question_en, answer_fr, answer_en, visual_key, is_active, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, TRUE, $8)
       ON CONFLICT (chapter_id, ordre) DO UPDATE SET
         question_fr = EXCLUDED.question_fr,
         question_en = EXCLUDED.question_en,
         answer_fr = EXCLUDED.answer_fr,
         answer_en = EXCLUDED.answer_en,
         visual_key = EXCLUDED.visual_key,
         is_active = TRUE`,
      [CHAPTER_ID, ordre, question_fr, question_en, answer_fr, answer_en, visual_key, now],
    );
    console.log(`  [${ordre}] ${aa.name_fr} (${visual_key})`);
  }

  console.log(`${AMINO_ACIDS.length} flashcards de structure inserees/mises a jour dans le chapitre ${CHAPTER_ID}.`);
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
