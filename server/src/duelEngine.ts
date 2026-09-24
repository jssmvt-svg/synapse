// Moteur du duel en arène : logique pure, sans base de données ni horloge cachée.
// L'état avance « paresseusement » : chaque appel à advance() rattrape les
// transitions de phase dues d'après l'horloge fournie, donc aucun minuteur
// serveur n'est nécessaire (les clients interrogent l'état régulièrement).

export const MAX_HP = 150;
export const QUESTION_COUNT = 10;
export const MIN_QUESTIONS = 5;
export const COUNTDOWN_MS = 3_000;
export const QUESTION_MS = 20_000;
export const REVEAL_MS = 4_000;
export const ABSENCE_MS = 25_000;
export const BASE_DAMAGE = 15;
export const SPEED_BONUS_DAMAGE = 15;

// Un avatar est un code « peau-coiffure-couleurCheveux-tenue-bas-élément »
// (ex. « 1-spiky-5-0-p-0 »). Les sprites sont dessinés côté client à partir de
// ce code ; le serveur ne fait que le valider (jamais de contenu libre).
export const AVATAR_HAIRS = ["spiky", "long", "twin", "pony", "short", "afro", "braids", "bun", "hijab"];
export const AVATAR_LIMITS = { skin: 6, hairColor: 9, outfit: 8, element: 6 };
export const DEFAULT_AVATAR = "1-spiky-5-0-p-0";
const AVATAR_PATTERN = /^(\d)-([a-z]+)-(\d)-(\d)-([ps])-(\d)$/;

export function normalizeAvatar(value: unknown): string {
  if (typeof value !== "string") return DEFAULT_AVATAR;
  const match = AVATAR_PATTERN.exec(value);
  if (!match) return DEFAULT_AVATAR;
  const [, skin, hair, hairColor, outfit, , element] = match;
  const valid =
    Number(skin) < AVATAR_LIMITS.skin &&
    AVATAR_HAIRS.includes(hair) &&
    Number(hairColor) < AVATAR_LIMITS.hairColor &&
    Number(outfit) < AVATAR_LIMITS.outfit &&
    Number(element) < AVATAR_LIMITS.element;
  return valid ? value : DEFAULT_AVATAR;
}

// --- Modes de jeu : même quiz, règles et décors différents ---
export const GAME_MODES = ["combat", "race", "surgery", "tug"] as const;
export type GameMode = (typeof GAME_MODES)[number];

export function normalizeMode(value: unknown): GameMode {
  return (GAME_MODES as readonly string[]).includes(value as string) ? (value as GameMode) : "combat";
}

// Objectif des modes « progression » (course, opération).
export const GOAL = 100;
const RACE_BASE = 9;
const RACE_SPEED = 9;
const SURGERY_BASE = 8;
const SURGERY_SPEED = 7;
const SURGERY_MULTIPLIERS = [0, 1, 1.2, 1.5];
// Une erreur pendant l'opération est une complication.
export const COMPLICATION_DAMAGE = 25;

export function startHp(mode: GameMode): number {
  if (mode === "combat") return MAX_HP;
  return 100;
}

// Une série de bonnes réponses débloque de meilleures attaques :
// 1 = coup, 2-3 = attaque spéciale, 4+ = ultime.
export const ATTACK_MULTIPLIERS = [0, 1, 1.3, 1.7];

export function attackTierForStreak(streak: number): number {
  if (streak <= 0) return 0;
  if (streak === 1) return 1;
  return streak >= 4 ? 3 : 2;
}

export type Phase = "waiting" | "countdown" | "question" | "reveal" | "finished";
export type Outcome = "win" | "loss" | "draw";
export type FinishReason = "ko" | "goal" | "rounds" | "forfeit" | "abandoned";

export interface EngineOption {
  key: string;
  labelFr: string;
  labelEn: string;
}

export interface EngineQuestion {
  id: number;
  chapterId: number;
  promptFr: string;
  promptEn: string;
  explanationFr: string;
  explanationEn: string;
  options: EngineOption[];
  correctKey: string;
}

export interface DuelPlayer {
  userId: number;
  name: string;
  avatar: string;
  streak: number;
  progress: number;
  lastSeen: number;
  hp: number;
  correct: number;
  bot?: boolean;
}

interface GivenAnswer {
  key: string;
  at: number;
}

export interface RoundResult {
  index: number;
  correctKey: string;
  answers: Record<number, { key: string; correct: boolean } | null>;
  // Dégâts subis par chaque joueur pendant la manche.
  damageTaken: Record<number, number>;
  // Niveau d'attaque lancé par chaque joueur (0 = aucune).
  attackTier: Record<number, number>;
  // Progression gagnée (course, opération) et complications (opération).
  gain: Record<number, number>;
  complication: Record<number, boolean>;
}

