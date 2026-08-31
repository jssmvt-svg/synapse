import assert from "node:assert/strict";
import test from "node:test";
import { buildFlashcardPrompt, parseFlashcardImport } from "./personalDeck.js";

const notions = [
  { slug: "helice-alpha", label: "Hélice alpha" },
  { slug: "liaison-peptidique", label: "Liaison peptidique" },
];

test("builds a prompt with notions and the supplied course", () => {
  const prompt = buildFlashcardPrompt({ moduleTitle: "Biochimie", notions, courseText: "Le cours source." });
  assert.match(prompt, /helice-alpha — Hélice alpha/);
  assert.match(prompt, /Le cours source\./);
});

test("tolerates numbered markdown imports and ignores malformed lines", () => {
  const result = parseFlashcardImport(
    "Voici tes flashcards :\n```\\n1. Hélice ? :: **Structure secondaire.** :: hélice alpha\n2) Peptide :: Liaison entre deux acides aminés. :: liaison-peptidique\nligne sans séparateur\n```",
    notions,
  );
  assert.equal(result.cards.length, 2);
  assert.equal(result.cards[0].notionSlug, "helice-alpha");
  assert.equal(result.cards[1].notionSlug, "liaison-peptidique");
  assert.ok(result.warnings.length > 0);
});

test("accepts JSON fallback and marks in-import duplicates", () => {
  const json = JSON.stringify([
    { front: "Question", back: "Réponse", notion: "Hélice alpha" },
    { recto: "Question", verso: "Une autre réponse", notion: "autre" },
  ]);
  const result = parseFlashcardImport(json, notions);
  assert.equal(result.cards.length, 2);
  assert.equal(result.cards[0].notionSlug, "helice-alpha");
  assert.equal(result.cards[1].included, false);
  assert.equal(result.cards[1].duplicate, true);
});

test("treats differently-encoded apostrophes as the same duplicate key", () => {
  const raw = [
    "Hélice alpha : où se fait la liaison hydrogène de l'ATP ? :: Entre CO et NH. :: helice-alpha",
    "Hélice alpha : où se fait la liaison hydrogène de l’ATP ? :: Entre CO et NH (bis). :: helice-alpha",
  ].join("\n");
  const result = parseFlashcardImport(raw, notions);
  assert.equal(result.cards.length, 2);
  assert.equal(result.cards[1].included, false);
  assert.equal(result.cards[1].duplicate, true);
});

test("caps imports at one hundred cards and leaves unknown notions unassigned", () => {
  const raw = Array.from({ length: 102 }, (_, index) => `Question ${index} :: Réponse ${index} :: notion-inconnue`).join("\n");
  const result = parseFlashcardImport(raw, notions);
  assert.equal(result.cards.length, 100);
  assert.equal(result.cards[0].notionSlug, null);
  assert.ok(result.warnings.some((warning) => warning.includes("limité à 100")));
});