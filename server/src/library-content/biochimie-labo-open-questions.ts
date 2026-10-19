import type { LibraryOpenQuestionSeed } from "./biochimie-s1.js";

// Questions de fin de laboratoire — Biochimie, Année 1, Semestre 1
// (polycopiés « Lx_BCH I_ENG », Lab 2 à Lab 13, rubrique « Questions »).
//
// question_en reprend l'énoncé du polycopié ; question_fr en est la traduction.
// Les réponses modèles sont rédigées à partir des cours condensés de labo
// (LABn_COURSE dans biochimie-labo-*.ts), complétés par le texte du polycopié
// quand la fiche ne couvre pas le point demandé (unités SI, perfusions,
// urines, rotors, expériences réalisées, etc.).
//
// Les questions qui s'appuient sur une figure du polycopié (L8 Q6, L9 Q2/Q6,
// L13 Q1/Q2/Q4) sont reformulées pour se comprendre sans l'image. L7 Q1/Q2
// (« them » sans référent explicite) sont interprétées comme portant sur le
// prélèvement veineux vs capillaire, sujet qui ouvre le polycopié.
//
// Correspondance polycopié -> chapitre (biochimie-s1.ts, par ordre) :
//   L2 -> 102, L3 -> 103, ..., L13 -> 113
//   (le polycopié L12 « Vitamins determination » porte l'en-tête « L13 »,
//   mais correspond bien au chapitre 112, dosage de la vitamine C).

// ===========================================================================
// LAB 2 — Unités de mesure, masse, volume, densité (ordre 102)
// ===========================================================================
export const OPEN_LAB2_MEASURES: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Énumérez les sept unités de base du SI et leurs symboles.",
    question_en: "List the seven SI base units and their symbols.",
    answer_fr: `| Grandeur | Unité | Symbole |
| --- | --- | --- |
| Longueur | mètre | m |
| Masse | kilogramme | kg |
| Temps | seconde | s |
| Intensité du courant électrique | ampère | A |
| Température thermodynamique | kelvin | K |
| Quantité de matière | mole | mol |
| Intensité lumineuse | candela | cd |

Toutes les autres unités (volume en m³, pression en Pa, énergie en J…) sont des **unités dérivées** de ces sept unités fondamentales.`,
    answer_en: `| Quantity | Unit | Symbol |
| --- | --- | --- |
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Thermodynamic temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

All other units (volume in m³, pressure in Pa, energy in J…) are **derived units** built from these seven base units.`,
  },
  {
    question_fr: "Définissez la sensibilité, la précision et l'exactitude d'une balance.",
    question_en: "Define sensitivity, precision, and accuracy in the context of balances.",
    answer_fr: `- **Sensibilité** : la plus petite différence de masse que la balance peut détecter. Elle sert à classer les balances : technique (10⁻² g), pharmaceutique (10⁻³ g), analytique (10⁻⁴ g), semi-micro (10⁻⁵ g), micro (10⁻⁶ g), ultramicro (≤ 10⁻⁷ g).
- **Précision** : la reproductibilité de mesures répétées du même objet (des pesées successives donnent des valeurs proches entre elles).
- **Exactitude** : la proximité entre la valeur mesurée et la valeur vraie.

Une balance peut être précise sans être exacte (valeurs groupées mais décalées, par exemple si elle est mal tarée ou mal étalonnée).`,
    answer_en: `- **Sensitivity**: the smallest mass difference the balance can detect. It is used to classify balances: technical (10⁻² g), pharmaceutical (10⁻³ g), analytical (10⁻⁴ g), semi-micro (10⁻⁵ g), micro (10⁻⁶ g), ultramicro (≤ 10⁻⁷ g).
- **Precision**: the reproducibility of repeated measurements of the same object (successive weighings give values close to each other).
- **Accuracy**: how close the measured value is to the true value.

A balance can be precise without being accurate (clustered but shifted values, e.g. if it is poorly tared or calibrated).`,
  },
  {
    question_fr: "Quelles sont les étapes de la pesée d'une substance au laboratoire ?",
    question_en: "What are the steps in weighing a substance in the laboratory?",
    answer_fr: `1. Placer la balance sur une paillasse stable, à l'abri des courants d'air et des vibrations ; fermer les portes du pare-vent (balance analytique).
2. Vérifier que l'affichage indique **0,000 g** plateau vide ; sinon, ne pas l'utiliser et prévenir l'enseignant.
3. Poser le récipient (bécher, nacelle de pesée, verre de montre) adapté à la taille du plateau, puis appuyer sur **Tare** pour remettre à zéro.
4. Ajouter la substance avec une spatule propre et sèche — **jamais directement sur le plateau** — sans respirer au-dessus du plateau.
5. L'objet pesé doit être à **température ambiante** (un objet chaud crée des courants d'air qui faussent la lecture).
6. Lire la masse une fois l'affichage stabilisé, portes fermées.
7. Retirer le récipient, nettoyer le plateau avec un papier doux et sec, essuyer immédiatement tout renversement.`,
    answer_en: `1. Place the balance on a stable bench, away from drafts and vibrations; close the draft shield doors (analytical balance).
2. Check that the display reads **0.000 g** with an empty pan; otherwise do not use it and inform the instructor.
3. Place a container suited to the pan size (beaker, weighing boat, watch glass), then press **Tare** to reset to zero.
4. Add the substance with a clean, dry spatula — **never directly on the pan** — without breathing over the pan.
5. The object must be at **room temperature** (a warm object creates air currents that distort the reading).
6. Read the mass once the display is stable, with the doors closed.
7. Remove the container, wipe the pan with a soft dry tissue, and immediately clean up any spill.`,
  },
  {
    question_fr: "Une solution a une densité de 1,25 g/mL. Quelle est la masse de 2 L de cette solution ?",
    question_en: "A solution has a density of 1.25 g/mL. What is the mass of 2 L of this solution?",
    answer_fr: `ρ = m / V ⇒ **m = ρ × V**

- V = 2 L = 2000 mL
- m = 1,25 g/mL × 2000 mL = **2500 g = 2,5 kg**

Attention à convertir le volume dans la même unité que la densité (mL avec g/mL).`,
    answer_en: `ρ = m / V ⇒ **m = ρ × V**

- V = 2 L = 2000 mL
- m = 1.25 g/mL × 2000 mL = **2500 g = 2.5 kg**

Make sure the volume is converted to the same unit as the density (mL with g/mL).`,
  },
  {
    question_fr: "Un hydromètre s'enfonce davantage dans le liquide A que dans le liquide B. Quel liquide a la densité la plus élevée ? Expliquez.",
    question_en: "A hydrometer sinks deeper in liquid A than in liquid B. Which liquid has the higher density? Explain.",
    answer_fr: `**C'est le liquide B qui est le plus dense.**

L'hydromètre (densimètre) fonctionne selon le **principe d'Archimède** : il flotte quand la poussée, égale au poids du liquide déplacé, compense son poids.
- Dans un liquide **plus dense**, un plus petit volume immergé suffit à déplacer un poids de liquide égal au poids de l'hydromètre → il **s'enfonce moins**.
- Dans un liquide **moins dense**, il doit déplacer un plus grand volume → il **s'enfonce plus**.

L'hydromètre s'enfonce davantage dans A, donc A est moins dense que B. On lit directement la densité relative (sans unité) sur l'échelle graduée de la tige.`,
    answer_en: `**Liquid B is the denser one.**

The hydrometer works on **Archimedes' principle**: it floats when the buoyant force, equal to the weight of displaced liquid, balances its own weight.
- In a **denser** liquid, a smaller immersed volume is enough to displace a weight of liquid equal to the hydrometer's weight → it **sinks less**.
- In a **less dense** liquid, it must displace a larger volume → it **sinks deeper**.

The hydrometer sinks deeper in A, so A is less dense than B. The specific gravity (dimensionless) is read directly on the scale inside the stem.`,
  },
];

// ===========================================================================
// LAB 3 — Solutions, dilutions, isotonicité, perfusions (ordre 103)
// ===========================================================================
export const OPEN_LAB3_SOLUTIONS: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Écrivez la formule de calcul : a) de la concentration en % (m/v) ; b) de la concentration molaire (M).",
    question_en: "Write the formula for calculating a) % (w/v) concentration; b) Molar concentration (M).",
    answer_fr: `**a) Concentration en pourcentage masse/volume**

% (m/v) = [masse de soluté (g) / volume de solution (mL)] × 100

→ une solution à 0,9 % (m/v) contient 0,9 g de soluté pour 100 mL de solution.

**b) Concentration molaire (molarité)**

- n = m / M (nombre de moles = masse / masse molaire)
- **C (mol/L) = n / V(L) = m / (M × V)**

La molarité est le nombre de moles de soluté dans 1 L de solution.`,
    answer_en: `**a) Weight/volume percentage concentration**

% (w/v) = [mass of solute (g) / volume of solution (mL)] × 100

→ a 0.9% (w/v) solution contains 0.9 g of solute per 100 mL of solution.

**b) Molar concentration (molarity)**

- n = m / M (moles = mass / molar mass)
- **C (mol/L) = n / V(L) = m / (M × V)**

Molarity is the number of moles of solute in 1 L of solution.`,
  },
  {
    question_fr: "Donnez des exemples de solutions hypertoniques. Quand peut-on les utiliser ?",
    question_en: "Give examples of hypertonic solutions. When can they be used?",
    answer_fr: `**Définition** : osmolarité supérieure à celle du plasma → l'eau sort des cellules (les globules rouges se rétractent, crénelure) et le volume extracellulaire augmente.

**Exemples** : NaCl 3 % et 5 % (sérum salé hypertonique), glucose (dextrose) 10 %, 20 % à 70 %, glucose 30 %, glucose 5 % + NaCl 0,45 % ou 0,9 %.

**Indications** :
- **Hyponatrémie sévère** (NaCl 3–5 %).
- Déshydratation (diarrhées, nausées), **œdèmes**, pression artérielle instable.
- Glucose hypertonique : **hypoglycémie**, hyperkaliémie, apport énergétique.

**Précautions** : surveiller le risque de **surcharge circulatoire** ; contre-indiquées chez les patients avec insuffisance **cardiaque ou rénale** ; irritation des veines aux fortes concentrations.`,
    answer_en: `**Definition**: osmolarity higher than plasma → water leaves the cells (red blood cells shrink, crenation) and extracellular volume increases.

**Examples**: 3% and 5% NaCl (hypertonic saline), 10%, 20% up to 70% dextrose, 30% glucose, 5% dextrose + 0.45% or 0.9% NaCl.

**Indications**:
- **Severe hyponatremia** (3–5% NaCl).
- Dehydration (diarrhea, nausea), **edema**, unstable blood pressure.
- Hypertonic glucose: **hypoglycemia**, hyperkalemia, energy supply.

**Precautions**: monitor for **circulatory overload**; contraindicated in **cardiac or renal** impairment; vein irritation at high concentrations.`,
  },
  {
    question_fr: "Quelle est la différence entre solutions colloïdes et cristalloïdes ? Donnez des exemples.",
    question_en: "What is the difference between colloid and crystalloid solutions? Give examples.",
    answer_fr: `| | Cristalloïdes | Colloïdes |
| --- | --- | --- |
| Molécules | **Bas poids moléculaire**, ioniques (NaCl) ou moléculaires (glucose) | **Haut poids moléculaire** (protéines, polyglucides) |
| Endothélium vasculaire | **Le traversent** | **Ne le traversent pas** |
| Distribution | Tout le liquide extracellulaire (interstitiel + vasculaire) ; seul 1/3 à 1/4 du volume reste dans les vaisseaux | Restent longtemps dans le compartiment intravasculaire |
| Effet volémique | Faible : il faut 3 à 4 fois le volume de sang perdu | Important, grâce à une pression colloïdo-osmotique supérieure à celle du plasma |
| Exemples | NaCl 0,9 %, NaCl 0,45 %, glucose 5 %, Ringer, Ringer lactate | Gélatines (oxypolygélatine), hydroxyéthylamidon, dextrans (Dextran 40, Dextran 70) |

Les cristalloïdes sont aussi préférés pour diluer et perfuser les médicaments.`,
    answer_en: `| | Crystalloids | Colloids |
| --- | --- | --- |
| Molecules | **Low molecular weight**, ionic (NaCl) or molecular (glucose) | **High molecular weight** (proteins, polysaccharides) |
| Vascular endothelium | **Cross it** | **Do not cross it** |
| Distribution | Whole extracellular fluid (interstitial + vascular); only 1/3 to 1/4 of the volume stays intravascular | Remain in the intravascular space for a long time |
| Volume effect | Weak: 3 to 4 times the lost blood volume is needed | Strong, due to a colloid-osmotic pressure higher than plasma |
| Examples | 0.9% NaCl, 0.45% NaCl, 5% glucose, Ringer, Ringer's lactate | Gelatins (oxypolygelatin), hydroxyethyl starch, dextrans (Dextran 40, Dextran 70) |

Crystalloids are also preferred to dissolve and infuse drugs.`,
  },
  {
    question_fr: "Une solution mère de glucose est à 20 % (m/v). Quel volume de cette solution faut-il pour préparer 100 mL de glucose à 5 % ?",
    question_en: "A stock solution of glucose has a concentration of 20% (w/v). How much of this solution is required to prepare 100 mL of 5% glucose?",
    answer_fr: `Loi de dilution : **C₁ × V₁ = C₂ × V₂** (la quantité de glucose est conservée).

- C₁ = 20 %, C₂ = 5 %, V₂ = 100 mL
- V₁ = (C₂ × V₂) / C₁ = (5 × 100) / 20 = **25 mL**

On prélève **25 mL de solution mère à 20 %** et on complète avec **75 mL d'eau** (V(H₂O) = V₂ − V₁) pour obtenir 100 mL à 5 %.

Vérification : 25 mL × 20 g/100 mL = 5 g de glucose dans 100 mL → 5 %.`,
    answer_en: `Dilution law: **C₁ × V₁ = C₂ × V₂** (the amount of glucose is conserved).

- C₁ = 20%, C₂ = 5%, V₂ = 100 mL
- V₁ = (C₂ × V₂) / C₁ = (5 × 100) / 20 = **25 mL**

Take **25 mL of the 20% stock** and add **75 mL of water** (V(H₂O) = V₂ − V₁) to obtain 100 mL at 5%.

Check: 25 mL × 20 g/100 mL = 5 g of glucose in 100 mL → 5%.`,
  },
  {
    question_fr: "Combien de grammes de NaCl faut-il pour préparer 250 mL de solution à 0,9 % (m/v) ?",
    question_en: "How many grams of NaCl are needed to prepare 250 mL of 0.9% (w/v) solution?",
    answer_fr: `0,9 % (m/v) = 0,9 g de NaCl pour 100 mL de solution.

m = (0,9 g / 100 mL) × 250 mL = **2,25 g de NaCl**

On dissout 2,25 g de NaCl dans un peu d'eau puis on complète à 250 mL (fiole jaugée). C'est le **sérum physiologique**, isotonique au plasma.`,
    answer_en: `0.9% (w/v) = 0.9 g of NaCl per 100 mL of solution.

m = (0.9 g / 100 mL) × 250 mL = **2.25 g of NaCl**

Dissolve 2.25 g of NaCl in a little water, then make up to 250 mL (volumetric flask). This is **normal saline**, isotonic with plasma.`,
  },
];

