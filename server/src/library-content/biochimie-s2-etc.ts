import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const ETC_COMPLEX_IV_ATP_SYNTHASE_COURSE = `# Chaîne de transport des électrons (partie 3) — Le complexe IV et l'ATP synthase

## 1. Le complexe IV (cytochrome c oxydase)
- Reçoit les électrons un à un du **cytochrome c** réduit.
- Contient deux hèmes (**hème a** et **hème a3**) et deux centres cuivre (**CuA** et **CuB**), organisés pour permettre le transfert séquentiel des électrons jusqu'au site catalytique.
- Au site actif (hème a3–CuB), **4 électrons** s'accumulent progressivement et réduisent une molécule d'**O₂** en **2 molécules d'H₂O**, consommant également 4 protons matriciels dans la réaction chimique elle-même.
- En plus de ces protons « chimiques », le complexe IV **pompe** environ **4 protons supplémentaires** de la matrice vers l'espace intermembranaire, pour un total de 8 protons consommés/déplacés par O₂ réduit.
- Réaction globale : 4 cytochrome c (réduit) + O₂ + 8 H⁺(matrice) → 4 cytochrome c (oxydé) + 2 H₂O + 4 H⁺(espace intermembranaire).

## 2. L'ATP synthase (complexe V)
- Ce n'est pas un transporteur d'électrons mais un **moteur moléculaire rotatif** composé de deux parties :
  - **F₀** : portion intramembranaire, comprenant un anneau de sous-unités « c » qui tourne sous l'effet du flux de protons.
  - **F₁** : portion matricielle, comprenant les sous-unités catalytiques (3α, 3β) où l'ATP est synthétisé.
- Le flux de protons à travers F₀, entraîné par le gradient électrochimique, fait tourner l'anneau c et la **tige centrale (γ)**, qui induit des changements conformationnels séquentiels dans les 3 sites catalytiques de F₁ selon le **mécanisme de changement de liaison (binding-change mechanism)** : chaque site passe successivement par un état **Ouvert (O)**, **Lâche/Loose (L)** et **Serré/Tight (T)**.
- Environ **3 à 4 protons** doivent traverser l'ATP synthase pour produire **1 ATP**.

## 3. Régulation et inhibiteurs
- L'**oligomycine** inhibe spécifiquement le canal à protons de F₀, bloquant la synthèse d'ATP tout en laissant intact le transport d'électrons (jusqu'à ce que le gradient devienne trop élevé et ralentisse indirectement la chaîne, sauf en présence d'un découplant).
- Les **découplants** (DNP, protéines UCP) court-circuitent le gradient de protons sans passer par l'ATP synthase, dissociant le transport d'électrons de la production d'ATP.
- Le **cyanure** et le **monoxyde de carbone** inhibent le complexe IV en se liant au fer de l'hème a3, empêchant la réduction de l'O₂ — d'où leur toxicité systémique rapide (blocage complet de la phosphorylation oxydative).

## 4. Bilan global de la phosphorylation oxydative
- Par NADH oxydé (complexes I, III, IV) : ~10 protons pompés/consommés au total → ~2,5 ATP.
- Par FADH₂ oxydé (complexes II, III, IV) : ~6 protons pompés/consommés → ~1,5 ATP.
- Ce ratio protons/ATP explique pourquoi le rendement énergétique diffère entre le NADH et le FADH₂.

## Points à retenir
- Le complexe IV réduit l'O₂ en H₂O au niveau du site hème a3–CuB, et pompe des protons supplémentaires.
- L'ATP synthase est un moteur rotatif (F₀ tourne, F₁ catalyse) fonctionnant selon le mécanisme de changement de liaison (O-L-T).
- Cyanure et CO bloquent le complexe IV ; l'oligomycine bloque l'ATP synthase ; les découplants dissocient gradient de protons et synthèse d'ATP.`;

export const ETC_COMPLEX_IV_ATP_SYNTHASE_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Chaîne respiratoire (3) : le complexe IV et l'ATP synthase",
    source_label: "Synthèse — Metabolism: Electron Transport Chain Part 3 (Ninja Nerd)",
    content_fr: ETC_COMPLEX_IV_ATP_SYNTHASE_COURSE,
  },
  qcm: [
    single("De quelle protéine le complexe IV reçoit-il les électrons ?", "B", "Le complexe IV reçoit les électrons un à un du cytochrome c réduit.", ["De l'ubiquinol", "Du cytochrome c", "Du NADH directement", "Du FADH2 directement"]),
    multi("Quels cofacteurs métalliques sont présents dans le complexe IV ?", ["A", "B"], "Le complexe IV contient deux hèmes (a et a3) et deux centres cuivre (CuA et CuB).", ["Hème a et hème a3", "CuA et CuB", "Fe-S uniquement", "FMN et FAD"]),
    single("Quel est le produit final de la réaction catalysée par le complexe IV ?", "C", "Le complexe IV réduit l'O2 en eau (H2O) au site hème a3–CuB.", ["Le CO2", "Le superoxide", "L'eau (H2O)", "Le peroxyde d'hydrogène uniquement"]),
    single("Combien d'électrons doivent s'accumuler au site actif du complexe IV pour réduire une molécule d'O2 ?", "C", "Quatre électrons sont nécessaires pour réduire complètement une molécule d'O2 en deux molécules d'eau.", ["1", "2", "4", "8"]),
    single("Quels agents toxiques inhibent le complexe IV en se liant au fer de l'hème a3 ?", "A", "Le cyanure et le monoxyde de carbone se lient au fer de l'hème a3, bloquant la réduction de l'O2.", ["Le cyanure et le monoxyde de carbone", "La roténone et l'antimycine A", "L'oligomycine et le DNP", "Le cuivre et le zinc"]),
    single("Quelles sont les deux sous-unités principales de l'ATP synthase ?", "B", "L'ATP synthase est composée de F0 (portion membranaire) et F1 (portion matricielle catalytique).", ["F1 et F2", "F0 et F1", "Fa et Fb", "Complexe A et complexe B"]),
    single("Quelle portion de l'ATP synthase tourne sous l'effet du flux de protons ?", "A", "L'anneau de sous-unités « c » de la portion F0 tourne sous l'effet du flux de protons.", ["L'anneau c de F0", "Les sous-unités β de F1", "Le cytochrome c", "L'ubiquinone"]),
    single("Comment se nomme le mécanisme par lequel F1 synthétise l'ATP grâce à la rotation de la tige centrale ?", "D", "Le mécanisme de changement de liaison (binding-change mechanism) décrit les trois états successifs (Ouvert, Lâche, Serré) des sites catalytiques de F1.", ["Le cycle Q", "La chimiosmose", "Le cycle de Krebs", "Le mécanisme de changement de liaison (binding-change)"]),
    single("Combien de protons traversent typiquement l'ATP synthase pour produire un ATP ?", "B", "Environ 3 à 4 protons doivent traverser l'ATP synthase pour produire un ATP.", ["1", "3 à 4", "8", "10"]),
    single("Quel inhibiteur bloque spécifiquement le canal à protons de l'ATP synthase (F0) ?", "C", "L'oligomycine bloque le canal à protons de la sous-unité F0, empêchant la synthèse d'ATP.", ["Le cyanure", "La roténone", "L'oligomycine", "L'antimycine A"]),
    single("Quel est l'effet d'un découplant comme le DNP sur le lien entre transport d'électrons et synthèse d'ATP ?", "A", "Un découplant dissipe le gradient de protons sans passer par l'ATP synthase, dissociant le transport d'électrons de la production d'ATP.", ["Il dissocie le transport d'électrons de la production d'ATP", "Il augmente proportionnellement la production d'ATP", "Il bloque totalement le transport d'électrons", "Il n'a aucun effet sur le gradient de protons"]),
    single("Pourquoi le rendement en ATP du FADH2 est-il inférieur à celui du NADH, en tenant compte des trois complexes pompeurs de protons ?", "B", "Le FADH2 entre au complexe II (qui ne pompe pas de protons) et ne bénéficie donc que du pompage des complexes III et IV, contre celui des complexes I, III et IV pour le NADH.", ["Le FADH2 n'atteint jamais le complexe IV", "Le FADH2 ne bénéficie pas du pompage de protons du complexe I", "Le FADH2 inhibe directement l'ATP synthase", "Le FADH2 est oxydé deux fois plus lentement"]),
  ],
  exam: { titre_fr: "Examen chronométré — Le complexe IV et l'ATP synthase", duration_seconds: 1_080 },
};

