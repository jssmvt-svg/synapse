import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const AMINO_ACID_METABOLISM_COURSE = `# Métabolisme des acides aminés

## 1. Vue d'ensemble
- Les acides aminés issus du renouvellement protéique ou d'un apport alimentaire excédentaire ne sont pas stockés : leur **groupe azoté** est éliminé et leur **squelette carboné** est oxydé ou converti en glucose/corps cétoniques.
- Le catabolisme des acides aminés comporte deux volets : le retrait du groupe amine (**transamination** puis **désamination**) et le devenir du squelette carboné restant.

## 2. Transamination
- La plupart des acides aminés cèdent leur groupe amine à l'**α-cétoglutarate**, formant du **glutamate**, réaction catalysée par des **aminotransférases (transaminases)** spécifiques, dépendantes du **pyridoxal phosphate (PLP)**, dérivé de la vitamine B6.
- Exemples cliniquement importants : **ALT** (alanine aminotransférase : alanine + α-cétoglutarate ↔ pyruvate + glutamate) et **AST** (aspartate aminotransférase : aspartate + α-cétoglutarate ↔ oxaloacétate + glutamate) — dosées en clinique comme marqueurs de lésion hépatocellulaire.

## 3. Désamination oxydative
- Le glutamate, formé par transamination, est ensuite désaminé par la **glutamate déshydrogénase** (mitochondrie), libérant de l'**ammoniac (NH₃)** libre et régénérant l'α-cétoglutarate, avec production de NADH (ou NADPH selon le sens de la réaction).
- C'est la principale voie par laquelle l'azote aminé converge vers l'ammoniac, destiné à être détoxifié par le **cycle de l'urée**.

## 4. Classification glucoformateur / cétogène

| Catégorie | Devenir du squelette carboné | Exemples |
| --- | --- | --- |
| **Glucoformateurs** | Converti en pyruvate ou en intermédiaires du cycle de Krebs (oxaloacétate, α-cétoglutarate, succinyl-CoA, fumarate) — alimente la néoglucogenèse | Majorité des acides aminés |
| **Cétogènes** | Converti en acétyl-CoA ou acétoacétyl-CoA — pas de contribution nette à la néoglucogenèse | Leucine, lysine (les 2 seuls exclusifs) |
| **Mixtes** | Glucoformateur ET cétogène selon la portion du squelette | Phénylalanine, tyrosine, tryptophane, isoleucine |

## 5. Acides aminés essentiels
- Neuf acides aminés ne peuvent pas être synthétisés par l'organisme humain et doivent provenir de l'alimentation : **phénylalanine, valine, thréonine, tryptophane, méthionine, leucine, isoleucine, lysine, histidine**.

## Points à retenir
- La transamination (PLP-dépendante) transfère le groupe amine vers l'α-cétoglutarate, formant du glutamate ; la désamination oxydative (glutamate déshydrogénase) libère ensuite l'ammoniac.
- ALT et AST sont des marqueurs cliniques de lésion hépatique.
- Les acides aminés sont classés glucoformateurs, cétogènes, ou mixtes selon le devenir métabolique de leur squelette carboné ; 9 sont essentiels.`;

