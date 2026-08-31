import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const KETONE_METABOLISM_COURSE = `# Métabolisme des corps cétoniques

## 1. Vue d'ensemble
- Les **corps cétoniques** (**acétoacétate**, **β-hydroxybutyrate**, et **acétone** en quantité mineure) sont synthétisés dans le **foie** à partir de l'**acétyl-CoA excédentaire** (issu de la β-oxydation intense des acides gras), lorsque le cycle de Krebs est saturé ou l'oxaloacétate limité (jeûne prolongé, diabète non contrôlé).
- Ils constituent un **carburant alternatif** au glucose pour de nombreux tissus, notamment le **cerveau** après quelques jours de jeûne.

## 2. La cétogenèse (synthèse hépatique)

| # | Enzyme | Réaction | Note |
| --- | --- | --- | --- |
| 1 | **Thiolase** | 2 acétyl-CoA → acétoacétyl-CoA | — |
| 2 | **HMG-CoA synthase** (mitochondriale) | Acétoacétyl-CoA + acétyl-CoA → HMG-CoA | Étape limitante et régulatrice |
| 3 | **HMG-CoA lyase** | HMG-CoA → acétoacétate + acétyl-CoA | — |
| 4a | β-hydroxybutyrate déshydrogénase | Acétoacétate → β-hydroxybutyrate | Consomme du NADH |
| 4b | (non enzymatique) | Acétoacétate → acétone (décarboxylation spontanée) | Élimination pulmonaire, haleine cétonique |

## 3. Utilisation périphérique (cétolyse)
- Le **foie ne peut pas utiliser** les corps cétoniques qu'il produit : il est dépourvu de l'enzyme clé, la **succinyl-CoA:acétoacétate CoA transférase (thiophorase/SCOT)**.
- Dans les **tissus périphériques** (cerveau, muscle, cœur) : β-hydroxybutyrate → acétoacétate (réoxydation) → acétoacétyl-CoA (via la thiophorase, utilisant le succinyl-CoA comme donneur de CoA) → **2 acétyl-CoA** (thiolase), entrant dans le cycle de Krebs local.

## 4. Régulation
- Favorisée par un rapport **glucagon/insuline élevé** (jeûne), qui stimule la lipolyse (fournissant les acides gras précurseurs) et la β-oxydation hépatique (via la levée de l'inhibition de CPT1 par la baisse du malonyl-CoA).
- La **HMG-CoA synthase mitochondriale** est activée en situation de jeûne prolongé.

## 5. Importance clinique
- **Cétose physiologique du jeûne** : adaptative, permet d'épargner le glucose et les protéines musculaires.
- **Acidocétose diabétique (ACD)** : en cas de déficit sévère en insuline (diabète de type 1 principalement), la lipolyse et la cétogenèse s'emballent sans frein, provoquant une accumulation massive de corps cétoniques acides, une acidose métabolique sévère, une hyperglycémie et une déshydratation potentiellement fatales.

## Points à retenir
- Cétogenèse hépatique : 2 acétyl-CoA → acétoacétyl-CoA → HMG-CoA (étape limitante, HMG-CoA synthase) → acétoacétate → β-hydroxybutyrate ou acétone.
- Le foie ne peut pas utiliser les corps cétoniques (absence de thiophorase) ; les tissus périphériques les reconvertissent en acétyl-CoA via la thiophorase.
- L'acidocétose diabétique est une complication grave d'un déficit sévère en insuline.`;

export const KETONE_METABOLISM_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Métabolisme des corps cétoniques",
    source_label: "Synthèse — Metabolism: Ketone Metabolism (Ninja Nerd)",
    content_fr: KETONE_METABOLISM_COURSE,
  },
  qcm: [
    single("Quels sont les trois corps cétoniques produits par l'organisme ?", "A", "L'acétoacétate, le β-hydroxybutyrate et l'acétone sont les trois corps cétoniques.", ["Acétoacétate, β-hydroxybutyrate, acétone", "Glucose, lactate, pyruvate", "Citrate, malate, succinate", "Palmitate, oléate, stéarate"]),
    single("Dans quel organe la cétogenèse a-t-elle lieu ?", "B", "La cétogenèse se déroule dans le foie.", ["Le muscle", "Le foie", "Le rein", "Le tissu adipeux"]),
    single("Quelle enzyme catalyse la formation de l'acétoacétyl-CoA à partir de 2 acétyl-CoA ?", "C", "La thiolase condense 2 acétyl-CoA en acétoacétyl-CoA.", ["La HMG-CoA synthase", "La HMG-CoA lyase", "La thiolase", "La β-hydroxybutyrate déshydrogénase"]),
    single("Quelle enzyme catalyse l'étape limitante de la cétogenèse ?", "A", "La HMG-CoA synthase mitochondriale catalyse l'étape limitante, formant le HMG-CoA.", ["La HMG-CoA synthase", "La thiolase", "La HMG-CoA lyase", "La thiophorase"]),
    single("Quelle enzyme clive le HMG-CoA en acétoacétate et acétyl-CoA ?", "D", "La HMG-CoA lyase catalyse cette réaction.", ["La thiolase", "La HMG-CoA synthase", "La thiophorase", "La HMG-CoA lyase"]),
    single("Quel corps cétonique résulte de la réduction de l'acétoacétate ?", "B", "L'acétoacétate est réduit en β-hydroxybutyrate, consommant du NADH.", ["L'acétone", "Le β-hydroxybutyrate", "Le HMG-CoA", "L'acétyl-CoA"]),
    single("Quel corps cétonique résulte de la décarboxylation spontanée (non enzymatique) de l'acétoacétate ?", "C", "L'acétone résulte de la décarboxylation spontanée de l'acétoacétate, responsable de l'haleine cétonique.", ["Le β-hydroxybutyrate", "Le HMG-CoA", "L'acétone", "Le succinyl-CoA"]),
    single("Pourquoi le foie ne peut-il pas utiliser les corps cétoniques qu'il produit ?", "D", "Le foie est dépourvu de la thiophorase (succinyl-CoA:acétoacétate CoA transférase), enzyme clé de la cétolyse.", ["Il manque de mitochondries", "Il manque de HMG-CoA synthase", "Il manque de thiolase", "Il est dépourvu de thiophorase (SCOT)"]),
    single("Quelle enzyme, présente dans les tissus périphériques, permet de reconvertir l'acétoacétate en acétoacétyl-CoA ?", "A", "La thiophorase (succinyl-CoA:acétoacétate CoA transférase), absente du foie, permet cette réaction dans les tissus périphériques.", ["La thiophorase (SCOT)", "La HMG-CoA synthase", "La CPT1", "La glutamate déshydrogénase"]),
    single("Quel donneur de CoA est utilisé par la thiophorase dans les tissus périphériques ?", "B", "Le succinyl-CoA, issu du cycle de Krebs local, sert de donneur de CoA.", ["L'acétyl-CoA", "Le succinyl-CoA", "Le malonyl-CoA", "Le propionyl-CoA"]),
    single("Quel contexte hormonal favorise la cétogenèse ?", "C", "Un rapport glucagon/insuline élevé, caractéristique du jeûne, favorise la cétogenèse.", ["Un rapport insuline/glucagon élevé", "Une insulinémie élevée isolée", "Un rapport glucagon/insuline élevé", "Aucun contexte hormonal spécifique"]),
    single("Quelle est la cause principale de l'acidocétose diabétique ?", "D", "Un déficit sévère en insuline (typiquement diabète de type 1) provoque une lipolyse et une cétogenèse incontrôlées.", ["Un excès chronique d'insuline", "Une carence en glucagon", "Une carence en glucose alimentaire uniquement", "Un déficit sévère en insuline"]),
  ],
  exam: { titre_fr: "Examen chronométré — Métabolisme des corps cétoniques", duration_seconds: 1_080 },
};

