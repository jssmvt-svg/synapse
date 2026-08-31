import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const TRIGLYCERIDE_MOBILIZATION_COURSE = `# Mobilisation des triglycérides (lipolyse)

## 1. Vue d'ensemble
- La **lipolyse** dégrade les triglycérides stockés dans le tissu adipeux en **acides gras libres** et **glycérol**, libérés dans la circulation pour servir de carburant à d'autres tissus.
- Stimulée par le **glucagon**, l'**adrénaline** (et plus généralement les catécholamines) ; inhibée par l'**insuline**.

## 2. Les trois lipases séquentielles

| # | Lipase | Substrat → Produit | Note |
| --- | --- | --- | --- |
| 1 | **ATGL** (adipose triglyceride lipase) | Triglycéride → diacylglycérol (1er acide gras libéré) | Initie typiquement la lipolyse, activée par la protéine co-activatrice **CGI-58** |
| 2 | **Lipase hormono-sensible (HSL)** | Diacylglycérol → monoacylglycérol (2e acide gras libéré) | Enzyme **la plus régulée** de la cascade |
| 3 | **Monoacylglycérol lipase (MGL)** | Monoacylglycérol → glycérol libre (dernier acide gras libéré) | — |

## 3. Régulation hormonale de la HSL
- Cascade : glucagon/adrénaline → récepteur couplé aux protéines G → **adénylate cyclase** → **AMPc** → **PKA** → phosphoryle et active la **HSL**, ET phosphoryle la **périlipine** (protéine de surface des gouttelettes lipidiques), qui expose alors les triglycérides à l'action des lipases.
- L'**insuline** inhibe la lipolyse en activant une **phosphodiestérase** qui dégrade l'AMPc, et en activant une phosphatase qui déphosphoryle la HSL.

## 4. Devenir des produits de la lipolyse
- **Acides gras libres** : libérés dans le sang, liés à l'**albumine**, captés par les tissus (muscle, foie) pour la β-oxydation.
- **Glycérol** : le tissu adipeux ne peut pas le réutiliser (pas de glycérol kinase significative) ; il est libéré dans le sang et capté par le **foie** pour la **néoglucogenèse**.

## Points à retenir
- Trois lipases séquentielles : **ATGL** (initiatrice) → **HSL** (la plus régulée) → **MGL**, libérant 3 acides gras + 1 glycérol par triglycéride.
- La **périlipine**, phosphorylée par la PKA, expose les gouttelettes lipidiques à l'action des lipases.
- Le glycérol libéré rejoint le foie pour la néoglucogenèse ; les acides gras libres alimentent la β-oxydation dans les tissus périphériques.`;

export const TRIGLYCERIDE_MOBILIZATION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Mobilisation des triglycérides (lipolyse)",
    source_label: "Synthèse — Metabolism: Mobilization of Triglycerides (Ninja Nerd)",
    content_fr: TRIGLYCERIDE_MOBILIZATION_COURSE,
  },
  qcm: [
    single("Quels sont les deux produits finaux de la lipolyse complète d'un triglycéride ?", "C", "La lipolyse libère 3 acides gras libres et 1 molécule de glycérol par triglycéride.", ["Glucose et acides aminés", "Acétyl-CoA et NADH", "Acides gras libres et glycérol", "Cholestérol et phospholipides"]),
    single("Quelle enzyme initie typiquement la lipolyse en hydrolysant le premier acide gras du triglycéride ?", "A", "L'ATGL (adipose triglyceride lipase) initie typiquement la lipolyse, activée par la protéine CGI-58.", ["L'ATGL", "La HSL", "La MGL", "La LPL"]),
    single("Quelle protéine co-active l'ATGL ?", "B", "La protéine CGI-58 active l'ATGL.", ["La périlipine seule", "CGI-58", "La PKA", "La calmoduline"]),
    single("Quelle enzyme hydrolyse le second acide gras, formant un monoacylglycérol ?", "C", "La lipase hormono-sensible (HSL) hydrolyse le second acide gras.", ["L'ATGL", "La MGL", "La lipase hormono-sensible (HSL)", "La LPL"]),
    single("Quelle est l'enzyme la plus régulée de la cascade lipolytique ?", "D", "La lipase hormono-sensible (HSL) est l'enzyme la plus finement régulée par la cascade hormonale.", ["L'ATGL", "La MGL", "La LPL", "La lipase hormono-sensible (HSL)"]),
    single("Quelle enzyme hydrolyse le dernier acide gras, libérant le glycérol libre ?", "A", "La monoacylglycérol lipase (MGL) libère le glycérol final.", ["La monoacylglycérol lipase (MGL)", "L'ATGL", "La HSL", "La LPL"]),
    single("Quel second messager intracellulaire est produit suite à la liaison du glucagon/de l'adrénaline à leur récepteur adipocytaire ?", "B", "L'AMPc est produit par l'adénylate cyclase suite à l'activation du récepteur.", ["Le Ca2+", "L'AMPc", "L'IP3", "Le DAG"]),
    single("Quelle protéine de surface des gouttelettes lipidiques est phosphorylée par la PKA, exposant les triglycérides aux lipases ?", "C", "La périlipine, phosphorylée par la PKA, expose les triglycérides à l'action des lipases.", ["L'albumine", "La CGI-58", "La périlipine", "La calmoduline"]),
    single("Comment l'insuline inhibe-t-elle la lipolyse ?", "D", "L'insuline active une phosphodiestérase qui dégrade l'AMPc et une phosphatase qui déphosphoryle la HSL.", ["En activant directement l'ATGL", "En stimulant la PKA", "En inhibant la périlipine uniquement", "En activant une phosphodiestérase (dégradant l'AMPc) et une phosphatase (inactivant la HSL)"]),
    single("Sous quelle forme les acides gras libres circulent-ils dans le sang après la lipolyse ?", "B", "Liés à l'albumine plasmatique, qui les transporte vers les tissus utilisateurs.", ["Libres, non liés à une protéine", "Liés à l'albumine", "Sous forme de chylomicrons", "Sous forme de VLDL"]),
    single("Pourquoi le glycérol libéré par la lipolyse ne peut-il pas être réutilisé localement par l'adipocyte ?", "A", "Le tissu adipeux est dépourvu de glycérol kinase significative, incapable de le réactiver en glycérol-3-phosphate.", ["Le tissu adipeux est dépourvu de glycérol kinase significative", "Le glycérol est immédiatement dégradé sur place", "Le glycérol n'est jamais produit par la lipolyse", "L'adipocyte n'a pas de transporteur pour le glycérol"]),
    single("Quel organe capte le glycérol libéré par la lipolyse pour la néoglucogenèse ?", "C", "Le foie capte le glycérol circulant pour l'utiliser en néoglucogenèse.", ["Le muscle", "Le rein uniquement", "Le foie", "Le cerveau"]),
  ],
  exam: { titre_fr: "Examen chronométré — Mobilisation des triglycérides", duration_seconds: 1_080 },
};

