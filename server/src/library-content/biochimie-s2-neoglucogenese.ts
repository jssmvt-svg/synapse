import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const GLUCONEOGENESIS_COURSE = `# Néoglucogenèse

## 1. Vue d'ensemble
- Voie de synthèse du **glucose** à partir de précurseurs non glucidiques : **lactate**, **acides aminés glucoformateurs** (notamment l'alanine), **glycérol**.
- Se déroule principalement dans le **foie** (et, dans une moindre mesure, le cortex rénal), essentiellement dans le cytosol, avec certaines étapes mitochondriales.
- Essentielle pendant le **jeûne prolongé** pour maintenir la glycémie, notamment pour les tissus glucodépendants (cerveau, érythrocytes).
- Globalement l'inverse de la glycolyse, mais **n'est pas une simple réversion** : les 3 étapes irréversibles de la glycolyse sont contournées par **4 réactions distinctes**, catalysées par des enzymes différentes.

## 2. Les 4 réactions contournant les étapes irréversibles de la glycolyse
1. **Pyruvate → Oxaloacétate** : catalysée par la **pyruvate carboxylase** (mitochondrie), dépendante de la **biotine**, consomme 1 ATP, activée allostériquement par l'acétyl-CoA.
2. **Oxaloacétate → Phosphoénolpyruvate (PEP)** : catalysée par la **PEP carboxykinase (PEPCK)**, consomme 1 GTP, libère du CO₂. L'oxaloacétate, incapable de traverser la membrane mitochondriale, est d'abord converti en **malate** puis réexporté vers le cytosol, où il est reconverti en oxaloacétate.
3. **Fructose-1,6-bisphosphate → Fructose-6-phosphate** : catalysée par la **fructose-1,6-bisphosphatase (FBPase-1)**, simple hydrolyse (sans production d'ATP).
4. **Glucose-6-phosphate → Glucose** : catalysée par la **glucose-6-phosphatase**, présente uniquement dans le **foie et le rein**, simple hydrolyse.

Les 7 autres réactions de la glycolyse sont réversibles et communes aux deux voies (simplement inversées).

## 3. Coût énergétique
- Convertir 2 pyruvates en 1 glucose coûte : **4 ATP** (2× pyruvate carboxylase + 2× PEPCK, GTP compté comme équivalent ATP) + **2 GTP** + **2 NADH**, soit un coût net d'environ **6 nucléotides triphosphates équivalents** par glucose synthétisé.

## 4. Précurseurs de la néoglucogenèse
- **Lactate** : via le **cycle de Cori** (muscle → lactate → foie → glucose → muscle).
- **Alanine** : via le **cycle glucose-alanine** (muscle → alanine → foie → glucose), transportant à la fois du carbone et de l'azote depuis le muscle vers le foie.
- **Glycérol** : issu de la lipolyse du tissu adipeux, phosphorylé en glycérol-3-phosphate puis oxydé en dihydroxyacétone phosphate (DHAP), qui entre directement dans la voie.
- **Acides aminés glucoformateurs** : dégradés en intermédiaires du cycle de Krebs (ex. propionyl-CoA → succinyl-CoA) convertibles en oxaloacétate.
- Les **acides gras** (via l'acétyl-CoA) ne peuvent **pas** servir de précurseurs nets du glucose, car la réaction du complexe pyruvate déshydrogénase est irréversible.

## Points à retenir
- 4 réactions contournent les 3 étapes irréversibles de la glycolyse : pyruvate carboxylase, PEP carboxykinase, fructose-1,6-bisphosphatase, glucose-6-phosphatase.
- Coût net : environ 6 ATP/GTP équivalents pour synthétiser 1 glucose à partir de 2 pyruvates.
- Précurseurs : lactate, alanine, glycérol, acides aminés glucoformateurs — jamais les acides gras.`;

export const GLUCONEOGENESIS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Néoglucogenèse",
    source_label: "Synthèse — Metabolism: Gluconeogenesis (Ninja Nerd)",
    content_fr: GLUCONEOGENESIS_COURSE,
  },
  qcm: [
    single("Quel est le rôle principal de la néoglucogenèse ?", "B", "La néoglucogenèse synthétise du glucose à partir de précurseurs non glucidiques, essentielle pour maintenir la glycémie pendant le jeûne.", ["Dégrader le glucose en pyruvate", "Synthétiser du glucose à partir de précurseurs non glucidiques", "Stocker le glucose sous forme de glycogène", "Oxyder les acides gras en acétyl-CoA"]),
    single("Dans quel organe la néoglucogenèse se déroule-t-elle principalement ?", "C", "Le foie est le siège principal de la néoglucogenèse, avec une contribution moindre du cortex rénal.", ["Le muscle squelettique", "Le tissu adipeux", "Le foie", "Le cerveau"]),
    single("Combien de réactions distinctes contournent les étapes irréversibles de la glycolyse en néoglucogenèse ?", "C", "Quatre réactions distinctes contournent les trois étapes irréversibles de la glycolyse.", ["Deux", "Trois", "Quatre", "Sept"]),
    single("Quelle enzyme catalyse la conversion du pyruvate en oxaloacétate ?", "A", "La pyruvate carboxylase, dépendante de la biotine, catalyse cette carboxylation.", ["La pyruvate carboxylase", "La PEP carboxykinase", "La fructose-1,6-bisphosphatase", "La glucose-6-phosphatase"]),
    single("Quel cofacteur vitaminique est nécessaire à la pyruvate carboxylase ?", "B", "La biotine (vitamine B7/B8) est le cofacteur essentiel de la pyruvate carboxylase.", ["La thiamine", "La biotine", "La riboflavine", "La niacine"]),
    single("Quelle enzyme convertit l'oxaloacétate en phosphoénolpyruvate ?", "D", "La PEP carboxykinase (PEPCK) catalyse cette conversion, en consommant du GTP.", ["La pyruvate carboxylase", "La fructose-1,6-bisphosphatase", "La glucose-6-phosphatase", "La PEP carboxykinase (PEPCK)"]),
    single("Pourquoi l'oxaloacétate formé dans la mitochondrie doit-il être converti en malate avant l'étape de la PEPCK cytosolique ?", "A", "L'oxaloacétate ne peut pas traverser directement la membrane mitochondriale interne ; il est converti en malate pour être exporté, puis reconverti en oxaloacétate dans le cytosol.", ["L'oxaloacétate ne peut pas traverser la membrane mitochondriale interne", "Le malate est un meilleur substrat pour la PEPCK", "Cette conversion produit de l'ATP supplémentaire", "Elle n'est pas réellement nécessaire"]),
    single("Quelle enzyme hydrolyse le fructose-1,6-bisphosphate en fructose-6-phosphate ?", "C", "La fructose-1,6-bisphosphatase (FBPase-1) catalyse cette simple hydrolyse.", ["La PFK-1", "La PEP carboxykinase", "La fructose-1,6-bisphosphatase", "L'aldolase"]),
    single("Quelle enzyme, présente uniquement dans le foie et le rein, catalyse la dernière étape de la néoglucogenèse ?", "B", "La glucose-6-phosphatase, présente uniquement dans le foie et le rein, libère le glucose libre final.", ["L'hexokinase", "La glucose-6-phosphatase", "La glycogène phosphorylase", "La phosphoglucomutase"]),
    single("Combien de nucléotides triphosphates équivalents (ATP/GTP) sont consommés pour synthétiser 1 glucose à partir de 2 pyruvates ?", "C", "Environ 6 nucléotides triphosphates équivalents sont consommés (4 ATP + 2 GTP).", ["2", "4", "6", "10"]),
    multi("Quels précurseurs peuvent alimenter la néoglucogenèse ?", ["A", "B", "C"], "Le lactate, l'alanine et le glycérol sont tous des précurseurs valides de la néoglucogenèse ; les acides gras (via l'acétyl-CoA) ne le sont pas.", ["Le lactate", "L'alanine", "Le glycérol", "Les acides gras"]),
    single("Pourquoi les acides gras ne peuvent-ils pas servir de précurseurs nets du glucose ?", "B", "Parce que la réaction du complexe pyruvate déshydrogénase, qui convertirait l'acétyl-CoA en pyruvate, est irréversible.", ["Parce qu'ils ne contiennent pas de carbone", "Parce que la conversion acétyl-CoA → pyruvate via le complexe PDH est irréversible", "Parce qu'ils sont toujours stockés sous forme de triglycérides", "Parce qu'ils inhibent directement la PEPCK"]),
    single("Qu'est-ce que le cycle de Cori ?", "A", "Le cycle de Cori décrit le recyclage du lactate musculaire en glucose par le foie via la néoglucogenèse, le glucose étant renvoyé au muscle.", ["Le recyclage du lactate musculaire en glucose par le foie", "La conversion du glucose en glycogène musculaire", "Le transport du fer entre organes", "La synthèse des acides gras à partir du glucose"]),
  ],
  exam: { titre_fr: "Examen chronométré — Néoglucogenèse", duration_seconds: 1_170 },
};