export const KETONE_METABOLISM_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quels sont les trois corps cétoniques ?", question_en: "What are the three ketone bodies?", answer_fr: "L'acétoacétate, le β-hydroxybutyrate et l'acétone.", answer_en: "Acetoacetate, beta-hydroxybutyrate, and acetone." },
  { question_fr: "Dans quel organe la cétogenèse se déroule-t-elle ?", question_en: "In which organ does ketogenesis take place?", answer_fr: "Le foie.", answer_en: "The liver." },
  { question_fr: "À partir de quel métabolite excédentaire la cétogenèse démarre-t-elle ?", question_en: "From which excess metabolite does ketogenesis begin?", answer_fr: "L'acétyl-CoA, issu d'une β-oxydation intense des acides gras.", answer_en: "Acetyl-CoA, from intense fatty acid beta-oxidation." },
  { question_fr: "Quelle enzyme condense 2 acétyl-CoA en acétoacétyl-CoA ?", question_en: "Which enzyme condenses 2 acetyl-CoA into acetoacetyl-CoA?", answer_fr: "La thiolase.", answer_en: "Thiolase." },
  { question_fr: "Quelle enzyme forme le HMG-CoA à partir de l'acétoacétyl-CoA et de l'acétyl-CoA ?", question_en: "Which enzyme forms HMG-CoA from acetoacetyl-CoA and acetyl-CoA?", answer_fr: "La HMG-CoA synthase (mitochondriale).", answer_en: "HMG-CoA synthase (mitochondrial)." },
  { question_fr: "La HMG-CoA synthase catalyse-t-elle l'étape limitante de la cétogenèse ?", question_en: "Does HMG-CoA synthase catalyze the rate-limiting step of ketogenesis?", answer_fr: "Oui.", answer_en: "Yes." },
  { question_fr: "Quelle enzyme clive le HMG-CoA pour libérer l'acétoacétate ?", question_en: "Which enzyme cleaves HMG-CoA to release acetoacetate?", answer_fr: "La HMG-CoA lyase.", answer_en: "HMG-CoA lyase." },
  { question_fr: "Quel autre produit est libéré, en plus de l'acétoacétate, par la HMG-CoA lyase ?", question_en: "What other product, besides acetoacetate, is released by HMG-CoA lyase?", answer_fr: "Un acétyl-CoA.", answer_en: "One acetyl-CoA." },
  { question_fr: "Quelle enzyme réduit l'acétoacétate en β-hydroxybutyrate ?", question_en: "Which enzyme reduces acetoacetate to beta-hydroxybutyrate?", answer_fr: "La β-hydroxybutyrate déshydrogénase.", answer_en: "Beta-hydroxybutyrate dehydrogenase." },
  { question_fr: "Quel cofacteur est consommé lors de cette réduction ?", question_en: "Which cofactor is consumed during this reduction?", answer_fr: "Le NADH.", answer_en: "NADH." },
  { question_fr: "Comment l'acétone est-elle formée à partir de l'acétoacétate ?", question_en: "How is acetone formed from acetoacetate?", answer_fr: "Par décarboxylation spontanée, non enzymatique.", answer_en: "By spontaneous, non-enzymatic decarboxylation." },
  { question_fr: "Par quelle voie l'acétone est-elle principalement éliminée ?", question_en: "By which route is acetone mainly eliminated?", answer_fr: "Par voie pulmonaire (expiration).", answer_en: "Via the lungs (exhalation)." },
  { question_fr: "Quel symptôme clinique caractéristique est causé par l'élimination pulmonaire de l'acétone ?", question_en: "What characteristic clinical symptom is caused by pulmonary acetone elimination?", answer_fr: "L'haleine cétonique (odeur fruitée caractéristique).", answer_en: "Ketotic (fruity-smelling) breath." },
  { question_fr: "Pourquoi le foie ne peut-il pas utiliser les corps cétoniques qu'il produit ?", question_en: "Why can't the liver use the ketone bodies it produces?", answer_fr: "Il est dépourvu de la thiophorase (SCOT), enzyme clé nécessaire à leur réutilisation.", answer_en: "It lacks thiophorase (SCOT), the key enzyme needed to reuse them." },
  { question_fr: "Quelle enzyme, absente du foie, permet aux tissus périphériques d'utiliser les corps cétoniques ?", question_en: "Which enzyme, absent from the liver, allows peripheral tissues to use ketone bodies?", answer_fr: "La thiophorase (succinyl-CoA:acétoacétate CoA transférase, SCOT).", answer_en: "Thiophorase (succinyl-CoA:acetoacetate CoA transferase, SCOT)." },
  { question_fr: "Quel donneur de CoA la thiophorase utilise-t-elle ?", question_en: "Which CoA donor does thiophorase use?", answer_fr: "Le succinyl-CoA, issu du cycle de Krebs local.", answer_en: "Succinyl-CoA, from the local Krebs cycle." },
  { question_fr: "Quel produit final la thiolase forme-t-elle à partir de l'acétoacétyl-CoA dans les tissus périphériques ?", question_en: "What final product does thiolase form from acetoacetyl-CoA in peripheral tissues?", answer_fr: "Deux molécules d'acétyl-CoA.", answer_en: "Two molecules of acetyl-CoA." },
  { question_fr: "Quel tissu devient de plus en plus dépendant des corps cétoniques lors d'un jeûne prolongé ?", question_en: "Which tissue becomes increasingly dependent on ketone bodies during prolonged fasting?", answer_fr: "Le cerveau.", answer_en: "The brain." },
  { question_fr: "Quel rapport hormonal favorise la cétogenèse ?", question_en: "Which hormonal ratio favors ketogenesis?", answer_fr: "Un rapport glucagon/insuline élevé.", answer_en: "A high glucagon-to-insulin ratio." },
  { question_fr: "Par quel mécanisme la baisse du malonyl-CoA favorise-t-elle indirectement la cétogenèse ?", question_en: "By what mechanism does a drop in malonyl-CoA indirectly favor ketogenesis?", answer_fr: "Elle lève l'inhibition de la CPT1, augmentant l'entrée des acides gras en β-oxydation, source de l'acétyl-CoA nécessaire à la cétogenèse.", answer_en: "It relieves CPT1 inhibition, increasing fatty acid entry into beta-oxidation, the source of acetyl-CoA needed for ketogenesis." },
  { question_fr: "Qu'est-ce que la cétose physiologique du jeûne ?", question_en: "What is physiological fasting ketosis?", answer_fr: "Une élévation adaptative des corps cétoniques permettant d'épargner le glucose et les protéines musculaires.", answer_en: "An adaptive rise in ketone bodies that spares glucose and muscle protein." },
  { question_fr: "Qu'est-ce que l'acidocétose diabétique ?", question_en: "What is diabetic ketoacidosis?", answer_fr: "Une complication grave d'un déficit sévère en insuline, avec accumulation massive et incontrôlée de corps cétoniques acides.", answer_en: "A serious complication of severe insulin deficiency, with massive, uncontrolled accumulation of acidic ketone bodies." },
  { question_fr: "Quels sont les principaux dangers de l'acidocétose diabétique ?", question_en: "What are the main dangers of diabetic ketoacidosis?", answer_fr: "Une acidose métabolique sévère, une hyperglycémie et une déshydratation, potentiellement fatales.", answer_en: "Severe metabolic acidosis, hyperglycemia, and dehydration, potentially fatal." },
  { question_fr: "Résumez en une phrase le cycle de vie d'un corps cétonique.", question_en: "Summarize in one sentence the life cycle of a ketone body.", answer_fr: "Il est synthétisé dans le foie à partir de l'acétyl-CoA excédentaire, exporté dans le sang, puis reconverti en acétyl-CoA dans les tissus périphériques (via la thiophorase) pour alimenter le cycle de Krebs local.", answer_en: "It is synthesized in the liver from excess acetyl-CoA, exported into the blood, then reconverted to acetyl-CoA in peripheral tissues (via thiophorase) to fuel the local Krebs cycle." },
];

