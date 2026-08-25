import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const METABOLIC_MAP_CARBS_COURSE = `# Carte métabolique — Glucides

## 1. Vue d'ensemble intégrée
- Cette carte relie **glycolyse**, **cycle de Krebs**, **chaîne respiratoire**, **glycogénogenèse/glycogénolyse**, **néoglucogenèse** et **voie des pentoses phosphates** en un réseau cohérent centré sur le glucose et le glucose-6-phosphate.

## 2. Le glucose-6-phosphate, carrefour central
- **Glycolyse** → pyruvate, ATP, NADH.
- **Glycogénogenèse** → stockage, via glucose-1-phosphate.
- **Voie des pentoses phosphates** → NADPH, ribose-5-phosphate.
- Le glucose libre entre dans ce carrefour via l'hexokinase/glucokinase ; seuls le foie et le rein, possédant la **glucose-6-phosphatase**, peuvent en ressortir vers le glucose libre sanguin.

## 3. Le pyruvate, second carrefour
- Vers l'**acétyl-CoA** (complexe pyruvate déshydrogénase, irréversible) → cycle de Krebs → chaîne respiratoire → ATP.
- Vers le **lactate** (lactate déshydrogénase, anaérobiose).
- Vers l'**alanine** (transamination).
- Depuis les précurseurs néoglucogéniques (lactate, alanine), via la **pyruvate carboxylase**, en sens inverse.

## 4. États physiologiques et bascules hormonales
- **État nourri** (insuline↑) : glycolyse et glycogénogenèse hépatique/musculaire actives ; néoglucogenèse et glycogénolyse inhibées.
- **Jeûne court** (glucagon↑) : glycogénolyse hépatique active ; glycolyse hépatique freinée.
- **Jeûne prolongé** : le glycogène hépatique s'épuise (~24h), la néoglucogenèse devient la source principale de glucose (lactate, alanine, glycérol) ; le cerveau bascule progressivement vers les corps cétoniques.
- **Effort musculaire intense** : glycogénolyse et glycolyse anaérobie musculaires activées par le Ca²⁺ et l'AMP, indépendamment des hormones circulantes.

## 5. Régulateurs croisés clés (synthèse)
- **Fructose-2,6-bisphosphate** : active la PFK-1 (glycolyse), inhibe la FBPase-1 (néoglucogenèse) — bascule unique contrôlée par le rapport glucagon/insuline.
- **Acétyl-CoA** : inhibe le complexe PDH, active la pyruvate carboxylase — épargne le pyruvate pour la néoglucogenèse quand les acides gras sont abondants.

## Points à retenir
- Le glucose-6-phosphate et le pyruvate sont les deux carrefours centraux du métabolisme glucidique.
- Le rapport glucagon/insuline (via le F2,6BP) bascule l'ensemble du métabolisme glucidique entre mode « stockage/utilisation » et mode « production/épargne ».
- Le cerveau et les érythrocytes, tissus glucodépendants prioritaires, sont protégés par la hiérarchie glycogène → néoglucogenèse → cétogenèse.`;