// ===========================================================================
// LAB 4 — Acides, bases, titration (ordre 104)
// ===========================================================================
export const OPEN_LAB4_TITRATION: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Dans l'eau pure, quelles sont les concentrations en ions hydrogène et hydroxyde ?",
    question_en: "In pure water, what are the concentrations of hydrogen and hydroxyl ions?",
    answer_fr: `L'eau s'autoionise : H₂O ⇌ H⁺ + OH⁻ (ou 2 H₂O ⇌ H₃O⁺ + OH⁻).

Produit ionique de l'eau à 25 °C : **Kw = [H⁺][OH⁻] = 10⁻¹⁴**.

Dans l'eau pure, chaque molécule dissociée donne un H⁺ et un OH⁻, donc [H⁺] = [OH⁻] :
- **[H⁺] = [OH⁻] = √10⁻¹⁴ = 10⁻⁷ mol/L**
- d'où pH = pOH = 7 (solution neutre).`,
    answer_en: `Water self-ionizes: H₂O ⇌ H⁺ + OH⁻ (or 2 H₂O ⇌ H₃O⁺ + OH⁻).

Ion product of water at 25 °C: **Kw = [H⁺][OH⁻] = 10⁻¹⁴**.

In pure water, each dissociated molecule gives one H⁺ and one OH⁻, so [H⁺] = [OH⁻]:
- **[H⁺] = [OH⁻] = √10⁻¹⁴ = 10⁻⁷ mol/L**
- hence pH = pOH = 7 (neutral solution).`,
  },
  {
    question_fr: "Donnez deux exemples de bases fortes et deux exemples de bases faibles.",
    question_en: "Give two examples of strong bases and two examples of weak bases.",
    answer_fr: `- **Bases fortes** (dissociation complète, Kb ≫ 1) : **NaOH** (hydroxyde de sodium), **KOH** (hydroxyde de potassium) — aussi Ca(OH)₂.
- **Bases faibles** (dissociation incomplète, Kb < 1) : **NH₃ / NH₄OH** (ammoniac), **NaHCO₃** (bicarbonate de sodium).

Une base libère des OH⁻ (ou accepte un proton) : BOH ⇌ B⁺ + OH⁻, avec Kb = [B⁺][OH⁻]/[BOH].`,
    answer_en: `- **Strong bases** (complete dissociation, Kb ≫ 1): **NaOH** (sodium hydroxide), **KOH** (potassium hydroxide) — also Ca(OH)₂.
- **Weak bases** (incomplete dissociation, Kb < 1): **NH₃ / NH₄OH** (ammonia), **NaHCO₃** (sodium bicarbonate).

A base releases OH⁻ (or accepts a proton): BOH ⇌ B⁺ + OH⁻, with Kb = [B⁺][OH⁻]/[BOH].`,
  },
  {
    question_fr: "Écrivez l'équation générale d'une réaction de neutralisation entre un acide et une base.",
    question_en: "Write the general equation for a neutralization reaction between an acid and a base.",
    answer_fr: `**Acide + Base → Sel + Eau**

HA + BOH → BA + H₂O

Exemple : HCl + NaOH → NaCl + H₂O

Forme ionique essentielle : **H⁺ + OH⁻ → H₂O**. C'est la réaction sur laquelle repose la titration acide-base.`,
    answer_en: `**Acid + Base → Salt + Water**

HA + BOH → BA + H₂O

Example: HCl + NaOH → NaCl + H₂O

Net ionic form: **H⁺ + OH⁻ → H₂O**. This is the reaction on which acid-base titration is based.`,
  },
  {
    question_fr: "Pourquoi la zone de virage de l'indicateur doit-elle recouvrir le point d'équivalence ?",
    question_en: "Why must the indicator's pH transition range overlap with the equivalence point?",
    answer_fr: `- Un indicateur coloré est un acide ou une base faible qui change de couleur selon sa forme (protonée/déprotonée) ; il vire sur une **zone de pH ≈ pKa ± 1**.
- La courbe de titration présente un **saut vertical de pH** autour du point d'équivalence (point d'inflexion).
- Si la zone de virage tombe **dans ce saut**, une seule goutte de titrant fait changer la couleur exactement à l'équivalence → le point de fin repéré correspond au point d'équivalence réel.
- Si elle est en dehors, la couleur change trop tôt ou trop tard → **erreur sur le volume équivalent** et donc sur la concentration calculée.

Exemples : acide fort + base forte (équivalence à pH 7) → phénolphtaléine ou rouge de phénol conviennent ; acide faible + base forte (équivalence à pH > 7) → phénolphtaléine (zone 8,3–10).`,
    answer_en: `- A colour indicator is a weak acid or base whose colour depends on its form (protonated/deprotonated); it changes colour over a **pH range ≈ pKa ± 1**.
- The titration curve shows a **sharp vertical pH jump** around the equivalence point (inflection point).
- If the transition range falls **within that jump**, a single drop of titrant changes the colour exactly at equivalence → the observed end point matches the true equivalence point.
- If it lies outside, the colour changes too early or too late → **error in the equivalence volume** and thus in the calculated concentration.

Examples: strong acid + strong base (equivalence at pH 7) → phenolphthalein or phenol red work; weak acid + strong base (equivalence at pH > 7) → phenolphthalein (range 8.3–10).`,
  },
  {
    question_fr: "Lors d'une titration, 25,0 mL de HCl ont été neutralisés par 20,0 mL de NaOH 0,100 M. Quelle est la concentration du HCl ?",
    question_en: "In a titration, 25.0 mL of HCl was neutralized by 20.0 mL of 0.100 M NaOH. What is the concentration of the HCl?",
    answer_fr: `Réaction 1:1 : HCl + NaOH → NaCl + H₂O. À l'équivalence : **C(acide) × V(acide) = C(base) × V(base)**.

- n(NaOH) = 0,100 mol/L × 0,0200 L = 2,00 × 10⁻³ mol = n(HCl)
- C(HCl) = 2,00 × 10⁻³ mol / 0,0250 L = **0,0800 mol/L (0,080 M)**

Ou directement : C(HCl) = (0,100 × 20,0) / 25,0 = 0,080 M.`,
    answer_en: `1:1 reaction: HCl + NaOH → NaCl + H₂O. At equivalence: **C(acid) × V(acid) = C(base) × V(base)**.

- n(NaOH) = 0.100 mol/L × 0.0200 L = 2.00 × 10⁻³ mol = n(HCl)
- C(HCl) = 2.00 × 10⁻³ mol / 0.0250 L = **0.0800 mol/L (0.080 M)**

Or directly: C(HCl) = (0.100 × 20.0) / 25.0 = 0.080 M.`,
  },
];

// ===========================================================================
// LAB 5 — pH des solutions et fluides biologiques, point isoélectrique (ordre 105)
// ===========================================================================
export const OPEN_LAB5_PH: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Quel est le pH de l'eau pure à 25 °C et pourquoi ?",
    question_en: "What is the pH of pure water at 25 °C and why?",
    answer_fr: `**pH = 7.**

- À 25 °C, Kw = [H⁺][OH⁻] = 10⁻¹⁴.
- L'autoionisation de l'eau produit autant de H⁺ que de OH⁻ : [H⁺] = [OH⁻] = 10⁻⁷ M.
- pH = −log[H⁺] = −log(10⁻⁷) = 7, et pOH = 7 (pH + pOH = 14).

L'eau pure est donc **neutre**. Cette valeur dépend de la température (Kw varie avec elle), d'où la précision « à 25 °C ».`,
    answer_en: `**pH = 7.**

- At 25 °C, Kw = [H⁺][OH⁻] = 10⁻¹⁴.
- Self-ionization of water produces as many H⁺ as OH⁻: [H⁺] = [OH⁻] = 10⁻⁷ M.
- pH = −log[H⁺] = −log(10⁻⁷) = 7, and pOH = 7 (pH + pOH = 14).

Pure water is therefore **neutral**. The value depends on temperature (Kw changes with it), hence "at 25 °C".`,
  },
  {
    question_fr: "L'acide acétique a un Ka = 1,8 × 10⁻⁵. Calculez le pH d'une solution d'acide acétique 0,1 M.",
    question_en: "Acetic acid has Ka = 1.8 × 10⁻⁵. Calculate the pH of a 0.1 M acetic acid solution.",
    answer_fr: `Acide faible (dissociation partielle) : [HA] ≈ C, donc **[H⁺] ≈ √(Ka × C)**.

- Ka × C = 1,8 × 10⁻⁵ × 0,1 = 1,8 × 10⁻⁶
- [H⁺] = √(1,8 × 10⁻⁶) ≈ 1,34 × 10⁻³ M
- **pH = −log(1,34 × 10⁻³) ≈ 2,87**

Formule directe : pH = ½ (pKa − log C) = ½ (4,74 + 1) ≈ 2,87.

(Un acide fort 0,1 M aurait un pH de 1 : l'acide acétique, faiblement dissocié, est beaucoup moins acide.)`,
    answer_en: `Weak acid (partial dissociation): [HA] ≈ C, so **[H⁺] ≈ √(Ka × C)**.

- Ka × C = 1.8 × 10⁻⁵ × 0.1 = 1.8 × 10⁻⁶
- [H⁺] = √(1.8 × 10⁻⁶) ≈ 1.34 × 10⁻³ M
- **pH = −log(1.34 × 10⁻³) ≈ 2.87**

Direct formula: pH = ½ (pKa − log C) = ½ (4.74 + 1) ≈ 2.87.

(A 0.1 M strong acid would have pH 1: weakly dissociated acetic acid is much less acidic.)`,
  },
  {
    question_fr: "Pourquoi les sels d'acide faible et de base forte donnent-ils des solutions basiques ? (Donnez des exemples)",
    question_en: "Why do salts of weak acids + strong bases give basic solutions? (Give examples)",
    answer_fr: `Dans l'eau, les ions du sel peuvent réagir avec l'eau : c'est l'**hydrolyse**.
- Le **cation** provient d'une base forte (Na⁺, K⁺) : c'est un acide conjugué très faible, il **ne s'hydrolyse pas**.
- L'**anion** provient d'un acide faible : c'est une base conjuguée relativement forte, il **s'hydrolyse** en captant un proton de l'eau :

**A⁻ + H₂O ⇌ HA + OH⁻**

Des OH⁻ sont libérés → [OH⁻] > [H⁺] → **pH > 7**.

**Exemples** : acétate de sodium CH₃COONa (CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻), bicarbonate de sodium NaHCO₃, carbonate de sodium Na₂CO₃, phosphate disodique Na₂HPO₄.

À comparer : sel d'acide fort + base forte (NaCl) → pH 7 ; sel d'acide fort + base faible (NH₄Cl) → pH < 7.`,
    answer_en: `In water, the ions of the salt can react with water: this is **hydrolysis**.
- The **cation** comes from a strong base (Na⁺, K⁺): it is a very weak conjugate acid and **does not hydrolyse**.
- The **anion** comes from a weak acid: it is a relatively strong conjugate base and **hydrolyses** by taking a proton from water:

**A⁻ + H₂O ⇌ HA + OH⁻**

OH⁻ ions are released → [OH⁻] > [H⁺] → **pH > 7**.

**Examples**: sodium acetate CH₃COONa (CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻), sodium bicarbonate NaHCO₃, sodium carbonate Na₂CO₃, disodium phosphate Na₂HPO₄.

Compare: strong acid + strong base salt (NaCl) → pH 7; strong acid + weak base salt (NH₄Cl) → pH < 7.`,
  },
  {
    question_fr: "Quelle est la signification physiologique du point isoélectrique des protéines ?",
    question_en: "What is the physiological significance of the isoelectric point in proteins?",
    answer_fr: `Le **point isoélectrique (pI)** est le pH auquel la molécule porte une **charge nette nulle**. À ce pH, sa **solubilité est minimale** et elle **ne migre pas** dans un champ électrique.

Signification physiologique :
- Une protéine est **chargée positivement** dans un milieu de pH < pI et **négativement** si pH > pI.
- Au pH sanguin (~7,4), les résidus Asp et Glu (–COO⁻) sont chargés négativement, et Lys, Arg, His (–NH₃⁺) positivement ; la plupart des protéines plasmatiques (pI < 7,4) circulent sous forme d'**anions**, ce qui les garde solubles.
- Cette distribution de charges conditionne le **repliement** des protéines, l'**activité enzymatique**, les interactions **protéine-protéine et protéine-ADN**, et le rôle **tampon** des protéines.
- Elle est exploitée au laboratoire : **électrophorèse** (migration selon la charge), focalisation isoélectrique, précipitation des protéines à leur pI.`,
    answer_en: `The **isoelectric point (pI)** is the pH at which the molecule carries **no net charge**. At this pH its **solubility is minimal** and it **does not migrate** in an electric field.

Physiological significance:
- A protein is **positively charged** in a medium with pH < pI and **negatively charged** if pH > pI.
- At blood pH (~7.4), Asp and Glu residues (–COO⁻) are negatively charged, while Lys, Arg, His (–NH₃⁺) are positive; most plasma proteins (pI < 7.4) circulate as **anions**, which keeps them soluble.
- This charge distribution governs protein **folding**, **enzyme activity**, **protein-protein and protein-DNA** interactions, and the **buffering** role of proteins.
- It is exploited in the lab: **electrophoresis** (migration by charge), isoelectric focusing, protein precipitation at their pI.`,
  },
  {
    question_fr: "Sachant que l'alanine a un pKa₁ = 2,34 et un pKa₂ = 9,69, déterminez le pH auquel sa solubilité est minimale.",
    question_en: "Given that alanine has pKa1 = 2.34 and pKa2 = 9.69 determine the pH at which it has minimum solubility.",
    answer_fr: `La solubilité est minimale au **point isoélectrique**, où l'acide aminé est entièrement sous forme de zwitterion (charge nette nulle).

L'alanine est un acide aminé **neutre** (monoamino-monocarboxylique) : le pI est la moyenne des deux pKa :

**pI = (pKa₁ + pKa₂) / 2 = (2,34 + 9,69) / 2 ≈ 6,02**

À pH ≈ 6,0, l'alanine a sa solubilité minimale et ne migre pas en électrophorèse.`,
    answer_en: `Solubility is minimal at the **isoelectric point**, where the amino acid is entirely a zwitterion (zero net charge).

Alanine is a **neutral** amino acid (monoamino-monocarboxylic): the pI is the average of the two pKa values:

**pI = (pKa₁ + pKa₂) / 2 = (2.34 + 9.69) / 2 ≈ 6.02**

At pH ≈ 6.0, alanine has its minimum solubility and does not migrate in electrophoresis.`,
  },
];

