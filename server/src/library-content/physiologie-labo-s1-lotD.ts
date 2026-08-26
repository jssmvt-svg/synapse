import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single } from "./qcm-helpers.js";

// Chapitre labo : formule leucocytaire (leucogramme normal et pathologique),
// reconstruit à partir du tableau de référence "Types of Leucograms" de
// l'utilisatrice (source_label ci-dessous) et des 10 questions du quiz
// "Leukogram non N" (auto-généré à partir de ses notes, réponses toutes visibles).
const LEUKOGRAM_COURSE = `# TP — Leucogramme normal et pathologique

## 1. Valeurs normales chez l'adulte
- **Leucocytes totaux (WBC)** : 5 000 – 9 000 /mm³.
- **Neutrophiles (NE)** : 56 – 68 %.
- **Lymphocytes (LY)** : 20 – 40 %.
- **Monocytes (MO)** : 4 – 10 %.

## 2. Particularités pédiatriques
- Chez l'enfant de 1-2 ans, le WBC total normal est plus élevé que chez l'adulte (6 000 – 17 500 /mm³) : le système immunitaire est très actif à cet âge.
- Chez l'enfant en général : lymphocytes plus élevés (20-70 % selon l'âge) et neutrophiles plus bas que chez l'adulte — profil inverse de l'adulte, où les neutrophiles dominent.
- Monocytes chez l'enfant : 4 – 8 % (légèrement plus bas et plus étroit que chez l'adulte, 4-10 %).

## 3. Tableau d'interprétation du leucogramme par contexte clinique
| Contexte | Nombre total (Nr.L) | NE | EO | BA | LY | MO |
| --- | --- | --- | --- | --- | --- | --- |
| Enfant (physiologique) | ↑ | ↓ | — | — | ↑ | — |
| Infection bactérienne aiguë | ↑ | ↑ | — | — | ↓ | — |
| Parasitose, allergies, maladies dermatologiques | N ou ↑ | — | ↑ | — | — | — |
| Mononucléose infectieuse, tuberculose | ↑ | ↓↓ | — | — | ↑↑ | ↑↑ |
| Infection virale aiguë | ↑ | ↓ | — | — | ↑ | ↑ |
| Maladie contagieuse | N | — | — | ↑ | — | — |

## 4. Principes d'interprétation
- Une **infection bactérienne aiguë** stimule la production de neutrophiles : le WBC total et le pourcentage de neutrophiles augmentent, tandis que le pourcentage de lymphocytes diminue par effet relatif.
- Les **infections virales aiguës** suivent le schéma inverse : neutropénie relative avec lymphocytose et monocytose. La mononucléose infectieuse et la tuberculose représentent une forme accentuée de ce profil (neutropénie marquée ↓↓, lymphocytose et monocytose marquées ↑↑).
- Une **éosinophilie** (↑ EO) oriente vers une parasitose, une allergie ou une maladie dermatologique — pas vers une infection bactérienne.
- Une **basophilie** (↑ BA) avec un compte total normal est le marqueur assez spécifique d'une maladie contagieuse dans ce référentiel.
- Une **augmentation isolée des monocytes** est davantage associée aux infections virales ou aux états chroniques (tuberculose) qu'à une infection bactérienne aiguë classique.

## Points à retenir pour le TP
- Toujours comparer le profil observé (Nr.L, NE, EO, BA, LY, MO) au tableau d'interprétation plutôt qu'à une seule valeur isolée.
- Le profil pédiatrique physiologique (↑ lymphocytes, ↓ neutrophiles relatifs) ne doit pas être confondu avec un profil pathologique viral chez l'adulte.
- Différencier profil bactérien (↑NE, ↓LY) et profil viral/mononucléosique (↓NE, ↑LY, ↑MO) est la distinction la plus fréquemment testée.`;