export const METABOLIC_MAP_CARBS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Carte métabolique : glucides",
    source_label: "Synthèse — Metabolism: Metabolic Map (Carbohydrates) (Ninja Nerd)",
    content_fr: METABOLIC_MAP_CARBS_COURSE,
  },
  qcm: [
    single("Quel métabolite est considéré comme le premier carrefour central du métabolisme glucidique ?", "B", "Le glucose-6-phosphate est le carrefour reliant glycolyse, glycogénogenèse et voie des pentoses phosphates.", ["Le pyruvate", "Le glucose-6-phosphate", "L'acétyl-CoA", "Le citrate"]),
    single("Quel métabolite est considéré comme le second carrefour central du métabolisme glucidique ?", "C", "Le pyruvate relie glycolyse, cycle de Krebs (via acétyl-CoA), lactate et alanine.", ["Le glycogène", "Le ribose-5-phosphate", "Le pyruvate", "Le glycérol"]),
    single("Quels organes possèdent la glucose-6-phosphatase, permettant la sortie du glucose libre vers le sang ?", "A", "Seuls le foie et le rein possèdent cette enzyme.", ["Le foie et le rein", "Le muscle et le foie", "Le cerveau et le muscle", "Tous les tissus"]),
    single("Quel effet le rapport glucagon/insuline élevé a-t-il globalement sur le métabolisme glucidique hépatique ?", "D", "Il bascule le métabolisme vers la production/épargne de glucose (néoglucogenèse, glycogénolyse) plutôt que son stockage/utilisation.", ["Il stimule la glycogénogenèse", "Il stimule la glycolyse hépatique", "Il n'a aucun effet global", "Il bascule vers la production/épargne de glucose"]),
    single("Quel métabolite bascule simultanément la PFK-1 et la FBPase-1 en sens opposés ?", "B", "Le fructose-2,6-bisphosphate active la PFK-1 et inhibe la FBPase-1.", ["Le citrate", "Le fructose-2,6-bisphosphate", "L'ATP", "Le NADH"]),
    single("Que se passe-t-il pour le glucose sanguin après environ 24h de jeûne ?", "A", "Le glycogène hépatique s'épuise, et la néoglucogenèse devient la source principale de glucose.", ["Le glycogène hépatique s'épuise et la néoglucogenèse devient prépondérante", "Le glycogène musculaire est libéré dans le sang", "La glycémie reste stable indéfiniment sans autre mécanisme", "Le cerveau cesse totalement d'utiliser du glucose"]),
    single("Quel signal active la glycogénolyse musculaire indépendamment des hormones circulantes ?", "C", "Le Ca2+ (contraction) et l'AMP (faible charge énergétique) activent directement la glycogénolyse musculaire.", ["Le glucagon uniquement", "L'insuline uniquement", "Le Ca2+ et l'AMP", "Le cortisol uniquement"]),
    single("Quel double effet l'acétyl-CoA a-t-il sur le devenir du pyruvate en situation de jeûne ?", "B", "Il inhibe le complexe PDH et active la pyruvate carboxylase, orientant le pyruvate vers la néoglucogenèse.", ["Il active le complexe PDH uniquement", "Il inhibe le complexe PDH et active la pyruvate carboxylase", "Il n'a aucun effet sur le pyruvate", "Il inhibe la pyruvate carboxylase"]),
    single("Quels sont les deux tissus glucodépendants prioritaires protégés par la hiérarchie métabolique du jeûne ?", "D", "Le cerveau et les érythrocytes sont prioritairement protégés, en raison de leur dépendance stricte au glucose (ou aux corps cétoniques pour le cerveau après adaptation).", ["Le foie et le rein", "Le muscle et le tissu adipeux", "Le cœur et le poumon", "Le cerveau et les érythrocytes"]),
    single("Quelle voie fournit à la fois du NADPH et du ribose-5-phosphate à partir du glucose-6-phosphate ?", "A", "La voie des pentoses phosphates.", ["La voie des pentoses phosphates", "La glycogénolyse", "La néoglucogenèse", "Le cycle de Krebs"]),
  ],
  exam: { titre_fr: "Examen chronométré — Carte métabolique : glucides", duration_seconds: 900 },
};

