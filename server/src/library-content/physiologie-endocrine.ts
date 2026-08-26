import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const HYPOTHALAMUS_PITUITARY_THYROID_COURSE = `# Physiologie endocrinienne — Lecture 1 : hypothalamus endocrinien, hypophyse et thyroïde

## 1. L'hypothalamus endocrinien
- L'hypothalamus est une **aire intégrative** majeure pour les fonctions endocrines, métaboliques, végétatives et comportementales : il traite des stimuli nerveux (stress, émotions, odorat, goût, stimuli visuels, variation de température) et des composants plasmatiques, puis optimise la réponse vers les tissus cibles par voie nerveuse et humorale.
- **Axe hypothalamo-hypophysaire** : connexion avec le lobe antérieur (adénohypophyse, via le système porte hypophysaire) et le lobe postérieur (neurohypophyse, via transport axonal direct).
- **Quatre types de neurosécrétions hypothalamiques** :
  1. **Hormones de libération (RH/libérines) et d'inhibition (IH/statines)** : structure polypeptidique, contrôlent la sécrétion de l'adénohypophyse. Types : **TRH** (thyréolibérine), **CRH** (corticolibérine), **LRH/GnRH** (gonadolibérine), **GRH** (somatolibérine) + **GIH/somatostatine**, **PIH** (= dopamine, inhibe la prolactine).
  2. **Neurohormones de la posthypophyse (ADH et OXT)** : synthétisées dans les neurones magnocellulaires, transportées par voie axonale, stockées dans la posthypophyse.
  3. **Neurotransmetteurs** (noradrénaline — locus coeruleus, dopamine — substance noire, sérotonine — noyaux du raphé) : régulation locale de la fonction neuroendocrine.
  4. **Cybernines** : neuropeptides à rôle paracrine (endorphines, enképhalines — opiacés endogènes, analgésie ; α-MSH — lipolyse ; ACTH — rôle dans la mémoire et l'apprentissage).
- **Régulation des RH/IH** : mécanisme nerveux (surtout inhibiteur), **triple rétrocontrôle négatif** (long : hormone de la glande cible → sécrétion de RH et d'hormone tropique ; court : hormone tropique hypophysaire → sécrétion de RH ; ultra-court : RH → sa propre sécrétion), concentration plasmatique de certains substrats (acides aminés, glucose), cybernines, hormones épiphysaires.
- Une lésion hypothalamique induit une hypofonction de l'adénohypophyse, associée à une augmentation de la prolactine (perte du contrôle inhibiteur par la dopamine).

## 2. Hormone de croissance (GH/STH)
- Polypeptide synthétisé par l'adénohypophyse ; concentration élevée chez l'enfant (~60 ng/mL), ~25 % de cette valeur chez l'adulte (~5 ng/mL) ; rythme circadien, sécrétion maximale dans les 2 premières heures de sommeil.
- Action médiée par les **somatomédines (IGF, insulin-like growth factors)**, dont la synthèse hépatique est stimulée par la GH.
- **Rôles** :
  1. **Croissance et réparation tissulaire** : action directe sur toutes les cellules cibles ; sur le cartilage de croissance (nouvelle cartilage → transformation en os → longueur osseuse) ; sur les ostéoblastes (épaisseur osseuse, surtout os plats). Chez l'adulte, les cartilages de croissance étant fermés, la GH ne peut plus induire de croissance en longueur, mais peut augmenter l'épaisseur osseuse.
  2. **Métaboliques** : protéines (anabolisme, transport intracellulaire des AA) ; glucides (effet diabétogène à long terme par insulinorésistance, stimule la néoglucogenèse) ; lipides (lipolyse, cétogenèse hépatique) ; hydro-électrolytique (réabsorption de NaCl/eau, réabsorption de Ca²⁺/phosphore).
  3. Autres : activité métabolique hépatique, érythropoïèse, lactogenèse.
- **Régulation** : axe hypothalamo-hypophysaire (double contrôle GRH/GIH, rétrocontrôle négatif — mécanisme principal), stress/émotions/traumatismes, exercice physique, glycémie (rôle majeur en phase aiguë), protéinémie (jeûne, phase chronique), acides aminés, acides gras libres, neuromédiateurs hypothalamiques.
- **Pathologies** : déficit chez l'enfant → nanisme hypophysaire (développement cérébral normal) ; excès chez l'enfant → gigantisme ; excès chez l'adulte → acromégalie (cartilages fermés, épaississement osseux seulement, surtout os plats).

## 3. Prolactine (PRL)
- Polypeptide sécrété par l'adénohypophyse ; rythme circadien (maximum en début de sommeil) ; corrélée au cycle menstruel (pic simultané avec le pic de LH) ; métabolisme hépatique, demi-vie 20-30 min.
- **Rôles** (action directe sur les tissus cibles) :
  1. **Mammotrope** : développement de la glande mammaire (avec les hormones sexuelles), débute à la puberté sous l'effet des œstrogènes.
  2. **Lactotrope** : stimule la lactogenèse ; le colostrum initial (protéines, lactose, sans lipides) précède le lait mature ; la lactation dépend de la PRL et est entretenue par œstrogènes/progestérone.
  3. **Métabolique** : effet PRL → GH (via somatomédines), similaire aux cytokines et facteurs de croissance.
- **Régulation** : contrôle hypothalamique inhibiteur majeur (dopamine = PIH) ; mécanisme neurogène stimulateur (succion, stress, activité sexuelle) ; œstrogènes stimulent, progestérone inhibe.
- **Pathologie** : excès de PRL → galactorrhée, gynécomastie, inhibition rétroactive de GnRH → baisse de FSH/LH → hypofonction gonadique.

## 4. Hormones de la posthypophyse : ADH et ocytocine
### 4.1 ADH (vasopressine)
- Polypeptide de 9 acides aminés, synthétisé dans les noyaux supra-optique et paraventriculaire de l'hypothalamus antérieur, transporté par voie axonale, stocké dans la neurohypophyse.
- **Rôles rénaux** : agit sur le segment tubulaire distal/collecteur — réabsorption facultative d'eau (8-14 % du FG), réabsorption secondaire de Na⁺/Cl⁻, réabsorption de l'urée, contrôle du gradient cortico-papillaire, rôle majeur dans la concentration/dilution urinaire.
  - ADH ↑ → diurèse ↓ (0,5 L/jour), osmolarité urinaire ↑ (1200 mOsm/L) → volémie ↑.
  - ADH ↓ → diurèse ↑ (20 L/jour), osmolarité urinaire ↓ (50 mOsm/L) → volémie ↓.
- **Autres rôles** : vasoconstriction (↑ PA), réabsorption intestinale d'eau, hydratation cellulaire, rôle dans l'adaptation à la chaleur (avec l'aldostérone).
- **Régulation** : osmorécepteurs hypothalamiques (sensibilité à 1 % de variation d'osmolarité, valeur normale 300 ± 20 mOsm/L) ; barorécepteurs à haute pression (sinus carotidien, crosse aortique) et basse pression (oreillettes, circulation pulmonaire), sensibilité à 5 % de variation de volémie. Autres facteurs : température, angiotensine II (stimule), nicotine (stimule), éthanol (inhibe → diurèse ↑), stress/douleur (stimule).

### 4.2 Ocytocine (OXT)
- Synthèse et transport identiques à l'ADH ; stockage dans la posthypophyse.
- **Rôles** : contraction du muscle utérin (rôle majeur pendant le travail, parturition) ; éjection du lait par réflexe neurogène (succion du mamelon → OXT → contraction des cellules myoépithéliales → éjection en 30-60 s) ; réflexe conditionné (la mère voit son bébé → sécrétion de lait) ; rôles psychologiques (attachement social, comportement reproducteur) ; régulation des fonctions métaboliques (prise alimentaire, dépense énergétique).
- Pendant le travail, la boucle est auto-entretenue : la dilatation du col par la tête du fœtus stimule un réflexe neurogène → OXT → contraction utérine → dilatation accrue du col (rétrocontrôle positif).

## 5. Hormones thyroïdiennes (T3 et T4)
- La glande thyroïde, sous le larynx, a pour unité morpho-fonctionnelle le **follicule thyroïdien** ; sécrète T3/T4 (par les follicules) et la calcitonine (par les cellules C).
- **Biosynthèse** : nécessite l'iode (150 µg/jour) ; l'iode ingéré est capté à 1/5 par la thyroïde (le reste est excrété dans les urines) ; toutes les étapes de synthèse dépendent de la TSH ; iodation de la tyrosine sur la thyroglobuline.
- **T3 (triiodothyronine)** : 7 % du pool plasmatique, mais 4 fois plus active. **T4 (thyroxine)** : 93 % du pool ; convertie en T3 au niveau intracellulaire.
- **Mécanisme d'action** : T3/T4 traversent la membrane cellulaire, se fixent sur des récepteurs nucléaires spécifiques → transcription génique → synthèse d'ARNm → synthèse protéique → effets.
- **Rôles principaux** :
  1. **Croissance** : action directe et indirecte (via GH/somatomédines) ; effet majeur sur le développement osseux. Excès prolongé chez l'enfant → fermeture précoce des cartilages de croissance → arrêt de la croissance staturale malgré une accélération initiale.
  2. **Développement du système nerveux** (dès le 4e mois de grossesse) : neurogenèse, myélinisation, développement cortical. Déficit → nanisme et retard mental (crétinisme).
  3. **Activation du SNC adulte** : activité métabolique cérébrale, tonus cortical, intelligence/mémoire, réactivité motrice, stimulation du système sympathique.
  4. **Effets métaboliques** : protéique (équilibre azoté, catabolisme si excès) ; glucidique (absorption intestinale, néoglucogenèse, glycogénolyse ↑, risque de diabète secondaire) ; lipidique (lipolyse, mais [cholestérol] plasmatique ↑ si déficit → risque athérosclérotique) ; énergétique (couplage oxydation-phosphorylation, thermogenèse — rôle dans l'adaptation au froid).
  5. **Évaluation** : métabolisme basal (BMR), valeur normale 33-40 kcal/m²/h ; hypothyroïdie -60 à -30 % ; hyperthyroïdie +30 à +50 %.
  6. **Effet optimisateur sur la fonction sexuelle** ; corrélations avec catécholamines, insuline, PTH, cortisol et GH.
- **Pathologies** : **hyperthyroïdie** — Basedow-Graves (hyperactivité diffuse, TSH basse, souvent auto-immune) ou adénome toxique (hyperactivité localisée, TSH basse, non auto-immun). **Hypothyroïdie** — crétinisme chez l'enfant (nanisme + retard mental), myxœdème chez l'adulte, goitre endémique (hypertrophie glandulaire, TSH élevée).

## 6. Rôle et régulation de la TSH
- Synthétisée par l'adénohypophyse sous contrôle de la TRH ; mécanisme d'action via l'AMPc.
- Contrôle l'ensemble de l'activité thyroïdienne : métabolisme et irrigation de la glande, trophicité (nombre/taille des thyréocytes), captage actif de l'iode, iodation de la thyroglobuline, clivage et libération de T3/T4.
- **Régulation** : axe hypothalamo-hypophyso-thyroïdien à triple rétrocontrôle (mécanisme physiologique principal) ; stress/douleur/traumatisme/variations de température (via TRH) ; exposition au froid → ↑ T3/T4 (thermogenèse) ; exposition à la chaleur → ↓ T3/T4 ; action directe sur l'hypophyse (noradrénaline, œstrogènes ↑ TSH ; cybernines, somatostatine ↓ TSH).

## Points à retenir
- L'axe hypothalamo-hypophysaire fonctionne par triple rétrocontrôle négatif (long, court, ultra-court) pour chaque axe glandulaire.
- GH agit via les somatomédines (IGF) ; excès avant/après fermeture des cartilages = gigantisme/acromégalie ; déficit chez l'enfant = nanisme hypophysaire.
- ADH et OXT sont synthétisées dans l'hypothalamus antérieur et stockées dans la posthypophyse ; ADH régule la réabsorption d'eau rénale (osmorécepteurs 1 %, barorécepteurs 5 %) ; OXT régule la contraction utérine et l'éjection lactée.
- T4 (93 %, pool) est convertie en T3 (7 %, 4x plus active) au niveau tissulaire ; le BMR (33-40 kcal/m²/h) évalue la fonction thyroïdienne.`;

