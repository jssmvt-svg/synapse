import { Router } from "express";
import { db } from "../db.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

export const libraryRouter = Router();

libraryRouter.use(authMiddleware);

const KNOWN_STRUCTURE = [{ annee: 1, semestres: [1, 2] }];

function selectedKeys(value: unknown): string[] | null {
  if (!Array.isArray(value) || value.some((key) => typeof key !== "string")) return null;
  return [...new Set(value)];
}

async function getChapter(chapterId: number) {
  return db
    .prepare(
      `SELECT id, annee, semestre, matiere, ordre, titre_fr, titre_en,
              description_fr, description_en, icone
       FROM library_chapters WHERE id = ? AND is_active = true`,
    )
    .get(chapterId);
}

async function getProgress(userId: number, chapterId: number) {
  const [resources, cards, qcm, exams] = await Promise.all([
    db
      .prepare(
        `SELECT resource_id, completed_at, updated_at
         FROM student_course_progress WHERE user_id = ? AND chapter_id = ?`,
      )
      .all(userId, chapterId),
    db
      .prepare(
        `SELECT flashcard_id, mastery, review_count, last_reviewed_at
         FROM student_flashcard_mastery WHERE user_id = ? AND chapter_id = ?`,
      )
      .all(userId, chapterId),
    db
      .prepare(
        `SELECT question_id, selected_option_keys, is_correct, score, attempted_at
         FROM student_qcm_attempts WHERE user_id = ? AND chapter_id = ?
         ORDER BY attempted_at DESC`,
      )
      .all(userId, chapterId),
    db
      .prepare(
        `SELECT id, exam_id, score, started_at, completed_at
         FROM student_exam_attempts WHERE user_id = ? AND chapter_id = ?
         ORDER BY completed_at DESC`,
      )
      .all(userId, chapterId),
  ]);

  return { resources, flashcards: cards, qcmAttempts: qcm, examAttempts: exams };
}

libraryRouter.get("/", async (_req: AuthedRequest, res) => {
  const chapters = await db
    .prepare(
      `SELECT id, annee, semestre, matiere, ordre, titre_fr, titre_en,
              description_fr, description_en, icone
       FROM library_chapters WHERE is_active = true
       ORDER BY annee ASC, semestre ASC, matiere ASC, ordre ASC`,
    )
    .all();

  const tree = KNOWN_STRUCTURE.map((annee) => ({
    annee: annee.annee,
    semestres: annee.semestres.map((semestre) => {
      const chaptersForSemestre = chapters.filter(
        (chapter: any) => chapter.annee === annee.annee && chapter.semestre === semestre,
      );
      const matieres = new Map<string, any[]>();
      for (const chapter of chaptersForSemestre) {
        if (!matieres.has(chapter.matiere)) matieres.set(chapter.matiere, []);
        matieres.get(chapter.matiere)!.push(chapter);
      }
      return {
        semestre,
        matieres: Array.from(matieres.entries()).map(([matiere, chapitres]) => ({
          matiere,
          chapitres,
        })),
      };
    }),
  }));

  res.json(tree);
});

libraryRouter.get("/chapters/:id", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  const chapter = await getChapter(chapterId);
  if (!chapter) return res.status(404).json({ error: "Chapitre introuvable" });

  const [resources, flashcards, qcm, exams, progress] = await Promise.all([
    db
      .prepare(
        `SELECT id, ordre, resource_type, titre_fr, titre_en, content_fr, content_en, source_label
         FROM library_course_resources WHERE chapter_id = ? AND is_active = true ORDER BY ordre ASC`,
      )
      .all(chapterId),
    db
      .prepare(
        `SELECT id, ordre, question_fr, question_en, answer_fr, answer_en
         FROM library_flashcards WHERE chapter_id = ? AND is_active = true ORDER BY ordre ASC`,
      )
      .all(chapterId),
    db
      .prepare(
        `SELECT q.id, q.ordre, q.resource_id, q.prompt_fr, q.prompt_en, q.explanation_fr,
                q.explanation_en, q.multiple_answers, q.source_label,
                COALESCE(
                  json_agg(
                    json_build_object(
                      'id', o.id, 'key', o.option_key, 'label_fr', o.label_fr,
                      'label_en', o.label_en
                    ) ORDER BY o.option_key
                  ) FILTER (WHERE o.id IS NOT NULL),
                  '[]'::json
                ) AS options
         FROM library_qcm_questions q
         LEFT JOIN library_qcm_options o ON o.question_id = q.id AND o.is_active = true
         WHERE q.chapter_id = ? AND q.is_active = true
         GROUP BY q.id
         ORDER BY q.ordre ASC`,
      )
      .all(chapterId),
    db
      .prepare(
        `SELECT id, titre_fr, titre_en, duration_seconds, question_count, question_orders, source_label
         FROM library_chapter_exams WHERE chapter_id = ? AND is_active = true ORDER BY id ASC`,
      )
      .all(chapterId),
    getProgress(req.userId!, chapterId),
  ]);

  res.json({ chapter, resources, flashcards, qcm, exams, progress });
});

