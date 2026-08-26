import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const RENAL_FILTRATION_COURSE = `# Organisation du rein et filtration glomérulaire

## 1. Organisation fonctionnelle du rein
- Le **cortex** est la partie externe et fine du rein, contenant les glomérules rénaux : tous les néphrons à anse de Henlé courte ainsi que les corpuscules des néphrons à anse longue (juxtamédullaires) y sont situés. C'est le site de l'**ultrafiltration du plasma**.
- La **médulla** est la partie interne, divisée en pyramides rénales. La base de chaque pyramide est à la jonction cortex-médulla, et la pointe (papille) se prolonge vers le pelvis rénal. C'est le site de la **concentration et dilution de l'urine**.
- Trajet de l'urine : petits calices → grands calices → pelvis rénal → uretère → vessie.
- Le **hile** est le passage des vaisseaux sanguins, lymphatiques, nerfs et de l'uretère.

## 2. Le néphron
- Unité morphologique et fonctionnelle du rein, siège de la formation de l'urine.
- **1 à 1,3 million de néphrons par rein** ; après 40 ans, leur nombre diminue d'environ 10 % tous les 10 ans, et les néphrons perdus ne se régénèrent pas.
- Deux composants principaux :
  1. **Corpuscule rénal** (cortex) : glomérule + capsule de Bowman → rôle : filtration glomérulaire (FG), formation de l'urine primaire.
  2. **Tube rénal** : reçoit l'urine primaire, la modifie par réabsorption (R) et sécrétion (S) → formation de l'urine finale.

### Le corpuscule rénal
- Le **glomérule** est un peloton capillaire entre deux artérioles (afférente = aa, efférente = ea) qui assure une pression hydrostatique intracapillaire élevée (≈ 60 mmHg), adaptée à la filtration glomérulaire — volume d'urine primaire ≈ 120 mL/min (180 L/jour).
- La **capsule de Bowman** recouvre le peloton capillaire : son feuillet interne (viscéral) adhère aux capillaires glomérulaires et fait partie de la membrane de filtration ; son feuillet externe (pariétal) se prolonge par le tube contourné proximal (TCP).
- Le **pôle vasculaire** est le point d'entrée de l'aa et de sortie de l'ea ; le **pôle urinaire** est le point de passage de l'urine primaire vers le TCP.

### Le tube rénal
1. **Tube contourné proximal (TCP)** — cortex, reçoit tout le filtrat glomérulaire ; rôle : réabsorption + sécrétion + ammoniogenèse.
2. **Anse de Henlé (AH)** — 2 types selon le néphron : courte (corticale, 80 %) ou longue (juxtamédullaire, 20 %) ; branche descendante fine (BDF) descend vers la médulla, branches fine et large ascendantes (BAF, BAL) remontent vers le cortex ; rôle : concentration + dilution de l'urine.
3. **Tube contourné distal (TCD)** — cortex ; le premier tiers fonctionne comme la BAL, les deux derniers tiers comme le tube collecteur.
4. **Macula densa (MD)** — entre l'AH et le TCD, composante de l'appareil juxtaglomérulaire (AJG) : régule la résistance des artérioles (aa/ea), le débit de filtration glomérulaire (DFG, rétrocontrôle tubulo-glomérulaire) et la synthèse de rénine.
5. **Tube collecteur (TC)** — formation de l'urine finale et son transport ; plusieurs TC (8-10) fusionnent en un canal collecteur commun qui descend dans la zone papillaire et s'ouvre dans les calices.

## 3. Types de néphrons
- **Néphrons corticaux** (anse courte, 70-80 %) : glomérule dans la partie externe du cortex ; aa > ea assure la pression hydrostatique glomérulaire (60 mmHg) ; l'ea se prolonge par le capillaire péritubulaire, adapté à la réabsorption grâce à la pression oncotique élevée (protéines plasmatiques non filtrées) et à la pression hydrostatique basse. Rôle : FG + réabsorption **isotonique** (65 % du FG) — ils ne concentrent pas l'urine.
- **Néphrons juxtamédullaires** (anse longue, 20-30 %) : l'ea se prolonge par les **vasa recta** en « U », qui descendent profondément dans la médulla puis remontent vers le cortex, en parallèle mais en sens opposé au flux de l'anse de Henlé et du tube collecteur. La médulla présente un gradient cortico-papillaire (300 → 1200 mOsm/L). Rôle : **mécanisme multiplicateur à contre-courant (MMCC)**, concentration + dilution de l'urine.

## 4. Mécanismes généraux de formation de l'urine
- Trois processus : **filtration glomérulaire (FG)**, **réabsorption tubulaire (R)**, **sécrétion tubulaire (S)**.
- Débit d'excrétion urinaire = FG − R + S.
- **Clairance** : quantité de plasma épurée d'une substance x par minute : Cl(x) = (Ux × V) / Px, où Ux = concentration urinaire, Px = concentration plasmatique, V = débit urinaire.
- Selon le devenir de la substance : la clairance de la créatinine (filtrée seule, non réabsorbée ni sécrétée) évalue le DFG ; Cl(substance réabsorbée) < Cl(créatinine) ; Cl = 0 si totalement réabsorbée ; Cl(PAH) = débit plasmatique rénal (DPR), car le PAH est filtré ET sécrété à 100 %.

## 5. Filtration glomérulaire (FG)
- **Définition** : premier processus de formation de l'urine — transport passif d'eau et de composants plasmatiques micromoléculaires des capillaires glomérulaires vers la capsule de Bowman, à travers la membrane de filtration glomérulaire → **urine primaire**, caractérisée par : ultrafiltrat plasmatique de composition proche du plasma mais sans protéines (plasma déprotéinisé), isotonique (300 mOsm/L), volume ≈ 120 mL/min (180 L/jour).
- **Débit de filtration glomérulaire (DFG)** : débit de transfert d'une substance à travers la membrane de filtration (mL/min).

### Facteurs déterminants de la FG
1. **Membrane de filtration glomérulaire (MFG)**, composée de 3 couches :
   - Endothélium capillaire fenêtré (pores facilitant la FG, charge électronégative s'opposant à la filtration des protéines plasmatiques).
   - Membrane basale : collagène + protéoglycanes, charge électronégative.
   - Feuillet viscéral de la capsule de Bowman avec **podocytes** (prolongements podocytaires laissant des fentes de filtration), charge électronégative.
   - La structure « tamis » filtre de grandes quantités de liquide et de micromolécules (des centaines de fois plus que les capillaires normaux), tout en s'opposant à la filtration des protéines par sa charge négative.
2. **Caractéristiques des particules en solution** :
   - Poids moléculaire (PM) : les particules < 6 kDa sont facilement filtrées (eau, ions, glucose) ; plus le PM augmente, moins la filtration est importante (albumine, PM = 66 kDa, quasi non filtrée).
   - Diamètre : les particules < 8 nm sont facilement filtrées.
   - Charge électrique : les particules « + » sont filtrées plus facilement que les « - », à diamètre égal, du fait de l'électronégativité membranaire. La perte pathologique de cette électronégativité permet la filtration de petites protéines (albumine) → **protéinurie (albuminurie)**, précoce, avant toute lésion histologique visible (néphropathie à lésions glomérulaires minimes). Le **syndrome néphrotique** associe protéinurie, hypoalbuminémie et œdèmes.
3. **Pression nette de filtration** = résultante entre les pressions favorables et défavorables à la FG :
   - Favorables : pression hydrostatique intracapillaire (Ph, 60 mmHg — le facteur le plus déterminant du DFG) + pression oncotique capsulaire (0 mmHg).
   - Défavorables : pression hydrostatique capsulaire (Pcaps, 18 mmHg) + pression oncotique intracapillaire (Ponc, 32 mmHg, augmentant vers l'ea car les protéines s'accumulent dans le plasma non filtré).
   - Pression nette de filtration = Ph − (Ponc + Pcaps) = 60 − (32 + 18) = **10 mmHg**, maintenue constante par des mécanismes de régulation.
4. **Coefficient de perméabilité du capillaire glomérulaire (Kf)** : dépend du nombre de néphrons (surface) et de l'épaisseur de la membrane de filtration. Kf ↑ → DFG ↑ ; Kf ↓ (pathologique, ex. insuffisance rénale, diabète, hypertension) → DFG ↓.
- **Bilan** : 2000 L de sang traversent quotidiennement les glomérules, dont 180 L/jour sont filtrés (120 mL/min) et passent dans la capsule de Bowman ; le reste du sang passe dans l'artériole efférente puis les capillaires péritubulaires/vasa recta pour les échanges tubulaires.

## 6. Physiologie de la circulation rénale
- **Débit sanguin rénal (DSR)** ≈ 1000-1200 mL/min, soit **20 % du débit cardiaque**, pour un organe de moins de 1 % de la masse corporelle totale.
- **Débit plasmatique rénal (DPR)** ≈ 600 ± 150 mL/min (= clairance du PAH).
- Distribution du DSR : majoritairement dans le cortex, seulement 10-15 % dans la médulla.
- **Fraction de filtration (FF)** = fraction du DPR filtrée au niveau glomérulaire (%) : FF = DFG/DPR ≈ 20 %.

### Régulation de la circulation rénale et du DFG
1. **Autorégulation** : propriété intrinsèque du rein de maintenir constants la FG et le DSR malgré de grandes variations de pression artérielle (75-160 mmHg) — nécessaire au contrôle précis de l'excrétion rénale. En dessous de 75 mmHg, la FG diminue ; en dessous de 60 mmHg, elle s'arrête ; au-dessus de 160 mmHg, le DSR augmente.
   - **Mécanisme myogénique** : l'augmentation de la PA étire les fibres musculaires lisses de l'artériole afférente → vasoconstriction réflexe → DSR et FG maintenus constants.
   - **Rétrocontrôle tubulo-glomérulaire** : la macula densa détecte les variations de [Na⁺] urinaire et du volume urinaire ; elle module la résistance des artérioles afférente/efférente via l'appareil juxtaglomérulaire (AJG : cellules juxtaglomérulaires épithélioïdes sécrétant la rénine, macula densa avec baro/chémorécepteurs, mésangium). Si le DFG augmente → vasodilatation de l'aa (médiée par le NO) et vasoconstriction de l'ea (via rénine → SRAA → angiotensine II) pour ramener le DFG à la normale ; l'inverse si le DFG diminue.
2. **Régulation nerveuse** : système nerveux sympathique.
3. **Régulation humorale** :
   - Facteurs vasoconstricteurs : catécholamines, endothéline, angiotensine II (composante du SRAA — une VC modérée sur l'ea maintient le DFG constant, une VC marquée sur aa + ea le diminue).
   - Facteurs vasodilatateurs : NO, prostaglandines, bradykinine.

## Points à retenir
- Cortex = filtration glomérulaire ; médulla = concentration/dilution de l'urine.
- Néphrons corticaux (70-80 %, réabsorption isotonique) vs juxtamédullaires (20-30 %, mécanisme multiplicateur à contre-courant).
- FG = 120 mL/min (180 L/jour), isotonique, sans protéines ; pression nette de filtration ≈ 10 mmHg.
- La membrane de filtration sélectionne selon le poids moléculaire, le diamètre et la charge électrique des particules.
- DSR ≈ 20 % du débit cardiaque ; autorégulation efficace entre 75 et 160 mmHg de PA (mécanisme myogénique + rétrocontrôle tubulo-glomérulaire via la macula densa).`;

export const RENAL_FILTRATION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Organisation du rein et filtration glomérulaire",
    source_label: "Physiologie — UMFT Timisoara, Lecture 1 (Rénal)",
    content_fr: RENAL_FILTRATION_COURSE,
  },
  qcm: [
    single("Où se situent les glomérules rénaux ?", "A", "Les glomérules rénaux se situent dans le cortex rénal, la partie externe et fine du rein.", ["Dans le cortex", "Dans la médulla", "Dans le pelvis rénal", "Dans l'uretère"]),
    single("Quel est le rôle principal de la médulla rénale ?", "C", "La médulla assure la concentration et la dilution de l'urine.", ["La filtration glomérulaire", "La sécrétion de rénine", "La concentration et la dilution de l'urine", "La synthèse d'érythropoïétine"]),
    single("Combien de néphrons compte approximativement un rein humain ?", "B", "Environ 1 à 1,3 million de néphrons par rein, un nombre qui diminue avec l'âge sans régénération possible.", ["100 000 à 300 000", "1 à 1,3 million", "5 à 8 millions", "10 000 à 50 000"]),
    single("Quels sont les deux composants du corpuscule rénal ?", "B", "Le corpuscule rénal est composé du glomérule et de la capsule de Bowman.", ["Le tube proximal et l'anse de Henlé", "Le glomérule et la capsule de Bowman", "La macula densa et le tube collecteur", "L'artériole afférente et l'artériole efférente seules"]),
    single("Quelle proportion des néphrons possède une anse de Henlé courte (néphrons corticaux) ?", "C", "Les néphrons corticaux, à anse courte, représentent 70 à 80 % du total.", ["20-30 %", "50 %", "70-80 %", "100 %"]),
    single("Quel est le rôle spécifique des néphrons juxtamédullaires ?", "A", "Grâce à leur anse de Henlé longue et aux vasa recta, ils assurent le mécanisme multiplicateur à contre-courant, essentiel à la concentration et à la dilution de l'urine.", ["Le mécanisme multiplicateur à contre-courant (concentration/dilution)", "La filtration glomérulaire isotonique uniquement", "La sécrétion d'aldostérone", "La synthèse de vitamine D active"]),
    single("Quelle formule définit la clairance d'une substance x ?", "A", "Clairance(x) = (Ux × V) / Px, où Ux et Px sont les concentrations urinaire et plasmatique et V le débit urinaire.", ["Cl(x) = (Ux × V) / Px", "Cl(x) = Px / (Ux × V)", "Cl(x) = Ux × Px", "Cl(x) = V / (Ux × Px)"]),
    single("Pourquoi la clairance de la créatinine est-elle utilisée pour évaluer le débit de filtration glomérulaire ?", "B", "La créatinine est filtrée par le glomérule sans être significativement réabsorbée ni sécrétée, donc son excrétion reflète directement le DFG.", ["Parce qu'elle est entièrement réabsorbée", "Parce qu'elle est filtrée sans être réabsorbée ni sécrétée", "Parce qu'elle est activement sécrétée uniquement", "Parce qu'elle n'est jamais filtrée"]),
    single("Quel est le volume approximatif de l'urine primaire formée quotidiennement ?", "C", "Environ 180 litres par jour (120 mL/min), bien supérieur au volume final d'urine excrétée (1,5-2 L/jour).", ["18 L/jour", "50 L/jour", "180 L/jour", "500 L/jour"]),
    multi("Quelles caractéristiques d'une particule favorisent sa filtration glomérulaire ?", ["A", "B", "C"], "Un faible poids moléculaire, un petit diamètre et une charge positive favorisent tous la filtration à travers la membrane glomérulaire électronégative.", ["Un faible poids moléculaire (< 6 kDa)", "Un diamètre inférieur à 8 nm", "Une charge électrique positive", "Une charge électrique négative"]),
    single("Que traduit une protéinurie (albuminurie) précoce, avant toute lésion histologique visible ?", "B", "Elle traduit une perte pathologique de l'électronégativité de la membrane de filtration glomérulaire, comme dans la néphropathie à lésions minimes.", ["Une hyperfiltration bénigne sans conséquence", "Une perte de l'électronégativité de la membrane de filtration", "Une augmentation du coefficient Kf uniquement", "Une insuffisance de la pression oncotique capsulaire"]),
    single("Quelle est la valeur de la pression hydrostatique intracapillaire glomérulaire, facteur le plus déterminant du DFG ?", "C", "Elle est d'environ 60 mmHg, le facteur le plus important déterminant le débit de filtration glomérulaire.", ["18 mmHg", "32 mmHg", "60 mmHg", "10 mmHg"]),
    single("Comment se calcule la pression nette de filtration glomérulaire ?", "A", "Pression nette = Ph − (Ponc + Pcaps) = 60 − (32 + 18) = 10 mmHg.", ["Ph − (Ponc + Pcaps)", "Ph + Ponc + Pcaps", "Ponc − Ph", "Pcaps − Ponc"]),
    single("Qu'entraîne une diminution pathologique du coefficient de perméabilité Kf (ex. diabète, hypertension) ?", "B", "Une diminution de Kf (moins de néphrons fonctionnels ou épaississement de la membrane) entraîne une diminution du DFG.", ["Une augmentation du DFG", "Une diminution du DFG", "Aucun effet sur le DFG", "Une augmentation exclusive de la clairance du PAH"]),
    single("Quelle proportion du débit cardiaque représente le débit sanguin rénal ?", "C", "Le débit sanguin rénal représente environ 20 % du débit cardiaque, pour un organe pesant moins de 1 % de la masse corporelle.", ["5 %", "10 %", "20 %", "50 %"]),
    single("Entre quelles valeurs de pression artérielle l'autorégulation rénale maintient-elle un DFG constant ?", "B", "L'autorégulation est efficace entre 75 et 160 mmHg de pression artérielle.", ["50-100 mmHg", "75-160 mmHg", "100-200 mmHg", "160-220 mmHg"]),
    single("Quel mécanisme d'autorégulation repose sur l'étirement des fibres musculaires lisses de l'artériole afférente ?", "A", "Le mécanisme myogénique : une hausse de la pression artérielle étire les fibres musculaires lisses de l'aa, provoquant une vasoconstriction réflexe qui maintient le DSR constant.", ["Le mécanisme myogénique", "Le rétrocontrôle tubulo-glomérulaire", "La régulation par l'ANP", "La régulation par l'aldostérone"]),
    single("Quel rôle joue la macula densa dans le rétrocontrôle tubulo-glomérulaire ?", "C", "Elle détecte les variations de [Na⁺] urinaire et du volume urinaire, puis module la résistance des artérioles afférente et efférente pour stabiliser le DFG.", ["Elle sécrète directement de l'aldostérone", "Elle filtre le plasma à la place du glomérule", "Elle détecte les variations de [Na⁺] urinaire et régule les résistances artériolaires", "Elle produit l'urine finale"]),
    single("Quel effet une vasoconstriction marquée de l'angiotensine II sur l'artériole afférente ET efférente a-t-elle sur le DFG ?", "B", "Une vasoconstriction marquée sur les deux artérioles diminue le DFG, contrairement à une vasoconstriction modérée limitée à l'ea qui le maintient constant.", ["Elle l'augmente", "Elle le diminue", "Elle n'a aucun effet", "Elle le rend indépendant de la pression artérielle"]),
    single("Quelle est la valeur approximative de la fraction de filtration (FF) ?", "A", "La fraction de filtration, rapport DFG/DPR, est d'environ 20 %.", ["≈ 20 %", "≈ 50 %", "≈ 80 %", "≈ 100 %"]),
  ],
  exam: { titre_fr: "Examen chronométré — Filtration glomérulaire", duration_seconds: 1_600 },
};