export const LEUKOGRAM_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Leucogramme normal et pathologique",
    source_label: "TP Physiologie — Notes personnelles (quiz \"Leukogram non N\" + tableau \"Types of Leucograms\")",
    content_fr: LEUKOGRAM_COURSE,
  },
  qcm: [
    single(
      "Dans l'interprétation d'un leucogramme, quel profil est typiquement observé lors d'une infection bactérienne aiguë ?",
      "A",
      "Une infection bactérienne aiguë stimule la production de neutrophiles, entraînant une augmentation du nombre total de leucocytes et du pourcentage de neutrophiles.",
      ["↑ WBC et ↑ NE", "↓ WBC et ↓ NE", "WBC normal et ↑ BA", "↑ WBC et ↑ LY"],
    ),
    single(
      "Quel est le profil leucocytaire physiologique d'un enfant sain comparé à un adulte ?",
      "C",
      "Les enfants ont naturellement un nombre total de leucocytes plus élevé et un pourcentage de lymphocytes plus élevé, comparé au profil à dominance neutrophilique de l'adulte.",
      ["↑ WBC, ↑ NE et ↓ LY", "↓ WBC, NE normal et ↑ LY", "↑ WBC, ↓ NE et ↑ LY", "WBC normal, ↑ NE et ↓ LY"],
    ),
    single(
      "Une augmentation des éosinophiles (EO) est le plus évocatrice de quel groupe de pathologies ?",
      "B",
      "Les éosinophiles sont des cellules spécialisées qui répondent aux infections parasitaires et sont fortement impliquées dans les réponses immunitaires allergiques et cutanées.",
      ["Infections bactériennes aiguës et inflammation", "Parasitoses, allergies et maladies dermatologiques", "Infections virales aiguës et tuberculose", "Maladies contagieuses et hypercoagulation"],
    ),
    single(
      "Quelle est la plage de référence normale du nombre total de leucocytes (WBC) chez l'adulte ?",
      "A",
      "La plage de référence standard établie pour un adulte sain est de 5 000 à 9 000 leucocytes par millimètre cube.",
      ["5 000 – 9 000 /mm³", "8 000 – 30 000 /mm³", "150 000 – 350 000 /mm³", "4,3 – 4,9 millions /mm³"],
    ),
    single(
      "Un leucogramme montrant ↑ WBC, ↓↓ NE, ↑↑ LY et ↑↑ MO est le plus évocateur de quelle(s) pathologie(s) ?",
      "A",
      "La mononucléose infectieuse et la tuberculose se caractérisent par une lymphocytose et une monocytose marquées, accompagnées d'une diminution relative des neutrophiles.",
      ["Mononucléose infectieuse ou tuberculose", "Maladie contagieuse", "Infection bactérienne aiguë", "Syndrome d'hypercoagulation"],
    ),
    single(
      "Quel paramètre du leucogramme augmente spécifiquement lors d'une « maladie contagieuse », alors que le WBC total reste normal ?",
      "B",
      "Le référentiel identifie une augmentation des basophiles comme marqueur spécifique des maladies contagieuses lorsque le compte total est normal.",
      ["Monocytes (MO)", "Basophiles (BA)", "Neutrophiles (NE)", "Éosinophiles (EO)"],
    ),
    single(
      "Quelle est la plage normale du pourcentage de lymphocytes (LY) chez l'adulte ?",
      "A",
      "Chez l'adulte, les lymphocytes représentent normalement 20 à 40 % de la population leucocytaire totale.",
      ["20 – 40 %", "56 – 68 %", "50 – 70 %", "4 – 10 %"],
    ),
    single(
      "Comment se différencie le profil leucocytaire d'une infection virale aiguë de celui d'une infection bactérienne aiguë ?",
      "C",
      "Les réponses virales impliquent typiquement une lymphocytose et une neutropénie relative, tandis que les réponses bactériennes favorisent une neutrophilie et une lymphopénie relative.",
      [
        "Les infections virales montrent ↑ NE, les bactériennes ↑ BA",
        "Les infections virales donnent un WBC normal, les bactériennes le diminuent toujours",
        "Les infections virales montrent ↓ NE et ↑ LY, les bactériennes ↑ NE et ↓ LY",
        "Les infections virales n'affectent que les monocytes, les bactériennes que les éosinophiles",
      ],
    ),
    single(
      "Quelle est la plage normale du pourcentage de monocytes (MO) chez l'enfant ?",
      "C",
      "Les enfants ont une plage normale de monocytes légèrement plus basse et plus étroite (4-8 %) que celle des adultes (4-10 %).",
      ["25 – 40 %", "1 – 4 %", "4 – 8 %", "20 – 40 %"],
    ),
    single(
      "Quelle variation des monocytes (MO) est observée lors d'une infection virale aiguë ?",
      "B",
      "Les infections virales aiguës sont associées à une augmentation des monocytes, en parallèle de la lymphocytose.",
      ["↓↓", "↑", "Normal (N)", "↓"],
    ),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Leucogramme", duration_seconds: 800 },
};

