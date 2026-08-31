import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const FATTY_ACID_SYNTHESIS_2_COURSE = `# Synthèse des acides gras (partie 2) — Le cycle d'élongation et au-delà du palmitate

## 1. Le cycle d'élongation du complexe FAS
Chaque cycle comprend **4 réactions successives**, répétées **7 fois** pour synthétiser le **palmitate** (16C) à partir de 8 acétyl-CoA :

| # | Étape | Enzyme | Réaction |
| --- | --- | --- | --- |
| 1 | Condensation | β-cétoacyl synthase | Condense le malonyl-ACP avec la chaîne en croissance, libère du CO₂, forme un β-cétoacyl-ACP (+2C) |
| 2 | Réduction | β-cétoacyl réductase | Réduit la cétone en hydroxyle, consomme 1 NADPH, forme un β-hydroxyacyl-ACP |
| 3 | Déshydratation | β-hydroxyacyl déshydratase | Élimine une molécule d'eau, forme une double liaison (énoyl-ACP) |
| 4 | Réduction | Énoyl réductase | Réduit la double liaison, consomme 1 NADPH, forme un acyl-ACP saturé (+2C) |

## 2. Bilan de la synthèse du palmitate (16 carbones)
- 1 acétyl-CoA (amorce) + 7 malonyl-CoA (fournissant 14 carbones) → **palmitate** (16C).
- Consomme **7 ATP** (pour former les 7 malonyl-CoA via l'ACC) et **14 NADPH** (2 par cycle × 7 cycles).
- Réaction globale simplifiée : Acétyl-CoA + 7 Malonyl-CoA + 14 NADPH + 14 H⁺ → Palmitate + 7 CO₂ + 14 NADP⁺ + 8 CoA + 6 H₂O.

## 3. Terminaison et modifications ultérieures
- Après 7 cycles, une **thioestérase** libère le palmitate (16C, saturé) du complexe FAS.
- **Élongation au-delà de 16 carbones** : réalisée par des enzymes distinctes (élongases), situées dans le réticulum endoplasmique, utilisant aussi du malonyl-CoA et du NADPH.
- **Désaturation** : les désaturases (ex. **Δ9-désaturase / SCD1**, réticulum endoplasmique) introduisent des doubles liaisons, par exemple pour former l'acide **oléique** (18:1) à partir de l'acide **stéarique** (18:0).
- L'organisme humain ne peut pas introduire de doubles liaisons au-delà de la position **Δ9** : les acides gras **oméga-3** et **oméga-6** (acide linoléique, acide α-linolénique) sont donc des **acides gras essentiels**, devant être apportés par l'alimentation.

## 4. Régulation générale de la voie
- Comme pour l'ACC, la voie globale est stimulée par l'**insuline** (état nourri) et inhibée par le **glucagon** et l'**AMPK** (jeûne, faible énergie).
- L'expression des gènes codant le FAS et l'ACC est régulée transcriptionnellement par des facteurs comme **SREBP-1c**, stimulé par l'insuline.

## Points à retenir
- Chaque cycle d'élongation (condensation, réduction, déshydratation, réduction) ajoute 2 carbones et consomme 2 NADPH.
- 8 acétyl-CoA (1 amorce + 7 via malonyl-CoA) → 1 palmitate (16C) ; coût : 7 ATP + 14 NADPH.
- L'élongation et la désaturation au-delà du palmitate se font par d'autres enzymes (réticulum endoplasmique) ; les acides gras oméga-3/oméga-6 sont essentiels car l'humain ne peut pas désaturer au-delà de Δ9.`;

