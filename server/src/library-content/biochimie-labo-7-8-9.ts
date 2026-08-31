import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

// Chapitre: titre_fr="Centrifugation et fluides biologiques", titre_en="Centrifugation and Biological Fluids",
// description_fr="Principe de la centrifugation, types de prélèvements sanguins et tubes de collecte",
// description_en="Centrifugation principle, blood sampling types and collection tubes", icone="🧫"
const LAB7_COURSE = `# Labo 7 — Centrifugation et fluides biologiques

## 1. Principe de la centrifugation
- La centrifugation est une méthode de séparation basée sur la **densité** des particules en suspension.
- Vitesse de sédimentation σ = (d² · Δρ · ω² · r) / (18 · η)
- **Directement proportionnelle** à : d (diamètre de la particule), ρ (densité), ω (vitesse angulaire, en RPM/xg selon le rotor), r (rayon du rotor).
- **Inversement proportionnelle** à : η (viscosité du milieu).

## 2. Fluides biologiques : sérum, plasma, LCR
- Trois types de prélèvement sanguin :
  - **Sang veineux** : la majorité des analyses.
  - **Sang artériel** : gaz du sang (ABG), méthode d'Astrup.
  - **Sang capillaire** : test rapide au doigt (glycémie, tests POC comme SARS-CoV-2 Ag).
- Après collecte, le sang total peut être traité de trois façons : **sang total**, **plasma**, **sérum**.
- Sans anticoagulant + centrifugation → le sang coagule (caillot) et se sépare en **sérum** (surnageant jaune) + caillot.
- Avec anticoagulant + centrifugation → séparation en **plasma** (contient les facteurs de coagulation, dont le fibrinogène) + éléments figurés.
- Le plasma contient donc le fibrinogène, contrairement au sérum qui en est dépourvu (consommé lors de la coagulation).

## 3. Tubes de prélèvement (code couleur)
| Anticoagulant | Couleur bouchon | Spécimen | Centrifugation | Usage principal |
| --- | --- | --- | --- | --- |
| Aucun (± activateur de coagulation, gel séparateur) | Jaune/orange/rouge | Sérum | Optionnelle | Biochimie, ionogramme |
| Héparine (Li/NH4+) | Vert | Plasma | Oui | Biochimie, ionogramme, gaz du sang |
| EDTA (Na+/K+/Li+) | Violet | Sang total | Oui | NFS (hémogramme), Hb, HbA1c |
| Citrate (Na+/K+) | Bleu | Plasma | Oui | Tests de coagulation |
| Citrate | Noir | Sang total | Non | VS (vitesse de sédimentation) |
| EDTA/Oxalate + fluorure | Gris | Plasma | Oui | Glycémie (inhibe la glycolyse) |
| ACD (acide citrique + citrate + dextrose) | Jaune | Sang total | Non | Dons de sang |

## Points à retenir
- La vitesse de sédimentation augmente avec la taille et la densité de la particule, et diminue si le milieu est visqueux.
- Sérum = plasma moins le fibrinogène (et les autres facteurs de coagulation consommés dans le caillot).
- Le tube au fluorure de sodium (gris) inhibe la glycolyse pour préserver la glycémie mesurée.
- Le tube EDTA (violet) est le tube de référence pour la numération formule sanguine (NFS).`;