export const RENAL_FILTRATION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Où se situe le cortex rénal et quel est son rôle principal ?", question_en: "Where is the renal cortex located and what is its main role?", answer_fr: "Partie externe et fine du rein, contenant les glomérules ; rôle : ultrafiltration du plasma.", answer_en: "The thin, external part of the kidney, containing the glomeruli; role: ultrafiltration of plasma." },
  { question_fr: "Quel est le rôle de la médulla rénale ?", question_en: "What is the role of the renal medulla?", answer_fr: "La concentration et la dilution de l'urine.", answer_en: "Urine concentration and dilution." },
  { question_fr: "Quel est le trajet de l'urine depuis les tubes collecteurs jusqu'à la vessie ?", question_en: "What is the path of urine from the collecting tubules to the bladder?", answer_fr: "Tubes collecteurs → papilles → petits calices → grands calices → pelvis rénal → uretère → vessie.", answer_en: "Collecting tubules → papillae → minor calyces → major calyces → renal pelvis → ureter → bladder." },
  { question_fr: "Combien de néphrons compte un rein et que se passe-t-il après 40 ans ?", question_en: "How many nephrons does a kidney contain and what happens after age 40?", answer_fr: "1 à 1,3 million de néphrons par rein ; après 40 ans, leur nombre diminue de 10 % tous les 10 ans, sans régénération possible.", answer_en: "1 to 1.3 million nephrons per kidney; after age 40, their number decreases by 10% every 10 years, with no regeneration possible." },
  { question_fr: "Quels sont les deux composants du néphron ?", question_en: "What are the two components of the nephron?", answer_fr: "Le corpuscule rénal (glomérule + capsule de Bowman) et le tube rénal.", answer_en: "The renal corpuscle (glomerulus + Bowman's capsule) and the renal tubule." },
  { question_fr: "Qu'est-ce que le glomérule ?", question_en: "What is the glomerulus?", answer_fr: "Un peloton capillaire situé entre deux artérioles (afférente et efférente), assurant une pression hydrostatique élevée adaptée à la filtration glomérulaire.", answer_en: "A capillary tuft located between two arterioles (afferent and efferent), providing a high hydrostatic pressure suited to glomerular filtration." },
  { question_fr: "Que sépare le pôle vasculaire du pôle urinaire du corpuscule rénal ?", question_en: "What distinguishes the vascular pole from the urinary pole of the renal corpuscle?", answer_fr: "Le pôle vasculaire est l'entrée/sortie des artérioles afférente/efférente ; le pôle urinaire est le passage de l'urine primaire vers le tube contourné proximal.", answer_en: "The vascular pole is the entry/exit point of the afferent/efferent arterioles; the urinary pole is where primary urine passes into the proximal convoluted tubule." },
  { question_fr: "Quel est le rôle du tube contourné proximal (TCP) ?", question_en: "What is the role of the proximal convoluted tubule (PCT)?", answer_fr: "Réabsorption, sécrétion et ammoniogenèse ; il reçoit tout le filtrat glomérulaire.", answer_en: "Reabsorption, secretion, and ammoniogenesis; it receives the entire glomerular filtrate." },
  { question_fr: "Quelle est la différence structurale entre néphrons corticaux et juxtamédullaires ?", question_en: "What is the structural difference between cortical and juxtamedullary nephrons?", answer_fr: "Les néphrons corticaux ont une anse de Henlé courte (80 %) ; les juxtamédullaires ont une anse longue qui descend profondément dans la médulla (20 %).", answer_en: "Cortical nephrons have a short loop of Henle (80%); juxtamedullary nephrons have a long loop that descends deep into the medulla (20%)." },
  { question_fr: "Que devient l'artériole efférente des néphrons juxtamédullaires ?", question_en: "What does the efferent arteriole of juxtamedullary nephrons become?", answer_fr: "Elle se prolonge par les vasa recta, en forme de « U », qui descendent dans la médulla puis remontent vers le cortex.", answer_en: "It continues as the vasa recta, U-shaped vessels that descend into the medulla and return to the cortex." },
  { question_fr: "Où est située la macula densa et quel est son rôle ?", question_en: "Where is the macula densa located and what is its role?", answer_fr: "Entre l'anse de Henlé et le tube contourné distal ; elle régule la résistance des artérioles, le DFG (rétrocontrôle tubulo-glomérulaire) et la synthèse de rénine.", answer_en: "Between the loop of Henle and the distal convoluted tubule; it regulates arteriolar resistance, GFR (tubuloglomerular feedback), and renin synthesis." },
  { question_fr: "Quels sont les trois processus de formation de l'urine ?", question_en: "What are the three processes of urine formation?", answer_fr: "Filtration glomérulaire, réabsorption tubulaire et sécrétion tubulaire.", answer_en: "Glomerular filtration, tubular reabsorption, and tubular secretion." },
  { question_fr: "Comment s'exprime le débit d'excrétion urinaire en fonction de la FG, R et S ?", question_en: "How is urinary excretion rate expressed as a function of GF, R, and S?", answer_fr: "Débit d'excrétion = FG − R + S.", answer_en: "Excretion rate = GF − R + S." },
  { question_fr: "Qu'est-ce que la clairance rénale d'une substance ?", question_en: "What is the renal clearance of a substance?", answer_fr: "La quantité de plasma épurée de cette substance par minute.", answer_en: "The quantity of plasma cleared of that substance per minute." },
  { question_fr: "Pourquoi la clairance de l'inuline ou de la créatinine évalue-t-elle le DFG ?", question_en: "Why does the clearance of inulin or creatinine evaluate the GFR?", answer_fr: "Parce qu'elles sont uniquement filtrées par le glomérule, sans être réabsorbées ni sécrétées.", answer_en: "Because they are only filtered by the glomerulus, without being reabsorbed or secreted." },
  { question_fr: "Que reflète une clairance égale au débit plasmatique rénal (ex. PAH) ?", question_en: "What does a clearance equal to renal plasma flow (e.g. PAH) reflect?", answer_fr: "Une substance totalement filtrée ET sécrétée au passage rénal.", answer_en: "A substance that is completely filtered AND secreted during renal passage." },
  { question_fr: "Comment est caractérisée l'urine primaire ?", question_en: "How is primary urine characterized?", answer_fr: "Un ultrafiltrat plasmatique déprotéinisé, isotonique (300 mOsm/L), d'un volume de 120 mL/min (180 L/jour).", answer_en: "A deproteinized plasma ultrafiltrate, isotonic (300 mOsm/L), with a volume of 120 mL/min (180 L/day)." },
  { question_fr: "Quelles sont les 3 couches de la membrane de filtration glomérulaire ?", question_en: "What are the 3 layers of the glomerular filtration membrane?", answer_fr: "L'endothélium capillaire fenêtré, la membrane basale et le feuillet viscéral de la capsule de Bowman avec ses podocytes.", answer_en: "The fenestrated capillary endothelium, the basal membrane, and the visceral layer of Bowman's capsule with its podocytes." },
  { question_fr: "Pourquoi la membrane de filtration s'oppose-t-elle à la filtration des protéines plasmatiques ?", question_en: "Why does the filtration membrane oppose the filtration of plasma proteins?", answer_fr: "Sa charge électronégative repousse les protéines, elles-mêmes chargées négativement.", answer_en: "Its electronegative charge repels proteins, which are themselves negatively charged." },
  { question_fr: "Quels sont les 3 critères déterminant la filtration d'une particule ?", question_en: "What are the 3 criteria determining the filtration of a particle?", answer_fr: "Le poids moléculaire, le diamètre et la charge électrique.", answer_en: "Molecular weight, diameter, and electrical charge." },
  { question_fr: "Que traduit une albuminurie précoce sans lésion histologique visible ?", question_en: "What does early albuminuria without visible histological lesion indicate?", answer_fr: "Une perte de l'électronégativité de la membrane glomérulaire (ex. néphropathie à lésions minimes).", answer_en: "A loss of the electronegativity of the glomerular membrane (e.g. minimal change nephropathy)." },
  { question_fr: "Que définit le syndrome néphrotique ?", question_en: "What defines nephrotic syndrome?", answer_fr: "L'association protéinurie, hypoalbuminémie et œdèmes.", answer_en: "The combination of proteinuria, hypoalbuminemia, and edema." },
  { question_fr: "Quelles sont les 2 forces favorisant la filtration glomérulaire ?", question_en: "What are the 2 forces favoring glomerular filtration?", answer_fr: "La pression hydrostatique intracapillaire (60 mmHg) et la pression oncotique capsulaire (0 mmHg).", answer_en: "Intracapillary hydrostatic pressure (60 mmHg) and capsular oncotic pressure (0 mmHg)." },
  { question_fr: "Quelles sont les 2 forces s'opposant à la filtration glomérulaire ?", question_en: "What are the 2 forces opposing glomerular filtration?", answer_fr: "La pression hydrostatique capsulaire (18 mmHg) et la pression oncotique intracapillaire (32 mmHg).", answer_en: "Capsular hydrostatic pressure (18 mmHg) and intracapillary oncotic pressure (32 mmHg)." },
  { question_fr: "Quelle est la valeur de la pression nette de filtration glomérulaire ?", question_en: "What is the value of the net glomerular filtration pressure?", answer_fr: "10 mmHg (60 − (32+18)).", answer_en: "10 mmHg (60 − (32+18))." },
  { question_fr: "De quoi dépend le coefficient de perméabilité Kf du capillaire glomérulaire ?", question_en: "What does the glomerular capillary permeability coefficient Kf depend on?", answer_fr: "Du nombre de néphrons (surface) et de l'épaisseur de la membrane de filtration.", answer_en: "The number of nephrons (surface area) and the thickness of the filtration membrane." },
  { question_fr: "Quel est le débit sanguin rénal (DSR) normal ?", question_en: "What is the normal renal blood flow (RBF)?", answer_fr: "1000-1200 mL/min, soit environ 20 % du débit cardiaque.", answer_en: "1000-1200 mL/min, about 20% of cardiac output." },
  { question_fr: "Qu'est-ce que la fraction de filtration (FF) ?", question_en: "What is the filtration fraction (FF)?", answer_fr: "La fraction du débit plasmatique rénal filtrée au niveau glomérulaire (≈ 20 %), FF = DFG/DPR.", answer_en: "The fraction of renal plasma flow filtered at the glomerular level (≈20%), FF = GFR/RPF." },
  { question_fr: "Entre quelles pressions artérielles l'autorégulation rénale est-elle efficace ?", question_en: "Between which blood pressures is renal autoregulation effective?", answer_fr: "Entre 75 et 160 mmHg.", answer_en: "Between 75 and 160 mmHg." },
  { question_fr: "Que se passe-t-il si la pression artérielle descend sous 60 mmHg ?", question_en: "What happens if blood pressure drops below 60 mmHg?", answer_fr: "La filtration glomérulaire s'arrête.", answer_en: "Glomerular filtration stops." },
  { question_fr: "Décrivez le mécanisme myogénique d'autorégulation rénale.", question_en: "Describe the myogenic mechanism of renal autoregulation.", answer_fr: "Une hausse de PA étire les fibres musculaires de l'artériole afférente, provoquant une vasoconstriction réflexe qui maintient le débit sanguin rénal constant.", answer_en: "A rise in BP stretches the muscle fibers of the afferent arteriole, triggering reflex vasoconstriction that keeps renal blood flow constant." },
  { question_fr: "Quel médiateur intervient dans la vasodilatation de l'artériole afférente lors du rétrocontrôle tubulo-glomérulaire ?", question_en: "What mediator is involved in afferent arteriole vasodilation during tubuloglomerular feedback?", answer_fr: "Le monoxyde d'azote (NO).", answer_en: "Nitric oxide (NO)." },
  { question_fr: "Quels facteurs humoraux sont vasoconstricteurs rénaux ?", question_en: "Which humoral factors are renal vasoconstrictors?", answer_fr: "Catécholamines, endothéline, angiotensine II.", answer_en: "Catecholamines, endothelin, angiotensin II." },
  { question_fr: "Quels facteurs humoraux sont vasodilatateurs rénaux ?", question_en: "Which humoral factors are renal vasodilators?", answer_fr: "NO, prostaglandines, bradykinine.", answer_en: "NO, prostaglandins, bradykinin." },
];

