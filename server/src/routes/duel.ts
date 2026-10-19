import { randomInt } from "node:crypto";
import { Router } from "express";
import { db } from "../db.js";
import {
  BOT_ID,
  MIN_QUESTIONS,
  QUESTION_COUNT,
  addBot,
  advance,
  computeRewards,
  createRoom,
  hasPlayer,
  isActive,
  normalizeMode,
  joinRoom,
  leaveRoom,
  outcomeFor,
  submitAnswer,
  touch,
  viewFor,
  type DuelRoom,
  type EngineQuestion,
} from "../duelEngine.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";
import { canOpenStudyContent } from "../studyAccessPolicy.js";
import { loadDictionary } from "../translations.js";

export const duelRouter = Router();

duelRouter.use(authMiddleware);

// Messages d'erreur en anglais pour l'interface anglaise (en-tête x-lang).
const EN_ERRORS: Record<string, string> = {
  "Cette salle n'est plus disponible.": "This room is no longer available.",
  "Tu ne peux pas affronter toi-même.": "You can't play against yourself.",
  "Trop tard : la manche est terminée.": "Too late: the round is over.",
  "Tu as déjà répondu à cette question.": "You already answered this question.",
  "Réponse inconnue.": "Unknown answer.",
  "Un accès actif à un semestre est nécessaire pour jouer.": "You need active access to a semester to play.",
  "Pas assez de questions pour ce choix de matière : choisis une autre matière ou tout le semestre.":
    "Not enough questions for this subject: pick another subject or the whole semester.",
  "Tu as déjà un duel en cours.": "You already have a duel in progress.",
  "Salle introuvable ou déjà complète.": "Room not found or already full.",
  "Duel introuvable": "Duel not found",
};
duelRouter.use((req, res, next) => {
  if (req.headers["x-lang"] !== "en") return next();
  const json = res.json.bind(res);
  res.json = ((body: any) =>
    json(body && typeof body.error === "string" ? { ...body, error: EN_ERRORS[body.error] ?? body.error } : body)) as typeof res.json;
  next();
});

// Les salles vivent en mémoire : un duel dure quelques minutes et n'a de valeur
// qu'en direct. Seules les récompenses sont persistées (table duel_profiles).
// Conséquence : une seule instance serveur doit servir le duel.
const rooms = new Map<string, DuelRoom>();
const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const ROOM_TTL_MS = 30 * 60_000;

function newCode(): string {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    let code = "";
    for (let i = 0; i < 5; i += 1) code += CODE_ALPHABET[randomInt(CODE_ALPHABET.length)];
    if (!rooms.has(code)) return code;
  }
  throw new Error("Impossible de générer un code de salle");
}

setInterval(() => {
  const now = Date.now();
  for (const [code, room] of rooms) {
    advance(room, now);
    const idleWaiting =
      room.phase === "waiting" && now - room.players[0].lastSeen > 30_000;
    if (idleWaiting || now - room.createdAt > ROOM_TTL_MS) rooms.delete(code);
  }
}, 60_000).unref();

async function displayName(userId: number): Promise<string> {
  const user = await db
    .prepare("SELECT first_name, last_name, email FROM users WHERE id = ?")
    .get(userId);
  const first = String(user?.first_name ?? "").trim();
  const last = String(user?.last_name ?? "").trim();
  if (first) return last ? `${first} ${last[0].toUpperCase()}.` : first;
  return String(user?.email ?? "Étudiant").split("@")[0];
}

// Chapitres que l'étudiant peut ouvrir (même règle d'accès que la bibliothèque).
// Mis en cache 60 s : chaque calcul coûte 4 requêtes vers la base distante et
// il est refait à chaque création ou jonction de salle.
const ACCESS_CACHE_MS = 60_000;
const accessCache = new Map<number, { at: number; ids: Promise<Set<number>> }>();

