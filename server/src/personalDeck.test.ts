import assert from "node:assert/strict";
import type { AddressInfo } from "node:net";
import test from "node:test";
import express from "express";
import { db } from "./db.js";
import { signSession } from "./middleware/auth.js";
import { buildFlashcardPrompt, parseFlashcardImport } from "./personalDeck.js";
import { personalDeckRouter } from "./routes/personalDeck.js";

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

test("caps imports at one hundred cards and leaves unknown notions unassigned", () => {
  const raw = Array.from({ length: 102 }, (_, index) => `Question ${index} :: Réponse ${index} :: notion-inconnue`).join("\n");
  const result = parseFlashcardImport(raw, notions);
  assert.equal(result.cards.length, 100);
  assert.equal(result.cards[0].notionSlug, null);
  assert.ok(result.warnings.some((warning) => warning.includes("limité à 100")));
});

type PersonalCard = {
  id: number;
  user_id: number;
  chapter_id: number;
  front: string;
  back: string;
  front_key: string;
  status: "private";
  notion_slug: string | null;
  source: "ai_import";
  created_at: number;
};

function createRouteDatabase() {
  const users = new Map([
    [1, { id: 1, session_token: "session-one", role: "student", subscription_status: "active" }],
    [2, { id: 2, session_token: "session-two", role: "student", subscription_status: "active" }],
  ]);
  const chapters = new Map([
    [10, { id: 10, annee: 1, semestre: 1, matiere: "Biochimie", ordre: 1, titre_fr: "Protéines", titre_en: "Proteins", description_fr: "", description_en: "" }],
    [11, { id: 11, annee: 1, semestre: 1, matiere: "Biochimie", ordre: 2, titre_fr: "Enzymes", titre_en: "Enzymes", description_fr: "", description_en: "" }],
  ]);
  const cards: PersonalCard[] = [
    { id: 101, user_id: 1, chapter_id: 10, front: "Carte privée A", back: "Réponse A", front_key: "carte privée a", status: "private", notion_slug: null, source: "ai_import", created_at: 1 },
    { id: 202, user_id: 2, chapter_id: 10, front: "Carte privée B", back: "Réponse B", front_key: "carte privée b", status: "private", notion_slug: null, source: "ai_import", created_at: 2 },
  ];
  const previews = new Map<string, { userId: number; chapterId: number; expiresAt: number }>();
  const mastery: Array<{ userId: number; chapterId: number; cardId: number; value: number }> = [];

  const originalPrepare = db.prepare;
  db.prepare = ((sql: string) => {
    const normalized = sql.replace(/\s+/g, " ").trim();
    return {
      async get(...params: unknown[]) {
        if (normalized.includes("SELECT id, session_token FROM users")) return users.get(Number(params[0])) ?? null;
        if (normalized.includes("SELECT role, subscription_status")) return users.get(Number(params[0])) ?? null;
        if (normalized.includes("SELECT is_published FROM study_semesters")) return { is_published: true };
        if (normalized.includes("FROM library_chapters WHERE id = ? AND is_active = true")) {
          return chapters.get(Number(params[0])) ?? null;
        }
        if (normalized.includes("FROM personal_deck_previews")) {
          const preview = previews.get(String(params[0]));
          return preview
            && preview.userId === Number(params[1])
            && preview.chapterId === Number(params[2])
            && preview.expiresAt > Number(params[3])
            ? { token: params[0] }
            : null;
        }
        if (normalized.includes("SELECT id FROM user_flashcards")) {
          return cards.find((card) =>
            card.id === Number(params[0])
            && card.user_id === Number(params[1])
            && card.chapter_id === Number(params[2])
            && card.status === "private"
          ) ?? null;
        }
        throw new Error(`Unexpected test get query: ${normalized}`);
      },
      async all(...params: unknown[]) {
        if (normalized.includes("FROM library_course_resources")) return [];
        if (normalized.includes("SELECT front_key FROM user_flashcards")) {
          return cards
            .filter((card) => card.user_id === Number(params[0]) && card.chapter_id === Number(params[1]))
            .map(({ front_key }) => ({ front_key }));
        }
        if (normalized.includes("LEFT JOIN student_personal_flashcard_mastery")) {
          return cards
            .filter((card) => card.user_id === Number(params[1]) && card.chapter_id === Number(params[2]))
            .map((card) => {
              const score = mastery.find((item) => item.userId === Number(params[0]) && item.cardId === card.id);
              return { ...card, mastery: score?.value ?? null, review_count: score ? 1 : null, last_reviewed_at: score ? Date.now() : null };
            });
        }
        if (normalized.startsWith("INSERT INTO user_flashcards")) {
          const inserted = [];
          for (let index = 0; index < params.length; index += 7) {
            const [userId, chapterId, notionSlug, front, back, frontKey, createdAt] = params.slice(index, index + 7);
            if (cards.some((card) => card.user_id === userId && card.chapter_id === chapterId && card.front_key === frontKey)) continue;
            const id = 300 + cards.length;
            cards.push({
              id,
              user_id: Number(userId),
              chapter_id: Number(chapterId),
              notion_slug: notionSlug as string | null,
              front: String(front),
              back: String(back),
              front_key: String(frontKey),
              source: "ai_import",
              status: "private",
              created_at: Number(createdAt),
            });
            inserted.push({ id });
          }
          return inserted;
        }
        throw new Error(`Unexpected test all query: ${normalized}`);
      },
      async run(...params: unknown[]) {
        if (normalized.startsWith("INSERT INTO personal_deck_previews")) {
          previews.set(String(params[0]), { userId: Number(params[1]), chapterId: Number(params[2]), expiresAt: Number(params[3]) });
          return { rowCount: 1 };
        }
        if (normalized.startsWith("DELETE FROM personal_deck_previews")) {
          return { rowCount: previews.delete(String(params[0])) ? 1 : 0 };
        }
        if (normalized.startsWith("INSERT INTO student_personal_flashcard_mastery")) {
          mastery.push({ userId: Number(params[0]), chapterId: Number(params[1]), cardId: Number(params[2]), value: Number(params[3]) });
          return { rowCount: 1 };
        }
        throw new Error(`Unexpected test run query: ${normalized}`);
      },
    };
  }) as typeof db.prepare;

  return { cards, previews, mastery, restore: () => { db.prepare = originalPrepare; } };
}