export const TRIGLYCERIDE_MOBILIZATION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Qu'est-ce que la lipolyse ?", question_en: "What is lipolysis?", answer_fr: "La dégradation des triglycérides stockés en acides gras libres et glycérol.", answer_en: "The breakdown of stored triglycerides into free fatty acids and glycerol." },
  { question_fr: "Dans quel tissu la lipolyse se déroule-t-elle principalement ?", question_en: "In which tissue does lipolysis mainly occur?", answer_fr: "Le tissu adipeux.", answer_en: "Adipose tissue." },
  { question_fr: "Quelles hormones stimulent la lipolyse ?", question_en: "Which hormones stimulate lipolysis?", answer_fr: "Le glucagon et l'adrénaline (catécholamines).", answer_en: "Glucagon and adrenaline (catecholamines)." },
  { question_fr: "Quelle hormone inhibe la lipolyse ?", question_en: "Which hormone inhibits lipolysis?", answer_fr: "L'insuline.", answer_en: "Insulin." },
  { question_fr: "Quelle enzyme initie typiquement la lipolyse ?", question_en: "Which enzyme typically initiates lipolysis?", answer_fr: "L'ATGL (adipose triglyceride lipase).", answer_en: "ATGL (adipose triglyceride lipase)." },
  { question_fr: "Quel acide gras l'ATGL hydrolyse-t-elle sur le triglycéride ?", question_en: "Which fatty acid does ATGL hydrolyze off the triglyceride?", answer_fr: "Le premier, formant un diacylglycérol.", answer_en: "The first one, forming a diacylglycerol." },
  { question_fr: "Quelle protéine co-active l'ATGL ?", question_en: "Which protein co-activates ATGL?", answer_fr: "CGI-58.", answer_en: "CGI-58." },
  { question_fr: "Quelle enzyme hydrolyse le second acide gras, sur le diacylglycérol ?", question_en: "Which enzyme hydrolyzes the second fatty acid, from the diacylglycerol?", answer_fr: "La lipase hormono-sensible (HSL).", answer_en: "Hormone-sensitive lipase (HSL)." },
  { question_fr: "Pourquoi la HSL est-elle considérée comme l'enzyme la plus régulée de la lipolyse ?", question_en: "Why is HSL considered the most regulated enzyme of lipolysis?", answer_fr: "Parce qu'elle est directement contrôlée par la cascade hormonale AMPc-PKA.", answer_en: "Because it is directly controlled by the cAMP-PKA hormonal cascade." },
  { question_fr: "Quelle enzyme hydrolyse le dernier acide gras, libérant le glycérol final ?", question_en: "Which enzyme hydrolyzes the last fatty acid, releasing the final glycerol?", answer_fr: "La monoacylglycérol lipase (MGL).", answer_en: "Monoacylglycerol lipase (MGL)." },
  { question_fr: "Combien de molécules d'acide gras libre sont produites par triglycéride entièrement dégradé ?", question_en: "How many free fatty acid molecules are produced per fully degraded triglyceride?", answer_fr: "Trois.", answer_en: "Three." },
  { question_fr: "Quel second messager active la PKA dans la cascade lipolytique ?", question_en: "Which second messenger activates PKA in the lipolytic cascade?", answer_fr: "L'AMPc.", answer_en: "cAMP." },
  { question_fr: "Quelle enzyme produit l'AMPc suite à l'activation du récepteur au glucagon/à l'adrénaline ?", question_en: "Which enzyme produces cAMP following glucagon/adrenaline receptor activation?", answer_fr: "L'adénylate cyclase.", answer_en: "Adenylate cyclase." },
  { question_fr: "Quelle protéine de surface des gouttelettes lipidiques est phosphorylée par la PKA ?", question_en: "Which lipid droplet surface protein is phosphorylated by PKA?", answer_fr: "La périlipine.", answer_en: "Perilipin." },
  { question_fr: "Quel est l'effet de la phosphorylation de la périlipine sur l'accès des lipases au triglycéride ?", question_en: "What is the effect of perilipin phosphorylation on lipase access to the triglyceride?", answer_fr: "Elle expose les triglycérides à l'action des lipases, qui étaient auparavant protégés.", answer_en: "It exposes the triglycerides to lipase action, which were previously protected." },
  { question_fr: "Par quels deux mécanismes l'insuline inhibe-t-elle la lipolyse ?", question_en: "By what two mechanisms does insulin inhibit lipolysis?", answer_fr: "En activant une phosphodiestérase qui dégrade l'AMPc, et en activant une phosphatase qui déphosphoryle la HSL.", answer_en: "By activating a phosphodiesterase that degrades cAMP, and by activating a phosphatase that dephosphorylates HSL." },
  { question_fr: "À quelle protéine plasmatique les acides gras libres sont-ils liés pour circuler dans le sang ?", question_en: "Which plasma protein are free fatty acids bound to for circulation in the blood?", answer_fr: "L'albumine.", answer_en: "Albumin." },
  { question_fr: "Pourquoi le glycérol libéré ne peut-il pas être réutilisé sur place par l'adipocyte ?", question_en: "Why can't the released glycerol be reused locally by the adipocyte?", answer_fr: "Parce que le tissu adipeux est dépourvu de glycérol kinase significative.", answer_en: "Because adipose tissue lacks significant glycerol kinase activity." },
  { question_fr: "Quel organe capte le glycérol circulant pour l'utiliser en néoglucogenèse ?", question_en: "Which organ takes up circulating glycerol to use for gluconeogenesis?", answer_fr: "Le foie.", answer_en: "The liver." },
  { question_fr: "Quels tissus captent principalement les acides gras libres pour la β-oxydation ?", question_en: "Which tissues mainly take up free fatty acids for beta-oxidation?", answer_fr: "Le muscle et le foie.", answer_en: "Muscle and the liver." },
  { question_fr: "Résumez en une phrase le déroulement de la lipolyse.", question_en: "Summarize in one sentence how lipolysis proceeds.", answer_fr: "Sous l'effet du glucagon/de l'adrénaline (cascade AMPc-PKA), l'ATGL, la HSL puis la MGL hydrolysent successivement les trois acides gras du triglycéride, libérant des acides gras libres pour la β-oxydation périphérique et du glycérol pour la néoglucogenèse hépatique.", answer_en: "Under glucagon/adrenaline (cAMP-PKA cascade), ATGL, then HSL, then MGL successively hydrolyze the three fatty acids of the triglyceride, releasing free fatty acids for peripheral beta-oxidation and glycerol for hepatic gluconeogenesis." },
];