libraryRouter.get("/chapters/:id/flashcards", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  const chapter = await getChapter(chapterId);
  if (!chapter) return res.status(404).json({ error: "Chapitre introuvable" });

  const cards = await db
    .prepare(
      `SELECT id, question_fr, question_en, answer_fr, answer_en
       FROM library_flashcards WHERE chapter_id = ? AND is_active = true ORDER BY ordre ASC`,
    )
    .all(chapterId);
  res.json(cards);
});

libraryRouter.post("/chapters/:id/course-progress", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  const resourceId = Number(req.body?.resourceId);
  const completed = Boolean(req.body?.completed);
  const resource = await db
    .prepare("SELECT id FROM library_course_resources WHERE id = ? AND chapter_id = ? AND is_active = true")
    .get(resourceId, chapterId);
  if (!resource) return res.status(404).json({ error: "Ressource introuvable pour ce chapitre" });

  const now = Date.now();
  await db
    .prepare(
      `INSERT INTO student_course_progress (user_id, chapter_id, resource_id, completed_at, updated_at)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT (user_id, resource_id) DO UPDATE SET
         completed_at = EXCLUDED.completed_at,
         updated_at = EXCLUDED.updated_at`,
    )
    .run(req.userId, chapterId, resourceId, completed ? now : null, now);
  res.json({ resourceId, completed, updatedAt: now });
});

libraryRouter.post("/chapters/:id/flashcard-mastery", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  const flashcardId = Number(req.body?.flashcardId);
  const mastery = Number(req.body?.mastery);
  if (!Number.isInteger(mastery) || mastery < 0 || mastery > 5) {
    return res.status(400).json({ error: "mastery doit être un entier entre 0 et 5" });
  }

  const card = await db
    .prepare("SELECT id FROM library_flashcards WHERE id = ? AND chapter_id = ? AND is_active = true")
    .get(flashcardId, chapterId);
  if (!card) return res.status(404).json({ error: "Flashcard introuvable pour ce chapitre" });

  const now = Date.now();
  await db
    .prepare(
      `INSERT INTO student_flashcard_mastery
         (user_id, chapter_id, flashcard_id, mastery, review_count, last_reviewed_at)
       VALUES (?, ?, ?, ?, 1, ?)
       ON CONFLICT (user_id, flashcard_id) DO UPDATE SET
         mastery = EXCLUDED.mastery,
         review_count = student_flashcard_mastery.review_count + 1,
         last_reviewed_at = EXCLUDED.last_reviewed_at`,
    )
    .run(req.userId, chapterId, flashcardId, mastery, now);
  res.json({ flashcardId, mastery, reviewedAt: now });
});

libraryRouter.post("/chapters/:id/qcm-attempts", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  const questionId = Number(req.body?.questionId);
  const answers = selectedKeys(req.body?.selectedOptionKeys);
  if (!answers) return res.status(400).json({ error: "selectedOptionKeys doit être une liste de lettres" });

  const question = await db
    .prepare(
      `SELECT id, explanation_fr, explanation_en
       FROM library_qcm_questions WHERE id = ? AND chapter_id = ? AND is_active = true`,
    )
    .get(questionId, chapterId);
  if (!question) return res.status(404).json({ error: "QCM introuvable pour ce chapitre" });

  const correctOptions = await db
    .prepare(
      `SELECT option_key, is_correct FROM library_qcm_options
       WHERE question_id = ? AND is_active = true ORDER BY option_key ASC`,
    )
    .all(questionId);
  const valid = correctOptions.map((option: any) => option.option_key);
  if (answers.some((key) => !valid.includes(key))) {
    return res.status(400).json({ error: "Une réponse ne correspond pas à une option de ce QCM" });
  }
  const correct = correctOptions.filter((option: any) => option.is_correct).map((option: any) => option.option_key);
  const isCorrect =
    correct.length === answers.length && correct.every((option: string) => answers.includes(option));
  const score = isCorrect ? 100 : 0;
  const now = Date.now();

  const attempt = await db
    .prepare(
      `INSERT INTO student_qcm_attempts
         (user_id, chapter_id, question_id, selected_option_keys, is_correct, score, attempted_at)
       VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING id`,
    )
    .get(req.userId, chapterId, questionId, JSON.stringify(answers), isCorrect, score, now);
  res.status(201).json({
    id: attempt.id,
    isCorrect,
    score,
    correction: {
      correctOptionKeys: correct,
      explanation_fr: question.explanation_fr,
      explanation_en: question.explanation_en,
    },
    attemptedAt: now,
  });
});

