import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single } from "./qcm-helpers.js";

// Contenu reconstruit à partir des captures d'écran d'un quiz personnel de
// l'utilisatrice (notes de TP Physiologie S1), non recopié mot à mot.
const OSMOLARITY_COURSE = `# TP — Osmolarité plasmatique

## 1. Définition et intérêt clinique
- L'osmolarité plasmatique (C_osm) mesure la concentration totale de particules osmotiquement actives dans le plasma. C'est un paramètre clé du bilan hydro-électrolytique.
- Valeur physiologique normale : **285 – 295 mOsm/L**.

## 2. Formule de calcul
$$C_{osm} = [Na^+ \\times 2] + \\dfrac{glucose}{18} + \\dfrac{ur\\acute{e}e}{6}$$

- Les concentrations de glucose et d'urée sont exprimées en mg/dL ; les diviseurs (18 pour le glucose, 6 pour l'urée) convertissent ces concentrations massiques en concentrations molaires/osmolaires.
- Valeurs de référence utilisées dans la formule :
  - **Glycémie** : 70 – 110 mg/dL
  - **Urée** : 15 – 45 mg/dL

## 3. Pourquoi multiplier le sodium par 2 ?
- Le sodium (Na⁺) est le principal cation extracellulaire. Chaque ion Na⁺ est électriquement associé à un anion (principalement le chlorure Cl⁻) pour maintenir l'électroneutralité du plasma.
- Multiplier la concentration de Na⁺ par 2 permet donc d'estimer la contribution osmotique totale du sodium **et** de ses anions associés, sans avoir à mesurer chaque anion séparément.

## 4. Exemple de calcul
Pour un patient avec Na⁺ = 140 mEq/L, glycémie = 180 mg/dL et urée = 30 mg/dL :

$$C_{osm} = (140 \\times 2) + (180/18) + (30/6) = 280 + 10 + 5 = 295 \\ mOsm/L$$

## Points à retenir
- Osmolarité normale : 285–295 mOsm/L.
- Formule : Na⁺×2 + glucose/18 + urée/6.
- Le facteur ×2 sur le sodium compense les anions associés (électroneutralité), pas une conversion d'unité.`;