export const AMINO_ACID_METABOLISM_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Métabolisme des acides aminés",
    source_label: "Synthèse — Metabolism: Amino Acid Metabolism (Ninja Nerd)",
    content_fr: AMINO_ACID_METABOLISM_COURSE,
  },
  qcm: [
    single("Quel est le devenir principal du groupe amine lors de la transamination ?", "B", "Le groupe amine est transféré à l'α-cétoglutarate, formant du glutamate.", ["Il est directement excrété dans l'urine", "Il est transféré à l'α-cétoglutarate, formant du glutamate", "Il est directement converti en urée", "Il est incorporé dans le pyruvate"]),
    single("Quel cofacteur vitaminique est requis par les aminotransférases (transaminases) ?", "C", "Le pyridoxal phosphate (PLP), dérivé de la vitamine B6, est le cofacteur essentiel des transaminases.", ["Le TPP", "Le FAD", "Le pyridoxal phosphate (PLP)", "La biotine"]),
    single("Quelle réaction catalyse l'ALT (alanine aminotransférase) ?", "A", "L'ALT catalyse : alanine + α-cétoglutarate ↔ pyruvate + glutamate.", ["Alanine + α-cétoglutarate ↔ pyruvate + glutamate", "Aspartate + α-cétoglutarate ↔ oxaloacétate + glutamate", "Glutamate → α-cétoglutarate + NH3", "Pyruvate + NH3 → alanine"]),
    single("Quelle réaction catalyse l'AST (aspartate aminotransférase) ?", "B", "L'AST catalyse : aspartate + α-cétoglutarate ↔ oxaloacétate + glutamate.", ["Alanine + α-cétoglutarate ↔ pyruvate + glutamate", "Aspartate + α-cétoglutarate ↔ oxaloacétate + glutamate", "Glutamate → α-cétoglutarate + NH3", "Glutamine → glutamate + NH3"]),
    single("Pourquoi l'ALT et l'AST sont-elles dosées en clinique ?", "D", "Elles sont des marqueurs sensibles de lésion hépatocellulaire, libérées dans le sang en cas de dommage aux hépatocytes.", ["Comme marqueurs de la fonction rénale", "Comme marqueurs de l'hémolyse", "Comme marqueurs de la fonction thyroïdienne", "Comme marqueurs de lésion hépatocellulaire"]),
    single("Quelle enzyme catalyse la désamination oxydative du glutamate, libérant l'ammoniac ?", "C", "La glutamate déshydrogénase, mitochondriale, catalyse cette désamination oxydative.", ["L'ALT", "L'AST", "La glutamate déshydrogénase", "La glutaminase"]),
    single("Où se déroule la désamination oxydative du glutamate ?", "A", "Elle se déroule dans la mitochondrie.", ["Dans la mitochondrie", "Dans le cytosol", "Dans le noyau", "Dans le réticulum endoplasmique"]),
    single("Quel intermédiaire est régénéré par la désamination oxydative du glutamate ?", "B", "L'α-cétoglutarate est régénéré, disponible pour de nouvelles réactions de transamination.", ["Le pyruvate", "L'α-cétoglutarate", "L'oxaloacétate", "Le succinyl-CoA"]),
    single("Quel est le devenir métabolique du squelette carboné d'un acide aminé glucoformateur ?", "D", "Il est converti en pyruvate ou en intermédiaires du cycle de Krebs, pouvant alimenter la néoglucogenèse.", ["Il est directement excrété", "Il est converti en acétyl-CoA uniquement", "Il est converti en corps cétoniques uniquement", "Il est converti en pyruvate ou en intermédiaires du cycle de Krebs"]),
    single("Quel est le devenir métabolique du squelette carboné d'un acide aminé cétogène ?", "A", "Il est converti en acétyl-CoA ou acétoacétyl-CoA, sans contribution nette à la néoglucogenèse.", ["Il est converti en acétyl-CoA ou acétoacétyl-CoA", "Il est converti en glucose directement", "Il est converti en oxaloacétate", "Il est converti en glycogène"]),
    single("Quels sont les deux acides aminés exclusivement cétogènes ?", "B", "La leucine et la lysine sont les deux seuls acides aminés exclusivement cétogènes.", ["Alanine et glycine", "Leucine et lysine", "Valine et thréonine", "Sérine et cystéine"]),
    single("Qu'est-ce qu'un acide aminé « mixte » sur le plan du catabolisme ?", "C", "Un acide aminé mixte contribue à la fois à la voie glucoformatrice et à la voie cétogène (ex. phénylalanine, tyrosine).", ["Un acide aminé synthétisé à partir de deux précurseurs", "Un acide aminé toujours essentiel", "Un acide aminé glucoformateur ET cétogène", "Un acide aminé non protéinogène"]),
    single("Combien d'acides aminés sont considérés comme essentiels chez l'humain ?", "C", "Neuf acides aminés sont essentiels et doivent être apportés par l'alimentation.", ["Six", "Sept", "Neuf", "Onze"]),
  ],
  exam: { titre_fr: "Examen chronométré — Métabolisme des acides aminés", duration_seconds: 1_170 },
};

