import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const LAB10_COURSE = `# Lab 10 — Méthodes optiques : spectrophotométrie et quantification des protéines totales

## 1. Méthodes optiques
- Les méthodes optiques reposent sur l'interaction de la lumière (rayonnement électromagnétique) avec la matière.
- Relation fondamentale : **λ·ν = c**, où λ est la longueur d'onde, ν la fréquence et c la vitesse de la lumière.

## 2. Spectrophotométrie
- Mesure l'absorption de la lumière par une solution dans le domaine UV/visible.
- I₀ = intensité de la lumière incidente ; Iₜ = intensité de la lumière transmise.
- **Transmittance** T = Iₜ/I₀.
- **Absorbance** A = log₁₀(I₀/Iₜ) = log₁₀(1/T) — aussi appelée densité optique.

## 3. Loi de Beer-Lambert
- **A = ε·C·L**, où ε est le coefficient d'absorptivité molaire (L·mol⁻¹·cm⁻¹), C la concentration molaire (mol/L) et L la longueur du trajet optique (cm).
- La relation A = f(C) n'est linéaire que dans un domaine de concentration limité : au-delà d'une certaine concentration (C > Cₗᵢₘ), la loi de Beer-Lambert n'est plus valable.

## 4. Méthodes de détermination de la concentration
1. **Calcul direct** à partir du coefficient d'absorptivité molaire connu : C = A/(ε·L).
2. **Référence à un standard** de concentration connue : le rapport des absorbances est égal au rapport des concentrations, donc C_échantillon = (A_échantillon / A_std) × C_std.
3. **Courbe d'étalonnage** : plusieurs solutions standards de concentration croissante et connue sont mesurées pour tracer une droite A = f(C) ; la concentration inconnue est lue par interpolation sur cette droite.

## 5. Application pratique : dosage des protéines totales du sérum
- Une série de solutions standards (Std1 à Std5) est préparée par dilution à partir d'une solution mère, en calculant les volumes de standard et d'eau nécessaires (loi de dilution C₁V₁ = C₂V₂).
- L'absorbance de chaque standard et de l'échantillon inconnu est mesurée au spectrophotomètre.
- La concentration en protéines totales de l'échantillon est déduite via la courbe d'étalonnage ou le calcul par référence à un standard.

## Points à retenir
- A = ε·C·L est la relation centrale de toute méthode spectrophotométrique quantitative.
- Absorbance et transmittance sont liées de façon logarithmique, pas linéaire.
- Une courbe d'étalonnage fiable nécessite plusieurs standards de concentration connue et croissante, mesurés dans le domaine de linéarité de la loi de Beer-Lambert.`;

