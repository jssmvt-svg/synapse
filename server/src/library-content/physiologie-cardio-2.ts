import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const CARDIAC_CYCLE_OUTPUT_COURSE = `# Physiologie cardiovasculaire — Lecture 5 : cycle cardiaque, bruits du cœur, débit cardiaque et circulation coronaire

## 1. Le cycle cardiaque
- Le **cycle cardiaque** regroupe tous les événements mécaniques et électriques liés au flux sanguin à travers le cœur pendant une systole et une diastole.
- Conditions requises pour un cycle normal : conduction normale de l'influx par le système excito-conducteur, mouvement correct des valves (AV ouvertes/sigmoïdes fermées en diastole, inverse en systole), et pressions adéquates pour déterminer le sens du flux.
- Pressions normales : ventricule gauche 0-2 (diastole) à 120-140 mmHg (systole) ; aorte 60-80 à 120-140 mmHg ; ventricule droit 0-2 à 15-20 mmHg ; artère pulmonaire 7-12 à 15-20 mmHg.

### 1.1 Systole ventriculaire (VS) — durée 0,350 s
1. **Contraction isovolumétrique (CIV)** — 0,050 s : entre fermeture mitrale (Mc) et ouverture aortique (Ao) ; PVG passe de 10 à 80 mmHg ; volume ventriculaire constant (VTD).
2. **Éjection rapide** — 0,100 s : PVG jusqu'à 120-140 mmHg ; fournit 70 % du volume d'éjection systolique (VES).
3. **Éjection lente** — 0,200 s : PVG ≈ PAo (120 mmHg) ; fournit 30 % du VES restant. Bilan : VES ≈ 70 mL, VTS ≈ 30 mL.

### 1.2 Diastole ventriculaire (VD) — durée 0,500 s (dépend de la FC)
1. **Relaxation isovolumétrique (RIV)** — 0,050 s : entre fermeture aortique (Ac) et ouverture mitrale (Mo) ; PVG chute rapidement à 0 mmHg ; volume constant (VTS).
2. **Remplissage rapide** — 0,100 s : fournit 70 % du remplissage ventriculaire, sans hausse de pression (compliance ventriculaire accrue).
3. **Diastasis (remplissage lent)** — 0,200 s : fournit 10 % du remplissage.
4. **Systole auriculaire (présystole)** — 0,100 s : fournit les 20 % restants ; en fibrillation auriculaire, cette contribution est perdue.

### 1.3 Corrélations mécanogramme–ECG
| Phase | Bruit | Repère ECG |
| --- | --- | --- |
| CIV | B1 (systolique) | après l'onde Q |
| RIV | B2 (diastolique) | pente descendante de l'onde T |
| Remplissage rapide | B3 | après l'onde T |
| Systole auriculaire | B4 | après P, avant Q |

## 2. Courbe pression-volume
- **Remplissage (A→B)** : de l'ouverture mitrale à sa fermeture ; augmentation du volume jusqu'au VTD, faible hausse de pression (compliance).
- **Contraction isovolumétrique (B→C)** : volume constant (VTD), pression augmente rapidement.
- **Éjection (C→D)** : volume diminue du VTD au VTS (VES).
- **Relaxation isovolumétrique (D→A)** : volume constant (VTS), pression chute à 0.
- **Effet d'une précharge accrue** : déplace B→B', ↑VES par le mécanisme de Frank-Starling, VTS et fraction d'éjection (FE) constants, ↑surface (travail cardiaque).
- **Effet d'une postcharge accrue** : prolonge la CIV (C→C'), ↓VES par ↓durée d'éjection, ↑VTS, VTD constant, ↑travail cardiaque.
- **Effet d'un inotropisme accru** : ↑VES par ↑éjection (D→D'), ↓VTS, VTD constant, ↑FE, ↑travail cardiaque. Facteurs inotropes positifs : SNS, catécholamines, β-agonistes, Ca²⁺ plasmatique ; négatifs : SNP, acétylcholine, β-bloquants, inhibiteurs calciques, K⁺ plasmatique.

## 3. Bruits du cœur et phonocardiogramme
- 4 bruits cardiaques, causés par le mouvement des valves (surtout leur fermeture), les vibrations pariétales induites par le flux sanguin.
- **B1 (systolique, Mc)** : 0,08-0,12 s, grave et prolongé, intensité maximale au foyer mitral. Causes : fermeture des valves AV (mitrale précède tricuspide), ouverture des sigmoïdes, vibrations pariétales pendant la CIV, vibrations artérielles pendant l'éjection rapide.
- **B2 (diastolique, Ac-Pc)** : 0,04-0,06 s, aigu et bref, intensité maximale aux foyers aortique/pulmonaire. Cause principale : fermeture des sigmoïdes (aortique précède pulmonaire) ; leur écart augmente à l'expiration forcée.
- **B3 (protodiastolique)** : faible, audible chez l'enfant à paroi thoracique fine ; pathologique (insuffisance cardiaque, « bruit de galop ») si perceptible chez l'adulte, dû aux vibrations pariétales pendant le remplissage rapide.
- **B4 (présystolique)** : très faible, non perçu physiologiquement ; pathologique en cas d'hypertrophie ventriculaire ou d'insuffisance cardiaque.
- Foyers d'auscultation : aortique (2e EIC droit), pulmonaire (2e EIC gauche), point d'Erb (3e EIC gauche), tricuspidien (appendice xiphoïde), mitral (5e EIC gauche, ligne médio-claviculaire).

## 4. Débit cardiaque (DC)
- Définition : volume de sang éjecté par le cœur par minute (DC droit = DC gauche).
- **Formule : DC = VES × FC** (repos : VES 70 mL, FC 70 bpm → DC ≈ 5 L/min ; effort : 25-35 L/min).
- **Index cardiaque (IC) = DC / surface corporelle**, normale ≈ 3 ± 0,5 L/min/m².
- **Fraction d'éjection (FE) = VES/VTD**, normale > 55 % (moyenne 65 %).
- Facteurs déterminants : précharge (retour veineux, VTD), postcharge (résistance périphérique totale, RPT), fonction inotrope, fréquence cardiaque.
- Variations physiologiques : ↑ à l'effort et au stress (SNS, catécholamines), ↑ retour veineux ; variations pathologiques : ↑ dans la fièvre, l'hyperthyroïdie, l'anémie ; ↓ dans l'insuffisance cardiaque (↓contractilité), les tachyarythmies (↓remplissage diastolique), les hémorragies (↓volémie).

## 5. Circulation coronaire
- Deux artères coronaires naissant de l'aorte : coronaire droite (VD + partie postérieure du VG), coronaire gauche (partie antérieure et latérale du VG).
- Zone sous-épicardique : grosses artères à récepteurs α-adrénergiques (SNS → vasoconstriction) ; zone sous-endocardique : petites artères/artérioles à récepteurs β₂ (SNS → vasodilatation).
- Drainage veineux : sinus coronaire (75 %) + veine cardiaque antérieure (20 %) → oreillette droite ; veines de Thébésius → cavités cardiaques directement.
- **Débit coronaire = ΔP/Résistance = (PAo - POD)/Résistance coronaire** ; repos ≈ 250 mL/min (5 % du DC), effort jusqu'à 1 L/min (×4).
- Résistance coronaire = intravasculaire (auto-régulation vasomotrice) + extravasculaire (dépend du cycle cardiaque : maximale en systole, surtout sous-endocardique gauche → ischémie sous-endocardique possible ; minimale en diastole, la perfusion coronaire gauche est donc surtout diastolique).
- Consommation myocardique d'O₂ (MVO₂) ≈ 25-30 mL/min au repos (10 % de la VO₂ totale) ; facteurs majeurs : inotropisme, FC, tension pariétale ; extraction basale d'O₂ maximale (75 %) — toute augmentation du besoin doit passer par une vasodilatation coronaire.
- Régulation du débit coronaire : auto-régulation métabolique (adénosine — métabolite le plus important, PO₂, PCO₂, H⁺, K⁺) et myogénique (prépondérante), facteurs endothéliaux (NO/PGI₂ vasodilatateurs, ET/TxA₂ vasoconstricteurs), régulation nerveuse (effet direct α sur grosses coronaires peu important, effet direct β₂ sur petites coronaires vasodilatateur, effet indirect β₁ myocardique via ↑MVO₂ → vasodilatation métabolique).
- Occlusion coronaire > 2 minutes → nécrose myocardique (le métabolisme cardiaque est strictement aérobie).`;

export const CARDIAC_CYCLE_OUTPUT_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Cycle cardiaque et débit cardiaque",
    source_label: "Physiologie cardiovasculaire — Lecture 5",
    content_fr: CARDIAC_CYCLE_OUTPUT_COURSE,
  },
  qcm: [
    single("Quelle est la durée totale approximative de la systole ventriculaire ?", "B", "La systole ventriculaire dure environ 0,350 s, contre 0,500 s pour la diastole (variable selon la fréquence cardiaque).", ["0,150 s", "0,350 s", "0,500 s", "0,700 s"]),
    single("Quel événement délimite le début de la contraction isovolumétrique ?", "A", "La contraction isovolumétrique commence à la fermeture de la valve mitrale (Mc) et se termine à l'ouverture de la valve aortique (Ao).", ["La fermeture de la valve mitrale", "L'ouverture de la valve aortique", "La fermeture de la valve aortique", "L'ouverture de la valve mitrale"]),
    single("Quel pourcentage du volume d'éjection systolique est fourni par la phase d'éjection rapide ?", "C", "L'éjection rapide fournit environ 70 % du volume d'éjection systolique, l'éjection lente les 30 % restants.", ["30 %", "50 %", "70 %", "90 %"]),
    single("Quel pourcentage du remplissage ventriculaire est assuré par la systole auriculaire ?", "A", "La systole auriculaire (présystole) assure les derniers 20 % du remplissage ventriculaire ; en fibrillation auriculaire, cette contribution est perdue.", ["20 %", "10 %", "50 %", "70 %"]),
    single("Pourquoi la pression n'augmente-t-elle que faiblement pendant le remplissage rapide ventriculaire ?", "B", "L'augmentation de la compliance des parois ventriculaires pendant le remplissage rapide permet un accroissement de volume sans forte augmentation de pression.", ["La valve mitrale se referme immédiatement", "La compliance ventriculaire augmente", "Le volume ventriculaire diminue", "La pression auriculaire chute brutalement"]),
    single("À quel repère ECG correspond le bruit B2 ?", "C", "Le bruit B2 (fermeture des valves sigmoïdes) survient sur la pente descendante de l'onde T.", ["Après l'onde Q", "Après l'onde T", "Sur la pente descendante de l'onde T", "Entre P et Q"]),
    multi("Quels sont les effets d'une augmentation de la précharge sur la courbe pression-volume ?", ["A", "B"], "Une précharge accrue augmente le VES par le mécanisme de Frank-Starling et la surface de la courbe (travail cardiaque), tout en laissant le VTS et la fraction d'éjection constants.", ["Augmentation du volume d'éjection systolique (VES)", "Augmentation du travail cardiaque", "Diminution du volume télédiastolique", "Diminution de la fraction d'éjection"]),
    single("Quel est l'effet principal d'une augmentation de la postcharge sur le cycle cardiaque ?", "B", "Une postcharge accrue prolonge la contraction isovolumétrique, ce qui diminue la durée d'éjection et donc le VES, avec augmentation du VTS.", ["Diminution du volume télédiastolique", "Prolongation de la contraction isovolumétrique et diminution du VES", "Augmentation immédiate de la fréquence cardiaque", "Fermeture précoce de la valve mitrale"]),
    single("Quel bruit cardiaque est le plus fréquemment associé à l'insuffisance cardiaque (bruit de galop) ?", "C", "Le bruit B3, normalement très faible, devient perceptible en cas d'insuffisance cardiaque du fait de l'excès de compliance myocardique (bruit de galop).", ["B1", "B2", "B3", "B4"]),
    single("Quelle est la formule du débit cardiaque ?", "A", "DC = VES × FC (volume d'éjection systolique × fréquence cardiaque).", ["DC = VES × FC", "DC = FC / VES", "DC = VES / surface corporelle", "DC = VTD - VTS"]),
    single("Quelle est la valeur normale de la fraction d'éjection ventriculaire ?", "B", "La fraction d'éjection normale est supérieure à 55 %, avec une moyenne autour de 65 %.", ["Supérieure à 30 %", "Supérieure à 55 %", "Supérieure à 90 %", "Environ 20 %"]),
    single("Pendant quelle phase du cycle cardiaque le débit coronaire gauche est-il le plus important ?", "B", "La perfusion de la coronaire gauche est surtout diastolique car la compression extravasculaire exercée par le myocarde en systole (surtout sous-endocardique) réduit fortement le flux systolique.", ["Pendant la systole", "Pendant la diastole", "De façon égale en systole et diastole", "Uniquement pendant la contraction isovolumétrique"]),
    single("Quel métabolite est considéré comme le plus important dans l'autorégulation métabolique du débit coronaire ?", "C", "L'adénosine, produite par dégradation de l'ATP en conditions hypoxiques, est le principal médiateur de l'autorégulation métabolique coronaire.", ["Le CO2", "Le potassium", "L'adénosine", "L'histamine"]),
    single("Quel est l'effet des récepteurs β2 sur les petites artères coronaires sous-endocardiques ?", "B", "Les petites coronaires sous-endocardiques portent des récepteurs β2 dont la stimulation sympathique entraîne une vasodilatation.", ["Vasoconstriction", "Vasodilatation", "Aucun effet", "Fermeture complète du vaisseau"]),
    single("Après combien de temps d'occlusion coronaire une nécrose myocardique irréversible apparaît-elle ?", "A", "Le métabolisme cardiaque étant strictement aérobie, une occlusion coronaire de plus de 2 minutes entraîne une nécrose.", ["Plus de 2 minutes", "Plus de 30 minutes", "Plus de 2 heures", "Plus de 24 heures"]),
    single("Quel foyer d'auscultation correspond au 5e espace intercostal gauche, ligne médio-claviculaire ?", "D", "Le foyer mitral se situe au 5e espace intercostal gauche sur la ligne médio-claviculaire.", ["Foyer aortique", "Foyer pulmonaire", "Point d'Erb", "Foyer mitral"]),
    single("Quel pourcentage du débit cardiaque de repos représente le débit coronaire ?", "B", "Le débit coronaire de repos représente environ 5 % du débit cardiaque total (≈250 mL/min).", ["1 %", "5 %", "20 %", "50 %"]),
  ],
  exam: { titre_fr: "Examen chronométré — Cycle cardiaque et débit cardiaque", duration_seconds: 1_360 },
};