export const ETC_COMPLEX_IV_ATP_SYNTHASE_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel est le nom du complexe IV ?", question_en: "What is the name of complex IV?", answer_fr: "La cytochrome c oxydase.", answer_en: "Cytochrome c oxidase." },
  { question_fr: "De quelle protéine le complexe IV reçoit-il les électrons ?", question_en: "From which protein does complex IV receive electrons?", answer_fr: "Du cytochrome c réduit.", answer_en: "From reduced cytochrome c." },
  { question_fr: "Quels sont les deux hèmes présents dans le complexe IV ?", question_en: "What are the two hemes present in complex IV?", answer_fr: "L'hème a et l'hème a3.", answer_en: "Heme a and heme a3." },
  { question_fr: "Quels sont les deux centres cuivre présents dans le complexe IV ?", question_en: "What are the two copper centers present in complex IV?", answer_fr: "CuA et CuB.", answer_en: "CuA and CuB." },
  { question_fr: "À quel site catalytique du complexe IV l'oxygène est-il réduit ?", question_en: "At which catalytic site of complex IV is oxygen reduced?", answer_fr: "Le site formé par l'hème a3 et CuB.", answer_en: "The site formed by heme a3 and CuB." },
  { question_fr: "Combien d'électrons sont nécessaires pour réduire une molécule d'O2 en deux molécules d'eau ?", question_en: "How many electrons are needed to reduce one O2 molecule into two water molecules?", answer_fr: "Quatre électrons.", answer_en: "Four electrons." },
  { question_fr: "Combien de protons matriciels sont consommés chimiquement pour former 2 H2O à partir d'un O2 ?", question_en: "How many matrix protons are chemically consumed to form 2 H2O from one O2?", answer_fr: "Quatre protons.", answer_en: "Four protons." },
  { question_fr: "En plus des protons consommés chimiquement, le complexe IV pompe-t-il des protons supplémentaires ?", question_en: "Besides the chemically consumed protons, does complex IV pump additional protons?", answer_fr: "Oui, environ 4 protons supplémentaires par O2 réduit.", answer_en: "Yes, about 4 additional protons per O2 reduced." },
  { question_fr: "Quels agents toxiques bloquent le complexe IV en se liant au fer de l'hème a3 ?", question_en: "Which toxic agents block complex IV by binding the iron of heme a3?", answer_fr: "Le cyanure et le monoxyde de carbone.", answer_en: "Cyanide and carbon monoxide." },
  { question_fr: "Pourquoi l'intoxication au cyanure est-elle rapidement mortelle ?", question_en: "Why is cyanide poisoning rapidly fatal?", answer_fr: "Parce qu'elle bloque totalement la phosphorylation oxydative en inhibant le complexe IV, empêchant la production d'ATP dans presque toutes les cellules.", answer_en: "Because it completely blocks oxidative phosphorylation by inhibiting complex IV, preventing ATP production in nearly all cells." },
  { question_fr: "Quel autre nom donne-t-on à l'ATP synthase ?", question_en: "What other name is given to ATP synthase?", answer_fr: "Le complexe V.", answer_en: "Complex V." },
  { question_fr: "Quelles sont les deux portions principales de l'ATP synthase ?", question_en: "What are the two main portions of ATP synthase?", answer_fr: "F0 (intramembranaire) et F1 (matricielle, catalytique).", answer_en: "F0 (membrane-embedded) and F1 (matrix-facing, catalytic)." },
  { question_fr: "Quelle sous-structure de F0 tourne sous l'effet du flux de protons ?", question_en: "Which F0 substructure rotates under the flow of protons?", answer_fr: "L'anneau de sous-unités « c ».", answer_en: "The ring of \"c\" subunits." },
  { question_fr: "Quelle tige relie la rotation de l'anneau c aux sous-unités catalytiques de F1 ?", question_en: "Which stalk connects rotation of the c-ring to the catalytic subunits of F1?", answer_fr: "La tige centrale γ (gamma).", answer_en: "The central gamma (γ) stalk." },
  { question_fr: "Combien de sous-unités catalytiques β compose F1 ?", question_en: "How many catalytic beta subunits make up F1?", answer_fr: "Trois.", answer_en: "Three." },
  { question_fr: "Comment se nomme le mécanisme décrivant les trois états successifs des sites catalytiques de F1 ?", question_en: "What is the mechanism describing the three successive states of F1's catalytic sites called?", answer_fr: "Le mécanisme de changement de liaison (binding-change mechanism).", answer_en: "The binding-change mechanism." },
  { question_fr: "Quels sont les trois états successifs d'un site catalytique de F1 selon ce mécanisme ?", question_en: "What are the three successive states of an F1 catalytic site in this mechanism?", answer_fr: "Ouvert (O), Lâche/Loose (L), Serré/Tight (T).", answer_en: "Open (O), Loose (L), Tight (T)." },
  { question_fr: "Dans quel état un site catalytique de F1 synthétise-t-il activement l'ATP à partir d'ADP et de Pi ?", question_en: "In which state does an F1 catalytic site actively synthesize ATP from ADP and Pi?", answer_fr: "L'état Serré (Tight).", answer_en: "The Tight state." },
  { question_fr: "Combien de protons traversent typiquement l'ATP synthase pour produire un ATP ?", question_en: "How many protons typically pass through ATP synthase to produce one ATP?", answer_fr: "Environ 3 à 4 protons.", answer_en: "About 3 to 4 protons." },
  { question_fr: "Quel inhibiteur bloque spécifiquement le canal à protons de F0 ?", question_en: "Which inhibitor specifically blocks the F0 proton channel?", answer_fr: "L'oligomycine.", answer_en: "Oligomycin." },
  { question_fr: "L'oligomycine bloque-t-elle directement le transport d'électrons ?", question_en: "Does oligomycin directly block electron transport?", answer_fr: "Non, elle bloque la synthèse d'ATP par F0/F1 ; le transport d'électrons peut se poursuivre brièvement jusqu'à ce que le gradient devienne trop élevé (rétro-inhibition indirecte).", answer_en: "No, it blocks ATP synthesis by F0/F1; electron transport can continue briefly until the gradient becomes too high (indirect feedback inhibition)." },
  { question_fr: "Que fait un découplant chimique comme le DNP au gradient de protons ?", question_en: "What does a chemical uncoupler like DNP do to the proton gradient?", answer_fr: "Il le dissipe directement à travers la membrane, sans passer par l'ATP synthase.", answer_en: "It dissipates it directly across the membrane, bypassing ATP synthase." },
  { question_fr: "Quel est l'effet net d'un découplant sur la relation entre consommation d'oxygène et production d'ATP ?", question_en: "What is the net effect of an uncoupler on the relationship between oxygen consumption and ATP production?", answer_fr: "Il dissocie les deux : la consommation d'oxygène augmente sans production d'ATP correspondante.", answer_en: "It dissociates the two: oxygen consumption increases without corresponding ATP production." },
  { question_fr: "Combien de protons sont approximativement pompés/consommés au total par NADH oxydé, en tenant compte des complexes I, III et IV ?", question_en: "Approximately how many protons are pumped/consumed in total per NADH oxidized, across complexes I, III, and IV?", answer_fr: "Environ 10 protons.", answer_en: "About 10 protons." },
  { question_fr: "Combien de protons sont approximativement pompés/consommés au total par FADH2 oxydé, en tenant compte des complexes II, III et IV ?", question_en: "Approximately how many protons are pumped/consumed in total per FADH2 oxidized, across complexes II, III, and IV?", answer_fr: "Environ 6 protons.", answer_en: "About 6 protons." },
  { question_fr: "Pourquoi le ratio protons/ATP explique-t-il la différence de rendement entre NADH et FADH2 ?", question_en: "Why does the proton/ATP ratio explain the yield difference between NADH and FADH2?", answer_fr: "Parce qu'il faut environ 3 à 4 protons pour produire un ATP ; un nombre de protons plus faible (FADH2, ~6) produit donc moins d'ATP qu'un nombre plus élevé (NADH, ~10).", answer_en: "Because roughly 3 to 4 protons are needed to produce one ATP; a lower proton count (FADH2, ~6) thus yields less ATP than a higher one (NADH, ~10)." },
  { question_fr: "L'ATP synthase peut-elle fonctionner en sens inverse (hydrolyser l'ATP pour pomper des protons) ?", question_en: "Can ATP synthase run in reverse (hydrolyzing ATP to pump protons)?", answer_fr: "Oui, dans certaines conditions pathologiques (ex. perte du gradient de protons), elle peut fonctionner en sens inverse et consommer de l'ATP.", answer_en: "Yes, under certain pathological conditions (e.g. loss of the proton gradient), it can run in reverse and consume ATP." },
  { question_fr: "Résumez en une phrase le fonctionnement de l'ATP synthase.", question_en: "Summarize in one sentence how ATP synthase works.", answer_fr: "C'est un moteur moléculaire rotatif où le flux de protons à travers F0 fait tourner la tige centrale, induisant des changements conformationnels séquentiels dans les sites catalytiques de F1 qui synthétisent l'ATP.", answer_en: "It is a rotary molecular motor where proton flow through F0 spins the central stalk, driving sequential conformational changes in F1's catalytic sites that synthesize ATP." },
];

const ETC_COMPLEX_II_III_COURSE = `# Chaîne de transport des électrons (partie 2) — Les complexes II et III

## 1. Le complexe II (succinate déshydrogénase)
- Seule enzyme à appartenir à la fois au **cycle de Krebs** et à la **chaîne respiratoire**.
- Catalyse l'oxydation du succinate en fumarate, transférant 2 électrons au **FAD** lié à l'enzyme (formant FADH₂), qui les relaie via une chaîne de **centres fer-soufre** jusqu'à l'**ubiquinone** (réduite en ubiquinol).
- **Ne pompe aucun proton** : contrairement au complexe I, l'énergie libérée par ce transfert d'électrons n'est pas suffisante pour pomper des protons contre le gradient.
- C'est pourquoi l'oxydation du FADH2 (entrant via le complexe II) produit moins d'ATP (~1,5) que celle du NADH (entrant via le complexe I, ~2,5).

## 2. Le complexe III (cytochrome bc1)
- Reçoit les électrons de l'**ubiquinol (CoQH₂)** et les transfère au **cytochrome c**, via un mécanisme complexe appelé le **cycle Q**.
- Contient plusieurs **cytochromes b** (types bL et bH), un **cytochrome c1**, et une **protéine fer-soufre de Rieske** (un centre Fe-S atypique à haut potentiel).
- Le cycle Q permet le transfert net de 2 électrons de l'ubiquinol au cytochrome c, tout en pompant **4 protons** par paire d'électrons (2 lors de l'oxydation de l'ubiquinol côté espace intermembranaire, 2 supplémentaires via un cycle de recyclage impliquant une seconde molécule d'ubiquinone).
- Le cycle Q illustre un mécanisme de **bifurcation électronique** : les deux électrons de l'ubiquinol empruntent des voies différentes (l'un vers la protéine de Rieske puis le cytochrome c1, l'autre vers les cytochromes b puis une seconde ubiquinone).

## 3. Importance clinique et toxicologique
- L'**antimycine A** inhibe spécifiquement le complexe III en bloquant le site Qi (réduction de l'ubiquinone côté matrice), empêchant le recyclage du cycle Q.
- Comme le complexe I, le complexe III est un site de production de radicaux libres (superoxide), notamment lorsque le cycle Q est perturbé.
- Des mutations touchant le cytochrome b (codé par l'ADN mitochondrial) sont associées à des myopathies mitochondriales et à certaines cardiomyopathies.

## Points à retenir
- Le complexe II relie directement le cycle de Krebs à la chaîne respiratoire, sans pomper de protons.
- Le complexe III transfère les électrons de l'ubiquinol au cytochrome c via le cycle Q, pompant 4 H⁺ par paire d'électrons, grâce à un mécanisme de bifurcation électronique.
- L'antimycine A inhibe le complexe III ; les deux complexes sont des sites potentiels de production de radicaux libres.`;

