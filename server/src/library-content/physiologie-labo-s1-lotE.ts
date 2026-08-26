import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single } from "./qcm-helpers.js";

// Source : "Valeurs lab physio.pdf" (fiche de référence personnelle de l'utilisatrice).
const REFERENCE_VALUES_COURSE = `# TP — Valeurs de référence (physiologie)

## 1. Ionogramme sanguin
| Paramètre | Valeur normale |
| --- | --- |
| Na⁺ | 136 – 145 mEq/L |
| K⁺ | 3,5 – 5 mEq/L |
| Ca²⁺ | 2,2 – 2,8 mEq/L |
| Mg²⁺ | 1,6 – 2,4 mEq/L |
| Cl⁻ | 98 – 106 mEq/L |

## 2. Osmolarité
- Concentration osmotique plasmatique : **285 – 295 mOsm/L**.
- Glycémie : 70 – 110 mg/dL. Urée : 15 – 45 mg/dL.
- Formule de calcul à partir de l'ionogramme : **Cosm (mOsm/L) = [Na⁺(mEq/L) × 2] + (glycémie mg%)/18 + (urée mg%)/6**.

## 3. Hémogramme
| Paramètre | Homme | Femme |
| --- | --- | --- |
| Globules rouges (RBC) | 4,9 ± 0,7 mil/mm³ | 4,3 ± 0,6 mil/mm³ |
| Hémoglobine (HGB) | 15 ± 2 g/dL | 14 ± 2 g/dL |
| Hématocrite (Ht) | 45 ± 7 % | 42 ± 5 % |
- Réticulocytes : 0,5 – 1,5 %. MCV (volume globulaire moyen) : 80 – 100 µm³. MCHC : 32 – 36 g/dL. MCH : 27 – 32 pg. RDW : 11,5 – 14,5 %.

## 4. Leucogramme
- Leucocytes (WBC) : Adulte 5 000 – 9 000/mm³ ; Nouveau-né 8 000 – 30 000/mm³ ; 1-2 ans 6 000 – 17 500/mm³ ; 3-7 ans 5 500 – 15 500/mm³ ; 8-16 ans 4 500 – 13 500/mm³.
- Formule leucocytaire (adulte / enfant) : Neutrophiles 56-68 % / 25-40 % ; Éosinophiles 1-3 % / 1-4 % ; Basophiles 0-1 % ; Lymphocytes 20-40 % / 50-70 % ; Monocytes 4-10 % / 4-8 %.

## 5. Équilibre acido-basique (gaz du sang)
- pH : 7,35 – 7,45. PCO₂ : 38 – 42 mmHg. HCO₃⁻ : 23 – 27 mEq/L.

## 6. Bilan d'hémostase
- Test de fragilité capillaire (test du lacet/carnation) : négatif.
- Numération plaquettaire : 150 000 – 350 000/mm³.
- Temps de saignement (TS, hémostase primaire) : 1,5 – 4 min.
- Temps de Howell (HW, hémostase secondaire globale) : 60 – 120 s.
- TCA/APTT (voie intrinsèque) : 20 – 50 s. Temps de Quick/TP (voie extrinsèque) : 12 – 15 s. INR : 0,9 – 1,2.

## 7. Protéinogramme (électrophorèse des protéines, ELFO)
- Protéinémie totale : 55 – 80 g/L.
- Répartition électrophorétique : Albumine 50-60 % ; alpha1-globuline 4,2-7,2 % ; alpha2-globuline 6,8-12 % ; Bêta-globuline 9,3-15 % ; Gamma-globuline 13-23 %.

## 8. Clairance rénale
- Trou anionique (AG) = Na⁺ − (Cl⁻ + HCO₃⁻) = **12 ± 2 mEq/L**.
- Débit plasmatique rénal (RPF total) : 650 ± 150 mL/min (homme) ; 600 ± 150 mL/min (femme).
- Débit sanguin rénal (FSR) : 1200 ± 250 mL/min (homme) ; 980 ± 180 mL/min (femme).
- Fraction de filtration (FF) : 20 ± 2 %, calculée par **FF = (DFG / RPF total) × 100**.
- Clairance du PAH (ClPAH), équivalente au débit plasmatique rénal efficace : **ClPAH = FPR efficace = (U_PAH × V) / P_PAH** ; RPF efficace = 90 % du RPF total, donc RPF total = ClPAH / 0,9.

## Points à retenir pour le TP
- Connaître par cœur les plages normales de l'ionogramme, de l'hémogramme et du bilan d'hémostase : ce sont les valeurs de référence utilisées pour interpréter tout résultat pathologique.
- Savoir manier les 3 formules clés : osmolarité calculée, trou anionique, fraction de filtration.
- Les valeurs diffèrent parfois selon le sexe (hémogramme, débits rénaux) : toujours vérifier si la norme donnée est spécifique.`;

