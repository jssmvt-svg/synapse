import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, visualSingle } from "./qcm-helpers.js";

const HEMOGLOBIN_COURSE = `# Chapitre 7 — Hémoglobine : portrait d'une protéine en action

## 7.1 Fixation de l'oxygène par le fer de l'hème
- L'hémoglobine (Hb) transporte l'O₂ des poumons vers les tissus ; c'est une protéine allostérique à coopérativité positive. La myoglobine (Mb) fixe l'O₂ dans le muscle, sans coopérativité.
- Le groupement hème (protoporphyrine + fer central) doit être sous forme ferreuse (Fe²⁺) pour fixer l'O₂ ; le fer ferrique (Fe³⁺) en est incapable.
- Le fer est coordonné à 4 azotes de la protoporphyrine, à l'histidine proximale (5e site) et à l'O₂ (6e site). Lors de la fixation, le fer entre dans le plan de l'hème (il en était ~0,4 Å hors du plan à l'état désoxy).
- L'histidine distale forme une liaison hydrogène avec l'O₂ fixé, ce qui stabilise la forme non réactive et empêche la libération de superoxyde (Fe³⁺–O₂⁻, toxique, menant à la métmyoglobine).
- Hb = tétramère α2β2 ; chaque sous-unité adopte le repliement globine, aussi présent dans la myoglobine.

## 7.2 Fixation coopérative de l'oxygène par l'hémoglobine

| | Myoglobine | Hémoglobine |
| --- | --- | --- |
| Courbe de saturation | Hyperbolique | Sigmoïde |
| P₅₀ | ≈ 2 torr | ≈ 26 torr |
| Coopérativité | Aucune | Positive entre sous-unités |

- La coopérativité permet à l'Hb de bien se saturer dans les poumons (pO₂ élevée) et de relarguer efficacement l'O₂ dans les tissus (pO₂ basse) : sans coopérativité, seulement ~38 % de l'O₂ serait délivré ; avec coopérativité, ~66 %.
- États T (tendu, désoxyhémoglobine, faible affinité) et R (relâché, oxyhémoglobine, forte affinité). Le dimère α1β1 pivote d'environ 15° par rapport à α2β2 lors du passage T→R.
- Modèle concerté (MWC) : transition tout-ou-rien de toutes les sous-unités. Modèle séquentiel (KNF) : les sous-unités changent une à une. La coopérativité réelle combine des aspects des deux modèles.

## 7.3 Ions H⁺ et CO₂ favorisent la libération d'O₂ : l'effet Bohr
- Le 2,3-bisphosphoglycérate (2,3-BPG), le CO₂ et les ions H⁺ sont des effecteurs allostériques hétérotropes. Le 2,3-BPG se lie dans une poche centrale qui n'existe qu'à l'état T et stabilise cet état de basse affinité.
- L'hémoglobine fœtale (α2γ2) lie moins bien le 2,3-BPG que l'Hb adulte → affinité pour l'O₂ plus élevée → transfert materno-fœtal au niveau du placenta.
- Effet Bohr : une baisse de pH stabilise l'état T (ponts salins comme His146β–Asp94β) et déplace la courbe vers la droite. Le CO₂ tissulaire est majoritairement transporté sous forme de bicarbonate (HCO₃⁻) via l'anhydrase carbonique ; une fraction forme un carbamate avec les groupes amino-terminaux, stabilisant aussi l'état T.
- Le CO se lie à l'Hb environ 200 fois plus fortement que l'O₂ : sa fixation sur un site pousse le tétramère vers l'état R, empêchant la délivrance d'O₂ aux tissus — d'où la toxicité du monoxyde de carbone.

## 7.4 Mutations des gènes de l'hémoglobine et maladies
- Drépanocytose : substitution Val pour Glu en position 6 des chaînes β (hémoglobine S). Chez l'hétérozygote (trait drépanocytaire), le sujet est généralement asymptomatique et partiellement protégé du paludisme ; chez l'homozygote, la maladie peut être fatale. La Val6 exposée en désoxy-HbS s'insère dans une poche hydrophobe d'une autre molécule de désoxy-HbS, provoquant une polymérisation en fibres qui déforme les globules rouges en faucille.
- Thalassémies : production déséquilibrée des chaînes de globine. α-thalassémie : les tétramères de chaînes β seules fixent l'O₂ avec une forte affinité mais sans coopérativité, nuisant à la délivrance tissulaire. β-thalassémie : les chaînes α libres s'agrègent et précipitent ; l'AHSP aide à leur repliement en attendant l'assemblage du tétramère.
- Autres globines humaines : chaînes δ, ε, ζ exprimées au cours du développement ; neuroglobine (cerveau, rétine) et cytoglobine (ubiquitaire), qui protègeraient contre l'hypoxie.

## Points à retenir
- Seul le fer ferreux (Fe²⁺) fixe l'O₂ ; la coopérativité de l'Hb (sigmoïde, P₅₀ ≈ 26 torr) contraste avec la myoglobine (hyperbolique, P₅₀ ≈ 2 torr).
- 2,3-BPG, CO₂ et H⁺ stabilisent tous l'état T et favorisent le relargage d'O₂ aux tissus.
- La drépanocytose et les thalassémies illustrent comment une mutation ponctuelle ou un déséquilibre de production peuvent perturber gravement la fonction de l'hémoglobine.`;

