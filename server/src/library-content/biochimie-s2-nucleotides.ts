import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const NUCLEOTIDE_SYNTHESIS_COURSE = `# Synthèse des nucléotides

## 1. Vue d'ensemble
- Deux voies distinctes : la **synthèse de novo** (à partir de précurseurs simples : ribose-5-phosphate, acides aminés, CO₂, dérivés du folate) et la **voie de récupération** (recyclage des bases libres issues de la dégradation des acides nucléiques).
- Les **purines** (adénine, guanine) et les **pyrimidines** (cytosine, thymine, uracile) suivent des voies de synthèse de novo distinctes.

## 2. Synthèse de novo des purines
- Le cycle purique est construit **progressivement directement sur le ribose-5-phosphate**, activé en **PRPP** (5-phosphoribosyl-1-pyrophosphate, par la PRPP synthétase), en utilisant la glutamine, la glycine, l'aspartate, le CO₂, et des dérivés du folate (N¹⁰-formyl-THF) comme donneurs successifs.
- Premier nucléotide purique formé : l'**inosine monophosphate (IMP)**, converti ensuite en **AMP** ou **GMP**.
- Étape engagée spécifiquement dans la voie purique : la **glutamine PRPP amidotransférase**, juste après la formation du PRPP.

## 3. Synthèse de novo des pyrimidines
- Contrairement aux purines, l'anneau pyrimidique est construit **séparément** (à partir de **carbamoyl phosphate cytosolique**, produit par la **carbamoyl phosphate synthétase II (CPS2)**, distincte de la CPS1 mitochondriale du cycle de l'urée, et d'**aspartate**), **puis** attaché au ribose-5-phosphate (PRPP).
- Premier nucléotide pyrimidique formé : l'**acide orotique**, converti en orotidine monophosphate (OMP) puis en **UMP** (uridine monophosphate), précurseur de tous les autres nucléotides pyrimidiques.
- Étape limitante : la **CPS2**, régulée différemment de la CPS1 — activée par le PRPP et l'ATP, inhibée par le produit final UTP.

## 4. Formation des désoxyribonucléotides
- La **ribonucléotide réductase** convertit les ribonucléotides diphosphate (NDP) en **désoxyribonucléotides** (dNDP), réduisant le groupe hydroxyle en position 2' du ribose ; nécessite la **thiorédoxine** comme donneur d'électrons.
- La **thymidylate synthase** convertit le dUMP en **dTMP**, utilisant le **N⁵,N¹⁰-méthylène-THF** comme donneur de méthyle — réaction ciblée par certains chimiothérapiques comme le **5-fluorouracile**.

## 5. Voies de récupération et importance clinique
- La **HGPRT** (hypoxanthine-guanine phosphoribosyltransférase) recycle l'hypoxanthine et la guanine libres en IMP/GMP, économisant l'énergie de la synthèse de novo.
- **Déficit complet en HGPRT** : **syndrome de Lesch-Nyhan** (transmission liée à l'X) — hyperuricémie sévère, automutilation compulsive, retard neurodéveloppemental, goutte précoce, liés à l'accumulation d'acide urique (dégradation purique excessive, faute de recyclage).
- Le **déficit en adénosine désaminase (ADA)**, enzyme du catabolisme purique, provoque une accumulation toxique de désoxyadénosine, particulièrement délétère pour les lymphocytes, causant un **déficit immunitaire combiné sévère (SCID)**.

## Points à retenir
- Purines : cycle construit directement sur le PRPP (ribose activé) ; premier nucléotide = IMP.
- Pyrimidines : anneau construit séparément (CPS2, aspartate) puis attaché au PRPP ; premier nucléotide = orotate → UMP.
- Le déficit en HGPRT cause le syndrome de Lesch-Nyhan ; le déficit en ADA cause un déficit immunitaire combiné sévère (SCID).`;