export const GLUCONEOGENESIS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Qu'est-ce que la néoglucogenèse ?", question_en: "What is gluconeogenesis?", answer_fr: "La voie de synthèse du glucose à partir de précurseurs non glucidiques.", answer_en: "The pathway that synthesizes glucose from non-carbohydrate precursors." },
  { question_fr: "Dans quel organe la néoglucogenèse se déroule-t-elle principalement ?", question_en: "In which organ does gluconeogenesis mainly occur?", answer_fr: "Le foie.", answer_en: "The liver." },
  { question_fr: "Quel autre organe contribue, dans une moindre mesure, à la néoglucogenèse ?", question_en: "Which other organ contributes to a lesser extent to gluconeogenesis?", answer_fr: "Le cortex rénal.", answer_en: "The renal cortex." },
  { question_fr: "Dans quel contexte physiologique la néoglucogenèse devient-elle essentielle ?", question_en: "In what physiological context does gluconeogenesis become essential?", answer_fr: "Pendant le jeûne prolongé, pour maintenir la glycémie.", answer_en: "During prolonged fasting, to maintain blood glucose." },
  { question_fr: "Pourquoi la néoglucogenèse n'est-elle pas une simple réversion de la glycolyse ?", question_en: "Why isn't gluconeogenesis a simple reversal of glycolysis?", answer_fr: "Parce que les 3 étapes irréversibles de la glycolyse doivent être contournées par 4 réactions distinctes catalysées par d'autres enzymes.", answer_en: "Because the 3 irreversible steps of glycolysis must be bypassed by 4 distinct reactions catalyzed by other enzymes." },
  { question_fr: "Quelle enzyme convertit le pyruvate en oxaloacétate ?", question_en: "Which enzyme converts pyruvate into oxaloacetate?", answer_fr: "La pyruvate carboxylase.", answer_en: "Pyruvate carboxylase." },
  { question_fr: "Où se situe la pyruvate carboxylase dans la cellule ?", question_en: "Where is pyruvate carboxylase located in the cell?", answer_fr: "Dans la mitochondrie.", answer_en: "In the mitochondrion." },
  { question_fr: "Quel cofacteur vitaminique est requis par la pyruvate carboxylase ?", question_en: "Which vitamin cofactor is required by pyruvate carboxylase?", answer_fr: "La biotine.", answer_en: "Biotin." },
  { question_fr: "Quel nucléotide est consommé par la réaction de la pyruvate carboxylase ?", question_en: "Which nucleotide is consumed by the pyruvate carboxylase reaction?", answer_fr: "Un ATP.", answer_en: "One ATP." },
  { question_fr: "Quel métabolite active allostériquement la pyruvate carboxylase ?", question_en: "Which metabolite allosterically activates pyruvate carboxylase?", answer_fr: "L'acétyl-CoA.", answer_en: "Acetyl-CoA." },
  { question_fr: "Quelle enzyme convertit l'oxaloacétate en phosphoénolpyruvate ?", question_en: "Which enzyme converts oxaloacetate into phosphoenolpyruvate?", answer_fr: "La PEP carboxykinase (PEPCK).", answer_en: "PEP carboxykinase (PEPCK)." },
  { question_fr: "Quel nucléotide est consommé par la réaction de la PEPCK ?", question_en: "Which nucleotide is consumed by the PEPCK reaction?", answer_fr: "Un GTP.", answer_en: "One GTP." },
  { question_fr: "Sous quelle forme l'oxaloacétate mitochondrial est-il exporté vers le cytosol ?", question_en: "In what form is mitochondrial oxaloacetate exported to the cytosol?", answer_fr: "Sous forme de malate.", answer_en: "As malate." },
  { question_fr: "Pourquoi l'oxaloacétate ne peut-il pas être exporté directement, sans passer par le malate ?", question_en: "Why can't oxaloacetate be exported directly, without going through malate?", answer_fr: "Il ne traverse pas librement la membrane mitochondriale interne, contrairement au malate.", answer_en: "It cannot freely cross the inner mitochondrial membrane, unlike malate." },
  { question_fr: "Quelle enzyme hydrolyse le fructose-1,6-bisphosphate en fructose-6-phosphate ?", question_en: "Which enzyme hydrolyzes fructose-1,6-bisphosphate into fructose-6-phosphate?", answer_fr: "La fructose-1,6-bisphosphatase (FBPase-1).", answer_en: "Fructose-1,6-bisphosphatase (FBPase-1)." },
  { question_fr: "Cette réaction de la FBPase-1 produit-elle de l'ATP ?", question_en: "Does the FBPase-1 reaction produce ATP?", answer_fr: "Non, c'est une simple hydrolyse, sans production de nucléotide.", answer_en: "No, it is a simple hydrolysis, with no nucleotide production." },
  { question_fr: "Quelle enzyme catalyse la dernière étape de la néoglucogenèse, libérant du glucose libre ?", question_en: "Which enzyme catalyzes the last step of gluconeogenesis, releasing free glucose?", answer_fr: "La glucose-6-phosphatase.", answer_en: "Glucose-6-phosphatase." },
  { question_fr: "Dans quels organes la glucose-6-phosphatase est-elle exprimée ?", question_en: "In which organs is glucose-6-phosphatase expressed?", answer_fr: "Le foie et le rein uniquement.", answer_en: "Only the liver and kidney." },
  { question_fr: "Combien d'ATP au total sont consommés pour convertir 2 pyruvates en 1 glucose (comptant les GTP comme ATP) ?", question_en: "How many total ATP-equivalents are consumed to convert 2 pyruvates into 1 glucose (counting GTP as ATP)?", answer_fr: "Environ 6 (4 ATP + 2 GTP).", answer_en: "About 6 (4 ATP + 2 GTP)." },
  { question_fr: "Combien de NADH sont consommés pour synthétiser 1 glucose à partir de 2 pyruvates ?", question_en: "How many NADH are consumed to synthesize 1 glucose from 2 pyruvates?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "Quel est le précurseur de la néoglucogenèse issu du muscle en anaérobiose ?", question_en: "Which gluconeogenesis precursor comes from muscle under anaerobic conditions?", answer_fr: "Le lactate.", answer_en: "Lactate." },
  { question_fr: "Qu'est-ce que le cycle de Cori ?", question_en: "What is the Cori cycle?", answer_fr: "Le recyclage du lactate musculaire en glucose par le foie, le glucose étant ensuite renvoyé au muscle.", answer_en: "The recycling of muscle lactate into glucose by the liver, with the glucose then sent back to the muscle." },
  { question_fr: "Qu'est-ce que le cycle glucose-alanine ?", question_en: "What is the glucose-alanine cycle?", answer_fr: "Le transport de carbone et d'azote du muscle vers le foie sous forme d'alanine, convertie en glucose par néoglucogenèse.", answer_en: "The transport of carbon and nitrogen from muscle to liver as alanine, converted into glucose via gluconeogenesis." },
  { question_fr: "Comment le glycérol entre-t-il dans la voie de la néoglucogenèse ?", question_en: "How does glycerol enter the gluconeogenesis pathway?", answer_fr: "Il est phosphorylé en glycérol-3-phosphate puis oxydé en dihydroxyacétone phosphate (DHAP), qui rejoint directement la voie.", answer_en: "It is phosphorylated to glycerol-3-phosphate then oxidized to dihydroxyacetone phosphate (DHAP), which directly joins the pathway." },
  { question_fr: "D'où provient le glycérol utilisé en néoglucogenèse ?", question_en: "Where does the glycerol used in gluconeogenesis come from?", answer_fr: "De la lipolyse des triglycérides dans le tissu adipeux.", answer_en: "From triglyceride lipolysis in adipose tissue." },
  { question_fr: "Comment les acides aminés glucoformateurs contribuent-ils à la néoglucogenèse ?", question_en: "How do glucogenic amino acids contribute to gluconeogenesis?", answer_fr: "Ils sont dégradés en intermédiaires du cycle de Krebs (ex. succinyl-CoA), convertibles en oxaloacétate.", answer_en: "They are broken down into Krebs cycle intermediates (e.g. succinyl-CoA), convertible into oxaloacetate." },
  { question_fr: "Les acides gras peuvent-ils être des précurseurs nets du glucose ?", question_en: "Can fatty acids be net precursors of glucose?", answer_fr: "Non, car la conversion de l'acétyl-CoA en pyruvate via le complexe PDH est irréversible.", answer_en: "No, because the conversion of acetyl-CoA to pyruvate via the PDH complex is irreversible." },
  { question_fr: "Combien de réactions de la glycolyse sont communes et simplement inversées en néoglucogenèse ?", question_en: "How many glycolysis reactions are shared and simply reversed in gluconeogenesis?", answer_fr: "Sept.", answer_en: "Seven." },
  { question_fr: "Quel est l'intérêt métabolique majeur de la néoglucogenèse pour l'organisme entier lors d'un jeûne prolongé ?", question_en: "What is the major metabolic benefit of gluconeogenesis for the whole body during prolonged fasting?", answer_fr: "Elle maintient la glycémie pour les tissus glucodépendants comme le cerveau et les érythrocytes, dépourvus de réserves de glycogène suffisantes ou de mitochondries.", answer_en: "It maintains blood glucose for glucose-dependent tissues like the brain and red blood cells, which lack sufficient glycogen stores or mitochondria." },
  { question_fr: "Résumez en une phrase le principe de la néoglucogenèse.", question_en: "Summarize in one sentence the principle of gluconeogenesis.", answer_fr: "Elle reconstruit le glucose à partir de précurseurs non glucidiques (lactate, alanine, glycérol) en contournant les trois étapes irréversibles de la glycolyse par quatre réactions coûteuses en énergie.", answer_en: "It rebuilds glucose from non-carbohydrate precursors (lactate, alanine, glycerol) by bypassing the three irreversible steps of glycolysis through four energetically costly reactions." },
];