const FATTY_ACID_OXIDATION_1_COURSE = `# Oxydation des acides gras (partie 1) — Activation et navette de la carnitine

## 1. Activation des acides gras
- Dans le **cytosol**, l'**acyl-CoA synthétase** (thiokinase) active l'acide gras en **acyl-CoA**, en consommant 2 liaisons phosphate riches en énergie (ATP → AMP + 2 Pi, équivalent au coût de **2 ATP**).

## 2. La navette de la carnitine (transport mitochondrial)
Les acides gras à **longue chaîne** (>12C) ne peuvent pas traverser directement la membrane mitochondriale interne sous forme d'acyl-CoA :

| # | Étape | Localisation | Réaction |
| --- | --- | --- | --- |
| 1 | **CPT1** (carnitine palmitoyltransférase 1) | Membrane mitochondriale **externe** | Transfère le groupe acyle du CoA à la carnitine → **acylcarnitine** ; étape **limitante et régulatrice** de toute la β-oxydation |
| 2 | **Translocase** | Membrane interne | Échange l'acylcarnitine (entrante) contre la carnitine libre (sortante) |
| 3 | **CPT2** | Membrane interne, face matricielle | Reforme l'acyl-CoA à partir de l'acylcarnitine, libère la carnitine (recyclée vers le cytosol) |

Les acides gras à chaîne **courte et moyenne** (<12C) traversent directement la membrane, sans besoin de la navette.

## 3. Le cycle de la β-oxydation (4 réactions, répétées)

| # | Enzyme | Réaction | Produit |
| --- | --- | --- | --- |
| 1 | **Acyl-CoA déshydrogénase** | Forme une double liaison (trans-Δ2-énoyl-CoA), transfère 2 électrons au FAD | **FADH₂** |
| 2 | **Énoyl-CoA hydratase** | Ajoute une molécule d'eau | β-hydroxyacyl-CoA |
| 3 | **β-hydroxyacyl-CoA déshydrogénase** | Oxyde le groupe hydroxyle en cétone | **NADH** |
| 4 | **Thiolase** (β-cétothiolase) | Clive la liaison entre C2 et C3 | **Acétyl-CoA** + acyl-CoA raccourci de 2 carbones (répète le cycle) |

## Points à retenir
- Activation cytosolique (acyl-CoA synthétase, coût de 2 ATP-équivalents), puis import mitochondrial via la navette carnitine (**CPT1** = étape limitante, translocase, **CPT2**).
- Chaque cycle de β-oxydation (déshydrogénase-FAD, hydratase, déshydrogénase-NAD, thiolase) libère **1 acétyl-CoA, 1 FADH₂ et 1 NADH**, raccourcissant la chaîne de 2 carbones.`;