export const METABOLIC_MAP_CARBS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel métabolite est le premier grand carrefour du métabolisme glucidique ?", question_en: "Which metabolite is the first major crossroads of carbohydrate metabolism?", answer_fr: "Le glucose-6-phosphate.", answer_en: "Glucose-6-phosphate." },
  { question_fr: "Vers quelles trois voies le glucose-6-phosphate peut-il être dirigé ?", question_en: "Toward which three pathways can glucose-6-phosphate be directed?", answer_fr: "La glycolyse, la glycogénogenèse et la voie des pentoses phosphates.", answer_en: "Glycolysis, glycogenesis, and the pentose phosphate pathway." },
  { question_fr: "Quel métabolite est le second grand carrefour du métabolisme glucidique ?", question_en: "Which metabolite is the second major crossroads of carbohydrate metabolism?", answer_fr: "Le pyruvate.", answer_en: "Pyruvate." },
  { question_fr: "Vers quels devenirs principaux le pyruvate peut-il être dirigé ?", question_en: "Toward which main fates can pyruvate be directed?", answer_fr: "L'acétyl-CoA (via le complexe PDH), le lactate, ou l'alanine.", answer_en: "Acetyl-CoA (via the PDH complex), lactate, or alanine." },
  { question_fr: "Quels organes peuvent libérer du glucose libre dans le sang à partir du glucose-6-phosphate ?", question_en: "Which organs can release free glucose into the blood from glucose-6-phosphate?", answer_fr: "Le foie et le rein.", answer_en: "The liver and the kidney." },
  { question_fr: "Quel est l'effet global de l'insuline sur le métabolisme glucidique hépatique et musculaire ?", question_en: "What is the overall effect of insulin on hepatic and muscle carbohydrate metabolism?", answer_fr: "Elle stimule la glycolyse et la glycogénogenèse, inhibant la néoglucogenèse et la glycogénolyse.", answer_en: "It stimulates glycolysis and glycogenesis, inhibiting gluconeogenesis and glycogenolysis." },
  { question_fr: "Quel est l'effet global du glucagon sur le métabolisme glucidique hépatique ?", question_en: "What is the overall effect of glucagon on hepatic carbohydrate metabolism?", answer_fr: "Il stimule la glycogénolyse et la néoglucogenèse, inhibant la glycolyse hépatique.", answer_en: "It stimulates glycogenolysis and gluconeogenesis, inhibiting hepatic glycolysis." },
  { question_fr: "Après combien de temps de jeûne le glycogène hépatique est-il typiquement épuisé ?", question_en: "After how long of fasting is hepatic glycogen typically exhausted?", answer_fr: "Environ 24 heures.", answer_en: "About 24 hours." },
  { question_fr: "Quelle voie devient la source principale de glucose sanguin après épuisement du glycogène hépatique ?", question_en: "Which pathway becomes the main source of blood glucose after hepatic glycogen is exhausted?", answer_fr: "La néoglucogenèse.", answer_en: "Gluconeogenesis." },
  { question_fr: "Quels sont les trois précurseurs principaux de la néoglucogenèse en situation de jeûne ?", question_en: "What are the three main precursors of gluconeogenesis during fasting?", answer_fr: "Le lactate, l'alanine et le glycérol.", answer_en: "Lactate, alanine, and glycerol." },
  { question_fr: "Vers quel carburant alternatif le cerveau bascule-t-il progressivement lors d'un jeûne prolongé ?", question_en: "Toward which alternative fuel does the brain progressively switch during prolonged fasting?", answer_fr: "Les corps cétoniques.", answer_en: "Ketone bodies." },
  { question_fr: "Quels signaux activent directement la glycogénolyse musculaire pendant l'effort, indépendamment des hormones ?", question_en: "Which signals directly activate muscle glycogenolysis during exercise, independent of hormones?", answer_fr: "Le calcium (Ca2+) et l'AMP.", answer_en: "Calcium (Ca2+) and AMP." },
  { question_fr: "Quel métabolite est le régulateur croisé central entre glycolyse et néoglucogenèse ?", question_en: "Which metabolite is the central cross-regulator between glycolysis and gluconeogenesis?", answer_fr: "Le fructose-2,6-bisphosphate.", answer_en: "Fructose-2,6-bisphosphate." },
  { question_fr: "Quel double effet l'acétyl-CoA a-t-il sur le devenir du pyruvate ?", question_en: "What dual effect does acetyl-CoA have on the fate of pyruvate?", answer_fr: "Il inhibe le complexe PDH et active la pyruvate carboxylase.", answer_en: "It inhibits the PDH complex and activates pyruvate carboxylase." },
  { question_fr: "Pourquoi ce double effet de l'acétyl-CoA est-il cohérent en situation de jeûne ?", question_en: "Why is this dual effect of acetyl-CoA consistent with the fasting state?", answer_fr: "Il épargne le pyruvate pour la néoglucogenèse, plutôt que de le laisser être oxydé en acétyl-CoA, quand les acides gras sont déjà une source abondante d'acétyl-CoA.", answer_en: "It spares pyruvate for gluconeogenesis rather than letting it be oxidized to acetyl-CoA, when fatty acids are already an abundant acetyl-CoA source." },
  { question_fr: "Quels sont les deux tissus glucodépendants prioritairement protégés lors du jeûne ?", question_en: "Which two glucose-dependent tissues are prioritized for protection during fasting?", answer_fr: "Le cerveau et les érythrocytes.", answer_en: "The brain and red blood cells." },
  { question_fr: "Pourquoi les érythrocytes dépendent-ils strictement du glucose, contrairement au cerveau ?", question_en: "Why do erythrocytes strictly depend on glucose, unlike the brain?", answer_fr: "Ils sont dépourvus de mitochondries et ne peuvent donc pas utiliser les corps cétoniques ni les acides gras comme carburant.", answer_en: "They lack mitochondria and therefore cannot use ketone bodies or fatty acids as fuel." },
  { question_fr: "Quels produits la voie des pentoses phosphates fournit-elle à partir du glucose-6-phosphate ?", question_en: "What products does the pentose phosphate pathway supply from glucose-6-phosphate?", answer_fr: "Le NADPH et le ribose-5-phosphate.", answer_en: "NADPH and ribose-5-phosphate." },
  { question_fr: "Résumez en une phrase la logique intégrée du métabolisme glucidique.", question_en: "Summarize in one sentence the integrated logic of carbohydrate metabolism.", answer_fr: "Deux carrefours (glucose-6-phosphate et pyruvate) redistribuent le flux de carbone entre stockage, oxydation et biosynthèse, sous le contrôle du rapport glucagon/insuline qui bascule l'ensemble du réseau selon l'état nutritionnel.", answer_en: "Two crossroads (glucose-6-phosphate and pyruvate) redistribute carbon flux between storage, oxidation, and biosynthesis, under the control of the glucagon/insulin ratio, which switches the entire network according to nutritional state." },
];

