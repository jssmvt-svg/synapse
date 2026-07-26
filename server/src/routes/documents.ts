import mammoth from "mammoth";
import { Router } from "express";
import multer from "multer";
// @ts-expect-error — pdf-parse has no bundled types export path that matches its CJS default
import pdfParse from "pdf-parse";
import { db } from "../db.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";
import { generateFlashcardsAndSynthesis } from "../anthropic.js";

export const documentsRouter = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 },
});

async function extractText(file: Express.Multer.File): Promise<string> {
  const name = file.originalname.toLowerCase();
  if (name.endsWith(".pdf")) {
    const parsed = await pdfParse(file.buffer);
    return parsed.text;
  }
  if (name.endsWith(".docx")) {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    return result.value;
  }
  if (name.endsWith(".txt")) {
    return file.buffer.toString("utf-8");
  }
  throw new Error("Format non supporté — utilisez PDF, DOCX ou TXT");
}

documentsRouter.use(authMiddleware);

documentsRouter.post("/upload", upload.single("file"), async (req: AuthedRequest, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Aucun fichier reçu" });
  }

  let text: string;
  try {
    text = await extractText(req.file);
  } catch (err) {
    return res.status(400).json({ error: (err as Error).message });
  }

  const trimmed = text.trim();
  if (trimmed.length < 50) {
    return res.status(400).json({ error: "Le document extrait est trop court ou vide" });
  }

  const doc = await db
    .prepare(
      "INSERT INTO documents (user_id, filename, extracted_text, uploaded_at) VALUES (?, ?, ?, ?) RETURNING id",
    )
    .get(req.userId, req.file.originalname, trimmed, Date.now());

  res.status(201).json({ id: doc.id, filename: req.file.originalname });
});

documentsRouter.get("/", async (req: AuthedRequest, res) => {
  const docs = await db
    .prepare(
      "SELECT id, filename, uploaded_at FROM documents WHERE user_id = ? ORDER BY uploaded_at DESC",
    )
    .all(req.userId);
  res.json(docs);
});

documentsRouter.post("/:id/generate", async (req: AuthedRequest, res) => {
  const documentId = Number(req.params.id);
  const doc = await db
    .prepare("SELECT id, extracted_text FROM documents WHERE id = ? AND user_id = ?")
    .get(documentId, req.userId);

  if (!doc) {
    return res.status(404).json({ error: "Document introuvable" });
  }

  let generated;
  try {
    generated = await generateFlashcardsAndSynthesis(doc.extracted_text);
  } catch (err) {
    return res.status(502).json({ error: `Échec de la génération IA : ${(err as Error).message}` });
  }

  const now = Date.now();
  const deck = await db
    .prepare(
      "INSERT INTO decks (user_id, document_id, title_fr, title_en, created_at) VALUES (?, ?, ?, ?, ?) RETURNING id",
    )
    .get(req.userId, documentId, generated.deckTitleFr, generated.deckTitleEn, now);

  for (const card of generated.flashcards) {
    await db
      .prepare(
        "INSERT INTO flashcards (deck_id, question_fr, question_en, answer_fr, answer_en, created_at) VALUES (?, ?, ?, ?, ?, ?)",
      )
      .run(deck.id, card.questionFr, card.questionEn, card.answerFr, card.answerEn, now);
  }

  await db
    .prepare(
      "INSERT INTO course_syntheses (document_id, content_fr, content_en, created_at) VALUES (?, ?, ?, ?)",
    )
    .run(documentId, generated.synthesis.contentFr, generated.synthesis.contentEn, now);

  res.status(201).json({ deckId: deck.id, documentId, cardCount: generated.flashcards.length });
});

documentsRouter.get("/:id/synthesis", async (req: AuthedRequest, res) => {
  const documentId = Number(req.params.id);
  const owned = await db
    .prepare("SELECT id FROM documents WHERE id = ? AND user_id = ?")
    .get(documentId, req.userId);
  if (!owned) {
    return res.status(404).json({ error: "Document introuvable" });
  }

  const synthesis = await db
    .prepare(
      "SELECT content_fr, content_en FROM course_syntheses WHERE document_id = ? ORDER BY created_at DESC LIMIT 1",
    )
    .get(documentId);

  if (!synthesis) {
    return res.status(404).json({ error: "Aucune synthèse générée pour ce document" });
  }
  res.json(synthesis);
});
