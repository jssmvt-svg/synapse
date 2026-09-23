import { AMINO_ACIDS, type AminoAcidDef } from "./amino-acids";

export interface QuizQuestion {
  target: AminoAcidDef;
  options: AminoAcidDef[];
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Construit `count` questions à choix unique : pour chaque acide aminé cible,
// 3 distracteurs tirés au hasard parmi les autres (mélange de catégories pour
// varier la difficulté — pas de filtrage par catégorie identique, volontairement
// simple pour un premier jet).
export function buildAminoAcidQuiz(pool: AminoAcidDef[] = AMINO_ACIDS, count = 10): QuizQuestion[] {
  const targets = shuffle(pool).slice(0, Math.min(count, pool.length));

  return targets.map((target) => {
    const distractorPool = pool.filter((aa) => aa.code3 !== target.code3);
    const distractors = shuffle(distractorPool).slice(0, 3);
    return { target, options: shuffle([target, ...distractors]) };
  });
}
