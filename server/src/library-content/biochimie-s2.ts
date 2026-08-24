import type { LibraryChapterSeed } from "./biochimie-s1.js";
import {
  GLYCOLYSIS_LEARNING,
  GLYCOLYSIS_FLASHCARDS,
  GLYCOLYSIS_REGULATION_LEARNING,
  GLYCOLYSIS_REGULATION_FLASHCARDS,
  TRANSITION_STAGE_LEARNING,
  TRANSITION_STAGE_FLASHCARDS,
  TRANSITION_STAGE_REGULATION_LEARNING,
  TRANSITION_STAGE_REGULATION_FLASHCARDS,
  KREBS_CYCLE_LEARNING,
  KREBS_CYCLE_FLASHCARDS,
} from "./biochimie-s2-glycolyse.js";

// Contenu officiel pré-rédigé : Biochimie, Année 1, Semestre 2.
// Synthèse de la playlist "Metabolism" de Ninja Nerd (31 vidéos), reformulée
// en cours condensés + flashcards détaillées + QCM, un chapitre par vidéo,
// dans l'ordre de la playlist. Déployé par lots successifs.
export const BIOCHIMIE_S2: LibraryChapterSeed[] = [
  {
    ordre: 1,
    titre_fr: "Glycolyse",
    titre_en: "Glycolysis",
    description_fr: "Les 10 étapes enzymatiques de la glycolyse, phase d'investissement et phase de rendement énergétique",
    description_en: "The 10 enzymatic steps of glycolysis, energy investment and energy payoff phases",
    icone: "🍬",
    learning: GLYCOLYSIS_LEARNING,
    cards: GLYCOLYSIS_FLASHCARDS,
  },
  {
    ordre: 2,
    titre_fr: "Régulation de la glycolyse",
    titre_en: "Regulation of Glycolysis",
    description_fr: "Contrôle allostérique et hormonal de l'hexokinase, de la PFK-1 et de la pyruvate kinase",
    description_en: "Allosteric and hormonal control of hexokinase, PFK-1 and pyruvate kinase",
    icone: "🎛️",
    learning: GLYCOLYSIS_REGULATION_LEARNING,
    cards: GLYCOLYSIS_REGULATION_FLASHCARDS,
  },
  {
    ordre: 3,
    titre_fr: "Stade de transition (phase préparatoire)",
    titre_en: "Transition Stage (Preparatory Phase)",
    description_fr: "Décarboxylation oxydative du pyruvate en acétyl-CoA par le complexe pyruvate déshydrogénase",
    description_en: "Oxidative decarboxylation of pyruvate into acetyl-CoA by the pyruvate dehydrogenase complex",
    icone: "🔀",
    learning: TRANSITION_STAGE_LEARNING,
    cards: TRANSITION_STAGE_FLASHCARDS,
  },
  {
    ordre: 4,
    titre_fr: "Régulation du stade de transition",
    titre_en: "Regulation of the Transition Stage",
    description_fr: "Contrôle du complexe pyruvate déshydrogénase par phosphorylation et par les ratios ATP/ADP, NADH/NAD+, acétyl-CoA/CoA",
    description_en: "Control of the pyruvate dehydrogenase complex by phosphorylation and by ATP/ADP, NADH/NAD+, acetyl-CoA/CoA ratios",
    icone: "🎛️",
    learning: TRANSITION_STAGE_REGULATION_LEARNING,
    cards: TRANSITION_STAGE_REGULATION_FLASHCARDS,
  },
  {
    ordre: 5,
    titre_fr: "Le cycle de Krebs",
    titre_en: "The Krebs Cycle",
    description_fr: "Les 8 réactions du cycle de l'acide citrique, production de NADH, FADH2 et GTP/ATP",
    description_en: "The 8 reactions of the citric acid cycle, production of NADH, FADH2 and GTP/ATP",
    icone: "🔄",
    learning: KREBS_CYCLE_LEARNING,
    cards: KREBS_CYCLE_FLASHCARDS,
  },
];
