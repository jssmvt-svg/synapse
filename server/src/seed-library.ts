import { db } from "./db.js";
import { BIOCHIMIE_S1 } from "./library-content/biochimie-s1.js";

// Amorce le contenu officiel de la bibliothèque (Année 1). Remplace toujours
// le contenu existant d'une matière (delete + réinsertion) plutôt que de
// sauter si déjà présent, pour que les mises à jour du fichier de contenu
// source se répercutent au prochain déploiement.
export async function seedLibrary(): Promise<void> {
  await seedMatiere(1, 1, "Biochimie", BIOCHIMIE_S1);
}

async function seedMatiere(
  annee: number,
  semestre: number,
  matiere: string,
  chapters: typeof BIOCHIMIE_S1,
): Promise<void> {
  await db
    .prepare("DELETE FROM library_chapters WHERE annee = ? AND semestre = ? AND matiere = ?")
    .run(annee, semestre, matiere);

  const now = Date.now();
  for (const chapter of chapters) {
    const inserted = await db
      .prepare(
        `INSERT INTO library_chapters
           (annee, semestre, matiere, ordre, titre_fr, titre_en, description_fr, description_en, icone, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         RETURNING id`,
      )
      .get(
        annee,
        semestre,
        matiere,
        chapter.ordre,
        chapter.titre_fr,
        chapter.titre_en,
        chapter.description_fr,
        chapter.description_en,
        chapter.icone,
        now,
      );

    let cardOrdre = 0;
    for (const card of chapter.cards) {
      cardOrdre += 1;
      await db
        .prepare(
          `INSERT INTO library_flashcards
             (chapter_id, ordre, question_fr, question_en, answer_fr, answer_en, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(inserted.id, cardOrdre, card.question_fr, card.question_en, card.answer_fr, card.answer_en, now);
    }
  }
}
