import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const CHOLESTEROL_METABOLISM_COURSE = `# Métabolisme du cholestérol

## 1. Vue d'ensemble
- Le cholestérol est un stérol essentiel : précurseur des **hormones stéroïdiennes**, des **acides biliaires**, de la **vitamine D**, et composant structural des **membranes cellulaires** (module leur fluidité).
- Synthétisé principalement dans le **foie**, à partir d'**acétyl-CoA**, essentiellement dans le cytosol et le réticulum endoplasmique.

## 2. Les étapes clés de la synthèse
1. **Thiolase** : 2 acétyl-CoA → acétoacétyl-CoA (cytosol).
2. **HMG-CoA synthase** (isoforme cytosolique, distincte de celle de la cétogenèse) : acétoacétyl-CoA + acétyl-CoA → **HMG-CoA**.
3. **HMG-CoA réductase** (réticulum endoplasmique) : HMG-CoA + 2 NADPH → **mévalonate**. Étape **limitante et régulatrice** de toute la voie ; cible pharmacologique des **statines**.
4. Une série de réactions convertit le mévalonate en isopentényl pyrophosphate (IPP), puis en **squalène** (condensation de plusieurs unités isopréniques), puis en lanostérol, et enfin en **cholestérol** après de multiples modifications enzymatiques.

## 3. Régulation de la HMG-CoA réductase
- **Régulation transcriptionnelle** : le cholestérol intracellulaire, via le facteur de transcription **SREBP-2**, régule l'expression du gène de la HMG-CoA réductase et du **récepteur LDL** — un cholestérol intracellulaire bas stimule leur expression (davantage de synthèse et de captation).
- **Régulation post-traductionnelle** : phosphorylation inhibitrice par l'**AMPK** (faible charge énergétique) ; dégradation accélérée de l'enzyme par un cholestérol intracellulaire élevé.
- **Inhibition pharmacologique** : les **statines** inhibent compétitivement la HMG-CoA réductase, réduisant la synthèse de cholestérol et stimulant secondairement l'expression des récepteurs LDL hépatiques (baisse du LDL circulant) — traitement de référence de l'hypercholestérolémie.

## 4. Devenir du cholestérol
- Précurseur des **hormones stéroïdiennes** (cortisol, aldostérone, hormones sexuelles) dans les glandes surrénales et gonades.
- Précurseur des **acides biliaires** (foie), essentiels à la digestion/absorption des lipides.
- Précurseur de la **vitamine D** (peau, sous l'effet des UV, puis activation hépatique/rénale).
- Composant des **membranes cellulaires**.
- L'excès est éliminé principalement par **sécrétion biliaire** (cholestérol libre ou converti en acides biliaires).

## Points à retenir
- La HMG-CoA réductase (réticulum endoplasmique) est l'étape limitante, cible des statines.
- Régulation par SREBP-2 (transcriptionnelle) et par le cholestérol lui-même (rétro-inhibition, dégradation accélérée de l'enzyme).
- Le cholestérol est précurseur des hormones stéroïdiennes, des acides biliaires et de la vitamine D, en plus de son rôle structural membranaire.`;

