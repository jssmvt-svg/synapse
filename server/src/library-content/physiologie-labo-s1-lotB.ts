import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single } from "./qcm-helpers.js";

// TP Physiologie S1 — Équilibre acido-basique (gaz du sang), quiz complet (10/10).
const ABB_COURSE = `# TP — Équilibre acido-basique (gaz du sang)

## 1. Valeurs de référence du bulletin acido-basique

| Paramètre | Valeur normale | Composante évaluée |
| --- | --- | --- |
| pH artériel | 7,35 – 7,45 | Homéostasie globale acidité/alcalinité |
| PCO2 | 38 – 42 mmHg | Respiratoire |
| HCO3⁻ (bicarbonate) | 23 – 27 mEq/L | Métabolique |

- La PCO2 s'exprime en mmHg (pression des gaz dissous), différent du mEq/L des électrolytes ou du mOsm/L de l'osmolarité.

## 2. Interprétation des troubles simples
- Une variation isolée de la PCO2 (respiratoire) ou du HCO3⁻ (métabolique) qui fait dévier le pH hors de la norme définit un trouble primaire simple : acidose ou alcalose, respiratoire ou métabolique.

## 3. Associations de deux troubles primaires : compensées, neutralisantes ou additives

| Association | pH | PCO2 | HCO3⁻ | Explication |
| --- | --- | --- | --- | --- |
| Acidose métabolique + alcalose respiratoire | N | ↓↓↓ | ↓↓↓ | Compensation : le trouble respiratoire contrebalance le trouble métabolique |
| Alcalose métabolique + acidose respiratoire | N | ↑↑↑ | ↑↑↑ | Compensation inverse, mêmes valeurs absolues très anormales |
| Acidose métabolique + alcalose métabolique | N | N | N | Association mixte neutralisante (même axe métabolique) |
| Acidose respiratoire + alcalose respiratoire | N | N | N | Association mixte neutralisante (même axe respiratoire) |
| Acidose métabolique + acidose respiratoire | ↓↓ | ↑ | ↓ | Même sens : les deux mécanismes s'additionnent, aggravant l'acidémie |
| Alcalose métabolique + alcalose respiratoire | ↑↑ | ↓ | ↑ | Même sens : les deux mécanismes s'additionnent, aggravant l'alcalémie |

- **Compensation/neutralisation** : quand les deux composantes évoluent en sens opposé, le pH peut revenir dans la norme malgré des valeurs de PCO2/HCO3⁻ très anormales.
- **Addition** : quand les deux composantes évoluent dans le **même sens**, elles s'additionnent et le pH s'écarte fortement de la norme.

## Points à retenir pour le TP
- Toujours vérifier l'unité : PCO2 en mmHg, HCO3⁻ en mEq/L — une confusion d'unité est un piège classique.
- Le HCO3⁻ est LE marqueur de la composante métabolique ; la PCO2 est LE marqueur de la composante respiratoire.
- Un pH normal ne signifie pas l'absence d'anomalie : il peut masquer soit une compensation efficace, soit une association mixte neutralisante de deux troubles primaires opposés.
- Quand PCO2 et HCO3⁻ varient dans le même sens (tous deux ↑ ou tous deux ↓) avec un pH normal, il s'agit typiquement d'une association mixte neutralisante entre les deux axes (métabolique et respiratoire opposés) ; quand ils varient dans le même sens ET que le pH est anormal, les deux mécanismes s'additionnent.`;