const METABOLIC_MAP_LIPIDS_COURSE = `# Carte métabolique — Lipides

## 1. Vue d'ensemble intégrée
- Cette carte relie **lipogenèse**, **synthèse des triglycérides**, **lipolyse**, **β-oxydation** et **cétogenèse** autour de deux carrefours : l'**acétyl-CoA** et les **acyl-CoA**.

## 2. Le malonyl-CoA, interrupteur central
- Produit par l'**acétyl-CoA carboxylase (ACC)** à partir de l'acétyl-CoA cytosolique (lui-même issu du citrate exporté de la mitochondrie).
- Alimente la **synthèse des acides gras** (complexe FAS).
- **Inhibe la CPT1**, bloquant simultanément l'entrée des acides gras en β-oxydation.
- Ce double rôle empêche un cycle futile : la cellule ne synthétise pas des acides gras tout en les dégradant simultanément.

## 3. États physiologiques et bascules hormonales
- **État nourri** (insuline↑) : ACC active → malonyl-CoA élevé → lipogenèse stimulée, β-oxydation inhibée (CPT1 bloquée) ; lipolyse inhibée (HSL inactive).
- **Jeûne** (glucagon/AMPK↑) : ACC inhibée → malonyl-CoA bas → lipogenèse freinée, β-oxydation levée (CPT1 active) ; lipolyse stimulée (HSL active), libérant des acides gras et du glycérol.
- **Jeûne prolongé** : acétyl-CoA issu de la β-oxydation intense dépasse la capacité du cycle de Krebs → excès dirigé vers la **cétogenèse** hépatique.

## 4. Devenir tissulaire différencié
- **Tissu adipeux** : lipogenèse et stockage en période nourrie ; lipolyse en jeûne, exportant acides gras (vers muscle/foie) et glycérol (vers foie, néoglucogenèse).
- **Foie** : lipogenèse en excès calorique (export en VLDL) ; β-oxydation et cétogenèse en jeûne (le foie ne peut pas utiliser les corps cétoniques qu'il produit).
- **Muscle et cœur** : grands consommateurs d'acides gras par β-oxydation, y compris au repos ; peuvent aussi utiliser les corps cétoniques.

## Points à retenir
- Le malonyl-CoA est l'interrupteur central : il active la synthèse et bloque simultanément la dégradation des acides gras (inhibition de CPT1).
- Le foie synthétise les corps cétoniques mais ne peut pas les utiliser ; les tissus périphériques (muscle, cœur, cerveau adapté) les captent.
- Les mêmes hormones (insuline vs glucagon/adrénaline) contrôlent en miroir la lipogenèse/synthèse des triglycérides d'un côté, et la lipolyse/β-oxydation/cétogenèse de l'autre.`;

export const METABOLIC_MAP_LIPIDS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Carte métabolique : lipides",
    source_label: "Synthèse — Metabolism: Metabolic Map (Lipids) (Ninja Nerd)",
    content_fr: METABOLIC_MAP_LIPIDS_COURSE,
  },
  qcm: [
    single("Quel métabolite agit comme interrupteur central du métabolisme lipidique ?", "C", "Le malonyl-CoA active la lipogenèse et inhibe simultanément la β-oxydation via CPT1.", ["Le citrate", "L'acétyl-CoA", "Le malonyl-CoA", "Le glycérol"]),
    single("Quelle enzyme produit le malonyl-CoA ?", "A", "L'acétyl-CoA carboxylase (ACC) produit le malonyl-CoA à partir de l'acétyl-CoA.", ["L'acétyl-CoA carboxylase (ACC)", "La CPT1", "La HMG-CoA synthase", "La thiolase"]),
    single("Quel est l'effet du malonyl-CoA sur la CPT1 ?", "B", "Le malonyl-CoA inhibe la CPT1, bloquant l'entrée des acides gras en β-oxydation.", ["Il l'active fortement", "Il l'inhibe", "Il n'a aucun effet", "Il la dégrade"]),
    single("Pourquoi ce double rôle du malonyl-CoA (activer FAS, inhiber CPT1) est-il métaboliquement cohérent ?", "D", "Il empêche un cycle futile où la cellule synthétiserait et dégraderait simultanément des acides gras.", ["Il permet une production maximale simultanée des deux voies", "Il n'a aucune cohérence physiologique connue", "Il sert uniquement à réguler la glycolyse", "Il empêche un cycle futile de synthèse/dégradation simultanée"]),
    single("Quel est l'effet global de l'insuline sur le métabolisme lipidique ?", "A", "L'insuline stimule la lipogenèse et le stockage, inhibant lipolyse et β-oxydation.", ["Elle stimule la lipogenèse et inhibe la lipolyse/β-oxydation", "Elle stimule la lipolyse et inhibe la lipogenèse", "Elle n'a aucun effet sur le métabolisme lipidique", "Elle stimule uniquement la cétogenèse"]),
    single("Quel est l'effet global du jeûne (glucagon/AMPK élevés) sur le métabolisme lipidique ?", "C", "Le jeûne freine la lipogenèse et stimule la lipolyse et la β-oxydation.", ["Il stimule fortement la lipogenèse", "Il n'a aucun effet global", "Il freine la lipogenèse et stimule la lipolyse/β-oxydation", "Il bloque totalement la β-oxydation"]),
    single("Pourquoi la cétogenèse s'active-t-elle particulièrement lors d'un jeûne prolongé ?", "B", "L'acétyl-CoA issu d'une β-oxydation intense dépasse la capacité d'oxydation du cycle de Krebs, l'excès étant dirigé vers la cétogenèse.", ["Le foie manque d'acétyl-CoA disponible", "L'acétyl-CoA excédentaire dépasse la capacité du cycle de Krebs", "L'insuline stimule directement la cétogenèse", "Le glycogène musculaire s'épuise"]),
    single("Quel tissu synthétise les corps cétoniques mais ne peut pas les utiliser lui-même ?", "D", "Le foie synthétise les corps cétoniques mais est dépourvu de thiophorase, empêchant leur réutilisation locale.", ["Le muscle", "Le tissu adipeux", "Le cerveau", "Le foie"]),
    single("Que libère le tissu adipeux lors de la lipolyse, en plus des acides gras libres ?", "A", "Le glycérol, capté par le foie pour la néoglucogenèse.", ["Le glycérol", "Le lactate", "L'alanine", "Le citrate"]),
    single("Quels tissus consomment de grandes quantités d'acides gras par β-oxydation, y compris au repos ?", "B", "Le muscle squelettique et le cœur sont de grands consommateurs d'acides gras par β-oxydation.", ["Le cerveau et les érythrocytes", "Le muscle et le cœur", "Le rein et la rate", "Le pancréas et la thyroïde"]),
  ],
  exam: { titre_fr: "Examen chronométré — Carte métabolique : lipides", duration_seconds: 900 },
};