export const HYPOTHALAMUS_PITUITARY_THYROID_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Hypothalamus endocrinien, hypophyse et thyroïde",
    source_label: "Physiologie endocrinienne — Lecture 1",
    content_fr: HYPOTHALAMUS_PITUITARY_THYROID_COURSE,
  },
  qcm: [
    single("Quel est le rôle intégrateur principal de l'hypothalamus ?", "C", "L'hypothalamus intègre les stimuli nerveux et les composants plasmatiques pour optimiser la réponse endocrine, métabolique, végétative et comportementale.", ["Il sécrète directement la TSH", "Il stocke uniquement les hormones thyroïdiennes", "Il traite les stimuli nerveux et plasmatiques pour optimiser la réponse de l'organisme", "Il n'a aucun rôle dans la régulation endocrine"]),
    single("Par quelle voie l'hypothalamus est-il connecté à l'adénohypophyse ?", "B", "La connexion avec l'antéhypophyse se fait par le système porte hypophysaire (double capillarisation).", ["Par transport axonal direct", "Par le système porte hypophysaire", "Par diffusion passive dans le LCR", "Il n'existe aucune connexion directe"]),
    multi("Quelles sont les libérines (RH) hypothalamiques citées dans le cours ?", ["A", "B", "C"], "TRH, CRH, LRH (GnRH) et GRH sont les principales libérines ; GIH et PIH sont des hormones inhibitrices.", ["TRH", "CRH", "LRH (GnRH)", "GIH"]),
    single("Que représente le rétrocontrôle « ultra-court » de l'axe hypothalamo-hypophysaire ?", "A", "Le rétrocontrôle ultra-court correspond à l'inhibition de la sécrétion de RH par sa propre concentration.", ["L'inhibition de la sécrétion de RH par sa propre concentration", "L'inhibition de RH par l'hormone de la glande cible", "L'inhibition de RH par l'hormone tropique hypophysaire", "Il n'existe pas de rétrocontrôle ultra-court"]),
    single("Quel est l'effet d'une lésion hypothalamique sur la prolactine ?", "B", "Une lésion hypothalamique réduit le contrôle inhibiteur dopaminergique, augmentant la sécrétion de prolactine.", ["Elle diminue la prolactine", "Elle augmente la prolactine", "Elle n'a aucun effet sur la prolactine", "Elle bloque totalement la sécrétion hypophysaire"]),
    single("Sur quoi l'action de la GH repose-t-elle principalement pour la croissance tissulaire ?", "C", "L'action de la GH sur la croissance est corrélée aux somatomédines (IGF, insulin-like growth factors).", ["Directement sur la TSH", "Sur l'ADH uniquement", "Sur les somatomédines (IGF)", "Sur la calcitonine"]),
    single("Pourquoi la GH ne peut-elle plus induire de croissance en longueur chez l'adulte ?", "B", "Chez l'adulte, les cartilages de croissance sont fermés ; la GH peut encore augmenter l'épaisseur osseuse (surtout des os plats) mais pas la longueur.", ["Parce que la GH n'est plus sécrétée après la puberté", "Parce que les cartilages de croissance sont fermés", "Parce que les somatomédines disparaissent à l'âge adulte", "Parce que la GH devient toxique chez l'adulte"]),
    single("Quel est l'effet diabétogène de la GH à long terme ?", "A", "La GH induit une insulinorésistance à long terme, un effet diabétogène de type diabète sucré de type II.", ["Insulinorésistance et effet diabétogène de type II", "Hypoglycémie chronique", "Suppression totale de la sécrétion d'insuline", "Aucun effet métabolique glucidique"]),
    single("Quelle pathologie résulte d'un excès de GH avant la fermeture des cartilages de croissance ?", "B", "Le gigantisme résulte d'un excès de GH survenant avant la fermeture des cartilages de croissance, pendant l'enfance.", ["L'acromégalie", "Le gigantisme", "Le nanisme hypophysaire", "Le myxœdème"]),
    single("Quel est le principal mécanisme inhibiteur de la sécrétion de prolactine ?", "C", "Le contrôle hypothalamique inhibiteur par la dopamine (PIH) est le mécanisme principal de régulation de la prolactine.", ["La sécrétion de TRH", "L'ocytocine", "Le contrôle hypothalamique inhibiteur par la dopamine (PIH)", "La sécrétion de FSH"]),
    single("Quel est le rôle métabolique principal de la prolactine ?", "A", "PRL a un effet PRL → GH via les somatomédines, similaire aux cytokines et facteurs de croissance.", ["Stimuler indirectement les effets de type GH via les somatomédines", "Inhiber la lactogenèse", "Stimuler directement la GnRH", "Diminuer la sécrétion de dopamine"]),
    single("Où sont synthétisées l'ADH et l'ocytocine ?", "B", "Elles sont synthétisées dans les noyaux supra-optique et paraventriculaire de l'hypothalamus antérieur, puis transportées et stockées dans la posthypophyse.", ["Dans l'adénohypophyse", "Dans les noyaux supra-optique et paraventriculaire de l'hypothalamus", "Dans la thyroïde", "Dans le cortex surrénalien"]),
    single("Quel est l'effet global de l'ADH sur la diurèse et l'osmolarité urinaire lorsqu'elle est élevée ?", "C", "Une ADH élevée diminue la diurèse (0,5 L/jour) et augmente fortement l'osmolarité urinaire (1200 mOsm/L), préservant la volémie.", ["Diurèse augmentée, osmolarité urinaire basse", "Aucun effet sur la diurèse", "Diurèse diminuée, osmolarité urinaire élevée", "Diurèse et osmolarité urinaire inchangées"]),
    single("Quelle est la sensibilité des osmorécepteurs hypothalamiques aux variations d'osmolarité ?", "A", "Les osmorécepteurs détectent des variations d'osmolarité de seulement 1 %.", ["1 %", "5 %", "10 %", "25 %"]),
    single("Quelle est la sensibilité des barorécepteurs aux variations de volémie ?", "B", "Les barorécepteurs à haute et basse pression détectent des variations de volémie de l'ordre de 5 %.", ["1 %", "5 %", "15 %", "30 %"]),
    single("Quel est le rôle majeur de l'ocytocine pendant le travail obstétrical ?", "C", "L'OXT provoque la contraction du muscle utérin, essentielle à la parturition, via un rétrocontrôle positif avec la dilatation cervicale.", ["Elle inhibe les contractions utérines", "Elle stimule uniquement la lactation", "Elle provoque la contraction utérine par rétrocontrôle positif avec la dilatation cervicale", "Elle n'a aucun rôle pendant le travail"]),
    single("Quelle proportion de T3 et T4 circule dans le plasma, respectivement ?", "B", "T3 représente 7 % du pool plasmatique (mais 4x plus active), T4 représente 93 %.", ["T3 93 %, T4 7 %", "T3 7 %, T4 93 %", "T3 et T4 sont à parts égales (50/50)", "T3 100 %, T4 absente du plasma"]),
    single("Quelle est la valeur normale du métabolisme basal (BMR) ?", "C", "Le BMR normal est de 33 à 40 kcal/m²/h.", ["10-15 kcal/m²/h", "20-25 kcal/m²/h", "33-40 kcal/m²/h", "60-70 kcal/m²/h"]),
    single("Que caractérise la maladie de Basedow-Graves ?", "A", "Basedow-Graves se caractérise par une hyperactivité diffuse de la thyroïde, une TSH basse, souvent avec des modifications auto-immunes.", ["Hyperactivité diffuse, TSH basse, souvent auto-immune", "Hypoactivité diffuse, TSH élevée", "Adénome toxique localisé sans auto-immunité", "Goitre endémique par carence iodée"]),
    single("Quel est l'effet d'un excès prolongé d'hormones thyroïdiennes chez l'enfant sur la croissance staturale finale ?", "B", "Un excès de T3/T4 accélère initialement la croissance mais ferme prématurément les cartilages de croissance, réduisant la durée de croissance et la taille finale.", ["Elle augmente définitivement la taille finale", "Elle réduit la taille finale par fermeture précoce des cartilages de croissance", "Elle n'a aucun effet sur la croissance", "Elle retarde indéfiniment la puberté"]),
  ],
  exam: { titre_fr: "Examen chronométré — Hypophyse et thyroïde", duration_seconds: 1_600 },
};