export const LAB10_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Labo 10 — Spectrophotométrie et dosage des protéines totales",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 10",
    content_fr: LAB10_COURSE,
  },
  qcm: [
    single("Que mesure la spectrophotométrie ?", "B", "La spectrophotométrie mesure l'absorption de la lumière par une solution dans le domaine UV/visible.", ["La masse d'un échantillon", "L'absorption de la lumière par une solution dans le domaine UV/visible", "Le pH d'une solution", "La viscosité d'un liquide"]),
    single("Quelle relation relie longueur d'onde (λ), fréquence (ν) et vitesse de la lumière (c) ?", "C", "La relation fondamentale des ondes électromagnétiques est λ·ν = c.", ["λ + ν = c", "λ/ν = c", "λ·ν = c", "λ - ν = c"]),
    single("Comment définit-on la transmittance T ?", "A", "La transmittance est le rapport de l'intensité transmise sur l'intensité incidente : T = Iₜ/I₀.", ["T = Iₜ/I₀", "T = I₀/Iₜ", "T = I₀ - Iₜ", "T = I₀ + Iₜ"]),
    single("Comment définit-on l'absorbance A ?", "D", "L'absorbance est définie comme A = log₁₀(I₀/Iₜ), aussi appelée densité optique.", ["A = Iₜ/I₀", "A = I₀ - Iₜ", "A = I₀ · Iₜ", "A = log₁₀(I₀/Iₜ)"]),
    multi("La loi de Beer-Lambert (A = ε·C·L) relie l'absorbance à :", ["A", "B", "D"], "A dépend du coefficient d'absorptivité molaire ε, de la concentration C et de la longueur du trajet optique L — pas du pH ni de la température.", ["Le coefficient d'absorptivité molaire ε", "La concentration molaire C de la solution", "Le pH de la solution", "La longueur du trajet optique L", "La température ambiante"]),
    single("Dans quelle unité s'exprime le coefficient d'absorptivité molaire ε ?", "B", "ε s'exprime en L·mol⁻¹·cm⁻¹ (inverse de concentration × longueur).", ["mol/L", "L·mol⁻¹·cm⁻¹", "g/L", "cm⁻¹"]),
    single("Que se passe-t-il lorsque la concentration d'une solution dépasse la limite de linéarité de la loi de Beer-Lambert ?", "C", "Au-delà d'une certaine concentration, la relation A = f(C) n'est plus linéaire : la loi de Beer-Lambert n'est alors plus applicable directement.", ["L'absorbance devient négative", "La transmittance dépasse 100 %", "La relation A = f(C) n'est plus linéaire", "Aucun changement, la loi reste valable indéfiniment"]),
    single("Dans la méthode de référence à un standard, comment calcule-t-on la concentration de l'échantillon ?", "A", "Le rapport des absorbances est égal au rapport des concentrations : C_échantillon = (A_échantillon/A_std) × C_std.", ["C_échantillon = (A_échantillon/A_std) × C_std", "C_échantillon = A_échantillon × A_std", "C_échantillon = A_std/A_échantillon", "C_échantillon = A_échantillon + C_std"]),
    single("Pour construire une courbe d'étalonnage fiable, il faut :", "B", "Une courbe d'étalonnage nécessite plusieurs solutions standards de concentration connue et croissante.", ["Une seule solution standard de concentration connue", "Plusieurs solutions standards de concentration connue et croissante", "Uniquement l'échantillon inconnu, mesuré plusieurs fois", "Des solutions de concentration aléatoire, non connue"]),
    single("Quelle loi permet de calculer le volume de standard nécessaire pour préparer une dilution ?", "C", "La loi de dilution C₁V₁ = C₂V₂ permet de calculer le volume de solution mère nécessaire pour atteindre la concentration cible.", ["A = ε·C·L", "T = Iₜ/I₀", "C₁V₁ = C₂V₂", "pH = pKa + log([A⁻]/[HA])"]),
    single("Dans le dosage des protéines totales du sérum par spectrophotométrie, quel est le rôle des standards Std1 à Std5 ?", "D", "Les standards de concentration croissante permettent de construire la courbe d'étalonnage utilisée pour déterminer la concentration inconnue de l'échantillon.", ["Ils remplacent l'échantillon inconnu", "Ils servent uniquement de témoin négatif", "Ils diluent l'échantillon inconnu", "Ils permettent de construire la courbe d'étalonnage"]),
    single("L'absorbance est une grandeur :", "B", "L'absorbance, calculée comme un logarithme du rapport I₀/Iₜ, est sans dimension.", ["Exprimée en pourcentage", "Sans dimension", "Exprimée en mol/L", "Exprimée en nm"]),
  ],
  exam: { titre_fr: "Examen chronométré — Labo 10 : Spectrophotométrie", duration_seconds: 1_200 },
};