export const FATTY_ACID_SYNTHESIS_2_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Synthèse des acides gras (2) : le cycle d'élongation",
    source_label: "Synthèse — Metabolism: Fatty Acid Synthesis Part 2 (Ninja Nerd)",
    content_fr: FATTY_ACID_SYNTHESIS_2_COURSE,
  },
  qcm: [
    single("Combien de réactions composent un cycle d'élongation du complexe FAS ?", "C", "Chaque cycle comprend 4 réactions : condensation, réduction, déshydratation, réduction.", ["Deux", "Trois", "Quatre", "Six"]),
    single("Quelle réaction initie chaque cycle d'élongation en libérant du CO2 ?", "A", "La condensation, catalysée par la β-cétoacyl synthase, libère le CO2 issu du malonyl-ACP.", ["La condensation", "La première réduction", "La déshydratation", "La seconde réduction"]),
    single("Combien de NADPH sont consommés par cycle d'élongation ?", "B", "Deux NADPH sont consommés à chaque cycle, un pour chaque réaction de réduction.", ["Un", "Deux", "Trois", "Quatre"]),
    single("Combien de cycles d'élongation sont nécessaires pour synthétiser le palmitate (16C) ?", "C", "Sept cycles d'élongation sont nécessaires pour ajouter les 14 carbones aux 2 carbones de l'acétyl-CoA amorce.", ["Cinq", "Six", "Sept", "Huit"]),
    single("Combien d'acétyl-CoA sont nécessaires au total (amorce + malonyl-CoA) pour synthétiser un palmitate ?", "D", "Un acétyl-CoA sert d'amorce, et 7 autres sont convertis en malonyl-CoA, soit 8 unités à 2 carbones au total pour les 16 carbones du palmitate.", ["Quatre", "Six", "Sept", "Huit"]),
    single("Combien d'ATP sont consommés pour former les 7 malonyl-CoA nécessaires à la synthèse d'un palmitate ?", "B", "Sept ATP sont consommés, un par réaction de l'acétyl-CoA carboxylase.", ["Quatre", "Sept", "Dix", "Quatorze"]),
    single("Combien de NADPH au total sont consommés pour synthétiser un palmitate ?", "C", "Quatorze NADPH sont consommés au total (2 par cycle × 7 cycles).", ["Sept", "Dix", "Quatorze", "Vingt-huit"]),
    single("Quelle enzyme libère le palmitate final du complexe FAS ?", "A", "Une thioestérase hydrolyse la liaison thioester finale, libérant le palmitate libre.", ["Une thioestérase", "Une kinase", "Une phosphatase", "Une carboxylase"]),
    single("Où se déroule l'élongation des acides gras au-delà de 16 carbones ?", "B", "Cette élongation est réalisée par des élongases situées dans le réticulum endoplasmique, distinctes du complexe FAS.", ["Dans la mitochondrie", "Dans le réticulum endoplasmique", "Dans le noyau", "Dans le complexe FAS lui-même"]),
    single("Quelle enzyme introduit une double liaison en position 9 pour former l'acide oléique à partir de l'acide stéarique ?", "D", "La Δ9-désaturase (SCD1) introduit une double liaison en position 9, formant l'acide oléique à partir de l'acide stéarique.", ["La thioestérase", "L'ACP synthase", "L'élongase", "La Δ9-désaturase (SCD1)"]),
    single("Pourquoi les acides gras oméga-3 et oméga-6 sont-ils qualifiés d'« essentiels » ?", "A", "L'organisme humain ne peut pas introduire de doubles liaisons au-delà de la position Δ9 ; ces acides gras doivent donc être apportés par l'alimentation.", ["L'humain ne peut pas désaturer au-delà de la position Δ9", "Ils ne peuvent pas être stockés dans l'organisme", "Ils sont toxiques en excès uniquement", "Ils ne participent à aucune voie métabolique"]),
    single("Quel facteur de transcription, stimulé par l'insuline, régule l'expression des gènes de la lipogenèse ?", "C", "SREBP-1c, stimulé par l'insuline, régule transcriptionnellement l'expression du FAS et de l'ACC.", ["CREB", "PPAR-alpha", "SREBP-1c", "GSK3"]),
  ],
  exam: { titre_fr: "Examen chronométré — Synthèse des acides gras (2)", duration_seconds: 1_080 },
};