export const HYPOTHALAMUS_PITUITARY_THYROID_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelles sont les 4 types de neurosécrétions hypothalamiques ?", question_en: "What are the 4 types of hypothalamic neurosecretions?", answer_fr: "RH/IH (libérines/statines), neurohormones ADH/OXT, neurotransmetteurs, cybernines.", answer_en: "RH/IH (liberins/statins), ADH/OXT neurohormones, neurotransmitters, cybernins." },
  { question_fr: "Que signifie TRH ?", question_en: "What does TRH stand for?", answer_fr: "Thyréolibérine (thyrotropin-releasing hormone), stimule la sécrétion de TSH.", answer_en: "Thyrotropin-releasing hormone, stimulates TSH secretion." },
  { question_fr: "Que signifie CRH ?", question_en: "What does CRH stand for?", answer_fr: "Corticolibérine (corticotropin-releasing hormone), stimule la sécrétion d'ACTH.", answer_en: "Corticotropin-releasing hormone, stimulates ACTH secretion." },
  { question_fr: "Quelle hormone hypothalamique inhibe la prolactine ?", question_en: "Which hypothalamic hormone inhibits prolactin?", answer_fr: "Le PIH, qui est en fait la dopamine.", answer_en: "PIH, which is actually dopamine." },
  { question_fr: "Qu'est-ce que le rétrocontrôle long dans un axe hypothalamo-hypophysaire ?", question_en: "What is the long feedback loop in a hypothalamic-pituitary axis?", answer_fr: "L'hormone de la glande cible inhibe la sécrétion de RH et de l'hormone tropique hypophysaire.", answer_en: "The target gland hormone inhibits RH and pituitary tropic hormone secretion." },
  { question_fr: "Où sont synthétisées les neurohormones ADH et OXT ?", question_en: "Where are ADH and OXT neurohormones synthesized?", answer_fr: "Dans l'hypothalamus antérieur (noyaux supra-optique et paraventriculaire), stockées dans la posthypophyse.", answer_en: "In the anterior hypothalamus (supraoptic and paraventricular nuclei), stored in the posterior pituitary." },
  { question_fr: "Que sont les cybernines et donnez un exemple.", question_en: "What are cybernins, and give an example.", answer_fr: "Des neuropeptides à rôle paracrine, ex. les endorphines/enképhalines (opiacés endogènes).", answer_en: "Neuropeptides with a paracrine role, e.g. endorphins/enkephalins (endogenous opiates)." },
  { question_fr: "Quel est le taux plasmatique de GH chez l'enfant vs l'adulte ?", question_en: "What is the plasma GH level in children vs adults?", answer_fr: "~60 ng/mL chez l'enfant, ~25 % de cette valeur (5 ng/mL) chez l'adulte.", answer_en: "~60 ng/mL in children, ~25% of that (5 ng/mL) in adults." },
  { question_fr: "Quand la sécrétion de GH est-elle maximale ?", question_en: "When is GH secretion maximal?", answer_fr: "Dans les 2 premières heures de sommeil (rythme circadien).", answer_en: "In the first 2 hours of sleep (circadian rhythm)." },
  { question_fr: "Par quels facteurs l'action de la GH sur la croissance est-elle médiée ?", question_en: "Through which factors is GH's growth action mediated?", answer_fr: "Les somatomédines (IGF, insulin-like growth factors).", answer_en: "Somatomedins (IGF, insulin-like growth factors)." },
  { question_fr: "Quel est l'effet de la GH sur les ostéoblastes ?", question_en: "What is GH's effect on osteoblasts?", answer_fr: "Elle les stimule, augmentant l'épaisseur osseuse, surtout dans les os plats.", answer_en: "It stimulates them, increasing bone thickness, especially in flat bones." },
  { question_fr: "Quelle pathologie résulte d'un déficit en GH chez l'enfant ?", question_en: "What condition results from GH deficiency in children?", answer_fr: "Le nanisme hypophysaire, avec un développement cérébral normal.", answer_en: "Pituitary dwarfism, with normal brain development." },
  { question_fr: "Quelle pathologie résulte d'un excès de GH chez l'adulte (cartilages fermés) ?", question_en: "What condition results from GH excess in adults (closed cartilages)?", answer_fr: "L'acromégalie.", answer_en: "Acromegaly." },
  { question_fr: "Quel est l'effet de la GH sur le métabolisme lipidique ?", question_en: "What is GH's effect on lipid metabolism?", answer_fr: "Lipolyse et cétogenèse hépatique, produisant de l'énergie tout en épargnant les protéines et le glucose.", answer_en: "Lipolysis and hepatic ketogenesis, producing energy while sparing proteins and glucose." },
  { question_fr: "Quels sont les 3 rôles principaux de la prolactine ?", question_en: "What are the 3 main roles of prolactin?", answer_fr: "Mammotrope, lactotrope, et métabolique (effet PRL → GH via somatomédines).", answer_en: "Mammotropic, lactotropic, and metabolic (PRL → GH-like effect via somatomedins)." },
  { question_fr: "Que contient le colostrum, contrairement au lait mature ?", question_en: "What does colostrum contain, unlike mature milk?", answer_fr: "Protéines et lactose, mais pas de lipides.", answer_en: "Proteins and lactose, but no lipids." },
  { question_fr: "Quel est le mécanisme stimulateur neurogène principal de la prolactine ?", question_en: "What is the main neurogenic stimulatory mechanism for prolactin?", answer_fr: "La succion du mamelon, transmise par les nerfs somatiques jusqu'à l'hypothalamus.", answer_en: "Nipple suckling, transmitted via somatic nerves to the hypothalamus." },
  { question_fr: "Quelle est la structure de l'ADH ?", question_en: "What is the structure of ADH?", answer_fr: "Un polypeptide de 9 acides aminés (vasopressine).", answer_en: "A 9-amino-acid polypeptide (vasopressin)." },
  { question_fr: "Sur quel segment tubulaire rénal l'ADH agit-elle ?", question_en: "On which renal tubular segment does ADH act?", answer_fr: "Le dernier segment tubulaire (tube distal et tube collecteur).", answer_en: "The last tubular segment (distal tubule and collecting duct)." },
  { question_fr: "Quelle fraction du débit de filtration glomérulaire l'ADH permet-elle de réabsorber en eau facultative ?", question_en: "What fraction of the glomerular filtration rate does ADH allow to be reabsorbed as facultative water?", answer_fr: "8 à 14 % du débit de filtration glomérulaire.", answer_en: "8 to 14% of the glomerular filtration rate." },
  { question_fr: "Quelle est l'osmolarité plasmatique normale (valeur de référence pour les osmorécepteurs) ?", question_en: "What is the normal plasma osmolarity (reference value for osmoreceptors)?", answer_fr: "300 ± 20 mOsm/L.", answer_en: "300 ± 20 mOsm/L." },
  { question_fr: "Quel est l'effet de l'éthanol sur la sécrétion d'ADH ?", question_en: "What is the effect of ethanol on ADH secretion?", answer_fr: "Il l'inhibe, augmentant la diurèse.", answer_en: "It inhibits it, increasing diuresis." },
  { question_fr: "Quels sont les deux rôles majeurs de l'ocytocine ?", question_en: "What are the two major roles of oxytocin?", answer_fr: "Contraction du muscle utérin (travail) et éjection du lait (réflexe neurogène de succion).", answer_en: "Uterine muscle contraction (labor) and milk ejection (neurogenic suckling reflex)." },
  { question_fr: "En combien de temps l'ocytocine déclenche-t-elle l'éjection du lait après la succion ?", question_en: "How long does it take oxytocin to trigger milk ejection after suckling?", answer_fr: "30 à 60 secondes.", answer_en: "30 to 60 seconds." },
  { question_fr: "Quelle est l'unité morpho-fonctionnelle de la thyroïde ?", question_en: "What is the thyroid's morpho-functional unit?", answer_fr: "Le follicule thyroïdien.", answer_en: "The thyroid follicle." },
  { question_fr: "Quel apport quotidien en iode est nécessaire à la synthèse thyroïdienne ?", question_en: "What daily iodine intake is required for thyroid synthesis?", answer_fr: "150 microgrammes par jour.", answer_en: "150 micrograms per day." },
  { question_fr: "Quelle proportion de T3 et T4 est présente dans le plasma ?", question_en: "What proportion of T3 and T4 is present in plasma?", answer_fr: "T3 : 7 % (mais 4x plus active) ; T4 : 93 %.", answer_en: "T3: 7% (but 4x more active); T4: 93%." },
  { question_fr: "Que devient la T4 au niveau intracellulaire ?", question_en: "What happens to T4 at the intracellular level?", answer_fr: "Elle est convertie en T3, la forme active.", answer_en: "It is converted into T3, the active form." },
  { question_fr: "Quel effet un excès de T3/T4 a-t-il sur le couplage oxydation-phosphorylation ?", question_en: "What effect does excess T3/T4 have on oxidation-phosphorylation coupling?", answer_fr: "Il découple l'oxydation de la phosphorylation, réduisant la synthèse d'ATP et augmentant la production de chaleur (intolérance à la chaleur).", answer_en: "It uncouples oxidation from phosphorylation, reducing ATP synthesis and increasing heat production (heat intolerance)." },
  { question_fr: "Quelle est la valeur normale du métabolisme basal (BMR) ?", question_en: "What is the normal basal metabolic rate (BMR)?", answer_fr: "33-40 kcal/m²/h.", answer_en: "33-40 kcal/m²/h." },
  { question_fr: "Comment le BMR varie-t-il en hyperthyroïdie et en hypothyroïdie ?", question_en: "How does BMR vary in hyperthyroidism and hypothyroidism?", answer_fr: "+30 à +50 % en hyperthyroïdie ; -60 à -30 % en hypothyroïdie.", answer_en: "+30 to +50% in hyperthyroidism; -60 to -30% in hypothyroidism." },
  { question_fr: "Quelle est la conséquence d'un déficit thyroïdien chez le fœtus/nouveau-né ?", question_en: "What is the consequence of thyroid deficiency in the fetus/newborn?", answer_fr: "Le crétinisme (nanisme et retard mental).", answer_en: "Cretinism (dwarfism and mental retardation)." },
  { question_fr: "Comment distingue-t-on Basedow-Graves d'un adénome toxique ?", question_en: "How is Basedow-Graves distinguished from a toxic adenoma?", answer_fr: "Basedow-Graves = hyperactivité diffuse avec souvent des changements auto-immuns ; adénome toxique = hyperactivité localisée sans auto-immunité.", answer_en: "Basedow-Graves = diffuse hyperactivity, often with autoimmune changes; toxic adenoma = localized hyperactivity without autoimmunity." },
  { question_fr: "Quel est le mécanisme d'action de la TSH sur la thyroïde ?", question_en: "What is TSH's mechanism of action on the thyroid?", answer_fr: "Via le second messager AMPc.", answer_en: "Via the second messenger cAMP." },
  { question_fr: "Quel est le mécanisme physiologique principal de régulation de la TSH ?", question_en: "What is the main physiological regulatory mechanism for TSH?", answer_fr: "L'axe hypothalamo-hypophyso-thyroïdien à triple rétrocontrôle négatif.", answer_en: "The hypothalamic-pituitary-thyroid axis with triple negative feedback." },
  { question_fr: "Quel est l'effet du froid sur la sécrétion de T3/T4 ?", question_en: "What is the effect of cold on T3/T4 secretion?", answer_fr: "Elle augmente, stimulant la thermogenèse.", answer_en: "It increases, stimulating thermogenesis." },
];