export const CARDIAC_CYCLE_OUTPUT_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Que regroupe le terme « cycle cardiaque » ?", question_en: "What does the term \"cardiac cycle\" encompass?", answer_fr: "Tous les événements mécaniques et électriques liés au flux sanguin à travers le cœur pendant une systole et une diastole.", answer_en: "All mechanical and electrical events tied to blood flow through the heart during one systole and diastole." },
  { question_fr: "Quelle est la durée de la contraction isovolumétrique ?", question_en: "What is the duration of isovolumetric contraction?", answer_fr: "0,050 s.", answer_en: "0.050 s." },
  { question_fr: "Entre quels deux événements se situe la contraction isovolumétrique ?", question_en: "Between which two events does isovolumetric contraction occur?", answer_fr: "Entre la fermeture de la valve mitrale et l'ouverture de la valve aortique.", answer_en: "Between mitral valve closure and aortic valve opening." },
  { question_fr: "Quel pourcentage du VES fournit la phase d'éjection lente ?", question_en: "What percentage of stroke volume does slow ejection provide?", answer_fr: "30 %.", answer_en: "30%." },
  { question_fr: "Quel est le volume télésystolique normal ?", question_en: "What is the normal end-systolic volume?", answer_fr: "Environ 30 mL.", answer_en: "About 30 mL." },
  { question_fr: "Quelle est la durée de la relaxation isovolumétrique ?", question_en: "What is the duration of isovolumetric relaxation?", answer_fr: "0,050 s.", answer_en: "0.050 s." },
  { question_fr: "Entre quels événements se situe la relaxation isovolumétrique ?", question_en: "Between which events does isovolumetric relaxation occur?", answer_fr: "Entre la fermeture de la valve aortique et l'ouverture de la valve mitrale.", answer_en: "Between aortic valve closure and mitral valve opening." },
  { question_fr: "Quel pourcentage du remplissage ventriculaire assure la phase de remplissage rapide ?", question_en: "What percentage of ventricular filling does rapid filling provide?", answer_fr: "70 %.", answer_en: "70%." },
  { question_fr: "Quel pourcentage assure le diastasis (remplissage lent) ?", question_en: "What percentage does diastasis (slow filling) provide?", answer_fr: "10 %.", answer_en: "10%." },
  { question_fr: "Que se passe-t-il en fibrillation auriculaire concernant le remplissage ventriculaire ?", question_en: "What happens to ventricular filling in atrial fibrillation?", answer_fr: "La contribution de la systole auriculaire (20 % du remplissage) est perdue faute de contraction auriculaire efficace.", answer_en: "The atrial systole contribution (20% of filling) is lost due to ineffective atrial contraction." },
  { question_fr: "À quel bruit cardiaque correspond la fermeture des valves auriculo-ventriculaires ?", question_en: "Which heart sound corresponds to closure of the atrioventricular valves?", answer_fr: "B1 (systolique).", answer_en: "S1 (systolic)." },
  { question_fr: "Quelle valve se ferme en premier lors de B1, la mitrale ou la tricuspide ?", question_en: "Which valve closes first during S1, mitral or tricuspid?", answer_fr: "La valve mitrale.", answer_en: "The mitral valve." },
  { question_fr: "Quelle valve sigmoïde s'ouvre en premier, la pulmonaire ou l'aortique ?", question_en: "Which semilunar valve opens first, pulmonary or aortic?", answer_fr: "La valve pulmonaire.", answer_en: "The pulmonary valve." },
  { question_fr: "Quelle est la durée approximative de B1 ?", question_en: "What is the approximate duration of S1?", answer_fr: "0,08 à 0,12 s.", answer_en: "0.08 to 0.12 s." },
  { question_fr: "Où est l'intensité de B1 maximale à l'auscultation ?", question_en: "Where is S1 intensity maximal on auscultation?", answer_fr: "Au foyer mitral.", answer_en: "At the mitral area." },
  { question_fr: "Quelle valve sigmoïde se ferme en premier, l'aortique ou la pulmonaire ?", question_en: "Which semilunar valve closes first, aortic or pulmonary?", answer_fr: "La valve aortique.", answer_en: "The aortic valve." },
  { question_fr: "Dans quelles circonstances B3 devient-il pathologique ?", question_en: "Under what circumstances does S3 become pathological?", answer_fr: "Chez l'adulte, en cas d'insuffisance cardiaque (excès de compliance myocardique), donnant un rythme de galop.", answer_en: "In adults, in heart failure (excessive myocardial compliance), producing a gallop rhythm." },
  { question_fr: "Que traduit la présence pathologique de B4 ?", question_en: "What does the pathological presence of S4 indicate?", answer_fr: "Une hypertrophie ventriculaire ou une insuffisance cardiaque.", answer_en: "Ventricular hypertrophy or heart failure." },
  { question_fr: "Où se situe le foyer aortique d'auscultation ?", question_en: "Where is the aortic auscultation area located?", answer_fr: "Au 2e espace intercostal droit, parasternal.", answer_en: "At the 2nd right intercostal space, parasternal." },
  { question_fr: "Où se situe le point d'Erb ?", question_en: "Where is Erb's point located?", answer_fr: "Au 3e espace intercostal gauche, parasternal.", answer_en: "At the 3rd left intercostal space, parasternal." },
  { question_fr: "Quelle est la formule du débit cardiaque ?", question_en: "What is the cardiac output formula?", answer_fr: "DC = VES × FC.", answer_en: "CO = SV × HR." },
  { question_fr: "Quelle est la valeur normale du débit cardiaque au repos ?", question_en: "What is the normal cardiac output at rest?", answer_fr: "5 à 6 L/min.", answer_en: "5 to 6 L/min." },
  { question_fr: "Jusqu'à quelle valeur le débit cardiaque peut-il monter à l'effort intense ?", question_en: "Up to what value can cardiac output rise during intense exercise?", answer_fr: "25 à 35 L/min.", answer_en: "25 to 35 L/min." },
  { question_fr: "Comment calcule-t-on l'index cardiaque ?", question_en: "How is the cardiac index calculated?", answer_fr: "DC divisé par la surface corporelle (m²).", answer_en: "CO divided by body surface area (m²)." },
  { question_fr: "Comment définit-on la fraction d'éjection ?", question_en: "How is ejection fraction defined?", answer_fr: "VES / VTD (volume d'éjection systolique divisé par le volume télédiastolique).", answer_en: "SV / EDV (stroke volume divided by end-diastolic volume)." },
  { question_fr: "Quelle artère coronaire irrigue principalement le ventricule droit ?", question_en: "Which coronary artery mainly supplies the right ventricle?", answer_fr: "La coronaire droite.", answer_en: "The right coronary artery." },
  { question_fr: "Quel type de récepteurs prédomine dans les grosses artères coronaires sous-épicardiques ?", question_en: "Which receptor type predominates in large subepicardial coronary arteries?", answer_fr: "Les récepteurs α-adrénergiques (vasoconstriction sympathique).", answer_en: "Alpha-adrenergic receptors (sympathetic vasoconstriction)." },
  { question_fr: "Par quelle veine principale se draine 75 % du sang coronaire ?", question_en: "Which main vein drains 75% of coronary blood?", answer_fr: "Le sinus coronaire.", answer_en: "The coronary sinus." },
  { question_fr: "Quelle est la valeur du débit coronaire au repos ?", question_en: "What is the resting coronary blood flow?", answer_fr: "Environ 250 mL/min (5 % du débit cardiaque).", answer_en: "About 250 mL/min (5% of cardiac output)." },
  { question_fr: "Pourquoi le débit coronaire gauche est-il quasi nul pendant la contraction isovolumétrique ?", question_en: "Why is left coronary flow near zero during isovolumetric contraction?", answer_fr: "En raison de la forte compression extrinsèque exercée par le myocarde sous-endocardique en systole.", answer_en: "Due to the strong extrinsic compression exerted by the subendocardial myocardium during systole." },
  { question_fr: "Quelle est la consommation myocardique d'O2 (MVO2) au repos ?", question_en: "What is resting myocardial oxygen consumption (MVO2)?", answer_fr: "25 à 30 mL/min (10 % de la VO2 totale).", answer_en: "25 to 30 mL/min (10% of total VO2)." },
  { question_fr: "Quel est le pourcentage basal d'extraction d'O2 par le myocarde ?", question_en: "What is the basal myocardial O2 extraction rate?", answer_fr: "Maximal, environ 75 %.", answer_en: "Maximal, about 75%." },
  { question_fr: "Comment le myocarde augmente-t-il son apport en O2 lorsque le besoin augmente, puisque l'extraction est déjà maximale ?", question_en: "How does the myocardium increase O2 supply when demand rises, given extraction is already maximal?", answer_fr: "Par vasodilatation coronaire, augmentant le débit sanguin.", answer_en: "Through coronary vasodilation, increasing blood flow." },
  { question_fr: "Quel est le principal mécanisme de régulation du débit coronaire ?", question_en: "What is the main regulatory mechanism of coronary blood flow?", answer_fr: "L'autorégulation (métabolique et myogénique).", answer_en: "Autoregulation (metabolic and myogenic)." },
  { question_fr: "Quel facteur endothélial vasodilatateur intervient dans la régulation coronaire ?", question_en: "Which endothelial vasodilator factor is involved in coronary regulation?", answer_fr: "Le monoxyde d'azote (NO) et la prostacycline (PGI2).", answer_en: "Nitric oxide (NO) and prostacyclin (PGI2)." },
  { question_fr: "Quel est l'effet indirect de la stimulation β1 myocardique sur les coronaires ?", question_en: "What is the indirect effect of myocardial β1 stimulation on coronaries?", answer_fr: "Une augmentation de la MVO2, entraînant une vasodilatation coronaire par autorégulation métabolique.", answer_en: "An increase in MVO2, leading to coronary vasodilation via metabolic autoregulation." },
  { question_fr: "Combien de temps le myocarde peut-il supporter une occlusion coronaire avant la nécrose ?", question_en: "How long can the myocardium withstand coronary occlusion before necrosis?", answer_fr: "Moins de 2 minutes.", answer_en: "Less than 2 minutes." },
  { question_fr: "Quels facteurs pathologiques augmentent le débit cardiaque ?", question_en: "Which pathological factors increase cardiac output?", answer_fr: "La fièvre, l'hyperthyroïdie, l'anémie, les troubles diminuant la résistance périphérique totale.", answer_en: "Fever, hyperthyroidism, anemia, disorders that decrease total peripheral resistance." },
  { question_fr: "Par quel mécanisme l'insuffisance cardiaque diminue-t-elle le débit cardiaque ?", question_en: "By what mechanism does heart failure decrease cardiac output?", answer_fr: "Par diminution de la contractilité, réduisant le volume d'éjection systolique.", answer_en: "By decreasing contractility, reducing stroke volume." }
];