export const LAB7_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Centrifugation et fluides biologiques",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 7",
    content_fr: LAB7_COURSE,
  },
  qcm: [
    single("La vitesse de sédimentation d'une particule lors d'une centrifugation est directement proportionnelle à :", "B", "La formule de sédimentation σ = (d²·Δρ·ω²·r)/(18·η) montre une proportionnalité directe avec le diamètre, la densité, la vitesse angulaire et le rayon du rotor, et inverse avec la viscosité.", ["La viscosité du milieu uniquement", "Le diamètre et la densité de la particule", "Le temps de centrifugation uniquement", "La température ambiante uniquement"]),
    single("Une augmentation de la viscosité du milieu (η) a pour effet :", "B", "η est au dénominateur de la formule : plus le milieu est visqueux, plus la sédimentation est lente.", ["D'accélérer la sédimentation", "De ralentir la sédimentation", "De n'avoir aucun effet", "D'inverser le sens de sédimentation"]),
    single("Quel type de prélèvement sanguin est utilisé pour l'analyse des gaz du sang (ABG) ?", "B", "Le sang artériel, prélevé selon la méthode d'Astrup, est utilisé pour l'analyse des gaz du sang.", ["Le sang veineux", "Le sang artériel", "Le sang capillaire", "Le sang du cordon ombilical"]),
    single("Quelle est la principale différence de composition entre le sérum et le plasma ?", "B", "Le plasma contient le fibrinogène et les facteurs de coagulation ; le sérum en est dépourvu car ils sont consommés lors de la formation du caillot.", ["Le sérum contient plus de globules rouges", "Le plasma contient le fibrinogène, absent du sérum", "Le sérum est obtenu sans centrifugation", "Le plasma ne contient pas d'eau"]),
    multi("Pour obtenir du sérum à partir d'un prélèvement sanguin, il faut :", ["A", "C"], "L'absence d'anticoagulant permet la coagulation ; la centrifugation sépare ensuite le caillot du surnageant (sérum).", ["Ne pas ajouter d'anticoagulant", "Ajouter de l'héparine", "Centrifuger après coagulation", "Ajouter de l'EDTA"]),
    single("Quel tube (couleur de bouchon) est le tube de référence pour la numération formule sanguine (NFS) ?", "C", "Le tube EDTA (violet) préserve la morphologie cellulaire et est utilisé pour l'hémogramme, l'hémoglobine et l'HbA1c.", ["Tube vert (héparine)", "Tube bleu (citrate)", "Tube violet (EDTA)", "Tube gris (fluorure)"]),
    single("Pourquoi utilise-t-on un tube contenant du fluorure de sodium pour doser la glycémie ?", "B", "Le fluorure inhibe la glycolyse des globules rouges, évitant une chute artificielle de la glycémie entre le prélèvement et le dosage.", ["Il accélère la coagulation", "Il inhibe la glycolyse et préserve le taux de glucose", "Il colore le plasma en jaune", "Il élimine le fibrinogène"]),
    single("Quel anticoagulant est utilisé dans le tube destiné aux tests de coagulation (bouchon bleu) ?", "A", "Le citrate de sodium/potassium chélate le calcium de façon réversible, permettant de tester la coagulation après recalcification en laboratoire.", ["Le citrate", "L'héparine", "L'EDTA", "Le fluorure"]),
    single("Le tube utilisé pour la vitesse de sédimentation (VS) se distingue des autres tubes au citrate par :", "B", "Le tube VS (bouchon noir) contient du citrate mais n'est pas centrifugé : la sédimentation naturelle du sang total est justement ce qui est mesurée.", ["Il contient de l'EDTA en plus", "Il n'est pas centrifugé, contrairement au tube bleu", "Il est toujours centrifugé en premier", "Il ne contient aucun anticoagulant"]),
    single("Le sang capillaire (prélèvement au doigt) est typiquement utilisé pour :", "C", "Le sang capillaire sert aux tests rapides au point de service (POC), comme la glycémie capillaire ou les tests antigéniques rapides.", ["Les tests de coagulation complets", "Les gaz du sang", "Les tests rapides (glycémie, tests POC)", "L'électrophorèse des protéines sériques"]),
  ],
  exam: { titre_fr: "Examen chronométré — Centrifugation et fluides biologiques", duration_seconds: 900 },
};

