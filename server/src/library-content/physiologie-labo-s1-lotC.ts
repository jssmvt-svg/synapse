import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single } from "./qcm-helpers.js";

// Chapitre labo : protéinogramme (électrophorèse des protéines sériques),
// reconstruit à partir d'un quiz personnel de l'utilisatrice (questions 2 à
// 10 sur 10 exploitées ; la question 1 n'était pas dans le lot de captures
// traité par cet agent).
const PROTEINOGRAM_COURSE = `# TP — Protéinogramme (électrophorèse des protéines sériques)

## Principe
L'électrophorèse des protéines sériques sépare les protéines plasmatiques en 5 fractions selon leur mobilité électrophorétique : albumine, α1-globulines, α2-globulines, β-globulines et γ-globulines.

## Valeurs normales des fractions (en % du total protéique)

| Fraction | Plage normale |
| --- | --- |
| Albumine | 50 – 60 % |
| α1-globulines | 4,2 – 7,2 % |
| α2-globulines | 6,8 – 12 % |
| β-globulines | 9,3 – 15 % |
| γ-globulines | 13 – 23 % |

- L'**albumine** est toujours la fraction la plus abondante.
- Les **γ-globulines** (immunoglobulines) constituent la deuxième fraction la plus abondante et la plus grande fraction parmi les globulines.
- L'**α1-globuline** est la plus petite fraction du protéinogramme normal.

## Protéinémie totale
- Plage normale : **5,5 – 8 %**, soit **55 – 80 g/L** en unités de concentration.
- Conversion : pour passer d'un pourcentage à une concentration en g/L, on multiplie la valeur par 10 (ex. 5,5 % → 55 g/L).

## Points à retenir pour le TP
- Ordre décroissant d'abondance normale : Albumine > γ-globulines > β-globulines > α2-globulines > α1-globulines.
- Ne pas confondre le pourcentage d'une fraction (relatif au total protéique) avec le pourcentage de protéinémie totale (relatif au volume sérique) : ce sont deux échelles différentes.`;