export const ETC_COMPLEX_II_III_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Chaîne respiratoire (2) : les complexes II et III",
    source_label: "Synthèse — Metabolism: Electron Transport Chain Part 2 (Ninja Nerd)",
    content_fr: ETC_COMPLEX_II_III_COURSE,
  },
  qcm: [
    single("Quelle particularité distingue le complexe II des autres complexes de la chaîne respiratoire ?", "C", "Le complexe II est la seule enzyme appartenant à la fois au cycle de Krebs (succinate déshydrogénase) et à la chaîne respiratoire.", ["Il pompe le plus de protons de tous les complexes", "Il est situé dans le cytosol", "Il appartient aussi au cycle de Krebs", "Il produit directement de l'ATP"]),
    single("Quel cofacteur du complexe II accepte directement les électrons issus de l'oxydation du succinate ?", "B", "Le FAD, lié à l'enzyme, accepte les électrons de l'oxydation du succinate, formant du FADH2.", ["Le FMN", "Le FAD", "Le NAD+", "L'hème a3"]),
    single("Le complexe II pompe-t-il des protons à travers la membrane ?", "B", "Le complexe II ne pompe aucun proton, contrairement aux complexes I, III et IV.", ["Oui, 2 protons par électron", "Non, aucun proton", "Oui, autant que le complexe I", "Oui, mais uniquement en anaérobiose"]),
    single("Quel complexe reçoit les électrons de l'ubiquinol (CoQH2) ?", "C", "Le complexe III reçoit les électrons de l'ubiquinol et les transfère au cytochrome c.", ["Le complexe I", "Le complexe II", "Le complexe III", "Le complexe IV"]),
    single("Comment se nomme le mécanisme par lequel le complexe III transfère les électrons de l'ubiquinol au cytochrome c ?", "A", "Le cycle Q est le mécanisme par lequel le complexe III relaie les électrons de l'ubiquinol au cytochrome c tout en pompant des protons.", ["Le cycle Q", "Le cycle de Krebs", "Le cycle de Randle", "Le cycle de Cori"]),
    single("Quelle protéine fer-soufre atypique à haut potentiel fait partie du complexe III ?", "D", "La protéine de Rieske est un centre fer-soufre atypique à haut potentiel, essentiel au fonctionnement du complexe III.", ["La ferritine", "La transferrine", "L'aconitase", "La protéine de Rieske"]),
    single("Combien de protons le complexe III pompe-t-il par paire d'électrons transférée ?", "C", "Le complexe III pompe environ 4 protons par paire d'électrons, via le mécanisme du cycle Q.", ["1", "2", "4", "8"]),
    single("Qu'appelle-t-on « bifurcation électronique » dans le cycle Q ?", "B", "C'est le fait que les deux électrons de l'ubiquinol empruntent des voies différentes : l'un vers la protéine de Rieske puis le cytochrome c1, l'autre vers les cytochromes b puis une seconde ubiquinone.", ["La division du complexe III en deux sous-unités", "Le fait que les deux électrons de l'ubiquinol empruntent des voies différentes", "La formation de deux molécules d'ATP simultanément", "Le blocage total du transfert d'électrons"]),
    single("Quel inhibiteur bloque spécifiquement le site Qi du complexe III ?", "A", "L'antimycine A inhibe le complexe III en bloquant le site Qi, empêchant le recyclage du cycle Q.", ["L'antimycine A", "La roténone", "L'oligomycine", "Le cyanure"]),
    single("Pourquoi l'oxydation du FADH2 produit-elle moins d'ATP que celle du NADH ?", "B", "Le FADH2 entre au niveau du complexe II, qui ne pompe aucun proton, contrairement au complexe I qui reçoit les électrons du NADH.", ["Le FADH2 contient moins d'électrons", "Le FADH2 entre au complexe II, qui ne pompe aucun proton", "Le FADH2 est directement dégradé avant d'atteindre la chaîne", "Le FADH2 inhibe le complexe IV"]),
    single("Des mutations de quel composant du complexe III, codé par l'ADN mitochondrial, sont associées à des myopathies mitochondriales ?", "D", "Des mutations du cytochrome b, codé par l'ADN mitochondrial, sont associées à des myopathies et cardiomyopathies mitochondriales.", ["Le FAD", "La protéine de Rieske", "Le cytochrome c1", "Le cytochrome b"]),
    single("Les complexes I et III partagent-ils une caractéristique commune en termes de sous-produits indésirables ?", "A", "Oui, les deux sont des sites potentiels de production de radicaux libres (superoxide) lors d'une fuite d'électrons.", ["Oui, tous deux peuvent produire des radicaux superoxide", "Non, seul le complexe I produit des radicaux libres", "Non, seul le complexe III produit des radicaux libres", "Aucun des deux ne produit de radicaux libres"]),
  ],
  exam: { titre_fr: "Examen chronométré — Les complexes II et III", duration_seconds: 1_080 },
};

export const ETC_COMPLEX_II_III_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel est le nom enzymatique complet du complexe II ?", question_en: "What is the full enzymatic name of complex II?", answer_fr: "La succinate déshydrogénase.", answer_en: "Succinate dehydrogenase." },
  { question_fr: "À quelles deux voies métaboliques le complexe II appartient-il simultanément ?", question_en: "Which two metabolic pathways does complex II belong to simultaneously?", answer_fr: "Le cycle de Krebs et la chaîne de transport des électrons.", answer_en: "The Krebs cycle and the electron transport chain." },
  { question_fr: "Quelle réaction du cycle de Krebs le complexe II catalyse-t-il ?", question_en: "Which Krebs cycle reaction does complex II catalyze?", answer_fr: "L'oxydation du succinate en fumarate.", answer_en: "The oxidation of succinate to fumarate." },
  { question_fr: "Quel cofacteur lié à l'enzyme accepte les électrons de cette oxydation ?", question_en: "Which enzyme-bound cofactor accepts the electrons from this oxidation?", answer_fr: "Le FAD, formant du FADH2.", answer_en: "FAD, forming FADH2." },
  { question_fr: "Par quel intermédiaire les électrons du FADH2 atteignent-ils l'ubiquinone dans le complexe II ?", question_en: "Through which intermediate do FADH2's electrons reach ubiquinone in complex II?", answer_fr: "Une chaîne de centres fer-soufre.", answer_en: "A chain of iron-sulfur centers." },
  { question_fr: "Le complexe II pompe-t-il des protons ?", question_en: "Does complex II pump protons?", answer_fr: "Non, aucun.", answer_en: "No, none." },
  { question_fr: "Pourquoi le complexe II ne pompe-t-il pas de protons, contrairement au complexe I ?", question_en: "Why doesn't complex II pump protons, unlike complex I?", answer_fr: "L'énergie libérée par le transfert d'électrons du succinate à l'ubiquinone est insuffisante pour entraîner un pompage de protons.", answer_en: "The energy released by electron transfer from succinate to ubiquinone is insufficient to drive proton pumping." },
  { question_fr: "Quel complexe reçoit les électrons de l'ubiquinol après les complexes I et II ?", question_en: "Which complex receives electrons from ubiquinol after complexes I and II?", answer_fr: "Le complexe III.", answer_en: "Complex III." },
  { question_fr: "Quel est le nom du complexe III ?", question_en: "What is the name of complex III?", answer_fr: "Le complexe cytochrome bc1.", answer_en: "The cytochrome bc1 complex." },
  { question_fr: "À quelle protéine le complexe III transfère-t-il finalement les électrons ?", question_en: "To which protein does complex III ultimately transfer electrons?", answer_fr: "Au cytochrome c.", answer_en: "To cytochrome c." },
  { question_fr: "Comment se nomme le mécanisme réactionnel du complexe III ?", question_en: "What is the reaction mechanism of complex III called?", answer_fr: "Le cycle Q.", answer_en: "The Q cycle." },
  { question_fr: "Quels cytochromes composent en partie le complexe III ?", question_en: "Which cytochromes are part of complex III?", answer_fr: "Les cytochromes b (bL et bH) et le cytochrome c1.", answer_en: "Cytochromes b (bL and bH) and cytochrome c1." },
  { question_fr: "Quelle protéine fer-soufre spécialisée fait partie du complexe III ?", question_en: "Which specialized iron-sulfur protein is part of complex III?", answer_fr: "La protéine de Rieske.", answer_en: "The Rieske iron-sulfur protein." },
  { question_fr: "Combien de protons le complexe III pompe-t-il par paire d'électrons transférée au cytochrome c ?", question_en: "How many protons does complex III pump per pair of electrons transferred to cytochrome c?", answer_fr: "Environ 4 protons.", answer_en: "About 4 protons." },
  { question_fr: "Qu'est-ce que la « bifurcation électronique » dans le cycle Q ?", question_en: "What is \"electron bifurcation\" in the Q cycle?", answer_fr: "Le fait que les deux électrons de l'ubiquinol empruntent des chemins différents au sein du complexe III.", answer_en: "The fact that the two electrons of ubiquinol take different paths within complex III." },
  { question_fr: "Vers quelle destination va le premier électron de l'ubiquinol dans le cycle Q ?", question_en: "Where does the first electron of ubiquinol go in the Q cycle?", answer_fr: "Vers la protéine de Rieske, puis le cytochrome c1, puis le cytochrome c.", answer_en: "To the Rieske protein, then cytochrome c1, then cytochrome c." },
  { question_fr: "Vers quelle destination va le second électron de l'ubiquinol dans le cycle Q ?", question_en: "Where does the second electron of ubiquinol go in the Q cycle?", answer_fr: "Vers les cytochromes b, puis vers une seconde molécule d'ubiquinone (recyclage).", answer_en: "To the cytochromes b, then to a second ubiquinone molecule (recycling)." },
  { question_fr: "Quel inhibiteur bloque spécifiquement le complexe III ?", question_en: "Which inhibitor specifically blocks complex III?", answer_fr: "L'antimycine A.", answer_en: "Antimycin A." },
  { question_fr: "À quel site du complexe III l'antimycine A se fixe-t-elle ?", question_en: "At which site of complex III does antimycin A bind?", answer_fr: "Le site Qi (réduction de l'ubiquinone côté matrice).", answer_en: "The Qi site (ubiquinone reduction on the matrix side)." },
  { question_fr: "Le complexe III peut-il, comme le complexe I, produire des radicaux libres ?", question_en: "Can complex III, like complex I, produce free radicals?", answer_fr: "Oui, notamment lorsque le cycle Q est perturbé.", answer_en: "Yes, particularly when the Q cycle is disrupted." },
  { question_fr: "Quel composant du complexe III, codé par l'ADN mitochondrial, est associé à des myopathies mitochondriales en cas de mutation ?", question_en: "Which component of complex III, encoded by mitochondrial DNA, is linked to mitochondrial myopathies when mutated?", answer_fr: "Le cytochrome b.", answer_en: "Cytochrome b." },
  { question_fr: "Pourquoi le rendement énergétique du FADH2 (via complexe II) est-il inférieur à celui du NADH (via complexe I) ?", question_en: "Why is the energy yield from FADH2 (via complex II) lower than from NADH (via complex I)?", answer_fr: "Parce que le complexe II, à la différence du complexe I, ne pompe aucun proton, réduisant le gradient total généré.", answer_en: "Because complex II, unlike complex I, pumps no protons, reducing the total gradient generated." },
  { question_fr: "Le complexe II transfère-t-il des électrons directement au cytochrome c ?", question_en: "Does complex II transfer electrons directly to cytochrome c?", answer_fr: "Non, il les transfère à l'ubiquinone, qui les achemine ensuite au complexe III.", answer_en: "No, it transfers them to ubiquinone, which then carries them to complex III." },
  { question_fr: "Quel est le point commun structural entre le complexe I et le complexe III concernant les cofacteurs fer-soufre ?", question_en: "What structural feature do complex I and complex III share regarding iron-sulfur cofactors?", answer_fr: "Les deux contiennent des centres fer-soufre qui participent au relais des électrons.", answer_en: "Both contain iron-sulfur centers that participate in relaying electrons." },
  { question_fr: "Résumez en une phrase le rôle combiné des complexes II et III dans la chaîne respiratoire.", question_en: "Summarize in one sentence the combined role of complexes II and III in the respiratory chain.", answer_fr: "Le complexe II alimente la chaîne en électrons issus du FADH2 sans pomper de protons, tandis que le complexe III relaie ces électrons (avec ceux venant du complexe I) de l'ubiquinol au cytochrome c via le cycle Q, en pompant 4 protons par paire d'électrons.", answer_en: "Complex II feeds the chain with electrons from FADH2 without pumping protons, while complex III relays these electrons (along with those from complex I) from ubiquinol to cytochrome c via the Q cycle, pumping 4 protons per electron pair." },
];

