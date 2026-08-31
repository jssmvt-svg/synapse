import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

// Chapitre labo: titre_fr="Mesures de masse, volume et densité", titre_en="Mass, Volume and Density Measurements",
// description_fr="Unités SI, instruments de pesée et de mesure de volume, densité urinaire", icone="⚖️"
const LAB2_COURSE = `# Lab 2 — Unités de mesure : masse, volume et densité

## 1. Unités de mesure
- Le système international (SI) distingue les unités **fondamentales** (masse : kg ; longueur : m ; temps : s ; température : K ; quantité de matière : mol) des unités **dérivées** (volume, pression, charge électrique en coulomb).
- Unités hors SI courantes en laboratoire : le temps en minutes/heures, le volume en litres (1 L = 1 dm³ ; 1000 L = 1 m³ ; 1 mL = 1 cm³).
- Multiples et sous-multiples (de 10¹⁵ à 10⁻¹⁵) : péta, ..., kilo, hecto, déca, (unité), déci, centi, milli, micro, nano, pico, femto. Convertir une unité vers une autre revient à déplacer la virgule du nombre de puissances de 10 séparant les deux préfixes.

## 2. Mesures de masse
- Instruments : balances mécaniques ou électroniques.
- Qualités attendues d'une balance : **exactitude** (proximité avec la vraie valeur), **précision** (reproductibilité des mesures), **capacité** (charge maximale supportée).
- Classes de balances de laboratoire, de la moins à la plus précise :

| Classe | Précision (g) |
| --- | --- |
| Technique | 10⁻² |
| Chromatique | 10⁻³ |
| Analytique | 10⁻⁴ |
| Semi-macro | 10⁻⁵ |
| Microbalance | 10⁻⁶ |
| Ultramicrobalance | 10⁻⁹ |

## 3. Mesures de volume
- Le volume dépend de la température et de la pression : une hausse de température ou une baisse de pression augmente le volume d'un gaz/liquide.
- Instruments : cylindre gradué, seringue, pipette, burette (titration), fiole volumétrique.
- Lecture du ménisque : pour l'eau (liquide clair, adhésion > cohésion), on lit le bas du ménisque ; pour le mercure (liquide opaque, cohésion > adhésion), on lit le haut du ménisque.

## 4. Mesures de densité
- Densité ρ = masse / volume. Unité SI : kg/m³ ; unité de laboratoire courante : g/mL (liquides/solides) ou g/L (gaz).
- Une hausse de température augmente le volume et diminue la densité ; une hausse de pression diminue le volume et augmente la densité.
- La densité est une constante physique caractéristique d'une substance. Mesure : balance + volume pour les solides, pycnomètre pour les liquides, hydromètre pour les gaz/solutions.

## 5. Densité urinaire
- L'urine est composée d'eau et de solutés (composés azotés comme l'urée et la créatinine, ions Na⁺/K⁺/Cl⁻/HPO₄²⁻, urobilinogène, acide urique).
- La densité urinaire (SG, specific gravity) est la densité relative à celle de l'eau pure (SG = 1,000, sans dimension).
- Valeurs de référence et interprétation clinique :

| Catégorie | Densité (SG) | Interprétation |
| --- | --- | --- |
| Normosthénurie | 1,015–1,025 | Normal |
| Hyposthénurie | < 1,015 | Hyperhydratation ou diabète insipide |
| Isosthénurie | ≈ 1,010 (proche du plasma) | Insuffisance rénale chronique (IRC/ESRD) — le rein a perdu sa capacité à concentrer/diluer l'urine |
| Hypersthénurie | > 1,025 | Excès de solutés (glucose, protéines, corps cétoniques, hémoglobinurie, myoglobinurie) ou déshydratation/restriction hydrique/brûlures/acidocétose diabétique |`;

