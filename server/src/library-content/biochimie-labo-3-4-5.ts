import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { multi, single } from "./qcm-helpers.js";

const LAB3_COURSE = `# Lab 3 — Solutions : concentrations, dilutions et solutions isotoniques

## 1. Solutions et concentrations
- Une solution est un système dispersé homogène : un soluté (dimension ≤ 1 nm) dissous dans un solvant.
- Concentration en pourcentage (m/v) : masse de soluté (g) rapportée au volume de solution (mL), ×100.
- Autres unités dérivées : ppt (parts per thousand) = masse (mg)/volume (mL) × 10³ ; ppm (parts per million) = masse (mg)/volume (mL) × 10⁶.
- Concentration molaire (molarité) : nombre de moles de soluté dans 1 L de solution. n = m/M (masse/masse molaire) ; molarité = n/V.

## 2. Dilutions
- Diluer une solution consiste à ajouter du solvant (eau) pour diminuer sa concentration : V2 = V1 + V(H2O), où V1 est le volume de solution mère prélevé et V2 le volume final.
- Relation fondamentale de dilution : **C1 × V1 = C2 × V2** (la quantité de soluté ne change pas lors d'une dilution).
- Volume de solvant à ajouter : V(H2O) = V2 − V1.
- Mélange de deux solutions de concentrations C1 et C2 pour obtenir une concentration cible C3 : C1V1 + C2V2 = C3V3 (avec V3 = V1+V2), soit V1/V2 = (C3−C2)/(C1−C3).
- Les dilutions en série (facteur constant répété) permettent de préparer une gamme de concentrations à partir d'une seule solution mère.

## 3. Solutions isotoniques
- L'osmose est la migration de l'eau à travers une membrane semi-perméable, du compartiment le moins concentré vers le plus concentré, jusqu'à équilibre des pressions osmotiques.
- L'osmolarité dépend du nombre de particules dissoutes, pas de leur nature : 1 molécule de glucose = 1 particule, alors qu'1 molécule de NaCl se dissocie en 2 particules (Na⁺ et Cl⁻).
- Une solution **isotonique** a la même osmolarité que le plasma sanguin : elle n'a aucun effet sur la morphologie des globules rouges (GR).
- Une solution **hypotonique** (osmolarité < plasma) fait gonfler les GR par entrée d'eau (risque d'hémolyse) ; une solution **hypertonique** (osmolarité > plasma) fait sortir l'eau des GR, qui se rétractent (crénelure).
- Exemples : NaCl 0,9 % et glucose 5 % sont isotoniques ; NaCl 3 % ou glucose 30 % sont hypertoniques.

## Points à retenir
- La concentration % (m/v), les ppt/ppm et la molarité sont les principales façons d'exprimer une concentration en solution.
- La loi de dilution C1V1 = C2V2 permet de calculer tout volume ou concentration inconnue lors d'une dilution simple.
- L'osmolarité (nombre de particules dissoutes) détermine la tonicité d'une solution et son effet sur les globules rouges.`;