// ===========================================================================
// LAB 6 — Solutions tampons (ordre 106)
// ===========================================================================
export const OPEN_LAB6_BUFFERS: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Définissez le pouvoir tampon (capacité tampon). Citez deux facteurs qui l'augmentent.",
    question_en: "Define buffer capacity. List two factors that increase it.",
    answer_fr: `**Capacité tampon (β)** : nombre d'équivalents (moles) d'acide fort ou de base forte qu'il faut ajouter à **1 L de tampon** pour faire varier son pH d'**une unité**.

Facteurs qui l'augmentent :
1. Une **concentration totale plus élevée** des composants du tampon (acide faible + base conjuguée).
2. Un **volume de tampon plus grand**.

Le tampon est en outre le plus efficace quand pH ≈ pKa (rapport [A⁻]/[HA] proche de 1) ; son domaine utile est **pKa ± 1**.`,
    answer_en: `**Buffer capacity (β)**: the number of equivalents (moles) of strong acid or base that must be added to **1 L of buffer** to change its pH by **one unit**.

Factors that increase it:
1. A **higher total concentration** of the buffer components (weak acid + conjugate base).
2. A **larger buffer volume**.

A buffer is also most effective when pH ≈ pKa (ratio [A⁻]/[HA] close to 1); its useful range is **pKa ± 1**.`,
  },
  {
    question_fr: "Écrivez les deux réactions qui expliquent comment un tampon répond à un ajout de H⁺ et à un ajout de OH⁻.",
    question_en: "Write the two reactions that explain how a buffer responds to added H⁺ and added OH⁻.",
    answer_fr: `Tampon = acide faible HA + base conjuguée A⁻.

1. **Ajout d'acide** : la base conjuguée capte les protons
   **A⁻ + H⁺ → HA**
2. **Ajout de base** : l'acide faible neutralise les hydroxydes
   **HA + OH⁻ → A⁻ + H₂O**

Exemple avec le tampon acétate : CH₃COO⁻ + H⁺ → CH₃COOH ; CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O.

Seul le rapport [A⁻]/[HA] change ; comme il intervient sous forme logarithmique (pH = pKa + log [A⁻]/[HA]), le pH varie très peu.`,
    answer_en: `Buffer = weak acid HA + conjugate base A⁻.

1. **Added acid**: the conjugate base takes up the protons
   **A⁻ + H⁺ → HA**
2. **Added base**: the weak acid neutralizes the hydroxide
   **HA + OH⁻ → A⁻ + H₂O**

Example with acetate buffer: CH₃COO⁻ + H⁺ → CH₃COOH; CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O.

Only the ratio [A⁻]/[HA] changes; since it enters as a logarithm (pH = pKa + log [A⁻]/[HA]), the pH changes very little.`,
  },
  {
    question_fr: "Tampon acétate, pKa = 4,76. Quel est le pH quand le rapport acétate de sodium / acide acétique vaut 1 ? Et quand il vaut 2 ? Et 0,5 ?",
    question_en: "Acetate buffer, pKa = 4.76. What is pH when the ratio of sodium acetate to acetic acid is 1? How about when it is 2? But when it is 0.5?",
    answer_fr: `Équation de **Henderson-Hasselbalch** : pH = pKa + log([A⁻]/[HA]), avec A⁻ = acétate, HA = acide acétique.

| Rapport [acétate]/[acide] | log(rapport) | pH |
| --- | --- | --- |
| 1 | 0 | **4,76** (pH = pKa) |
| 2 | +0,30 | **5,06** |
| 0,5 | −0,30 | **4,46** |

Doubler ou diviser par deux le rapport ne fait varier le pH que de ± 0,3 unité : c'est l'effet tampon. Les trois valeurs restent dans le domaine efficace pKa ± 1.`,
    answer_en: `**Henderson-Hasselbalch** equation: pH = pKa + log([A⁻]/[HA]), with A⁻ = acetate, HA = acetic acid.

| Ratio [acetate]/[acid] | log(ratio) | pH |
| --- | --- | --- |
| 1 | 0 | **4.76** (pH = pKa) |
| 2 | +0.30 | **5.06** |
| 0.5 | −0.30 | **4.46** |

Doubling or halving the ratio shifts the pH by only ± 0.3 units: this is the buffering effect. All three values stay within the effective range pKa ± 1.`,
  },
  {
    question_fr: "Nommez les quatre principaux systèmes tampons du sang et indiquez lequel est quantitativement le plus important dans le plasma.",
    question_en: "Name the four major blood buffer systems and indicate which is quantitatively most important in plasma.",
    answer_fr: `1. **Bicarbonate / acide carbonique (HCO₃⁻ / H₂CO₃–CO₂)**, pKa ≈ 6,1
2. **Phosphates (HPO₄²⁻ / H₂PO₄⁻)**, pKa ≈ 6,8 — surtout intracellulaire et urinaire, faible contribution plasmatique (concentration plasmatique basse)
3. **Protéines plasmatiques** (surtout l'albumine, ~60 % des protéines ; groupements imidazole de l'histidine)
4. **Hémoglobine** (Hb / HHb, dans les globules rouges)

**Le plus important dans le plasma : le système bicarbonate.** C'est un système **ouvert** : le CO₂ est éliminé par les poumons et les reins excrètent H⁺ et régénèrent HCO₃⁻. L'anhydrase carbonique (enzyme à zinc) accélère CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺. Au pH plasmatique de 7,4, le rapport [HCO₃⁻]/[CO₂] ≈ **20:1**.`,
    answer_en: `1. **Bicarbonate / carbonic acid (HCO₃⁻ / H₂CO₃–CO₂)**, pKa ≈ 6.1
2. **Phosphates (HPO₄²⁻ / H₂PO₄⁻)**, pKa ≈ 6.8 — mainly intracellular and urinary, small plasma contribution (low plasma concentration)
3. **Plasma proteins** (mainly albumin, ~60% of proteins; histidine imidazole groups)
4. **Hemoglobin** (Hb / HHb, in red blood cells)

**Most important in plasma: the bicarbonate system.** It is an **open** system: CO₂ is exhaled by the lungs, and the kidneys excrete H⁺ and regenerate HCO₃⁻. Carbonic anhydrase (a zinc enzyme) speeds up CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺. At plasma pH 7.4, the ratio [HCO₃⁻]/[CO₂] ≈ **20:1**.`,
  },
  {
    question_fr: "Expliquez le lien entre le pouvoir tampon de l'hémoglobine et l'effet Bohr.",
    question_en: "Explain how hemoglobin buffering links to the Bohr effect.",
    answer_fr: `L'hémoglobine tamponne grâce aux **groupements imidazole de ses histidines**, principaux sites de fixation des protons : Hb + H⁺ ⇌ HHb.

**Dans les tissus** (peu d'O₂, beaucoup de CO₂, pH plus acide) :
- le CO₂ entre dans le globule rouge ; l'anhydrase carbonique forme H₂CO₃ → HCO₃⁻ + H⁺ ;
- les **H⁺ se fixent sur l'Hb** et stabilisent la désoxyhémoglobine (HHb) ;
- l'affinité de l'Hb pour l'O₂ **diminue** → l'O₂ est **libéré** aux tissus.

**Dans les poumons** (beaucoup d'O₂, peu de CO₂, pH plus alcalin) :
- l'O₂ se fixe sur l'Hb et **déplace les H⁺** ;
- ces H⁺ se combinent à HCO₃⁻ → H₂CO₃ → CO₂ + H₂O, et le CO₂ est expiré.

C'est l'**effet Bohr** : la fixation des protons et celle de l'O₂ s'influencent mutuellement. L'Hb capte ainsi les H⁺ produits par le métabolisme et fonctionne en synergie avec le tampon bicarbonate : le globule rouge est le point de rencontre des deux systèmes.`,
    answer_en: `Hemoglobin buffers through the **imidazole groups of its histidines**, the main proton-binding sites: Hb + H⁺ ⇌ HHb.

**In tissues** (low O₂, high CO₂, more acidic pH):
- CO₂ enters the red cell; carbonic anhydrase forms H₂CO₃ → HCO₃⁻ + H⁺;
- the **H⁺ bind to Hb** and stabilize deoxyhemoglobin (HHb);
- Hb affinity for O₂ **decreases** → O₂ is **released** to the tissues.

**In the lungs** (high O₂, low CO₂, more alkaline pH):
- O₂ binds Hb and **displaces the H⁺**;
- these H⁺ combine with HCO₃⁻ → H₂CO₃ → CO₂ + H₂O, and CO₂ is exhaled.

This is the **Bohr effect**: proton binding and O₂ binding influence each other. Hb thus takes up the H⁺ produced by metabolism and works in synergy with the bicarbonate buffer: the red blood cell is the meeting point of both systems.`,
  },
];

// ===========================================================================
// LAB 7 — Préparation des échantillons biologiques, centrifugation (ordre 107)
// ===========================================================================
export const OPEN_LAB7_SAMPLES: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Prélèvement sanguin : dans quelles situations a-t-on recours au prélèvement capillaire plutôt qu'au prélèvement veineux ?",
    question_en: "Blood collection: in which situations is capillary sampling used instead of venipuncture?",
    answer_fr: `Le **prélèvement capillaire** (microprélèvement) est utilisé quand il faut **peu de sang** ou quand l'**accès veineux est difficile** :
- veines très petites ou fragiles (**enfants, personnes âgées**) ;
- tissu cicatriciel après de multiples ponctions veineuses ;
- **obésité sévère** ;
- tests au lit du patient (POC) nécessitant une goutte de sang : **glycémie capillaire**, tests rapides (ex. antigène SARS-CoV-2).

Sites : pulpe du doigt (en général l'annulaire), face latérale du pouce, lobe de l'oreille, **talon chez le nourrisson de moins d'un an**.

Le **prélèvement veineux** (veine du pli du coude) reste la règle pour la majorité des analyses ; le **sang artériel** est réservé aux gaz du sang.`,
    answer_en: `**Capillary sampling** (micro-sampling) is used when only a **small amount of blood** is needed or when **venous access is difficult**:
- very small or fragile veins (**children, elderly patients**);
- scar tissue from multiple venipunctures;
- **severe obesity**;
- bedside (point-of-care) tests needing a drop of blood: **capillary glucose**, rapid tests (e.g. SARS-CoV-2 antigen).

Sites: fingertip (usually the ring finger), lateral side of the thumb, earlobe, **heel in infants under one year**.

**Venipuncture** (arm vein) remains the rule for most analyses; **arterial blood** is reserved for blood gases.`,
  },
  {
    question_fr: "Quelle est la principale différence entre le prélèvement veineux et le prélèvement capillaire ?",
    question_en: "What is the main difference between venous and capillary blood collection?",
    answer_fr: `| | Prélèvement veineux | Prélèvement capillaire |
| --- | --- | --- |
| Technique | Ponction d'une **veine** (pli du coude) à l'aiguille stérile, biseau vers le haut, après pose d'un **garrot** (relâché dès que le sang coule) | **Piqûre cutanée** (doigt, pouce, lobe de l'oreille, talon du nourrisson) |
| Volume | **Plusieurs mL**, recueillis dans des tubes (vacutainers) avec ou sans anticoagulant | **Quelques gouttes** |
| Usage | La **majorité des analyses** de biochimie, hématologie, coagulation | Petits volumes : glycémie, tests rapides, nouveau-nés |

**Différence essentielle : le volume et le site** — le prélèvement veineux fournit un volume suffisant pour un bilan complet (sérum, plasma, sang total), le capillaire ne donne que quelques gouttes pour des tests ponctuels quand la veine est inaccessible.

Dans les deux cas : désinfection à l'alcool (laisser sécher), et idéalement prélèvement **à jeun depuis 8–12 h** (sauf urgence).`,
    answer_en: `| | Venous collection | Capillary collection |
| --- | --- | --- |
| Technique | Puncture of a **vein** (arm) with a sterile needle, bevel up, after applying a **tourniquet** (released once blood flows) | **Skin puncture** (finger, thumb, earlobe, infant heel) |
| Volume | **Several mL**, collected in tubes (vacutainers) with or without anticoagulant | **A few drops** |
| Use | **Most** biochemistry, hematology and coagulation tests | Small volumes: glucose, rapid tests, newborns |

**Key difference: volume and site** — venipuncture provides enough volume for a full panel (serum, plasma, whole blood), while capillary sampling yields only a few drops for point tests when the vein is inaccessible.

In both cases: disinfect with alcohol (let it dry), and ideally sample **after 8–12 h fasting** (except emergencies).`,
  },
  {
    question_fr: "Expliquez les différences entre sérum et plasma.",
    question_en: "Explain the differences between serum and plasma.",
    answer_fr: `| | Plasma | Sérum |
| --- | --- | --- |
| Obtention | Sang **avec anticoagulant** (EDTA, héparine, citrate) puis centrifugation (~10 min à 1000–1200 × g) | Sang **sans anticoagulant** laissé coaguler (20–30 min à température ambiante), puis centrifugation (~1500 × g) |
| Définition | Partie liquide du sang **non coagulé** | Partie liquide du sang **coagulé** |
| Fibrinogène et facteurs de coagulation | **Présents** | **Absents** (consommés dans le caillot) |
| Ce qui sédimente | Éléments figurés (GR, GB, plaquettes) | Caillot (réseau de fibrine + cellules piégées) |

**Sang = plasma + cellules ; sérum = plasma − fibrinogène** (et autres facteurs consommés).

Le sérum est préféré pour la biochimie et l'électrophorèse des protéines (le fibrinogène gênerait la séparation) ; le plasma pour les tests de coagulation (citrate) et certains dosages urgents.`,
    answer_en: `| | Plasma | Serum |
| --- | --- | --- |
| How obtained | Blood **with anticoagulant** (EDTA, heparin, citrate), then centrifugation (~10 min at 1000–1200 × g) | Blood **without anticoagulant** allowed to clot (20–30 min at room temperature), then centrifugation (~1500 × g) |
| Definition | Liquid part of **unclotted** blood | Liquid part of **clotted** blood |
| Fibrinogen and clotting factors | **Present** | **Absent** (consumed in the clot) |
| What sediments | Formed elements (RBC, WBC, platelets) | The clot (fibrin mesh + trapped cells) |

**Blood = plasma + cells; serum = plasma − fibrinogen** (and other consumed factors).

Serum is preferred for biochemistry and protein electrophoresis (fibrinogen would interfere with separation); plasma for coagulation tests (citrate) and some urgent assays.`,
  },
  {
    question_fr: "Nommez trois anticoagulants, indiquez la couleur du bouchon du tube et l'ordre de prélèvement.",
    question_en: "Name three anticoagulants, indicate the color of the tube cap, and state the order of collection.",
    answer_fr: `| Anticoagulant | Bouchon | Mécanisme | Usage |
| --- | --- | --- | --- |
| **Citrate de sodium** | **Bleu clair** | Fixe le Ca²⁺ de façon réversible ; rapport sang/citrate 9:1 | Tests de coagulation (TP, TCA) |
| **Héparine** (Li ou Na) | **Vert** | Active l'antithrombine III → inhibe la thrombine | Biochimie sur plasma, gaz du sang |
| **EDTA** (K₂/Na₂) | **Violet (lavande)** | Chélate le Ca²⁺ de façon irréversible | Hématologie : NFS, frottis, HbA1c |
| Fluorure de sodium + oxalate de potassium | Gris | Oxalate fixe le Ca²⁺ ; fluorure inhibe l'énolase (glycolyse) | Glycémie |

**Ordre de prélèvement** :
1. Flacons d'hémoculture (SPS)
2. **Bleu clair** (citrate)
3. Rouge / or (sec, activateur de coagulation ± gel — sérum)
4. **Vert** (héparine)
5. **Violet** (EDTA)
6. Gris (fluorure/oxalate)

Cet ordre évite de contaminer un tube par l'additif du précédent (ex. EDTA dans un tube de coagulation).`,
    answer_en: `| Anticoagulant | Cap | Mechanism | Use |
| --- | --- | --- | --- |
| **Sodium citrate** | **Light blue** | Binds Ca²⁺ reversibly; blood:citrate ratio 9:1 | Coagulation tests (PT, aPTT) |
| **Heparin** (Li or Na) | **Green** | Enhances antithrombin III → inhibits thrombin | Plasma chemistry, blood gases |
| **EDTA** (K₂/Na₂) | **Lavender/purple** | Chelates Ca²⁺ irreversibly | Hematology: CBC, smears, HbA1c |
| Sodium fluoride + potassium oxalate | Gray | Oxalate binds Ca²⁺; fluoride inhibits enolase (glycolysis) | Glucose |

**Order of draw**:
1. Blood culture bottles (SPS)
2. **Light blue** (citrate)
3. Red / gold (plain, clot activator ± gel — serum)
4. **Green** (heparin)
5. **Lavender** (EDTA)
6. Gray (fluoride/oxalate)

This order prevents carry-over of one tube's additive into the next (e.g. EDTA into a coagulation tube).`,
  },
  {
    question_fr: "Présentez les types d'échantillons d'urine.",
    question_en: "Present types of urine specimens.",
    answer_fr: `1. **Échantillon aléatoire (random)** : recueilli à n'importe quel moment du jour ou de la nuit ; utilisé pour l'analyse d'urine de routine.
2. **Urines du premier matin** : recueillies au réveil ; préférées pour de nombreux tests car **plus concentrées**.
3. **Échantillon minuté** : recueilli sur une période définie (ex. **urines de 24 h**) ou à un moment précis après un événement (ex. 2 h après un repas pour la glycosurie postprandiale).
4. **Mi-jet après toilette (clean-catch)** : nécessite une préparation soigneuse pour limiter la contamination par la flore urétrale ; utilisé pour la **culture microbiologique** (ECBU).

(Hors miction spontanée : sondage urinaire, ponction sus-pubienne.)

Règles : récipient chimiquement propre (**stérile** pour une culture, **opaque/ambré** pour bilirubine et porphyrines), étiquetage avec identité, date et heure ; analyser rapidement, sinon **réfrigérer** au-delà d'1 h ; conservateurs pour les urines de 24 h (thymol, toluène… ; pas de chloroforme si on dose glucose ou corps cétoniques).`,
    answer_en: `1. **Random specimen**: collected at any time of day or night; used for routine urinalysis.
2. **First morning specimen**: collected right after waking; preferred for many tests because it is **more concentrated**.
3. **Timed specimen**: collected over a defined period (e.g. **24-hour urine**) or at a specific time after an event (e.g. 2 h after eating for postprandial glucose).
4. **Midstream clean-catch specimen**: requires careful patient preparation to minimize contamination from urethral flora; used for **microbiological culture**.

(Other than spontaneous voiding: catheterization, suprapubic aspiration.)

Rules: chemically clean container (**sterile** for culture, **amber/dark** for bilirubin and porphyrins), labelled with identity, date and time; analyse promptly, otherwise **refrigerate** beyond 1 h; preservatives for 24-h urine (thymol, toluene…; no chloroform if glucose or ketone bodies are measured).`,
  },
  {
    question_fr: "Présentez les principaux types de rotors de centrifugeuse.",
    question_en: "Present the main centrifuge rotor types.",
    answer_fr: `1. **Rotor à angle fixe** — le plus utilisé (centrifugation préparative) : les tubes sont maintenus à un angle constant (25–45°) par rapport à l'axe de rotation. Les particules parcourent une **courte distance** avant d'atteindre la paroi → sédimentation plus rapide, temps de centrifugation plus court, meilleure efficacité.
2. **Rotor à godets oscillants (swinging bucket)** : les tubes sont placés dans des godets qui basculent en **position horizontale** pendant la rotation. Les particules parcourent une distance plus longue → **meilleure séparation** des composants (gradients de densité) ; le surnageant se retire facilement sans perturber le culot.
3. **Rotor vertical** : les tubes sont **parallèles à l'axe de rotation** ; utilisé surtout dans les centrifugeuses à haute vitesse et les ultracentrifugeuses, souvent avec des systèmes optiques permettant de suivre la sédimentation en temps réel.

Rappel : centrifugeuses de paillasse (clinique, ≤ 3000 rpm), à haute vitesse (≤ 20 000 rpm), ultracentrifugeuses (≤ 60 000 rpm, réfrigérées et sous vide).`,
    answer_en: `1. **Fixed-angle rotor** — the most widely used (preparative centrifugation): tubes are held at a constant angle (25–45°) to the axis of rotation. Particles travel a **short distance** before reaching the tube wall → faster sedimentation, shorter run time, greater efficiency.
2. **Swinging-bucket rotor**: tubes sit in buckets that swing out to a **horizontal position** during rotation. Particles travel a longer distance → **better separation** of components (density gradients); the supernatant is easy to remove without disturbing the pellet.
3. **Vertical rotor**: tubes are **parallel to the axis of rotation**; used mainly in high-speed centrifuges and ultracentrifuges, often with optical systems that monitor sedimentation in real time.

Reminder: table-top (clinical, ≤ 3000 rpm), high-speed (≤ 20,000 rpm) and ultracentrifuges (≤ 60,000 rpm, refrigerated and under vacuum).`,
  },
  {
    question_fr: "Quelle est la différence entre rpm et RCF ?",
    question_en: "What is the difference between rpm and RCF?",
    answer_fr: `- **rpm** (rotations par minute) : la **vitesse de rotation** du rotor. Elle ne dit rien, seule, de la force réellement subie par l'échantillon.
- **RCF** (force centrifuge relative) : la **force** appliquée à l'échantillon, exprimée en **multiples de la gravité (× g)**.

La force centrifuge dépend à la fois de la vitesse **et du rayon** (distance à l'axe de rotation) : deux rotors de diamètres différents tournant au même rpm produisent des forces différentes.

C'est pourquoi les conditions de centrifugation s'expriment en **RCF (× g)** plutôt qu'en rpm (ex. plasma : 10 min à 1000–1200 × g) : cela garantit la **reproductibilité** d'une centrifugeuse et d'un rotor à l'autre.`,
    answer_en: `- **rpm** (revolutions per minute): the rotor's **speed of rotation**. On its own it says nothing about the force actually experienced by the sample.
- **RCF** (relative centrifugal force): the **force** applied to the sample, expressed as **multiples of gravity (× g)**.

Centrifugal force depends on both the speed **and the radius** (distance from the axis of rotation): two rotors of different diameters spinning at the same rpm generate different forces.

That is why centrifugation conditions are reported as **RCF (× g)** rather than rpm (e.g. plasma: 10 min at 1000–1200 × g): it ensures **reproducibility** across centrifuges and rotors.`,
  },
];