const LAB11_COURSE = `# Lab 11 — Enzymes, cofacteurs enzymatiques et test optique (dosage de la LDH sérique)

## 1. Généralités sur les enzymes
- Les enzymes sont des protéines à fonction catalytique : E + S ⇌ ES ⇌ EP ⇌ E + P.
- Propriétés : **spécificité**, **réversibilité** (dépendante du pH, souvent optimal autour de 7,4), **réutilisabilité**, **sensibilité à la température** (activité optimale généralement autour de 37 °C).
- **Enzymes simples (holoenzymes)** : composées uniquement de protéine.
- **Enzymes complexes (hétéroenzymes)** : protéine (apoenzyme) + cofacteur enzymatique — coenzyme (ex. dérivé de vitamine B3), groupe prosthétique, ou ion métallique (Zn²⁺, Mg²⁺...).

## 2. Le test optique
- Méthode **spectrophotométrique** : mesure l'absorbance à 340 nm (A/340 nm), longueur d'onde d'absorption du NADH.
- Mesure directement l'activité enzymatique : 1 unité/L correspond à la transformation d'1 µmol de substrat/produit par minute.
- **Méthode cinétique** : la mesure se fait dans le temps (suivi de la variation d'absorbance).
- Utilisée pour quantifier l'activité des déshydrogénases (cofacteur NADH, dérivé de la vitamine B3/niacine).

### Test optique simple (suivi direct du NADH)
- Utilisé pour LDH (lactate déshydrogénase), MDH (malate déshydrogénase), GDH (glutamate déshydrogénase).
- Réaction catalysée par la LDH : pyruvate + NADH + H⁺ ⇌ lactate + NAD⁺.
- La LDH est un **tétramère** de sous-unités H et M, avec **5 isoenzymes** :

| Isoenzyme | Composition | Tissu principal |
| --- | --- | --- |
| LDH1 | HHHH | Myocarde, globules rouges |
| LDH2 | HHHM | — |
| LDH3 | HHMM | Pancréas, placenta, poumon |
| LDH4 | HMMM | Muscle, foie |
| LDH5 | MMMM | Muscle, foie |

- LDH augmentée : infarctus du myocarde, hémolyse, pancréatite, hépatite, dystrophie musculaire.

### Test optique + réaction indicatrice (transaminases)
| Enzyme | Réaction catalysée | Tissu(s) principal(aux) |
| --- | --- | --- |
| GPT/ALAT (glutamate pyruvate transaminase / alanine aminotransférase) | Alanine + α-cétoglutarate ⇌ pyruvate + glutamate | Foie (surtout) |
| GOT/ASAT (glutamate oxaloacétate transaminase / aspartate aminotransférase) | Aspartate + α-cétoglutarate ⇌ oxaloacétate + glutamate | Foie, muscle, myocarde, globules rouges |

- GOT et GPT augmentées ensemble : hépatite. GOT seule augmentée : lésion musculaire, hémolyse, infarctus du myocarde.
- La réaction indicatrice couplée (ex. oxaloacétate + NADH + H⁺ → malate + NAD⁺) permet de suivre la réaction principale via la disparition du NADH à 340 nm.

### Test optique + auxiliaire + réaction indicatrice
- **CK** (créatine kinase) : dimère de sous-unités B et M.

| Isoforme | Composition | Tissu |
| --- | --- | --- |
| CK1 | BB | Cerveau |
| CK2 | MB | Myocarde |
| CK3 | MM | Muscle |

- CK augmentée : infarctus du myocarde, lésion musculaire.
- Réactions couplées : créatine + ATP →(CK) créatine-phosphate + ADP ; ADP + phosphoénolpyruvate → pyruvate + ATP ; pyruvate + NADH + H⁺ → lactate + NAD⁺ (réaction indicatrice, suivie à 340 nm).

## 3. Partie pratique : détermination de la LDH en solution
- Échantillon (sérum) + réactif de travail contenant pyruvate, NADH et tampon.
- L'activité enzymatique est calculée à partir de la variation d'absorbance mesurée dans le temps (ΔA/min), convertie en unités internationales (U/L) grâce au coefficient d'absorptivité molaire du NADH.

## Points à retenir
- Le test optique à 340 nm suit toujours, directement ou indirectement, la disparition/apparition du NADH.
- Les isoenzymes de la LDH et le profil transaminases/CK orientent le diagnostic selon le tissu atteint (myocarde, foie, muscle, GR).`;