// Chapitre (section "laboratoire") : titre_fr="Solutions, dilutions et isotonicité",
// titre_en="Solutions, Dilutions and Isotonicity", description_fr="Concentrations,
// calculs de dilution et osmolarité des solutions de perfusion",
// description_en="Concentrations, dilution calculations and osmolarity of infusion
// solutions", icone="💧"
export const LAB3_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Solutions, concentrations et dilutions",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 3",
    content_fr: LAB3_COURSE,
  },
  qcm: [
    single("Que mesure la concentration exprimée en % (m/v) ?", "A", "Le pourcentage m/v exprime la masse de soluté (en g) pour 100 mL de solution.", ["La masse de soluté (g) rapportée au volume de solution (mL), ×100", "Le volume de soluté rapporté à la masse de solution", "Le nombre de moles de soluté par litre de solution", "La masse de soluté rapportée à la masse de solvant"]),
    single("Quelle relation permet de calculer les volumes ou concentrations lors d'une dilution simple ?", "B", "La quantité de soluté (moles) est conservée lors d'une dilution : C1V1 (avant) = C2V2 (après).", ["C1 + V1 = C2 + V2", "C1 × V1 = C2 × V2", "C1 / V1 = C2 / V2", "C1 × C2 = V1 × V2"]),
    single("Quel volume d'eau faut-il ajouter à V1 mL de solution mère pour obtenir un volume final V2 ?", "B", "Le volume de solvant ajouté correspond à la différence entre le volume final et le volume initial : V(H2O) = V2 - V1.", ["V2 + V1", "V2 - V1", "V2 × V1", "V2 / V1"]),
    single("Pour préparer une concentration cible C3 en mélangeant deux solutions de concentrations C1 et C2, quelle relation utilise-t-on ?", "A", "Le bilan de matière C1V1 + C2V2 = C3(V1+V2) donne V1/V2 = (C3-C2)/(C1-C3).", ["V1/V2 = (C3-C2)/(C1-C3)", "V1/V2 = (C1-C2)/C3", "V1×V2 = C1×C2×C3", "V1/V2 = C1/C2"]),
    single("Combien de particules génère la dissolution d'une molécule de NaCl en solution ?", "B", "NaCl se dissocie complètement en un ion Na+ et un ion Cl-, soit 2 particules osmotiquement actives.", ["1 particule", "2 particules (Na+ et Cl-)", "3 particules", "0 particule, NaCl ne se dissocie pas"]),
    single("Combien de particules génère la dissolution d'une molécule de glucose ?", "A", "Le glucose est une molécule non ionique : elle reste intacte en solution et compte pour une seule particule osmotique.", ["1 particule (le glucose ne se dissocie pas)", "2 particules", "6 particules (une par atome de carbone)", "0 particule"]),
    single("Qu'est-ce qu'une solution isotonique par rapport au plasma sanguin ?", "A", "Une solution isotonique a la même osmolarité que le plasma et n'entraîne aucun mouvement net d'eau à travers la membrane des globules rouges.", ["Une solution dont l'osmolarité est identique à celle du plasma", "Une solution plus concentrée que le plasma", "Une solution moins concentrée que le plasma", "Une solution sans aucun soluté"]),
    single("Quel est l'effet d'une solution hypotonique sur les globules rouges ?", "A", "Une solution hypotonique (moins concentrée que le plasma) fait entrer l'eau dans les GR par osmose, qui gonflent et peuvent éclater (hémolyse).", ["Elle les fait gonfler, avec un risque d'hémolyse", "Elle les fait se rétracter (crénelure)", "Elle n'a aucun effet", "Elle détruit immédiatement leur membrane par choc osmotique inverse"]),
    single("Quel est l'effet d'une solution hypertonique sur les globules rouges ?", "B", "Une solution hypertonique (plus concentrée que le plasma) provoque la sortie d'eau des GR par osmose, qui se rétractent et deviennent crénelés.", ["Elle les fait gonfler", "Elle provoque la sortie d'eau et leur rétraction (crénelure)", "Elle n'a aucun effet", "Elle les rend isotoniques"]),
    single("Parmi ces solutions, laquelle est isotonique au plasma ?", "A", "Le sérum physiologique (NaCl 0,9 %) a une osmolarité proche de celle du plasma, contrairement au NaCl 3 % (hypertonique), au glucose 30 % (hypertonique) ou à l'eau pure (fortement hypotonique).", ["NaCl 0,9 %", "NaCl 3 %", "Glucose 30 %", "Eau distillée pure"]),
  ],
  exam: { titre_fr: "Examen chronométré — Solutions, dilutions et isotonicité", duration_seconds: 900 },
};