function accessibleChapterIds(userId: number): Promise<Set<number>> {
  const cached = accessCache.get(userId);
  if (cached && Date.now() - cached.at < ACCESS_CACHE_MS) return cached.ids;
  const ids = computeAccessibleChapterIds(userId);
  accessCache.set(userId, { at: Date.now(), ids });
  ids.catch(() => accessCache.delete(userId));
  return ids;
}

async function computeAccessibleChapterIds(userId: number): Promise<Set<number>> {
  const [user, semesters, chapters, grants] = await Promise.all([
    db
      .prepare("SELECT role, subscription_status, subscription_period_end FROM users WHERE id = ?")
      .get(userId),
    db.prepare("SELECT year_number, semester_number, is_published FROM study_semesters").all(),
    db.prepare("SELECT id, annee, semestre FROM library_chapters WHERE is_active = true").all(),
    db.prepare("SELECT chapter_id FROM admin_chapter_grants WHERE user_id = ?").all(userId),
  ]);
  const granted = new Set<number>(grants.map((grant: any) => Number(grant.chapter_id)));
  const published = new Map<string, boolean>(
    semesters.map((s: any) => [`${s.year_number}-${s.semester_number}`, Boolean(s.is_published)]),
  );
  const ids = new Set<number>();
  for (const chapter of chapters as any[]) {
    const open =
      granted.has(chapter.id) ||
      canOpenStudyContent({
        role: user?.role,
        subscriptionStatus: user?.subscription_status,
        subscriptionPeriodEnd: user?.subscription_period_end,
        yearNumber: chapter.annee,
        semesterNumber: chapter.semestre,
        semesterPublished: published.get(`${chapter.annee}-${chapter.semestre}`) ?? false,
      });
    if (open) ids.add(Number(chapter.id));
  }
  return ids;
}

async function hasStudyAccess(userId: number): Promise<boolean> {
  return (await accessibleChapterIds(userId)).size > 0;
}

// Questions à réponse unique, communes aux deux joueurs (pas de contenu verrouillé
// pour l'un des deux).
const DIFFICULTIES = ["easy", "intermediate", "hard"] as const;
type Difficulty = (typeof DIFFICULTIES)[number];
function normalizeDifficulty(value: unknown): Difficulty | null {
  return DIFFICULTIES.includes(value as Difficulty) ? (value as Difficulty) : null;
}

// Anglais manquant : on prend la traduction du dictionnaire (npm run translate),
// sinon le français. Fait ici car le client affiche directement promptEn.
function english(fr: string, en: string | null | undefined): string {
  return en || loadDictionary("en")[fr] || fr;
}

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = randomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const MAX_FLASHCARD_ANSWER = 110;

// Questions simples tirées des flashcards du cours : la bonne réponse est celle
// de la carte, les 3 leurres sont des réponses d'autres cartes du même chapitre
// (à défaut, de la même sélection), de longueur proche pour ne pas trahir la
// bonne réponse. Les cartes à image (molécules…) sont exclues : le jeu n'affiche
// pas de schéma.
async function flashcardQuestions(chapterIds: number[], count: number): Promise<EngineQuestion[]> {
  if (count <= 0) return [];
  const rows = (await db
    .prepare(
      `SELECT id, chapter_id, question_fr, question_en, answer_fr, answer_en
       FROM library_flashcards
       WHERE is_active = true AND chapter_id = ANY(?) AND visual_key IS NULL
         AND char_length(answer_fr) <= ?`,
    )
    .all(chapterIds, MAX_FLASHCARD_ANSWER)) as any[];
  return buildFlashcardQuestions(rows, count);
}