const PENTOSE_PHOSPHATE_PATHWAY_COURSE = `# La voie des pentoses phosphates

## 1. Vue d'ensemble
- Voie **cytosolique** parallèle à la glycolyse, dérivant le **glucose-6-phosphate** vers deux produits essentiels : le **NADPH** (pouvoir réducteur) et le **ribose-5-phosphate** (précurseur des nucléotides).
- Deux phases : une phase **oxydative** (irréversible) et une phase **non oxydative** (réversible).

## 2. Phase oxydative

| # | Enzyme | Réaction | Note |
| --- | --- | --- | --- |
| 1 | **G6PD** (glucose-6-P déshydrogénase) | G6P + NADP⁺ → 6-phosphogluconolactone + NADPH | Étape limitante et régulatrice de toute la voie |
| 2 | **6-phosphogluconolactonase** | Hydrolyse la lactone en 6-phosphogluconate | — |
| 3 | **6-phosphogluconate déshydrogénase** | 6-phosphogluconate + NADP⁺ → ribulose-5-phosphate + NADPH + CO₂ | — |

Bilan de la phase oxydative : 1 G6P → 1 ribulose-5-phosphate + **2 NADPH** + 1 CO₂. Irréversible.

## 3. Phase non oxydative
- Une **isomérase** et une **épimérase** convertissent le ribulose-5-phosphate en **ribose-5-phosphate** (précurseur des nucléotides) ou en xylulose-5-phosphate, selon les besoins cellulaires.
- La **transcétolase** (dépendante du **TPP**, vitamine B1) et la **transaldolase** interconvertissent ces pentoses phosphates avec des intermédiaires de la glycolyse (fructose-6-phosphate, glycéraldéhyde-3-phosphate), permettant à la cellule d'ajuster la production entre NADPH et ribose-5-phosphate selon ses besoins.
- **Réversible** : si la cellule a besoin de plus de ribose-5-phosphate que de NADPH, elle peut l'obtenir directement à partir d'intermédiaires glycolytiques, sans passer par la phase oxydative.

## 4. Rôles physiologiques du NADPH
- **Biosynthèse réductrice** : synthèse des acides gras (complexe FAS), du cholestérol.
- **Défense antioxydante** : régénère le **glutathion réduit** (via la glutathion réductase), qui neutralise les espèces réactives de l'oxygène (ROS) via la glutathion peroxydase — crucial pour les **érythrocytes**, exposés à un stress oxydatif important lié au transport d'O₂.
- **Système immunitaire** : la **NADPH oxydase** des phagocytes (neutrophiles, macrophages) utilise le NADPH pour produire des ROS bactéricides (« explosion oxydative »).

## 5. Tissus à forte activité PPP
- **Foie**, **tissu adipeux**, **glande surrénale**, **glande mammaire en lactation** (besoins élevés en NADPH pour la synthèse lipidique/stéroïdienne), et **érythrocytes** (défense antioxydante).

## Points à retenir
- Phase oxydative (irréversible, limitée par la G6PD) : G6P → ribulose-5-phosphate + 2 NADPH + CO₂.
- Phase non oxydative (réversible, transcétolase/transaldolase) : ajuste la production entre ribose-5-phosphate et NADPH selon les besoins.
- Le NADPH est essentiel à la biosynthèse réductrice et à la défense antioxydante (glutathion) ; le ribose-5-phosphate est le précurseur des nucléotides.`;