export const LAB11_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Labo 11 — Enzymes, cofacteurs et test optique (LDH sérique)",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 11 (sources consolidées : notes manuscrites + copie « Cab 11 »)",
    content_fr: LAB11_COURSE,
  },
  qcm: [
    single("Quelle est la réaction générale catalysée par une enzyme ?", "B", "Le schéma général d'une réaction enzymatique est E + S ⇌ ES ⇌ EP ⇌ E + P.", ["E + P ⇌ ES ⇌ E + S", "E + S ⇌ ES ⇌ EP ⇌ E + P", "S + P ⇌ E", "E ⇌ S + P"]),
    multi("Parmi les propriétés suivantes, lesquelles caractérisent les enzymes ?", ["A", "B", "C", "D"], "Les enzymes sont spécifiques, réversibles (selon le pH), réutilisables et sensibles à la température.", ["Spécificité", "Réversibilité dépendante du pH", "Réutilisabilité", "Sensibilité à la température", "Incapacité à être dénaturées"]),
    single("Qu'est-ce qu'une hétéroenzyme (enzyme complexe) ?", "C", "Une hétéroenzyme est composée d'une protéine (apoenzyme) associée à un cofacteur enzymatique (coenzyme, groupe prosthétique ou ion métallique).", ["Une enzyme composée uniquement de protéine", "Une enzyme sans activité catalytique", "Une protéine associée à un cofacteur enzymatique", "Un assemblage de plusieurs protéines identiques"]),
    single("À quelle longueur d'onde le test optique enzymatique est-il généralement mesuré ?", "B", "Le test optique enzymatique mesure l'absorbance à 340 nm, longueur d'onde d'absorption du NADH.", ["280 nm", "340 nm", "450 nm", "600 nm"]),
    single("Que représente 1 unité/L d'activité enzymatique dans le test optique ?", "A", "1 unité/L correspond à la transformation d'1 µmol de substrat (ou produit) par minute.", ["La transformation d'1 µmol de substrat par minute", "La transformation d'1 mmol de substrat par heure", "La concentration de l'enzyme en g/L", "Le pH optimal de la réaction"]),
    single("Quelle réaction est catalysée par la LDH (lactate déshydrogénase) ?", "D", "La LDH catalyse : pyruvate + NADH + H⁺ ⇌ lactate + NAD⁺.", ["Glucose + ATP → glucose-6-phosphate + ADP", "Alanine + α-cétoglutarate → pyruvate + glutamate", "Créatine + ATP → créatine-phosphate + ADP", "Pyruvate + NADH + H⁺ ⇌ lactate + NAD⁺"]),
    single("La LDH est une protéine de structure quaternaire de type :", "B", "La LDH est un tétramère composé de sous-unités H et M.", ["Dimère de sous-unités B et M", "Tétramère de sous-unités H et M", "Monomère simple", "Pentamère"]),
    single("Quel isoenzyme de la LDH est principalement associé au myocarde et aux globules rouges ?", "A", "LDH1 (HHHH) est l'isoenzyme prédominant dans le myocarde et les globules rouges.", ["LDH1 (HHHH)", "LDH3 (HHMM)", "LDH4 (HMMM)", "LDH5 (MMMM)"]),
    single("Une élévation isolée de la LDH sérique peut être observée dans :", "C", "La LDH augmente dans l'infarctus du myocarde, l'hémolyse, la pancréatite, l'hépatite et la dystrophie musculaire.", ["Une carence en vitamine C uniquement", "Une hypoglycémie isolée", "Un infarctus du myocarde ou une hémolyse", "Une déshydratation simple"]),
    single("GPT (ALAT) est une enzyme principalement retrouvée dans :", "B", "La GPT/ALAT est principalement une enzyme hépatique.", ["Le muscle squelettique", "Le foie", "Le cerveau", "Les globules rouges"]),
    multi("La GOT (ASAT) est retrouvée dans quels tissus ?", ["A", "B", "C", "D"], "La GOT est présente dans le foie, le muscle, le myocarde et les globules rouges — d'où son manque de spécificité hépatique par rapport à la GPT.", ["Le foie", "Le muscle", "Le myocarde", "Les globules rouges", "Les poumons uniquement"]),
    single("Une élévation conjointe de GOT et GPT oriente vers :", "A", "L'élévation simultanée des deux transaminases est caractéristique d'une atteinte hépatique (hépatite).", ["Une hépatite", "Un infarctus du myocarde isolé", "Une carence en vitamine C", "Une pancréatite isolée"]),
    single("La créatine kinase (CK) est une protéine de structure :", "C", "La CK est un dimère composé de sous-unités B et M.", ["Tétramère de sous-unités H et M", "Monomère simple", "Dimère de sous-unités B et M", "Trimère"]),
    single("Quelle isoforme de la CK est associée au myocarde ?", "B", "CK2 (MB) est l'isoforme associée au tissu myocardique.", ["CK1 (BB)", "CK2 (MB)", "CK3 (MM)", "Aucune isoforme n'est spécifique du myocarde"]),
    single("Dans le dosage couplé de la créatine kinase, quelle molécule est finalement suivie par spectrophotométrie à 340 nm ?", "D", "La réaction indicatrice couplée aboutit à la consommation de NADH, suivie à 340 nm.", ["Le glucose", "L'ATP", "La créatine", "Le NADH"]),
  ],
  exam: { titre_fr: "Examen chronométré — Labo 11 : Enzymes et test optique", duration_seconds: 1_500 },
};