const ADRENAL_SEXUAL_HORMONES_COURSE = `# Physiologie endocrinienne — Lecture 2 : hormones surrénaliennes et sexuelles

## 1. Hormones glucocorticoïdes (GC)
- Synthèse dans la zone fasciculée du cortex surrénalien ; hormones stéroïdiennes principales : **cortisol** (hydrocortisone, 95 %) et **corticostérone**, sous contrôle de l'ACTH.
- **Mécanisme d'action** : le GC pénètre la cellule et se lie à un récepteur intracellulaire spécifique → complexe GC-récepteur agit sur le noyau (élément de réponse aux glucocorticoïdes, GRE) → stimulation ou inhibition de la transcription de l'ARNm → effet après 45-60 min (plus lent que les catécholamines, utilisées en urgence).
- **Effets métaboliques** :
  a) **Protéique** : à dose élevée, catabolisme protéique > anabolisme → bilan azoté négatif, mobilisation des AA extra-hépatiques ; au foie, capture d'AA pour la néoglucogenèse et la synthèse de protéines plasmatiques.
  b) **Glucidique** : ↑ glycémie via absorption intestinale, néoglucogenèse hépatique, glycogénolyse (adrénaline/glucagon), ↓ utilisation intracellulaire du glucose ; à long terme, ↓ sensibilité tissulaire à l'insuline → diabète secondaire (« diabète surrénalien »).
  c) **Lipidique** : lipolyse, cétogenèse hépatique, redistribution des graisses (lipolyse aux extrémités, dépôt facial/thoracique/abdominal — « visage lunaire »). En cas de stress/jeûne, les GC privilégient l'utilisation des lipides pour épargner le glucose.
  d) **Hydro-minérale** : rétention de NaCl et d'eau (fonction minéralocorticoïde résiduelle) → ↑ volémie, œdèmes (corticothérapie prolongée) ; déminéralisation osseuse (risque d'ostéoporose, de fractures, de nécrose de la tête fémorale).
- **Effets systémiques** : bon fonctionnement musculaire, activité cardiovasculaire (maintien de la volémie), réactivité neurologique, capacité fonctionnelle d'adaptation au stress.
- **Effets pharmacologiques** : anti-inflammatoire (stabilisation lysosomale, ↓ perméabilité capillaire, ↓ migration leucocytaire, suppression immunitaire) ; anti-allergique (prévient le choc anaphylactique, effet en 30 min) ; effets sur le sang (↑ érythrocytes, éosinophiles, lymphocytes) ; immunosuppression (susceptibilité aux infections) ; ↑ acidité gastrique (risque d'ulcère) ; ↑ volémie/PA ; redistribution graisseuse ; troubles psychologiques (jusqu'à la psychose maniaque) ; ostéoporose ; diabète secondaire ; hirsutisme/acné.
- **Régulation** : axe hypothalamo-hypophyso-surrénalien à triple rétrocontrôle (rôle majeur) ; l'ACTH a un rythme circadien (maximal le matin, minimal le soir), donc le cortisol suit ce même rythme. Stress psycho-émotionnel, douleur, traumatisme, hémorragie bloquent temporairement le rétrocontrôle → hyperfonction surrénalienne (continue en stress chronique, périodique avec exacerbations en stress aigu répété).

## 2. ACTH
- Synthèse : adénohypophyse, rythme circadien ; mécanisme d'action via l'AMPc.
- **Effets principaux sur le cortex surrénalien** : zone fasciculée (rôle majeur — libération immédiate de GC des réserves, puis hyperplasie + synthèse de GC) ; zone réticulée (rôle réduit — androgènes) ; zone glomérulée (rôle mineur — aldostérone). Autres effets : lipolyse, pigmentation cutanéo-muqueuse (synthèse de mélanine).

## 3. Hormones minéralocorticoïdes (aldostérone)
- Synthèse : zone glomérulée du cortex surrénalien ; composé principal = **aldostérone (ALDO)**, hormone stéroïdienne.
- **Rôle vital** : maintien de l'équilibre hydro-électrolytique, contrôle de la volémie et de la PA, équilibre Na⁺/K⁺ (« hormone de survie » — sa carence entraîne la mort par choc en 3 jours à 2 semaines).
- **Effets rénaux** (dernier tiers du tube distal et tube collecteur) : réabsorption de Na⁺ et sécrétion de K⁺ (perméabilité au pôle apical, activité de la pompe Na⁺/K⁺ au pôle basal), réabsorption passive de Cl⁻/HCO₃⁻, réabsorption secondaire d'eau, sécrétion de H⁺/NH₄⁺/Ca²⁺/Mg²⁺ → rôle dans le maintien de la PA, de la volémie et de l'équilibre acido-basique.
- **Effets extra-rénaux** : réabsorption de Na⁺/sécrétion de K⁺ dans les glandes sudoripares (épargne de NaCl, adaptation à la chaleur) et digestives.
- **Effets sur muscles et nerfs** : activité de la pompe Na⁺/K⁺ → Na⁺ intracellulaire ↓, K⁺ intracellulaire ↑.
- **Valeurs normales et pathologies** :
  | Paramètre | Normal | Hyperaldostéronisme (Conn) | Hypoaldostéronisme (Addison) |
  |---|---|---|---|
  | Na⁺ plasmatique | 136-145 mEq/L | légèrement ↑ | ↓ |
  | K⁺ plasmatique | 3,5-5 mEq/L | ↓ (hypotonie musculaire) | ↑ (toxicité cardiaque) |
  | Volémie | 5 L | ↑ (PA ↑) | ↓ (choc) |
  | pH sanguin | 7,35-7,45 | alcalose métabolique | acidose métabolique |
- **Régulation** : [K⁺] plasmatique ↑ → ALDO ↑ (excrétion de K⁺) ; [Na⁺] plasmatique ↓ → ALDO ↑ (réabsorption de Na⁺) ; système rénine-angiotensine-aldostérone (SRAA) — la rénine est libérée par l'appareil juxtaglomérulaire en réponse à ↓ PA/volémie/[Na⁺] à la macula densa et à l'activation sympathique ; l'ALDO est stimulée par l'angiotensine II et III ; rétrocontrôle négatif par ALDO et ANP ; effet mineur de l'ACTH.

## 4. Hormones de la médullosurrénale : catécholamines
- **Catécholamines** : adrénaline (A), noradrénaline (NA), dopamine ; synthétisées et stockées dans les cellules chromaffines à partir de la tyrosine, sous stimulation sympathique et des GC.
- **Métabolisme** : COMT → métanéphrine/normétanéphrine ; MAO → acide vanylmandélique (excrété dans les urines, 1-7 mg/mL, reflète la fonction médullosurrénalienne).
- **Effet rapide** (minutes) : adaptation au stress aigu.
- **Actions différentielles** : NA — action dominante cardiovasculaire, affinité α + β1/β3 ; A — action dominante sur le muscle lisse et le métabolisme, affinité α + β1/β2 ; dopamine — action cardiovasculaire (inotrope + résistance périphérique totale), récepteurs DA1 (excitateurs) et DA2 (inhibiteurs).
- **Récepteurs adrénergiques** :
  - **α1** (GPCR couplé à Gq → PLC → IP3/DAG) : contraction du muscle lisse vasculaire/utérin/pupillaire, glycogénolyse hépatique ; bloqué par la prazosine.
  - **α2** (GPCR couplé à Gi → ↓ AMPc) : contraction du muscle lisse (vaisseaux, intestin), ↓ transpiration ; bloqué par la yohimbine.
  - **β1** (GPCR couplé à Gs → ↑ AMPc) : prédomine au myocarde (inotrope/chronotrope +), glycogénolyse/néoglucogenèse hépatique, lipolyse adipocytaire ; bloqué par le propranolol (non sélectif) ou métoprolol/aténolol (sélectifs).
  - **β2** (GPCR couplé à Gs) : prédomine dans le muscle lisse → relaxation (coronaires, muscle squelettique, vaisseaux cérébraux : vasodilatation ; bronches : bronchodilatation ; utérus, intestin) ; forte affinité pour l'adrénaline, faible pour la noradrénaline ; bloqué par la butoxamine.
  - **β3** (GPCR couplé à Gs) : tissu adipeux (surtout brun) — thermogenèse, effet anti-obésité, anti-diabétique ; forte affinité pour la NA, faible pour l'A.
- **Régulation** : mécanisme nerveux (fibres sympathiques préganglionnaires, acétylcholine) — stimuli physiques (douleur, froid), chimiques (glycémie, O2), variations de PA (barorécepteurs) ; mécanisme humoral (cortisol stimule la synthèse, hormones thyroïdiennes ↑ le nombre de récepteurs adrénergiques) ; rétrocontrôle négatif.

## 5. Bases de la différenciation sexuelle
- 46 chromosomes (22 paires d'autosomes + 1 paire de chromosomes sexuels) ; femme XX, homme XY. Le chromosome Y porte le **gène SRY** (Sex-Determining Region Y), déclenchant le développement testiculaire ; en son absence, les gonades embryonnaires deviennent des ovaires par défaut.
- Le gène SRY code pour le facteur déterminant testiculaire (TDF), qui transforme les gonades embryonnaires en testicules, lesquels sécrètent la testostérone.

## 6. Hormones gonadotropes (FSH, LH)
- Glycoprotéines synthétisées par l'adénohypophyse ; début de sécrétion 8-12 ans (filles), 9-13 ans (garçons), à la puberté ; action via l'AMPc.
- **Chez l'homme** : sécrétion constante. FSH stimule le développement des testicules/tubes séminifères et initie la spermatogenèse (avec la testostérone), stimule les cellules de Sertoli (rétrocontrôle négatif sur GnRH). LH stimule les cellules de Leydig interstitielles → sécrétion de testostérone.
- **Chez la femme** : sécrétion cyclique. FSH stimule le développement folliculaire (1 follicule/mois, phase folliculaire) et les cellules de la granulosa (→ œstrogènes). LH contrôle la maturation folliculaire finale → ovulation (jour 14), puis développement du corps jaune → sécrétion de progestérone/œstrogènes ; pic pré-ovulatoire de LH 10x, FSH 2-3x.
- **Cycle menstruel** : durée moyenne 28 jours (20-45 jours) ; deux résultats principaux — libération d'un ovule par mois, préparation de l'endomètre pour l'implantation.
- **Régulation** : axe hypothalamo-hypophyso-gonadique à triple rétrocontrôle ; le cortisol et la PRL sont inhibiteurs ; le stress (via le système limbique) inhibe la GnRH ; stimuli olfactifs/visuels/génitaux modulent la sécrétion. Les contraceptifs oraux inhibent l'ovulation en supprimant le pic pré-ovulatoire de LH.

## 7. Testostérone
- Sécrétée par les cellules de Leydig (testostérone, dihydrotestostérone — la plus active —, androstènedione) ; les cellules de Sertoli sécrètent œstrogènes (spermatogenèse) et inhibine (régulation de FSH).
- Débute in utero (7e semaine, stimulée par l'hCG placentaire), quasi nulle durant l'enfance, reprend à la puberté.
- **Rôles in utero** : développement des organes génitaux masculins, suppression du développement des organes génitaux féminins, descente testiculaire (2-3 derniers mois).
- **Rôles après la puberté** : caractères sexuels primaires (organes sexuels, spermatogenèse avec FSH) et secondaires (épaisseur/résistance osseuse, forme du bassin masculin, fermeture des cartilages de croissance, masse musculaire +50 %, voix grave, pilosité masculine), maintien de la libido.
- **Régulation** : axe hypothalamo-hypophyso-gonadique, triple rétrocontrôle négatif ; stress inhibe GnRH ; cortisol/PRL inhibiteurs.
- **Anomalies** : absence in utero → organes génitaux féminins se forment par défaut ; inactivité testiculaire prépubertaire → eunuchisme ; castration adulte → régression partielle des caractères secondaires.

## 8. Œstrogènes et progestérone
- **Œstrogènes** : hormones stéroïdiennes, sécrétées en phase pré-ovulatoire par le follicule ovarien, en phase post-ovulatoire (moins) par le corps jaune ; « hormone féminine » — développement des caractères sexuels primaires/secondaires. Rôles : développement utérus/organes génitaux externes (prolifération endométriale, activité ciliaire des trompes, changement épithélial vaginal) ; développement mammaire (stroma, système canalaire) ; peau (douceur, vascularisation) ; squelette (croissance rapide mais fermeture plus précoce des cartilages — taille finale plus petite que chez le garçon ; ostéoporose post-ménopause) ; effets métaboliques modérés ; mémoire/santé mentale ; libido ; effet protecteur anti-athérosclérotique.
- **Progestérone** : « hormone de la maternité », synthétisée en phase post-ovulatoire par le corps jaune, puis par le placenta pendant la grossesse (x10). Rôles : modifications sécrétoires de l'endomètre (préparation à l'implantation, « lait utérin ») ; ↓ contractilité/excitabilité du myomètre (prévient l'expulsion du zygote) ; modifications sécrétoires tubaires ; développement final des lobules/acini mammaires (avec la PRL).

## Points à retenir
- Les glucocorticoïdes (cortisol 95 %) ont un effet retardé (45-60 min) via transcription génique, contrairement aux catécholamines (effet immédiat) — d'où leur rôle dans l'adaptation au stress chronique et non au choc aigu.
- L'aldostérone est vitale (mort en 3 jours à 2 semaines si absente) ; sa régulation principale passe par le SRAA et la kaliémie.
- Les 5 types de récepteurs adrénergiques (α1, α2, β1, β2, β3) ont des affinités et des effets tissulaires distincts, base de la pharmacologie cardiovasculaire.
- Le gène SRY sur le chromosome Y détermine le développement testiculaire ; en son absence, le développement féminin se fait par défaut.
- FSH/LH ont une sécrétion constante chez l'homme et cyclique chez la femme (cycle de 28 jours), régies par l'axe hypothalamo-hypophyso-gonadique.`;