export const FATTY_ACID_OXIDATION_1_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Oxydation des acides gras (1) : activation et navette de la carnitine",
    source_label: "Synthèse — Metabolism: Fatty Acid Oxidation Part 1 (Ninja Nerd)",
    content_fr: FATTY_ACID_OXIDATION_1_COURSE,
  },
  qcm: [
    single("Où se déroule l'activation initiale d'un acide gras en acyl-CoA ?", "B", "L'activation se déroule dans le cytosol, catalysée par l'acyl-CoA synthétase.", ["Dans la matrice mitochondriale", "Dans le cytosol", "Dans le noyau", "Dans l'espace intermembranaire"]),
    single("Combien d'équivalents ATP sont consommés par l'activation d'un acide gras en acyl-CoA ?", "C", "L'activation consomme l'équivalent de 2 ATP (ATP → AMP + 2 Pi).", ["Aucun", "1", "2", "4"]),
    single("Pourquoi les acides gras à longue chaîne nécessitent-ils la navette de la carnitine ?", "A", "Ils ne peuvent pas traverser directement la membrane mitochondriale interne sous forme d'acyl-CoA.", ["Ils ne peuvent pas traverser directement la membrane mitochondriale interne", "Ils sont trop instables pour être activés", "Ils doivent d'abord être dégradés en glycérol", "Ils nécessitent d'être convertis en glucose"]),
    single("Quelle enzyme catalyse la première étape de la navette de la carnitine, sur la membrane mitochondriale externe ?", "D", "La CPT1 (carnitine palmitoyltransférase 1) transfère le groupe acyle à la carnitine sur la face externe.", ["La CPT2", "La translocase", "L'acyl-CoA déshydrogénase", "La CPT1"]),
    single("Quelle étape de la navette de la carnitine est considérée comme limitante et régulatrice de la β-oxydation ?", "A", "La réaction catalysée par la CPT1 est l'étape limitante et régulatrice de toute la β-oxydation.", ["La réaction catalysée par la CPT1", "La réaction catalysée par la translocase", "La réaction catalysée par la CPT2", "L'activation cytosolique initiale"]),
    single("Quelle enzyme reforme l'acyl-CoA à partir de l'acylcarnitine dans la matrice mitochondriale ?", "B", "La CPT2, sur la face matricielle de la membrane interne, reforme l'acyl-CoA et libère la carnitine.", ["La CPT1", "La CPT2", "La translocase", "La thiolase"]),
    single("Les acides gras à chaîne courte et moyenne (<12C) nécessitent-ils la navette de la carnitine ?", "B", "Non, ils traversent directement la membrane mitochondriale sans nécessiter la navette.", ["Oui, systématiquement", "Non, ils traversent directement la membrane", "Uniquement en cas de jeûne", "Uniquement dans le foie"]),
    single("Quelle enzyme catalyse la première réaction de chaque cycle de β-oxydation, produisant du FADH2 ?", "C", "L'acyl-CoA déshydrogénase forme une double liaison et transfère des électrons au FAD.", ["L'énoyl-CoA hydratase", "La β-hydroxyacyl-CoA déshydrogénase", "L'acyl-CoA déshydrogénase", "La thiolase"]),
    single("Quelle enzyme ajoute une molécule d'eau lors du cycle de la β-oxydation ?", "A", "L'énoyl-CoA hydratase ajoute une molécule d'eau, formant un β-hydroxyacyl-CoA.", ["L'énoyl-CoA hydratase", "L'acyl-CoA déshydrogénase", "La thiolase", "La β-hydroxyacyl-CoA déshydrogénase"]),
    single("Quelle enzyme du cycle de la β-oxydation produit du NADH ?", "D", "La β-hydroxyacyl-CoA déshydrogénase oxyde le groupe hydroxyle en cétone, produisant du NADH.", ["L'acyl-CoA déshydrogénase", "L'énoyl-CoA hydratase", "La thiolase", "La β-hydroxyacyl-CoA déshydrogénase"]),
    single("Quelle enzyme clive la liaison entre C2 et C3, libérant un acétyl-CoA à chaque cycle ?", "B", "La thiolase (β-cétothiolase) clive cette liaison, libérant un acétyl-CoA et raccourcissant la chaîne de 2 carbones.", ["L'acyl-CoA déshydrogénase", "La thiolase", "L'énoyl-CoA hydratase", "La CPT2"]),
    single("Combien de molécules sont produites par un cycle complet de β-oxydation (hors raccourcissement de la chaîne) ?", "C", "Chaque cycle produit 1 acétyl-CoA, 1 FADH2 et 1 NADH.", ["1 acétyl-CoA seulement", "1 FADH2 et 1 NADH seulement", "1 acétyl-CoA, 1 FADH2 et 1 NADH", "2 acétyl-CoA et 2 NADH"]),
  ],
  exam: { titre_fr: "Examen chronométré — Oxydation des acides gras (1)", duration_seconds: 1_080 },
};