export const CHOLESTEROL_METABOLISM_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Métabolisme du cholestérol",
    source_label: "Synthèse — Metabolism: Cholesterol Metabolism (Ninja Nerd)",
    content_fr: CHOLESTEROL_METABOLISM_COURSE,
  },
  qcm: [
    single("Quel est le précurseur direct de la synthèse du cholestérol ?", "B", "L'acétyl-CoA est le précurseur direct de la synthèse du cholestérol.", ["Le glucose", "L'acétyl-CoA", "Le glycérol", "Le pyruvate"]),
    single("Dans quel organe se déroule principalement la synthèse du cholestérol ?", "C", "Le foie est le principal site de synthèse du cholestérol.", ["Le muscle", "Le tissu adipeux", "Le foie", "Le rein"]),
    single("Quelle enzyme catalyse l'étape limitante de la synthèse du cholestérol ?", "A", "La HMG-CoA réductase catalyse la conversion du HMG-CoA en mévalonate, l'étape limitante.", ["La HMG-CoA réductase", "La HMG-CoA synthase", "La thiolase", "La squalène synthase"]),
    single("Quel produit résulte de la réaction catalysée par la HMG-CoA réductase ?", "D", "Le mévalonate est formé à partir du HMG-CoA.", ["Le squalène", "L'IPP", "Le lanostérol", "Le mévalonate"]),
    single("Quelle classe de médicaments inhibe la HMG-CoA réductase ?", "B", "Les statines inhibent compétitivement la HMG-CoA réductase.", ["Les fibrates", "Les statines", "Les biguanides", "Les sulfamides"]),
    single("Quel effet secondaire les statines ont-elles sur l'expression du récepteur LDL hépatique ?", "C", "En réduisant le cholestérol intracellulaire, les statines stimulent secondairement l'expression du récepteur LDL, augmentant la clairance du LDL circulant.", ["Elles la répriment", "Elles n'ont aucun effet dessus", "Elles la stimulent, augmentant la clairance du LDL", "Elles la dégradent directement"]),
    single("Quel facteur de transcription régule l'expression de la HMG-CoA réductase et du récepteur LDL en fonction du cholestérol intracellulaire ?", "A", "SREBP-2 régule ces deux gènes en réponse au niveau de cholestérol intracellulaire.", ["SREBP-2", "SREBP-1c", "PPAR-alpha", "CREB"]),
    single("Quel est l'effet d'un cholestérol intracellulaire bas sur l'expression de la HMG-CoA réductase et du récepteur LDL ?", "B", "Un cholestérol intracellulaire bas stimule leur expression, augmentant synthèse et captation.", ["Il les réprime", "Il stimule leur expression", "Il n'a aucun effet", "Il stimule uniquement le récepteur LDL"]),
    single("Quelle kinase, activée par une faible charge énergétique, inhibe la HMG-CoA réductase par phosphorylation ?", "C", "L'AMPK phosphoryle et inhibe la HMG-CoA réductase.", ["La PKA", "La GSK3", "L'AMPK", "La PDH kinase"]),
    multi("Quels sont des précurseurs biologiques dérivés du cholestérol ?", ["A", "B", "C"], "Le cholestérol est précurseur des hormones stéroïdiennes, des acides biliaires et de la vitamine D.", ["Les hormones stéroïdiennes", "Les acides biliaires", "La vitamine D", "Le glucose"]),
    single("Par quelle voie principale l'excès de cholestérol est-il éliminé de l'organisme ?", "D", "La sécrétion biliaire (cholestérol libre ou converti en acides biliaires) est la voie principale d'élimination.", ["Par voie urinaire directe", "Par voie pulmonaire", "Par voie cutanée", "Par sécrétion biliaire"]),
    single("Quel intermédiaire, formé par condensation de plusieurs unités isopréniques, précède le lanostérol dans la synthèse du cholestérol ?", "B", "Le squalène est formé par condensation de plusieurs unités isopréniques (dérivées de l'IPP), avant sa cyclisation en lanostérol.", ["Le mévalonate", "Le squalène", "L'acétoacétate", "Le HMG-CoA"]),
  ],
  exam: { titre_fr: "Examen chronométré — Métabolisme du cholestérol", duration_seconds: 1_080 },
};

