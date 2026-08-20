import { randomUUID } from "node:crypto";
import type { Response } from "express";
import { Router } from "express";
import { db } from "../db.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";
import {
  buildFlashcardPrompt,
  frontKey,
  parseFlashcardImport,
  type DeckNotion,
  type ParsedPersonalCard,
} from "../personalDeck.js";
import { canOpenStudyContent } from "../studyAccessPolicy.js";

export const personalDeckRouter = Router();
personalDeckRouter.use(authMiddleware);

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.replace(/\*\*/g, "").replace(/\s+/g, " ").trim() : "";
}

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

async function requireChapterAccess(req: AuthedRequest, res: Response, chapterId: number) {
  if (!Number.isInteger(chapterId) || chapterId < 1) {
    res.status(404).json({ error: "Chapitre introuvable." });
    return null;
  }
  const chapter = await db
    .prepare(
      `SELECT id, annee, semestre, matiere, ordre, titre_fr, titre_en, description_fr, description_en
       FROM library_chapters WHERE id = ? AND is_active = true`,
    )
    .get(chapterId);
  if (!chapter) {
    res.status(404).json({ error: "Chapitre introuvable." });
    return null;
  }
  const [user, semester] = await Promise.all([
    db.prepare("SELECT role, subscription_status FROM users WHERE id = ?").get(req.userId),
    db
      .prepare("SELECT is_published FROM study_semesters WHERE year_number = ? AND semester_number = ?")
      .get(chapter.annee, chapter.semestre),
  ]);
  if (
    !canOpenStudyContent({
      role: user?.role,
      subscriptionStatus: user?.subscription_status,
      yearNumber: chapter.annee,
      semesterNumber: chapter.semestre,
      semesterPublished: Boolean(semester?.is_published),
    })
  ) {
    res.status(403).json({
      error: "Un abonnement actif et l'ouverture du semestre sont nécessaires pour accéder à ce contenu.",
      code: "SEMESTER_ACCESS_REQUIRED",
    });
    return null;
  }
  return chapter;
}

async function getDeckContext(chapterId: number) {
  const [chapter, resources] = await Promise.all([
    db
      .prepare(
        `SELECT id, titre_fr, titre_en, matiere FROM library_chapters
         WHERE id = ? AND is_active = true`,
      )
      .get(chapterId),
    db
      .prepare(
        `SELECT titre_fr, titre_en, content_fr, content_en
         FROM library_course_resources
         WHERE chapter_id = ? AND is_active = true ORDER BY ordre ASC`,
      )
      .all(chapterId),
  ]);
  const labels: string[] = [];
  for (const resource of resources as any[]) {
    if (resource.titre_fr) labels.push(resource.titre_fr);
    for (const heading of String(resource.content_fr ?? "").matchAll(/^#{1,3}\s+(.+)$/gm)) {
      labels.push(cleanText(heading[1]));
    }
  }
  if (!labels.length && chapter?.titre_fr) labels.push(chapter.titre_fr);

  const used = new Set<string>();
  const notions: DeckNotion[] = [];
  for (const label of labels) {
    const base = slugify(label);
    if (!base || used.has(base)) continue;
    used.add(base);
    notions.push({ slug: base, label: label.slice(0, 120) });
    if (notions.length === 20) break;
  }
  const courseText = (resources as any[])
    .map((resource) => `${resource.titre_fr}\n${resource.content_fr}`)
    .join("\n\n")
    .trim();
  return { chapter, notions, courseText };
}

function applyExistingDuplicates(cards: ParsedPersonalCard[], existing: Set<string>) {
  return cards.map((card) =>
    existing.has(frontKey(card.front))
      ? { ...card, included: false, duplicate: true }
      : card,
  );
}

personalDeckRouter.get("/chapters/:id/context", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  if (!(await requireChapterAccess(req, res, chapterId))) return;
  const context = await getDeckContext(chapterId);
  res.json({
    chapter: context.chapter,
    notions: context.notions,
    courseText: context.courseText,
    courseWarning:
      context.courseText.length > 15_000
        ? "Le cours Synapses dépasse 15 000 caractères. Travaille en deux parties pour obtenir des cartes plus fiables."
        : null,
  });
});