const TUBULAR_FUNCTIONS_COURSE = `# Fonctions tubulaires

## 1. Mécanismes généraux du transport tubulaire
- Le tube rénal reçoit la totalité du filtrat glomérulaire (urine primaire, 180 L/jour, isotonique) ; par réabsorption (R) et sécrétion (S), il détermine l'**urine finale** (1,5-2 L/jour, hypertonique, pH acide).
- Relations avec la clairance de la créatinine (Cl(cr), reflet du DFG) : Cl(cr) > Cl(substance réabsorbée) ; Cl(cr) < Cl(substance sécrétée).
- **Néphrocytes** : cellules épithéliales tubulaires avec :
  - Pôle apical : bordure en brosse (surface d'échange × 20), canaux ioniques, transporteurs, canaux hydriques (aquaporines, dépendantes ou non de l'ADH), jonctions serrées (contrôlent le transport paracellulaire de l'eau et des micromolécules).
  - Membrane basolatérale : nombreuses Na⁺/K⁺-ATPases (transport actif).
  - Anhydrase carbonique intracellulaire : synthèse de HCO₃⁻ (CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺), rôle dans l'équilibre acido-basique (EAB).

### Transport passif (TP)
- Sans consommation d'énergie, selon un gradient ; inclut le transport facilité.
- Facteurs déterminants : le gradient (électrochimique ou osmotique — l'eau suit le gradient osmotique créé par le transport actif de solutés) ; le « **solvent drag** » (entraînement passif paracellulaire d'eau et de micromolécules selon les gradients osmotique/oncotique péritubulaires) ; la perméabilité de la paroi tubulaire ; le temps de passage (dépend du débit tubulaire).

### Transport actif (TA)
- Nécessite de l'énergie, se fait contre un gradient, requiert une protéine transporteuse.
- **TA primaire (TA I)** : le transporteur est directement lié à la source d'énergie (ATPase) :
  1. **Na⁺/K⁺-ATPase** (pôle basolatéral) : antiport 3 Na⁺ sortants / 2 K⁺ entrants pour 1 ATP → réabsorption de Na⁺, excrétion de K⁺ ; crée le gradient électrochimique qui favorise le TP apical et le TA secondaire ; stimulée par l'aldostérone (tube collecteur).
  2. **Ca²⁺-ATPase** (pôle basal) : réabsorption active de Ca²⁺, contrôlée par la PTH (TCD et TC).
  3. **H⁺-ATPase** (pôle apical) : excrétion de H⁺, rôle dans l'EAB (TCD et TC).
- **TA secondaire (TA II)** : le transporteur utilise le gradient électrochimique créé par le TA primaire pour transporter une autre molécule (co-transport ou antiport) :
  1. Co-transporteurs Na⁺/glucose, Na⁺/AA, Na⁺/lactate, Na⁺/phosphate (pôle apical, couplés à la Na⁺/K⁺-ATPase basale) — réabsorption dans le TCP.
  2. Échangeur Na⁺/H⁺ (antiport) — sécrétion de H⁺ en parallèle de la réabsorption de Na⁺.
  3. Co-transporteur Na⁺/K⁺/2Cl⁻ (branche large ascendante de l'anse de Henlé) — **bloqué par le furosémide** (diurétique de l'anse) → diurèse et excrétion de NaCl et K⁺.
- **Pinocytose** : TA pour la réabsorption de macromolécules (protéines), principalement dans le TCP ; les protéines sont digérées intracellulairement en acides aminés.
- **Transport maximal (Tmax)** : quantité maximale d'une substance transportable activement par unité de temps, limitée par la saturation des transporteurs. Exemples : glucose Tmax ≈ 320 mg/min ; protéines Tmax ≈ 30 mg/min ; acides aminés Tmax ≈ 1,5 mM/min ; Ca²⁺ Tmax ≈ 0,125 mM/min ; PAH (sécrétion) Tmax ≈ 80 mg/min.

## 2. Physiologie du tube contourné proximal (TCP)
- Reçoit 100 % du FG (125 mL/min, isotonique) ; 3 processus : réabsorption iso-osmotique (65 % du FG), sécrétion, ammoniogenèse.
- Structure en 3 segments : S1-S2 (convolutés) et S3 (droit).
- L'urine sortant du TCP vers l'anse de Henlé est isotonique, représente 35 % du FG, avec [Na⁺] constante, [glucose]/[protéines]/[AA] = 0, [créatinine] augmentée.

### Caractéristiques générales
1. Réabsorption globalement **isotonique** (≈ 65 % du DFG) pour l'eau, Na⁺, Cl⁻, K⁺ ; 100 % pour glucose, protéines, AA (avec limite Tmax) ; réabsorption de la créatinine et autres catabolytes.
2. Sécrétion importante de H⁺, acides et bases organiques.
3. **Ammoniogenèse** par désamination du glutamate/glutamine → système NH₃/NH₄⁺ passant dans l'urine ; HCO₃⁻ réabsorbé (rôle dans l'EAB).
- **Réabsorption de l'eau** (65 % du FG, ADH-indépendante, « obligatoire ») : passive, via aquaporine-1 (transcellulaire) et « solvent drag » (paracellulaire).
- **Réabsorption du Na⁺** (65 %) : pour 10 Na⁺ réabsorbés, 2 HCO₃⁻ (première moitié du TCP) et 8 Cl⁻ (seconde moitié).
- **Réabsorption du K⁺** (65 %), du **HCO₃⁻** (90 %, non directement mais via une quantité équivalente régénérée par le néphrocyte), du **Cl⁻** (65 %), du **phosphate** (65 %).
- **Réabsorption du Ca²⁺** (65 %, passive paracellulaire) et du **Mg²⁺** (30 %, passif paracellulaire).
- **Réabsorption du glucose (100 %)** : co-transport secondaire Na⁺/glucose (SGLT2 dans S1, forte capacité/faible affinité ; SGLT1 dans S3, faible capacité/forte affinité, inhibé par la phlorizine) + solvent drag ; sortie basale via GLUT2/GLUT1. **Tmax ≈ 320-375 mg/min**, correspondant à une glycémie seuil de 170-180 mg%. Au-delà : **glycosurie + diurèse osmotique**. Les **gliflozines (inhibiteurs de SGLT2)** bloquent cette réabsorption, utilisées dans le traitement du diabète.
- **Réabsorption des protéines (100 %)** : par pinocytose, limitée par un Tmax ; au-delà de 150 mg/jour → **protéinurie** (atteinte de la membrane glomérulaire ou trouble tubulaire).

## 3. Physiologie de l'anse de Henlé
- **Branche descendante fine (BDF)** : perméable à l'eau, imperméable aux ions et à l'urée ; réabsorption d'eau (15-20 % du FG) selon le gradient cortico-papillaire croissant (300 → 1200 mOsm/L) — segment de **concentration** de l'urine.
- **Branche ascendante fine (BAF)** : perméable aux ions et à l'urée, imperméable à l'eau ; réabsorption passive de solutés — début du segment de **dilution**.
- **Branche large ascendante (BLA)** : perméable aux ions, imperméable à l'eau et à l'urée ; réabsorption massive d'ions (20-25 % du FG), principal segment de dilution :
  - Passive (gradient osmotique décroissant vers le cortex).
  - Active : co-transporteur Na⁺/K⁺/2Cl⁻ apical (TA II) couplé à la Na⁺/K⁺-ATPase basale — **bloqué par le furosémide**. L'urine sortant de l'anse est hypotonique (≈ 150 mOsm/L).
- **Vasa recta** : flux sanguin parallèle mais opposé à celui de l'urine — branche descendante : reçoit ions/urée en profondeur ; branche ascendante : reçoit de l'eau en remontant. Rôle : réabsorption passive d'ions et d'eau sans dissiper le gradient (mécanisme multiplicateur à contre-courant).
- **Bilan de l'anse de Henlé** : reçoit 35 % du FG isotonique ; dissocie la réabsorption de l'eau et des électrolytes ; ≈ 15 % du FG en eau et 20-25 % en ions sont réabsorbés ; l'urine sortante est hypotonique (150 mOsm/L).

## 4. Mécanisme multiplicateur à contre-courant (MMCC)
- Repose sur : le flux parallèle mais opposé de l'urine et du sang entre l'anse de Henlé, les vasa recta et le tube collecteur ; les perméabilités différentielles à l'eau, aux ions et à l'urée selon les segments ; le gradient cortico-papillaire (300 → 1200 mOsm/L).
- Permet la **concentration** (via la BDF) et la **dilution** (via la BAL) de l'urine, ainsi que le maintien du gradient osmotique médullaire.

## 5. Physiologie du tube contourné distal (TCD) et du tube collecteur (TC)
- Reçoivent 15 % du FG, hypotonique (150 mOsm/L).
- **Premier tiers du TCD** : imperméable à l'eau, fonctionne comme la BLA (segment de dilution).
- **Deux derniers tiers du TCD + TC** : « segment de finalisation de l'urine » — cellules principales et cellules intercalées.
  - **Cellules principales** : réabsorption de Na⁺ + sécrétion de K⁺, contrôlées par l'**aldostérone** (bloquée par la spironolactone — diurétique épargneur de K⁺ — et par les inhibiteurs des canaux Na⁺ comme l'amiloride/triamtérène).
  - **Cellules intercalées** (types A et B, anhydrase carbonique) :
    - Type A : sécrètent H⁺ et réabsorbent HCO₃⁻ + K⁺ → corrigent l'**acidose**.
    - Type B (image en miroir) : sécrètent HCO₃⁻ et réabsorbent H⁺ + K⁺ → corrigent l'**alcalose**.
- **Rôle dans l'EAB** : production/réabsorption de HCO₃⁻ (2/3 distaux du TCD) ; acidification urinaire par sécrétion de H⁺ (H⁺-ATPase apicale, indépendante du Na⁺) — le pH urinaire peut descendre jusqu'à 4,5, l'augmentation de [H⁺] pouvant atteindre 900× (contre 3-4× dans le TCP) ; élimination de H⁺ via l'acidification des tampons urinaires (surtout le tampon phosphate = **acidité titrable**) et la production de sels d'ammonium.
- **Réabsorption d'eau ADH-dépendante (« facultative », 8-14 % du FG)** : l'ADH ouvre les aquaporines-2 (AQP-2) au pôle apical, contribue à la génération/maintien du gradient cortico-papillaire. Sans ADH → **diabète insipide** (diurèse > 25 L/jour, osmolarité min. 65 mOsm/L).
- **Réabsorption de Na⁺ dépendante de l'aldostérone** : active la Na⁺/K⁺-ATPase basale et la perméabilité apicale au Na⁺/K⁺ → réabsorption de Na⁺ (avec Cl⁻, HCO₃⁻ et eau) et sécrétion de K⁺ ; bloquée par la spironolactone.
- **Réabsorption de l'urée** : indirectement ADH-dépendante, contribue au maintien du gradient cortico-papillaire.
- **Urine finale** : 1,5-2 L/jour (1 % du FG), osmolarité jusqu'à 800-1200 mOsm/L (hypertonique), pH 5,5-6 (acide, minimum 4,5).

## Points à retenir
- Le transport tubulaire est passif (gradient, solvent drag) ou actif (primaire : Na⁺/K⁺-ATPase, Ca²⁺-ATPase, H⁺-ATPase ; secondaire : co-transports couplés au Na⁺).
- TCP : réabsorption isotonique de 65 % du FG (eau, Na⁺, Cl⁻, K⁺) et de 100 % du glucose/protéines/AA (limité par le Tmax) ; ammoniogenèse.
- Anse de Henlé : dissocie réabsorption d'eau (BDF) et d'ions (BLA) ; le furosémide bloque le co-transporteur Na⁺/K⁺/2Cl⁻.
- TCD/TC : finalisation de l'urine — ADH (réabsorption d'eau facultative via AQP-2) et aldostérone (réabsorption de Na⁺/sécrétion de K⁺) ; cellules intercalées A/B pour l'équilibre acido-basique.
- Urine finale : 1,5-2 L/jour, hypertonique, pH acide (5,5-6).`;