export const CHOLESTEROL_METABOLISM_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel est le précurseur direct de la synthèse du cholestérol ?", question_en: "What is the direct precursor of cholesterol synthesis?", answer_fr: "L'acétyl-CoA.", answer_en: "Acetyl-CoA." },
  { question_fr: "Dans quel organe se déroule principalement la synthèse du cholestérol ?", question_en: "In which organ does cholesterol synthesis mainly occur?", answer_fr: "Le foie.", answer_en: "The liver." },
  { question_fr: "Quelle enzyme condense 2 acétyl-CoA en acétoacétyl-CoA lors de la synthèse du cholestérol ?", question_en: "Which enzyme condenses 2 acetyl-CoA into acetoacetyl-CoA during cholesterol synthesis?", answer_fr: "La thiolase.", answer_en: "Thiolase." },
  { question_fr: "Quelle enzyme forme le HMG-CoA à partir de l'acétoacétyl-CoA ?", question_en: "Which enzyme forms HMG-CoA from acetoacetyl-CoA?", answer_fr: "La HMG-CoA synthase (isoforme cytosolique).", answer_en: "HMG-CoA synthase (cytosolic isoform)." },
  { question_fr: "Quelle enzyme catalyse l'étape limitante de la synthèse du cholestérol ?", question_en: "Which enzyme catalyzes the rate-limiting step of cholesterol synthesis?", answer_fr: "La HMG-CoA réductase.", answer_en: "HMG-CoA reductase." },
  { question_fr: "Où est localisée la HMG-CoA réductase dans la cellule ?", question_en: "Where is HMG-CoA reductase located in the cell?", answer_fr: "Dans le réticulum endoplasmique.", answer_en: "In the endoplasmic reticulum." },
  { question_fr: "Quel produit forme la HMG-CoA réductase ?", question_en: "What product does HMG-CoA reductase form?", answer_fr: "Le mévalonate.", answer_en: "Mevalonate." },
  { question_fr: "Combien de NADPH sont consommés par la réaction de la HMG-CoA réductase ?", question_en: "How many NADPH are consumed by the HMG-CoA reductase reaction?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "Quel intermédiaire isoprénique de la voie provient du mévalonate ?", question_en: "Which isoprenoid intermediate of the pathway comes from mevalonate?", answer_fr: "L'isopentényl pyrophosphate (IPP).", answer_en: "Isopentenyl pyrophosphate (IPP)." },
  { question_fr: "Quel intermédiaire est formé par condensation de plusieurs unités isopréniques, avant la cyclisation ?", question_en: "Which intermediate is formed by condensation of several isoprenoid units, before cyclization?", answer_fr: "Le squalène.", answer_en: "Squalene." },
  { question_fr: "Quel intermédiaire cyclisé précède directement le cholestérol final ?", question_en: "Which cyclized intermediate directly precedes the final cholesterol?", answer_fr: "Le lanostérol.", answer_en: "Lanosterol." },
  { question_fr: "Quel facteur de transcription régule la HMG-CoA réductase et le récepteur LDL selon le niveau de cholestérol intracellulaire ?", question_en: "Which transcription factor regulates HMG-CoA reductase and the LDL receptor based on intracellular cholesterol levels?", answer_fr: "SREBP-2.", answer_en: "SREBP-2." },
  { question_fr: "Quel est l'effet d'un cholestérol intracellulaire bas sur l'expression de ces deux gènes ?", question_en: "What is the effect of low intracellular cholesterol on expression of these two genes?", answer_fr: "Il la stimule, augmentant la synthèse et la captation du cholestérol.", answer_en: "It stimulates it, increasing cholesterol synthesis and uptake." },
  { question_fr: "Quelle kinase inhibe la HMG-CoA réductase par phosphorylation en cas de faible charge énergétique ?", question_en: "Which kinase inhibits HMG-CoA reductase by phosphorylation under low energy charge?", answer_fr: "L'AMPK.", answer_en: "AMPK." },
  { question_fr: "Un cholestérol intracellulaire élevé accélère-t-il la dégradation de la HMG-CoA réductase ?", question_en: "Does high intracellular cholesterol accelerate degradation of HMG-CoA reductase?", answer_fr: "Oui.", answer_en: "Yes." },
  { question_fr: "Quelle classe de médicaments cible directement la HMG-CoA réductase ?", question_en: "Which class of drugs directly targets HMG-CoA reductase?", answer_fr: "Les statines.", answer_en: "Statins." },
  { question_fr: "Par quel mécanisme les statines réduisent-elles le LDL circulant ?", question_en: "By what mechanism do statins reduce circulating LDL?", answer_fr: "En inhibant la synthèse de cholestérol, elles stimulent secondairement l'expression des récepteurs LDL hépatiques, augmentant la clairance du LDL.", answer_en: "By inhibiting cholesterol synthesis, they secondarily stimulate hepatic LDL receptor expression, increasing LDL clearance." },
  { question_fr: "Citez trois destinées biologiques du cholestérol, en plus de son rôle structural membranaire.", question_en: "Name three biological fates of cholesterol, besides its structural membrane role.", answer_fr: "Précurseur des hormones stéroïdiennes, des acides biliaires, et de la vitamine D.", answer_en: "Precursor of steroid hormones, bile acids, and vitamin D." },
  { question_fr: "Dans quels organes le cholestérol est-il converti en hormones stéroïdiennes ?", question_en: "In which organs is cholesterol converted into steroid hormones?", answer_fr: "Les glandes surrénales et les gonades.", answer_en: "The adrenal glands and gonads." },
  { question_fr: "Dans quel organe le cholestérol est-il converti en acides biliaires ?", question_en: "In which organ is cholesterol converted into bile acids?", answer_fr: "Le foie.", answer_en: "The liver." },
  { question_fr: "Par quelle voie principale l'excès de cholestérol est-il éliminé de l'organisme ?", question_en: "By what main route is excess cholesterol eliminated from the body?", answer_fr: "Par sécrétion biliaire.", answer_en: "Via biliary secretion." },
  { question_fr: "Résumez en une phrase le fonctionnement de la voie de synthèse du cholestérol.", question_en: "Summarize in one sentence how the cholesterol synthesis pathway works.", answer_fr: "L'acétyl-CoA est progressivement condensé via le HMG-CoA et le mévalonate (étape limitante contrôlée par la HMG-CoA réductase, cible des statines) en unités isopréniques, assemblées en squalène puis cyclisées en cholestérol.", answer_en: "Acetyl-CoA is progressively condensed via HMG-CoA and mevalonate (the rate-limiting step controlled by HMG-CoA reductase, the statin target) into isoprenoid units, assembled into squalene and then cyclized into cholesterol." },
];