const GLUCONEOGENESIS_REGULATION_COURSE = `# Régulation de la néoglucogenèse

## 1. Principes généraux
- La néoglucogenèse est régulée en **sens opposé** de la glycolyse, par les mêmes signaux hormonaux (**glucagon** l'active, **insuline** l'inhibe) et métaboliques.
- Trois enzymes clés sont régulées : **pyruvate carboxylase**, **PEP carboxykinase (PEPCK)**, **fructose-1,6-bisphosphatase (FBPase-1)**.

## 2. Régulation de la pyruvate carboxylase
- Activée allostériquement par l'**acétyl-CoA** : une β-oxydation intense des acides gras (jeûne) génère un excès d'acétyl-CoA, qui **inhibe simultanément le complexe PDH** (épargnant le pyruvate) et **active la pyruvate carboxylase** (orientant le pyruvate vers la néoglucogenèse).

## 3. Régulation de la PEP carboxykinase (PEPCK)
- Régulée principalement au niveau de sa **transcription génique** (régulation à long terme) : le glucagon (via PKA et le facteur de transcription CREB) stimule sa transcription ; l'insuline l'inhibe.
- Pas de régulation allostérique rapide majeure connue pour cette enzyme.

## 4. Régulation de la fructose-1,6-bisphosphatase (FBPase-1)
- **Inhibée** par le **fructose-2,6-bisphosphate (F2,6BP)** — effet miroir inversé de son action activatrice sur la PFK-1 en glycolyse.
- **Inhibée** par l'**AMP** (signal de faible charge énergétique : la cellule ne doit pas dépenser d'ATP pour synthétiser du glucose si elle en manque déjà).
- **Activée** par le **citrate**.

## 5. Le rôle central du F2,6BP — régulateur croisé glycolyse/néoglucogenèse
- Contrôlé par l'enzyme bifonctionnelle **PFK-2/FBPase-2**.
- **Glucagon (jeûne)** → F2,6BP bas → **PFK-1 inhibée** (glycolyse freinée) **ET FBPase-1 désinhibée** (néoglucogenèse stimulée) : double effet coordonné par un seul signal.
- **Insuline (état nourri)** → F2,6BP élevé → **PFK-1 stimulée** (glycolyse active) **ET FBPase-1 inhibée** (néoglucogenèse freinée).

## 6. Coordination avec la pyruvate kinase glycolytique
- L'inactivation de la pyruvate kinase hépatique par le glucagon (voir régulation de la glycolyse) empêche un **cycle futile** où le PEP nouvellement formé par la PEPCK serait immédiatement reconverti en pyruvate.

## Points à retenir
- Le glucagon stimule globalement la néoglucogenèse (transcription de la PEPCK, F2,6BP bas désinhibant la FBPase-1) ; l'insuline fait l'inverse.
- L'acétyl-CoA active la pyruvate carboxylase, couplant la disponibilité en acides gras à la néoglucogenèse.
- Le F2,6BP est le régulateur croisé central, inhibant simultanément la FBPase-1 et activant la PFK-1.`;