const ETC_COMPLEX_I_COURSE = `# Chaîne de transport des électrons (partie 1) — Le complexe I

## 1. Structure générale
- Le **complexe I** (NADH:ubiquinone oxydoréductase) est le plus grand complexe de la chaîne respiratoire, en forme de « L », avec un bras hydrophile dans la matrice et un bras hydrophobe intramembranaire.
- Il contient un cofacteur **FMN (flavine mononucléotide)**, dérivé de la vitamine B2 (riboflavine), et une série de **centres fer-soufre (Fe-S)** qui relaient les électrons.

## 2. Mécanisme réactionnel
1. Le **NADH** se lie au bras matriciel et transfère 2 électrons + 1 H⁺ au **FMN**, qui devient FMNH₂ (NADH → NAD⁺ + FMNH₂).
2. Les électrons passent ensuite un à un à travers une chaîne de **centres Fe-S**, agissant comme un « fil moléculaire » conducteur.
3. Les électrons sont finalement transférés à l'**ubiquinone (CoQ)**, la réduisant en **ubiquinol (CoQH₂)**.
4. Ce transfert d'électrons provoque des changements conformationnels dans le bras membranaire, couplés au **pompage de 4 protons (H⁺)** de la matrice vers l'espace intermembranaire par cycle catalytique.

## 3. Bilan
- Réaction globale : NADH + H⁺ + CoQ + 4 H⁺(matrice) → NAD⁺ + CoQH₂ + 4 H⁺(espace intermembranaire).
- Le complexe I est responsable d'environ 40 % du gradient de protons total généré par la chaîne respiratoire lors de l'oxydation du NADH.

## 4. Production de radicaux libres et pertinence clinique
- Le complexe I est un site majeur de fuite d'électrons vers l'O₂, générant l'**anion superoxide (O₂•⁻)**, une espèce réactive de l'oxygène (ROS) contribuant au stress oxydatif.
- La **roténone** (pesticide/insecticide naturel) inhibe spécifiquement le complexe I en bloquant le transfert d'électrons vers l'ubiquinone ; elle est utilisée en recherche pour étudier des modèles de la maladie de Parkinson, le complexe I étant impliqué dans la dysfonction mitochondriale associée à cette pathologie.
- Des mutations de l'ADN mitochondrial touchant des sous-unités du complexe I sont associées à des maladies mitochondriales telles que le syndrome de Leigh et la neuropathie optique héréditaire de Leber (LHON).

## Points à retenir
- Le complexe I reçoit les électrons du NADH via le FMN, les relaie par une chaîne de centres Fe-S, et les transfère à l'ubiquinone.
- Il pompe 4 H⁺ par NADH oxydé, le pompage le plus important parmi les complexes de la chaîne.
- Site majeur de production de ROS ; cible de la roténone et impliqué dans plusieurs maladies mitochondriales.`;

export const ETC_COMPLEX_I_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Chaîne respiratoire (1) : le complexe I",
    source_label: "Synthèse — Metabolism: Electron Transport Chain Part 1 (Ninja Nerd)",
    content_fr: ETC_COMPLEX_I_COURSE,
  },
  qcm: [
    single("Quel cofacteur accepte initialement les électrons du NADH dans le complexe I ?", "B", "Le FMN (flavine mononucléotide) accepte les 2 électrons et le proton du NADH, devenant FMNH2.", ["Le FAD", "Le FMN", "L'ubiquinone", "Le cytochrome c"]),
    single("De quelle vitamine dérive le FMN ?", "C", "Le FMN dérive de la vitamine B2 (riboflavine), tout comme le FAD.", ["La vitamine B1", "La vitamine B3", "La vitamine B2", "La vitamine B12"]),
    single("Par quels intermédiaires les électrons circulent-ils entre le FMN et l'ubiquinone dans le complexe I ?", "A", "Une chaîne de centres fer-soufre (Fe-S) relaie les électrons du FMN jusqu'à l'ubiquinone.", ["Une chaîne de centres fer-soufre (Fe-S)", "Une chaîne de cytochromes b", "Directement, sans intermédiaire", "Le cytochrome c"]),
    single("Quel est le produit final de la réaction catalysée par le complexe I concernant l'ubiquinone ?", "D", "Le complexe I réduit l'ubiquinone (CoQ) en ubiquinol (CoQH2).", ["Le cytochrome c réduit", "Le FADH2", "L'oxygène réduit en eau", "L'ubiquinol (CoQH2)"]),
    single("Combien de protons sont pompés par le complexe I par NADH oxydé ?", "C", "Le complexe I pompe environ 4 protons par NADH oxydé, la contribution la plus importante parmi les complexes de la chaîne.", ["1", "2", "4", "8"]),
    single("Quelle espèce réactive de l'oxygène est principalement générée par une fuite d'électrons au niveau du complexe I ?", "B", "Le complexe I est un site majeur de production de l'anion superoxide (O2•−), contribuant au stress oxydatif.", ["Le peroxyde d'hydrogène uniquement", "L'anion superoxide (O2•−)", "L'ozone", "Le monoxyde d'azote"]),
    single("Quel inhibiteur naturel bloque spécifiquement le transfert d'électrons du complexe I vers l'ubiquinone ?", "A", "La roténone inhibe spécifiquement le complexe I, bloquant le transfert d'électrons vers l'ubiquinone.", ["La roténone", "L'antimycine A", "Le cyanure", "L'oligomycine"]),
    single("Quel modèle de maladie neurodégénérative est étudié en recherche via l'inhibition du complexe I par la roténone ?", "C", "La roténone est utilisée en recherche pour créer des modèles expérimentaux de la maladie de Parkinson, en lien avec la dysfonction du complexe I observée dans cette pathologie.", ["La maladie d'Alzheimer", "La sclérose en plaques", "La maladie de Parkinson", "La sclérose latérale amyotrophique"]),
    single("Quelle maladie mitochondriale héréditaire touchant le nerf optique est associée à des mutations de sous-unités du complexe I ?", "B", "La neuropathie optique héréditaire de Leber (LHON) est associée à des mutations mitochondriales touchant des sous-unités du complexe I.", ["La rétinite pigmentaire", "La neuropathie optique héréditaire de Leber (LHON)", "Le glaucome à angle ouvert", "La cataracte congénitale"]),
    single("Quelle est la forme générale du complexe I ?", "D", "Le complexe I a une forme en « L », avec un bras hydrophile matriciel et un bras hydrophobe intramembranaire.", ["Sphérique", "Linéaire", "En anneau", "En forme de « L »"]),
    multi("Quels sont les cofacteurs présents dans le complexe I ?", ["A", "B"], "Le complexe I contient le FMN comme accepteur initial d'électrons, et une chaîne de centres fer-soufre relayant les électrons jusqu'à l'ubiquinone.", ["FMN", "Centres fer-soufre", "Hème a3", "CuA/CuB"]),
    single("Quelle proportion approximative du gradient de protons total est générée par le complexe I lors de l'oxydation du NADH ?", "B", "Le complexe I contribue à environ 40 % du gradient de protons total généré par la chaîne respiratoire lors de l'oxydation du NADH.", ["10 %", "40 %", "70 %", "100 %"]),
  ],
  exam: { titre_fr: "Examen chronométré — Le complexe I", duration_seconds: 1_080 },
};