export const LEUKOGRAM_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la plage normale du WBC total chez l'adulte ?", question_en: "What is the normal total WBC range in an adult?", answer_fr: "5 000 – 9 000 /mm³.", answer_en: "5,000 – 9,000 /mm³." },
  { question_fr: "Quelle est la plage normale des neutrophiles (NE) chez l'adulte ?", question_en: "What is the normal neutrophil (NE) range in an adult?", answer_fr: "56 – 68 %.", answer_en: "56 – 68%." },
  { question_fr: "Quelle est la plage normale des lymphocytes (LY) chez l'adulte ?", question_en: "What is the normal lymphocyte (LY) range in an adult?", answer_fr: "20 – 40 %.", answer_en: "20 – 40%." },
  { question_fr: "Quelle est la plage normale des monocytes (MO) chez l'adulte ?", question_en: "What is the normal monocyte (MO) range in an adult?", answer_fr: "4 – 10 %.", answer_en: "4 – 10%." },
  { question_fr: "Quelle est la plage normale des monocytes chez l'enfant ?", question_en: "What is the normal monocyte range in a child?", answer_fr: "4 – 8 %, légèrement plus bas que l'adulte.", answer_en: "4 – 8%, slightly lower than in adults." },
  { question_fr: "Quel est le profil leucocytaire (Nr.L, NE, LY) d'un enfant sain vs un adulte ?", question_en: "What is the leukocyte profile (Nr.L, NE, LY) of a healthy child vs an adult?", answer_fr: "↑ WBC total, ↓ NE relatif, ↑ LY (profil inverse de l'adulte, à dominance neutrophilique).", answer_en: "↑ total WBC, relatively ↓ NE, ↑ LY (opposite of the neutrophil-dominant adult profile)." },
  { question_fr: "Quel profil leucocytaire évoque une infection bactérienne aiguë ?", question_en: "Which leukocyte profile suggests an acute bacterial infection?", answer_fr: "↑ WBC et ↑ NE, avec ↓ LY relatif.", answer_en: "↑ WBC and ↑ NE, with relatively ↓ LY." },
  { question_fr: "Quel profil leucocytaire évoque une infection virale aiguë ?", question_en: "Which leukocyte profile suggests an acute viral infection?", answer_fr: "↑ WBC, ↓ NE, ↑ LY et ↑ MO.", answer_en: "↑ WBC, ↓ NE, ↑ LY, and ↑ MO." },
  { question_fr: "Quel profil leucocytaire évoque une mononucléose infectieuse ou une tuberculose ?", question_en: "Which leukocyte profile suggests infectious mononucleosis or TB?", answer_fr: "↑ WBC, ↓↓ NE (neutropénie marquée), ↑↑ LY et ↑↑ MO (lymphocytose et monocytose marquées).", answer_en: "↑ WBC, ↓↓ NE (marked neutropenia), ↑↑ LY and ↑↑ MO (marked lymphocytosis and monocytosis)." },
  { question_fr: "Quel groupe de pathologies est évoqué par une éosinophilie (↑ EO) ?", question_en: "Which group of conditions is suggested by eosinophilia (↑ EO)?", answer_fr: "Parasitoses, allergies et maladies dermatologiques.", answer_en: "Parasitosis, allergies, and dermatological diseases." },
  { question_fr: "Quel paramètre augmente spécifiquement dans les maladies contagieuses avec un WBC total normal ?", question_en: "Which parameter specifically increases in contagious diseases with a normal total WBC?", answer_fr: "Les basophiles (BA).", answer_en: "Basophils (BA)." },
  { question_fr: "Un patient a ↑WBC, ↑NE et ↓LY. Quel diagnostic évoquer en premier ?", question_en: "A patient has ↑WBC, ↑NE, and ↓LY. What diagnosis should be considered first?", answer_fr: "Une infection bactérienne aiguë.", answer_en: "An acute bacterial infection." },
  { question_fr: "Pourquoi une monocytose isolée oriente-t-elle plutôt vers une infection virale ou chronique que bactérienne ?", question_en: "Why does isolated monocytosis point more toward a viral or chronic infection than a bacterial one?", answer_fr: "Parce que les infections bactériennes aiguës sont définies par la neutrophilie, pas par la monocytose.", answer_en: "Because acute bacterial infections are defined by neutrophilia, not by monocytosis." },
  { question_fr: "Comment différencier une neutropénie « simple » (↓) d'une neutropénie « marquée » (↓↓) dans ce référentiel ?", question_en: "How to differentiate a \"simple\" neutropenia (↓) from a \"marked\" one (↓↓) in this reference?", answer_fr: "↓ correspond à l'infection virale aiguë typique ; ↓↓ correspond à un profil plus extrême, celui de la mononucléose infectieuse/tuberculose.", answer_en: "↓ corresponds to typical acute viral infection; ↓↓ corresponds to a more extreme profile seen in infectious mononucleosis/TB." },
];