export const ADRENAL_SEXUAL_HORMONES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Hormones surrénaliennes et sexuelles",
    source_label: "Physiologie endocrinienne — Lecture 2",
    content_fr: ADRENAL_SEXUAL_HORMONES_COURSE,
  },
  qcm: [
    single("Où sont synthétisés les glucocorticoïdes ?", "B", "Les glucocorticoïdes (cortisol, corticostérone) sont synthétisés dans la zone fasciculée du cortex surrénalien.", ["Zone glomérulée", "Zone fasciculée", "Zone réticulée", "Médullosurrénale"]),
    single("Pourquoi l'effet des glucocorticoïdes apparaît-il plus lentement que celui de l'adrénaline ?", "A", "Le mécanisme d'action passe par la liaison à un récepteur intracellulaire puis la transcription génique, ce qui prend 45-60 min, contrairement à l'action immédiate de l'adrénaline.", ["Il passe par la transcription génique (45-60 min)", "Il est bloqué par l'ACTH", "Il nécessite une activation rénale préalable", "Les glucocorticoïdes n'ont en réalité aucun effet métabolique"]),
    single("Quel est l'effet net des GC sur le bilan azoté à dose élevée ?", "C", "À dose élevée, le catabolisme protéique dépasse l'anabolisme, entraînant un bilan azoté négatif.", ["Bilan azoté fortement positif", "Aucun effet sur le bilan azoté", "Bilan azoté négatif", "Bilan azoté nul par définition"]),
    single("Quel est le mécanisme du « diabète surrénalien » induit par les GC ?", "B", "À long terme, les GC diminuent la sensibilité tissulaire à l'insuline, provoquant un diabète secondaire.", ["Destruction directe des cellules bêta pancréatiques", "Diminution de la sensibilité tissulaire à l'insuline à long terme", "Blocage total de la sécrétion d'insuline", "Absence d'effet sur le métabolisme glucidique"]),
    single("Qu'est-ce qui caractérise le « visage lunaire » (full moon face) sous corticothérapie ?", "A", "La redistribution des graisses : lipolyse aux extrémités et dépôt facial/thoracique/abdominal.", ["Une redistribution des graisses avec dépôt facial et lipolyse aux extrémités", "Une hypertrophie musculaire du visage", "Une accumulation d'eau exclusivement périorbitaire sans lien lipidique", "Un effet indépendant du métabolisme lipidique"]),
    single("Quel est le rythme de sécrétion de l'ACTH et donc du cortisol ?", "C", "Rythme circadien, maximal le matin et minimal le soir.", ["Constant sur 24h", "Maximal le soir, minimal le matin", "Maximal le matin, minimal le soir", "Aléatoire sans rythme précis"]),
    single("Sur quelle zone corticosurrénalienne l'ACTH a-t-elle le rôle le plus important ?", "A", "L'ACTH a un rôle majeur sur la zone fasciculée (libération puis synthèse de GC).", ["Zone fasciculée", "Zone glomérulée", "Zone réticulée uniquement", "Médullosurrénale"]),
    single("Pourquoi l'aldostérone est-elle qualifiée d'« hormone de survie » ?", "B", "Son absence entraîne la mort par choc en 3 jours à 2 semaines, en raison de la perte du contrôle hydro-électrolytique et de la volémie.", ["Elle n'a aucun rôle vital réel", "Son absence entraîne la mort par choc en 3 jours à 2 semaines", "Elle est uniquement impliquée dans la croissance", "Elle remplace totalement le cortisol en cas de déficit"]),
    multi("Quels sont les effets rénaux de l'aldostérone ?", ["A", "B"], "L'aldostérone stimule la réabsorption de Na+ et la sécrétion de K+ au niveau du tube distal et collecteur, avec réabsorption secondaire d'eau.", ["Réabsorption de Na+", "Sécrétion de K+", "Sécrétion de Na+", "Réabsorption de K+"]),
    single("Quelle anomalie électrolytique caractérise la maladie d'Addison (hypoaldostéronisme) ?", "B", "L'hypoaldostéronisme entraîne une hyperkaliémie (toxicité cardiaque) et une hyponatrémie relative, avec acidose métabolique.", ["Hypokaliémie et alcalose métabolique", "Hyperkaliémie et acidose métabolique", "Natrémie normale sans changement du pH", "Hypercalcémie isolée"]),
    single("Quel système hormonal est le principal stimulateur de l'aldostérone ?", "C", "Le système rénine-angiotensine-aldostérone (SRAA), via l'angiotensine II/III.", ["L'axe thyréotrope", "L'ACTH exclusivement", "Le système rénine-angiotensine-aldostérone (SRAA)", "La calcitonine"]),
    single("Quelle enzyme métabolise les catécholamines en acide vanylmandélique urinaire ?", "B", "La MAO (monoamine oxydase) produit l'acide vanylmandélique, excrété dans les urines et reflétant la fonction médullosurrénalienne.", ["La COMT uniquement", "La MAO", "L'anhydrase carbonique", "La tyrosine hydroxylase"]),
    single("Quel récepteur adrénergique prédomine au niveau du myocarde avec effet inotrope/chronotrope positif ?", "A", "Le récepteur β1, couplé à Gs, stimule l'adénylate cyclase (↑ AMPc) et prédomine au myocarde.", ["β1", "β2", "α1", "α2"], ),
    single("Quel récepteur adrénergique est responsable de la bronchodilatation ?", "C", "Le récepteur β2, présent dans le muscle lisse bronchique, induit une relaxation (bronchodilatation).", ["α1", "β1", "β2", "α2"]),
    single("Quel récepteur adrénergique est principalement impliqué dans la thermogenèse du tissu adipeux brun ?", "D", "Le récepteur β3, situé dans le tissu adipeux (surtout brun), a un effet thermogénique, anti-obésité et anti-diabétique.", ["α1", "α2", "β2", "β3"]),
    single("Quel gène du chromosome Y déclenche le développement testiculaire ?", "B", "Le gène SRY (Sex-Determining Region Y) code pour le facteur déterminant testiculaire (TDF).", ["Le gène TDF directement sans intermédiaire", "Le gène SRY", "Le gène FSH", "Le gène GnRH"]),
    single("Chez l'homme, quelle cellule sécrète la testostérone sous l'effet de la LH ?", "A", "Les cellules de Leydig interstitielles sécrètent la testostérone sous stimulation de la LH.", ["Les cellules de Leydig", "Les cellules de Sertoli", "Les cellules de la granulosa", "Les cellules chromaffines"]),
    single("À quel jour du cycle survient l'ovulation, sous l'effet du pic de LH ?", "C", "L'ovulation survient au jour 14 du cycle, après le pic pré-ovulatoire de LH.", ["Jour 1", "Jour 7", "Jour 14", "Jour 28"]),
    single("Quelle est la durée moyenne du cycle menstruel ?", "B", "28 jours, avec une plage normale de 20 à 45 jours.", ["14 jours", "28 jours", "35 jours fixes", "45 jours fixes"]),
    single("Quel est le principal rôle de la progestérone sur le myomètre pendant la grossesse ?", "A", "La progestérone diminue la contractilité et l'excitabilité du myomètre, prévenant l'expulsion du zygote.", ["Diminuer la contractilité et l'excitabilité utérines", "Augmenter fortement les contractions utérines", "Stimuler la sécrétion de FSH", "Inhiber le développement de l'endomètre"]),
  ],
  exam: { titre_fr: "Examen chronométré — Hormones surrénaliennes et sexuelles", duration_seconds: 1_600 },
};