const HEMODYNAMICS_CIRCULATION_COURSE = `# Physiologie cardiovasculaire — Lecture 6 : hémodynamique, circulation artérielle, microcirculation, circulation veineuse et lymphatique

## 1. Paramètres hémodynamiques généraux
- **Pression** : diminue progressivement de l'aorte (≈100 mmHg) vers les veines caves (≈0-3 mmHg). Dans les artères : pulsatile (PAo systolique 120-135, diastolique 60-80, différentielle 40-50 mmHg, pression moyenne ≈100 mmHg). Dans les capillaires : perd son caractère pulsatile, adaptée aux échanges transcapillaires (filtration côté artériel, réabsorption côté veineux). Dans les veines : ≈12 mmHg dans les membres inférieurs, 0-3 mmHg dans les veines caves.
- **Vélocité** : maximale dans l'aorte (33 cm/s), minimale dans les capillaires (0,3 mm/s, ×1000 plus lente, adaptée aux échanges), ré-augmente progressivement dans les veines (1/2 à 1/4 de la vélocité aortique dans la veine cave).
- **Surface de section** : minimale dans l'aorte (2,5 cm²), maximale dans les capillaires (2500 cm², adaptée aux échanges), intermédiaire mais plus grande que l'artère correspondante dans les veines (×3-4).
- **Circulation pulmonaire** : pressions bien plus basses que la circulation systémique (artère pulmonaire 15-20/7-12 mmHg) ; dans les capillaires pulmonaires, la pression hydrostatique reste très inférieure à la pression oncotique — mécanisme protecteur contre l'œdème pulmonaire aigu.

## 2. Relations pression–débit–surface–vélocité
- **Loi d'Ohm** : Débit = ΔP / Résistance. Dans les vaisseaux rigides, le débit dépend seulement du gradient de pression ; dans les vaisseaux élastiques (physiologiques), il dépend aussi de la pression absolue (vasodilatation avec la pression).
- **Équation de Hagen-Poiseuille** : Débit ∝ r⁴ — une petite variation de rayon modifie fortement le débit (loi de la puissance 4). Doubler le rayon (×2) multiplie le débit par 16.
- **Relation vélocité-surface** : V ∝ 1/surface de section, à débit constant.
- **Loi de Bernoulli** : Pression hydrodynamique + pression potentielle = constante. Dans l'athérosclérose, la réduction de surface augmente la vélocité et diminue la pression potentielle, favorisant une fermeture progressive du vaisseau ; dans les anévrismes, l'augmentation de surface diminue la vélocité, tendant vers une dilatation permanente.

## 3. Effet de la gravité sur la circulation
- Pression hydrostatique : Ph = ρgh (1 cm d'eau ≈ 0,73 mmHg).
- Point « zéro hydrostatique » au niveau du cœur (aucun effet de la gravité).
- En orthostatisme, personne de 180 cm : vers la tête (h≈50 cm) Ph = 35 mmHg (effet négatif sur la perfusion cérébrale — hypotension orthostatique) ; vers les membres inférieurs (h≈130 cm) Ph = 90 mmHg (effet positif sur la pression artérielle, mais négatif sur le retour veineux, compensé par les valvules veineuses).

## 4. Résistance périphérique totale (RPT)
- Loi de Poiseuille : RPT ∝ 1/r⁴ — une petite variation de rayon a un effet majeur sur la résistance.
- Circulation « en série » (RPT = R1+R2+R3) vs « en parallèle » (1/RPT = 1/R1+1/R2+1/R3) selon les segments vasculaires.
- Répartition de la RPT : petites artères et artérioles ≈ 2/3 de la RPT (déterminant majeur), grosses artères ≈ 1 % seulement, capillaires et veines une part mineure. Une sténose « critique » nécessite une réduction de rayon > 50 % pour affecter significativement le débit d'organe.
- Facteurs influençant la RPT : vasomotricité (VC : SNS/catécholamines-α, ET, TxA2, angiotensine II ; VD : SNS/adrénaline-β2, sérotonine, histamine, bradykinine), élasticité (↓ dans l'athérosclérose → ↑RPT), viscosité sanguine (↑ dans la polyglobulie → ↑RPT ; ↓ dans l'anémie → ↓RPT).
- Effets pathologiques d'une RPT augmentée : ↑postcharge → ↑tension pariétale → ↑MVO2 → hypertrophie concentrique compensatoire → à terme ↓compliance cardiaque, risque d'œdème pulmonaire et d'ischémie.

## 5. Conductance et élasticité vasculaire
- **Conductance (C)** = 1/RPT = Débit/ΔP, varie proportionnellement à r⁴.
- **Effet Windkessel** : l'élasticité aortique transforme le flux discontinu du cœur (systole/diastole) en flux continu — l'aorte se distend en systole (stockage d'énergie potentielle) et reprend sa dimension en diastole (libération d'énergie, maintien du flux).

## 6. Pression artérielle (PA)
- **Composants** : PA systolique (maximale, 120-139 mmHg, déterminée par la fonction de pompe cardiaque), PA diastolique (minimale, 60-89 mmHg, déterminée par la RPT), PA différentielle (40-50 mmHg, déterminée par la pompe cardiaque et la compliance vasculaire), PA moyenne = 1/3ΔPA + PAdiastolique ≈ 100 mmHg (déterminée par pompe cardiaque, RPT et pression veineuse centrale).
- **Valeurs normales (ESC/ESH 2018, référence en Roumanie)** : optimale < 120/80 mmHg, normale 120-129/80-84, normale haute 130-139/85-89.
- **Facteurs déterminants** : pompe cardiaque (PA max, via DC), RPT (PA min, via vasomotricité/viscosité/élasticité), volémie.
- **Viscosité sanguine** : influencée par l'hématocrite, la protéinémie, la température, la vélocité ; augmentée dans la polyglobulie, diminuée dans l'anémie.
- **Flux laminaire** : profil parabolique, vélocité maximale au centre, minimale près de la paroi (friction). **Flux turbulent** : mélange continu, génère des bruits audibles (souffles) — physiologique dans les grosses artères en début de systole si V > V critique, pathologique dans l'anémie ou l'athérosclérose même à vélocité normale.
- **Variations physiologiques** : effort (↑PA max via DC ; PA min stable ou ↓ selon entraînement), âge (↑ avec l'âge), sexe (PA homme > femme), posture (orthostatisme → réflexe presseur compensateur), stress (↑), digestion (↑PA max), grossesse (↓PA par ↑volémie compensée), température (chaud → VD → ↓PA ; froid → VC cutanée → ↑PA).
- **Hypertension artérielle** : PA max ≥ 140 et/ou PA min ≥ 90 mmHg ; causes : athérosclérose, maladies cardiovasculaires, causes neurologiques (tumeurs cérébrales, syndrome de Cushing), causes rénales. **Hypotension artérielle** : PA max < 100 mmHg avec symptômes ; causes : insuffisance cardiaque, hémorragie, choc.
- **Sphygmogramme artériel** : onde positive interrompue par l'incisure dicrote (fermeture aortique) ; vélocité de l'onde de pouls (15× plus rapide que le flux sanguin) : aorte 3-5 m/s, petites artères 15-35 m/s (augmente avec la rigidité pariétale, diminue avec la compliance).

## 7. Microcirculation
- **Composants** : artérioles (muscle lisse), méta-artérioles avec sphincters précapillaires, anastomoses artério-veineuses (rôle thermorégulateur cutané), capillaires, veinules.
- **Types de capillaires** : continus (jonctions serrées, seuls petits solutés — cerveau) ; fenêtrés (petites ouvertures — glomérule rénal) ; discontinus (larges espaces, passage de protéines — rate, foie, intestin grêle).
- Au repos, seuls 10-20 % des capillaires sont ouverts ; ce taux atteint 80-100 % dans le muscle squelettique actif.
- **Passage transcapillaire** : paracellulaire (pores/fenestrations — diffusion de substances hydrosolubles, filtration), transcellulaire (diffusion de substances liposolubles, pinocytose pour les grosses molécules).
- **Équation de Starling** : Qf = K[(Phc − Phi) − (πc − πi)]. Côté artériel : Phc (30-40 mmHg) > πc → filtration. Côté veineux : Phc (15 mmHg) < πc → réabsorption. πc ≈ 25-30 mmHg (force principale contre la filtration) ; Phi ≈ 0 mmHg, πi ≈ 2-3 mmHg. Normalement, 90 % du liquide filtré est réabsorbé, 10 % rejoint la circulation lymphatique.
- **Régulation de la microcirculation** : autorégulation métabolique (adénosine, K⁺, H⁺, CO2, O2), autorégulation myogénique, facteurs endothéliaux (NO/PGI2 vasodilatateurs, ET/TxA2 vasoconstricteurs), facteurs neuro-humoraux.

## 8. Retour veineux
- Facteurs : gradient de pression hydrostatique (12 mmHg membres inférieurs → 0-2 mmHg oreillette droite) ; fonction du ventricule gauche (« vis a tergo » — VTD, VES, DC) ; fonction du ventricule droit (aspiration systolique et diastolique) ; système valvulaire veineux (segmentation de la colonne sanguine en petites colonnes de 1 cm, réduisant l'effet de la gravité et empêchant le reflux) ; pompe musculaire (contractions intermittentes des muscles environnants) ; pulsations artérielles transmises ; mouvements respiratoires (« vis a fronte » : inspiration → pression intrathoracique négative → aspiration veineuse ; manœuvre de Valsalva → ↓retour veineux) ; mouvements du diaphragme ; tonus veineux (SNS ↑, chaleur ↓).
- Pathologie : insuffisance valvulaire veineuse → reflux, accumulation dans les jambes → varices, œdème hydrostatique.

## 9. Circulation lymphatique
- Voie accessoire de retour des liquides tissulaires vers le sang ; réseau unidirectionnel de vaisseaux à valvules.
- Composants : capillaires lymphatiques (borgnes, jonctions « bouton » perméables si pression interstitielle élevée) → vaisseaux lymphatiques (à valvules) → canal thoracique et canal lymphatique droit → veines sous-clavières.
- Ganglions lymphatiques : filtration de la lymphe, production/stockage de lymphocytes et anticorps, initiation de la réponse immunitaire.
- Composition de la lymphe : moins de protéines que le plasma, contient des facteurs de coagulation (peut coaguler).
- Rôles : retour de l'excès de liquide filtré non réabsorbé (10 %), retour des protéines filtrées, rôle immunitaire (ganglions), absorption des graisses (chylomicrons) dans l'intestin grêle, mécanisme de « trop-plein » maintenant l'interstitium sec.
- Pathologie : éléphantiasis (filariose) par obstruction parasitaire des vaisseaux lymphatiques.`;

export const HEMODYNAMICS_CIRCULATION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Hémodynamique et circulation périphérique",
    source_label: "Physiologie cardiovasculaire — Lecture 6",
    content_fr: HEMODYNAMICS_CIRCULATION_COURSE,
  },
  qcm: [
    single("Où la pression artérielle est-elle maximale dans le système circulatoire ?", "A", "La pression est maximale dans l'aorte (≈100 mmHg) et diminue progressivement jusqu'aux veines caves (0-3 mmHg).", ["Dans l'aorte", "Dans les capillaires", "Dans les veines caves", "Dans les veinules"]),
    single("Où la vélocité du flux sanguin est-elle minimale ?", "B", "La vélocité est minimale dans les capillaires (≈0,3 mm/s), ce qui est adapté aux échanges entre le sang et les tissus.", ["Dans l'aorte", "Dans les capillaires", "Dans les veines caves", "Dans les artères de gros calibre"]),
    single("Selon l'équation de Hagen-Poiseuille, comment le débit varie-t-il avec le rayon du vaisseau ?", "C", "Le débit est proportionnel à la puissance 4 du rayon (loi de la puissance 4) : doubler le rayon multiplie le débit par 16.", ["Proportionnel au rayon", "Proportionnel au carré du rayon", "Proportionnel à la puissance 4 du rayon", "Indépendant du rayon"]),
    single("Quelle proportion de la résistance périphérique totale est déterminée par les petites artères et artérioles ?", "C", "Les petites artères et artérioles représentent environ 2/3 de la résistance périphérique totale, en faisant le déterminant majeur de la RPT.", ["1 %", "10 %", "2/3", "100 %"]),
    single("Quel pourcentage de réduction du rayon d'une grosse artère est nécessaire pour causer une sténose « critique » affectant significativement le débit ?", "B", "Il faut une réduction de rayon supérieure à 50 % pour qu'une sténose d'une grosse artère affecte significativement le débit d'organe, car ces artères ne représentent normalement qu'environ 1 % de la RPT.", ["10 %", "Plus de 50 %", "90 %", "100 %"]),
    single("Quel est le rôle de l'effet Windkessel de l'aorte ?", "A", "L'élasticité aortique (effet Windkessel) transforme le flux discontinu généré par le cœur en un flux continu à travers les vaisseaux.", ["Transformer le flux discontinu en flux continu", "Augmenter la résistance périphérique", "Réduire la vélocité sanguine dans les capillaires", "Empêcher le reflux veineux"]),
    single("Qu'est-ce qui détermine principalement la pression artérielle diastolique ?", "B", "La pression diastolique est principalement déterminée par la résistance périphérique totale.", ["La pompe cardiaque", "La résistance périphérique totale", "La viscosité sanguine seule", "Le retour veineux seul"]),
    single("Quelle est la pression artérielle moyenne normale ?", "C", "La pression artérielle moyenne normale est d'environ 100 mmHg (calculée comme 1/3 de la pression différentielle + la pression diastolique).", ["60 mmHg", "80 mmHg", "100 mmHg", "140 mmHg"]),
    multi("Quels facteurs influencent la valeur de la résistance périphérique totale ?", ["A", "B", "C"], "La vasomotricité, l'élasticité vasculaire et la viscosité sanguine sont les trois facteurs principaux influençant la résistance périphérique totale.", ["La vasomotricité (vasoconstriction/vasodilatation)", "L'élasticité de la paroi vasculaire", "La viscosité sanguine", "La couleur du sang"]),
    single("Dans quelle zone de la microcirculation la surface de section totale est-elle maximale ?", "A", "La surface de section totale est maximale dans les capillaires (≈2500 cm²), ce qui ralentit fortement la vélocité et favorise les échanges.", ["Dans les capillaires", "Dans l'aorte", "Dans les veines caves", "Dans les grosses artères"]),
    single("Quel type de capillaire présente des jonctions serrées ne laissant passer que l'eau et les petites molécules, typique de la circulation cérébrale ?", "A", "Les capillaires continus, avec jonctions intercellulaires serrées, ne permettent le passage que de petites molécules (eau, CO2, O2) — type retrouvé dans la circulation cérébrale.", ["Capillaire continu", "Capillaire fenêtré", "Capillaire discontinu", "Capillaire sinusoïde"]),
    single("Selon l'équation de Starling, que se passe-t-il à l'extrémité artérielle d'un capillaire ?", "A", "À l'extrémité artérielle, la pression hydrostatique capillaire dépasse la pression oncotique, entraînant une filtration nette de liquide vers l'interstitium.", ["Filtration (Ph > pression oncotique)", "Réabsorption (Ph < pression oncotique)", "Aucun échange net", "Diffusion pure sans filtration"]),
    single("Quel pourcentage du liquide filtré au niveau capillaire est normalement réabsorbé ?", "C", "Environ 90 % du liquide filtré est réabsorbé au niveau veineux du capillaire ; les 10 % restants rejoignent la circulation lymphatique.", ["10 %", "50 %", "90 %", "100 %"]),
    multi("Quels facteurs favorisent le retour veineux ?", ["A", "B", "C"], "La pompe musculaire, les mouvements respiratoires (aspiration thoracique en inspiration) et le système valvulaire veineux sont des facteurs majeurs du retour veineux.", ["La pompe musculaire", "Les mouvements respiratoires", "Le système valvulaire veineux", "La manœuvre de Valsalva"]),
    single("Quel est l'effet de la manœuvre de Valsalva (expiration forcée glotte fermée) sur le retour veineux ?", "B", "La manœuvre de Valsalva augmente la pression intrathoracique, ce qui diminue le retour veineux.", ["Elle l'augmente", "Elle le diminue", "Elle n'a aucun effet", "Elle l'arrête définitivement"]),
    single("Quel est le rôle principal des ganglions lymphatiques ?", "D", "Les ganglions lymphatiques filtrent la lymphe, produisent et stockent des lymphocytes/anticorps, et initient la réponse immunitaire.", ["Pomper activement la lymphe", "Produire des globules rouges", "Réguler la pression artérielle", "Filtrer la lymphe et initier la réponse immunitaire"]),
    single("Quelle maladie parasitaire cause un œdème lymphatique majeur (éléphantiasis) ?", "B", "La filariose, causée par le parasite Filaria qui obstrue les vaisseaux et ganglions lymphatiques, provoque l'éléphantiasis.", ["La leishmaniose", "La filariose", "La toxoplasmose", "La trypanosomiase"]),
    single("Comment varie la pression hydrostatique en orthostatisme au niveau des membres inférieurs, pour une personne de 180 cm ?", "C", "Vers les membres inférieurs (h≈130 cm), la pression hydrostatique gravitationnelle atteint environ 90 mmHg.", ["0 mmHg", "35 mmHg", "90 mmHg", "150 mmHg"]),
  ],
  exam: { titre_fr: "Examen chronométré — Hémodynamique et circulation périphérique", duration_seconds: 1_440 },
};