async function withPersonalDeckServer(
  run: (request: (userId: 1 | 2, path: string, init?: RequestInit) => Promise<Response>) => Promise<void>,
) {
  const routeDatabase = createRouteDatabase();
  const app = express();
  app.use(express.json());
  app.use("/api/personal-deck", personalDeckRouter);
  const server = app.listen(0);
  await new Promise<void>((resolve) => server.once("listening", resolve));
  const port = (server.address() as AddressInfo).port;
  const tokens = {
    1: signSession(1, "session-one"),
    2: signSession(2, "session-two"),
  };
  try {
    await run((userId, path, init = {}) =>
      fetch(`http://127.0.0.1:${port}/api/personal-deck${path}`, {
        ...init,
        headers: {
          authorization: `Bearer ${tokens[userId]}`,
          "content-type": "application/json",
          ...init.headers,
        },
      }));
  } finally {
    await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
    routeDatabase.restore();
  }
}

test("one account cannot list or rate another account's private cards", async () => {
  await withPersonalDeckServer(async (request) => {
    const listResponse = await request(2, "/chapters/10/cards");
    assert.equal(listResponse.status, 200);
    const list = await listResponse.json() as { cards: PersonalCard[] };
    assert.deepEqual(list.cards.map((card) => card.id), [202]);

    const masteryResponse = await request(2, "/chapters/10/cards/101/mastery", {
      method: "POST",
      body: JSON.stringify({ mastery: 5 }),
    });
    assert.equal(masteryResponse.status, 404);
  });
});

test("a preview token cannot be reused by another account or chapter", async () => {
  await withPersonalDeckServer(async (request) => {
    const previewResponse = await request(1, "/chapters/10/preview", {
      method: "POST",
      body: JSON.stringify({ rawText: "Question privée :: Réponse privée" }),
    });
    assert.equal(previewResponse.status, 200);
    const { previewToken } = await previewResponse.json() as { previewToken: string };
    const payload = JSON.stringify({
      previewToken,
      cards: [{ front: "Question privée", back: "Réponse privée" }],
    });

    const otherAccount = await request(2, "/chapters/10/cards", { method: "POST", body: payload });
    assert.equal(otherAccount.status, 409);

    const otherChapter = await request(1, "/chapters/11/cards", { method: "POST", body: payload });
    assert.equal(otherChapter.status, 409);

    const ownerSave = await request(1, "/chapters/10/cards", { method: "POST", body: payload });
    assert.equal(ownerSave.status, 201);
    assert.equal((await ownerSave.json() as { addedCount: number }).addedCount, 1);
  });
});