export const ADRENAL_SEXUAL_HORMONES_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel est le principal glucocorticoïde humain ?", question_en: "What is the main human glucocorticoid?", answer_fr: "Le cortisol (hydrocortisone), 95 % des glucocorticoïdes circulants.", answer_en: "Cortisol (hydrocortisone), 95% of circulating glucocorticoids." },
  { question_fr: "Quel est le délai d'action des glucocorticoïdes ?", question_en: "What is the onset of action of glucocorticoids?", answer_fr: "45 à 60 minutes (action génomique via transcription).", answer_en: "45 to 60 minutes (genomic action via transcription)." },
  { question_fr: "Quel est l'effet des GC sur le métabolisme protéique à dose élevée ?", question_en: "What is the effect of GC on protein metabolism at high doses?", answer_fr: "Catabolisme protéique supérieur à l'anabolisme, bilan azoté négatif.", answer_en: "Protein catabolism exceeding anabolism, negative nitrogen balance." },
  { question_fr: "Quel est l'effet à long terme des GC sur la sensibilité à l'insuline ?", question_en: "What is the long-term effect of GC on insulin sensitivity?", answer_fr: "Elle diminue, pouvant provoquer un diabète secondaire (« diabète surrénalien »).", answer_en: "It decreases, potentially causing secondary diabetes (\"adrenal diabetes\")." },
  { question_fr: "Quel est l'effet anti-inflammatoire des GC ?", question_en: "What is the anti-inflammatory effect of GC?", answer_fr: "Stabilisation des membranes lysosomales, diminution de la perméabilité capillaire et de la migration leucocytaire, suppression immunitaire.", answer_en: "Lysosomal membrane stabilization, decreased capillary permeability and leukocyte migration, immune suppression." },
  { question_fr: "Combien de temps après un choc anaphylactique l'effet anti-allergique des GC apparaît-il ?", question_en: "How long after anaphylactic shock does the anti-allergic effect of GC appear?", answer_fr: "Environ 30 minutes.", answer_en: "About 30 minutes." },
  { question_fr: "Quel est le rythme de sécrétion de l'ACTH ?", question_en: "What is the secretion rhythm of ACTH?", answer_fr: "Circadien : maximal le matin, minimal le soir.", answer_en: "Circadian: maximal in the morning, minimal in the evening." },
  { question_fr: "Sur quelle zone corticosurrénalienne l'ACTH a-t-elle un rôle mineur ?", question_en: "On which adrenocortical zone does ACTH have a minor role?", answer_fr: "La zone glomérulée (libération d'aldostérone).", answer_en: "The zona glomerulosa (aldosterone release)." },
  { question_fr: "Où est synthétisée l'aldostérone ?", question_en: "Where is aldosterone synthesized?", answer_fr: "Dans la zone glomérulée du cortex surrénalien.", answer_en: "In the zona glomerulosa of the adrenal cortex." },
  { question_fr: "En combien de temps la mort survient-elle en l'absence totale d'aldostérone ?", question_en: "How long until death occurs with total absence of aldosterone?", answer_fr: "3 jours à 2 semaines (choc).", answer_en: "3 days to 2 weeks (shock)." },
  { question_fr: "Quelle est la valeur normale de la natrémie ?", question_en: "What is the normal value for plasma sodium?", answer_fr: "136-145 mEq/L.", answer_en: "136-145 mEq/L." },
  { question_fr: "Quelle est la valeur normale de la kaliémie ?", question_en: "What is the normal value for plasma potassium?", answer_fr: "3,5-5 mEq/L.", answer_en: "3.5-5 mEq/L." },
  { question_fr: "Quel appareil libère la rénine et sous quels stimuli ?", question_en: "Which apparatus releases renin and under what stimuli?", answer_fr: "L'appareil juxtaglomérulaire, en réponse à une baisse de PA, de volémie, de [Na+] à la macula densa, ou à l'activation sympathique.", answer_en: "The juxtaglomerular apparatus, in response to decreased BP, volemia, [Na+] at the macula densa, or sympathetic activation." },
  { question_fr: "Quelles sont les 3 catécholamines principales ?", question_en: "What are the 3 main catecholamines?", answer_fr: "Adrénaline, noradrénaline, dopamine.", answer_en: "Adrenaline, noradrenaline, dopamine." },
  { question_fr: "Où sont synthétisées et stockées les catécholamines ?", question_en: "Where are catecholamines synthesized and stored?", answer_fr: "Dans les cellules chromaffines (phéochromocytes) de la médullosurrénale.", answer_en: "In the chromaffin cells (pheochromocytes) of the adrenal medulla." },
  { question_fr: "Quel métabolite urinaire des catécholamines reflète la fonction médullosurrénalienne ?", question_en: "Which urinary catecholamine metabolite reflects adrenal medulla function?", answer_fr: "L'acide vanylmandélique (produit par la MAO).", answer_en: "Vanillylmandelic acid (produced by MAO)." },
  { question_fr: "Quelle hormone a une action cardiovasculaire dominante entre A et NA ?", question_en: "Which hormone has dominant cardiovascular action between A and NA?", answer_fr: "La noradrénaline (NA).", answer_en: "Noradrenaline (NA)." },
  { question_fr: "Quel second messager est mobilisé par les récepteurs α1-adrénergiques ?", question_en: "Which second messenger is mobilized by α1-adrenergic receptors?", answer_fr: "IP3 et DAG, via l'activation de la phospholipase C (couplage Gq).", answer_en: "IP3 and DAG, via phospholipase C activation (Gq coupling)." },
  { question_fr: "Quel effet ont les récepteurs β2 sur les bronches ?", question_en: "What effect do β2 receptors have on the bronchi?", answer_fr: "Bronchodilatation.", answer_en: "Bronchodilation." },
  { question_fr: "Quel type de tissu adipeux exprime principalement les récepteurs β3 ?", question_en: "Which type of adipose tissue mainly expresses β3 receptors?", answer_fr: "Le tissu adipeux brun (rôle thermogénique).", answer_en: "Brown adipose tissue (thermogenic role)." },
  { question_fr: "Quel gène sur le chromosome Y détermine le développement testiculaire ?", question_en: "Which gene on the Y chromosome determines testicular development?", answer_fr: "Le gène SRY.", answer_en: "The SRY gene." },
  { question_fr: "Que deviennent les gonades embryonnaires en l'absence de la protéine TDF ?", question_en: "What do embryonic gonads become in the absence of TDF protein?", answer_fr: "Des ovaires (développement féminin par défaut).", answer_en: "Ovaries (default female development)." },
  { question_fr: "Chez l'homme, quelle cellule initie la spermatogenèse sous l'effet de la FSH ?", question_en: "In men, which cell initiates spermatogenesis under FSH?", answer_fr: "Les cellules de Sertoli (avec la testostérone).", answer_en: "Sertoli cells (with testosterone)." },
  { question_fr: "Chez la femme, quel rapport LH/FSH caractérise la phase pré-ovulatoire ?", question_en: "In women, what LH/FSH ratio characterizes the pre-ovulatory phase?", answer_fr: "LH augmente 2-3x plus que FSH (LH >> FSH).", answer_en: "LH increases 2-3x more than FSH (LH >> FSH)." },
  { question_fr: "Quand débute la sécrétion de testostérone fœtale et sous quel stimulus ?", question_en: "When does fetal testosterone secretion begin and under what stimulus?", answer_fr: "À la 7e semaine in utero, stimulée par l'hCG placentaire.", answer_en: "At week 7 in utero, stimulated by placental hCG." },
  { question_fr: "Quelle hormone testiculaire est la plus active biologiquement ?", question_en: "Which testicular hormone is the most biologically active?", answer_fr: "La dihydrotestostérone.", answer_en: "Dihydrotestosterone." },
  { question_fr: "Quel est l'effet de la testostérone sur la masse musculaire ?", question_en: "What is testosterone's effect on muscle mass?", answer_fr: "Elle augmente la masse musculaire d'environ 50 % par rapport à la femme.", answer_en: "It increases muscle mass by about 50% compared to women." },
  { question_fr: "Quel est le rôle des œstrogènes sur l'endomètre ?", question_en: "What is estrogen's role on the endometrium?", answer_fr: "Prolifération endométriale (première partie du cycle ovarien).", answer_en: "Endometrial proliferation (first part of the ovarian cycle)." },
  { question_fr: "Pourquoi les filles finissent-elles généralement plus petites que les garçons malgré une croissance initiale plus rapide sous œstrogènes ?", question_en: "Why do girls generally end up shorter than boys despite faster initial growth under estrogen?", answer_fr: "Les œstrogènes ferment plus précocement les cartilages de croissance.", answer_en: "Estrogens close the growth cartilages earlier." },
  { question_fr: "Où est synthétisée la progestérone après l'ovulation ?", question_en: "Where is progesterone synthesized after ovulation?", answer_fr: "Par le corps jaune (puis par le placenta pendant la grossesse, x10).", answer_en: "By the corpus luteum (then by the placenta during pregnancy, x10)." },
];

const PANCREAS_BONE_CALCIUM_COURSE = `# Physiologie endocrinienne — Lecture 3 : pancréas endocrine, physiologie osseuse et homéostasie phosphocalcique

## 1. Pancréas endocrine
- Les îlots de Langerhans sécrètent : cellules α → **glucagon** ; cellules β → **insuline** ; cellules δ → **somatostatine** (polypeptide pancréatique).

### 1.1 Insuline
- Polypeptide sécrété par les cellules β ; concentration plasmatique variable selon la glycémie, maximale après les repas.
- **Mécanisme d'action** : liaison à un récepteur membranaire spécifique → activation d'une tyrosine kinase intracellulaire → activation des mécanismes d'action intracellulaires → 1) perméabilité membranaire au glucose, aux AA, aux ions K⁺/phosphate ; 2) synthèse intracellulaire de glycogène/protéines/lipides ; 3) expression de gènes de facteurs de croissance.
- **Rôles principaux** (« hormone de l'abondance ») :
  1. Transport intracellulaire du glucose → ↓ glycémie ; dans la cellule : glycolyse (énergie), glycogénogenèse (stockage hépatique/musculaire), ↓ néoglucogenèse, ↓ glycogénolyse, lipogenèse (excès de glucose → lipides stockés dans les adipocytes).
  2. Transport intracellulaire des AA → synthèse et protection protéiques.
  3. Lipogenèse → stockage dans le tissu adipeux.
  4. Stimule la croissance (synergique avec la GH).
- **Types tissulaires selon la dépendance à l'insuline** : tissus insulino-indépendants (le glucose passe même sans insuline — tissu nerveux) ; tissus insulino-dépendants (le glucose n'est utilisé qu'en présence d'insuline — muscle, tissu adipeux) ; tissu hépatique (insulino-indépendant pour le passage du glucose, mais l'insuline en module le métabolisme).
- **Régulation de la sécrétion** :
  1. **Glycémie** (rétrocontrôle négatif principal) : glycémie > 110 mg/dL → libération immédiate de l'insuline stockée, puis synthèse ; glycémie < 110 mg/dL → ↓ insuline.
  2. **Hormones gastro-intestinales** (gastrine, sécrétine, CCK, GIP) → ↑ insuline ; base du test de tolérance au glucose oral (OGTT), qui stimule l'insuline par la glycémie ET les hormones digestives (stimulation maximale, supérieure à une administration IV de glucose).
  3. Autres glucides : le fructose stimule, le galactose/xylose n'ont aucun effet.
  4. AA (arginine, lysine) → ↑ insuline (transport intracellulaire des AA).
  5. Corps cétoniques → ↑ insuline.
  6. Hormones hyperglycémiantes (GH, GC, T3) → ↑ glycémie → ↑ insuline (secondaire).
  7. Parasympathique (vague) → ↑ insuline ; sympathique (récepteurs α) → ↓ insuline.
  8. Glucagon → ↑ insuline ; somatostatine → ↓ insuline.
  9. Adipocytes : AGL → ↓ sécrétion d'insuline ; adipokines (adiponectine, leptine, TNF) régulent la sensibilité à l'insuline, la prise alimentaire et la dépense énergétique.
- **Pathologies** : ↓ insuline → hyperglycémie → diabète sucré (primaire/secondaire) ; ↑ insuline (ex. insulinome) → hypoglycémie.

### 1.2 Glucagon
- Polypeptide sécrété par les cellules α ; mécanisme d'action via l'AMPc.
- **Effets** : 1) ↑ glycémie par glycogénolyse hépatique (effet principal) et néoglucogenèse (à partir des AA), maintenant la glycémie constante entre les repas ; 2) lipolyse → énergie + production de chaleur ; 3) cétogenèse hépatique ; 4) catabolisme protéique ; 5) effet inotrope positif ; 6) ↑ sécrétion acide gastrique ; 7) ↑ sécrétion de GH, insuline, somatostatine.
- **Régulation** : dépendante du statut nutritionnel et de la sécrétion d'insuline. Glycémie ↓ → glucagon ↑ (et inversement, rétrocontrôle négatif) ; sympathique (récepteurs β) → ↑ glucagon (important à l'exercice) ; apport de protéines/AA → ↑ glucagon → gluconéogenèse ; jeûne → ↑ glucagon (maintien de la glycémie) ; gastrine → ↓ glucagon (rétrocontrôle négatif) ; somatostatine et insuline → ↓ glucagon.

## 2. Physiologie osseuse
### 2.1 Composants de l'os
- **Système non cellulaire** : composant organique (30 % — substance fondamentale + fibres de collagène le long des lignes de tension) et composant anorganique (70 % — cristaux d'hydroxyapatite fortement liés au collagène, donnant la résistance osseuse, + Mg²⁺, Na⁺, K⁺, HCO₃⁻).
- **Système cellulaire** :
  - **Ostéoblastes** : dérivés de cellules souches mésenchymateuses, formation osseuse permanente, situés en surface externe et dans les cavités osseuses.
  - **Ostéoclastes** : dérivés des monocytes/cellules souches hématopoïétiques, multinucléés, rôle phagocytaire — sécrètent des enzymes (digestion de la matrice) et des acides (destruction des cristaux, libération d'ions) ; résorption osseuse cyclique (remodelage, turnover) ; actifs dans la formation du cal osseux après fracture ; après résorption, ils se divisent en « ostéomorphes » pouvant reformer des ostéoclastes (recyclage).
  - **Ostéocytes** : riches en sels de Ca²⁺, contrôlent l'équilibre calcique avec le milieu extracellulaire (pompe à Ca²⁺).

### 2.2 Processus physiologiques
- **Calcification osseuse** : sécrétion de collagène et de substance fondamentale par les ostéoblastes → polymérisation du collagène en fibres → formation de l'ostéoïde → transformation des ostéoblastes captés en ostéocytes → précipitation des sels de Ca²⁺ en surface des fibres de collagène → cristaux d'hydroxyapatite (jours à semaines).
- **Résorption osseuse** (5 phases) : 1) activation (migration de pré-ostéoclastes mononucléés, fusion en ostéoclastes multinucléés) ; 2) résorption (résorption limitée des minéraux et de la matrice) ; 3) réversion (dépôt d'une « cement line » riche en glycoprotéines, préparant la surface pour les ostéoblastes) ; 4) formation osseuse (dépôt successif de couches d'ostéoblastes) ; 5) repos (surface couverte d'ostéoblastes plats peu actifs, jusqu'au cycle suivant).
- **Pathologies** : rachitisme (chez l'enfant, déficit en Ca/phosphate, déficit en vitamine D → défaut de minéralisation) ; ostéoporose (excès d'ostéolyse — PTH, cortisol, ménopause, âge) ; ostéosclérose (excès d'ostéogenèse — PTH, intoxication aux métaux lourds).

### 2.3 Équilibre calcium-phosphate
- Apport quotidien : 1 g/jour de calcium et de phosphate. Absorption intestinale : Ca²⁺ ~35 % (contrôlée par CTL et PTH, le reste éliminé dans les fèces) ; phosphate facilement absorbé. Réabsorption rénale : Ca²⁺ filtré réabsorbé à 95 % (contrôlé par PTH/CTL) ; excès de phosphate excrété (contrôlé par PTH).
- **Calcium** : 99 % dans les os/dents (réservoir, composant fixe libéré par ostéolyse) ; 0,1 % dans le plasma (10 ± 1 mg %), dont 40 % lié aux protéines (non diffusible), 50 % ionique (rôle dans la coagulation, la contraction musculaire, l'excitabilité), 10 % non ionique lié aux anions ; 1 % intracellulaire.
- **Phosphate total** : 4 mg % ; 85 % dans l'os, 1 % extracellulaire, 14 % intracellulaire ; système tampon phosphate alcalin/acide (1,3 mM/L) dans le plasma.

## 3. Hormones de l'homéostasie phosphocalcique
### 3.1 Parathormone (PTH)
- Synthèse : 4 glandes parathyroïdes, rétro-thyroïdiennes ; structure polypeptidique.
- **Effet principal : ↑ calcémie**, via 3 sites : os (mobilisation Ca²⁺/phosphate → déminéralisation osseuse) ; rein (réabsorption de Ca²⁺/Mg²⁺/H⁺, excrétion de phosphate, inhibition de l'anhydrase carbonique → pH acide maintenant le Ca²⁺, stimulation de la synthèse de CTL) ; intestin (absorption de Ca²⁺, avec la CTL).
- **Régulation** : [Ca²⁺] plasmatique joue le rôle principal (rétrocontrôle négatif — ↓ Ca²⁺ → ↑ PTH ; ↑ Ca²⁺ → ↓ PTH) ; même mécanisme pour le Mg²⁺ ; les catécholamines stimulent également.
- **Pathologies** : hyperparathyroïdie (primaire ou secondaire à l'insuffisance rénale) → déminéralisation osseuse, ↑ calcémie, hypercalciurie (risque de calculs rénaux) ; hypoparathyroïdie → ↓ calcémie, ↓ phosphatémie, hyperexcitabilité neuromusculaire (signes de Chvostek et Trousseau positifs, tracé EMG spécifique en doublets/triplets).

### 3.2 Calcitonine
- Sécrétée par les cellules C de la glande thyroïde.
- **Effets principaux** : ↓ calcémie, ostéogenèse, inhibition de l'ostéolyse. Importance accrue chez l'enfant (stimulation de l'ostéogenèse), pendant la grossesse et l'allaitement (protection contre l'ostéolyse maternelle), recommandée pour prévenir l'ostéolyse chez les personnes âgées ostéoporotiques et dans les cancers avec métastases ostéolytiques.
- **Régulation** : rétrocontrôle négatif dépendant de la calcémie (↑ Ca²⁺ → ↑ calcitonine) ; les catécholamines et la gastrine stimulent également la sécrétion.

### 3.3 Calcitriol (CTL, forme active de la vitamine D)
- Synthèse : cholestérol cutané (sous UV) ou apport alimentaire → vitamine D inactive → 2 hydroxylations activatrices (foie, puis rein, sous contrôle de la PTH) → calcitriol actif.
- **Rôles principaux** : maintien de la calcémie et ostéogenèse.
  - Au niveau osseux, l'effet du CTL dépend de la calcémie : si normale, action synergique avec la calcitonine (minéralisation) ; si basse, action similaire à la PTH (déminéralisation, libération de Ca²⁺/phosphate).
  - Intestin : absorption active de Ca²⁺ (rôle principal, avec la PTH).
  - Rein : réabsorption de Ca²⁺/phosphate.
  - Système immunitaire : différenciation des cellules immunitaires ; effet anti-prolifératif/anti-angiogénique dans le microenvironnement péritumoral.
- **Régulation** : la PTH joue le rôle majeur (stimule la synthèse), la calcitonine stimule également ; la [Ca²⁺] agit indirectement via la PTH ; rétrocontrôle négatif — le CTL inhibe sa propre activation.

### 3.4 Autres hormones impliquées dans le métabolisme phosphocalcique
- **GH** : synthèse protéique osseuse (via IGF-1), absorption active de Ca²⁺, ↑ calcémie ; hormone anabolique stimulant la croissance longitudinale.
- **Hormones thyroïdiennes** : chondrogenèse et récupération osseuse, nécessaires à la croissance ; pathologiquement, un excès augmente la résorption osseuse ostéoclastique (ostéoporose).
- **Insuline** : ostéogenèse.
- **Hormones sexuelles** (œstrogènes, testostérone) : maintien de l'équilibre osseux, régulation des taux de formation/résorption, fermeture des cartilages de croissance ; la baisse des œstrogènes après la ménopause → résorption osseuse ↑ → ostéoporose.
- **Cortisol** : ↓ absorption intestinale de Ca²⁺, inhibe la formation osseuse, ↑ résorption osseuse, ↑ excrétion rénale de Ca²⁺, ↓ production des stéroïdes sexuels → mobilisation de Ca²⁺ osseux, ostéoporose et ostéolyse en excès.

## Points à retenir
- L'insuline (hormone de l'abondance) est hypoglycémiante, anabolisante (glucides, protéines, lipides) et synergique avec la GH pour la croissance ; le glucagon est son antagoniste physiologique, hyperglycémiant.
- Le seuil glycémique de 110 mg/dL régule à la fois la sécrétion d'insuline (stimulée au-dessus) et de glucagon (stimulé en dessous).
- Le remodelage osseux (ostéoblastes/ostéoclastes) suit un cycle en 5 phases : activation, résorption, réversion, formation, repos.
- PTH augmente la calcémie (os, rein, intestin) ; calcitonine la diminue (inhibition de l'ostéolyse) ; calcitriol maintient la calcémie et stimule l'ostéogenèse, avec un effet osseux dépendant du contexte calcémique.
- 99 % du calcium corporel est stocké dans l'os ; seul 0,1 % circule dans le plasma, dont 50 % sous forme ionique physiologiquement active.`;