export const GLUCONEOGENESIS_REGULATION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Régulation de la néoglucogenèse",
    source_label: "Synthèse — Metabolism: Regulation of Gluconeogenesis (Ninja Nerd)",
    content_fr: GLUCONEOGENESIS_REGULATION_COURSE,
  },
  qcm: [
    single("La néoglucogenèse est-elle régulée dans le même sens que la glycolyse par le glucagon et l'insuline ?", "B", "Elle est régulée en sens opposé : le glucagon active la néoglucogenèse et inhibe la glycolyse ; l'insuline fait l'inverse.", ["Oui, dans le même sens", "Non, en sens opposé", "Elle n'est régulée par aucune des deux hormones", "Seule l'insuline la régule"]),
    single("Quel métabolite active allostériquement la pyruvate carboxylase ?", "C", "L'acétyl-CoA, issu notamment de la β-oxydation des acides gras, active allostériquement la pyruvate carboxylase.", ["Le citrate", "L'AMP", "L'acétyl-CoA", "Le F2,6BP"]),
    single("Pourquoi un excès d'acétyl-CoA favorise-t-il à la fois l'inhibition du complexe PDH et l'activation de la pyruvate carboxylase ?", "A", "Ce double effet oriente le pyruvate vers la néoglucogenèse plutôt que vers sa dégradation complète, épargnant le carbone pour la synthèse de glucose.", ["Il oriente le pyruvate vers la néoglucogenèse plutôt que vers sa dégradation", "Il n'existe aucun lien fonctionnel entre ces deux effets", "Il active uniquement la glycolyse", "Il bloque totalement le cycle de Krebs"]),
    single("Comment la PEP carboxykinase (PEPCK) est-elle principalement régulée ?", "D", "La PEPCK est régulée principalement au niveau transcriptionnel, le glucagon stimulant sa transcription et l'insuline l'inhibant.", ["Par phosphorylation rapide via la PKA", "Par un inhibiteur allostérique puissant", "Elle n'est pas régulée", "Au niveau de sa transcription génique"]),
    single("Quel effet le fructose-2,6-bisphosphate (F2,6BP) a-t-il sur la fructose-1,6-bisphosphatase (FBPase-1) ?", "B", "Le F2,6BP inhibe la FBPase-1, un effet miroir inversé de son activation de la PFK-1 en glycolyse.", ["Il l'active fortement", "Il l'inhibe", "Il n'a aucun effet", "Il la dégrade"]),
    single("Quel effet l'AMP a-t-il sur la fructose-1,6-bisphosphatase ?", "A", "L'AMP inhibe la FBPase-1, car la cellule ne doit pas consommer d'ATP pour la néoglucogenèse quand sa charge énergétique est déjà basse.", ["Il l'inhibe", "Il l'active", "Il n'a aucun effet", "Il stimule sa transcription"]),
    single("Quel métabolite active la fructose-1,6-bisphosphatase ?", "C", "Le citrate active la FBPase-1, cohérent avec un signal d'abondance énergétique favorisant la néoglucogenèse.", ["L'AMP", "Le F2,6BP", "Le citrate", "L'acétyl-CoA"]),
    single("Quel est l'effet du glucagon sur le niveau de F2,6BP hépatique ?", "B", "Le glucagon diminue le F2,6BP, désinhibant la FBPase-1 et stimulant ainsi la néoglucogenèse.", ["Il l'augmente", "Il le diminue", "Il n'a aucun effet", "Il le maintient constant"]),
    single("Comment la baisse du F2,6BP sous l'effet du glucagon affecte-t-elle simultanément la glycolyse et la néoglucogenèse ?", "A", "Elle inhibe la PFK-1 (freinant la glycolyse) et désinhibe la FBPase-1 (stimulant la néoglucogenèse), un double effet coordonné par un seul signal.", ["Elle freine la glycolyse et stimule la néoglucogenèse simultanément", "Elle stimule les deux voies simultanément", "Elle n'a d'effet que sur la glycolyse", "Elle inhibe uniquement la néoglucogenèse"]),
    single("Pourquoi l'inactivation de la pyruvate kinase hépatique par le glucagon est-elle importante pour la néoglucogenèse ?", "C", "Elle empêche un cycle futile où le PEP nouvellement formé par la PEPCK serait immédiatement reconverti en pyruvate.", ["Elle active directement la PEPCK", "Elle n'a aucun lien avec la néoglucogenèse", "Elle empêche un cycle futile de reconversion du PEP en pyruvate", "Elle stimule la glycogénolyse"]),
    single("Quel est l'effet global de l'insuline sur les trois enzymes régulatrices de la néoglucogenèse ?", "B", "L'insuline inhibe globalement la néoglucogenèse : elle réduit la transcription de la PEPCK et augmente le F2,6BP, inhibant la FBPase-1.", ["Elle les active toutes fortement", "Elle inhibe globalement la néoglucogenèse", "Elle n'a aucun effet sur ces enzymes", "Elle active uniquement la pyruvate carboxylase"]),
  ],
  exam: { titre_fr: "Examen chronométré — Régulation de la néoglucogenèse", duration_seconds: 990 },
};