export const TUBULAR_FUNCTIONS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Fonctions tubulaires",
    source_label: "Physiologie — UMFT Timisoara, Lecture 2 (Rénal)",
    content_fr: TUBULAR_FUNCTIONS_COURSE,
  },
  qcm: [
    single("Quelle est la différence entre transport passif et transport actif tubulaire ?", "B", "Le transport passif suit un gradient sans consommer d'énergie ; le transport actif se fait contre un gradient, avec consommation d'énergie et un transporteur protéique.", ["Le transport passif nécessite toujours de l'ATP", "Le transport actif se fait contre un gradient et consomme de l'énergie", "Le transport passif est toujours transcellulaire", "Le transport actif ne nécessite jamais de transporteur"]),
    single("Qu'est-ce que le « solvent drag » ?", "A", "Un transport passif paracellulaire non sélectif d'eau et de micromolécules, selon les gradients osmotique et oncotique péritubulaires.", ["Un transport passif paracellulaire d'eau et de micromolécules", "Un transport actif transcellulaire de protéines", "Une sécrétion active de potassium", "Un mécanisme exclusif à la membrane basolatérale"]),
    single("Quel transporteur constitue le transport actif primaire majeur du pôle basolatéral des néphrocytes ?", "C", "La Na⁺/K⁺-ATPase, qui expulse 3 Na⁺ et fait entrer 2 K⁺ pour chaque ATP hydrolysé.", ["Le co-transporteur Na⁺/glucose", "L'échangeur Na⁺/H⁺", "La Na⁺/K⁺-ATPase", "L'aquaporine-2"]),
    multi("Quels transporteurs relèvent du transport actif secondaire (TA II) ?", ["A", "B", "C"], "Les co-transporteurs Na⁺/glucose, l'échangeur Na⁺/H⁺ et le co-transporteur Na⁺/K⁺/2Cl⁻ utilisent tous le gradient électrochimique créé par la Na⁺/K⁺-ATPase (TA I).", ["Co-transporteur Na⁺/glucose", "Échangeur Na⁺/H⁺", "Co-transporteur Na⁺/K⁺/2Cl⁻", "Na⁺/K⁺-ATPase basolatérale"]),
    single("Quel médicament bloque le co-transporteur Na⁺/K⁺/2Cl⁻ de la branche large ascendante de l'anse de Henlé ?", "B", "Le furosémide, un diurétique de l'anse, bloque ce co-transporteur, entraînant diurèse et excrétion de NaCl et K⁺.", ["La spironolactone", "Le furosémide", "L'acétazolamide", "L'amiloride"]),
    single("Quel pourcentage du filtrat glomérulaire est réabsorbé de façon isotonique dans le tube contourné proximal ?", "C", "Environ 65 % du FG est réabsorbé de manière isotonique dans le TCP.", ["35 %", "50 %", "65 %", "90 %"]),
    single("Quelle est la valeur approximative du transport maximal (Tmax) du glucose ?", "B", "Le Tmax du glucose est d'environ 320 mg/min (jusqu'à 375 mg/min selon les sources).", ["80 mg/min", "320 mg/min", "1000 mg/min", "30 mg/min"]),
    single("Que se passe-t-il lorsque la glycémie dépasse le seuil de 170-180 mg% ?", "A", "Le Tmax du glucose est dépassé, entraînant une glycosurie et une diurèse osmotique.", ["Glycosurie et diurèse osmotique", "Réabsorption complète malgré tout", "Arrêt total de la filtration glomérulaire", "Hypoglycémie réflexe"]),
    single("Quel est le mécanisme d'action des gliflozines (inhibiteurs de SGLT2) dans le traitement du diabète ?", "C", "Elles bloquent le co-transporteur SGLT2 responsable de la réabsorption du glucose dans le TCP, provoquant une glycosurie qui abaisse la glycémie.", ["Elles stimulent la sécrétion d'insuline", "Elles bloquent la Na⁺/K⁺-ATPase", "Elles bloquent le co-transporteur SGLT2, entraînant une glycosurie", "Elles augmentent le Tmax du glucose"]),
    single("Quelle est la fonction principale de la branche descendante fine de l'anse de Henlé ?", "A", "Perméable à l'eau et imperméable aux ions/urée, elle assure la réabsorption d'eau et la concentration de l'urine.", ["Réabsorption d'eau et concentration de l'urine", "Réabsorption active des ions", "Sécrétion de potassium", "Ammoniogenèse"]),
    single("Quelle est la composition de l'urine à sa sortie de la branche large ascendante de l'anse de Henlé ?", "B", "Elle est hypotonique, environ 150 mOsm/L, du fait de la réabsorption active des ions sans réabsorption d'eau.", ["Isotonique, 300 mOsm/L", "Hypotonique, environ 150 mOsm/L", "Hypertonique, 1200 mOsm/L", "Identique au plasma"]),
    single("Quel est le rôle des vasa recta dans le mécanisme multiplicateur à contre-courant ?", "C", "Ils permettent la réabsorption passive d'ions et d'eau vers le sang sans dissiper le gradient cortico-papillaire, grâce à leur flux parallèle mais opposé.", ["Ils filtrent le plasma comme le glomérule", "Ils sécrètent activement du potassium", "Ils réabsorbent passivement ions et eau sans dissiper le gradient médullaire", "Ils produisent l'ADH"]),
    single("Quelles cellules du tube collecteur assurent la réabsorption de Na⁺ et la sécrétion de K⁺ sous contrôle de l'aldostérone ?", "A", "Les cellules principales.", ["Les cellules principales", "Les cellules intercalées de type A", "Les cellules intercalées de type B", "Les cellules de la macula densa"]),
    single("Quel type de cellule intercalée intervient dans la correction de l'acidose ?", "A", "Les cellules intercalées de type A sécrètent H⁺ et réabsorbent HCO₃⁻, corrigeant l'acidose.", ["Type A (sécrétion de H⁺, réabsorption de HCO₃⁻)", "Type B (sécrétion de HCO₃⁻, réabsorption de H⁺)", "Les cellules principales", "Aucune, ce rôle revient au TCP"]),
    single("Quel est le principal tampon urinaire responsable de l'acidité titrable ?", "B", "Le tampon phosphate (alcalin/acide) est le principal tampon urinaire.", ["Le tampon bicarbonate", "Le tampon phosphate", "Le tampon protéinate", "Le tampon ammoniac uniquement"]),
    single("Quel est le mécanisme d'action de l'ADH sur le tube collecteur ?", "C", "L'ADH ouvre les aquaporines-2 (AQP-2) au pôle apical des cellules, augmentant la perméabilité à l'eau et permettant sa réabsorption facultative.", ["Elle bloque la Na⁺/K⁺-ATPase", "Elle stimule directement la sécrétion de K⁺", "Elle ouvre les aquaporines-2 (AQP-2) au pôle apical", "Elle inhibe la réabsorption d'urée"]),
    single("Quelle pathologie résulte d'une absence totale d'action de l'ADH ?", "B", "Le diabète insipide, caractérisé par une diurèse majeure (>25 L/jour) et une urine très diluée (osmolarité minimale ≈ 65 mOsm/L).", ["Le syndrome néphrotique", "Le diabète insipide", "L'acidose tubulaire", "L'hyperaldostéronisme"]),
    single("Par quel mécanisme la spironolactone agit-elle comme diurétique épargneur de potassium ?", "A", "Elle bloque les récepteurs de l'aldostérone, inhibant la réabsorption de Na⁺ et la sécrétion de K⁺ dans les cellules principales.", ["Elle bloque les récepteurs de l'aldostérone", "Elle bloque le co-transporteur Na⁺/K⁺/2Cl⁻", "Elle inhibe l'anhydrase carbonique", "Elle stimule les aquaporines-2"]),
    single("Quelles sont les caractéristiques de l'urine finale normale ?", "C", "1,5-2 L/jour, osmolarité hypertonique (jusqu'à 1200 mOsm/L), pH acide (5,5-6, minimum 4,5).", ["5 L/jour, isotonique, pH neutre", "0,5 L/jour uniquement, hypotonique", "1,5-2 L/jour, hypertonique, pH acide (5,5-6)", "10 L/jour, hypertonique, pH alcalin"]),
  ],
  exam: { titre_fr: "Examen chronométré — Fonctions tubulaires", duration_seconds: 1_600 },
};

export const TUBULAR_FUNCTIONS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Que reçoit le tube rénal et que produit-il en sortie ?", question_en: "What does the renal tubule receive and what does it produce as output?", answer_fr: "Il reçoit tout le filtrat glomérulaire (urine primaire) et produit, par réabsorption et sécrétion, l'urine finale.", answer_en: "It receives the entire glomerular filtrate (primary urine) and produces, via reabsorption and secretion, the final urine." },
  { question_fr: "Qu'est-ce qu'un néphrocyte et quelles sont ses adaptations structurelles ?", question_en: "What is a nephrocyte and what are its structural adaptations?", answer_fr: "Une cellule épithéliale tubulaire avec bordure en brosse apicale, jonctions serrées, et de nombreuses Na⁺/K⁺-ATPases basolatérales.", answer_en: "A tubular epithelial cell with an apical brush border, tight junctions, and numerous basolateral Na+/K+-ATPases." },
  { question_fr: "Qu'est-ce que le transport passif tubulaire et quels sont ses déterminants ?", question_en: "What is passive tubular transport and what are its determinants?", answer_fr: "Un transport sans énergie selon un gradient ; déterminé par le gradient, la perméabilité de la paroi et le temps de passage.", answer_en: "Transport without energy along a gradient; determined by the gradient, wall permeability, and transit time." },
  { question_fr: "Quelle est la différence entre transport actif primaire et secondaire ?", question_en: "What is the difference between primary and secondary active transport?", answer_fr: "Le primaire est directement lié à une ATPase ; le secondaire utilise le gradient créé par le transport primaire pour transporter une autre molécule.", answer_en: "Primary is directly linked to an ATPase; secondary uses the gradient created by primary transport to move another molecule." },
  { question_fr: "Quel est le rôle de la Na⁺/K⁺-ATPase basolatérale ?", question_en: "What is the role of the basolateral Na+/K+-ATPase?", answer_fr: "Elle expulse 3 Na⁺ et fait entrer 2 K⁺ pour 1 ATP, créant le gradient électrochimique nécessaire aux autres transports.", answer_en: "It expels 3 Na+ and brings in 2 K+ per ATP, creating the electrochemical gradient needed for other transport." },
  { question_fr: "Quelle hormone stimule la Na⁺/K⁺-ATPase au niveau du tube collecteur ?", question_en: "Which hormone stimulates the Na+/K+-ATPase at the collecting tubule?", answer_fr: "L'aldostérone.", answer_en: "Aldosterone." },
  { question_fr: "Quel est le rôle de la pinocytose dans le TCP ?", question_en: "What is the role of pinocytosis in the PCT?", answer_fr: "Elle permet la réabsorption des protéines filtrées, digérées ensuite en acides aminés dans la cellule.", answer_en: "It allows reabsorption of filtered proteins, which are then digested into amino acids within the cell." },
  { question_fr: "Qu'est-ce que le transport maximal (Tmax) ?", question_en: "What is maximal transport (Tmax)?", answer_fr: "La quantité maximale d'une substance transportable activement par unité de temps, limitée par le nombre de transporteurs disponibles.", answer_en: "The maximum amount of a substance that can be actively transported per unit time, limited by the number of available carriers." },
  { question_fr: "Que se passe-t-il quand le Tmax de réabsorption d'une substance est dépassé ?", question_en: "What happens when the reabsorption Tmax of a substance is exceeded?", answer_fr: "La substance en excès reste dans l'urine (ex. glycosurie).", answer_en: "The excess substance remains in the urine (e.g. glycosuria)." },
  { question_fr: "Quel pourcentage du FG est réabsorbé dans le TCP de façon isotonique ?", question_en: "What percentage of GF is reabsorbed isotonically in the PCT?", answer_fr: "Environ 65 %.", answer_en: "About 65%." },
  { question_fr: "Quels sont les 3 processus ayant lieu dans le TCP ?", question_en: "What are the 3 processes taking place in the PCT?", answer_fr: "Réabsorption iso-osmotique, sécrétion, ammoniogenèse.", answer_en: "Iso-osmotic reabsorption, secretion, ammoniogenesis." },
  { question_fr: "Quel pourcentage du Na⁺ filtré est réabsorbé dans le TCP ?", question_en: "What percentage of filtered Na+ is reabsorbed in the PCT?", answer_fr: "65 %, avec un ratio de 2 HCO₃⁻ pour 8 Cl⁻ (pour 10 Na⁺ réabsorbés).", answer_en: "65%, with a ratio of 2 HCO3- to 8 Cl- (per 10 Na+ reabsorbed)." },
  { question_fr: "Par quels co-transporteurs le glucose est-il réabsorbé dans le TCP ?", question_en: "By which co-transporters is glucose reabsorbed in the PCT?", answer_fr: "SGLT2 (S1, forte capacité/faible affinité) et SGLT1 (S3, faible capacité/forte affinité).", answer_en: "SGLT2 (S1, high capacity/low affinity) and SGLT1 (S3, low capacity/high affinity)." },
  { question_fr: "Comment agissent les gliflozines (inhibiteurs SGLT2) ?", question_en: "How do gliflozins (SGLT2 inhibitors) act?", answer_fr: "Elles bloquent la réabsorption du glucose dans le rein, entraînant une glycosurie et une baisse de la glycémie.", answer_en: "They block renal glucose reabsorption, causing glycosuria and lowering blood glucose." },
  { question_fr: "Au-delà de quelle quantité de protéinurie parle-t-on de protéinurie pathologique ?", question_en: "Above what amount of proteinuria is it considered pathological?", answer_fr: "Au-delà de 150 mg/jour (dépassement du Tmax de réabsorption des protéines).", answer_en: "Above 150 mg/day (exceeding the protein reabsorption Tmax)." },
  { question_fr: "Quelle est la perméabilité de la branche descendante fine de l'anse de Henlé ?", question_en: "What is the permeability of the thin descending limb of the loop of Henle?", answer_fr: "Perméable à l'eau, imperméable aux ions et à l'urée.", answer_en: "Permeable to water, impermeable to ions and urea." },
  { question_fr: "Quelle est la perméabilité de la branche large ascendante de l'anse de Henlé ?", question_en: "What is the permeability of the thick ascending limb of the loop of Henle?", answer_fr: "Perméable aux ions, imperméable à l'eau et à l'urée.", answer_en: "Permeable to ions, impermeable to water and urea." },
  { question_fr: "Quel transporteur de la branche large ascendante est bloqué par le furosémide ?", question_en: "Which transporter of the thick ascending limb is blocked by furosemide?", answer_fr: "Le co-transporteur Na⁺/K⁺/2Cl⁻ apical.", answer_en: "The apical Na+/K+/2Cl- co-transporter." },
  { question_fr: "Quel est le gradient cortico-papillaire typique dans la médulla rénale ?", question_en: "What is the typical cortico-papillary gradient in the renal medulla?", answer_fr: "De 300 mOsm/L (jonction cortex-médulla) à 1200 mOsm/L (papille).", answer_en: "From 300 mOsm/L (cortex-medulla junction) to 1200 mOsm/L (papilla)." },
  { question_fr: "Quelle est l'osmolarité de l'urine à la sortie de l'anse de Henlé ?", question_en: "What is the osmolarity of urine leaving the loop of Henle?", answer_fr: "Hypotonique, environ 150 mOsm/L.", answer_en: "Hypotonic, about 150 mOsm/L." },
  { question_fr: "Quel est le rôle des cellules principales du tube collecteur ?", question_en: "What is the role of the principal cells of the collecting duct?", answer_fr: "Réabsorption de Na⁺ et sécrétion de K⁺, contrôlées par l'aldostérone.", answer_en: "Na+ reabsorption and K+ secretion, controlled by aldosterone." },
  { question_fr: "Quel est le rôle des cellules intercalées de type A ?", question_en: "What is the role of type A intercalated cells?", answer_fr: "Sécrétion de H⁺ et réabsorption de HCO₃⁻, correction de l'acidose.", answer_en: "Secretion of H+ and reabsorption of HCO3-, correcting acidosis." },
  { question_fr: "Quel est le rôle des cellules intercalées de type B ?", question_en: "What is the role of type B intercalated cells?", answer_fr: "Sécrétion de HCO₃⁻ et réabsorption de H⁺, correction de l'alcalose.", answer_en: "Secretion of HCO3- and reabsorption of H+, correcting alkalosis." },
  { question_fr: "Quel est le tampon urinaire le plus important pour l'acidité titrable ?", question_en: "What is the most important urinary buffer for titratable acidity?", answer_fr: "Le tampon phosphate.", answer_en: "The phosphate buffer." },
  { question_fr: "Comment l'ADH agit-elle sur le tube collecteur ?", question_en: "How does ADH act on the collecting duct?", answer_fr: "Elle ouvre les aquaporines-2 au pôle apical, augmentant la réabsorption facultative d'eau.", answer_en: "It opens aquaporin-2 channels at the apical pole, increasing facultative water reabsorption." },
  { question_fr: "Quelle proportion du FG représente la réabsorption d'eau ADH-dépendante ?", question_en: "What proportion of GF does ADH-dependent water reabsorption represent?", answer_fr: "8 à 14 %.", answer_en: "8 to 14%." },
  { question_fr: "Que provoque l'absence d'ADH ?", question_en: "What does the absence of ADH cause?", answer_fr: "Un diabète insipide, avec diurèse majeure (>25 L/jour) et urine très diluée.", answer_en: "Diabetes insipidus, with major diuresis (>25 L/day) and very dilute urine." },
  { question_fr: "Comment agit la spironolactone ?", question_en: "How does spironolactone act?", answer_fr: "Elle bloque les récepteurs de l'aldostérone, entraînant une perte de Na⁺ et une épargne de K⁺.", answer_en: "It blocks aldosterone receptors, causing Na+ loss and K+ sparing." },
  { question_fr: "Quelles sont les caractéristiques de l'urine finale ?", question_en: "What are the characteristics of final urine?", answer_fr: "1,5-2 L/jour, hypertonique (jusqu'à 1200 mOsm/L), pH acide (5,5-6, minimum 4,5).", answer_en: "1.5-2 L/day, hypertonic (up to 1200 mOsm/L), acidic pH (5.5-6, minimum 4.5)." },
  { question_fr: "Quel est le rôle des vasa recta dans le mécanisme multiplicateur à contre-courant ?", question_en: "What is the role of the vasa recta in the countercurrent multiplier mechanism?", answer_fr: "Réabsorber passivement ions et eau vers le sang sans dissiper le gradient cortico-papillaire.", answer_en: "To passively reabsorb ions and water into blood without dissipating the cortico-papillary gradient." },
];

