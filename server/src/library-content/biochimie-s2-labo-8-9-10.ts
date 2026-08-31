import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

// Chapitre labo: titre_fr="Dosage des transaminases (ALAT, ASAT)", titre_en="Determination of Transaminases (ALT, AST)"
const LAB_S2_8_COURSE = `# Labo 8 — Métabolisme des protéines : dosage des transaminases

## 1. Digestion et absorption des protéines
- La digestion des protéines commence dans l'**estomac** : le milieu acide dénature les protéines, les rendant plus accessibles à la protéolyse. La **pepsine** (sécrétée sous forme de proenzyme, le pepsinogène, activée en milieu acide, active au maximum à pH = 2) est la principale protéase gastrique.
- Dans l'**intestin**, les enzymes pancréatiques (**trypsine, chymotrypsine, élastase, carboxypeptidases**), sécrétées sous forme de zymogènes inactifs, poursuivent la dégradation en acides aminés libres et en di/tripeptides.
- Des protéases membranaires intestinales (**aminopeptidase N, dipeptidase**) achèvent la digestion ; les acides aminés et petits peptides sont absorbés par transport actif vers la veine porte, le foie, puis la circulation générale.

## 2. Réaction de transamination
- La **transamination** est le principal mécanisme d'élimination de l'azote des acides aminés. La plupart des acides aminés y participent, à l'exception notable de la **lysine, la thréonine, la proline et l'hydroxyproline**.
- Les enzymes catalysant ces réactions, les **transaminases (aminotransférases)**, utilisent le **phosphate de pyridoxal** (vitamine B6) comme cofacteur.
- Réaction générale : *acide aminé + α-cétoglutarate ⇌ α-céto acide + glutamate* — réaction réversible, impliquée à la fois dans la dégradation et la synthèse des acides aminés.

## 3. ALAT (ALT/GPT) et ASAT (AST/GOT)

| | ALAT (SGPT) | ASAT (SGOT) |
| --- | --- | --- |
| Réaction | L-alanine + α-cétoglutarate → pyruvate + L-glutamate | Aspartate + α-cétoglutarate ⇌ oxaloacétate + glutamate |
| Localisation subcellulaire | Cytoplasme uniquement | Bilocale (cytoplasme et mitochondrie) |
| Distribution tissulaire | Quasi exclusivement hépatique | Foie, cœur, muscle squelettique, reins, cerveau, GR |
| Spécificité | Plus spécifique du foie | Peut s'élever hors atteinte hépatique (IDM, muscle, pancréatite, hémolyse, rein) |
- Lors d'une atteinte hépatique légère, l'isoenzyme cytoplasmique prédomine dans le sérum ; lors d'une atteinte sévère, l'isoenzyme mitochondriale est également libérée en quantité significative.

## 4. Principe du test optique (dosage cinétique)
- La transamination elle-même n'est pas détectable directement (le cofacteur phosphate de pyridoxal ne produit pas de signal mesurable). On la couple à une réaction de déshydrogénase spécifique :
  - **ALAT (GPT)** : le pyruvate formé est réduit en lactate par la **lactate déshydrogénase (LDH)**, avec oxydation concomitante du NADH en NAD⁺.
  - **ASAT (GOT)** : l'oxaloacétate formé est réduit en malate par la **malate déshydrogénase (MDH)**, avec la même oxydation du NADH.
- La diminution de NADH est mesurée par spectrophotométrie à **340 nm** (longueur d'onde d'absorption spécifique du NADH, pas du NAD⁺). La variation d'absorbance par minute (ΔA/min) est directement proportionnelle à l'activité enzymatique, exprimée en unités internationales (UI).
- Formules pratiques : ALAT (UI) = ΔA/min × 1746 ; ASAT (UI) = ΔA/min × 1750.
- **Valeurs normales** : ALAT — hommes < 50 U/L, femmes < 35 U/L ; ASAT — hommes < 55 U/L, femmes < 35 U/L.

## 5. Signification clinique

| Pathologie hépatique | Élévation typique | Profil |
| --- | --- | --- |
| Hépatite virale / nécrose hépatique aiguë | 20-50× (jusqu'à 100×), avant les signes cliniques | — |
| Cholestase extra-hépatique | Modérée | — |
| Cirrhose | Normale à 4-5× | ASAT > ALAT |
| Cancer hépatique (primitif/métastatique) | 5-10× | ASAT généralement > ALAT |

- **Ratio de De Ritis (ASAT/ALAT)** : > 2 évoque fortement une hépatite alcoolique ; > 5 évoque une cause extra-hépatique ; < 1 fréquent dans l'hépatite virale tardive ; ≈ 1 possible dans la cirrhose ou une hépatopathie avancée. ALAT > ASAT évoque une hépatite virale ou une stéatose hépatique non alcoolique (NAFLD).
- **Alcool** : augmentation légère à modérée des deux enzymes.
- **Médicaments** : opiacés, salicylés, ampicilline, paracétamol, la plupart des neuroleptiques. Le **surdosage en paracétamol** (> 10 g) est particulièrement hépatotoxique via la formation du métabolite réactif **NAPQI**.
- **Cœur** : dans l'infarctus du myocarde, l'ASAT augmente significativement, l'ALAT reste normale ou peu élevée (le muscle cardiaque contient peu d'ALAT).
- **Muscle** : ASAT élevée dans la dystrophie musculaire progressive et la dermatomyosite (jusqu'à 8× la normale) ; les maladies musculaires neurogènes n'élèvent généralement pas les transaminases.
- **Autres** : embolie pulmonaire (ASAT × 2-3), pancréatite aiguë, écrasements musculaires, gangrène, maladie hémolytique (élévations modérées, × 2-5).`;