export const FATTY_ACID_SYNTHESIS_2_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Combien de réactions composent un cycle d'élongation du complexe FAS ?", question_en: "How many reactions make up one FAS elongation cycle?", answer_fr: "Quatre : condensation, réduction, déshydratation, réduction.", answer_en: "Four: condensation, reduction, dehydration, reduction." },
  { question_fr: "Quelle enzyme catalyse la condensation initiale de chaque cycle ?", question_en: "Which enzyme catalyzes the initial condensation of each cycle?", answer_fr: "La β-cétoacyl synthase.", answer_en: "Beta-ketoacyl synthase." },
  { question_fr: "Que libère la réaction de condensation ?", question_en: "What does the condensation reaction release?", answer_fr: "Du CO2, issu du malonyl-ACP.", answer_en: "CO2, from malonyl-ACP." },
  { question_fr: "Quelle enzyme réduit le groupe cétone en hydroxyle après la condensation ?", question_en: "Which enzyme reduces the ketone group to a hydroxyl after condensation?", answer_fr: "La β-cétoacyl réductase.", answer_en: "Beta-ketoacyl reductase." },
  { question_fr: "Quelle enzyme élimine une molécule d'eau, formant une double liaison ?", question_en: "Which enzyme removes a water molecule, forming a double bond?", answer_fr: "La β-hydroxyacyl déshydratase.", answer_en: "Beta-hydroxyacyl dehydratase." },
  { question_fr: "Quelle enzyme réduit la double liaison lors de la dernière étape du cycle ?", question_en: "Which enzyme reduces the double bond in the last step of the cycle?", answer_fr: "L'énoyl réductase.", answer_en: "Enoyl reductase." },
  { question_fr: "Combien de carbones sont ajoutés à chaque cycle d'élongation ?", question_en: "How many carbons are added at each elongation cycle?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "Combien de NADPH sont consommés à chaque cycle d'élongation ?", question_en: "How many NADPH are consumed at each elongation cycle?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "Combien de cycles sont nécessaires pour synthétiser le palmitate (16C) ?", question_en: "How many cycles are needed to synthesize palmitate (16C)?", answer_fr: "Sept.", answer_en: "Seven." },
  { question_fr: "Combien d'unités acétyle (amorce + malonyl-CoA) sont utilisées au total pour un palmitate ?", question_en: "How many acetyl units (primer + malonyl-CoA) are used in total for one palmitate?", answer_fr: "Huit.", answer_en: "Eight." },
  { question_fr: "Combien d'ATP sont consommés pour former les 7 malonyl-CoA nécessaires à un palmitate ?", question_en: "How many ATP are consumed to form the 7 malonyl-CoA needed for one palmitate?", answer_fr: "Sept.", answer_en: "Seven." },
  { question_fr: "Combien de NADPH au total sont consommés pour synthétiser un palmitate ?", question_en: "How many NADPH in total are consumed to synthesize one palmitate?", answer_fr: "Quatorze.", answer_en: "Fourteen." },
  { question_fr: "Quelle enzyme libère le palmitate final du complexe FAS ?", question_en: "Which enzyme releases the final palmitate from the FAS complex?", answer_fr: "Une thioestérase.", answer_en: "A thioesterase." },
  { question_fr: "Le complexe FAS peut-il synthétiser des acides gras de plus de 16 carbones ?", question_en: "Can the FAS complex synthesize fatty acids longer than 16 carbons?", answer_fr: "Non, il s'arrête au palmitate (16C) ; l'élongation ultérieure se fait par d'autres enzymes.", answer_en: "No, it stops at palmitate (16C); further elongation is done by other enzymes." },
  { question_fr: "Où se déroule l'élongation des acides gras au-delà de 16 carbones ?", question_en: "Where does fatty acid elongation beyond 16 carbons take place?", answer_fr: "Dans le réticulum endoplasmique, par des élongases.", answer_en: "In the endoplasmic reticulum, by elongases." },
  { question_fr: "Qu'est-ce qu'une désaturase ?", question_en: "What is a desaturase?", answer_fr: "Une enzyme du réticulum endoplasmique qui introduit des doubles liaisons dans un acide gras saturé.", answer_en: "An endoplasmic reticulum enzyme that introduces double bonds into a saturated fatty acid." },
  { question_fr: "Quelle désaturase forme l'acide oléique à partir de l'acide stéarique ?", question_en: "Which desaturase forms oleic acid from stearic acid?", answer_fr: "La Δ9-désaturase (SCD1).", answer_en: "Delta-9 desaturase (SCD1)." },
  { question_fr: "En quelle position se situe la double liaison introduite par la Δ9-désaturase ?", question_en: "At which position is the double bond introduced by delta-9 desaturase?", answer_fr: "En position 9 (Δ9).", answer_en: "At position 9 (delta-9)." },
  { question_fr: "Au-delà de quelle position l'humain ne peut-il pas introduire de doubles liaisons dans un acide gras ?", question_en: "Beyond which position can humans not introduce double bonds in a fatty acid?", answer_fr: "Au-delà de la position Δ9.", answer_en: "Beyond position delta-9." },
  { question_fr: "Pourquoi les acides gras oméga-3 et oméga-6 sont-ils dits « essentiels » ?", question_en: "Why are omega-3 and omega-6 fatty acids called \"essential\"?", answer_fr: "Parce que l'organisme humain ne peut pas les synthétiser (désaturation au-delà de Δ9 impossible) ; ils doivent provenir de l'alimentation.", answer_en: "Because the human body cannot synthesize them (desaturation beyond delta-9 is impossible); they must come from the diet." },
  { question_fr: "Citez un exemple d'acide gras oméga-6 essentiel.", question_en: "Give an example of an essential omega-6 fatty acid.", answer_fr: "L'acide linoléique.", answer_en: "Linoleic acid." },
  { question_fr: "Citez un exemple d'acide gras oméga-3 essentiel.", question_en: "Give an example of an essential omega-3 fatty acid.", answer_fr: "L'acide α-linolénique.", answer_en: "Alpha-linolenic acid." },
  { question_fr: "Quelle hormone stimule globalement la voie de synthèse des acides gras ?", question_en: "Which hormone broadly stimulates the fatty acid synthesis pathway?", answer_fr: "L'insuline.", answer_en: "Insulin." },
  { question_fr: "Quels deux facteurs inhibent globalement la voie de synthèse des acides gras ?", question_en: "Which two factors broadly inhibit the fatty acid synthesis pathway?", answer_fr: "Le glucagon et l'AMPK.", answer_en: "Glucagon and AMPK." },
  { question_fr: "Quel facteur de transcription, stimulé par l'insuline, régule l'expression des gènes de la lipogenèse (FAS, ACC) ?", question_en: "Which transcription factor, stimulated by insulin, regulates expression of lipogenesis genes (FAS, ACC)?", answer_fr: "SREBP-1c.", answer_en: "SREBP-1c." },
  { question_fr: "Résumez en une phrase le cycle d'élongation du complexe FAS.", question_en: "Summarize in one sentence the FAS elongation cycle.", answer_fr: "Chaque cycle condense un malonyl-ACP avec la chaîne en croissance, réduit, déshydrate puis réduit à nouveau, ajoutant 2 carbones et consommant 2 NADPH, jusqu'à former le palmitate après 7 répétitions.", answer_en: "Each cycle condenses malonyl-ACP with the growing chain, reduces, dehydrates, then reduces again, adding 2 carbons and consuming 2 NADPH, forming palmitate after 7 repetitions." },
];