// ===========================================================================
// LAB 8 — Chromatographie, séparation des acides aminés (ordre 108)
// ===========================================================================
export const OPEN_LAB8_CHROMATOGRAPHY: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Expliquez ce qu'est la chromatographie et quels sont les composants essentiels d'un système chromatographique.",
    question_en: "Explain what is chromatography and which are the essential components of a Chromatography System?",
    answer_fr: `La **chromatographie** est une méthode de séparation fondée sur la **distribution différente des composants d'un mélange entre deux phases** : une **phase stationnaire** fixée sur un support et une **phase mobile** qui migre à travers elle. Chaque composant est plus ou moins retenu selon son affinité relative pour les deux phases, ce qui les sépare.

Composants essentiels :
- **Phase stationnaire** : solide ou liquide fixé sur un support (colonne, plaque, papier).
- **Phase mobile** : liquide ou gaz qui entraîne le mélange.
- **Support** : colonne ou surface plane (couche mince, papier).
- **Système d'injection / dépôt** de l'échantillon.
- **Système de détection** : pour repérer et identifier les composants séparés (révélateur coloré comme la ninhydrine, UV, détecteur en sortie de colonne).

Classifications : selon le support (colonne / planaire), l'état des phases (GLC, GSC, LLC, LSC) et le mécanisme (adsorption, partition, échange d'ions, gel-filtration, affinité).`,
    answer_en: `**Chromatography** is a separation method based on the **different distribution of a mixture's components between two phases**: a **stationary phase** fixed on a support and a **mobile phase** that moves through it. Each component is retained more or less according to its relative affinity for the two phases, which separates them.

Essential components:
- **Stationary phase**: solid or liquid fixed on a support (column, plate, paper).
- **Mobile phase**: liquid or gas carrying the mixture.
- **Support**: column or planar surface (thin layer, paper).
- **Sample injection / application** system.
- **Detection system**: to locate and identify the separated components (colour reagent such as ninhydrin, UV, detector at column outlet).

Classifications: by support (column / planar), state of the phases (GLC, GSC, LLC, LSC) and mechanism (adsorption, partition, ion exchange, gel filtration, affinity).`,
  },
  {
    question_fr: "Comment classer la chromatographie selon la nature des interactions entre les composants du mélange et les phases ? Décrivez brièvement chaque type.",
    question_en: "How can you classify chromatography according to the nature of interactions between the components of the mixture and the phases (mobile and/or stationary). Briefly describe each type.",
    answer_fr: `| Type | Base de la séparation | Phases | Principe |
| --- | --- | --- | --- |
| **Adsorption** | Polarité | SP solide (silice, alumine), MP liquide | Les molécules s'adsorbent plus ou moins à la surface de la SP ; celles de polarité proche de la SP sont retenues |
| **Partition** | Solubilité relative | Deux liquides non miscibles (SP liquide fixée sur un support) | Chaque molécule se partage entre les deux phases selon sa solubilité ; plus elle est soluble dans la MP, plus elle avance (ex. chromatographie sur papier) |
| **Échange d'ions** | Charge nette | Résine chargée (SP), tampon aqueux (MP) | Les molécules de charge opposée à la résine sont retenues ; résine cationique (–) fixe les cations, résine anionique (+) fixe les anions ; élution par variation de pH ou de force ionique |
| **Gel-filtration (exclusion stérique, tamis moléculaire)** | Taille et forme | Billes de gel poreux (SP), liquide (MP) | Les grosses molécules n'entrent pas dans les pores et sortent en premier ; les petites sont retardées dans les pores |
| **Affinité** | Liaison spécifique | Ligand fixé sur la SP | Seule la molécule cible se lie au ligand (enzyme-substrat, antigène-anticorps, récepteur-hormone) ; elle est éluée par un excès de ligand libre ou un changement de conditions — la plus sélective |`,
    answer_en: `| Type | Basis of separation | Phases | Principle |
| --- | --- | --- | --- |
| **Adsorption** | Polarity | Solid SP (silica, alumina), liquid MP | Molecules adsorb to the SP surface to different extents; those with polarity close to the SP are retained |
| **Partition** | Relative solubility | Two immiscible liquids (liquid SP held on a support) | Each molecule partitions between the phases according to its solubility; the more soluble in the MP, the further it moves (e.g. paper chromatography) |
| **Ion exchange** | Net charge | Charged resin (SP), aqueous buffer (MP) | Molecules with charge opposite to the resin are retained; cation exchanger (–) binds cations, anion exchanger (+) binds anions; elution by changing pH or ionic strength |
| **Gel filtration (size exclusion, molecular sieving)** | Size and shape | Porous gel beads (SP), liquid (MP) | Large molecules cannot enter the pores and elute first; small ones are delayed inside the pores |
| **Affinity** | Specific binding | Ligand attached to the SP | Only the target binds the ligand (enzyme-substrate, antigen-antibody, receptor-hormone); it is eluted with excess free ligand or a change in conditions — the most selective |`,
  },
  {
    question_fr: "Présentez brièvement l'expérience réalisée au laboratoire.",
    question_en: "Briefly present the experiment performed at the laboratory.",
    answer_fr: `**Séparation d'acides aminés par chromatographie sur papier** (chromatographie de **partition**).

- **Échantillon** : solution à 0,3 % de **phénylalanine et d'histidine**.
- **Phase mobile (éluant)** : n-butanol / acétone / acide acétique / eau (3,5 : 3,5 : 1 : 2).
- **Phase stationnaire** : l'eau liée à la cellulose du papier Whatman (hydrophile).

**Protocole** :
1. Saturer la cuve chromatographique en vapeurs d'éluant (10 mL d'éluant, cuve fermée).
2. Tracer au crayon une ligne de départ à 1,5 cm du bas ; déposer ~5 µL de solution au centre ; sécher.
3. Suspendre le papier dans la cuve, immergé d'environ 5 mm.
4. Laisser migrer jusqu'à ~2 cm du haut ; marquer le **front de solvant** ; sécher.
5. Pulvériser la **ninhydrine** et chauffer : les acides aminés apparaissent en **bleu-violet**.

**Calcul** : **Rf = distance parcourue par l'acide aminé / distance parcourue par le solvant** (< 1).

**Résultat** : la **phénylalanine** (plus hydrophobe) migre plus loin que l'**histidine** (moins hydrophobe) → Rf(Phe) > Rf(His).`,
    answer_en: `**Separation of amino acids by paper chromatography** (**partition** chromatography).

- **Sample**: 0.3% solution of **phenylalanine and histidine**.
- **Mobile phase (eluent)**: n-butanol / acetone / acetic acid / water (3.5 : 3.5 : 1 : 2).
- **Stationary phase**: water bound to the cellulose of Whatman paper (hydrophilic).

**Procedure**:
1. Saturate the chromatographic chamber with eluent vapours (10 mL eluent, closed chamber).
2. Draw a pencil start line 1.5 cm from the bottom; spot ~5 µL of solution in the middle; dry.
3. Suspend the paper in the chamber, immersed about 5 mm.
4. Let it run until ~2 cm from the top; mark the **solvent front**; dry.
5. Spray with **ninhydrin** and heat: amino acids appear **blue-violet**.

**Calculation**: **Rf = distance travelled by the amino acid / distance travelled by the solvent** (< 1).

**Result**: **phenylalanine** (more hydrophobic) moves further than **histidine** (less hydrophobic) → Rf(Phe) > Rf(His).`,
  },
  {
    question_fr: "Un mélange contient les protéines suivantes : A — 20 000 Da, charge positive ; B — 100 000 Da, charge positive ; C — 100 000 Da, charge négative. Quelles méthodes chromatographiques permettent de les séparer, et comment se fait l'élution ? Expliquez.",
    question_en: "A mixture consisting of the following proteins is considered: A - with a molecular weight of 20,000 Da and a positive charge; B - with a molecular weight of 100,000 Da and a positive charge; C - with a molecular weight of 100,000 Da and a negative charge. Which chromatographic methods can be used for their separation, and how is the elution of the proteins carried out? Explain.",
    answer_fr: `Aucune méthode seule ne sépare les trois : il faut **combiner** une séparation par **taille** et une séparation par **charge**.

**1. Gel-filtration (exclusion stérique)** — sépare selon la taille :
- B et C (100 kDa) n'entrent pas dans les pores → **élués en premier, ensemble** ;
- A (20 kDa) pénètre dans les pores → **élué plus tard**.
- Élution avec la même phase mobile (tampon) tout au long ; A est donc isolée.

**2. Échange d'ions** — sépare selon la charge (B et C ont la même taille mais des charges opposées) :
- Sur une **résine échangeuse de cations** (chargée –) : B (+) est retenue, C (–) passe directement → **C éluée en premier** ; B est ensuite décrochée en augmentant la **force ionique** (gradient de sel) ou en modifiant le **pH**.
- Sur une **résine échangeuse d'anions** (chargée +) : l'inverse — B (et A) passent, C est retenue puis éluée par le sel/pH.

**Stratégie** : gel-filtration (isole A) puis échange d'ions sur la fraction B + C (sépare B de C). On peut aussi faire l'échange de cations en premier (C sort ; A et B retenues, puis séparées par gel-filtration).`,
    answer_en: `No single method separates all three: you must **combine** separation by **size** and by **charge**.

**1. Gel filtration (size exclusion)** — separates by size:
- B and C (100 kDa) cannot enter the pores → **eluted first, together**;
- A (20 kDa) enters the pores → **eluted later**.
- Elution uses the same mobile phase (buffer) throughout; A is thus isolated.

**2. Ion exchange** — separates by charge (B and C have the same size but opposite charges):
- On a **cation-exchange resin** (negatively charged): B (+) is retained, C (–) flows through → **C elutes first**; B is then released by increasing **ionic strength** (salt gradient) or changing **pH**.
- On an **anion-exchange resin** (positively charged): the reverse — B (and A) flow through, C is retained then eluted by salt/pH.

**Strategy**: gel filtration (isolates A), then ion exchange on the B + C fraction (separates B from C). Alternatively, cation exchange first (C comes out; A and B retained, then separated by gel filtration).`,
  },
  {
    question_fr: "Un mélange d'acide glutamique, de tryptophane et de phénylalanine est séparé par chromatographie sur couche mince. La phase stationnaire est hydrophobe et la phase mobile hydrophile. Quel acide aminé a le Rf le plus élevé ? Expliquez.",
    question_en: "A mixture of glutamic acid, tryptophan, and phenylalanine is separated by thin-layer chromatography. The stationary phase is hydrophobic, and the mobile phase is hydrophilic. Which of the amino acids has the highest Rf value? Explain.",
    answer_fr: `**L'acide glutamique a le Rf le plus élevé.**

- Rf = distance parcourue par l'analyte / distance parcourue par le front de solvant : plus un composé a d'affinité pour la **phase mobile**, plus il migre loin.
- Ici la phase mobile est **hydrophile (polaire)** et la phase stationnaire **hydrophobe** (situation inverse de la chromatographie sur papier classique).
- L'**acide glutamique** est un acide aminé **polaire, chargé** (chaîne latérale –COOH/–COO⁻) → très soluble dans la phase mobile hydrophile, peu retenu par la phase stationnaire → **migre le plus loin**.
- Le **tryptophane** et la **phénylalanine** ont des chaînes latérales **aromatiques hydrophobes** → retenus par la phase stationnaire hydrophobe → Rf plus faibles.

Ordre attendu des Rf : **Glu > Trp ≳ Phe** (la phénylalanine, la plus apolaire, étant la plus retenue).`,
    answer_en: `**Glutamic acid has the highest Rf.**

- Rf = distance travelled by the analyte / distance travelled by the solvent front: the greater a compound's affinity for the **mobile phase**, the further it travels.
- Here the mobile phase is **hydrophilic (polar)** and the stationary phase **hydrophobic** (the reverse of classic paper chromatography).
- **Glutamic acid** is a **polar, charged** amino acid (side chain –COOH/–COO⁻) → highly soluble in the hydrophilic mobile phase, weakly retained by the stationary phase → **travels furthest**.
- **Tryptophan** and **phenylalanine** have **hydrophobic aromatic** side chains → retained by the hydrophobic stationary phase → lower Rf values.

Expected Rf order: **Glu > Trp ≳ Phe** (phenylalanine, the most apolar, being retained most).`,
  },
  {
    question_fr: "Une colonne est remplie de billes de gel poreuses : les grosses molécules contournent les billes et sortent en premier, tandis que les petites molécules entrent dans les pores et sont retardées. De quel type de chromatographie s'agit-il ? Expliquez.",
    question_en: "A column is packed with porous gel beads: large molecules flow around the beads and elute first, while small molecules enter the pores and are delayed. Which type of chromatography is this? Explain.",
    answer_fr: `Il s'agit de la **chromatographie de gel-filtration** (= **exclusion stérique**, perméation de gel, **tamis moléculaire**).

- **Phase stationnaire** : billes sphériques de gel en polymère réticulé, à **taille de pores contrôlée**, tassées dans une colonne. **Phase mobile** : un liquide (tampon).
- La séparation se fait selon la **taille et la forme** des molécules :
  - les **grosses molécules**, trop volumineuses pour entrer dans les pores, circulent **entre les billes** (chemin le plus court) → **éluées en premier** ;
  - les **petites molécules** pénètrent dans les pores et parcourent un chemin plus long → **éluées en dernier**.
- Pas de liaison chimique avec la phase stationnaire : l'élution se fait avec le même tampon.

Applications : purification de protéines, peptides et acides nucléiques ; **dessalage** et échange de tampon ; **estimation de la masse moléculaire**.`,
    answer_en: `This is **gel-filtration chromatography** (= **size exclusion**, gel permeation, **molecular sieving**).

- **Stationary phase**: spherical beads of cross-linked polymer gel with **controlled pore size**, packed in a column. **Mobile phase**: a liquid (buffer).
- Separation is based on molecular **size and shape**:
  - **large molecules**, too big to enter the pores, travel **between the beads** (shortest path) → **eluted first**;
  - **small molecules** enter the pores and follow a longer path → **eluted last**.
- No chemical binding to the stationary phase: elution uses the same buffer.

Applications: purification of proteins, peptides and nucleic acids; **desalting** and buffer exchange; **molecular weight estimation**.`,
  },
];