export function buildFlashcardQuestions(allRows: any[], count: number): EngineQuestion[] {
  // Réponses « Oui… / Non… » : mauvais leurres et mauvaises questions à choix.
  const rows = allRows.filter((row) => !/^(oui|non)\b/i.test(String(row.answer_fr).trim()));
  const byChapter = new Map<number, any[]>();
  for (const row of rows) {
    const list = byChapter.get(row.chapter_id) ?? [];
    list.push(row);
    byChapter.set(row.chapter_id, list);
  }

  const questions: EngineQuestion[] = [];
  const usedAnswers = new Set<string>();
  for (const card of shuffled(rows)) {
    if (questions.length >= count) break;
    const answer = String(card.answer_fr).trim();
    if (usedAnswers.has(answer)) continue;
    const sameChapter = byChapter.get(card.chapter_id) ?? [];
    const candidates = (sameChapter.length >= 6 ? sameChapter : rows).filter(
      (other) => String(other.answer_fr).trim() !== answer,
    );
    const distinct = new Map<string, any>();
    for (const other of candidates) distinct.set(String(other.answer_fr).trim(), other);
    if (distinct.size < 3) continue;
    const decoys = shuffled([...distinct.values()])
      .sort((a, b) => Math.abs(a.answer_fr.length - answer.length) - Math.abs(b.answer_fr.length - answer.length))
      .slice(0, 6);
    const picked = shuffled(decoys).slice(0, 3);
    const keys = ["A", "B", "C", "D"];
    const options = shuffled([card, ...picked]).map((option, index) => ({
      key: keys[index],
      labelFr: option.answer_fr,
      labelEn: english(option.answer_fr, option.answer_en),
      correct: option === card,
    }));
    usedAnswers.add(answer);
    questions.push({
      id: -Number(card.id),
      chapterId: card.chapter_id,
      promptFr: card.question_fr,
      promptEn: english(card.question_fr, card.question_en),
      explanationFr: card.answer_fr,
      explanationEn: english(card.answer_fr, card.answer_en),
      options: options.map(({ key, labelFr, labelEn }) => ({ key, labelFr, labelEn })),
      correctKey: options.find((option) => option.correct)!.key,
    });
  }
  return questions;
}

// Facile (par défaut) : flashcards du cours ; intermédiaire : moitié flashcards,
// moitié QCM ; difficile : QCM du cours. Si une source manque, l'autre complète.
async function pickQuestions(
  userIds: number[],
  chapterIds: number[] | null,
  difficulty: Difficulty | null,
): Promise<EngineQuestion[]> {
  const sets = await Promise.all(userIds.map((id) => accessibleChapterIds(id)));
  let shared = [...sets[0]].filter((id) => sets.every((set) => set.has(id)));
  if (chapterIds && chapterIds.length > 0) {
    const wanted = new Set(chapterIds);
    shared = shared.filter((id) => wanted.has(id));
  }
  if (shared.length === 0) return [];

  const level = difficulty ?? "easy";
  const flashTarget = level === "easy" ? QUESTION_COUNT : level === "intermediate" ? Math.ceil(QUESTION_COUNT / 2) : 0;
  const fromCards = await flashcardQuestions(shared, flashTarget);
  const fromQcm = await qcmQuestions(shared, QUESTION_COUNT - fromCards.length);
  let questions = [...fromCards, ...fromQcm];
  if (questions.length < QUESTION_COUNT && level === "hard") {
    questions = [...questions, ...(await flashcardQuestions(shared, QUESTION_COUNT - questions.length))];
  }
  return shuffled(questions).slice(0, QUESTION_COUNT);
}