const TRIGLYCERIDE_SYNTHESIS_COURSE = `# Synthèse des triglycérides

## 1. Vue d'ensemble
- Les **triglycérides** (triacylglycérols) sont la forme de stockage énergétique la plus dense, principalement dans le **tissu adipeux**, mais aussi transitoirement dans le **foie**.
- Synthétisés à partir de **glycérol-3-phosphate** et de **3 acides gras** activés sous forme d'**acyl-CoA**.

## 2. Origine du glycérol-3-phosphate
- Dans le **foie** : à partir du glycérol (issu de la lipolyse ou de l'alimentation), phosphorylé par la **glycérol kinase**.
- Dans le **tissu adipeux** : dépourvu de glycérol kinase significative, le glycérol-3-phosphate provient presque exclusivement de la réduction du **DHAP** (intermédiaire de la glycolyse) par la glycérol-3-phosphate déshydrogénase.

## 3. Les étapes de la synthèse (voie du glycérol phosphate)

| # | Réaction | Enzyme | Note |
| --- | --- | --- | --- |
| 1 | Glycérol-3-phosphate + acyl-CoA → acide lysophosphatidique | **Glycérol-3-phosphate acyltransférase (GPAT)** | 1 acide gras estérifié |
| 2 | Acide lysophosphatidique + acyl-CoA → acide phosphatidique | **Acylglycérophosphate acyltransférase (AGPAT)** | 2 acides gras estérifiés |
| 3 | Acide phosphatidique → diacylglycérol (DAG) | **Phosphatidate phosphatase** | Déphosphorylation |
| 4 | Diacylglycérol + acyl-CoA → triacylglycérol | **Diacylglycérol acyltransférase (DGAT)** | 3 acides gras estérifiés ; enzyme finale et spécifique de la voie |

## 4. Devenir des triglycérides synthétisés
- Dans le **foie** : incorporés dans des lipoprotéines **VLDL**, sécrétées dans la circulation pour livrer les triglycérides aux tissus périphériques.
- Dans le **tissu adipeux** : stockés dans des gouttelettes lipidiques cytoplasmiques.

## 5. Régulation et liens avec d'autres voies
- Stimulée par l'**insuline** (état nourri), qui favorise aussi l'expression de la **lipoprotéine lipase (LPL)** endothéliale, permettant la capture des acides gras circulants issus des chylomicrons/VLDL par les tissus périphériques.
- L'**acide phosphatidique** est aussi un précurseur des **phospholipides membranaires**, reliant cette voie à la biosynthèse membranaire.

## Points à retenir
- Glycérol-3-phosphate + 3 acyl-CoA → triglycéride, via 4 étapes (GPAT, AGPAT, phosphatase, DGAT).
- Le tissu adipeux dérive son glycérol-3-phosphate du DHAP glycolytique (pas de glycérol kinase significative) ; le foie peut utiliser directement le glycérol.
- Les triglycérides hépatiques sont exportés sous forme de VLDL ; ceux du tissu adipeux sont stockés localement.`;