const LAB12_COURSE = `# Lab 12 — Vitamines : détermination de la vitamine C par titration redox (iodométrie)

## 1. Généralités sur les vitamines
- Les vitamines sont des composés organiques essentiels, non synthétisés (ou insuffisamment) par l'organisme, nécessaires en petites quantités au métabolisme (rôle de cofacteur enzymatique).
| Catégorie | Vitamines |
| --- | --- |
| Hydrosolubles | Vitamine C (acide ascorbique) ; B1 (thiamine), B2 (riboflavine, précurseur FAD/FMN), B3 (niacine, précurseur NAD⁺/NADP⁺), B5 (acide pantothénique), B6 (pyridoxal), B9 (acide folique), B12 (cobalamine) |
| Liposolubles | Vitamine D (calciférol), vitamine A (rétinol), vitamine E (tocophérol), vitamine K (ménadione) |

## 2. Vitamine C (acide ascorbique)
- Structure : γ-lactone de l'acide gulonique ; synthétisée à partir du glucose chez la plupart des espèces (pas chez l'humain).
- Sensible à la lumière, à l'oxygène (O₂), à la température et au pH alcalin.
- Rôles : **antioxydant** (immunité), cofacteur de l'**hydroxylation** nécessaire à la synthèse du collagène, de la dopamine/noradrénaline et des hormones stéroïdiennes ; favorise l'**absorption du fer** en réduisant Fe³⁺ en Fe²⁺.
- Hypovitaminose : **scorbut** (troubles du collagène, saignements).
- Hypervitaminose : excès d'acide oxalique, risque de calculs rénaux.

## 3. Principe du dosage par titration redox (iodométrie)
- Une réaction redox implique un transfert d'électrons : l'**oxydation** correspond à une perte d'électrons (perte de H⁺ / gain d'O₂), la **réduction** à un gain d'électrons (gain de H⁺ / perte d'O₂).
- L'iode (I₂) est l'agent oxydant utilisé pour titrer l'acide ascorbique, qui agit comme agent réducteur : l'acide ascorbique est oxydé en acide déhydroascorbique, tandis que I₂ est réduit en iodure (I⁻).
- L'**amidon (empois)** est utilisé comme indicateur : en présence d'un excès d'I₂, il forme un complexe bleu caractéristique, signalant la fin de la réaction (point d'équivalence).

## 4. Protocole pratique
- Trois échantillons sont titrés en parallèle : une solution standard de vitamine C, un jus commercial, un jus frais — chacun mélangé à de l'eau, de l'amidon (indicateur) et de l'acide acétique (stabilisateur).
- Le titrant (I₂) est ajouté goutte à goutte jusqu'au virage bleu (apparition du complexe amidon-iode).
- La concentration en vitamine C de l'échantillon est calculée par comparaison avec le volume de titrant utilisé pour le standard de concentration connue : C_échantillon = (V_échantillon / V_std) × C_std.

## Points à retenir
- Le dosage de la vitamine C par iodométrie repose sur son pouvoir réducteur : elle est oxydée par l'I₂.
- Le virage bleu de l'amidon marque le point d'équivalence.
- Ce type de dosage permet de comparer la teneur en vitamine C de différents jus (frais vs. commercial) à un standard connu.`;