// Chapitre labo : formule/dosages urinaires — débit de filtration glomérulaire
// (GFR), reconstruit à partir des 2 dernières questions capturées du quiz
// "Formule Urine" (questions 1-8 non capturées, hors de la plage de ce lot).
const URINE_FORMULA_COURSE = `# TP — Débit de filtration glomérulaire (formule urinaire)

## 1. Valeur normale du DFG (GFR)
- Un rein sain présente un **débit de filtration glomérulaire (DFG/GFR) > 90 mL/min/1,73 m²**, pouvant atteindre jusqu'à environ 150 mL/min/1,73 m².
- À ne pas confondre avec le **débit sanguin rénal (renal blood flow, FSR)**, très supérieur (≈ 1200 ± 250 mL/min/1,73 m²), qui mesure le débit de sang traversant le rein, et non le volume filtré.

## 2. Stades d'altération de la fonction rénale (par le DFG)
| DFG | Interprétation |
| --- | --- |
| > 90 mL/min/1,73 m² | Fonction rénale normale |
| < 90 mL/min/1,73 m² | Altération légère de la fonction, pas encore une maladie rénale chronique |
| < 60 mL/min/1,73 m² | Seuil de la maladie rénale chronique |
| < 15 mL/min/1,73 m² | Insuffisance rénale terminale (« end-stage renal failure ») : fonction rénale sévèrement compromise, nécessitant un traitement de suppléance rénale (dialyse ou greffe) |

## Points à retenir pour le TP
- Ne pas confondre le DFG (volume filtré, mL/min) avec la concentration plasmatique de l'urée (15-45 mg/dL), qui est un paramètre biochimique distinct.
- Le seuil de 15 mL/min/1,73 m² marque le passage à l'insuffisance rénale terminale nécessitant une thérapie de suppléance.

**Note pédagogique** : seules les 2 dernières questions de ce quiz (portant sur le DFG) ont pu être récupérées à partir des captures disponibles ; les questions 1 à 8 (probablement sur d'autres formules/dosages urinaires) n'étaient pas présentes dans les captures fournies et pourraient être ajoutées ultérieurement si retrouvées.`;

