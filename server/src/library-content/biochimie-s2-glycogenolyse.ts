import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const GLYCOGENOLYSIS_COURSE = `# Glycogénolyse

## 1. Vue d'ensemble
- La glycogénolyse est la voie de **dégradation du glycogène**, libérant du glucose (foie) ou du glucose-6-phosphate utilisable localement (muscle).
- Se déroule dans le **cytosol**.
- Stimulée par le **glucagon** (foie) et l'**adrénaline** (foie et muscle) ; inhibée par l'**insuline**.

## 2. Les étapes
1. **Glycogène phosphorylase** : clive séquentiellement les liaisons **α1→4** depuis l'extrémité non réductrice d'une chaîne, libérant du **glucose-1-phosphate**, jusqu'à s'arrêter à environ **4 résidus** du point de branchement le plus proche. Nécessite le **pyridoxal phosphate (PLP)**, dérivé de la vitamine B6, comme cofacteur essentiel.
2. **Enzyme débranchante** (bifonctionnelle) :
   - Activité **transférase** : déplace un bloc de 3 résidus glucose depuis la branche vers l'extrémité de la chaîne principale voisine, reformant une liaison α1→4.
   - Activité **α1→6-glucosidase** : hydrolyse la dernière liaison α1→6 restante au point de branchement, libérant un **glucose libre** (non phosphorylé).
3. **Phosphoglucomutase** : convertit le glucose-1-phosphate libéré par la phosphorylase en **glucose-6-phosphate**.
4. Devenir du glucose-6-phosphate :
   - **Muscle** : dépourvu de glucose-6-phosphatase, le G6P entre directement dans la **glycolyse locale** — il ne peut pas être libéré dans le sang.
   - **Foie** : possède la **glucose-6-phosphatase**, qui hydrolyse le G6P en glucose libre, exporté dans la circulation sanguine pour maintenir la glycémie.

## 3. Bilan quantitatif
- Environ **90 %** des résidus de glycogène sont libérés sous forme de glucose-1-phosphate par la glycogène phosphorylase ; environ **10 %** sous forme de glucose libre par l'enzyme débranchante, au niveau des points de branchement.

## 4. Corrélations cliniques

| Maladie (glycogénose) | Enzyme déficiente | Manifestations |
| --- | --- | --- |
| **McArdle** (type V) | Glycogène phosphorylase musculaire | Intolérance à l'effort, crampes, myoglobinurie à l'exercice intense |
| **Cori** (type III) | Enzyme débranchante | Accumulation de dextrines limites (glycogène court et très branché) |
| **von Gierke** (type I) | Glucose-6-phosphatase | Hypoglycémie sévère à jeun, hépatomégalie, acidose lactique |

## Points à retenir
- La glycogène phosphorylase (PLP-dépendante) libère du glucose-1-phosphate jusqu'à ~4 résidus du branchement ; l'enzyme débranchante (transférase + glucosidase) élimine ensuite le branchement, libérant un glucose libre.
- Seul le foie possède la glucose-6-phosphatase et peut donc libérer du glucose libre dans le sang ; le muscle utilise le G6P localement pour sa propre glycolyse.`;