const RENAL_EXCRETION_COURSE = `# Excrétion rénale et épargne des composants plasmatiques

## 1. Épargne et excrétion rénale de l'eau
- L'eau est filtrée au glomérule (FG = 125 mL/min, 180 L/jour, isotonique) puis réabsorbée à 99-99,5 % par les processus tubulaires → urine finale de 1,5-2 L/jour, osmolarité 800 mOsm/L (limites extrêmes 50-1200 mOsm/L), pH acide 5,5-6, débit urinaire 1-2 mL/min (limites 0,5-20 mL/min).
- Répartition de la réabsorption : **65 % dans le TCP** (obligatoire, ADH-indépendante, via aquaporine-1 et solvent drag) ; **15-20 % dans l'anse de Henlé** (branche descendante fine, selon le gradient cortico-papillaire) ; **8-14 % dans les 2 derniers tiers du TCD + TC** (facultative, ADH-dépendante, via aquaporine-2).
- Les **diurétiques de l'anse** (furosémide) bloquent le co-transporteur Na⁺/K⁺/2Cl⁻ de la branche large ascendante → ↓ réabsorption ions → ↓ gradient cortico-papillaire → charge osmotique dans le TC → rétention d'eau dans le TC → excrétion accrue d'eau et d'ions (20-30 % du FG) → diurèse + natriurèse (effet secondaire : perte de K⁺).
- **ADH** : contrôle la réabsorption facultative — ADH ↑ → réabsorption d'eau ↑ → oligurie concentrée (0,5 L/jour, 1200 mOsm/L) ; ADH ↓ (diabète insipide) → polyurie diluée (25 L/jour, 65 mOsm/L). Stimulée par ↑ osmolarité plasmatique et ↓ volume sanguin (hémorragie, transpiration).
- **Aldostérone** : réabsorption d'eau secondaire à celle de Na⁺/Cl⁻.

## 2. Épargne et excrétion rénale du Na⁺
- [Na⁺]plasmatique ≈ 142 mEq/L (principal cation extracellulaire) ; quantité totale ≈ 1,3 g (2/3 dans les fluides, 1/3 dans l'os) ; besoins ≈ 10-20 mEq/jour, consommation habituelle 100-200 mEq/jour.
- Fonctions : excitabilité des cellules excitables (neurone, muscle, cœur, avec K⁺/Cl⁻) ; équilibre hydrique et acido-basique ; échanges membranaires ; volume sanguin et pression artérielle (↑Na⁺ → ↑PA ; ↓Na⁺ → ↓PA, fatigue, crampes, déshydratation).
- Réabsorption 99-99,5 %, excrétion 0,5-1 % (≈ 150 mEq/jour).
- Répartition : **65 % TCP** (10 Na⁺ pour 2 HCO₃⁻ + 8 Cl⁻) ; **20-25 % anse de Henlé** (segment de dilution, co-transporteur Na⁺/K⁺/2Cl⁻ bloqué par le furosémide) ; **5-10 % TCD terminal + TC** (dépendant de l'aldostérone).
- Mécanismes : échanges ioniques (Na⁺ réabsorbé contre H⁺, K⁺, NH₄⁺) et hormonaux — **aldostérone** (rôle majeur : stimule la Na⁺/K⁺-ATPase basale et la perméabilité apicale, bloquée par la spironolactone) et **ADH** (rôle secondaire).

## 3. Épargne et excrétion rénale du K⁺
- [K⁺]plasmatique ≈ 4,5 mEq/L (3,5-5), très précisément contrôlée, principalement par le rein ; 98 % du K⁺ est intracellulaire.
- Fonctions : excitabilité cellulaire ; équilibre hydrique/EAB (avec Na⁺, Cl⁻) ; métabolisme énergétique, synthèse protéique, glycogenèse ; croissance et développement musculaire.
- ↑[K⁺]pl (cytolyse, acidose, diabète, insuffisance rénale, hypo-aldostéronisme) → troubles du rythme → arrêt cardiaque.
- Filtration glomérulaire, réabsorption 90 %, sécrétion dans le TCD/TC (cellules principales), excrétion 12 %.
- Répartition de la réabsorption : **65 % TCP** (paracellulaire, solvent drag) ; **25 % anse de Henlé** (surtout branche large ascendante, bloquée par les diurétiques de l'anse) ; **TCD terminal + TC** : 5 % réabsorption (cellules intercalées, échange H⁺/K⁺) + sécrétion (cellules principales).
- Régulation de la sécrétion de K⁺ : [K⁺]pl (rétrocontrôle) ; aldostérone (stimule, bloquée par spironolactone) ; EAB (compétition K⁺/H⁺ : alcalose → sécrétion K⁺ ↑) ; apport de Na⁺ (↑ débit tubulaire → ↑ sécrétion de K⁺).
- Observation clinique : l'apport de Na⁺ influence l'excrétion de K⁺, mais l'inverse n'est pas vrai.

## 4. Épargne rénale du Cl⁻
- [Cl⁻]plasmatique ≈ 105 mEq/L, principal anion extracellulaire ; rôle similaire au Na⁺ (excitabilité, équilibre hydrique/EAB, échanges membranaires).
- Réabsorption 99-99,5 % : **70-80 % dans le TCP** (suit le Na⁺, dépend de l'EAB) ; anse de Henlé (branche large ascendante : réabsorption active via le co-transporteur Na⁺/K⁺/2Cl⁻, bloquée par le furosémide) ; **TCD terminal + TC** : dépendante de l'aldostérone (réabsorption passive suivant la réabsorption active de Na⁺).

## 5. Épargne rénale du Ca²⁺ et du Mg²⁺
- [Ca²⁺]plasmatique ≈ 5 mEq/L (9-11 mg%) ; important pour l'excitabilité neuromusculaire. Distribution : 99 % osseux, 1 % extracellulaire, 0,1 % intracellulaire. En plasma : 50 % ionisé (filtré), 10 % lié à des anions (filtré), 40 % lié aux protéines (non filtré).
- Réabsorption 98-99 % : **65 % TCP** (passif, paracellulaire) ; **25-30 % anse de Henlé** (branche large ascendante, passif paracellulaire) ; **5-10 % TCD terminal + TC** (actif, Ca²⁺-ATPase, Tmax = 0,125 mM/min — site de régulation précise).
- Régulation : **PTH** et **vitamine D3** (calcitriol) ↑ réabsorption de Ca²⁺ (surtout branche large ascendante + TCD) et ↑ excrétion de phosphate ; **calcitonine** ↓ réabsorption de Ca²⁺ et de phosphate ; EAB (alcalose → ↑ réabsorption ; acidose → ↓ réabsorption → calciurie → risque de lithiase rénale).
- [Mg²⁺]plasmatique ≈ 3 mEq/L ; rôle dans de nombreux systèmes enzymatiques intracellulaires. Réabsorption 94-95 % : **30 % TCP** (passif) ; **65 % anse de Henlé** (branche large ascendante, principal site) ; **< 5 % TCD terminal + TC**. Régulation : PTH (↑ réabsorption, surtout branche large ascendante + TCD), [Mg²⁺]pl et [Ca²⁺]pl (rétrocontrôle inversement proportionnel).

## 6. Rôle du rein dans l'équilibre acido-basique (EAB)
- Constantes plasmatiques : pH = 7,4 ± 0,05 (pH intracellulaire 6-7,4) ; PCO₂ = 38-42 mmHg ; [HCO₃⁻] = 23-27 mEq/L ; H₂CO₃ = 1,2 mmol/L ; base excess = -2 à +2 mEq/L ; trou anionique = [Na⁺] − [Cl⁻] − [HCO₃⁻] ≈ 10 mEq/L (acidose métabolique).
- 3 mécanismes de maintien de l'EAB, par ordre de rapidité/durée : **systèmes tampons** (immédiat, court terme), **fonction respiratoire** (contrôle du CO₂), **fonction rénale** (lente : heures-jours, mais efficace et durable).
- **Systèmes tampons** : plasmatique (bicarbonate, le plus important — équation de Henderson-Hasselbalch, pK = 6,1, [HCO₃⁻] = 24 mEq/L) ; urinaire (phosphate, pK = 6,8) ; cellulaire (protéinate, pK ≈ 7,4).
- **Fonction respiratoire** : tachypnée → ↓CO₂ (hypocapnie) → ↓[H⁺] → compense une acidose métabolique / cause une alcalose respiratoire ; bradypnée → ↑CO₂ (hypercapnie) → ↑[H⁺] → compense une alcalose métabolique / cause une acidose respiratoire.
- **Fonction rénale** (4 mécanismes) : sécrétion de H⁺ ; réabsorption et synthèse de HCO₃⁻ ; acidification des tampons urinaires (pH urinaire 4,5-8) ; excrétion de NH₄⁺ (sels d'ammonium).

### Sécrétion de H⁺
- Stimulée par : ↑PCO₂, ↑[H⁺]plasmatique (acidose), aldostérone.
- H⁺ produit par le métabolisme : 40-80 mM/jour, excrété via : **acidité titrable** (tampons urinaires acides, 50 %, 20-40 mM/jour) et **sels d'ammonium** (NH₄Cl, 50 %, 30-40 mM/jour — l'excès de H⁺ en acidose métabolique, ex. acidocétose diabétique, est éliminé par cette voie).
- Répartition : TCP 80-90 % (échangeur H⁺/Na⁺, couplé à la réabsorption de HCO₃⁻) ; anse de Henlé (branche large ascendante) 10 % ; TCD terminal + TC 10 % (acidification maximale, pH urinaire jusqu'à 6, limites 4,5-8) via l'échangeur H⁺/Na⁺ et la pompe H⁺ (cellules intercalées, indépendante du Na⁺).

### Réabsorption du HCO₃⁻
- [HCO₃⁻]plasmatique = 24-27 mEq/L. Si ≤ 27 mEq/L : réabsorbé à 100 % (clairance = 0) — non réabsorbé directement depuis l'urine, mais un équivalent est produit par le néphrocyte via l'anhydrase carbonique. Si > 27 mEq/L : apparaît dans l'urine (les inhibiteurs de l'anhydrase carbonique comme l'**acétazolamide** provoquent une diurèse alcalinisante, utile en alcalose... utilisée en cas de nécessité d'excréter du HCO₃⁻, ex. alcalose métabolique).
- Répartition : TCP 80-90 % ; anse de Henlé (ascendante) même mécanisme ; TCD terminal + TC 5-10 %.

### Acidification des tampons urinaires (acidité titrable)
- Principal tampon : phosphate (alcalin/acide). Le H⁺ transforme le phosphate alcalin en phosphate acide, éliminant environ 50 % du H⁺ produit par le catabolisme ; pour chaque H⁺ sécrété, 1 HCO₃⁻ est réabsorbé.

### Excrétion de NH₄⁺
- NH₃ produit dans le TCP (30 % filtré, 70 % par désamination du glutamate/glutamine) diffuse passivement dans la lumière tubulaire ; en présence de H⁺ (urine acide), il forme NH₄⁺, piégé (« trapped diffusion ») et excrété sous forme de sels d'ammonium (NH₄Cl) — élimine 50 % du H⁺ normal ET tout l'excès de H⁺ en acidose chronique (odeur ammoniaquée de l'urine en acidose). Pour chaque NH₄⁺ excrété, 1 HCO₃⁻ est réabsorbé. En urine alcaline, NH₃ diffuse en retour et l'ammoniogenèse s'arrête.

### Variations de l'EAB
- **Acidose** (pH < 7,35) : respiratoire (↑PCO₂ par bradypnée) ou métabolique (↓HCO₃⁻) ; le rein compense par sécrétion de H⁺ et synthèse/réabsorption de HCO₃⁻.
- **Alcalose** (pH > 7,45) : respiratoire (↓PCO₂ par tachypnée) ou métabolique (↑HCO₃⁻) ; le rein compense par sécrétion de H⁺ et excrétion de HCO₃⁻.

## 7. Excrétion rénale de NH₃ et 8. de l'urée
- [NH₃]plasmatique = 40-80 μM/L, toxique pour le SNC (traverse la barrière hémato-encéphalique) ; détoxifié par : uréagenèse hépatique, formation de glutamine dans le SNC, excrétion rénale sous forme de sels d'ammonium (≈ 40 mM/jour).

## Points à retenir
- L'eau, le Na⁺ et le Cl⁻ suivent un profil de réabsorption similaire : ≈ 65 % TCP, 20-25 % anse de Henlé, le reste (facultatif) dans le TCD/TC sous contrôle ADH (eau) et aldostérone (Na⁺, Cl⁻).
- Le K⁺ est réabsorbé à 90 % mais aussi sécrété dans le TCD/TC (cellules principales, aldostérone-dépendant).
- Le Ca²⁺ et le Mg²⁺ dépendent de la PTH et de la vitamine D3 (Ca²⁺) et sont majoritairement réabsorbés dans l'anse de Henlé.
- Le rein maintient l'EAB via la sécrétion de H⁺, la réabsorption/synthèse de HCO₃⁻, l'acidification des tampons urinaires (acidité titrable) et l'excrétion d'ammonium — un mécanisme lent mais efficace et décisif.`;

