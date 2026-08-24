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
  // Groupé par section pour ne supprimer/réinsérer que la section concernée : un
  // futur seed des chapitres "laboratoire" ne doit pas effacer les chapitres "cours"
  // déjà en place (et vice versa).
  const sections = new Set(chapters.map((c) => c.section ?? "cours"));
  for (const section of sections) {
    await db
      .prepare("DELETE FROM library_chapters WHERE annee = ? AND semestre = ? AND matiere = ? AND section = ?")
      .run(annee, semestre, matiere, section);
  }

  const now = Date.now();
  for (const chapter of chapters) {
    const section = chapter.section ?? "cours";
    const inserted = await db
      .prepare(
        `INSERT INTO library_chapters
           (annee, semestre, matiere, section, ordre, titre_fr, titre_en, description_fr, description_en, icone, widget_key, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         RETURNING id`,
      )
      .get(
        annee,
        semestre,
        matiere,
        section,
        chapter.ordre,
        chapter.titre_fr,
        chapter.titre_en,
        chapter.description_fr,
        chapter.description_en,
        chapter.icone,
        chapter.widget_key ?? null,
        now,
      );

    let cardOrdre = 0;
    for (const card of chapter.cards) {
      cardOrdre += 1;
      await db
        .prepare(
          `INSERT INTO library_flashcards
             (chapter_id, ordre, question_fr, question_en, answer_fr, answer_en, visual_key, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          inserted.id,
          cardOrdre,
          card.question_fr,
          card.question_en,
          card.answer_fr,
          card.answer_en,
          card.visual_key ?? null,
          now,
        );
    }
  }
}