export const AMINO_ACID_METABOLISM_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Que devient le groupe azoté d'un acide aminé en excès ?", question_en: "What happens to the nitrogen group of an excess amino acid?", answer_fr: "Il est retiré par transamination puis désamination, et finalement détoxifié en urée.", answer_en: "It is removed via transamination then deamination, and ultimately detoxified into urea." },
  { question_fr: "Qu'est-ce que la transamination ?", question_en: "What is transamination?", answer_fr: "Le transfert du groupe amine d'un acide aminé vers l'α-cétoglutarate, formant du glutamate.", answer_en: "The transfer of an amino group from an amino acid to alpha-ketoglutarate, forming glutamate." },
  { question_fr: "Quel type d'enzyme catalyse la transamination ?", question_en: "What type of enzyme catalyzes transamination?", answer_fr: "Une aminotransférase (transaminase).", answer_en: "An aminotransferase (transaminase)." },
  { question_fr: "Quel cofacteur vitaminique est requis par les transaminases ?", question_en: "Which vitamin cofactor is required by transaminases?", answer_fr: "Le pyridoxal phosphate (PLP), dérivé de la vitamine B6.", answer_en: "Pyridoxal phosphate (PLP), derived from vitamin B6." },
  { question_fr: "Quelle réaction catalyse l'ALT ?", question_en: "Which reaction does ALT catalyze?", answer_fr: "Alanine + α-cétoglutarate ↔ pyruvate + glutamate.", answer_en: "Alanine + alpha-ketoglutarate ↔ pyruvate + glutamate." },
  { question_fr: "Quelle réaction catalyse l'AST ?", question_en: "Which reaction does AST catalyze?", answer_fr: "Aspartate + α-cétoglutarate ↔ oxaloacétate + glutamate.", answer_en: "Aspartate + alpha-ketoglutarate ↔ oxaloacetate + glutamate." },
  { question_fr: "Pourquoi l'ALT et l'AST sont-elles utiles en clinique ?", question_en: "Why are ALT and AST clinically useful?", answer_fr: "Elles sont des marqueurs de lésion hépatocellulaire, élevées dans le sang en cas de dommage au foie.", answer_en: "They are markers of hepatocellular damage, elevated in blood when the liver is injured." },
  { question_fr: "Quelle enzyme désamine le glutamate en libérant l'ammoniac ?", question_en: "Which enzyme deaminates glutamate, releasing ammonia?", answer_fr: "La glutamate déshydrogénase.", answer_en: "Glutamate dehydrogenase." },
  { question_fr: "Où se déroule la désamination oxydative du glutamate ?", question_en: "Where does oxidative deamination of glutamate occur?", answer_fr: "Dans la mitochondrie.", answer_en: "In the mitochondrion." },
  { question_fr: "Quel produit azoté est libéré par la désamination oxydative ?", question_en: "Which nitrogenous product is released by oxidative deamination?", answer_fr: "L'ammoniac (NH3).", answer_en: "Ammonia (NH3)." },
  { question_fr: "Quel intermédiaire est régénéré par cette réaction, permettant un nouveau cycle de transamination ?", question_en: "Which intermediate is regenerated by this reaction, allowing another transamination cycle?", answer_fr: "L'α-cétoglutarate.", answer_en: "Alpha-ketoglutarate." },
  { question_fr: "Que devient l'ammoniac libéré par le catabolisme des acides aminés ?", question_en: "What happens to the ammonia released by amino acid catabolism?", answer_fr: "Il est détoxifié en urée par le cycle de l'urée, dans le foie.", answer_en: "It is detoxified into urea by the urea cycle, in the liver." },
  { question_fr: "Qu'est-ce qu'un acide aminé glucoformateur ?", question_en: "What is a glucogenic amino acid?", answer_fr: "Un acide aminé dont le squelette carboné peut être converti en pyruvate ou en intermédiaires du cycle de Krebs, alimentant la néoglucogenèse.", answer_en: "An amino acid whose carbon skeleton can be converted into pyruvate or Krebs cycle intermediates, feeding gluconeogenesis." },
  { question_fr: "Qu'est-ce qu'un acide aminé cétogène ?", question_en: "What is a ketogenic amino acid?", answer_fr: "Un acide aminé dont le squelette carboné est converti en acétyl-CoA ou acétoacétyl-CoA, sans contribution nette à la néoglucogenèse.", answer_en: "An amino acid whose carbon skeleton is converted into acetyl-CoA or acetoacetyl-CoA, with no net contribution to gluconeogenesis." },
  { question_fr: "Quels sont les deux seuls acides aminés exclusivement cétogènes ?", question_en: "What are the only two exclusively ketogenic amino acids?", answer_fr: "La leucine et la lysine.", answer_en: "Leucine and lysine." },
  { question_fr: "Citez un acide aminé à la fois glucoformateur et cétogène.", question_en: "Name an amino acid that is both glucogenic and ketogenic.", answer_fr: "La phénylalanine (ou la tyrosine, le tryptophane, l'isoleucine).", answer_en: "Phenylalanine (or tyrosine, tryptophan, isoleucine)." },
  { question_fr: "Combien d'acides aminés sont essentiels chez l'humain ?", question_en: "How many amino acids are essential in humans?", answer_fr: "Neuf.", answer_en: "Nine." },
  { question_fr: "Citez trois acides aminés essentiels.", question_en: "Name three essential amino acids.", answer_fr: "Par exemple : leucine, lysine, méthionine (ou valine, thréonine, tryptophane, phénylalanine, isoleucine, histidine).", answer_en: "For example: leucine, lysine, methionine (or valine, threonine, tryptophan, phenylalanine, isoleucine, histidine)." },
  { question_fr: "Pourquoi les acides aminés essentiels doivent-ils provenir de l'alimentation ?", question_en: "Why must essential amino acids come from the diet?", answer_fr: "Parce que l'organisme humain ne possède pas les enzymes nécessaires pour les synthétiser à partir d'autres précurseurs.", answer_en: "Because the human body lacks the enzymes needed to synthesize them from other precursors." },
  { question_fr: "Les acides aminés sont-ils stockés par l'organisme comme le sont le glucose (glycogène) ou les lipides (triglycérides) ?", question_en: "Are amino acids stored by the body the way glucose (glycogen) or lipids (triglycerides) are?", answer_fr: "Non, il n'existe pas de forme de stockage dédiée aux acides aminés ; l'excès est catabolisé.", answer_en: "No, there is no dedicated storage form for amino acids; excess amino acids are catabolized." },
  { question_fr: "Résumez en une phrase le devenir général d'un acide aminé en excès.", question_en: "Summarize in one sentence the general fate of an excess amino acid.", answer_fr: "Son groupe amine est retiré par transamination puis désamination oxydative (libérant de l'ammoniac détoxifié en urée), tandis que son squelette carboné rejoint la glycolyse, le cycle de Krebs ou la cétogenèse selon sa classification glucoformatrice ou cétogène.", answer_en: "Its amino group is removed via transamination then oxidative deamination (releasing ammonia, detoxified into urea), while its carbon skeleton joins glycolysis, the Krebs cycle, or ketogenesis depending on its glucogenic or ketogenic classification." },
];