// ===========================================================================
// LAB 9 — Protéines : dialyse, électrophorèse (ordre 109)
// ===========================================================================
export const OPEN_LAB9_DIALYSIS: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Expliquez le principe de la dialyse.",
    question_en: "Explain the principle of dialysis.",
    answer_fr: `La **dialyse** est une technique de séparation fondée sur la **vitesse de diffusion différente** des composants d'un mélange à travers une **membrane semi-perméable**.

- La membrane (cellophane/cellulose, chimiquement inerte) se comporte comme un **tamis moléculaire** : ses pores laissent passer le **solvant et les petites molécules** (sels, urée, créatinine…) mais **retiennent les macromolécules** (protéines).
- Deux phénomènes :
  - **diffusion** des petits solutés du milieu **le plus concentré vers le moins concentré** ;
  - **osmose** : passage du solvant du milieu le moins concentré vers le plus concentré.
- Les échanges continuent jusqu'à **l'équilibre** des concentrations de part et d'autre.

Facteurs : perméabilité de la membrane, capacité de diffusion des substances, gradients (électrochimique, osmotique, hydrostatique), **température** (accélère, mais risque de dénaturer les protéines), **agitation**, temps.

Limites : temps long pour atteindre l'équilibre ; inefficace pour séparer des macromolécules entre elles.`,
    answer_en: `**Dialysis** is a separation technique based on the **different diffusion rates** of a mixture's components through a **semipermeable membrane**.

- The membrane (cellophane/cellulose, chemically inert) acts as a **molecular sieve**: its pores let the **solvent and small molecules** (salts, urea, creatinine…) pass but **retain macromolecules** (proteins).
- Two phenomena:
  - **diffusion** of small solutes from the **more concentrated to the less concentrated** side;
  - **osmosis**: movement of solvent from the less concentrated to the more concentrated side.
- Exchange continues until concentrations **equilibrate** on both sides.

Factors: membrane permeability, diffusion capacity of substances, gradients (electrochemical, osmotic, hydrostatic), **temperature** (speeds it up but may denature proteins), **agitation**, time.

Limitations: long time to reach equilibrium; ineffective for separating macromolecules from each other.`,
  },
  {
    question_fr: "Décrivez le circuit d'une hémodialyse, de la fistule artério-veineuse au dialyseur et retour, en nommant chaque élément.",
    question_en: "Describe the hemodialysis circuit, from the arteriovenous fistula to the dialyzer and back, naming each component.",
    answer_fr: `1. **Fistule artério-veineuse** (abord vasculaire au bras) : on y prélève le **sang à épurer** (ligne « artérielle »).
2. **Pompe à sang** : propulse le sang vers le dialyseur (un moniteur de pression et une pompe à héparine sont placés sur la ligne pour éviter la coagulation).
3. **Dialyseur (« rein artificiel »)** : cylindre d'environ 20 cm contenant des milliers de **fibres creuses** en membrane semi-perméable.
   - Le **sang impur entre** à une extrémité et circule **dans** les fibres (compartiment sang).
   - Le **dialysat frais entre** par un autre orifice et circule **autour** des fibres, **à contre-courant**, ce qui maximise la diffusion et l'ultrafiltration.
   - Urée, créatinine, excès d'eau et d'électrolytes passent dans le dialysat ; les protéines et les cellules restent dans le sang.
4. Le **dialysat chargé d'impuretés** sort du dialyseur et est éliminé.
5. Le **sang épuré** ressort du dialyseur et **retourne au patient** par la ligne « veineuse » (piège à bulles d'air), dans la fistule.

Une séance dure environ **4 heures** : tout le volume sanguin passe plusieurs fois dans le dialyseur.`,
    answer_en: `1. **Arteriovenous fistula** (vascular access in the arm): **impure blood** is drawn from it ("arterial" line).
2. **Blood pump**: drives blood to the dialyzer (a pressure monitor and a heparin pump on the line prevent clotting).
3. **Dialyzer ("artificial kidney")**: a cylinder about 20 cm long containing thousands of **hollow fibers** of semipermeable membrane.
   - **Impure blood enters** at one end and flows **inside** the fibers (blood compartment).
   - **Fresh dialysate enters** through another port and flows **around** the fibers **in counter-current**, maximizing diffusion and ultrafiltration.
   - Urea, creatinine, excess water and electrolytes pass into the dialysate; proteins and cells stay in the blood.
4. **Dialysate with impurities** leaves the dialyzer and is discarded.
5. **Cleaned blood** leaves the dialyzer and **returns to the patient** via the "venous" line (air bubble trap), into the fistula.

A session lasts about **4 hours**: the whole blood volume passes through the dialyzer several times.`,
  },
  {
    question_fr: "Expliquez brièvement l'expérience réalisée au laboratoire.",
    question_en: "Briefly explain the experiment performed at the lab.",
    answer_fr: `**Dialyse d'une solution de protéine (albumine) et de sulfate d'ammonium contre de l'eau.**

- Un **sac de dialyse** (seuil de coupure MWCO = 1000 Da) est rempli du mélange albumine + (NH₄)₂SO₄, fermé, puis plongé dans 600 mL d'eau distillée sous **agitation magnétique**.
- Seules les molécules < 1000 Da traversent la membrane : **NH₄⁺ (18 Da) et SO₄²⁻ (96 Da) diffusent vers l'extérieur**, l'eau entre dans le sac ; l'**albumine** (~47 000 Da) **reste dans le sac**.
- On teste l'eau extérieure et le contenu du sac avant dialyse puis toutes les heures :

| Analyte | Réactif | Résultat positif |
| --- | --- | --- |
| NH₄⁺ | Réactif de **Nessler** | Précipité jaune-orangé / brun |
| SO₄²⁻ | **Chlorure de baryum** (BaCl₂) | Précipité blanc (BaSO₄) |
| Protéine | **Bleu de Coomassie** (CBB) (ou biuret : violet) | Coloration violette/bleue |

**Observations** : la protéine n'est détectée **que dans le sac** ; NH₄⁺ et SO₄²⁻ **diminuent dans le sac** et **augmentent dans l'eau extérieure** au cours du temps. Cela démontre la nature macromoléculaire des protéines et le principe utilisé pour **dessaler** une protéine après précipitation au sulfate d'ammonium.`,
    answer_en: `**Dialysis of a protein (albumin) and ammonium sulfate solution against water.**

- A **dialysis bag** (cut-off MWCO = 1000 Da) is filled with the albumin + (NH₄)₂SO₄ mixture, sealed, and immersed in 600 mL of distilled water with **magnetic stirring**.
- Only molecules < 1000 Da cross the membrane: **NH₄⁺ (18 Da) and SO₄²⁻ (96 Da) diffuse out**, water enters the bag; **albumin** (~47,000 Da) **stays inside**.
- The external water and bag contents are tested before dialysis and then hourly:

| Analyte | Reagent | Positive result |
| --- | --- | --- |
| NH₄⁺ | **Nessler's** reagent | Yellow-orange / brown precipitate |
| SO₄²⁻ | **Barium chloride** (BaCl₂) | White precipitate (BaSO₄) |
| Protein | **Coomassie Brilliant Blue** (CBB) (or biuret: violet) | Violet/blue colour |

**Observations**: protein is detected **only inside the bag**; NH₄⁺ and SO₄²⁻ **decrease inside the bag** and **increase in the external water** over time. This demonstrates the macromolecular nature of proteins and the principle used to **desalt** a protein after ammonium sulfate precipitation.`,
  },
  {
    question_fr: "Qu'est-ce que l'électrophorèse ? Décrivez brièvement les facteurs qui influencent la vitesse de migration électrophorétique.",
    question_en: "What is electrophoresis? Briefly describe the factors that influence the electrophoretic migration speed.",
    answer_fr: `L'**électrophorèse** est la migration de particules **chargées** dans un milieu liquide (ou sur un support) sous l'effet d'un **champ électrique continu**. Les cations vont vers la **cathode (–)**, les anions vers l'**anode (+)**. La particule atteint une vitesse constante quand la force électrique (E·q) équilibre la force de frottement (f·v).

**Facteurs influençant la vitesse de migration** :
- **Charge nette** de la molécule : plus elle est élevée, plus la migration est rapide (elle dépend du pH du tampon par rapport au pI).
- **Taille** : les petites molécules migrent plus vite que les grosses.
- **Forme (conformation)** : à masse et charge égales, une molécule compacte/sphérique migre plus vite qu'une molécule allongée (coefficient de frottement plus faible).
- **Intensité du champ électrique** (tension/courant appliqués).
- **Nature du support** : papier, acétate de cellulose, gel (agarose à grands pores ; polyacrylamide à petits pores) — taille des pores.
- **Viscosité du milieu** (mobilité inversement proportionnelle) et **température** (une température plus élevée accélère la migration, mais l'échauffement perturbe la séparation).

En **SDS-PAGE**, le SDS dénature les protéines et masque leur charge : la séparation ne dépend plus que de la **taille**.`,
    answer_en: `**Electrophoresis** is the migration of **charged** particles in a liquid medium (or on a support) under a **direct-current electric field**. Cations move to the **cathode (–)**, anions to the **anode (+)**. The particle reaches a constant velocity when the electric force (E·q) balances the frictional force (f·v).

**Factors influencing migration speed**:
- **Net charge** of the molecule: the higher it is, the faster it moves (it depends on buffer pH relative to the pI).
- **Size**: small molecules migrate faster than large ones.
- **Shape (conformation)**: for equal mass and charge, a compact/spherical molecule migrates faster than an elongated one (lower friction coefficient).
- **Electric field strength** (applied voltage/current).
- **Nature of the support**: paper, cellulose acetate, gel (large-pore agarose; small-pore polyacrylamide) — pore size.
- **Viscosity of the medium** (mobility inversely proportional) and **temperature** (higher temperature speeds migration, but heating disturbs the separation).

In **SDS-PAGE**, SDS denatures proteins and masks their charge: separation then depends only on **size**.`,
  },
  {
    question_fr: "Décrivez l'utilité médicale de l'électrophorèse.",
    question_en: "Describe the medical utility of electrophoresis.",
    answer_fr: `L'électrophorèse de zone est la technique la plus utilisée en biochimie clinique pour analyser les protéines du **sérum**, de l'**urine**, du **LCR**, des globules rouges et des tissus.

**Électrophorèse des protéines sériques (EPS)** — réalisée sur **sérum** (le fibrinogène du plasma gênerait la séparation). Elle sépare 5 fractions, de l'anode vers la cathode : **albumine** (la plus abondante, 50–60 %), **α1** (α1-antitrypsine), **α2** (haptoglobine, céruloplasmine), **β** (transferrine, complément), **γ** (immunoglobulines).

Applications :
- **Myélome multiple** : détection d'un **pic monoclonal** (bande étroite, souvent en zone γ) — outil diagnostique clé.
- **Hypogammaglobulinémie** (déficit en anticorps, immunodéficiences).
- **Maladies chroniques** : profils anormaux évocateurs d'**inflammation**, d'atteinte **hépatique** (cirrhose) ou **rénale** (syndrome néphrotique).

Autres usages : séparation des **variants de l'hémoglobine**, **isoenzymes** (LDH, CK), focalisation isoélectrique, analyse des acides nucléiques (gel d'agarose).`,
    answer_en: `Zone electrophoresis is the most widely used technique in clinical biochemistry to analyse proteins from **serum**, **urine**, **CSF**, red blood cells and tissues.

**Serum protein electrophoresis (SPEP)** — performed on **serum** (plasma fibrinogen would interfere). It separates 5 fractions, from anode to cathode: **albumin** (most abundant, 50–60%), **α1** (α1-antitrypsin), **α2** (haptoglobin, ceruloplasmin), **β** (transferrin, complement), **γ** (immunoglobulins).

Applications:
- **Multiple myeloma**: detection of a **monoclonal spike** (narrow band, often in the γ zone) — a key diagnostic tool.
- **Hypogammaglobulinemia** (antibody deficiency, immunodeficiencies).
- **Chronic diseases**: abnormal patterns suggesting **inflammation**, **liver** disease (cirrhosis) or **kidney** dysfunction (nephrotic syndrome).

Other uses: separation of **hemoglobin variants**, **isoenzymes** (LDH, CK), isoelectric focusing, nucleic acid analysis (agarose gel).`,
  },
  {
    question_fr: "En comparant l'électrophorégramme d'un patient au profil normal des protéines sériques, quelles anomalies peut-on observer et comment les interpréter ?",
    question_en: "Comparing a patient's electropherogram with the normal serum protein pattern, which abnormalities can be seen and how are they interpreted?",
    answer_fr: `**Profil normal** (de l'anode + vers la cathode –) : une grosse bande d'**albumine**, puis des bandes plus fines **α1, α2, β** et une zone **γ** diffuse et peu intense.

Pour lire un tracé, on compare chaque fraction au profil normal :

| Anomalie observée | Interprétation |
| --- | --- |
| **Bande étroite et intense** (pic monoclonal) en zone γ, parfois en zone β | **Gammapathie monoclonale** — évoque un **myélome multiple** (un seul clone produit une seule immunoglobuline) |
| Zone γ **large, diffuse et augmentée** | **Hypergammaglobulinémie polyclonale** : inflammation/infection chronique, cirrhose |
| Zone γ **très pâle ou absente** | **Hypogammaglobulinémie** (déficit immunitaire) |
| **Albumine diminuée** | Insuffisance hépatique, pertes rénales (syndrome néphrotique), dénutrition |
| **α2 augmentée** | Inflammation aiguë ; syndrome néphrotique |

Dans la série du polycopié (patients 1 à 8), on retrouve ainsi des tracés normaux, des zones γ épaissies (polyclonales), et des **bandes étroites anormales en zone γ ou β** (pics monoclonaux) qui n'existent pas sur le profil normal.`,
    answer_en: `**Normal pattern** (from anode + to cathode –): a large **albumin** band, then thinner **α1, α2, β** bands and a diffuse, faint **γ** zone.

To read a pattern, compare each fraction with the normal profile:

| Observed abnormality | Interpretation |
| --- | --- |
| **Narrow, intense band** (monoclonal spike) in the γ zone, sometimes in β | **Monoclonal gammopathy** — suggests **multiple myeloma** (a single clone makes a single immunoglobulin) |
| **Broad, diffuse, increased** γ zone | **Polyclonal hypergammaglobulinemia**: chronic inflammation/infection, cirrhosis |
| **Very faint or absent** γ zone | **Hypogammaglobulinemia** (immunodeficiency) |
| **Decreased albumin** | Liver failure, renal loss (nephrotic syndrome), malnutrition |
| **Increased α2** | Acute inflammation; nephrotic syndrome |

In the handout's series (patients 1 to 8), you thus find normal patterns, thickened γ zones (polyclonal), and **abnormal narrow bands in the γ or β zone** (monoclonal spikes) that are absent from the normal profile.`,
  },
];