export const RENAL_EXCRETION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Excrétion rénale et épargne plasmatique",
    source_label: "Physiologie — UMFT Timisoara, Lecture 3 (Rénal)",
    content_fr: RENAL_EXCRETION_COURSE,
  },
  qcm: [
    single("Quel pourcentage de l'eau filtrée est réabsorbé dans le tube contourné proximal ?", "B", "65 %, de façon obligatoire et indépendante de l'ADH.", ["35 %", "65 %", "90 %", "8-14 %"]),
    single("Où a lieu la réabsorption d'eau facultative, ADH-dépendante ?", "C", "Dans les 2 derniers tiers du tube contourné distal et le tube collecteur, représentant 8-14 % du FG.", ["Dans le tube contourné proximal", "Dans la branche large ascendante de l'anse de Henlé", "Dans les 2 derniers tiers du TCD et le tube collecteur", "Dans le glomérule lui-même"]),
    single("Quel est l'effet des diurétiques de l'anse (furosémide) sur la réabsorption d'eau ?", "A", "En bloquant le co-transporteur Na⁺/K⁺/2Cl⁻, ils diminuent le gradient cortico-papillaire, réduisant la réabsorption d'eau et augmentant la diurèse.", ["Ils diminuent le gradient cortico-papillaire et augmentent la diurèse", "Ils augmentent directement la sécrétion d'ADH", "Ils bloquent les récepteurs de l'aldostérone", "Ils n'ont aucun effet sur le gradient médullaire"]),
    single("Quelle est la concentration plasmatique normale du Na⁺ ?", "B", "Environ 142 mEq/L, le principal cation extracellulaire.", ["105 mEq/L", "142 mEq/L", "24 mEq/L", "4,5 mEq/L"]),
    single("Quel pourcentage du Na⁺ filtré est réabsorbé dans le tube contourné proximal ?", "C", "65 %, selon la même proportion que pour l'eau.", ["20-25 %", "5-10 %", "65 %", "99,9 %"]),
    single("Quelle hormone joue le rôle principal dans la réabsorption du Na⁺ au niveau distal ?", "A", "L'aldostérone, qui stimule la Na⁺/K⁺-ATPase basale et la perméabilité apicale au Na⁺.", ["L'aldostérone", "L'ADH", "La PTH", "La calcitonine"]),
    single("Quelle est la concentration plasmatique normale du K⁺ ?", "B", "Environ 4,5 mEq/L (3,5-5 mEq/L), très précisément régulée.", ["1 mEq/L", "4,5 mEq/L", "24 mEq/L", "105 mEq/L"]),
    single("Quel pourcentage du K⁺ de l'organisme est intracellulaire ?", "C", "Environ 98 %.", ["50 %", "80 %", "98 %", "100 %"]),
    single("Que provoque une hyperkaliémie sévère non traitée ?", "B", "Des troubles du rythme cardiaque pouvant aller jusqu'à l'arrêt cardiaque.", ["Une hypertension isolée sans risque cardiaque", "Des troubles du rythme cardiaque, voire un arrêt cardiaque", "Une alcalose métabolique immédiate", "Une polyurie majeure"]),
    single("Quel type de cellules du tube collecteur sécrète le K⁺ ?", "A", "Les cellules principales, sous contrôle de l'aldostérone.", ["Les cellules principales", "Les cellules intercalées de type A", "Les cellules intercalées de type B", "Les podocytes"]),
    single("Comment l'alcalose influence-t-elle la sécrétion de K⁺ ?", "A", "Du fait de la compétition K⁺/H⁺, l'alcalose favorise la sécrétion de K⁺.", ["Elle l'augmente (compétition K⁺/H⁺)", "Elle la diminue", "Elle n'a aucun effet", "Elle bloque totalement la sécrétion de K⁺"]),
    single("Quelle est la concentration plasmatique normale du Ca²⁺ ?", "B", "Environ 5 mEq/L (9-11 mg%).", ["1 mEq/L", "5 mEq/L", "24 mEq/L", "105 mEq/L"]),
    single("Où se situe la majeure partie du calcium de l'organisme ?", "C", "99 % du calcium est stocké dans l'os, réservoir principal.", ["Dans le plasma", "Dans le liquide intracellulaire", "Dans l'os", "Dans les globules rouges"]),
    single("Quelles hormones augmentent la réabsorption rénale du Ca²⁺ ?", "A", "La PTH et la vitamine D3 (calcitriol) augmentent la réabsorption de Ca²⁺, notamment dans la branche large ascendante et le TCD.", ["La PTH et la vitamine D3", "La calcitonine et l'ADH", "L'aldostérone et l'ANP", "L'insuline et le glucagon"]),
    single("Dans quel segment le Mg²⁺ est-il majoritairement réabsorbé ?", "B", "Dans la branche large ascendante de l'anse de Henlé (environ 65 %).", ["Le tube contourné proximal", "La branche large ascendante de l'anse de Henlé", "Le tube collecteur", "Le glomérule directement"]),
    single("Quelle est la valeur normale du pH plasmatique ?", "C", "7,4 ± 0,05.", ["7,0 ± 0,1", "6,8 ± 0,2", "7,4 ± 0,05", "8,0 ± 0,1"]),
    single("Parmi les 3 mécanismes de maintien de l'équilibre acido-basique, lequel agit le plus rapidement ?", "A", "Les systèmes tampons agissent immédiatement, contrairement à la fonction respiratoire (minutes) et à la fonction rénale (heures à jours).", ["Les systèmes tampons", "La fonction respiratoire", "La fonction rénale", "Le système rénine-angiotensine"]),
    single("Quel est le système tampon plasmatique le plus important ?", "B", "Le système bicarbonate (HCO₃⁻/H₂CO₃), avec un pK de 6,1 proche du pH physiologique.", ["Le système phosphate", "Le système bicarbonate", "Le système protéinate", "Le système ammoniac"]),
    multi("Par quels mécanismes le rein élimine-t-il l'excès de H⁺ ?", ["A", "B"], "Le rein élimine l'excès de H⁺ via l'acidification des tampons urinaires (acidité titrable, surtout le phosphate) et la production de sels d'ammonium.", ["Acidification des tampons urinaires (acidité titrable)", "Production de sels d'ammonium (NH4+)", "Excrétion directe de bicarbonate en excès uniquement", "Réabsorption complète du glutamate"]),
    single("Que reflète une odeur ammoniaquée de l'urine dans un contexte d'acidose chronique ?", "C", "L'excrétion accrue de NH₄⁺, principal mécanisme d'élimination de l'excès de H⁺ en acidose chronique.", ["Une infection urinaire systématique", "Une insuffisance hépatique isolée", "Une excrétion accrue de sels d'ammonium liée à l'acidose", "Une alcalose respiratoire compensée"]),
  ],
  exam: { titre_fr: "Examen chronométré — Excrétion rénale et équilibre acido-basique", duration_seconds: 1_600 },
};

export const RENAL_EXCRETION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel pourcentage de l'eau filtrée est finalement réabsorbé au total ?", question_en: "What percentage of filtered water is ultimately reabsorbed in total?", answer_fr: "99 à 99,5 %.", answer_en: "99 to 99.5%." },
  { question_fr: "Quelle est la répartition de la réabsorption d'eau entre TCP, anse de Henlé et TCD/TC ?", question_en: "How is water reabsorption distributed between the PCT, loop of Henle, and DCT/CD?", answer_fr: "65 % TCP (obligatoire), 15-20 % anse de Henlé, 8-14 % TCD/TC (facultative, ADH-dépendante).", answer_en: "65% PCT (mandatory), 15-20% loop of Henle, 8-14% DCT/CD (facultative, ADH-dependent)." },
  { question_fr: "Quel est l'effet de la stimulation de l'ADH sur l'osmolarité et le volume urinaire ?", question_en: "What is the effect of ADH stimulation on urine osmolarity and volume?", answer_fr: "Elle augmente la réabsorption d'eau, réduisant le volume urinaire (oligurie) et augmentant son osmolarité (urine concentrée).", answer_en: "It increases water reabsorption, reducing urine volume (oliguria) and increasing its osmolarity (concentrated urine)." },
  { question_fr: "Quelle est la concentration plasmatique normale du Na⁺ ?", question_en: "What is the normal plasma concentration of Na+?", answer_fr: "≈ 142 mEq/L.", answer_en: "≈142 mEq/L." },
  { question_fr: "Quelle proportion du Na⁺ filtré est excrétée dans l'urine finale ?", question_en: "What proportion of filtered Na+ is excreted in final urine?", answer_fr: "0,5 à 1 % (≈150 mEq/jour).", answer_en: "0.5 to 1% (≈150 mEq/day)." },
  { question_fr: "Quelle hormone contrôle principalement la réabsorption du Na⁺ dans le segment distal ?", question_en: "Which hormone mainly controls Na+ reabsorption in the distal segment?", answer_fr: "L'aldostérone.", answer_en: "Aldosterone." },
  { question_fr: "Par quel médicament l'effet de l'aldostérone sur le Na⁺ est-il bloqué ?", question_en: "Which drug blocks the effect of aldosterone on Na+?", answer_fr: "La spironolactone.", answer_en: "Spironolactone." },
  { question_fr: "Quelle est la concentration plasmatique normale du K⁺ ?", question_en: "What is the normal plasma concentration of K+?", answer_fr: "≈ 4,5 mEq/L (3,5-5 mEq/L).", answer_en: "≈4.5 mEq/L (3.5-5 mEq/L)." },
  { question_fr: "Quel pourcentage du K⁺ filtré est excrété dans l'urine finale ?", question_en: "What percentage of filtered K+ is excreted in final urine?", answer_fr: "Environ 12 %.", answer_en: "About 12%." },
  { question_fr: "Où le K⁺ est-il sécrété dans le tube rénal ?", question_en: "Where is K+ secreted in the renal tubule?", answer_fr: "Dans le TCD terminal et le tube collecteur, par les cellules principales.", answer_en: "In the terminal DCT and collecting duct, by principal cells." },
  { question_fr: "Quel est l'effet de l'apport en Na⁺ sur l'excrétion de K⁺ ?", question_en: "What is the effect of Na+ intake on K+ excretion?", answer_fr: "Un apport élevé en Na⁺ augmente le débit tubulaire et donc l'excrétion de K⁺ (l'inverse n'est pas vrai).", answer_en: "High Na+ intake increases tubular flow and thus K+ excretion (the reverse is not true)." },
  { question_fr: "Quelle est la concentration plasmatique normale du Cl⁻ ?", question_en: "What is the normal plasma concentration of Cl-?", answer_fr: "≈ 105 mEq/L, principal anion extracellulaire.", answer_en: "≈105 mEq/L, the main extracellular anion." },
  { question_fr: "Comment le Cl⁻ est-il réabsorbé dans le TCP ?", question_en: "How is Cl- reabsorbed in the PCT?", answer_fr: "Il suit le Na⁺, avec un ratio de 8 Cl⁻ pour 2 HCO₃⁻ (pour 10 Na⁺).", answer_en: "It follows Na+, with a ratio of 8 Cl- to 2 HCO3- (per 10 Na+)." },
  { question_fr: "Où se trouve 99 % du calcium de l'organisme ?", question_en: "Where is 99% of the body's calcium located?", answer_fr: "Dans l'os (réservoir de calcium).", answer_en: "In bone (the calcium reservoir)." },
  { question_fr: "Quel pourcentage du Ca²⁺ plasmatique est lié aux protéines et donc non filtré ?", question_en: "What percentage of plasma Ca2+ is protein-bound and thus not filtered?", answer_fr: "Environ 40 %.", answer_en: "About 40%." },
  { question_fr: "Quelles hormones régulent la réabsorption rénale du Ca²⁺ ?", question_en: "Which hormones regulate renal Ca2+ reabsorption?", answer_fr: "La PTH et la vitamine D3 (calcitriol), qui l'augmentent ; la calcitonine, qui la diminue.", answer_en: "PTH and vitamin D3 (calcitriol), which increase it; calcitonin, which decreases it." },
  { question_fr: "Quel est le Tmax de réabsorption du Ca²⁺ ?", question_en: "What is the Tmax for Ca2+ reabsorption?", answer_fr: "0,125 mM/min.", answer_en: "0.125 mM/min." },
  { question_fr: "Dans quel segment le Mg²⁺ est-il majoritairement réabsorbé ?", question_en: "In which segment is Mg2+ mainly reabsorbed?", answer_fr: "La branche large ascendante de l'anse de Henlé (65 %).", answer_en: "The thick ascending limb of the loop of Henle (65%)." },
  { question_fr: "Quelle est la valeur normale du pH plasmatique ?", question_en: "What is the normal plasma pH value?", answer_fr: "7,4 ± 0,05.", answer_en: "7.4 ± 0.05." },
  { question_fr: "Quelles sont les valeurs normales de PCO2 et de [HCO3-] plasmatiques ?", question_en: "What are the normal plasma PCO2 and [HCO3-] values?", answer_fr: "PCO2 = 38-42 mmHg ; [HCO3-] = 23-27 mEq/L.", answer_en: "PCO2 = 38-42 mmHg; [HCO3-] = 23-27 mEq/L." },
  { question_fr: "Quels sont les 3 mécanismes de maintien de l'équilibre acido-basique, du plus rapide au plus lent ?", question_en: "What are the 3 mechanisms maintaining acid-base balance, from fastest to slowest?", answer_fr: "Les systèmes tampons (immédiat), la fonction respiratoire (minutes), la fonction rénale (heures-jours).", answer_en: "Buffer systems (immediate), respiratory function (minutes), renal function (hours-days)." },
  { question_fr: "Quel est le système tampon plasmatique le plus important ?", question_en: "What is the most important plasma buffer system?", answer_fr: "Le système bicarbonate (HCO3-/H2CO3).", answer_en: "The bicarbonate system (HCO3-/H2CO3)." },
  { question_fr: "Quel est le principal tampon urinaire ?", question_en: "What is the main urinary buffer?", answer_fr: "Le système phosphate (alcalin/acide).", answer_en: "The phosphate system (alkaline/acidic)." },
  { question_fr: "Quelles sont les 4 actions rénales de maintien de l'équilibre acido-basique ?", question_en: "What are the 4 renal actions maintaining acid-base balance?", answer_fr: "Sécrétion de H+, réabsorption/synthèse de HCO3-, acidification des tampons urinaires, excrétion de NH4+.", answer_en: "H+ secretion, HCO3- reabsorption/synthesis, urinary buffer acidification, NH4+ excretion." },
  { question_fr: "Dans quel segment a lieu 80-90 % de la sécrétion de H+ ?", question_en: "In which segment does 80-90% of H+ secretion occur?", answer_fr: "Le tube contourné proximal.", answer_en: "The proximal convoluted tubule." },
  { question_fr: "Que représente l'acidité titrable ?", question_en: "What does titratable acidity represent?", answer_fr: "L'acidification des tampons urinaires (surtout le phosphate), éliminant 50 % du H+ produit.", answer_en: "The acidification of urinary buffers (mainly phosphate), eliminating 50% of produced H+." },
  { question_fr: "D'où provient l'ammoniac (NH3) sécrété dans le TCP ?", question_en: "Where does the ammonia (NH3) secreted in the PCT come from?", answer_fr: "30 % filtré depuis le plasma, 70 % produit par désamination du glutamate/glutamine.", answer_en: "30% filtered from plasma, 70% produced by deamination of glutamate/glutamine." },
  { question_fr: "Qu'est-ce que la « trapped diffusion » de NH4+ ?", question_en: "What is the \"trapped diffusion\" of NH4+?", answer_fr: "En milieu acide, NH3 se combine à H+ pour former NH4+, qui ne peut plus diffuser en retour dans la cellule et est donc excrété.", answer_en: "In acidic conditions, NH3 combines with H+ to form NH4+, which can no longer diffuse back into the cell and is thus excreted." },
  { question_fr: "Pourquoi l'urine a-t-elle une odeur ammoniaquée en acidose chronique ?", question_en: "Why does urine smell of ammonia in chronic acidosis?", answer_fr: "Parce que l'excrétion de sels d'ammonium (NH4+) est le mécanisme principal d'élimination de l'excès de H+.", answer_en: "Because excretion of ammonium salts (NH4+) is the main mechanism for eliminating excess H+." },
  { question_fr: "Comment le rein compense-t-il une acidose métabolique ?", question_en: "How does the kidney compensate for metabolic acidosis?", answer_fr: "En augmentant la sécrétion de H+ et la synthèse/réabsorption de HCO3-.", answer_en: "By increasing H+ secretion and HCO3- synthesis/reabsorption." },
];

