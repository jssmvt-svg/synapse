import { Router } from "express";
import { db } from "../db.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

export const decksRouter = Router();

decksRouter.use(authMiddleware);

decksRouter.get("/", async (req: AuthedRequest, res) => {
  const decks = await db
    .prepare(
      "SELECT id, document_id, title_fr, title_en, created_at FROM decks WHERE user_id = ? ORDER BY created_at DESC",
    )
    .all(req.userId);
  res.json(decks);
});

decksRouter.get("/:id", async (req: AuthedRequest, res) => {
  const deck = await db
    .prepare(
      "SELECT id, document_id, title_fr, title_en, created_at FROM decks WHERE id = ? AND user_id = ?",
    )
    .get(Number(req.params.id), req.userId);
  if (!deck) {
    return res.status(404).json({ error: "Deck introuvable" });
  }
  res.json(deck);
});

decksRouter.get("/:id/flashcards", async (req: AuthedRequest, res) => {
  const deckId = Number(req.params.id);
  const owned = await db
    .prepare("SELECT id FROM decks WHERE id = ? AND user_id = ?")
    .get(deckId, req.userId);
  if (!owned) {
    return res.status(404).json({ error: "Deck introuvable" });
  }

  const cards = await db
    .prepare(
      "SELECT id, question_fr, question_en, answer_fr, answer_en FROM flashcards WHERE deck_id = ? ORDER BY id ASC",
    )
    .all(deckId);
  res.json(cards);
});