export const PROTEINOGRAM_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Protéinogramme",
    source_label: "TP Physiologie — Notes personnelles (quiz Proteinogram N)",
    content_fr: PROTEINOGRAM_COURSE,
  },
  qcm: [
    single("Quelle fraction représente la plus grande proportion d'un protéinogramme normal ?", "C", "L'albumine est la protéine plasmatique la plus abondante, représentant normalement 50 à 60 % du total protéique.", ["γ-globuline", "α2-globuline", "Albumine", "β-globuline"]),
    single("Quelle est la plage normale de la fraction α1-globuline ?", "D", "L'α1-globuline est la plus petite fraction du protéinogramme normal, avec une plage de 4,2 à 7,2 %.", ["9,3 – 15 %", "13 – 23 %", "6,8 – 12 %", "4,2 – 7,2 %"]),
    single("Vrai ou faux : la plage normale de l'α2-globuline est 6,8 – 12 %.", "B", "Cette affirmation est vraie : la fraction α2-globuline est normalement comprise entre 6,8 et 12 % du total protéique.", ["Faux", "Vrai"]),
    single("Quelle est la plage normale de la fraction β-globuline ?", "D", "La fraction β-globuline est normalement comprise entre 9,3 et 15 % du total protéique.", ["4,2 – 7,2 %", "13 – 23 %", "50 – 60 %", "9,3 – 15 %"]),
    single("Si un rapport de laboratoire indique une protéinémie totale de 5,5 %, quelle est cette valeur en g/L ?", "C", "La conversion d'un pourcentage en g/L pour la protéinémie totale se fait en multipliant par dix : 5,5 % × 10 = 55 g/L.", ["0,55 g/L", "5,5 g/L", "55 g/L", "550 g/L"]),
    single("Quelle est la plage normale de la fraction γ-globuline ?", "D", "La fraction γ-globuline (immunoglobulines) représente normalement 13 à 23 % du total protéique — la deuxième fraction la plus abondante après l'albumine.", ["9,3 – 15 %", "6,8 – 12 %", "50 – 60 %", "13 – 23 %"]),
    single("Quelle est la plage correcte pour le pourcentage d'albumine ?", "A", "L'albumine constitue la majorité du protéinogramme normal, avec une plage de 50 à 60 %.", ["50 – 60 %", "5,5 – 8 %", "13 – 23 %", "4,2 – 7,2 %"]),
    single("Quelle fraction globulinique a une plage normale de 9,3 – 15 % ?", "B", "La fraction β-globuline est définie par cette plage de pourcentage dans un protéinogramme clinique standard.", ["α2-globuline", "β-globuline", "α1-globuline", "γ-globuline"]),
    single("Quelle est la plage correcte de la protéinémie totale (en pourcentage) ?", "C", "La protéinémie totale représente le pourcentage de protéines totales par rapport au volume sérique complet, normalement entre 5,5 et 8 %.", ["4,2 – 7,2 %", "50 – 60 %", "5,5 – 8 %", "6,8 – 12 %"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Protéinogramme", duration_seconds: 720 },
};

export const PROTEINOGRAM_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la plage normale de l'albumine dans un protéinogramme ?", question_en: "What is the normal range of albumin in a proteinogram?", answer_fr: "50 – 60 % du total protéique.", answer_en: "50 – 60% of total protein." },
  { question_fr: "Quelle est la plage normale de l'α1-globuline ?", question_en: "What is the normal range of α1-globulin?", answer_fr: "4,2 – 7,2 % (la plus petite fraction).", answer_en: "4.2 – 7.2% (the smallest fraction)." },
  { question_fr: "Quelle est la plage normale de l'α2-globuline ?", question_en: "What is the normal range of α2-globulin?", answer_fr: "6,8 – 12 %.", answer_en: "6.8 – 12%." },
  { question_fr: "Quelle est la plage normale de la β-globuline ?", question_en: "What is the normal range of β-globulin?", answer_fr: "9,3 – 15 %.", answer_en: "9.3 – 15%." },
  { question_fr: "Quelle est la plage normale de la γ-globuline ?", question_en: "What is the normal range of γ-globulin?", answer_fr: "13 – 23 % (deuxième fraction la plus abondante).", answer_en: "13 – 23% (second most abundant fraction)." },
  { question_fr: "Quelle est la plage normale de la protéinémie totale, en pourcentage ?", question_en: "What is the normal range of total proteinemia, as a percentage?", answer_fr: "5,5 – 8 %.", answer_en: "5.5 – 8%." },
  { question_fr: "Quelle est la plage normale de la protéinémie totale, en g/L ?", question_en: "What is the normal range of total proteinemia, in g/L?", answer_fr: "55 – 80 g/L.", answer_en: "55 – 80 g/L." },
  { question_fr: "Comment convertir un pourcentage de protéinémie en g/L ?", question_en: "How do you convert a proteinemia percentage into g/L?", answer_fr: "En multipliant la valeur par 10.", answer_en: "By multiplying the value by 10." },
  { question_fr: "Quelle fraction protéique est toujours la plus abondante ?", question_en: "Which protein fraction is always the most abundant?", answer_fr: "L'albumine.", answer_en: "Albumin." },
  { question_fr: "Quelle fraction globulinique est la plus abondante des globulines ?", question_en: "Which globulin fraction is the most abundant among the globulins?", answer_fr: "La γ-globuline.", answer_en: "γ-globulin." },
  { question_fr: "Quelle fraction est la plus petite du protéinogramme normal ?", question_en: "Which fraction is the smallest in a normal proteinogram?", answer_fr: "L'α1-globuline.", answer_en: "α1-globulin." },
  { question_fr: "Classez les 5 fractions du protéinogramme par ordre décroissant d'abondance.", question_en: "Rank the 5 proteinogram fractions in decreasing order of abundance.", answer_fr: "Albumine > γ-globuline > β-globuline > α2-globuline > α1-globuline.", answer_en: "Albumin > γ-globulin > β-globulin > α2-globulin > α1-globulin." },
];

// Chapitre labo : formules de physiologie rénale (débit plasmatique rénal,
// fraction de filtration, trou anionique urinaire), reconstruit à partir
// d'un quiz personnel de l'utilisatrice (questions 1 à 8 sur 10 exploitées ;
// les questions 9 et 10 n'étaient pas dans le lot de captures traité par cet
// agent — chapitre à compléter si les captures manquantes sont retrouvées).
const URINE_FORMULA_COURSE = `# TP — Formules de physiologie rénale (clairance et filtration)

## Formules et valeurs clés

| Paramètre | Formule | Valeur normale |
| --- | --- | --- |
| Fraction de filtration (FF) | FF = (GFR / RPFtotal) × 100 | 20 ± 2 % |
| Trou anionique urinaire (AG) | AG = (Na⁺) − (Cl⁻ + HCO₃⁻) | 12 ± 2 mEq/L |
| Débit plasmatique rénal total (RPFtotal) | RPFtotal = ClPAH / 0,9 | voir tableau par sexe ci-dessous |

- La fraction de filtration représente la proportion du débit plasmatique rénal effectivement filtrée à travers les capillaires glomérulaires vers la chambre de Bowman (environ un cinquième du plasma entrant dans le rein).
- Le trou anionique urinaire est utilisé pour évaluer l'équilibre des ions non mesurés dans l'urine, notamment dans l'exploration des acidoses métaboliques (aide à différencier une cause rénale d'une cause digestive).

## Débit plasmatique rénal (RPF) à partir de la clairance du PAH
- Le PAH (acide para-amino-hippurique) est presque totalement épuré du plasma en un seul passage rénal (filtration + sécrétion tubulaire).
- Le **RPF effectif** correspond à environ 90 % du **RPF total** (car une petite fraction du sang rénal, notamment corticale profonde, n'est pas totalement épurée).
- Formule : **RPFtotal = ClPAH / 0,9**

### Valeurs normales du RPFtotal
| Sexe | RPFtotal normal |
| --- | --- |
| Homme | 650 ± 150 mL/min |
| Femme | 600 ± 150 mL/min |

## Débit sanguin rénal total (FSR)
Le débit sanguin rénal total inclut, contrairement au RPF, le volume occupé par les globules rouges.

| Sexe | FSRtotal normal |
| --- | --- |
| Homme | 1200 ± 250 mL/min |
| Femme | 980 ± 180 mL/min |

## Seuil de débit de filtration glomérulaire (GFR) pour la maladie rénale chronique
- Un GFR **< 60 mL/min/1,73 m²**, persistant plus de 3 mois, définit la maladie rénale chronique (Boala Cronică de Rinichi, BCR).
- Un GFR < 15 mL/min/1,73 m² correspond à l'insuffisance rénale terminale (stade le plus sévère), à ne pas confondre avec le seuil diagnostique initial de la maladie rénale chronique.

## Points à retenir pour le TP
- Ne pas confondre RPF (plasma seul) et FSR (sang total, incluant les globules rouges) : le FSR est toujours supérieur au RPF pour un même individu.
- La fraction de filtration relie GFR et RPFtotal — jamais FSRtotal, qui inclut les globules rouges non filtrés.
- Retenir la valeur de conversion 0,9 entre clairance du PAH (RPF effectif) et RPF total.`;

export const URINE_FORMULA_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Formules de physiologie rénale",
    source_label: "TP Physiologie — Notes personnelles (quiz Formule Urine)",
    content_fr: URINE_FORMULA_COURSE,
  },
  qcm: [
    single("Quelle est la valeur de référence normale de la fraction de filtration (FF) ?", "A", "La fraction de filtration représente le pourcentage standard du débit plasmatique rénal filtré à travers les capillaires glomérulaires, normalement 20 ± 2 %.", ["20 ± 2 %", "30 ± 5 %", "15 ± 3 %", "12 ± 2 %"]),
    single("Quelle formule permet de calculer le débit plasmatique rénal total (RPFtotal) à partir de la clairance du PAH (ClPAH) ?", "D", "Le RPF effectif (mesuré par ClPAH) correspond à environ 90 % du RPF total ; on obtient donc le RPF total en divisant la clairance par 0,9.", ["RPFtotal = ClPAH / 1,2", "RPFtotal = ClPAH × 0,9", "RPFtotal = (UPAH × PPAH) / V", "RPFtotal = ClPAH / 0,9"]),
    single("Quelle est la valeur normale du trou anionique urinaire (AG) ?", "A", "Le trou anionique urinaire normal est de 12 ± 2 mEq/L, utilisé pour évaluer l'équilibre des ions non mesurés dans l'urine.", ["12 ± 2 mEq/L", "20 ± 2 mEq/L", "15 ± 5 mEq/L", "8 ± 2 mEq/L"]),
    single("Quelle est la valeur normale du débit sanguin rénal total (FSRtotal) chez un homme sain ?", "A", "Chez l'homme, le débit sanguin rénal total normal est de 1200 ± 250 mL/min, supérieur à celui des femmes.", ["1200 ± 250 mL/min", "980 ± 180 mL/min", "600 ± 150 mL/min", "650 ± 150 mL/min"]),
    single("Un GFR inférieur à quel seuil, persistant plus de 3 mois, définit la maladie rénale chronique ?", "C", "Un GFR persistant sous 60 mL/min/1,73 m² pendant plus de 3 mois est le critère diagnostique de la maladie rénale chronique.", ["< 15 mL/min/1,73 m²", "< 30 mL/min/1,73 m²", "< 60 mL/min/1,73 m²", "< 90 mL/min/1,73 m²"]),
    single("Quelle formule correspond à la fraction de filtration (FF) ?", "A", "La fraction de filtration est le rapport entre le volume de plasma filtré (GFR) et le débit plasmatique rénal total (RPF) disponible, exprimé en pourcentage.", ["FF = (GFR / RPFtotal) × 100", "FF = (RPFtotal / GFR) × 100", "FF = (ClPAH / GFR) × 100", "FF = (GFR / FSRtotal) × 100"]),
    single("Quelle est la valeur normale du débit plasmatique rénal total (RPFtotal) chez une femme saine ?", "D", "Chez la femme, le RPFtotal normal est de 600 ± 150 mL/min, inférieur à la valeur masculine (650 ± 150 mL/min).", ["650 ± 150 mL/min", "980 ± 180 mL/min", "1200 ± 250 mL/min", "600 ± 150 mL/min"]),
    single("Quelle formule permet de calculer le trou anionique urinaire (AG) ?", "A", "Le trou anionique urinaire soustrait la somme des principaux anions mesurables (chlore et bicarbonate) au principal cation mesurable (sodium).", ["AG = (Na⁺) − (Cl⁻ + HCO₃⁻)", "AG = (Cl⁻) − (Na⁺ + HCO₃⁻)", "AG = (Na⁺ + K⁺) − (Cl⁻)", "AG = (Na⁺) + (Cl⁻) − (HCO₃⁻)"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Formules rénales", duration_seconds: 640 },
};

export const URINE_FORMULA_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la formule de la fraction de filtration (FF) ?", question_en: "What is the formula for the filtration fraction (FF)?", answer_fr: "FF = (GFR / RPFtotal) × 100.", answer_en: "FF = (GFR / RPFtotal) × 100." },
  { question_fr: "Quelle est la valeur normale de la fraction de filtration ?", question_en: "What is the normal value of the filtration fraction?", answer_fr: "20 ± 2 %.", answer_en: "20 ± 2%." },
  { question_fr: "Comment calcule-t-on le RPFtotal à partir de la clairance du PAH ?", question_en: "How is RPFtotal calculated from PAH clearance?", answer_fr: "RPFtotal = ClPAH / 0,9.", answer_en: "RPFtotal = ClPAH / 0.9." },
  { question_fr: "Pourquoi divise-t-on la clairance du PAH par 0,9 pour obtenir le RPF total ?", question_en: "Why is PAH clearance divided by 0.9 to obtain total RPF?", answer_fr: "Parce que le RPF effectif (mesuré par le PAH) ne représente qu'environ 90 % du RPF total.", answer_en: "Because effective RPF (measured via PAH) represents only about 90% of total RPF." },
  { question_fr: "Quelle est la valeur normale du RPFtotal chez l'homme ?", question_en: "What is the normal RPFtotal in men?", answer_fr: "650 ± 150 mL/min.", answer_en: "650 ± 150 mL/min." },
  { question_fr: "Quelle est la valeur normale du RPFtotal chez la femme ?", question_en: "What is the normal RPFtotal in women?", answer_fr: "600 ± 150 mL/min.", answer_en: "600 ± 150 mL/min." },
  { question_fr: "Quelle est la valeur normale du débit sanguin rénal total (FSRtotal) chez l'homme ?", question_en: "What is the normal total renal blood flow (FSRtotal) in men?", answer_fr: "1200 ± 250 mL/min.", answer_en: "1200 ± 250 mL/min." },
  { question_fr: "Quelle est la valeur normale du débit sanguin rénal total (FSRtotal) chez la femme ?", question_en: "What is the normal total renal blood flow (FSRtotal) in women?", answer_fr: "980 ± 180 mL/min.", answer_en: "980 ± 180 mL/min." },
  { question_fr: "Quelle est la différence entre le RPF et le FSR ?", question_en: "What is the difference between RPF and FSR?", answer_fr: "Le RPF ne concerne que le plasma ; le FSR inclut en plus le volume occupé par les globules rouges.", answer_en: "RPF only concerns plasma; FSR additionally includes the volume occupied by red blood cells." },
  { question_fr: "Quelle est la formule du trou anionique urinaire (AG) ?", question_en: "What is the formula for the urine anion gap (AG)?", answer_fr: "AG = (Na⁺) − (Cl⁻ + HCO₃⁻).", answer_en: "AG = (Na+) − (Cl− + HCO3−)." },
  { question_fr: "Quelle est la valeur normale du trou anionique urinaire ?", question_en: "What is the normal value of the urine anion gap?", answer_fr: "12 ± 2 mEq/L.", answer_en: "12 ± 2 mEq/L." },
  { question_fr: "À quoi sert le trou anionique urinaire en clinique ?", question_en: "What is the urine anion gap used for clinically?", answer_fr: "À évaluer l'équilibre des ions non mesurés dans l'urine, notamment pour explorer les acidoses métaboliques.", answer_en: "To assess the balance of unmeasured urine ions, particularly in the workup of metabolic acidosis." },
  { question_fr: "Quel seuil de GFR, persistant plus de 3 mois, définit la maladie rénale chronique ?", question_en: "Which GFR threshold, persisting over 3 months, defines chronic kidney disease?", answer_fr: "GFR < 60 mL/min/1,73 m².", answer_en: "GFR < 60 mL/min/1.73 m²." },
  { question_fr: "Quel seuil de GFR correspond à l'insuffisance rénale terminale ?", question_en: "Which GFR threshold corresponds to end-stage renal failure?", answer_fr: "GFR < 15 mL/min/1,73 m².", answer_en: "GFR < 15 mL/min/1.73 m²." },
];