export const LAB_S2_8_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Dosage des transaminases (ALAT, ASAT)",
    source_label: "Notes de laboratoire — Biochimie II, Lab 8",
    content_fr: LAB_S2_8_COURSE,
  },
  qcm: [
    single("Quelle est la principale protéase de l'estomac et sous quelle forme est-elle sécrétée ?", "B", "La pepsine est sécrétée sous forme de pepsinogène (zymogène), activée en milieu acide, avec une activité maximale à pH = 2.", ["La trypsine, sous forme active directe", "La pepsine, sous forme de pepsinogène (zymogène)", "La chymotrypsine, sous forme active directe", "L'élastase, sous forme de proélastase"]),
    multi("Quels acides aminés ne participent PAS aux réactions de transamination ?", ["A", "B", "C", "D"], "La lysine, la thréonine, la proline et l'hydroxyproline font exception aux réactions de transamination.", ["Lysine", "Thréonine", "Proline", "Hydroxyproline"]),
    single("Quel est le cofacteur des transaminases ?", "C", "Les transaminases utilisent le phosphate de pyridoxal (dérivé de la vitamine B6) comme cofacteur.", ["Le NAD⁺", "L'acide folique", "Le phosphate de pyridoxal", "La biotine"]),
    single("Quels sont les produits de la réaction catalysée par l'ALAT ?", "A", "L'ALAT transfère le groupe amine de la L-alanine à l'α-cétoglutarate, formant du pyruvate et du L-glutamate.", ["Pyruvate et L-glutamate", "Oxaloacétate et L-glutamate", "Lactate et L-glutamate", "Malate et L-glutamate"]),
    single("Pourquoi l'ALAT est-elle considérée comme plus spécifique du foie que l'ASAT ?", "B", "L'ALAT est présente quasi exclusivement dans le foie (cytoplasme), alors que l'ASAT est distribuée dans le foie, le cœur, le muscle, les reins, le cerveau et les globules rouges.", ["L'ALAT est présente en plus grande quantité dans tout l'organisme", "L'ALAT est quasi exclusivement hépatique, contrairement à l'ASAT", "L'ASAT n'a aucune utilité clinique", "L'ALAT est mitochondriale uniquement"]),
    single("Quelle est la localisation subcellulaire de l'ASAT ?", "C", "L'ASAT est bilocale : présente à la fois dans le cytoplasme et dans la mitochondrie, contrairement à l'ALAT (cytoplasme uniquement).", ["Cytoplasme uniquement", "Mitochondrie uniquement", "Cytoplasme et mitochondrie (bilocale)", "Noyau et cytoplasme"]),
    single("Dans le test optique du dosage des transaminases, quelle enzyme couple la réaction de l'ALAT à l'oxydation du NADH ?", "B", "Le pyruvate formé par l'ALAT est réduit en lactate par la lactate déshydrogénase (LDH), avec oxydation du NADH en NAD⁺.", ["La malate déshydrogénase (MDH)", "La lactate déshydrogénase (LDH)", "La glutamate déshydrogénase (GLDH)", "L'anhydrase carbonique"]),
    single("Quelle enzyme couple la réaction de l'ASAT à l'oxydation du NADH ?", "A", "L'oxaloacétate formé par l'ASAT est réduit en malate par la malate déshydrogénase (MDH).", ["La malate déshydrogénase (MDH)", "La lactate déshydrogénase (LDH)", "La glutamate déshydrogénase (GLDH)", "L'urease"]),
    single("À quelle longueur d'onde le dosage optique des transaminases est-il mesuré, et pourquoi ?", "B", "Le dosage se fait à 340 nm, longueur d'onde d'absorption spécifique du NADH (le NAD⁺ n'absorbe pas à cette longueur d'onde).", ["260 nm, absorption des acides nucléiques", "340 nm, absorption spécifique du NADH", "520 nm, absorption du complexe coloré", "600 nm, turbidité de l'échantillon"]),
    single("Quelles sont les valeurs normales de l'ALAT chez l'homme ?", "A", "ALAT < 50 U/L chez l'homme (< 35 U/L chez la femme).", ["< 50 U/L", "< 100 U/L", "< 150 U/L", "< 200 U/L"]),
    single("Que suggère un ratio ASAT/ALAT (De Ritis) supérieur à 2 ?", "C", "Un ratio ASAT/ALAT > 2 évoque fortement une hépatite alcoolique.", ["Une hépatite virale précoce", "Une stéatose hépatique non alcoolique (NAFLD)", "Une hépatite alcoolique", "Une fonction hépatique normale"]),
    single("Que suggère une élévation isolée et prédominante de l'ALAT par rapport à l'ASAT ?", "B", "ALAT > ASAT évoque une hépatite virale ou une stéatose hépatique non alcoolique (NAFLD).", ["Une hépatite alcoolique", "Une hépatite virale ou une NAFLD", "Un infarctus du myocarde", "Une dystrophie musculaire"]),
    single("Quel métabolite réactif est responsable de l'hépatotoxicité du surdosage en paracétamol ?", "C", "Le NAPQI (N-acétyl-p-benzoquinone imine), qui s'accumule lorsque les voies métaboliques normales sont dépassées (> 10 g ingérés).", ["Le glutathion", "L'acétaldéhyde", "Le NAPQI", "L'acide urique"]),
    single("Dans l'infarctus du myocarde, quel profil enzymatique est typiquement observé ?", "A", "L'ASAT augmente significativement (muscle cardiaque riche en ASAT) alors que l'ALAT reste normale ou peu élevée.", ["ASAT élevée, ALAT normale ou peu élevée", "ALAT élevée, ASAT normale", "Les deux restent normales", "Les deux chutent en dessous des valeurs normales"]),
    multi("Parmi ces situations, lesquelles peuvent élever l'ASAT sans refléter nécessairement une atteinte hépatique ?", ["A", "B", "C"], "L'ASAT est présente dans de nombreux tissus (cœur, muscle, reins, cerveau, globules rouges) ; son élévation peut donc refléter un infarctus, une atteinte musculaire ou une hémolyse, indépendamment du foie.", ["Infarctus du myocarde", "Dystrophie musculaire progressive", "Anémie hémolytique aiguë", "Carence en vitamine C isolée"]),
    single("Quelle est la signification clinique d'une élévation des transaminases de 20 à 50 fois la normale ?", "B", "Ce niveau d'élévation, pouvant atteindre jusqu'à 100×, est typique d'une hépatite virale ou d'une nécrose hépatique aiguë.", ["Cirrhose stable", "Hépatite virale / nécrose hépatique aiguë", "Cholestase extra-hépatique légère", "Fonction hépatique normale"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 8 : Transaminases", duration_seconds: 1_200 },
};

// Chapitre labo: titre_fr="Dosage de l'urée", titre_en="Urea Determination"
const LAB_S2_9_COURSE = `# Labo 9 — Métabolisme des protéines : dosage de l'urée

## 1. Métabolisme de l'ammoniac
- L'**ammoniac (NH₃)** est produit dans tous les tissus lors du métabolisme des composés azotés, notamment des acides aminés. À pH physiologique, il existe surtout sous forme d'**ion ammonium (NH₄⁺)**.
- Sources principales : transamination suivie de **désamination oxydative** des acides aminés, catabolisme des amines biogènes, dégradation des bases puriques et pyrimidiques, et activité bactérienne intestinale (l'**uréase** bactérienne convertit l'urée en ammoniac).
- NH₃/NH₄⁺ sont **toxiques**, notamment neurotoxiques (perturbation possible du métabolisme du glutamate/glutamine cérébral) — leur concentration sanguine doit rester très basse.

## 2. Transport et détoxification de l'ammoniac
- Les acides aminés transfèrent leur groupe amine à l'α-cétoglutarate (transamination) pour former du **glutamate**, qui subit ensuite une **désamination oxydative** libérant de l'ammoniac libre pour la synthèse d'urée.
- Formes de transport non toxiques :
  - **Cycle glucose-alanine** : le pyruvate musculaire (glycolyse) est transaminé en alanine, libérée dans le sang, captée par le foie, reconvertie en pyruvate — son groupe amine sert à la synthèse d'urée.
  - **Glutamine** : la glutamine synthétase combine glutamate + ammoniac en glutamine dans les tissus périphériques ; au niveau du rein et de l'intestin, la glutaminase libère l'ammoniac et régénère le glutamate. Ce processus, stimulé par l'acidose, contribue au tamponnage des protons.

## 3. Le cycle de l'urée
- Le cycle de l'urée se déroule exclusivement dans le **foie**. Il débute par l'incorporation de l'ammoniac dans le **carbamoyl phosphate** (via la carbamoyl phosphate synthétase, consommant 2 ATP).
- Étapes suivantes :

| # | Enzyme | Réaction |
| --- | --- | --- |
| 1 | Ornithine transcarbamylase | Ornithine + carbamoyl phosphate → citrulline |
| 2 | Argininosuccinate synthétase | Citrulline + aspartate → argininosuccinate (consomme 1 ATP → AMP) |
| 3 | Argininosuccinase | Argininosuccinate → fumarate + arginine |
| 4 | Arginase | Arginine → urée + ornithine (régénérée, ferme le cycle) |
- L'urée synthétisée est sécrétée dans le plasma puis éliminée par le **rein** (voie principale) ; des voies mineures existent via l'intestin et les glandes sudoripares.

## 4. Dosage enzymatique de l'urée (test optique, méthode à l'uréase)
- Principe : l'urée est hydrolysée en ammoniac et CO₂ par l'**uréase**. L'ammoniac réagit ensuite avec l'α-cétoglutarate et le NADH en présence de **glutamate déshydrogénase (GLDH)**, formant du glutamate et du NAD⁺.
- La réaction est suivie par spectrophotométrie à **340 nm** : la diminution d'absorbance (oxydation du NADH) est proportionnelle à la concentration d'urée.
- Échantillons : sérum/plasma (héparine — pas de fluorure, qui inhibe l'uréase) ou urine des 24 heures.
- **Valeurs normales** : sérum 15-45 mg/dL (1,7-7,5 mmol/L) ; urine (24h) 20-36 g (333-600 mmol).

## 5. Signification clinique
- L'**urée sanguine (BUN)** a historiquement été le premier marqueur endogène de la fonction rénale. Environ **90 %** de l'urée est excrétée par le rein ; elle est librement filtrée par les glomérules mais **40-70 % est passivement réabsorbée** par les tubules — ce qui fait que le BUN peut **sous-estimer** le débit de filtration glomérulaire réel (DFG), notamment en cas de perfusion rénale réduite.
- L'urée dépend aussi de l'apport protéique alimentaire, de la fonction hépatique et de divers états pathologiques — c'est donc un marqueur peu spécifique isolément.
- **Variation physiologique** : l'urée sanguine augmente avec l'apport protéique (ex. ~13-25 mg/100 mL pour 0,5 g protéines/kg/j, jusqu'à ~31-59 mg/100 mL pour 2,5 g/kg/j).
- **Augmentation pathologique** : insuffisance rénale aiguë/chronique (urée urinaire alors diminuée) ; causes extra-rénales d'anurie (insuffisance cardiaque, maladies infectieuses aiguës, hémorragie digestive, diabète, maladie d'Addison, déshydratation par vomissements/diarrhée massifs).
- **Diminution pathologique** : insuffisance hépatique décompensée avancée (ex. coma hépatique).
- **Urée urinaire** : varie fortement selon l'alimentation (20-35 g/j en régime mixte, ~10 g/j sans protéines) ; augmentée en cas d'hypercatabolisme protéique (fièvre, traumatisme, brûlures, hyperthyroïdie) ; diminuée en insuffisance rénale et insuffisance hépatique sévère.`;

export const LAB_S2_9_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Dosage de l'urée",
    source_label: "Notes de laboratoire — Biochimie II, Lab 9",
    content_fr: LAB_S2_9_COURSE,
  },
  qcm: [
    single("Sous quelle forme l'ammoniac existe-t-il majoritairement au pH physiologique ?", "B", "À pH physiologique, l'ammoniac existe principalement sous forme d'ion ammonium (NH₄⁺).", ["NH₃ libre", "NH₄⁺ (ion ammonium)", "Sous forme d'urée directement", "Sous forme de nitrate"]),
    multi("Quelles sont des sources d'ammoniac dans l'organisme ?", ["A", "B", "C", "D"], "L'ammoniac provient de la désamination oxydative des acides aminés, du catabolisme des amines biogènes, de la dégradation des bases puriques/pyrimidiques et de l'activité de l'uréase bactérienne intestinale.", ["Désamination oxydative des acides aminés", "Catabolisme des amines biogènes", "Dégradation des bases puriques et pyrimidiques", "Activité de l'uréase des bactéries intestinales"]),
    single("Quel est le rôle du cycle glucose-alanine ?", "B", "Le pyruvate musculaire est transaminé en alanine, transportée au foie où elle est reconvertie en pyruvate, son groupe amine servant à la synthèse d'urée — un transport non toxique de l'azote.", ["Synthétiser directement l'urée dans le muscle", "Transporter l'azote du muscle vers le foie sous forme non toxique (alanine)", "Éliminer l'ammoniac directement dans l'urine", "Produire du glucose à partir de l'ammoniac"]),
    single("Quelle enzyme forme la glutamine à partir de glutamate et d'ammoniac dans les tissus périphériques ?", "A", "La glutamine synthétase combine glutamate et ammoniac pour former de la glutamine, une forme de transport non toxique de l'azote.", ["La glutamine synthétase", "La glutaminase", "L'arginase", "L'ornithine transcarbamylase"]),
    single("Dans quel organe se déroule exclusivement le cycle de l'urée ?", "C", "Le cycle de l'urée se déroule uniquement dans le foie.", ["Le rein", "Le muscle", "Le foie", "L'intestin"]),
    single("Quelle enzyme catalyse la formation de citrulline à partir d'ornithine et de carbamoyl phosphate ?", "B", "L'ornithine transcarbamylase transfère le groupe carbamoyl du carbamoyl phosphate à l'ornithine, formant la citrulline.", ["L'arginase", "L'ornithine transcarbamylase", "L'argininosuccinate synthétase", "La carbamoyl phosphate synthétase"]),
    single("Quels produits résultent du clivage de l'argininosuccinate par l'argininosuccinase ?", "A", "L'argininosuccinase clive l'argininosuccinate en fumarate et arginine.", ["Fumarate et arginine", "Ornithine et urée", "Citrulline et aspartate", "Glutamate et α-cétoglutarate"]),
    single("Quelle enzyme libère l'urée et régénère l'ornithine, bouclant le cycle de l'urée ?", "D", "L'arginase clive l'arginine en urée et ornithine, régénérant le point de départ du cycle.", ["L'argininosuccinase", "L'ornithine transcarbamylase", "L'argininosuccinate synthétase", "L'arginase"]),
    single("Dans le dosage enzymatique de l'urée, quelle enzyme hydrolyse l'urée en ammoniac et CO₂ ?", "A", "L'uréase hydrolyse l'urée en ammoniac (NH₄⁺) et CO₂.", ["L'uréase", "La glutamate déshydrogénase (GLDH)", "L'arginase", "La lactate déshydrogénase"]),
    single("Pourquoi les anticoagulants contenant du fluorure sont-ils déconseillés pour le dosage de l'urée par méthode enzymatique ?", "B", "Le fluorure inhibe l'activité de l'uréase, faussant le dosage.", ["Ils précipitent l'urée", "Ils inhibent l'activité de l'uréase", "Ils augmentent artificiellement l'absorbance à 340 nm", "Ils dégradent le NADH"]),
    single("Quelles sont les valeurs normales de l'urée sérique ?", "C", "L'urée sérique normale se situe entre 15 et 45 mg/dL (1,7-7,5 mmol/L).", ["1-5 mg/dL", "5-15 mg/dL", "15-45 mg/dL", "45-90 mg/dL"]),
    single("Quelle proportion de l'urée filtrée par les glomérules est réabsorbée passivement par les tubules ?", "C", "Environ 40 à 70 % de l'urée filtrée est réabsorbée passivement, ce qui peut faire sous-estimer le DFG réel.", ["10-20 %", "20-30 %", "40-70 %", "90-100 %"]),
    single("Pourquoi le BUN (urée sanguine) peut-il sous-estimer le débit de filtration glomérulaire (DFG) réel ?", "B", "En raison de la réabsorption tubulaire passive importante de l'urée (40-70 %), surtout marquée en cas de perfusion rénale réduite.", ["Parce que l'urée n'est jamais filtrée par le glomérule", "Parce qu'une part importante de l'urée filtrée est réabsorbée passivement par les tubules", "Parce que l'urée est entièrement métabolisée par le rein", "Parce que le BUN ne dépend pas de la fonction rénale"]),
    single("Dans quelle situation l'urée sanguine est-elle typiquement diminuée ?", "B", "En cas d'insuffisance hépatique décompensée avancée (ex. coma hépatique), la synthèse d'urée est altérée.", ["Insuffisance rénale aiguë", "Insuffisance hépatique décompensée avancée", "Déshydratation sévère", "Apport protéique élevé"]),
    single("Quel facteur physiologique fait varier le plus l'urée urinaire de 24h ?", "A", "L'apport alimentaire en protéines fait varier fortement l'urée urinaire (20-35 g/j en régime mixte, ~10 g/j sans protéines).", ["L'apport alimentaire en protéines", "La couleur des urines", "L'heure de la miction", "Le volume sanguin total"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 9 : Urée", duration_seconds: 1_050 },
};

// Chapitre labo: titre_fr="Dosage de la créatinine sérique et urinaire", titre_en="Determination of Serum and Urinary Creatinine"
const LAB_S2_10_COURSE = `# Labo 10 — Métabolisme des protéines : dosage de la créatinine

## 1. Synthèse de la créatine et formation de la créatinine
- La **créatine** est synthétisée dans le **foie et le rein**, à partir des acides aminés **arginine, glycine et S-adénosylméthionine (SAM)**, puis transportée vers le muscle squelettique et le cerveau, où elle est convertie en **créatine phosphate** (composé à haute énergie).
- Chaque jour, une petite fraction (**1-2 %**) de la créatine phosphate musculaire subit une **déshydratation spontanée non enzymatique** pour former la **créatinine**. La production quotidienne de créatinine est donc **proportionnelle à la masse musculaire** de l'individu.

## 2. Élimination rénale
- La créatinine circule **librement dans le sang** (non liée aux protéines plasmatiques), est **librement filtrée** par les glomérules et excrétée dans l'urine avec une **réabsorption tubulaire minimale**. Une petite fraction (< 10 %) de la créatinine urinaire peut être sécrétée par les tubules.
- Une clairance rénale diminuée entraîne une **augmentation de la créatinine sanguine**.

## 3. Limites de la créatinine comme marqueur de filtration glomérulaire (DFG)
- La créatinine sérique dépend fortement de la **masse musculaire**, qui varie selon l'individu (culturiste vs patient cachectique), l'**âge** (diminution de la masse musculaire), le **sexe** (masse musculaire généralement plus faible chez la femme).
- Un **apport carné important** peut augmenter transitoirement la créatinine sérique jusqu'à **30 %** (créatinine ingérée avec la viande). Un **exercice physique intense** peut aussi provoquer une élévation transitoire modérée.
- Deux approches pour estimer le DFG :
  - **Interprétation directe** de la concentration de créatinine sérique — limitée car les valeurs de référence varient selon l'âge et le sexe.
  - **Estimation par calcul** : formules intégrant créatinine, âge, sexe (et parfois l'origine ethnique) — ex. l'équation **MDRD** (Modification of Diet in Renal Disease, version à 4 variables), recommandée pour le dépistage populationnel du DFG réduit, mais non applicable aux enfants ni aux femmes enceintes.

## 4. Méthode de dosage — réaction de Jaffé (variante Popper-Mandel-Mayer)
- Principe : la créatinine réagit avec l'**acide picrique** en milieu alcalin, formant un complexe **rouge-orangé**, dont l'absorbance (mesurée autour de 520-530 nm) est directement proportionnelle à la concentration de créatinine.
- Interférences possibles : acide ascorbique, acétone, acide pyruvique, acide acétoacétique, glucose, acide urique, protéines, certains antibiotiques — d'où l'existence de variantes modifiées de la méthode pour limiter ces interférences. Une méthode enzymatique alternative existe, avec moins d'interférences mais des valeurs systématiquement plus basses.
- Formules : créatinine sérique (mg/dL) = (A_sérum / A_standard) × 2 ; créatinine urinaire (g/L) = (A_urine / A_standard) × 2.
- **Valeurs normales** : sérum 0,4-1,5 mg/dL (45-95 µmol/L) ; urine 1-1,8 g/24h (8,8-13,3 mmol/24h).
- **Valeurs pathologiques élevées** : néphropathies aiguës et chroniques, maladies musculaires (dystrophie musculaire progressive, myasthénie grave).

## 5. Clairance de la créatinine endogène
- La clairance de la créatinine estime le **débit de filtration glomérulaire (DFG)** : volume de plasma épuré de créatinine par minute par les reins. Nécessite un recueil urinaire des **24 heures**.
- Formule : **Ccr (mL/min) = (U × V) / (P × 1440)**, où U = concentration urinaire de créatinine, V = volume urinaire des 24h (mL), P = concentration plasmatique de créatinine, 1440 = minutes en 24h.
- **Valeurs normales** : 95-150 mL/min.
- En cas de néphropathie aiguë ou chronique, la **clairance de la créatinine diminue avant que la créatinine sérique n'augmente** — c'est donc un marqueur plus précoce que la créatinine sérique isolée.`;

export const LAB_S2_10_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Dosage de la créatinine sérique et urinaire",
    source_label: "Notes de laboratoire — Biochimie II, Lab 10",
    content_fr: LAB_S2_10_COURSE,
  },
  qcm: [
    single("À partir de quels acides aminés la créatine est-elle synthétisée ?", "A", "La créatine est synthétisée à partir de l'arginine, de la glycine et de la S-adénosylméthionine (SAM).", ["Arginine, glycine et S-adénosylméthionine", "Alanine, glutamate et aspartate", "Lysine, thréonine et proline", "Phénylalanine, tyrosine et tryptophane"]),
    single("Dans quels organes la créatine est-elle synthétisée ?", "B", "La créatine est synthétisée dans le foie et le rein, puis transportée vers le muscle et le cerveau.", ["Le muscle et le cerveau", "Le foie et le rein", "Le pancréas et la rate", "Les poumons et le cœur"]),
    single("Comment se forme la créatinine à partir de la créatine phosphate ?", "C", "La créatinine se forme par déshydratation spontanée non enzymatique d'environ 1-2 % de la créatine phosphate musculaire par jour.", ["Par phosphorylation enzymatique", "Par hydrolyse enzymatique dans le foie", "Par déshydratation spontanée non enzymatique", "Par filtration glomérulaire directe"]),
    single("La production quotidienne de créatinine est-elle proportionnelle à quel paramètre ?", "B", "La production de créatinine est proportionnelle à la masse musculaire de l'individu.", ["Le poids total", "La masse musculaire", "L'apport hydrique", "La fonction hépatique"]),
    single("Comment la créatinine est-elle éliminée au niveau rénal ?", "A", "La créatinine est librement filtrée par les glomérules, avec une réabsorption tubulaire minimale (< 10 % sécrétée).", ["Filtration glomérulaire libre, réabsorption tubulaire minimale", "Sécrétion tubulaire exclusive, aucune filtration", "Réabsorption tubulaire complète", "Élimination biliaire principalement"]),
    single("Pourquoi un apport carné important peut-il augmenter transitoirement la créatinine sérique ?", "C", "La viande contient de la créatinine, dont l'absorption digestive peut augmenter transitoirement la créatininémie jusqu'à 30 %.", ["Elle stimule la synthèse hépatique de créatine", "Elle inhibe la filtration glomérulaire", "Elle apporte de la créatinine directement absorbée par l'intestin", "Elle augmente la masse musculaire immédiatement"]),
    single("Quelle équation est couramment utilisée pour estimer le DFG à partir de la créatinine sérique, l'âge, le sexe et l'origine ethnique ?", "B", "L'équation MDRD (Modification of Diet in Renal Disease), version à 4 variables.", ["L'équation de Henderson-Hasselbalch", "L'équation MDRD", "L'équation de Michaelis-Menten", "L'équation de Nernst"]),
    single("À qui l'équation MDRD n'est-elle PAS applicable ?", "C", "L'équation MDRD n'est pas applicable aux enfants ni aux femmes enceintes.", ["Aux hommes âgés", "Aux patients obèses", "Aux enfants et aux femmes enceintes", "Aux patients diabétiques"]),
    single("Quel réactif est utilisé dans la méthode de Jaffé pour doser la créatinine ?", "B", "L'acide picrique en milieu alcalin réagit avec la créatinine pour former un complexe rouge-orangé.", ["Le réactif de Fehling", "L'acide picrique en milieu alcalin", "Le réactif de Biuret", "L'acide sulfosalicylique"]),
    multi("Quelles substances peuvent interférer avec le dosage de la créatinine par la méthode de Jaffé ?", ["A", "B", "C", "D"], "L'acide ascorbique, l'acétone, l'acide pyruvique/acétoacétique, le glucose, l'acide urique, les protéines et certains antibiotiques peuvent interférer avec la réaction de Jaffé.", ["Acide ascorbique", "Acétone", "Glucose", "Acide urique"]),
    single("Quelles sont les valeurs normales de la créatinine sérique ?", "B", "La créatininémie normale est de 0,4 à 1,5 mg/dL (45-95 µmol/L).", ["0,1-0,3 mg/dL", "0,4-1,5 mg/dL", "2-5 mg/dL", "5-10 mg/dL"]),
    single("Quelle est la formule de la clairance de la créatinine (Ccr) ?", "A", "Ccr (mL/min) = (U × V) / (P × 1440), avec U = créatinine urinaire, V = volume urinaire 24h, P = créatinine plasmatique, 1440 = minutes/jour.", ["Ccr = (U × V) / (P × 1440)", "Ccr = (P × V) / (U × 1440)", "Ccr = (U × P) / (V × 1440)", "Ccr = U × P × V × 1440"]),
    single("Quelles sont les valeurs normales de la clairance de la créatinine ?", "C", "La clairance de la créatinine normale se situe entre 95 et 150 mL/min.", ["10-30 mL/min", "50-80 mL/min", "95-150 mL/min", "200-250 mL/min"]),
    single("Pourquoi la clairance de la créatinine est-elle un marqueur plus précoce qu'un dosage isolé de la créatinine sérique dans les néphropathies ?", "B", "Dans les néphropathies aiguës et chroniques, la clairance de la créatinine diminue avant que la créatinine sérique n'augmente.", ["Parce qu'elle ne dépend pas de la fonction rénale", "Parce qu'elle diminue avant que la créatininémie n'augmente", "Parce qu'elle est mesurée en continu", "Parce qu'elle ne nécessite pas de recueil urinaire"]),
    single("Dans quelles pathologies observe-t-on une créatinine sérique augmentée en dehors des néphropathies ?", "D", "Les maladies musculaires comme la dystrophie musculaire progressive et la myasthénie grave peuvent élever la créatinine sérique.", ["Carence en vitamine C isolée", "Hépatite virale isolée", "Diabète insipide isolé", "Dystrophie musculaire progressive et myasthénie grave"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 10 : Créatinine", duration_seconds: 1_100 },
};