const RENAL_REGULATION_COURSE = `# Régulation de la fonction rénale et miction

## 1. Régulation nerveuse de la fonction rénale
- Le système nerveux sympathique (SNS) innerve le muscle lisse des artérioles (aa, ea) et les tubules rénaux, avec une origine T12-L2, des médiateurs adrénaline/noradrénaline et des récepteurs α-adrénergiques.
- Effets : vasoconstriction artériolaire (→ ↓FG) ; activation du SRAA (→ angiotensine II) ; ↑ réabsorption tubulaire de Na⁺.
- La stimulation sympathique (ex. hémorragie sévère, ischémie) diminue la pression artérielle et le volume sanguin ressentis par le corps → réponse : diminution de l'excrétion de NaCl et d'eau → normalisation de la PA et du volume sanguin.

## 2. Régulation humorale de la fonction rénale
Assurée par 4 systèmes : **ADH**, **aldostérone**, **SRAA**, **ANP**.

### ADH (hormone antidiurétique)
- Synthétisée dans l'hypothalamus (noyaux supraoptique/paraventriculaire), stockée dans la posthypophyse, libérée selon les besoins.
- Effets rénaux : (1) réabsorption d'eau (10-14 % du FG) dans le TCD/TC, avec réabsorption ionique secondaire ; (2) réabsorption d'urée dans le TC → contribue au gradient cortico-papillaire (rôle dans le MMCC) ; (3) réabsorption de Na⁺/Cl⁻ dans la branche large ascendante de l'anse de Henlé.
- Mécanisme : l'ADH se lie à un récepteur basal des néphrocytes → activation de l'adénylate cyclase → AMPc → activation de la protéine kinase → ouverture des canaux aquaporine-2 (AQP-2) au pôle apical → réabsorption d'eau « facultative ».
- Facteurs stimulants : ↑ osmolarité plasmatique (détectée par les **osmorécepteurs** de l'hypothalamus antérieur, les plus sensibles, détectant de très faibles variations) ; ↓ volume sanguin (détecté par les **barorécepteurs** systémiques à haute pression — sinus carotidien, crosse aortique — et pulmonaires à basse pression — oreillette gauche, veines pulmonaires — moins sensibles, détectant des variations > 5 %).
- Variations : ↑ADH → oligurie hypertonique (volume ↓ 0,5 L/jour, osmolarité ↑ 1200 mOsm/L) ; ↓ADH (diabète insipide) → polyurie hypotonique (volume ↑ 25 L/jour, osmolarité ↓ 65 mOsm/L). L'alcool inhibe l'ADH → diurèse augmentée.

### Aldostérone
- Hormone stéroïdienne du cortex surrénalien ; rôle : épargne de Na⁺, excrétion de K⁺ ; site d'action : TCD terminal + TC.
- Stimulée par : ↑[K⁺]pl, ↓[Na⁺]pl, et surtout le **SRAA** (activé par ↓ volume sanguin, ↓PA, ↓[Na⁺]pl, ↑[Na⁺]urinaire au niveau de la macula densa, stimulation sympathique).
- Mécanisme : l'aldostérone pénètre le néphrocyte, se lie à un récepteur cytoplasmique → synthèse d'ARNm → traduction en protéines spécifiques. Effets : au pôle basal, stimulation de la Na⁺/K⁺-ATPase (Na⁺ sort, K⁺ entre) ; au pôle apical, ouverture des canaux Na⁺/K⁺ (Na⁺ entre, K⁺ sort vers la lumière tubulaire).
- Effets associés : réabsorption passive de Cl⁻/HCO₃⁻ et d'eau (restaure volume sanguin, PA, EAB) ; élimination de K⁺, Mg²⁺, Ca²⁺, NH₄⁺, H⁺ (acidification de l'urine).
- Bloquée par la **spironolactone** (diurétique épargneur de K⁺).

### SRAA (système rénine-angiotensine-aldostérone)
- La **rénine**, enzyme protéolytique sécrétée par les cellules granulaires de l'appareil juxtaglomérulaire (aa et ea), est stimulée par : ↓PA, ↓volume sanguin, ↓[Na⁺]pl, ↓[Na⁺]urinaire à la macula densa (rétrocontrôle tubulo-glomérulaire), stimulation sympathique. Inhibée par l'aldostérone (rétrocontrôle négatif via ↑[Na⁺]pl) et l'ANP.
- Effets de l'**angiotensine II** : systémiques — vasoconstriction, ↑résistance périphérique totale, ↑PA ; rénaux — VC modérée de l'ea (GF constant) ou VC marquée de aa + ea (↓GF) ; ↑ réabsorption de Na⁺ ; ↑ sécrétion d'aldostérone (→ réabsorption Na⁺/Cl⁻/eau) ; ↑ ADH (→ réabsorption d'eau).
- Effets de l'**angiotensine III** : vasoconstriction plus faible ; stimule aussi l'aldostérone.
- Conclusion : le SRAA contrôle la PA, le volume sanguin, [Na⁺]pl et la perfusion rénale. L'AJG contrôle le DFG via les barorécepteurs de l'aa (↓pression aa → ↑rénine) et le rétrocontrôle tubulo-glomérulaire (↓Na⁺ à la MD → VD aa + VC ea via rénine).

### ANP (peptide natriurétique auriculaire)
- Sécrété par les myocytes auriculaires en réponse à leur distension (↑ volume sanguin).
- Rôle : excrétion urinaire de Na⁺ + diurèse.
- Mécanisme : ↑DFG (VD de l'aa + VC de l'ea, ↑Kf) ; ↑DSR médullaire → ↓gradient cortico-papillaire → ↓réabsorption d'eau dans le TC ; antagoniste du SRAA (↓rénine, ↓aldostérone) → ↓réabsorption tubulaire de Na⁺ (et secondairement Cl⁻, eau) → élimination urinaire de Na⁺.
- Effet global : diurétique et natriurétique. Effets associés : vasodilatation systémique (↓PA), rôle de neurotransmetteur.
- Stimulé par : ↑[Na⁺]pl, angiotensine II, ↑volume sanguin. Inhibé par : ↓[Na⁺]pl.

## 3. Transport de l'urine des reins vers la vessie
- Trajet : tubes collecteurs → papilles → petits calices → grands calices → pelvis rénal → **uretères** → vessie.
- Les uretères sont des structures tubulaires musculo-élastiques (épithélium + couche musculaire trilaminaire de fibres lisses) qui traversent obliquement la paroi vésicale à travers le muscle détrusor — la contraction du détrusor comprime l'uretère, empêchant le **reflux vésico-urétéral (RVU)**.
- Innervation : SNS (inhibe le péristaltisme), PSNS (stimule le péristaltisme), plexus nerveux intramural.
- La formation d'urine est **continue** ; son évacuation est **discontinue** (miction).
- Des cellules « pacemaker » du pelvis rénal (automatisme) déclenchent des potentiels d'action → contractions péristaltiques (1-8/min) qui propulsent l'urine vers la vessie ; le tonus et le péristaltisme sont sous contrôle autonome (SNS via le nerf hypogastrique, PSNS via le nerf vague, tous deux ↑tonus + péristaltisme).

## 4. Accumulation, contention et évacuation de l'urine
- Assurées par la **vessie**, dont la paroi (détrusor) est un muscle lisse trilaminaire à faible résistance électrique (conduction rapide des potentiels d'action).
- Le col vésical comporte deux sphincters : le **sphincter interne** (lisse, sous contrôle végétatif : SNS stimulateur, PSNS inhibiteur) et le **sphincter externe** (strié, sous contrôle volontaire).
- Innervation vésicale :
  - **PSNS** (nerfs pelviens, origine S2-S3) : fibres sensitives (récepteurs d'étirement du détrusor, stimulés par la distension) et motrices → contraction du détrusor + relâchement du sphincter interne → miction.
  - **SNS** (nerfs hypogastriques, origine surtout L2) : effet principal sur la vascularisation vésicale ; effet faible : relâchement du détrusor + contraction du sphincter interne ; rôle dans la sensation de « plénitude » et parfois la douleur.
  - **Contrôle cortical** : centres pontiques et corticaux, afférences par la voie spino-thalamique, efférences par les nerfs pudendaux vers le sphincter externe.
- Physiologie du remplissage : à 100 mL d'urine, pression ≈ 15 cmH₂O (limite de résistance du sphincter interne) ; à 400 mL, pression ≈ 20 cmH₂O, avec apparition de contractions rythmiques contenues par le sphincter externe ; à 70 cmH₂O, limite de résistance du sphincter externe. Normalement, **500-600 mL** s'accumulent sans distension douloureuse — la vessie adapte son tonus au contenu.

## 5. Miction
- Définition : acte réflexe spinal sous contrôle volontaire inhibiteur/facilitateur.
- Chez le nouveau-né et le nourrisson : acte purement réflexe (PSNS) ; après la myélinisation des centres nerveux, un contrôle cortical s'installe.
- Le remplissage vésical déclenche des contractions par le **réflexe d'étirement** : récepteurs d'étirement du détrusor (surtout paroi postéro-inférieure) → voie afférente (nerfs pudendaux) → centres S2-S3 → voie efférente (nerfs pudendaux, PSNS) → effecteurs : contraction du détrusor + relâchement du sphincter interne → miction.
- Le réflexe s'auto-entretient (la contraction initiale stimule davantage les récepteurs d'étirement) ; durée : secondes à 1 minute, puis diminution progressive permettant la relaxation vésicale.
- Phases du réflexe : augmentation rapide de la pression du détrusor → phase soutenue de pression élevée → retour au tonus basal.
- Quand le réflexe est suffisamment fort, il stimule les nerfs pudendaux, relâchant le sphincter externe ; le contrôle volontaire peut alors soit relâcher le sphincter externe (miction), soit le contracter (miction différée).
- Si la vessie ne se vide pas après le réflexe, celui-ci est inhibé quelques minutes à 1 heure, avant qu'un nouveau réflexe, plus fort et plus fréquent, n'apparaisse. Si la vessie n'est que partiellement remplie, une relaxation spontanée du détrusor peut survenir.
- Le contrôle cortical inhibe la plupart du temps le réflexe de miction ; même en présence du réflexe, la contraction soutenue du sphincter externe s'y oppose jusqu'au moment opportun ; si la miction est volontairement déclenchée, les centres corticaux facilitent les centres sacrés PSNS et le relâchement du sphincter externe.

## 6. Autres fonctions rénales (non excrétrices)
1. **Fonction excrétrice** : élimination des produits cataboliques et molécules étrangères (composés azotés non protéiques — urée, acide urique, créatinine, NH₃ ; molécules organiques non azotées — pigments biliaires, résidus glucidiques/lipidiques ; sels — phosphates, bicarbonates, sulfates ; excès d'électrolytes ; molécules exogènes — colorants, produits de contraste, médicaments, toxines).
2. **Homéostasie du milieu intérieur** : équilibre hydro-électrolytique et osmotique ; équilibre acido-basique (réabsorption/synthèse de HCO₃⁻, élimination de H⁺, ammoniogenèse) ; hémostase et fibrinolyse (synthèse d'urokinase, activateur du plasminogène) ; maintien des concentrations plasmatiques normales (glucose, acides aminés, vitamines).
3. **Fonction endocrine** : synthèse d'**érythropoïétine** (libérée en hypoxie, stimule l'érythropoïèse médullaire) ; synthèse de **rénine** (contrôle de la PA, du volume sanguin, de [Na⁺]pl via le SRAA).
4. **Régulation cardiovasculaire** : via l'activation du SRAA et le maintien de l'équilibre hydro-électrolytique.
5. **Équilibre phosphocalcique** : activation de la vitamine D en **calcitriol** ; synthèse de PTH (contrôle de l'équilibre Ca²⁺/phosphate/FGF23) — la PTH elle-même n'est pas rénale, mais le rein est la cible essentielle de son action et de celle de la vitamine D.
6. **Sécrétion de facteurs locaux** : NO (vasodilatation aa/ea, active le rétrocontrôle tubulo-glomérulaire, natriurèse/diurèse) ; prostaglandines (maintien de l'équilibre hydro-électrolytique et de la PA, notamment en hypovolémie) ; endothélines (puissant vasoconstricteur, ↓DSR/DFG) ; kinines rénales (vasodilatation aa/ea, natriurèse/diurèse).

## Points à retenir
- Régulation nerveuse : le SNS diminue le DFG et augmente la réabsorption de Na⁺ (défense/hémorragie).
- Régulation humorale : ADH (eau, TCD/TC) ; aldostérone (Na⁺/K⁺, TCD/TC) ; SRAA (PA, volémie, [Na⁺]) ; ANP (effet diurétique/natriurétique, antagoniste du SRAA).
- Transport urinaire : péristaltisme urétéral autonome (pacemakers du pelvis rénal) ; accumulation vésicale jusqu'à 500-600 mL sans douleur.
- Miction = réflexe spinal (S2-S3, PSNS) sous contrôle cortical volontaire (nerfs pudendaux, sphincter externe).
- Le rein a des fonctions non excrétrices majeures : endocrine (EPO, rénine), équilibre phosphocalcique, régulation cardiovasculaire, sécrétion de facteurs locaux.`;