export const TRIGLYCERIDE_SYNTHESIS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Synthèse des triglycérides",
    source_label: "Synthèse — Metabolism: Triglyceride Synthesis (Ninja Nerd)",
    content_fr: TRIGLYCERIDE_SYNTHESIS_COURSE,
  },
  qcm: [
    single("Quels sont les deux substrats de base de la synthèse des triglycérides ?", "C", "Le glycérol-3-phosphate et trois acides gras activés en acyl-CoA sont les substrats de base.", ["Le glucose et le pyruvate", "Le citrate et l'acétyl-CoA", "Le glycérol-3-phosphate et l'acyl-CoA", "Le malonyl-CoA et le NADPH"]),
    single("Dans quel tissu le glycérol-3-phosphate provient-il essentiellement de la réduction du DHAP ?", "B", "Dans le tissu adipeux, dépourvu de glycérol kinase significative, le G3P provient presque exclusivement de la réduction du DHAP.", ["Dans le foie", "Dans le tissu adipeux", "Dans le muscle", "Dans le rein"]),
    single("Quelle enzyme phosphoryle directement le glycérol en glycérol-3-phosphate dans le foie ?", "D", "La glycérol kinase, présente dans le foie, phosphoryle directement le glycérol.", ["La GPAT", "L'AGPAT", "La DGAT", "La glycérol kinase"]),
    single("Quelle enzyme catalyse l'estérification du premier acide gras sur le glycérol-3-phosphate ?", "A", "La glycérol-3-phosphate acyltransférase (GPAT) catalyse cette première estérification, formant l'acide lysophosphatidique.", ["La glycérol-3-phosphate acyltransférase (GPAT)", "L'acylglycérophosphate acyltransférase (AGPAT)", "La phosphatidate phosphatase", "La diacylglycérol acyltransférase (DGAT)"]),
    single("Quelle enzyme catalyse l'estérification du second acide gras, formant l'acide phosphatidique ?", "B", "L'acylglycérophosphate acyltransférase (AGPAT) catalyse cette seconde estérification.", ["La GPAT", "L'AGPAT", "La DGAT", "La phosphatidate phosphatase"]),
    single("Quelle enzyme convertit l'acide phosphatidique en diacylglycérol ?", "C", "La phosphatidate phosphatase déphosphoryle l'acide phosphatidique en diacylglycérol.", ["La GPAT", "L'AGPAT", "La phosphatidate phosphatase", "La DGAT"]),
    single("Quelle enzyme catalyse l'estérification finale du troisième acide gras, formant le triglycéride ?", "D", "La diacylglycérol acyltransférase (DGAT) catalyse l'estérification finale, spécifique de cette voie.", ["La GPAT", "L'AGPAT", "La phosphatidate phosphatase", "La diacylglycérol acyltransférase (DGAT)"]),
    single("Sous quelle forme les triglycérides hépatiques sont-ils exportés vers les tissus périphériques ?", "A", "Les triglycérides hépatiques sont incorporés dans des lipoprotéines VLDL, sécrétées dans la circulation.", ["Les VLDL", "Les chylomicrons", "Les HDL", "Ils ne sont jamais exportés"]),
    single("Où les triglycérides synthétisés dans le tissu adipeux sont-ils stockés ?", "B", "Ils sont stockés dans des gouttelettes lipidiques cytoplasmiques.", ["Dans le noyau", "Dans des gouttelettes lipidiques cytoplasmiques", "Dans la mitochondrie", "Dans le réticulum endoplasmique uniquement"]),
    single("Quelle enzyme, dont l'expression est stimulée par l'insuline, permet la capture des acides gras circulants par les tissus périphériques ?", "C", "La lipoprotéine lipase (LPL), endothéliale, hydrolyse les triglycérides des lipoprotéines circulantes pour en libérer les acides gras.", ["La DGAT", "L'AGPAT", "La lipoprotéine lipase (LPL)", "La lipase hormono-sensible"]),
    single("Quel intermédiaire de la voie de synthèse des triglycérides est aussi un précurseur des phospholipides membranaires ?", "A", "L'acide phosphatidique est un précurseur commun aux triglycérides et aux phospholipides membranaires.", ["L'acide phosphatidique", "Le diacylglycérol", "Le glycérol-3-phosphate", "L'acide lysophosphatidique"]),
  ],
  exam: { titre_fr: "Examen chronométré — Synthèse des triglycérides", duration_seconds: 990 },
};