export const HEMODYNAMICS_CIRCULATION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la pression artérielle moyenne aortique normale ?", question_en: "What is the normal mean aortic pressure?", answer_fr: "Environ 100 mmHg.", answer_en: "About 100 mmHg." },
  { question_fr: "Quelle est la vélocité maximale du flux sanguin dans l'aorte ?", question_en: "What is the maximal blood flow velocity in the aorta?", answer_fr: "≈33 cm/s.", answer_en: "≈33 cm/s." },
  { question_fr: "Quelle est la surface de section totale de l'aorte ?", question_en: "What is the total cross-sectional area of the aorta?", answer_fr: "≈2,5 cm².", answer_en: "≈2.5 cm²." },
  { question_fr: "Quelle est la surface de section totale des capillaires ?", question_en: "What is the total cross-sectional area of the capillaries?", answer_fr: "≈2500 cm² (maximale).", answer_en: "≈2500 cm² (maximal)." },
  { question_fr: "Pourquoi la filtration ne se produit-elle normalement pas dans les capillaires pulmonaires ?", question_en: "Why does filtration normally not occur in pulmonary capillaries?", answer_fr: "Parce que la pression hydrostatique y est bien plus faible que la pression oncotique — mécanisme protecteur contre l'œdème pulmonaire.", answer_en: "Because hydrostatic pressure there is much lower than oncotic pressure — a protective mechanism against pulmonary edema." },
  { question_fr: "Que dit la loi d'Ohm appliquée à l'hémodynamique ?", question_en: "What does Ohm's law state as applied to hemodynamics?", answer_fr: "Débit = ΔPression / Résistance.", answer_en: "Flow = ΔPressure / Resistance." },
  { question_fr: "Que dit l'équation de Hagen-Poiseuille concernant le rayon vasculaire ?", question_en: "What does the Hagen-Poiseuille equation state about vessel radius?", answer_fr: "Le débit est proportionnel à la puissance 4 du rayon.", answer_en: "Flow is proportional to the fourth power of the radius." },
  { question_fr: "Quelle est la relation entre vélocité et surface de section à débit constant ?", question_en: "What is the relationship between velocity and cross-sectional area at constant flow?", answer_fr: "La vélocité est inversement proportionnelle à la surface de section.", answer_en: "Velocity is inversely proportional to cross-sectional area." },
  { question_fr: "Que dit la loi de Bernoulli ?", question_en: "What does Bernoulli's law state?", answer_fr: "Pression hydrodynamique + pression potentielle = constante.", answer_en: "Hydrodynamic pressure + potential pressure = constant." },
  { question_fr: "Quelle est la formule de la pression hydrostatique gravitationnelle ?", question_en: "What is the formula for gravitational hydrostatic pressure?", answer_fr: "Ph = ρ × g × h (1 cm d'eau ≈ 0,73 mmHg).", answer_en: "Ph = ρ × g × h (1 cm of water ≈ 0.73 mmHg)." },
  { question_fr: "Quel pourcentage de la résistance périphérique totale représentent les grosses artères ?", question_en: "What percentage of total peripheral resistance do large arteries represent?", answer_fr: "Environ 1 %.", answer_en: "About 1%." },
  { question_fr: "Quelle catégorie de vaisseaux représente les 2/3 de la résistance périphérique totale ?", question_en: "Which vessel category accounts for two-thirds of total peripheral resistance?", answer_fr: "Les petites artères et les artérioles.", answer_en: "Small arteries and arterioles." },
  { question_fr: "Quel effet a l'athérosclérose sur l'élasticité vasculaire et la résistance périphérique totale ?", question_en: "What effect does atherosclerosis have on vascular elasticity and total peripheral resistance?", answer_fr: "Elle diminue l'élasticité et augmente la résistance périphérique totale.", answer_en: "It decreases elasticity and increases total peripheral resistance." },
  { question_fr: "Comment la polyglobulie affecte-t-elle la résistance périphérique totale ?", question_en: "How does polycythemia affect total peripheral resistance?", answer_fr: "Elle augmente la viscosité sanguine, donc la résistance périphérique totale.", answer_en: "It increases blood viscosity, thus total peripheral resistance." },
  { question_fr: "Comment définit-on la conductance vasculaire ?", question_en: "How is vascular conductance defined?", answer_fr: "L'inverse de la résistance : C = Débit / ΔPression = 1/RPT.", answer_en: "The reciprocal of resistance: C = Flow / ΔPressure = 1/TPR." },
  { question_fr: "Qu'est-ce que l'effet Windkessel ?", question_en: "What is the Windkessel effect?", answer_fr: "La transformation, grâce à l'élasticité aortique, du flux discontinu du cœur en flux continu dans les vaisseaux.", answer_en: "The transformation, via aortic elasticity, of the heart's discontinuous flow into continuous vessel flow." },
  { question_fr: "Quelle est la valeur normale de la pression artérielle systolique optimale (ESC/ESH 2018) ?", question_en: "What is the optimal normal systolic blood pressure value (2018 ESC/ESH)?", answer_fr: "Moins de 120 mmHg.", answer_en: "Less than 120 mmHg." },
  { question_fr: "Qu'est-ce qui détermine principalement la pression artérielle systolique ?", question_en: "What primarily determines systolic blood pressure?", answer_fr: "La fonction de pompe cardiaque (le débit cardiaque).", answer_en: "The cardiac pump function (cardiac output)." },
  { question_fr: "Quelle est la valeur seuil de diagnostic de l'hypertension artérielle ?", question_en: "What is the diagnostic threshold for arterial hypertension?", answer_fr: "PA systolique ≥ 140 mmHg et/ou PA diastolique ≥ 90 mmHg.", answer_en: "Systolic BP ≥ 140 mmHg and/or diastolic BP ≥ 90 mmHg." },
  { question_fr: "Quelles sont les caractéristiques du flux laminaire ?", question_en: "What are the characteristics of laminar flow?", answer_fr: "Vélocité constante, profil parabolique, vélocité maximale au centre du vaisseau, minimale près de la paroi.", answer_en: "Constant velocity, parabolic profile, maximal velocity at the vessel center, minimal near the wall." },
  { question_fr: "Que génère un flux turbulent audible au stéthoscope ?", question_en: "What does an audible turbulent flow generate on stethoscope?", answer_fr: "Un souffle, dû au mélange continu et irrégulier des courants sanguins.", answer_en: "A murmur, due to continuous irregular mixing of blood currents." },
  { question_fr: "Quel type de capillaire présente de larges espaces intercellulaires permettant le passage de protéines, typique du foie et de la rate ?", question_en: "Which capillary type has large intercellular spaces allowing protein passage, typical of the liver and spleen?", answer_fr: "Le capillaire discontinu.", answer_en: "The discontinuous capillary." },
  { question_fr: "Quel type de capillaire présente des fenestrations, typique de la filtration glomérulaire rénale ?", question_en: "Which capillary type has fenestrations, typical of renal glomerular filtration?", answer_fr: "Le capillaire fenêtré.", answer_en: "The fenestrated capillary." },
  { question_fr: "Quelle est la pression oncotique capillaire normale ?", question_en: "What is the normal capillary oncotic pressure?", answer_fr: "25 à 30 mmHg.", answer_en: "25 to 30 mmHg." },
  { question_fr: "Écrivez l'équation de Starling.", question_en: "Write the Starling equation.", answer_fr: "Qf = K[(Phc − Phi) − (πc − πi)].", answer_en: "Qf = K[(Phc − Phi) − (πc − πi)]." },
  { question_fr: "Quel pourcentage des capillaires est ouvert au repos ?", question_en: "What percentage of capillaries is open at rest?", answer_fr: "10 à 20 %.", answer_en: "10 to 20%." },
  { question_fr: "Quel pourcentage des capillaires est ouvert dans le muscle squelettique actif ?", question_en: "What percentage of capillaries is open in active skeletal muscle?", answer_fr: "80 à 100 %.", answer_en: "80 to 100%." },
  { question_fr: "Quelle pression au niveau des membres inférieurs assure le gradient du retour veineux vers l'oreillette droite ?", question_en: "What lower-limb pressure ensures the venous return gradient toward the right atrium?", answer_fr: "≈12 mmHg (contre 0-2 mmHg dans l'oreillette droite).", answer_en: "≈12 mmHg (versus 0-2 mmHg in the right atrium)." },
  { question_fr: "Quel est le rôle des valvules veineuses ?", question_en: "What is the role of venous valves?", answer_fr: "Segmenter la colonne sanguine en petites colonnes, réduisant l'effet de la gravité et assurant un flux unidirectionnel.", answer_en: "Segment the blood column into small columns, reducing gravity's effect and ensuring unidirectional flow." },
  { question_fr: "Qu'est-ce que la « vis a fronte » du retour veineux ?", question_en: "What is the \"vis a fronte\" of venous return?", answer_fr: "L'aspiration du sang veineux vers le thorax due à la pression intrathoracique négative pendant l'inspiration.", answer_en: "The suction of venous blood toward the thorax due to negative intrathoracic pressure during inspiration." },
  { question_fr: "Où se draine la lymphe vers la circulation sanguine ?", question_en: "Where does lymph drain into the blood circulation?", answer_fr: "Dans les veines sous-clavières, via le canal thoracique et le canal lymphatique droit.", answer_en: "Into the subclavian veins, via the thoracic duct and the right lymphatic duct." },
  { question_fr: "Quelle est une caractéristique de composition de la lymphe par rapport au plasma ?", question_en: "What is a compositional characteristic of lymph compared to plasma?", answer_fr: "Elle contient moins de protéines que le plasma, mais possède des facteurs de coagulation.", answer_en: "It contains fewer proteins than plasma, but has clotting factors." },
  { question_fr: "Quel rôle jouent les vaisseaux lymphatiques dans l'absorption intestinale ?", question_en: "What role do lymphatic vessels play in intestinal absorption?", answer_fr: "Ils assurent l'absorption des graisses (chylomicrons) au niveau des villosités intestinales.", answer_en: "They ensure fat absorption (chylomicrons) at the intestinal villi." }
];