export const URINE_FORMULA_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Débit de filtration glomérulaire (DFG)",
    source_label: "TP Physiologie — Notes personnelles (quiz \"Formule Urine\", questions 9-10/10 uniquement)",
    content_fr: URINE_FORMULA_COURSE,
  },
  qcm: [
    single(
      "Quelle valeur de DFG correspond à la variation pathologique de l'insuffisance rénale terminale (« end-stage renal failure ») ?",
      "D",
      "À ce niveau de filtration glomérulaire, la fonction rénale est sévèrement compromise et nécessite un traitement de suppléance rénale.",
      ["< 60 mL/min/1,73 m²", "15 – 45 mg/dL", "< 90 mL/min/1,73 m²", "< 15 mL/min/1,73 m²"],
    ),
    single(
      "Quelle est la plage normale et saine du débit de filtration glomérulaire (DFG) ?",
      "A",
      "Une fonction rénale saine se définit par un DFG supérieur à 90, atteignant souvent jusqu'à 150 mL/min/1,73 m².",
      ["> 90 mL/min/1,73 m²", "20 ± 2 mL/min/1,73 m²", "> 60 mL/min/1,73 m²", "1200 ± 250 mL/min/1,73 m²"],
    ),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Débit de filtration glomérulaire", duration_seconds: 200 },
};

export const URINE_FORMULA_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la valeur normale du DFG (GFR) chez un adulte sain ?", question_en: "What is the normal GFR value in a healthy adult?", answer_fr: "> 90 mL/min/1,73 m², pouvant atteindre ~150 mL/min/1,73 m².", answer_en: "> 90 mL/min/1.73 m², reaching up to ~150 mL/min/1.73 m²." },
  { question_fr: "À partir de quel seuil de DFG parle-t-on de maladie rénale chronique ?", question_en: "Below which GFR threshold is chronic kidney disease defined?", answer_fr: "En dessous de 60 mL/min/1,73 m².", answer_en: "Below 60 mL/min/1.73 m²." },
  { question_fr: "À partir de quel seuil de DFG parle-t-on d'insuffisance rénale terminale ?", question_en: "Below which GFR threshold is end-stage renal failure defined?", answer_fr: "En dessous de 15 mL/min/1,73 m².", answer_en: "Below 15 mL/min/1.73 m²." },
  { question_fr: "Que mesure le débit sanguin rénal (FSR), et comment se distingue-t-il du DFG ?", question_en: "What does renal blood flow (FSR) measure, and how does it differ from GFR?", answer_fr: "Le FSR (≈1200±250 mL/min/1,73 m²) mesure le débit de sang traversant le rein, alors que le DFG mesure le volume effectivement filtré, une valeur bien plus faible.", answer_en: "FSR (≈1200±250 mL/min/1.73 m²) measures blood flow through the kidney, while GFR measures the volume actually filtered, a much smaller value." },
];