// Chapitre: titre_fr="Chromatographie et séparation des acides aminés", titre_en="Chromatography and Amino Acid Separation",
// description_fr="Principes de la chromatographie, types de mécanismes de séparation et chromatographie sur papier",
// description_en="Chromatography principles, separation mechanisms and paper chromatography", icone="🧪"
const LAB8_COURSE = `# Labo 8 — Chromatographie et séparation des acides aminés

## 1. Principe général
- La chromatographie est une méthode de séparation basée sur la **distribution des analytes** entre une **phase stationnaire** (SP) fixée sur un support (colonne ou plaque/papier) et une **phase mobile** (MP) qui migre à travers elle.
- La phase stationnaire peut être solide ou liquide (fixée sur le support) ; la phase mobile peut être liquide ou gazeuse.
- Le mélange d'analytes à séparer est déposé au sein de la phase mobile.

## 2. Classifications
- **Selon le support** : chromatographie sur colonne, ou chromatographie planaire (couche mince/TLC, papier).
- **Selon l'état d'agrégation des phases** : GLC (gaz-liquide), GSC (gaz-solide), LLC (liquide-liquide), LSC (liquide-solide).
- **Selon le mécanisme d'interaction analyte/phases** : adsorption, partition, échange d'ions, exclusion stérique (gel filtration/tamis moléculaire), affinité.

## 3. Les cinq mécanismes de séparation

| # | Mécanisme | Base de séparation | Phases (SP / MP) | Rémanence |
| --- | --- | --- | --- | --- |
| 1 | Adsorption | Polarité | SP solide, MP liquide | Si l'analyte a une polarité proche de la SP (élution si proche de la MP) |
| 2 | Partition | Polarité / solubilité | SP et MP liquides non miscibles, polarités opposées | Si l'analyte est plus soluble dans la SP (élution si plus soluble dans la MP) |
| 3 | Échange d'ions | Charge | SP solide (résine échangeuse), MP liquide | Si l'analyte a une charge opposée à la SP (élution si charge proche de la SP) |
| 4 | Exclusion stérique (tamis moléculaire) | Taille | SP solide poreuse (gel), MP liquide | Petites molécules retenues (pénètrent les pores) ; grosses molécules éluées en premier |
| 5 | Affinité | Reconnaissance spécifique ligand/partenaire (enzyme-substrat, récepteur-hormone, antigène-anticorps, ADN-protéine liante) | — | Élution par excès de ligand libre ; le partenaire le plus spécifique est le dernier élué |

## 4. Travail expérimental : séparation d'acides aminés par chromatographie sur papier
- Phase stationnaire : cellulose du papier (–OH, hydrophile) → forte polarité.
- Phase mobile : mélange de solvants organiques → polarité plus faible.
- Après migration, révélation par **ninhydrine** : réaction avec les groupes amine (–NH2) des acides aminés → coloration **violette**.
- Facteur de rétention : **Rf = distance parcourue par l'analyte / distance parcourue par la phase mobile** (toujours < 1).
- Exemple à trois acides aminés : Tyrosine (polaire), Aspartate (polaire), Leucine (hydrophobe) — la Leucine migre le plus loin (Rf le plus élevé) car sa faible polarité la rend plus soluble dans la phase mobile organique.

## Points à retenir
- La séparation repose toujours sur une différence d'affinité relative entre phase stationnaire et phase mobile.
- Rf est spécifique à un couple analyte/système de solvant donné, toujours compris entre 0 et 1.
- La ninhydrine est le réactif de révélation classique des acides aminés en chromatographie sur papier/couche mince.`;