export const LAB12_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Labo 12 — Vitamines : dosage de la vitamine C par iodométrie",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 12",
    content_fr: LAB12_COURSE,
  },
  qcm: [
    single("Comment classe-t-on les vitamines selon leur solubilité ?", "C", "Les vitamines sont classées en hydrosolubles (B, C) et liposolubles (A, D, E, K).", ["Essentielles et non essentielles uniquement", "Naturelles et synthétiques", "Hydrosolubles et liposolubles", "Végétales et animales"]),
    single("À quelle structure chimique correspond la vitamine C (acide ascorbique) ?", "B", "La vitamine C est une γ-lactone de l'acide gulonique.", ["Un stéroïde tétracyclique", "Une γ-lactone de l'acide gulonique", "Un acide aminé soufré", "Un dérivé de la purine"]),
    multi("La vitamine C est sensible à :", ["A", "B", "C", "D"], "L'acide ascorbique est sensible à la lumière, à l'oxygène, à la température et au pH alcalin.", ["La lumière", "L'oxygène", "La température", "Le pH alcalin", "L'obscurité totale"]),
    single("Quel est le rôle de la vitamine C dans la synthèse du collagène ?", "A", "La vitamine C est un cofacteur essentiel de l'hydroxylation nécessaire à la maturation du collagène.", ["Cofacteur de l'hydroxylation des résidus de collagène", "Précurseur direct des acides aminés du collagène", "Inhibiteur de la dégradation du collagène", "Elle n'a aucun rôle dans la synthèse du collagène"]),
    single("Quelle carence sévère résulte d'une hypovitaminose C ?", "B", "Le scorbut, caractérisé par des troubles du collagène et des saignements, résulte d'une carence sévère en vitamine C.", ["Le rachitisme", "Le scorbut", "La pellagre", "Le béribéri"]),
    single("Dans le dosage de la vitamine C par iodométrie, quel est le rôle de l'iode (I₂) ?", "C", "L'iode agit comme agent oxydant, oxydant l'acide ascorbique en acide déhydroascorbique.", ["Agent réducteur", "Indicateur coloré", "Agent oxydant", "Stabilisateur de pH"]),
    single("Qu'est-ce que l'oxydation, en termes de transfert d'électrons ?", "D", "L'oxydation correspond à une perte d'électrons (perte de H⁺ ou gain d'O₂).", ["Un gain d'électrons", "Un gain de H⁺", "Une perte d'O₂", "Une perte d'électrons"]),
    single("Quel indicateur est utilisé dans le dosage de la vitamine C par iodométrie, et quel est le signal de fin de réaction ?", "A", "L'amidon forme un complexe bleu avec l'excès d'iode, signalant le point d'équivalence.", ["L'amidon, avec un virage bleu", "La phénolphtaléine, avec un virage rose", "Le bleu de bromothymol, avec un virage jaune", "Aucun indicateur n'est nécessaire"]),
    single("Quel est le rôle de l'acide acétique dans le protocole de titration de la vitamine C ?", "B", "L'acide acétique agit comme stabilisateur du milieu réactionnel.", ["Agent oxydant principal", "Stabilisateur du milieu", "Indicateur coloré", "Titrant de la réaction"]),
    single("Comment calcule-t-on la concentration en vitamine C d'un échantillon à partir du titrage ?", "C", "La concentration est calculée par comparaison du volume de titrant utilisé pour l'échantillon avec celui utilisé pour le standard : C_éch = (V_éch/V_std) × C_std.", ["C_éch = V_éch × V_std", "C_éch = V_std / V_éch", "C_éch = (V_éch/V_std) × C_std", "C_éch = V_éch + C_std"]),
    single("Un excès chronique de vitamine C peut favoriser :", "D", "L'hypervitaminose C peut entraîner un excès d'acide oxalique et un risque de calculs rénaux.", ["Le scorbut", "Le rachitisme", "Une anémie hémolytique", "Des calculs rénaux (excès d'acide oxalique)"]),
  ],
  exam: { titre_fr: "Examen chronométré — Labo 12 : Dosage de la vitamine C", duration_seconds: 1_200 },
};