export const TRIGLYCERIDE_SYNTHESIS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Qu'appelle-t-on aussi les triglycérides ?", question_en: "What are triglycerides also called?", answer_fr: "Les triacylglycérols.", answer_en: "Triacylglycerols." },
  { question_fr: "Quel est le principal tissu de stockage des triglycérides ?", question_en: "What is the main tissue for triglyceride storage?", answer_fr: "Le tissu adipeux.", answer_en: "Adipose tissue." },
  { question_fr: "Quels sont les deux types de substrats nécessaires à la synthèse d'un triglycéride ?", question_en: "What are the two types of substrates needed to synthesize a triglyceride?", answer_fr: "Le glycérol-3-phosphate et trois acides gras activés en acyl-CoA.", answer_en: "Glycerol-3-phosphate and three fatty acids activated as acyl-CoA." },
  { question_fr: "Dans le foie, quelle enzyme phosphoryle directement le glycérol ?", question_en: "In the liver, which enzyme directly phosphorylates glycerol?", answer_fr: "La glycérol kinase.", answer_en: "Glycerol kinase." },
  { question_fr: "Pourquoi le tissu adipeux ne peut-il pas utiliser directement le glycérol libre pour former du glycérol-3-phosphate ?", question_en: "Why can't adipose tissue directly use free glycerol to form glycerol-3-phosphate?", answer_fr: "Parce qu'il est dépourvu de glycérol kinase significative.", answer_en: "Because it lacks significant glycerol kinase activity." },
  { question_fr: "D'où provient le glycérol-3-phosphate dans le tissu adipeux ?", question_en: "Where does glycerol-3-phosphate come from in adipose tissue?", answer_fr: "De la réduction du dihydroxyacétone phosphate (DHAP), intermédiaire de la glycolyse.", answer_en: "From the reduction of dihydroxyacetone phosphate (DHAP), a glycolysis intermediate." },
  { question_fr: "Quelle enzyme catalyse la première estérification, formant l'acide lysophosphatidique ?", question_en: "Which enzyme catalyzes the first esterification, forming lysophosphatidic acid?", answer_fr: "La glycérol-3-phosphate acyltransférase (GPAT).", answer_en: "Glycerol-3-phosphate acyltransferase (GPAT)." },
  { question_fr: "Combien d'acides gras sont estérifiés sur l'acide lysophosphatidique ?", question_en: "How many fatty acids are esterified on lysophosphatidic acid?", answer_fr: "Un.", answer_en: "One." },
  { question_fr: "Quelle enzyme catalyse la seconde estérification, formant l'acide phosphatidique ?", question_en: "Which enzyme catalyzes the second esterification, forming phosphatidic acid?", answer_fr: "L'acylglycérophosphate acyltransférase (AGPAT).", answer_en: "Acylglycerophosphate acyltransferase (AGPAT)." },
  { question_fr: "Combien d'acides gras sont estérifiés sur l'acide phosphatidique ?", question_en: "How many fatty acids are esterified on phosphatidic acid?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "Quelle enzyme déphosphoryle l'acide phosphatidique en diacylglycérol ?", question_en: "Which enzyme dephosphorylates phosphatidic acid into diacylglycerol?", answer_fr: "La phosphatidate phosphatase.", answer_en: "Phosphatidate phosphatase." },
  { question_fr: "Quelle enzyme catalyse la troisième et dernière estérification, formant le triglycéride ?", question_en: "Which enzyme catalyzes the third and final esterification, forming the triglyceride?", answer_fr: "La diacylglycérol acyltransférase (DGAT).", answer_en: "Diacylglycerol acyltransferase (DGAT)." },
  { question_fr: "La DGAT est-elle spécifique à la voie de synthèse des triglycérides, ou partagée avec d'autres voies ?", question_en: "Is DGAT specific to the triglyceride synthesis pathway, or shared with other pathways?", answer_fr: "Elle est spécifique, contrairement aux étapes précédentes partagées avec la synthèse des phospholipides.", answer_en: "It is specific, unlike the earlier steps shared with phospholipid synthesis." },
  { question_fr: "Sous quelle forme les triglycérides hépatiques sont-ils exportés dans la circulation ?", question_en: "In what form are hepatic triglycerides exported into circulation?", answer_fr: "Sous forme de lipoprotéines VLDL.", answer_en: "As VLDL lipoproteins." },
  { question_fr: "Où sont stockés les triglycérides synthétisés dans le tissu adipeux ?", question_en: "Where are triglycerides synthesized in adipose tissue stored?", answer_fr: "Dans des gouttelettes lipidiques cytoplasmiques.", answer_en: "In cytoplasmic lipid droplets." },
  { question_fr: "Quelle hormone stimule globalement la synthèse des triglycérides ?", question_en: "Which hormone broadly stimulates triglyceride synthesis?", answer_fr: "L'insuline.", answer_en: "Insulin." },
  { question_fr: "Quelle enzyme, stimulée par l'insuline, hydrolyse les triglycérides des lipoprotéines circulantes pour libérer des acides gras aux tissus ?", question_en: "Which insulin-stimulated enzyme hydrolyzes triglycerides in circulating lipoproteins to release fatty acids to tissues?", answer_fr: "La lipoprotéine lipase (LPL), endothéliale.", answer_en: "Lipoprotein lipase (LPL), endothelial." },
  { question_fr: "Quel intermédiaire de la voie des triglycérides est partagé avec la synthèse des phospholipides membranaires ?", question_en: "Which triglyceride pathway intermediate is shared with membrane phospholipid synthesis?", answer_fr: "L'acide phosphatidique.", answer_en: "Phosphatidic acid." },
  { question_fr: "Combien d'acyl-CoA au total sont incorporés dans un triglycéride ?", question_en: "How many acyl-CoA in total are incorporated into one triglyceride?", answer_fr: "Trois.", answer_en: "Three." },
  { question_fr: "Résumez en une phrase la voie de synthèse des triglycérides.", question_en: "Summarize in one sentence the triglyceride synthesis pathway.", answer_fr: "Le glycérol-3-phosphate est progressivement estérifié par trois acyl-CoA successifs (via GPAT, AGPAT, puis DGAT après déphosphorylation) pour former le triglycéride final, stocké dans l'adipocyte ou exporté par le foie sous forme de VLDL.", answer_en: "Glycerol-3-phosphate is progressively esterified by three successive acyl-CoA (via GPAT, AGPAT, then DGAT after dephosphorylation) to form the final triglyceride, stored in adipocytes or exported by the liver as VLDL." },
];