const UREA_CYCLE_COURSE = `# Le cycle de l'urée

## 1. Vue d'ensemble
- Voie de détoxification de l'**ammoniac (NH₃)**, toxique notamment pour le système nerveux central, en **urée**, molécule non toxique excrétée par les reins.
- Se déroule dans le **foie**, à cheval sur la **mitochondrie** (2 premières réactions) et le **cytosol** (3 réactions suivantes).

## 2. Les 5 réactions du cycle

| # | Enzyme | Lieu | Réaction | Note |
| --- | --- | --- | --- | --- |
| 1 | **CPS1** (carbamoyl phosphate synthétase I) | Mitochondrie | NH₃ + CO₂ + 2 ATP → carbamoyl phosphate | Étape limitante et régulatrice ; nécessite le **NAG** (activateur allostérique obligatoire) |
| 2 | **OTC** (ornithine transcarbamylase) | Mitochondrie | Carbamoyl phosphate + ornithine → citrulline | Citrulline exportée vers le cytosol |
| 3 | **Argininosuccinate synthétase** | Cytosol | Citrulline + aspartate + ATP → argininosuccinate | Entrée du **2e atome d'azote** (aspartate) |
| 4 | **Argininosuccinate lyase** | Cytosol | Argininosuccinate → arginine + fumarate | Le fumarate rejoint le cycle de Krebs |
| 5 | **Arginase** | Cytosol | Arginine + H₂O → urée + ornithine | Ornithine régénérée, retourne en mitochondrie |

## 3. Bilan
- **2 atomes d'azote** (1 depuis NH₃, 1 depuis l'aspartate) + **1 CO₂** → **1 urée**, au coût de **4 liaisons phosphate riches en énergie** (2 ATP consommés par la CPS1 comptent pour 2, l'ATP de l'argininosuccinate synthétase est hydrolysé en AMP + PPi, équivalent à 2 liaisons supplémentaires).

## 4. Régulation
- La **N-acétylglutamate synthase (NAGS)** produit le NAG, activateur obligatoire de la CPS1 ; son activité augmente avec l'apport en protéines, notamment via l'**arginine**, qui active elle-même la NAGS.
- L'expression des enzymes du cycle est régulée à long terme par l'apport protéique (augmentée en cas de régime riche en protéines ou de jeûne prolongé, où le catabolisme protéique musculaire s'accroît).

## 5. Importance clinique
- Les **déficits enzymatiques du cycle de l'urée** (le plus fréquent : déficit en **OTC**, transmission liée à l'X) provoquent une **hyperammoniémie**, potentiellement fatale, avec encéphalopathie — l'ammoniac étant neurotoxique, notamment via son interférence avec le métabolisme cérébral du glutamate/glutamine astrocytaire.
- Le déficit en OTC entraîne aussi une élévation de l'**acide orotique urinaire** (le carbamoyl phosphate en excès étant dérivé vers la voie de synthèse des pyrimidines).

## Points à retenir
- 5 réactions : **CPS1** (limitante, NAG-dépendante) → **OTC** → **argininosuccinate synthétase** → **argininosuccinate lyase** → **arginase**, régénérant l'ornithine.
- 2 atomes d'azote entrent dans le cycle (NH₃ direct + aspartate) ; le fumarate produit relie le cycle de l'urée au cycle de Krebs.
- L'hyperammoniémie liée aux déficits du cycle de l'urée est neurotoxique ; le déficit en OTC élève spécifiquement l'acide orotique urinaire.`;