export interface DuelRewards {
  xp: number;
  gold: number;
}

export interface DuelRoom {
  code: string;
  mode: GameMode;
  isPublic: boolean;
  chapterIds: number[] | null;
  difficulty: "easy" | "intermediate" | "hard" | null;
  players: DuelPlayer[];
  questions: EngineQuestion[];
  phase: Phase;
  phaseStartedAt: number;
  round: number;
  answers: Record<number, GivenAnswer>;
  lastRound: RoundResult | null;
  winnerId: number | null;
  reason: FinishReason | null;
  loserByForfeit: number | null;
  createdAt: number;
  rewardsSettled: boolean;
  rewards: Record<number, DuelRewards>;
  vsBot?: boolean;
}

// Adversaire de secours quand personne d'autre n'est en ligne. Son identifiant
// n'existe pas en base : il ne reçoit jamais de récompense.
export const BOT_ID = -1;
export const BOT_ACCURACY = 0.65;
const BOT_AVATAR = "3-short-2-1-p-2";

export function createRoom(
  code: string,
  host: { userId: number; name: string; avatar?: unknown },
  options: {
    isPublic: boolean;
    chapterIds: number[] | null;
    difficulty?: "easy" | "intermediate" | "hard" | null;
    mode?: unknown;
  },
  now: number,
): DuelRoom {
  const mode = normalizeMode(options.mode);
  return {
    code,
    mode,
    isPublic: options.isPublic,
    chapterIds: options.chapterIds,
    difficulty: options.difficulty ?? null,
    players: [newPlayer(host, now, mode)],
    questions: [],
    phase: "waiting",
    phaseStartedAt: now,
    round: 0,
    answers: {},
    lastRound: null,
    winnerId: null,
    reason: null,
    loserByForfeit: null,
    createdAt: now,
    rewardsSettled: false,
    rewards: {},
  };
}

function newPlayer(
  player: { userId: number; name: string; avatar?: unknown },
  now: number,
  mode: GameMode,
): DuelPlayer {
  return {
    userId: player.userId,
    name: player.name,
    avatar: normalizeAvatar(player.avatar),
    streak: 0,
    progress: 0,
    lastSeen: now,
    hp: startHp(mode),
    correct: 0,
  };
}

export function isActive(room: DuelRoom): boolean {
  return room.phase !== "finished";
}

export function hasPlayer(room: DuelRoom, userId: number): boolean {
  return room.players.some((player) => player.userId === userId);
}

export function joinRoom(
  room: DuelRoom,
  guest: { userId: number; name: string; avatar?: unknown },
  questions: EngineQuestion[],
  now: number,
): string | null {
  if (room.phase !== "waiting" || room.players.length !== 1) return "ROOM_NOT_JOINABLE";
  if (hasPlayer(room, guest.userId)) return "ALREADY_IN_ROOM";
  room.players.push(newPlayer(guest, now, room.mode));
  room.questions = questions;
  room.phase = "countdown";
  room.phaseStartedAt = now;
  room.round = 0;
  room.answers = {};
  for (const player of room.players) player.lastSeen = now;
  return null;
}

export function addBot(room: DuelRoom, questions: EngineQuestion[], now: number): string | null {
  const error = joinRoom(room, { userId: BOT_ID, name: "Synapse Bot", avatar: BOT_AVATAR }, questions, now);
  if (error) return error;
  room.players[1].bot = true;
  room.vsBot = true;
  return null;
}