export const GLYCOGENOLYSIS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Glycogénolyse",
    source_label: "Synthèse — Metabolism: Glycogenolysis (Ninja Nerd)",
    content_fr: GLYCOGENOLYSIS_COURSE,
  },
  qcm: [
    single("Quelle enzyme clive les liaisons α1→4 du glycogène en libérant du glucose-1-phosphate ?", "B", "La glycogène phosphorylase clive séquentiellement les liaisons α1→4 depuis l'extrémité non réductrice, libérant du glucose-1-phosphate.", ["L'enzyme débranchante", "La glycogène phosphorylase", "La phosphoglucomutase", "La glucose-6-phosphatase"]),
    single("Quel cofacteur, dérivé de la vitamine B6, est indispensable à la glycogène phosphorylase ?", "C", "Le pyridoxal phosphate (PLP), dérivé de la vitamine B6, est un cofacteur essentiel de la glycogène phosphorylase.", ["Le TPP", "Le FAD", "Le pyridoxal phosphate (PLP)", "La biotine"]),
    single("À combien de résidus du point de branchement la glycogène phosphorylase s'arrête-t-elle ?", "A", "La glycogène phosphorylase s'arrête à environ 4 résidus du point de branchement.", ["Environ 4 résidus", "Environ 1 résidu", "Environ 10 résidus", "Elle ne s'arrête jamais avant le branchement"]),
    single("Quelles sont les deux activités catalytiques de l'enzyme débranchante ?", "D", "L'enzyme débranchante possède une activité transférase (déplace un bloc de résidus) et une activité α1→6-glucosidase (hydrolyse le branchement).", ["Kinase et phosphatase", "Synthase et lyase", "Isomérase et mutase", "Transférase et α1→6-glucosidase"]),
    single("Quel produit est directement libéré par l'activité α1→6-glucosidase de l'enzyme débranchante ?", "B", "L'activité glucosidase hydrolyse la liaison α1→6 restante, libérant un glucose libre non phosphorylé.", ["Le glucose-1-phosphate", "Le glucose libre (non phosphorylé)", "Le glucose-6-phosphate", "Le fructose"]),
    single("Quelle enzyme convertit le glucose-1-phosphate en glucose-6-phosphate lors de la glycogénolyse ?", "C", "La phosphoglucomutase catalyse cette isomérisation, comme dans la glycogénogenèse.", ["La glycogène phosphorylase", "L'enzyme débranchante", "La phosphoglucomutase", "L'hexokinase"]),
    single("Pourquoi le muscle ne peut-il pas libérer de glucose libre dans le sang à partir de son glycogène ?", "A", "Le muscle est dépourvu de glucose-6-phosphatase ; le G6P doit donc rester dans la cellule et entrer directement dans la glycolyse locale.", ["Il est dépourvu de glucose-6-phosphatase", "Il ne possède pas de glycogène phosphorylase", "Il n'a pas de récepteurs à l'adrénaline", "Il ne stocke jamais de glycogène"]),
    single("Quel organe possède la glucose-6-phosphatase, lui permettant de libérer du glucose libre dans le sang ?", "B", "Le foie possède la glucose-6-phosphatase et peut donc exporter du glucose libre pour maintenir la glycémie.", ["Le muscle squelettique", "Le foie", "Le cœur", "Le tissu adipeux"]),
    single("Quelle proportion approximative des résidus de glycogène est libérée sous forme de glucose-1-phosphate plutôt que de glucose libre ?", "C", "Environ 90 % des résidus sont libérés sous forme de glucose-1-phosphate par la phosphorylase ; environ 10 % sous forme de glucose libre par l'enzyme débranchante.", ["10 %", "50 %", "90 %", "100 %"]),
    single("Quelle maladie génétique résulte d'un déficit en glycogène phosphorylase musculaire ?", "D", "La maladie de McArdle (glycogénose de type V) résulte d'un déficit en glycogène phosphorylase musculaire, provoquant une intolérance à l'effort.", ["La maladie de von Gierke", "La maladie de Cori", "La maladie de Pompe", "La maladie de McArdle"]),
    single("Quelle maladie génétique résulte d'un déficit en enzyme débranchante ?", "A", "La maladie de Cori (glycogénose de type III) résulte d'un déficit en enzyme débranchante, avec accumulation de dextrines limites.", ["La maladie de Cori", "La maladie de McArdle", "La maladie de von Gierke", "Le syndrome de Leigh"]),
    single("Quelles hormones stimulent la glycogénolyse ?", "B", "Le glucagon (surtout hépatique) et l'adrénaline (hépatique et musculaire) stimulent la glycogénolyse ; l'insuline l'inhibe.", ["L'insuline et le glucagon", "Le glucagon et l'adrénaline", "L'adrénaline et l'insuline", "Aucune hormone ne régule la glycogénolyse"]),
  ],
  exam: { titre_fr: "Examen chronométré — Glycogénolyse", duration_seconds: 1_080 },
};