const LIPOPROTEIN_METABOLISM_COURSE = `# Métabolisme des lipoprotéines

## 1. Vue d'ensemble
- Les **lipoprotéines** transportent les lipides (triglycérides, cholestérol) insolubles dans le plasma aqueux, sous forme de particules sphériques : un cœur lipidique (triglycérides, esters de cholestérol) entouré d'une monocouche de phospholipides et d'**apolipoprotéines**.
- Classées par **densité croissante** (et taille décroissante) : **chylomicrons, VLDL, IDL, LDL, HDL**.

## 2. Voie exogène (chylomicrons)
- Les triglycérides et le cholestérol alimentaires sont absorbés par les entérocytes, réassemblés, incorporés dans des **chylomicrons** (apoB-48), sécrétés dans la lymphe puis le sang.
- La **lipoprotéine lipase (LPL)**, sur l'endothélium des capillaires (muscle, tissu adipeux), hydrolyse les triglycérides des chylomicrons, libérant des acides gras captés par les tissus ; activée par l'**apoC-II** (transférée depuis les HDL).
- Les résidus (remnants) de chylomicrons, appauvris en triglycérides, sont captés par le foie via des récepteurs reconnaissant l'**apoE**.

## 3. Voie endogène (VLDL, IDL, LDL)
- Le foie synthétise des **VLDL** (apoB-100) contenant les triglycérides d'origine hépatique, sécrétées dans le sang.
- La LPL hydrolyse les triglycérides des VLDL, générant des **IDL** (lipoprotéines de densité intermédiaire).
- Les IDL sont soit captées par le foie (récepteur apoE), soit converties en **LDL** par la lipase hépatique (perte de triglycérides et d'apoE supplémentaires).
- Le **LDL**, riche en cholestérol estérifié, est capté par les tissus périphériques et le foie via le **récepteur LDL** (reconnaissant l'apoB-100), régulé par le contenu cellulaire en cholestérol (SREBP-2).

## 4. Transport inverse du cholestérol (HDL)
- Les **HDL naissants**, sécrétés par le foie et l'intestin, captent le cholestérol libre des tissus périphériques via le transporteur **ABCA1**.
- La **LCAT** (lécithine-cholestérol acyltransférase) estérifie ce cholestérol, le stabilisant à l'intérieur du HDL (maturation en HDL sphérique).
- Le cholestérol des HDL est ramené au foie, soit directement (récepteur **SR-B1**), soit indirectement via transfert vers les VLDL/LDL par la **CETP** (cholesteryl ester transfer protein).
- Ce « transport inverse » explique le rôle protecteur cardiovasculaire associé à un HDL élevé (« bon cholestérol »).

## 5. Importance clinique
- **LDL élevé** (« mauvais cholestérol ») : facteur de risque majeur d'**athérosclérose**, l'excès de LDL s'infiltrant dans la paroi artérielle, étant oxydé, puis capté par les macrophages (cellules spumeuses), initiant la plaque d'athérome.
- **Hypercholestérolémie familiale** : mutation du récepteur LDL, réduisant la clairance hépatique du LDL, provoquant une hypercholestérolémie sévère et une athérosclérose précoce.
- Les **statines** réduisent le LDL en inhibant la HMG-CoA réductase, stimulant secondairement l'expression du récepteur LDL hépatique.

## Points à retenir
- Voie exogène : chylomicrons (apoB-48, alimentaire) → LPL → résidus captés par le foie (apoE).
- Voie endogène : VLDL (apoB-100, hépatique) → LPL → IDL → LDL, captée via le récepteur LDL (apoB-100).
- HDL assure le transport inverse du cholestérol des tissus périphériques vers le foie (ABCA1, LCAT, SR-B1/CETP), rôle protecteur cardiovasculaire.`;

