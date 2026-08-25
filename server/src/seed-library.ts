import { db } from "./db.js";
import { BIOCHIMIE_S1, type LibraryLearningSeed } from "./library-content/biochimie-s1.js";
import { BIOCHIMIE_S2 } from "./library-content/biochimie-s2.js";

// Les entrées sont mises à jour par leur clé stable (chapitre + ordre). Ainsi,
// redémarrer le serveur reflète les mises à jour de contenu sans effacer les
// identifiants et l'activité des étudiants.
export async function seedLibrary(): Promise<void> {
  const startedAt = Date.now();
  console.log("[seed-library] Demarrage du seed de la bibliotheque...");
  await seedMatiere(1, 1, "Biochimie", BIOCHIMIE_S1);
  console.log(`[seed-library] Biochimie S1 seedee (${BIOCHIMIE_S1.length} chapitres).`);
  await seedMatiere(1, 2, "Biochimie", BIOCHIMIE_S2);
  console.log(`[seed-library] Biochimie S2 seedee (${BIOCHIMIE_S2.length} chapitres).`);
  console.log(`[seed-library] Seed termine en ${Math.round((Date.now() - startedAt) / 1000)}s.`);
}

async function seedMatiere(
  annee: number,
  semestre: number,
  matiere: string,
  chapters: typeof BIOCHIMIE_S1,
): Promise<void> {
  const now = Date.now();
  await db
    .prepare(
      "UPDATE library_chapters SET is_active = false WHERE annee = ? AND semestre = ? AND matiere = ?",
    )
    .run(annee, semestre, matiere);

  for (const chapter of chapters) {
    const inserted = await db
      .prepare(
        `INSERT INTO library_chapters
           (annee, semestre, matiere, ordre, titre_fr, titre_en, description_fr, description_en, icone, widget_key, section, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT (annee, semestre, matiere, ordre) DO UPDATE SET
           titre_fr = EXCLUDED.titre_fr,
           titre_en = EXCLUDED.titre_en,
           description_fr = EXCLUDED.description_fr,
           description_en = EXCLUDED.description_en,
           icone = EXCLUDED.icone,
           widget_key = EXCLUDED.widget_key,
           section = EXCLUDED.section,
           is_active = true
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
        chapter.widget_key ?? null,
        chapter.section ?? "cours",
        now,
      );

    await db.prepare("UPDATE library_flashcards SET is_active = false WHERE chapter_id = ?").run(inserted.id);
    for (const [index, card] of chapter.cards.entries()) {
      await db
        .prepare(
          `INSERT INTO library_flashcards
             (chapter_id, ordre, question_fr, question_en, answer_fr, answer_en, visual_key, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)
           ON CONFLICT (chapter_id, ordre) DO UPDATE SET
             question_fr = EXCLUDED.question_fr,
             question_en = EXCLUDED.question_en,
             answer_fr = EXCLUDED.answer_fr,
             answer_en = EXCLUDED.answer_en,
             visual_key = EXCLUDED.visual_key,
             is_active = true`,
        )
        .run(
          inserted.id,
          index + 1,
          card.question_fr,
          card.question_en,
          card.answer_fr,
          card.answer_en,
          card.visual_key ?? null,
          now,
        );
    }

    if (chapter.learning) {
      await seedLearningContent(inserted.id, chapter.learning, now);
    }
  }
}

async function seedLearningContent(
  chapterId: number,
  learning: LibraryLearningSeed,
  now: number,
): Promise<void> {
  await Promise.all([
    db.prepare("UPDATE library_course_resources SET is_active = false WHERE chapter_id = ?").run(chapterId),
    db.prepare("UPDATE library_qcm_questions SET is_active = false WHERE chapter_id = ?").run(chapterId),
    db.prepare("UPDATE library_chapter_exams SET is_active = false WHERE chapter_id = ?").run(chapterId),
  ]);
  await db
    .prepare(
      `UPDATE library_qcm_options SET is_active = false
       WHERE question_id IN (SELECT id FROM library_qcm_questions WHERE chapter_id = ?)`,
    )
    .run(chapterId);

  const resource = await db
    .prepare(
      `INSERT INTO library_course_resources
         (chapter_id, ordre, resource_type, titre_fr, content_fr, source_label, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT (chapter_id, resource_type) DO UPDATE SET
         ordre = EXCLUDED.ordre,
         titre_fr = EXCLUDED.titre_fr,
         content_fr = EXCLUDED.content_fr,
         source_label = EXCLUDED.source_label,
         is_active = true
       RETURNING id`,
    )
    .get(
      chapterId,
      1,
      learning.resource.resource_type,
      learning.resource.titre_fr,
      learning.resource.content_fr,
      learning.resource.source_label,
      now,
    );

  for (const [index, qcm] of learning.qcm.entries()) {
    const ordre = index + 1;
    const seededQuestion = await db
      .prepare(
        `INSERT INTO library_qcm_questions
           (chapter_id, resource_id, ordre, prompt_fr, explanation_fr, multiple_answers, source_label, visual_key, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT (chapter_id, ordre) DO UPDATE SET
           resource_id = EXCLUDED.resource_id,
           prompt_fr = EXCLUDED.prompt_fr,
           explanation_fr = EXCLUDED.explanation_fr,
           multiple_answers = EXCLUDED.multiple_answers,
           source_label = EXCLUDED.source_label,
           visual_key = EXCLUDED.visual_key,
           is_active = true
         RETURNING id`,
      )
      .get(
        chapterId,
        resource.id,
        ordre,
        qcm.prompt_fr,
        qcm.explanation_fr,
        qcm.multiple_answers,
        learning.resource.source_label,
        qcm.visual_key ?? null,
        now,
      );

    for (const option of qcm.options) {
      await db
        .prepare(
          `INSERT INTO library_qcm_options
             (question_id, option_key, label_fr, is_correct, created_at)
           VALUES (?, ?, ?, ?, ?)
           ON CONFLICT (question_id, option_key) DO UPDATE SET
             label_fr = EXCLUDED.label_fr,
             is_correct = EXCLUDED.is_correct,
             is_active = true`,
        )
        .run(seededQuestion.id, option.key, option.label_fr, option.correct, now);
    }
  }

  await db
    .prepare(
      `INSERT INTO library_chapter_exams
         (chapter_id, titre_fr, duration_seconds, question_count, question_orders, source_label, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT (chapter_id, titre_fr) DO UPDATE SET
         duration_seconds = EXCLUDED.duration_seconds,
         question_count = EXCLUDED.question_count,
         question_orders = EXCLUDED.question_orders,
         source_label = EXCLUDED.source_label,
         is_active = true`,
    )
    .run(
      chapterId,
      learning.exam.titre_fr,
      learning.exam.duration_seconds,
      learning.qcm.length,
      JSON.stringify(learning.qcm.map((_question, index) => index + 1)),
      learning.resource.source_label,
      now,
    );
}