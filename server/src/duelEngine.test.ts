import assert from "node:assert/strict";
import test from "node:test";
import {
  ABSENCE_MS,
  COMPLICATION_DAMAGE,
  DEFAULT_AVATAR,
  GOAL,
  MAX_HP,
  normalizeMode,
  attackTierForStreak,
  normalizeAvatar,
  COUNTDOWN_MS,
  QUESTION_MS,
  REVEAL_MS,
  advance,
  computeRewards,
  createRoom,
  joinRoom,
  leaveRoom,
  outcomeFor,
  submitAnswer,
  touch,
  viewFor,
  type EngineQuestion,
} from "./duelEngine.js";

const questions: EngineQuestion[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  chapterId: 1,
  promptFr: `Question ${index + 1}`,
  promptEn: `Question ${index + 1}`,
  explanationFr: "Parce que.",
  explanationEn: "Because.",
  options: ["A", "B", "C", "D"].map((key) => ({ key, labelFr: key, labelEn: key })),
  correctKey: "A",
}));

function startedRoom() {
  const room = createRoom("ABCDE", { userId: 1, name: "Ana" }, { isPublic: false, chapterId: null }, 0);
  assert.equal(joinRoom(room, { userId: 2, name: "Ben" }, questions, 0), null);
  advance(room, COUNTDOWN_MS);
  assert.equal(room.phase, "question");
  return room;
}

test("refuse qu'un joueur rejoigne sa propre salle ou une salle pleine", () => {
  const room = createRoom("ABCDE", { userId: 1, name: "Ana" }, { isPublic: false, chapterId: null }, 0);
  assert.equal(joinRoom(room, { userId: 1, name: "Ana" }, questions, 0), "ALREADY_IN_ROOM");
  assert.equal(joinRoom(room, { userId: 2, name: "Ben" }, questions, 0), null);
  assert.equal(joinRoom(room, { userId: 3, name: "Cy" }, questions, 0), "ROOM_NOT_JOINABLE");
});

test("une bonne réponse rapide inflige plus de dégâts qu'une réponse lente", () => {
  const room = startedRoom();
  const start = COUNTDOWN_MS;
  submitAnswer(room, 1, "A", start + 1_000);
  submitAnswer(room, 2, "A", start + 15_000);
  assert.equal(room.phase, "reveal");
  const anaHit = MAX_HP - room.players[1].hp; // dégâts infligés à Ben
  const benHit = MAX_HP - room.players[0].hp; // dégâts infligés à Ana
  assert.ok(anaHit > benHit, `${anaHit} devrait dépasser ${benHit}`);
  assert.ok(benHit >= 15 && anaHit <= 30);
});

test("une mauvaise réponse ou l'absence de réponse n'inflige rien", () => {
  const room = startedRoom();
  submitAnswer(room, 1, "B", COUNTDOWN_MS + 500);
  touch(room, 2, COUNTDOWN_MS + QUESTION_MS);
  advance(room, COUNTDOWN_MS + QUESTION_MS);
  assert.equal(room.phase, "reveal");
  assert.equal(room.players[0].hp, MAX_HP);
  assert.equal(room.players[1].hp, MAX_HP);
});

test("refuse une seconde réponse, une option inconnue et une réponse hors question", () => {
  const room = startedRoom();
  assert.equal(submitAnswer(room, 1, "Z", COUNTDOWN_MS + 100), "UNKNOWN_OPTION");
  assert.equal(submitAnswer(room, 1, "A", COUNTDOWN_MS + 200), null);
  assert.equal(submitAnswer(room, 1, "B", COUNTDOWN_MS + 300), "ALREADY_ANSWERED");
  touch(room, 2, COUNTDOWN_MS + QUESTION_MS + 1);
  touch(room, 1, COUNTDOWN_MS + QUESTION_MS + 1);
  assert.equal(submitAnswer(room, 2, "A", COUNTDOWN_MS + QUESTION_MS + 1), "NOT_IN_QUESTION");
});

test("ne révèle la bonne réponse qu'après la manche", () => {
  const room = startedRoom();
  const during = viewFor(room, 1, COUNTDOWN_MS + 100);
  assert.equal(during.reveal, null);
  assert.ok(!JSON.stringify(during).includes("correctKey"));
  submitAnswer(room, 1, "A", COUNTDOWN_MS + 200);
  submitAnswer(room, 2, "B", COUNTDOWN_MS + 300);
  const after = viewFor(room, 1, COUNTDOWN_MS + 400);
  assert.equal(after.reveal?.correctKey, "A");
  assert.equal(after.reveal?.myCorrect, true);
  assert.equal(after.reveal?.opponentCorrect, false);
});