export const GLYCOGENOLYSIS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Qu'est-ce que la glycogénolyse ?", question_en: "What is glycogenolysis?", answer_fr: "La voie de dégradation du glycogène en glucose ou glucose-6-phosphate.", answer_en: "The pathway that breaks down glycogen into glucose or glucose-6-phosphate." },
  { question_fr: "Dans quel compartiment cellulaire se déroule la glycogénolyse ?", question_en: "In which cellular compartment does glycogenolysis occur?", answer_fr: "Dans le cytosol.", answer_en: "In the cytosol." },
  { question_fr: "Quelle enzyme clive les liaisons α1→4 du glycogène ?", question_en: "Which enzyme cleaves the alpha-1,4 bonds of glycogen?", answer_fr: "La glycogène phosphorylase.", answer_en: "Glycogen phosphorylase." },
  { question_fr: "Quel produit direct la glycogène phosphorylase libère-t-elle ?", question_en: "What direct product does glycogen phosphorylase release?", answer_fr: "Le glucose-1-phosphate.", answer_en: "Glucose-1-phosphate." },
  { question_fr: "Quel cofacteur vitaminique est indispensable à la glycogène phosphorylase ?", question_en: "Which vitamin-derived cofactor is essential for glycogen phosphorylase?", answer_fr: "Le pyridoxal phosphate (PLP), dérivé de la vitamine B6.", answer_en: "Pyridoxal phosphate (PLP), derived from vitamin B6." },
  { question_fr: "À quelle distance approximative du point de branchement la glycogène phosphorylase s'arrête-t-elle ?", question_en: "Approximately how close to a branch point does glycogen phosphorylase stop?", answer_fr: "Environ 4 résidus.", answer_en: "About 4 residues." },
  { question_fr: "Pourquoi la glycogène phosphorylase ne peut-elle pas dégrader les points de branchement ?", question_en: "Why can't glycogen phosphorylase degrade branch points?", answer_fr: "Parce qu'elle ne reconnaît et ne clive que les liaisons α1→4, pas les liaisons α1→6 des branchements.", answer_en: "Because it only recognizes and cleaves alpha-1,4 bonds, not the alpha-1,6 bonds of branch points." },
  { question_fr: "Quelle enzyme est nécessaire pour éliminer les points de branchement ?", question_en: "Which enzyme is needed to remove branch points?", answer_fr: "L'enzyme débranchante.", answer_en: "The debranching enzyme." },
  { question_fr: "Combien d'activités catalytiques possède l'enzyme débranchante ?", question_en: "How many catalytic activities does the debranching enzyme have?", answer_fr: "Deux : une activité transférase et une activité α1→6-glucosidase.", answer_en: "Two: a transferase activity and an alpha-1,6-glucosidase activity." },
  { question_fr: "Que fait l'activité transférase de l'enzyme débranchante ?", question_en: "What does the transferase activity of the debranching enzyme do?", answer_fr: "Elle déplace un bloc de 3 résidus glucose vers l'extrémité de la chaîne principale voisine, reformant une liaison α1→4.", answer_en: "It moves a block of 3 glucose residues to the end of the neighboring main chain, reforming an alpha-1,4 bond." },
  { question_fr: "Que fait l'activité α1→6-glucosidase de l'enzyme débranchante ?", question_en: "What does the alpha-1,6-glucosidase activity of the debranching enzyme do?", answer_fr: "Elle hydrolyse la dernière liaison α1→6 restante, libérant un glucose libre non phosphorylé.", answer_en: "It hydrolyzes the last remaining alpha-1,6 bond, releasing a free, unphosphorylated glucose." },
  { question_fr: "Le glucose libéré par l'enzyme débranchante est-il phosphorylé ?", question_en: "Is the glucose released by the debranching enzyme phosphorylated?", answer_fr: "Non, il est libéré sous forme de glucose libre.", answer_en: "No, it is released as free glucose." },
  { question_fr: "Quelle enzyme convertit le glucose-1-phosphate en glucose-6-phosphate ?", question_en: "Which enzyme converts glucose-1-phosphate into glucose-6-phosphate?", answer_fr: "La phosphoglucomutase.", answer_en: "Phosphoglucomutase." },
  { question_fr: "Quel devenir a le glucose-6-phosphate produit dans le muscle ?", question_en: "What happens to glucose-6-phosphate produced in muscle?", answer_fr: "Il entre directement dans la glycolyse locale, faute de glucose-6-phosphatase.", answer_en: "It enters local glycolysis directly, due to the absence of glucose-6-phosphatase." },
  { question_fr: "Quel devenir a le glucose-6-phosphate produit dans le foie ?", question_en: "What happens to glucose-6-phosphate produced in the liver?", answer_fr: "Il est hydrolysé en glucose libre par la glucose-6-phosphatase, puis exporté dans le sang.", answer_en: "It is hydrolyzed to free glucose by glucose-6-phosphatase, then exported into the blood." },
  { question_fr: "Pourquoi le muscle ne peut-il pas contribuer directement au maintien de la glycémie via son glycogène ?", question_en: "Why can't muscle directly contribute to blood glucose maintenance via its glycogen?", answer_fr: "Parce qu'il est dépourvu de glucose-6-phosphatase et ne peut donc pas libérer de glucose libre dans la circulation.", answer_en: "Because it lacks glucose-6-phosphatase and therefore cannot release free glucose into the bloodstream." },
  { question_fr: "Quel organe est essentiel au maintien de la glycémie via la glycogénolyse ?", question_en: "Which organ is essential for maintaining blood glucose via glycogenolysis?", answer_fr: "Le foie.", answer_en: "The liver." },
  { question_fr: "Quelles hormones stimulent la glycogénolyse hépatique ?", question_en: "Which hormones stimulate hepatic glycogenolysis?", answer_fr: "Le glucagon et l'adrénaline.", answer_en: "Glucagon and adrenaline." },
  { question_fr: "Quelle hormone stimule la glycogénolyse musculaire principalement pendant l'effort ?", question_en: "Which hormone mainly stimulates muscle glycogenolysis during exercise?", answer_fr: "L'adrénaline.", answer_en: "Adrenaline." },
  { question_fr: "Quelle hormone inhibe la glycogénolyse ?", question_en: "Which hormone inhibits glycogenolysis?", answer_fr: "L'insuline.", answer_en: "Insulin." },
  { question_fr: "Quelle proportion approximative des résidus de glycogène est libérée par la phosphorylase (sous forme de G1P) plutôt que par l'enzyme débranchante ?", question_en: "Approximately what proportion of glycogen residues is released by phosphorylase (as G1P) rather than by the debranching enzyme?", answer_fr: "Environ 90 %.", answer_en: "About 90%." },
  { question_fr: "Qu'est-ce que la maladie de McArdle ?", question_en: "What is McArdle disease?", answer_fr: "Une glycogénose (type V) due à un déficit en glycogène phosphorylase musculaire, provoquant intolérance à l'effort, crampes et myoglobinurie.", answer_en: "A glycogen storage disease (type V) caused by a muscle glycogen phosphorylase deficiency, causing exercise intolerance, cramps, and myoglobinuria." },
  { question_fr: "Qu'est-ce que la maladie de Cori ?", question_en: "What is Cori disease?", answer_fr: "Une glycogénose (type III) due à un déficit en enzyme débranchante, entraînant une accumulation de dextrines limites.", answer_en: "A glycogen storage disease (type III) caused by a debranching enzyme deficiency, leading to accumulation of limit dextrins." },
  { question_fr: "Qu'est-ce que la maladie de von Gierke ?", question_en: "What is von Gierke disease?", answer_fr: "Une glycogénose (type I) due à un déficit en glucose-6-phosphatase, provoquant une hypoglycémie sévère à jeun, une hépatomégalie et une acidose lactique.", answer_en: "A glycogen storage disease (type I) caused by a glucose-6-phosphatase deficiency, causing severe fasting hypoglycemia, hepatomegaly, and lactic acidosis." },
  { question_fr: "Pourquoi les patients atteints de McArdle présentent-ils une myoglobinurie à l'effort intense ?", question_en: "Why do McArdle patients develop myoglobinuria during intense exercise?", answer_fr: "L'incapacité à mobiliser le glycogène musculaire provoque des lésions des fibres musculaires (rhabdomyolyse), libérant de la myoglobine dans les urines.", answer_en: "The inability to mobilize muscle glycogen causes muscle fiber damage (rhabdomyolysis), releasing myoglobin into the urine." },
  { question_fr: "Que sont les « dextrines limites » accumulées dans la maladie de Cori ?", question_en: "What are the \"limit dextrins\" that accumulate in Cori disease?", answer_fr: "Des fragments de glycogène anormalement courts et fortement branchés, résultant de l'incapacité à retirer les points de branchement.", answer_en: "Abnormally short, heavily branched glycogen fragments, resulting from the inability to remove branch points." },
  { question_fr: "La glycogène phosphorylase et la glycogène synthase sont-elles régulées par les mêmes hormones, avec des effets identiques ou opposés ?", question_en: "Are glycogen phosphorylase and glycogen synthase regulated by the same hormones, with identical or opposite effects?", answer_fr: "Les mêmes hormones (insuline, glucagon, adrénaline) les régulent, mais avec des effets opposés, évitant un cycle futile de synthèse et de dégradation simultanées.", answer_en: "The same hormones (insulin, glucagon, adrenaline) regulate them, but with opposite effects, avoiding a futile cycle of simultaneous synthesis and breakdown." },
  { question_fr: "Résumez en une phrase le déroulement global de la glycogénolyse.", question_en: "Summarize in one sentence the overall course of glycogenolysis.", answer_fr: "La glycogène phosphorylase libère du glucose-1-phosphate depuis les chaînes linéaires jusqu'aux abords des branchements, que l'enzyme débranchante élimine ensuite pour libérer un glucose libre, le G6P résultant étant utilisé localement dans le muscle ou libéré dans le sang par le foie.", answer_en: "Glycogen phosphorylase releases glucose-1-phosphate from linear chains up to the branch points, which the debranching enzyme then removes to release free glucose, with the resulting G6P used locally in muscle or released into the blood by the liver." },
];