export const FATTY_ACID_OXIDATION_1_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Où se déroule l'activation d'un acide gras en acyl-CoA ?", question_en: "Where does activation of a fatty acid into acyl-CoA occur?", answer_fr: "Dans le cytosol.", answer_en: "In the cytosol." },
  { question_fr: "Quelle enzyme catalyse l'activation d'un acide gras en acyl-CoA ?", question_en: "Which enzyme catalyzes activation of a fatty acid into acyl-CoA?", answer_fr: "L'acyl-CoA synthétase (thiokinase).", answer_en: "Acyl-CoA synthetase (thiokinase)." },
  { question_fr: "Combien d'équivalents ATP coûte cette activation ?", question_en: "How many ATP equivalents does this activation cost?", answer_fr: "Deux (ATP → AMP + 2 Pi).", answer_en: "Two (ATP → AMP + 2 Pi)." },
  { question_fr: "Pourquoi les acides gras à longue chaîne ont-ils besoin d'un système de transport spécial pour entrer dans la mitochondrie ?", question_en: "Why do long-chain fatty acids need a special transport system to enter the mitochondrion?", answer_fr: "Parce qu'ils ne peuvent pas traverser directement la membrane mitochondriale interne sous forme d'acyl-CoA.", answer_en: "Because they cannot directly cross the inner mitochondrial membrane as acyl-CoA." },
  { question_fr: "Comment s'appelle ce système de transport ?", question_en: "What is this transport system called?", answer_fr: "La navette de la carnitine.", answer_en: "The carnitine shuttle." },
  { question_fr: "Quelle enzyme catalyse la première étape de la navette de la carnitine ?", question_en: "Which enzyme catalyzes the first step of the carnitine shuttle?", answer_fr: "La CPT1 (carnitine palmitoyltransférase 1).", answer_en: "CPT1 (carnitine palmitoyltransferase 1)." },
  { question_fr: "Où est localisée la CPT1 ?", question_en: "Where is CPT1 located?", answer_fr: "Sur la membrane mitochondriale externe.", answer_en: "On the outer mitochondrial membrane." },
  { question_fr: "Quel produit forme la CPT1 à partir de l'acyl-CoA et de la carnitine ?", question_en: "What product does CPT1 form from acyl-CoA and carnitine?", answer_fr: "L'acylcarnitine.", answer_en: "Acylcarnitine." },
  { question_fr: "La réaction de la CPT1 est-elle considérée comme une étape régulatrice majeure ?", question_en: "Is the CPT1 reaction considered a major regulatory step?", answer_fr: "Oui, c'est l'étape limitante de toute la β-oxydation.", answer_en: "Yes, it is the rate-limiting step of the entire beta-oxidation pathway." },
  { question_fr: "Quelle protéine échange l'acylcarnitine entrante contre la carnitine libre sortante ?", question_en: "Which protein exchanges incoming acylcarnitine for outgoing free carnitine?", answer_fr: "La translocase.", answer_en: "The translocase." },
  { question_fr: "Quelle enzyme reforme l'acyl-CoA à partir de l'acylcarnitine dans la matrice mitochondriale ?", question_en: "Which enzyme reforms acyl-CoA from acylcarnitine in the mitochondrial matrix?", answer_fr: "La CPT2.", answer_en: "CPT2." },
  { question_fr: "Où est localisée la CPT2 ?", question_en: "Where is CPT2 located?", answer_fr: "Sur la face matricielle de la membrane mitochondriale interne.", answer_en: "On the matrix-facing side of the inner mitochondrial membrane." },
  { question_fr: "Que devient la carnitine libérée par la CPT2 ?", question_en: "What happens to the carnitine released by CPT2?", answer_fr: "Elle est recyclée vers le cytosol pour un nouveau cycle de transport.", answer_en: "It is recycled back to the cytosol for another round of transport." },
  { question_fr: "Les acides gras à chaîne courte et moyenne nécessitent-ils la navette de la carnitine ?", question_en: "Do short- and medium-chain fatty acids require the carnitine shuttle?", answer_fr: "Non, ils traversent directement la membrane mitochondriale.", answer_en: "No, they cross the mitochondrial membrane directly." },
  { question_fr: "Combien de réactions composent un cycle de β-oxydation ?", question_en: "How many reactions make up one beta-oxidation cycle?", answer_fr: "Quatre.", answer_en: "Four." },
  { question_fr: "Quelle enzyme catalyse la première réaction du cycle de β-oxydation ?", question_en: "Which enzyme catalyzes the first reaction of the beta-oxidation cycle?", answer_fr: "L'acyl-CoA déshydrogénase.", answer_en: "Acyl-CoA dehydrogenase." },
  { question_fr: "Quel cofacteur accepte les électrons lors de cette première réaction ?", question_en: "Which cofactor accepts electrons in this first reaction?", answer_fr: "Le FAD, formant du FADH2.", answer_en: "FAD, forming FADH2." },
  { question_fr: "Quelle enzyme catalyse la deuxième réaction du cycle, ajoutant une molécule d'eau ?", question_en: "Which enzyme catalyzes the second reaction of the cycle, adding a water molecule?", answer_fr: "L'énoyl-CoA hydratase.", answer_en: "Enoyl-CoA hydratase." },
  { question_fr: "Quelle enzyme catalyse la troisième réaction, produisant du NADH ?", question_en: "Which enzyme catalyzes the third reaction, producing NADH?", answer_fr: "La β-hydroxyacyl-CoA déshydrogénase.", answer_en: "Beta-hydroxyacyl-CoA dehydrogenase." },
  { question_fr: "Quelle enzyme catalyse la quatrième et dernière réaction du cycle ?", question_en: "Which enzyme catalyzes the fourth and final reaction of the cycle?", answer_fr: "La thiolase (β-cétothiolase).", answer_en: "Thiolase (beta-ketothiolase)." },
  { question_fr: "Que libère la thiolase à chaque cycle ?", question_en: "What does thiolase release at each cycle?", answer_fr: "Un acétyl-CoA et un acyl-CoA raccourci de 2 carbones.", answer_en: "An acetyl-CoA and an acyl-CoA shortened by 2 carbons." },
  { question_fr: "Combien de carbones la chaîne d'acide gras perd-elle à chaque cycle de β-oxydation ?", question_en: "How many carbons does the fatty acid chain lose per beta-oxidation cycle?", answer_fr: "Deux.", answer_en: "Two." },
  { question_fr: "Quels trois produits sont générés par cycle de β-oxydation ?", question_en: "What three products are generated per beta-oxidation cycle?", answer_fr: "1 acétyl-CoA, 1 FADH2, 1 NADH.", answer_en: "1 acetyl-CoA, 1 FADH2, 1 NADH." },
  { question_fr: "Résumez en une phrase l'ensemble du processus décrit dans cette première partie.", question_en: "Summarize in one sentence the entire process described in this first part.", answer_fr: "L'acide gras est activé en acyl-CoA dans le cytosol, importé dans la mitochondrie via la navette de la carnitine (CPT1, étape limitante), puis dégradé cycle après cycle par la β-oxydation, chaque cycle libérant un acétyl-CoA, un FADH2 et un NADH.", answer_en: "The fatty acid is activated to acyl-CoA in the cytosol, imported into the mitochondrion via the carnitine shuttle (CPT1, rate-limiting step), then broken down cycle by cycle via beta-oxidation, each cycle releasing one acetyl-CoA, one FADH2, and one NADH." },
];