export const PANCREAS_BONE_CALCIUM_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Pancréas endocrine et homéostasie phosphocalcique",
    source_label: "Physiologie endocrinienne — Lecture 3",
    content_fr: PANCREAS_BONE_CALCIUM_COURSE,
  },
  qcm: [
    single("Quelles cellules des îlots de Langerhans sécrètent l'insuline ?", "B", "Les cellules β des îlots de Langerhans sécrètent l'insuline.", ["Les cellules α", "Les cellules β", "Les cellules δ", "Les cellules C"]),
    single("Quel est le mécanisme d'action intracellulaire de l'insuline après liaison à son récepteur ?", "C", "L'insuline active une tyrosine kinase intracellulaire, déclenchant les mécanismes d'action (perméabilité membranaire, synthèse intracellulaire, expression génique).", ["Activation directe de l'adénylate cyclase", "Ouverture de canaux calciques voltage-dépendants", "Activation d'une tyrosine kinase intracellulaire", "Inhibition de la phospholipase C"]),
    single("Pourquoi l'insuline est-elle appelée « hormone de l'abondance » ?", "A", "Elle stimule le stockage du glucose, des acides aminés et des lipides, favorisant l'anabolisme après les repas.", ["Elle stimule le stockage du glucose, des AA et des lipides après les repas", "Elle stimule exclusivement la lipolyse", "Elle inhibe toute synthèse protéique", "Elle n'agit que pendant le jeûne"]),
    single("Quel tissu est insulino-indépendant pour le passage du glucose ?", "B", "Le tissu nerveux est insulino-indépendant : le glucose y pénètre même en l'absence d'insuline.", ["Le tissu musculaire", "Le tissu nerveux", "Le tissu adipeux", "Le tissu hépatique uniquement en cas d'hyperglycémie"]),
    single("Au-dessus de quel seuil glycémique la sécrétion d'insuline est-elle stimulée ?", "C", "Au-delà de 110 mg/dL, l'insuline stockée est libérée immédiatement, puis sa synthèse augmente.", ["70 mg/dL", "90 mg/dL", "110 mg/dL", "180 mg/dL"]),
    single("Pourquoi le test de tolérance au glucose oral (OGTT) stimule-t-il davantage l'insuline qu'une perfusion IV de glucose ?", "B", "L'OGTT stimule l'insuline par deux mécanismes combinés : l'hyperglycémie ET les hormones gastro-intestinales (gastrine, sécrétine, CCK, GIP).", ["Parce que le glucose oral est mieux absorbé physiquement", "Parce qu'il combine l'effet de la glycémie et des hormones gastro-intestinales", "Parce que la voie IV inhibe totalement l'insuline", "Il n'y a en réalité aucune différence"]),
    single("Quel est l'effet du système parasympathique (vague) sur la sécrétion d'insuline ?", "A", "Le parasympathique (vague) stimule la sécrétion d'insuline.", ["Il la stimule", "Il l'inhibe", "Il n'a aucun effet", "Il agit uniquement sur le glucagon"]),
    single("Quel est l'effet principal du glucagon sur la glycémie et par quel mécanisme majeur ?", "C", "Le glucagon augmente la glycémie principalement par la glycogénolyse hépatique, et aussi par la néoglucogenèse.", ["Il diminue la glycémie par glycogénogenèse", "Il n'a aucun effet sur la glycémie", "Il augmente la glycémie principalement par glycogénolyse hépatique", "Il agit uniquement sur le tissu adipeux"]),
    single("Quel est le rôle des ostéoclastes dans le tissu osseux ?", "B", "Les ostéoclastes assurent la résorption osseuse cyclique (remodelage), avec un rôle phagocytaire et de libération d'ions.", ["Formation osseuse permanente", "Résorption osseuse cyclique (remodelage)", "Contrôle exclusif de l'équilibre calcique intracellulaire", "Synthèse de collagène uniquement"]),
    single("D'où dérivent les ostéoclastes ?", "A", "Les ostéoclastes dérivent des monocytes et des cellules souches hématopoïétiques.", ["Des monocytes et cellules souches hématopoïétiques", "Des cellules souches mésenchymateuses", "Des chondrocytes", "Des fibroblastes dermiques"]),
    single("Quelles sont, dans l'ordre, les 5 phases du remodelage osseux ostéoclastique ?", "D", "Activation, résorption, réversion, formation osseuse, repos.", ["Résorption, activation, repos, formation, réversion", "Formation, résorption, activation, réversion, repos", "Réversion, formation, repos, activation, résorption", "Activation, résorption, réversion, formation osseuse, repos"]),
    single("Quelle est la composition anorganique de l'os et son rôle ?", "B", "70 % de la matrice osseuse est composée de cristaux d'hydroxyapatite, fortement liés au collagène, donnant la résistance mécanique de l'os.", ["30 %, rôle négligeable", "70 %, donnant la résistance mécanique", "100 %, sans composant organique", "50 %, uniquement composée de collagène"]),
    single("Quel pourcentage du calcium corporel total se trouve dans les os et les dents ?", "C", "99 % du calcium corporel constitue le réservoir osseux/dentaire.", ["50 %", "75 %", "99 %", "10 %"]),
    single("Quelle fraction du calcium plasmatique est sous forme ionique (physiologiquement active) ?", "B", "Environ 50 % du calcium plasmatique est sous forme ionique, impliqué dans la coagulation, la contraction musculaire et l'excitabilité.", ["10 %", "50 %", "90 %", "100 %"]),
    single("Où est synthétisée la parathormone (PTH) ?", "A", "Par les 4 glandes parathyroïdes, situées en position rétro-thyroïdienne.", ["Les glandes parathyroïdes", "Les cellules C de la thyroïde", "Le cortex surrénalien", "Le pancréas endocrine"]),
    single("Quel est l'effet principal de la PTH sur la calcémie ?", "C", "La PTH augmente la calcémie, via une action osseuse (déminéralisation), rénale (réabsorption de Ca2+) et intestinale (absorption de Ca2+).", ["Elle diminue la calcémie", "Elle n'a aucun effet direct sur la calcémie", "Elle augmente la calcémie via l'os, le rein et l'intestin", "Elle agit uniquement sur le phosphate, jamais sur le calcium"]),
    single("Quels signes cliniques évoquent une hypoparathyroïdie sévère ?", "B", "L'hypoparathyroïdie provoque une hyperexcitabilité neuromusculaire, avec signes de Chvostek et Trousseau positifs.", ["Signes de Chvostek et Trousseau négatifs, hypotonie", "Signes de Chvostek et Trousseau positifs, hyperexcitabilité neuromusculaire", "Hypercalcémie sévère avec coma", "Aucun signe clinique caractéristique"]),
    single("Où est sécrétée la calcitonine et quel est son effet principal ?", "A", "La calcitonine est sécrétée par les cellules C thyroïdiennes ; elle diminue la calcémie en stimulant l'ostéogenèse et en inhibant l'ostéolyse.", ["Cellules C thyroïdiennes, diminue la calcémie", "Glandes parathyroïdes, augmente la calcémie", "Cortex surrénalien, aucun effet calcique", "Pancréas, augmente la glycémie"]),
    single("Comment le calcitriol (vitamine D active) est-il synthétisé à partir du cholestérol cutané ?", "D", "Le cholestérol cutané est transformé en vitamine D inactive sous l'effet des UV, puis activé par deux hydroxylations successives (foie, puis rein sous contrôle de la PTH).", ["Une seule hydroxylation rénale suffit", "Directement actif sans transformation", "Par hydroxylation exclusivement hépatique", "Par deux hydroxylations successives (foie puis rein)"]),
    single("Quel est l'effet de la ménopause sur l'équilibre osseux, et par quel mécanisme ?", "B", "La baisse des œstrogènes après la ménopause augmente la résorption osseuse, favorisant l'ostéoporose.", ["Aucun effet, les œstrogènes n'influencent pas l'os", "La baisse des œstrogènes augmente la résorption osseuse (ostéoporose)", "La ménopause stimule uniquement l'ostéogenèse", "L'effet est identique chez l'homme et la femme"]),
  ],
  exam: { titre_fr: "Examen chronométré — Pancréas et homéostasie phosphocalcique", duration_seconds: 1_600 },
};