// ===========================================================================
// LAB 10 — Méthodes optiques, dosage des protéines (Bradford) (ordre 110)
// ===========================================================================
export const OPEN_LAB10_SPECTRO: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Qu'énonce la loi de Beer-Lambert ?",
    question_en: "What does Lambert-Beer Law state?",
    answer_fr: `L'**absorbance** d'une solution est **directement proportionnelle** à la **concentration** de la substance absorbante et à la **longueur du trajet optique** :

**A = ε · C · l**

- A = absorbance (densité optique), sans unité : A = log(I₀/I) = log(1/T), avec T = I/I₀ la transmittance
- ε = coefficient d'absorption molaire (L·mol⁻¹·cm⁻¹), constante caractéristique de la substance, dépendant de la longueur d'onde
- C = concentration (mol/L)
- l = longueur du trajet optique (épaisseur de la cuve, cm)

Conditions : lumière **monochromatique**, solution homogène et diluée, diminution d'intensité due uniquement à l'absorption. C'est la base de tout dosage spectrophotométrique.`,
    answer_en: `The **absorbance** of a solution is **directly proportional** to the **concentration** of the absorbing substance and to the **light path length**:

**A = ε · C · l**

- A = absorbance (optical density), dimensionless: A = log(I₀/I) = log(1/T), where T = I/I₀ is transmittance
- ε = molar absorptivity (L·mol⁻¹·cm⁻¹), a constant characteristic of the substance, wavelength-dependent
- C = concentration (mol/L)
- l = light path length (cuvette thickness, cm)

Conditions: **monochromatic** light, homogeneous dilute solution, intensity decrease due only to absorption. It is the basis of every spectrophotometric assay.`,
  },
  {
    question_fr: "Décrivez brièvement les déviations de la loi de Beer-Lambert.",
    question_en: "Briefly describe the deviations from the Beer-Lambert Law.",
    answer_fr: `La loi n'est valable que dans un **domaine de concentration limité**, où A = f(C) est une **droite**. Il y a déviation quand la relation devient **non linéaire** ; elle peut être **positive** (courbe au-dessus de la droite) ou **négative** (en dessous).

La loi peut être mise en défaut avec :
- des solutions **trop concentrées** (au-delà de C limite) ;
- des solutions **très diluées** (faiblement absorbantes) ;
- des trajets optiques **très courts**.

Causes :
- **Expérimentales** : température, pression, effets du solvant.
- **Instrumentales** : dispersion du rayonnement, instabilité de la source, performance du détecteur, précision du sélecteur de longueur d'onde et des fentes.
- **Chimiques** : déplacement d'équilibres (changement de pH, complexation, réactions concurrentes), effets de concentration.
- **Rayonnement non monochromatique.**

Le domaine de validité doit donc être vérifié expérimentalement en traçant A en fonction de C.`,
    answer_en: `The law is valid only within a **limited concentration range**, where A = f(C) is a **straight line**. A deviation occurs when the relationship becomes **non-linear**; it can be **positive** (curve above the line) or **negative** (below).

The law can fail with:
- **too concentrated** solutions (above the limit concentration);
- **very dilute** (weakly absorbing) solutions;
- **very short** path lengths.

Causes:
- **Experimental**: temperature, pressure, solvent effects.
- **Instrumental**: stray radiation, source instability, detector performance, wavelength selector and slit precision.
- **Chemical**: shifts in equilibria (pH change, complexation, competing reactions), concentration effects.
- **Non-monochromatic radiation.**

The valid range must therefore be checked experimentally by plotting A against C.`,
  },
  {
    question_fr: "Expliquez brièvement la méthode de la courbe d'étalonnage.",
    question_en: "Briefly explain the standard curve method.",
    answer_fr: `1. On prépare **au moins cinq solutions standards** de concentrations **connues et croissantes** (souvent par dilution d'une solution mère, C₁V₁ = C₂V₂).
2. Standards et échantillon subissent **la même réaction colorée**, dans les mêmes conditions.
3. Le spectrophotomètre est mis à zéro contre un **blanc** (tous les réactifs sauf l'analyte), pour annuler l'absorbance propre des réactifs.
4. On mesure l'**absorbance** de chaque standard à la longueur d'onde choisie (maximum d'absorption).
5. On trace **A = f(C)** : selon Beer-Lambert, on obtient une **droite d'étalonnage**.
6. On mesure l'absorbance de l'échantillon et on lit sa **concentration par interpolation** sur la droite.

L'échantillon doit tomber **dans la gamme des standards** (domaine de linéarité) ; sinon on le dilue et on multiplie le résultat par le facteur de dilution.`,
    answer_en: `1. Prepare **at least five standard solutions** of **known, increasing** concentrations (often by diluting a stock, C₁V₁ = C₂V₂).
2. Standards and sample undergo **the same colour reaction** under the same conditions.
3. The spectrophotometer is zeroed against a **blank** (all reagents except the analyte) to cancel the reagents' own absorbance.
4. Measure the **absorbance** of each standard at the chosen wavelength (absorption maximum).
5. Plot **A = f(C)**: by Beer-Lambert, this gives a **straight calibration line**.
6. Measure the sample's absorbance and read its **concentration by interpolation** on the line.

The sample must fall **within the standards' range** (linear range); otherwise dilute it and multiply the result by the dilution factor.`,
  },
  {
    question_fr: "Dans quelles conditions est-il recommandé d'utiliser la méthode du coefficient d'extinction ?",
    question_en: "Under what conditions is it recommended to use the extinction coefficient method?",
    answer_fr: `La méthode du **coefficient d'extinction (absorption) molaire** s'applique **quand on ne dispose pas d'une série complète de standards** pour construire une courbe d'étalonnage, ou quand des standards appropriés n'existent pas.

On calcule directement : **C = A / (ε · l)** (en tenant compte du volume final et du volume d'échantillon analysé).

Conditions pour qu'elle soit fiable :
- ε de la substance **connu** à la longueur d'onde de mesure, choisie avec soin ;
- mesure **dans le domaine de validité** de la loi de Beer-Lambert ;
- **pipettes précisément calibrées** ;
- **cuves de trajet optique bien défini** et constant.

Usage typique : **détermination des activités enzymatiques** (ex. test optique au NADH, ε₃₄₀ connu) et estimation de concentrations en l'absence de standards.`,
    answer_en: `The **molar extinction (absorption) coefficient** method is used **when no full set of standards is available** to build a calibration curve, or when suitable standards do not exist.

Concentration is calculated directly: **C = A / (ε · l)** (accounting for final volume and analysed sample volume).

Conditions for reliability:
- ε of the substance **known** at the measurement wavelength, carefully selected;
- measurement **within the valid range** of the Beer-Lambert law;
- **precisely calibrated pipettes**;
- **cuvettes with a well-defined**, consistent path length.

Typical use: **enzyme activity determination** (e.g. NADH optical test, known ε₃₄₀) and estimating concentrations when standards are lacking.`,
  },
  {
    question_fr: "Décrivez l'expérience réalisée au laboratoire.",
    question_en: "Describe the experiment performed in the laboratory.",
    answer_fr: `**Dosage des protéines par la méthode de Bradford.**

**Principe** : en milieu acide, les protéines se lient au **bleu de Coomassie G250** (réactif de Bradford) et forment un complexe **bleu** dont l'absorbance à **595 nm** est proportionnelle à la concentration en protéines.

**Protocole** :
1. Gamme d'étalonnage : 5 dilutions de **BSA** (albumine sérique bovine) à partir d'une solution mère à 2 mg/mL, 1 mL chacune : **0,2 – 0,4 – 0,6 – 0,8 – 1,0 mg/mL** (volumes calculés par C₁V₁ = C₂V₂).
2. Pour chaque standard et pour l'échantillon inconnu : **50 µL** d'échantillon + **1500 µL** de réactif de Bradford ; **blanc** : 50 µL d'eau distillée + 1500 µL de réactif.
3. Homogénéiser, incuber **20 min à température ambiante**.
4. Lire l'absorbance à **595 nm** contre le blanc.
5. Tracer la **courbe d'étalonnage** A = f(C) et y lire la concentration de l'échantillon.

Valeurs normales des protéines sériques totales : **6,2 – 8,0 g/100 mL**.`,
    answer_en: `**Protein determination by the Bradford method.**

**Principle**: in acidic medium, proteins bind **Coomassie Brilliant Blue G250** (Bradford reagent) and form a **blue** complex whose absorbance at **595 nm** is proportional to protein concentration.

**Procedure**:
1. Calibration series: 5 dilutions of **BSA** (bovine serum albumin) from a 2 mg/mL stock, 1 mL each: **0.2 – 0.4 – 0.6 – 0.8 – 1.0 mg/mL** (volumes from C₁V₁ = C₂V₂).
2. For each standard and the unknown: **50 µL** sample + **1500 µL** Bradford reagent; **blank**: 50 µL distilled water + 1500 µL reagent.
3. Mix, incubate **20 min at room temperature**.
4. Read absorbance at **595 nm** against the blank.
5. Plot the **calibration curve** A = f(C) and read the sample's concentration from it.

Normal total serum protein: **6.2 – 8.0 g/100 mL**.`,
  },
  {
    question_fr: "Dans quelles conditions peut-on observer une hypoprotéinémie ou une hyperprotéinémie ?",
    question_en: "Under what conditions can hypoproteinemia or hyperproteinemia occur?",
    answer_fr: `Valeurs normales : **6,2 – 8,0 g/100 mL** de protéines sériques totales.

**Hyperprotéinémie** (> 8 g/100 mL) :
- **relative** : **hémoconcentration** par déshydratation (nausées, vomissements, diarrhée) ;
- **vraie** : forte augmentation d'un composant immunitaire — **myélome multiple**, collagénoses, leucémies — ou présence excessive de protéines anormales.

**Hypoprotéinémie** (< 6,2 g/100 mL), toujours associée à un **bilan azoté négatif** :
- **pertes rénales** excessives de protéines (syndrome néphrotique) ;
- **maladies hépatiques** (synthèse diminuée) ;
- **déficits immunitaires** (moins d'anticorps produits) ;
- **brûlures, traumatismes** (catabolisme protéique accéléré) ;
- **dénutrition** ou malabsorption → « **œdème de famine** » (albumine basse, pression oncotique diminuée), avec baisse de l'immunité, anémie, ostéoporose, troubles digestifs.`,
    answer_en: `Normal values: **6.2 – 8.0 g/100 mL** total serum protein.

**Hyperproteinemia** (> 8 g/100 mL):
- **relative**: **hemoconcentration** from dehydration (nausea, vomiting, diarrhea);
- **true**: marked increase of an immune component — **multiple myeloma**, collagen diseases, leukemia — or excess abnormal proteins.

**Hypoproteinemia** (< 6.2 g/100 mL), always associated with a **negative nitrogen balance**:
- excessive **renal protein loss** (nephrotic syndrome);
- **liver disease** (reduced synthesis);
- **immunodeficiency** (fewer antibodies produced);
- **burns, trauma** (accelerated protein catabolism);
- **malnutrition** or malabsorption → "**hunger edema**" (low albumin, reduced oncotic pressure), with lowered immunity, anemia, osteoporosis, digestive disorders.`,
  },
];