export const LAB2_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Mesures de masse, volume et densité",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 2",
    content_fr: LAB2_COURSE,
  },
  qcm: [
    single("Quelles sont les unités SI fondamentales de masse et de temps ?", "A", "Le kilogramme (kg) est l'unité SI de masse, la seconde (s) celle de temps.", ["kg et s", "g et min", "kg et min", "mg et h"]),
    single("Combien de millilitres contient 1 kilolitre ?", "C", "1 kL = 1000 L = 1 000 000 mL = 10⁶ mL.", ["10² mL", "10³ mL", "10⁶ mL", "10⁹ mL"]),
    single("Quelle qualité d'une balance correspond à la reproductibilité des mesures répétées ?", "B", "La précision décrit la proximité entre plusieurs mesures répétées ; l'exactitude décrit la proximité avec la vraie valeur.", ["L'exactitude", "La précision", "La capacité", "La sensibilité"]),
    single("Parmi ces classes de balances, laquelle est la plus précise ?", "D", "Plus l'exposant est négatif (proche de 10⁻⁹), plus la balance est précise : l'ultramicrobalance est la plus précise.", ["Balance technique (10⁻²)", "Balance analytique (10⁻⁴)", "Semi-macro (10⁻⁵)", "Ultramicrobalance (10⁻⁹)"]),
    single("Comment une hausse de température affecte-t-elle le volume d'un liquide ?", "A", "Une hausse de température augmente généralement le volume (dilatation thermique).", ["Elle l'augmente", "Elle le diminue", "Elle n'a aucun effet", "Cela dépend uniquement de la pression"]),
    single("Pour lire le volume d'eau dans une burette, où doit-on lire le ménisque ?", "B", "Pour l'eau, l'adhésion au verre dépasse la cohésion : le ménisque est concave, on lit le bas.", ["Le haut du ménisque", "Le bas du ménisque", "Le milieu du ménisque", "Peu importe, le résultat est identique"]),
    single("Pourquoi lit-on le haut du ménisque pour le mercure et non le bas ?", "B", "Pour le mercure, la cohésion entre les atomes dépasse l'adhésion au verre : le ménisque est convexe, on lit le haut.", ["Le mercure est un solide à température ambiante", "La cohésion du mercure dépasse son adhésion au verre", "Le mercure a la même densité que l'eau", "C'est une convention arbitraire sans justification physique"]),
    single("Quelle est la formule de la densité ?", "A", "Densité = masse / volume.", ["ρ = masse / volume", "ρ = volume / masse", "ρ = masse × volume", "ρ = masse / température"]),
    multi("Quels instruments servent à mesurer la densité selon l'état de la matière ?", ["A", "B", "C"], "Pycnomètre pour les liquides, hydromètre pour les solutions/gaz, balance + volume pour les solides.", ["Le pycnomètre (liquides)", "L'hydromètre (gaz/solutions)", "La balance associée à une mesure de volume (solides)", "Le spectrophotomètre"]),
    single("Quelle est la plage normale de densité urinaire (normosthénurie) ?", "B", "La densité urinaire normale se situe entre 1,015 et 1,025.", ["1,000–1,010", "1,015–1,025", "1,030–1,050", "0,900–1,000"]),
    single("Quelle anomalie de densité urinaire évoque une insuffisance rénale chronique avancée ?", "C", "L'isosthénurie (densité fixée proche de celle du plasma, ~1,010) traduit la perte de la capacité rénale à concentrer/diluer l'urine.", ["L'hypersthénurie", "L'hyposthénurie", "L'isosthénurie", "La normosthénurie"]),
    single("Une hypersthénurie (SG > 1,025) peut notamment être causée par :", "B", "Un excès de solutés (glucose, protéines, corps cétoniques) ou une déshydratation augmente la densité urinaire.", ["Un diabète insipide", "Une glycosurie (excès de glucose urinaire) ou une déshydratation", "Une hyperhydratation", "Une insuffisance rénale chronique"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 2 : Masse, volume et densité", duration_seconds: 900 },
};

// Chapitre labo: titre_fr="Systèmes tampons biologiques", titre_en="Biological Buffer Systems",
// description_fr="Équation de Henderson-Hasselbalch, tampons sanguins, équilibre acido-basique", icone="🧫"
const LAB6_COURSE = `# Lab 6 — Systèmes tampons biologiques

## 1. Systèmes tampons
- Un système tampon associe un **acide faible et sa base conjuguée** (ex. CH₃COOH/CH₃COO⁻) ou une **base faible et son acide conjugué** (ex. NH₃/NH₄⁺). Il s'oppose aux variations de pH lorsqu'une petite quantité d'acide ou de base forte est ajoutée.

### Équation de Henderson-Hasselbalch
- À partir de Ka = [H⁺][A⁻]/[HA], on obtient : **pH = pKa + log₁₀([A⁻]/[HA])**.
- **Domaine tampon** : le couple est efficace sur environ pKa ± 1 unité de pH (ratio [A⁻]/[HA] entre 1/10 et 10).
- **Capacité tampon (β)** : dépend de la concentration totale du couple acide/base — plus les concentrations sont élevées, plus la capacité à absorber un ajout d'acide ou de base est grande.

## 2. Systèmes tampons biologiques du sang
Le pH sanguin normal est étroitement régulé à **7,35–7,45** ([H⁺] ≈ 40 nM). Quatre systèmes tampons principaux coexistent :

| Système | pKa | Mécanisme / rôle |
| --- | --- | --- |
| Protéines plasmatiques (albumine) | — | Les groupes ionisables des chaînes latérales (histidine, groupes amine/carboxyle) captent ou libèrent des protons (Protéine-H⁺ ⇌ Protéine + H⁺) |
| Hémoglobine | — | Le tétramère Hb (2α2β) tamponne les protons produits par l'hydratation du CO₂ tissulaire, couplé au transport du CO₂ sous forme de bicarbonate (effet Bohr — cf. chapitre Hémoglobine) |
| Système phosphate (H₂PO₄⁻/HPO₄²⁻) | ≈ 6,8 | Ratio HPO₄²⁻/H₂PO₄⁻ d'environ 4:1 dans le sang, mais varie fortement dans l'urine où il contribue de façon importante au tamponnage |
| Système bicarbonate (CO₂/HCO₃⁻) | ≈ 6,1 | Tampon extracellulaire majeur. L'anhydrase carbonique catalyse CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺. Au pH physiologique de 7,4, le ratio [HCO₃⁻]/[CO₂ dissous] ≈ **20:1**. Poumons (CO₂) et reins (HCO₃⁻) ajustent chacun des deux termes indépendamment |

## 3. Déséquilibres acido-basiques

| Type | Origine | Causes typiques | Compensation |
| --- | --- | --- | --- |
| Alcalose métabolique (pH > 7,45) | ↑ HCO₃⁻ | Vomissements, diurétiques, hyperaldostéronisme | Respiratoire : hypoventilation (↑ CO₂) |
| Alcalose respiratoire (pH > 7,45) | ↓ CO₂ | Hyperventilation (anxiété, fièvre, haute altitude) | Rénale : excrétion accrue de HCO₃⁻ |
| Acidose métabolique (pH < 7,35) | ↓ HCO₃⁻ | Insuffisance rénale, acidocétose diabétique, diarrhée, acidose lactique | Respiratoire : hyperventilation (↓ CO₂) |
| Acidose respiratoire (pH < 7,35) | ↑ CO₂ | Hypoventilation (BPCO, surdosage aux opioïdes) | Rénale : réabsorption accrue de HCO₃⁻ |`;

export const LAB6_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Systèmes tampons biologiques",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 6",
    content_fr: LAB6_COURSE,
  },
  qcm: [
    single("Qu'est-ce qu'un système tampon ?", "B", "Un tampon associe un acide faible et sa base conjuguée (ou une base faible et son acide conjugué), s'opposant aux variations de pH.", ["Un acide fort et sa base conjuguée", "Un acide faible et sa base conjuguée", "Deux acides forts en solution", "Un sel neutre dissous dans l'eau"]),
    single("Quelle est l'équation de Henderson-Hasselbalch ?", "C", "pH = pKa + log10([A-]/[HA]), dérivée de l'expression de Ka.", ["pH = pKa - log10([HA]/[A-])", "pH = -log10(Ka)", "pH = pKa + log10([A-]/[HA])", "pH = pKa × [A-]/[HA]"]),
    single("Quel est le domaine d'efficacité d'un système tampon en termes de pH ?", "B", "Un tampon est efficace sur environ pKa ± 1 unité de pH.", ["pKa ± 0,1", "pKa ± 1", "pKa ± 5", "Aucune limite définie"]),
    single("Quelle est la valeur normale du pH sanguin ?", "C", "Le pH sanguin normal est étroitement régulé entre 7,35 et 7,45.", ["6,80–7,00", "7,00–7,35", "7,35–7,45", "7,45–7,80"]),
    multi("Quels sont les principaux systèmes tampons du sang ?", ["A", "B", "C", "D"], "Les protéines plasmatiques, l'hémoglobine, le système phosphate et le système bicarbonate sont les quatre tampons sanguins principaux.", ["Les protéines plasmatiques", "L'hémoglobine", "Le système phosphate (H2PO4-/HPO42-)", "Le système bicarbonate (CO2/HCO3-)", "Le système chlorure/bicarbonate cellulaire seul"]),
    single("Quel est le pKa approximatif du système bicarbonate (CO2/HCO3-) ?", "B", "Le pKa du système bicarbonate est d'environ 6,1.", ["4,8", "6,1", "7,4", "9,2"]),
    single("Pourquoi le système bicarbonate est-il un tampon physiologique particulièrement efficace ?", "C", "Les poumons régulent le CO2 et les reins régulent le HCO3-, offrant un double contrôle indépendant des deux termes de l'équation.", ["Parce que son pKa est proche de 7,4", "Parce qu'il est présent en très faible quantité", "Parce que poumons et reins peuvent réguler indépendamment CO2 et HCO3-", "Parce qu'il ne dépend d'aucun organe"]),
    single("Quel enzyme catalyse la réaction CO2 + H2O ⇌ H2CO3 ?", "A", "L'anhydrase carbonique catalyse l'hydratation du CO2 en acide carbonique.", ["L'anhydrase carbonique", "La lactate déshydrogénase", "La créatine kinase", "L'aspartate aminotransférase"]),
    single("Un patient hyperventile suite à une crise d'anxiété. Quel déséquilibre acido-basique est le plus probable ?", "B", "L'hyperventilation élimine le CO2, ce qui augmente le pH : alcalose respiratoire.", ["Acidose métabolique", "Alcalose respiratoire", "Acidose respiratoire", "Alcalose métabolique"]),
    single("Comment le rein compense-t-il une alcalose respiratoire chronique ?", "B", "Le rein excrète davantage de bicarbonate pour abaisser le ratio HCO3-/CO2 et ramener le pH vers la normale.", ["En réabsorbant plus de bicarbonate", "En excrétant davantage de bicarbonate", "En hyperventilant", "En produisant plus de CO2"]),
    single("Des vomissements répétés entraînent typiquement :", "A", "La perte d'acide gastrique (HCl) augmente indirectement le HCO3- plasmatique : alcalose métabolique.", ["Une alcalose métabolique", "Une acidose métabolique", "Une alcalose respiratoire", "Une acidose respiratoire"]),
    single("Quelle est la compensation attendue face à une acidose métabolique (ex. acidocétose diabétique) ?", "B", "Le patient hyperventile pour éliminer du CO2 et faire remonter le pH : compensation respiratoire.", ["Hypoventilation", "Hyperventilation", "Rétention rénale de bicarbonate", "Aucune compensation possible"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 6 : Systèmes tampons biologiques", duration_seconds: 1_200 },
};

// Chapitre labo: titre_fr="Test A — Révisions pratiques", titre_en="Test A — Practical Review",
// description_fr="Épreuve pratique reformulée : conversions, dilutions, titration, pH et tampons", icone="📝"
const TEST_A_COURSE = `# Test A — Révisions pratiques

Ce chapitre reprend, sous forme de QCM corrigés, les exercices d'un examen pratique portant sur les notions clés des labos précédents : conversions d'unités, dilutions, solutions hypertoniques, titration acide-base, pH/pOH et systèmes tampons.

## Points méthodologiques clés
- **Dilution** : C₁V₁ = C₂V₂ — le nombre de moles de soluté est conservé lors d'une dilution.
- **Titration acide-base** : à l'équivalence, les moles d'acide et de base ajoutées sont égales (pour une réaction 1:1). La courbe de titration d'un acide faible par une base forte présente un point d'équivalence à pH > 7 (base conjuguée qui s'hydrolyse).
- **pOH** : pOH = -log₁₀[OH⁻] ; pH + pOH = 14 à 25 °C.
- **Solutions hypertoniques** : concentration en solutés supérieure à celle du plasma/cellule, provoquant une sortie d'eau de la cellule (crénation des globules rouges).`;

export const TEST_A_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Points clés — Test A",
    source_label: "Notes de laboratoire personnelles — Test pratique A (Variant C), reformulé",
    content_fr: TEST_A_COURSE,
  },
  qcm: [
    single("Convertir 12 000 nm en hectomètres (hm). Quelle est la dimension physique mesurée ?", "B", "12 000 nm = 1,2×10⁻⁵ m = 1,2×10⁻⁷ hm. Il s'agit d'une longueur.", ["1,2×10⁻⁵ hm — une masse", "1,2×10⁻⁷ hm — une longueur", "1,2×10⁻⁹ hm — un volume", "1,2×10⁻³ hm — une longueur"]),
    single("À partir d'un stock de glucose à 2 M, quel volume faut-il prélever pour préparer 20,0 mL d'une solution à 0,05 M ?", "A", "C1V1 = C2V2 → V1 = (0,05 × 20)/2 = 0,5 mL.", ["0,5 mL", "5 mL", "2 mL", "0,05 mL"]),
    single("Qu'est-ce qu'une solution hypertonique et quel est son effet sur les globules rouges (GR) ?", "C", "Une solution hypertonique a une osmolarité supérieure à celle du cytoplasme des GR : l'eau sort de la cellule, qui se rétracte (crénation).", ["Osmolarité inférieure au plasma ; les GR gonflent et éclatent", "Osmolarité égale au plasma ; les GR restent inchangés", "Osmolarité supérieure au plasma ; les GR se rétractent (crénation)", "Osmolarité supérieure au plasma ; les GR gonflent"]),
    multi("Lesquelles de ces solutions sont des exemples classiques de perfusions hypertoniques ?", ["A", "C"], "Le NaCl à 3% et le mannitol à 20% sont des exemples classiques de solutés hypertoniques utilisés en perfusion.", ["NaCl 3% (sérum salé hypertonique)", "NaCl 0,9% (sérum physiologique)", "Mannitol 20%", "Glucose 5% (D5W, isotonique)"]),
    single("15 mL d'acide acétique de concentration inconnue sont titrés par du KOH à 0,03 M ; l'équivalence est atteinte après 10 mL de KOH. Quelle est la concentration initiale de l'acide acétique ?", "B", "n(KOH) = 0,03 × 0,010 = 3×10⁻⁴ mol = n(acide acétique). C = 3×10⁻⁴ / 0,015 = 0,02 M.", ["0,01 M", "0,02 M", "0,03 M", "0,05 M"]),
    single("Quelle est la réaction équilibrée entre l'acide acétique et l'hydroxyde de potassium ?", "A", "CH3COOH + KOH → CH3COOK + H2O (neutralisation acide faible/base forte, 1:1).", ["CH3COOH + KOH → CH3COOK + H2O", "CH3COOH + KOH → CH3COO2K + H2", "2 CH3COOH + KOH → (CH3COO)2K + H2O", "CH3COOH + KOH → CH3COK + H2O2"]),
    single("Concernant la courbe de titration de l'acide acétique (faible) par le KOH (base forte), le point d'équivalence se situe :", "B", "Pour un acide faible titré par une base forte, le point d'équivalence est basique (pH > 7) à cause de l'hydrolyse de la base conjuguée CH3COO-.", ["À pH = 7 exactement", "À pH > 7", "À pH < 7", "Il n'existe pas de point d'équivalence pour un acide faible"]),
    single("Quel est le pOH d'une solution aqueuse de NaOH à 0,5 M à 25 °C ?", "B", "NaOH est une base forte, totalement dissociée : [OH-]=0,5M. pOH = -log10(0,5) ≈ 0,3.", ["0,0", "0,3", "1,0", "13,7"]),
    single("En alcalose respiratoire, comment évoluent le pH sanguin et le ratio HCO3-/PCO2 ?", "A", "L'hyperventilation abaisse le CO2 (PCO2), ce qui augmente le ratio HCO3-/PCO2 et fait monter le pH (alcalose).", ["Le pH augmente et le ratio HCO3-/PCO2 augmente (PCO2 diminue)", "Le pH diminue et le ratio HCO3-/PCO2 diminue", "Le pH augmente mais le ratio reste inchangé", "Le pH et le ratio ne sont pas liés en alcalose respiratoire"]),
    single("Comment l'alcalose respiratoire est-elle compensée par l'organisme ?", "B", "Le rein excrète davantage de bicarbonate (compensation métabolique/rénale) pour ramener le ratio HCO3-/PCO2 vers la normale.", ["Par une hyperventilation supplémentaire", "Par une excrétion rénale accrue de bicarbonate", "Par une rétention rénale de bicarbonate", "Par une hypoventilation immédiate"]),
    single("Où opère principalement le système tampon bicarbonate dans l'organisme ?", "B", "Le système bicarbonate est le tampon majeur du compartiment extracellulaire, notamment le plasma sanguin.", ["Exclusivement dans le cytoplasme cellulaire", "Dans le plasma sanguin (compartiment extracellulaire)", "Uniquement dans les urines", "Uniquement dans les mitochondries"]),
    single("Quel est le pH d'un tampon préparé en mélangeant des volumes égaux de NaH2PO4 0,2M et Na2HPO4 0,1M (pKa2 du phosphate ≈ 7,21) ?", "C", "Après mélange à volumes égaux : [H2PO4-]=0,1M, [HPO42-]=0,05M. pH = 7,21 + log10(0,05/0,1) = 7,21 - 0,3 ≈ 6,91.", ["7,51", "7,21", "6,91", "6,50"]),
  ],
  exam: { titre_fr: "Examen chronométré — Test A", duration_seconds: 1_500 },
};