async function qcmQuestions(shared: number[], count: number): Promise<EngineQuestion[]> {
  if (count <= 0) return [];
  const questionRows = await db
    .prepare(
      `SELECT id, chapter_id, prompt_fr, prompt_en, explanation_fr, explanation_en
       FROM library_qcm_questions
       WHERE is_active = true AND multiple_answers = false AND chapter_id = ANY(?)
       ORDER BY random() LIMIT 40`,
    )
    .all(shared);
  if (questionRows.length === 0) return [];

  const optionRows = await db
    .prepare(
      `SELECT question_id, option_key, label_fr, label_en, is_correct
       FROM library_qcm_options
       WHERE is_active = true AND question_id = ANY(?)
       ORDER BY option_key ASC`,
    )
    .all(questionRows.map((row: any) => row.id));

  const byQuestion = new Map<number, any[]>();
  for (const option of optionRows as any[]) {
    const list = byQuestion.get(option.question_id) ?? [];
    list.push(option);
    byQuestion.set(option.question_id, list);
  }

  const questions: EngineQuestion[] = [];
  for (const row of questionRows as any[]) {
    const options = byQuestion.get(row.id) ?? [];
    const correct = options.filter((option) => option.is_correct);
    if (options.length < 2 || correct.length !== 1) continue;
    questions.push({
      id: row.id,
      chapterId: row.chapter_id,
      promptFr: row.prompt_fr,
      promptEn: english(row.prompt_fr, row.prompt_en),
      explanationFr: row.explanation_fr,
      explanationEn: english(row.explanation_fr, row.explanation_en),
      options: options.map((option) => ({
        key: option.option_key,
        labelFr: option.label_fr,
        labelEn: english(option.label_fr, option.label_en),
      })),
      correctKey: correct[0].option_key,
    });
    if (questions.length === count) break;
  }
  return questions;
}

function parseChapterIds(value: unknown): number[] | null {
  const ids = (Array.isArray(value) ? value : []).filter((id: unknown) => Number.isInteger(id)).map(Number);
  return ids.length > 0 ? ids : null;
}

// Deux joueurs ne sont appariés en partie rapide que s'ils ont choisi la même
// matière / le même chapitre et la même difficulté.
function topicKey(chapterIds: number[] | null, difficulty: Difficulty | null): string {
  return `${chapterIds ? [...chapterIds].sort((a, b) => a - b).join(",") : "all"}|${difficulty ?? "easy"}`;
}

function levelOf(xp: number): number {
  return Math.floor(xp / 100) + 1;
}

const settling = new WeakMap<DuelRoom, Promise<void>>();

// Crédite chaque joueur une seule fois. Les appels concurrents (les deux
// joueurs sondent en même temps) attendent le même règlement ; en cas d'échec,
// seuls les joueurs pas encore crédités sont retentés au sondage suivant.
function settleRewards(room: DuelRoom): Promise<void> {
  if (room.phase !== "finished" || room.rewardsSettled || room.reason === "abandoned") {
    return Promise.resolve();
  }
  const running = settling.get(room);
  if (running) return running;

  const job = (async () => {
    try {
      const now = Date.now();
      for (const player of room.players) {
        const outcome = outcomeFor(room, player.userId);
        if (player.userId === BOT_ID || !outcome || room.rewards[player.userId]) continue;
        const rewards = computeRewards(room, player.userId);
        await db
          .prepare(
            `INSERT INTO duel_profiles (user_id, xp, gold, wins, losses, draws, updated_at)
             VALUES (?, ?, ?, ?, ?, ?, ?)
             ON CONFLICT (user_id) DO UPDATE SET
               xp = duel_profiles.xp + EXCLUDED.xp,
               gold = duel_profiles.gold + EXCLUDED.gold,
               wins = duel_profiles.wins + EXCLUDED.wins,
               losses = duel_profiles.losses + EXCLUDED.losses,
               draws = duel_profiles.draws + EXCLUDED.draws,
               updated_at = EXCLUDED.updated_at`,
          )
          .run(
            player.userId,
            rewards.xp,
            rewards.gold,
            outcome === "win" ? 1 : 0,
            outcome === "loss" ? 1 : 0,
            outcome === "draw" ? 1 : 0,
            now,
          );
        room.rewards[player.userId] = rewards;
      }
      room.rewardsSettled = true;
    } catch (error) {
      console.error("Duel : enregistrement des récompenses échoué", error);
    } finally {
      settling.delete(room);
    }
  })();
  settling.set(room, job);
  return job;
}

function findActiveRoom(userId: number): DuelRoom | null {
  for (const room of rooms.values()) {
    if (isActive(room) && hasPlayer(room, userId)) return room;
  }
  return null;
}