// ===========================================================================
// LAB 11 — Cofacteurs enzymatiques, test optique (ordre 111)
// ===========================================================================
export const OPEN_LAB11_OPTICAL_TEST: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Écrivez les différences entre un coenzyme et un groupement prosthétique. Donnez des exemples pour chaque catégorie.",
    question_en: "Write the differences between a coenzyme and a prosthetic group. Give examples for both categories.",
    answer_fr: `Les deux sont des **cofacteurs** non protéiques des hétéroenzymes (apoenzyme + cofacteur = enzyme active), souvent dérivés de **vitamines**.

| | Coenzyme | Groupement prosthétique |
| --- | --- | --- |
| Liaison à l'enzyme | **Faible, non covalente** : se dissocie facilement | **Covalente** (ou très forte) : reste fixé |
| Comportement | Agit comme un **cosubstrat** (« second substrat »), modifié puis libéré | **Régénéré sur place** au cours du cycle catalytique |
| Exemples | **NAD⁺/NADP⁺** (niacine, B3), **TPP** (thiamine, B1), **coenzyme A** (B5), **THF** (folate, B9), BH4, ATP/GTP/UTP | **FAD, FMN** (riboflavine, B2), **PLP** (pyridoxine, B6), **biotine** (B7), **cobalamines** (B12), acide lipoïque |

Troisième catégorie de cofacteurs : les **ions métalliques** (Zn²⁺, Mg²⁺, Fe²⁺/³⁺, Cu²⁺…).

Parmi tous ces cofacteurs, seuls les dérivés de la niacine (**NAD(P)⁺/NAD(P)H**) servent en routine au dosage des activités enzymatiques, grâce à leurs propriétés optiques.`,
    answer_en: `Both are non-protein **cofactors** of heteroenzymes (apoenzyme + cofactor = active enzyme), often derived from **vitamins**.

| | Coenzyme | Prosthetic group |
| --- | --- | --- |
| Binding to the enzyme | **Loose, non-covalent**: dissociates easily | **Covalent** (or very tight): stays bound |
| Behaviour | Acts as a **co-substrate** ("second substrate"), modified then released | **Regenerated in situ** during the catalytic cycle |
| Examples | **NAD⁺/NADP⁺** (niacin, B3), **TPP** (thiamine, B1), **coenzyme A** (B5), **THF** (folate, B9), BH4, ATP/GTP/UTP | **FAD, FMN** (riboflavin, B2), **PLP** (pyridoxine, B6), **biotin** (B7), **cobalamins** (B12), lipoic acid |

Third cofactor category: **metal ions** (Zn²⁺, Mg²⁺, Fe²⁺/³⁺, Cu²⁺…).

Of all these, only niacin derivatives (**NAD(P)⁺/NAD(P)H**) are routinely used to measure enzyme activities, thanks to their optical properties.`,
  },
  {
    question_fr: "Qu'est-ce que le test optique ? Expliquez pourquoi l'absorbance est mesurée à 340 nm et non à 260 nm.",
    question_en: "What is the optical test? Explain why the absorbance determination is done at 340 nm and not 260 nm.",
    answer_fr: `Le **test optique** (Warburg et Christian, 1936) est une **méthode cinétique spectrophotométrique** de dosage des enzymes qui utilisent le **NAD(P)⁺/NAD(P)H** : on suit au cours du temps l'**oxydation du NADH** (NADH + H⁺ → NAD⁺) ou la **réduction du NAD⁺**, qui s'accompagnent d'une variation d'absorbance. La variation d'absorbance par minute (ΔA/min) est proportionnelle à l'activité enzymatique (1 U = 1 µmol de substrat transformé par minute).

**Pourquoi 340 nm ?**
- À **260 nm**, NAD⁺ **et** NADH absorbent tous les deux fortement (cycle adénine commun) : la conversion de l'un en l'autre ne change presque pas l'absorbance → **impossible de suivre la réaction**.
- À **340 nm** (zone 300–370 nm), **seul le NADH absorbe** ; le NAD⁺ n'absorbe presque pas. Toute variation d'absorbance reflète donc directement l'apparition ou la disparition du NADH.

On travaille donc à **340 nm** (ou 366 nm).`,
    answer_en: `The **optical test** (Warburg and Christian, 1936) is a **kinetic spectrophotometric method** for enzymes that use **NAD(P)⁺/NAD(P)H**: over time, one follows the **oxidation of NADH** (NADH + H⁺ → NAD⁺) or the **reduction of NAD⁺**, both accompanied by a change in absorbance. The change in absorbance per minute (ΔA/min) is proportional to enzyme activity (1 U = 1 µmol of substrate converted per minute).

**Why 340 nm?**
- At **260 nm**, both NAD⁺ **and** NADH absorb strongly (shared adenine ring): converting one into the other barely changes absorbance → **the reaction cannot be followed**.
- At **340 nm** (300–370 nm region), **only NADH absorbs**; NAD⁺ absorbs almost nothing. Any change in absorbance therefore directly reflects the appearance or disappearance of NADH.

Measurements are therefore made at **340 nm** (or 366 nm).`,
  },
  {
    question_fr: "Combien de variantes techniques du test optique connaissez-vous ? Présentez-les brièvement.",
    question_en: "How many technical variants of optical test do you know. Present them briefly.",
    answer_fr: `**Trois variantes**, qui permettent de doser presque toutes les enzymes du laboratoire clinique :

1. **Test optique simple** : l'enzyme dosée utilise elle-même le NAD(P)H comme coenzyme ; on suit directement la variation d'absorbance à 340 nm.
   - Ex. **LDH** : pyruvate + NADH + H⁺ ⇌ lactate + NAD⁺ ; aussi MDH, GDH, sorbitol déshydrogénase.

2. **Test optique couplé à une réaction indicatrice** : l'enzyme dosée n'utilise pas le NADH ; son produit devient le substrat d'une seconde enzyme NADH-dépendante (réaction indicatrice).
   - Ex. **ALAT (GPT)** : alanine + α-cétoglutarate → pyruvate + glutamate, puis pyruvate + NADH →(LDH) lactate + NAD⁺.
   - Ex. **ASAT (GOT)** : aspartate + α-cétoglutarate → oxaloacétate + glutamate, puis oxaloacétate + NADH →(MDH) malate + NAD⁺.

3. **Test optique avec réaction auxiliaire + réaction indicatrice** : le produit de la première réaction ne peut pas être directement le substrat d'une enzyme NADH-dépendante → on intercale une réaction auxiliaire.
   - Ex. **CK** : créatine + ATP → créatine-phosphate + ADP ; ADP + phosphoénolpyruvate →(pyruvate kinase) pyruvate + ATP ; pyruvate + NADH →(LDH) lactate + NAD⁺.

Dans les variantes 2 et 3, tous les réactifs auxiliaires sont **en excès** pour que la vitesse mesurée ne dépende que de l'enzyme dosée.`,
    answer_en: `**Three variants**, which together allow almost every clinical laboratory enzyme to be measured:

1. **Simple optical test**: the enzyme itself uses NAD(P)H as coenzyme; the change in absorbance at 340 nm is followed directly.
   - E.g. **LDH**: pyruvate + NADH + H⁺ ⇌ lactate + NAD⁺; also MDH, GDH, sorbitol dehydrogenase.

2. **Optical test coupled with an indicator reaction**: the enzyme does not use NADH; its product becomes the substrate of a second, NADH-dependent enzyme (indicator reaction).
   - E.g. **ALT (GPT)**: alanine + α-ketoglutarate → pyruvate + glutamate, then pyruvate + NADH →(LDH) lactate + NAD⁺.
   - E.g. **AST (GOT)**: aspartate + α-ketoglutarate → oxaloacetate + glutamate, then oxaloacetate + NADH →(MDH) malate + NAD⁺.

3. **Optical test with auxiliary + indicator reactions**: the first product cannot directly feed an NADH-dependent enzyme → an auxiliary reaction is inserted.
   - E.g. **CK**: creatine + ATP → creatine phosphate + ADP; ADP + phosphoenolpyruvate →(pyruvate kinase) pyruvate + ATP; pyruvate + NADH →(LDH) lactate + NAD⁺.

In variants 2 and 3, all auxiliary reagents are in **excess** so the measured rate depends only on the enzyme being assayed.`,
  },
  {
    question_fr: "Présentez brièvement l'expérience réalisée au laboratoire.",
    question_en: "Briefly, present the experiment performed at the laboratory.",
    answer_fr: `**Détermination de l'activité de la lactate déshydrogénase (LDH) sérique par test optique simple.**

**Principe** : à pH 7,5, la LDH réduit le pyruvate en lactate en oxydant le NADH :
pyruvate + NADH + H⁺ → lactate + NAD⁺
La **disparition du NADH** se traduit par une **baisse de l'absorbance à 340 nm**, proportionnelle à l'activité de la LDH. (La réaction inverse, lactate → pyruvate, se fait à pH 9.)

**Protocole** :
1. Régler le spectrophotomètre à **340 nm** et le calibrer contre l'eau distillée.
2. Dans une cuve : **100 µL de sérum** + **1000 µL de réactif de travail** (pyruvate, NADH, tampon) ; homogénéiser.
3. Lire l'absorbance à **0, 1, 2 et 3 minutes**.

**Calcul** : ΔA/min = [(A₀ − A₁) + (A₁ − A₂) + (A₂ − A₃)] / 3, puis activité (U/L) = ΔA/min × **4127** (facteur issu du coefficient d'absorption molaire du NADH et des volumes).

**Valeurs normales** : 135 – 225 U/L.`,
    answer_en: `**Determination of serum lactate dehydrogenase (LDH) activity by the simple optical test.**

**Principle**: at pH 7.5, LDH reduces pyruvate to lactate while oxidizing NADH:
pyruvate + NADH + H⁺ → lactate + NAD⁺
The **disappearance of NADH** shows as a **fall in absorbance at 340 nm**, proportional to LDH activity. (The reverse reaction, lactate → pyruvate, occurs at pH 9.)

**Procedure**:
1. Set the spectrophotometer to **340 nm** and calibrate against distilled water.
2. In a cuvette: **100 µL serum** + **1000 µL working reagent** (pyruvate, NADH, buffer); mix.
3. Read absorbance at **0, 1, 2 and 3 minutes**.

**Calculation**: ΔA/min = [(A₀ − A₁) + (A₁ − A₂) + (A₂ − A₃)] / 3, then activity (U/L) = ΔA/min × **4127** (factor derived from NADH's molar absorptivity and the volumes).

**Normal values**: 135 – 225 U/L.`,
  },
  {
    question_fr: "Quelle est l'utilité clinique du dosage de la LDH, de l'ALAT, de l'ASAT et de la CK ?",
    question_en: "What is the clinical utility of LDH, ALAT, ASAT, CK determination?",
    answer_fr: `**LDH** (présente dans toutes les cellules ; 5 isoenzymes, tétramères H/M) :
- augmentée dans les atteintes **hépatiques** (hépatite virale, cirrhose — **LDH5**), **cardiaques** (infarctus du myocarde — **LDH1, LDH2** ; hausse dès ~12 h, pic vers 72 h, retour à la normale en ~10 jours), musculaires, rénales, pulmonaires, **hémolyse**, pancréatite, anémie pernicieuse, leucémie aiguë lymphoblastique, certains cancers.

**ALAT (GPT)** : surtout **hépatique** → marqueur **le plus spécifique** de l'atteinte hépatocellulaire (inflammation du foie, hépatite).

**ASAT (GOT)** : foie, **myocarde**, muscle squelettique, globules rouges → moins spécifique.
- ALAT + ASAT augmentées ensemble : **hépatite**.
- ASAT seule augmentée : lésion **musculaire**, **hémolyse**, **infarctus du myocarde**.

**CK** (créatine kinase, dimère B/M) : **CK-BB** (cerveau), **CK-MB** (**myocarde**), **CK-MM** (muscle squelettique).
- augmentée dans l'**infarctus du myocarde** (CK-MB) et les **lésions musculaires** / rhabdomyolyse.

Le profil d'enzymes et d'isoenzymes oriente vers le **tissu atteint**.`,
    answer_en: `**LDH** (present in all cells; 5 isoenzymes, H/M tetramers):
- increased in **liver** disease (viral hepatitis, cirrhosis — **LDH5**), **cardiac** disease (myocardial infarction — **LDH1, LDH2**; rises from ~12 h, peaks ~72 h, back to normal in ~10 days), muscle, kidney and lung disease, **hemolysis**, pancreatitis, pernicious anemia, acute lymphoblastic leukemia, some cancers.

**ALT (GPT)**: mainly **hepatic** → the **most specific** marker of hepatocellular injury (liver inflammation, hepatitis).

**AST (GOT)**: liver, **myocardium**, skeletal muscle, red blood cells → less specific.
- ALT + AST both raised: **hepatitis**.
- AST alone raised: **muscle** injury, **hemolysis**, **myocardial infarction**.

**CK** (creatine kinase, B/M dimer): **CK-BB** (brain), **CK-MB** (**myocardium**), **CK-MM** (skeletal muscle).
- increased in **myocardial infarction** (CK-MB) and **muscle injury** / rhabdomyolysis.

The enzyme and isoenzyme profile points to the **affected tissue**.`,
  },
];

// ===========================================================================
// LAB 12 — Vitamines : dosage de la vitamine C (ordre 112)
// ===========================================================================
export const OPEN_LAB12_VITAMIN_C: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Quelles sont les principales vitamines hydrosolubles et liposolubles ?",
    question_en: "Which are the main water-soluble vitamins and lipo-soluble vitamins?",
    answer_fr: `**Hydrosolubles** :
- **Vitamine C** (acide ascorbique)
- **Complexe B** : B1 (thiamine), B2 (riboflavine → FAD/FMN), B3 (niacine → NAD⁺/NADP⁺), B5 (acide pantothénique), B6 (pyridoxine/pyridoxal), B7 (biotine), B9 (acide folique), B12 (cobalamine)

**Liposolubles** (dérivés isoprénoïdes) :
- **A** (rétinol), **D** (calciférol), **E** (tocophérol), **K** (phylloquinone/ménadione)

Moyen mnémotechnique : les liposolubles sont **A, D, E, K** ; toutes les autres sont hydrosolubles.`,
    answer_en: `**Water-soluble**:
- **Vitamin C** (ascorbic acid)
- **B complex**: B1 (thiamine), B2 (riboflavin → FAD/FMN), B3 (niacin → NAD⁺/NADP⁺), B5 (pantothenic acid), B6 (pyridoxine/pyridoxal), B7 (biotin), B9 (folic acid), B12 (cobalamin)

**Fat-soluble** (isoprenoid derivatives):
- **A** (retinol), **D** (calciferol), **E** (tocopherol), **K** (phylloquinone/menadione)

Mnemonic: the fat-soluble ones are **A, D, E, K**; all others are water-soluble.`,
  },
  {
    question_fr: "Citez les « vitamines » que l'organisme humain peut synthétiser.",
    question_en: "Name the \"vitamins\" that can be synthesized by the human organism.",
    answer_fr: `La plupart des vitamines doivent être apportées par l'alimentation, mais quelques-unes peuvent être produites :
- **Vitamine D** : synthétisée dans la **peau** à partir d'un dérivé du cholestérol sous l'effet des UV.
- **Niacine (vitamine B3)** : synthétisée à partir du **tryptophane**.
- Produites par la **flore intestinale** : **vitamine K** et **biotine (B7)**.

C'est pour cela qu'on les écrit entre guillemets : elles ne répondent pas strictement à la définition d'une vitamine (composé non synthétisé par l'organisme).

À l'inverse, l'humain **ne peut pas synthétiser la vitamine C** (absence de l'enzyme nécessaire), contrairement à la plupart des animaux.`,
    answer_en: `Most vitamins must come from the diet, but a few can be produced:
- **Vitamin D**: synthesized in the **skin** from a cholesterol derivative under UV light.
- **Niacin (vitamin B3)**: synthesized from **tryptophan**.
- Produced by the **intestinal flora**: **vitamin K** and **biotin (B7)**.

That is why they are written in quotation marks: they do not strictly fit the definition of a vitamin (a compound the body cannot make).

Conversely, humans **cannot synthesize vitamin C** (lacking the required enzyme), unlike most animals.`,
  },
  {
    question_fr: "Présentez brièvement les principaux rôles de la vitamine C.",
    question_en: "Briefly, present the main roles of Vitamin C.",
    answer_fr: `- **Cofacteur des réactions d'hydroxylation**, en particulier dans la **synthèse du collagène** (hydroxylation de la proline et de la lysine) → solidité des tissus conjonctifs, cicatrisation, santé osseuse.
- **Antioxydant puissant** : neutralise les radicaux libres.
- **Immunité** : améliore la fonction des leucocytes et la résistance aux infections.
- **Absorption du fer** : réduit Fe³⁺ en Fe²⁺, forme absorbable.
- **Synthèse des neurotransmetteurs** (conversion de la dopamine en noradrénaline) et des hormones stéroïdiennes.

**Carence** : **scorbut** (anomalies du collagène, saignements des gencives, mauvaise cicatrisation).
**Excès** : production d'acide oxalique → risque de **calculs rénaux**.

La vitamine C est fragile : sensible à la lumière, à l'O₂, à la chaleur et au pH alcalin.`,
    answer_en: `- **Cofactor for hydroxylation reactions**, especially in **collagen synthesis** (hydroxylation of proline and lysine) → connective tissue strength, wound healing, bone health.
- **Powerful antioxidant**: scavenges free radicals.
- **Immunity**: enhances leukocyte function and resistance to infection.
- **Iron absorption**: reduces Fe³⁺ to Fe²⁺, the absorbable form.
- **Neurotransmitter synthesis** (dopamine → noradrenaline) and steroid hormone synthesis.

**Deficiency**: **scurvy** (collagen defects, bleeding gums, poor wound healing).
**Excess**: oxalic acid production → risk of **kidney stones**.

Vitamin C is fragile: sensitive to light, O₂, heat and alkaline pH.`,
  },
  {
    question_fr: "Expliquez brièvement le dosage de la vitamine C dans un jus par titration.",
    question_en: "Briefly, explain the determination of vitamin C from a juice using titration.",
    answer_fr: `**Titration d'oxydoréduction par l'iode (iodométrie).**

**Principe** : l'acide ascorbique est un **réducteur** ; l'iode I₂ est l'**oxydant** (titrant).
acide ascorbique + I₂ → acide déhydroascorbique + 2 I⁻ + 2 H⁺
Tant qu'il reste de la vitamine C, l'iode ajouté est immédiatement consommé.

**Protocole** :
- Trois échantillons titrés en parallèle : une **solution standard** de vitamine C (concentration connue), un **jus commercial**, un **jus d'orange frais**.
- Chacun est mélangé à de l'eau, de l'**amidon** (indicateur) et de l'**acide acétique** (milieu acide : empêche l'oxydation de la vitamine C par l'O₂ de l'air).
- On ajoute la solution d'iode **goutte à goutte** jusqu'à l'apparition d'une **coloration bleue persistante** (point d'équivalence).

**Calcul** : C(échantillon) = [V(I₂) échantillon / V(I₂) standard] × C(standard).

On compare ainsi la teneur en vitamine C du jus frais et du jus commercial.`,
    answer_en: `**Redox titration with iodine (iodometry).**

**Principle**: ascorbic acid is a **reducing agent**; iodine I₂ is the **oxidizing agent** (titrant).
ascorbic acid + I₂ → dehydroascorbic acid + 2 I⁻ + 2 H⁺
As long as vitamin C remains, added iodine is consumed immediately.

**Procedure**:
- Three samples titrated in parallel: a **vitamin C standard** (known concentration), a **commercial juice**, a **fresh orange juice**.
- Each is mixed with water, **starch** (indicator) and **acetic acid** (acidic medium: prevents oxidation of vitamin C by air O₂).
- Iodine solution is added **drop by drop** until a **persistent blue colour** appears (equivalence point).

**Calculation**: C(sample) = [V(I₂) sample / V(I₂) standard] × C(standard).

This compares the vitamin C content of fresh and commercial juice.`,
  },
  {
    question_fr: "Quel est le rôle de l'amidon lors de l'expérience réalisée ?",
    question_en: "What is the role of starch during the experiment that you have performed?",
    answer_fr: `L'amidon (empois d'amidon) est l'**indicateur de fin de titration**.

- L'amidon forme avec l'**iode libre (I₂)** un **complexe bleu** caractéristique.
- Pendant la titration, l'iode ajouté est **consommé au fur et à mesure** par l'acide ascorbique (réduit en I⁻, qui ne colore pas l'amidon) → la solution reste incolore.
- Dès que **toute la vitamine C a été oxydée**, la goutte d'iode suivante reste **en excès** et se fixe sur l'amidon → la **coloration bleue** apparaît.

L'apparition du bleu persistant marque donc le **point d'équivalence** : le volume d'iode versé à ce moment permet de calculer la quantité de vitamine C.`,
    answer_en: `Starch is the **end-point indicator** of the titration.

- Starch forms a characteristic **blue complex** with **free iodine (I₂)**.
- During the titration, added iodine is **consumed as it is added** by ascorbic acid (reduced to I⁻, which does not colour starch) → the solution stays colourless.
- As soon as **all the vitamin C has been oxidized**, the next drop of iodine remains **in excess** and binds starch → the **blue colour** appears.

The appearance of a persistent blue colour therefore marks the **equivalence point**: the volume of iodine added at that moment is used to calculate the amount of vitamin C.`,
  },
];