function hashOf(text: string): number {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

// Le bot répond à un instant simulé (3 à 12 s après la question), donc le
// résultat ne dépend pas de la fréquence des sondages.
function botAnswerIfDue(room: DuelRoom, now: number): void {
  const bot = room.players.find((player) => player.bot);
  if (!bot || room.answers[bot.userId]) return;
  const seed = hashOf(`${room.code}:${room.round}`);
  const at = room.phaseStartedAt + 3_000 + (seed % 9_000);
  if (now < at) return;
  const question = room.questions[room.round];
  if (!question) return;
  const wrong = question.options.filter((option) => option.key !== question.correctKey);
  const right = (seed >>> 8) % 100 < BOT_ACCURACY * 100 || wrong.length === 0;
  const key = right ? question.correctKey : wrong[(seed >>> 16) % wrong.length].key;
  room.answers[bot.userId] = { key, at };
}

export function touch(room: DuelRoom, userId: number, now: number): void {
  const player = room.players.find((candidate) => candidate.userId === userId);
  if (player) player.lastSeen = now;
}

function opponentOf(room: DuelRoom, userId: number): DuelPlayer | undefined {
  return room.players.find((player) => player.userId !== userId);
}

function finish(room: DuelRoom, reason: FinishReason, winnerId: number | null, now: number): void {
  room.phase = "finished";
  room.phaseStartedAt = now;
  room.reason = reason;
  room.winnerId = winnerId;
}

function standing(room: DuelRoom, player: DuelPlayer): number {
  if (room.mode === "race") return player.progress;
  if (room.mode === "surgery") return player.hp <= 0 ? -1 : player.progress;
  return player.hp;
}

function isMatchOver(room: DuelRoom): boolean {
  const someoneDown = room.mode !== "race" && room.players.some((player) => player.hp <= 0);
  const goalReached =
    (room.mode === "race" || room.mode === "surgery") &&
    room.players.some((player) => player.progress >= GOAL);
  return someoneDown || goalReached;
}

function finishOnStanding(room: DuelRoom, now: number): void {
  const [a, b] = room.players;
  const scoreA = standing(room, a);
  const scoreB = standing(room, b);
  let reason: FinishReason = "rounds";
  if (room.mode !== "race" && room.players.some((player) => player.hp <= 0)) reason = "ko";
  else if (
    (room.mode === "race" || room.mode === "surgery") &&
    room.players.some((player) => player.progress >= GOAL)
  ) {
    reason = "goal";
  }
  const winnerId = scoreA === scoreB ? null : scoreA > scoreB ? a.userId : b.userId;
  finish(room, reason, winnerId, now);
}

function forfeit(room: DuelRoom, loserId: number | null, now: number): void {
  if (loserId === null) {
    // Les deux joueurs ont disparu : match nul, personne n'est puni.
    finish(room, "forfeit", null, now);
    return;
  }
  room.loserByForfeit = loserId;
  finish(room, "forfeit", opponentOf(room, loserId)?.userId ?? null, now);
}

function resolveRound(room: DuelRoom, questionEndsAt: number): void {
  const question = room.questions[room.round];
  const damageTaken: Record<number, number> = {};
  const attackTier: Record<number, number> = {};
  const gain: Record<number, number> = {};
  const complication: Record<number, boolean> = {};
  const power: Record<number, number> = {};
  const answers: RoundResult["answers"] = {};

  for (const player of room.players) {
    damageTaken[player.userId] = 0;
    attackTier[player.userId] = 0;
    gain[player.userId] = 0;
    complication[player.userId] = false;
    power[player.userId] = 0;
    answers[player.userId] = null;
  }

  for (const player of room.players) {
    const given = room.answers[player.userId];
    const correct = Boolean(given) && given.key === question.correctKey;
    if (given) answers[player.userId] = { key: given.key, correct };
    if (!correct) {
      player.streak = 0;
      if (room.mode === "surgery") complication[player.userId] = true;
      continue;
    }
    player.correct += 1;
    player.streak += 1;
    const tier = attackTierForStreak(player.streak);
    attackTier[player.userId] = tier;
    const speed = Math.max(0, questionEndsAt - given.at) / QUESTION_MS;
    if (room.mode === "race") {
      gain[player.userId] = Math.round((RACE_BASE + RACE_SPEED * speed) * ATTACK_MULTIPLIERS[tier]);
    } else if (room.mode === "surgery") {
      gain[player.userId] = Math.round((SURGERY_BASE + SURGERY_SPEED * speed) * SURGERY_MULTIPLIERS[tier]);
    } else {
      power[player.userId] = Math.round((BASE_DAMAGE + SPEED_BONUS_DAMAGE * speed) * ATTACK_MULTIPLIERS[tier]);
    }
  }

  const [a, b] = room.players;
  if (room.mode === "combat") {
    // Dégâts simultanés : on applique après avoir calculé les deux côtés.
    damageTaken[b.userId] = power[a.userId];
    damageTaken[a.userId] = power[b.userId];
    for (const player of room.players) player.hp = Math.max(0, player.hp - damageTaken[player.userId]);
  } else if (room.mode === "tug") {
    // Une seule corde : la différence de force déplace le repère vers le plus fort.
    const net = power[a.userId] - power[b.userId];
    const winner = net > 0 ? a : b;
    const loser = net > 0 ? b : a;
    const pulled = Math.min(Math.abs(net), loser.hp);
    if (pulled > 0) {
      loser.hp -= pulled;
      winner.hp += pulled;
      damageTaken[loser.userId] = pulled;
    }
  } else {
    for (const player of room.players) {
      player.progress += gain[player.userId];
      if (complication[player.userId]) {
        player.hp = Math.max(0, player.hp - COMPLICATION_DAMAGE);
      }
    }
  }

  room.lastRound = {
    index: room.round,
    correctKey: question.correctKey,
    answers,
    damageTaken,
    attackTier,
    gain,
    complication,
  };
}

function absenteeIfAny(room: DuelRoom, now: number): { absent: boolean; loserId: number | null } {
  const stale = room.players.filter((player) => now - player.lastSeen > ABSENCE_MS);
  if (stale.length === 0) return { absent: false, loserId: null };
  if (stale.length === room.players.length) return { absent: true, loserId: null };
  return { absent: true, loserId: stale[0].userId };
}

export function advance(room: DuelRoom, now: number): void {
  for (let guard = 0; guard < 100; guard += 1) {
    if (room.phase === "waiting" || room.phase === "finished") return;

    for (const player of room.players) if (player.bot) player.lastSeen = now;
    const absence = absenteeIfAny(room, now);
    if (absence.absent) {
      forfeit(room, absence.loserId, now);
      return;
    }

    if (room.phase === "countdown") {
      const end = room.phaseStartedAt + COUNTDOWN_MS;
      if (now < end) return;
      room.phase = "question";
      room.phaseStartedAt = end;
      room.answers = {};
      continue;
    }

    if (room.phase === "question") {
      const end = room.phaseStartedAt + QUESTION_MS;
      botAnswerIfDue(room, now);
      const everyoneAnswered = room.players.every((player) => room.answers[player.userId]);
      if (!everyoneAnswered && now < end) return;
      const lastAnswerAt = Math.max(...Object.values(room.answers).map((answer) => answer.at));
      resolveRound(room, end);
      room.phase = "reveal";
      room.phaseStartedAt = everyoneAnswered ? Math.min(lastAnswerAt, end) : end;
      continue;
    }

    // reveal
    const end = room.phaseStartedAt + REVEAL_MS;
    if (now < end) return;
    const noMoreQuestions = room.round + 1 >= room.questions.length;
    if (isMatchOver(room) || noMoreQuestions) {
      finishOnStanding(room, end);
      return;
    }
    room.round += 1;
    room.phase = "question";
    room.phaseStartedAt = end;
    room.answers = {};
  }
}

export function submitAnswer(
  room: DuelRoom,
  userId: number,
  optionKey: string,
  now: number,
): string | null {
  touch(room, userId, now);
  advance(room, now);
  if (room.phase !== "question") return "NOT_IN_QUESTION";
  if (room.answers[userId]) return "ALREADY_ANSWERED";
  const question = room.questions[room.round];
  if (!question.options.some((option) => option.key === optionKey)) return "UNKNOWN_OPTION";
  room.answers[userId] = { key: optionKey, at: now };
  // Si les deux ont répondu, on résout tout de suite.
  advance(room, now);
  return null;
}

export function leaveRoom(room: DuelRoom, userId: number, now: number): void {
  if (room.phase === "finished") return;
  if (room.phase === "waiting") {
    finish(room, "abandoned", null, now);
    return;
  }
  forfeit(room, userId, now);
}

export function outcomeFor(room: DuelRoom, userId: number): Outcome | null {
  if (room.phase !== "finished" || room.reason === "abandoned") return null;
  if (room.winnerId === null) return "draw";
  return room.winnerId === userId ? "win" : "loss";
}

export function computeRewards(room: DuelRoom, userId: number): DuelRewards {
  const outcome = outcomeFor(room, userId);
  if (!outcome) return { xp: 0, gold: 0 };
  // Celui qui abandonne ne gagne rien.
  if (room.loserByForfeit === userId) return { xp: 0, gold: 0 };
  const player = room.players.find((candidate) => candidate.userId === userId);
  const correct = player?.correct ?? 0;
  const bonusXp = outcome === "win" ? 20 : outcome === "draw" ? 8 : 0;
  const gold = outcome === "win" ? 20 : outcome === "draw" ? 10 : 5;
  const xp = 10 + correct * 2 + bonusXp;
  // Contre le bot : moitié moins, pour ne pas décourager les vrais duels.
  return room.vsBot ? { xp: Math.floor(xp / 2), gold: Math.floor(gold / 2) } : { xp, gold };
}

export interface DuelView {
  code: string;
  phase: Phase;
  serverNow: number;
  mode: GameMode;
  goal: number;
  maxHp: number;
  phaseEndsAt: number | null;
  round: number;
  totalRounds: number;
  isPublic: boolean;
  me: { name: string; avatar: string; hp: number; progress: number; correct: number; streak: number };
  opponent: {
    name: string;
    avatar: string;
    hp: number;
    progress: number;
    correct: number;
    streak: number;
    answered: boolean;
  } | null;
  question: {
    id: number;
    promptFr: string;
    promptEn: string;
    options: EngineOption[];
  } | null;
  myAnswer: string | null;
  reveal: {
    correctKey: string;
    explanationFr: string;
    explanationEn: string;
    myAnswer: string | null;
    opponentAnswer: string | null;
    myCorrect: boolean;
    opponentCorrect: boolean;
    damageTaken: number;
    damageDealt: number;
    myAttackTier: number;
    opponentAttackTier: number;
    myGain: number;
    opponentGain: number;
    myComplication: boolean;
    opponentComplication: boolean;
  } | null;
  result: {
    outcome: Outcome;
    reason: FinishReason;
    rewards: DuelRewards | null;
  } | null;
}

export function viewFor(room: DuelRoom, userId: number, now: number): DuelView {
  const me = room.players.find((player) => player.userId === userId)!;
  const opponent = opponentOf(room, userId) ?? null;
  const inQuestion = room.phase === "question";
  const showingRound = room.phase === "reveal" || room.phase === "finished";
  const roundQuestion = room.questions[room.round];
  const finishedWithoutRound = room.phase === "finished" && !room.lastRound;

  let phaseEndsAt: number | null = null;
  if (room.phase === "countdown") phaseEndsAt = room.phaseStartedAt + COUNTDOWN_MS;
  if (inQuestion) phaseEndsAt = room.phaseStartedAt + QUESTION_MS;
  if (room.phase === "reveal") phaseEndsAt = room.phaseStartedAt + REVEAL_MS;

  const last = room.lastRound;
  const reveal =
    showingRound && last && roundQuestion && !finishedWithoutRound
      ? {
          correctKey: last.correctKey,
          explanationFr: room.questions[last.index].explanationFr,
          explanationEn: room.questions[last.index].explanationEn,
          myAnswer: last.answers[userId]?.key ?? null,
          opponentAnswer: opponent ? (last.answers[opponent.userId]?.key ?? null) : null,
          myCorrect: last.answers[userId]?.correct ?? false,
          opponentCorrect: opponent ? (last.answers[opponent.userId]?.correct ?? false) : false,
          damageTaken: last.damageTaken[userId] ?? 0,
          damageDealt: opponent ? (last.damageTaken[opponent.userId] ?? 0) : 0,
          myAttackTier: last.attackTier[userId] ?? 0,
          opponentAttackTier: opponent ? (last.attackTier[opponent.userId] ?? 0) : 0,
          myGain: last.gain[userId] ?? 0,
          opponentGain: opponent ? (last.gain[opponent.userId] ?? 0) : 0,
          myComplication: last.complication[userId] ?? false,
          opponentComplication: opponent ? (last.complication[opponent.userId] ?? false) : false,
        }
      : null;

  const displayedQuestion =
    (inQuestion || room.phase === "reveal" || (room.phase === "finished" && last))
      ? room.questions[inQuestion ? room.round : (last?.index ?? room.round)]
      : null;

  const outcome = outcomeFor(room, userId);
  return {
    code: room.code,
    phase: room.phase,
    serverNow: now,
    mode: room.mode,
    goal: GOAL,
    maxHp: startHp(room.mode),
    phaseEndsAt,
    round: room.round,
    totalRounds: room.questions.length || QUESTION_COUNT,
    isPublic: room.isPublic,
    me: {
      name: me.name,
      avatar: me.avatar,
      hp: me.hp,
      progress: Math.min(GOAL, me.progress),
      correct: me.correct,
      streak: me.streak,
    },
    opponent: opponent
      ? {
          name: opponent.name,
          avatar: opponent.avatar,
          hp: opponent.hp,
          progress: Math.min(GOAL, opponent.progress),
          correct: opponent.correct,
          streak: opponent.streak,
          answered: Boolean(room.answers[opponent.userId]),
        }
      : null,
    question: displayedQuestion
      ? {
          id: displayedQuestion.id,
          promptFr: displayedQuestion.promptFr,
          promptEn: displayedQuestion.promptEn,
          options: displayedQuestion.options,
        }
      : null,
    myAnswer: inQuestion ? (room.answers[userId]?.key ?? null) : null,
    reveal,
    result:
      room.phase === "finished" && outcome && room.reason
        ? { outcome, reason: room.reason, rewards: room.rewards[userId] ?? null }
        : null,
  };
}