async function snapshot(room: DuelRoom, userId: number) {
  const now = Date.now();
  touch(room, userId, now);
  advance(room, now);
  await settleRewards(room);
  return viewFor(room, userId, now);
}

function roomFor(req: AuthedRequest): DuelRoom | null {
  const room = rooms.get(String(req.params.code ?? "").toUpperCase());
  if (!room || !hasPlayer(room, req.userId!)) return null;
  return room;
}

const ERRORS: Record<string, string> = {
  ROOM_NOT_JOINABLE: "Cette salle n'est plus disponible.",
  ALREADY_IN_ROOM: "Tu ne peux pas affronter toi-même.",
  NOT_IN_QUESTION: "Trop tard : la manche est terminée.",
  ALREADY_ANSWERED: "Tu as déjà répondu à cette question.",
  UNKNOWN_OPTION: "Réponse inconnue.",
};

const NO_ACCESS = "Un accès actif à un semestre est nécessaire pour jouer.";
const NOT_ENOUGH = "Pas assez de questions pour ce choix de matière : choisis une autre matière ou tout le semestre.";

async function joinAndStart(room: DuelRoom, userId: number, avatar: unknown): Promise<string | null> {
  const guestName = await displayName(userId);
  const questions = await pickQuestions(
    [room.players[0].userId, userId],
    room.chapterIds,
    room.difficulty,
  );
  if (questions.length < MIN_QUESTIONS) return NOT_ENOUGH;
  const error = joinRoom(room, { userId, name: guestName, avatar }, questions, Date.now());
  return error ? (ERRORS[error] ?? error) : null;
}

duelRouter.get("/me", async (req: AuthedRequest, res) => {
  const userId = req.userId!;
  const [profile, leaderboard] = await Promise.all([
    db.prepare("SELECT xp, gold, wins, losses, draws FROM duel_profiles WHERE user_id = ?").get(userId),
    db
      .prepare(
        `SELECT p.user_id, p.xp, p.wins, u.first_name, u.last_name, u.email
         FROM duel_profiles p JOIN users u ON u.id = p.user_id
         ORDER BY p.xp DESC, p.wins DESC LIMIT 10`,
      )
      .all(),
  ]);
  const xp = Number(profile?.xp ?? 0);
  const active = findActiveRoom(userId);
  res.json({
    profile: {
      xp,
      level: levelOf(xp),
      gold: Number(profile?.gold ?? 0),
      wins: Number(profile?.wins ?? 0),
      losses: Number(profile?.losses ?? 0),
      draws: Number(profile?.draws ?? 0),
    },
    leaderboard: leaderboard.map((row: any) => {
      const first = String(row.first_name ?? "").trim();
      const last = String(row.last_name ?? "").trim();
      return {
        name: first ? (last ? `${first} ${last[0].toUpperCase()}.` : first) : String(row.email).split("@")[0],
        xp: Number(row.xp),
        level: levelOf(Number(row.xp)),
        wins: Number(row.wins),
        isMe: row.user_id === userId,
      };
    }),
    activeRoomCode: active?.code ?? null,
  });
});

duelRouter.post("/rooms", async (req: AuthedRequest, res) => {
  const userId = req.userId!;
  const existing = findActiveRoom(userId);
  if (existing) return res.json(await snapshot(existing, userId));
  if (!(await hasStudyAccess(userId))) return res.status(403).json({ error: NO_ACCESS });

  const chapterIds = parseChapterIds(req.body?.chapterIds);
  const difficulty = normalizeDifficulty(req.body?.difficulty);
  const room = createRoom(
    newCode(),
    { userId, name: await displayName(userId), avatar: req.body?.avatar },
    { isPublic: false, chapterIds, difficulty, mode: req.body?.mode },
    Date.now(),
  );
  rooms.set(room.code, room);
  res.status(201).json(await snapshot(room, userId));
});