export const METABOLIC_MAP_LIPIDS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel métabolite est l'interrupteur central du métabolisme lipidique ?", question_en: "Which metabolite is the central switch of lipid metabolism?", answer_fr: "Le malonyl-CoA.", answer_en: "Malonyl-CoA." },
  { question_fr: "Quelle enzyme produit le malonyl-CoA ?", question_en: "Which enzyme produces malonyl-CoA?", answer_fr: "L'acétyl-CoA carboxylase (ACC).", answer_en: "Acetyl-CoA carboxylase (ACC)." },
  { question_fr: "Quel rôle le malonyl-CoA joue-t-il dans la synthèse des acides gras ?", question_en: "What role does malonyl-CoA play in fatty acid synthesis?", answer_fr: "Il fournit les 2 carbones ajoutés à chaque cycle d'élongation par le complexe FAS.", answer_en: "It supplies the 2 carbons added at each FAS elongation cycle." },
  { question_fr: "Quel effet le malonyl-CoA a-t-il sur la CPT1 ?", question_en: "What effect does malonyl-CoA have on CPT1?", answer_fr: "Il l'inhibe.", answer_en: "It inhibits it." },
  { question_fr: "Pourquoi cette double action du malonyl-CoA est-elle importante métaboliquement ?", question_en: "Why is this dual action of malonyl-CoA metabolically important?", answer_fr: "Elle évite un cycle futile de synthèse et de dégradation simultanées des acides gras.", answer_en: "It prevents a futile cycle of simultaneous fatty acid synthesis and breakdown." },
  { question_fr: "Quel est l'effet de l'insuline sur l'ACC, et donc sur le malonyl-CoA ?", question_en: "What is the effect of insulin on ACC, and thus on malonyl-CoA?", answer_fr: "Elle l'active, augmentant le malonyl-CoA.", answer_en: "It activates it, increasing malonyl-CoA." },
  { question_fr: "Quel est l'effet de l'AMPK sur l'ACC, et donc sur le malonyl-CoA ?", question_en: "What is the effect of AMPK on ACC, and thus on malonyl-CoA?", answer_fr: "Elle l'inhibe, diminuant le malonyl-CoA et levant l'inhibition de la CPT1.", answer_en: "It inhibits it, decreasing malonyl-CoA and relieving CPT1 inhibition." },
  { question_fr: "Quel est l'effet global de l'état nourri sur le métabolisme lipidique ?", question_en: "What is the overall effect of the fed state on lipid metabolism?", answer_fr: "Il favorise la lipogenèse et le stockage des triglycérides, inhibant la lipolyse et la β-oxydation.", answer_en: "It favors lipogenesis and triglyceride storage, inhibiting lipolysis and beta-oxidation." },
  { question_fr: "Quel est l'effet global du jeûne sur le métabolisme lipidique ?", question_en: "What is the overall effect of fasting on lipid metabolism?", answer_fr: "Il favorise la lipolyse, la β-oxydation et éventuellement la cétogenèse, freinant la lipogenèse.", answer_en: "It favors lipolysis, beta-oxidation, and eventually ketogenesis, slowing lipogenesis." },
  { question_fr: "Pourquoi la cétogenèse hépatique s'active-t-elle particulièrement lors d'un jeûne prolongé ?", question_en: "Why does hepatic ketogenesis particularly activate during prolonged fasting?", answer_fr: "L'acétyl-CoA produit par une β-oxydation intense dépasse la capacité du cycle de Krebs à l'oxyder entièrement.", answer_en: "The acetyl-CoA produced by intense beta-oxidation exceeds the Krebs cycle's capacity to fully oxidize it." },
  { question_fr: "Le foie peut-il utiliser les corps cétoniques qu'il synthétise ?", question_en: "Can the liver use the ketone bodies it synthesizes?", answer_fr: "Non, il est dépourvu de thiophorase (SCOT).", answer_en: "No, it lacks thiophorase (SCOT)." },
  { question_fr: "Quels deux produits le tissu adipeux libère-t-il lors de la lipolyse ?", question_en: "What two products does adipose tissue release during lipolysis?", answer_fr: "Les acides gras libres et le glycérol.", answer_en: "Free fatty acids and glycerol." },
  { question_fr: "Vers quel organe le glycérol de la lipolyse est-il envoyé, et pour quelle voie ?", question_en: "To which organ is glycerol from lipolysis sent, and for what pathway?", answer_fr: "Vers le foie, pour la néoglucogenèse.", answer_en: "To the liver, for gluconeogenesis." },
  { question_fr: "Vers quels tissus les acides gras libres de la lipolyse sont-ils principalement envoyés ?", question_en: "To which tissues are free fatty acids from lipolysis mainly sent?", answer_fr: "Le muscle et le foie, pour la β-oxydation.", answer_en: "Muscle and the liver, for beta-oxidation." },
  { question_fr: "Quels tissus sont de grands consommateurs d'acides gras même au repos ?", question_en: "Which tissues are major fatty acid consumers even at rest?", answer_fr: "Le muscle squelettique et le cœur.", answer_en: "Skeletal muscle and the heart." },
  { question_fr: "Sous quelle forme les triglycérides hépatiques sont-ils exportés en période nourrie ?", question_en: "In what form are hepatic triglycerides exported during the fed state?", answer_fr: "Sous forme de VLDL.", answer_en: "As VLDL." },
  { question_fr: "Le cœur peut-il utiliser les corps cétoniques comme carburant ?", question_en: "Can the heart use ketone bodies as fuel?", answer_fr: "Oui, comme le muscle et le cerveau (après adaptation), il peut utiliser les corps cétoniques.", answer_en: "Yes, like muscle and the brain (after adaptation), it can use ketone bodies." },
  { question_fr: "Résumez en une phrase la logique hormonale globale du métabolisme lipidique.", question_en: "Summarize in one sentence the overall hormonal logic of lipid metabolism.", answer_fr: "L'insuline favorise le stockage (lipogenèse, triglycérides) tandis que le glucagon/l'adrénaline et l'AMPK favorisent la mobilisation (lipolyse, β-oxydation, cétogenèse), le malonyl-CoA agissant comme interrupteur central entre ces deux modes.", answer_en: "Insulin favors storage (lipogenesis, triglycerides) while glucagon/adrenaline and AMPK favor mobilization (lipolysis, beta-oxidation, ketogenesis), with malonyl-CoA acting as the central switch between these two modes." },
];