export const PENTOSE_PHOSPHATE_PATHWAY_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — La voie des pentoses phosphates",
    source_label: "Synthèse — Metabolism: Pentose Phosphate Pathway (Ninja Nerd)",
    content_fr: PENTOSE_PHOSPHATE_PATHWAY_COURSE,
  },
  qcm: [
    single("Dans quel compartiment cellulaire se déroule la voie des pentoses phosphates ?", "B", "Cette voie, comme la glycolyse, se déroule dans le cytosol.", ["Dans la mitochondrie", "Dans le cytosol", "Dans le noyau", "Dans le réticulum endoplasmique"]),
    single("Quels sont les deux produits essentiels de la voie des pentoses phosphates ?", "C", "Le NADPH (pouvoir réducteur) et le ribose-5-phosphate (précurseur des nucléotides) sont les deux produits essentiels.", ["ATP et NADH", "Glucose et pyruvate", "NADPH et ribose-5-phosphate", "Acétyl-CoA et CO2"]),
    single("Quelle enzyme catalyse l'étape limitante de la voie des pentoses phosphates ?", "A", "La glucose-6-phosphate déshydrogénase (G6PD) catalyse l'étape limitante et régulatrice.", ["La glucose-6-phosphate déshydrogénase (G6PD)", "La transcétolase", "La transaldolase", "La 6-phosphogluconolactonase"]),
    single("Quel cofacteur la G6PD réduit-elle lors de sa réaction ?", "D", "Le NADP+ est réduit en NADPH par la G6PD.", ["Le FAD", "Le NAD+", "Le TPP", "Le NADP+"]),
    single("Quel produit final la phase oxydative de la voie des pentoses phosphates génère-t-elle à partir du glucose-6-phosphate ?", "B", "La phase oxydative produit du ribulose-5-phosphate, 2 NADPH et du CO2.", ["Du ribose-5-phosphate directement", "Du ribulose-5-phosphate, 2 NADPH et du CO2", "Du fructose-6-phosphate", "De l'acétyl-CoA"]),
    single("La phase oxydative de la voie des pentoses phosphates est-elle réversible ?", "B", "Non, la phase oxydative est irréversible.", ["Oui, entièrement réversible", "Non, irréversible", "Réversible uniquement en anaérobiose", "Réversible uniquement dans le foie"]),
    single("Quelle enzyme, dépendante du TPP (vitamine B1), participe à la phase non oxydative ?", "C", "La transcétolase, dépendante du TPP, interconvertit les pentoses phosphates avec des intermédiaires glycolytiques.", ["La G6PD", "La 6-phosphogluconate déshydrogénase", "La transcétolase", "La 6-phosphogluconolactonase"]),
    single("La phase non oxydative de la voie des pentoses phosphates est-elle réversible ?", "A", "Oui, elle est réversible, permettant un ajustement flexible entre NADPH et ribose-5-phosphate.", ["Oui, réversible", "Non, irréversible", "Réversible uniquement à jeun", "Réversible uniquement dans les érythrocytes"]),
    single("Quel est un rôle majeur du NADPH dans la biosynthèse réductrice ?", "B", "Le NADPH est un cofacteur réducteur essentiel à la synthèse des acides gras et du cholestérol.", ["Il phosphoryle le glucose", "Il alimente la synthèse des acides gras et du cholestérol", "Il forme des liaisons peptidiques", "Il transporte l'oxygène"]),
    single("Comment le NADPH participe-t-il à la défense antioxydante ?", "D", "Il régénère le glutathion réduit, qui neutralise les espèces réactives de l'oxygène via la glutathion peroxydase.", ["Il neutralise directement les ROS", "Il inhibe la formation de ROS à la source", "Il produit directement du glutathion oxydé", "Il régénère le glutathion réduit via la glutathion réductase"]),
    single("Quel type cellulaire dépend fortement du NADPH pour sa défense antioxydante, en raison de son exposition au stress oxydatif lié au transport d'O2 ?", "A", "Les érythrocytes dépendent fortement du NADPH pour leur défense antioxydante.", ["Les érythrocytes", "Les hépatocytes uniquement", "Les neurones uniquement", "Les cellules musculaires cardiaques uniquement"]),
    single("Quelle enzyme des phagocytes utilise le NADPH pour produire des ROS bactéricides ?", "C", "La NADPH oxydase des neutrophiles/macrophages produit des ROS lors de l'explosion oxydative bactéricide.", ["La catalase", "La superoxide dismutase", "La NADPH oxydase", "La glutathion peroxydase"]),
    single("Quels tissus présentent une forte activité de la voie des pentoses phosphates, en lien avec leurs besoins en NADPH ?", "D", "Le foie, le tissu adipeux, la glande surrénale et la glande mammaire en lactation ont une forte activité PPP.", ["Uniquement les érythrocytes", "Uniquement le muscle squelettique", "Uniquement le cerveau", "Le foie, le tissu adipeux, la glande surrénale, la glande mammaire en lactation"]),
  ],
  exam: { titre_fr: "Examen chronométré — La voie des pentoses phosphates", duration_seconds: 1_170 },
};