personalDeckRouter.post("/chapters/:id/prompt", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  if (!(await requireChapterAccess(req, res, chapterId))) return;
  const courseText = typeof req.body?.courseText === "string" ? req.body.courseText.trim() : "";
  if (!courseText) return res.status(400).json({ error: "Colle le contenu de ton cours avant de continuer." });
  if (courseText.length > 60_000) {
    return res.status(400).json({ error: "Ce texte est trop long. Découpe ton cours en plusieurs parties." });
  }
  const context = await getDeckContext(chapterId);
  if (!context.chapter) return res.status(404).json({ error: "Chapitre introuvable." });
  res.json({
    prompt: buildFlashcardPrompt({
      moduleTitle: context.chapter.titre_fr,
      notions: context.notions,
      courseText,
    }),
    warning:
      courseText.length > 15_000
        ? "Ton cours dépasse 15 000 caractères : il vaut mieux l'importer en deux parties."
        : null,
  });
});

personalDeckRouter.post("/chapters/:id/preview", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  if (!(await requireChapterAccess(req, res, chapterId))) return;
  const rawText = typeof req.body?.rawText === "string" ? req.body.rawText : "";
  if (!rawText.trim()) return res.status(400).json({ error: "Colle la réponse de ton IA avant de l'analyser." });
  if (rawText.length > 100_000) return res.status(400).json({ error: "Cet import est trop long." });

  const context = await getDeckContext(chapterId);
  const parsed = parseFlashcardImport(rawText, context.notions);
  const existing = await db
    .prepare("SELECT front_key FROM user_flashcards WHERE user_id = ? AND chapter_id = ?")
    .all(req.userId, chapterId);
  const existingKeys = new Set((existing as any[]).map((card) => card.front_key));
  const cards = applyExistingDuplicates(parsed.cards, existingKeys);
  const duplicateCount = cards.filter((card) => card.duplicate && existingKeys.has(frontKey(card.front))).length;
  const token = randomUUID();
  const expiresAt = Date.now() + 30 * 60 * 1000;
  await db
    .prepare("INSERT INTO personal_deck_previews (token, user_id, chapter_id, expires_at) VALUES (?, ?, ?, ?)")
    .run(token, req.userId, chapterId, expiresAt);
  res.json({
    previewToken: token,
    cards,
    warnings: [
      ...parsed.warnings,
      ...(duplicateCount ? [`${duplicateCount} carte${duplicateCount > 1 ? "s" : ""} déjà présente${duplicateCount > 1 ? "s" : ""} dans ton deck a été décochée.`] : []),
    ],
  });
});

personalDeckRouter.post("/chapters/:id/cards", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  if (!(await requireChapterAccess(req, res, chapterId))) return;
  const previewToken = typeof req.body?.previewToken === "string" ? req.body.previewToken : "";
  const preview = await db
    .prepare(
      `SELECT token FROM personal_deck_previews
       WHERE token = ? AND user_id = ? AND chapter_id = ? AND expires_at > ?`,
    )
    .get(previewToken, req.userId, chapterId, Date.now());
  if (!preview) {
    return res.status(409).json({ error: "Analyse d'aperçu expirée. Analyse de nouveau la réponse avant de l'ajouter." });
  }
  if (!Array.isArray(req.body?.cards)) return res.status(400).json({ error: "Aucune carte à ajouter." });

  const context = await getDeckContext(chapterId);
  const allowedNotions = new Set(context.notions.map((notion) => notion.slug));
  const unique = new Set<string>();
  const cards = (req.body.cards as unknown[])
    .slice(0, 100)
    .map((raw) => {
      const item = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
      const front = cleanText(item.front);
      const back = cleanText(item.back);
      const rawNotion = typeof item.notionSlug === "string" ? item.notionSlug : null;
      const notionSlug = rawNotion && allowedNotions.has(rawNotion) ? rawNotion : null;
      return { front, back, notionSlug, key: frontKey(front) };
    })
    .filter((card) => {
      if (!card.front || !card.back || card.back.length > 600 || unique.has(card.key)) return false;
      unique.add(card.key);
      return true;
    });
  if (!cards.length) return res.status(400).json({ error: "Sélectionne au moins une carte valide à ajouter." });

  const placeholders = cards.map(() => "(?, ?, ?, ?, ?, ?, 'ai_import', 'private', ?)").join(", ");
  const now = Date.now();
  const params = cards.flatMap((card) => [
    req.userId!,
    chapterId,
    card.notionSlug,
    card.front,
    card.back,
    card.key,
    now,
  ]);
  const inserted = await db
    .prepare(
      `INSERT INTO user_flashcards
       (user_id, chapter_id, notion_slug, front, back, front_key, source, status, created_at)
       VALUES ${placeholders}
       ON CONFLICT (user_id, chapter_id, front_key) DO NOTHING
       RETURNING id`,
    )
    .all(...params);
  await db.prepare("DELETE FROM personal_deck_previews WHERE token = ?").run(previewToken);
  res.status(201).json({
    addedCount: inserted.length,
    skippedCount: cards.length - inserted.length,
  });
});