export const NUCLEOTIDE_SYNTHESIS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Synthèse des nucléotides",
    source_label: "Synthèse — Metabolism: Nucleotide Synthesis (Ninja Nerd)",
    content_fr: NUCLEOTIDE_SYNTHESIS_COURSE,
  },
  qcm: [
    single("Quelles sont les deux voies générales de synthèse des nucléotides ?", "B", "La synthèse de novo (à partir de précurseurs simples) et la voie de récupération (recyclage des bases libres).", ["La glycolyse et le cycle de Krebs", "La synthèse de novo et la voie de récupération", "La transamination et la désamination", "La lipogenèse et la lipolyse"]),
    single("Sur quel intermédiaire le cycle purique est-il construit directement lors de la synthèse de novo ?", "C", "Le cycle purique est construit progressivement directement sur le PRPP (ribose-5-phosphate activé).", ["Le glucose-6-phosphate", "L'acide orotique", "Le PRPP", "Le carbamoyl phosphate"]),
    single("Quel est le premier nucléotide purique formé par la voie de novo ?", "A", "L'inosine monophosphate (IMP) est le premier nucléotide purique formé.", ["L'IMP", "L'AMP", "Le GMP", "L'ATP"]),
    single("Quelle enzyme active le ribose-5-phosphate en PRPP ?", "D", "La PRPP synthétase catalyse cette activation.", ["La glutamine PRPP amidotransférase", "La HGPRT", "L'orotate phosphoribosyltransférase", "La PRPP synthétase"]),
    single("L'anneau pyrimidique est-il construit sur le ribose comme pour les purines ?", "B", "Non, l'anneau pyrimidique est construit séparément, puis attaché au PRPP.", ["Oui, de la même façon", "Non, il est construit séparément puis attaché au PRPP", "Non, il ne contient jamais de ribose", "Oui, mais uniquement dans le foie"]),
    single("Quelle enzyme produit le carbamoyl phosphate cytosolique nécessaire à la synthèse des pyrimidines ?", "C", "La carbamoyl phosphate synthétase II (CPS2), distincte de la CPS1 mitochondriale du cycle de l'urée.", ["La CPS1", "L'ornithine transcarbamylase", "La CPS2", "La PRPP synthétase"]),
    single("Quel est le premier nucléotide pyrimidique formé par la voie de novo ?", "A", "L'acide orotique (orotate) est le premier nucléotide pyrimidique formé, converti ensuite en OMP puis UMP.", ["L'acide orotique", "L'UMP directement", "Le CMP", "Le dTMP"]),
    single("Quel acide aminé fournit un des précurseurs de l'anneau pyrimidique ?", "B", "L'aspartate contribue à la formation de l'anneau pyrimidique, avec le carbamoyl phosphate.", ["La glycine", "L'aspartate", "La lysine", "La méthionine"]),
    single("Quelle enzyme convertit les ribonucléotides en désoxyribonucléotides ?", "D", "La ribonucléotide réductase réduit le groupe hydroxyle en position 2' du ribose.", ["La thymidylate synthase", "La HGPRT", "La CPS2", "La ribonucléotide réductase"]),
    single("Quel donneur d'électrons est nécessaire à la ribonucléotide réductase ?", "A", "La thiorédoxine sert de donneur d'électrons à cette réaction.", ["La thiorédoxine", "Le NADPH directement", "Le glutathion", "Le FAD"]),
    single("Quelle enzyme convertit le dUMP en dTMP ?", "C", "La thymidylate synthase catalyse cette méthylation, utilisant le N5,N10-méthylène-THF.", ["La ribonucléotide réductase", "La CPS2", "La thymidylate synthase", "La HGPRT"]),
    single("Quel chimiothérapique cible spécifiquement la thymidylate synthase ?", "B", "Le 5-fluorouracile inhibe la thymidylate synthase, bloquant la synthèse du dTMP.", ["Le méthotrexate uniquement", "Le 5-fluorouracile", "La primaquine", "L'allopurinol"]),
    single("Quelle enzyme de la voie de récupération recycle l'hypoxanthine et la guanine libres ?", "D", "La HGPRT (hypoxanthine-guanine phosphoribosyltransférase) recycle ces bases libres en IMP/GMP.", ["La ribonucléotide réductase", "La CPS2", "La PRPP synthétase", "La HGPRT"]),
    single("Quelle est la conséquence clinique d'un déficit complet en HGPRT ?", "A", "Le déficit complet en HGPRT cause le syndrome de Lesch-Nyhan (hyperuricémie, automutilation, retard neurodéveloppemental).", ["Le syndrome de Lesch-Nyhan", "Le syndrome de Leigh", "La maladie de von Gierke", "Le syndrome de Wernicke-Korsakoff"]),
    single("Quel mode de transmission génétique caractérise le syndrome de Lesch-Nyhan ?", "C", "Une transmission liée à l'X.", ["Autosomique dominant", "Autosomique récessif", "Lié à l'X", "Mitochondrial"]),
    single("Quelle est la conséquence clinique d'un déficit en adénosine désaminase (ADA) ?", "B", "Le déficit en ADA provoque une accumulation toxique de désoxyadénosine, délétère pour les lymphocytes, causant un déficit immunitaire combiné sévère.", ["Une hyperuricémie isolée sans autre symptôme", "Un déficit immunitaire combiné sévère (SCID)", "Une anémie hémolytique", "Une hypoglycémie sévère à jeun"]),
  ],
  exam: { titre_fr: "Examen chronométré — Synthèse des nucléotides", duration_seconds: 1_440 },
};