export const LIPOPROTEIN_METABOLISM_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Métabolisme des lipoprotéines",
    source_label: "Synthèse — Metabolism: Lipoprotein Metabolism (Ninja Nerd)",
    content_fr: LIPOPROTEIN_METABOLISM_COURSE,
  },
  qcm: [
    single("Comment sont classées les lipoprotéines entre elles ?", "C", "Les lipoprotéines sont classées par densité croissante (et taille décroissante).", ["Par charge électrique", "Par composition protéique uniquement", "Par densité croissante", "Par origine tissulaire uniquement"]),
    single("Quelle lipoprotéine transporte les lipides d'origine alimentaire ?", "A", "Les chylomicrons transportent les triglycérides et le cholestérol d'origine alimentaire.", ["Les chylomicrons", "Les VLDL", "Les LDL", "Les HDL"]),
    single("Quelle apolipoprotéine caractérise les chylomicrons ?", "B", "L'apoB-48 est l'apolipoprotéine structurale caractéristique des chylomicrons.", ["L'apoB-100", "L'apoB-48", "L'apoE", "L'apoA-I"]),
    single("Quelle enzyme hydrolyse les triglycérides des chylomicrons et des VLDL au niveau de l'endothélium capillaire ?", "D", "La lipoprotéine lipase (LPL) hydrolyse les triglycérides de ces lipoprotéines.", ["La HSL", "La LCAT", "La lipase hépatique", "La lipoprotéine lipase (LPL)"]),
    single("Quelle apolipoprotéine active la lipoprotéine lipase ?", "A", "L'apoC-II, transférée depuis les HDL, active la LPL.", ["L'apoC-II", "L'apoB-100", "L'apoE", "L'apoA-I"]),
    single("Par quel récepteur les résidus de chylomicrons sont-ils captés par le foie ?", "C", "Les résidus de chylomicrons sont captés via des récepteurs reconnaissant l'apoE.", ["Le récepteur LDL (apoB-100)", "Le récepteur SR-B1", "Un récepteur reconnaissant l'apoE", "ABCA1"]),
    single("Quelle lipoprotéine, synthétisée par le foie, initie la voie endogène ?", "B", "Le VLDL, portant l'apoB-100, est sécrété par le foie et initie la voie endogène.", ["Le chylomicron", "Le VLDL", "Le LDL", "Le HDL naissant"]),
    single("Que devient le VLDL après l'action de la LPL sur ses triglycérides ?", "D", "Le VLDL, appauvri en triglycérides, devient une IDL (lipoprotéine de densité intermédiaire).", ["Il devient directement un LDL", "Il est immédiatement dégradé", "Il redevient un chylomicron", "Il devient une IDL"]),
    single("Quelle enzyme convertit l'IDL en LDL ?", "C", "La lipase hépatique retire des triglycérides et de l'apoE supplémentaires, formant le LDL.", ["La LPL", "La LCAT", "La lipase hépatique", "La CETP"]),
    single("Par quel récepteur le LDL est-il capté par les tissus périphériques et le foie ?", "A", "Le récepteur LDL, reconnaissant l'apoB-100, capte le LDL circulant.", ["Le récepteur LDL (apoB-100)", "Le récepteur SR-B1", "ABCA1", "Un récepteur apoE"]),
    single("Quel transporteur permet aux HDL naissants de capter le cholestérol libre des tissus périphériques ?", "B", "ABCA1 permet l'efflux de cholestérol des cellules périphériques vers les HDL naissants.", ["La LCAT", "ABCA1", "La CETP", "Le récepteur SR-B1"]),
    single("Quelle enzyme estérifie le cholestérol capté par les HDL, le stabilisant à l'intérieur de la particule ?", "D", "La LCAT (lécithine-cholestérol acyltransférase) estérifie le cholestérol, maturant le HDL naissant en HDL sphérique.", ["ABCA1", "La lipase hépatique", "La CETP", "La LCAT"]),
    single("Quel récepteur permet la captation hépatique directe du cholestérol des HDL ?", "A", "Le récepteur SR-B1 capte directement le cholestérol des HDL au niveau du foie.", ["Le récepteur SR-B1", "Le récepteur LDL", "ABCA1", "Un récepteur apoB-48"]),
  ],
  exam: { titre_fr: "Examen chronométré — Métabolisme des lipoprotéines", duration_seconds: 1_170 },
};