// ===========================================================================
// LAB 13 — Cinétique enzymatique, Km et Vmax (ordre 113)
// ===========================================================================
export const OPEN_LAB13_KINETICS: LibraryOpenQuestionSeed[] = [
  {
    question_fr: "Sur une figure montrant l'évolution des concentrations au cours d'une réaction enzymatique (une courbe qui décroît, une courbe qui croît, en fonction du temps), nommez les deux courbes et l'axe des abscisses, puis interprétez brièvement la figure.",
    question_en: "On a figure showing concentrations over the course of an enzymatic reaction (one decreasing curve, one increasing curve, plotted against time), name the two curves and the x-axis, then briefly interpret the figure.",
    answer_fr: `**Légendes** :
- axe des abscisses : **le temps (t)** ; axe des ordonnées : la concentration ;
- la courbe **décroissante** : **[S], le substrat**, consommé ;
- la courbe **croissante** : **[P], le produit**, formé.

**Interprétation** :
- La vitesse de la réaction, v = −d[S]/dt = d[P]/dt, correspond à la **pente** des courbes.
- Au début, la pente est maximale et la formation de produit est **linéaire** avec le temps : c'est la **vitesse initiale v₀** (pente à l'origine).
- Ensuite la vitesse **diminue** (les courbes s'aplatissent) à cause de : la baisse de [S] (enzyme moins saturée), la dénaturation de l'enzyme, l'inhibition par le produit, l'inactivation du coenzyme, l'apparition de la réaction inverse.
- C'est pourquoi les études enzymatiques mesurent **toujours la vitesse initiale**, quand ces facteurs perturbateurs sont minimaux.`,
    answer_en: `**Labels**:
- x-axis: **time (t)**; y-axis: concentration;
- the **decreasing** curve: **[S], the substrate**, consumed;
- the **increasing** curve: **[P], the product**, formed.

**Interpretation**:
- Reaction rate, v = −d[S]/dt = d[P]/dt, is the **slope** of the curves.
- At the start, the slope is maximal and product formation is **linear** with time: this is the **initial rate v₀** (slope at the origin).
- Then the rate **decreases** (the curves flatten) because of: falling [S] (enzyme less saturated), enzyme denaturation, product inhibition, coenzyme inactivation, onset of the reverse reaction.
- That is why enzyme studies **always measure the initial rate**, when these interfering factors are minimal.`,
  },
  {
    question_fr: "Sur la courbe v₀ = f([S]) d'une enzyme michaélienne, interprétez la « région c », c'est-à-dire la zone des fortes concentrations en substrat où la courbe atteint un plateau.",
    question_en: "On the v₀ = f([S]) curve of a Michaelis-Menten enzyme, interpret \"region c\", i.e. the high-substrate zone where the curve reaches a plateau.",
    answer_fr: `**Région c = zone de saturation.**

- Aux fortes concentrations en substrat, la vitesse devient **indépendante de [S]** et tend asymptotiquement vers une valeur constante : **Vmax**.
- L'enzyme est **saturée** : tous ses sites actifs sont occupés par le substrat (presque toute l'enzyme est sous forme ES).
- La réaction est d'**ordre zéro** par rapport au substrat : ajouter davantage de substrat **n'augmente plus** la vitesse.
- La vitesse n'est alors limitée que par la **quantité d'enzyme** et sa vitesse catalytique.

À comparer : **région a** (faible [S]) → ordre 1, v proportionnelle à [S] ; **région b** → ordre mixte, v augmente de moins en moins vite.

Conséquence pratique : pour doser l'activité d'une enzyme, on travaille en **excès de substrat** (région c), afin que la vitesse mesurée ne dépende que de la quantité d'enzyme.`,
    answer_en: `**Region c = saturation zone.**

- At high substrate concentrations, the rate becomes **independent of [S]** and asymptotically approaches a constant value: **Vmax**.
- The enzyme is **saturated**: all active sites are occupied by substrate (almost all enzyme is in the ES form).
- The reaction is **zero-order** with respect to substrate: adding more substrate **no longer increases** the rate.
- The rate is then limited only by the **amount of enzyme** and its catalytic speed.

Compare: **region a** (low [S]) → first order, v proportional to [S]; **region b** → mixed order, v rises more and more slowly.

Practical consequence: to measure enzyme activity, assays are run in **substrate excess** (region c), so the measured rate depends only on the amount of enzyme.`,
  },
  {
    question_fr: "Écrivez l'équation de Michaelis-Menten et expliquez la signification de Km. Illustrez la représentation graphique de Km et Vmax.",
    question_en: "Write the Michaelis-Menten equation and explain the significance of KM. Illustrate the graphical representation of KM and Vmax.",
    answer_fr: `**Équation de Michaelis-Menten** :

**v₀ = Vmax · [S] / (Km + [S])**

- **Vmax** : vitesse maximale, atteinte quand l'enzyme est saturée en substrat.
- **Km** : concentration en substrat pour laquelle **v₀ = Vmax/2**. À ce point, la moitié des sites actifs est occupée (moitié de l'enzyme sous forme ES) ; Km correspond à la constante de dissociation du complexe ES.

**Signification** : Km mesure l'**affinité** de l'enzyme pour son substrat — **plus Km est petit, plus l'affinité est grande**.
Exemples : hexokinase (Km bas, cerveau/muscle) vs glucokinase hépatique (Km élevé) ; variant de l'ALDH2 à Km élevé chez de nombreuses personnes d'origine asiatique → accumulation d'acétaldéhyde, rougeur faciale après l'alcool.

**Représentation graphique** : courbe **hyperbolique** v₀ en fonction de [S] :
- tracer une asymptote horizontale = **Vmax** ;
- tracer l'horizontale à **Vmax/2** ; là où elle coupe la courbe, descendre sur l'axe des abscisses : cette valeur de [S] est **Km**.

[[visual:bio/michaelis-menten]]`,
    answer_en: `**Michaelis-Menten equation**:

**v₀ = Vmax · [S] / (Km + [S])**

- **Vmax**: maximum rate, reached when the enzyme is saturated with substrate.
- **Km**: substrate concentration at which **v₀ = Vmax/2**. At this point half the active sites are occupied (half the enzyme as ES); Km corresponds to the dissociation constant of the ES complex.

**Significance**: Km measures the enzyme's **affinity** for its substrate — **the lower the Km, the higher the affinity**.
Examples: hexokinase (low Km, brain/muscle) vs hepatic glucokinase (high Km); a high-Km ALDH2 variant in many people of Asian descent → acetaldehyde accumulation, facial flushing after alcohol.

**Graphical representation**: a **hyperbolic** curve of v₀ versus [S]:
- draw the horizontal asymptote = **Vmax**;
- draw the horizontal line at **Vmax/2**; where it meets the curve, drop down to the x-axis: that [S] value is **Km**.

[[visual:bio/michaelis-menten]]`,
  },
  {
    question_fr: "Un graphique v₀ = f([S]) montre trois courbes pour trois substrats S1, S2, S3 d'une même enzyme : elles atteignent la même Vmax, mais Vmax/2 est atteinte à des concentrations croissantes (1 < 2 < 3). Interprétez ce graphique.",
    question_en: "A v₀ = f([S]) graph shows three curves for three substrates S1, S2, S3 of the same enzyme: they reach the same Vmax, but Vmax/2 is reached at increasing concentrations (1 < 2 < 3). Interpret this graph.",
    answer_fr: `- Les trois courbes atteignent **la même Vmax** : à saturation, l'enzyme transforme les trois substrats à la même vitesse maximale.
- La concentration pour laquelle v₀ = Vmax/2 est, par définition, le **Km** de chaque substrat. On lit : **Km(S1) < Km(S2) < Km(S3)** (points 1, 2, 3 sur l'axe des abscisses).
- Km étant inversement lié à l'affinité : **affinité pour S1 > S2 > S3**.

Conclusion : **S1 est le substrat préféré** de l'enzyme (meilleure affinité, la courbe monte le plus vite à faible [S]) ; **S3 est celui pour lequel l'affinité est la plus faible** (il faut beaucoup plus de substrat pour atteindre la demi-vitesse maximale).`,
    answer_en: `- All three curves reach **the same Vmax**: at saturation, the enzyme converts the three substrates at the same maximum rate.
- The concentration at which v₀ = Vmax/2 is, by definition, each substrate's **Km**. Reading the graph: **Km(S1) < Km(S2) < Km(S3)** (points 1, 2, 3 on the x-axis).
- Since Km is inversely related to affinity: **affinity for S1 > S2 > S3**.

Conclusion: **S1 is the enzyme's preferred substrate** (best affinity, the curve rises fastest at low [S]); **S3 has the lowest affinity** (much more substrate is needed to reach half-maximal rate).`,
  },
  {
    question_fr: "Illustrez la représentation de Lineweaver-Burk.",
    question_en: "Illustrate the Lineweaver-Burk representation.",
    answer_fr: `La représentation de **Lineweaver-Burk** (« double inverse ») linéarise l'équation de Michaelis-Menten en prenant l'inverse des deux membres :

**1/v₀ = (Km/Vmax) · (1/[S]) + 1/Vmax**

C'est une droite de la forme **y = a·x + b** avec :
- en abscisse : **1/[S]** ; en ordonnée : **1/v₀** ;
- **pente** a = **Km/Vmax** ;
- **ordonnée à l'origine** (intersection avec l'axe des y) = **1/Vmax** ;
- **intersection avec l'axe des x** (droite prolongée vers les valeurs négatives) = **−1/Km**.

Intérêt : une droite permet de déterminer **Km et Vmax avec précision**, alors qu'il est difficile de lire exactement le plateau Vmax sur l'hyperbole de Michaelis-Menten.

Exemple du polycopié : la droite 1/v = 34,753·(1/[S]) + 773,73 donne 1/Vmax ≈ 0,775 × 10³ → Vmax ≈ 0,13 µmol/min, et −1/Km ≈ −22 263 → Km ≈ 4,5 × 10⁻⁵ M.`,
    answer_en: `The **Lineweaver-Burk** ("double reciprocal") plot linearizes the Michaelis-Menten equation by taking the reciprocal of both sides:

**1/v₀ = (Km/Vmax) · (1/[S]) + 1/Vmax**

It is a straight line of the form **y = a·x + b** with:
- x-axis: **1/[S]**; y-axis: **1/v₀**;
- **slope** a = **Km/Vmax**;
- **y-intercept** = **1/Vmax**;
- **x-intercept** (line extended to negative values) = **−1/Km**.

Advantage: a straight line gives **Km and Vmax precisely**, whereas the Vmax plateau is hard to read accurately on the Michaelis-Menten hyperbola.

Handout example: the line 1/v = 34.753·(1/[S]) + 773.73 gives 1/Vmax ≈ 0.775 × 10³ → Vmax ≈ 0.13 µmol/min, and −1/Km ≈ −22,263 → Km ≈ 4.5 × 10⁻⁵ M.`,
  },
  {
    question_fr: "Expliquez brièvement l'influence de la température, du pH et des effecteurs sur l'activité enzymatique de la phosphatase alcaline sérique.",
    question_en: "Briefly explain the Influence of temperature, pH and effectors on the enzymatic activity of serum alkaline phosphatase.",
    answer_fr: `**Réaction utilisée** : la phosphatase alcaline (PAL) hydrolyse le **p-nitrophényl phosphate (pNPP)** en **p-nitrophénol** (jaune en milieu alcalin, NaOH) + phosphate. **L'intensité de la couleur jaune est proportionnelle à l'activité de la PAL.**

**Température** (tubes à 0 °C, 37 °C, 95 °C) :
- les enzymes ont une **température optimale** (35–40 °C) ;
- à 0 °C, l'activité est très ralentie ; au-delà de 50–60 °C, la protéine est **dénaturée** ;
- résultat : couleur **la plus intense à 37 °C**.

**pH** (tampons pH 4 acétate, pH 7 barbiturate, pH 9,8 diéthanolamine) :
- chaque enzyme a un **pH optimal** ; s'en écarter modifie la structure et la distribution des charges (ionisation) → baisse puis perte d'activité ;
- résultat : couleur **la plus intense à pH 9,8** — d'où le nom de phosphatase « **alcaline** ».

**Effecteurs** (avec / sans EDTA) :
- les effecteurs (activateurs ou inhibiteurs) se lient au site actif ou ailleurs et modifient la conformation de l'enzyme ;
- la PAL est une **métalloenzyme à Zn²⁺** ; l'**EDTA chélate le zinc** → activité diminuée ou abolie ;
- résultat : couleur **plus intense dans le tube sans EDTA**.`,
    answer_en: `**Reaction used**: alkaline phosphatase (ALP) hydrolyses **p-nitrophenyl phosphate (pNPP)** to **p-nitrophenol** (yellow in alkaline medium, NaOH) + phosphate. **The intensity of the yellow colour is proportional to ALP activity.**

**Temperature** (tubes at 0 °C, 37 °C, 95 °C):
- enzymes have an **optimal temperature** (35–40 °C);
- at 0 °C activity is very slow; above 50–60 °C the protein is **denatured**;
- result: colour **most intense at 37 °C**.

**pH** (buffers pH 4 acetate, pH 7 barbiturate, pH 9.8 diethanolamine):
- each enzyme has an **optimum pH**; deviating from it changes structure and charge distribution (ionization) → decreasing then lost activity;
- result: colour **most intense at pH 9.8** — hence the name "**alkaline**" phosphatase.

**Effectors** (with / without EDTA):
- effectors (activators or inhibitors) bind the active site or elsewhere and change the enzyme's conformation;
- ALP is a **Zn²⁺ metalloenzyme**; **EDTA chelates zinc** → activity reduced or abolished;
- result: colour **more intense in the tube without EDTA**.`,
  },
];

// ===========================================================================
// Schémas ajoutés à la fin des réponses (clés du visual-registry client),
// une entrée par question, dans l'ordre ; null = pas de schéma.
// ===========================================================================
const OPEN_LAB_VISUALS: [LibraryOpenQuestionSeed[], (string[] | null)[]][] = [
  [OPEN_LAB2_MEASURES, [["bio/lab-measures"], ["bio/lab-measures"], ["bio/lab-measures"], null, ["bio/lab-urine-density"]]],
  [OPEN_LAB3_SOLUTIONS, [["bio/lab-dilution"], ["bio/lab-isotonic"], ["bio/lab-isotonic"], ["bio/lab-dilution"], ["bio/lab-isotonic"]]],
  [OPEN_LAB4_TITRATION, [["bio/lab-ph-scale"], null, ["bio/lab-titration"], ["bio/lab-titration"], ["bio/lab-titration"]]],
  [OPEN_LAB5_PH, [["bio/lab-ph-scale"], ["bio/lab-ph-scale"], null, ["bio/lab-isoelectric"], ["bio/lab-isoelectric"]]],
  [OPEN_LAB6_BUFFERS, [["bio/lab-buffer"], ["bio/lab-buffer"], ["bio/lab-buffer"], ["bio/lab-blood-buffers"], ["bio/bohr-effect"]]],
  [OPEN_LAB7_SAMPLES, [null, null, ["bio/lab-centrifuge"], ["bio/lab-centrifuge"], null, ["bio/lab-rotors"], ["bio/lab-rotors"]]],
  [OPEN_LAB8_CHROMATOGRAPHY, [["bio/lab-chrom-mechanisms"], ["bio/lab-chrom-mechanisms"], ["bio/lab-chromatography"], ["bio/lab-chrom-mechanisms"], ["bio/lab-chromatography"], ["bio/lab-chrom-mechanisms"]]],
  [OPEN_LAB9_DIALYSIS, [["bio/lab-electrophoresis"], ["bio/lab-hemodialysis"], ["bio/lab-electrophoresis"], ["bio/lab-electrophoresis"], ["bio/lab-electrophoresis"], ["bio/lab-electrophoresis"]]],
  [OPEN_LAB10_SPECTRO, [["bio/lab-spectro"], ["bio/lab-spectro"], ["bio/lab-conc-methods"], ["bio/lab-conc-methods"], ["bio/lab-spectro"], null]],
  [OPEN_LAB11_OPTICAL_TEST, [null, ["bio/lab-ldh"], ["bio/lab-optical-tests"], ["bio/lab-ldh"], ["bio/lab-transaminases"]]],
  [OPEN_LAB12_VITAMIN_C, [["bio/water-vitamins", "bio/fat-vitamins"], null, ["bio/vitamin-e-c"], ["bio/lab-iodometry"], ["bio/lab-iodometry"]]],
  // Q3 contient déjà [[visual:bio/michaelis-menten]] dans sa réponse.
  [OPEN_LAB13_KINETICS, [["bio/lab-reaction-time"], ["bio/michaelis-menten"], null, ["bio/michaelis-menten"], ["bio/michaelis-menten"], ["bio/lab-enzyme-factors"]]],
];

for (const [questions, visuals] of OPEN_LAB_VISUALS) {
  questions.forEach((question, index) => {
    const keys = visuals[index];
    if (!keys) return;
    const markers = keys.map((key) => `[[visual:${key}]]`).join("\n\n");
    question.answer_fr = `${question.answer_fr}\n\n${markers}`;
    question.answer_en = `${question.answer_en}\n\n${markers}`;
  });
}
