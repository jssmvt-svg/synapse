import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const LAB_S2_4_COURSE = `# Labo 4 — Métabolisme des lipides : lipoprotéines plasmatiques, cholestérol total et HDL

## 1. Le cholestérol
- Le cholestérol (C₂₇H₄₆O) est un lipide stéroïdien constituant majeur des membranes des cellules animales : noyau stérol rigide à 4 cycles hydrocarbonés fusionnés, chaîne hydrocarbonée latérale et un unique groupe hydroxyle libre.
- Besoin quotidien ≈ 1 g, couvert par la synthèse endogène et l'apport alimentaire (exogène). En présence de sels biliaires, seule la moitié du cholestérol alimentaire est absorbée dans l'intestin. Le cholestérol absorbé est en grande partie estérifié par l'**ACAT** (acyl-CoA-cholestérol acyltransférase, enzyme microsomale de la muqueuse intestinale), puis conditionné avec les triglycérides en **chylomicrons**.

## 2. Biosynthèse du cholestérol
- Synthèse endogène ≈ 0,5-1 g/jour, principalement hépatique (environ la moitié de la production totale), bien que toute cellule nucléée en soit capable.
- Voie : acétyl-CoA → **HMG-CoA** (3-hydroxy-3-méthylglutaryl-CoA) → mévalonate (réaction catalysée par l'**HMG-CoA réductase**, cible majeure de la régulation de toute la voie) → intermédiaires isopréniques → squalène → **lanostérol** (premier stérol) → cholestérol après plusieurs modifications.
- Le dernier précurseur, le **7-déhydrocholestérol**, est aussi le précurseur de la vitamine D3 (cholécalciférol).
- Régulation : un apport alimentaire élevé en cholestérol diminue la synthèse hépatique (via l'HMG-CoA réductase) ; un apport faible l'augmente.

## 3. Utilisation et élimination
- Le cholestérol est le précurseur des hormones stéroïdes, des acides biliaires primaires et de la vitamine D.
- Son noyau stérol ne peut pas être dégradé dans l'organisme humain : son élimination se fait exclusivement par voie biliaire, sous forme d'acides biliaires.

## 4. Les lipoprotéines plasmatiques
- Complexes transportant les lipides (insolubles dans l'eau) dans le sang : un cœur lipidique (triglycérides, cholestérol, phospholipides) entouré d'apoprotéines et de groupes polaires en surface, assurant la solubilité aqueuse.
- Par densité croissante : **chylomicrons < VLDL < IDL < LDL < HDL**. Plus le ratio protéines/lipides est élevé, plus la lipoprotéine est dense.

| Lipoprotéine | Apolipoprotéine | Origine | Rôle |
| --- | --- | --- | --- |
| Chylomicrons | Apo B-48 (+ apo C/E acquises) | Intestin, cœur riche en TG exogènes | Transport des lipides alimentaires ; remnants captés par le foie |
| VLDL | — | Foie, à partir des lipides endogènes | Transport des TG endogènes vers les tissus périphériques ; converties en IDL puis LDL |
| LDL | Apo B100 | Issues des VLDL/IDL | Principal transporteur du cholestérol (« mauvais cholestérol »), reconnu par les récepteurs LDL périphériques |
| HDL | — | Foie et intestin | Transport inverse du cholestérol vers le foie (« bon cholestérol ») |

## 5. Méthodes de séparation des lipoprotéines
- **Ultracentrifugation** : séparation selon la densité (champ ~100 000 g) ; dans un tampon de densité 1,063 g/cm³, 4 fractions : chylomicrons (d ≤ 0,96), VLDL (0,96-1,006), LDL (1,006-1,063), HDL (1,063-1,21 g/cm³).
- **Électrophorèse** (pH 8,6) : les chylomicrons ne migrent quasiment pas (pauvres en protéines/phospholipides) ; les β-lipoprotéines correspondent aux LDL, les pré-β-lipoprotéines aux VLDL, les α-lipoprotéines aux HDL. Sur un sérum normal à jeun (8-10h), les chylomicrons sont absents et les VLDL (pré-β) ne sont présentes qu'à l'état de traces.
- **Méthodes chimiques** : précipitation par cations divalents, polyanions ou tensioactifs. Les HDL sont isolées par précipitation au réactif phosphotungstique ; les HDL+LDL par précipitation au dodécylsulfate de sodium (SDS).

## 6. Indicateurs anthropométriques du risque cardiovasculaire
- **IMC (BMI)** = poids (kg) / taille² (m²). Interprétation : < 18,5 = maigreur ; 18,5-24,9 = poids normal ; ≥ 25 = surpoids ; ≥ 30 = obésité (seuil diagnostique OMS 2024).
- **Tour de taille / ratio taille-hanche** : indicateurs d'obésité abdominale (graisse viscérale). Tour de taille > 94 cm (homme) / > 80 cm (femme) = obésité abdominale ; > 102 cm / > 88 cm = risque cardiovasculaire significativement accru. Ratio taille/hanche normal < 0,95 (H) / < 0,80 (F) ; > 1,0 (H) / > 0,85 (F) = risque élevé.
- **Formule de Broca** (poids idéal) : poids normal = taille (cm) − 100 ; poids idéal = poids normal − 10 %.
- **Métabolisme basal (BMR)** : formules distinctes homme/femme intégrant poids, taille et âge, exprimées en kcal/24h.

## 7. Dosage du cholestérol total
- **Principe** : les esters de cholestérol sont libérés des lipoprotéines par des agents tensioactifs ; la **cholestérol estérase** les hydrolyse, la **cholestérol oxydase** oxyde le cholestérol libéré en produisant du peroxyde d'hydrogène, révélé par une réaction peroxydase colorée (phénol + 4-aminoantipyrine → colorant quinone-imine).
- Lecture à 546 nm après 5 min d'incubation à 37 °C ; calcul par rapport à un standard.
- **Valeurs normales** : 140-220 mg%. **Hypercholestérolémie** : hypercholestérolémie familiale, diabète, syndrome néphrotique, alcoolisme, grossesse. **Valeurs basses** : cirrhose hépatique, hyperthyroïdie.

## 8. Dosage du cholestérol HDL
- **Méthode enzymatique directe** : élimination sélective des chylomicrons, LDL et VLDL, puis réaction identique au dosage du cholestérol total (lecture à 600 nm).
- **Valeurs normales** : Hommes 35-55 mg/100 mL, Femmes 45-65 mg/100 mL.
- **Risque athérogène** : faible si HDL > 55 (H) / > 65 (F) mg/100 mL ; élevé si HDL < 35 (H) / < 45 (F) mg/100 mL.
- **Ratio cholestérol total / HDL** : normal 3,5-5 ; < 3,5 = risque athérogène faible ; > 5 = risque élevé.

## 9. Calcul du cholestérol LDL — équation de Friedewald
- LDL = Cholestérol total − (HDL + VLDL), où VLDL ≈ Triglycérides / 5.

| LDL (mg/100 mL) | Interprétation |
| --- | --- |
| < 150 | Aucun traitement nécessaire |
| 150–190 | Risque modéré d'athérosclérose |
| > 190 | Risque élevé, traitement nécessaire |

## 10. Dyslipidémies et athérosclérose
- **Dyslipidémies primaires** : d'origine génétique/familiale (défauts du métabolisme des lipoprotéines).
- **Dyslipidémies secondaires** : acquises (maladies sous-jacentes, médicaments, états physiologiques) — hypercholestérolémie : régime, hypothyroïdie, maladies cholestatiques, syndrome néphrotique, grossesse, corticothérapie, diurétiques thiazidiques ; hypertriglycéridémie : obésité, hépatite aiguë sévère, diabète/pancréatite, alcoolisme, insulinorésistance, grossesse, œstrogènes.
- Classification des hyperlipoprotéinémies (types I à V) selon la lipoprotéine en excès (chylomicrons, LDL, VLDL, IDL) et le profil cholestérol/triglycérides.
- **Athérosclérose** : le LDL, notamment oxydé, s'associe aux protéoglycanes de la paroi artérielle et s'y accumule ; le LDL oxydé active les cellules endothéliales, attire les monocytes qui deviennent des macrophages, engloutissent le LDL oxydé et se transforment en cellules spumeuses, formant une plaque qui peut se rigidifier puis se rompre, déclenchant un thrombus (infarctus du myocarde, AVC).
- **Indices athérogènes** : indice cholestérol total/HDL prédictif au-delà de 5 ; indice raffiné LDL/HDL prédictif au-delà de 3,5 (hommes) ou 2,5 (femmes). Une réduction de 10 % du cholestérol total réduit le risque de ~50 % ; règle des « 2:1:1 » pour le LDL (baisse de 2 % du LDL → 1 % de réduction du risque coronarien et 1 % de régression des lésions).
- **Score EURO** : outil recommandé par la Société Européenne d'Athérosclérose intégrant sexe, âge, tabagisme, cholestérol total, pression artérielle systolique, diabète, HDL, antécédents familiaux, obésité et hypertriglycéridémie.
- **Obésité** : dyslipidémie secondaire résultant d'un déséquilibre chronique apport/dépense énergétique ; diagnostic sur l'IMC (≥ 30 kg/m²), complété par le tour de taille et le ratio taille-hanche pour évaluer le risque lié à la graisse viscérale.`;

