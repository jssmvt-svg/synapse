import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

// Chapitre labo S2: titre_fr="Métabolisme des glucides — dosage du glucose, HGPO, voie des pentoses",
// description_fr="Digestion, transporteurs GLUT/SGLT, dosage enzymatique du glucose, HGPO, PPP et test de Brewer", icone="🍭"
const LAB_S2_1_COURSE = `# Labo 1 — Métabolisme des glucides : dosage du glucose, HGPO, voie des pentoses phosphates

## 1. Digestion et absorption des glucides
- Apport quotidien moyen : 250–350 g/jour (45–65 % de l'énergie totale), répartis en ~50 % amidon, ~40 % saccharose, 5–10 % lactose.
- Seuls les monosaccharides (glucose, fructose, galactose) traversent l'épithélium intestinal : les oligo/polysaccharides doivent être digérés par des amylases.
- **Amylase salivaire (ptyaline)** : hydrolyse les liaisons α-1,4 de l'amidon en bouche ; inactivée par l'acidité gastrique.
- **Amylase pancréatique** : poursuit l'hydrolyse dans le duodénum (pH neutre/alcalin), produit disaccharides et oligosaccharides.
- **Disaccharidases de la bordure en brosse** (jéjunum) : maltase (maltose → glucose), isomaltase/α-1,6-glucosidase (dextrines-limites), sucrase/invertase (saccharose → glucose + fructose), lactase/β-galactosidase (lactose → glucose + galactose ; son déficit cause l'intolérance au lactose).

## 2. Transporteurs du glucose
- **SGLT (cotransporteurs Na⁺/glucose)** : transport actif secondaire contre le gradient, énergie fournie par le gradient de Na⁺ (maintenu par la Na⁺/K⁺-ATPase). SGLT1 (absorption intestinale de glucose/galactose), SGLT2 (réabsorption rénale tubulaire proximale).
- **GLUT (diffusion facilitée)**, indépendants de l'ATP, selon le gradient de concentration :
  | Transporteur | KM | Tissus principaux | Rôle |
  |---|---|---|---|
  | GLUT1 | 1–2 mM (haute affinité) | GR, cerveau, placenta | Captage basal constant |
  | GLUT2 | 15–20 mM (faible affinité) | Foie, cellules β pancréatiques, rein, intestin | Capteur de glucose, actif en postprandial |
  | GLUT3 | 1 mM (très haute affinité) | Cerveau, placenta | Apport constant aux neurones même en hypoglycémie |
  | GLUT4 | 5 mM | Muscle squelettique/cardiaque, tissu adipeux | Insulino-dépendant (translocation) |
  | GLUT5 | 5–10 mM | Intestin grêle, testicule, rein, tissu adipeux | Spécifique du fructose |
- La glycémie normale (~5 mM) égale le KM de GLUT4 : le transport dans les tissus GLUT4 dépend surtout du nombre de transporteurs (régulés par l'insuline), pas de la glycémie. Dans le diabète de type 2, l'altération de la translocation de GLUT4 réduit la captation musculaire/adipeuse.

## 3. Dosage du glucose dans les liquides biologiques
- **Méthodes chimiques** (ortho-toluidine) : simples mais peu spécifiques (réagissent avec d'autres sucres réducteurs).
- **Méthodes enzymatiques**, plus spécifiques :
  - **Hexokinase** (méthode de référence) : glucose → glucose-6-phosphate (hexokinase), puis oxydation par la G6PD, production de NADPH.
  - **Glucose oxydase** (méthode expérimentale décrite ci-dessous) : la plus utilisée en routine.
  - **Glucose déshydrogénase** : moins courante.
- **Principe glucose oxydase/peroxydase** : le glucose est oxydé en gluconolactone par la glucose oxydase, produisant du H₂O₂ ; la peroxydase utilise ce H₂O₂ pour oxyder le 4-aminoantipyrine en présence de phénol, formant un colorant rouge (quinonéimine) mesuré à 546 nm, proportionnel à la concentration en glucose. Linéarité jusqu'à 400 mg/dL.
- **Précautions préanalytiques** : la glycolyse continue ex vivo (≈10 mg/dL/h à température ambiante) ; séparer rapidement le sérum/plasma des cellules, conserver à 4 °C (stable 8 h) ou prélever sur fluorure de sodium (NaF, inhibiteur de l'énolase).
- **Sources d'erreur** : hémoglobine > 4 g/L, bilirubine > 200 mg/L, créatinine > 100 mg/L, galactose > 1 g/L (biais) ; EDTA inhibe l'enzyme ; la déprotéinisation par TCA/acide perchlorique libère du glutathion (faux résultats bas) — préférer l'acétate d'uranyle ; la vitamine C IV (> 5 mg%) consomme le H₂O₂ (faux résultats bas).
- **Valeurs normales sériques** : 75–115 mg/100 mL (4,16–6,38 mmol/L).

## 4. Hyper/hypoglycémies
- **Hyperglycémie physiologique** : postprandiale (jusqu'à ~140 mg/dL), liée au stress (catécholamines, cortisol), puberté, grossesse (hormones placentaires anti-insuline).
- **Hyperglycémie pathologique** : diabète sucré, syndrome de Cushing, acromégalie, phéochromocytome, pathologies pancréatiques, causes médicamenteuses (glucocorticoïdes, diurétiques thiazidiques, β-agonistes, antipsychotiques, inhibiteurs de protéase).
- **Hypoglycémie** : surdosage en insuline, insulinome, alcool, syndrome post-gastrectomie, hypoglycémie réactionnelle.

## 5. Glucose urinaire et seuil rénal
- Normalement, le glucose filtré est presque entièrement réabsorbé (< 350–500 mg/24 h dans l'urine, non détectable en bandelette).
- **Seuil rénal du glucose** ≈ 180 mg/dL (10 mmol/L) : au-delà, les SGLT2 tubulaires proximaux sont saturés → glycosurie. Le seuil varie individuellement (glycosurie rénale bénigne si seuil bas).
- **Glycosurie physiologique** (transitoire) : postprandiale, liée au stress.
- **Glycosurie pathologique** : diabète sucré (marqueur qualitatif moins précis que la glycémie/HbA1c), tubulopathies (Fanconi), grossesse, inhibiteurs du SGLT2.

## 6. Hyperglycémie provoquée par voie orale (HGPO)
- Objectif : évaluer l'homéostasie du glucose (diagnostic de diabète, intolérance au glucose, insulinorésistance).
- **Indications** : glycémie à jeun 110–126 mg/dL, facteurs de risque (obésité, antécédents familiaux, syndrome métabolique, diabète gestationnel).
- **Préparation** : régime riche en glucides (≥ 150 g/j) pendant 3 jours, pas de tabac/effort/alcool 24 h avant, arrêt des médicaments interférents, jeûne de 8–14 h.
- **Contrôles préalables** : cétonurie et glycosurie négatives, glycémie à jeun < 126 mg/dL (sinon diabète déjà établi, test inutile).
- **Procédure** : 75 g de glucose (max, 1 g/kg) dans ~400 mL d'eau, ingéré en 5 min ; prélèvements à T0, 60 min, 120 min (± 180/240/300 min si recherche d'hypoglycémie) ; recueil d'urine en fin de test.
- **Interprétation** (adulte < 45 ans, IMC normal) :
  | | T0 (à jeun) | T60 | T120 |
  |---|---|---|---|
  | Normal | 75–115 mg/dL | < 140 mg/dL | 75–115 mg/dL |
  | Intolérance au glucose | 115–126 mg/dL | 140–200 mg/dL | 126–200 mg/dL |
  | Diabète sucré | > 126 mg/dL | > 200 mg/dL | > 200 mg/dL |
- **Contre-indications** : diabète déjà connu, régime amaigrissant en cours, troubles digestifs de l'absorption, maladie fébrile aiguë, insuffisance hépatique.

## 7. Glycolyse (rappel) et voie des pentoses phosphates (PPP)
- La glycolyse (voie d'Embden-Meyerhof-Parnas) convertit 1 glucose en 2 pyruvates : bilan net +2 ATP, +2 NADH. En anaérobiose, le pyruvate est réduit en lactate (lactate déshydrogénase) pour régénérer le NAD⁺ ; le cycle de Cori recycle ensuite le lactate en glucose au niveau hépatique.
- La **PPP** (voie des pentoses, shunt des hexoses monophosphates) est une voie cytosolique non énergétique, parallèle à la glycolyse, partageant le glucose-6-phosphate comme intermédiaire commun. Elle utilise le NADP⁺ (pas le NAD⁺) et ne produit pas d'ATP ; elle produit du CO₂, contrairement à la glycolyse.
- **Fonctions principales** : (1) production de **NADPH** (biosynthèse réductrice — acides gras, stéroïdes ; régénération du glutathion ; production d'anion superoxyde) ; (2) production de **ribose-5-phosphate** pour la synthèse des nucléotides puriques/pyrimidiques.
- **Phase oxydative** (irréversible) : G6P → ribulose-5-phosphate + CO₂ + 2 NADPH (via G6PD puis 6-phosphogluconate déshydrogénase).
- **Phase non oxydative** (réversible) : interconversions de sucres-phosphates à 5 carbones vers le ribose-5-phosphate, le glycéraldéhyde-3-phosphate et le fructose-6-phosphate (rejoignant la glycolyse) ; l'érythrose-4-phosphate sert à la synthèse des acides aminés aromatiques.
- **Régulation** : la G6PD est l'enzyme limitante, activée par le NADP⁺ et inhibée par le NADPH (ratio NADPH/NADP⁺ ≈ 100:1 dans l'hépatocyte).
- **Tissus à forte activité PPP** : foie, tissu adipeux, corticosurrénale, gonades, glande mammaire lactante (biosynthèse réductrice) ; globules rouges et polynucléaires (défense antioxydante/immunitaire).

## 8. PPP dans les globules rouges et déficit en G6PD
- Dans les GR (dépourvus de mitochondries), la PPP est la **seule source de NADPH**, indispensable à la régénération du glutathion réduit (détoxification du H₂O₂ par la glutathion peroxydase).
- Un déficit en **glucose-6-phosphate déshydrogénase (G6PD)** — enzymopathie la plus fréquente au monde — compromet cette protection : peroxydation lipidique membranaire, oxydation de l'hémoglobine (corps de Heinz), hémolyse. Déclencheurs : infections, médicaments oxydants (primaquine, sulfamides), fèves (favisme).
- Le déficit en G6PD confère une résistance partielle au paludisme (Plasmodium falciparum).
- Dans les polynucléaires/macrophages, le NADPH alimente la NADPH oxydase (explosion oxydative/respiratoire), produisant l'anion superoxyde antimicrobien.

## 9. Test de Brewer (dépistage du déficit en G6PD)
- **Principe** : évalue la capacité des GR à réduire la méthémoglobine (Hb oxydée, Fe³⁺, ne fixant pas l'O₂) en hémoglobine fonctionnelle, via le NADPH produit par la PPP. Le nitrite de sodium oxyde l'Hb en méthémoglobine ; le bleu de méthylène, accepteur d'électrons artificiel réduit par le NADPH, permet normalement de restaurer l'hémoglobine.
- **Procédure** : 3 tubes (sang seul ; sang + nitrite ; sang + nitrite + bleu de méthylène), incubation 3 h à 37 °C.
- **Interprétation** : tube 3 rouge (comme le témoin sang seul) = PPP fonctionnelle (NADPH normal) ; tube 3 brun (comme le témoin nitrite) = déficit en G6PD suspecté (méthémoglobine persistante).
- **Intérêt clinique** : dépistage du déficit en G6PD, notamment dans les populations méditerranéennes, africaines et asiatiques, avant prescription de médicaments oxydants.`;