const METABOLIC_MAP_PROTEINS_COURSE = `# Carte métabolique — Protéines

## 1. Vue d'ensemble intégrée
- Cette carte relie le **catabolisme des acides aminés**, le **cycle de l'urée**, et les points de connexion des squelettes carbonés avec la **glycolyse**, le **cycle de Krebs** et la **cétogenèse**.

## 2. Le carrefour azoté : transamination et cycle de l'urée
- La plupart des acides aminés cèdent leur azote à l'α-cétoglutarate (transamination), formant du **glutamate**.
- Le glutamate est désaminé (glutamate déshydrogénase) → **ammoniac** libre, ou transporte l'azote sous forme d'**alanine** (muscle → foie, cycle glucose-alanine) ou de **glutamine** (transport inter-organes non toxique de l'azote).
- L'ammoniac rejoint le **cycle de l'urée** hépatique, avec un second atome d'azote apporté par l'**aspartate**.

## 3. Le carrefour carboné : intégration avec la glycolyse et le cycle de Krebs
- **Squelettes glucoformateurs** : convertis en pyruvate ou en intermédiaires du cycle de Krebs (oxaloacétate, α-cétoglutarate, succinyl-CoA, fumarate) — alimentent potentiellement la néoglucogenèse.
- **Squelettes cétogènes** : convertis en acétyl-CoA ou acétoacétyl-CoA — alimentent le cycle de Krebs (oxydation) ou la cétogenèse, jamais la néoglucogenèse nette.
- Le **fumarate** produit par le cycle de l'urée (argininosuccinate lyase) rejoint directement le cycle de Krebs, reliant physiquement les deux cycles dans l'hépatocyte (« bicyclette de Krebs »).

## 4. États physiologiques
- **Jeûne prolongé/famine** : catabolisme protéique musculaire accru pour fournir des acides aminés glucoformateurs (notamment l'alanine) à la néoglucogenèse hépatique — aux dépens de la masse musculaire.
- **Apport protéique élevé** : stimulation à long terme des enzymes du cycle de l'urée et de la NAGS (via l'arginine), pour détoxifier l'azote excédentaire.
- **Insuffisance hépatique** : capacité réduite à détoxifier l'ammoniac → risque d'encéphalopathie hépatique.

## Points à retenir
- Le glutamate est le carrefour azoté central (transamination ↔ désamination) ; l'alanine et la glutamine transportent l'azote entre organes.
- Le fumarate relie physiquement le cycle de l'urée et le cycle de Krebs dans l'hépatocyte.
- La classification glucoformateur/cétogène détermine si le squelette carboné d'un acide aminé peut contribuer à la néoglucogenèse.`;