export const LAB8_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Chromatographie et séparation des acides aminés",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 8",
    content_fr: LAB8_COURSE,
  },
  qcm: [
    single("La chromatographie sépare les analytes en fonction de :", "B", "La séparation repose sur la distribution différentielle des analytes entre phase stationnaire et phase mobile.", ["Leur seule masse molaire", "Leur distribution entre phase stationnaire et phase mobile", "Leur couleur uniquement", "Leur température de fusion"]),
    single("Dans la chromatographie d'adsorption, la séparation repose sur :", "B", "L'adsorption sépare les analytes selon leur polarité relative vis-à-vis d'une phase stationnaire solide.", ["La taille des molécules", "La polarité des analytes", "Leur charge électrique", "Leur affinité spécifique pour un ligand"]),
    single("En chromatographie par échange d'ions, un analyte est retenu (rémanence) lorsque :", "C", "La rémanence en échange d'ions survient quand la charge de l'analyte est opposée à celle de la phase stationnaire (résine échangeuse), créant une attraction électrostatique.", ["Il est de grande taille", "Il a la même charge que la phase stationnaire", "Il a une charge opposée à la phase stationnaire", "Il est apolaire"]),
    single("La chromatographie d'exclusion stérique (tamis moléculaire) sépare les molécules selon :", "B", "Les petites molécules pénètrent les pores du gel et sont retardées ; les grosses molécules, exclues, sont éluées en premier.", ["Leur charge électrique", "Leur taille", "Leur polarité", "Leur affinité spécifique"]),
    single("En chromatographie d'affinité, quel type d'interaction est exploité ?", "C", "L'affinité repose sur des interactions hautement spécifiques (enzyme-substrat, antigène-anticorps, récepteur-ligand).", ["Une différence de taille", "Une différence de charge globale", "Une reconnaissance spécifique ligand-partenaire", "Une différence de point d'ébullition"]),
    single("Dans la séparation d'acides aminés par chromatographie sur papier, la phase stationnaire est :", "A", "La cellulose du papier, riche en groupes hydroxyle, constitue une phase stationnaire polaire et hydrophile.", ["La cellulose du papier (polaire)", "Un mélange de solvants organiques", "Une résine échangeuse d'ions", "Un gel de silice apolaire"]),
    single("Quel réactif est utilisé pour révéler les acides aminés séparés sur une plaque de chromatographie sur papier ?", "B", "La ninhydrine réagit avec les groupes amine des acides aminés pour donner une coloration violette caractéristique.", ["Le bleu de Coomassie", "La ninhydrine", "Le réactif de Biuret", "Le chlorure de baryum"]),
    single("Le facteur de rétention Rf est défini comme :", "B", "Rf = distance parcourue par l'analyte / distance parcourue par le front de la phase mobile ; il est toujours inférieur à 1.", ["La distance parcourue par la phase mobile divisée par celle de l'analyte", "La distance parcourue par l'analyte divisée par celle de la phase mobile", "Le temps de migration total", "La concentration de l'analyte déposé"]),
    single("Dans l'exemple à trois acides aminés (Tyr polaire, Asp polaire, Leu hydrophobe) séparés sur phase mobile organique, quel acide aminé migre le plus loin ?", "C", "La leucine, hydrophobe, est plus soluble dans la phase mobile organique peu polaire, donc migre le plus loin (Rf le plus élevé).", ["La tyrosine", "L'aspartate", "La leucine", "Les trois migrent à la même distance"]),
    multi("La chromatographie de partition se caractérise par :", ["A", "C"], "En partition, SP et MP sont deux liquides non miscibles de polarités opposées ; la rémanence dépend de la solubilité relative de l'analyte dans chacune des deux phases.", ["Une phase stationnaire et une phase mobile toutes deux liquides", "Une phase stationnaire obligatoirement solide", "Une séparation basée sur la solubilité/polarité", "Une séparation basée uniquement sur la taille"]),
  ],
  exam: { titre_fr: "Examen chronométré — Chromatographie et acides aminés", duration_seconds: 900 },
};

