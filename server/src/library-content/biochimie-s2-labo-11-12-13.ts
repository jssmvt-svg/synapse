import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const LAB_S2_11_COURSE = `# Labo 11 — Métabolisme des protéines : dosage de l'hémoglobine et de la bilirubine

## 1. L'hème : structure et fonctions
- L'hème est un cycle porphyrine tétrapyrrolique portant un ion fer central. Deux grandes familles de fonctions :
  - **Chimie redox** : transport d'électrons (cytochromes de la chaîne respiratoire), catalyse enzymatique (cytochrome P450, cyclo-oxygénase...).
  - **Fixation réversible de gaz** : O₂ (hémoglobine et myoglobine, 80-90 % de tout l'hème de l'organisme), NO (guanylate cyclase).
- Dans l'hémoglobine et la myoglobine, le fer de l'hème reste sous forme **ferreuse (Fe²⁺)** tout au long du cycle de fixation/libération de l'O₂. Dans les enzymes redox et la chaîne respiratoire, il alterne entre Fe²⁺ et Fe³⁺ (ferrique).

## 2. Biosynthèse de l'hème
- Le fer alimentaire est absorbé, mais le cycle porphyrine est presque entièrement synthétisé de novo. La voie est répartie entre mitochondrie (étapes initiale et finale) et cytosol (étapes intermédiaires).
- Première réaction (mitochondriale) : la glycine forme une base de Schiff avec le pyridoxal phosphate (PLP) via l'**ALA synthase** — étape limitante, soumise à rétro-inhibition par l'hème (produit final de la voie).
- Dernière étape : insertion du fer, catalysée par la **ferrochélatase**.
- Perturbations de la synthèse de l'hème : déficits enzymatiques héréditaires (**porphyries**), carence en fer, carence en vitamine B6 (inhibe l'ALA synthase), intoxication au plomb (inhibe la porphobilinogène synthase). Un déficit en hème lève la rétro-inhibition sur l'ALA synthase et amplifie l'accumulation des intermédiaires en amont du blocage enzymatique.

## 3. Dosage de l'hémoglobine (méthode à la cyanméthémoglobine)
- Le dosage de l'Hb aide au diagnostic de l'anémie, de l'hémorragie et d'autres troubles hématologiques ; il est plus informatif que le seul comptage des globules rouges.
- **Principe** : le sang dilué dans une solution de ferricyanure de potassium et de cyanure de potassium (réactif de Drabkin) forme de la cyanméthémoglobine, stable, dont l'absorbance est mesurée à 540 nm et comparée à un standard.
- **Valeurs normales** : Hommes 14-16 g/dL ; Femmes 12-14 g/dL. Anémie si Hb < 12 g/dL (homme) ou < 10 g/dL (femme).
- **Diminution** : anémies (dont ferriprive, avec globules rouges hypochromes et microcytaires), hémoglobinopathies (ex. HbS remplaçant HbA dans la drépanocytose), maladie de Crohn, insuffisance rénale chronique, glomérulonéphrite chronique, hémoglobinurie paroxystique nocturne, hyperhydratation, infiltration/suppression médullaire. L'anémie physiologique de la grossesse résulte de l'expansion du volume plasmatique.
- **Augmentation** : déshydratation, polyglobulies (dont polyglobulie de Vaquez), polyglobulie secondaire à une hypoxie chronique, à une encéphalite ou à certaines tumeurs sécrétant de l'érythropoïétine.

## 4. Dégradation de l'hème et production de bilirubine
- La dégradation a lieu principalement dans le système réticulo-endothélial (rate, cellules de Kupffer hépatiques, phagocytes).
- Étape limitante : l'**hème oxygénase** clive le pont α-méthène, libère le fer chélaté, produit du **CO** (exhalé par les poumons) et de la **biliverdine** (pigment vert).
- La **biliverdine réductase** (NADPH-dépendante) réduit la biliverdine en **bilirubine** (pigment jaune-orangé), très peu soluble dans l'eau à pH neutre (conformation compacte à liaisons hydrogène).
- La bilirubine circule liée de façon réversible à l'**albumine sérique**, ce qui assure sa solubilité, empêche sa diffusion tissulaire et sa filtration rénale.
- Au niveau hépatique, la bilirubine se dissocie de l'albumine et entre dans les hépatocytes (diffusion passive + endocytose médiée par récepteur).
- **Conjugaison** : les UDP-glucuronosyltransférases (UDPGT) couplent la bilirubine à l'acide glucuronique, formant surtout du **diglucuronide de bilirubine**, hydrosoluble, sécrétable dans la bile.
- Dans l'intestin, la bilirubine conjuguée est déconjuguée par les β-glucuronidases bactériennes puis réduite en **urobilinogène**/stercobilinogène, oxydés en urobiline/stercobiline (couleur des selles). Une fraction de l'urobilinogène est réabsorbée (cycle entéro-hépatique) et une petite partie est excrétée dans l'urine sous forme d'urobiline (couleur jaune de l'urine).

## 5. Dosage de la bilirubine (méthode diazoïque de Jendrassik-Grof)
- **Principe** : réaction diazoïque d'Ehrlich — la bilirubine réagit avec l'acide sulfanilique diazoté pour former des azodipyrroles rouges. La bilirubine **directe (conjuguée)** réagit directement ; la bilirubine **totale** nécessite un accélérateur en milieu alcalin (réactif R3/R4) pour faire réagir aussi la bilirubine indirecte (non conjuguée).
- **Calcul** : bilirubine indirecte = bilirubine totale − bilirubine directe.
- **Interférences** : l'hémolyse fausse les valeurs à la baisse ; la lipémie (turbidité) les fausse à la hausse ; la bilirubine est détruite par la lumière et la chaleur.
- **Valeurs normales** : bilirubine directe < 0,2 mg/dL ; bilirubine totale < 1,0 mg/dL ; bilirubine indirecte < 0,8 mg/dL.

## 6. L'ictère : classification clinique
Toute perturbation de la production, la conjugaison ou l'excrétion de la bilirubine entraîne une hyperbilirubinémie, cliniquement visible sous forme d'**ictère** (du français « jaune »).

| Type d'ictère | Cause | Bilirubine plasmatique | Bilirubine urinaire | Urobilinogène urinaire | Selles |
| --- | --- | --- | --- | --- | --- |
| Pré-hépatique (hémolytique) | Hémolyse excessive (sphérocytose, drépanocytose, déficit G6PD, hémolyse auto-immune/infectieuse) | Indirecte ↑ | Absente (« acholurique ») | Augmenté | Normales |
| Hépatique (hépatocellulaire) | Hépatite virale, alcool, toxicité médicamenteuse, cirrhose | Directe ET indirecte ↑ | Présente (urines foncées) | Généralement augmenté | Normales ou pâles |
| Post-hépatique (obstructif) | Calculs biliaires, tumeurs pancréatiques/biliaires, sténoses | Directe ↑↑ | Présente (urines foncées) | Absent ou très bas | Pâles/décolorées |
- **Ictère néonatal** : très fréquent (jusqu'à 60 % des nouveau-nés à terme, 80 % des prématurés), le plus souvent physiologique (hémolyse accrue + système de conjugaison immature). L'hyperbilirubinémie **non conjuguée** est le type le plus fréquent (physiologique, ictère de l'allaitement, hémolyse) ; l'hyperbilirubinémie **conjuguée** est toujours pathologique (atrésie biliaire, hépatite néonatale, maladie métabolique) et nécessite une investigation urgente. Une hyperbilirubinémie non conjuguée sévère non traitée expose à l'encéphalopathie bilirubinique (**ictère nucléaire/kernictère**), aux séquelles neurologiques irréversibles.

## 7. Désordres génétiques de la bilirubine
- **Syndrome de Gilbert** : trouble héréditaire fréquent (transmission autosomique récessive), hyperbilirubinémie non conjuguée légère à modérée, intermittente, pronostic excellent, pas d'atteinte hépatique progressive ; risque accru de toxicité médicamenteuse pour les traitements interférant avec la conjugaison. Déclencheurs typiques : jeûne, maladie intercurrente, déshydratation, menstruations.
- **Syndrome de Crigler-Najjar** : maladie congénitale rare, autosomique récessive, due à des mutations du gène UGT1A1 — absence complète de l'UDP-glucuronosyltransférase (type I) ou activité très réduite (type II). Hyperbilirubinémie non conjuguée marquée dès la naissance ; le type I expose à des concentrations neurotoxiques et à un risque élevé de kernictère si non traité.

## Points à retenir
- Le fer de l'hème doit être ferreux (Fe²⁺) pour fixer l'O₂ ; l'ALA synthase (mitochondriale) est l'étape limitante et rétro-inhibée de la synthèse de l'hème.
- Dosage Hb : méthode à la cyanméthémoglobine, absorbance à 540 nm ; normes 14-16 g/dL (H), 12-14 g/dL (F).
- Dégradation de l'hème → biliverdine → bilirubine (liée à l'albumine) → conjugaison hépatique (UDPGT) → excrétion biliaire → urobilinogène/stercobiline intestinaux.
- Trois types d'ictère : pré-hépatique (bilirubine indirecte ↑, urines sans bilirubine), hépatique (mixte), post-hépatique (bilirubine directe ↑, selles décolorées).
- Gilbert (bénin, UGT1A1 partiellement fonctionnelle) vs Crigler-Najjar (sévère, UGT1A1 absente ou quasi absente).`;