test("le match se termine après toutes les questions et désigne le vainqueur aux points de vie", () => {
  const room = startedRoom();
  let clock = COUNTDOWN_MS;
  for (let round = 0; round < questions.length; round += 1) {
    submitAnswer(room, 1, round < 2 ? "A" : "B", clock + 1_000);
    submitAnswer(room, 2, round === 0 ? "A" : "B", clock + 2_000);
    clock += REVEAL_MS + 2_000;
    touch(room, 1, clock);
    touch(room, 2, clock);
    advance(room, clock);
  }
  assert.equal(room.phase, "finished");
  assert.equal(outcomeFor(room, 1), "win");
  assert.equal(outcomeFor(room, 2), "loss");
  assert.equal(room.reason, "rounds");
  assert.ok(computeRewards(room, 1).xp > computeRewards(room, 2).xp);
  assert.ok(computeRewards(room, 1).gold > computeRewards(room, 2).gold);
});

test("un K.O. termine le match avant la dernière question", () => {
  const room = startedRoom();
  let clock = COUNTDOWN_MS;
  for (let round = 0; round < questions.length && room.phase !== "finished"; round += 1) {
    submitAnswer(room, 1, "A", clock + 100);
    submitAnswer(room, 2, "B", clock + 200);
    clock += REVEAL_MS + 300;
    touch(room, 1, clock);
    touch(room, 2, clock);
    advance(room, clock);
  }
  assert.equal(room.phase, "finished");
  assert.equal(room.reason, "ko");
  assert.equal(outcomeFor(room, 1), "win");
  assert.ok(room.round < questions.length - 1);
});

test("égalité de points de vie = match nul", () => {
  const room = startedRoom();
  let clock = COUNTDOWN_MS;
  for (let round = 0; round < questions.length; round += 1) {
    submitAnswer(room, 1, "A", clock + 1_000);
    submitAnswer(room, 2, "A", clock + 1_000);
    clock += REVEAL_MS + 1_000;
    touch(room, 1, clock);
    touch(room, 2, clock);
    advance(room, clock);
  }
  assert.equal(outcomeFor(room, 1), "draw");
  assert.equal(outcomeFor(room, 2), "draw");
});

test("un joueur qui abandonne perd et ne gagne aucune récompense", () => {
  const room = startedRoom();
  leaveRoom(room, 2, COUNTDOWN_MS + 500);
  assert.equal(room.phase, "finished");
  assert.equal(outcomeFor(room, 1), "win");
  assert.equal(outcomeFor(room, 2), "loss");
  assert.deepEqual(computeRewards(room, 2), { xp: 0, gold: 0 });
  assert.ok(computeRewards(room, 1).xp > 0);
});

test("un joueur silencieux trop longtemps est déclaré forfait", () => {
  const room = startedRoom();
  const later = COUNTDOWN_MS + ABSENCE_MS + 1_000;
  touch(room, 1, later);
  advance(room, later);
  assert.equal(room.phase, "finished");
  assert.equal(room.reason, "forfeit");
  assert.equal(outcomeFor(room, 1), "win");
});

test("quitter une salle en attente l'annule sans vainqueur", () => {
  const room = createRoom("ABCDE", { userId: 1, name: "Ana" }, { isPublic: true, chapterId: null }, 0);
  leaveRoom(room, 1, 10);
  assert.equal(room.phase, "finished");
  assert.equal(outcomeFor(room, 1), null);
});

test("l'avatar est un code validé, sinon avatar par défaut", () => {
  assert.equal(normalizeAvatar("3-afro-0-5-s-3"), "3-afro-0-5-s-3");
  assert.equal(normalizeAvatar("2-hijab-8-4-s-4"), "2-hijab-8-4-s-4");
  for (const bad of ["<script>", "kaito", "9-spiky-0-0-p-0", "1-mohawk-0-0-p-0", "1-spiky-9-0-p-0", "1-spiky-0-8-p-0", "1-spiky-0-0-p-6", undefined, 42]) {
    assert.equal(normalizeAvatar(bad), DEFAULT_AVATAR);
  }
  const room = createRoom("ABCDE", { userId: 1, name: "Ana", avatar: "4-braids-1-7-s-4" }, { isPublic: false, chapterId: null }, 0);
  joinRoom(room, { userId: 2, name: "Ben", avatar: "inconnu" }, questions, 0);
  const view = viewFor(room, 1, 0);
  assert.equal(view.me.avatar, "4-braids-1-7-s-4");
  assert.equal(view.opponent?.avatar, DEFAULT_AVATAR);
});

test("une série de bonnes réponses débloque des attaques plus fortes", () => {
  assert.deepEqual([0, 1, 2, 3, 4, 7].map(attackTierForStreak), [0, 1, 2, 2, 3, 3]);
  const room = startedRoom();
  let clock = COUNTDOWN_MS;
  const dealt: number[] = [];
  for (let round = 0; round < 4; round += 1) {
    const before = room.players[1].hp;
    submitAnswer(room, 1, "A", clock + 1_000);
    submitAnswer(room, 2, "B", clock + 1_000);
    dealt.push(before - room.players[1].hp);
    assert.equal(room.lastRound?.attackTier[1], attackTierForStreak(round + 1));
    clock += REVEAL_MS + 1_000;
    touch(room, 1, clock);
    touch(room, 2, clock);
    advance(room, clock);
    if (room.phase === "finished") break;
  }
  assert.ok(dealt[1] > dealt[0], String(dealt));
  assert.ok(room.players[0].streak >= 2);
});