const LAB4_COURSE = `# Lab 4 — Acides, bases et titration acide-base

## 1. Autoionisation de l'eau
- L'eau s'autoionise selon l'équilibre : H2O ⇌ H⁺ + OH⁻ (plus rigoureusement, 2 H2O ⇌ H3O⁺ + OH⁻).
- Le produit ionique de l'eau est constant à température donnée : **Kw = [H⁺][OH⁻] = 10⁻¹⁴ (à 25 °C)**.
- Dans l'eau pure, [H⁺] = [OH⁻] = 10⁻⁷ M.

## 2. Acides et bases
- Un acide génère des ions H⁺ en solution aqueuse (il donne un proton) : HA ⇌ H⁺ + A⁻ (A⁻ = base conjuguée). Sa force est caractérisée par la constante d'acidité **Ka = [H⁺][A⁻]/[HA]**.
  - Acides forts (Ka ≫ 1) : dissociation complète — HCl, HBr, HI, H2SO4, HNO3, HClO4.
  - Acides faibles (Ka < 1) : dissociation incomplète (équilibre) — HNO2, H3PO4, H2CO3, H2SO3, CH3COOH.
- Une base génère des ions OH⁻ (elle accepte un proton) : BOH ⇌ B⁺ + OH⁻ (B⁺ = acide conjugué). Sa force est caractérisée par **Kb = [B⁺][OH⁻]/[BOH]**.
  - Bases fortes (Kb ≫ 1) : NaOH, KOH, Ca(OH)2.
  - Bases faibles (Kb < 1) : NH3/NH4OH, NaHCO3.
- Si [H⁺] > [OH⁻] (soit [H⁺] > 10⁻⁷ M), la solution est acide ; si [H⁺] < [OH⁻], elle est basique (alcaline).

## 3. Le pH
- **pH = −log[H⁺]**. Puisque [H⁺][OH⁻] = 10⁻¹⁴, on a toujours **pH + pOH = 14**.
- Échelle de 0 (très acide) à 14 (très basique), 7 étant neutre.

## 4. Titration acide-base
- La titration (dosage volumétrique) détermine la concentration inconnue d'un analyte en le faisant réagir avec un titrant de concentration connue, jusqu'au point d'équivalence (Ve).
- Réaction générale de neutralisation : acide + base ⇌ sel + eau.
- À l'équivalence, les moles d'acide et de base ayant réagi sont stœchiométriquement égales : **C(acide)·V(acide) = C(base)·V(base)** pour une réaction 1:1 (pour un diacide, il faut 2 équivalents de base : C(diacide)·V(diacide) = C(base)·V(base)/2).
- **Acidimétrie** : le titrant est un acide (HA), l'analyte est une base.
- **Alcalimétrie** : le titrant est une base (BOH), l'analyte est un acide.
- Un indicateur coloré (ex. phénolphtaléine : incolore en milieu acide, rose en milieu basique) permet de repérer visuellement le point d'équivalence.
- La courbe de titration (pH en fonction du volume de titrant ajouté) présente un point d'inflexion net à l'équivalence.

## Points à retenir
- Kw = [H⁺][OH⁻] = 10⁻¹⁴ à 25 °C ; pH + pOH = 14.
- La force d'un acide ou d'une base se mesure par Ka ou Kb (dissociation complète si ≫1, incomplète si <1).
- À l'équivalence d'une titration, C(acide)·V(acide) = C(base)·V(base) (en tenant compte de la stœchiométrie de la réaction).`;