export const OSMOLARITY_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Osmolarité plasmatique",
    source_label: "TP Physiologie — Notes personnelles (quiz Osmolarity N)",
    content_fr: OSMOLARITY_COURSE,
  },
  qcm: [
    single("Quelle est la plage physiologique normale de l'osmolarité plasmatique ?", "A", "L'osmolarité plasmatique normale se situe entre 285 et 295 mOsm/L, valeur de référence standard en laboratoire.", ["285 – 295 mOsm/L", "300 – 310 mOsm/L", "70 – 110 mOsm/L", "136 – 145 mOsm/L"]),
    single("Quelle plage de glycémie est utilisée dans la formule de calcul de l'osmolarité ?", "C", "La glycémie normale utilisée dans la formule (70–110 mg/dL) représente la fraction 'active' de l'osmolarité plasmatique.", ["110 – 140 mg/dL", "15 – 45 mg/dL", "70 – 110 mg/dL", "5,5 – 8,0 g/dL"]),
    single("Quelle est la plage de référence de l'urée utilisée dans la formule de l'osmolarité ?", "C", "L'urée, produit terminal du catabolisme azoté, a une concentration sanguine normale de 15 à 45 mg/dL.", ["1,6 – 2,4 mEq/L", "98 – 106 mEq/L", "15 – 45 mg/dL", "50 – 60 %"]),
    single("Quelle formule permet de calculer l'osmolarité plasmatique (C_osm) ?", "B", "La formule complète tient compte du doublement du sodium (anions associés) et des diviseurs de conversion pour le glucose (18) et l'urée (6).", ["Cosm = [Na+] + glucose/18 + urée/6", "Cosm = [Na+ × 2] + glucose/18 + urée/6", "Cosm = [Na+ × 2] + glucose/6 + urée/18", "Cosm = [Na+ + K+] × 2 + glucose + urée"]),
    single("Pourquoi multiplie-t-on la concentration de sodium par 2 dans la formule de l'osmolarité ?", "B", "Chaque ion Na+ est associé à un anion (comme le chlorure) pour maintenir l'électroneutralité ; doubler le sodium estime la contribution osmotique totale de ces sels.", ["Pour convertir les mEq/L en mg/dL", "Pour tenir compte des anions associés qui maintiennent l'électroneutralité", "Parce que le sodium est un cation divalent", "Pour compenser la faible concentration du potassium"]),
    single("Pour un patient avec Na+ = 140 mEq/L, glycémie = 180 mg/dL et urée = 30 mg/dL, quelle est l'osmolarité calculée ?", "C", "Cosm = (140×2) + (180/18) + (30/6) = 280 + 10 + 5 = 295 mOsm/L.", ["280 mOsm/L", "315 mOsm/L", "295 mOsm/L", "155 mOsm/L"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Osmolarité plasmatique", duration_seconds: 480 },
};

export const OSMOLARITY_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est l'osmolarité plasmatique normale ?", question_en: "What is the normal plasma osmolarity?", answer_fr: "285 – 295 mOsm/L", answer_en: "285 – 295 mOsm/L" },
  { question_fr: "Quelle est la formule de l'osmolarité plasmatique (Cosm) ?", question_en: "What is the formula for plasma osmolarity (Cosm)?", answer_fr: "Cosm = [Na⁺ × 2] + glucose/18 + urée/6", answer_en: "Cosm = [Na+ × 2] + glucose/18 + urea/6" },
  { question_fr: "Pourquoi double-t-on la concentration de sodium dans le calcul de l'osmolarité ?", question_en: "Why is sodium concentration doubled when calculating osmolarity?", answer_fr: "Pour tenir compte des anions associés (comme le chlorure) qui maintiennent l'électroneutralité du plasma", answer_en: "To account for associated anions (like chloride) that maintain plasma electroneutrality" },
  { question_fr: "Quel diviseur convertit la glycémie (mg/dL) en contribution osmolaire ?", question_en: "What divisor converts glycemia (mg/dL) into its osmolar contribution?", answer_fr: "18", answer_en: "18" },
  { question_fr: "Quel diviseur convertit l'urée (mg/dL) en contribution osmolaire ?", question_en: "What divisor converts urea (mg/dL) into its osmolar contribution?", answer_fr: "6", answer_en: "6" },
  { question_fr: "Quelle est la plage normale de glycémie utilisée dans le calcul de l'osmolarité ?", question_en: "What is the normal glycemia range used in the osmolarity calculation?", answer_fr: "70 – 110 mg/dL", answer_en: "70 – 110 mg/dL" },
  { question_fr: "Quelle est la plage normale d'urée sanguine ?", question_en: "What is the normal blood urea range?", answer_fr: "15 – 45 mg/dL", answer_en: "15 – 45 mg/dL" },
  { question_fr: "Un patient a Na⁺=140 mEq/L, glycémie=180 mg/dL, urée=30 mg/dL. Quelle est son osmolarité ?", question_en: "A patient has Na+=140 mEq/L, glucose=180 mg/dL, urea=30 mg/dL. What is their osmolarity?", answer_fr: "295 mOsm/L : (140×2) + (180/18) + (30/6) = 280+10+5", answer_en: "295 mOsm/L: (140×2) + (180/18) + (30/6) = 280+10+5" },
  { question_fr: "L'osmolarité plasmatique mesure-t-elle uniquement le sodium ?", question_en: "Does plasma osmolarity measure only sodium?", answer_fr: "Non, elle intègre le sodium (×2), le glucose et l'urée, les 3 principaux solutés osmotiquement actifs", answer_en: "No, it integrates sodium (×2), glucose, and urea, the 3 main osmotically active solutes" },
  { question_fr: "Quel ion est le principal déterminant de l'osmolarité plasmatique ?", question_en: "Which ion is the main determinant of plasma osmolarity?", answer_fr: "Le sodium (Na⁺), principal cation extracellulaire", answer_en: "Sodium (Na+), the main extracellular cation" },
];

const IONOGRAMME_COURSE = `# TP — Ionogramme plasmatique

## 1. Rôle de l'ionogramme
- L'ionogramme mesure la concentration des principaux électrolytes plasmatiques : sodium, potassium, chlorure, calcium (et magnésium). Il complète l'osmolarité pour évaluer l'équilibre hydro-électrolytique.

## 2. Valeurs normales des électrolytes plasmatiques

| Électrolyte | Valeur normale |
| --- | --- |
| Sodium (Na⁺) | 136 – 145 mEq/L |
| Potassium (K⁺) | 3,5 – 5 mEq/L |
| Chlorure (Cl⁻) | 98 – 106 mEq/L |
| Calcium (Ca²⁺) | 2,2 – 2,8 mEq/L |
| Magnésium (Mg²⁺) | 1,6 – 2,4 mEq/L |

## 3. Rôle du sodium dans le calcul de l'osmolarité
- Comme pour l'osmolarité, la concentration de Na⁺ (en mEq/L) est multipliée par 2 pour représenter sa contribution osmotique totale, incluant les anions associés.

## 4. Le trou anionique urinaire (Urine Anion Gap)
- Utilisé dans l'évaluation de la clairance rénale et le diagnostic différentiel des acidoses métaboliques hyperchlorémiques.
- Formule : **AG urinaire = Na⁺ − (Cl⁻ + HCO₃⁻)** (concentrations urinaires).
- Valeur normale : **12 ± 2 mEq/L**.

## Points à retenir
- Sodium 136–145, potassium 3,5–5, chlorure 98–106, calcium 2,2–2,8, magnésium 1,6–2,4 mEq/L.
- Le facteur ×2 sur le sodium (osmolarité) reflète l'électroneutralité, pas une conversion d'unité.
- Le trou anionique urinaire normal est de 12 ± 2 mEq/L.`;

export const IONOGRAMME_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Ionogramme plasmatique",
    source_label: "TP Physiologie — Notes personnelles (quiz Ionogramme N)",
    content_fr: IONOGRAMME_COURSE,
  },
  qcm: [
    single("Quelle est la valeur normale du potassium (K⁺) dans un ionogramme standard ?", "B", "Le potassium, principal cation intracellulaire, a une concentration plasmatique normale de 3,5 à 5 mEq/L.", ["1,6 – 2,4 mEq/L", "3,5 – 5 mEq/L", "136 – 145 mEq/L", "3,5 – 5 mg/dL"]),
    single("Quelle est la valeur normale du sodium (Na⁺) selon les valeurs de laboratoire fournies ?", "A", "Le sodium, principal cation extracellulaire, a une concentration plasmatique normale maintenue entre 136 et 145 mEq/L.", ["136 – 145 mEq/L", "285 – 295 mOsm/L", "98 – 106 mEq/L", "23 – 27 mEq/L"]),
    single("Dans le calcul de l'osmolarité plasmatique, comment la concentration de sodium est-elle intégrée à la formule ?", "A", "Le sodium est multiplié par 2 pour représenter sa contribution osmotique totale avec ses anions associés.", ["[Na+(mEq/L) × 2]", "[Na+(mEq/L) / 6]", "[Na+(mEq/L) + K+(mEq/L)]", "[Na+(mEq/L) / 18]"]),
    single("Quelle est la valeur normale du chlorure (Cl⁻) dans l'ionogramme ?", "A", "Le chlorure, principal anion extracellulaire, a une concentration plasmatique normale de 98 à 106 mEq/L.", ["98 – 106 mEq/L", "3,5 – 5 mEq/L", "1,6 – 2,4 mEq/L", "136 – 145 mEq/L"]),
    single("Quelle est la valeur normale du trou anionique urinaire (Urine Anion Gap) ?", "C", "Le trou anionique urinaire, calculé par Na+ − (Cl- + HCO3-), a une valeur normale de 12 ± 2 mEq/L.", ["2,2 – 2,8 mEq/L", "15 – 45 mg/dL", "12 ± 2 mEq/L", "20 ± 2 %"]),
    single("Quelle est la valeur normale du calcium (Ca²⁺) selon le tableau de l'ionogramme ?", "D", "Le calcium plasmatique ionisé a une valeur normale de 2,2 à 2,8 mEq/L.", ["1,6 – 2,4 mEq/L", "98 – 106 mEq/L", "3,5 – 5 mEq/L", "2,2 – 2,8 mEq/L"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Ionogramme plasmatique", duration_seconds: 480 },
};

export const IONOGRAMME_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la valeur normale du sodium plasmatique (Na⁺) ?", question_en: "What is the normal plasma sodium (Na+) value?", answer_fr: "136 – 145 mEq/L", answer_en: "136 – 145 mEq/L" },
  { question_fr: "Quelle est la valeur normale du potassium plasmatique (K⁺) ?", question_en: "What is the normal plasma potassium (K+) value?", answer_fr: "3,5 – 5 mEq/L", answer_en: "3.5 – 5 mEq/L" },
  { question_fr: "Quelle est la valeur normale du chlorure plasmatique (Cl⁻) ?", question_en: "What is the normal plasma chloride (Cl-) value?", answer_fr: "98 – 106 mEq/L", answer_en: "98 – 106 mEq/L" },
  { question_fr: "Quelle est la valeur normale du calcium plasmatique (Ca²⁺) ?", question_en: "What is the normal plasma calcium (Ca2+) value?", answer_fr: "2,2 – 2,8 mEq/L", answer_en: "2.2 – 2.8 mEq/L" },
  { question_fr: "Quelle est la valeur normale du magnésium plasmatique (Mg²⁺) ?", question_en: "What is the normal plasma magnesium (Mg2+) value?", answer_fr: "1,6 – 2,4 mEq/L", answer_en: "1.6 – 2.4 mEq/L" },
  { question_fr: "Quelle est la formule du trou anionique urinaire ?", question_en: "What is the formula for the urine anion gap?", answer_fr: "AG urinaire = Na⁺ − (Cl⁻ + HCO₃⁻)", answer_en: "Urine AG = Na+ − (Cl- + HCO3-)" },
  { question_fr: "Quelle est la valeur normale du trou anionique urinaire ?", question_en: "What is the normal value of the urine anion gap?", answer_fr: "12 ± 2 mEq/L", answer_en: "12 ± 2 mEq/L" },
  { question_fr: "Quel est le principal cation extracellulaire mesuré à l'ionogramme ?", question_en: "What is the main extracellular cation measured on the ionogram?", answer_fr: "Le sodium (Na⁺)", answer_en: "Sodium (Na+)" },
  { question_fr: "Quel est le principal anion extracellulaire mesuré à l'ionogramme ?", question_en: "What is the main extracellular anion measured on the ionogram?", answer_fr: "Le chlorure (Cl⁻)", answer_en: "Chloride (Cl-)" },
];

const HEMATOGRAMME_COURSE = `# TP — Hématogramme (numération formule sanguine)

## 1. Hémoglobine (HGB)
- Valeur normale chez l'homme adulte : **15 ± 2 g/dL**.
- Valeur normale chez la femme adulte : **14 ± 2 g/dL**.

## 2. Numération des globules rouges (RBC)
- Homme adulte : **4,9 ± 0,7 millions/mm³**.
- Femme adulte : **4,3 ± 0,6 millions/mm³** (plus basse que chez l'homme).

## 3. Hématocrite (Ht)
- Proportion du volume sanguin occupée par les globules rouges.
- Homme adulte : **45 ± 7 %**.
- Femme adulte : **42 ± 5 %**.

## 4. Indices érythrocytaires
- **VGM (MCV, volume globulaire moyen)** : 80 – 100 μm³ → définit un globule rouge **normocytaire**.
- **TCMH (MCH, teneur corpusculaire moyenne en hémoglobine)** : 27 – 32 pg (mesure en picogrammes, quantité absolue d'hémoglobine par globule rouge).
- **CCMH (MCHC, concentration corpusculaire moyenne en hémoglobine)** : 32 – 36 g/dL (concentration relative d'hémoglobine dans un volume donné de globules rouges tassés).
- **IDR (RDW, indice de distribution des globules rouges)** : 11,5 – 14,5 % (mesure la variation de taille entre globules rouges — l'anisocytose).

## 5. Réticulocytes
- Précurseurs immatures des globules rouges, reflet de l'activité de régénération médullaire.
- Valeur normale : **0,5 – 1,5 %**.
- Une élévation (ex. 1,5–4,0 % ou plus) traduit une réponse médullaire augmentée, typique des anémies régénératives (hémorragie, hémolyse).

## Points à retenir
- Différencier MCV (volume, μm³), MCH (masse d'Hb par cellule, pg) et MCHC (concentration d'Hb, g/dL) — trois indices distincts souvent confondus.
- Les valeurs normales sont systématiquement plus basses chez la femme que chez l'homme pour HGB, RBC et hématocrite.
- Le pourcentage de réticulocytes reflète la régénération médullaire ; son élévation oriente vers une anémie régénérative.`;

export const HEMATOGRAMME_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Hématogramme (NFS)",
    source_label: "TP Physiologie — Notes personnelles (quiz Hematogramme N)",
    content_fr: HEMATOGRAMME_COURSE,
  },
  qcm: [
    single("Quelle est la valeur normale de l'hémoglobine (HGB) chez l'homme adulte ?", "A", "L'hémoglobine normale chez l'homme adulte est de 15 ± 2 g/dL, standard de laboratoire pour un adulte sain.", ["15 ± 2 g/dL", "18 ± 2 g/dL", "12 ± 2 g/dL", "14 ± 2 g/dL"]),
    single("Quelle est la plage normale du volume globulaire moyen (MCV) ?", "B", "Le MCV normal (80–100 μm³) définit un globule rouge normocytaire.", ["32 – 36 μm³", "80 – 100 μm³", "11,5 – 14,5 μm³", "27 – 32 μm³"]),
    single("Quel est le pourcentage normal de réticulocytes chez un individu sain ?", "B", "Le taux normal de réticulocytes (0,5–1,5 %) reflète un équilibre entre production et destruction des globules rouges.", ["11,5 – 14,5 %", "0,5 – 1,5 %", "1,5 – 4,0 %", "5,5 – 8,0 %"]),
    single("Quelle est la valeur normale de la numération des globules rouges (RBC) chez la femme adulte ?", "D", "Le RBC normal chez la femme adulte (4,3 ± 0,6 millions/mm³) est plus bas que chez l'homme.", ["4,9 ± 0,7 millions/mm³", "42 ± 5 millions/mm³", "14 ± 2 millions/mm³", "4,3 ± 0,6 millions/mm³"]),
    single("Quelle est la plage normale de la concentration corpusculaire moyenne en hémoglobine (MCHC) ?", "D", "Le MCHC normal (32–36 g/dL) mesure la concentration d'hémoglobine dans un volume donné de globules rouges tassés.", ["27 – 32 g/dL", "11,5 – 14,5 g/dL", "80 – 100 g/dL", "32 – 36 g/dL"]),
    single("Quelle est la plage normale de l'hématocrite (Ht) chez l'homme adulte ?", "A", "L'hématocrite normal chez l'homme adulte est de 45 ± 7 %, définissant la proportion de globules rouges dans le sang.", ["45 ± 7 %", "32 – 36 %", "42 ± 5 %", "15 ± 2 %"]),
    single("Que mesure l'indice de distribution des globules rouges (RDW) ?", "A", "Le RDW (11,5–14,5 %) mesure la variation de taille entre globules rouges (anisocytose), distinct du volume moyen (MCV).", ["La variation de taille entre globules rouges (anisocytose)", "La concentration d'hémoglobine par cellule", "Le pourcentage de réticulocytes", "Le volume plasmatique total"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Hématogramme", duration_seconds: 560 },
};

export const HEMATOGRAMME_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la valeur normale de l'hémoglobine chez l'homme adulte ?", question_en: "What is the normal hemoglobin value in an adult male?", answer_fr: "15 ± 2 g/dL", answer_en: "15 ± 2 g/dL" },
  { question_fr: "Quelle est la valeur normale de l'hémoglobine chez la femme adulte ?", question_en: "What is the normal hemoglobin value in an adult female?", answer_fr: "14 ± 2 g/dL", answer_en: "14 ± 2 g/dL" },
  { question_fr: "Quelle est la numération normale des globules rouges (RBC) chez l'homme ?", question_en: "What is the normal red blood cell (RBC) count in males?", answer_fr: "4,9 ± 0,7 millions/mm³", answer_en: "4.9 ± 0.7 million/mm³" },
  { question_fr: "Quelle est la numération normale des globules rouges (RBC) chez la femme ?", question_en: "What is the normal red blood cell (RBC) count in females?", answer_fr: "4,3 ± 0,6 millions/mm³", answer_en: "4.3 ± 0.6 million/mm³" },
  { question_fr: "Quelle est l'hématocrite normale chez l'homme ?", question_en: "What is the normal hematocrit in males?", answer_fr: "45 ± 7 %", answer_en: "45 ± 7%" },
  { question_fr: "Quelle est l'hématocrite normale chez la femme ?", question_en: "What is the normal hematocrit in females?", answer_fr: "42 ± 5 %", answer_en: "42 ± 5%" },
  { question_fr: "Que signifie un MCV (VGM) normal de 80-100 μm³ ?", question_en: "What does a normal MCV of 80-100 μm³ indicate?", answer_fr: "Un globule rouge normocytaire (taille normale)", answer_en: "A normocytic red blood cell (normal size)" },
  { question_fr: "Quelle est la différence entre MCH et MCHC ?", question_en: "What is the difference between MCH and MCHC?", answer_fr: "MCH = quantité absolue d'Hb par globule rouge (pg) ; MCHC = concentration d'Hb dans un volume de globules rouges tassés (g/dL)", answer_en: "MCH = absolute Hb amount per RBC (pg); MCHC = Hb concentration within packed RBC volume (g/dL)" },
  { question_fr: "Quelle est la plage normale du MCHC ?", question_en: "What is the normal MCHC range?", answer_fr: "32 – 36 g/dL", answer_en: "32 – 36 g/dL" },
  { question_fr: "Quelle est la plage normale du MCH ?", question_en: "What is the normal MCH range?", answer_fr: "27 – 32 pg", answer_en: "27 – 32 pg" },
  { question_fr: "Que mesure le RDW (IDR) ?", question_en: "What does RDW measure?", answer_fr: "La variation de taille entre globules rouges (anisocytose)", answer_en: "The variation in red blood cell size (anisocytosis)" },
  { question_fr: "Quelle est la plage normale du RDW ?", question_en: "What is the normal RDW range?", answer_fr: "11,5 – 14,5 %", answer_en: "11.5 – 14.5%" },
  { question_fr: "Quel est le taux normal de réticulocytes ?", question_en: "What is the normal reticulocyte percentage?", answer_fr: "0,5 – 1,5 %", answer_en: "0.5 – 1.5%" },
  { question_fr: "Qu'indique une élévation du taux de réticulocytes ?", question_en: "What does an elevated reticulocyte percentage indicate?", answer_fr: "Une réponse médullaire augmentée, typique des anémies régénératives", answer_en: "An increased bone marrow response, typical of regenerative anemias" },
];