const FATTY_ACID_OXIDATION_2_COURSE = `# Oxydation des acides gras (partie 2) — Bilan énergétique et cas particuliers

## 1. Bilan énergétique pour le palmitate (16C, saturé)
- **7 cycles** de β-oxydation nécessaires (16C → 8 acétyl-CoA) : produisent **7 FADH₂ + 7 NADH + 8 acétyl-CoA**.
- Chaque acétyl-CoA entrant dans le cycle de Krebs génère environ 10 ATP (3 NADH × ~2,5 + 1 FADH₂ × ~1,5 + 1 GTP) ; chaque FADH₂/NADH de la β-oxydation elle-même produit ~1,5/2,5 ATP.
- **Bilan total approximatif pour le palmitate : environ 106 ATP nets**, après soustraction des 2 ATP-équivalents consommés lors de l'activation initiale.

## 2. Acides gras à nombre impair de carbones
- Le dernier cycle de β-oxydation d'un acide gras à nombre impair de carbones produit un **propionyl-CoA** (3C) au lieu d'un acétyl-CoA.
- Le propionyl-CoA est **carboxylé** (propionyl-CoA carboxylase, **biotine**-dépendante) en méthylmalonyl-CoA, puis **isomérisé** (méthylmalonyl-CoA mutase, **vitamine B12**-dépendante) en **succinyl-CoA**, qui rejoint le cycle de Krebs.
- C'est la **seule voie** par laquelle les acides gras peuvent contribuer, indirectement, à la néoglucogenèse (via le succinyl-CoA, intermédiaire anaplérotique du cycle de Krebs).

## 3. Régulation
- **CPT1** est **inhibée par le malonyl-CoA** : lorsque la lipogenèse est active (état nourri, malonyl-CoA élevé), la β-oxydation est simultanément freinée, évitant un cycle futile de synthèse/dégradation simultanées des acides gras.
- L'**AMPK**, activée par une faible charge énergétique, inhibe l'**ACC** (réduisant le malonyl-CoA), ce qui lève l'inhibition de CPT1 et favorise la β-oxydation.

## 4. Importance clinique

| Déficit | Conséquences cliniques |
| --- | --- |
| **CPT1** | Hypoglycémie hypocétosique à jeun ; incapacité à mobiliser les acides gras comme carburant alternatif |
| **Acyl-CoA déshydrogénase à chaîne moyenne (MCAD)** | L'une des erreurs innées du métabolisme les plus fréquentes ; hypoglycémie hypocétosique, léthargie, voire décès subit du nourrisson en cas de jeûne prolongé (souvent révélée par une maladie intercurrente réduisant l'alimentation) |

## Points à retenir
- Le palmitate génère environ **106 ATP nets** via 7 cycles de β-oxydation + oxydation complète des 8 acétyl-CoA.
- Les acides gras à nombre impair de carbones produisent du propionyl-CoA, converti en succinyl-CoA (biotine puis B12-dépendant) — seule contribution indirecte des acides gras à la néoglucogenèse.
- Le malonyl-CoA inhibe CPT1, couplant l'état de la lipogenèse à celui de la β-oxydation.`;