export const ETC_COMPLEX_I_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel est le nom complet du complexe I ?", question_en: "What is the full name of complex I?", answer_fr: "NADH:ubiquinone oxydoréductase.", answer_en: "NADH:ubiquinone oxidoreductase." },
  { question_fr: "Quelle est la forme générale du complexe I ?", question_en: "What is the general shape of complex I?", answer_fr: "Une forme en « L », avec un bras hydrophile matriciel et un bras hydrophobe intramembranaire.", answer_en: "An \"L\" shape, with a hydrophilic matrix arm and a hydrophobic membrane arm." },
  { question_fr: "Quel cofacteur accepte initialement les électrons et le proton du NADH ?", question_en: "Which cofactor initially accepts the electrons and proton from NADH?", answer_fr: "Le FMN (flavine mononucléotide).", answer_en: "FMN (flavin mononucleotide)." },
  { question_fr: "De quelle vitamine dérive le FMN ?", question_en: "Which vitamin is FMN derived from?", answer_fr: "La vitamine B2 (riboflavine).", answer_en: "Vitamin B2 (riboflavin)." },
  { question_fr: "Que devient le FMN après avoir accepté les électrons du NADH ?", question_en: "What does FMN become after accepting electrons from NADH?", answer_fr: "Le FMNH2 (forme réduite).", answer_en: "FMNH2 (reduced form)." },
  { question_fr: "Par quel type de cofacteur les électrons circulent-ils entre le FMN et l'ubiquinone ?", question_en: "Through which type of cofactor do electrons travel between FMN and ubiquinone?", answer_fr: "Une chaîne de centres fer-soufre (Fe-S).", answer_en: "A chain of iron-sulfur (Fe-S) centers." },
  { question_fr: "Quel rôle jouent les centres fer-soufre du complexe I ?", question_en: "What role do the iron-sulfur centers of complex I play?", answer_fr: "Ils agissent comme un « fil moléculaire » conduisant les électrons un à un vers l'ubiquinone.", answer_en: "They act as a \"molecular wire\" conducting electrons one at a time toward ubiquinone." },
  { question_fr: "Quel est le produit final réduit par le complexe I ?", question_en: "What is the final product reduced by complex I?", answer_fr: "L'ubiquinol (CoQH2), forme réduite de l'ubiquinone.", answer_en: "Ubiquinol (CoQH2), the reduced form of ubiquinone." },
  { question_fr: "Combien de protons le complexe I pompe-t-il par NADH oxydé ?", question_en: "How many protons does complex I pump per NADH oxidized?", answer_fr: "Environ 4 protons.", answer_en: "About 4 protons." },
  { question_fr: "Quel pourcentage approximatif du gradient total de protons le complexe I génère-t-il ?", question_en: "Approximately what percentage of the total proton gradient does complex I generate?", answer_fr: "Environ 40 %.", answer_en: "About 40%." },
  { question_fr: "Qu'est-ce qui déclenche le pompage de protons par le complexe I ?", question_en: "What triggers proton pumping by complex I?", answer_fr: "Des changements conformationnels du bras membranaire, couplés au transfert d'électrons.", answer_en: "Conformational changes in the membrane arm, coupled to electron transfer." },
  { question_fr: "Quelle espèce réactive de l'oxygène (ROS) est principalement produite par une fuite d'électrons au complexe I ?", question_en: "Which reactive oxygen species (ROS) is mainly produced by electron leakage at complex I?", answer_fr: "L'anion superoxide (O2•−).", answer_en: "The superoxide anion (O2•−)." },
  { question_fr: "Pourquoi le complexe I est-il considéré comme un site majeur de stress oxydatif ?", question_en: "Why is complex I considered a major site of oxidative stress?", answer_fr: "Parce qu'il laisse fréquemment « fuir » des électrons directement vers l'O2, générant des radicaux superoxide.", answer_en: "Because it frequently \"leaks\" electrons directly to O2, generating superoxide radicals." },
  { question_fr: "Quel inhibiteur naturel bloque spécifiquement le complexe I ?", question_en: "Which natural inhibitor specifically blocks complex I?", answer_fr: "La roténone.", answer_en: "Rotenone." },
  { question_fr: "Par quel mécanisme la roténone inhibe-t-elle le complexe I ?", question_en: "By what mechanism does rotenone inhibit complex I?", answer_fr: "En bloquant le transfert d'électrons du complexe I vers l'ubiquinone.", answer_en: "By blocking electron transfer from complex I to ubiquinone." },
  { question_fr: "Quelle maladie neurodégénérative est modélisée en laboratoire par l'inhibition du complexe I via la roténone ?", question_en: "Which neurodegenerative disease is modeled in the lab by rotenone-induced complex I inhibition?", answer_fr: "La maladie de Parkinson.", answer_en: "Parkinson's disease." },
  { question_fr: "Quelle maladie mitochondriale héréditaire du nerf optique est liée à des mutations du complexe I ?", question_en: "Which hereditary mitochondrial disease of the optic nerve is linked to complex I mutations?", answer_fr: "La neuropathie optique héréditaire de Leber (LHON).", answer_en: "Leber hereditary optic neuropathy (LHON)." },
  { question_fr: "Quel syndrome pédiatrique sévère de dysfonction mitochondriale peut être lié à des mutations du complexe I ?", question_en: "Which severe pediatric mitochondrial dysfunction syndrome can be linked to complex I mutations?", answer_fr: "Le syndrome de Leigh.", answer_en: "Leigh syndrome." },
  { question_fr: "Le complexe I fait-il partie du bras hydrophile ou hydrophobe pour la liaison au NADH ?", question_en: "Does the NADH-binding site belong to the hydrophilic or hydrophobic arm of complex I?", answer_fr: "Le bras hydrophile matriciel.", answer_en: "The hydrophilic matrix arm." },
  { question_fr: "Combien d'électrons et de protons le NADH cède-t-il directement au FMN ?", question_en: "How many electrons and protons does NADH directly donate to FMN?", answer_fr: "2 électrons et 1 proton (H+).", answer_en: "2 electrons and 1 proton (H+)." },
  { question_fr: "Le complexe I est-il le plus petit ou le plus grand complexe de la chaîne respiratoire ?", question_en: "Is complex I the smallest or the largest complex of the respiratory chain?", answer_fr: "Le plus grand.", answer_en: "The largest." },
  { question_fr: "Quel est le devenir de l'ubiquinol formé par le complexe I ?", question_en: "What is the fate of the ubiquinol formed by complex I?", answer_fr: "Il diffuse dans la membrane et transfère ses électrons au complexe III.", answer_en: "It diffuses within the membrane and transfers its electrons to complex III." },
  { question_fr: "Le complexe II peut-il compenser une inhibition du complexe I pour alimenter la chaîne respiratoire en électrons ?", question_en: "Can complex II compensate for complex I inhibition to feed electrons into the respiratory chain?", answer_fr: "Partiellement, car le complexe II alimente aussi l'ubiquinone en électrons (via le FADH2), mais sans le pompage de protons du complexe I, réduisant le rendement global en ATP.", answer_en: "Partially, since complex II also feeds electrons into ubiquinone (via FADH2), but without complex I's proton pumping, lowering overall ATP yield." },
  { question_fr: "Le stress oxydatif lié au complexe I contribue-t-il au vieillissement cellulaire selon certaines théories ?", question_en: "Does complex I-related oxidative stress contribute to cellular aging according to some theories?", answer_fr: "Oui, la théorie mitochondriale du vieillissement propose que l'accumulation de dommages oxydatifs liés aux ROS mitochondriales (dont celles du complexe I) contribue au vieillissement cellulaire.", answer_en: "Yes, the mitochondrial theory of aging proposes that accumulated oxidative damage from mitochondrial ROS (including those from complex I) contributes to cellular aging." },
  { question_fr: "Résumez en une phrase le rôle du complexe I dans la chaîne respiratoire.", question_en: "Summarize in one sentence the role of complex I in the respiratory chain.", answer_fr: "Il oxyde le NADH, relaie les électrons via le FMN et des centres fer-soufre jusqu'à l'ubiquinone, et pompe environ 4 protons par NADH, tout en étant un site majeur de production de radicaux superoxide.", answer_en: "It oxidizes NADH, relays electrons via FMN and iron-sulfur centers to ubiquinone, and pumps about 4 protons per NADH, while being a major site of superoxide radical production." },
];

const ETC_OVERVIEW_COURSE = `# Chaîne de transport des électrons — Vue d'ensemble

## 1. Localisation et principe général
- La chaîne de transport des électrons (CTE) est localisée dans la **membrane mitochondriale interne**.
- Elle reçoit les électrons du **NADH** et du **FADH₂** produits par la glycolyse, le complexe pyruvate déshydrogénase et le cycle de Krebs, et les transfère séquentiellement à travers une série de complexes protéiques jusqu'à l'accepteur final, l'**oxygène (O₂)**, réduit en **eau (H₂O)**.
- Ce transfert d'électrons est couplé au pompage de protons (**H⁺**) de la matrice vers l'espace intermembranaire, créant un gradient électrochimique appelé **force protomotrice**.
- Ce gradient est utilisé par l'**ATP synthase** (complexe V) pour produire de l'ATP par **chimiosmose** — c'est la **phosphorylation oxydative**.

## 2. Les composants de la chaîne
- **Complexe I** (NADH déshydrogénase) : reçoit les électrons du NADH, les transfère à l'ubiquinone, pompe des protons.
- **Complexe II** (succinate déshydrogénase) : reçoit les électrons du FADH₂ (directement issu du cycle de Krebs), les transfère à l'ubiquinone ; **ne pompe pas** de protons.
- **Ubiquinone (coenzyme Q)** : transporteur mobile liposoluble, relaie les électrons des complexes I et II vers le complexe III.
- **Complexe III** (cytochrome bc1) : transfère les électrons de l'ubiquinone au cytochrome c, pompe des protons.
- **Cytochrome c** : petite protéine mobile hydrosoluble, relaie les électrons du complexe III au complexe IV.
- **Complexe IV** (cytochrome c oxydase) : transfère les électrons finaux à l'O₂, formant H₂O ; pompe des protons.
- **Complexe V** (ATP synthase) : n'est pas un transporteur d'électrons mais utilise le gradient de protons pour synthétiser l'ATP.

## 3. Rendement énergétique
- Chaque **NADH** oxydé via les complexes I, III, IV génère environ **2,5 ATP**.
- Chaque **FADH₂** oxydé via les complexes II, III, IV (contournant le complexe I) génère environ **1,5 ATP** — rendement inférieur car il entre plus loin dans la chaîne.

## 4. Découplage et inhibiteurs
- Des **protéines découplantes (UCP)**, comme la thermogénine du tissu adipeux brun, dissipent le gradient de protons sous forme de chaleur plutôt que de l'utiliser pour produire de l'ATP — c'est la **thermogenèse sans frisson**.
- **Inhibiteurs classiques** : roténone (complexe I), antimycine A (complexe III), cyanure et monoxyde de carbone (complexe IV), oligomycine (ATP synthase).
- Le **2,4-dinitrophénol (DNP)** est un découplant chimique qui dissipe directement le gradient de protons à travers la membrane, augmentant la consommation d'oxygène sans production d'ATP correspondante (utilisé historiquement, et dangereusement, comme « coupe-faim »).

## Points à retenir
- 5 complexes (I à V) + 2 transporteurs mobiles (ubiquinone, cytochrome c).
- Le NADH entre au complexe I (~2,5 ATP), le FADH₂ entre au complexe II (~1,5 ATP).
- Le complexe IV réduit l'O₂ en H₂O ; le gradient de protons alimente l'ATP synthase (complexe V) par chimiosmose.`;

export const ETC_OVERVIEW_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Chaîne de transport des électrons : vue d'ensemble",
    source_label: "Synthèse — Metabolism: Electron Transport Chain Overview (Ninja Nerd)",
    content_fr: ETC_OVERVIEW_COURSE,
  },
  qcm: [
    single("Où est localisée la chaîne de transport des électrons ?", "C", "La CTE est localisée dans la membrane mitochondriale interne.", ["Dans la matrice mitochondriale", "Dans le cytosol", "Dans la membrane mitochondriale interne", "Dans la membrane mitochondriale externe"]),
    single("Quel est l'accepteur final des électrons dans la chaîne respiratoire ?", "B", "L'oxygène (O2) est l'accepteur final des électrons, réduit en eau par le complexe IV.", ["Le NAD+", "L'oxygène (O2)", "Le CO2", "Le glucose"]),
    single("Quel processus utilise le gradient de protons pour produire de l'ATP ?", "A", "La chimiosmose utilise l'énergie du gradient électrochimique de protons pour entraîner l'ATP synthase.", ["La chimiosmose", "La glycolyse", "La bêta-oxydation", "La fermentation"]),
    single("Quel complexe reçoit directement les électrons du NADH ?", "A", "Le complexe I (NADH déshydrogénase) reçoit les électrons du NADH.", ["Le complexe I", "Le complexe II", "Le complexe III", "Le complexe IV"]),
    single("Quel complexe reçoit directement les électrons du FADH2 issu du cycle de Krebs ?", "B", "Le complexe II (succinate déshydrogénase) reçoit les électrons du FADH2.", ["Le complexe I", "Le complexe II", "Le complexe III", "Le complexe IV"]),
    single("Le complexe II pompe-t-il des protons à travers la membrane ?", "B", "Contrairement aux complexes I, III et IV, le complexe II ne pompe pas de protons.", ["Oui, autant que le complexe I", "Non, il ne pompe pas de protons", "Oui, mais deux fois moins que le complexe I", "Oui, mais uniquement en anaérobiose"]),
    single("Quel transporteur mobile relaie les électrons des complexes I et II vers le complexe III ?", "C", "L'ubiquinone (coenzyme Q), liposoluble, relaie les électrons vers le complexe III.", ["Le cytochrome c", "Le NAD+", "L'ubiquinone", "Le FAD"]),
    single("Quel transporteur mobile relaie les électrons du complexe III vers le complexe IV ?", "B", "Le cytochrome c, une protéine mobile hydrosoluble, relaie les électrons du complexe III vers le complexe IV.", ["L'ubiquinone", "Le cytochrome c", "Le NADH", "Le complexe V"]),
    single("Quel complexe catalyse la réduction finale de l'O2 en H2O ?", "D", "Le complexe IV (cytochrome c oxydase) catalyse la réduction finale de l'O2 en eau.", ["Complexe I", "Complexe II", "Complexe III", "Complexe IV"]),
    single("Environ combien d'ATP sont générés par l'oxydation d'un NADH via la chaîne respiratoire ?", "B", "Un NADH oxydé via les complexes I, III, IV génère environ 2,5 ATP.", ["1 ATP", "2,5 ATP", "1,5 ATP", "4 ATP"]),
    single("Pourquoi le rendement en ATP du FADH2 est-il inférieur à celui du NADH ?", "A", "Le FADH2 entre au niveau du complexe II, contournant le complexe I qui pompe des protons, d'où un gradient moindre et donc moins d'ATP produit (~1,5 ATP contre ~2,5).", ["Il entre plus loin dans la chaîne, au niveau du complexe II, contournant le pompage de protons du complexe I", "Il contient moins d'électrons que le NADH", "Il n'est jamais oxydé par la chaîne respiratoire", "Il inhibe directement l'ATP synthase"]),
    single("Quel est le rôle des protéines découplantes (UCP) comme la thermogénine ?", "C", "Les UCP dissipent le gradient de protons sous forme de chaleur plutôt que de l'utiliser pour la synthèse d'ATP, produisant de la thermogenèse sans frisson.", ["Elles bloquent totalement la chaîne respiratoire", "Elles augmentent la production d'ATP", "Elles dissipent le gradient de protons sous forme de chaleur", "Elles transportent le NADH dans la mitochondrie"]),
  ],
  exam: { titre_fr: "Examen chronométré — Vue d'ensemble de la chaîne respiratoire", duration_seconds: 1_080 },
};