export const UREA_CYCLE_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Le cycle de l'urée",
    source_label: "Synthèse — Metabolism: Urea Cycle (Ninja Nerd)",
    content_fr: UREA_CYCLE_COURSE,
  },
  qcm: [
    single("Quel est le rôle principal du cycle de l'urée ?", "B", "Le cycle de l'urée détoxifie l'ammoniac toxique en urée, une molécule non toxique excrétée par les reins.", ["Synthétiser des acides aminés", "Détoxifier l'ammoniac en urée", "Produire du glucose à partir de l'azote", "Dégrader les protéines en peptides"]),
    single("Dans quel organe se déroule le cycle de l'urée ?", "C", "Le cycle de l'urée se déroule dans le foie.", ["Le rein", "Le muscle", "Le foie", "Le pancréas"]),
    single("Quelle enzyme catalyse la première réaction, limitante, du cycle de l'urée ?", "A", "La carbamoyl phosphate synthétase I (CPS1) catalyse la première réaction, limitante et régulatrice.", ["La carbamoyl phosphate synthétase I (CPS1)", "L'ornithine transcarbamylase (OTC)", "L'argininosuccinate synthétase", "L'arginase"]),
    single("Quel activateur allostérique obligatoire est nécessaire à la CPS1 ?", "D", "Le N-acétylglutamate (NAG) est un activateur allostérique obligatoire de la CPS1.", ["L'arginine seule", "Le glutamate seul", "L'ATP", "Le N-acétylglutamate (NAG)"]),
    single("Quelle enzyme synthétise le N-acétylglutamate (NAG) ?", "B", "La N-acétylglutamate synthase (NAGS) synthétise le NAG, activée notamment par l'arginine.", ["La CPS1", "La N-acétylglutamate synthase (NAGS)", "L'OTC", "L'arginase"]),
    single("Quelle enzyme catalyse la formation de citrulline à partir du carbamoyl phosphate et de l'ornithine ?", "C", "L'ornithine transcarbamylase (OTC) catalyse cette réaction mitochondriale.", ["La CPS1", "L'argininosuccinate synthétase", "L'ornithine transcarbamylase (OTC)", "L'arginase"]),
    single("À quelle étape le second atome d'azote (issu de l'aspartate) entre-t-il dans le cycle de l'urée ?", "A", "L'argininosuccinate synthétase incorpore l'azote de l'aspartate en formant l'argininosuccinate.", ["La réaction catalysée par l'argininosuccinate synthétase", "La réaction catalysée par l'OTC", "La réaction catalysée par la CPS1", "La réaction catalysée par l'arginase"]),
    single("Quel sous-produit, capable de rejoindre le cycle de Krebs, est libéré par l'argininosuccinate lyase ?", "B", "L'argininosuccinate lyase libère de l'arginine et du fumarate, ce dernier pouvant rejoindre le cycle de Krebs.", ["Le glutamate", "Le fumarate", "L'oxaloacétate", "Le succinate"]),
    single("Quelle enzyme catalyse la dernière étape du cycle, libérant l'urée ?", "D", "L'arginase hydrolyse l'arginine en urée et ornithine, régénérant cette dernière pour un nouveau tour.", ["L'argininosuccinate lyase", "La CPS1", "L'OTC", "L'arginase"]),
    single("Combien d'atomes d'azote sont incorporés dans une molécule d'urée par tour de cycle ?", "C", "Deux atomes d'azote sont incorporés : un depuis l'ammoniac direct, un depuis l'aspartate.", ["Un", "Trois", "Deux", "Quatre"]),
    single("Quelle est la conséquence clinique typique d'un déficit du cycle de l'urée ?", "A", "Un déficit du cycle de l'urée provoque une hyperammoniémie, potentiellement fatale, avec encéphalopathie.", ["Une hyperammoniémie avec encéphalopathie", "Une hypoglycémie isolée", "Une hypercalcémie", "Une anémie hémolytique"]),
    single("Quel est le déficit enzymatique le plus fréquent du cycle de l'urée ?", "B", "Le déficit en ornithine transcarbamylase (OTC), à transmission liée à l'X, est le plus fréquent.", ["Le déficit en arginase", "Le déficit en OTC", "Le déficit en CPS1", "Le déficit en NAGS"]),
    single("Quel marqueur urinaire est spécifiquement élevé en cas de déficit en OTC ?", "C", "L'acide orotique urinaire est élevé, le carbamoyl phosphate en excès étant dérivé vers la synthèse des pyrimidines.", ["Le glucose urinaire", "L'acide urique", "L'acide orotique", "La créatinine"]),
  ],
  exam: { titre_fr: "Examen chronométré — Le cycle de l'urée", duration_seconds: 1_170 },
};