export const REFERENCE_VALUES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Valeurs de référence (physiologie)",
    source_label: "TP Physiologie — Notes personnelles (Valeurs lab physio.pdf)",
    content_fr: REFERENCE_VALUES_COURSE,
  },
  qcm: [
    single("Quelle est la plage normale de la natrémie (Na⁺) ?", "B", "La natrémie normale est de 136 à 145 mEq/L.", ["130 – 136 mEq/L", "136 – 145 mEq/L", "145 – 155 mEq/L", "98 – 106 mEq/L"]),
    single("Quelle est la plage normale de la kaliémie (K⁺) ?", "A", "La kaliémie normale est de 3,5 à 5 mEq/L.", ["3,5 – 5 mEq/L", "5 – 6,5 mEq/L", "1,6 – 2,4 mEq/L", "2,2 – 2,8 mEq/L"]),
    single("Quelle est la concentration osmotique plasmatique normale ?", "C", "L'osmolarité plasmatique normale se situe entre 285 et 295 mOsm/L.", ["270 – 280 mOsm/L", "300 – 310 mOsm/L", "285 – 295 mOsm/L", "250 – 260 mOsm/L"]),
    single("Quelle est la formule de calcul de l'osmolarité plasmatique (Cosm) à partir de l'ionogramme ?", "B", "Cosm = [Na⁺ × 2] + (glycémie/18) + (urée/6), où glycémie et urée sont en mg%.", ["Cosm = Na⁺ + glycémie + urée", "Cosm = [Na⁺ × 2] + (glycémie/18) + (urée/6)", "Cosm = Na⁺ / 2 + glycémie × 18", "Cosm = (Na⁺ + K⁺) × 2"]),
    single("Quelle est l'hémoglobinémie normale chez l'homme adulte ?", "A", "L'hémoglobinémie normale chez l'homme est de 15 ± 2 g/dL (contre 14 ± 2 g/dL chez la femme).", ["15 ± 2 g/dL", "12 ± 2 g/dL", "18 ± 2 g/dL", "10 ± 2 g/dL"]),
    single("Quelle est la plage normale du volume globulaire moyen (MCV) ?", "C", "Le MCV normal est de 80 à 100 µm³ ; en dehors de cette plage, on parle de microcytose ou macrocytose.", ["60 – 80 µm³", "100 – 120 µm³", "80 – 100 µm³", "27 – 32 µm³"]),
    single("Quelle est la plage normale des leucocytes (WBC) chez l'adulte ?", "B", "Le taux de leucocytes normal chez l'adulte est de 5 000 à 9 000/mm³.", ["3 000 – 5 000/mm³", "5 000 – 9 000/mm³", "9 000 – 15 000/mm³", "8 000 – 30 000/mm³"]),
    single("Pourquoi la plage normale de leucocytes du nouveau-né (8 000-30 000/mm³) est-elle si différente de celle de l'adulte ?", "A", "Chez le nouveau-né, la leucocytose physiologique est nettement plus élevée que chez l'adulte, la plage normale étant donc décalée vers le haut.", ["La plage normale pédiatrique est physiologiquement plus élevée à cet âge", "C'est une erreur de mesure fréquente chez le nouveau-né", "Les leucocytes du nouveau-né sont comptés différemment", "Le nouveau-né a systématiquement une infection à la naissance"]),
    single("Quelle est la plage de pH sanguin normal ?", "C", "Le pH sanguin normal se situe entre 7,35 et 7,45.", ["7,00 – 7,35", "7,45 – 7,55", "7,35 – 7,45", "6,80 – 7,20"]),
    single("Quelle est la plage normale de la PCO₂ sanguine ?", "A", "La PCO₂ normale est de 38 à 42 mmHg.", ["38 – 42 mmHg", "23 – 27 mmHg", "60 – 80 mmHg", "20 – 30 mmHg"]),
    single("Quelle est la plage normale de la numération plaquettaire ?", "B", "La numération plaquettaire normale est de 150 000 à 350 000/mm³.", ["50 000 – 150 000/mm³", "150 000 – 350 000/mm³", "350 000 – 500 000/mm³", "10 000 – 50 000/mm³"]),
    single("Quelle est la plage normale du temps de saignement (TS), reflet de l'hémostase primaire ?", "C", "Le temps de saignement normal (hémostase primaire) est de 1,5 à 4 minutes.", ["10 – 15 min", "60 – 120 s", "1,5 – 4 min", "20 – 50 s"]),
    single("Quelle est la valeur normale de l'INR ?", "A", "L'INR normal se situe entre 0,9 et 1,2.", ["0,9 – 1,2", "2 – 3", "1,5 – 2,5", "0,5 – 0,8"]),
    single("Quelle est la plage normale de la protéinémie totale ?", "B", "La protéinémie totale normale est de 55 à 80 g/L.", ["30 – 50 g/L", "55 – 80 g/L", "80 – 100 g/L", "100 – 120 g/L"]),
    single("Quelle est la fraction électrophorétique la plus abondante du protéinogramme normal ?", "A", "L'albumine représente 50 à 60 % des protéines totales, c'est la fraction majoritaire.", ["L'albumine", "La gamma-globuline", "La bêta-globuline", "L'alpha2-globuline"]),
    single("Quelle est la formule du trou anionique (anion gap) ?", "C", "Le trou anionique se calcule par AG = Na⁺ − (Cl⁻ + HCO₃⁻), normalement égal à 12 ± 2 mEq/L.", ["AG = Na⁺ + Cl⁻ + HCO₃⁻", "AG = (Na⁺ + K⁺) − Cl⁻", "AG = Na⁺ − (Cl⁻ + HCO₃⁻)", "AG = Cl⁻ − Na⁺"]),
    single("Quelle est la formule de la fraction de filtration (FF) ?", "B", "FF = (DFG / RPF total) × 100, normalement égale à 20 ± 2 %.", ["FF = DFG × RPF total", "FF = (DFG / RPF total) × 100", "FF = RPF total / DFG", "FF = DFG − RPF total"]),
    single("Quel pourcentage du RPF total représente le RPF efficace (mesuré par la clairance du PAH) ?", "A", "Le RPF efficace représente environ 90 % du RPF total (RPF total = ClPAH / 0,9).", ["90 %", "50 %", "100 %", "75 %"]),
    single("Le débit plasmatique rénal (RPF total) est-il identique chez l'homme et la femme ?", "B", "Non : il est de 650 ± 150 mL/min chez l'homme contre 600 ± 150 mL/min chez la femme.", ["Oui, strictement identique", "Non, légèrement plus élevé chez l'homme (650 vs 600 mL/min)", "Non, plus élevé chez la femme", "Cette valeur ne dépend pas du sexe mais de l'âge"]),
    single("Quelle est la plage normale du chlore (Cl⁻) plasmatique ?", "D", "Le chlore plasmatique normal est de 98 à 106 mEq/L.", ["136 – 145 mEq/L", "3,5 – 5 mEq/L", "23 – 27 mEq/L", "98 – 106 mEq/L"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Valeurs de référence", duration_seconds: 1_600 },
};

export const REFERENCE_VALUES_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Plage normale de la natrémie (Na⁺) ?", question_en: "Normal range for sodium (Na+)?", answer_fr: "136 – 145 mEq/L", answer_en: "136 – 145 mEq/L" },
  { question_fr: "Plage normale de la kaliémie (K⁺) ?", question_en: "Normal range for potassium (K+)?", answer_fr: "3,5 – 5 mEq/L", answer_en: "3.5 – 5 mEq/L" },
  { question_fr: "Plage normale de la calcémie (Ca²⁺) ?", question_en: "Normal range for calcium (Ca2+)?", answer_fr: "2,2 – 2,8 mEq/L", answer_en: "2.2 – 2.8 mEq/L" },
  { question_fr: "Plage normale de la magnésémie (Mg²⁺) ?", question_en: "Normal range for magnesium (Mg2+)?", answer_fr: "1,6 – 2,4 mEq/L", answer_en: "1.6 – 2.4 mEq/L" },
  { question_fr: "Plage normale de la chlorémie (Cl⁻) ?", question_en: "Normal range for chloride (Cl-)?", answer_fr: "98 – 106 mEq/L", answer_en: "98 – 106 mEq/L" },
  { question_fr: "Concentration osmotique plasmatique normale ?", question_en: "Normal plasma osmotic concentration?", answer_fr: "285 – 295 mOsm/L", answer_en: "285 – 295 mOsm/L" },
  { question_fr: "Formule de l'osmolarité calculée (Cosm) ?", question_en: "Formula for calculated osmolarity (Cosm)?", answer_fr: "Cosm = [Na⁺ × 2] + (glycémie mg%)/18 + (urée mg%)/6", answer_en: "Cosm = [Na+ × 2] + (glucose mg%)/18 + (urea mg%)/6" },
  { question_fr: "Glycémie normale à jeun ?", question_en: "Normal fasting blood glucose?", answer_fr: "70 – 110 mg/dL", answer_en: "70 – 110 mg/dL" },
  { question_fr: "Urémie normale ?", question_en: "Normal blood urea?", answer_fr: "15 – 45 mg/dL", answer_en: "15 – 45 mg/dL" },
  { question_fr: "Hémoglobinémie normale chez l'homme ?", question_en: "Normal hemoglobin in males?", answer_fr: "15 ± 2 g/dL", answer_en: "15 ± 2 g/dL" },
  { question_fr: "Hémoglobinémie normale chez la femme ?", question_en: "Normal hemoglobin in females?", answer_fr: "14 ± 2 g/dL", answer_en: "14 ± 2 g/dL" },
  { question_fr: "Nombre de globules rouges (RBC) normal chez l'homme ?", question_en: "Normal RBC count in males?", answer_fr: "4,9 ± 0,7 mil/mm³", answer_en: "4.9 ± 0.7 mil/mm³" },
  { question_fr: "Hématocrite normal chez l'homme ?", question_en: "Normal hematocrit in males?", answer_fr: "45 ± 7 %", answer_en: "45 ± 7%" },
  { question_fr: "Hématocrite normal chez la femme ?", question_en: "Normal hematocrit in females?", answer_fr: "42 ± 5 %", answer_en: "42 ± 5%" },
  { question_fr: "Taux de réticulocytes normal ?", question_en: "Normal reticulocyte count?", answer_fr: "0,5 – 1,5 %", answer_en: "0.5 – 1.5%" },
  { question_fr: "Volume globulaire moyen (MCV) normal ?", question_en: "Normal mean corpuscular volume (MCV)?", answer_fr: "80 – 100 µm³", answer_en: "80 – 100 µm³" },
  { question_fr: "MCHC normale ?", question_en: "Normal MCHC?", answer_fr: "32 – 36 g/dL", answer_en: "32 – 36 g/dL" },
  { question_fr: "Leucocytes (WBC) normaux chez l'adulte ?", question_en: "Normal WBC count in adults?", answer_fr: "5 000 – 9 000/mm³", answer_en: "5,000 – 9,000/mm³" },
  { question_fr: "Leucocytes normaux chez le nouveau-né ?", question_en: "Normal WBC count in newborns?", answer_fr: "8 000 – 30 000/mm³", answer_en: "8,000 – 30,000/mm³" },
  { question_fr: "Pourcentage normal de neutrophiles chez l'adulte ?", question_en: "Normal neutrophil percentage in adults?", answer_fr: "56 – 68 %", answer_en: "56 – 68%" },
  { question_fr: "Pourcentage normal de lymphocytes chez l'adulte ?", question_en: "Normal lymphocyte percentage in adults?", answer_fr: "20 – 40 %", answer_en: "20 – 40%" },
  { question_fr: "Pourcentage normal de lymphocytes chez l'enfant ?", question_en: "Normal lymphocyte percentage in children?", answer_fr: "50 – 70 %", answer_en: "50 – 70%" },
  { question_fr: "pH sanguin normal ?", question_en: "Normal blood pH?", answer_fr: "7,35 – 7,45", answer_en: "7.35 – 7.45" },
  { question_fr: "PCO₂ normale ?", question_en: "Normal PCO2?", answer_fr: "38 – 42 mmHg", answer_en: "38 – 42 mmHg" },
  { question_fr: "HCO₃⁻ normal ?", question_en: "Normal HCO3-?", answer_fr: "23 – 27 mEq/L", answer_en: "23 – 27 mEq/L" },
  { question_fr: "Numération plaquettaire normale ?", question_en: "Normal platelet count?", answer_fr: "150 000 – 350 000/mm³", answer_en: "150,000 – 350,000/mm³" },
  { question_fr: "Temps de saignement (TS) normal ?", question_en: "Normal bleeding time (BT)?", answer_fr: "1,5 – 4 min", answer_en: "1.5 – 4 min" },
  { question_fr: "TCA/APTT normal (voie intrinsèque) ?", question_en: "Normal APTT (intrinsic pathway)?", answer_fr: "20 – 50 s", answer_en: "20 – 50 s" },
  { question_fr: "Temps de Quick/PT normal (voie extrinsèque) ?", question_en: "Normal PT (extrinsic pathway)?", answer_fr: "12 – 15 s", answer_en: "12 – 15 s" },
  { question_fr: "INR normal ?", question_en: "Normal INR?", answer_fr: "0,9 – 1,2", answer_en: "0.9 – 1.2" },
  { question_fr: "Protéinémie totale normale ?", question_en: "Normal total protein?", answer_fr: "55 – 80 g/L", answer_en: "55 – 80 g/L" },
  { question_fr: "Pourcentage normal d'albumine au protéinogramme ?", question_en: "Normal albumin percentage on the proteinogram?", answer_fr: "50 – 60 %", answer_en: "50 – 60%" },
  { question_fr: "Pourcentage normal de gamma-globuline ?", question_en: "Normal gamma-globulin percentage?", answer_fr: "13 – 23 %", answer_en: "13 – 23%" },
  { question_fr: "Formule du trou anionique (anion gap) ?", question_en: "Formula for the anion gap?", answer_fr: "AG = Na⁺ − (Cl⁻ + HCO₃⁻), normale 12 ± 2 mEq/L", answer_en: "AG = Na+ − (Cl- + HCO3-), normal 12 ± 2 mEq/L" },
  { question_fr: "Débit plasmatique rénal (RPF total) normal chez l'homme ?", question_en: "Normal total renal plasma flow (RPF) in males?", answer_fr: "650 ± 150 mL/min", answer_en: "650 ± 150 mL/min" },
  { question_fr: "Débit sanguin rénal (FSR) normal chez l'homme ?", question_en: "Normal renal blood flow (RBF) in males?", answer_fr: "1200 ± 250 mL/min", answer_en: "1200 ± 250 mL/min" },
  { question_fr: "Fraction de filtration (FF) normale ?", question_en: "Normal filtration fraction (FF)?", answer_fr: "20 ± 2 %, FF = (DFG/RPF total) × 100", answer_en: "20 ± 2%, FF = (GFR/total RPF) × 100" },
  { question_fr: "Que représente la clairance du PAH (ClPAH) ?", question_en: "What does PAH clearance (ClPAH) represent?", answer_fr: "Le débit plasmatique rénal efficace (RPF efficace)", answer_en: "The effective renal plasma flow (effective RPF)" },
];

// Source : "Interprétation physio.pdf" (fiche de référence personnelle de l'utilisatrice),
// tableaux d'interprétation des anomalies (protéinogramme, hémostase, fonction rénale, équilibre acido-basique).
const INTERPRETATION_PATTERNS_COURSE = `# TP — Interprétation des anomalies (physiologie)

## 1. Électrophorèse des protéines (ELFO) dans les dysprotéinémies
Le protéinogramme (P = protéinémie totale, Alb. = albumine, α1/α2/β/γ = fractions globuliniques) varie selon un profil caractéristique dans plusieurs situations pathologiques :

| Type de dysprotéinémie | P | Alb. | α1 | α2 | β | γ |
| --- | --- | --- | --- | --- | --- | --- |
| Inflammation aiguë | N | ↓ | ↑ | ↑ | — | — |
| Inflammation chronique | N | ↓ | — | — | — | ↑ |
| Hypo-γ-globulinémie | N | ↑ | — | — | — | ↓↓ |
| Syndrome néphrotique | ↓ | ↓ | — | ↑↑ | ↑ | — |
| Entéropathie exsudative | ↓ | ↓ | — | ↑ | ↑ | ↑ |
| Hépatopathie chronique | ↓ | ↓↓ | — | — | — | ↑↑ |
| Myélome multiple | ↑ | ↓ | — | — | — | ↑↑ |

- L'inflammation aiguë élève surtout l'**α1** et l'**α2** (protéines de la phase aiguë), sans toucher la gamma.
- L'inflammation chronique et l'hépatopathie chronique élèvent surtout la **gamma-globuline**, la seconde de façon plus marquée (↑↑) avec effondrement de l'albumine (↓↓).
- Le syndrome néphrotique et l'entéropathie exsudative partagent une perte protéique (albumine ↓, α2 ↑) ; ils se distinguent par l'atteinte de la gamma-globuline (normale dans le syndrome néphrotique, élevée dans l'entéropathie exsudative où toutes les fractions autres que l'albumine tendent à augmenter).
- Le myélome multiple est la seule situation où la **protéinémie totale augmente** (pic monoclonal en gamma), avec albumine diminuée.

## 2. Interprétation du bilan d'hémostase
| Cause fréquente | Défaut | Test du lacet | Plaquettes | TS | APTT | PT |
| --- | --- | --- | --- | --- | --- | --- |
| Avitaminose C | Temps vasculaire | +++ | N | ↑ | N | N |
| Thrombocytopénie | Temps plaquettaire | + | ↓ | ↑ | N | N |
| Hémophilie / traitement héparine | Mécanisme intrinsèque | − | N | N | ↑ | N |
| Insuffisance hépatique / avitaminose K / antivitamine K | Mécanisme extrinsèque | − | N | N | N | ↑ |
| Syndrome d'hypercoagulation | Thrombocytose | − | ↑ | ↓ | N | N |

- Le **temps de saignement (TS)** explore l'hémostase primaire (vasculaire + plaquettaire) : il s'allonge en cas d'avitaminose C (fragilité vasculaire) ou de thrombocytopénie.
- L'**APTT** explore la voie intrinsèque de la coagulation : il s'allonge dans l'hémophilie et sous héparine.
- Le **PT/temps de Quick** explore la voie extrinsèque : il s'allonge en cas d'insuffisance hépatique, d'avitaminose K ou sous antivitamine K (les facteurs de coagulation vitamine K-dépendants sont synthétisés par le foie).
- Un syndrome d'hypercoagulation associe une thrombocytose (plaquettes ↑) à un TS raccourci (↓), sans anomalie des tests de coagulation globale.

## 3. Appréciation de la fonction rénale par DFG, RPF et FF
| Paramètre | Néphropathie glomérulaire | Néphropathie tubulo-interstitielle | Néphropathie mixte |
| --- | --- | --- | --- |
| DFG (débit de filtration glomérulaire) | ↓ | N | ↓ |
| RPF (débit plasmatique rénal) | N | ↓ | ↓ |
| FF (fraction de filtration) | ↓ | N/↑ | N/↓ |

- Une **néphropathie glomérulaire** touche d'abord le DFG (filtration diminuée) sans toucher le débit plasmatique rénal, d'où une FF abaissée.
- Une **néphropathie tubulo-interstitielle** touche d'abord le débit plasmatique rénal (ischémie/atteinte vasculaire), le DFG restant longtemps préservé, d'où une FF normale ou augmentée (compensation).
- Une atteinte **mixte** associe les deux : DFG et RPF diminués tous les deux, la FF pouvant rester normale ou diminuer selon la prédominance de l'atteinte.

## 4. Troubles acido-basiques associés (doubles désordres)
| Association | pH | PCO₂ | HCO₃⁻ |
| --- | --- | --- | --- |
| Acidose métabolique primaire + alcalose respiratoire primaire | N | ↓↓↓ | ↓↓↓ |
| Alcalose métabolique primaire + acidose respiratoire primaire | N | ↑↑↑ | ↑↑↑ |
| Acidose métabolique primaire + alcalose métabolique primaire | N | N | N |
| Acidose métabolique primaire + acidose respiratoire primaire | ↓↓ | ↑ | ↓ |
| Alcalose métabolique primaire + alcalose respiratoire primaire | ↑↑ | ↓ | ↑ |
- Lorsque deux désordres primaires **opposés** (un métabolique, un respiratoire de sens contraire) coexistent, ils peuvent se compenser mutuellement au point de normaliser le pH — mais PCO₂ et HCO₃⁻ restent, eux, franchement anormaux (dans la même direction), ce qui démasque le double désordre.
- Lorsque deux désordres primaires de **même sens** (tous deux acidosants ou tous deux alcalinisants) coexistent, ils s'additionnent : le pH est fortement anormal, sans compensation possible.

## Points à retenir pour le TP
- Le protéinogramme oriente vers un syndrome inflammatoire (α1/α2 en aigu, gamma en chronique), une fuite protéique (rénale ou digestive), une hépatopathie ou une gammapathie monoclonale.
- Le trio TS/APTT/PT permet de localiser un trouble de l'hémostase : primaire (TS), voie intrinsèque (APTT) ou voie extrinsèque (PT).
- Le trio DFG/RPF/FF distingue une atteinte glomérulaire d'une atteinte tubulo-interstitielle.
- Un pH normal avec PCO₂ et HCO₃⁻ tous deux très anormaux signe un double désordre acido-basique compensé, pas un état normal.`;

export const INTERPRETATION_PATTERNS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Interprétation des anomalies (physiologie)",
    source_label: "TP Physiologie — Notes personnelles (Interprétation physio.pdf)",
    content_fr: INTERPRETATION_PATTERNS_COURSE,
  },
  qcm: [
    single("Quelles fractions du protéinogramme sont typiquement augmentées dans une inflammation aiguë ?", "A", "L'inflammation aiguë augmente surtout les fractions alpha1 et alpha2 (protéines de la phase aiguë), sans toucher la gamma-globuline.", ["Alpha1 et alpha2", "Gamma-globuline seule", "Albumine et bêta", "Alpha2 et gamma"]),
    single("Quelle fraction du protéinogramme est typiquement augmentée (et de façon marquée) dans une hépatopathie chronique ?", "B", "L'hépatopathie chronique se caractérise par une albumine très diminuée (↓↓) et une gamma-globuline très augmentée (↑↑).", ["Alpha1-globuline", "Gamma-globuline (↑↑)", "Bêta-globuline seule", "Alpha2-globuline (↑↑)"]),
    single("Quelle est la seule situation du tableau où la protéinémie totale est augmentée ?", "C", "Le myélome multiple, du fait du pic monoclonal en gamma-globuline, est la seule situation avec une protéinémie totale élevée.", ["Le syndrome néphrotique", "L'entéropathie exsudative", "Le myélome multiple", "L'inflammation chronique"]),
    single("Quelle est la principale différence entre le syndrome néphrotique et l'entéropathie exsudative au protéinogramme ?", "B", "Les deux partagent albumine ↓ et alpha2 ↑, mais seule l'entéropathie exsudative élève aussi la gamma-globuline.", ["Seul le syndrome néphrotique diminue l'albumine", "L'entéropathie exsudative élève aussi la gamma-globuline, contrairement au syndrome néphrotique", "Le syndrome néphrotique n'affecte jamais l'alpha2", "Ce sont des profils protéiques identiques"]),
    single("Quel test explore spécifiquement l'hémostase primaire (temps vasculaire et plaquettaire) ?", "A", "Le temps de saignement (TS) explore l'hémostase primaire.", ["Le temps de saignement (TS)", "L'APTT", "Le temps de Quick (PT)", "L'INR seul"]),
    single("Quel profil d'hémostase évoque une avitaminose C ?", "C", "L'avitaminose C touche le temps vasculaire : test du lacet fortement positif (+++), plaquettes normales, TS allongé, APTT et PT normaux.", ["Test du lacet négatif, plaquettes basses", "APTT allongé isolé", "Test du lacet +++, plaquettes normales, TS allongé", "PT allongé isolé"]),
    single("Quel test de coagulation est allongé en cas d'hémophilie ou de traitement par héparine ?", "B", "L'hémophilie et l'héparine affectent la voie intrinsèque, explorée par l'APTT (allongé), le PT restant normal.", ["Le temps de saignement (TS)", "L'APTT", "Le temps de Quick (PT)", "Le test du lacet"]),
    single("Pourquoi l'insuffisance hépatique et l'avitaminose K allongent-elles le PT/temps de Quick ?", "A", "Ces situations touchent la voie extrinsèque : les facteurs de coagulation vitamine K-dépendants sont synthétisés par le foie, d'où l'allongement du PT en cas d'atteinte hépatique ou de carence en vitamine K.", ["Elles altèrent la synthèse hépatique des facteurs de coagulation vitamine K-dépendants (voie extrinsèque)", "Elles augmentent le nombre de plaquettes", "Elles allongent uniquement le temps de saignement", "Elles n'ont aucun effet sur la coagulation"]),
    single("Quel profil d'hémostase évoque un syndrome d'hypercoagulation ?", "D", "Le syndrome d'hypercoagulation associe une thrombocytose (plaquettes ↑) à un temps de saignement raccourci (↓), sans anomalie de l'APTT/PT.", ["Plaquettes basses, TS allongé", "APTT et PT tous deux allongés", "Test du lacet fortement positif", "Plaquettes augmentées (thrombocytose), TS raccourci"]),
    single("Dans une néphropathie glomérulaire pure, quel paramètre est abaissé alors que le débit plasmatique rénal (RPF) reste normal ?", "A", "Le DFG (débit de filtration glomérulaire) est abaissé alors que le RPF reste normal, d'où une fraction de filtration (FF) diminuée.", ["Le DFG (débit de filtration glomérulaire)", "Le RPF (débit plasmatique rénal)", "La kaliémie", "La protéinémie totale"]),
    single("Dans une néphropathie tubulo-interstitielle, quel paramètre est typiquement abaissé en premier ?", "B", "Le RPF (débit plasmatique rénal) est abaissé en premier, le DFG restant longtemps normal, ce qui élève ou normalise la FF.", ["Le DFG", "Le RPF (débit plasmatique rénal)", "La FF uniquement, sans atteinte du DFG ni du RPF", "Aucun paramètre n'est modifié"]),
    single("Que traduit une fraction de filtration (FF) abaissée avec un RPF normal ?", "C", "Une FF abaissée avec RPF normal traduit une baisse isolée du DFG, typique d'une atteinte glomérulaire.", ["Une atteinte tubulaire pure", "Une hypercoagulation", "Une atteinte glomérulaire (DFG abaissé, RPF préservé)", "Une hépatopathie chronique"]),
    single("Un patient a un pH normal, mais une PCO₂ et un HCO₃⁻ tous deux franchement diminués. Que faut-il en conclure ?", "B", "Un pH normal avec PCO₂ et HCO₃⁻ tous deux très diminués signe un double désordre compensé : acidose métabolique primaire associée à une alcalose respiratoire primaire.", ["L'équilibre acido-basique est parfaitement normal, aucune anomalie", "C'est un double désordre compensé : acidose métabolique + alcalose respiratoire", "C'est une acidose métabolique non compensée", "C'est une erreur de mesure, ce profil est impossible"]),
    single("Que traduit une association acidose métabolique primaire + acidose respiratoire primaire (même sens) ?", "A", "Deux désordres de même sens s'additionnent : le pH est franchement abaissé (acidémie sévère), sans compensation mutuelle possible.", ["Un pH franchement abaissé, sans compensation mutuelle", "Un pH normal, parfaitement compensé", "Un pH franchement élevé", "Aucune anomalie du pH ni des gaz du sang"]),
    single("Pourquoi deux désordres acido-basiques primaires de sens opposé peuvent-ils normaliser le pH tout en laissant PCO₂ et HCO₃⁻ anormaux ?", "C", "Un désordre métabolique et un désordre respiratoire de sens opposé peuvent se compenser réciproquement sur le pH, mais chacun modifie son propre paramètre (PCO₂ pour le respiratoire, HCO₃⁻ pour le métabolique) dans sa propre direction, qui reste donc anormale.", ["Parce que le pH ne dépend ni de la PCO₂ ni du HCO₃⁻", "Parce qu'un des deux désordres est toujours absent en réalité", "Parce que chaque désordre modifie son propre paramètre dans sa propre direction, sans effacer l'anomalie de l'autre", "Ce scénario est physiologiquement impossible"]),
    single("Quelle fraction protéique distingue le mieux une inflammation aiguë d'une inflammation chronique ?", "B", "L'inflammation aiguë élève alpha1/alpha2 sans toucher la gamma ; l'inflammation chronique élève la gamma sans toucher alpha1/alpha2.", ["L'albumine, diminuée uniquement en aigu", "La gamma-globuline, élevée en chronique mais pas en aigu", "Le trou anionique", "Le taux de fibrinogène"]),
    single("Quel élément du bilan d'hémostase reste normal dans TOUTES les situations du tableau d'interprétation sauf la thrombocytopénie et l'hypercoagulation ?", "C", "Dans l'avitaminose C, l'hémophilie/héparine et l'insuffisance hépatique/avitaminose K, la numération plaquettaire reste normale — seules la thrombocytopénie et l'hypercoagulation la modifient directement.", ["Le temps de saignement", "L'APTT", "La numération plaquettaire", "Le test du lacet"]),
    single("Le syndrome néphrotique touche-t-il la gamma-globuline au protéinogramme ?", "B", "Non : dans le tableau d'interprétation, seule l'entéropathie exsudative élève la gamma-globuline parmi les deux causes de fuite protéique ; le syndrome néphrotique la laisse normale.", ["Oui, elle est fortement augmentée", "Non, elle reste normale (contrairement à l'entéropathie exsudative)", "Oui, elle est fortement diminuée", "Cela dépend uniquement de l'âge du patient"]),
    single("Quel paramètre rénal (DFG, RPF ou FF) est le mieux préservé dans une néphropathie tubulo-interstitielle pure ?", "A", "Le DFG reste normal (N) dans la néphropathie tubulo-interstitielle pure, contrairement au RPF qui diminue.", ["Le DFG", "Le RPF", "Aucun des trois n'est préservé", "La FF est le seul paramètre affecté"]),
    single("Un allongement isolé de l'APTT (PT normal) oriente vers quelle voie de la coagulation ?", "B", "Un APTT allongé avec PT normal oriente vers un déficit de la voie intrinsèque (ex. hémophilie, héparine).", ["La voie extrinsèque uniquement", "La voie intrinsèque", "L'hémostase primaire uniquement", "Aucune voie particulière, c'est non spécifique"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Interprétation des anomalies", duration_seconds: 1_600 },
};

export const INTERPRETATION_PATTERNS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelles fractions augmentent dans une inflammation aiguë au protéinogramme ?", question_en: "Which fractions rise in acute inflammation on the proteinogram?", answer_fr: "Alpha1 et alpha2-globulines", answer_en: "Alpha1 and alpha2-globulins" },
  { question_fr: "Quelle fraction augmente dans une inflammation chronique ?", question_en: "Which fraction rises in chronic inflammation?", answer_fr: "La gamma-globuline", answer_en: "Gamma-globulin" },
  { question_fr: "Profil protéique de l'hypo-gamma-globulinémie ?", question_en: "Protein profile of hypo-gamma-globulinemia?", answer_fr: "Albumine augmentée, gamma-globuline très diminuée (↓↓)", answer_en: "Increased albumin, markedly decreased gamma-globulin (↓↓)" },
  { question_fr: "Profil protéique du syndrome néphrotique ?", question_en: "Protein profile of nephrotic syndrome?", answer_fr: "Protéinémie et albumine diminuées, alpha2 très augmentée (↑↑), bêta augmentée", answer_en: "Decreased total protein and albumin, markedly increased alpha2 (↑↑), increased beta" },
  { question_fr: "Profil protéique de l'entéropathie exsudative ?", question_en: "Protein profile of exudative enteropathy?", answer_fr: "Comme le syndrome néphrotique, mais avec gamma-globuline aussi augmentée", answer_en: "Like nephrotic syndrome, but with gamma-globulin also increased" },
  { question_fr: "Profil protéique d'une hépatopathie chronique ?", question_en: "Protein profile of chronic liver disease?", answer_fr: "Albumine très diminuée (↓↓), gamma-globuline très augmentée (↑↑)", answer_en: "Markedly decreased albumin (↓↓), markedly increased gamma-globulin (↑↑)" },
  { question_fr: "Profil protéique du myélome multiple ?", question_en: "Protein profile of multiple myeloma?", answer_fr: "Protéinémie totale augmentée, albumine diminuée, gamma très augmentée (pic monoclonal)", answer_en: "Increased total protein, decreased albumin, markedly increased gamma (monoclonal peak)" },
  { question_fr: "Quel test explore le temps vasculaire de l'hémostase ?", question_en: "Which test explores the vascular phase of hemostasis?", answer_fr: "Le test du lacet (test de fragilité capillaire) et le temps de saignement", answer_en: "The tourniquet test (capillary fragility test) and bleeding time" },
  { question_fr: "Profil d'hémostase de l'avitaminose C ?", question_en: "Hemostasis profile in vitamin C deficiency?", answer_fr: "Test du lacet +++, plaquettes normales, TS allongé, APTT/PT normaux", answer_en: "Tourniquet test +++, normal platelets, prolonged BT, normal APTT/PT" },
  { question_fr: "Profil d'hémostase de la thrombocytopénie ?", question_en: "Hemostasis profile in thrombocytopenia?", answer_fr: "Plaquettes diminuées, TS allongé, APTT/PT normaux", answer_en: "Decreased platelets, prolonged BT, normal APTT/PT" },
  { question_fr: "Profil d'hémostase de l'hémophilie ?", question_en: "Hemostasis profile in hemophilia?", answer_fr: "APTT allongé (voie intrinsèque), plaquettes/TS/PT normaux", answer_en: "Prolonged APTT (intrinsic pathway), normal platelets/BT/PT" },
  { question_fr: "Profil d'hémostase de l'insuffisance hépatique/avitaminose K ?", question_en: "Hemostasis profile in liver failure/vitamin K deficiency?", answer_fr: "PT allongé (voie extrinsèque), plaquettes/TS/APTT normaux", answer_en: "Prolonged PT (extrinsic pathway), normal platelets/BT/APTT" },
  { question_fr: "Profil d'hémostase d'un syndrome d'hypercoagulation ?", question_en: "Hemostasis profile in a hypercoagulable syndrome?", answer_fr: "Thrombocytose, TS raccourci, APTT/PT normaux", answer_en: "Thrombocytosis, shortened BT, normal APTT/PT" },
  { question_fr: "Quel paramètre rénal diminue isolément dans une néphropathie glomérulaire ?", question_en: "Which renal parameter drops in isolation in glomerular nephropathy?", answer_fr: "Le DFG (débit de filtration glomérulaire) ; le RPF reste normal", answer_en: "GFR (glomerular filtration rate); RPF stays normal" },
  { question_fr: "Quel paramètre rénal diminue en premier dans une néphropathie tubulo-interstitielle ?", question_en: "Which renal parameter drops first in tubulo-interstitial nephropathy?", answer_fr: "Le RPF (débit plasmatique rénal) ; le DFG reste normal", answer_en: "RPF (renal plasma flow); GFR stays normal" },
  { question_fr: "Que traduit une FF (fraction de filtration) abaissée ?", question_en: "What does a decreased filtration fraction (FF) indicate?", answer_fr: "Une atteinte glomérulaire (DFG abaissé avec RPF préservé)", answer_en: "Glomerular involvement (decreased GFR with preserved RPF)" },
  { question_fr: "Que traduit un pH normal avec PCO₂ et HCO₃⁻ tous deux très diminués ?", question_en: "What does a normal pH with markedly decreased PCO2 and HCO3- indicate?", answer_fr: "Une acidose métabolique primaire compensée par une alcalose respiratoire primaire", answer_en: "Primary metabolic acidosis compensated by primary respiratory alkalosis" },
  { question_fr: "Que traduit un pH normal avec PCO₂ et HCO₃⁻ tous deux très augmentés ?", question_en: "What does a normal pH with markedly increased PCO2 and HCO3- indicate?", answer_fr: "Une alcalose métabolique primaire compensée par une acidose respiratoire primaire", answer_en: "Primary metabolic alkalosis compensated by primary respiratory acidosis" },
  { question_fr: "Que traduit l'association acidose métabolique + acidose respiratoire (même sens) ?", question_en: "What does combined metabolic acidosis + respiratory acidosis (same direction) indicate?", answer_fr: "Un pH franchement abaissé, sans compensation mutuelle (acidémie sévère)", answer_en: "A markedly decreased pH, with no mutual compensation (severe acidemia)" },
  { question_fr: "Que traduit l'association alcalose métabolique + alcalose respiratoire (même sens) ?", question_en: "What does combined metabolic alkalosis + respiratory alkalosis (same direction) indicate?", answer_fr: "Un pH franchement élevé, sans compensation mutuelle (alcalémie sévère)", answer_en: "A markedly increased pH, with no mutual compensation (severe alkalemia)" },
];