// Chapitre: titre_fr="Protéines : dialyse et électrophorèse", titre_en="Proteins: Dialysis and Electrophoresis",
// description_fr="Principes de la dialyse, applications médicales et électrophorèse des protéines sériques",
// description_en="Dialysis principles, medical applications and serum protein electrophoresis", icone="🩹"
const LAB9_COURSE = `# Labo 9 — Protéines : dialyse et électrophorèse

## 1. La dialyse
- Méthode de séparation basée sur deux phénomènes à travers une **membrane semi-perméable** :
  - **Osmose** : migration du solvant, du milieu le moins concentré vers le plus concentré.
  - **Diffusion** : migration des solutés (petites molécules), du milieu le plus concentré vers le moins concentré.
- Milieu interne (sac de dialyse) : contient les protéines (trop grosses pour traverser la membrane) et les petits solutés (urée, créatinine, etc.).
- Milieu externe (dialysat) : reçoit les petits solutés qui diffusent à travers la membrane, jusqu'à l'équilibre.
- Facteurs influençant la vitesse : le temps, la température, l'agitation.
- **Différence avec la précipitation** : le dialysat reste liquide et transparent, alors qu'une précipitation donne un mélange opaque.

## 2. Applications médicales de la dialyse
- Indication majeure : insuffisance rénale terminale (ESRD) → épuration extra-rénale.
- **Hémodialyse** : utilise une membrane artificielle (dialyseur externe).
- **Dialyse péritonéale** : utilise le péritoine du patient comme membrane semi-perméable naturelle.

## 3. Travail expérimental : dialyse d'un mélange albumine/sulfate d'ammonium
- À t = 0, le sac de dialyse contient : albumine, NH4+, SO4²⁻.
- À t = 1 (après équilibre), le sac ne retient que l'**albumine** ; le dialysat externe contient **NH4+ et SO4²⁻** (petits ions ayant diffusé).
- Tests de détection utilisés :

| Analyte | Réactif | Aspect du réactif | Résultat positif |
| --- | --- | --- | --- |
| Albumine | Biuret (CuSO4) | Bleu | Coloration violette (liaison peptidique) |
| NH4+ | Nessler (K2HgI4) | Jaune | Précipité brun |
| SO4²⁻ | Chlorure de baryum (BaCl2) | Incolore | Précipité blanc |

## 4. L'électrophorèse (ELFO)
- Méthode de séparation des molécules chargées sous l'effet d'un **champ électrique**, selon trois facteurs : la **charge**, la **taille** et la **conformation** des particules.
- Deux grands types : ELFO en solution (liquide) ou ELFO de zone (sur support solide : papier, acétate de cellulose, gel).
- Gels utilisés :
  - **Agarose** : grands pores, non toxique, utilisé pour les acides nucléiques.
  - **Polyacrylamide** : petits pores, toxique à l'état non polymérisé, utilisé pour les protéines (PAGE natif, puis SDS-PAGE).
- **SDS (sodium dodecyl sulfate)** : détergent chargé négativement qui dénature les protéines (linéarise leur conformation) et masque leur charge propre → la séparation en SDS-PAGE ne dépend plus que de la **taille**.

## 5. Facteurs influençant la migration électrophorétique
- Charge des particules (une charge plus élevée migre plus vite).
- Taille des particules (les petites particules migrent plus vite ; les grosses restent près du dépôt).
- Conformation (une particule compacte migre plus vite qu'une particule allongée de même masse).
- Taille des pores du gel, intensité du courant électrique, température (plus la température augmente, plus la migration est rapide).
- Convention : le pôle positif est l'**anode**, le pôle négatif est la **cathode**.

## 6. Application médicale : électrophorèse des protéines sériques
L'électrophorégramme sépare les protéines sériques en bandes, de l'anode vers la cathode : **albumine, α1, α2, β, γ**.

| Fraction | Protéines principales |
| --- | --- |
| Albumine | Albumine sérique |
| α1 | α1-antitrypsine, TBG (thyroxine binding globulin) |
| α2 | Haptoglobine, céruloplasmine (transporteur du cuivre) |
| β | Transferrine, composants du complément (C3, C4) |
| γ | Immunoglobulines (IgG, IgM, IgA, IgE) |

## Points à retenir
- La dialyse sépare selon la taille (via une membrane semi-perméable) ; l'électrophorèse sépare selon la charge, la taille et la conformation (via un champ électrique).
- Le SDS élimine l'effet de charge et de conformation en SDS-PAGE : seule la taille détermine alors la migration.
- L'électrophorèse des protéines sériques est un outil diagnostique classique (ex. hypogammaglobulinémie, pic monoclonal dans la zone γ).`;