export const FATTY_ACID_OXIDATION_2_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Oxydation des acides gras (2) : bilan énergétique et cas particuliers",
    source_label: "Synthèse — Metabolism: Fatty Acid Oxidation Part 2 (Ninja Nerd)",
    content_fr: FATTY_ACID_OXIDATION_2_COURSE,
  },
  qcm: [
    single("Combien de cycles de β-oxydation sont nécessaires pour dégrader complètement le palmitate (16C) ?", "C", "Sept cycles sont nécessaires pour convertir le palmitate en 8 acétyl-CoA.", ["Cinq", "Six", "Sept", "Huit"]),
    single("Combien d'acétyl-CoA sont produits par la dégradation complète d'un palmitate ?", "D", "Huit acétyl-CoA sont produits (16 carbones / 2 par acétyl-CoA).", ["Cinq", "Six", "Sept", "Huit"]),
    single("Environ combien d'ATP nets produit l'oxydation complète d'un palmitate ?", "B", "L'oxydation complète du palmitate produit environ 106 ATP nets.", ["Environ 38", "Environ 106", "Environ 200", "Environ 10"]),
    single("Quel intermédiaire à 3 carbones est produit par le dernier cycle de β-oxydation d'un acide gras à nombre impair de carbones ?", "A", "Le propionyl-CoA (3C) est produit au lieu d'un acétyl-CoA classique.", ["Le propionyl-CoA", "Le succinyl-CoA", "L'acétoacétyl-CoA", "Le malonyl-CoA"]),
    single("Quelle enzyme, dépendante de la biotine, carboxyle le propionyl-CoA ?", "C", "La propionyl-CoA carboxylase, dépendante de la biotine, forme le méthylmalonyl-CoA.", ["La pyruvate carboxylase", "L'acétyl-CoA carboxylase", "La propionyl-CoA carboxylase", "La malonyl-CoA décarboxylase"]),
    single("Quelle enzyme, dépendante de la vitamine B12, isomérise le méthylmalonyl-CoA en succinyl-CoA ?", "B", "La méthylmalonyl-CoA mutase, dépendante de la vitamine B12, catalyse cette isomérisation.", ["La propionyl-CoA carboxylase", "La méthylmalonyl-CoA mutase", "La succinyl-CoA synthétase", "L'aconitase"]),
    single("Par quelle voie les acides gras à nombre impair de carbones peuvent-ils indirectement contribuer à la néoglucogenèse ?", "D", "Via le succinyl-CoA formé à partir du propionyl-CoA terminal, un intermédiaire anaplérotique du cycle de Krebs.", ["Via l'acétyl-CoA classique", "Via le malonyl-CoA", "Via le glycérol", "Via le succinyl-CoA issu du propionyl-CoA"]),
    single("Quel métabolite inhibe la CPT1, couplant l'état de la lipogenèse à celui de la β-oxydation ?", "A", "Le malonyl-CoA, produit par l'ACC lors de la lipogenèse, inhibe la CPT1.", ["Le malonyl-CoA", "Le citrate", "L'AMP", "Le NADH"]),
    single("Quel est l'effet de l'AMPK sur la β-oxydation, via son action sur l'ACC ?", "B", "L'AMPK inhibe l'ACC, réduisant le malonyl-CoA, ce qui lève l'inhibition de la CPT1 et favorise la β-oxydation.", ["Elle inhibe la β-oxydation", "Elle favorise la β-oxydation en levant l'inhibition de CPT1", "Elle n'a aucun effet sur la β-oxydation", "Elle active directement la CPT1 sans passer par le malonyl-CoA"]),
    single("Quelle est la conséquence clinique typique d'un déficit en CPT1 ?", "C", "Une hypoglycémie hypocétosique à jeun, l'organisme ne pouvant mobiliser les acides gras comme carburant alternatif.", ["Une hyperglycémie chronique", "Une acidose lactique isolée", "Une hypoglycémie hypocétosique à jeun", "Une hypercétonémie sévère"]),
    single("Quelle est la conséquence clinique typique d'un déficit en MCAD (acyl-CoA déshydrogénase des acides gras à chaîne moyenne) ?", "D", "Une hypoglycémie hypocétosique, léthargie, voire décès subit du nourrisson lors d'un jeûne prolongé.", ["Une intolérance au lactose", "Une hypercalcémie", "Une anémie hémolytique", "Une hypoglycémie hypocétosique à jeun, potentiellement fatale chez le nourrisson"]),
  ],
  exam: { titre_fr: "Examen chronométré — Oxydation des acides gras (2)", duration_seconds: 990 },
};