export const ABB_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Équilibre acido-basique (gaz du sang)",
    source_label: "TP Physiologie — Notes personnelles (quiz ABB N et non N)",
    content_fr: ABB_COURSE,
  },
  qcm: [
    single("Quelle est la plage normale du pH artériel ?", "D", "Cette plage représente l'homéostasie standard de l'acidité/alcalinité sanguine.", ["7.25 – 7.35", "7.45 – 7.55", "7.00 – 7.10", "7.35 – 7.45"]),
    single("Quelle est la plage normale de la PCO2 ?", "D", "La source définit la plage normale de la PCO2 (composante respiratoire) à 38 – 42 mmHg.", ["35 – 45 mmHg", "98 – 106 mmHg", "23 – 27 mmHg", "38 – 42 mmHg"]),
    single("Quelle est la plage normale du bicarbonate (HCO3⁻) ?", "C", "La source définit la concentration normale de bicarbonate à 23 – 27 mEq/L.", ["12 – 15 mEq/L", "136 – 145 mEq/L", "23 – 27 mEq/L", "38 – 42 mEq/L"]),
    single("Dans quelle unité la PCO2 est-elle exprimée dans le bulletin de laboratoire ?", "B", "La pression partielle des gaz dissous dans le sang, comme le CO2, se mesure en millimètres de mercure (mmHg).", ["g/dL", "mmHg", "mEq/L", "mOsm/L"]),
    single("Quelle association explique un pH normal avec une PCO2 très abaissée (↓↓↓) et un HCO3⁻ très abaissé (↓↓↓) ?", "B", "Une diminution équilibrée des deux composantes (métabolique et respiratoire) peut ramener le pH dans la norme par compensation ou association neutralisante.", ["Acidose métabolique primaire + acidose respiratoire primaire", "Acidose métabolique primaire + alcalose respiratoire primaire", "Alcalose métabolique primaire + acidose respiratoire primaire", "Alcalose métabolique primaire + alcalose respiratoire primaire"]),
    single("Quel profil correspond à l'association mixte alcalose métabolique + acidose respiratoire ?", "B", "Quand acidose respiratoire (PCO2 élevée) et alcalose métabolique (HCO3⁻ élevé) coexistent, elles se neutralisent et maintiennent un pH normal malgré des valeurs absolues très élevées.", ["pH:↓↓, PCO2:↑, HCO3⁻:↓", "pH:N, PCO2:↑↑↑, HCO3⁻:↑↑↑", "pH:N, PCO2:↓↓↓, HCO3⁻:↓↓↓", "pH:↑↑, PCO2:↓, HCO3⁻:↑"]),
    single("Que se passe-t-il quand une acidose métabolique primaire est associée à une alcalose métabolique primaire ?", "C", "Ces deux troubles primaires du même axe métabolique se neutralisent, ramenant pH, PCO2 et HCO3⁻ tous dans la norme.", ["La PCO2 diminue significativement pour compenser", "Le pH devient sévèrement acide", "pH, PCO2 et HCO3⁻ restent tous normaux", "Le HCO3⁻ augmente significativement"]),
    single("Quel est le profil d'une acidose métabolique associée à une acidose respiratoire ?", "C", "Le bicarbonate bas (métabolique) et la PCO2 élevée (respiratoire) poussent tous deux le pH vers une acidémie sévère.", ["pH:↑↑, PCO2:↓, HCO3⁻:↑", "pH:N, PCO2:N, HCO3⁻:N", "pH:↓↓, PCO2:↑, HCO3⁻:↓", "pH:N, PCO2:↓↓↓, HCO3⁻:↓↓↓"]),
    single("Quel est le profil d'une alcalose métabolique associée à une alcalose respiratoire ?", "D", "Une augmentation significative du pH (alcalémie) survient quand PCO2 diminue et HCO3⁻ augmente simultanément.", ["pH:N, PCO2:N, HCO3⁻:N", "pH:↓↓, PCO2:↑, HCO3⁻:↓", "pH:N, PCO2:↑↑↑, HCO3⁻:↑↑↑", "pH:↑↑, PCO2:↓, HCO3⁻:↑"]),
    single("Quel paramètre du bulletin acido-basique évalue principalement la composante métabolique ?", "A", "Le bicarbonate est le tampon et marqueur principal de la contribution métabolique à l'équilibre acido-basique.", ["HCO3⁻", "pH", "Na⁺", "PCO2"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Équilibre acido-basique", duration_seconds: 800 },
};

export const ABB_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la plage normale du pH artériel ?", question_en: "What is the normal arterial pH range?", answer_fr: "7,35 – 7,45.", answer_en: "7.35 – 7.45." },
  { question_fr: "Quelle est la plage normale de la PCO2 ?", question_en: "What is the normal PCO2 range?", answer_fr: "38 – 42 mmHg.", answer_en: "38 – 42 mmHg." },
  { question_fr: "Quelle est la plage normale du bicarbonate (HCO3⁻) ?", question_en: "What is the normal bicarbonate (HCO3-) range?", answer_fr: "23 – 27 mEq/L.", answer_en: "23 – 27 mEq/L." },
  { question_fr: "Dans quelle unité mesure-t-on la PCO2 ?", question_en: "In what unit is PCO2 measured?", answer_fr: "En millimètres de mercure (mmHg).", answer_en: "In millimeters of mercury (mmHg)." },
  { question_fr: "Quel paramètre reflète la composante métabolique de l'équilibre acido-basique ?", question_en: "Which parameter reflects the metabolic component of acid-base balance?", answer_fr: "Le bicarbonate (HCO3⁻).", answer_en: "Bicarbonate (HCO3-)." },
  { question_fr: "Quel paramètre reflète la composante respiratoire de l'équilibre acido-basique ?", question_en: "Which parameter reflects the respiratory component of acid-base balance?", answer_fr: "La PCO2.", answer_en: "PCO2." },
  { question_fr: "Que signifie un pH normal avec PCO2↓↓↓ et HCO3⁻↓↓↓ ?", question_en: "What does a normal pH with PCO2↓↓↓ and HCO3-↓↓↓ mean?", answer_fr: "Une acidose métabolique primaire compensée par une alcalose respiratoire (ou association neutralisante équivalente).", answer_en: "A primary metabolic acidosis compensated by respiratory alkalosis (or an equivalent neutralizing association)." },
  { question_fr: "Que signifie un pH normal avec PCO2↑↑↑ et HCO3⁻↑↑↑ ?", question_en: "What does a normal pH with PCO2↑↑↑ and HCO3-↑↑↑ mean?", answer_fr: "Une association mixte alcalose métabolique + acidose respiratoire qui se neutralise.", answer_en: "A mixed metabolic alkalosis + respiratory acidosis association that neutralizes each other." },
  { question_fr: "Quel est le profil d'une acidose métabolique + acidose respiratoire combinées ?", question_en: "What is the profile of combined metabolic acidosis + respiratory acidosis?", answer_fr: "pH très abaissé (↓↓), PCO2 augmentée (↑), HCO3⁻ abaissé (↓) : les deux mécanismes s'additionnent.", answer_en: "Very low pH (↓↓), increased PCO2 (↑), low HCO3- (↓): both mechanisms add up." },
  { question_fr: "Quel est le profil d'une alcalose métabolique + alcalose respiratoire combinées ?", question_en: "What is the profile of combined metabolic alkalosis + respiratory alkalosis?", answer_fr: "pH très élevé (↑↑), PCO2 abaissée (↓), HCO3⁻ élevé (↑) : les deux mécanismes s'additionnent.", answer_en: "Very high pH (↑↑), decreased PCO2 (↓), high HCO3- (↑): both mechanisms add up." },
  { question_fr: "Que se passe-t-il quand une acidose métabolique et une alcalose métabolique primaires coexistent ?", question_en: "What happens when primary metabolic acidosis and metabolic alkalosis coexist?", answer_fr: "Elles se neutralisent : pH, PCO2 et HCO3⁻ restent tous normaux.", answer_en: "They neutralize each other: pH, PCO2, and HCO3- all remain normal." },
  { question_fr: "Pourquoi ne peut-on pas confondre les unités mEq/L et mmHg dans le bulletin acido-basique ?", question_en: "Why can't mEq/L and mmHg units be confused in the acid-base report?", answer_fr: "mEq/L mesure des concentrations d'électrolytes (dont HCO3⁻), mmHg mesure une pression partielle de gaz (PCO2) — ce sont des grandeurs différentes.", answer_en: "mEq/L measures electrolyte concentrations (including HCO3-), mmHg measures a gas partial pressure (PCO2) — these are different quantities." },
];

// TP Physiologie S1 — Hémostase, portion PARTIELLE du quiz "Hemostasis N et non N"
// (questions 8 à 11 + une question additionnelle sur l'hypercoagulation ; les
// questions 1 à 6 ne sont pas présentes dans les captures fournies).
const HEMOSTASIS_PARTIAL_COURSE = `# TP — Hémostase (portion partielle)

## 1. Mécanismes de la coagulation (voies intrinsèque et extrinsèque)

| Voie | Test | Particularité |
| --- | --- | --- |
| Hémostase primaire | Temps plaquettaire | Dépend du nombre et de la fonction des plaquettes |
| Voie intrinsèque | TCA / APTT | Cible du traitement par héparine |
| Voie extrinsèque | TP / TQ | Dépend des facteurs vitamino-K-dépendants (II, VII, IX, X), synthétisés par le foie |

- Une insuffisance hépatique et une carence en vitamine K sont regroupées dans les tables d'interprétation car elles affectent toutes deux la voie extrinsèque en perturbant la synthèse de ces facteurs, allongeant le TP/TQ.

## 2. Temps de coagulation (Howell)
- Le temps de Howell mesure le temps de coagulation total d'un plasma recalcifié.
- Valeur normale : **60 – 120 secondes** (environ 1 à 2 minutes).

## 3. Test de fragilité capillaire (test du lacet)
- Chez un sujet sain, à vaisseaux et plaquettes normaux, ce test doit être **négatif** (absence de pétéchies significatives).
- Un résultat positif ou fortement positif oriente vers une fragilité vasculaire (ex. carence sévère en vitamine C) ou une atteinte plaquettaire (ex. thrombocytopénie).

## 4. Numération plaquettaire
- Valeur normale : **150 000 – 350 000/mm³**, nécessaire au maintien d'une hémostase primaire efficace.

## 5. Syndrome d'hypercoagulation
- Une thrombocytose (plaquettes élevées) accélère la formation du clou plaquettaire, ce qui peut **raccourcir** le temps de saignement (BT).
- Profil typique : numération plaquettaire **augmentée**, temps de saignement **diminué**.

## Points à retenir pour le TP
- Bien distinguer les tests de l'hémostase primaire (temps de saignement, numération plaquettaire, test du lacet) de ceux de la coagulation plasmatique (temps de Howell, TP/TQ, TCA).
- Insuffisance hépatique et carence en vitamine K partagent le même mécanisme physiopathologique : atteinte de la voie extrinsèque par déficit des facteurs vitamino-K-dépendants.
- Cette fiche est partielle : seule la fin du quiz source (questions sur Howell, test du lacet, numération plaquettaire et hypercoagulation) a pu être exploitée.`;

export const HEMOSTASIS_PARTIAL_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Hémostase (portion partielle)",
    source_label: "TP Physiologie — Notes personnelles (quiz Hemostasis N et non N, incomplet)",
    content_fr: HEMOSTASIS_PARTIAL_COURSE,
  },
  qcm: [
    single("Pourquoi l'insuffisance hépatique et la carence en vitamine K sont-elles regroupées dans les tables d'interprétation de l'hémostase ?", "C", "Le foie produit les facteurs vitamino-K-dépendants (II, VII, IX, X) ; leur déficit allonge spécifiquement le TP/TQ associé à la voie extrinsèque.", ["Elles affectent toutes deux le temps plaquettaire", "Elles affectent toutes deux la voie intrinsèque (TCA)", "Elles affectent toutes deux la voie extrinsèque (TP/TQ)", "Elles affectent toutes deux le temps vasculaire"]),
    single("Quelle est la valeur normale du temps de Howell ?", "B", "Le temps de Howell mesure le temps de coagulation total d'un plasma recalcifié, normalement entre 60 et 120 secondes.", ["20 – 50 s", "60 – 120 s", "1,5 – 4 min", "150 000 – 350 000 s"]),
    single("Quel est le résultat normal du test de fragilité capillaire (test du lacet) chez un sujet sain ?", "D", "Chez un sujet à intégrité vasculaire et fonction plaquettaire normales, ce test doit être négatif, sans formation significative de pétéchies.", ["Positif (+)", "Fortement positif (+++)", "Indéterminé", "Négatif (−)"]),
    single("Quelle est la plage normale de la numération plaquettaire totale ?", "D", "C'est la plage physiologique standard des plaquettes nécessaire à une hémostase primaire efficace.", ["136 – 145 mEq/L", "5 000 – 9 000/mm³", "4,3 – 4,9 million/mm³", "150 000 – 350 000/mm³"]),
    single("Dans un syndrome d'hypercoagulation, quelles modifications typiques observe-t-on sur la numération plaquettaire et le temps de saignement (BT) ?", "B", "La thrombocytose accélère la formation du clou plaquettaire, ce qui raccourcit le temps de saignement par rapport à la normale.", ["Numération plaquettaire ↓ et BT ↑", "Numération plaquettaire ↑ et BT ↓", "Numération plaquettaire ↑ et BT ↑", "Numération plaquettaire normale et BT ↓"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Hémostase (portion partielle)", duration_seconds: 400 },
};

export const HEMOSTASIS_PARTIAL_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel mécanisme commun relie insuffisance hépatique et carence en vitamine K dans l'interprétation de l'hémostase ?", question_en: "What common mechanism links hepatic impairment and vitamin K deficiency in hemostasis interpretation?", answer_fr: "Toutes deux perturbent la synthèse des facteurs vitamino-K-dépendants (II, VII, IX, X), allongeant le TP/TQ de la voie extrinsèque.", answer_en: "Both disrupt synthesis of vitamin K-dependent factors (II, VII, IX, X), prolonging the extrinsic pathway's PT." },
  { question_fr: "Quelle est la valeur normale du temps de Howell ?", question_en: "What is the normal Howell time?", answer_fr: "60 – 120 secondes.", answer_en: "60 – 120 seconds." },
  { question_fr: "Que mesure le temps de Howell ?", question_en: "What does the Howell time measure?", answer_fr: "Le temps de coagulation total d'un plasma recalcifié.", answer_en: "The total coagulation time of recalcified plasma." },
  { question_fr: "Quel est le résultat normal du test du lacet chez un sujet sain ?", question_en: "What is the normal tourniquet (capillary fragility) test result in a healthy subject?", answer_fr: "Négatif (absence de pétéchies significatives).", answer_en: "Negative (no significant petechiae formation)." },
  { question_fr: "Quelle est la plage normale de la numération plaquettaire ?", question_en: "What is the normal platelet count range?", answer_fr: "150 000 – 350 000/mm³.", answer_en: "150,000 – 350,000/mm³." },
  { question_fr: "Quel effet la thrombocytose a-t-elle sur le temps de saignement ?", question_en: "What effect does thrombocytosis have on bleeding time?", answer_fr: "Elle le raccourcit, car la formation du clou plaquettaire est accélérée.", answer_en: "It shortens it, because platelet plug formation is accelerated." },
  { question_fr: "Quel test évalue la voie intrinsèque de la coagulation ?", question_en: "Which test evaluates the intrinsic coagulation pathway?", answer_fr: "Le TCA (APTT), cible du traitement par héparine.", answer_en: "APTT, the target of heparin treatment." },
  { question_fr: "Quel test évalue la voie extrinsèque de la coagulation ?", question_en: "Which test evaluates the extrinsic coagulation pathway?", answer_fr: "Le TP/TQ, allongé en cas de déficit des facteurs vitamino-K-dépendants.", answer_en: "PT, prolonged when vitamin K-dependent factors are deficient." },
];