export const LAB9_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Protéines : dialyse et électrophorèse",
    source_label: "Notes de laboratoire personnelles — Biochimie pratique, Lab 9",
    content_fr: LAB9_COURSE,
  },
  qcm: [
    single("La dialyse repose sur deux phénomènes physiques à travers une membrane semi-perméable, lesquels ?", "B", "L'osmose (migration du solvant) et la diffusion (migration des solutés) sont les deux phénomènes en jeu dans la dialyse.", ["Filtration et centrifugation", "Osmose et diffusion", "Adsorption et partition", "Précipitation et floculation"]),
    single("Dans le sac de dialyse contenant initialement albumine + NH4+ + SO4²⁻, qu'observe-t-on à l'équilibre ?", "B", "Les petits ions (NH4+, SO4²⁻) diffusent à travers la membrane vers le dialysat externe ; l'albumine, trop grosse, reste dans le sac.", ["Tout reste dans le sac, rien ne diffuse", "Les petits ions diffusent vers l'extérieur, l'albumine reste dans le sac", "L'albumine diffuse vers l'extérieur", "Le sac se vide complètement"]),
    single("Quel réactif permet de détecter la présence d'albumine par une coloration violette ?", "A", "Le réactif de Biuret (CuSO4) réagit avec les liaisons peptidiques des protéines pour donner une coloration violette.", ["Le réactif de Biuret", "Le réactif de Nessler", "Le chlorure de baryum", "La ninhydrine"]),
    single("Quelle est l'application médicale principale de la dialyse ?", "C", "La dialyse (hémodialyse ou péritonéale) est utilisée pour épurer le sang en cas d'insuffisance rénale terminale (ESRD).", ["Le diagnostic des infections", "La séparation des groupes sanguins", "L'épuration du sang en cas d'insuffisance rénale (ESRD)", "La mesure de la glycémie"]),
    single("Quelle est la différence essentielle entre l'hémodialyse et la dialyse péritonéale ?", "B", "L'hémodialyse utilise une membrane artificielle externe (dialyseur), tandis que la dialyse péritonéale utilise le péritoine du patient comme membrane naturelle.", ["L'hémodialyse n'utilise aucune membrane", "L'hémodialyse utilise une membrane artificielle, la dialyse péritonéale utilise le péritoine", "La dialyse péritonéale nécessite une machine externe", "Elles sont strictement identiques"]),
    single("L'électrophorèse sépare les molécules selon trois facteurs principaux, lesquels ?", "B", "La charge, la taille et la conformation des particules déterminent leur vitesse de migration dans un champ électrique.", ["Le pH, la température et le volume", "La charge, la taille et la conformation", "La couleur, la densité et la masse", "Le pKa, la polarité et la solubilité"]),
    single("Quel type de gel est utilisé en électrophorèse pour séparer les acides nucléiques, et pourquoi ?", "A", "L'agarose forme de grands pores adaptés aux grandes molécules d'acides nucléiques et n'est pas toxique.", ["L'agarose, car ses pores sont grands et il est non toxique", "Le polyacrylamide, car ses pores sont petits", "Le SDS, car il dénature les acides nucléiques", "Le gel de silice, car il est inerte"]),
    single("Quel est le rôle du SDS (sodium dodecyl sulfate) en SDS-PAGE ?", "B", "Le SDS dénature les protéines et masque leur charge intrinsèque : la migration ne dépend alors plus que de la taille.", ["Il colore les protéines en bleu", "Il dénature les protéines et masque leur charge, ne laissant que la taille comme facteur de migration", "Il accélère la coagulation des protéines", "Il précipite sélectivement les protéines"]),
    single("Dans l'électrophorèse des protéines sériques, dans quelle zone migrent les immunoglobulines (IgG, IgM, IgA) ?", "D", "Les immunoglobulines constituent la fraction γ (gamma) de l'électrophorégramme sérique.", ["Albumine", "α1", "β", "γ"]),
    single("Lors d'une migration électrophorétique, une augmentation de la température a pour effet :", "A", "Une température plus élevée augmente l'agitation moléculaire et accélère la migration électrophorétique.", ["D'accélérer la migration", "De ralentir la migration", "De n'avoir aucun effet", "D'inverser le sens de migration"]),
  ],
  exam: { titre_fr: "Examen chronométré — Dialyse et électrophorèse", duration_seconds: 900 },
};