const LAB13_COURSE = `# Lab 13 — Cinétique enzymatique : détermination de Km et Vmax

## 1. Vitesse de réaction enzymatique
- La réaction enzymatique générale : E + S ⇌ ES ⇌ EP ⇌ E + P.
- La **vitesse (v)** de la réaction enzymatique correspond à la vitesse de disparition du substrat ou d'apparition du produit : v = -d[S]/dt = d[P]/dt, exprimée en µmol/min.
- Au cours du temps, [S] diminue et [P] augmente ; la vitesse initiale (v₀) diminue également car le substrat s'épuise, l'enzyme peut devenir non saturée, se dénaturer, ou perdre ses cofacteurs.

## 2. Équation de Michaelis-Menten
- **Vmax** : vitesse maximale, atteinte lorsque l'enzyme est saturée en substrat.
- **Km** (constante de Michaelis-Menten) : concentration de substrat pour laquelle v₀ = Vmax/2. Km reflète l'affinité de l'enzyme pour son substrat — **plus Km est petit, plus l'affinité est grande**.
- Équation : **v₀ = (Vmax × [S]) / (Km + [S])**.
- Trois régimes cinétiques selon [S] : à faible [S], la réaction est d'ordre 1 (vitesse proportionnelle à [S]) ; à [S] intermédiaire, régime mixte ; à [S] élevée (saturation), la réaction est d'ordre zéro (vitesse constante = Vmax).
- Lorsqu'une enzyme a plusieurs substrats possibles avec des Km différents (Km1 < Km2 < Km3), l'affinité suit l'ordre inverse : affinité1 > affinité2 > affinité3.

## 3. Équation de Lineweaver-Burk (double inverse)
- Linéarisation de l'équation de Michaelis-Menten : **1/v₀ = (Km/Vmax) × (1/[S]) + 1/Vmax**.
- Sous la forme y = a·x + b, avec pente a = Km/Vmax et ordonnée à l'origine b = 1/Vmax.
- Graphiquement : l'intersection avec l'axe des ordonnées donne 1/Vmax ; l'intersection avec l'axe des abscisses (extrapolée) donne -1/Km.
- Cette représentation linéaire facilite la détermination expérimentale précise de Km et Vmax, plus difficile à lire directement sur la courbe hyperbolique de Michaelis-Menten.

## 4. Facteurs influençant la vitesse de réaction (v₀)
- **[S]** : la concentration en substrat.
- **pH** : modifie la structure (ionisation) de l'enzyme et donc son activité.
- **Température** : l'activité augmente avec la température jusqu'à un optimum, au-delà duquel l'enzyme se dénature.
- **Effecteurs** : activateurs (augmentent l'activité) ou inhibiteurs (diminuent l'activité).

## Points à retenir
- Km = [S] pour laquelle v₀ = Vmax/2 ; Km petit = grande affinité enzyme-substrat.
- La représentation de Lineweaver-Burk (1/v₀ en fonction de 1/[S]) linéarise l'équation de Michaelis-Menten et permet de déterminer Km et Vmax expérimentalement.`;