// Table de référence supplémentaire trouvée dans ce lot (source
// "Interprétation physio.pdf", page ~17) : diagnostic différentiel des
// anémies par indices érythrocytaires. Aucune question de quiz correspondante
// n'était disponible dans ce lot ; QCM rédigés directement à partir du
// tableau de référence (faits/valeurs numériques, pas de contenu inventé).
const ANEMIA_DIFFERENTIAL_COURSE = `# TP — Diagnostic différentiel des anémies (indices érythrocytaires)

## 1. Valeurs normales des indices érythrocytaires
- **VGM (MCV)** : 80 – 100 µm³.
- **CCMH (MCHC)** : 32 – 36 g%.
- **TCMH (MCH)** : 27 – 31 pg.
- **Réticulocytes** : 0,5 – 1,5 %.

## 2. Tableau de diagnostic différentiel
| Indice | Valeur normale | Anémie ferriprive | Anémie mégaloblastique | Anémie aplasique |
| --- | --- | --- | --- | --- |
| Ht, Hb, GR (nombre) | — | ↓ | ↓ | ↓ |
| VGM (MCV) | 80-100 µm³ | ↓ | ↑ | N |
| CCMH (MCHC) | 32-36 g% | ↓ | N | N |
| TCMH (MCH) | 27-31 pg | ↓ | N | N |
| Réticulocytes | 0,5-1,5 % | N | ↓ | ↓ |
| Diagnostic morphologique | — | Anémie hypochrome microcytaire, moelle normo-régénérative | Anémie macrocytaire normochrome, moelle hypo-régénérative | Anémie normochrome normocytaire, moelle hypo-régénérative |
| Étiologie | — | Carence en fer | Carence en vitamine B12 et/ou en acide folique | Insuffisance médullaire |

## 3. Principes d'interprétation
- L'**anémie ferriprive** (carence en fer) réduit à la fois la taille (VGM ↓) et la teneur en hémoglobine des globules rouges (CCMH ↓, TCMH ↓) : c'est une anémie **hypochrome microcytaire**. La moelle reste normo-régénérative (réticulocytes normaux) car la production reste possible, seule la synthèse d'hémoglobine est limitée.
- L'**anémie mégaloblastique** (carence en B12/folates) perturbe la maturation nucléaire des érythroblastes, produisant des globules rouges anormalement grands (VGM ↑) mais normalement chargés en hémoglobine (CCMH et TCMH normaux) : anémie **macrocytaire normochrome**. Les réticulocytes sont bas car la moelle produit moins de cellules matures malgré une demande accrue (moelle hypo-régénérative).
- L'**anémie aplasique** résulte d'une insuffisance médullaire globale : les indices de taille/couleur (VGM, CCMH, TCMH) restent normaux (les quelques globules rouges produits sont normaux), mais leur nombre est réduit et les réticulocytes sont bas, reflétant l'incapacité de la moelle à compenser (moelle hypo-régénérative). C'est une anémie **normochrome normocytaire**.
- Le compte de réticulocytes est la clé pour distinguer une anémie **normo-régénérative** (ferriprive, où la moelle répond normalement) d'une anémie **hypo-régénérative** (mégaloblastique, aplasique, où la moelle ne compense pas).

## Points à retenir pour le TP
- VGM diminué → penser carence en fer (microcytaire) ; VGM augmenté → penser carence en B12/folates (macrocytaire) ; VGM normal → penser insuffisance médullaire (normocytaire).
- Le compte de réticulocytes distingue une moelle qui répond (normo-régénérative, ferriprive) d'une moelle qui ne répond pas (hypo-régénérative, mégaloblastique ou aplasique).`;

export const ANEMIA_DIFFERENTIAL_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Diagnostic différentiel des anémies",
    source_label: "TP Physiologie — Notes personnelles (tableau \"Differential diagnosis of anemias\", Interprétation physio.pdf)",
    content_fr: ANEMIA_DIFFERENTIAL_COURSE,
  },
  qcm: [
    single(
      "Quelle est la plage normale du volume globulaire moyen (VGM/MCV) ?",
      "B",
      "Le VGM normal se situe entre 80 et 100 µm³.",
      ["27 – 31 µm³", "80 – 100 µm³", "32 – 36 µm³", "0,5 – 1,5 µm³"],
    ),
    single(
      "Quel profil d'indices érythrocytaires caractérise l'anémie ferriprive ?",
      "A",
      "L'anémie ferriprive est hypochrome microcytaire : VGM, CCMH et TCMH sont tous abaissés, avec des réticulocytes normaux (moelle normo-régénérative).",
      ["VGM ↓, CCMH ↓, TCMH ↓, réticulocytes N", "VGM ↑, CCMH N, TCMH N, réticulocytes ↓", "VGM N, CCMH N, TCMH N, réticulocytes ↓", "VGM ↓, CCMH ↑, TCMH ↑, réticulocytes ↑"],
    ),
    single(
      "Quel profil d'indices érythrocytaires caractérise l'anémie mégaloblastique ?",
      "B",
      "L'anémie mégaloblastique (carence en B12/folates) est macrocytaire normochrome : VGM augmenté, CCMH/TCMH normaux, réticulocytes bas (moelle hypo-régénérative).",
      ["VGM ↓, CCMH ↓, réticulocytes N", "VGM ↑, CCMH N, TCMH N, réticulocytes ↓", "VGM N, CCMH N, réticulocytes N", "VGM ↑, CCMH ↑, TCMH ↑, réticulocytes ↑"],
    ),
    single(
      "Quelle étiologie est associée à l'anémie aplasique dans ce référentiel ?",
      "C",
      "L'anémie aplasique résulte d'une insuffisance de la moelle osseuse, incapable de produire suffisamment de cellules sanguines.",
      ["Carence en fer", "Carence en vitamine B12/folates", "Insuffisance médullaire", "Hémolyse périphérique"],
    ),
    single(
      "Pourquoi le compte de réticulocytes est-il normal dans l'anémie ferriprive mais bas dans l'anémie aplasique ?",
      "A",
      "Dans l'anémie ferriprive, la moelle reste capable de produire des globules rouges (normo-régénérative) malgré la carence en fer ; dans l'anémie aplasique, la moelle elle-même est déficiente et ne peut pas compenser (hypo-régénérative).",
      [
        "La moelle reste normo-régénérative dans la carence en fer, mais est hypo-régénérative dans l'insuffisance médullaire",
        "Les réticulocytes ne sont jamais affectés par le type d'anémie",
        "L'anémie ferriprive détruit sélectivement les réticulocytes",
        "L'anémie aplasique augmente la production de réticulocytes en compensation",
      ],
    ),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Diagnostic différentiel des anémies", duration_seconds: 400 },
};