export const LAB_S2_11_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Dosage de l'hémoglobine et de la bilirubine",
    source_label: "Notes de laboratoire — Biochimie II, Lab 11",
    content_fr: LAB_S2_11_COURSE,
  },
  qcm: [
    single("Quelle forme du fer de l'hème est présente tout au long du cycle de fixation/libération de l'O₂ par l'hémoglobine ?", "A", "Dans l'hémoglobine et la myoglobine, le fer reste sous forme ferreuse (Fe²⁺) durant tout le cycle de fixation de l'O₂.", ["Fe²⁺ (ferreux)", "Fe³⁺ (ferrique)", "Il alterne entre Fe²⁺ et Fe³⁺ à chaque cycle", "Fe⁰ (métallique)"]),
    single("Quelle est l'étape limitante de la biosynthèse de l'hème ?", "B", "La réaction de l'ALA synthase (mitochondriale), soumise à rétro-inhibition par l'hème, est l'étape limitante et engagée de la voie.", ["La ferrochélatase", "L'ALA synthase", "La porphobilinogène synthase", "L'hème oxygénase"]),
    multi("Parmi ces causes, lesquelles perturbent la synthèse de l'hème ?", ["A", "B", "C"], "La carence en fer, la carence en vitamine B6 (inhibe l'ALA synthase) et l'intoxication au plomb (inhibe la porphobilinogène synthase) perturbent toutes la synthèse de l'hème.", ["Carence en fer", "Carence en vitamine B6", "Intoxication au plomb", "Excès de vitamine C"]),
    single("Quel est le principe de la méthode de dosage de l'hémoglobine utilisée en laboratoire ?", "C", "Le sang dilué dans le réactif de Drabkin (ferricyanure + cyanure de potassium) forme de la cyanméthémoglobine, mesurée par spectrophotométrie à 540 nm.", ["Réaction diazoïque avec l'acide sulfanilique", "Réduction de l'acide phosphotungstique", "Formation de cyanméthémoglobine, lue à 540 nm", "Fixation directe sur une résine échangeuse d'ions"]),
    single("Quelles sont les valeurs normales d'hémoglobine chez l'homme adulte ?", "B", "Chez l'homme, l'hémoglobine normale se situe entre 14 et 16 g/dL.", ["10-12 g/dL", "14-16 g/dL", "18-20 g/dL", "8-10 g/dL"]),
    single("Quel type de globule rouge caractérise l'anémie ferriprive ?", "A", "L'anémie ferriprive donne des globules rouges hypochromes (pâles) et microcytaires (petits).", ["Hypochrome et microcytaire", "Hyperchrome et macrocytaire", "Normochrome et normocytaire", "Hypochrome et macrocytaire"]),
    single("Quelle enzyme catalyse l'étape limitante de la dégradation de l'hème en bilirubine ?", "B", "L'hème oxygénase catalyse le clivage oxydatif du pont α-méthène, étape limitante de la formation de bilirubine.", ["La biliverdine réductase", "L'hème oxygénase", "L'UDP-glucuronosyltransférase", "La ferrochélatase"]),
    single("Quel gaz est produit lors de la dégradation de l'hème par l'hème oxygénase ?", "C", "La réaction de l'hème oxygénase libère du monoxyde de carbone (CO), exhalé par les poumons.", ["De l'azote (N₂)", "Du dioxyde de carbone (CO₂)", "Du monoxyde de carbone (CO)", "De l'ammoniac (NH₃)"]),
    single("À quelle protéine plasmatique la bilirubine non conjuguée est-elle liée pour son transport ?", "A", "La bilirubine non conjuguée circule liée de façon réversible à l'albumine sérique.", ["L'albumine", "La transferrine", "L'haptoglobine", "La céruloplasmine"]),
    single("Quelle famille d'enzymes hépatiques conjugue la bilirubine à l'acide glucuronique ?", "D", "Les UDP-glucuronosyltransférases (UDPGT) catalysent la glucuronidation de la bilirubine, la rendant hydrosoluble.", ["Les cytochromes P450", "Les glutathion-S-transférases", "Les sulfotransférases", "Les UDP-glucuronosyltransférases (UDPGT)"]),
    single("Pourquoi la bilirubine non conjuguée est-elle absente des urines dans l'ictère pré-hépatique ?", "B", "Liée fortement à l'albumine, elle ne peut franchir la barrière de filtration glomérulaire et n'apparaît donc pas dans les urines, même si son taux plasmatique est élevé.", ["Elle est entièrement dégradée dans le rein", "Elle est liée à l'albumine et non filtrée par le glomérule", "Elle précipite avant d'atteindre le rein", "Elle est réabsorbée à 100 % dans le tubule proximal"]),
    single("Quel profil biologique est typique de l'ictère post-hépatique (obstructif) ?", "C", "L'obstruction biliaire entraîne une forte élévation de la bilirubine directe, une bilirubinurie et des selles pâles par absence de stercobiline.", ["Bilirubine indirecte élevée, urines claires, selles normales", "Bilirubine directe et indirecte normales", "Bilirubine directe élevée, urines foncées, selles décolorées", "Urobilinogène urinaire très augmenté"]),
    single("Quelle est la cause la plus fréquente de l'ictère néonatal physiologique ?", "A", "Il résulte d'une hémolyse accrue des érythrocytes associée à l'immaturité du système hépatique de conjugaison de la bilirubine.", ["Hémolyse accrue et immaturité du système de conjugaison hépatique", "Obstruction des voies biliaires", "Atrésie biliaire congénitale", "Hépatite virale néonatale"]),
    single("Quel type d'hyperbilirubinémie néonatale est toujours considéré comme pathologique et nécessite une investigation urgente ?", "B", "L'hyperbilirubinémie conjuguée est toujours pathologique chez le nouveau-né (atrésie biliaire, hépatite néonatale, maladie métabolique).", ["L'hyperbilirubinémie non conjuguée", "L'hyperbilirubinémie conjuguée", "Les deux sont toujours bénignes", "Aucune des deux n'est jamais pathologique"]),
    single("Quelle mutation génétique est à l'origine du syndrome de Crigler-Najjar ?", "C", "Le syndrome de Crigler-Najjar résulte de mutations du gène UGT1A1, entraînant une absence ou une forte réduction de l'UDP-glucuronosyltransférase.", ["Mutation du gène de la ferrochélatase", "Mutation du gène de l'albumine", "Mutation du gène UGT1A1", "Mutation du gène de l'hème oxygénase"]),
    single("Quelle caractéristique distingue le syndrome de Gilbert du syndrome de Crigler-Najjar de type I ?", "A", "Le syndrome de Gilbert est bénin avec une activité UDPGT partiellement conservée, alors que le type I de Crigler-Najjar présente une absence complète de l'enzyme et un risque élevé de kernictère.", ["Le syndrome de Gilbert est bénin, l'activité enzymatique résiduelle étant conservée", "Le syndrome de Gilbert est toujours plus sévère que Crigler-Najjar", "Les deux syndromes ont un pronostic identique", "Seul Crigler-Najjar affecte la bilirubine non conjuguée"]),
    single("Quelle est la complication neurologique redoutée d'une hyperbilirubinémie non conjuguée sévère chez le nouveau-né ?", "D", "Le dépôt de bilirubine dans les noyaux gris centraux provoque l'encéphalopathie bilirubinique, ou kernictère, aux séquelles irréversibles.", ["La méningite néonatale", "L'hydrocéphalie", "La paralysie cérébrale d'origine ischémique", "Le kernictère (encéphalopathie bilirubinique)"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 11 : Hémoglobine et bilirubine", duration_seconds: 1_275 },
};

const LAB_S2_12_COURSE = `# Labo 12 — Métabolisme des acides nucléiques : dosage de l'acide urique

## 1. Structure des acides nucléiques
- Les acides nucléiques sont des macromolécules informationnelles universelles, stockant, transmettant et exprimant le patrimoine génétique.
- Ce sont des polymères de haut poids moléculaire (**polynucléotides**), composés de nucléotides reliés par des liaisons **phosphodiester 3'-5'**.
- Chaque nucléotide comprend trois éléments : une **base azotée** (purine : adénine A, guanine G ; pyrimidine : cytosine C, thymine T, uracile U), un **pentose** (ribose ou désoxyribose) et un **groupement phosphate**.

## 2. ADN et ARN
- **ADN** : matériel héréditaire, stocke l'information génétique nécessaire au développement, au fonctionnement et à la reproduction. Principalement nucléaire (aussi mitochondrial/chloroplastique), stable, capable d'autoréplication.
- Double hélice : deux brins complémentaires antiparallèles (5'→3' et 3'→5'), appariement A-T (2 liaisons hydrogène) et G-C (3 liaisons hydrogène).
- **ARN** : intermédiaire entre l'ADN et la synthèse protéique, rôles aussi régulateurs, structuraux et catalytiques. Moins stable que l'ADN (groupe 2'-OH réactif). Types : **ARNm** (messager, transporte l'information de l'ADN vers le ribosome), **ARNt** (transfert, apporte les acides aminés au ribosome), **ARNr** (ribosomique, composant structural/fonctionnel du ribosome), **ARN régulateurs** (miARN, siARN), **ARN catalytiques** (ribozymes).

## 3. Catabolisme des acides nucléiques
Étapes principales :
1. **Hydrolyse des polynucléotides en nucléotides** par les DNases et RNases.
2. **Dégradation des nucléotides en nucléosides** + phosphate libre, par les nucléotidases.
3. **Clivage des nucléosides en bases azotées + pentose**, par les nucléosidases ou nucléoside phosphorylases.
4. **Catabolisme final des bases puriques et pyrimidiques** : les pyrimidines donnent des produits hydrosolubles facilement excrétés (CO₂, H₂O, NH₃) ; les purines sont dégradées en **acide urique** (2,6,8-trihydroxypurine).

## 4. Catabolisme des purines et acide urique
- Le cycle purique subit une désamination puis une oxydation progressive : hypoxanthine → xanthine → **acide urique**.
- Chez l'humain et les grands primates, l'acide urique est le produit final du catabolisme purique (contrairement à la plupart des mammifères, où l'**uricase** le dégrade encore en allantoïne).
- Production principalement hépatique, à partir de purines endogènes et exogènes. **Valeur normale sérique : 1-7 mg/100 mL** ; pool total d'urate ≈ 1 g. Environ 2/3 est excrété par le rein (sécrétion tubulaire), 1/3 par voie intestinale.
- L'acide urique est un acide faible (pKa 5,75 dans le sang, 5,25 dans l'urine) : à pH physiologique (7,4), ~98 % circule sous forme ionisée, l'anion **urate**. En raison de la forte concentration de Na⁺ extracellulaire, il existe surtout sous forme d'**urate monosodique**, dont la limite de solubilité est de **6 mg/dL (360 µmol/L)**.
- Au-delà de ce seuil de solubilité, le risque de cristallisation (urate monosodique) augmente. Le pool pathologique peut atteindre 25-30 g, par excrétion rénale insuffisante (70-80 % des cas) ou surproduction (20 % des cas).

## 5. La goutte
- Arthrite inflammatoire douloureuse causée par le dépôt de cristaux d'urate monosodique dans les articulations et tissus mous, en lien avec une hyperuricémie.
- Crise typique : douleur articulaire brutale et sévère, souvent nocturne, classiquement monoarticulaire (articulation métatarsophalangienne du gros orteil en premier lieu), pouvant devenir polyarticulaire dans les formes chroniques (chevilles, genoux, poignets, doigts). Gonflement, rougeur, chaleur associés. Résolution spontanée en 7-10 jours sans traitement.
- Goutte chronique : crises récurrentes, formation de **tophi** (dépôts sous-cutanés de cristaux d'urate), déformations articulaires, risque de néphropathie goutteuse (insuffisance rénale chronique).
- **Diagnostic** : ponction articulaire et microscopie (cristaux d'urate monosodique en aiguilles, biréfringence négative en lumière polarisée) ; élévation de l'uricémie.

## 6. Dosage de l'acide urique sérique — méthode colorimétrique
- **Principe** : l'acide urique, réducteur, réduit l'acide phosphotungstique en milieu alcalin, formant un complexe bleu dont l'intensité colorimétrique est proportionnelle à sa concentration. L'acide ascorbique interfère mais est éliminé par le pH alcalin (10-11) du tampon.
- Lecture des absorbances (échantillon et standard) à **710 nm**, blanc à zéro.
- **Valeurs normales : 1-7 mg/100 mL de sérum.**

## 7. Hyperuricémie et hypouricémie
- **Hyperuricémie** — causes de surproduction : alimentation riche en purines (viande rouge, abats, fruits de mer), consommation d'alcool (surtout la bière), syndrome de lyse tumorale (chimiothérapie, leucémies, myélome, lymphome de Hodgkin), brûlures étendues, désordres génétiques (ex. syndrome de Lesch-Nyhan).
- Causes de sous-excrétion (les plus fréquentes) : maladie rénale, certains médicaments (diurétiques, salicylés/aspirine), déshydratation, intoxication au plomb.
- **Hypouricémie** : rare — maladie hépatocellulaire sévère, trouble de la réabsorption tubulaire rénale, déficit en xanthine oxydase, ou effet secondaire d'un traitement hypo-uricémiant.

## Points à retenir
- Un nucléotide = base azotée + pentose + phosphate ; liaisons phosphodiester 3'-5'.
- Les purines sont dégradées en acide urique (produit final chez l'humain, faute d'uricase) ; les pyrimidines donnent des produits hydrosolubles (CO₂, H₂O, NH₃).
- Seuil de solubilité de l'urate monosodique : 6 mg/dL — au-delà, risque de cristallisation et de goutte.
- Dosage colorimétrique de l'acide urique : réduction de l'acide phosphotungstique, lecture à 710 nm ; normes 1-7 mg/100 mL.
- Hyperuricémie : sous-excrétion rénale (cause la plus fréquente) ou surproduction (purines, alcool, lyse tumorale, Lesch-Nyhan).`;

export const LAB_S2_12_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Dosage de l'acide urique",
    source_label: "Notes de laboratoire — Biochimie II, Lab 12",
    content_fr: LAB_S2_12_COURSE,
  },
  qcm: [
    single("Quels sont les trois composants d'un nucléotide ?", "B", "Un nucléotide est composé d'une base azotée, d'un pentose (ribose ou désoxyribose) et d'un groupement phosphate.", ["Une base azotée, un acide aminé et un phosphate", "Une base azotée, un pentose et un phosphate", "Un pentose, un phosphate et un acide gras", "Deux bases azotées et un pentose"]),
    single("Quel type de liaison relie les nucléotides entre eux dans un polynucléotide ?", "C", "Les nucléotides sont reliés par des liaisons phosphodiester 3'-5'.", ["Liaison peptidique", "Liaison glycosidique simple", "Liaison phosphodiester 3'-5'", "Liaison hydrogène"]),
    multi("Quelles sont les bases puriques ?", ["A", "B"], "L'adénine et la guanine sont des bases puriques ; la cytosine, la thymine et l'uracile sont des pyrimidines.", ["Adénine", "Guanine", "Cytosine", "Thymine"]),
    single("Pourquoi l'ARN est-il globalement moins stable que l'ADN ?", "A", "Le groupe 2'-OH réactif du ribose rend l'ARN plus sensible à l'hydrolyse que l'ADN, qui possède un désoxyribose.", ["À cause du groupe 2'-OH réactif du ribose", "Parce qu'il est simple brin uniquement", "Parce qu'il contient de la thymine", "Parce qu'il est toujours plus long que l'ADN"]),
    single("Quelle est la dernière étape commune du catabolisme des acides nucléiques avant la dégradation spécifique des bases ?", "B", "Les nucléosidases/nucléoside phosphorylases clivent les nucléosides en bases azotées libres et pentoses, avant le catabolisme final spécifique des purines et pyrimidines.", ["L'hydrolyse directe en bases azotées par les DNases", "Le clivage des nucléosides en bases azotées et pentoses", "La phosphorylation des bases libres", "La formation directe d'acide urique"]),
    single("Quel est le produit final du catabolisme des bases pyrimidiques chez l'humain ?", "D", "Les pyrimidines sont dégradées en produits hydrosolubles facilement excrétés : CO₂, H₂O et NH₃.", ["L'acide urique", "L'allantoïne", "La xanthine", "CO₂, H₂O et NH₃"]),
    single("Quel est le produit final du catabolisme des purines chez l'humain ?", "A", "Chez l'humain et les grands primates, faute d'uricase fonctionnelle, l'acide urique est le produit final du catabolisme purique.", ["L'acide urique", "L'allantoïne", "L'hypoxanthine", "L'ammoniac"]),
    single("Quelle enzyme, absente chez l'humain sur le plan fonctionnel, dégrade l'acide urique en allantoïne chez la plupart des mammifères ?", "C", "L'uricase convertit l'acide urique en allantoïne chez la plupart des mammifères, mais pas chez l'humain.", ["La xanthine oxydase", "L'ALA synthase", "L'uricase", "La nucléotidase"]),
    single("Quelle est la valeur normale de l'acide urique sérique ?", "B", "La valeur normale de l'acide urique sérique se situe entre 1 et 7 mg/100 mL.", ["0,1-0,5 mg/100 mL", "1-7 mg/100 mL", "10-15 mg/100 mL", "20-30 mg/100 mL"]),
    single("Sous quelle forme circule majoritairement l'acide urique au pH physiologique (7,4) ?", "A", "À pH 7,4, environ 98 % de l'acide urique circule sous forme ionisée, l'anion urate, principalement comme urate monosodique.", ["Sous forme d'urate monosodique (ionisée)", "Sous forme d'acide urique non ionisé", "Sous forme de cristaux insolubles", "Sous forme liée de façon covalente à l'albumine"]),
    single("Quel est le seuil de solubilité de l'urate monosodique au-delà duquel le risque de cristallisation augmente ?", "C", "Le seuil de solubilité de l'urate monosodique est d'environ 6 mg/dL (360 µmol/L).", ["1 mg/dL", "3 mg/dL", "6 mg/dL", "12 mg/dL"]),
    single("Quelle est la cause la plus fréquente d'hyperuricémie ?", "B", "Environ 70-80 % des cas d'hyperuricémie sont dus à une excrétion rénale insuffisante de l'acide urique, plutôt qu'à une surproduction.", ["La surproduction de purines exogènes uniquement", "La sous-excrétion rénale", "Le syndrome de Lesch-Nyhan", "La consommation excessive de vitamine C"]),
    multi("Quelles articulations sont classiquement touchées par une crise de goutte ?", ["A", "B", "C"], "La crise de goutte touche classiquement en premier l'articulation métatarsophalangienne du gros orteil, mais peut aussi toucher chevilles, genoux, poignets et doigts.", ["Articulation métatarsophalangienne du gros orteil", "Cheville", "Genou", "Articulation temporo-mandibulaire"]),
    single("Comment confirme-t-on le diagnostic de goutte par ponction articulaire ?", "D", "L'analyse du liquide synovial révèle des cristaux d'urate monosodique en aiguilles, à biréfringence négative en lumière polarisée.", ["Présence de cristaux de pyrophosphate de calcium", "Présence de bactéries à Gram négatif", "Absence de cellules inflammatoires", "Cristaux d'urate monosodique en aiguilles, biréfringence négative"]),
    single("Sur quel principe repose le dosage colorimétrique de l'acide urique sérique décrit dans ce labo ?", "A", "L'acide urique réduit l'acide phosphotungstique en milieu alcalin, formant un complexe bleu dont l'intensité est proportionnelle à sa concentration.", ["La réduction de l'acide phosphotungstique en milieu alcalin", "La réaction diazoïque avec l'acide sulfanilique", "La formation de cyanméthémoglobine", "La précipitation par l'acide trichloracétique"]),
    single("À quelle longueur d'onde lit-on l'absorbance dans le dosage colorimétrique de l'acide urique ?", "B", "L'absorbance est lue à 710 nm, zéro réglé sur le blanc.", ["540 nm", "710 nm", "340 nm", "620 nm"]),
    single("Quel interférent du dosage de l'acide urique est éliminé par le pH alcalin du tampon (10-11) ?", "C", "L'acide ascorbique interfère avec la réaction, mais son effet est éliminé par le pH alcalin du tampon utilisé.", ["L'urée", "L'hémoglobine", "L'acide ascorbique", "Le glucose"]),
    single("Quelle affection génétique rare, associée à une surproduction majeure d'acide urique, est mentionnée dans le cours ?", "D", "Le syndrome de Lesch-Nyhan est un désordre génétique associé à une surproduction majeure d'acide urique.", ["Le syndrome de Gilbert", "La maladie de Wilson", "L'hémochromatose", "Le syndrome de Lesch-Nyhan"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 12 : Acide urique", duration_seconds: 1_350 },
};

const LAB_S2_13_COURSE = `# Labo 13 — Analyse métabolique intégrative et système automatique Piccolo Xpress

## 1. Le métabolisme comme réseau intégré
- Le métabolisme regroupe l'ensemble des réactions chimiques de l'organisme : processus **cataboliques** (dégradation de molécules complexes, libération d'énergie) et **anaboliques** (synthèse de nouvelles molécules à partir de précurseurs simples).
- Bien que souvent étudiées séparément (glucides, lipides, protéines/acides aminés, acides nucléiques), ces voies fonctionnent comme un **réseau intégré**, dont le flux s'adapte en permanence à la disponibilité des nutriments, aux signaux hormonaux et à la demande énergétique.
- Comprendre le métabolisme intégratif permet de prédire comment une perturbation d'une voie affecte l'ensemble du réseau — pertinent notamment dans le diabète, le syndrome métabolique, l'insuffisance hépatique et les erreurs innées du métabolisme.

## 2. Rôle central des molécules énergétiques
- Les voies cataboliques produisent de l'**ATP**, monnaie énergétique universelle, et des équivalents réducteurs (**NADH, NADPH, FADH₂**).
- **ATP** : énergie pour le travail mécanique, le transport actif et la biosynthèse ; généré par l'oxydation du glucose, des acides gras et des acides aminés via la glycolyse, le cycle de l'acide citrique (TCA) et la phosphorylation oxydative.
- **NADH et FADH₂** : produits par le catabolisme oxydatif, transfèrent leurs électrons à la chaîne respiratoire mitochondriale pour générer l'ATP.
- **NADPH** : utilisé dans les réactions de biosynthèse réductrice (synthèse des acides gras et du cholestérol) et pour maintenir le glutathion réduit, antioxydant clé.
- La **mitochondrie** est le carrefour métabolique : les carburants issus des glucides, lipides et protéines convergent sous forme d'**acétyl-CoA** et entrent dans le cycle du TCA.

## 3. Interrelations glucides-lipides-protéines
- **Glucides** : source d'énergie immédiate. À l'état nourri, le glucose alimentaire est oxydé ou stocké sous forme de glycogène (foie, muscle) ; l'excès est converti en acides gras (lipogenèse de novo), stockés en triacylglycérols dans le tissu adipeux. À jeun, la glycogénolyse hépatique libère du glucose ; une fois le glycogène épuisé, la néoglucogenèse prend le relais, à partir du lactate (glycolyse anaérobie), du glycérol (lipolyse) et des acides aminés glucoformateurs (protéolyse musculaire).
- **Lipides** : réserve énergétique la plus concentrée. À l'état nourri, les triacylglycérols alimentaires sont transportés en chylomicrons et stockés dans les adipocytes. À jeun ou lors d'un exercice prolongé, la lipolyse libère des acides gras libres, oxydés dans le foie et le muscle. Lors d'un jeûne prolongé, l'excès d'acétyl-CoA issu de la β-oxydation hépatique est converti en **corps cétoniques**, carburant alternatif préservant les protéines musculaires.
- **Protéines et acides aminés** : rôle structural/fonctionnel principal, mais aussi substrat métabolique quand les réserves glucidiques/lipidiques sont insuffisantes. À l'état nourri, les acides aminés servent à la synthèse protéique ou sont transaminés en intermédiaires du TCA. À jeun, la protéolyse musculaire libère des acides aminés (notamment **alanine** et **glutamine**), soutenant la néoglucogenèse et l'uréogenèse hépatiques.

## 4. Coordination hormonale
- **Insuline** : domine à l'état nourri — stimule la capture du glucose (GLUT4 musculaire/adipeux), favorise la synthèse de glycogène et de lipides, favorise l'anabolisme protéique.
- **Glucagon** : prédomine à jeun — active la glycogénolyse hépatique, la néoglucogenèse et la lipolyse adipeuse.
- **Catécholamines** (adrénaline, noradrénaline) : mobilisent les réserves énergétiques lors du stress aigu et de l'exercice.
- **Cortisol et hormone de croissance** : modulent la disponibilité des substrats sur des durées plus longues.

## 5. États métaboliques et adaptations
- **État nourri (postprandial précoce)** : abondance de nutriments, favorise le stockage.
- **Jeûne** : la glycogénolyse est la première source de glucose sanguin, puis la néoglucogenèse prend progressivement le relais.
- **Jeûne prolongé/famine** : la production de corps cétoniques augmente fortement, fournissant jusqu'à **60-70 % des besoins énergétiques du cerveau**.
- **Exercice** : phosphocréatine et glycolyse anaérobie dominent en début d'effort et à haute intensité ; l'oxydation des acides gras contribue davantage lors d'un effort modéré prolongé.

## 6. Corrélations cliniques
- **Diabète de type 1** : la carence en insuline entraîne une lipolyse, une cétogenèse et une protéolyse non freinées.
- **Diabète de type 2** : l'insulinorésistance perturbe l'équilibre glucido-lipidique, favorisant hyperglycémie et dyslipidémie.
- **Syndrome métabolique** : ensemble de conditions caractérisées par insulinorésistance, hypertriglycéridémie et obésité centrale.
- **Erreurs innées du métabolisme** (glycogénoses, déficits de la β-oxydation) : illustrent comment la perturbation d'une seule enzyme peut affecter plusieurs voies interconnectées.

## 7. Le système automatique Piccolo Xpress
- Analyseur portable de biochimie sanguine délocalisée (point-of-care), utilisant **100 µL** de sang total, sérum ou plasma, en chimie sèche.
- Rotors à usage unique pouvant contenir jusqu'à **14 tests biochimiques** ; résultats obtenus en **environ 12 minutes**.
- Système intégré **iQC** (Intelligent Quality Control) : contrôle l'analyseur, le rotor de réactifs et l'échantillon à chaque analyse pour garantir la fiabilité électronique et chimique des résultats.
- 13 panels disponibles ; trois exemples :

| Panel | Tests inclus |
| --- | --- |
| Panel métabolique complet (CMP) | ALAT, albumine, phosphatase alcaline, ASAT, calcium, chlorure, créatinine, glucose, potassium, sodium, bilirubine totale, CO₂ total, protéines totales, BUN |
| General Chemistry 13 | ALAT, albumine, phosphatase alcaline, amylase, ASAT, calcium, créatinine, gamma-GT, glucose, bilirubine totale, protéines totales, acide urique, BUN |
| Lipid Panel Plus | Cholestérol total, HDL, triglycérides, ALAT, ASAT, glucose (+ calculés : LDL, VLDL, ratio cholestérol total/HDL) |
- **Procédure** : connecter l'appareil, ouvrir le compartiment, injecter ~120 µL de sang dans le rotor (côté blanc vers le haut) avec la seringue dédiée, refermer, saisir l'identifiant patient, lancer l'analyse (~12 min), imprimer le résultat automatiquement.
- L'appareil détecte aussi si l'échantillon est **hémolysé, lipémique ou ictérique** (échelle 0 à 4+ pour chaque paramètre), ce qui peut invalider certains résultats.
- Quelques valeurs normales du panel :

| Paramètre | Plage normale |
| --- | --- |
| Na⁺ | 128–145 mmol/L |
| K⁺ | 3,6–5,1 mmol/L |
| Cl⁻ | 98–108 mmol/L |
| Glucose | 73–118 mg/dL |
| BUN | 7–22 mg/dL |
| Créatinine | 0,6–1,2 mg/dL |
| ALAT | 10–47 U/L |
| ASAT | 11–38 U/L |
| Bilirubine totale | 0,2–1,6 mg/dL |
| Protéines totales | 6,4–8,1 g/dL |

## Points à retenir
- L'acétyl-CoA est le carrefour métabolique commun aux glucides, lipides et protéines, alimentant le cycle du TCA et la production d'ATP.
- Insuline (état nourri, anabolisme) et glucagon (jeûne, catabolisme) coordonnent l'équilibre glucido-lipido-protéique ; catécholamines pour le stress aigu.
- En jeûne prolongé, les corps cétoniques deviennent une source majeure d'énergie cérébrale (jusqu'à 60-70 %).
- Le Piccolo Xpress est un analyseur de chimie sèche point-of-care (100 µL d'échantillon, ~12 min, jusqu'à 14 tests par rotor), avec détection intégrée des interférences (hémolyse, lipémie, ictère).`;

export const LAB_S2_13_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Analyse métabolique intégrative (système Piccolo Xpress)",
    source_label: "Notes de laboratoire — Biochimie II, Lab 13",
    content_fr: LAB_S2_13_COURSE,
  },
  qcm: [
    single("Quel intermédiaire métabolique constitue le carrefour commun entre le catabolisme des glucides, lipides et protéines ?", "C", "L'acétyl-CoA, produit par les trois grandes voies cataboliques, entre dans le cycle du TCA au niveau de la mitochondrie.", ["Le pyruvate", "Le glycérol", "L'acétyl-CoA", "L'oxaloacétate"]),
    multi("Quels équivalents réducteurs alimentent la chaîne respiratoire mitochondriale ?", ["A", "B"], "Le NADH et le FADH2 transfèrent leurs électrons à la chaîne respiratoire pour produire de l'ATP par phosphorylation oxydative.", ["NADH", "FADH2", "NADPH", "ATP"]),
    single("À quoi sert principalement le NADPH, à la différence du NADH ?", "A", "Le NADPH alimente les réactions de biosynthèse réductrice (acides gras, cholestérol) et maintient le glutathion réduit, alors que le NADH alimente la chaîne respiratoire.", ["Aux réactions de biosynthèse réductrice et au maintien du glutathion réduit", "À la phosphorylation oxydative uniquement", "Au transport de l'oxygène", "À la contraction musculaire"]),
    single("Quels acides aminés jouent un rôle clé dans le transport de l'azote depuis le muscle vers le foie lors du jeûne ?", "B", "L'alanine et la glutamine, libérées par la protéolyse musculaire, soutiennent la néoglucogenèse et l'uréogenèse hépatiques.", ["La glycine et la sérine", "L'alanine et la glutamine", "La lysine et l'arginine", "Le tryptophane et la méthionine"]),
    single("Quelle hormone domine à l'état nourri et favorise le stockage énergétique ?", "A", "L'insuline domine à l'état nourri : elle stimule la capture du glucose, la synthèse de glycogène et de lipides, et l'anabolisme protéique.", ["L'insuline", "Le glucagon", "Le cortisol", "L'adrénaline"]),
    single("Quelle hormone active la glycogénolyse, la néoglucogenèse et la lipolyse pendant le jeûne ?", "B", "Le glucagon prédomine à jeun et active ces trois processus cataboliques au niveau hépatique/adipeux.", ["L'insuline", "Le glucagon", "L'hormone de croissance seule", "La progestérone"]),
    single("Quelle proportion des besoins énergétiques du cerveau peuvent couvrir les corps cétoniques lors d'un jeûne prolongé ?", "C", "Lors d'un jeûne prolongé, les corps cétoniques peuvent fournir jusqu'à 60-70 % des besoins énergétiques cérébraux.", ["10-20 %", "30-40 %", "60-70 %", "95-100 %"]),
    single("Quel substrat énergétique domine en tout début d'exercice de haute intensité ?", "A", "La phosphocréatine et la glycolyse anaérobie dominent en début d'effort et à haute intensité ; l'oxydation des acides gras prend le relais lors d'un effort modéré prolongé.", ["La phosphocréatine et la glycolyse anaérobie", "L'oxydation exclusive des acides gras", "La cétogenèse hépatique", "La néoglucogenèse rénale"]),
    single("Quel mécanisme physiopathologique caractérise le diabète de type 1 non contrôlé ?", "D", "La carence en insuline lève le frein sur la lipolyse, la cétogenèse et la protéolyse, qui deviennent incontrôlées.", ["Une insulinorésistance périphérique isolée", "Une hyperinsulinémie chronique", "Une hypoglycémie chronique par excès d'insuline", "Une lipolyse, cétogenèse et protéolyse non freinées par carence en insuline"]),
    single("Quel volume d'échantillon sanguin nécessite une analyse par le système Piccolo Xpress ?", "B", "Le Piccolo Xpress nécessite environ 100 µL de sang total, sérum ou plasma.", ["10 µL", "100 µL", "1 mL", "5 mL"]),
    single("Combien de temps dure approximativement une analyse complète avec le Piccolo Xpress ?", "C", "Une analyse complète d'un rotor prend environ 12 minutes.", ["2 minutes", "30 secondes", "Environ 12 minutes", "Environ 1 heure"]),
    single("Quel est le rôle du système iQC intégré au Piccolo Xpress ?", "A", "L'iQC (Intelligent Quality Control) contrôle l'analyseur, le rotor de réactifs et l'échantillon à chaque analyse pour garantir la fiabilité des résultats.", ["Contrôler la qualité de l'analyseur, du rotor et de l'échantillon à chaque test", "Calibrer uniquement la température ambiante", "Remplacer automatiquement les rotors usagés", "Transmettre les résultats par Bluetooth au dossier patient"]),
    multi("Quels paramètres appartiennent au panel « Lipid Panel Plus » du Piccolo Xpress ?", ["A", "B", "C"], "Le Lipid Panel Plus mesure le cholestérol total, le HDL, les triglycérides ainsi que ALAT/ASAT et le glucose, et calcule le LDL, le VLDL et le ratio cholestérol total/HDL.", ["Cholestérol total", "HDL", "Triglycérides", "Créatinine"]),
    single("Que détecte le Piccolo Xpress en plus des paramètres biochimiques demandés, susceptible d'invalider un résultat ?", "D", "L'appareil signale si l'échantillon est hémolysé, lipémique ou ictérique (échelle 0 à 4+), ce qui peut fausser certains dosages.", ["La température corporelle du patient", "Le groupe sanguin ABO", "La présence de bactéries", "L'hémolyse, la lipémie ou l'ictère de l'échantillon"]),
    single("Quel type de chimie utilise le système Piccolo Xpress ?", "B", "Le Piccolo Xpress utilise la chimie sèche, via des rotors à réactifs à usage unique.", ["La chimie humide en cuve ouverte", "La chimie sèche sur rotor à usage unique", "La chromatographie liquide haute performance", "La spectrométrie de masse"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 13 : Analyse métabolique intégrative", duration_seconds: 1_200 },
};