export const LAB_S2_4_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Lipoprotéines plasmatiques, cholestérol total et HDL",
    source_label: "Notes de laboratoire — Biochimie II, Lab 4",
    content_fr: LAB_S2_4_COURSE,
  },
  qcm: [
    single("Quelle enzyme catalyse la réduction de l'HMG-CoA en mévalonate, étape régulatrice majeure de la synthèse du cholestérol ?", "B", "L'HMG-CoA réductase est la cible principale de la régulation de la voie de biosynthèse du cholestérol.", ["L'ACAT", "L'HMG-CoA réductase", "La cholestérol oxydase", "La squalène synthase"]),
    single("Quel est le précurseur commun de la vitamine D3 et du cholestérol en fin de voie de synthèse ?", "C", "Le 7-déhydrocholestérol est à la fois le dernier précurseur du cholestérol et le précurseur de la vitamine D3 (cholécalciférol).", ["Le lanostérol", "Le squalène", "Le 7-déhydrocholestérol", "Le mévalonate"]),
    single("Comment l'organisme élimine-t-il le cholestérol, dont le noyau stérol ne peut pas être dégradé ?", "A", "Le cholestérol est éliminé exclusivement par voie biliaire, sous forme d'acides biliaires.", ["Par voie biliaire, sous forme d'acides biliaires", "Par oxydation complète en CO2 et H2O", "Par excrétion rénale directe", "Par dégradation dans le cycle de Krebs"]),
    single("Quelle apolipoprotéine caractérise spécifiquement les chylomicrons ?", "B", "Les chylomicrons portent l'apolipoprotéine B-48, distincte de l'apo B100 des LDL.", ["Apo B100", "Apo B-48", "Apo A1", "Apo E seule"]),
    single("Quelles lipoprotéines transportent principalement les triglycérides d'origine alimentaire (exogènes) ?", "A", "Les chylomicrons transportent les lipides exogènes depuis l'intestin vers les tissus périphériques.", ["Les chylomicrons", "Les VLDL", "Les LDL", "Les HDL"]),
    single("Quelle protéine régule la synthèse des récepteurs LDL en fonction du cholestérol intracellulaire ?", "C", "Les SREBP (sterol regulatory element-binding proteins) régulent la synthèse des récepteurs LDL et la production de cholestérol intracellulaire.", ["L'ACAT", "L'HMG-CoA réductase", "Les SREBP", "L'apo B-48"]),
    single("Quel est le rôle physiologique principal attribué aux HDL ?", "B", "Les HDL assurent le transport inverse du cholestérol, des tissus périphériques vers le foie pour excrétion.", ["Transporter les triglycérides alimentaires", "Assurer le transport inverse du cholestérol vers le foie", "Transporter le cholestérol du foie vers les tissus", "Stocker les triglycérides dans le tissu adipeux"]),
    multi("Dans l'ordre de densité croissante, quel est le bon classement des lipoprotéines plasmatiques ?", ["A"], "L'ordre de densité croissante est : chylomicrons < VLDL < IDL < LDL < HDL.", ["Chylomicrons < VLDL < IDL < LDL < HDL", "HDL < LDL < IDL < VLDL < Chylomicrons", "Chylomicrons < LDL < VLDL < IDL < HDL", "VLDL < Chylomicrons < LDL < IDL < HDL"]),
    single("En électrophorèse à pH 8,6, à quelle fraction correspondent les β-lipoprotéines ?", "B", "Les β-lipoprotéines correspondent aux LDL ; les pré-β aux VLDL, les α aux HDL.", ["Aux VLDL", "Aux LDL", "Aux HDL", "Aux chylomicrons"]),
    single("Pourquoi les chylomicrons ne migrent-ils pratiquement pas en électrophorèse ?", "A", "Leur faible contenu en protéines et phospholipides limite leur charge électrique et donc leur migration.", ["Leur faible contenu en protéines et phospholipides", "Leur très petite taille", "Leur charge négative très élevée", "Leur absence totale de lipides"]),
    single("Quel réactif précipite spécifiquement la fraction HDL lors d'une séparation chimique ?", "A", "Le réactif phosphotungstique précipite les HDL ; le SDS précipite HDL+LDL ensemble.", ["Le réactif phosphotungstique", "Le dodécylsulfate de sodium (SDS)", "Le chlorure ferrique", "L'acide nitrique"]),
    single("Selon l'équation de Friedewald, comment estime-t-on le VLDL-cholestérol ?", "C", "Le VLDL-cholestérol est approximé par Triglycérides / 5.", ["Triglycérides / 2", "Triglycérides × 5", "Triglycérides / 5", "Cholestérol total − HDL"]),
    single("Quel taux de LDL correspond à un risque élevé d'athérosclérose nécessitant un traitement ?", "C", "Un LDL > 190 mg/100 mL correspond à un risque élevé nécessitant un traitement.", ["< 150 mg/100 mL", "150-190 mg/100 mL", "> 190 mg/100 mL", "< 100 mg/100 mL"]),
    single("À partir de quelle valeur le ratio cholestérol total/HDL est-il considéré comme prédictif d'un risque cardiovasculaire élevé ?", "B", "Un ratio cholestérol total/HDL supérieur à 5 est prédictif d'un risque cardiovasculaire élevé.", ["> 3", "> 5", "> 8", "> 10"]),
    single("Quelle est la première étape de la formation de la plaque d'athérosclérose selon le mécanisme décrit ?", "A", "L'association du LDL (notamment oxydé) aux protéoglycanes de la paroi artérielle initie sa rétention dans l'intima.", ["L'association du LDL aux protéoglycanes de la paroi artérielle", "La rupture immédiate de la plaque", "La formation directe de cellules spumeuses sans étape préalable", "L'activation des plaquettes circulantes"]),
    single("Comment se forment les cellules spumeuses dans la plaque d'athérosclérose ?", "B", "Les macrophages, issus des monocytes recrutés par l'endothélium activé, engloutissent le LDL oxydé et deviennent des cellules spumeuses.", ["Par transformation directe des cellules endothéliales", "Par des macrophages qui engloutissent le LDL oxydé", "Par précipitation du cholestérol libre seul", "Par prolifération des lymphocytes T"]),
    single("Selon l'IMC, à partir de quelle valeur parle-t-on d'obésité (critère OMS 2024) ?", "B", "Un IMC ≥ 30 kg/m² correspond au diagnostic clinique d'obésité.", ["≥ 25 kg/m²", "≥ 30 kg/m²", "≥ 35 kg/m²", "≥ 40 kg/m²"]),
    single("Quel tour de taille est associé à une augmentation significative du risque cardiovasculaire chez l'homme ?", "C", "Un tour de taille > 102 cm chez l'homme est associé à une augmentation significative du risque cardiovasculaire.", ["> 80 cm", "> 94 cm", "> 102 cm", "> 120 cm"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 4 : Lipoprotéines et cholestérol", duration_seconds: 1_350 },
};

const LAB_S2_5_COURSE = `# Labo 5 — Métabolisme minéral : pH, capacité tampon sérique, ions biologiques

## 1. La notion de pH
- pH = − log [H⁺]. Solution neutre : [H⁺] = 10⁻⁷, pH = 7. Solution acide : [H⁺] > 10⁻⁷, pH < 7. Solution alcaline : [H⁺] < 10⁻⁷, pH > 7.
- Échelle de 0 à 14 : zone acide (0 ≤ pH < 7), zone neutre (pH = 7), zone alcaline (7 < pH ≤ 14).
- **pH sanguin normal : 7,35-7,45.** pH < 7,35 = acidose (ex. diabète non contrôlé) ; pH > 7,45 = alcalose (ex. vomissements prolongés, hyperventilation pulmonaire).
- Mesure : indicateurs colorés/papier pH (qualitatif), pH-mètre électrométrique (quantitatif).

## 2. Solutions tampons
- Mélange (acide faible + sel de cet acide avec une base forte, ou base faible + sel avec un acide fort) qui limite la variation de pH lors de l'ajout d'acide ou de base.
- **Capacité tampon** = nombre d'équivalents H⁺ (ou OH⁻) nécessaires pour faire varier le pH d'une unité, pour un volume de tampon donné.
- Les systèmes tampons biologiques couvrent typiquement la zone pH 6-8 ; l'organisme maintient le pH proche de 7,4 ± 0,05 grâce à plusieurs systèmes combinés.

## 3. Les quatre systèmes tampons biologiques principaux
- **Tampon hémoglobine** (érythrocytes) : les groupes imidazole des résidus histidine de la globine fixent directement les H⁺ (pH intracellulaire 7,2). Via l'**effet Bohr**, les H⁺ produits par CO₂ + H₂O ⇌ HCO₃⁻ + H⁺ sont captés par l'hémoglobine (HHb⁺) et transportés vers les poumons, où la réaction inverse libère le CO₂ expiré.
- **Tampon phosphate** (HPO₄²⁻/H₂PO₄⁻) : ratio nécessaire 4:1 pour un pH de 7,4 (pKa = 6,8). Surtout actif en intracellulaire (le phosphate extracellulaire est peu abondant) ; au niveau rénal, il neutralise les H⁺ sécrétés dans le tubule, limitant la chute du pH urinaire.
- **Tampon protéique** : chaînes latérales acides et basiques des protéines, notamment les groupes amino/carboxyl-terminaux et les résidus histidine (pKa ≈ 7,3) de l'albumine plasmatique.
- **Tampon bicarbonate/acide carbonique** (le plus important) : ratio normal [HCO₃⁻]/[H₂CO₃] = 20/1 (ex. 24 mEq bicarbonate pour 1,2 mEq acide carbonique). En pratique, on utilise le ratio [HCO₃⁻]/pCO₂. Une baisse de ce ratio → acidose ; une hausse → alcalose.

## 4. Les 4 désordres acide-base
- **Type primaire** déterminé par le facteur initial perturbant l'équilibre : trouble **métabolique** = variation initiale du bicarbonate ; trouble **respiratoire** = variation initiale de la pCO₂.
- **Compensé** (pH inchangé) vs **non compensé** (pH < 7,35 = acidose non compensée ; pH > 7,45 = alcalose non compensée). pH < 6,9 ou > 7,9 = incompatible avec la vie.
| Désordre | Cause primaire | Variation primaire | Exemples | Compensation |
| --- | --- | --- | --- | --- |
| Acidose respiratoire | Hypoventilation/échange gazeux altéré | ↑ pCO₂ → ↓ pH | BPCO | Rénale : ↑ réabsorption du bicarbonate |
| Alcalose respiratoire | Hyperventilation | ↓ pCO₂ → ↑ pH | Anxiété, douleur, altitude, fièvre | Rénale : ↑ excrétion du bicarbonate |
| Acidose métabolique | ↓ bicarbonate primaire | ↓ pH | Acidocétose diabétique, IRC, diarrhée sévère | Respiratoire : hyperventilation (↓ pCO₂) |
| Alcalose métabolique | ↑ bicarbonate primaire | ↑ pH | Vomissements prolongés, excès de bicarbonate | Respiratoire : hypoventilation (↑ pCO₂) |

## 5. Réserve alcaline et méthodes de mesure
- **Réserve alcaline** : quantité de bases disponibles dans le sang comme tampon, estimée par la quantité de CO₂ (mL) contenue dans 100 mL de plasma à 0 °C et 760 mmHg (méthode de **Van Slyke**) — méthode informative, à interpréter avec les autres données cliniques.
- **Méthode Astrup** (micro-méthode, ex. système epoc) : avancée majeure, tient compte de l'effet tampon de l'hémoglobine et de l'anhydrase carbonique érythrocytaire ; basée sur la relation inverse entre pCO₂ et pH. Ne nécessite que quelques gouttes de sang pour mesurer pH, pCO₂, excès de base (BE) et bicarbonate réel.
- **Valeurs de référence Astrup** : pH 7,35-7,45 ; pCO₂ 35-53 mmHg ; pO₂ 75-105 mmHg ; HCO₃⁻ 21-26 mmol/L ; BE −2 à +3 mmol/L ; SO₂ 95-99 %.

## 6. Électrolytes biologiques
- Unités : milliosmoles/L (mOsm/L = mg/L ÷ masse atomique) ou milliéquivalents/L (mEq/L = mg/L ÷ masse atomique × valence).
- **Diagramme de Gamble** : le nombre total de cations égale le nombre total d'anions. En extracellulaire, cation principal Na⁺, anion principal Cl⁻ ; en intracellulaire, cation principal K⁺, anion principal HPO₄²⁻. Osmolarité plasmatique normale ≈ 300 mOsm/kg ; urinaire ≈ 1200 mOsm/kg.

### Cations

| Ion | Plage normale | Rôle principal | Hypo- (causes) | Hyper- (causes) |
| --- | --- | --- | --- | --- |
| Sodium (Na⁺) | 135–145 mEq/L | Cation extracellulaire principal, pression osmotique, équilibre acide-base, influx nerveux, régulé par l'aldostérone | Diarrhée sévère, sudation massive, brûlures, néphrite chronique, diurétiques, insuffisance corticosurrénalienne | Sténose du pylore, hyperaldostéronisme, corticothérapie, fièvre prolongée |
| Potassium (K⁺) | 3,8–5,4 mEq/L | Cation intracellulaire principal, influx nerveux, excitabilité musculaire, pompe Na⁺/K⁺-ATPase | Occlusion intestinale haute, sténose du pylore, alcalose, coma diabétique/hypoglycémique, Cushing, néphropathies tubulaires | Hémolyse, choc toxi-septique, brûlures étendues, insuffisance rénale |
| Calcium (Ca²⁺) | 4,5–5,5 mEq/L (9–11 mg/dL) | Coagulation, perméabilité membranaire, contraction musculaire, excitabilité neuromusculaire (99 % osseux/dentaire) | Hyperparathyroïdie, hyperthyroïdie, insuffisance rénale chronique, excès de calcitonine | Destruction osseuse massive, hyperthyroïdie, hypervitaminose D |
| Magnésium (Mg²⁺) | 1,9–2,5 mg/dL | Surtout intracellulaire, activateur enzymatique, synthèse des acides nucléiques, constituant osseux | Vomissements, diarrhée, cirrhose, coma diabétique, scorbut | Insuffisance rénale, hyperthyroïdie, maladie d'Addison |
| Fer | 50–180 µg/dL | Synthèse Hb/myoglobine/catalase/peroxydase, stocké en ferritine, transporté par transferrine | Anémie ferriprive, anémie post-hémorragique, infections aiguës | Hémochromatose idiopathique, anémies mégaloblastique/aplastique/hémolytique |

### Anions

| Ion | Plage normale | Rôle principal | Hypo- (causes) | Hyper- (causes) |
| --- | --- | --- | --- | --- |
| Phosphore | 3–4,5 mg/dL | Anion intracellulaire principal, formation osseuse, stockage/transfert d'énergie | Scorbut, maladie cœliaque, hyperparathyroïdie | Hypoparathyroïdie, insuffisance rénale, hypervitaminose D |
| Chlore | 98–110 mEq/L | Anion prédominant en extracellulaire, composant du suc gastrique | Alcalose métabolique | Acidose métabolique |`;

export const LAB_S2_5_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — pH, capacité tampon sérique et ions biologiques",
    source_label: "Notes de laboratoire — Biochimie II, Lab 5",
    content_fr: LAB_S2_5_COURSE,
  },
  qcm: [
    single("Quelle est la plage normale du pH sanguin ?", "B", "Le pH sanguin normal se situe entre 7,35 et 7,45.", ["7,00-7,20", "7,35-7,45", "7,50-7,70", "6,80-7,00"]),
    single("Que traduit une baisse du pH sanguin en dessous de 7,35 ?", "A", "Une valeur inférieure à 7,35 traduit une acidose.", ["Une acidose", "Une alcalose", "Une hypernatrémie", "Une hypercalcémie"]),
    single("Quelle est la définition de la capacité tampon d'une solution ?", "C", "La capacité tampon est le nombre d'équivalents H⁺ (ou OH⁻) nécessaires pour modifier le pH d'un volume donné de tampon d'une unité.", ["La quantité totale d'acide dans la solution", "Le pH initial de la solution avant tout ajout", "Le nombre d'équivalents H⁺/OH⁻ nécessaires pour changer le pH d'une unité", "La concentration en bicarbonate uniquement"]),
    single("Par quel mécanisme direct l'hémoglobine tamponne-t-elle les ions H⁺ dans l'érythrocyte ?", "B", "Les groupes imidazole des résidus histidine de la globine fixent directement les ions H⁺.", ["Par les groupes carboxyle du hème", "Par les groupes imidazole des résidus histidine", "Par liaison directe au fer de l'hème", "Par les groupes hydroxyle du glucose fixé"]),
    single("Quel est le ratio requis entre HPO₄²⁻ et H₂PO₄⁻ pour maintenir un pH sanguin de 7,4 ?", "C", "Le ratio HPO₄²⁻/H₂PO₄⁻ doit être de 4:1 (pKa = 6,8) pour maintenir un pH de 7,4.", ["1:1", "1:4", "4:1", "20:1"]),
    single("Quel est le ratio normal [HCO₃⁻]/[H₂CO₃] du tampon bicarbonate plasmatique ?", "D", "Le ratio normal bicarbonate/acide carbonique est de 20/1.", ["1/1", "4/1", "10/1", "20/1"]),
    single("Une BPCO provoquant une hypoventilation entraîne typiquement quel trouble acide-base primaire ?", "A", "L'hypoventilation associée à la BPCO augmente la pCO₂, provoquant une acidose respiratoire.", ["Une acidose respiratoire", "Une alcalose respiratoire", "Une acidose métabolique", "Une alcalose métabolique"]),
    single("Quel mécanisme compense une acidose métabolique (ex. acidocétose diabétique) ?", "B", "Le système respiratoire compense par hyperventilation, abaissant la pCO₂ pour remonter le pH.", ["Une rétention rénale accrue de bicarbonate", "Une hyperventilation abaissant la pCO₂", "Une hypoventilation augmentant la pCO₂", "Une excrétion rénale accrue de bicarbonate"]),
    single("Des vomissements prolongés provoquent typiquement quel trouble acide-base ?", "C", "La perte d'acide gastrique lors de vomissements prolongés entraîne une alcalose métabolique.", ["Une acidose métabolique", "Une acidose respiratoire", "Une alcalose métabolique", "Une alcalose respiratoire"]),
    single("Quel avantage la méthode Astrup présente-t-elle par rapport à la simple mesure de la réserve alcaline (Van Slyke) ?", "A", "La méthode Astrup prend en compte l'effet tampon de l'hémoglobine et de l'anhydrase carbonique érythrocytaire, avec seulement quelques gouttes de sang.", ["Elle intègre l'effet tampon de l'hémoglobine et l'anhydrase carbonique", "Elle ne nécessite aucun prélèvement sanguin", "Elle mesure uniquement le glucose plasmatique", "Elle remplace entièrement le ionogramme"]),
    single("Dans le diagramme de Gamble, quel est le principal cation intracellulaire ?", "B", "Le potassium (K⁺) est le principal cation du compartiment intracellulaire.", ["Le sodium", "Le potassium", "Le calcium", "Le magnésium"]),
    single("Quel est le principal anion du compartiment extracellulaire ?", "C", "Le chlore (Cl⁻) est l'anion prédominant en extracellulaire.", ["Le phosphate", "Le bicarbonate", "Le chlore", "Le sulfate"]),
    single("Quelle hormone régule principalement l'élimination du sodium ?", "A", "L'aldostérone, hormone minéralocorticoïde, régule la réabsorption/élimination du sodium.", ["L'aldostérone", "L'insuline", "La calcitonine", "La parathormone"]),
    single("Sous quelle forme la majorité du calcium corporel est-elle stockée ?", "D", "Environ 99 % du calcium de l'organisme est stocké dans les os et les dents, sous forme d'apatites carboniques et hydroxylées.", ["Sous forme de calcium libre plasmatique", "Sous forme de calcium lié à l'albumine", "Sous forme de phosphate de calcium intracellulaire", "Sous forme d'apatites osseuses et dentaires"]),
    single("Comment varie la calcémie ionisée lors d'une acidose ?", "A", "En acidose, les protéines fixent les H⁺ et libèrent davantage de calcium ionisé, augmentant sa concentration plasmatique.", ["Elle augmente", "Elle diminue", "Elle reste inchangée", "Elle devient nulle"]),
    multi("Quelles pathologies sont associées à une hyperkaliémie ?", ["A", "B"], "L'hyperkaliémie survient lors de destructions cellulaires massives (hémolyse, brûlures étendues) et lors d'insuffisance rénale.", ["Hémolyse massive", "Insuffisance rénale", "Alcalose", "Coma diabétique"]),
    single("Quel est le rôle principal de la transferrine ?", "B", "La transferrine, une bêta-globuline, assure le transport du fer dans le sang.", ["Stocker le fer intracellulaire", "Transporter le fer dans le sang", "Catalyser la synthèse de l'hème", "Activer la coagulation"]),
    single("Quelle est la plage de référence de la pCO₂ selon la méthode Astrup ?", "C", "La pCO₂ de référence se situe entre 35 et 53 mmHg selon les valeurs Astrup présentées.", ["10-25 mmHg", "25-35 mmHg", "35-53 mmHg", "60-80 mmHg"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 5 : pH, tampons et ions biologiques", duration_seconds: 1_350 },
};

const LAB_S2_67_COURSE = `# Labo 6 & 7 — Métabolisme des protéines et des acides aminés : identification des troubles héréditaires

## 1. Généralités sur le catabolisme des acides aminés
- La source principale d'acides aminés pour les protéines endogènes est constituée par les **protéines alimentaires**, hydrolysées enzymatiquement dans le tube digestif ; les acides aminés résultants passent dans le sang puis sont captés par le foie et d'autres organes, principalement pour la synthèse de protéines endogènes.
- Le catabolisme des acides aminés a lieu surtout au niveau hépatique et rénal, par **transamination couplée à une désamination**, produisant de l'ammoniac et des **α-cétoacides**. L'ammoniac est converti en urée (éliminée par l'urine) ; les α-cétoacides sont dégradés dans le cycle de Krebs ou par des voies spécifiques.
- La concentration plasmatique des acides aminés varie d'environ 30 % au cours de la journée, étant plus élevée après les repas.
- Les acides aminés sont filtrés au glomérule puis **réabsorbés activement** dans les tubules rénaux. Une élimination urinaire accrue d'acides aminés est appelée **aminoacidurie**.

## 2. Aminoacidurie primaire
- D'origine héréditaire : mutation de l'ADN codant des enzymes du métabolisme des acides aminés ou de leur système de réabsorption rénale. Les enzymes défectueuses bloquent la voie métabolique normale du substrat, entraînant son accumulation (ou celle d'intermédiaires), parfois toxique, ou sa redirection vers des voies pathologiques.
- Diagnostic à trois niveaux : (a) mise en évidence de la mutation de l'ADN, (b) mise en évidence de l'enzyme défectueuse, (c) mise en évidence des perturbations métaboliques produites.

### Tableau des principales erreurs innées du métabolisme des acides aminés
| Aminoacidurie | Incidence | Enzyme déficiente | Excès sanguin | Excès urinaire | Symptômes cliniques | Traitement |
| --- | --- | --- | --- | --- | --- | --- |
| Hyperphénylalaninémie / Phénylcétonurie | 1:10 000 | Phénylalanine hydroxylase | Phe | Phe, ac. phénylpyruvique, phénylacétique | Retard mental, eczéma | Régime restreint en Phe |
| Tyrosinose | 1:100 000 | Phénylacétoacétate hydroxylase | Tyr, Met | Tyr et métabolites | Cirrhose hépatique, troubles rénaux | Régime restreint en Phe, Tyr, Met |
| Alcaptonurie | 1:250 000 | Homogentisate oxydase | Acide homogentisique | Acide homogentisique | Arthrose dégénérative, pigmentation du cartilage | — |
| Homocystinurie | 1:200 000 | Cystathionine β-synthase | Homocystéine, Met | Homocystine, Met | Troubles oculaires, vasculaires, osseux | Pyridoxine, régime pauvre en Met, supplément en Cys |
| Leucinose (maladie des urines à odeur de sirop d'érable) | 1:250 000 | Décarboxylase des cétoacides ramifiés (BCKD) | Leu, Ile, Val | Leu, Ile, Val et cétoacides correspondants | Acidose, vomissements, détresse respiratoire, évolution létale | Régime restreint en Leu, Ile, Val |

## 3. Aminoacidurie secondaire
- Affecte simultanément plusieurs acides aminés ; causée par une atteinte des organes actifs dans leur métabolisme (foie, rein) ou par une famine avancée.
- Contextes d'identification : diagnostic de l'enfant malade, tests systématiques néonatals, diagnostic prénatal. Suspectée devant vomissements fréquents, troubles neurologiques/hépatiques aggravés par l'augmentation de l'apport protéique.
- Méthodes qualitatives/semi-quantitatives (mise en évidence d'acides aminés ou métabolites spécifiques) vs quantitatives (spectrométrie de masse, spectrophotométrie IR, HPLC) en centres spécialisés.

## 4. Métabolisme de la phénylalanine et de la tyrosine
- La **phénylalanine** est un acide aminé essentiel mixte (glucoformateur et cétogène). La **tyrosine** est non essentielle mais dépend entièrement de la phénylalanine pour sa formation ; en cas de déficit en Phe, la Tyr devient elle-même essentielle.
- Formation de la Tyr : hydroxylation de la Phe par la **phénylalanine hydroxylase**, nécessitant tétrahydrobioptérine (BH₄), O₂ et NADPH. Un défaut de cette étape est la cause la plus fréquente de trouble héréditaire du métabolisme des acides aminés : la **phénylcétonurie (PCU)**.
- Catabolisme de la Tyr : transamination → p-hydroxyphénylpyruvate → homogentisate → maleylacétoacétate → fumarylacétoacétate → **fumarate** (glucoformateur) + **acétoacétate** (cétogène).
- Rôles biosynthétiques de la Tyr : précurseur des **catécholamines** (Tyr → L-DOPA → dopamine → noradrénaline → adrénaline), de la **mélanine** (via la tyrosinase, pigmentation peau/cheveux/yeux), et des **hormones thyroïdiennes** (T3/T4, par iodation des résidus tyrosine de la thyroglobuline).
- **Phénylcétonurie** : déficit en phénylalanine hydroxylase, accumulation de Phe et de métabolites (acide phénylpyruvique), perturbation de la synthèse de myéline et de sérotonine → retard mental sévère ; hypopigmentation par manque de tyrosine disponible pour la mélanine ; test au chlorure ferrique donnant une coloration verdâtre de l'urine. Diagnostic précoce et régime restrictif en Phe (avec supplémentation en Tyr) préviennent les lésions neurologiques.
- **Alcaptonurie** : déficit en homogentisate oxydase, accumulation d'acide homogentisique excrété dans l'urine qui noircit à l'air (oxydation) ; à long terme, ochronose (dépôt de pigment dans cartilages/articulations) et arthrose.
- **Albinisme** : déficit en tyrosinase, absence de synthèse de mélanine, hypopigmentation, photophobie, risque accru de cancer cutané.
- **Tyrosinémies** : déficits enzymatiques variés de la voie catabolique de la Tyr, manifestations neurologiques ou accumulation de métabolites toxiques (hépato-, néphro- et cancérogènes).

## 5. Métabolisme des acides aminés ramifiés (BCAA) : valine, leucine, isoleucine
- Trois acides aminés essentiels, obtenus exclusivement par l'alimentation. Devenir métabolique : **valine glucoformatrice**, **leucine cétogène**, **isoleucine mixte**.
- Contrairement à la plupart des acides aminés, leur catabolisme n'est pas principalement hépatique mais **extrahépatique** (muscle squelettique, rein, cerveau), l'aminotransférase des BCAA ayant une faible activité hépatique — d'où leur importance énergétique musculaire lors du jeûne/de l'exercice.
- **Voie initiale commune** : (1) transamination par la BCAT (branched-chain aminotransferase, cofacteur vitamine B₆/pyridoxal phosphate) → cétoacides ramifiés (BCKA) ; (2) décarboxylation oxydative par le complexe **BCKD** (branched-chain α-keto acid dehydrogenase) → dérivés acyl-CoA. Un déficit génétique du BCKD cause la **leucinose**.
- **Voies divergentes** : Valine → succinyl-CoA (glucoformatrice) ; Leucine → acétyl-CoA + acétoacétate via HMG-CoA (exclusivement cétogène) ; Isoleucine → acétyl-CoA + succinyl-CoA (mixte).
- **Leucinose (maple syrup urine disease, MSUD)** : déficit du complexe BCKD, accumulation des BCAA et de leurs cétoacides ; nourrissons normaux à la naissance puis, avec l'augmentation de l'apport protéique, acidocétose aiguë (vomissements, léthargie, troubles neurologiques, décès en l'absence de traitement) ; odeur caractéristique de sirop d'érable dans l'urine. Prise en charge précoce et régime restrictif en BCAA critiques pour la survie et le développement.
- **Acidémie méthylmalonique** : lien clinique via l'étape propionyl-CoA → succinyl-CoA, dépendante de la vitamine B₁₂ ; un déficit en B₁₂ altère aussi la dégradation de la valine et de l'isoleucine, entraînant accumulation d'acide méthylmalonique, acidose métabolique et atteinte neurologique.

## 6. Métabolisme du tryptophane
- Acide aminé essentiel mixte (produit glucoformateur via alanine → pyruvate, et cétogène via acétyl-CoA/acétoacétate). Précurseur de la sérotonine, de la mélatonine, de la tryptamine et du **NAD⁺** — d'où son rôle de provitamine PP (niacine) ; chez l'adulte, la conversion Trp → NAD⁺ suffit généralement aux besoins.
- **Voie de la kynurénine** (catabolisme principal) : Trp → N-formylkynurénine (tryptophane dioxygénase) → kynurénine → alanine + acétoacétyl-CoA.
- **Voie sérotonine/mélatonine** : Trp → 5-hydroxytryptophane (tryptophane hydroxylase, BH₄-dépendante) → **sérotonine** (décarboxylation PLP-dépendante), neurotransmetteur régulant humeur, appétit, motilité intestinale ; dans la glande pinéale, la sérotonine devient **mélatonine** (acétylation + méthylation), régulant le rythme circadien. Les repas riches en glucides favorisent la captation cérébrale du Trp (clairance des AA compétiteurs via l'insuline) et donc la synthèse de sérotonine ; les repas riches en protéines l'inhibent par compétition de transport.
- **Voie niacine/NAD⁺** : via la kynurénine, formation d'acide quinolinique, précurseur de la niacine (vitamine B3) puis du NAD⁺/NADP⁺ (≈ 60 mg Trp → 1 mg niacine, réaction nécessitant la vitamine B₆).
- **Dérivés indoliques** : la flore intestinale métabolise le tryptophane en composés indoliques, absorbés, modifiés au foie et excrétés dans l'urine.
- **Déficit en vitamine B₆** : la kynurénase (voie de la kynurénine) est B₆-dépendante ; en cas de déficit, accumulation de kynurénine et d'acide xanthurénique, urine jaune-verdâtre (signe diagnostique).
- **Maladie de Hartnup** : malabsorption intestinale/rénale héréditaire des acides aminés neutres (dont le Trp), entraînant une carence secondaire en niacine (symptômes pellagre-like : dermatite, diarrhée, démence) et une excrétion urinaire accrue de dérivés comme l'indican.
- **Syndrome carcinoïde** : tumeurs des cellules entérochromaffines détournant le Trp vers la sérotonine au détriment de la niacine ; la sérotonine est transformée en **acide 5-hydroxyindolacétique (5-HIAA)**, élevé dans l'urine (diagnostic) ; symptômes : flush, diarrhée, bronchospasme, atteinte cardiaque.
- **Pellagre** : déficit en niacine (alimentaire ou secondaire à un trouble du métabolisme du tryptophane), triade dermatite-diarrhée-démence (± décès si non traité).

## 7. Partie expérimentale

### a) Identification de l'hyperphénylalaninémie — test de l'acide phénylpyruvique urinaire
- **Principe** : l'acide phénylpyruvique réagit avec le chlorure ferrique (FeCl₃) pour donner un complexe bleu-vert transitoire (persistant 2-4 min). Une coloration similaire peut être donnée par l'acide homogentisique ou le p-hydroxyphénylpyruvique.
- **Procédure** : urine mélangée à un agent précipitant du phosphate, filtration, acidification (HCl concentré), ajout de FeCl₃. Test positif = coloration bleu-vert persistant 2-4 minutes. Sensibilité de la méthode : 10 mg%. Chez l'enfant atteint, la concentration urinaire d'acide phénylpyruvique atteint 50-100 mg%.

### b) Test de la leucinose (maple syrup urine disease)
- **Principe** : la 2,4-dinitrophénylhydrazine (DNPH) réagit avec l'excès de cétoacides ramifiés urinaires.
- **Procédure** : urine filtrée + DNPH, 10 minutes à température ambiante. Apparition d'un précipité jaune = excès de cétoacides. L'interférence de l'acétone est éliminée en faisant bouillir l'urine au préalable.

### c) Dosage quantitatif de l'acide 5-hydroxyindolacétique (5-HIAA)
- Le 5-HIAA est le produit d'excrétion urinaire de la désamination oxydative de la sérotonine (5-hydroxytryptamine), elle-même synthétisée à partir du tryptophane par les cellules argentaffines du tube digestif et de l'hypothalamus. La sérotonine plasmatique étant très faible, le dosage urinaire du 5-HIAA reste la méthode de référence pour évaluer le métabolisme de la sérotonine.
- **Principe** : formation d'un dérivé diazoïque pourpre à partir du 5-HIAA, du 1-nitroso-2-naphtol et de l'acide nitreux.
- **Valeurs normales** : 2-9 mg de 5-HIAA / 24h. **Pathologie** : tumeurs carcinoïdes des cellules argentaffines → excrétion de 100-220 mg / 24h.`;

export const LAB_S2_67_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Métabolisme des acides aminés et troubles héréditaires",
    source_label: "Notes de laboratoire — Biochimie II, Lab 6 & 7",
    content_fr: LAB_S2_67_COURSE,
  },
  qcm: [
    single("Où se déroule principalement le catabolisme des acides aminés par transamination/désamination ?", "B", "Le catabolisme des acides aminés a lieu surtout au niveau hépatique et rénal.", ["Au niveau musculaire et cardiaque", "Au niveau hépatique et rénal", "Au niveau intestinal exclusivement", "Au niveau pulmonaire"]),
    single("Que deviennent les α-cétoacides issus de la désamination des acides aminés ?", "C", "Les α-cétoacides sont dégradés dans le cycle de Krebs ou par des voies métaboliques spécifiques.", ["Ils sont excrétés tels quels dans l'urine", "Ils sont convertis directement en urée", "Ils sont dégradés dans le cycle de Krebs ou par des voies spécifiques", "Ils sont stockés sous forme de glycogène"]),
    single("Comment appelle-t-on l'élimination urinaire accrue d'acides aminés ?", "A", "Ce phénomène est appelé aminoacidurie.", ["L'aminoacidurie", "La protéinurie", "La glycosurie", "La cétonurie"]),
    single("Quelle enzyme est déficiente dans la phénylcétonurie classique ?", "B", "La phénylcétonurie résulte d'un déficit en phénylalanine hydroxylase.", ["La tyrosinase", "La phénylalanine hydroxylase", "L'homogentisate oxydase", "La cystathionine β-synthase"]),
    single("Quelle enzyme est déficiente dans l'alcaptonurie, provoquant l'accumulation d'acide homogentisique ?", "C", "L'alcaptonurie est due à un déficit en homogentisate oxydase.", ["La phénylalanine hydroxylase", "La tyrosinase", "L'homogentisate oxydase", "Le complexe BCKD"]),
    single("Quelle maladie est causée par un déficit du complexe de décarboxylation des cétoacides ramifiés (BCKD) ?", "D", "Le déficit en BCKD cause la leucinose (maple syrup urine disease), avec accumulation de Leu, Ile, Val et de leurs cétoacides.", ["La phénylcétonurie", "L'alcaptonurie", "L'homocystinurie", "La leucinose (maple syrup urine disease)"]),
    single("Quels cofacteurs sont nécessaires à la phénylalanine hydroxylase pour convertir la Phe en Tyr ?", "A", "La phénylalanine hydroxylase nécessite la tétrahydrobioptérine (BH₄), l'O₂ et le NADPH.", ["BH₄, O₂ et NADPH", "Vitamine B₆ uniquement", "Vitamine B₁₂ et acide folique", "FAD et NAD⁺"]),
    single("Quels sont les deux produits finaux du catabolisme de la tyrosine ?", "B", "Le catabolisme de la Tyr aboutit au fumarate (glucoformateur) et à l'acétoacétate (cétogène).", ["Pyruvate et acétyl-CoA", "Fumarate et acétoacétate", "Succinyl-CoA et citrate", "Oxaloacétate et malate"]),
    multi("Quels composés biologiquement importants dérivent de la tyrosine ?", ["A", "B", "C"], "La tyrosine est précurseur des catécholamines, de la mélanine et des hormones thyroïdiennes T3/T4.", ["Les catécholamines (dopamine, noradrénaline, adrénaline)", "La mélanine", "Les hormones thyroïdiennes (T3/T4)", "Le NAD⁺"]),
    single("Quel test biochimique classique révèle une coloration verdâtre de l'urine dans la phénylcétonurie ?", "C", "L'addition de chlorure ferrique à l'urine donne une coloration verdâtre due à l'acide phénylpyruvique.", ["Le test de Fehling", "Le test de Biuret", "Le test au chlorure ferrique", "Le test de Benedict"]),
    single("Pourquoi l'urine noircit-elle à l'air dans l'alcaptonurie ?", "B", "L'acide homogentisique accumulé s'oxyde au contact de l'air, provoquant le noircissement de l'urine.", ["Par précipitation de cristaux d'acide urique", "Par oxydation de l'acide homogentisique au contact de l'air", "Par présence de sang dans l'urine", "Par excès de bilirubine urinaire"]),
    single("Pourquoi le catabolisme des BCAA (Val, Leu, Ile) est-il principalement extrahépatique ?", "A", "L'aminotransférase des BCAA (BCAT) a une activité hépatique faible ; leur catabolisme se déroule surtout dans le muscle, le rein et le cerveau.", ["L'activité hépatique de la BCAT est faible", "Le foie ne possède pas de mitochondries fonctionnelles", "Les BCAA ne peuvent pas traverser la membrane hépatocytaire", "Le foie détruit systématiquement les BCAA en excès"]),
    single("Parmi les BCAA, lequel est exclusivement cétogène ?", "B", "La leucine est exclusivement cétogène, dégradée en acétyl-CoA et acétoacétate via l'HMG-CoA.", ["La valine", "La leucine", "L'isoleucine", "Aucun n'est exclusivement cétogène"]),
    single("Quel signe clinique caractéristique oriente vers le diagnostic de leucinose (MSUD) ?", "C", "L'odeur caractéristique de sirop d'érable de l'urine, due aux cétoacides excrétés, est le signe distinctif de la maladie.", ["Une coloration bleu-vert de l'urine au FeCl₃", "Un noircissement de l'urine à l'air", "Une odeur caractéristique de sirop d'érable de l'urine", "Une coloration jaune-verdâtre de l'urine"]),
    single("Quelle vitamine est nécessaire à la conversion du propionyl-CoA en succinyl-CoA, dont le déficit provoque une acidémie méthylmalonique ?", "D", "Cette étape nécessite la vitamine B₁₂ ; son déficit entraîne une acidémie méthylmalonique.", ["Vitamine B₆", "Vitamine C", "Vitamine B₉ (folates)", "Vitamine B₁₂"]),
    single("De quel acide aminé le NAD⁺ peut-il être synthétisé, faisant de lui une « provitamine PP » ?", "A", "Le tryptophane est converti en NAD⁺ via la voie de la kynurénine, d'où son rôle de provitamine PP (niacine).", ["Le tryptophane", "La phénylalanine", "La leucine", "L'histidine"]),
    single("Quel produit de dégradation de la sérotonine est dosé dans l'urine pour évaluer son métabolisme ?", "B", "L'acide 5-hydroxyindolacétique (5-HIAA) est le produit urinaire de la dégradation de la sérotonine, dosé car la sérotonine plasmatique est trop faible pour être mesurée directement.", ["L'acide homogentisique", "L'acide 5-hydroxyindolacétique (5-HIAA)", "La kynurénine", "L'acide xanthurénique"]),
    single("Quelle pathologie est caractérisée par une excrétion urinaire de 5-HIAA très élevée (100-220 mg/24h) ?", "C", "Les tumeurs carcinoïdes des cellules argentaffines détournent le tryptophane vers la sérotonine, dont le métabolite 5-HIAA est massivement excrété.", ["La maladie de Hartnup", "La pellagre", "Le syndrome carcinoïde", "La phénylcétonurie"]),
    single("Quelle carence vitaminique est révélée par l'accumulation urinaire de kynurénine et d'acide xanthurénique ?", "B", "La kynurénase, B₆-dépendante, est bloquée en cas de déficit en vitamine B₆, provoquant l'accumulation de ces métabolites.", ["Vitamine B₁₂", "Vitamine B₆", "Vitamine C", "Vitamine D"]),
    single("Quelle est la triade clinique classique de la pellagre ?", "A", "La pellagre associe classiquement dermatite, diarrhée et démence (auxquelles peut s'ajouter le décès si non traitée).", ["Dermatite, diarrhée, démence", "Fièvre, toux, dyspnée", "Ictère, ascite, œdèmes", "Céphalées, vomissements, raideur de nuque"]),
    single("Quel réactif est utilisé dans le test de dépistage urinaire de la leucinose (maple syrup urine disease) ?", "C", "La 2,4-dinitrophénylhydrazine (DNPH) forme un précipité jaune en présence d'un excès de cétoacides ramifiés.", ["Le chlorure ferrique", "Le réactif de Biuret", "La 2,4-dinitrophénylhydrazine (DNPH)", "L'acide nitreux"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lab 6 & 7 : Métabolisme des acides aminés", duration_seconds: 1_650 },
};