export const ETC_OVERVIEW_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Dans quelle membrane est localisée la chaîne de transport des électrons ?", question_en: "In which membrane is the electron transport chain located?", answer_fr: "La membrane mitochondriale interne.", answer_en: "The inner mitochondrial membrane." },
  { question_fr: "Quels sont les deux transporteurs d'électrons réduits qui alimentent la chaîne respiratoire ?", question_en: "Which two reduced electron carriers feed the respiratory chain?", answer_fr: "Le NADH et le FADH2.", answer_en: "NADH and FADH2." },
  { question_fr: "Quel est l'accepteur final des électrons de la chaîne respiratoire ?", question_en: "What is the final electron acceptor of the respiratory chain?", answer_fr: "L'oxygène (O2), réduit en eau.", answer_en: "Oxygen (O2), reduced to water." },
  { question_fr: "Combien de complexes protéiques composent la chaîne de transport des électrons proprement dite (hors ATP synthase) ?", question_en: "How many protein complexes make up the electron transport chain itself (excluding ATP synthase)?", answer_fr: "Quatre (complexes I à IV).", answer_en: "Four (complexes I to IV)." },
  { question_fr: "Quel complexe reçoit les électrons du NADH ?", question_en: "Which complex receives electrons from NADH?", answer_fr: "Le complexe I (NADH déshydrogénase).", answer_en: "Complex I (NADH dehydrogenase)." },
  { question_fr: "Quel complexe reçoit les électrons du FADH2 ?", question_en: "Which complex receives electrons from FADH2?", answer_fr: "Le complexe II (succinate déshydrogénase).", answer_en: "Complex II (succinate dehydrogenase)." },
  { question_fr: "Le complexe II pompe-t-il des protons ?", question_en: "Does complex II pump protons?", answer_fr: "Non, contrairement aux complexes I, III et IV.", answer_en: "No, unlike complexes I, III, and IV." },
  { question_fr: "Quel transporteur mobile liposoluble relie les complexes I/II au complexe III ?", question_en: "Which mobile lipid-soluble carrier links complexes I/II to complex III?", answer_fr: "L'ubiquinone (coenzyme Q).", answer_en: "Ubiquinone (coenzyme Q)." },
  { question_fr: "Quel transporteur mobile hydrosoluble relie le complexe III au complexe IV ?", question_en: "Which mobile water-soluble carrier links complex III to complex IV?", answer_fr: "Le cytochrome c.", answer_en: "Cytochrome c." },
  { question_fr: "Quel complexe réduit finalement l'oxygène en eau ?", question_en: "Which complex ultimately reduces oxygen to water?", answer_fr: "Le complexe IV (cytochrome c oxydase).", answer_en: "Complex IV (cytochrome c oxidase)." },
  { question_fr: "Quel complexe utilise le gradient de protons pour synthétiser de l'ATP ?", question_en: "Which complex uses the proton gradient to synthesize ATP?", answer_fr: "Le complexe V (ATP synthase).", answer_en: "Complex V (ATP synthase)." },
  { question_fr: "Quel est le nom du gradient électrochimique créé par le pompage de protons ?", question_en: "What is the name of the electrochemical gradient created by proton pumping?", answer_fr: "La force protomotrice.", answer_en: "The proton-motive force." },
  { question_fr: "Comment appelle-t-on le processus par lequel le gradient de protons entraîne la synthèse d'ATP ?", question_en: "What is the process by which the proton gradient drives ATP synthesis called?", answer_fr: "La chimiosmose.", answer_en: "Chemiosmosis." },
  { question_fr: "Quel nom donne-t-on à l'ensemble du processus couplant l'oxydation du NADH/FADH2 à la synthèse d'ATP ?", question_en: "What is the overall process coupling NADH/FADH2 oxidation to ATP synthesis called?", answer_fr: "La phosphorylation oxydative.", answer_en: "Oxidative phosphorylation." },
  { question_fr: "Environ combien d'ATP produit l'oxydation complète d'un NADH ?", question_en: "Approximately how many ATP does complete oxidation of one NADH produce?", answer_fr: "Environ 2,5 ATP.", answer_en: "About 2.5 ATP." },
  { question_fr: "Environ combien d'ATP produit l'oxydation complète d'un FADH2 ?", question_en: "Approximately how many ATP does complete oxidation of one FADH2 produce?", answer_fr: "Environ 1,5 ATP.", answer_en: "About 1.5 ATP." },
  { question_fr: "Pourquoi le rendement en ATP du FADH2 est-il inférieur à celui du NADH ?", question_en: "Why is the ATP yield from FADH2 lower than from NADH?", answer_fr: "Parce que ses électrons entrent au niveau du complexe II, contournant le pompage de protons réalisé par le complexe I.", answer_en: "Because its electrons enter at complex II, bypassing the proton pumping performed by complex I." },
  { question_fr: "Quel type de protéine dissipe le gradient de protons sous forme de chaleur plutôt que de le convertir en ATP ?", question_en: "What type of protein dissipates the proton gradient as heat instead of converting it to ATP?", answer_fr: "Les protéines découplantes (UCP), comme la thermogénine.", answer_en: "Uncoupling proteins (UCP), such as thermogenin." },
  { question_fr: "Dans quel tissu la thermogénine (UCP1) est-elle particulièrement exprimée ?", question_en: "In which tissue is thermogenin (UCP1) particularly expressed?", answer_fr: "Le tissu adipeux brun.", answer_en: "Brown adipose tissue." },
  { question_fr: "Comment appelle-t-on la production de chaleur via les UCP, sans contraction musculaire ?", question_en: "What is the production of heat via UCPs, without muscle contraction, called?", answer_fr: "La thermogenèse sans frisson.", answer_en: "Non-shivering thermogenesis." },
  { question_fr: "Quel inhibiteur bloque spécifiquement le complexe I ?", question_en: "Which inhibitor specifically blocks complex I?", answer_fr: "La roténone.", answer_en: "Rotenone." },
  { question_fr: "Quel inhibiteur bloque spécifiquement le complexe III ?", question_en: "Which inhibitor specifically blocks complex III?", answer_fr: "L'antimycine A.", answer_en: "Antimycin A." },
  { question_fr: "Quels inhibiteurs bloquent spécifiquement le complexe IV ?", question_en: "Which inhibitors specifically block complex IV?", answer_fr: "Le cyanure et le monoxyde de carbone.", answer_en: "Cyanide and carbon monoxide." },
  { question_fr: "Quel inhibiteur bloque spécifiquement l'ATP synthase (complexe V) ?", question_en: "Which inhibitor specifically blocks ATP synthase (complex V)?", answer_fr: "L'oligomycine.", answer_en: "Oligomycin." },
  { question_fr: "Qu'est-ce que le 2,4-dinitrophénol (DNP) ?", question_en: "What is 2,4-dinitrophenol (DNP)?", answer_fr: "Un découplant chimique qui dissipe directement le gradient de protons à travers la membrane, sans passer par l'ATP synthase.", answer_en: "A chemical uncoupler that directly dissipates the proton gradient across the membrane, bypassing ATP synthase." },
  { question_fr: "Pourquoi le DNP a-t-il été utilisé historiquement, et dangereusement, comme coupe-faim ?", question_en: "Why was DNP historically, and dangerously, used as an appetite suppressant?", answer_fr: "Parce qu'il augmente la consommation d'oxygène et la dépense énergétique sans production d'ATP correspondante, provoquant une perte de poids par dissipation de chaleur — au prix d'un risque d'hyperthermie mortelle.", answer_en: "Because it increases oxygen consumption and energy expenditure without corresponding ATP production, causing weight loss via heat dissipation — at the risk of fatal hyperthermia." },
  { question_fr: "Le cyanure inhibe la chaîne respiratoire à quel niveau ?", question_en: "At what level does cyanide inhibit the respiratory chain?", answer_fr: "Au niveau du complexe IV (cytochrome c oxydase), en se liant au fer de l'hème et bloquant la réduction de l'O2.", answer_en: "At complex IV (cytochrome c oxidase), by binding heme iron and blocking O2 reduction." },
  { question_fr: "Quelle est la conséquence globale d'une inhibition complète de la chaîne respiratoire ?", question_en: "What is the overall consequence of complete respiratory chain inhibition?", answer_fr: "L'arrêt de la production d'ATP par phosphorylation oxydative, forçant la cellule à dépendre uniquement de la glycolyse anaérobie, insuffisante à long terme.", answer_en: "A halt in ATP production via oxidative phosphorylation, forcing the cell to rely solely on anaerobic glycolysis, which is insufficient long-term." },
  { question_fr: "Le complexe I catalyse-t-il un pompage de protons plus important que le complexe II ?", question_en: "Does complex I pump more protons than complex II?", answer_fr: "Oui, le complexe I pompe des protons alors que le complexe II n'en pompe aucun.", answer_en: "Yes, complex I pumps protons while complex II pumps none." },
  { question_fr: "Pourquoi dit-on que l'ubiquinone et le cytochrome c sont des transporteurs « mobiles » ?", question_en: "Why are ubiquinone and cytochrome c called \"mobile\" carriers?", answer_fr: "Parce qu'ils diffusent librement dans (ubiquinone) ou le long de (cytochrome c) la membrane mitochondriale interne pour relier les complexes fixes entre eux.", answer_en: "Because they diffuse freely within (ubiquinone) or along (cytochrome c) the inner mitochondrial membrane to link the fixed complexes." },
  { question_fr: "L'ubiquinone est-elle liposoluble ou hydrosoluble ?", question_en: "Is ubiquinone lipid-soluble or water-soluble?", answer_fr: "Liposoluble, ce qui lui permet de diffuser dans la bicouche lipidique de la membrane.", answer_en: "Lipid-soluble, allowing it to diffuse within the membrane's lipid bilayer." },
  { question_fr: "Le cytochrome c est-il liposoluble ou hydrosoluble ?", question_en: "Is cytochrome c lipid-soluble or water-soluble?", answer_fr: "Hydrosoluble, il se déplace le long de la face externe de la membrane interne, dans l'espace intermembranaire.", answer_en: "Water-soluble; it moves along the outer face of the inner membrane, in the intermembrane space." },
  { question_fr: "Dans quel espace s'accumulent les protons pompés par les complexes I, III et IV ?", question_en: "In which space do the protons pumped by complexes I, III, and IV accumulate?", answer_fr: "L'espace intermembranaire.", answer_en: "The intermembrane space." },
  { question_fr: "Quel est le lien fonctionnel entre le cycle de Krebs et le complexe II de la chaîne respiratoire ?", question_en: "What is the functional link between the Krebs cycle and complex II of the respiratory chain?", answer_fr: "La succinate déshydrogénase, enzyme du cycle de Krebs qui produit le FADH2, constitue elle-même le complexe II de la chaîne respiratoire.", answer_en: "Succinate dehydrogenase, the Krebs cycle enzyme that produces FADH2, is itself complex II of the respiratory chain." },
  { question_fr: "Que se passe-t-il pour la production d'ATP si l'apport en oxygène est interrompu (anoxie) ?", question_en: "What happens to ATP production if oxygen supply is interrupted (anoxia)?", answer_fr: "La chaîne respiratoire s'arrête faute d'accepteur final d'électrons, bloquant la phosphorylation oxydative et forçant un recours à la glycolyse anaérobie.", answer_en: "The respiratory chain stops due to lack of a final electron acceptor, halting oxidative phosphorylation and forcing reliance on anaerobic glycolysis." },
  { question_fr: "Résumez en une phrase le principe général de la chaîne de transport des électrons.", question_en: "Summarize in one sentence the general principle of the electron transport chain.", answer_fr: "Elle transfère les électrons du NADH et du FADH2 à travers une série de complexes jusqu'à l'oxygène, couplant ce transfert au pompage de protons qui alimente ensuite l'ATP synthase.", answer_en: "It transfers electrons from NADH and FADH2 through a series of complexes to oxygen, coupling this transfer to proton pumping that then powers ATP synthase." },
];