export const PANCREAS_BONE_CALCIUM_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelles hormones sécrètent les cellules α et β des îlots de Langerhans ?", question_en: "Which hormones do the α and β cells of the islets of Langerhans secrete?", answer_fr: "Cellules α : glucagon ; cellules β : insuline.", answer_en: "α cells: glucagon; β cells: insulin." },
  { question_fr: "Quel type de kinase est activé par le récepteur de l'insuline ?", question_en: "What type of kinase is activated by the insulin receptor?", answer_fr: "Une tyrosine kinase intracellulaire.", answer_en: "An intracellular tyrosine kinase." },
  { question_fr: "Quels sont les 4 rôles principaux de l'insuline ?", question_en: "What are the 4 main roles of insulin?", answer_fr: "Transport IC du glucose, transport IC des AA (synthèse protéique), lipogenèse, stimulation de la croissance (avec GH).", answer_en: "IC glucose transport, IC AA transport (protein synthesis), lipogenesis, growth stimulation (with GH)." },
  { question_fr: "Citez un tissu insulino-dépendant et un tissu insulino-indépendant.", question_en: "Name one insulin-dependent tissue and one insulin-independent tissue.", answer_fr: "Insulino-dépendant : muscle (et tissu adipeux) ; insulino-indépendant : tissu nerveux.", answer_en: "Insulin-dependent: muscle (and adipose tissue); insulin-independent: nervous tissue." },
  { question_fr: "Quel seuil glycémique déclenche la libération d'insuline stockée ?", question_en: "What glycemic threshold triggers the release of stored insulin?", answer_fr: "Glycémie > 110 mg/dL.", answer_en: "Blood glucose > 110 mg/dL." },
  { question_fr: "Quelles hormones gastro-intestinales stimulent l'insuline ?", question_en: "Which gastrointestinal hormones stimulate insulin?", answer_fr: "Gastrine, sécrétine, CCK, GIP (peptide inhibiteur gastrique).", answer_en: "Gastrin, secretin, CCK, GIP (gastric inhibitory peptide)." },
  { question_fr: "Quel glucide stimule l'insuline en dehors du glucose ?", question_en: "Which carbohydrate other than glucose stimulates insulin?", answer_fr: "Le fructose (le galactose et le xylose n'ont pas d'effet).", answer_en: "Fructose (galactose and xylose have no effect)." },
  { question_fr: "Quel est l'effet du système sympathique (récepteurs α) sur l'insuline ?", question_en: "What is the effect of the sympathetic system (α receptors) on insulin?", answer_fr: "Il inhibe la sécrétion d'insuline.", answer_en: "It inhibits insulin secretion." },
  { question_fr: "Quelles cellules sécrètent le glucagon ?", question_en: "Which cells secrete glucagon?", answer_fr: "Les cellules α des îlots de Langerhans.", answer_en: "The α cells of the islets of Langerhans." },
  { question_fr: "Quel est le second messager du glucagon ?", question_en: "What is the second messenger of glucagon?", answer_fr: "L'AMPc.", answer_en: "cAMP." },
  { question_fr: "Quel est le mécanisme hyperglycémiant principal du glucagon ?", question_en: "What is glucagon's main hyperglycemic mechanism?", answer_fr: "La glycogénolyse hépatique.", answer_en: "Hepatic glycogenolysis." },
  { question_fr: "Quel pourcentage de la matrice osseuse est organique ?", question_en: "What percentage of bone matrix is organic?", answer_fr: "30 % (substance fondamentale + fibres de collagène).", answer_en: "30% (ground substance + collagen fibers)." },
  { question_fr: "Quel composant donne à l'os sa résistance mécanique ?", question_en: "What component gives bone its mechanical strength?", answer_fr: "Les cristaux d'hydroxyapatite (70 % de la matrice, composant anorganique).", answer_en: "Hydroxyapatite crystals (70% of the matrix, inorganic component)." },
  { question_fr: "Quelle cellule osseuse a un rôle phagocytaire de résorption ?", question_en: "Which bone cell has a phagocytic resorptive role?", answer_fr: "L'ostéoclaste.", answer_en: "The osteoclast." },
  { question_fr: "Quelle cellule osseuse assure la formation permanente d'os ?", question_en: "Which bone cell ensures permanent bone formation?", answer_fr: "L'ostéoblaste.", answer_en: "The osteoblast." },
  { question_fr: "Que devient l'ostéoblaste une fois capté dans la matrice qu'il a formée ?", question_en: "What does an osteoblast become once trapped in the matrix it formed?", answer_fr: "Un ostéocyte.", answer_en: "An osteocyte." },
  { question_fr: "Quelle est la cause du rachitisme chez l'enfant ?", question_en: "What is the cause of rickets in children?", answer_fr: "Un déficit en vitamine D, entraînant un défaut de minéralisation osseuse.", answer_en: "Vitamin D deficiency, causing a bone mineralization defect." },
  { question_fr: "Quel est l'apport quotidien recommandé en calcium et phosphate ?", question_en: "What is the recommended daily intake of calcium and phosphate?", answer_fr: "1 gramme par jour chacun.", answer_en: "1 gram per day each." },
  { question_fr: "Quel pourcentage du calcium filtré est réabsorbé par le rein ?", question_en: "What percentage of filtered calcium is reabsorbed by the kidney?", answer_fr: "95 %, contrôlé par PTH et calcitriol.", answer_en: "95%, controlled by PTH and calcitriol." },
  { question_fr: "Quelle est la calcémie plasmatique normale ?", question_en: "What is the normal plasma calcium level?", answer_fr: "10 ± 1 mg%.", answer_en: "10 ± 1 mg%." },
  { question_fr: "Où sont situées les glandes parathyroïdes ?", question_en: "Where are the parathyroid glands located?", answer_fr: "En position rétro-thyroïdienne (4 glandes).", answer_en: "In a retro-thyroid position (4 glands)." },
  { question_fr: "Quels sont les 3 sites d'action de la PTH pour augmenter la calcémie ?", question_en: "What are the 3 sites of action of PTH to raise calcemia?", answer_fr: "Os (déminéralisation), rein (réabsorption Ca2+), intestin (absorption Ca2+, avec CTL).", answer_en: "Bone (demineralization), kidney (Ca2+ reabsorption), intestine (Ca2+ absorption, with CTL)." },
  { question_fr: "Quel signe clinique évoque une hypocalcémie sévère par hypoparathyroïdie ?", question_en: "What clinical sign suggests severe hypocalcemia from hypoparathyroidism?", answer_fr: "Le signe de Chvostek (et de Trousseau) positif, tétanie.", answer_en: "A positive Chvostek sign (and Trousseau sign), tetany." },
  { question_fr: "Où est sécrétée la calcitonine ?", question_en: "Where is calcitonin secreted?", answer_fr: "Par les cellules C de la thyroïde.", answer_en: "By the C cells of the thyroid." },
  { question_fr: "Quel est l'effet de la calcitonine sur l'ostéolyse ?", question_en: "What is calcitonin's effect on osteolysis?", answer_fr: "Elle l'inhibe (effet protecteur, utile en pédiatrie, grossesse, allaitement, et contre l'ostéoporose).", answer_en: "It inhibits it (protective effect, useful in pediatrics, pregnancy, lactation, and against osteoporosis)." },
  { question_fr: "Où le calcitriol est-il activé après la synthèse hépatique initiale ?", question_en: "Where is calcitriol activated after initial hepatic synthesis?", answer_fr: "Au niveau rénal (2e hydroxylation).", answer_en: "In the kidney (2nd hydroxylation)." },
  { question_fr: "Quel est le rôle principal du calcitriol au niveau intestinal ?", question_en: "What is calcitriol's main role at the intestinal level?", answer_fr: "Stimuler l'absorption active du calcium (rôle principal, avec la PTH).", answer_en: "Stimulating active calcium absorption (main role, with PTH)." },
  { question_fr: "Quel est l'effet du cortisol sur l'os en excès ?", question_en: "What is the effect of excess cortisol on bone?", answer_fr: "Il inhibe la formation osseuse, augmente la résorption et l'excrétion rénale de calcium, favorisant l'ostéoporose.", answer_en: "It inhibits bone formation, increases resorption and renal calcium excretion, promoting osteoporosis." },
  { question_fr: "Quel est l'effet des hormones sexuelles sur la fermeture des cartilages de croissance ?", question_en: "What is the effect of sex hormones on growth cartilage closure?", answer_fr: "Elles stimulent la maturation osseuse et provoquent la fermeture des cartilages, arrêtant la croissance en hauteur.", answer_en: "They stimulate bone maturation and cause cartilage closure, stopping height growth." },
];