export const PENTOSE_PHOSPHATE_PATHWAY_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Dans quel compartiment cellulaire se déroule la voie des pentoses phosphates ?", question_en: "In which cellular compartment does the pentose phosphate pathway take place?", answer_fr: "Le cytosol.", answer_en: "The cytosol." },
  { question_fr: "Quel est le substrat initial de la voie des pentoses phosphates ?", question_en: "What is the initial substrate of the pentose phosphate pathway?", answer_fr: "Le glucose-6-phosphate.", answer_en: "Glucose-6-phosphate." },
  { question_fr: "Quels sont les deux produits essentiels de la voie des pentoses phosphates ?", question_en: "What are the two essential products of the pentose phosphate pathway?", answer_fr: "Le NADPH et le ribose-5-phosphate.", answer_en: "NADPH and ribose-5-phosphate." },
  { question_fr: "Combien de phases compose la voie des pentoses phosphates ?", question_en: "How many phases make up the pentose phosphate pathway?", answer_fr: "Deux : une phase oxydative et une phase non oxydative.", answer_en: "Two: an oxidative phase and a non-oxidative phase." },
  { question_fr: "Quelle enzyme catalyse la première réaction de la phase oxydative ?", question_en: "Which enzyme catalyzes the first reaction of the oxidative phase?", answer_fr: "La glucose-6-phosphate déshydrogénase (G6PD).", answer_en: "Glucose-6-phosphate dehydrogenase (G6PD)." },
  { question_fr: "La G6PD est-elle l'étape limitante de la voie ?", question_en: "Is G6PD the rate-limiting step of the pathway?", answer_fr: "Oui.", answer_en: "Yes." },
  { question_fr: "Quel cofacteur est réduit par la G6PD ?", question_en: "Which cofactor is reduced by G6PD?", answer_fr: "Le NADP+, formant du NADPH.", answer_en: "NADP+, forming NADPH." },
  { question_fr: "Quelle enzyme hydrolyse la 6-phosphogluconolactone en 6-phosphogluconate ?", question_en: "Which enzyme hydrolyzes 6-phosphogluconolactone into 6-phosphogluconate?", answer_fr: "La 6-phosphogluconolactonase.", answer_en: "6-phosphogluconolactonase." },
  { question_fr: "Quelle enzyme oxyde le 6-phosphogluconate en ribulose-5-phosphate ?", question_en: "Which enzyme oxidizes 6-phosphogluconate into ribulose-5-phosphate?", answer_fr: "La 6-phosphogluconate déshydrogénase.", answer_en: "6-phosphogluconate dehydrogenase." },
  { question_fr: "Quel gaz est libéré lors de cette dernière réaction de la phase oxydative ?", question_en: "Which gas is released during this last reaction of the oxidative phase?", answer_fr: "Le CO2.", answer_en: "CO2." },
  { question_fr: "Combien de NADPH sont produits au total par la phase oxydative, par glucose-6-phosphate engagé ?", question_en: "How many NADPH are produced in total by the oxidative phase, per glucose-6-phosphate?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "La phase oxydative est-elle réversible ?", question_en: "Is the oxidative phase reversible?", answer_fr: "Non, elle est irréversible.", answer_en: "No, it is irreversible." },
  { question_fr: "Quel produit final de la phase oxydative sert de précurseur au ribose-5-phosphate ?", question_en: "Which final product of the oxidative phase serves as a precursor to ribose-5-phosphate?", answer_fr: "Le ribulose-5-phosphate.", answer_en: "Ribulose-5-phosphate." },
  { question_fr: "Quel type d'enzyme convertit le ribulose-5-phosphate en ribose-5-phosphate ?", question_en: "What type of enzyme converts ribulose-5-phosphate into ribose-5-phosphate?", answer_fr: "Une isomérase.", answer_en: "An isomerase." },
  { question_fr: "Quelles deux enzymes de la phase non oxydative interconvertissent les pentoses phosphates avec les intermédiaires glycolytiques ?", question_en: "Which two enzymes of the non-oxidative phase interconvert pentose phosphates with glycolytic intermediates?", answer_fr: "La transcétolase et la transaldolase.", answer_en: "Transketolase and transaldolase." },
  { question_fr: "Quel cofacteur vitaminique est requis par la transcétolase ?", question_en: "Which vitamin cofactor is required by transketolase?", answer_fr: "Le TPP (thiamine pyrophosphate), dérivé de la vitamine B1.", answer_en: "TPP (thiamine pyrophosphate), derived from vitamin B1." },
  { question_fr: "La phase non oxydative est-elle réversible ?", question_en: "Is the non-oxidative phase reversible?", answer_fr: "Oui.", answer_en: "Yes." },
  { question_fr: "Comment une cellule peut-elle obtenir du ribose-5-phosphate sans produire de NADPH ?", question_en: "How can a cell obtain ribose-5-phosphate without producing NADPH?", answer_fr: "En faisant fonctionner la phase non oxydative en sens inverse, à partir d'intermédiaires glycolytiques (F6P, G3P), sans passer par la phase oxydative.", answer_en: "By running the non-oxidative phase in reverse, from glycolytic intermediates (F6P, G3P), bypassing the oxidative phase." },
  { question_fr: "Quel est le rôle du NADPH dans la biosynthèse réductrice ?", question_en: "What is the role of NADPH in reductive biosynthesis?", answer_fr: "Il fournit le pouvoir réducteur nécessaire à la synthèse des acides gras et du cholestérol.", answer_en: "It supplies the reducing power needed for fatty acid and cholesterol synthesis." },
  { question_fr: "Quelle enzyme le NADPH régénère-t-il pour la défense antioxydante ?", question_en: "Which enzyme does NADPH regenerate for antioxidant defense?", answer_fr: "Il permet à la glutathion réductase de régénérer le glutathion réduit.", answer_en: "It allows glutathione reductase to regenerate reduced glutathione." },
  { question_fr: "Quelle enzyme utilise le glutathion réduit pour neutraliser les ROS ?", question_en: "Which enzyme uses reduced glutathione to neutralize ROS?", answer_fr: "La glutathion peroxydase.", answer_en: "Glutathione peroxidase." },
  { question_fr: "Pourquoi les érythrocytes dépendent-ils fortement de cette défense antioxydante ?", question_en: "Why do erythrocytes rely heavily on this antioxidant defense?", answer_fr: "Parce qu'ils sont exposés à un stress oxydatif important lié au transport de l'oxygène.", answer_en: "Because they are exposed to significant oxidative stress from oxygen transport." },
  { question_fr: "Quelle enzyme des phagocytes utilise le NADPH pour produire des ROS bactéricides ?", question_en: "Which phagocyte enzyme uses NADPH to produce bactericidal ROS?", answer_fr: "La NADPH oxydase.", answer_en: "NADPH oxidase." },
  { question_fr: "Comment appelle-t-on la production de ROS par les phagocytes lors de la destruction bactérienne ?", question_en: "What is the production of ROS by phagocytes during bacterial killing called?", answer_fr: "L'explosion oxydative (« respiratory burst »).", answer_en: "The oxidative (respiratory) burst." },
  { question_fr: "Citez deux tissus à forte activité de la voie des pentoses phosphates, en dehors des érythrocytes.", question_en: "Name two tissues with high pentose phosphate pathway activity, besides erythrocytes.", answer_fr: "Le foie et le tissu adipeux (ou la glande surrénale, la glande mammaire en lactation).", answer_en: "The liver and adipose tissue (or the adrenal gland, the lactating mammary gland)." },
  { question_fr: "Résumez en une phrase le double rôle de la voie des pentoses phosphates.", question_en: "Summarize in one sentence the dual role of the pentose phosphate pathway.", answer_fr: "Elle fournit à la fois du NADPH, essentiel à la biosynthèse réductrice et à la défense antioxydante, et du ribose-5-phosphate, précurseur des nucléotides, en ajustant leur production respective selon les besoins de la cellule.", answer_en: "It supplies both NADPH, essential for reductive biosynthesis and antioxidant defense, and ribose-5-phosphate, a nucleotide precursor, adjusting their respective output to the cell's needs." },
];