export const NUCLEOTIDE_SYNTHESIS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelles sont les deux grandes voies de synthèse des nucléotides ?", question_en: "What are the two main pathways for nucleotide synthesis?", answer_fr: "La synthèse de novo et la voie de récupération.", answer_en: "De novo synthesis and the salvage pathway." },
  { question_fr: "Qu'est-ce que la voie de récupération des nucléotides ?", question_en: "What is the nucleotide salvage pathway?", answer_fr: "Le recyclage des bases azotées libres issues de la dégradation des acides nucléiques, économisant l'énergie de la synthèse de novo.", answer_en: "The recycling of free nitrogenous bases from nucleic acid breakdown, saving the energy of de novo synthesis." },
  { question_fr: "Sur quel intermédiaire commun le cycle purique est-il construit progressivement ?", question_en: "On which common intermediate is the purine ring progressively built?", answer_fr: "Le PRPP (5-phosphoribosyl-1-pyrophosphate).", answer_en: "PRPP (5-phosphoribosyl-1-pyrophosphate)." },
  { question_fr: "Quelle enzyme forme le PRPP à partir du ribose-5-phosphate ?", question_en: "Which enzyme forms PRPP from ribose-5-phosphate?", answer_fr: "La PRPP synthétase.", answer_en: "PRPP synthetase." },
  { question_fr: "Citez trois donneurs utilisés lors de la construction du cycle purique.", question_en: "Name three donors used during purine ring construction.", answer_fr: "La glutamine, la glycine et l'aspartate (ou le CO2, les dérivés du folate).", answer_en: "Glutamine, glycine, and aspartate (or CO2, folate derivatives)." },
  { question_fr: "Quel est le premier nucléotide purique complet formé par la synthèse de novo ?", question_en: "What is the first complete purine nucleotide formed by de novo synthesis?", answer_fr: "L'inosine monophosphate (IMP).", answer_en: "Inosine monophosphate (IMP)." },
  { question_fr: "En quels deux nucléotides l'IMP est-il ensuite converti ?", question_en: "Into which two nucleotides is IMP then converted?", answer_fr: "L'AMP et le GMP.", answer_en: "AMP and GMP." },
  { question_fr: "Quelle enzyme catalyse la première étape spécifiquement engagée dans la voie purique ?", question_en: "Which enzyme catalyzes the first step specifically committed to the purine pathway?", answer_fr: "La glutamine PRPP amidotransférase.", answer_en: "Glutamine PRPP amidotransferase." },
  { question_fr: "L'anneau pyrimidique est-il construit sur le ribose comme le cycle purique ?", question_en: "Is the pyrimidine ring built on ribose like the purine ring?", answer_fr: "Non, il est construit séparément, puis attaché au PRPP.", answer_en: "No, it is built separately, then attached to PRPP." },
  { question_fr: "Quelle enzyme produit le carbamoyl phosphate cytosolique de la synthèse des pyrimidines ?", question_en: "Which enzyme produces the cytosolic carbamoyl phosphate for pyrimidine synthesis?", answer_fr: "La carbamoyl phosphate synthétase II (CPS2).", answer_en: "Carbamoyl phosphate synthetase II (CPS2)." },
  { question_fr: "En quoi la CPS2 diffère-t-elle de la CPS1 du cycle de l'urée ?", question_en: "How does CPS2 differ from CPS1 of the urea cycle?", answer_fr: "Elle est cytosolique (contre mitochondriale pour la CPS1) et impliquée dans la synthèse des pyrimidines plutôt que la détoxification de l'ammoniac.", answer_en: "It is cytosolic (versus mitochondrial for CPS1) and involved in pyrimidine synthesis rather than ammonia detoxification." },
  { question_fr: "Quel acide aminé se combine au carbamoyl phosphate pour former l'anneau pyrimidique ?", question_en: "Which amino acid combines with carbamoyl phosphate to form the pyrimidine ring?", answer_fr: "L'aspartate.", answer_en: "Aspartate." },
  { question_fr: "Quel est le premier nucléotide pyrimidique formé par la voie de novo ?", question_en: "What is the first pyrimidine nucleotide formed by the de novo pathway?", answer_fr: "L'acide orotique (orotate).", answer_en: "Orotic acid (orotate)." },
  { question_fr: "En quel nucléotide précurseur commun l'acide orotique est-il finalement converti ?", question_en: "Into which common precursor nucleotide is orotic acid ultimately converted?", answer_fr: "L'UMP (uridine monophosphate).", answer_en: "UMP (uridine monophosphate)." },
  { question_fr: "Quel métabolite active la CPS2, contrairement à la CPS1 ?", question_en: "Which metabolite activates CPS2, unlike CPS1?", answer_fr: "Le PRPP (ainsi que l'ATP).", answer_en: "PRPP (as well as ATP)." },
  { question_fr: "Quel métabolite inhibe la CPS2 par rétro-inhibition ?", question_en: "Which metabolite inhibits CPS2 by feedback inhibition?", answer_fr: "L'UTP, produit final de la voie.", answer_en: "UTP, the pathway's final product." },
  { question_fr: "Quelle enzyme convertit les ribonucléotides en désoxyribonucléotides ?", question_en: "Which enzyme converts ribonucleotides into deoxyribonucleotides?", answer_fr: "La ribonucléotide réductase.", answer_en: "Ribonucleotide reductase." },
  { question_fr: "Quelle position du ribose est modifiée par la ribonucléotide réductase ?", question_en: "Which position of ribose is modified by ribonucleotide reductase?", answer_fr: "La position 2' (hydroxyle réduit).", answer_en: "The 2' position (hydroxyl reduced)." },
  { question_fr: "Quel donneur d'électrons la ribonucléotide réductase utilise-t-elle ?", question_en: "Which electron donor does ribonucleotide reductase use?", answer_fr: "La thiorédoxine.", answer_en: "Thioredoxin." },
  { question_fr: "Quelle enzyme méthyle le dUMP en dTMP ?", question_en: "Which enzyme methylates dUMP into dTMP?", answer_fr: "La thymidylate synthase.", answer_en: "Thymidylate synthase." },
  { question_fr: "Quel cofacteur donneur de méthyle est utilisé par la thymidylate synthase ?", question_en: "Which methyl-donor cofactor is used by thymidylate synthase?", answer_fr: "Le N5,N10-méthylène-tétrahydrofolate (méthylène-THF).", answer_en: "N5,N10-methylene tetrahydrofolate (methylene-THF)." },
  { question_fr: "Quel médicament chimiothérapique cible la thymidylate synthase ?", question_en: "Which chemotherapy drug targets thymidylate synthase?", answer_fr: "Le 5-fluorouracile.", answer_en: "5-fluorouracil." },
  { question_fr: "Quelle enzyme de la voie de récupération recycle l'hypoxanthine et la guanine libres ?", question_en: "Which salvage pathway enzyme recycles free hypoxanthine and guanine?", answer_fr: "La HGPRT (hypoxanthine-guanine phosphoribosyltransférase).", answer_en: "HGPRT (hypoxanthine-guanine phosphoribosyltransferase)." },
  { question_fr: "Que produit la HGPRT à partir de l'hypoxanthine et de la guanine libres ?", question_en: "What does HGPRT produce from free hypoxanthine and guanine?", answer_fr: "De l'IMP et du GMP respectivement.", answer_en: "IMP and GMP respectively." },
  { question_fr: "Quelle maladie résulte d'un déficit complet en HGPRT ?", question_en: "Which disease results from a complete HGPRT deficiency?", answer_fr: "Le syndrome de Lesch-Nyhan.", answer_en: "Lesch-Nyhan syndrome." },
  { question_fr: "Quels sont les symptômes caractéristiques du syndrome de Lesch-Nyhan ?", question_en: "What are the characteristic symptoms of Lesch-Nyhan syndrome?", answer_fr: "Hyperuricémie sévère, automutilation compulsive, retard neurodéveloppemental, goutte précoce.", answer_en: "Severe hyperuricemia, compulsive self-mutilation, neurodevelopmental delay, early gout." },
  { question_fr: "Quel est le mode de transmission génétique du syndrome de Lesch-Nyhan ?", question_en: "What is the genetic inheritance pattern of Lesch-Nyhan syndrome?", answer_fr: "Lié à l'X.", answer_en: "X-linked." },
  { question_fr: "Pourquoi le déficit en HGPRT provoque-t-il une hyperuricémie ?", question_en: "Why does HGPRT deficiency cause hyperuricemia?", answer_fr: "Faute de recyclage, les bases puriques libres sont dégradées en excès en acide urique.", answer_en: "Without recycling, free purine bases are excessively degraded into uric acid." },
  { question_fr: "Quelle enzyme du catabolisme purique, lorsqu'elle est déficiente, provoque un déficit immunitaire combiné sévère (SCID) ?", question_en: "Which purine catabolism enzyme, when deficient, causes severe combined immunodeficiency (SCID)?", answer_fr: "L'adénosine désaminase (ADA).", answer_en: "Adenosine deaminase (ADA)." },
  { question_fr: "Pourquoi le déficit en ADA affecte-t-il particulièrement les lymphocytes ?", question_en: "Why does ADA deficiency particularly affect lymphocytes?", answer_fr: "L'accumulation de désoxyadénosine qui en résulte est particulièrement toxique pour les lymphocytes en développement.", answer_en: "The resulting deoxyadenosine accumulation is particularly toxic to developing lymphocytes." },
  { question_fr: "Résumez en une phrase la différence fondamentale entre synthèse de novo des purines et des pyrimidines.", question_en: "Summarize in one sentence the fundamental difference between de novo purine and pyrimidine synthesis.", answer_fr: "Le cycle purique est construit directement sur le ribose activé (PRPP), tandis que l'anneau pyrimidique est d'abord assemblé séparément (carbamoyl phosphate + aspartate) avant d'être attaché au PRPP.", answer_en: "The purine ring is built directly on activated ribose (PRPP), while the pyrimidine ring is first assembled separately (carbamoyl phosphate + aspartate) before being attached to PRPP." },
];