personalDeckRouter.get("/chapters/:id/cards", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  if (!(await requireChapterAccess(req, res, chapterId))) return;
  const [context, cards] = await Promise.all([
    getDeckContext(chapterId),
    db
      .prepare(
        `SELECT f.id, f.front, f.back, f.notion_slug, f.source, f.created_at,
                m.mastery, m.review_count, m.last_reviewed_at
         FROM user_flashcards f
         LEFT JOIN student_personal_flashcard_mastery m
           ON m.user_flashcard_id = f.id AND m.user_id = ?
         WHERE f.user_id = ? AND f.chapter_id = ? AND f.status = 'private'
         ORDER BY
           CASE WHEN m.mastery IN (1, 3) THEN 0 WHEN m.mastery IS NULL THEN 1 ELSE 2 END,
           m.last_reviewed_at ASC NULLS FIRST, f.created_at ASC`,
      )
      .all(req.userId, req.userId, chapterId),
  ]);
  const rows = cards as any[];
  const progress = context.notions.map((notion) => {
    const matching = rows.filter((card) => card.notion_slug === notion.slug);
    return {
      notionSlug: notion.slug,
      label: notion.label,
      total: matching.length,
      reviewed: matching.filter((card) => card.mastery !== null && card.mastery !== undefined).length,
      mastered: matching.filter((card) => Number(card.mastery) >= 5).length,
      toReview: matching.filter((card) => [1, 3].includes(Number(card.mastery))).length,
    };
  });
  res.json({ cards: rows, notions: context.notions, progress });
});

personalDeckRouter.post("/chapters/:id/cards/:cardId/mastery", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  if (!(await requireChapterAccess(req, res, chapterId))) return;
  const cardId = Number(req.params.cardId);
  const mastery = Number(req.body?.mastery);
  if (!Number.isInteger(mastery) || ![1, 3, 5].includes(mastery)) {
    return res.status(400).json({ error: "Choisis Difficile, À revoir ou Je connais." });
  }
  const card = await db
    .prepare("SELECT id FROM user_flashcards WHERE id = ? AND user_id = ? AND chapter_id = ? AND status = 'private'")
    .get(cardId, req.userId, chapterId);
  if (!card) return res.status(404).json({ error: "Carte personnelle introuvable." });
  const now = Date.now();
  await db
    .prepare(
      `INSERT INTO student_personal_flashcard_mastery
       (user_id, chapter_id, user_flashcard_id, mastery, review_count, last_reviewed_at)
       VALUES (?, ?, ?, ?, 1, ?)
       ON CONFLICT (user_id, user_flashcard_id) DO UPDATE SET
         mastery = EXCLUDED.mastery,
         review_count = student_personal_flashcard_mastery.review_count + 1,
         last_reviewed_at = EXCLUDED.last_reviewed_at`,
    )
    .run(req.userId, chapterId, cardId, mastery, now);
  res.json({ cardId, mastery, reviewedAt: now });
});