export const RENAL_REGULATION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Régulation de la fonction rénale et miction",
    source_label: "Physiologie — UMFT Timisoara, Lecture 4 (Rénal)",
    content_fr: RENAL_REGULATION_COURSE,
  },
  qcm: [
    single("Quel est l'effet global de la stimulation sympathique sur le rein ?", "B", "Vasoconstriction artériolaire, activation du SRAA et augmentation de la réabsorption de Na⁺, réduisant le DFG et l'excrétion de NaCl/eau.", ["Vasodilatation et augmentation du DFG", "Vasoconstriction, activation du SRAA et réabsorption accrue de Na⁺", "Blocage direct de la sécrétion d'ADH", "Aucun effet significatif sur le rein"]),
    single("Où est synthétisée l'ADH et où est-elle stockée avant sa libération ?", "A", "Synthétisée dans l'hypothalamus, elle est stockée dans la posthypophyse (hypophyse postérieure).", ["Synthétisée dans l'hypothalamus, stockée dans la posthypophyse", "Synthétisée et stockée dans le cortex surrénalien", "Synthétisée dans le rein directement", "Synthétisée dans l'antéhypophyse uniquement"]),
    single("Quel second messager intracellulaire est activé par la liaison de l'ADH à son récepteur ?", "C", "L'AMP cyclique (AMPc), via l'activation de l'adénylate cyclase.", ["Le calcium intracellulaire", "L'IP3", "L'AMP cyclique", "Le GMP cyclique"]),
    single("Quels récepteurs détectent le plus finement les variations d'osmolarité plasmatique ?", "B", "Les osmorécepteurs de l'hypothalamus antérieur, décrits comme les capteurs les plus sensibles.", ["Les barorécepteurs carotidiens", "Les osmorécepteurs de l'hypothalamus antérieur", "Les récepteurs auriculaires uniquement", "La macula densa"]),
    single("Quel est l'effet de l'alcool sur la sécrétion d'ADH ?", "A", "L'alcool inhibe l'ADH, ce qui augmente la diurèse.", ["Il inhibe l'ADH et augmente la diurèse", "Il stimule l'ADH et diminue la diurèse", "Il n'a aucun effet sur l'ADH", "Il bloque uniquement l'aldostérone"]),
    single("Quel est le rôle principal de l'aldostérone au niveau rénal ?", "C", "Épargne de Na⁺ et excrétion de K⁺, au niveau du TCD terminal et du tube collecteur.", ["Réabsorption d'eau uniquement", "Filtration glomérulaire directe", "Épargne de Na⁺ et excrétion de K⁺", "Sécrétion de rénine"]),
    single("Quel est le principal stimulus de la sécrétion d'aldostérone ?", "B", "Le système rénine-angiotensine-aldostérone (SRAA), activé notamment par la baisse de volume sanguin et de pression artérielle.", ["La baisse de la glycémie", "Le système rénine-angiotensine-aldostérone", "L'augmentation isolée du calcium plasmatique", "La sécrétion d'ANP"]),
    single("Quel médicament bloque l'effet de l'aldostérone sur le néphron ?", "A", "La spironolactone, un diurétique épargneur de potassium.", ["La spironolactone", "Le furosémide", "L'acétazolamide", "Le mannitol"]),
    single("Où sont situées les cellules qui sécrètent la rénine ?", "C", "Dans l'appareil juxtaglomérulaire, au niveau des cellules granulaires des artérioles afférente et efférente.", ["Dans la médulla surrénalienne", "Dans le tube contourné distal uniquement", "Dans l'appareil juxtaglomérulaire (cellules granulaires)", "Dans le glomérule directement"]),
    multi("Quels facteurs stimulent la synthèse de rénine ?", ["A", "B", "C"], "La diminution de la pression artérielle, la diminution du volume sanguin et la diminution de [Na⁺] détectée par la macula densa stimulent tous la sécrétion de rénine.", ["Diminution de la pression artérielle", "Diminution du volume sanguin", "Diminution de [Na⁺] urinaire à la macula densa", "Augmentation de l'aldostérone plasmatique"]),
    single("Quel est l'effet d'une vasoconstriction modérée de l'angiotensine II limitée à l'artériole efférente ?", "A", "Elle maintient le débit de filtration glomérulaire constant.", ["Elle maintient le DFG constant", "Elle diminue fortement le DFG", "Elle augmente le débit sanguin rénal médullaire", "Elle bloque la sécrétion d'aldostérone"]),
    single("Par quel mécanisme l'ANP exerce-t-il son effet diurétique et natriurétique ?", "B", "Il augmente le DFG (vasodilatation afférente, vasoconstriction efférente), diminue la réabsorption d'eau et de Na⁺, et antagonise le SRAA.", ["Il stimule directement l'aldostérone", "Il augmente le DFG et antagonise le SRAA", "Il stimule la sécrétion d'ADH", "Il bloque uniquement les canaux calciques rénaux"]),
    single("Quelle structure sécrète l'ANP et en réponse à quel stimulus ?", "C", "Les myocytes auriculaires, en réponse à leur distension (augmentation du volume sanguin).", ["Les cellules juxtaglomérulaires, en réponse à l'hypovolémie", "L'hypophyse postérieure, en réponse à l'hyperosmolarité", "Les myocytes auriculaires, en réponse à leur distension", "Le cortex surrénalien, en réponse à l'hyperkaliémie"]),
    single("Quel mécanisme empêche le reflux vésico-urétéral lors du remplissage vésical ?", "B", "Le trajet oblique de l'uretère à travers le muscle détrusor : sa contraction comprime l'uretère.", ["La présence de valves anatomiques dans l'uretère", "La compression de l'uretère par la contraction du détrusor lors de son trajet oblique", "Le péristaltisme urétéral inversé", "Le sphincter externe uniquement"]),
    single("Quelle structure assure l'automatisme (pacemaker) qui initie le péristaltisme urétéral ?", "A", "Des cellules pacemaker situées dans le pelvis rénal.", ["Des cellules pacemaker du pelvis rénal", "Le sphincter interne de la vessie", "Le nerf pudendal", "L'appareil juxtaglomérulaire"]),
    single("À quel volume vésical la pression atteint-elle environ 15 cmH2O, correspondant à la limite du sphincter interne ?", "B", "Environ 100 mL.", ["10 mL", "100 mL", "400 mL", "600 mL"]),
    single("Quel volume d'urine s'accumule normalement dans la vessie sans distension douloureuse ?", "C", "500 à 600 mL.", ["50-100 mL", "150-250 mL", "500-600 mL", "1000-1500 mL"]),
    single("Quel type de contrôle assure le sphincter externe de la vessie ?", "A", "Un contrôle volontaire (strié, sous contrôle cortical via le nerf pudendal).", ["Un contrôle volontaire (strié)", "Un contrôle exclusivement sympathique", "Un contrôle exclusivement parasympathique", "Aucun contrôle nerveux, uniquement mécanique"]),
    single("Quelle voie efférente déclenche la contraction du détrusor et le relâchement du sphincter interne lors de la miction ?", "C", "La voie parasympathique, via les nerfs pelviens (origine S2-S3).", ["La voie sympathique, via les nerfs hypogastriques", "La voie somatique, via les nerfs pudendaux uniquement", "La voie parasympathique, via les nerfs pelviens (S2-S3)", "La voie corticospinale directe"]),
    single("Chez le nouveau-né, la miction est-elle sous contrôle cortical ?", "B", "Non, elle est un acte purement réflexe (parasympathique), le contrôle cortical ne s'installant qu'après la myélinisation des centres nerveux.", ["Oui, dès la naissance", "Non, c'est un acte purement réflexe avant myélinisation", "Le contrôle cortical est présent mais inversé", "Le contrôle est uniquement sympathique"]),
    multi("Quelles sont des fonctions rénales non excrétrices ?", ["A", "B", "C"], "Le rein assure une fonction endocrine (EPO, rénine), un rôle dans l'équilibre phosphocalcique (activation de la vitamine D) et une fonction de régulation cardiovasculaire, en plus de sa fonction excrétrice.", ["Synthèse d'érythropoïétine", "Activation de la vitamine D en calcitriol", "Régulation cardiovasculaire via le SRAA", "Digestion des lipides alimentaires"]),
  ],
  exam: { titre_fr: "Examen chronométré — Régulation rénale et miction", duration_seconds: 1_680 },
};

export const RENAL_REGULATION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel est l'effet global du système nerveux sympathique sur la fonction rénale ?", question_en: "What is the overall effect of the sympathetic nervous system on renal function?", answer_fr: "Vasoconstriction artériolaire, activation du SRAA, et augmentation de la réabsorption tubulaire de Na⁺.", answer_en: "Arteriolar vasoconstriction, SRAA activation, and increased tubular Na+ reabsorption." },
  { question_fr: "Où l'ADH est-elle synthétisée et où est-elle stockée ?", question_en: "Where is ADH synthesized and where is it stored?", answer_fr: "Synthétisée dans l'hypothalamus, stockée dans la posthypophyse.", answer_en: "Synthesized in the hypothalamus, stored in the posterior pituitary." },
  { question_fr: "Quel effet l'ADH a-t-elle sur le tube collecteur au niveau moléculaire ?", question_en: "What effect does ADH have on the collecting duct at the molecular level?", answer_fr: "Elle ouvre les aquaporines-2 (AQP-2) via un récepteur couplé à l'AMPc, augmentant la réabsorption d'eau.", answer_en: "It opens aquaporin-2 (AQP-2) channels via a cAMP-coupled receptor, increasing water reabsorption." },
  { question_fr: "Quels récepteurs stimulent la sécrétion d'ADH en cas d'hyperosmolarité plasmatique ?", question_en: "Which receptors stimulate ADH secretion in case of plasma hyperosmolarity?", answer_fr: "Les osmorécepteurs de l'hypothalamus antérieur.", answer_en: "The osmoreceptors of the anterior hypothalamus." },
  { question_fr: "Quels récepteurs stimulent la sécrétion d'ADH en cas de baisse du volume sanguin ?", question_en: "Which receptors stimulate ADH secretion in case of decreased blood volume?", answer_fr: "Les barorécepteurs systémiques (sinus carotidien, crosse aortique) et pulmonaires (oreillette gauche).", answer_en: "Systemic baroreceptors (carotid sinus, aortic arch) and pulmonary baroreceptors (left atrium)." },
  { question_fr: "Que provoque un déficit total en ADH ?", question_en: "What does a total ADH deficiency cause?", answer_fr: "Un diabète insipide : polyurie hypotonique (jusqu'à 25 L/jour, osmolarité 65 mOsm/L).", answer_en: "Diabetes insipidus: hypotonic polyuria (up to 25 L/day, osmolarity 65 mOsm/L)." },
  { question_fr: "Quel est le rôle principal de l'aldostérone ?", question_en: "What is the main role of aldosterone?", answer_fr: "Épargne de Na⁺ et excrétion de K⁺.", answer_en: "Na+ sparing and K+ excretion." },
  { question_fr: "Où agit principalement l'aldostérone dans le néphron ?", question_en: "Where does aldosterone mainly act in the nephron?", answer_fr: "Dans le TCD terminal et le tube collecteur.", answer_en: "In the terminal DCT and collecting duct." },
  { question_fr: "Qu'est-ce que le SRAA et où est produite la rénine ?", question_en: "What is the RAAS and where is renin produced?", answer_fr: "Le système rénine-angiotensine-aldostérone ; la rénine est produite par les cellules granulaires de l'appareil juxtaglomérulaire.", answer_en: "The renin-angiotensin-aldosterone system; renin is produced by the granular cells of the juxtaglomerular apparatus." },
  { question_fr: "Quels facteurs stimulent la sécrétion de rénine ?", question_en: "What factors stimulate renin secretion?", answer_fr: "Baisse de PA, baisse du volume sanguin, baisse de [Na⁺]pl, baisse de [Na⁺] urinaire à la macula densa, stimulation sympathique.", answer_en: "Decreased BP, decreased blood volume, decreased plasma [Na+], decreased urinary [Na+] at the macula densa, sympathetic stimulation." },
  { question_fr: "Quel est l'effet d'une vasoconstriction modérée de l'angiotensine II sur l'artériole efférente ?", question_en: "What is the effect of a moderate angiotensin II vasoconstriction on the efferent arteriole?", answer_fr: "Elle maintient le DFG constant.", answer_en: "It keeps GFR constant." },
  { question_fr: "Quel est l'effet d'une vasoconstriction marquée de l'angiotensine II sur les deux artérioles ?", question_en: "What is the effect of marked angiotensin II vasoconstriction on both arterioles?", answer_fr: "Elle diminue le DFG.", answer_en: "It decreases GFR." },
  { question_fr: "Quelles sont les 3 principales conséquences rénales de l'angiotensine II ?", question_en: "What are the 3 main renal consequences of angiotensin II?", answer_fr: "Vasoconstriction artériolaire, augmentation de la réabsorption de Na⁺, stimulation de l'aldostérone et de l'ADH.", answer_en: "Arteriolar vasoconstriction, increased Na+ reabsorption, stimulation of aldosterone and ADH." },
  { question_fr: "Par quelle structure est sécrété l'ANP ?", question_en: "By which structure is ANP secreted?", answer_fr: "Les myocytes auriculaires, en réponse à leur distension.", answer_en: "Atrial myocytes, in response to their distension." },
  { question_fr: "Quel est l'effet global de l'ANP sur la fonction rénale ?", question_en: "What is the overall effect of ANP on renal function?", answer_fr: "Diurétique et natriurétique : il augmente le DFG et diminue la réabsorption tubulaire de Na⁺ et d'eau.", answer_en: "Diuretic and natriuretic: it increases GFR and decreases tubular Na+ and water reabsorption." },
  { question_fr: "Quel est le trajet complet de l'urine depuis le tube collecteur jusqu'à la vessie ?", question_en: "What is the full path of urine from the collecting tubule to the bladder?", answer_fr: "Tube collecteur → papilles → petits calices → grands calices → pelvis rénal → uretère → vessie.", answer_en: "Collecting tubule → papillae → minor calyces → major calyces → renal pelvis → ureter → bladder." },
  { question_fr: "Comment le péristaltisme urétéral est-il initié ?", question_en: "How is ureteral peristalsis initiated?", answer_fr: "Par des cellules pacemaker du pelvis rénal, dotées d'automatisme.", answer_en: "By pacemaker cells of the renal pelvis, which have automaticity." },
  { question_fr: "Quel mécanisme empêche le reflux vésico-urétéral ?", question_en: "What mechanism prevents vesicoureteral reflux?", answer_fr: "Le trajet oblique de l'uretère à travers le détrusor : sa contraction comprime l'uretère.", answer_en: "The oblique course of the ureter through the detrusor: its contraction compresses the ureter." },
  { question_fr: "Quels sont les deux sphincters du col vésical ?", question_en: "What are the two sphincters of the bladder neck?", answer_fr: "Le sphincter interne (lisse, contrôle involontaire) et le sphincter externe (strié, contrôle volontaire).", answer_en: "The internal sphincter (smooth, involuntary control) and the external sphincter (striated, voluntary control)." },
  { question_fr: "Quel volume d'urine s'accumule normalement dans la vessie sans douleur ?", question_en: "What volume of urine normally accumulates in the bladder without pain?", answer_fr: "500 à 600 mL.", answer_en: "500 to 600 mL." },
  { question_fr: "Quelle voie nerveuse déclenche la contraction du détrusor et le relâchement du sphincter interne lors de la miction ?", question_en: "Which nerve pathway triggers detrusor contraction and internal sphincter relaxation during micturition?", answer_fr: "La voie parasympathique (nerfs pelviens, S2-S3).", answer_en: "The parasympathetic pathway (pelvic nerves, S2-S3)." },
  { question_fr: "Quelle voie nerveuse contrôle le sphincter externe de la vessie ?", question_en: "Which nerve pathway controls the external bladder sphincter?", answer_fr: "Les nerfs pudendaux, sous contrôle volontaire cortical.", answer_en: "The pudendal nerves, under voluntary cortical control." },
  { question_fr: "Quel récepteur déclenche le réflexe de miction ?", question_en: "Which receptor triggers the micturition reflex?", answer_fr: "Les récepteurs d'étirement du détrusor, stimulés par la distension vésicale.", answer_en: "The detrusor stretch receptors, stimulated by bladder distension." },
  { question_fr: "Le réflexe de miction est-il présent dès la naissance sous contrôle cortical ?", question_en: "Is the micturition reflex present from birth under cortical control?", answer_fr: "Non, c'est un acte purement réflexe chez le nouveau-né ; le contrôle cortical apparaît après la myélinisation des centres nerveux.", answer_en: "No, it is a purely reflex act in newborns; cortical control appears after myelination of nerve centers." },
  { question_fr: "Quelle hormone rénale stimule l'érythropoïèse ?", question_en: "Which renal hormone stimulates erythropoiesis?", answer_fr: "L'érythropoïétine (EPO), libérée en hypoxie.", answer_en: "Erythropoietin (EPO), released during hypoxia." },
  { question_fr: "Quel est le rôle du rein dans l'équilibre phosphocalcique ?", question_en: "What is the kidney's role in phosphate-calcium balance?", answer_fr: "Il active la vitamine D en calcitriol, essentiel à ce rôle.", answer_en: "It activates vitamin D into calcitriol, essential to this role." },
  { question_fr: "Quel facteur local rénal favorise la vasodilatation de l'artériole afférente et la natriurèse ?", question_en: "Which local renal factor promotes afferent arteriole vasodilation and natriuresis?", answer_fr: "Le monoxyde d'azote (NO).", answer_en: "Nitric oxide (NO)." },
  { question_fr: "Quel facteur local rénal est le plus puissant vasoconstricteur connu ?", question_en: "Which local renal factor is the most potent known vasoconstrictor?", answer_fr: "Les endothélines.", answer_en: "Endothelins." },
  { question_fr: "Citez trois fonctions rénales non excrétrices.", question_en: "Name three non-excretory renal functions.", answer_fr: "Fonction endocrine (EPO, rénine), équilibre phosphocalcique, régulation cardiovasculaire (parmi d'autres : homéostasie, sécrétion de facteurs locaux, fonction métabolique, défense antioxydante).", answer_en: "Endocrine function (EPO, renin), phosphate-calcium balance, cardiovascular regulation (among others: homeostasis, local factor secretion, metabolic function, antioxidant defense)." },
];