const CV_NERVOUS_REGULATION_COURSE = `# Physiologie cardiovasculaire — Lecture 7 : régulation nerveuse de la fonction cardiovasculaire

## 1. Centres de régulation bulbo-protubérantiels
- Situés dans la substance réticulée du bulbe rachidien supérieur et du tiers inférieur du pont ; ne sont pas de vrais « centres » mais des réseaux de neurones interconnectés :
  - **Zone pressive** (dorso-latérale) : cardio-accélératrice et vasoconstrictrice ; stimulation → ↑FC, ↑force de contraction, ↑DC, vasoconstriction (↑RPT) → ↑PA.
  - **Zone dépressive** (ventro-médiane) : cardio-inhibitrice ; contient le noyau dorsal du vague et le noyau ambigu (origine du nerf vague) ; stimulation → ↓FC, inhibition de la zone pressive (↓RPT, principal mécanisme vasodilatateur), stimulation du SNP → ↓PA.
  - **Noyau du tractus solitaire (NTS)** : reçoit les afférences sensitives des zones réflexogènes ; régule les deux zones (stimule la dépressive, inhibe la pressive).

## 2. Régulation intrinsèque du cœur
- **Autorégulation hétérométrique** (mécanisme de Frank-Starling) : l'étirement du sarcomère (1,8-2,2 µm) augmente le nombre de ponts actine-myosine et la sensibilité au Ca²⁺, augmentant la force de contraction.
- **Autorégulation homéométrique** : à longueur de fibre constante, l'augmentation de la fréquence cardiaque augmente progressivement la force de contraction jusqu'à un plateau (« effet d'escalier »), par accumulation intracellulaire de calcium pendant la diastole raccourcie — utile dans la régulation du cœur dénervé (transplantation).

## 3. Régulation extrinsèque du cœur
### 3.1 Innervation sympathique (nerfs cardiaques)
- Origine médullaire T1-T5(6), fibres pré-ganglionnaires courtes → ganglion stellaire → fibres post-ganglionnaires longues → plexus épicardique péri-cardiaque.
- Innerve toutes les structures cardiaques (récepteurs β1) et les coronaires (α sur grosses, β2 sur petites).
- Médiateurs : noradrénaline, adrénaline, neuropeptide Y.
- Effets « + » (5 propriétés cardiaques) : **chronotrope +** (↑FC), **inotrope +** (↑force), **tonotrope +** (↑tonicité), **dromotrope +** (↑vitesse de conduction), **bathmotrope +** (↑excitabilité).
- Prédomine sous stress physique/psychologique. Les β-bloquants (non sélectifs comme le propranolol, sélectifs β1 comme l'aténolol) réduisent la FC.
- Blocage complet SNS+SNP → FC intrinsèque ≈ 100 bpm (activité propre du nœud sinusal) — test d'évaluation du nœud sinusal.

### 3.2 Innervation parasympathique (nerf vague)
- Origine : noyau dorsal du vague et noyau ambigu ; fibres pré-ganglionnaires longues → synapse dans la paroi cardiaque (surtout atriale) → fibres post-ganglionnaires courtes.
- Innerve surtout le nœud sinusal, le nœud AV et les oreillettes (peu de fibres ventriculaires — effet quasi nul sur la contractilité ventriculaire).
- Médiateur : acétylcholine, récepteurs M2.
- Effets « − » : chronotrope − (le plus important), inotrope − (moindre), tonotrope −, dromotrope −, bathmotrope −.
- Prédomine au repos. Manœuvres vagales (compression du globe oculaire, du sinus carotidien, manœuvre de Valsalva) → ↓FC, utiles pour arrêter une tachycardie paroxystique supraventriculaire. Une stimulation vagale intense peut causer un arrêt cardiaque suivi d'un « échappement vagal ». La section du vague ou l'atropine (parasympatholytique) → ↑FC.

## 4. Zones réflexogènes cardiaques
### 4.1 Récepteurs auriculaires
- **Mécanorécepteurs de type A** (systole auriculaire) : stimulent le SNS. **Type B** (diastole/remplissage) : inhibent le SNS.
- **Réflexe de Bainbridge** : ↑volémie/retour veineux → ↑pression auriculaire droite → stimulation des mécanorécepteurs → ↑FC (réflexe presseur, effet inverse du réflexe dépresseur des barorécepteurs artériels — relation divergente).
- **Inhibition de l'ADH** : ↑pression auriculaire gauche → inhibition de l'ADH → diurèse.
- **Sécrétion d'ANP (peptide natriurétique auriculaire)** : synthétisé par les myocytes auriculaires, sécrété en réponse à ↑volémie, ↑[Na⁺] plasmatique, ↑FC, angiotensine II. Effets : diurèse et natriurèse rénale (↑FG par VD afférente + VC efférente, ↓réabsorption tubulaire de Na⁺, inhibition du SRAA), vasodilatation puissante, ↓PA par effet direct et par ↓volémie ; rétrocontrôle négatif sur le système rénine-angiotensine-aldostérone.

### 4.2 Récepteurs ventriculaires
- Mécanorécepteurs sous-endocardiques/sous-épicardiques : stimulation → réflexe dépresseur (↓FC, ↓PA) — impliqué dans la syncope vaso-vagale (passage clino→orthostatique, émotion forte), évaluée par le tilt-test.
- Chémorécepteurs cardiaques : fibres vagales (sensibles à la bradykinine, sérotonine, prostaglandines — réflexes coronaro-dilatateurs) et sympathiques (réflexes coronaro-constricteurs) ; impliqués dans les réflexes pathologiques de l'infarctus : **réflexe de Bezold-Jarisch** (protecteur, ↓FC/↓PA) et **réflexe de Mallians** (aggravant, ↑FC/↑PA) ; responsables de la douleur de l'angine de poitrine.

### 4.3 Barorécepteurs et chémorécepteurs du sinus carotidien et de la crosse aortique
- **Barorécepteurs** : stimulés par la distension pariétale (↑PA) → **réflexe dépresseur** : voie afférente IX (glosso-pharyngien, sinus carotidien) et X (vague, crosse aortique) → NTS → stimulation vagale (↓FC) + inhibition du tonus sympathique (vasodilatation, ↓RPT) → ↓PA. Les barorécepteurs carotidiens sont plus sensibles que les aortiques. L'hypertension chronique diminue leur sensibilité (recalibrage/« resetting »).
- **Chémorécepteurs** : stimulés par ↓PO₂, ↑PCO₂, ↑H⁺ → **réflexe presseur** : voie afférente IX/X → NTS → inhibition de la zone dépressive/activation de la zone pressive → ↑FC, ↑force, vasoconstriction → ↑PA.

## 5. Autres zones réflexogènes
- **Viscéroceptives** : chémorécepteurs laryngés (chloroforme → réflexe dépresseur, ammoniac → réflexe presseur), mécanorécepteurs oculaires (**réflexe de Dagnini-Aschner** — compression oculaire → réflexe dépresseur vagal, utilisé comme manœuvre vagale diagnostique/thérapeutique), appareil vestibulaire (réflexe dépresseur).
- **Proprioceptives** : muscles/ligaments/articulations → réflexe presseur à l'effort.
- **Extéroceptives** : peau — chaleur/massage modérés → effet presseur tonique ; changement brutal chaud→froid → réflexe dépresseur pouvant aller jusqu'à l'arrêt cardiaque.

## 6. Régulation humorale de la fonction cardiaque
- **Catécholamines** (médullosurrénale) : effet β1 → ↑FC, ↑force, ↑MVO2 ; peu d'effet au repos, effet majeur en stress/effort (mais courte durée, dégradation rapide).
- **Cortisol** : ↑force de contraction (direct + amplification des catécholamines) ; sa baisse → fatigue musculaire cardiaque.
- **Hormones thyroïdiennes** : ↑FC et force (↑nombre de récepteurs β1) ; en hyperthyroïdie → tachycardie, extrasystoles, fibrillation auriculaire.
- **Insuline** : effet inotrope + direct (↑transport intracellulaire de glucose).
- **Glucagon** : ↑FC et force via ↑AMPc, comme les catécholamines.
- **GH** : ↑force et débit cardiaque, en association avec les hormones thyroïdiennes.

## 7. Innervation vasculaire
### 7.1 Vasoconstriction
- Voie SNS : centre presseur → tractus réticulo-spinal → moelle T1-L2/L3 (cornes latérales) → ganglions SNS pré/paravertébraux → plexus périvasculaire.
- Effets : artères (α → VC/↑RPT ; β2 sur cerveau/coronaires/muscle/poumon/foie → VD locale ; SNS cholinergique musculaire squelettique → VD), veines (récepteurs α → VC → mobilisation du volume veineux → ↑retour veineux), médullosurrénale (libération de catécholamines), appareil juxtaglomérulaire (activation du SRAA).
- Effets globaux : effet presseur (↑RPT), mobilisation veineuse (↑retour veineux), redistribution du flux sanguin vers cerveau/cœur/muscles.
- Stimuli principaux : barorécepteurs (↓PA), chémorécepteurs (↑PCO2/↑H⁺/↓PO2), froid, stress.

### 7.2 Vasodilatation
- Résulte de l'inhibition de la zone pressive (mécanisme le plus important) et de la stimulation de la zone dépressive.
- Voies : SNP crânien (III, VII, IX, X) → VD céphalique/viscérale via NO/GMPc ; SNP sacré → VD pelvienne ; SNS adrénergique (β2) → VD coronaire/musculaire/cérébrale/hépatique/pulmonaire ; SNS cholinergique → VD musculaire squelettique (via Ach).
- Stimuli : ↑PA (barorécepteurs), ↓PCO2 (inhibition chémorécepteurs), chaleur, émotions agréables.
- Observation : peu de vaisseaux ont une innervation parasympathique ; la vasodilatation cutanée pendant la transpiration est induite par la bradykinine, non par le SNP.

## 8. Récepteurs impliqués dans la régulation réflexe
- **Mécanorécepteurs (barorécepteurs)** : sensibles à l'étirement pariétal (pas directement à la PA).
- **Chémorécepteurs** : sensibles aux variations de PO2, PCO2, H⁺.
- Classification par localisation : extérocepteurs, propriocepteurs, intérocepteurs (intra/extravasculaires). Zones intravasculaires majeures : sinus carotidien/crosse aortique (les plus importantes), oreillettes, ventricules, circulation pulmonaire, circulation splanchnique, circulation coronaire.

## 9. Rôle des centres nerveux supérieurs
- **Hypothalamus** : contrôle pendant l'effort, l'alimentation, l'activité sexuelle, les changements de température. Hypothalamus antérieur (SNP) → stimule la zone dépressive → ↓FC, VD (rôle en thermorégulation par chaleur — VD cutanée). Hypothalamus postérieur (SNS) → stimule la zone pressive → ↑FC, VC (rôle par le froid — VC cutanée).
- **Substance réticulée du tronc cérébral**, **système limbique** (états émotionnels), **thalamus**, **cervelet** (noyau fastigial : inhibe le SNP, stimule le SNS → ↑FC/↑PA lors des changements posturaux).
- **Cortex** (surtout les aires antérieures) : biofeedback de contrôle de la PA/FC via l'hypothalamus et les centres sympathiques spinaux ; réactions émotionnelles (colère → VC/effet presseur, honte → VD/effet dépresseur).`;