const GLYCOGEN_METABOLISM_REGULATION_COURSE = `# Régulation du métabolisme du glycogène

## 1. Principe général : régulation croisée et opposée
- La **glycogène synthase** (synthèse) et la **glycogène phosphorylase** (dégradation) sont régulées de façon **opposée** par les mêmes signaux hormonaux : lorsque l'une est activée, l'autre est inhibée, évitant un **cycle futile**.
- Deux mécanismes combinés : la **phosphorylation/déphosphorylation** en cascade (hormonale) et la régulation **allostérique** directe par des métabolites.

## 2. Cascade hormonale du glucagon/adrénaline (mobilisation du glycogène)
1. Le glucagon (foie) ou l'adrénaline (foie et muscle) se lie à un récepteur couplé aux protéines G.
2. Activation de l'**adénylate cyclase** → production d'**AMPc**.
3. L'AMPc active la **protéine kinase A (PKA)**.
4. La PKA phosphoryle et active la **phosphorylase kinase**.
5. La phosphorylase kinase phosphoryle et active la **glycogène phosphorylase** (forme active « a »).
6. Simultanément, la PKA phosphoryle et **inactive** la **glycogène synthase**.
- Cette cascade amplifie considérablement le signal initial (chaque étape multiplie l'effet de la précédente), permettant une réponse rapide et puissante à une faible concentration hormonale.

## 3. Régulation allostérique — tissu par signal

| Tissu | Signal | Cible | Effet |
| --- | --- | --- | --- |
| Muscle | Ca²⁺ (contraction) | Phosphorylase kinase (sous-unité calmoduline) | Active, indépendamment de la PKA |
| Muscle | AMP (effort intense) | Glycogène phosphorylase musculaire | Active allostériquement |
| Muscle/Foie | Glucose-6-phosphate | Glycogène synthase / phosphorylase | Active la synthase, inhibe la phosphorylase |
| Foie | Glucose (glycémie élevée) | Glycogène phosphorylase hépatique | Favorise sa déphosphorylation/inactivation |
| Foie | Insuline | Protéine phosphatase 1 (PP1) | Inactive la phosphorylase, active la synthase |

## 5. Rôle de la phosphorylase kinase comme intégrateur de signaux
- La phosphorylase kinase est activée par deux voies indépendantes : la phosphorylation par la PKA (signal hormonal) et la liaison du Ca²⁺ à sa sous-unité calmoduline (signal de contraction musculaire) — elle intègre ainsi un signal hormonal systémique et un signal local de demande énergétique.

## Points à retenir
- Glucagon/adrénaline → AMPc → PKA → active la phosphorylase kinase → active la glycogène phosphorylase ; la PKA inactive simultanément la glycogène synthase.
- Le Ca²⁺ (contraction musculaire) et l'AMP (faible charge énergétique) activent directement la mobilisation du glycogène musculaire, indépendamment des hormones.
- L'insuline et le glucose-6-phosphate favorisent la synthèse (activent la glycogène synthase, inhibent la phosphorylase) — effet inverse du glucagon/adrénaline.`;