const GLYCOGENESIS_COURSE = `# Glycogénogenèse

## 1. Vue d'ensemble
- La glycogénogenèse est la voie de synthèse du **glycogène**, la forme de réserve du glucose, principalement dans le **foie** et le **muscle squelettique**.
- Se déroule dans le **cytosol**.
- Stimulée par l'**insuline** (état nourri) ; inhibée par le **glucagon** et l'**adrénaline** (jeûne, stress, effort).

## 2. Les étapes de la synthèse
1. **Glucose → Glucose-6-phosphate** (hexokinase, ou glucokinase dans le foie).
2. **Glucose-6-phosphate → Glucose-1-phosphate**, catalysée par la **phosphoglucomutase**.
3. **Glucose-1-phosphate + UTP → UDP-glucose + PPi**, catalysée par l'**UDP-glucose pyrophosphorylase**. Réaction rendue irréversible par l'hydrolyse rapide et quasi-immédiate du pyrophosphate (PPi) par une pyrophosphatase, déplaçant l'équilibre.
4. **UDP-glucose + chaîne de glycogène → chaîne allongée (+1 résidu, liaison α1→4) + UDP**, catalysée par la **glycogène synthase**. C'est l'enzyme limitante et la plus régulée de la voie.
5. **Enzyme branchante** (amylo-(1,4→1,6)-transglycosylase) : transfère un segment d'environ 7 résidus depuis l'extrémité d'une chaîne linéaire vers une position plus interne, créant une liaison **α1→6** — ces branchements augmentent le nombre d'extrémités non réductrices, accélérant la synthèse et la dégradation ultérieures.

## 3. Le rôle amorceur de la glycogénine
- La glycogène synthase ne peut pas initier une nouvelle chaîne de novo : elle nécessite une amorce glucidique préexistante.
- La **glycogénine** est une protéine auto-glycosylante qui amorce la synthèse en fixant les premiers résidus de glucose sur l'un de ses propres résidus **tyrosine**, formant le cœur central autour duquel se construit la particule de glycogène.

## 4. Régulation de la glycogène synthase
- **Activée** par déphosphorylation : l'insuline stimule la protéine phosphatase 1 (PP1), qui déphosphoryle et active l'enzyme. Le **glucose-6-phosphate** est également un activateur allostérique direct.
- **Inhibée** par phosphorylation : le glucagon et l'adrénaline activent la PKA, et la **glycogène synthase kinase 3 (GSK3)** phosphoryle et inactive l'enzyme.
- Cette régulation est en miroir inversé de celle de la glycogène phosphorylase (enzyme de la glycogénolyse) : lorsque l'une est activée, l'autre est inhibée, évitant un cycle futile de synthèse/dégradation simultanées.

## 5. Importance clinique
- Les **glycogénoses** (maladies de surcharge en glycogène) regroupent plusieurs déficits enzymatiques touchant la synthèse ou la dégradation du glycogène (ex. maladie de von Gierke — déficit en glucose-6-phosphatase ; maladie de McArdle — déficit en glycogène phosphorylase musculaire).
- Un déficit en **glycogène synthase** (rare, de type 0) entraîne une hypoglycémie sévère à jeun, faute de réserve de glycogène hépatique mobilisable, associée souvent à une hyperglycémie postprandiale paradoxale.

## Points à retenir
- Voie : Glucose → G6P → G1P → UDP-glucose → glycogène (allongement par la glycogène synthase, branchements par l'enzyme branchante).
- La glycogénine amorce la synthèse en s'auto-glycosylant sur une tyrosine.
- Liaisons α1→4 (chaîne linéaire) et α1→6 (branchements, environ tous les 8 à 10 résidus).
- Régulation hormonale opposée à la glycogénolyse : l'insuline active la glycogène synthase, le glucagon/l'adrénaline l'inhibent.`;

export const GLYCOGENESIS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Glycogénogenèse",
    source_label: "Synthèse — Metabolism: Glycogenesis (Ninja Nerd)",
    content_fr: GLYCOGENESIS_COURSE,
  },
  qcm: [
    single("Dans quel compartiment cellulaire se déroule la glycogénogenèse ?", "B", "La glycogénogenèse se déroule dans le cytosol.", ["Dans la mitochondrie", "Dans le cytosol", "Dans le noyau", "Dans le réticulum endoplasmique"]),
    single("Quels sont les deux principaux tissus de stockage du glycogène ?", "A", "Le foie et le muscle squelettique sont les principaux tissus de stockage du glycogène.", ["Le foie et le muscle squelettique", "Le cerveau et le rein", "Le tissu adipeux et le cœur", "Les poumons et la rate"]),
    single("Quelle enzyme convertit le glucose-6-phosphate en glucose-1-phosphate ?", "C", "La phosphoglucomutase catalyse cette isomérisation.", ["L'hexokinase", "La glycogène synthase", "La phosphoglucomutase", "L'UDP-glucose pyrophosphorylase"]),
    single("Quel nucléotide activé est formé à partir du glucose-1-phosphate et de l'UTP ?", "D", "L'UDP-glucose pyrophosphorylase catalyse la formation d'UDP-glucose à partir de glucose-1-phosphate et d'UTP.", ["Le GDP-glucose", "Le CDP-glucose", "L'ADP-glucose", "L'UDP-glucose"]),
    single("Pourquoi la réaction formant l'UDP-glucose est-elle rendue irréversible ?", "A", "L'hydrolyse rapide et quasi-immédiate du pyrophosphate (PPi) libéré déplace l'équilibre de la réaction vers la formation d'UDP-glucose.", ["L'hydrolyse rapide du pyrophosphate (PPi) libéré déplace l'équilibre", "L'UTP est irréversiblement détruit", "Le glucose-1-phosphate est instable", "Cette réaction n'est en réalité pas irréversible"]),
    single("Quelle enzyme catalyse l'ajout de résidus glucose à la chaîne de glycogène en croissance ?", "B", "La glycogène synthase catalyse l'ajout de résidus glucose (liaison α1→4) à partir de l'UDP-glucose.", ["La phosphoglucomutase", "La glycogène synthase", "L'enzyme branchante", "La glycogène phosphorylase"]),
    single("Quelle enzyme crée les branchements (liaisons α1→6) du glycogène ?", "C", "L'enzyme branchante transfère un segment de chaîne vers une position plus interne, créant une liaison α1→6.", ["La glycogène synthase", "La phosphoglucomutase", "L'enzyme branchante", "L'UDP-glucose pyrophosphorylase"]),
    single("Quelle protéine amorce la synthèse d'une nouvelle chaîne de glycogène ?", "D", "La glycogénine s'auto-glycosyle sur un résidu tyrosine pour amorcer la synthèse, la glycogène synthase ne pouvant pas initier une chaîne de novo.", ["La glycogène synthase", "L'enzyme branchante", "La phosphoglucomutase", "La glycogénine"]),
    single("Sur quel acide aminé la glycogénine fixe-t-elle les premiers résidus de glucose ?", "A", "La glycogénine s'auto-glycosyle sur l'un de ses résidus tyrosine.", ["Une tyrosine", "Une sérine", "Une lysine", "Un aspartate"]),
    single("Quel est l'effet de l'insuline sur la glycogène synthase ?", "B", "L'insuline stimule la protéine phosphatase 1, qui déphosphoryle et active la glycogène synthase.", ["Elle l'inactive par phosphorylation", "Elle l'active par déphosphorylation", "Elle n'a aucun effet direct", "Elle dégrade l'enzyme"]),
    single("Quelle kinase, activée en réponse au glucagon/à l'adrénaline, inactive la glycogène synthase par phosphorylation ?", "C", "La glycogène synthase kinase 3 (GSK3), ainsi que la PKA, phosphorylent et inactivent la glycogène synthase.", ["La PFK-2", "La PDH kinase", "La glycogène synthase kinase 3 (GSK3)", "L'AMPK uniquement"]),
    single("Quel déficit enzymatique rare (glycogénose de type 0) provoque une hypoglycémie sévère à jeun ?", "A", "Un déficit en glycogène synthase empêche la constitution de réserves de glycogène hépatique, provoquant une hypoglycémie sévère à jeun.", ["Le déficit en glycogène synthase", "Le déficit en glycogène phosphorylase musculaire (McArdle)", "Le déficit en glucose-6-phosphatase (von Gierke)", "Le déficit en pyruvate kinase"]),
  ],
  exam: { titre_fr: "Examen chronométré — Glycogénogenèse", duration_seconds: 1_080 },
};