const PPP_REGULATION_COURSE = `# Régulation de la voie des pentoses phosphates

## 1. Régulation de la G6PD — enzyme limitante
- Activée principalement par la **disponibilité de son substrat NADP⁺** (régulation par disponibilité du substrat plutôt que par des effecteurs allostériques classiques) : un rapport **NADP⁺/NADPH élevé** (signe d'une consommation importante de NADPH, par exemple pour la biosynthèse réductrice) stimule fortement la G6PD.
- **Inhibée** par un **NADPH élevé** (rétro-inhibition compétitive avec le NADP⁺ sur le site actif).
- Stimulée hormonalement par l'**insuline** (état nourri, favorisant la lipogenèse qui consomme le NADPH produit).

## 2. Régulation croisée avec les besoins cellulaires (phase non oxydative)
- Si la cellule a besoin de **beaucoup de NADPH mais peu de ribose-5-phosphate** (ex. cellule très active en synthèse lipidique) : le ribulose-5-phosphate excédentaire est reconverti, via la phase non oxydative (transcétolase/transaldolase), en fructose-6-phosphate et glycéraldéhyde-3-phosphate, qui rejoignent la glycolyse.
- Si la cellule a besoin de **beaucoup de ribose-5-phosphate mais peu de NADPH** (ex. cellule à prolifération rapide, synthèse d'ADN/ARN) : la phase non oxydative peut fonctionner **en sens inverse**, formant du ribose-5-phosphate directement à partir d'intermédiaires glycolytiques (F6P, G3P), sans passer par la phase oxydative productrice de NADPH.
- Si la cellule a besoin à la fois de **NADPH et de ribose-5-phosphate en proportions égales** : la voie oxydative fonctionne normalement, sans détour par la phase non oxydative.

## 3. Importance clinique : déficit en G6PD
- Le **déficit en G6PD** est l'une des enzymopathies humaines les plus fréquentes (transmission liée à l'**X**), particulièrement répandue dans les régions historiquement touchées par le paludisme (protection partielle conférée aux porteurs).
- Conséquence : production insuffisante de NADPH dans les érythrocytes → incapacité à régénérer le glutathion réduit → vulnérabilité accrue au stress oxydatif → **hémolyse aiguë** déclenchée par certains médicaments (ex. certains antipaludéens comme la primaquine, sulfamides), infections, ou l'ingestion de **fèves** (favisme, lié à des composés oxydants des fèves).
- Formation caractéristique de **corps de Heinz** (hémoglobine dénaturée précipitée) dans les globules rouges lors des crises hémolytiques.

## Points à retenir
- La G6PD est régulée principalement par la disponibilité en NADP⁺ (substrat) plutôt que par des effecteurs allostériques classiques ; le NADPH l'inhibe par compétition.
- La phase non oxydative permet un ajustement flexible entre production de NADPH et de ribose-5-phosphate selon les besoins cellulaires.
- Le déficit en G6PD provoque une hémolyse aiguë déclenchée par le stress oxydatif (médicaments, infections, fèves), avec formation de corps de Heinz.`;