export const LIPOPROTEIN_METABOLISM_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la fonction générale des lipoprotéines ?", question_en: "What is the general function of lipoproteins?", answer_fr: "Transporter les lipides insolubles (triglycérides, cholestérol) dans le plasma aqueux.", answer_en: "Transporting insoluble lipids (triglycerides, cholesterol) in the aqueous plasma." },
  { question_fr: "Comment est structurée une particule de lipoprotéine ?", question_en: "How is a lipoprotein particle structured?", answer_fr: "Un cœur lipidique (triglycérides, esters de cholestérol) entouré d'une monocouche de phospholipides et d'apolipoprotéines.", answer_en: "A lipid core (triglycerides, cholesterol esters) surrounded by a monolayer of phospholipids and apolipoproteins." },
  { question_fr: "Citez les cinq classes principales de lipoprotéines, de la moins dense à la plus dense.", question_en: "Name the five main lipoprotein classes, from least to most dense.", answer_fr: "Chylomicrons, VLDL, IDL, LDL, HDL.", answer_en: "Chylomicrons, VLDL, IDL, LDL, HDL." },
  { question_fr: "Quelle lipoprotéine transporte les lipides d'origine alimentaire (voie exogène) ?", question_en: "Which lipoprotein transports dietary lipids (exogenous pathway)?", answer_fr: "Le chylomicron.", answer_en: "The chylomicron." },
  { question_fr: "Quelle apolipoprotéine structurale caractérise le chylomicron ?", question_en: "Which structural apolipoprotein characterizes the chylomicron?", answer_fr: "L'apoB-48.", answer_en: "ApoB-48." },
  { question_fr: "Quelle enzyme endothéliale hydrolyse les triglycérides des chylomicrons ?", question_en: "Which endothelial enzyme hydrolyzes chylomicron triglycerides?", answer_fr: "La lipoprotéine lipase (LPL).", answer_en: "Lipoprotein lipase (LPL)." },
  { question_fr: "Quelle apolipoprotéine active la LPL ?", question_en: "Which apolipoprotein activates LPL?", answer_fr: "L'apoC-II.", answer_en: "ApoC-II." },
  { question_fr: "D'où provient l'apoC-II qui active la LPL ?", question_en: "Where does the apoC-II that activates LPL come from?", answer_fr: "Elle est transférée depuis les HDL.", answer_en: "It is transferred from HDL." },
  { question_fr: "Comment appelle-t-on les particules résiduelles issues de l'action de la LPL sur les chylomicrons ?", question_en: "What are the residual particles from LPL action on chylomicrons called?", answer_fr: "Les résidus (remnants) de chylomicrons.", answer_en: "Chylomicron remnants." },
  { question_fr: "Par quel récepteur les résidus de chylomicrons sont-ils captés par le foie ?", question_en: "Which receptor takes up chylomicron remnants in the liver?", answer_fr: "Un récepteur reconnaissant l'apoE.", answer_en: "A receptor recognizing apoE." },
  { question_fr: "Quelle lipoprotéine initie la voie endogène, synthétisée par le foie ?", question_en: "Which lipoprotein initiates the endogenous pathway, synthesized by the liver?", answer_fr: "Le VLDL.", answer_en: "VLDL." },
  { question_fr: "Quelle apolipoprotéine structurale caractérise le VLDL ?", question_en: "Which structural apolipoprotein characterizes VLDL?", answer_fr: "L'apoB-100.", answer_en: "ApoB-100." },
  { question_fr: "Que devient le VLDL après l'action de la LPL sur ses triglycérides ?", question_en: "What does VLDL become after LPL acts on its triglycerides?", answer_fr: "Une IDL (lipoprotéine de densité intermédiaire).", answer_en: "An IDL (intermediate-density lipoprotein)." },
  { question_fr: "Par quels deux devenirs une IDL peut-elle disparaître de la circulation ?", question_en: "Through which two fates can an IDL leave circulation?", answer_fr: "Elle peut être captée par le foie (récepteur apoE), ou convertie en LDL par la lipase hépatique.", answer_en: "It can be taken up by the liver (apoE receptor), or converted to LDL by hepatic lipase." },
  { question_fr: "Quelle lipoprotéine est la plus riche en cholestérol estérifié ?", question_en: "Which lipoprotein is richest in cholesterol esters?", answer_fr: "Le LDL.", answer_en: "LDL." },
  { question_fr: "Par quel récepteur le LDL est-il capté par les cellules ?", question_en: "Which receptor takes up LDL into cells?", answer_fr: "Le récepteur LDL, reconnaissant l'apoB-100.", answer_en: "The LDL receptor, recognizing apoB-100." },
  { question_fr: "Qu'est-ce que le « transport inverse du cholestérol » assuré par les HDL ?", question_en: "What is the \"reverse cholesterol transport\" carried out by HDL?", answer_fr: "Le transport du cholestérol des tissus périphériques vers le foie pour élimination.", answer_en: "The transport of cholesterol from peripheral tissues to the liver for elimination." },
  { question_fr: "Quel transporteur permet l'efflux de cholestérol des cellules périphériques vers les HDL naissants ?", question_en: "Which transporter allows cholesterol efflux from peripheral cells to nascent HDL?", answer_fr: "ABCA1.", answer_en: "ABCA1." },
  { question_fr: "Quelle enzyme estérifie le cholestérol capté par le HDL naissant ?", question_en: "Which enzyme esterifies cholesterol taken up by nascent HDL?", answer_fr: "La LCAT (lécithine-cholestérol acyltransférase).", answer_en: "LCAT (lecithin-cholesterol acyltransferase)." },
  { question_fr: "Quel récepteur permet la captation hépatique directe du cholestérol des HDL ?", question_en: "Which receptor allows direct hepatic uptake of cholesterol from HDL?", answer_fr: "Le récepteur SR-B1.", answer_en: "The SR-B1 receptor." },
  { question_fr: "Quelle protéine transfère le cholestérol des HDL vers les VLDL/LDL, voie indirecte du retour hépatique ?", question_en: "Which protein transfers cholesterol from HDL to VLDL/LDL, an indirect route back to the liver?", answer_fr: "La CETP (cholesteryl ester transfer protein).", answer_en: "CETP (cholesteryl ester transfer protein)." },
  { question_fr: "Pourquoi un HDL élevé est-il considéré comme protecteur cardiovasculaire ?", question_en: "Why is high HDL considered cardioprotective?", answer_fr: "Parce qu'il reflète un transport inverse efficace du cholestérol des tissus périphériques (dont les artères) vers le foie.", answer_en: "Because it reflects efficient reverse transport of cholesterol from peripheral tissues (including arteries) back to the liver." },
  { question_fr: "Pourquoi un LDL élevé est-il considéré comme un facteur de risque cardiovasculaire ?", question_en: "Why is high LDL considered a cardiovascular risk factor?", answer_fr: "L'excès de LDL s'infiltre dans la paroi artérielle, est oxydé, et capté par les macrophages, initiant la plaque d'athérome.", answer_en: "Excess LDL infiltrates the arterial wall, gets oxidized, and is taken up by macrophages, initiating atheromatous plaque." },
  { question_fr: "Comment appelle-t-on les macrophages ayant capté du LDL oxydé dans la paroi artérielle ?", question_en: "What are macrophages that have taken up oxidized LDL in the arterial wall called?", answer_fr: "Des cellules spumeuses.", answer_en: "Foam cells." },
  { question_fr: "Qu'est-ce que l'hypercholestérolémie familiale ?", question_en: "What is familial hypercholesterolemia?", answer_fr: "Une maladie génétique due à une mutation du récepteur LDL, réduisant la clairance hépatique du LDL et provoquant une hypercholestérolémie sévère.", answer_en: "A genetic disease caused by a mutation in the LDL receptor, reducing hepatic LDL clearance and causing severe hypercholesterolemia." },
  { question_fr: "Par quel mécanisme les statines réduisent-elles le LDL circulant ?", question_en: "By what mechanism do statins reduce circulating LDL?", answer_fr: "En inhibant la HMG-CoA réductase, elles stimulent secondairement l'expression du récepteur LDL hépatique.", answer_en: "By inhibiting HMG-CoA reductase, they secondarily stimulate hepatic LDL receptor expression." },
  { question_fr: "Résumez en une phrase la logique globale du transport des lipoprotéines.", question_en: "Summarize in one sentence the overall logic of lipoprotein transport.", answer_fr: "Les voies exogène (chylomicrons) et endogène (VLDL→IDL→LDL) livrent les lipides aux tissus via la LPL, tandis que le HDL assure le transport inverse du cholestérol des tissus périphériques vers le foie.", answer_en: "The exogenous (chylomicron) and endogenous (VLDL→IDL→LDL) pathways deliver lipids to tissues via LPL, while HDL carries out reverse cholesterol transport from peripheral tissues back to the liver." },
];