export const ANEMIA_DIFFERENTIAL_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la plage normale du VGM (MCV) ?", question_en: "What is the normal MCV range?", answer_fr: "80 – 100 µm³.", answer_en: "80 – 100 µm³." },
  { question_fr: "Quelle est la plage normale de la CCMH (MCHC) ?", question_en: "What is the normal MCHC range?", answer_fr: "32 – 36 g%.", answer_en: "32 – 36 g%." },
  { question_fr: "Quelle est la plage normale de la TCMH (MCH) ?", question_en: "What is the normal MCH range?", answer_fr: "27 – 31 pg.", answer_en: "27 – 31 pg." },
  { question_fr: "Quelle est la plage normale des réticulocytes ?", question_en: "What is the normal reticulocyte range?", answer_fr: "0,5 – 1,5 %.", answer_en: "0.5 – 1.5%." },
  { question_fr: "Quel est le profil VGM/CCMH/TCMH de l'anémie ferriprive ?", question_en: "What is the MCV/MCHC/MCH profile of iron deficiency anemia?", answer_fr: "Tous abaissés (VGM↓, CCMH↓, TCMH↓) : anémie hypochrome microcytaire.", answer_en: "All decreased (MCV↓, MCHC↓, MCH↓): hypochromic microcytic anemia." },
  { question_fr: "Quel est le profil VGM de l'anémie mégaloblastique ?", question_en: "What is the MCV profile of megaloblastic anemia?", answer_fr: "Augmenté (macrocytaire), avec CCMH et TCMH normaux (normochrome).", answer_en: "Increased (macrocytic), with normal MCHC and MCH (normochromic)." },
  { question_fr: "Quelle est l'étiologie de l'anémie mégaloblastique ?", question_en: "What is the etiology of megaloblastic anemia?", answer_fr: "Carence en vitamine B12 et/ou en acide folique.", answer_en: "Vitamin B12 and/or folic acid deficiency." },
  { question_fr: "Quel est le profil des indices (VGM/CCMH/TCMH) de l'anémie aplasique ?", question_en: "What is the index profile (MCV/MCHC/MCH) of aplastic anemia?", answer_fr: "Tous normaux (normochrome normocytaire) — seul le nombre de globules rouges est réduit.", answer_en: "All normal (normochromic normocytic) — only the red cell count is reduced." },
  { question_fr: "Quel paramètre distingue une anémie normo-régénérative d'une anémie hypo-régénérative ?", question_en: "What parameter distinguishes a normo-regenerative from a hypo-regenerative anemia?", answer_fr: "Le compte de réticulocytes : normal dans une anémie normo-régénérative (ferriprive), bas dans une anémie hypo-régénérative (mégaloblastique, aplasique).", answer_en: "The reticulocyte count: normal in a normo-regenerative anemia (iron deficiency), low in a hypo-regenerative one (megaloblastic, aplastic)." },
  { question_fr: "Quel diagnostic morphologique correspond à l'anémie aplasique ?", question_en: "What morphological diagnosis corresponds to aplastic anemia?", answer_fr: "Anémie normochrome normocytaire, moelle hypo-régénérative.", answer_en: "Normochromic normocytic anemia, hypo-regenerative bone marrow." },
];