export const CV_NERVOUS_REGULATION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Régulation nerveuse de la fonction cardiovasculaire",
    source_label: "Physiologie cardiovasculaire — Lecture 7",
    content_fr: CV_NERVOUS_REGULATION_COURSE,
  },
  qcm: [
    single("Où sont situés les centres de régulation cardiovasculaire bulbo-protubérantiels ?", "B", "Ils sont situés dans la substance réticulée du bulbe rachidien supérieur et du tiers inférieur du pont.", ["Dans le cortex moteur", "Dans le bulbe rachidien supérieur et le pont", "Dans l'hypothalamus uniquement", "Dans la moelle épinière lombaire"]),
    single("Quel est l'effet de la stimulation de la zone pressive bulbaire ?", "A", "La zone pressive est cardio-accélératrice et vasoconstrictrice : sa stimulation augmente la FC, la force de contraction et la RPT, augmentant la PA.", ["Augmentation de la fréquence cardiaque et de la RPT", "Diminution de la fréquence cardiaque", "Vasodilatation généralisée", "Arrêt de la sécrétion de catécholamines"]),
    single("Quel est le principal mécanisme vasodilatateur au niveau central ?", "B", "L'inhibition de la zone pressive par la zone dépressive est le principal mécanisme vasodilatateur.", ["La stimulation directe des muscles lisses vasculaires", "L'inhibition de la zone pressive", "La sécrétion massive de catécholamines", "L'activation du système rénine-angiotensine"]),
    single("Qu'est-ce que le mécanisme de Frank-Starling ?", "C", "C'est l'autorégulation hétérométrique : l'étirement du sarcomère augmente le nombre de ponts actine-myosine et la sensibilité au Ca2+, augmentant la force de contraction.", ["Une régulation purement hormonale du cœur", "Un réflexe barorécepteur", "Une autorégulation liée à l'étirement du sarcomère", "Un mécanisme dépendant uniquement de la fréquence cardiaque"]),
    single("Quel est l'effet chronotrope du système sympathique cardiaque ?", "A", "Le SNS a un effet chronotrope positif, augmentant la fréquence cardiaque.", ["Chronotrope positif (augmente la FC)", "Chronotrope négatif (diminue la FC)", "Aucun effet sur la FC", "Effet variable selon l'âge uniquement"]),
    single("Quelle fréquence cardiaque intrinsèque observe-t-on après blocage complet du SNS et du SNP ?", "C", "Après blocage complet des deux systèmes, la FC intrinsèque du nœud sinusal est d'environ 100 battements/min.", ["40 bpm", "70 bpm", "100 bpm", "150 bpm"]),
    single("Quel médiateur est libéré par les fibres vagales innervant le cœur ?", "B", "Le nerf vague libère de l'acétylcholine, agissant sur les récepteurs M2 cardiaques.", ["La noradrénaline", "L'acétylcholine", "La sérotonine", "Le neuropeptide Y"]),
    single("Quel effet a une stimulation vagale intense sur la fonction cardiaque ?", "C", "Une stimulation vagale intense peut provoquer un arrêt cardiaque transitoire suivi d'un « échappement vagal » (reprise spontanée du rythme).", ["Aucun effet notable", "Une tachycardie immédiate", "Un arrêt cardiaque suivi d'un échappement vagal", "Une hypertrophie ventriculaire aiguë"]),
    single("Que déclenche le réflexe de Bainbridge ?", "A", "Le réflexe de Bainbridge, déclenché par la distension auriculaire (mécanorécepteurs), augmente la fréquence cardiaque en réponse à un volume sanguin accru.", ["Une augmentation de la fréquence cardiaque", "Une diminution de la fréquence cardiaque", "Une vasoconstriction pulmonaire", "Une inhibition de l'ANP"]),
    single("Quelle est la relation entre le réflexe de Bainbridge et le réflexe dépresseur des barorécepteurs artériels ?", "B", "Ces deux réflexes ont une relation divergente : le réflexe de Bainbridge est presseur (augmente la FC) tandis que le réflexe des barorécepteurs artériels est dépresseur (diminue la FC).", ["Ils sont synergiques, tous deux presseurs", "Ils sont divergents : l'un presseur, l'autre dépresseur", "Ils n'ont aucun lien physiologique", "Ils agissent uniquement sur les reins"]),
    multi("Quels sont les effets rénaux de l'ANP (peptide natriurétique auriculaire) ?", ["A", "B"], "L'ANP augmente le débit de filtration glomérulaire (vasodilatation afférente et vasoconstriction efférente) et diminue la réabsorption tubulaire de sodium, entraînant diurèse et natriurèse.", ["Augmentation du débit de filtration glomérulaire", "Diminution de la réabsorption tubulaire de sodium", "Stimulation du système rénine-angiotensine-aldostérone", "Vasoconstriction systémique"]),
    single("Que provoque la stimulation des barorécepteurs du sinus carotidien et de la crosse aortique lors d'une hausse de pression artérielle ?", "B", "La stimulation des barorécepteurs par l'hypertension déclenche un réflexe dépresseur : stimulation vagale (↓FC) et vasodilatation (↓RPT), ramenant la PA à la normale.", ["Un réflexe presseur augmentant la PA", "Un réflexe dépresseur diminuant la FC et la RPT", "Aucun effet sur la fréquence cardiaque", "Une stimulation directe de la médullosurrénale uniquement"]),
    single("Par quels nerfs crâniens transite la voie afférente des barorécepteurs carotidiens et aortiques ?", "C", "Le nerf IX (glosso-pharyngien) transmet les afférences du sinus carotidien, le nerf X (vague) celles de la crosse aortique.", ["III et IV", "V et VII", "IX et X", "XI et XII"]),
    single("Quel est l'effet des chémorécepteurs du sinus carotidien/crosse aortique lors d'une hypoxie ?", "A", "L'hypoxie stimule les chémorécepteurs, déclenchant un réflexe presseur (↑FC, vasoconstriction, ↑PA).", ["Un réflexe presseur (↑FC, ↑PA)", "Un réflexe dépresseur (↓FC, ↓PA)", "Aucun effet cardiovasculaire", "Une vasodilatation coronaire isolée"]),
    single("Quelle manœuvre clinique utilise le réflexe de Dagnini-Aschner ?", "B", "La compression du globe oculaire stimule des mécanorécepteurs déclenchant un réflexe dépresseur vagal (réflexe de Dagnini-Aschner), utilisé comme manœuvre vagale.", ["La manœuvre de Heimlich", "La compression oculaire", "Le test de marche de 6 minutes", "L'épreuve d'effort sur tapis roulant"]),
    single("Quel réflexe pathologique protège le cœur lors d'un infarctus, en diminuant la FC et la PA ?", "A", "Le réflexe de Bezold-Jarisch, déclenché par les chémorécepteurs cardiaques, a un effet protecteur en diminuant la FC et la PA.", ["Le réflexe de Bezold-Jarisch", "Le réflexe de Mallians", "Le réflexe de Bainbridge", "Le réflexe de Dagnini-Aschner"]),
    single("Quel effet a l'hyperthyroïdie sur la fonction cardiaque, via les hormones thyroïdiennes ?", "C", "Les hormones thyroïdiennes en excès amplifient les effets des catécholamines, provoquant tachycardie, extrasystoles et fibrillation auriculaire.", ["Bradycardie sévère", "Aucun effet cardiaque", "Tachycardie et troubles du rythme (fibrillation auriculaire)", "Arrêt cardiaque immédiat"]),
    single("Quelle structure du cervelet stimule l'activité sympathique lors des changements posturaux ?", "B", "Le noyau fastigial du cervelet inhibe l'activité parasympathique et stimule l'activité sympathique, augmentant FC et PA lors des changements de posture.", ["Le noyau dentelé", "Le noyau fastigial", "Le noyau vestibulaire", "Le noyau rouge"]),
  ],
  exam: { titre_fr: "Examen chronométré — Régulation nerveuse cardiovasculaire", duration_seconds: 1_530 },
};

export const CV_NERVOUS_REGULATION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Où se situe la zone pressive bulbaire ?", question_en: "Where is the bulbar pressor zone located?", answer_fr: "Dorso-latéralement, dans le bulbe supérieur et le tiers inférieur du pont.", answer_en: "Dorso-laterally, in the upper medulla and inferior third of the pons." },
  { question_fr: "Où se situe la zone dépressive bulbaire ?", question_en: "Where is the bulbar depressor zone located?", answer_fr: "Ventro-médianement, au même niveau que la zone pressive.", answer_en: "Ventro-medially, at the same level as the pressor zone." },
  { question_fr: "Quel noyau régule l'équilibre entre zone pressive et dépressive ?", question_en: "Which nucleus regulates the balance between pressor and depressor zones?", answer_fr: "Le noyau du tractus solitaire (NTS).", answer_en: "The nucleus tractus solitarius (NTS)." },
  { question_fr: "Quels noyaux bulbaires donnent naissance au nerf vague ?", question_en: "Which medullary nuclei give rise to the vagus nerve?", answer_fr: "Le noyau dorsal du vague et le noyau ambigu.", answer_en: "The dorsal vagus nucleus and the ambiguous nucleus." },
  { question_fr: "Quelle est la longueur normale du sarcomère cardiaque permettant une force de contraction maximale ?", question_en: "What is the normal cardiac sarcomere length allowing maximal contraction force?", answer_fr: "≈2,2 μm.", answer_en: "≈2.2 μm." },
  { question_fr: "Qu'est-ce que l'autorégulation homéométrique ?", question_en: "What is homeometric autoregulation?", answer_fr: "L'augmentation progressive de la force de contraction avec la fréquence cardiaque, à longueur de fibre constante (effet d'escalier).", answer_en: "The progressive increase in contraction force with heart rate, at constant fiber length (staircase effect)." },
  { question_fr: "D'où proviennent les fibres sympathiques pré-ganglionnaires cardiaques ?", question_en: "Where do cardiac preganglionic sympathetic fibers originate?", answer_fr: "De la moelle épinière, niveaux T1 à T5(6).", answer_en: "From the spinal cord, levels T1 to T5(6)." },
  { question_fr: "Dans quel ganglion synapsent principalement les fibres sympathiques cardiaques ?", question_en: "In which ganglion do cardiac sympathetic fibers mainly synapse?", answer_fr: "Le ganglion stellaire.", answer_en: "The stellate ganglion." },
  { question_fr: "Quels sont les 5 effets « + » du système sympathique sur le cœur ?", question_en: "What are the 5 \"+\" effects of the sympathetic system on the heart?", answer_fr: "Chronotrope +, inotrope +, tonotrope +, dromotrope +, bathmotrope +.", answer_en: "Chronotropic +, inotropic +, tonotropic +, dromotropic +, bathmotropic +." },
  { question_fr: "Quel médiateur libèrent les fibres sympathiques cardiaques ?", question_en: "Which mediator do cardiac sympathetic fibers release?", answer_fr: "La noradrénaline (et l'adrénaline, le neuropeptide Y).", answer_en: "Norepinephrine (and epinephrine, neuropeptide Y)." },
  { question_fr: "Quel est l'effet chronotrope prédominant du nerf vague ?", question_en: "What is the predominant chronotropic effect of the vagus nerve?", answer_fr: "Chronotrope négatif (diminution de la fréquence cardiaque), l'effet le plus important du vague.", answer_en: "Negative chronotropic (heart rate decrease), the most important vagal effect." },
  { question_fr: "Pourquoi le nerf vague a-t-il peu d'effet sur la contractilité ventriculaire ?", question_en: "Why does the vagus nerve have little effect on ventricular contractility?", answer_fr: "Parce qu'il innerve principalement les oreillettes, le nœud sinusal et le nœud AV, avec peu de fibres ventriculaires.", answer_en: "Because it mainly innervates the atria, sinoatrial node, and AV node, with few ventricular fibers." },
  { question_fr: "Quel médicament bloque les récepteurs muscariniques et augmente la fréquence cardiaque ?", question_en: "Which drug blocks muscarinic receptors and increases heart rate?", answer_fr: "L'atropine.", answer_en: "Atropine." },
  { question_fr: "Quels types de mécanorécepteurs auriculaires stimulent le SNS pendant la systole auriculaire ?", question_en: "Which type of atrial mechanoreceptors stimulate the SNS during atrial systole?", answer_fr: "Les mécanorécepteurs de type A.", answer_en: "Type A mechanoreceptors." },
  { question_fr: "Quel effet l'augmentation de la pression auriculaire gauche a-t-elle sur l'ADH ?", question_en: "What effect does increased left atrial pressure have on ADH?", answer_fr: "Elle inhibe la sécrétion d'ADH, favorisant la diurèse.", answer_en: "It inhibits ADH secretion, promoting diuresis." },
  { question_fr: "Quels facteurs stimulent la sécrétion d'ANP ?", question_en: "Which factors stimulate ANP secretion?", answer_fr: "L'augmentation de la volémie, de la [Na+] plasmatique, de la fréquence cardiaque, et l'angiotensine II.", answer_en: "Increased blood volume, plasma [Na+], heart rate, and angiotensin II." },
  { question_fr: "Quel est l'effet de l'ANP sur l'artériole afférente et efférente du glomérule ?", question_en: "What is the effect of ANP on the afferent and efferent glomerular arterioles?", answer_fr: "Vasodilatation de l'afférente et vasoconstriction de l'efférente, augmentant le débit de filtration glomérulaire.", answer_en: "Vasodilation of the afferent and vasoconstriction of the efferent arteriole, increasing glomerular filtration rate." },
  { question_fr: "Quel test évalue la syncope vaso-vagale par changement de position ?", question_en: "Which test evaluates vaso-vagal syncope via positional change?", answer_fr: "Le tilt-test.", answer_en: "The tilt-test." },
  { question_fr: "Quel réflexe cardiaque pathologique aggrave la fréquence cardiaque et la pression artérielle lors d'un infarctus ?", question_en: "Which pathological cardiac reflex worsens heart rate and blood pressure during infarction?", answer_fr: "Le réflexe de Mallians.", answer_en: "The Mallians reflex." },
  { question_fr: "Par quels nerfs crâniens transite la voie afférente des barorécepteurs artériels ?", question_en: "Which cranial nerves carry the afferent pathway of arterial baroreceptors?", answer_fr: "Le nerf IX (glosso-pharyngien, sinus carotidien) et le nerf X (vague, crosse aortique).", answer_en: "Cranial nerve IX (glossopharyngeal, carotid sinus) and nerve X (vagus, aortic arch)." },
  { question_fr: "Quels barorécepteurs sont les plus sensibles, ceux du sinus carotidien ou de la crosse aortique ?", question_en: "Which baroreceptors are more sensitive, carotid sinus or aortic arch?", answer_fr: "Ceux du sinus carotidien.", answer_en: "Those of the carotid sinus." },
  { question_fr: "Quel effet a l'hypertension chronique sur la sensibilité des barorécepteurs ?", question_en: "What effect does chronic hypertension have on baroreceptor sensitivity?", answer_fr: "Elle la diminue, par recalibrage (« resetting ») du seuil de réponse.", answer_en: "It decreases it, via baroreceptor \"resetting\" of the response threshold." },
  { question_fr: "Quels stimuli déclenchent le réflexe presseur des chémorécepteurs carotidiens/aortiques ?", question_en: "Which stimuli trigger the pressor reflex of carotid/aortic chemoreceptors?", answer_fr: "La baisse de PO2, l'augmentation de PCO2 et de H+.", answer_en: "Decreased PO2, increased PCO2 and H+." },
  { question_fr: "Quel réflexe la compression du globe oculaire déclenche-t-elle ?", question_en: "Which reflex does eyeball compression trigger?", answer_fr: "Le réflexe cardio-vasculaire dépresseur de Dagnini-Aschner.", answer_en: "The Dagnini-Aschner cardiovascular depressor reflex." },
  { question_fr: "Quel effet ont les émotions agréables sur le tonus vasculaire ?", question_en: "What effect do pleasant emotions have on vascular tone?", answer_fr: "Un effet vasodilatateur (dépresseur), via activation du système nerveux central.", answer_en: "A vasodilatory (depressor) effect, via central nervous system activation." },
  { question_fr: "Quel médiateur induit la vasodilatation cutanée pendant la transpiration ?", question_en: "Which mediator induces cutaneous vasodilation during sweating?", answer_fr: "La bradykinine (les vaisseaux cutanés n'ont pas de tonus parasympathique).", answer_en: "Bradykinin (skin vessels lack parasympathetic tone)." },
  { question_fr: "Quel effet a l'hypothalamus antérieur sur la fonction cardiovasculaire ?", question_en: "What effect does the anterior hypothalamus have on cardiovascular function?", answer_fr: "Il stimule la zone dépressive (neurones parasympathiques), diminuant la FC et induisant une vasodilatation, notamment en réponse à la chaleur.", answer_en: "It stimulates the depressor zone (parasympathetic neurons), decreasing HR and inducing vasodilation, particularly in response to heat." },
  { question_fr: "Quel effet a l'hypothalamus postérieur sur la fonction cardiovasculaire ?", question_en: "What effect does the posterior hypothalamus have on cardiovascular function?", answer_fr: "Il stimule la zone pressive (neurones sympathiques), augmentant la FC et induisant une vasoconstriction, notamment en réponse au froid.", answer_en: "It stimulates the pressor zone (sympathetic neurons), increasing HR and inducing vasoconstriction, particularly in response to cold." },
  { question_fr: "Quel effet a la colère sur le tonus vasculaire, via le cortex ?", question_en: "What effect does anger have on vascular tone, via the cortex?", answer_fr: "Un effet presseur (vasoconstriction).", answer_en: "A pressor effect (vasoconstriction)." }
];