export const HEMOGLOBIN_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Hémoglobine : portrait d'une protéine en action",
    source_label: "MedByJes — Chapitre 7 · Hémoglobine (Berg, Tymoczko, Gatto & Stryer, Biochemistry, 9e éd.)",
    content_fr: HEMOGLOBIN_COURSE,
  },
  qcm: [
    single("Quelle est la forme du fer capable de fixer l'oxygène dans l'hème ?", "B", "Seul le fer ferreux (Fe²⁺) peut fixer l'oxygène ; le fer ferrique (Fe³⁺, comme dans la métmyoglobine) ne le peut pas.", ["Fe³⁺ (ferrique)", "Fe²⁺ (ferreux)", "Fe⁰ (métallique)", "Fe⁴⁺"]),
    single("Combien de sites de coordination le fer de l'hème peut-il former au total ?", "C", "4 liaisons avec les azotes de la protoporphyrine + 2 sites de coordination axiaux (5e et 6e) = 6 au total.", ["4", "5", "6", "8"]),
    single("Quel résidu occupe le 5e site de coordination du fer ?", "B", "L'histidine proximale occupe le 5e site ; l'histidine distale (non liée directement au fer) stabilise l'O₂ fixé en 6e position.", ["L'histidine distale", "L'histidine proximale", "Une lysine", "Un aspartate"]),
    single("Que se passe-t-il pour la position du fer lors de la fixation de l'O₂ ?", "C", "À l'état désoxy, le fer est ~0,4 Å hors du plan ; la fixation de l'O₂ le fait entrer dans le plan de la protoporphyrine, ce qui initie le changement conformationnel.", ["Il sort du plan de la protoporphyrine", "Il reste immobile", "Il entre dans le plan de la protoporphyrine", "Il change de valence en Fe⁴⁺"]),
    single("Quel est le rôle de l'histidine distale ?", "B", "L'histidine distale donne une liaison hydrogène à l'O₂ fixé, empêchant la formation/libération du superoxyde toxique.", ["Elle fixe directement le fer en 5e position", "Elle forme une liaison hydrogène avec l'O₂ fixé, limitant la libération de superoxyde", "Elle stabilise l'état R du tétramère", "Elle lie le 2,3-BPG"]),
    single("Quelle courbe de saturation caractérise la myoglobine ?", "B", "La myoglobine, non coopérative, présente une courbe hyperbolique avec un P₅₀ très bas (~2 torr).", ["Sigmoïde", "Hyperbolique", "Linéaire", "En cloche"]),
    single("La forme sigmoïde de la courbe de saturation de l'hémoglobine traduit :", "B", "La forme sigmoïde résulte de la coopérativité positive : la fixation d'un premier O₂ facilite la fixation des suivants.", ["Une absence d'interaction entre sous-unités", "Une coopérativité positive de fixation de l'O₂", "Une dénaturation progressive", "Une compétition avec le CO₂"]),
    single("Quel est approximativement le P₅₀ de l'hémoglobine (dans le sang) ?", "C", "Le P₅₀ de l'hémoglobine est d'environ 26 torr, contre 2 torr pour la myoglobine.", ["2 torr", "10 torr", "26 torr", "100 torr"]),
    single("L'état T de l'hémoglobine correspond à :", "A", "T (« tendu ») = désoxyhémoglobine, faible affinité ; R (« relâché ») = oxyhémoglobine, forte affinité.", ["La désoxyhémoglobine, faible affinité pour l'O₂", "L'oxyhémoglobine, forte affinité pour l'O₂", "Une forme dénaturée", "La forme liée au CO uniquement"]),
    single("Lors de la transition T→R, les deux dimères αβ de l'hémoglobine :", "B", "Le dimère α1β1 pivote d'environ 15° par rapport au dimère α2β2 lors du passage T→R.", ["Se dissocient complètement", "Pivotent d'environ 15° l'un par rapport à l'autre", "Fusionnent en un seul dimère", "Restent parfaitement immobiles"]),
    single("Le modèle concerté (MWC) de coopérativité postule que :", "B", "Modèle concerté (MWC) : transition tout-ou-rien, toutes les sous-unités changent de conformation ensemble.", ["Les sous-unités changent de conformation une à une", "Toutes les sous-unités basculent ensemble de T vers R", "Seule la première sous-unité change de conformation", "Il n'existe qu'un seul état conformationnel"]),
    single("Le 2,3-BPG se lie à l'hémoglobine :", "B", "Le 2,3-BPG se loge dans une poche centrale qui n'existe que dans la conformation T, stabilisant ainsi cet état de basse affinité.", ["Dans une poche qui n'existe qu'à l'état R", "Dans une poche centrale qui n'existe qu'à l'état T", "Directement sur le fer de l'hème", "Sur l'histidine distale"]),
    single("Pourquoi l'hémoglobine fœtale a-t-elle une affinité pour l'O₂ plus élevée que l'Hb adulte ?", "B", "L'hémoglobine fœtale (α2γ2) lie moins bien le 2,3-BPG que l'Hb adulte, ce qui augmente son affinité relative pour l'O₂ et permet le transfert materno-fœtal d'oxygène.", ["Elle contient plus de fer", "Elle lie moins bien le 2,3-BPG", "Elle n'a pas d'état T", "Elle fixe le CO2 à la place de l'O₂"]),
    single("Qu'est-ce que l'effet Bohr ?", "A", "L'effet Bohr correspond à la stimulation du relargage d'O₂ par le CO₂ et les ions H⁺, particulièrement utile dans les tissus actifs (pH bas, CO₂ élevé).", ["La stimulation du relargage d'O₂ par le CO₂ et les ions H⁺", "L'inhibition de la fixation du CO par l'Hb", "La stabilisation de l'état R par le pH acide", "Le transport du CO₂ par l'hème"]),
    single("Une baisse de pH déplace la courbe de saturation de l'hémoglobine :", "B", "Une baisse de pH stabilise l'état T (ponts salins comme His146β–Asp94β) → la courbe se déplace vers la droite → l'O₂ est plus facilement relargué.", ["Vers la gauche, favorisant la fixation d'O₂", "Vers la droite, favorisant le relargage d'O₂", "Elle n'a aucun effet sur la courbe", "Elle transforme la courbe en droite"]),
    single("Sous quelle forme la majorité du CO₂ tissulaire est-elle transportée dans le sang ?", "B", "La majorité du CO₂ tissulaire est convertie en bicarbonate (HCO₃⁻) via l'anhydrase carbonique et transportée sous cette forme ; une fraction seulement forme du carbamate ou reste dissoute.", ["Dissous directement dans le plasma", "Sous forme de bicarbonate (HCO₃⁻)", "Fixé sur le fer de l'hème", "Sous forme de carbonate de calcium"]),
    single("Pourquoi le monoxyde de carbone (CO) est-il toxique pour le transport de l'oxygène ?", "B", "Le CO a une affinité ~200 fois supérieure à l'O₂ pour l'Hb, et sa fixation sur un site déplace la courbe des autres sites vers l'état R (forte affinité), ce qui empêche la libération d'O₂ aux tissus.", ["Il détruit le groupement hème de façon irréversible", "Il se lie ~200 fois plus fortement que l'O₂ et pousse le tétramère vers l'état R, réduisant la délivrance d'O₂ aux tissus", "Il empêche uniquement la synthèse de 2,3-BPG", "Il n'a aucun effet sur l'affinité des autres sous-unités"]),
    single("La mutation responsable de la drépanocytose consiste en :", "A", "La drépanocytose résulte d'une substitution Val pour Glu en position 6 des chaînes β (hémoglobine S).", ["Une substitution Glu→Val en position 6 des chaînes β", "Une délétion complète du gène β", "Une substitution Val→Glu en position 6 des chaînes α", "Une duplication du gène γ"]),
    single("Chez les sujets porteurs du trait drépanocytaire (hétérozygotes), on observe :", "B", "Le trait drépanocytaire (un seul allèle muté) est généralement asymptomatique et confère une protection partielle contre le paludisme.", ["Une anémie sévère systématique", "Un phénotype asymptomatique et une protection partielle contre le paludisme", "Une absence totale d'hémoglobine S", "Une thalassémie associée obligatoire"]),
    single("Dans l'α-thalassémie, les tétramères formés uniquement de chaînes β :", "A", "En α-thalassémie, les tétramères de chaînes β seules fixent l'O₂ avec une forte affinité mais sans coopérativité, ce qui compromet la délivrance d'oxygène aux tissus.", ["Fixent l'O₂ avec une forte affinité mais sans coopérativité, ce qui nuit à la délivrance tissulaire", "Sont incapables de fixer l'oxygène", "Présentent une coopérativité normale", "Remplacent efficacement l'hémoglobine normale sans conséquence"]),
    visualSingle("Quelle est la structure quaternaire de l'hémoglobine ?", "B", "L'hémoglobine est un tétramère α2β2 : 2 chaînes alpha identiques + 2 chaînes bêta identiques, chacune portant un groupe hème.", ["Un homodimère", "Un tétramère α2β2", "Un monomère unique", "Une triple hélice"], "hb-quaternary"),
  ],
  exam: { titre_fr: "Examen chronométré — Hémoglobine", duration_seconds: 1_800 },
};