// Chapitre (section "laboratoire") : titre_fr="Acides, bases et titration acide-base",
// titre_en="Acids, Bases and Acid-Base Titration", description_fr="Autoionisation de
// l'eau, force des acides/bases, pH et méthodes de titration volumétrique",
// description_en="Water autoionization, acid/base strength, pH and volumetric
// titration methods", icone="⚗️"
export const LAB4_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Acides, bases et titration acide-base",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 4",
    content_fr: LAB4_COURSE,
  },
  qcm: [
    single("Quelle est la valeur du produit ionique de l'eau (Kw) à 25°C ?", "B", "Kw = [H+][OH-] = 10⁻¹⁴ à 25°C, ce qui donne [H+]=[OH-]=10⁻⁷M dans l'eau pure.", ["10⁻⁷", "10⁻¹⁴", "10⁻¹", "1"]),
    single("Dans l'eau pure à 25°C, quelles sont les concentrations en H+ et OH- ?", "A", "Le caractère neutre de l'eau pure impose [H+]=[OH-], et Kw=10⁻¹⁴ impose la valeur 10⁻⁷ M pour chacune.", ["[H+]=[OH-]=10⁻⁷ M", "[H+]=10⁻¹⁴M, [OH-]=1M", "[H+]=1M, [OH-]=10⁻¹⁴M", "[H+]=[OH-]=10⁻¹⁴M"]),
    single("Comment reconnaît-on un acide fort ?", "A", "Un acide fort se dissocie totalement en solution aqueuse (HCl, H2SO4, HNO3...), contrairement à un acide faible dont la dissociation est partielle et équilibrée (Ka<1).", ["Sa dissociation en solution est complète (Ka≫1)", "Sa dissociation est toujours incomplète", "Il ne contient pas d'hydrogène", "Il a un Ka inférieur à 1"]),
    multi("Parmi les acides suivants, lesquels sont des acides forts ?", ["A", "C", "E"], "HCl, HNO3 et H2SO4 sont des acides forts (dissociation complète) ; CH3COOH et H2CO3 sont des acides faibles.", ["HCl", "CH3COOH (acide acétique)", "HNO3", "H2CO3", "H2SO4"]),
    single("Quelle est la définition du pH ?", "A", "Par définition, pH = -log[H+].", ["pH = -log[H+]", "pH = log[H+]", "pH = [H+]/[OH-]", "pH = -log[OH-]"]),
    single("Quelle relation relie toujours pH et pOH en solution aqueuse à 25°C ?", "A", "Puisque [H+][OH-]=10⁻¹⁴, en prenant le -log des deux côtés : pH + pOH = 14.", ["pH + pOH = 14", "pH - pOH = 14", "pH × pOH = 14", "pH = pOH"]),
    single("Dans une titration acide-base, que représente le point d'équivalence ?", "A", "Le point d'équivalence correspond à l'égalité stœchiométrique entre les quantités d'acide et de base ayant réagi ; son pH n'est pas forcément 7 (il dépend de la force de l'acide/base titré).", ["Le point où les moles d'acide et de base ayant réagi sont stœchiométriquement égales", "Le point où le pH vaut exactement 7", "Le volume initial de l'analyte", "Le moment où l'indicateur est ajouté"]),
    single("En alcalimétrie, quel est le titrant et quel est l'analyte ?", "A", "En alcalimétrie, on utilise une base de concentration connue (titrant) pour doser un acide de concentration inconnue (analyte).", ["Titrant = base, analyte = acide", "Titrant = acide, analyte = base", "Les deux sont des acides", "Les deux sont des bases"]),
    single("Quel est le rôle de la phénolphtaléine dans une titration acide-base ?", "A", "La phénolphtaléine est un indicateur coloré : incolore en milieu acide, elle vire au rose en milieu basique, signalant le passage du point d'équivalence.", ["C'est un indicateur coloré qui change de couleur (incolore → rose) autour du point d'équivalence", "C'est le titrant lui-même", "Elle catalyse la réaction de neutralisation", "Elle mesure directement la concentration de l'analyte"]),
    single("20 mL d'un acide monoprotique de concentration inconnue sont neutralisés par 15 mL de NaOH à 0,1 M. Quelle est la concentration de l'acide ?", "A", "À l'équivalence (réaction 1:1), C(acide)×V(acide)=C(base)×V(base) ⇒ C(acide) = (0,1×15)/20 = 0,075 M.", ["0,075 M", "0,15 M", "0,1 M", "1,33 M"]),
    single("Pour un diacide (2 fonctions acides), combien d'équivalents de base forte sont nécessaires pour atteindre l'équivalence ?", "B", "Un diacide possède deux protons ionisables ; il faut donc 2 équivalents de base pour le neutraliser complètement, comme dans HOOC-CH2OH + 2 NaOH → NaOOC-CH2ONa + 2 H2O.", ["1 équivalent", "2 équivalents", "0,5 équivalent", "4 équivalents"]),
  ],
  exam: { titre_fr: "Examen chronométré — Acides, bases et titration", duration_seconds: 1_200 },
};

