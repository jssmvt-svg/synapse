const letters = ["A", "B", "C", "D", "E"];

export interface QcmSeedShape {
  prompt_fr: string;
  explanation_fr: string;
  multiple_answers: boolean;
  visual_key?: string;
  options: { key: string; label_fr: string; correct: boolean }[];
}

function question(
  prompt_fr: string,
  correct: string[],
  explanation_fr: string,
  options: string[],
  multiple_answers: boolean,
  visual_key?: string,
): QcmSeedShape {
  return {
    prompt_fr,
    explanation_fr,
    multiple_answers,
    visual_key,
    options: options.map((label_fr, index) => ({
      key: letters[index],
      label_fr,
      correct: correct.includes(letters[index]),
    })),
  };
}

export const multi = (
  prompt: string,
  correct: string[],
  explanation: string,
  options: string[],
): QcmSeedShape => question(prompt, correct, explanation, options, true);

export const single = (
  prompt: string,
  correct: string,
  explanation: string,
  options: string[],
): QcmSeedShape => question(prompt, [correct], explanation, options, false);

// Variante de `single` avec un schéma SVG interne affiché au-dessus de l'énoncé
// (résolu côté client via resolveVisualKey), ex. "amino/Gly", "hb-quaternary".
export const visualSingle = (
  prompt: string,
  correct: string,
  explanation: string,
  options: string[],
  visual_key: string,
): QcmSeedShape => question(prompt, [correct], explanation, options, false, visual_key);