export const LAB13_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Labo 13 — Cinétique enzymatique : Km et Vmax",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 13",
    content_fr: LAB13_COURSE,
  },
  qcm: [
    single("Comment est définie la vitesse d'une réaction enzymatique ?", "B", "La vitesse correspond à la disparition du substrat ou l'apparition du produit par unité de temps : v = -d[S]/dt = d[P]/dt.", ["v = [S] × [P]", "v = -d[S]/dt = d[P]/dt", "v = Km/Vmax", "v = [E] + [S]"]),
    single("Que représente Vmax dans l'équation de Michaelis-Menten ?", "C", "Vmax est la vitesse maximale atteinte lorsque l'enzyme est saturée en substrat.", ["La concentration de substrat à saturation", "La vitesse initiale de la réaction", "La vitesse maximale atteinte à saturation en substrat", "La concentration de l'enzyme"]),
    single("Que représente la constante Km de Michaelis-Menten ?", "A", "Km est la concentration de substrat pour laquelle v₀ = Vmax/2 ; elle reflète l'affinité enzyme-substrat.", ["La concentration de substrat pour laquelle v₀ = Vmax/2", "La vitesse maximale de la réaction", "Le pH optimal de l'enzyme", "La concentration de l'enzyme dans le milieu"]),
    single("Quelle relation existe entre Km et l'affinité enzyme-substrat ?", "D", "Plus Km est petit, plus l'affinité entre l'enzyme et le substrat est grande.", ["Km et affinité sont indépendants", "Un Km élevé indique une grande affinité", "Km n'a pas d'unité comparable à l'affinité", "Un Km petit indique une grande affinité"]),
    single("Quelle est l'équation de Michaelis-Menten ?", "B", "L'équation de Michaelis-Menten est v₀ = (Vmax × [S]) / (Km + [S]).", ["v₀ = Vmax + [S]/Km", "v₀ = (Vmax × [S]) / (Km + [S])", "v₀ = Km × [S] / Vmax", "v₀ = Vmax - Km × [S]"]),
    single("À très forte concentration de substrat (saturation de l'enzyme), la réaction enzymatique suit une cinétique :", "C", "À saturation, la vitesse devient constante (= Vmax), indépendante de [S] : cinétique d'ordre zéro.", ["D'ordre 1, proportionnelle à [S]", "D'ordre 2", "D'ordre zéro, vitesse constante", "Négative"]),
    single("Pourquoi utilise-t-on la représentation de Lineweaver-Burk plutôt que la courbe de Michaelis-Menten directe ?", "A", "La linéarisation en double inverse facilite la détermination précise de Km et Vmax, difficiles à lire sur la courbe hyperbolique.", ["Elle linéarise l'équation, facilitant la détermination précise de Km et Vmax", "Elle permet de mesurer le pH optimal", "Elle élimine le besoin de mesurer la vitesse initiale", "Elle ne nécessite pas de connaître [S]"]),
    single("Quelle est l'équation de Lineweaver-Burk ?", "D", "L'équation de Lineweaver-Burk est 1/v₀ = (Km/Vmax) × (1/[S]) + 1/Vmax.", ["1/v₀ = Vmax/Km × [S]", "v₀ = Km/Vmax + 1/[S]", "1/v₀ = Vmax × [S] + Km", "1/v₀ = (Km/Vmax) × (1/[S]) + 1/Vmax"]),
    single("Dans la représentation de Lineweaver-Burk, que représente l'ordonnée à l'origine ?", "B", "L'ordonnée à l'origine (quand 1/[S] = 0) est égale à 1/Vmax.", ["Km", "1/Vmax", "-1/Km", "Vmax"]),
    single("Dans la représentation de Lineweaver-Burk, que représente l'intersection de la droite avec l'axe des abscisses (extrapolée) ?", "C", "L'intersection avec l'axe des abscisses correspond à -1/Km.", ["Vmax", "1/Vmax", "-1/Km", "Km directement (valeur positive)"]),
    multi("Quels facteurs influencent la vitesse d'une réaction enzymatique (v₀) ?", ["A", "B", "C", "D"], "La vitesse dépend de la concentration en substrat, du pH, de la température et de la présence d'effecteurs (activateurs/inhibiteurs).", ["La concentration en substrat [S]", "Le pH du milieu", "La température", "La présence d'effecteurs (activateurs ou inhibiteurs)", "La couleur de la solution"]),
    single("Pourquoi la vitesse initiale d'une réaction enzymatique diminue-t-elle au cours du temps ?", "B", "Le substrat s'épuise progressivement, l'enzyme peut devenir non saturée, se dénaturer ou perdre ses cofacteurs.", ["L'enzyme se multiplie", "Le substrat s'épuise et l'enzyme peut se dénaturer", "Le produit catalyse la réaction inverse uniquement", "La température diminue automatiquement"]),
    single("Un enzyme présente trois substrats possibles avec Km1 < Km2 < Km3. Quel est l'ordre d'affinité correspondant ?", "A", "L'affinité est inversement proportionnelle au Km : affinité1 > affinité2 > affinité3.", ["Affinité1 > affinité2 > affinité3", "Affinité1 < affinité2 < affinité3", "Les trois affinités sont égales", "L'affinité ne dépend pas du Km"]),
  ],
  exam: { titre_fr: "Examen chronométré — Labo 13 : Cinétique enzymatique", duration_seconds: 1_500 },
};
