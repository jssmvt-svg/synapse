import type { LibraryChapterSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

// Génétique médicale — Année 2, semestre 1 (UMFT, Assoc. Prof. D. Stoicanescu).
// Synthèses fidèles aux diapos Lecture 1 et Lecture 2 ; termes anglais de
// l'examen en gras ou entre parenthèses.

const GEN_L1_COURSE = `# Rôle de la génétique en médecine

> Lecture 1 — synthèse. Les termes anglais (langue de l'examen) sont donnés entre parenthèses.

## 1. Définition
La **génétique médicale** (*medical genetics*) est la spécialité médicale qui s'occupe de la **prévention, du diagnostic et de la prise en charge** des patients (et de leurs familles) atteints de **maladies génétiques**.
- Ces maladies peuvent être dues à des **mutations**, à des **facteurs non génétiques**, ou à l'**interaction des deux**.
- Autrefois petite sous-spécialité consacrée à quelques maladies héréditaires rares, elle est devenue une **spécialité reconnue**, utile au diagnostic et à la prise en charge de très nombreuses pathologies.

### Bases moléculaires (à retenir)
- La capacité de l'**ADN à se répliquer** est la base de la **transmission héréditaire**.
- L'ADN porte le **code génétique**, qui contrôle le développement et le métabolisme cellulaires en **contrôlant la synthèse des ARN**.
- La **séquence des nucléotides** de l'ADN et de l'ARN détermine la **composition des protéines**, donc leur **fonction**.

## 2. Domaines d'intérêt (*fields of interest*)
Niveaux d'étude :
- étude des **chromosomes** et des liens entre **anomalies chromosomiques** et maladies (cytogénétique) ;
- étude de la **structure et de la fonction des gènes** (**génétique moléculaire et biochimique**) et application au diagnostic.

Ont aussi une importance médicale : la **génétique des populations**, la **génétique du développement** et l'**immunogénétique** (compréhension et prévention des maladies).

## 3. Applications aux soins
| Application | Ce qu'il faut savoir |
|---|---|
| **Conseil génétique** (*genetic counseling*) | Donne l'information sur le risque **+ une fonction de soutien** ; devient une profession de santé à part entière dans certains pays |
| **Dépistage de population** (*population screening*) | Identifier les personnes à risque de **développer ou de transmettre** une maladie génétique ; initiative majeure de **santé publique** |
| **Diagnostic prénatal** (*prenatal diagnosis*) | Probablement **le principal domaine** d'application de la génétique aux soins aujourd'hui |

En médecine de l'adulte : de nombreuses maladies fréquentes (**maladie coronarienne, hypertension, diabète**…) ont une **composante génétique importante** → la prévention serait plus efficace si elle ciblait des **groupes à haut risque génétiquement définis**.

## 4. Classification des maladies génétiques
[[visual:y2/genetic-disorders]]

### 4.1 Maladies monogéniques (*single gene disorders*)
- Causées par des **gènes mutants** ; une **seule erreur critique** dans l'information génétique.
- La mutation peut toucher **un seul chromosome** de la paire (allèle normal sur l'homologue) ou **les deux** (les deux allèles).
- **Fréquence** : individuellement rares (≈ 1/500 à 1/1000, souvent bien moins), mais **collectivement importantes** :
  - maladies monogéniques graves en pédiatrie : **≈ 1 / 300 naissances vivantes** ;
  - prévalence sur la vie entière : **1 / 50** → des millions de patients dans le monde.
- **Hérédité mitochondriale** : un petit nombre de gènes sont mitochondriaux (ex. **neuropathie optique héréditaire**, **épilepsie myoclonique**, **encéphalomyopathie**). Ces maladies ont une **transmission maternelle** et sont considérées comme un **type particulier de maladies monogéniques**.

### 4.2 Maladies chromosomiques (*chromosome disorders*)
- Dues à un **excès ou un déficit des gènes** portés par des **chromosomes entiers ou des segments** de chromosomes.
- **Numériques ou structurales**, touchant les **autosomes**, les **chromosomes sexuels**, ou les deux.
- Grande part : des **pertes fœtales** (*reproductive wastage*), des **malformations congénitales**, du **retard mental** ; rôle important dans la **pathogénie des cancers**.
- Fréquence : **≈ 7 / 1000 naissances vivantes** et **≈ 1/2 des avortements spontanés du 1er trimestre**.

### 4.3 Maladies multifactorielles (*multifactorial inheritance*)
- Combinaison de **plusieurs mutations** qui ensemble produisent ou **prédisposent** à un défaut grave, **± facteurs environnementaux**.
- Responsables de malformations congénitales et de nombreuses maladies **fréquentes de l'adulte** (début tardif) : **hypertension, diabète, cancer, psychose maniaco-dépressive, schizophrénie, maladie coronarienne**…
- **Agrégation familiale** (elles « tournent » dans les familles) **sans** les arbres généalogiques typiques des maladies monogéniques.
- Impact : **5 % de la population pédiatrique** à **plus de 60 % de la population totale**.

## 5. Brève histoire de la génétique médicale
[[visual:y2/genetics-timeline]]

| Année | Qui | Apport |
|---|---|---|
| **1866** | **Gregor Mendel** | Lois de l'hérédité ; introduit les termes **dominant** et **récessif** (non reconnu à l'époque : chromosomes et méiose pas encore découverts) |
| **1900** | **Correns, de Vries, Tschermak** | **Redécouverte** du mendélisme |
| **1902** | **Bateson** | Crée le terme « **Genetics** », décrit le **linkage** |
| **1902** | **Garrod** | Concept d'**erreurs innées du métabolisme** ; 1re étudiée : l'**alcaptonurie** (trouble du métabolisme de la phénylalanine et de la tyrosine), supposée mendélienne |
| **1909** | **Wilhelm Johannsen** | « facteur héréditaire » = **gène** |
| **1910-1911** | **Thomas Hunt Morgan** | Drosophile : gènes **sur les chromosomes**, **linkage**, **crossing-over** — Nobel **1933** |
| **1953** | **Watson et Crick** | Modèle de la **structure de l'ADN** — Nobel **1962** |
| **1956** | **Tjio et Levan** | Nouvelles techniques ; **nombre correct de chromosomes humains (46)** |
| **1996** | **Ian Wilmut** (Écosse) | **Premier clonage d'un mammifère** |

Depuis le milieu des années 1970 : la **génétique moléculaire** est transformée par les techniques de manipulation de l'ADN — découverte des **endonucléases de restriction** (isolement de petits fragments d'ADN) puis **clonage de l'ADN**.

## À retenir
- 3 grands groupes : **monogéniques** (+ mitochondriales), **chromosomiques**, **multifactorielles**.
- Chiffres clés : monogéniques **1/300** (pédiatrie) et **1/50** (vie entière) ; chromosomiques **7/1000** et **½ des fausses couches du 1er trimestre** ; multifactorielles **5 % → > 60 %**.
- Mitochondriales = **transmission maternelle**.
- Applications : **conseil génétique, dépistage, diagnostic prénatal** (le principal).`;

const GEN_L2_COURSE = `# Structure et organisation du génome humain — ADN, réplication, ARN

> Lecture 2 — synthèse. Termes anglais entre parenthèses.

## 1. L'ADN, support de l'information génétique
L'ADN est une **macromolécule polymère**, un enchaînement linéaire de **désoxyribonucléotides**. L'information génétique est préservée par sa structure.

### Le nucléotide
3 composants : une **base azotée**, un **sucre (désoxyribose)** et un **phosphate**. Sucre + phosphate relient chaque base aux bases voisines du même brin (**squelette sucre-phosphate**).
- **Purines** : **adénine (A)**, **guanine (G)** (deux cycles).
- **Pyrimidines** : **cytosine (C)**, **thymine (T)** dans l'ADN, **uracile (U)** dans l'ARN (un cycle).
- Ces 4 nucléotides forment l'« **alphabet à quatre lettres** » de l'hérédité, **universel** chez les êtres vivants.
- Nucléoside = base + sucre (sans phosphate).

### Structure primaire
L'**ordre des bases** = **séquence d'ADN** ; elle donne les instructions exactes pour construire un organisme et ses caractères. Elle spécifie la **séquence des acides aminés** des chaînes polypeptidiques.

### Structure secondaire : la double hélice (Watson-Crick, 1953)
[[visual:y2/dna-double-helix]]

- **Deux chaînes polynucléotidiques**, chaque nucléotide d'une chaîne lié par **liaisons hydrogène** au nucléotide en face.
- Appariement **purine ↔ pyrimidine** : **A–T** et **G–C** → les deux brins sont **complémentaires**.
- Brins **antiparallèles** (un 5'→3', l'autre 3'→5') ; extrémité **5' phosphate**, extrémité **3' hydroxyle**.
- Repères B-ADN : diamètre **≈ 2 nm**, pas d'hélice **3,4 nm**, **0,34 nm** entre deux paires de bases, **grand sillon** et **petit sillon**.

**Règle de Chargaff (exercice classique)** : A = T et G = C. Si un ADN contient **20 % de T**, alors A = 20 %, donc G + C = 60 % → **G = 30 %**.

## 2. Polymorphisme de l'ADN : formes A, B, Z
[[visual:y2/dna-forms]]

La conformation dépend de la **composition en bases** et des **conditions physiques** (hydratation, sels), via la conformation du sucre (C2'-endo / C3'-endo) et l'orientation de la base par rapport au sucre.

| Forme | Sens | Paires/tour | Particularités |
|---|---|---|---|
| **B-ADN** | droite | **10** (10,4) | Forme **physiologique** la plus fréquente (faible force ionique, forte hydratation) ; bases ≈ **perpendiculaires** à l'axe ; **grand + petit sillon** |
| **A-ADN** | droite | **11** | Forte concentration de **cations** ou **faible hydratation (< 65 %)** ; grand sillon étroit et profond, petit sillon large et peu profond |
| **Z-ADN** | **gauche** | **12** | Régions **riches en G-C**, alternance **purine/pyrimidine** ; plus long et plus fin, **zigzag**, **un seul sillon** étroit et profond |

Autres formes : **C-ADN** (forte déshydratation, 9,3 pb/tour), **D-ADN** (8 pb/tour) et **E-ADN** (7,5 pb/tour), sans guanine.
- Les changements de forme modifient la **liaison aux protéines** et peuvent jouer dans la **régulation** de la réplication/transcription.
- **ADN triplex** (3 brins) : le proto-oncogène **c-myc** en contient (contrôle de la quantité de protéine produite).
- **ADN quadruplex** : dans les **télomères** (et hors télomères, lié à la progression du cycle cellulaire) ; c-myc peut aussi en former.

## 3. ADN mitochondrial
- Chaque cellule a des centaines de mitochondries, chacune avec plusieurs copies d'une **petite molécule circulaire**.
- Taille : **0,03 %** du plus petit chromosome nucléaire ; code **13 gènes structuraux** + des gènes d'ARN structuraux.
- Se **réplique dans la mitochondrie** (indépendamment de l'ADN nucléaire).
- **Hérédité maternelle** : l'ovule est riche en mitochondries, le spermatozoïde en a peu et elles ne persistent pas → la **mère transmet son ADNmt à tous ses enfants**.

## 4. La réplication de l'ADN
[[visual:y2/replication-fork]]

- Le génome entier doit être répliqué **avant la division**, en **phase S** (fin de l'interphase), vite et avec une **extrême fidélité**.
- **Semi-conservative** : les brins se séparent, chacun sert de **matrice** ; chaque nouvelle molécule = **1 brin ancien + 1 brin nouveau**.

### Les acteurs
| Acteur | Rôle |
|---|---|
| **Hélicase** | Déroule partiellement la double hélice → **fourche de réplication** ; la zone ouverte forme une **bulle de réplication** (visible en ME) |
| **Protéines SSB** (*single-strand binding*) | Stabilisent les simples brins (s'enroulent autour d'un cœur protéique tétramérique), empêchent leur ré-appariement et les **épingles à cheveux** |
| **Topoisomérase** | Empêche l'emmêlement/la torsion (*tangling, twisting, knotting*) en amont ; coupe puis **ressoude** les brins |
| **Amorce (primer) d'ARN** | Point de départ de la synthèse |
| **ADN polymérase** | Lit la matrice et ajoute les nucléotides complémentaires (**A–T, G–C**) |
| **ADN pol I** | **Retire les amorces d'ARN** et comble avec de l'ADN |
| **ADN ligase** | **Relie les fragments d'Okazaki** (forme les liaisons **phosphodiester** manquantes) |
| Endo-/exonucléases | Reconnaissent, retirent et remplacent les nucléotides incorrects (fidélité) |

### Sens de synthèse (point d'examen)
- La matrice est **toujours lue 3' → 5'** ; le nouveau brin est **synthétisé 5' → 3'**.
- **Brin direct (continu)** : synthétisé en continu dans le sens d'avancée de la fourche.
- **Brin indirect (discontinu)** : synthétisé à contre-sens en **fragments d'Okazaki**, ensuite soudés par la **ligase**.

## 5. Les ARN : structure et fonctions
- Nucléotides à **ribose** ; bases **A, G, C, U** (l'**uracile remplace la thymine**) ; **simple brin**.
- Aide l'ADN à réaliser la **synthèse protéique** selon l'information stockée.

| Type | Rôle |
|---|---|
| **ARNm** (messager) | Copie d'un segment de gène ; porte la séquence des acides aminés vers le cytoplasme. **Le code génétique se lit sur l'ARNm**, pas sur l'ADN |
| **ARNr** (ribosomique) | + protéines → **ribosome**, site et machinerie de la synthèse protéique |
| **ARNt** (de transfert) | ≈ **75 nucléotides** ; porte **un acide aminé** à une extrémité et un **anticodon** (triplet) à l'autre ; se replie en sections double-hélice ; « lit » les **codons** de l'ARNm par appariement |
| **snRNA** (petits ARN nucléaires) | **Maturation** des transcrits primaires dans le noyau |
| **snoRNA** (petits ARN nucléolaires) | Fabrication des **ribosomes** (découpe du précurseur), épissage alternatif, **matrice de synthèse des télomères** ; chez les vertébrés, issus des **introns** |
| **miARN** (micro-ARN) | Minuscules ARN qui **répriment la traduction** en se fixant aux ARNm cibles ; **> 1000 gènes** ; contrôleraient **≈ 30 %** des gènes codants |
| **ARN XIST** | **Inactive un des deux X** chez la femme ; transcrit de 17 kb exprimé **sur le X inactif** |

**ARN non codants et maladies** : délétion d'un groupe de gènes de miARN sur le **chromosome 13** → une forme de **syndrome de Feingold** (microcéphalie, petite taille, anomalies des doigts) ; mutations de **MIR96** → **surdité progressive** de l'adulte.

**Initiation de la traduction** : toujours par le codon **AUG** (= **méthionine**, codon initiateur), qui fixe le **cadre de lecture** ; la méthionine est souvent retirée avant la fin de la synthèse.

## À retenir
- A–T (2 liaisons H), G–C (3 liaisons H) ; brins antiparallèles ; **%A = %T, %G = %C**.
- **B** = physiologique, 10 pb/tour, droite ; **A** = 11, déshydratée ; **Z** = 12, **gauche**, riche en GC.
- Réplication **semi-conservative**, en **phase S** ; matrice lue **3'→5'**, synthèse **5'→3'** ; **Okazaki + ligase**.
- ADNmt : circulaire, 13 gènes, **hérédité maternelle**.
- **AUG** = méthionine = début de la traduction.`;

export const GENETIQUE_Y2: LibraryChapterSeed[] = [
  {
    ordre: 1,
    titre_fr: "Rôle de la génétique en médecine",
    titre_en: "Role of Genetics in Medicine",
    description_fr: "Définition, domaines, conseil génétique, classification des maladies génétiques, histoire",
    description_en: "Definition, fields, genetic counseling, classification of genetic disorders, history",
    icone: "🧬",
    cards: [
      { question_fr: "Définition de la génétique médicale ?", question_en: "Definition of medical genetics?", answer_fr: "Spécialité médicale de la prévention, du diagnostic et de la prise en charge des patients (et familles) atteints de maladies génétiques", answer_en: "The medical specialty dealing with the prevention, diagnosis and management of patients and/or their families with genetic disorders" },
      { question_fr: "Quels sont les 3 grands types de maladies génétiques ?", question_en: "What are the 3 main types of genetic disorders?", answer_fr: "Monogéniques (dont mitochondriales), chromosomiques, multifactorielles", answer_en: "Single gene (including mitochondrial), chromosome, multifactorial disorders" },
      { question_fr: "Fréquence des maladies monogéniques graves en pédiatrie et sur la vie entière ?", question_en: "Frequency of serious single-gene disorders in children and over a lifetime?", answer_fr: "≈ 1/300 naissances vivantes ; 1/50 sur la vie entière", answer_en: "≈ 1 in 300 liveborn infants; 1 in 50 over a lifetime" },
      { question_fr: "Mode de transmission des maladies mitochondriales ?", question_en: "Inheritance of mitochondrial diseases?", answer_fr: "Transmission maternelle", answer_en: "Maternal inheritance" },
      { question_fr: "Exemples de maladies mitochondriales citées ?", question_en: "Examples of mitochondrial diseases given?", answer_fr: "Neuropathie optique héréditaire, épilepsie myoclonique, encéphalomyopathie", answer_en: "Hereditary optic neuropathy, myoclonus epilepsy, encephalomyopathy" },
      { question_fr: "Fréquence des maladies chromosomiques ?", question_en: "Frequency of chromosome disorders?", answer_fr: "≈ 7/1000 naissances vivantes et ≈ la moitié des avortements spontanés du 1er trimestre", answer_en: "≈ 7 per 1000 liveborn infants and ≈ half of first-trimester spontaneous abortions" },
      { question_fr: "Caractéristique familiale des maladies multifactorielles ?", question_en: "Family feature of multifactorial disorders?", answer_fr: "Agrégation familiale, mais sans arbre généalogique typique des maladies monogéniques", answer_en: "Familial aggregation, but without the characteristic pedigree patterns of single-gene traits" },
      { question_fr: "Principal domaine d'application de la génétique aux soins aujourd'hui ?", question_en: "Chief area where genetics is applied to patient care today?", answer_fr: "Le diagnostic prénatal", answer_en: "Prenatal diagnosis" },
      { question_fr: "Qui a introduit les termes dominant et récessif ?", question_en: "Who introduced the terms dominant and recessive?", answer_fr: "Gregor Mendel (1866)", answer_en: "Gregor Mendel (1866)" },
      { question_fr: "Qui a créé le terme « Genetics » ?", question_en: "Who coined the term \"Genetics\"?", answer_fr: "Bateson (1902), qui a aussi décrit le linkage", answer_en: "Bateson (1902), who also described linkage" },
      { question_fr: "Concept introduit par Garrod et 1re maladie étudiée ?", question_en: "Garrod's concept and first disorder studied?", answer_fr: "Les erreurs innées du métabolisme ; l'alcaptonurie", answer_en: "Inborn errors of metabolism; alkaptonuria" },
      { question_fr: "Apport de Tjio et Levan (1956) ?", question_en: "Contribution of Tjio and Levan (1956)?", answer_fr: "Nombre correct de chromosomes humains (46) grâce à de nouvelles techniques", answer_en: "Correct number of human chromosomes (46) using new techniques" },
      { question_fr: "Apport de Morgan (1910-1911) ?", question_en: "Morgan's contribution (1910-1911)?", answer_fr: "Drosophile : gènes portés par les chromosomes, linkage, crossing-over (Nobel 1933)", answer_en: "Drosophila: genes on chromosomes, linkage, crossing-over (Nobel 1933)" },
    ],
    learning: {
      resource: {
        resource_type: "course",
        titre_fr: "Cours condensé — Rôle de la génétique en médecine",
        source_label: "Génétique médicale — UMFT, Lecture 1",
        content_fr: GEN_L1_COURSE,
      },
      qcm: [
        single("Les maladies génétiques peuvent être causées par :", "D", "Le cours précise : mutations, facteurs non génétiques, ou interaction des deux.", ["Uniquement des mutations", "Uniquement des facteurs environnementaux", "Uniquement des anomalies chromosomiques", "Des mutations, des facteurs non génétiques ou leur interaction"]),
        single("Quelle est la base de la transmission héréditaire ?", "B", "C'est la capacité de l'ADN à se répliquer.", ["La synthèse des protéines", "La capacité de l'ADN à se répliquer", "La méiose seule", "La traduction de l'ARNm"]),
        multi("Quels sont des domaines d'application de la génétique médicale aux soins ?", ["A", "B", "C"], "Conseil génétique, dépistage de population et diagnostic prénatal.", ["Le conseil génétique", "Le dépistage de population", "Le diagnostic prénatal", "La vaccination"]),
        single("Les maladies mitochondriales sont considérées comme :", "A", "Un type particulier de maladies monogéniques, à transmission maternelle.", ["Un type particulier de maladies monogéniques", "Des maladies chromosomiques", "Des maladies multifactorielles", "Des maladies non génétiques"]),
        single("Quelle proportion des avortements spontanés du 1er trimestre est due à des anomalies chromosomiques ?", "C", "Environ la moitié.", ["≈ 5 %", "≈ 20 %", "≈ 50 %", "≈ 90 %"]),
        multi("Quelles maladies sont citées comme multifactorielles de l'adulte ?", ["A", "B", "C", "D"], "Hypertension, diabète, cancer, schizophrénie, maladie coronarienne, psychose maniaco-dépressive…", ["Hypertension", "Diabète", "Schizophrénie", "Maladie coronarienne", "Neuropathie optique héréditaire"]),
        single("Les maladies chromosomiques peuvent être :", "D", "Numériques ou structurales, touchant autosomes, chromosomes sexuels, ou les deux.", ["Uniquement numériques", "Uniquement structurales", "Limitées aux chromosomes sexuels", "Numériques ou structurales, autosomiques et/ou gonosomiques"]),
        single("Prévalence des maladies monogéniques sur la vie entière ?", "B", "1 sur 50.", ["1/10", "1/50", "1/300", "1/10 000"]),
        single("Quel chercheur a démontré que les gènes sont portés par les chromosomes (drosophile) ?", "C", "Thomas Hunt Morgan, Nobel 1933.", ["Mendel", "Garrod", "Morgan", "Johannsen"]),
        single("Qui a assimilé le « facteur héréditaire » au gène (1909) ?", "A", "Wilhelm Johannsen.", ["Wilhelm Johannsen", "Hugo de Vries", "Ian Wilmut", "Bateson"]),
        single("Quelle découverte a permis d'isoler de petits fragments d'ADN, puis le clonage ?", "B", "Les endonucléases de restriction (milieu des années 1970).", ["La PCR", "Les endonucléases de restriction", "Le microscope électronique", "La méiose"]),
        single("Premier clonage d'un mammifère :", "D", "Ian Wilmut, Écosse, 1996.", ["Watson et Crick, 1953", "Tjio et Levan, 1956", "Morgan, 1911", "Ian Wilmut, 1996"]),
      ],
      exam: { titre_fr: "Examen chronométré — Génétique en médecine", duration_seconds: 900 },
    },
  },
  {
    ordre: 2,
    titre_fr: "Génome humain : ADN, réplication et ARN",
    titre_en: "Human Genome: DNA, Replication and RNA",
    description_fr: "Nucléotides, double hélice, formes A/B/Z, ADN mitochondrial, réplication, types d'ARN",
    description_en: "Nucleotides, double helix, A/B/Z forms, mitochondrial DNA, replication, RNA types",
    icone: "🧬",
    cards: [
      { question_fr: "Les 3 composants d'un nucléotide ?", question_en: "The 3 components of a nucleotide?", answer_fr: "Base azotée, sucre (désoxyribose dans l'ADN), phosphate", answer_en: "Nitrogenous base, sugar (deoxyribose in DNA), phosphate" },
      { question_fr: "Purines et pyrimidines ?", question_en: "Purines and pyrimidines?", answer_fr: "Purines : A, G. Pyrimidines : C, T (ADN), U (ARN)", answer_en: "Purines: A, G. Pyrimidines: C, T (DNA), U (RNA)" },
      { question_fr: "ADN avec 20 % de T : % de G ?", question_en: "DNA with 20% T: % of G?", answer_fr: "30 % (A = T = 20 % ; G + C = 60 %)", answer_en: "30% (A = T = 20%; G + C = 60%)" },
      { question_fr: "Que signifie « antiparallèle » ?", question_en: "What does \"antiparallel\" mean?", answer_fr: "Les deux brins vont en sens opposés (5'→3' et 3'→5')", answer_en: "The two strands run in opposite directions (5'→3' and 3'→5')" },
      { question_fr: "Forme physiologique de l'ADN et nombre de pb par tour ?", question_en: "Physiological DNA form and bp per turn?", answer_fr: "B-ADN, hélice droite, ≈ 10 pb/tour", answer_en: "B-DNA, right-handed, ≈ 10 bp/turn" },
      { question_fr: "Caractéristiques du Z-ADN ?", question_en: "Features of Z-DNA?", answer_fr: "Hélice gauche, 12 pb/tour, régions riches en GC (alternance purine/pyrimidine), un seul sillon", answer_en: "Left-handed, 12 bp/turn, GC-rich regions (alternating purines/pyrimidines), single groove" },
      { question_fr: "Conditions du A-ADN ?", question_en: "Conditions for A-DNA?", answer_fr: "Forte concentration de cations ou faible hydratation (< 65 %) ; 11 pb/tour, hélice droite", answer_en: "High cation concentration or low hydration (< 65%); 11 bp/turn, right-handed" },
      { question_fr: "Où trouve-t-on l'ADN quadruplex ?", question_en: "Where is quadruplex DNA found?", answer_fr: "Dans les télomères (et hors télomères, lié au cycle cellulaire)", answer_en: "In telomeres (and outside them, linked to cell cycle progression)" },
      { question_fr: "Combien de gènes structuraux code l'ADN mitochondrial ?", question_en: "How many structural genes does mtDNA encode?", answer_fr: "13", answer_en: "13" },
      { question_fr: "Pourquoi la réplication est-elle semi-conservative ?", question_en: "Why is replication semiconservative?", answer_fr: "Chaque nouvelle molécule contient un brin ancien et un brin nouveau", answer_en: "Each new molecule contains one old strand and one new strand" },
      { question_fr: "Sens de lecture de la matrice et sens de synthèse ?", question_en: "Template reading and synthesis direction?", answer_fr: "Matrice lue 3'→5' ; nouveau brin synthétisé 5'→3'", answer_en: "Template read 3'→5'; new strand synthesized 5'→3'" },
      { question_fr: "Rôle de l'ADN ligase ?", question_en: "Role of DNA ligase?", answer_fr: "Relier les fragments d'Okazaki en formant les liaisons phosphodiester manquantes", answer_en: "Join Okazaki fragments by forming the missing phosphodiester bonds" },
      { question_fr: "Rôle des protéines SSB ?", question_en: "Role of SSB proteins?", answer_fr: "Stabiliser les simples brins, empêcher leur ré-appariement et les épingles à cheveux", answer_en: "Stabilize single strands, prevent re-annealing and hairpin loops" },
      { question_fr: "Rôle de la topoisomérase ?", question_en: "Role of topoisomerase?", answer_fr: "Empêcher l'emmêlement et la torsion de l'ADN déroulé, puis ressouder les coupures", answer_en: "Prevent tangling and twisting of unwound DNA, then rejoin the breaks" },
      { question_fr: "Nombre de nucléotides d'un ARNt ?", question_en: "Number of nucleotides in a tRNA?", answer_fr: "≈ 75 (dont 3 forment l'anticodon)", answer_en: "≈ 75 (3 of which form the anticodon)" },
      { question_fr: "Rôle de l'ARN XIST ?", question_en: "Role of XIST RNA?", answer_fr: "Inactiver un des deux chromosomes X chez la femme (exprimé sur le X inactif)", answer_en: "Inactivate one of the two X chromosomes in females (expressed on the inactive X)" },
      { question_fr: "Codon initiateur et acide aminé ?", question_en: "Initiator codon and amino acid?", answer_fr: "AUG = méthionine ; fixe le cadre de lecture", answer_en: "AUG = methionine; sets the reading frame" },
    ],
    learning: {
      resource: {
        resource_type: "course",
        titre_fr: "Cours condensé — Génome humain, réplication et ARN",
        source_label: "Génétique médicale — UMFT, Lecture 2",
        content_fr: GEN_L2_COURSE,
      },
      qcm: [
        single("Quelle maladie résulte d'un chromosome surnuméraire ?", "B", "Le syndrome de Down (trisomie 21). Mucoviscidose et drépanocytose sont monogéniques.", ["Mucoviscidose", "Syndrome de Down", "Daltonisme", "Drépanocytose"]),
        single("Pour examiner les chromosomes d'une cellule, le médecin utilise :", "C", "Le caryotype : photographie des chromosomes rangés par paires.", ["Une radiographie", "Un arbre généalogique", "Un caryotype", "Un échiquier de Punnett"]),
        single("Adénine et guanine sont :", "D", "Ce sont des purines (bases à deux cycles).", ["Des nucléotides", "Des nucléosides", "Des pyrimidines", "Des purines"]),
        single("Un ADN contient 20 % de thymine. Quel est le pourcentage de guanine ?", "C", "A = T = 20 %, donc G + C = 60 % et G = 30 %.", ["20 %", "40 %", "30 %", "60 %"]),
        single("Un nucléotide est constitué de :", "D", "Un phosphate, un sucre et une base.", ["Un phosphate et une base", "Un phosphate et un sucre", "Une base et un acide aminé", "Un phosphate, un sucre et une base"]),
        single("L'ADN est :", "C", "Une chaîne de nucléotides, chacun formé d'un sucre, d'un phosphate et d'une base azotée.", ["Un acide nucléique propre à l'homme, fait de ribose", "L'organisation du matériel génétique pendant la division", "Une chaîne de nucléotides (sucre + phosphate + base)", "Une séquence d'acides aminés"]),
        single("Quelle forme d'ADN est une hélice gauche ?", "C", "Le Z-ADN (zigzag), 12 pb/tour, riche en GC.", ["A-ADN", "B-ADN", "Z-ADN", "C-ADN"]),
        single("Quelle forme d'ADN prédomine dans les conditions physiologiques ?", "B", "Le B-ADN, faible force ionique et forte hydratation.", ["A-ADN", "B-ADN", "Z-ADN", "ADN triplex"]),
        single("Le proto-oncogène c-myc est associé à :", "A", "Il possède des zones formant de l'ADN triplex (et peut former du quadruplex).", ["De l'ADN triplex", "L'ARN XIST", "L'ADN mitochondrial", "Le syndrome de Feingold"]),
        multi("Concernant l'ADN mitochondrial :", ["A", "B", "D"], "Circulaire, 13 gènes structuraux, hérédité maternelle ; il se réplique dans la mitochondrie, indépendamment de l'ADN nucléaire.", ["Il est circulaire", "Il code 13 gènes structuraux", "Il se réplique en même temps que l'ADN nucléaire, dans le noyau", "Il est transmis par la mère"]),
        single("La réplication de l'ADN a lieu :", "B", "En phase S, vers la fin de l'interphase.", ["En phase G1", "En phase S", "En métaphase", "En télophase"]),
        single("Le nouveau brin d'ADN est synthétisé dans le sens :", "A", "5'→3' ; la matrice est lue 3'→5'.", ["5'→3'", "3'→5'", "Les deux selon le brin", "Aléatoire"]),
        single("Quelle enzyme déroule la double hélice au niveau de la fourche ?", "C", "L'hélicase.", ["La ligase", "La topoisomérase", "L'hélicase", "La primase"]),
        single("Les fragments d'Okazaki sont reliés par :", "D", "L'ADN ligase forme les liaisons phosphodiester manquantes.", ["L'ADN polymérase I", "L'hélicase", "Les protéines SSB", "L'ADN ligase"]),
        single("Quelle enzyme retire les amorces d'ARN et comble par de l'ADN ?", "B", "L'ADN polymérase I.", ["La ligase", "L'ADN polymérase I", "La topoisomérase", "L'hélicase"]),
        single("Quelle base de l'ARN remplace la thymine ?", "A", "L'uracile.", ["Uracile", "Cytosine", "Adénine", "Guanine"]),
        single("Quel ARN porte l'anticodon ?", "C", "L'ARNt : un acide aminé à une extrémité, l'anticodon à l'autre.", ["ARNm", "ARNr", "ARNt", "snRNA"]),
        single("Quels petits ARN répriment la traduction en se fixant aux ARNm cibles ?", "D", "Les micro-ARN (miARN), > 1000 gènes, ≈ 30 % des gènes codants contrôlés.", ["snRNA", "snoRNA", "ARN XIST", "miARN"]),
        single("Une délétion de gènes de miARN sur le chromosome 13 provoque :", "B", "Une forme de syndrome de Feingold (microcéphalie, petite taille, anomalies des doigts).", ["Une surdité progressive", "Un syndrome de Feingold", "Un syndrome de Down", "Une alcaptonurie"]),
        single("Quel codon initie toujours la traduction ?", "A", "AUG, qui code la méthionine et fixe le cadre de lecture.", ["AUG", "UAA", "UGA", "GUA"]),
      ],
      exam: { titre_fr: "Examen chronométré — ADN, réplication et ARN", duration_seconds: 1_200 },
    },
  },
];