export const PPP_REGULATION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Régulation de la voie des pentoses phosphates",
    source_label: "Synthèse — Metabolism: Regulation of the Pentose Phosphate Pathway (Ninja Nerd)",
    content_fr: PPP_REGULATION_COURSE,
  },
  qcm: [
    single("Par quel mécanisme principal la G6PD est-elle régulée ?", "B", "La G6PD est régulée principalement par la disponibilité de son substrat NADP+, plutôt que par des effecteurs allostériques classiques.", ["Par phosphorylation hormonale principalement", "Par la disponibilité de son substrat NADP+", "Elle n'est pas régulée", "Uniquement par le calcium"]),
    single("Quel rapport métabolique élevé stimule fortement la G6PD ?", "C", "Un rapport NADP+/NADPH élevé, signe d'une consommation importante de NADPH, stimule la G6PD.", ["ATP/ADP", "AMP/ATP", "NADP+/NADPH", "NADH/NAD+"]),
    single("Quel métabolite inhibe la G6PD par compétition avec le NADP+ ?", "A", "Le NADPH inhibe la G6PD par rétro-inhibition compétitive.", ["Le NADPH", "Le NADH", "L'ATP", "Le citrate"]),
    single("Quelle hormone stimule la G6PD, favorisant la lipogenèse consommatrice de NADPH ?", "D", "L'insuline stimule la G6PD en état nourri, en lien avec la lipogenèse.", ["Le glucagon", "L'adrénaline", "Le cortisol", "L'insuline"]),
    single("Que se passe-t-il si une cellule a besoin de beaucoup de NADPH mais peu de ribose-5-phosphate ?", "B", "Le ribulose-5-phosphate excédentaire est reconverti, via la phase non oxydative, en intermédiaires glycolytiques (F6P, G3P).", ["La phase oxydative s'arrête complètement", "Le ribulose-5-phosphate excédentaire est reconverti en intermédiaires glycolytiques", "Le ribose-5-phosphate s'accumule sans être utilisé", "La cellule cesse de produire du NADPH"]),
    single("Que se passe-t-il si une cellule a besoin de beaucoup de ribose-5-phosphate mais peu de NADPH ?", "C", "La phase non oxydative peut fonctionner en sens inverse, formant du ribose-5-phosphate directement à partir d'intermédiaires glycolytiques, sans passer par la phase oxydative.", ["La phase oxydative produit un excès de NADPH inutilisé", "La cellule ne peut obtenir de ribose-5-phosphate que via la phase oxydative", "La phase non oxydative fonctionne en sens inverse à partir d'intermédiaires glycolytiques", "La G6PD est totalement inhibée"]),
    single("Quel est le mode de transmission génétique du déficit en G6PD ?", "A", "Le déficit en G6PD est transmis de façon liée à l'X.", ["Lié à l'X", "Autosomique dominant", "Autosomique récessif", "Mitochondrial"]),
    single("Dans quelles régions le déficit en G6PD est-il historiquement plus répandu ?", "B", "Dans les régions historiquement touchées par le paludisme, en raison d'une protection partielle conférée aux porteurs.", ["Les régions polaires", "Les régions historiquement touchées par le paludisme", "Les régions désertiques uniquement", "Uniformément réparti dans le monde"]),
    single("Quelle est la conséquence cellulaire principale d'un déficit en G6PD dans les érythrocytes ?", "D", "Une production insuffisante de NADPH empêche la régénération du glutathion réduit, augmentant la vulnérabilité au stress oxydatif.", ["Une production excessive d'ATP", "Une accumulation de glucose intracellulaire", "Une hyperproduction de glutathion réduit", "Une incapacité à régénérer le glutathion réduit"]),
    single("Quels facteurs peuvent déclencher une hémolyse aiguë chez un patient déficient en G6PD ?", "C", "Certains médicaments (primaquine, sulfamides), des infections, et l'ingestion de fèves peuvent déclencher une hémolyse aiguë.", ["Uniquement l'exercice physique", "Uniquement une carence en fer", "Certains médicaments, infections, ou l'ingestion de fèves", "Uniquement l'exposition au froid"]),
    single("Comment s'appelle la maladie hémolytique déclenchée par l'ingestion de fèves chez les patients déficients en G6PD ?", "B", "Le favisme est la forme d'hémolyse déclenchée par l'ingestion de fèves.", ["Le béribéri", "Le favisme", "Le scorbut", "Le kwashiorkor"]),
    single("Quelle structure caractéristique se forme dans les globules rouges lors d'une crise hémolytique liée au déficit en G6PD ?", "A", "Les corps de Heinz, constitués d'hémoglobine dénaturée précipitée, se forment lors des crises hémolytiques.", ["Les corps de Heinz", "Les corps de Döhle", "Les anneaux de Cabot", "Les corps de Howell-Jolly"]),
  ],
  exam: { titre_fr: "Examen chronométré — Régulation de la voie des pentoses phosphates", duration_seconds: 990 },
};