test("une mauvaise réponse casse la série", () => {
  const room = startedRoom();
  let clock = COUNTDOWN_MS;
  submitAnswer(room, 1, "A", clock + 1_000);
  submitAnswer(room, 2, "B", clock + 1_000);
  assert.equal(room.players[0].streak, 1);
  clock += REVEAL_MS + 1_000;
  touch(room, 1, clock);
  touch(room, 2, clock);
  advance(room, clock);
  submitAnswer(room, 1, "B", clock + 500);
  submitAnswer(room, 2, "B", clock + 500);
  assert.equal(room.players[0].streak, 0);
  assert.equal(room.lastRound?.attackTier[1], 0);
});

function startedModeRoom(mode: string) {
  const room = createRoom("ABCDE", { userId: 1, name: "Ana" }, { isPublic: false, chapterId: null, mode }, 0);
  joinRoom(room, { userId: 2, name: "Ben" }, questions, 0);
  advance(room, COUNTDOWN_MS);
  return room;
}

// Joue des manches où chaque joueur répond selon `pick(round)` -> [clé Ana, clé Ben].
function play(room: ReturnType<typeof startedModeRoom>, rounds: number, pick: (round: number) => [string, string]) {
  let clock = COUNTDOWN_MS;
  for (let round = 0; round < rounds && room.phase !== "finished"; round += 1) {
    const [a, b] = pick(round);
    submitAnswer(room, 1, a, clock + 2_000);
    submitAnswer(room, 2, b, clock + 2_000);
    clock += REVEAL_MS + 2_000;
    touch(room, 1, clock);
    touch(room, 2, clock);
    advance(room, clock);
  }
}

test("le mode de jeu inconnu retombe sur le combat", () => {
  assert.equal(normalizeMode("race"), "race");
  assert.equal(normalizeMode("poker"), "combat");
  assert.equal(normalizeMode(undefined), "combat");
});

test("course : les bonnes réponses font avancer, la ligne d'arrivée termine le match", () => {
  const room = startedModeRoom("race");
  play(room, 1, () => ["A", "B"]);
  assert.ok(room.players[0].progress > 0);
  assert.equal(room.players[1].progress, 0);
  assert.equal(room.players[0].hp, 100); // aucune blessure en course
  play(room, 10, () => ["A", "B"]);
  assert.equal(room.phase, "finished");
  assert.equal(room.reason, "goal");
  assert.equal(outcomeFor(room, 1), "win");
  assert.ok(viewFor(room, 1, 0).me.progress <= GOAL);
});

test("course : les deux joueurs à égalité franchissent la ligne = match nul", () => {
  const room = startedModeRoom("race");
  play(room, 10, () => ["A", "A"]);
  assert.equal(room.phase, "finished");
  assert.equal(outcomeFor(room, 1), "draw");
});

test("opération : une erreur est une complication et trop d'erreurs tuent le patient", () => {
  const room = startedModeRoom("surgery");
  play(room, 1, () => ["A", "B"]);
  assert.equal(room.players[1].hp, 100 - COMPLICATION_DAMAGE);
  assert.equal(room.players[0].hp, 100);
  assert.equal(room.lastRound?.complication[2], true);
  play(room, 10, () => ["A", "B"]);
  assert.equal(room.phase, "finished");
  assert.equal(outcomeFor(room, 1), "win");
  assert.equal(outcomeFor(room, 2), "loss");
});

test("opération : terminer l'intervention en premier gagne", () => {
  const room = startedModeRoom("surgery");
  play(room, 10, () => ["A", "A"]);
  assert.equal(room.phase, "finished");
  assert.equal(room.reason, "goal");
});

test("tir à la corde : la corde se déplace vers le plus fort, la somme des forces est conservée", () => {
  const room = startedModeRoom("tug");
  assert.equal(room.players[0].hp + room.players[1].hp, 200);
  play(room, 1, () => ["A", "B"]);
  assert.ok(room.players[0].hp > 100);
  assert.ok(room.players[1].hp < 100);
  assert.equal(room.players[0].hp + room.players[1].hp, 200);
  play(room, 10, () => ["A", "B"]);
  assert.equal(room.phase, "finished");
  assert.equal(room.reason, "ko");
  assert.equal(outcomeFor(room, 1), "win");
});

test("tir à la corde : deux tireurs égaux ne bougent pas la corde", () => {
  const room = startedModeRoom("tug");
  play(room, 1, () => ["A", "A"]);
  assert.equal(room.players[0].hp, 100);
  assert.equal(room.players[1].hp, 100);
});