export const UREA_CYCLE_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel est le rôle du cycle de l'urée ?", question_en: "What is the role of the urea cycle?", answer_fr: "Détoxifier l'ammoniac toxique en urée, excrétée par les reins.", answer_en: "Detoxifying toxic ammonia into urea, excreted by the kidneys." },
  { question_fr: "Dans quel organe se déroule le cycle de l'urée ?", question_en: "In which organ does the urea cycle occur?", answer_fr: "Le foie.", answer_en: "The liver." },
  { question_fr: "Le cycle de l'urée se déroule-t-il uniquement dans la mitochondrie ou aussi dans le cytosol ?", question_en: "Does the urea cycle occur only in the mitochondrion or also in the cytosol?", answer_fr: "Les deux : les 2 premières réactions sont mitochondriales, les 3 suivantes cytosoliques.", answer_en: "Both: the first 2 reactions are mitochondrial, the next 3 are cytosolic." },
  { question_fr: "Quelle enzyme catalyse la première réaction du cycle de l'urée ?", question_en: "Which enzyme catalyzes the first reaction of the urea cycle?", answer_fr: "La carbamoyl phosphate synthétase I (CPS1).", answer_en: "Carbamoyl phosphate synthetase I (CPS1)." },
  { question_fr: "Quels substrats la CPS1 combine-t-elle pour former le carbamoyl phosphate ?", question_en: "Which substrates does CPS1 combine to form carbamoyl phosphate?", answer_fr: "L'ammoniac (NH3) et le CO2, avec consommation de 2 ATP.", answer_en: "Ammonia (NH3) and CO2, consuming 2 ATP." },
  { question_fr: "La réaction de la CPS1 est-elle considérée comme l'étape limitante du cycle ?", question_en: "Is the CPS1 reaction considered the rate-limiting step of the cycle?", answer_fr: "Oui.", answer_en: "Yes." },
  { question_fr: "Quel activateur allostérique obligatoire la CPS1 nécessite-t-elle ?", question_en: "Which obligatory allosteric activator does CPS1 require?", answer_fr: "Le N-acétylglutamate (NAG).", answer_en: "N-acetylglutamate (NAG)." },
  { question_fr: "Quelle enzyme synthétise le NAG ?", question_en: "Which enzyme synthesizes NAG?", answer_fr: "La N-acétylglutamate synthase (NAGS).", answer_en: "N-acetylglutamate synthase (NAGS)." },
  { question_fr: "Quel acide aminé active la NAGS, augmentant la production de NAG lors d'un apport protéique élevé ?", question_en: "Which amino acid activates NAGS, increasing NAG production with a high protein intake?", answer_fr: "L'arginine.", answer_en: "Arginine." },
  { question_fr: "Quelle enzyme forme la citrulline à partir du carbamoyl phosphate et de l'ornithine ?", question_en: "Which enzyme forms citrulline from carbamoyl phosphate and ornithine?", answer_fr: "L'ornithine transcarbamylase (OTC).", answer_en: "Ornithine transcarbamylase (OTC)." },
  { question_fr: "Où la citrulline est-elle exportée après sa formation ?", question_en: "Where is citrulline exported after its formation?", answer_fr: "Du mitochondrie vers le cytosol.", answer_en: "From the mitochondrion to the cytosol." },
  { question_fr: "Quelle enzyme combine la citrulline et l'aspartate pour former l'argininosuccinate ?", question_en: "Which enzyme combines citrulline and aspartate to form argininosuccinate?", answer_fr: "L'argininosuccinate synthétase.", answer_en: "Argininosuccinate synthetase." },
  { question_fr: "D'où provient le second atome d'azote incorporé dans le cycle de l'urée ?", question_en: "Where does the second nitrogen atom incorporated in the urea cycle come from?", answer_fr: "De l'aspartate.", answer_en: "From aspartate." },
  { question_fr: "Quelle enzyme clive l'argininosuccinate en arginine et fumarate ?", question_en: "Which enzyme cleaves argininosuccinate into arginine and fumarate?", answer_fr: "L'argininosuccinate lyase.", answer_en: "Argininosuccinate lyase." },
  { question_fr: "Quel devenir métabolique a le fumarate produit par le cycle de l'urée ?", question_en: "What metabolic fate does the fumarate produced by the urea cycle have?", answer_fr: "Il peut rejoindre le cycle de Krebs.", answer_en: "It can join the Krebs cycle." },
  { question_fr: "Quelle enzyme catalyse la dernière étape du cycle, libérant l'urée ?", question_en: "Which enzyme catalyzes the last step of the cycle, releasing urea?", answer_fr: "L'arginase.", answer_en: "Arginase." },
  { question_fr: "Quels sont les deux produits de la réaction catalysée par l'arginase ?", question_en: "What are the two products of the reaction catalyzed by arginase?", answer_fr: "L'urée et l'ornithine.", answer_en: "Urea and ornithine." },
  { question_fr: "Que devient l'ornithine régénérée par l'arginase ?", question_en: "What happens to the ornithine regenerated by arginase?", answer_fr: "Elle retourne dans la mitochondrie pour amorcer un nouveau tour de cycle.", answer_en: "It returns to the mitochondrion to start a new cycle." },
  { question_fr: "Combien d'atomes d'azote sont éliminés par molécule d'urée formée ?", question_en: "How many nitrogen atoms are eliminated per urea molecule formed?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "Qu'est-ce que l'hyperammoniémie ?", question_en: "What is hyperammonemia?", answer_fr: "Une accumulation toxique d'ammoniac dans le sang, généralement due à un déficit du cycle de l'urée.", answer_en: "A toxic accumulation of ammonia in the blood, typically due to a urea cycle deficiency." },
  { question_fr: "Pourquoi l'hyperammoniémie est-elle particulièrement dangereuse pour le système nerveux central ?", question_en: "Why is hyperammonemia particularly dangerous for the central nervous system?", answer_fr: "L'ammoniac est neurotoxique, interférant notamment avec le métabolisme cérébral du glutamate/glutamine astrocytaire.", answer_en: "Ammonia is neurotoxic, interfering particularly with cerebral glutamate/glutamine metabolism in astrocytes." },
  { question_fr: "Quel est le déficit enzymatique le plus fréquent du cycle de l'urée ?", question_en: "What is the most common enzyme deficiency of the urea cycle?", answer_fr: "Le déficit en ornithine transcarbamylase (OTC).", answer_en: "Ornithine transcarbamylase (OTC) deficiency." },
  { question_fr: "Quel mode de transmission génétique caractérise le déficit en OTC ?", question_en: "What mode of genetic inheritance characterizes OTC deficiency?", answer_fr: "Une transmission liée à l'X.", answer_en: "X-linked inheritance." },
  { question_fr: "Quel marqueur urinaire est spécifiquement élevé en cas de déficit en OTC ?", question_en: "Which urinary marker is specifically elevated in OTC deficiency?", answer_fr: "L'acide orotique.", answer_en: "Orotic acid." },
  { question_fr: "Pourquoi l'acide orotique urinaire est-il élevé en cas de déficit en OTC ?", question_en: "Why is urinary orotic acid elevated in OTC deficiency?", answer_fr: "Le carbamoyl phosphate mitochondrial en excès (non utilisé par l'OTC déficiente) est dérivé vers le cytosol et alimente la voie de synthèse des pyrimidines.", answer_en: "Excess mitochondrial carbamoyl phosphate (not used by the deficient OTC) is diverted to the cytosol and feeds the pyrimidine synthesis pathway." },
  { question_fr: "Combien de liaisons phosphate riches en énergie sont approximativement consommées par tour du cycle de l'urée ?", question_en: "How many high-energy phosphate bonds are approximately consumed per turn of the urea cycle?", answer_fr: "Environ 4.", answer_en: "About 4." },
  { question_fr: "Résumez en une phrase le fonctionnement global du cycle de l'urée.", question_en: "Summarize in one sentence the overall function of the urea cycle.", answer_fr: "Il combine deux atomes d'azote (ammoniac et aspartate) et un CO2 en une molécule d'urée non toxique via cinq réactions successives, régénérant l'ornithine à chaque tour.", answer_en: "It combines two nitrogen atoms (ammonia and aspartate) and one CO2 into a non-toxic urea molecule through five successive reactions, regenerating ornithine each turn." },
];