export const FATTY_ACID_OXIDATION_2_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Combien de cycles de β-oxydation sont nécessaires pour dégrader entièrement le palmitate (16C) ?", question_en: "How many beta-oxidation cycles are needed to fully degrade palmitate (16C)?", answer_fr: "Sept.", answer_en: "Seven." },
  { question_fr: "Combien d'acétyl-CoA le palmitate produit-il au total ?", question_en: "How many acetyl-CoA does palmitate produce in total?", answer_fr: "Huit.", answer_en: "Eight." },
  { question_fr: "Combien de FADH2 et de NADH sont produits directement par les 7 cycles de β-oxydation du palmitate ?", question_en: "How many FADH2 and NADH are directly produced by the 7 beta-oxidation cycles of palmitate?", answer_fr: "7 FADH2 et 7 NADH.", answer_en: "7 FADH2 and 7 NADH." },
  { question_fr: "Environ combien d'ATP nets produit l'oxydation complète d'une molécule de palmitate ?", question_en: "Approximately how many net ATP does complete oxidation of one palmitate molecule produce?", answer_fr: "Environ 106 ATP.", answer_en: "About 106 ATP." },
  { question_fr: "Faut-il soustraire un coût énergétique du bilan final de l'oxydation du palmitate ? Lequel ?", question_en: "Should an energy cost be subtracted from the final oxidation balance of palmitate? Which one?", answer_fr: "Oui, les 2 ATP-équivalents consommés lors de l'activation initiale de l'acide gras.", answer_en: "Yes, the 2 ATP-equivalents consumed during the initial activation of the fatty acid." },
  { question_fr: "Quel intermédiaire particulier est produit par le dernier cycle de β-oxydation d'un acide gras à nombre impair de carbones ?", question_en: "Which special intermediate is produced by the last beta-oxidation cycle of an odd-chain fatty acid?", answer_fr: "Le propionyl-CoA (3 carbones).", answer_en: "Propionyl-CoA (3 carbons)." },
  { question_fr: "Quelle enzyme carboxyle le propionyl-CoA en méthylmalonyl-CoA ?", question_en: "Which enzyme carboxylates propionyl-CoA into methylmalonyl-CoA?", answer_fr: "La propionyl-CoA carboxylase.", answer_en: "Propionyl-CoA carboxylase." },
  { question_fr: "Quel cofacteur vitaminique est requis par la propionyl-CoA carboxylase ?", question_en: "Which vitamin cofactor is required by propionyl-CoA carboxylase?", answer_fr: "La biotine.", answer_en: "Biotin." },
  { question_fr: "Quelle enzyme isomérise le méthylmalonyl-CoA en succinyl-CoA ?", question_en: "Which enzyme isomerizes methylmalonyl-CoA into succinyl-CoA?", answer_fr: "La méthylmalonyl-CoA mutase.", answer_en: "Methylmalonyl-CoA mutase." },
  { question_fr: "Quel cofacteur vitaminique est requis par la méthylmalonyl-CoA mutase ?", question_en: "Which vitamin cofactor is required by methylmalonyl-CoA mutase?", answer_fr: "La vitamine B12 (cobalamine).", answer_en: "Vitamin B12 (cobalamin)." },
  { question_fr: "Dans quelle voie métabolique le succinyl-CoA issu du propionyl-CoA rejoint-il le métabolisme central ?", question_en: "Into which metabolic pathway does the succinyl-CoA from propionyl-CoA enter central metabolism?", answer_fr: "Le cycle de Krebs.", answer_en: "The Krebs cycle." },
  { question_fr: "Pourquoi cette voie est-elle la seule contribution indirecte des acides gras à la néoglucogenèse ?", question_en: "Why is this pathway the only indirect contribution of fatty acids to gluconeogenesis?", answer_fr: "Parce que le succinyl-CoA, contrairement à l'acétyl-CoA classique, est un intermédiaire anaplérotique du cycle de Krebs pouvant alimenter l'oxaloacétate puis la néoglucogenèse.", answer_en: "Because succinyl-CoA, unlike regular acetyl-CoA, is an anaplerotic Krebs cycle intermediate that can feed into oxaloacetate and then gluconeogenesis." },
  { question_fr: "Quel métabolite inhibe directement la CPT1 ?", question_en: "Which metabolite directly inhibits CPT1?", answer_fr: "Le malonyl-CoA.", answer_en: "Malonyl-CoA." },
  { question_fr: "Pourquoi l'inhibition de la CPT1 par le malonyl-CoA a-t-elle un sens métabolique ?", question_en: "Why does malonyl-CoA inhibition of CPT1 make metabolic sense?", answer_fr: "Elle évite un cycle futile où les acides gras seraient synthétisés et simultanément dégradés.", answer_en: "It prevents a futile cycle where fatty acids would be synthesized and simultaneously broken down." },
  { question_fr: "Comment l'AMPK favorise-t-elle indirectement la β-oxydation ?", question_en: "How does AMPK indirectly promote beta-oxidation?", answer_fr: "En inhibant l'ACC, réduisant le malonyl-CoA, ce qui lève l'inhibition de la CPT1.", answer_en: "By inhibiting ACC, reducing malonyl-CoA, which relieves CPT1 inhibition." },
  { question_fr: "Qu'est-ce que le déficit en CPT1 empêche l'organisme de faire pendant le jeûne ?", question_en: "What does CPT1 deficiency prevent the body from doing during fasting?", answer_fr: "Mobiliser les acides gras comme carburant alternatif, provoquant une hypoglycémie hypocétosique.", answer_en: "Mobilizing fatty acids as an alternative fuel, causing hypoketotic hypoglycemia." },
  { question_fr: "Qu'est-ce que le déficit en MCAD ?", question_en: "What is MCAD deficiency?", answer_fr: "Un déficit en acyl-CoA déshydrogénase des acides gras à chaîne moyenne, l'une des erreurs innées du métabolisme les plus fréquentes.", answer_en: "A deficiency of medium-chain acyl-CoA dehydrogenase, one of the most common inborn errors of metabolism." },
  { question_fr: "Quelles sont les conséquences cliniques typiques du déficit en MCAD lors d'un jeûne prolongé chez le nourrisson ?", question_en: "What are the typical clinical consequences of MCAD deficiency during prolonged fasting in an infant?", answer_fr: "Hypoglycémie hypocétosique, léthargie, voire décès subit.", answer_en: "Hypoketotic hypoglycemia, lethargy, or even sudden death." },
  { question_fr: "Pourquoi le déficit en MCAD est-il souvent révélé par une maladie intercurrente ?", question_en: "Why is MCAD deficiency often revealed by an intercurrent illness?", answer_fr: "Parce qu'une réduction de l'alimentation pendant la maladie force l'organisme à dépendre de la β-oxydation, révélant le déficit sous-jacent.", answer_en: "Because reduced feeding during illness forces the body to rely on beta-oxidation, unmasking the underlying deficiency." },
  { question_fr: "Résumez en une phrase le bilan énergétique global de l'oxydation complète d'un acide gras à longue chaîne.", question_en: "Summarize in one sentence the overall energy balance of complete long-chain fatty acid oxidation.", answer_fr: "La β-oxydation répétée génère de multiples FADH2, NADH et acétyl-CoA, dont l'oxydation complète via la chaîne respiratoire et le cycle de Krebs produit un rendement net très élevé, environ 106 ATP pour le palmitate.", answer_en: "Repeated beta-oxidation generates multiple FADH2, NADH, and acetyl-CoA, whose complete oxidation via the respiratory chain and Krebs cycle yields a very high net output, about 106 ATP for palmitate." },
];