export const METABOLIC_MAP_PROTEINS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Carte métabolique : protéines",
    source_label: "Synthèse — Metabolism: Metabolic Map (Proteins) (Ninja Nerd)",
    content_fr: METABOLIC_MAP_PROTEINS_COURSE,
  },
  qcm: [
    single("Quel métabolite est le carrefour azoté central du catabolisme des acides aminés ?", "C", "Le glutamate, formé par transamination, est le carrefour azoté central.", ["Le pyruvate", "L'ammoniac", "Le glutamate", "L'urée"]),
    single("Quels deux métabolites transportent l'azote entre le muscle et le foie ?", "B", "L'alanine (cycle glucose-alanine) et la glutamine transportent l'azote de façon non toxique entre organes.", ["Le glucose et le lactate", "L'alanine et la glutamine", "Le pyruvate et l'urée", "Le citrate et le malate"]),
    single("D'où provient le second atome d'azote incorporé dans le cycle de l'urée ?", "A", "De l'aspartate, incorporé lors de la réaction de l'argininosuccinate synthétase.", ["De l'aspartate", "De la glutamine", "De l'alanine", "Du glutamate directement"]),
    single("Quel intermédiaire relie physiquement le cycle de l'urée et le cycle de Krebs dans l'hépatocyte ?", "D", "Le fumarate, produit par l'argininosuccinate lyase, rejoint directement le cycle de Krebs.", ["Le succinyl-CoA", "L'oxaloacétate", "Le citrate", "Le fumarate"]),
    single("Quel devenir métabolique ont les squelettes carbonés des acides aminés glucoformateurs ?", "B", "Ils sont convertis en pyruvate ou en intermédiaires du cycle de Krebs, alimentant potentiellement la néoglucogenèse.", ["Ils sont convertis exclusivement en corps cétoniques", "Ils sont convertis en pyruvate ou intermédiaires du cycle de Krebs", "Ils sont directement excrétés", "Ils sont convertis en glycogène directement"]),
    single("Quel devenir métabolique ont les squelettes carbonés des acides aminés cétogènes ?", "C", "Ils sont convertis en acétyl-CoA ou acétoacétyl-CoA, sans contribution nette à la néoglucogenèse.", ["Ils rejoignent directement la néoglucogenèse", "Ils sont convertis en glucose", "Ils sont convertis en acétyl-CoA ou acétoacétyl-CoA", "Ils sont excrétés sous forme d'urée"]),
    single("Que se passe-t-il pour le catabolisme protéique musculaire lors d'un jeûne prolongé ?", "A", "Il augmente, fournissant des acides aminés glucoformateurs (notamment l'alanine) à la néoglucogenèse hépatique.", ["Il augmente, fournissant des acides aminés à la néoglucogenèse", "Il diminue fortement", "Il reste totalement stable", "Il s'arrête complètement"]),
    single("Quel est l'effet à long terme d'un apport protéique élevé sur les enzymes du cycle de l'urée ?", "B", "Il stimule leur expression, augmentant la capacité de détoxification de l'azote.", ["Il inhibe leur expression", "Il stimule leur expression", "Il n'a aucun effet", "Il les inactive par phosphorylation"]),
    single("Quelle est la conséquence d'une insuffisance hépatique sur la détoxification de l'ammoniac ?", "D", "Elle réduit la capacité à détoxifier l'ammoniac, pouvant provoquer une encéphalopathie hépatique.", ["Aucune conséquence notable", "Elle augmente la production d'urée", "Elle n'affecte que la glycémie", "Elle réduit la capacité de détoxification, risquant une encéphalopathie hépatique"]),
    single("Quelle enzyme désamine le glutamate, libérant l'ammoniac destiné au cycle de l'urée ?", "A", "La glutamate déshydrogénase.", ["La glutamate déshydrogénase", "L'ALT", "L'AST", "L'arginase"]),
  ],
  exam: { titre_fr: "Examen chronométré — Carte métabolique : protéines", duration_seconds: 900 },
};