export const LAB_S2_1_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Métabolisme des glucides : glucose, HGPO et voie des pentoses",
    source_label: "Notes de laboratoire — Biochimie II, Lab 1",
    content_fr: LAB_S2_1_COURSE,
  },
  qcm: [
    single("Quelle enzyme initie la digestion de l'amidon dans la bouche ?", "A", "L'amylase salivaire (ptyaline) hydrolyse les liaisons α-1,4 de l'amidon dans la cavité buccale.", ["L'amylase salivaire (ptyaline)", "L'amylase pancréatique", "La lactase", "La sucrase"]),
    single("Quelle disaccharidase intestinale hydrolyse spécifiquement les liaisons α-1,6 des dextrines-limites ?", "C", "L'isomaltase (α-1,6-glucosidase) cible spécifiquement les liaisons α-1,6.", ["La maltase", "La sucrase", "L'isomaltase", "La lactase"]),
    single("Quel type de transport caractérise le SGLT1 au niveau intestinal ?", "B", "SGLT1 est un cotransporteur Na+/glucose, transport actif secondaire utilisant le gradient de sodium.", ["Diffusion simple", "Transport actif secondaire couplé au Na+", "Diffusion facilitée passive", "Transport actif primaire ATP-dépendant"]),
    single("Quel transporteur GLUT est spécifique du fructose ?", "D", "GLUT5 transporte spécifiquement le fructose, notamment au niveau intestinal.", ["GLUT1", "GLUT2", "GLUT4", "GLUT5"]),
    single("Pourquoi le transport du glucose dans les tissus exprimant GLUT4 dépend-il surtout du nombre de transporteurs plutôt que de la glycémie ?", "A", "La glycémie normale (~5 mM) égale le KM de GLUT4 : le transporteur est déjà proche de sa saturation fonctionnelle, donc le facteur limitant devient le nombre de transporteurs à la membrane (régulé par l'insuline).", ["Car la glycémie normale égale le KM de GLUT4", "Car GLUT4 n'a aucune affinité pour le glucose", "Car GLUT4 fonctionne par transport actif", "Car GLUT4 est exprimé uniquement dans le foie"]),
    single("Quel est le principe biochimique de la méthode à la glucose oxydase pour doser le glucose ?", "B", "Le glucose est oxydé en gluconolactone avec production de H2O2, que la peroxydase utilise pour former un colorant rouge mesuré par spectrophotométrie.", ["Le glucose est phosphorylé par l'hexokinase puis oxydé, produisant du NADPH mesuré en UV", "Le glucose est oxydé en gluconolactone, produisant du H2O2 qui génère un colorant coloré via la peroxydase", "Le glucose réagit directement avec l'ortho-toluidine pour former un précipité", "Le glucose est réduit en sorbitol, mesuré par turbidimétrie"]),
    single("Quel agent de conservation est recommandé pour un prélèvement sanguin destiné au dosage du glucose lorsqu'un traitement immédiat n'est pas possible ?", "B", "Le fluorure de sodium (NaF) inhibe l'énolase glycolytique, préservant le taux de glucose dans l'échantillon.", ["L'EDTA seul", "Le fluorure de sodium (NaF)", "L'héparine seule", "Le citrate de sodium seul"]),
    single("Quelles sont les valeurs normales de la glycémie sérique à jeun ?", "C", "75–115 mg/100 mL (4,16–6,38 mmol/L).", ["40–70 mg/dL", "60–75 mg/dL", "75–115 mg/dL", "115–140 mg/dL"]),
    multi("Quelles substances peuvent biaiser le dosage enzymatique du glucose par la méthode glucose oxydase ?", ["A", "B", "C"], "Une hémoglobine, une bilirubine ou une créatinine élevées, ainsi que la vitamine C à haute dose (IV), peuvent interférer avec la réaction.", ["Hémoglobine > 4 g/L", "Bilirubine > 200 mg/L", "Vitamine C à forte dose (IV)", "Le sodium plasmatique normal"]),
    single("Quel est le seuil rénal approximatif du glucose au-delà duquel apparaît une glycosurie ?", "B", "Le seuil rénal se situe autour de 180 mg/dL (10 mmol/L), au-delà duquel les SGLT2 tubulaires sont saturés.", ["100 mg/dL", "180 mg/dL", "250 mg/dL", "350 mg/dL"]),
    single("Quelle glycémie à jeun contre-indique la réalisation d'une HGPO car le diabète est déjà établi ?", "C", "Une glycémie à jeun > 126 mg/dL signe un diabète déjà établi, rendant l'HGPO inutile.", ["> 100 mg/dL", "> 115 mg/dL", "> 126 mg/dL", "> 200 mg/dL"]),
    single("Dans l'interprétation standard de l'HGPO, quelle glycémie à 120 minutes est compatible avec un diabète sucré ?", "B", "Une glycémie à 120 min > 200 mg/dL est compatible avec un diagnostic de diabète sucré.", ["> 140 mg/dL", "> 200 mg/dL", "> 115 mg/dL", "> 126 mg/dL uniquement à jeun"]),
    multi("Quelles conditions contre-indiquent la réalisation d'une HGPO ?", ["A", "B", "C"], "Un diabète déjà diagnostiqué, une maladie fébrile aiguë et un trouble de l'absorption digestive contre-indiquent l'HGPO.", ["Diabète sucré déjà diagnostiqué", "Maladie fébrile aiguë", "Trouble digestif de l'absorption (maladie coeliaque)", "Antécédent familial de diabète isolé"]),
    single("Quelle est la principale différence fonctionnelle entre la glycolyse et la voie des pentoses phosphates (PPP) ?", "C", "La glycolyse produit de l'ATP en utilisant le NAD+ ; la PPP ne produit pas d'ATP, utilise le NADP+ et génère du CO2.", ["La PPP se déroule dans la mitochondrie, la glycolyse dans le cytosol", "La PPP produit plus d'ATP que la glycolyse", "La glycolyse utilise le NAD+ et produit de l'ATP ; la PPP utilise le NADP+, ne produit pas d'ATP et génère du CO2", "Il n'existe aucune différence fonctionnelle entre les deux voies"]),
    single("Quelle est l'enzyme limitante et régulatrice de la phase oxydative de la PPP ?", "A", "La glucose-6-phosphate déshydrogénase (G6PD) catalyse l'étape initiale et limitante, régulée par le ratio NADPH/NADP+.", ["La glucose-6-phosphate déshydrogénase (G6PD)", "La transcétolase", "La 6-phosphogluconate déshydrogénase", "La transaldolase"]),
    single("Pourquoi le déficit en G6PD est-il particulièrement délétère pour les globules rouges ?", "B", "Les GR dépendent exclusivement de la PPP pour produire du NADPH, essentiel à la régénération du glutathion réduit protégeant contre le stress oxydatif.", ["Les GR n'utilisent jamais la PPP en temps normal", "La PPP est la seule source de NADPH des GR, nécessaire à la protection antioxydante (glutathion)", "Le déficit en G6PD bloque totalement la glycolyse des GR", "Les GR déficients en G6PD produisent un excès d'ATP toxique"]),
    single("Quel avantage paradoxal confère le déficit en G6PD ?", "C", "Le déficit en G6PD confère une résistance partielle au paludisme (Plasmodium falciparum).", ["Une résistance accrue aux infections bactériennes", "Une meilleure tolérance aux médicaments oxydants", "Une résistance partielle au paludisme (Plasmodium falciparum)", "Une hémoglobine plus résistante à l'oxydation"]),
    single("Dans le test de Brewer, que signifie une coloration brune persistante du tube 3 (sang + nitrite + bleu de méthylène) ?", "B", "Une coloration brune persistante indique que la méthémoglobine n'a pas été réduite, suggérant un déficit en G6PD (NADPH insuffisant).", ["Un fonctionnement normal de la PPP", "Un déficit suspecté en G6PD (NADPH insuffisant)", "Une hémoglobine glyquée élevée", "Une contamination du prélèvement, sans signification clinique"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 1 : Glucose, HGPO et voie des pentoses", duration_seconds: 1_350 },
};

// Chapitre labo S2: titre_fr="Métabolisme des glucides — régulation de la glycémie, hémoglobine glyquée",
// description_fr="Hormones de la glycémie, phases postprandiales, diabète sucré, dosage et interprétation de l'HbA1c", icone="🩺"
const LAB_S2_2_COURSE = `# Labo 2 — Métabolisme des glucides : régulation de la glycémie et hémoglobine glyquée (HbA1c)

## 1. Sources du glucose sanguin
- Besoin quotidien ≈ 250 g de glucose, seule source d'énergie du système nerveux central et des érythrocytes.
- **Alimentation** : absorption intestinale après digestion des polysaccharides/disaccharides.
- **Glycogénolyse hépatique** : maintient la glycémie à jeun. Le glycogène musculaire, bien qu'abondant, ne contribue pas à la glycémie circulante (absence de glucose-6-phosphatase dans les myocytes).
- **Néoglucogenèse** (hépatique, et rénale à moindre degré) : synthèse de glucose à partir de précurseurs non glucidiques (lactate, glycérol, acides aminés glucoformateurs), essentielle en jeûne prolongé ou déficit insulinique.

## 2. Transporteurs insulino-dépendants vs indépendants
- **Insulino-dépendants** : muscle squelettique, tissu adipeux, myocarde (GLUT4, translocation membranaire insuline-dépendante).
- **Insulino-indépendants** : foie (GLUT2), cerveau (GLUT1/GLUT3), érythrocytes, tubule rénal, îlots de Langerhans, muqueuse intestinale.

## 3. Régulation hormonale de la glycémie
- Plage physiologique à jeun : **70–100 mg/dL**.
- **Hormone hypoglycémiante : insuline** (cellules β pancréatiques) — stimule la captation de glucose (tissus insulino-dépendants), la glycogenèse, la lipogenèse et la synthèse protéique ; inhibe néoglucogenèse, glycogénolyse et lipolyse.
- **Hormones hyperglycémiantes** : glucagon, adrénaline, cortisol (glucocorticoïdes), thyroxine (T4), hormone de croissance (STH) — s'opposent à l'insuline, notamment en jeûne/stress.

## 4. Phases postprandiales
- **Phase précoce (0–2 h après repas)** : glycémie élevée → sécrétion d'insuline → translocation GLUT4, glycogenèse hépatique/musculaire, lipogenèse (excès de glucose vers la synthèse d'acides gras puis triglycérides).
- **Phase tardive (> 4 h, jeûne)** : glycémie basse → insuline diminuée, hormones hyperglycémiantes actives :
  - Glycogénolyse hépatique (glucagon).
  - Néoglucogenèse (lactate du cycle de Cori, glycérol de la lipolyse, acides aminés glucoformateurs).
  - Lipolyse et cétogenèse (adrénaline/cortisol) : les acides gras libérés sont oxydés en corps cétoniques par le foie, carburant alternatif pour les tissus périphériques et, en jeûne prolongé, pour le cerveau.

## 5. Diabète sucré
- Hyperglycémie chronique par déficit insulinique absolu (type 1) ou insulinorésistance/déficit relatif (type 2).
- **Critères** : glycémie à jeun > 126 mg/dL ou glycémie aléatoire > 200 mg/dL.
- **Glycosurie** : au-delà du seuil rénal (~180 mg/dL), glucose excrété dans l'urine, associé à polyurie/polydipsie/déséquilibre électrolytique.
- **Catabolisme accru** : lipolyse adipocytaire (acides gras libres circulants), protéolyse musculaire (fournit des acides aminés à la néoglucogenèse), néoglucogenèse hépatique accrue (aggrave l'hyperglycémie).
- **Acidocétose** : l'excès d'acides gras génère un excès d'acétyl-CoA hépatique ; quand celui-ci dépasse la capacité du cycle de Krebs (faible oxaloacétate), il est dérivé vers la cétogenèse.

## 6. Hémoglobine glyquée (HbA1c)
- Reflet **intégré de la glycémie moyenne sur 2–3 mois** (durée de vie moyenne des érythrocytes), contrairement à une mesure ponctuelle de la glycémie.
- **Formation** (glycation non enzymatique, lente) :
  1. **Base de Schiff (aldimine)** labile et réversible entre le glucose et la valine N-terminale de la chaîne β de l'hémoglobine A — dépend directement de la glycémie ambiante.
  2. **Réarrangement d'Amadori** (cétoamine) : produit stable sur plusieurs jours, c'est cette forme qui est mesurée comme HbA1c (la base de Schiff labile, trop sensible aux variations alimentaires récentes, n'est pas incluse).
- **Estimation de la glycémie moyenne (eAG)** : eAG (mg/dL) = 28,7 × HbA1c(%) − 46,7. Exemples : HbA1c 6 % → eAG 126 mg/dL ; HbA1c 9 % → eAG 212 mg/dL.
- **Fréquence de surveillance** : diabète type 1 sous traitement conventionnel, tous les 3–4 mois (tous les 1–2 mois si traitement intensif) ; diabète type 2 stable, tous les 6 mois ; grossesse diabétique, tous les 1–2 mois.
- **Avantages** vs glycémie ponctuelle : pas besoin d'être à jeun, meilleure stabilité pré-analytique, moindre variabilité biologique individuelle, moins sensible au stress aigu.
- **Limites** : coût plus élevé, disponibilité limitée, non fiable en cas de renouvellement anormal des GR (anémies hémolytiques ou ferriprives), absence de corrélation fiable dans certains contextes (obésité, hypothyroïdie, hémolyse, hémopathies malignes) — le diagnostic repose alors sur la seule glycémie.
- **Interprétation** : diabète bien contrôlé si HbA1c < 7 % ; peut atteindre 20 % en cas de mauvais contrôle prolongé ; diminue progressivement sur plusieurs mois à mesure que les GR âgés sont remplacés.
- **Méthodes de dosage** : chromatographie (échange d'ions, affinité), HPLC, électrophorèse, méthodes photométriques (acide thiobarbiturique), immunologiques, enzymatiques.

## 7. Méthode enzymatique de dosage de l'HbA1c
- **Principe** : après hémolyse, des protéases libèrent la valine glyquée des chaînes β. La **fructosyl-valine oxydase (FVO)** agit sur ces valines glyquées, générant du H₂O₂, qui réagit avec un chromogène en présence de peroxydase pour former un composé coloré (lecture à 660 nm).
- **Calcul** : concentration d'HbA1c (%) = 94,34 × ΔA + 3,13 (ΔA = A finale − A initiale), par extrapolation sur la courbe de calibration.
- **Standardisation** : les résultats peuvent être exprimés selon la norme NGSP ou IFCC ; %HbA1c-NGSP = (0,9148 × %HbA1c-IFCC) + 2,152.
- **Interprétation clinique (NGSP)** : normal 4–6 % ; intolérance au glucose 6–6,5 % ; diabète bien traité 6,5–8 % ; diabète mal contrôlé > 8 %.`;

export const LAB_S2_2_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Régulation de la glycémie et hémoglobine glyquée (HbA1c)",
    source_label: "Notes de laboratoire — Biochimie II, Lab 2",
    content_fr: LAB_S2_2_COURSE,
  },
  qcm: [
    single("Pourquoi le glycogène musculaire ne contribue-t-il pas directement à la glycémie circulante ?", "B", "Les myocytes sont dépourvus de glucose-6-phosphatase, l'enzyme nécessaire pour libérer du glucose libre dans la circulation.", ["Le muscle ne stocke jamais de glycogène", "Les myocytes n'expriment pas la glucose-6-phosphatase", "Le glycogène musculaire est immédiatement dégradé en lactate", "L'insuline bloque toute libération de glucose musculaire"]),
    single("Quels tissus expriment GLUT4 et dépendent de l'insuline pour la captation du glucose ?", "C", "Le muscle squelettique, le tissu adipeux et le myocarde expriment GLUT4, dont la translocation est insulino-dépendante.", ["Le foie et le cerveau", "Les érythrocytes et le rein", "Le muscle squelettique, le tissu adipeux et le myocarde", "L'intestin et les îlots de Langerhans"]),
    single("Quelle est la plage physiologique normale de la glycémie à jeun ?", "B", "70–100 mg/dL à jeun.", ["50–70 mg/dL", "70–100 mg/dL", "100–126 mg/dL", "126–140 mg/dL"]),
    multi("Quelles hormones ont une action hyperglycémiante ?", ["A", "B", "C", "D"], "Le glucagon, l'adrénaline, le cortisol et la thyroxine s'opposent tous à l'action hypoglycémiante de l'insuline.", ["Glucagon", "Adrénaline", "Cortisol", "Thyroxine (T4)", "Insuline"]),
    single("En phase postprandiale précoce, quel processus est stimulé par l'insuline dans le foie et le muscle ?", "A", "La glycogenèse (synthèse de glycogène) est stimulée par l'insuline dans le foie et le muscle en période postprandiale.", ["La glycogenèse", "La néoglucogenèse", "La cétogenèse", "La protéolyse"]),
    multi("Quels processus sont mobilisés en phase postprandiale tardive (jeûne) ?", ["A", "B", "C"], "Glycogénolyse, néoglucogenèse et lipolyse/cétogenèse sont mobilisées lorsque la glycémie baisse en phase de jeûne.", ["Glycogénolyse hépatique", "Néoglucogenèse", "Lipolyse et cétogenèse", "Glycogenèse hépatique accrue"]),
    single("Quel est le mécanisme biochimique conduisant à l'acidocétose diabétique ?", "C", "L'excès d'acides gras libères par la lipolyse génère un excès d'acétyl-CoA hépatique qui dépasse la capacité du cycle de Krebs (oxaloacétate insuffisant), et est dérivé vers la cétogenèse.", ["Une accumulation directe de glucose dans le sang sans lien métabolique", "Un excès de glycogène hépatique non dégradé", "Un excès d'acétyl-CoA hépatique dépassant la capacité du cycle de Krebs, dérivé vers la cétogenèse", "Une carence en glucagon isolée"]),
    single("Sur quel acide aminé de l'hémoglobine se fixe le glucose lors de la formation de l'HbA1c ?", "B", "Le glucose se fixe sur la valine N-terminale des chaînes β de l'hémoglobine A.", ["La lysine C-terminale des chaînes α", "La valine N-terminale des chaînes β", "L'histidine proximale de l'hème", "La cystéine des chaînes α"]),
    single("Quelle est la première étape, labile et réversible, de la formation de l'HbA1c ?", "A", "La formation d'une base de Schiff (aldimine) est la première étape, rapide et réversible.", ["La formation d'une base de Schiff (aldimine)", "Le réarrangement d'Amadori", "La formation d'un pont disulfure", "La carbamylation de l'hémoglobine"]),
    single("Que reflète le taux d'HbA1c ?", "C", "L'HbA1c reflète la glycémie moyenne intégrée sur la durée de vie des érythrocytes, soit environ 2 à 3 mois.", ["La glycémie instantanée au moment du prélèvement", "La glycémie des dernières 24 heures", "La glycémie moyenne des 2 à 3 derniers mois", "La glycémie maximale atteinte dans l'année"]),
    single("À l'aide de la formule eAG = 28,7 × HbA1c(%) − 46,7, quelle est la glycémie moyenne estimée pour une HbA1c à 8 % ?", "B", "eAG = 28,7×8 − 46,7 = 229,6 − 46,7 ≈ 183 mg/dL.", ["154 mg/dL", "183 mg/dL", "212 mg/dL", "240 mg/dL"]),
    single("Pourquoi l'HbA1c n'est-elle pas fiable chez un patient présentant une anémie hémolytique ?", "B", "Le renouvellement accéléré des globules rouges raccourcit leur durée de vie moyenne, faussant la corrélation entre HbA1c et glycémie moyenne réelle.", ["Parce que l'hémolyse détruit directement le glucose sanguin", "Parce que le renouvellement accéléré des GR fausse la corrélation avec la glycémie moyenne", "Parce que l'hémolyse empêche toute glycation de l'hémoglobine", "Parce que l'anémie augmente artificiellement l'HbA1c sans lien avec la glycémie"]),
    single("À partir de quel seuil d'HbA1c un diabète est-il considéré comme bien contrôlé ?", "B", "Un diabète est considéré comme bien contrôlé lorsque l'HbA1c reste inférieure à 7 %.", ["< 5 %", "< 7 %", "< 8,5 %", "< 10 %"]),
    single("Dans la méthode enzymatique de dosage de l'HbA1c, quel est le rôle de la fructosyl-valine oxydase (FVO) ?", "A", "La FVO agit sur les valines glyquées libérées, générant du H2O2 utilisé ensuite pour la réaction colorée.", ["Générer du H2O2 à partir des valines glyquées libérées", "Cliver directement l'hémoglobine en globine et hème", "Réduire le NADP+ en NADPH", "Catalyser la formation de la base de Schiff initiale"]),
    multi("Quels sont des avantages du dosage de l'HbA1c par rapport à une glycémie ponctuelle ?", ["A", "B", "C"], "L'HbA1c ne nécessite pas de jeûne, présente une meilleure stabilité pré-analytique et une moindre variabilité biologique individuelle.", ["Aucun jeûne nécessaire", "Meilleure stabilité pré-analytique", "Moindre variabilité biologique individuelle", "Coût toujours inférieur à la glycémie"]),
    single("Chez une patiente enceinte diabétique, à quelle fréquence l'HbA1c est-elle généralement surveillée ?", "A", "Tous les 1 à 2 mois chez la femme enceinte diabétique, en raison des enjeux de contrôle glycémique stricts.", ["Tous les 1–2 mois", "Tous les 3–4 mois", "Tous les 6 mois", "Une seule fois pendant la grossesse"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 2 : Régulation de la glycémie et HbA1c", duration_seconds: 1_350 },
};

// Chapitre labo S2: titre_fr="Métabolisme lipidique — dosage des triglycérides, corps cétoniques urinaires",
// description_fr="Digestion des lipides, dosage enzymatique des triglycérides, cétogenèse et test de Rothera", icone="🧈"
const LAB_S2_3_COURSE = `# Labo 3 — Métabolisme lipidique : dosage des triglycérides et corps cétoniques urinaires

## 1. Classes de lipides
- **Triacylglycérols (triglycérides, TAG)** : concentrés dans le tissu adipeux (quantités mineures dans le foie et le muscle) ; seuls lipides ayant un rôle énergétique majeur — source calorique alimentaire et réserve énergétique mobilisable.
- **Cholestérol** et **lipides polaires** (phospholipides, glycolipides, sphingolipides) : présents dans les membranes de toutes les cellules.

## 2. Digestion des lipides
- Débute dans l'estomac (**lipase gastrique**), se poursuit majoritairement dans l'intestin grêle grâce à la **lipase pancréatique**, produisant monoacylglycérols et acides gras libres.
- Les lipides étant hydrophobes, les **sels biliaires** (amphipathiques, synthétisés dans le foie, stockés dans la vésicule biliaire) émulsifient les gouttelettes lipidiques, exposant les liaisons ester aux lipases.
- Les produits de digestion sont incorporés dans des **micelles**, transportées jusqu'aux entérocytes pour absorption.
- Dans l'entérocyte, les acides gras et monoacylglycérols sont reconvertis en triglycérides (activation en acyl-CoA, coût ATP), assemblés avec des apolipoprotéines en **chylomicrons** — les plus volumineuses des lipoprotéines.

## 3. Dosage des triglycérides sériques
- Les TAG (« graisses neutres ») n'ont pas de méthode de reconnaissance directe spécifique : le dosage passe par la mesure du **glycérol** libéré après hydrolyse enzymatique.
- **Méthode à la pyruvate kinase (lecture UV)** :
  - Triglycérides --lipase--> glycérol + acides gras
  - Glycérol + ATP --glycérol kinase--> glycérol-3-phosphate + ADP
  - ADP + phosphoénolpyruvate --pyruvate kinase--> ATP + pyruvate
  - Pyruvate + NADH + H⁺ --lactate déshydrogénase--> lactate + NAD⁺
  - La diminution d'absorbance à 340 nm (consommation de NADH) est proportionnelle aux triglycérides sériques.
- **Méthode à la glycérol-3-phosphate oxydase** (utilisée en pratique, décrite ci-dessous) :
  - Glycérol + ATP --glycérol kinase--> glycérol-3-phosphate + ADP
  - Glycérol-3-phosphate + O₂ --glycérol-3-P oxydase--> dihydroxyacétone phosphate + H₂O₂
  - H₂O₂ + 4-chlorophénol + 4-aminoantipyrine --peroxydase--> colorant quinonéimine (rouge), lu à 546 nm
- **Linéarité** jusqu'à 800 mg/dL (diluer au-delà).
- **Valeurs normales** : femmes 40–140 mg%, hommes 60–165 mg%.
- **Valeurs augmentées** : hyperlipoprotéinémies primaires (sauf type IIa), diabète de type 2, obésité, hypothyroïdie, maladies hépatiques, ictère obstructif, syndrome néphrotique, pancréatite aiguë, grossesse, corticothérapie/œstrogènes ; élévation secondaire possible après infarctus du myocarde.
- **Valeurs diminuées** : malnutrition, malabsorption, hyperthyroïdie, hépatopathie chronique obstructive, anémie sévère, maladies cachectisantes chroniques, régime pauvre en graisses, traitement par fibrates.

## 4. Corps cétoniques
- La **cétogenèse** se déroule exclusivement dans le foie (mitochondries des hépatocytes) à partir des acides gras (et de certains acides aminés cétogènes) : source d'énergie alternative en jeûne, exercice prolongé, ou déficit insulinique.
- Trois corps cétoniques :
  - **Acétoacétate** — premier produit formé.
  - **β-hydroxybutyrate** — issu de la réduction de l'acétoacétate.
  - **Acétone** — sous-produit volatil, exhalé (odeur fruitée caractéristique de l'acidocétose).
- Le foie **ne peut pas utiliser** l'acétoacétate qu'il produit (absence de succinyl-CoA-acétoacétate-CoA transférase) ; ce sont les **tissus extra-hépatiques** (muscle, cœur, rein, et le cerveau en jeûne prolongé) qui les utilisent comme carburant.
- **Rôle physiologique** : en cas de faible disponibilité en glucose, la cétogenèse épargne le glucose pour les tissus strictement glucodépendants (GR, certaines zones cérébrales).

## 5. Cétogenèse pathologique et acidocétose
- Survient quand la production hépatique de corps cétoniques dépasse la capacité d'utilisation périphérique → **cétonémie**, puis **cétonurie** au-delà du seuil rénal.
- **Mécanisme** (déficit insulinique, ex. diabète de type 1 non contrôlé, ou jeûne prolongé) :
  1. Levée de l'inhibition insulinique de la lipolyse → libération d'acides gras libres et de glycérol.
  2. Les acides gras entrent dans le foie, sont convertis en acétyl-CoA par β-oxydation.
  3. Le faible captage de glucose (déficit insulinique) réduit l'oxaloacétate disponible → ralentissement du cycle de Krebs → accumulation d'acétyl-CoA.
  4. L'excès d'acétyl-CoA est dérivé vers la cétogenèse.
- Les corps cétoniques étant des acides, leur accumulation abaisse le pH sanguin → **acidocétose métabolique**, compensée par une hyperventilation (respiration de Kussmaul, élimination de CO₂). L'excrétion urinaire des sels cétoniques déplète Na⁺/K⁺/bicarbonate, aggravant déshydratation et acidose.
- **Contextes** : diabète sucré non contrôlé (surtout type 1, acidocétose diabétique/DKA), jeûne prolongé, régimes cétogènes (généralement bénins), acidocétose alcoolique.
- **Signes cliniques** : nausées/vomissements, déshydratation, respiration de Kussmaul, haleine à odeur fruitée (acétone), troubles de conscience dans les formes sévères.

## 6. Test de Rothera (identification des corps cétoniques urinaires)
- **Principe** : réaction au nitroprussiate de sodium, détecte l'acétone et l'acétoacétate (mais **pas** le β-hydroxybutyrate).
- **Procédure** : 1 g de sulfate d'ammonium dissous dans 5 mL d'urine ; ajout de 3–4 gouttes de nitroprussiate de sodium fraîchement préparé ; superposition délicate de 1–2 mL d'hydroxyde d'ammonium saturé le long de la paroi du tube.
- **Interprétation** : apparition d'un **anneau violet** à l'interface en 2 minutes = présence de corps cétoniques (intensité graduée de 1+ à 4+). Détecte 1–2 mg/dL d'acétoacétate ou 10 mg/dL d'acétone. Urine normale : pas d'anneau.`;

export const LAB_S2_3_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Métabolisme lipidique : triglycérides et corps cétoniques",
    source_label: "Notes de laboratoire — Biochimie II, Lab 3",
    content_fr: LAB_S2_3_COURSE,
  },
  qcm: [
    single("Quelle est la seule classe de lipides ayant un rôle énergétique majeur ?", "B", "Les triacylglycérols (triglycérides) sont la seule classe de lipides jouant un rôle énergétique important.", ["Le cholestérol", "Les triacylglycérols", "Les phospholipides", "Les sphingolipides"]),
    single("Quel est le rôle des sels biliaires dans la digestion des lipides ?", "C", "Les sels biliaires émulsifient les gouttelettes lipidiques, exposant les liaisons ester à l'action des lipases.", ["Ils hydrolysent directement les triglycérides", "Ils transportent le cholestérol dans le sang", "Ils émulsifient les gouttelettes lipidiques, facilitant l'action des lipases", "Ils inactivent la lipase pancréatique"]),
    single("Quelle lipoprotéine se forme dans l'entérocyte après réassemblage des triglycérides absorbés ?", "A", "Les chylomicrons, les plus volumineuses des lipoprotéines, se forment dans l'entérocyte.", ["Les chylomicrons", "Les VLDL", "Les LDL", "Les HDL"]),
    single("Pourquoi le dosage des triglycérides sériques repose-t-il sur la mesure du glycérol libéré ?", "B", "Les triglycérides n'ont pas de méthode de reconnaissance directe spécifique ; on mesure donc indirectement le glycérol issu de leur hydrolyse enzymatique.", ["Car le glycérol est plus stable que les triglycérides", "Car les triglycérides n'ont pas de méthode de reconnaissance directe spécifique", "Car le glycérol absorbe naturellement à 546 nm", "Car les acides gras libres interfèrent toujours avec le dosage direct"]),
    single("Dans la méthode enzymatique à la glycérol-3-phosphate oxydase, quel produit final est mesuré par spectrophotométrie ?", "C", "Un colorant quinonéimine rouge, formé à partir du H2O2 via la peroxydase, est mesuré à 546 nm.", ["Le glycérol-3-phosphate directement", "Le NADH consommé à 340 nm", "Un colorant quinonéimine rouge formé via la peroxydase, à 546 nm", "L'acide gras libre par titration"]),
    single("Jusqu'à quelle concentration la linéarité du dosage des triglycérides est-elle observée ?", "B", "La linéarité est observée jusqu'à 800 mg/dL ; au-delà, il faut diluer l'échantillon.", ["400 mg/dL", "800 mg/dL", "1200 mg/dL", "200 mg/dL"]),
    single("Quelles sont les valeurs normales de triglycérides chez l'homme ?", "C", "60–165 mg% chez l'homme (40–140 mg% chez la femme).", ["20–60 mg%", "40–140 mg%", "60–165 mg%", "165–250 mg%"]),
    multi("Parmi les situations suivantes, lesquelles sont associées à une élévation des triglycérides sériques ?", ["A", "B", "C"], "Le diabète de type 2, l'obésité et la pancréatite aiguë sont classiquement associés à une hypertriglycéridémie.", ["Diabète de type 2", "Obésité", "Pancréatite aiguë", "Hyperthyroïdie sévère"]),
    single("Pourquoi le foie ne peut-il pas utiliser l'acétoacétate qu'il produit ?", "B", "Le foie manque de l'enzyme succinyl-CoA-acétoacétate-CoA transférase, nécessaire pour activer l'acétoacétate.", ["Car il ne possède pas de mitochondries", "Car il manque l'enzyme succinyl-CoA-acétoacétate-CoA transférase", "Car l'acétoacétate est immédiatement excrété dans la bile", "Car le foie ne produit jamais d'acétoacétate"]),
    single("Quels sont les trois corps cétoniques ?", "A", "Acétoacétate, β-hydroxybutyrate et acétone sont les trois corps cétoniques.", ["Acétoacétate, β-hydroxybutyrate, acétone", "Acétoacétate, pyruvate, lactate", "β-hydroxybutyrate, glycérol, acétone", "Acétoacétate, citrate, acétone"]),
    single("Quel corps cétonique est responsable de l'odeur fruitée caractéristique du diabète décompensé ?", "C", "L'acétone, volatile, est exhalée par les poumons et donne l'odeur fruitée caractéristique.", ["L'acétoacétate", "Le β-hydroxybutyrate", "L'acétone", "Le glycérol"]),
    single("Quel est le déclencheur métabolique initial de la cétogenèse pathologique en cas de déficit insulinique ?", "B", "La levée de l'inhibition insulinique de la lipolyse libère des acides gras qui, transportés au foie, augmentent la production d'acétyl-CoA.", ["Une hyperglycémie isolée sans autre mécanisme", "La levée de l'inhibition insulinique de la lipolyse adipocytaire", "Un excès direct de glucose hépatique", "Une carence en corps cétoniques préexistante"]),
    single("Pourquoi l'acétyl-CoA s'accumule-t-il dans le foie lors d'un déficit insulinique sévère ?", "C", "Le faible captage de glucose réduit la disponibilité en oxaloacétate, ralentissant le cycle de Krebs et provoquant l'accumulation d'acétyl-CoA, dérivé vers la cétogenèse.", ["Le cycle de Krebs s'arrête totalement dans le foie", "L'acétyl-CoA est directement produit par la glycolyse hépatique en excès", "Le faible captage de glucose réduit l'oxaloacétate disponible, ralentissant le cycle de Krebs", "L'insuline stimule directement la production d'acétyl-CoA"]),
    single("Comment l'organisme compense-t-il l'acidose métabolique de l'acidocétose ?", "B", "Par une hyperventilation (respiration de Kussmaul) qui élimine le CO2 et limite la baisse du pH.", ["Par une hypoventilation qui retient le CO2", "Par une hyperventilation (respiration de Kussmaul)", "Par une rétention accrue de bicarbonate rénal uniquement", "Il n'existe aucun mécanisme de compensation"]),
    single("Que détecte spécifiquement le test de Rothera au nitroprussiate de sodium ?", "B", "Le test détecte l'acétone et l'acétoacétate, mais pas le β-hydroxybutyrate.", ["Uniquement le β-hydroxybutyrate", "L'acétone et l'acétoacétate (pas le β-hydroxybutyrate)", "Les trois corps cétoniques de façon équivalente", "Uniquement le glucose urinaire"]),
    single("Dans le test de Rothera, que signale l'apparition d'un anneau violet à l'interface du tube ?", "A", "Un anneau violet en 2 minutes indique la présence de corps cétoniques dans l'urine.", ["La présence de corps cétoniques dans l'urine", "La présence de glucose dans l'urine", "Une hématurie associée", "Une contamination bactérienne de l'échantillon"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 3 : Triglycérides et corps cétoniques", duration_seconds: 1_350 },
};