export const GLUCONEOGENESIS_REGULATION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "La néoglucogenèse est-elle activée ou inhibée par le glucagon ?", question_en: "Is gluconeogenesis activated or inhibited by glucagon?", answer_fr: "Activée.", answer_en: "Activated." },
  { question_fr: "La néoglucogenèse est-elle activée ou inhibée par l'insuline ?", question_en: "Is gluconeogenesis activated or inhibited by insulin?", answer_fr: "Inhibée.", answer_en: "Inhibited." },
  { question_fr: "Quelles sont les trois enzymes clés régulées de la néoglucogenèse ?", question_en: "What are the three key regulated enzymes of gluconeogenesis?", answer_fr: "La pyruvate carboxylase, la PEP carboxykinase (PEPCK) et la fructose-1,6-bisphosphatase (FBPase-1).", answer_en: "Pyruvate carboxylase, PEP carboxykinase (PEPCK), and fructose-1,6-bisphosphatase (FBPase-1)." },
  { question_fr: "Quel métabolite active la pyruvate carboxylase ?", question_en: "Which metabolite activates pyruvate carboxylase?", answer_fr: "L'acétyl-CoA.", answer_en: "Acetyl-CoA." },
  { question_fr: "D'où provient l'acétyl-CoA qui active la pyruvate carboxylase pendant le jeûne ?", question_en: "Where does the acetyl-CoA that activates pyruvate carboxylase during fasting come from?", answer_fr: "De la β-oxydation des acides gras.", answer_en: "From fatty acid beta-oxidation." },
  { question_fr: "Quel double effet l'acétyl-CoA a-t-il sur le devenir du pyruvate ?", question_en: "What dual effect does acetyl-CoA have on the fate of pyruvate?", answer_fr: "Il inhibe le complexe PDH (épargnant le pyruvate) et active la pyruvate carboxylase (l'orientant vers la néoglucogenèse).", answer_en: "It inhibits the PDH complex (sparing pyruvate) and activates pyruvate carboxylase (directing it toward gluconeogenesis)." },
  { question_fr: "À quel niveau la PEPCK est-elle principalement régulée ?", question_en: "At what level is PEPCK mainly regulated?", answer_fr: "Au niveau transcriptionnel (expression du gène).", answer_en: "At the transcriptional level (gene expression)." },
  { question_fr: "Quel facteur de transcription, activé via la PKA, stimule la transcription de la PEPCK sous l'effet du glucagon ?", question_en: "Which transcription factor, activated via PKA, stimulates PEPCK transcription in response to glucagon?", answer_fr: "CREB.", answer_en: "CREB." },
  { question_fr: "L'insuline stimule-t-elle ou inhibe-t-elle la transcription de la PEPCK ?", question_en: "Does insulin stimulate or inhibit PEPCK transcription?", answer_fr: "Elle l'inhibe.", answer_en: "It inhibits it." },
  { question_fr: "Quel métabolite inhibe la fructose-1,6-bisphosphatase (FBPase-1) ?", question_en: "Which metabolite inhibits fructose-1,6-bisphosphatase (FBPase-1)?", answer_fr: "Le fructose-2,6-bisphosphate (F2,6BP).", answer_en: "Fructose-2,6-bisphosphate (F2,6BP)." },
  { question_fr: "Cette inhibition de la FBPase-1 par le F2,6BP est-elle cohérente avec son effet sur la PFK-1 ?", question_en: "Is this inhibition of FBPase-1 by F2,6BP consistent with its effect on PFK-1?", answer_fr: "Oui, c'est un effet miroir inversé : le F2,6BP active la PFK-1 (glycolyse) mais inhibe la FBPase-1 (néoglucogenèse).", answer_en: "Yes, it's a mirror-image effect: F2,6BP activates PFK-1 (glycolysis) but inhibits FBPase-1 (gluconeogenesis)." },
  { question_fr: "Quel métabolite, signal de faible charge énergétique, inhibe la FBPase-1 ?", question_en: "Which metabolite, a low-energy-charge signal, inhibits FBPase-1?", answer_fr: "L'AMP.", answer_en: "AMP." },
  { question_fr: "Pourquoi est-il logique que l'AMP inhibe la FBPase-1 ?", question_en: "Why does it make sense for AMP to inhibit FBPase-1?", answer_fr: "Parce que la néoglucogenèse est coûteuse en ATP ; la cellule ne doit pas la poursuivre si elle manque déjà d'énergie.", answer_en: "Because gluconeogenesis is ATP-costly; the cell should not pursue it when already low on energy." },
  { question_fr: "Quel métabolite active la FBPase-1 ?", question_en: "Which metabolite activates FBPase-1?", answer_fr: "Le citrate.", answer_en: "Citrate." },
  { question_fr: "Quelle enzyme bifonctionnelle contrôle le niveau de F2,6BP, régulateur croisé glycolyse/néoglucogenèse ?", question_en: "Which bifunctional enzyme controls F2,6BP levels, the cross-regulator of glycolysis/gluconeogenesis?", answer_fr: "La PFK-2/FBPase-2.", answer_en: "PFK-2/FBPase-2." },
  { question_fr: "Quel est l'effet du glucagon sur le niveau de F2,6BP hépatique ?", question_en: "What is the effect of glucagon on hepatic F2,6BP levels?", answer_fr: "Il le fait diminuer.", answer_en: "It decreases it." },
  { question_fr: "Quel double effet la baisse du F2,6BP a-t-elle sur la glycolyse et la néoglucogenèse ?", question_en: "What dual effect does the drop in F2,6BP have on glycolysis and gluconeogenesis?", answer_fr: "Elle inhibe la PFK-1 (glycolyse freinée) et désinhibe la FBPase-1 (néoglucogenèse stimulée).", answer_en: "It inhibits PFK-1 (slowing glycolysis) and de-inhibits FBPase-1 (stimulating gluconeogenesis)." },
  { question_fr: "Quel est l'effet de l'insuline sur le niveau de F2,6BP hépatique, comparé au glucagon ?", question_en: "What is the effect of insulin on hepatic F2,6BP levels, compared to glucagon?", answer_fr: "L'insuline l'augmente, effet opposé au glucagon.", answer_en: "Insulin increases it, the opposite effect of glucagon." },
  { question_fr: "Pourquoi l'inactivation de la pyruvate kinase hépatique par le glucagon est-elle importante pour la néoglucogenèse ?", question_en: "Why is glucagon-mediated inactivation of hepatic pyruvate kinase important for gluconeogenesis?", answer_fr: "Elle évite un cycle futile où le PEP fraîchement formé par la PEPCK serait immédiatement reconverti en pyruvate.", answer_en: "It prevents a futile cycle where PEP freshly formed by PEPCK would be immediately converted back to pyruvate." },
  { question_fr: "Qu'est-ce qu'un « cycle futile » en contexte de régulation métabolique ?", question_en: "What is a \"futile cycle\" in the context of metabolic regulation?", answer_fr: "Une situation où deux réactions opposées se dérouleraient simultanément, consommant de l'énergie sans bénéfice net.", answer_en: "A situation where two opposing reactions run simultaneously, consuming energy with no net benefit." },
  { question_fr: "Le foie synthétise-t-il activement du glucose et le dégrade-t-il simultanément en temps normal ?", question_en: "Does the liver normally synthesize glucose and break it down simultaneously?", answer_fr: "Non, la régulation hormonale croisée (glucagon/insuline via le F2,6BP et la pyruvate kinase) empêche les deux voies d'être actives en même temps.", answer_en: "No, cross hormonal regulation (glucagon/insulin via F2,6BP and pyruvate kinase) prevents both pathways from being active at once." },
  { question_fr: "Résumez en une phrase la logique globale de régulation de la néoglucogenèse.", question_en: "Summarize in one sentence the overall regulatory logic of gluconeogenesis.", answer_fr: "Le glucagon (via le F2,6BP bas, la transcription de la PEPCK et l'inactivation de la pyruvate kinase) et l'acétyl-CoA (activant la pyruvate carboxylase) stimulent la néoglucogenèse pendant le jeûne, tandis que l'insuline l'inhibe globalement en état nourri.", answer_en: "Glucagon (via low F2,6BP, PEPCK transcription, and pyruvate kinase inactivation) and acetyl-CoA (activating pyruvate carboxylase) stimulate gluconeogenesis during fasting, while insulin broadly inhibits it in the fed state." },
];