export const METABOLIC_MAP_PROTEINS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel métabolite est le carrefour azoté central du catabolisme des acides aminés ?", question_en: "Which metabolite is the central nitrogen crossroads of amino acid catabolism?", answer_fr: "Le glutamate.", answer_en: "Glutamate." },
  { question_fr: "Quels deux métabolites transportent l'azote entre organes sous forme non toxique ?", question_en: "Which two metabolites transport nitrogen between organs in a non-toxic form?", answer_fr: "L'alanine et la glutamine.", answer_en: "Alanine and glutamine." },
  { question_fr: "Quel cycle décrit le transport du carbone et de l'azote du muscle vers le foie sous forme d'alanine ?", question_en: "Which cycle describes the transport of carbon and nitrogen from muscle to liver as alanine?", answer_fr: "Le cycle glucose-alanine.", answer_en: "The glucose-alanine cycle." },
  { question_fr: "D'où provient le premier atome d'azote du cycle de l'urée ?", question_en: "Where does the first nitrogen atom of the urea cycle come from?", answer_fr: "De l'ammoniac libre (NH3), issu de la désamination oxydative du glutamate.", answer_en: "From free ammonia (NH3), from oxidative deamination of glutamate." },
  { question_fr: "D'où provient le second atome d'azote du cycle de l'urée ?", question_en: "Where does the second nitrogen atom of the urea cycle come from?", answer_fr: "De l'aspartate.", answer_en: "From aspartate." },
  { question_fr: "Quel intermédiaire relie physiquement le cycle de l'urée au cycle de Krebs ?", question_en: "Which intermediate physically links the urea cycle to the Krebs cycle?", answer_fr: "Le fumarate.", answer_en: "Fumarate." },
  { question_fr: "Comment appelle-t-on parfois cette double connexion entre cycle de l'urée et cycle de Krebs ?", question_en: "What is this dual connection between the urea cycle and the Krebs cycle sometimes called?", answer_fr: "La « bicyclette de Krebs ».", answer_en: "The \"Krebs bicycle\"." },
  { question_fr: "Quels intermédiaires du cycle de Krebs peuvent recevoir le squelette carboné d'un acide aminé glucoformateur ?", question_en: "Which Krebs cycle intermediates can receive the carbon skeleton of a glucogenic amino acid?", answer_fr: "L'oxaloacétate, l'α-cétoglutarate, le succinyl-CoA, le fumarate.", answer_en: "Oxaloacetate, alpha-ketoglutarate, succinyl-CoA, fumarate." },
  { question_fr: "Vers quels produits le squelette carboné d'un acide aminé cétogène est-il converti ?", question_en: "Into which products is the carbon skeleton of a ketogenic amino acid converted?", answer_fr: "L'acétyl-CoA ou l'acétoacétyl-CoA.", answer_en: "Acetyl-CoA or acetoacetyl-CoA." },
  { question_fr: "Pourquoi le catabolisme protéique musculaire augmente-t-il lors d'un jeûne prolongé ?", question_en: "Why does muscle protein catabolism increase during prolonged fasting?", answer_fr: "Pour fournir des acides aminés glucoformateurs, notamment l'alanine, à la néoglucogenèse hépatique.", answer_en: "To supply glucogenic amino acids, especially alanine, to hepatic gluconeogenesis." },
  { question_fr: "Quel acide aminé active la NAGS, stimulant indirectement le cycle de l'urée en cas d'apport protéique élevé ?", question_en: "Which amino acid activates NAGS, indirectly stimulating the urea cycle with high protein intake?", answer_fr: "L'arginine.", answer_en: "Arginine." },
  { question_fr: "Quelle est la conséquence d'une insuffisance hépatique sur le métabolisme de l'ammoniac ?", question_en: "What is the consequence of liver failure on ammonia metabolism?", answer_fr: "Une capacité réduite à détoxifier l'ammoniac, pouvant provoquer une encéphalopathie hépatique.", answer_en: "A reduced ability to detoxify ammonia, which can cause hepatic encephalopathy." },
  { question_fr: "Quelle enzyme catalyse la désamination oxydative du glutamate, point d'entrée de l'azote vers le cycle de l'urée ?", question_en: "Which enzyme catalyzes oxidative deamination of glutamate, the nitrogen entry point to the urea cycle?", answer_fr: "La glutamate déshydrogénase.", answer_en: "Glutamate dehydrogenase." },
  { question_fr: "Les protéines sont-elles stockées par l'organisme comme réserve énergétique dédiée ?", question_en: "Are proteins stored by the body as a dedicated energy reserve?", answer_fr: "Non, contrairement au glycogène et aux triglycérides ; leur dégradation en situation de jeûne prolongé se fait aux dépens de la masse fonctionnelle (muscle).", answer_en: "No, unlike glycogen and triglycerides; their breakdown during prolonged fasting comes at the expense of functional mass (muscle)." },
  { question_fr: "Résumez en une phrase l'intégration du métabolisme des protéines avec les autres grandes voies.", question_en: "Summarize in one sentence how protein metabolism integrates with the other major pathways.", answer_fr: "L'azote des acides aminés converge vers le glutamate puis le cycle de l'urée (relié au cycle de Krebs par le fumarate), tandis que leurs squelettes carbonés rejoignent la glycolyse, le cycle de Krebs ou la cétogenèse selon leur classification glucoformatrice ou cétogène.", answer_en: "Amino acid nitrogen converges on glutamate then the urea cycle (linked to the Krebs cycle via fumarate), while their carbon skeletons join glycolysis, the Krebs cycle, or ketogenesis depending on their glucogenic or ketogenic classification." },
];