const LAB5_COURSE = `# Lab 5 — pH des fluides biologiques et point isoélectrique

## 1. Le pH des fluides biologiques
Sur une échelle de 0 à 14 : [H⁺] < [OH⁻] au-dessus de 7 (basique), [H⁺] = [OH⁻] à 7 (neutre), [H⁺] > [OH⁻] en dessous de 7 (acide). Chaque unité de pH représente un facteur **10** sur la concentration en H⁺ (ex. le suc gastrique, pH ≈ 1, est environ 10⁴ fois plus acide que l'urine, pH ≈ 5).

Valeurs typiques des fluides biologiques :
- Sécrétions pancréatique, intestinale, bile (riches en NaHCO₃) : pH ≈ 8.
- Sang, liquide extracellulaire (ECF), liquide intracellulaire (ICF) : pH ≈ 7,35–7,45.
- Sueur, salive, lait maternel : pH ≈ 6.
- Urine, sécrétions vaginales : pH ≈ 5,5–6,5.
- Suc gastrique (HCl) : pH ≈ 1.

## 2. Calculs de pH
- **Acide fort** (dissociation totale, HA → A⁻ + H⁺) : [H⁺] = C (concentration initiale), donc **pH = −log(C)**.
- **Base forte** (dissociation totale, BOH → B⁺ + OH⁻) : [OH⁻] = C, pOH = −log(C), donc **pH = 14 − pOH**.
- **Acide faible** (équilibre HA ⇌ A⁻ + H⁺, Ka = [A⁻][H⁺]/[HA]) : en approximant [HA] ≈ C (dissociation faible), [H⁺] ≈ √(Ka·C), donc **pH = −log√(Ka·C)**.
- **Base faible** (équilibre, Kb) : par symétrie, **pH = 14 + log√(Kb·C)**.

## 3. Méthodes de détermination du pH
- **Papier pH** : méthode qualitative/semi-quantitative rapide, par comparaison colorimétrique.
- **Potentiomètre (pH-mètre)** : méthode quantitative précise, mesure la différence de potentiel entre une électrode de verre sensible aux H⁺ et une électrode de référence.

## 4. Point isoélectrique (pI) des acides aminés
- Selon le pH du milieu, un acide aminé existe sous forme **cationique** (charge nette +, pH bas), **zwitterion/amphion** (charge nette nulle) ou **anionique** (charge nette −, pH élevé).
- Le **point isoélectrique (pI)** est le pH auquel l'acide aminé est électriquement neutre (charge nette nulle).
- Pour un acide aminé **monoamino-monocarboxylique** (un seul groupe COOH, un seul groupe NH₂) : **pI = (pKa₁ + pKa₂)/2**, la moyenne des deux pKa encadrant la forme neutre.
- Pour un acide aminé **diacide** (deux groupes carboxyliques, ex. Asp, Glu) : le pI est la moyenne des deux pKa les **plus acides** (les deux groupes COOH), ce qui donne un pI < 7.
- Pour un acide aminé **dibasique** (deux groupes basiques, ex. His, Lys, Arg) : le pI est la moyenne des deux pKa les **plus basiques**, ce qui donne un pI > 7.

### Exemple : la glycine
Glycine : pKa₁ (COOH) = 2,34, pKa₂ (NH₃⁺) = 9,60.
pI(Gly) = (2,34 + 9,60)/2 = **5,97**.

### Exemple : l'acide aspartique (diacide)
Aspartate : pKa₁ (α-COOH) = 1,99, pKa₂ (chaîne latérale COOH) = 3,90, pKa₃ (NH₃⁺) = 9,90.
pI(Asp) = (pKa₁ + pKa₂)/2 = (1,99 + 3,90)/2 = **2,95** (les deux pKa les plus acides, car Asp est diacide).

## Points à retenir
- 1 unité de pH = facteur 10 sur [H⁺].
- pH = −log[H⁺] (acide fort) ; pH = 14 − pOH (base forte) ; pH = −log√(Ka·C) (acide faible) ; pH = 14 + log√(Kb·C) (base faible).
- pI = pH où la charge nette d'un acide aminé est nulle ; se calcule comme la moyenne des deux pKa entourant la forme neutre (les plus acides pour un diacide, les plus basiques pour un dibasique).
- pH sanguin normal : 7,35–7,45 ; pH urinaire normal : environ 5,5–6,5.`;