export const GLYCOGENESIS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Qu'est-ce que la glycogénogenèse ?", question_en: "What is glycogenesis?", answer_fr: "La voie de synthèse du glycogène à partir du glucose.", answer_en: "The pathway that synthesizes glycogen from glucose." },
  { question_fr: "Dans quel compartiment cellulaire se déroule la glycogénogenèse ?", question_en: "In which cellular compartment does glycogenesis take place?", answer_fr: "Dans le cytosol.", answer_en: "In the cytosol." },
  { question_fr: "Quels sont les deux principaux tissus de stockage du glycogène ?", question_en: "What are the two main glycogen storage tissues?", answer_fr: "Le foie et le muscle squelettique.", answer_en: "The liver and skeletal muscle." },
  { question_fr: "Quelle est la première étape de la glycogénogenèse ?", question_en: "What is the first step of glycogenesis?", answer_fr: "La phosphorylation du glucose en glucose-6-phosphate par l'hexokinase (ou la glucokinase dans le foie).", answer_en: "Phosphorylation of glucose into glucose-6-phosphate by hexokinase (or glucokinase in the liver)." },
  { question_fr: "Quelle enzyme convertit le glucose-6-phosphate en glucose-1-phosphate ?", question_en: "Which enzyme converts glucose-6-phosphate into glucose-1-phosphate?", answer_fr: "La phosphoglucomutase.", answer_en: "Phosphoglucomutase." },
  { question_fr: "Quels deux substrats réagissent pour former l'UDP-glucose ?", question_en: "Which two substrates react to form UDP-glucose?", answer_fr: "Le glucose-1-phosphate et l'UTP.", answer_en: "Glucose-1-phosphate and UTP." },
  { question_fr: "Quelle enzyme catalyse la formation de l'UDP-glucose ?", question_en: "Which enzyme catalyzes the formation of UDP-glucose?", answer_fr: "L'UDP-glucose pyrophosphorylase.", answer_en: "UDP-glucose pyrophosphorylase." },
  { question_fr: "Quel sous-produit est libéré lors de la formation de l'UDP-glucose ?", question_en: "What byproduct is released during UDP-glucose formation?", answer_fr: "Le pyrophosphate (PPi).", answer_en: "Pyrophosphate (PPi)." },
  { question_fr: "Pourquoi l'hydrolyse rapide du pyrophosphate rend-elle la réaction de l'UDP-glucose pyrophosphorylase irréversible ?", question_en: "Why does rapid pyrophosphate hydrolysis make the UDP-glucose pyrophosphorylase reaction irreversible?", answer_fr: "Elle élimine un des produits, déplaçant l'équilibre thermodynamique vers la formation d'UDP-glucose.", answer_en: "It removes one of the products, shifting the thermodynamic equilibrium toward UDP-glucose formation." },
  { question_fr: "Quelle enzyme allonge la chaîne de glycogène en ajoutant des résidus glucose ?", question_en: "Which enzyme elongates the glycogen chain by adding glucose residues?", answer_fr: "La glycogène synthase.", answer_en: "Glycogen synthase." },
  { question_fr: "Quel type de liaison la glycogène synthase forme-t-elle entre les résidus de glucose ?", question_en: "What type of bond does glycogen synthase form between glucose residues?", answer_fr: "Une liaison α1→4.", answer_en: "An alpha-1,4 bond." },
  { question_fr: "Quel est le donneur direct de résidus glucose pour la glycogène synthase ?", question_en: "What is the direct glucose residue donor for glycogen synthase?", answer_fr: "L'UDP-glucose.", answer_en: "UDP-glucose." },
  { question_fr: "Quelle enzyme est considérée comme l'étape limitante de la glycogénogenèse ?", question_en: "Which enzyme is considered the rate-limiting step of glycogenesis?", answer_fr: "La glycogène synthase.", answer_en: "Glycogen synthase." },
  { question_fr: "Quelle enzyme crée les branchements du glycogène ?", question_en: "Which enzyme creates glycogen branch points?", answer_fr: "L'enzyme branchante (amylo-(1,4→1,6)-transglycosylase).", answer_en: "The branching enzyme (amylo-(1,4→1,6)-transglycosylase)." },
  { question_fr: "Quel type de liaison caractérise un branchement du glycogène ?", question_en: "What type of bond characterizes a glycogen branch point?", answer_fr: "Une liaison α1→6.", answer_en: "An alpha-1,6 bond." },
  { question_fr: "Combien de résidus glucose l'enzyme branchante transfère-t-elle typiquement lors d'un branchement ?", question_en: "How many glucose residues does the branching enzyme typically transfer during branching?", answer_fr: "Environ 7 résidus.", answer_en: "About 7 residues." },
  { question_fr: "Pourquoi les branchements du glycogène sont-ils métaboliquement avantageux ?", question_en: "Why are glycogen branch points metabolically advantageous?", answer_fr: "Ils augmentent le nombre d'extrémités non réductrices, accélérant à la fois la synthèse et la dégradation ultérieure du glycogène.", answer_en: "They increase the number of non-reducing ends, speeding up both synthesis and later breakdown of glycogen." },
  { question_fr: "Pourquoi la glycogène synthase ne peut-elle pas initier une chaîne de glycogène de novo ?", question_en: "Why can't glycogen synthase initiate a new glycogen chain de novo?", answer_fr: "Parce qu'elle nécessite une amorce glucidique préexistante à laquelle ajouter des résidus.", answer_en: "Because it requires a pre-existing carbohydrate primer to which it can add residues." },
  { question_fr: "Quelle protéine amorce la synthèse d'une nouvelle chaîne de glycogène ?", question_en: "Which protein primes the synthesis of a new glycogen chain?", answer_fr: "La glycogénine.", answer_en: "Glycogenin." },
  { question_fr: "Comment la glycogénine amorce-t-elle la synthèse ?", question_en: "How does glycogenin prime the synthesis?", answer_fr: "En s'auto-glycosylant, c'est-à-dire en fixant elle-même les premiers résidus de glucose sur l'un de ses résidus tyrosine.", answer_en: "By self-glycosylating, i.e. attaching the first glucose residues onto one of its own tyrosine residues." },
  { question_fr: "Où se situe la glycogénine par rapport à la particule de glycogène finale ?", question_en: "Where is glycogenin located relative to the final glycogen particle?", answer_fr: "Au cœur central, autour duquel se construit toute la particule.", answer_en: "At the central core, around which the entire particle is built." },
  { question_fr: "Quel est l'effet de l'insuline sur l'activité de la glycogène synthase ?", question_en: "What is the effect of insulin on glycogen synthase activity?", answer_fr: "Elle l'active, via la stimulation de la protéine phosphatase 1 (PP1) qui la déphosphoryle.", answer_en: "It activates it, via stimulation of protein phosphatase 1 (PP1), which dephosphorylates it." },
  { question_fr: "Quel métabolite active allostériquement la glycogène synthase, indépendamment de son état de phosphorylation ?", question_en: "Which metabolite allosterically activates glycogen synthase, independent of its phosphorylation state?", answer_fr: "Le glucose-6-phosphate.", answer_en: "Glucose-6-phosphate." },
  { question_fr: "Quel est l'effet du glucagon et de l'adrénaline sur la glycogène synthase ?", question_en: "What is the effect of glucagon and adrenaline on glycogen synthase?", answer_fr: "Ils l'inactivent, via l'activation de la PKA qui la phosphoryle.", answer_en: "They inactivate it, via PKA activation, which phosphorylates it." },
  { question_fr: "Quelle kinase supplémentaire, indépendante de la PKA, phosphoryle et inactive la glycogène synthase ?", question_en: "Which additional kinase, independent of PKA, phosphorylates and inactivates glycogen synthase?", answer_fr: "La glycogène synthase kinase 3 (GSK3).", answer_en: "Glycogen synthase kinase 3 (GSK3)." },
  { question_fr: "Pourquoi la régulation de la glycogène synthase est-elle qualifiée de « miroir inversé » de celle de la glycogène phosphorylase ?", question_en: "Why is glycogen synthase regulation described as a \"mirror image\" of glycogen phosphorylase regulation?", answer_fr: "Parce que les mêmes hormones (insuline, glucagon) ont des effets opposés sur les deux enzymes, évitant qu'elles soient actives simultanément (cycle futile).", answer_en: "Because the same hormones (insulin, glucagon) have opposite effects on the two enzymes, preventing them from being active simultaneously (a futile cycle)." },
  { question_fr: "Qu'est-ce qu'un « cycle futile » que la régulation opposée synthase/phosphorylase permet d'éviter ?", question_en: "What is a \"futile cycle\" that opposite synthase/phosphorylase regulation helps avoid?", answer_fr: "Une situation où la synthèse et la dégradation du glycogène se dérouleraient simultanément, gaspillant de l'énergie sans bénéfice net.", answer_en: "A situation where glycogen synthesis and breakdown occur simultaneously, wasting energy with no net benefit." },
  { question_fr: "Qu'est-ce qu'une glycogénose ?", question_en: "What is a glycogen storage disease (glycogenosis)?", answer_fr: "Une maladie génétique de surcharge liée à un déficit enzymatique touchant la synthèse ou la dégradation du glycogène.", answer_en: "A genetic storage disease caused by an enzyme deficiency affecting glycogen synthesis or breakdown." },
  { question_fr: "Quelle enzyme est déficiente dans la maladie de von Gierke ?", question_en: "Which enzyme is deficient in von Gierke disease?", answer_fr: "La glucose-6-phosphatase.", answer_en: "Glucose-6-phosphatase." },
  { question_fr: "Quelle enzyme est déficiente dans la maladie de McArdle ?", question_en: "Which enzyme is deficient in McArdle disease?", answer_fr: "La glycogène phosphorylase musculaire.", answer_en: "Muscle glycogen phosphorylase." },
  { question_fr: "Quelle conséquence clinique résulte d'un déficit en glycogène synthase (glycogénose de type 0) ?", question_en: "What clinical consequence results from a glycogen synthase deficiency (type 0 glycogenosis)?", answer_fr: "Une hypoglycémie sévère à jeun, faute de réserve de glycogène hépatique mobilisable, avec parfois une hyperglycémie postprandiale.", answer_en: "Severe fasting hypoglycemia, due to lack of mobilizable hepatic glycogen reserve, sometimes with postprandial hyperglycemia." },
  { question_fr: "Le glycogène est-il une molécule ramifiée ou strictement linéaire ?", question_en: "Is glycogen a branched or strictly linear molecule?", answer_fr: "Ramifiée, grâce aux liaisons α1→6 introduites par l'enzyme branchante.", answer_en: "Branched, thanks to the alpha-1,6 bonds introduced by the branching enzyme." },
  { question_fr: "Quel avantage offre la forme très ramifiée du glycogène par rapport à une simple chaîne de glucose libre ?", question_en: "What advantage does the highly branched form of glycogen offer over free glucose?", answer_fr: "Elle permet un stockage compact et osmotiquement peu actif, avec de nombreuses extrémités mobilisables rapidement en cas de besoin énergétique.", answer_en: "It allows compact, osmotically inert storage, with many ends that can be quickly mobilized when energy is needed." },
  { question_fr: "Résumez en une phrase la voie de la glycogénogenèse.", question_en: "Summarize in one sentence the glycogenesis pathway.", answer_fr: "Le glucose est activé sous forme d'UDP-glucose puis ajouté à une chaîne de glycogène amorcée par la glycogénine, la glycogène synthase créant les liaisons α1→4 et l'enzyme branchante les liaisons α1→6, sous contrôle hormonal opposé à celui de la dégradation du glycogène.", answer_en: "Glucose is activated as UDP-glucose then added to a glycogen chain primed by glycogenin, with glycogen synthase creating alpha-1,4 bonds and the branching enzyme creating alpha-1,6 bonds, under hormonal control opposite to glycogen breakdown." },
];