export const GLYCOGEN_METABOLISM_REGULATION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Régulation du métabolisme du glycogène",
    source_label: "Synthèse — Metabolism: Regulation of Glycogen Metabolism (Ninja Nerd)",
    content_fr: GLYCOGEN_METABOLISM_REGULATION_COURSE,
  },
  qcm: [
    single("Comment sont régulées la glycogène synthase et la glycogène phosphorylase, l'une par rapport à l'autre ?", "B", "Elles sont régulées de façon opposée par les mêmes signaux hormonaux, évitant qu'elles soient actives simultanément (cycle futile).", ["De façon identique par les mêmes signaux", "De façon opposée par les mêmes signaux", "Elles ne partagent aucun signal de régulation commun", "Uniquement par des signaux indépendants sans lien"]),
    single("Quel second messager est produit après la liaison du glucagon à son récepteur ?", "C", "La liaison du glucagon active l'adénylate cyclase, qui produit de l'AMPc.", ["Le GTP", "Le Ca2+", "L'AMPc", "Le DAG"]),
    single("Quelle kinase est activée par l'AMPc dans la cascade de mobilisation du glycogène ?", "A", "L'AMPc active la protéine kinase A (PKA).", ["La protéine kinase A (PKA)", "La PDH kinase", "La GSK3", "L'AMPK"]),
    single("Quelle enzyme la PKA phosphoryle-t-elle pour activer in fine la glycogène phosphorylase ?", "B", "La PKA phosphoryle et active la phosphorylase kinase, qui phosphoryle à son tour et active la glycogène phosphorylase.", ["Directement la glycogène phosphorylase", "La phosphorylase kinase", "La phosphoglucomutase", "L'enzyme débranchante"]),
    single("Quel est l'effet de la PKA sur la glycogène synthase, simultanément à l'activation de la phosphorylase ?", "C", "La PKA phosphoryle et inactive la glycogène synthase, coordonnant l'arrêt de la synthèse avec l'activation de la dégradation.", ["Elle l'active", "Elle n'a aucun effet", "Elle l'inactive", "Elle la dégrade complètement"]),
    single("Pourquoi la cascade hormonale du glucagon amplifie-t-elle fortement le signal initial ?", "A", "Chaque étape enzymatique de la cascade multiplie l'effet de la précédente, permettant une réponse rapide et puissante à partir d'une faible concentration hormonale.", ["Chaque étape multiplie l'effet de la précédente (amplification en cascade)", "Le glucagon agit directement sur des milliers d'enzymes simultanément", "L'AMPc est produit en quantités illimitées", "La cascade n'amplifie en réalité pas le signal"]),
    single("Quel ion active directement la phosphorylase kinase dans le muscle en contraction, indépendamment de la PKA ?", "D", "Le Ca2+, libéré lors de la contraction musculaire, active directement la phosphorylase kinase via sa sous-unité calmoduline.", ["Le sodium", "Le potassium", "Le magnésium", "Le calcium (Ca2+)"]),
    single("Par quelle sous-unité le Ca2+ active-t-il la phosphorylase kinase ?", "B", "Le Ca2+ se lie à la sous-unité calmoduline de la phosphorylase kinase, l'activant indépendamment de la phosphorylation.", ["La sous-unité catalytique principale", "La sous-unité calmoduline", "La sous-unité régulatrice PKA", "La sous-unité GSK3"]),
    single("Quel métabolite, signal de faible charge énergétique, active allostériquement la glycogène phosphorylase musculaire ?", "A", "L'AMP active allostériquement l'isoforme musculaire de la glycogène phosphorylase, indépendamment de son état de phosphorylation.", ["L'AMP", "L'ATP", "Le citrate", "L'acétyl-CoA"]),
    single("Quel métabolite active la glycogène synthase et inhibe la glycogène phosphorylase par voie allostérique ?", "C", "Le glucose-6-phosphate active la glycogène synthase et inhibe la glycogène phosphorylase.", ["L'AMP", "L'ATP", "Le glucose-6-phosphate", "Le calcium"]),
    single("Quel effet la liaison directe du glucose a-t-elle sur la glycogène phosphorylase hépatique ?", "B", "Une glycémie élevée favorise la liaison du glucose à la phosphorylase hépatique, la rendant plus sensible à la déphosphorylation et à l'inactivation.", ["Elle l'active fortement", "Elle la rend plus sensible à l'inactivation par déphosphorylation", "Elle n'a aucun effet hépatique", "Elle bloque irréversiblement l'enzyme"]),
    single("Quel est l'effet global de l'insuline sur le métabolisme du glycogène ?", "D", "L'insuline active la protéine phosphatase 1, qui déphosphoryle et inactive la glycogène phosphorylase tout en activant la glycogène synthase, favorisant globalement la synthèse.", ["Elle favorise uniquement la dégradation", "Elle n'a aucun effet net", "Elle inactive à la fois la synthase et la phosphorylase", "Elle favorise globalement la synthèse du glycogène"]),
  ],
  exam: { titre_fr: "Examen chronométré — Régulation du métabolisme du glycogène", duration_seconds: 1_080 },
};