// Chapitre (section "laboratoire") : titre_fr="pH des fluides biologiques et point isoélectrique",
// titre_en="pH of Biological Fluids and Isoelectric Point", description_fr="Calculs de pH
// (acides/bases forts et faibles), méthodes de détermination, point isoélectrique des acides aminés",
// description_en="pH calculations (strong/weak acids and bases), determination methods,
// isoelectric point of amino acids", icone="🧪"
export const LAB5_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — pH des fluides biologiques et point isoélectrique",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 5",
    content_fr: LAB5_COURSE,
  },
  qcm: [
    single("Quel facteur sépare deux unités de pH consécutives en termes de concentration en H⁺ ?", "B", "Le pH étant une échelle logarithmique en base 10, chaque unité de pH correspond à un facteur 10 sur [H+].", ["2", "10", "14", "100"]),
    single("Quel est le pH approximatif du suc gastrique (HCl) ?", "A", "Le suc gastrique est fortement acide, avec un pH proche de 1.", ["≈ 1", "≈ 5", "≈ 7", "≈ 8"]),
    single("Quel est le pH approximatif des sécrétions pancréatiques et biliaires (riches en NaHCO3) ?", "C", "Ces sécrétions, riches en bicarbonate, sont légèrement basiques, autour de pH 8.", ["≈ 1", "≈ 5", "≈ 8", "≈ 12"]),
    single("Quelle est la formule du pH pour un acide fort de concentration C ?", "A", "Pour un acide fort, la dissociation est totale : [H+] = C, donc pH = -log(C).", ["pH = -log(C)", "pH = 14 - log(C)", "pH = -log√(C)", "pH = log(C)"]),
    single("Une solution de HNO3 (acide fort) à 0,001 M a pour pH :", "B", "pH = -log(0,001) = -log(10⁻³) = 3.", ["1", "3", "7", "11"]),
    single("Quelle est la formule du pH pour une base forte de concentration C ?", "B", "Pour une base forte, [OH-]=C, pOH=-log(C), donc pH = 14 - pOH = 14 + log(C)... soit pH = 14 - (-log C).", ["pH = -log(C)", "pH = 14 - pOH, avec pOH = -log(C)", "pH = 14 + pOH", "pH = 7 - log(C)"]),
    single("Quelle est l'approximation du pH pour un acide faible de concentration C et de constante Ka ?", "C", "En approximant [HA]≈C, [H+]≈√(Ka·C), donc pH = -log√(Ka·C).", ["pH = -log(Ka·C)", "pH = 14 - log(Ka·C)", "pH = -log√(Ka·C)", "pH = √(Ka·C)"]),
    single("Quelle méthode de mesure du pH est quantitative et précise, basée sur une différence de potentiel électrique ?", "B", "Le potentiomètre (pH-mètre) mesure précisément le pH via une électrode de verre sensible aux H+, contrairement au papier pH qui est qualitatif.", ["Le papier pH", "Le potentiomètre (pH-mètre)", "La titration colorimétrique seule", "La spectrophotométrie UV"]),
    single("Qu'appelle-t-on le point isoélectrique (pI) d'un acide aminé ?", "B", "Le pI est le pH auquel l'acide aminé est électriquement neutre (forme zwitterion, charge nette nulle).", ["Le pH où l'acide aminé est totalement protoné", "Le pH où la charge nette de l'acide aminé est nulle", "Le pKa du groupe carboxyle uniquement", "Le pH physiologique (7,4) par définition"]),
    single("Comment calcule-t-on le pI d'un acide aminé monoamino-monocarboxylique ?", "A", "pI = (pKa1 + pKa2)/2, la moyenne des deux pKa encadrant la forme neutre (zwitterion).", ["pI = (pKa1 + pKa2)/2", "pI = pKa1 - pKa2", "pI = pKa1 × pKa2", "pI = pKa2 uniquement"]),
    single("La glycine a pKa1(COOH)=2,34 et pKa2(NH3+)=9,60. Quel est son pI ?", "B", "pI = (2,34+9,60)/2 = 5,97.", ["4,63", "5,97", "6,97", "9,60"]),
    single("Pour un acide aminé diacide comme l'acide aspartique, comment calcule-t-on le pI ?", "A", "Pour un diacide, le pI se calcule à partir des deux pKa les plus acides (les deux groupes carboxyliques), donnant un pI < 7.", ["pI = moyenne des deux pKa les plus acides (les deux COOH)", "pI = moyenne des deux pKa les plus basiques", "pI = pKa du groupe amine seul", "pI = moyenne des trois pKa"]),
    single("Pourquoi un acide aminé dibasique (ex. lysine, arginine) a-t-il un pI supérieur à 7 ?", "B", "Le pI d'un acide aminé dibasique se calcule à partir des deux pKa les plus basiques (les deux groupes amine), ce qui donne un pI élevé (>7).", ["Parce qu'il ne possède aucun groupe carboxyle", "Parce que son pI se calcule à partir des deux pKa les plus basiques", "Parce qu'il est toujours sous forme cationique", "Parce que son pKa1 est supérieur à 7"]),
    single("Quelle est la plage normale de pH urinaire ?", "C", "Le pH urinaire normal se situe approximativement entre 5,5 et 6,5.", ["3,0–4,0", "7,0–7,5", "5,5–6,5", "8,0–9,0"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 5 : pH et point isoélectrique", duration_seconds: 1_200 },
};