const FATTY_ACID_SYNTHESIS_1_COURSE = `# Synthèse des acides gras (partie 1) — De l'acétyl-CoA au malonyl-CoA

## 1. Vue d'ensemble
- Voie de synthèse des acides gras (**lipogenèse**), se déroulant dans le **cytosol**, principalement dans le **foie** et le **tissu adipeux**.
- Précurseur : **acétyl-CoA**, dérivé du glucose en excès via la glycolyse puis le complexe PDH.
- Stimulée par l'**insuline** (état nourri, excès calorique) ; inhibée par le **glucagon**.

## 2. Export de l'acétyl-CoA mitochondrial vers le cytosol : la navette du citrate
- L'acétyl-CoA ne traverse pas librement la membrane mitochondriale interne.
- Lorsqu'il est abondant, il se condense avec l'oxaloacétate pour former du **citrate** (citrate synthase), qui s'accumule et est exporté vers le cytosol via un transporteur dédié.
- Dans le cytosol, l'**ATP-citrate lyase** clive le citrate en oxaloacétate + acétyl-CoA, consommant 1 ATP, régénérant l'acétyl-CoA cytosolique nécessaire à la lipogenèse.
- L'oxaloacétate cytosolique est reconverti en **malate** puis en **pyruvate** par l'**enzyme malique**, une réaction qui produit au passage du **NADPH**, cofacteur réducteur essentiel à la synthèse des acides gras ; le pyruvate retourne ensuite dans la mitochondrie.

## 3. L'acétyl-CoA carboxylase (ACC) — enzyme limitante
- Catalyse la carboxylation de l'acétyl-CoA en **malonyl-CoA**, consommant 1 ATP et du CO₂ (sous forme de bicarbonate), avec la **biotine** comme cofacteur.
- C'est l'étape **limitante et la plus régulée** de toute la voie de synthèse des acides gras.
- **Activée** allostériquement par le **citrate** (favorise la polymérisation de l'ACC en une forme filamenteuse active).
- **Inhibée** allostériquement par le **palmitoyl-CoA** (produit final de la voie, rétro-inhibition).
- Régulée hormonalement par phosphorylation : **inactivée** par phosphorylation via l'**AMPK** (activée par un AMP élevé) et par le **glucagon** (via la PKA) ; **activée** par déphosphorylation sous l'effet de l'**insuline**.

## 4. Le complexe acide gras synthase (FAS)
- Chez les mammifères, un complexe multienzymatique unique : un seul polypeptide homodimérique portant plusieurs activités catalytiques distinctes.
- Contient un bras mobile, la **protéine porteuse d'acyle (ACP)**, portant un groupement **phosphopantéthéine** (dérivé de la vitamine B5), qui navette les intermédiaires entre les différents sites actifs.
- Utilise le **malonyl-CoA** (fournisseur de 2 carbones à chaque cycle d'élongation) et l'**acétyl-CoA** (amorce initiale de la chaîne).
- Chaque cycle d'élongation consomme **2 NADPH**, provenant principalement de la voie des pentoses phosphates et de l'enzyme malique.

## Points à retenir
- L'acétyl-CoA mitochondrial est exporté vers le cytosol via la navette du citrate (citrate synthase → export → ATP-citrate lyase), avec production de NADPH au passage via l'enzyme malique.
- L'acétyl-CoA carboxylase (ACC), dépendante de la biotine, est l'enzyme limitante : activée par le citrate, inhibée par le palmitoyl-CoA et par phosphorylation (AMPK/glucagon).
- Le complexe FAS utilise le malonyl-CoA et le NADPH pour élonger la chaîne d'acide gras, 2 carbones par cycle.`;