export const GLYCOGEN_METABOLISM_REGULATION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Comment la glycogène synthase et la glycogène phosphorylase sont-elles régulées l'une par rapport à l'autre ?", question_en: "How are glycogen synthase and glycogen phosphorylase regulated relative to each other?", answer_fr: "De façon opposée par les mêmes signaux hormonaux, pour éviter un cycle futile de synthèse et de dégradation simultanées.", answer_en: "In opposite ways by the same hormonal signals, to avoid a futile cycle of simultaneous synthesis and breakdown." },
  { question_fr: "Quel récepteur le glucagon active-t-il sur les cellules hépatiques ?", question_en: "What receptor does glucagon activate on liver cells?", answer_fr: "Un récepteur couplé aux protéines G.", answer_en: "A G protein-coupled receptor." },
  { question_fr: "Quelle enzyme membranaire produit l'AMPc suite à l'activation du récepteur du glucagon ?", question_en: "Which membrane enzyme produces cAMP following glucagon receptor activation?", answer_fr: "L'adénylate cyclase.", answer_en: "Adenylate cyclase." },
  { question_fr: "Quelle kinase l'AMPc active-t-il ?", question_en: "Which kinase does cAMP activate?", answer_fr: "La protéine kinase A (PKA).", answer_en: "Protein kinase A (PKA)." },
  { question_fr: "Quelle enzyme la PKA phosphoryle-t-elle pour déclencher l'activation de la glycogène phosphorylase ?", question_en: "Which enzyme does PKA phosphorylate to trigger glycogen phosphorylase activation?", answer_fr: "La phosphorylase kinase.", answer_en: "Phosphorylase kinase." },
  { question_fr: "Que fait la phosphorylase kinase activée ?", question_en: "What does activated phosphorylase kinase do?", answer_fr: "Elle phosphoryle et active la glycogène phosphorylase.", answer_en: "It phosphorylates and activates glycogen phosphorylase." },
  { question_fr: "Quel est l'effet de la PKA sur la glycogène synthase ?", question_en: "What is the effect of PKA on glycogen synthase?", answer_fr: "Elle la phosphoryle et l'inactive.", answer_en: "It phosphorylates and inactivates it." },
  { question_fr: "Combien d'étapes enzymatiques successives composent la cascade glucagon → glycogène phosphorylase activée ?", question_en: "How many successive enzymatic steps make up the glucagon → activated glycogen phosphorylase cascade?", answer_fr: "Quatre : adénylate cyclase, PKA, phosphorylase kinase, glycogène phosphorylase.", answer_en: "Four: adenylate cyclase, PKA, phosphorylase kinase, glycogen phosphorylase." },
  { question_fr: "Pourquoi cette cascade permet-elle une réponse très amplifiée à partir d'une faible dose hormonale ?", question_en: "Why does this cascade allow a highly amplified response from a small hormone dose?", answer_fr: "Parce que chaque enzyme activée peut activer de nombreuses molécules de l'enzyme suivante, multipliant l'effet à chaque étape.", answer_en: "Because each activated enzyme can activate many molecules of the next enzyme, multiplying the effect at each step." },
  { question_fr: "Quel ion active directement la phosphorylase kinase pendant la contraction musculaire ?", question_en: "Which ion directly activates phosphorylase kinase during muscle contraction?", answer_fr: "Le calcium (Ca2+).", answer_en: "Calcium (Ca2+)." },
  { question_fr: "Par quelle sous-unité de la phosphorylase kinase le Ca2+ agit-il ?", question_en: "Through which subunit of phosphorylase kinase does Ca2+ act?", answer_fr: "La sous-unité calmoduline.", answer_en: "The calmodulin subunit." },
  { question_fr: "Cette activation par le Ca2+ dépend-elle de la phosphorylation par la PKA ?", question_en: "Does this Ca2+-mediated activation depend on PKA phosphorylation?", answer_fr: "Non, elle est indépendante, ce qui couple directement la contraction musculaire à la mobilisation du glycogène.", answer_en: "No, it is independent, directly coupling muscle contraction to glycogen mobilization." },
  { question_fr: "Quel métabolite active allostériquement l'isoforme musculaire de la glycogène phosphorylase ?", question_en: "Which metabolite allosterically activates the muscle isoform of glycogen phosphorylase?", answer_fr: "L'AMP.", answer_en: "AMP." },
  { question_fr: "Que signale un taux élevé d'AMP dans le muscle ?", question_en: "What does a high AMP level signal in muscle?", answer_fr: "Une charge énergétique basse, typique d'un effort intense.", answer_en: "A low energy charge, typical of intense exercise." },
  { question_fr: "Quel métabolite active la glycogène synthase et inhibe la glycogène phosphorylase ?", question_en: "Which metabolite activates glycogen synthase and inhibits glycogen phosphorylase?", answer_fr: "Le glucose-6-phosphate.", answer_en: "Glucose-6-phosphate." },
  { question_fr: "Quel métabolite agit comme signal allostérique direct sur la glycogène phosphorylase hépatique ?", question_en: "Which metabolite acts as a direct allosteric signal on hepatic glycogen phosphorylase?", answer_fr: "Le glucose lui-même.", answer_en: "Glucose itself." },
  { question_fr: "Quel est l'effet d'une glycémie élevée sur la glycogène phosphorylase hépatique ?", question_en: "What is the effect of high blood glucose on hepatic glycogen phosphorylase?", answer_fr: "Elle favorise la liaison du glucose à l'enzyme, la rendant plus sensible à la déphosphorylation et à l'inactivation.", answer_en: "It favors glucose binding to the enzyme, making it more susceptible to dephosphorylation and inactivation." },
  { question_fr: "Quelle phosphatase l'insuline active-t-elle pour favoriser la synthèse du glycogène ?", question_en: "Which phosphatase does insulin activate to favor glycogen synthesis?", answer_fr: "La protéine phosphatase 1 (PP1).", answer_en: "Protein phosphatase 1 (PP1)." },
  { question_fr: "Quel double effet la PP1 a-t-elle sur la glycogène synthase et la glycogène phosphorylase ?", question_en: "What dual effect does PP1 have on glycogen synthase and glycogen phosphorylase?", answer_fr: "Elle active la glycogène synthase (déphosphorylation) et inactive la glycogène phosphorylase (déphosphorylation).", answer_en: "It activates glycogen synthase (dephosphorylation) and inactivates glycogen phosphorylase (dephosphorylation)." },
  { question_fr: "Pourquoi dit-on que la phosphorylase kinase est un « intégrateur de signaux » ?", question_en: "Why is phosphorylase kinase called a \"signal integrator\"?", answer_fr: "Parce qu'elle est activée par deux voies indépendantes : la phosphorylation par la PKA (signal hormonal) et la liaison du Ca2+ (signal de contraction musculaire).", answer_en: "Because it is activated by two independent pathways: PKA phosphorylation (hormonal signal) and Ca2+ binding (muscle contraction signal)." },
  { question_fr: "L'adrénaline agit-elle uniquement sur le foie ou aussi sur le muscle ?", question_en: "Does adrenaline act only on the liver, or also on muscle?", answer_fr: "Elle agit sur les deux, stimulant la glycogénolyse hépatique et musculaire.", answer_en: "It acts on both, stimulating both hepatic and muscle glycogenolysis." },
  { question_fr: "Le glucagon agit-il sur le muscle squelettique ?", question_en: "Does glucagon act on skeletal muscle?", answer_fr: "Non, le muscle squelettique ne possède pas de récepteurs fonctionnels au glucagon ; seule l'adrénaline y stimule la glycogénolyse.", answer_en: "No, skeletal muscle lacks functional glucagon receptors; only adrenaline stimulates glycogenolysis there." },
  { question_fr: "Quel est l'intérêt physiologique d'une double régulation (hormonale + allostérique) du métabolisme du glycogène ?", question_en: "What is the physiological benefit of dual (hormonal + allosteric) regulation of glycogen metabolism?", answer_fr: "Elle permet une réponse rapide et systémique (hormones) combinée à un ajustement fin et local en fonction de l'état énergétique immédiat de la cellule (métabolites).", answer_en: "It allows a fast, systemic response (hormones) combined with fine, local adjustment based on the cell's immediate energy state (metabolites)." },
  { question_fr: "Résumez en une phrase la logique globale de régulation du métabolisme du glycogène.", question_en: "Summarize in one sentence the overall regulatory logic of glycogen metabolism.", answer_fr: "Le glucagon et l'adrénaline déclenchent une cascade AMPc-PKA qui active la dégradation et inhibe la synthèse, tandis que l'insuline, le glucose et le glucose-6-phosphate favorisent l'inverse, le Ca2+ et l'AMP ajoutant un contrôle local rapide dans le muscle.", answer_en: "Glucagon and adrenaline trigger a cAMP-PKA cascade that activates breakdown and inhibits synthesis, while insulin, glucose, and glucose-6-phosphate favor the opposite, with Ca2+ and AMP adding rapid local control in muscle." },
];