duelRouter.post("/quick", async (req: AuthedRequest, res) => {
  const userId = req.userId!;
  const existing = findActiveRoom(userId);
  if (existing) return res.json(await snapshot(existing, userId));
  if (!(await hasStudyAccess(userId))) return res.status(403).json({ error: NO_ACCESS });

  const chapterIds = parseChapterIds(req.body?.chapterIds);
  const difficulty = normalizeDifficulty(req.body?.difficulty);
  const topic = topicKey(chapterIds, difficulty);
  const now = Date.now();
  const waiting = [...rooms.values()]
    .filter(
      (room) =>
        room.isPublic &&
        room.mode === normalizeMode(req.body?.mode) &&
        topicKey(room.chapterIds, room.difficulty) === topic &&
        room.phase === "waiting" &&
        !hasPlayer(room, userId) &&
        now - room.players[0].lastSeen < 10_000,
    )
    .sort((a, b) => a.createdAt - b.createdAt);

  for (const candidate of waiting) {
    // Le premier de la file qui a du contenu en commun avec ce joueur.
    if (candidate.phase !== "waiting") continue;
    const error = await joinAndStart(candidate, userId, req.body?.avatar);
    if (!error) return res.json(await snapshot(candidate, userId));
  }

  const room = createRoom(
    newCode(),
    { userId, name: await displayName(userId), avatar: req.body?.avatar },
    { isPublic: true, chapterIds, difficulty, mode: req.body?.mode },
    now,
  );
  rooms.set(room.code, room);
  res.status(201).json(await snapshot(room, userId));
});

duelRouter.post("/rooms/:code/join", async (req: AuthedRequest, res) => {
  const userId = req.userId!;
  const code = String(req.params.code ?? "").toUpperCase();
  const existing = findActiveRoom(userId);
  if (existing) {
    if (existing.code === code) return res.json(await snapshot(existing, userId));
    return res.status(409).json({ error: "Tu as déjà un duel en cours." });
  }
  const room = rooms.get(code);
  if (!room || room.phase !== "waiting" || Date.now() - room.players[0].lastSeen > 30_000) {
    return res.status(404).json({ error: "Salle introuvable ou déjà complète." });
  }
  if (!(await hasStudyAccess(userId))) return res.status(403).json({ error: NO_ACCESS });
  const error = await joinAndStart(room, userId, req.body?.avatar);
  if (error) return res.status(409).json({ error });
  res.json(await snapshot(room, userId));
});

// Personne en ligne : le joueur peut lancer le duel contre un bot.
duelRouter.post("/rooms/:code/bot", async (req: AuthedRequest, res) => {
  const room = roomFor(req);
  if (!room) return res.status(404).json({ error: "Duel introuvable" });
  if (room.phase === "waiting") {
    const questions = await pickQuestions([req.userId!], room.chapterIds, room.difficulty);
    if (questions.length < MIN_QUESTIONS) return res.status(409).json({ error: NOT_ENOUGH });
    if (room.phase === "waiting") addBot(room, questions, Date.now());
  }
  res.json(await snapshot(room, req.userId!));
});

duelRouter.get("/rooms/:code", async (req: AuthedRequest, res) => {
  const room = roomFor(req);
  if (!room) return res.status(404).json({ error: "Duel introuvable" });
  res.json(await snapshot(room, req.userId!));
});

duelRouter.post("/rooms/:code/answer", async (req: AuthedRequest, res) => {
  const room = roomFor(req);
  if (!room) return res.status(404).json({ error: "Duel introuvable" });
  const optionKey = typeof req.body?.optionKey === "string" ? req.body.optionKey : "";
  const error = submitAnswer(room, req.userId!, optionKey, Date.now());
  if (error) {
    return res.status(409).json({ error: ERRORS[error] ?? error, state: await snapshot(room, req.userId!) });
  }
  res.json(await snapshot(room, req.userId!));
});

duelRouter.post("/rooms/:code/leave", async (req: AuthedRequest, res) => {
  const room = roomFor(req);
  if (!room) return res.status(204).end();
  leaveRoom(room, req.userId!, Date.now());
  await settleRewards(room);
  res.status(204).end();
});