const CV_REGULATION_2_COURSE = `# Physiologie cardiovasculaire — Lecture 8 : régulation cardiovasculaire (2) — autorégulation, endothélium et adaptation à l'effort

## 1. Autorégulation myogénique
- Capacité des vaisseaux à maintenir un débit local constant si les besoins métaboliques sont stables, malgré des variations de la PA systémique (dans certaines limites).
- Mécanisme : ↑PA → étirement du muscle lisse vasculaire → ouverture de canaux Ca²⁺ → ↑Ca²⁺ intracellulaire → **vasoconstriction** artériolaire → débit constant. Inversement, ↓PA → cessation de l'étirement → fermeture des canaux Ca²⁺ → **vasodilatation** → débit constant.
- Particulièrement importante dans le cerveau (débit constant pour PA entre 50-150 mmHg, protège l'équilibre contenu/boîte crânienne inextensible) et le rein (débit constant pour PA entre 80-180 mmHg, maintient un DFG constant ≈120±15 mL/min).
- Hors de ces limites : PA très basse → collapsus vasculaire → ischémie ; PA très élevée → dilatation vasculaire excessive → œdème.

## 2. Régulation endothéliale
- L'endothélium n'est pas qu'une barrière mécanique : c'est un tissu dynamique qui sécrète des facteurs vasodilatateurs et vasoconstricteurs (normalement en équilibre), des facteurs pro/anti-agrégants, contrôle l'adhésion leucocytaire et la mitogenèse.

### 2.1 Facteurs vasodilatateurs endothéliaux
- **Prostacycline (PGI₂)** : dérivée de l'acide arachidonique via la cyclo-oxygénase (COX1/COX2) ; synthèse stimulée par le « shear stress » (friction sang-endothélium, ↑vitesse, ↑viscosité) ; mécanisme via AMPc → relaxation du muscle lisse ; rôle : VD locale + antiagrégant plaquettaire.
- **Monoxyde d'azote (NO, EDRF)** : dérivé de la L-arginine, sous l'action de stimuli chimiques (acétylcholine, bradykinine, sérotonine, histamine) et mécaniques (shear stress) ; mécanisme via GMPc → relaxation musculaire lisse, effet local puissant ; la suppression mécanique de l'endothélium abolit la réponse VD ; dépend aussi de la PO₂ (↓débit → ↓PO₂ → ↓NO ; ↑débit → ↑PO₂ → ↑NO puis retour à la normale).

### 2.2 Facteurs vasoconstricteurs endothéliaux
- **Thromboxane A₂ (TxA₂)** : dérivé de l'acide arachidonique via COX-1 ; stimulé par le shear stress ; mécanisme via IP₃/DAG → contraction ; rôle : VC + agrégation plaquettaire (favorise la thrombose) ; impliqué dans l'infarctus et l'hypertension en contexte pathologique (athérosclérose).
- **Endothéline (ET, EDCF)** : produite à partir de la pré-pro-endothéline (surtout ET-1) ; stimulée par angiotensine II, ADH, noradrénaline, facteurs de croissance, cytokines, froid ; inhibée par shear stress, NO, PGI₂ ; mécanisme via récepteurs ETA/ETB2 (muscle lisse, IP3/DAG → VC) ou ETB1 (endothélium → libère NO/PGI2 → VD) ; VC puissante, plus forte que le neuropeptide Y ; rôle pro-inflammatoire (prolifération du muscle lisse, recrutement leucocytaire).
- **Dysfonction endothéliale** : déséquilibre en faveur des facteurs VC (ET, TxA2, angiotensine II, ROS) et pro-thrombotiques, précurseur de nombreuses pathologies cardiovasculaires (athérosclérose, HTA, ischémie myocardique, insuffisance rénale).

## 3. Régulation métabolique du débit sanguin
- **Hyperémie active** : vasodilatation locale dans les tissus actifs, due à la libération de métabolites (adénosine, H⁺, K⁺, PCO₂) → ↑débit local.
- **Hyperémie réactive** : après une occlusion vasculaire transitoire, le débit augmente proportionnellement à la durée de l'occlusion puis revient lentement à la normale (« paiement de la dette d'O₂ »).
- **Facteurs métaboliques principaux** :
  - **PO₂** : ↓PO₂ → VD (directe et via métabolites comme l'adénosine et l'acide lactique).
  - **Adénosine** : synthétisée par dégradation de l'ATP en hypoxie (ATP→ADP→AMP→adénosine), agit sur les récepteurs purinergiques → VD, ↑débit local, ↑apport d'O₂ ; sa dégradation est régulée par rétrocontrôle (lavage par le débit, inactivation).
  - Autres : acide lactique/H⁺, CO₂, K⁺, phosphate organique, osmolarité, prostaglandines — action synergique, aucun facteur seul ne suffit.
- Dans l'athérosclérose, la capacité de vasodilatation est réduite : malgré l'augmentation des métabolites lors d'un effort accru, le débit ne peut augmenter suffisamment → ischémie (angine de poitrine cardiaque, claudication intermittente des membres inférieurs).

## 4. Régulation humorale — facteurs vasoconstricteurs
- **Catécholamines** (adrénaline/noradrénaline, médullosurrénale) : effets faibles au repos, majeurs en stress ; courte durée d'action (dégradation par la MAO). NA : α-vasculaire (VC, ↑RPT) + β1-cardiaque (↑FC, ↑force). A : effets α/β1 similaires + β2 (VD locale coronaire/musculaire/cérébrale) + ↑MVO2.
- **Dopamine** : précurseur de la NA, effet α vasoconstricteur sans changement net de la RPT, effet β1 chronotrope/inotrope +.
- **Neuropeptide Y (NPY)** : co-libéré avec la NA, VC puissante et prolongée.
- **Système rénine-angiotensine-aldostérone (SRAA)** : rénine (appareil juxtaglomérulaire) libérée si ↓PA, ↓volémie, ↑[Na⁺] plasmatique, stimulation SNS/catécholamines → angiotensinogène → angiotensine I → **angiotensine II** (enzyme de conversion, ECA) : VC systémique la plus puissante (↑RPT↑PA), VC rénale préférentielle de l'artériole efférente (à faible dose, DFG stable ; à forte dose, ↓DFG), stimule l'ADH et l'aldostérone. Les inhibiteurs de l'ECA (IEC) bloquent aussi la dégradation de la bradykinine (VD), expliquant certains effets secondaires (toux).
- **ADH (vasopressine)** : effet VC seulement à fortes doses ; rôle principal = réabsorption d'eau rénale (maintien de l'osmolarité et de la volémie).
- **Hormones thyroïdiennes** : amplifient l'effet des catécholamines ; au froid, ↑T3/T4 → VC.
- **Aldostérone** : pas d'effet vasculaire direct ; effet indirect via ↑sensibilité aux agents vasoconstricteurs (rétention hydrosodée endothéliale).
- **TxA2 et endothéline** : cf. section 2.2.

## 5. Régulation humorale — facteurs vasodilatateurs
- **Acétylcholine** : VD indirecte via synthèse de NO endothélial.
- **Métabolites locaux** : adénosine, H⁺, PCO₂, ↓PO₂, chaleur locale — rôle majeur dans la microcirculation.
- **Prostaglandines** : dérivées des phospholipides membranaires ; action locale (inactivation rapide en circulation) ; VD + antiagrégant.
- **NO (EDRF)** : cf. section 2.1.
- **Histamine** : synthétisée par décarboxylation de l'histidine (mastocytes, basophiles surtout) ; libérée par stimuli immuns (allergie — IgE) ou non immuns (effort, froid, médicaments) ; récepteurs H1 (vasculaires, prédominants) → NO → VD + perméabilité vasculaire (œdème local) ; libération massive → choc anaphylactique.
- **Sérotonine** : dérivée du tryptophane ; récepteurs 5-HT1 (VD physiologique prédominante, via NO/PGI2) vs 5-HT2 (VC en pathologie — athérosclérose, HTA chronique) ; les triptans (agonistes 5-HT1) sont utilisés dans la migraine (VC cérébrale).
- **Kinines (bradykinine)** : issues du kininogène par la kallikréine ; VD artériolaire forte mais brève (via NO/PGI2), VC veinulaire, ↑perméabilité capillaire ; rôle pro-inflammatoire ; les bloqueurs des récepteurs B2 (icatibant) traitent l'angio-œdème héréditaire.
- **ANP** : cf. Lecture 7 — rôle vasodilatateur et natriurétique.

## 6. Régulation de la pression artérielle
- **Mécanisme presseur** : nerveux (réflexe presseur — barorécepteurs en ↓PA, chémorécepteurs, thermorécepteurs au froid, stress cortical) + humoral (facteurs VC).
- **Mécanisme dépresseur** : nerveux (réflexe dépresseur — barorécepteurs en ↑PA, chémorécepteurs, thermorécepteurs au chaud, émotions agréables) + humoral (facteurs VD).

## 7. Adaptation cardiovasculaire à l'effort
- **Commande centrale (anticipation)** : le cortex anticipe l'effort → activation sympathique précoce → ↑FC, ↑DC, vasoconstriction anticipatrice (sauf territoire musculaire).
- **Réflexe des muscles actifs** : mécanorécepteurs (étirement) et chémorécepteurs (métabolites) musculaires → activation sympathique supplémentaire.
- **Réflexe barorécepteur** : recalibré à l'effort pour permettre une PA plus élevée.
- **Régulation métabolique locale** : dans les muscles actifs, vasodilatation par PO₂, PCO₂, adénosine, K⁺, H⁺, acide lactique — malgré l'activation sympathique générale, la vasodilatation métabolique locale prédomine dans le muscle en activité.
- Effet global : ↑FC, ↑DC (jusqu'à ×5-7), redistribution du débit vers les muscles actifs, le cœur et le cerveau, au détriment du territoire splanchnique et cutané (sauf besoin thermorégulateur).`;