export const FATTY_ACID_SYNTHESIS_1_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Synthèse des acides gras (1) : de l'acétyl-CoA au malonyl-CoA",
    source_label: "Synthèse — Metabolism: Fatty Acid Synthesis Part 1 (Ninja Nerd)",
    content_fr: FATTY_ACID_SYNTHESIS_1_COURSE,
  },
  qcm: [
    single("Dans quel compartiment cellulaire se déroule la synthèse des acides gras ?", "B", "La lipogenèse se déroule dans le cytosol.", ["Dans la mitochondrie", "Dans le cytosol", "Dans le noyau", "Dans le réticulum endoplasmique lisse uniquement"]),
    single("Quel est le précurseur direct de la synthèse des acides gras ?", "C", "L'acétyl-CoA, dérivé du glucose en excès, est le précurseur direct.", ["Le glucose-6-phosphate", "Le glycérol", "L'acétyl-CoA", "Le pyruvate"]),
    single("Comment l'acétyl-CoA mitochondrial est-il exporté vers le cytosol ?", "A", "Il se condense avec l'oxaloacétate en citrate, exporté vers le cytosol puis reclivé par l'ATP-citrate lyase.", ["Via la navette du citrate", "Il traverse directement la membrane mitochondriale", "Via la navette malate-aspartate uniquement", "Il n'a pas besoin d'être exporté"]),
    single("Quelle enzyme cytosolique reclive le citrate en oxaloacétate et acétyl-CoA ?", "D", "L'ATP-citrate lyase clive le citrate cytosolique en oxaloacétate et acétyl-CoA, consommant 1 ATP.", ["La citrate synthase", "L'aconitase", "L'isocitrate déshydrogénase", "L'ATP-citrate lyase"]),
    single("Quelle enzyme, en reconvertissant le malate en pyruvate, produit du NADPH utile à la lipogenèse ?", "B", "L'enzyme malique convertit le malate en pyruvate en produisant du NADPH.", ["La malate déshydrogénase", "L'enzyme malique", "La fumarase", "L'aconitase"]),
    single("Quelle réaction est catalysée par l'acétyl-CoA carboxylase (ACC) ?", "C", "L'ACC carboxyle l'acétyl-CoA en malonyl-CoA, consommant 1 ATP et du CO2.", ["Acétyl-CoA → Citrate", "Malonyl-CoA → Palmitate", "Acétyl-CoA → Malonyl-CoA", "Pyruvate → Acétyl-CoA"]),
    single("Quel cofacteur vitaminique est nécessaire à l'acétyl-CoA carboxylase ?", "A", "La biotine est le cofacteur essentiel de l'ACC, comme pour la pyruvate carboxylase.", ["La biotine", "La thiamine", "La riboflavine", "L'acide folique"]),
    single("Quel métabolite active allostériquement l'acétyl-CoA carboxylase ?", "B", "Le citrate active l'ACC en favorisant sa polymérisation en une forme filamenteuse active.", ["Le palmitoyl-CoA", "Le citrate", "L'AMP", "Le glucagon"]),
    single("Quel métabolite inhibe allostériquement l'acétyl-CoA carboxylase par rétro-inhibition ?", "C", "Le palmitoyl-CoA, produit final de la voie, inhibe l'ACC par rétro-inhibition.", ["Le citrate", "L'acétyl-CoA", "Le palmitoyl-CoA", "Le glucose-6-phosphate"]),
    single("Quelle kinase, activée par un AMP élevé, inactive l'acétyl-CoA carboxylase par phosphorylation ?", "D", "L'AMPK, activée par une charge énergétique basse, phosphoryle et inactive l'ACC.", ["La PKA", "La GSK3", "La PDH kinase", "L'AMPK"]),
    single("Quel intermédiaire, produit par l'ACC, fournit les 2 carbones ajoutés à chaque cycle d'élongation par la synthase des acides gras ?", "A", "Le malonyl-CoA fournit 2 carbones à chaque cycle d'élongation du complexe FAS.", ["Le malonyl-CoA", "L'acétyl-CoA seul", "Le citrate", "Le NADPH"]),
    single("Quel cofacteur réducteur est consommé à chaque cycle d'élongation par le complexe acide gras synthase ?", "B", "Chaque cycle d'élongation consomme 2 NADPH.", ["Le NADH", "Le NADPH", "Le FADH2", "L'ATP uniquement"]),
  ],
  exam: { titre_fr: "Examen chronométré — Synthèse des acides gras (1)", duration_seconds: 1_080 },
};