export const PPP_REGULATION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est l'enzyme limitante de la voie des pentoses phosphates ?", question_en: "What is the rate-limiting enzyme of the pentose phosphate pathway?", answer_fr: "La glucose-6-phosphate déshydrogénase (G6PD).", answer_en: "Glucose-6-phosphate dehydrogenase (G6PD)." },
  { question_fr: "Par quel mécanisme principal la G6PD est-elle régulée ?", question_en: "By what main mechanism is G6PD regulated?", answer_fr: "Par la disponibilité de son substrat NADP+, plutôt que par des effecteurs allostériques classiques.", answer_en: "By the availability of its substrate NADP+, rather than classic allosteric effectors." },
  { question_fr: "Quel rapport métabolique stimule fortement la G6PD ?", question_en: "Which metabolic ratio strongly stimulates G6PD?", answer_fr: "Un rapport NADP+/NADPH élevé.", answer_en: "A high NADP+/NADPH ratio." },
  { question_fr: "Que signale un rapport NADP+/NADPH élevé ?", question_en: "What does a high NADP+/NADPH ratio signal?", answer_fr: "Une consommation importante de NADPH, par exemple pour la biosynthèse réductrice.", answer_en: "High NADPH consumption, for example for reductive biosynthesis." },
  { question_fr: "Quel métabolite inhibe la G6PD ?", question_en: "Which metabolite inhibits G6PD?", answer_fr: "Le NADPH, par compétition avec le NADP+.", answer_en: "NADPH, by competing with NADP+." },
  { question_fr: "Quelle hormone stimule la G6PD ?", question_en: "Which hormone stimulates G6PD?", answer_fr: "L'insuline.", answer_en: "Insulin." },
  { question_fr: "Pourquoi l'insuline stimule-t-elle la G6PD ?", question_en: "Why does insulin stimulate G6PD?", answer_fr: "Parce qu'elle favorise la lipogenèse, qui consomme le NADPH produit par la voie.", answer_en: "Because it promotes lipogenesis, which consumes the NADPH produced by the pathway." },
  { question_fr: "Comment la cellule ajuste-t-elle la production de NADPH et de ribose-5-phosphate selon ses besoins ?", question_en: "How does the cell adjust NADPH and ribose-5-phosphate production according to its needs?", answer_fr: "Via la phase non oxydative réversible (transcétolase, transaldolase), qui peut fonctionner dans les deux sens.", answer_en: "Via the reversible non-oxidative phase (transketolase, transaldolase), which can run in either direction." },
  { question_fr: "Que devient le ribulose-5-phosphate excédentaire si une cellule a besoin de NADPH mais peu de ribose-5-phosphate ?", question_en: "What happens to excess ribulose-5-phosphate if a cell needs NADPH but little ribose-5-phosphate?", answer_fr: "Il est reconverti en intermédiaires glycolytiques (fructose-6-phosphate, glycéraldéhyde-3-phosphate).", answer_en: "It is converted back into glycolytic intermediates (fructose-6-phosphate, glyceraldehyde-3-phosphate)." },
  { question_fr: "Comment une cellule à prolifération rapide obtient-elle du ribose-5-phosphate sans produire de NADPH excédentaire ?", question_en: "How does a rapidly proliferating cell obtain ribose-5-phosphate without producing excess NADPH?", answer_fr: "En faisant fonctionner la phase non oxydative en sens inverse, à partir d'intermédiaires glycolytiques.", answer_en: "By running the non-oxidative phase in reverse, from glycolytic intermediates." },
  { question_fr: "Le déficit en G6PD est-il une maladie fréquente ou rare ?", question_en: "Is G6PD deficiency a common or rare disease?", answer_fr: "C'est l'une des enzymopathies humaines les plus fréquentes.", answer_en: "It is one of the most common human enzymopathies." },
  { question_fr: "Quel est le mode de transmission génétique du déficit en G6PD ?", question_en: "What is the genetic inheritance pattern of G6PD deficiency?", answer_fr: "Lié à l'X.", answer_en: "X-linked." },
  { question_fr: "Pourquoi le déficit en G6PD est-il plus fréquent dans les zones historiquement impaludées ?", question_en: "Why is G6PD deficiency more common in historically malaria-endemic areas?", answer_fr: "Parce qu'il confère une protection partielle contre le paludisme aux porteurs.", answer_en: "Because it confers partial protection against malaria to carriers." },
  { question_fr: "Quelle est la conséquence d'un déficit en G6PD sur la production de NADPH dans les érythrocytes ?", question_en: "What is the consequence of G6PD deficiency on NADPH production in erythrocytes?", answer_fr: "Elle est insuffisante.", answer_en: "It is insufficient." },
  { question_fr: "Quel est l'impact de ce déficit en NADPH sur le glutathion ?", question_en: "What is the impact of this NADPH deficiency on glutathione?", answer_fr: "Il empêche la régénération du glutathion réduit, essentiel à la défense antioxydante.", answer_en: "It prevents regeneration of reduced glutathione, essential for antioxidant defense." },
  { question_fr: "Quelle est la conséquence clinique majeure du déficit en G6PD ?", question_en: "What is the major clinical consequence of G6PD deficiency?", answer_fr: "Une hémolyse aiguë déclenchée par le stress oxydatif.", answer_en: "Acute hemolysis triggered by oxidative stress." },
  { question_fr: "Citez un médicament classiquement déclencheur d'hémolyse chez les patients déficients en G6PD.", question_en: "Name a drug classically known to trigger hemolysis in G6PD-deficient patients.", answer_fr: "La primaquine (antipaludéen).", answer_en: "Primaquine (an antimalarial)." },
  { question_fr: "Comment appelle-t-on l'hémolyse déclenchée par l'ingestion de fèves ?", question_en: "What is the hemolysis triggered by ingesting fava beans called?", answer_fr: "Le favisme.", answer_en: "Favism." },
  { question_fr: "Quelle structure intra-érythrocytaire caractéristique apparaît lors d'une crise hémolytique liée au déficit en G6PD ?", question_en: "Which characteristic intra-erythrocytic structure appears during a G6PD deficiency hemolytic crisis?", answer_fr: "Les corps de Heinz (hémoglobine dénaturée précipitée).", answer_en: "Heinz bodies (precipitated denatured hemoglobin)." },
  { question_fr: "Résumez en une phrase la logique de régulation de la voie des pentoses phosphates.", question_en: "Summarize in one sentence the regulatory logic of the pentose phosphate pathway.", answer_fr: "La G6PD, régulée par le rapport NADP+/NADPH, contrôle l'entrée dans la voie, tandis que la phase non oxydative réversible ajuste finement la répartition entre production de NADPH et de ribose-5-phosphate selon les besoins cellulaires.", answer_en: "G6PD, regulated by the NADP+/NADPH ratio, controls entry into the pathway, while the reversible non-oxidative phase finely adjusts the split between NADPH and ribose-5-phosphate production according to cellular needs." },
];