export const CV_REGULATION_2_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Régulation cardiovasculaire (2) : autorégulation et endothélium",
    source_label: "Physiologie cardiovasculaire — Lecture 8",
    content_fr: CV_REGULATION_2_COURSE,
  },
  qcm: [
    single("Quel est le mécanisme cellulaire de l'autorégulation myogénique lors d'une augmentation de la pression artérielle ?", "B", "L'étirement du muscle lisse vasculaire ouvre des canaux calciques, augmentant le Ca2+ intracellulaire et provoquant une vasoconstriction qui maintient le débit constant.", ["Fermeture des canaux potassiques", "Ouverture des canaux calciques et vasoconstriction", "Libération massive d'histamine", "Activation directe du système rénine-angiotensine"]),
    single("Dans quelle plage de pression artérielle le débit sanguin cérébral reste-t-il constant par autorégulation myogénique ?", "C", "Le débit cérébral reste constant pour des PA comprises entre 50 et 150 mmHg environ.", ["10-50 mmHg", "30-80 mmHg", "50-150 mmHg", "150-250 mmHg"]),
    single("Par quelle voie enzymatique la prostacycline (PGI2) est-elle synthétisée dans l'endothélium ?", "A", "La PGI2 est dérivée de l'acide arachidonique via la cyclo-oxygénase (COX) puis la PGI2-synthétase.", ["La cyclo-oxygénase (COX)", "La NO-synthase", "L'enzyme de conversion de l'angiotensine", "La monoamine oxydase"]),
    single("Quel second messager intracellulaire médie l'effet vasodilatateur du monoxyde d'azote (NO) ?", "B", "Le NO agit via la synthèse de GMPc, entraînant la relaxation du muscle lisse vasculaire.", ["L'AMPc", "Le GMPc", "L'IP3", "Le calcium extracellulaire"]),
    single("Que se passe-t-il en cas de suppression mécanique de l'endothélium vasculaire concernant la réponse vasodilatatrice au NO ?", "C", "Sans endothélium, il n'y a plus de synthèse de NO, donc plus de réponse vasodilatatrice aux stimuli chimiques et mécaniques.", ["La réponse vasodilatatrice est amplifiée", "Aucun changement n'est observé", "La réponse vasodilatatrice disparaît", "Seule la réponse mécanique persiste"]),
    single("Par quelle voie le thromboxane A2 (TxA2) est-il synthétisé ?", "A", "Le TxA2 est produit à partir de l'acide arachidonique via la cyclo-oxygénase-1 (COX-1) et la thromboxane-synthase.", ["Cyclo-oxygénase-1 et thromboxane-synthase", "NO-synthase", "Enzyme de conversion de l'angiotensine", "Kallikréine"]),
    single("Quel est l'effet principal de l'endothéline (ET-1) sur le muscle lisse vasculaire ?", "B", "L'endothéline-1, via les récepteurs ETA et ETB2, provoque une vasoconstriction puissante, plus forte que le neuropeptide Y.", ["Vasodilatation puissante", "Vasoconstriction puissante", "Aucun effet vasculaire", "Effet uniquement sur le cœur"]),
    single("Qu'est-ce que caractérise la dysfonction endothéliale ?", "C", "La dysfonction endothéliale se caractérise par un déséquilibre en faveur des facteurs vasoconstricteurs et pro-thrombotiques par rapport aux facteurs protecteurs.", ["Un excès isolé de NO", "Une absence totale de sécrétion endothéliale", "Un déséquilibre en faveur des facteurs vasoconstricteurs et pro-thrombotiques", "Une hyperactivité exclusivement vasodilatatrice"]),
    single("Qu'est-ce que l'hyperémie réactive ?", "A", "L'hyperémie réactive est l'augmentation du débit sanguin après la levée d'une occlusion vasculaire transitoire, proportionnelle à la durée de l'occlusion.", ["L'augmentation du débit après la levée d'une occlusion vasculaire", "La vasodilatation permanente d'un tissu actif", "Une réaction allergique cutanée", "Un réflexe barorécepteur"]),
    single("Quel est le métabolite le plus important de la régulation métabolique du débit local ?", "C", "L'adénosine, produite par dégradation de l'ATP en hypoxie, est le métabolite vasodilatateur le plus important.", ["Le glucose", "L'histamine", "L'adénosine", "L'aldostérone"]),
    single("Quel est l'effet de l'angiotensine II sur l'artériole efférente rénale à faible dose ?", "A", "À faible dose, l'angiotensine II vasoconstricte préférentiellement l'artériole efférente, maintenant le débit de filtration glomérulaire constant.", ["Vasoconstriction préférentielle, DFG maintenu constant", "Vasodilatation complète, DFG augmenté", "Aucun effet rénal", "Vasoconstriction de l'artériole afférente uniquement"]),
    single("Quel est l'effet secondaire classique des inhibiteurs de l'enzyme de conversion (IEC), lié à l'accumulation de bradykinine ?", "B", "En bloquant l'ECA, les IEC empêchent aussi la dégradation de la bradykinine, ce qui peut provoquer une toux sèche caractéristique.", ["Une hypertension paradoxale", "Une toux sèche", "Une hyperglycémie", "Une bradycardie sévère"]),
    single("Par quel mécanisme l'acétylcholine produit-elle une vasodilatation ?", "B", "L'acétylcholine agit indirectement en stimulant la synthèse endothéliale de NO.", ["Effet vasodilatateur direct sur le muscle lisse", "Stimulation indirecte via la synthèse de NO endothélial", "Blocage des récepteurs alpha-adrénergiques", "Inhibition de la prostacycline"]),
    single("Quel type de récepteur histaminique prédomine au niveau vasculaire ?", "A", "Les récepteurs H1, présents sur les cellules endothéliales, prédominent au niveau vasculaire et induisent la vasodilatation via le NO.", ["H1", "H2", "H3", "H4"]),
    single("Quelle est la principale utilisation clinique des agonistes des récepteurs 5-HT1 de la sérotonine (triptans) ?", "C", "Les triptans, agonistes 5-HT1, sont utilisés dans le traitement de la migraine par leur effet vasoconstricteur cérébral.", ["Le traitement de l'hypertension chronique", "Le traitement de l'insuffisance cardiaque", "Le traitement de la migraine", "Le traitement de l'asthme"]),
    multi("Quels sont les mécanismes d'adaptation cardiovasculaire à l'effort physique ?", ["A", "B", "C"], "L'adaptation à l'effort combine la commande centrale anticipatrice, les réflexes des muscles actifs (mécano/chémorécepteurs) et la vasodilatation métabolique locale dans les muscles actifs.", ["La commande centrale anticipatrice (cortex)", "Les réflexes des muscles actifs", "La vasodilatation métabolique locale musculaire", "L'arrêt complet de l'activité sympathique"]),
    single("Vers quels territoires le débit sanguin est-il redistribué lors d'un effort intense ?", "B", "Le débit est redistribué vers les muscles actifs, le cœur et le cerveau, au détriment des territoires splanchnique et cutané.", ["Vers le territoire splanchnique exclusivement", "Vers les muscles actifs, le cœur et le cerveau", "Vers la peau exclusivement", "De façon uniforme dans tout l'organisme"]),
  ],
  exam: { titre_fr: "Examen chronométré — Régulation cardiovasculaire (2)", duration_seconds: 1_360 },
};

export const CV_REGULATION_2_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Qu'est-ce que l'autorégulation myogénique ?", question_en: "What is myogenic autoregulation?", answer_fr: "La capacité des vaisseaux à maintenir un débit local constant malgré des variations de la pression artérielle systémique.", answer_en: "The capacity of vessels to maintain a constant local blood flow despite variations in systemic blood pressure." },
  { question_fr: "Quel ion intervient directement dans le mécanisme myogénique de vasoconstriction ?", question_en: "Which ion is directly involved in the myogenic vasoconstriction mechanism?", answer_fr: "Le calcium (Ca2+), dont l'influx augmente lors de l'étirement du muscle lisse.", answer_en: "Calcium (Ca2+), whose influx increases upon smooth muscle stretch." },
  { question_fr: "Dans quelle plage de PA le débit sanguin rénal reste-t-il constant par autorégulation ?", question_en: "Within what BP range does renal blood flow remain constant by autoregulation?", answer_fr: "Entre 80 et 180 mmHg.", answer_en: "Between 80 and 180 mmHg." },
  { question_fr: "Que produit l'endothélium vasculaire en plus des facteurs vasomoteurs ?", question_en: "What does vascular endothelium produce besides vasomotor factors?", answer_fr: "Des facteurs pro- et anti-agrégants plaquettaires, et contrôle l'adhésion leucocytaire.", answer_en: "Pro- and anti-platelet aggregation factors, and controls leukocyte adhesion." },
  { question_fr: "Quel est le précurseur de la prostacycline (PGI2) et du thromboxane A2 ?", question_en: "What is the precursor of prostacyclin (PGI2) and thromboxane A2?", answer_fr: "L'acide arachidonique.", answer_en: "Arachidonic acid." },
  { question_fr: "Quel stimulus principal déclenche la synthèse de PGI2 par l'endothélium ?", question_en: "What is the main stimulus triggering endothelial PGI2 synthesis?", answer_fr: "Le « shear stress » (friction du flux sanguin sur l'endothélium).", answer_en: "\"Shear stress\" (friction of blood flow on the endothelium)." },
  { question_fr: "De quel acide aminé dérive le monoxyde d'azote (NO) ?", question_en: "From which amino acid is nitric oxide (NO) derived?", answer_fr: "La L-arginine.", answer_en: "L-arginine." },
  { question_fr: "Quel est l'autre nom du monoxyde d'azote en tant que facteur endothélial ?", question_en: "What is the other name for nitric oxide as an endothelial factor?", answer_fr: "EDRF (endothelium-derived relaxing factor).", answer_en: "EDRF (endothelium-derived relaxing factor)." },
  { question_fr: "Quel est l'effet d'une baisse de PO2 sur la synthèse de NO et le calibre vasculaire ?", question_en: "What is the effect of decreased PO2 on NO synthesis and vessel caliber?", answer_fr: "Elle stimule la synthèse de NO, induisant une vasodilatation.", answer_en: "It stimulates NO synthesis, inducing vasodilation." },
  { question_fr: "Quel est l'autre nom de l'endothéline en tant que facteur endothélial ?", question_en: "What is the other name for endothelin as an endothelial factor?", answer_fr: "EDCF (endothelium-derived constricting factor).", answer_en: "EDCF (endothelium-derived constricting factor)." },
  { question_fr: "Quelle isoforme d'endothéline est la principale produite par l'endothélium ?", question_en: "Which endothelin isoform is the main one produced by the endothelium?", answer_fr: "L'endothéline-1 (ET-1).", answer_en: "Endothelin-1 (ET-1)." },
  { question_fr: "Quel effet a la stimulation des récepteurs ETB1 endothéliaux par l'endothéline ?", question_en: "What effect does endothelin stimulation of endothelial ETB1 receptors have?", answer_fr: "Libération de NO et de PGI2, entraînant une vasodilatation.", answer_en: "Release of NO and PGI2, leading to vasodilation." },
  { question_fr: "Qu'est-ce que l'hyperémie active ?", question_en: "What is active hyperemia?", answer_fr: "La vasodilatation locale et l'augmentation du débit sanguin dans un tissu métaboliquement actif.", answer_en: "Local vasodilation and increased blood flow in a metabolically active tissue." },
  { question_fr: "Comment est synthétisée l'adénosine dans les tissus en hypoxie ?", question_en: "How is adenosine synthesized in hypoxic tissues?", answer_fr: "Par dégradation de l'ATP : ATP → ADP → AMP → adénosine.", answer_en: "By ATP breakdown: ATP → ADP → AMP → adenosine." },
  { question_fr: "Sur quel type de récepteur agit l'adénosine pour induire la vasodilatation ?", question_en: "On which receptor type does adenosine act to induce vasodilation?", answer_fr: "Les récepteurs purinergiques du muscle lisse vasculaire.", answer_en: "Purinergic receptors on vascular smooth muscle." },
  { question_fr: "Quelle enzyme sécrète l'appareil juxtaglomérulaire pour activer le SRAA ?", question_en: "Which enzyme does the juxtaglomerular apparatus secrete to activate the RAAS?", answer_fr: "La rénine.", answer_en: "Renin." },
  { question_fr: "Quelle est la principale substance vasoconstrictrice systémique du SRAA ?", question_en: "What is the main systemic vasoconstrictor substance of the RAAS?", answer_fr: "L'angiotensine II.", answer_en: "Angiotensin II." },
  { question_fr: "Où est synthétisé l'angiotensinogène ?", question_en: "Where is angiotensinogen synthesized?", answer_fr: "Dans le foie.", answer_en: "In the liver." },
  { question_fr: "Quel effet a l'angiotensine II sur la sécrétion d'aldostérone et d'ADH ?", question_en: "What effect does angiotensin II have on aldosterone and ADH secretion?", answer_fr: "Elle stimule leur sécrétion.", answer_en: "It stimulates their secretion." },
  { question_fr: "Quel effet vasculaire l'ADH a-t-elle, et à quelle condition ?", question_en: "What vascular effect does ADH have, and under what condition?", answer_fr: "Un effet vasoconstricteur, mais seulement à des doses supérieures à l'usuel.", answer_en: "A vasoconstrictive effect, but only at higher-than-usual doses." },
  { question_fr: "Quel est l'effet indirect de l'aldostérone sur le tonus vasculaire ?", question_en: "What is the indirect effect of aldosterone on vascular tone?", answer_fr: "Elle augmente la sensibilité vasculaire aux agents vasoconstricteurs, via la rétention hydrosodée endothéliale.", answer_en: "It increases vascular sensitivity to vasoconstrictor agents, via endothelial sodium/water retention." },
  { question_fr: "Comment est synthétisée l'histamine ?", question_en: "How is histamine synthesized?", answer_fr: "Par décarboxylation de l'histidine.", answer_en: "By decarboxylation of histidine." },
  { question_fr: "Quel type de récepteur histaminique prédomine sur l'endothélium vasculaire ?", question_en: "Which histamine receptor type predominates on vascular endothelium?", answer_fr: "Les récepteurs H1.", answer_en: "H1 receptors." },
  { question_fr: "Quelle est la conséquence d'une libération massive d'histamine ?", question_en: "What is the consequence of massive histamine release?", answer_fr: "Un choc anaphylactique.", answer_en: "Anaphylactic shock." },
  { question_fr: "De quel acide aminé dérive la sérotonine ?", question_en: "From which amino acid is serotonin derived?", answer_fr: "Le tryptophane.", answer_en: "Tryptophan." },
  { question_fr: "Quel effet ont les récepteurs 5-HT1 de la sérotonine sous conditions physiologiques ?", question_en: "What effect do 5-HT1 serotonin receptors have under physiological conditions?", answer_fr: "Un effet vasodilatateur prédominant, via libération de NO et PGI2.", answer_en: "A predominant vasodilatory effect, via NO and PGI2 release." },
  { question_fr: "Comment sont générées les kinines (bradykinine) ?", question_en: "How are kinins (bradykinin) generated?", answer_fr: "Par dégradation du kininogène de haut poids moléculaire sous l'action de la kallikréine.", answer_en: "By degradation of high-molecular-weight kininogen under the action of kallikrein." },
  { question_fr: "Quel médicament bloque les récepteurs B2 de la bradykinine, utilisé dans l'angio-œdème héréditaire ?", question_en: "Which drug blocks bradykinin B2 receptors, used in hereditary angioedema?", answer_fr: "L'icatibant.", answer_en: "Icatibant." },
  { question_fr: "Quels sont les deux composants du mécanisme presseur de régulation de la PA ?", question_en: "What are the two components of the pressor blood pressure regulation mechanism?", answer_fr: "Un composant nerveux (réflexe presseur) et un composant humoral (facteurs vasoconstricteurs).", answer_en: "A nervous component (pressor reflex) and a humoral component (vasoconstrictor factors)." },
  { question_fr: "Qu'est-ce que la « commande centrale » dans l'adaptation cardiovasculaire à l'effort ?", question_en: "What is \"central command\" in cardiovascular adaptation to exercise?", answer_fr: "L'activation sympathique anticipatrice initiée par le cortex avant même le début de l'effort.", answer_en: "The anticipatory sympathetic activation initiated by the cortex even before exercise begins." },
  { question_fr: "Quel mécanisme prédomine localement dans le muscle actif pendant l'effort, malgré l'activation sympathique générale ?", question_en: "Which mechanism predominates locally in active muscle during exercise, despite general sympathetic activation?", answer_fr: "La vasodilatation métabolique locale (adénosine, K+, H+, acide lactique, PCO2).", answer_en: "Local metabolic vasodilation (adenosine, K+, H+, lactic acid, PCO2)." },
  { question_fr: "De combien de fois le débit cardiaque peut-il augmenter lors d'un effort intense ?", question_en: "By how many times can cardiac output increase during intense exercise?", answer_fr: "Jusqu'à 5 à 7 fois.", answer_en: "Up to 5 to 7 times." }
];