libraryRouter.post("/chapters/:id/exams/:examId/start", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  const examId = Number(req.params.examId);
  const exam = await db
    .prepare(
      `SELECT id, duration_seconds, question_orders
       FROM library_chapter_exams WHERE id = ? AND chapter_id = ? AND is_active = true`,
    )
    .get(examId, chapterId);
  if (!exam) return res.status(404).json({ error: "Examen introuvable pour ce chapitre" });

  const startedAt = Date.now();
  const expiresAt = startedAt + exam.duration_seconds * 1000;
  const session = await db
    .prepare(
      `INSERT INTO student_exam_sessions
         (user_id, chapter_id, exam_id, started_at, expires_at)
       VALUES (?, ?, ?, ?, ?) RETURNING id`,
    )
    .get(req.userId, chapterId, examId, startedAt, expiresAt);
  res.status(201).json({
    sessionId: session.id,
    startedAt,
    expiresAt,
    questionOrders: JSON.parse(exam.question_orders),
  });
});

libraryRouter.post("/chapters/:id/exams/:examId/attempts", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  const examId = Number(req.params.examId);
  const sessionId = Number(req.body?.sessionId);
  const answers = req.body?.answers;
  if (!Number.isInteger(sessionId) || !answers || typeof answers !== "object" || Array.isArray(answers)) {
    return res.status(400).json({ error: "sessionId et answers sont requis" });
  }

  const now = Date.now();
  const session = await db
    .prepare(
      `SELECT id, started_at, expires_at
       FROM student_exam_sessions
       WHERE id = ? AND user_id = ? AND chapter_id = ? AND exam_id = ? AND submitted_at IS NULL`,
    )
    .get(sessionId, req.userId, chapterId, examId);
  if (!session) return res.status(404).json({ error: "Session d'examen introuvable ou déjà remise" });
  if (now > session.expires_at) return res.status(400).json({ error: "Temps imparti dépassé" });

  const exam = await db
    .prepare(
      `SELECT id, question_orders FROM library_chapter_exams
       WHERE id = ? AND chapter_id = ? AND is_active = true`,
    )
    .get(examId, chapterId);
  if (!exam) return res.status(404).json({ error: "Examen introuvable pour ce chapitre" });

  const questions = await db
    .prepare(
      `SELECT q.id, q.ordre, array_agg(o.option_key ORDER BY o.option_key) AS valid,
        array_agg(o.option_key ORDER BY o.option_key)
       FILTER (WHERE o.is_correct = true) AS correct
       FROM library_qcm_questions q
        LEFT JOIN library_qcm_options o ON o.question_id = q.id AND o.is_active = true
        WHERE q.chapter_id = ? AND q.is_active = true
          AND q.ordre IN (SELECT json_array_elements_text(?::json)::int)
       GROUP BY q.id ORDER BY q.ordre ASC`,
    )
    .all(chapterId, exam.question_orders);

  const allowedQuestionIds = new Set((questions as any[]).map((question) => String(question.id)));
  if (Object.keys(answers).some((key) => !allowedQuestionIds.has(key))) {
    return res.status(400).json({ error: "Une réponse cible une question hors de cet examen" });
  }

  let correctCount = 0;
  for (const item of questions as any[]) {
    const selected = selectedKeys(answers[item.id]);
    if (!selected || selected.some((key) => !(item.valid ?? []).includes(key))) {
      return res.status(400).json({ error: "Une réponse ne correspond pas aux options de cet examen" });
    }
    const correct = item.correct ?? [];
    if (selected.length === correct.length && correct.every((key: string) => selected.includes(key))) {
      correctCount += 1;
    }
  }
  const score = questions.length ? (correctCount / questions.length) * 100 : 0;
  const locked = await db
    .prepare(
      `UPDATE student_exam_sessions SET submitted_at = ?
       WHERE id = ? AND submitted_at IS NULL`,
    )
    .run(now, sessionId);
  if (locked.rowCount !== 1) return res.status(409).json({ error: "Cette session a déjà été remise" });

  const attempt = await db
    .prepare(
      `INSERT INTO student_exam_attempts
         (user_id, chapter_id, exam_id, answers_json, score, started_at, completed_at)
       VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING id`,
    )
    .get(req.userId, chapterId, examId, JSON.stringify(answers), score, session.started_at, now);
  res.status(201).json({ id: attempt.id, score, correctCount, questionCount: questions.length, completedAt: now });
});