export const FATTY_ACID_SYNTHESIS_1_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Dans quel compartiment cellulaire se déroule la synthèse des acides gras ?", question_en: "In which cellular compartment does fatty acid synthesis occur?", answer_fr: "Dans le cytosol.", answer_en: "In the cytosol." },
  { question_fr: "Quels sont les deux principaux tissus de la lipogenèse ?", question_en: "What are the two main tissues for lipogenesis?", answer_fr: "Le foie et le tissu adipeux.", answer_en: "The liver and adipose tissue." },
  { question_fr: "Quel est le précurseur direct de la synthèse des acides gras ?", question_en: "What is the direct precursor of fatty acid synthesis?", answer_fr: "L'acétyl-CoA.", answer_en: "Acetyl-CoA." },
  { question_fr: "L'acétyl-CoA mitochondrial peut-il traverser directement la membrane mitochondriale interne ?", question_en: "Can mitochondrial acetyl-CoA directly cross the inner mitochondrial membrane?", answer_fr: "Non, il doit être exporté sous une autre forme.", answer_en: "No, it must be exported in another form." },
  { question_fr: "Avec quel métabolite l'acétyl-CoA se condense-t-il pour permettre son export mitochondrial ?", question_en: "Which metabolite does acetyl-CoA condense with to allow its mitochondrial export?", answer_fr: "L'oxaloacétate, formant du citrate.", answer_en: "Oxaloacetate, forming citrate." },
  { question_fr: "Quelle enzyme catalyse cette condensation initiale ?", question_en: "Which enzyme catalyzes this initial condensation?", answer_fr: "La citrate synthase.", answer_en: "Citrate synthase." },
  { question_fr: "Quelle enzyme cytosolique reclive le citrate exporté en oxaloacétate et acétyl-CoA ?", question_en: "Which cytosolic enzyme re-cleaves the exported citrate into oxaloacetate and acetyl-CoA?", answer_fr: "L'ATP-citrate lyase.", answer_en: "ATP-citrate lyase." },
  { question_fr: "Quel nucléotide est consommé par l'ATP-citrate lyase ?", question_en: "Which nucleotide is consumed by ATP-citrate lyase?", answer_fr: "Un ATP.", answer_en: "One ATP." },
  { question_fr: "Que devient l'oxaloacétate cytosolique régénéré par l'ATP-citrate lyase ?", question_en: "What happens to the cytosolic oxaloacetate regenerated by ATP-citrate lyase?", answer_fr: "Il est converti en malate, puis en pyruvate par l'enzyme malique.", answer_en: "It is converted to malate, then to pyruvate by malic enzyme." },
  { question_fr: "Quel cofacteur réduit est produit par l'enzyme malique lors de la conversion du malate en pyruvate ?", question_en: "Which reduced cofactor is produced by malic enzyme when converting malate to pyruvate?", answer_fr: "Le NADPH.", answer_en: "NADPH." },
  { question_fr: "Pourquoi le NADPH produit par l'enzyme malique est-il important pour la lipogenèse ?", question_en: "Why is the NADPH produced by malic enzyme important for lipogenesis?", answer_fr: "C'est un cofacteur réducteur essentiel utilisé par le complexe acide gras synthase.", answer_en: "It is an essential reducing cofactor used by the fatty acid synthase complex." },
  { question_fr: "Quelle enzyme catalyse la première étape régulatrice de la synthèse des acides gras ?", question_en: "Which enzyme catalyzes the first regulatory step of fatty acid synthesis?", answer_fr: "L'acétyl-CoA carboxylase (ACC).", answer_en: "Acetyl-CoA carboxylase (ACC)." },
  { question_fr: "Quelle réaction l'ACC catalyse-t-elle ?", question_en: "Which reaction does ACC catalyze?", answer_fr: "La carboxylation de l'acétyl-CoA en malonyl-CoA.", answer_en: "The carboxylation of acetyl-CoA into malonyl-CoA." },
  { question_fr: "Quel cofacteur vitaminique est requis par l'ACC ?", question_en: "Which vitamin cofactor is required by ACC?", answer_fr: "La biotine.", answer_en: "Biotin." },
  { question_fr: "Quel nucléotide est consommé par la réaction de l'ACC ?", question_en: "Which nucleotide is consumed by the ACC reaction?", answer_fr: "Un ATP.", answer_en: "One ATP." },
  { question_fr: "Pourquoi l'ACC est-elle considérée comme l'enzyme limitante de la lipogenèse ?", question_en: "Why is ACC considered the rate-limiting enzyme of lipogenesis?", answer_fr: "Parce qu'elle catalyse l'étape la plus régulée et déterminante pour la vitesse de toute la voie.", answer_en: "Because it catalyzes the most regulated and rate-determining step of the entire pathway." },
  { question_fr: "Quel métabolite active allostériquement l'ACC ?", question_en: "Which metabolite allosterically activates ACC?", answer_fr: "Le citrate.", answer_en: "Citrate." },
  { question_fr: "Par quel mécanisme structural le citrate active-t-il l'ACC ?", question_en: "By what structural mechanism does citrate activate ACC?", answer_fr: "Il favorise la polymérisation de l'enzyme en une forme filamenteuse active.", answer_en: "It promotes polymerization of the enzyme into an active filamentous form." },
  { question_fr: "Quel métabolite inhibe l'ACC par rétro-inhibition ?", question_en: "Which metabolite inhibits ACC by feedback inhibition?", answer_fr: "Le palmitoyl-CoA, produit final de la voie.", answer_en: "Palmitoyl-CoA, the final product of the pathway." },
  { question_fr: "Quelle kinase inactive l'ACC par phosphorylation en réponse à une faible charge énergétique ?", question_en: "Which kinase inactivates ACC by phosphorylation in response to a low energy charge?", answer_fr: "L'AMPK (AMP-activated protein kinase).", answer_en: "AMPK (AMP-activated protein kinase)." },
  { question_fr: "Quelle hormone, via la PKA, inactive également l'ACC par phosphorylation ?", question_en: "Which hormone, via PKA, also inactivates ACC by phosphorylation?", answer_fr: "Le glucagon.", answer_en: "Glucagon." },
  { question_fr: "Quelle hormone réactive l'ACC par déphosphorylation ?", question_en: "Which hormone reactivates ACC by dephosphorylation?", answer_fr: "L'insuline.", answer_en: "Insulin." },
  { question_fr: "Quel est le nom du complexe multienzymatique qui élonge la chaîne d'acide gras ?", question_en: "What is the name of the multienzyme complex that elongates the fatty acid chain?", answer_fr: "L'acide gras synthase (FAS).", answer_en: "Fatty acid synthase (FAS)." },
  { question_fr: "Quelle est la particularité structurale du complexe FAS chez les mammifères ?", question_en: "What is the structural particularity of the FAS complex in mammals?", answer_fr: "C'est un seul polypeptide homodimérique portant plusieurs activités catalytiques distinctes.", answer_en: "It is a single homodimeric polypeptide bearing several distinct catalytic activities." },
  { question_fr: "Quel bras mobile du complexe FAS transporte les intermédiaires entre les sites actifs ?", question_en: "Which mobile arm of the FAS complex carries intermediates between active sites?", answer_fr: "La protéine porteuse d'acyle (ACP).", answer_en: "The acyl carrier protein (ACP)." },
  { question_fr: "De quelle vitamine dérive le groupement phosphopantéthéine de l'ACP ?", question_en: "Which vitamin is the phosphopantetheine group of ACP derived from?", answer_fr: "La vitamine B5 (acide pantothénique).", answer_en: "Vitamin B5 (pantothenic acid)." },
  { question_fr: "Quel intermédiaire fournit les 2 carbones ajoutés à chaque cycle d'élongation par le FAS ?", question_en: "Which intermediate supplies the 2 carbons added at each FAS elongation cycle?", answer_fr: "Le malonyl-CoA.", answer_en: "Malonyl-CoA." },
  { question_fr: "Quel intermédiaire sert d'amorce initiale à la chaîne d'acide gras naissante ?", question_en: "Which intermediate serves as the initial primer for the nascent fatty acid chain?", answer_fr: "L'acétyl-CoA.", answer_en: "Acetyl-CoA." },
  { question_fr: "Combien de NADPH sont consommés par cycle d'élongation du complexe FAS ?", question_en: "How many NADPH are consumed per FAS elongation cycle?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "Quelle voie métabolique majeure fournit le NADPH nécessaire à la lipogenèse, en plus de l'enzyme malique ?", question_en: "Which major metabolic pathway supplies the NADPH needed for lipogenesis, besides malic enzyme?", answer_fr: "La voie des pentoses phosphates.", answer_en: "The pentose phosphate pathway." },
  { question_fr: "Résumez en une phrase les premières étapes de la synthèse des acides gras.", question_en: "Summarize in one sentence the first steps of fatty acid synthesis.", answer_fr: "L'acétyl-CoA mitochondrial est exporté vers le cytosol via le citrate, puis converti par l'ACC (dépendante de la biotine) en malonyl-CoA, le substrat activé qui alimentera le complexe FAS.", answer_en: "Mitochondrial acetyl-CoA is exported to the cytosol via citrate, then converted by biotin-dependent ACC into malonyl-CoA, the activated substrate that will feed the FAS complex." },
];
