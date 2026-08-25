import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const ENZYME_BASICS_COURSE = `# Chapitre 8 — Enzymes : concepts de base et cinétique

## 1. Généralités sur les enzymes
- Les enzymes sont des catalyseurs (le plus souvent protéiques, parfois ARN) qui accélèrent les réactions jusqu'à un facteur de plusieurs millions.
- Elles stabilisent l'**état de transition**, l'espèce de plus haute énergie sur le chemin réactionnel.
- Le **substrat** est le réactif d'une réaction enzymatique.
- **Spécificité** : ex. la trypsine clive du côté carboxyle des résidus Arg/Lys ; la thrombine ne clive que les liaisons Arg–Gly dans des séquences précises.
- **Cofacteurs** : coenzymes (organiques, souvent dérivés de vitamines — liés fortement = groupement prosthétique, ou faiblement) et métaux (ex. Zn²⁺, Mg²⁺, Ni²⁺, Mo, Se, Mn, K⁺).
- **Holoenzyme** = enzyme + cofacteur (active) ; **apoenzyme** = enzyme sans son cofacteur (inactive).

## 2. Thermodynamique (énergie libre de Gibbs)
- Le ΔG renseigne sur la **spontanéité** (thermodynamique), jamais sur la **vitesse** (cinétique) d'une réaction.
- ΔG < 0 : réaction exergonique, spontanée. ΔG > 0 : endergonique, non spontanée. ΔG = 0 : équilibre.
- ΔG = ΔG°′ + RT·ln([C][D]/[A][B]) ; à l'équilibre : ΔG°′ = −RT·lnK'eq.
- ΔG°′ = énergie libre standard à pH 7. K'eq grand ⇒ réaction très exergonique ; K'eq petit ⇒ très endergonique.
- Le ΔG réel dépend des concentrations réelles et peut différer du ΔG°′ (ex. isomérisation DHAP ↔ GAP, endergonique en standard mais exergonique in vivo si [DHAP] est élevée).
- Les enzymes ne modifient **pas** l'équilibre de la réaction (ΔG global inchangé), elles modifient uniquement la vitesse pour l'atteindre.

## 3. État de transition et énergie d'activation
- Chemin réactionnel : S → X‡ → P, où X‡ est l'**état de transition**.
- **Énergie d'activation** ΔG‡ = énergie nécessaire pour former X‡ à partir de S.
- La vitesse V est proportionnelle à [X‡], donc à e^(−ΔG‡/RT). Une diminution de 20 % de ΔG‡ multiplie la vitesse par environ 10.
- Les enzymes accélèrent la réaction en **abaissant ΔG‡** (elles ne changent pas le ΔG global de la réaction).

## 4. Site actif et complexe enzyme–substrat (ES)
- Le site actif est une crevasse tridimensionnelle formée d'acides aminés provenant de différentes parties de la structure primaire (parfois éloignés dans la séquence, ex. lysozyme).
- Il ne représente qu'une petite partie du volume de l'enzyme et crée un microenvironnement unique.
- Interactions multiples et faibles (liaisons H, électrostatiques, van der Waals) entre enzyme et substrat.
- Modèle **« clé-serrure »** (Fischer) : dépassé — remplacé par le modèle de l'**« ajustement induit »** (induced fit, Koshland) : l'enzyme change de conformation lors de la liaison au substrat.
- **Énergie de liaison** (binding energy) : énergie libérée par l'interaction enzyme-substrat ; elle est maximale avec l'état de transition, ce qui explique en partie l'abaissement de ΔG‡.

## 5. Cinétique de Michaelis–Menten
- Réaction générale : E + S ⇌ ES → E + P, avec k₁, k₋₁, k₂ (=kcat).
- Hypothèse de l'**état stationnaire** (steady state) : la vitesse de formation de ES = vitesse de dégradation de ES.
- **Constante de Michaelis** : KM = (k₋₁ + k₂) / k₁ (unités d'une concentration).
- Équation de Michaelis–Menten : V₀ = Vmax·[S] / ([S] + KM).
- **Vmax** = k₂·[E]T, atteinte quand tout l'enzyme est sous forme ES.
- **KM** = concentration de substrat pour laquelle V₀ = Vmax/2.
- KM ≈ constante de dissociation du complexe ES uniquement si k₋₁ >> k₂.
- KM in vivo est proche de la concentration physiologique du substrat ; des variations de KM ont des conséquences physiologiques (ex. métabolisme de l'alcool : deux formes d'acétaldéhyde déshydrogénase, KM bas/haut).
- **kcat** (= k₂), turnover number : nombre de molécules de substrat converties en produit par seconde et par enzyme.
- **kcat/KM** : mesure de l'efficacité catalytique ; limitée par k₁, donc par la vitesse de diffusion enzyme-substrat. Les enzymes « catalytiquement parfaites » (ex. anhydrase carbonique, fumarase, TIM) ont un kcat/KM proche de la limite de diffusion (~10⁸–10⁹ M⁻¹s⁻¹).
- Équation de **Lineweaver–Burk** (double-réciproque) : 1/V₀ = (KM/Vmax)·(1/[S]) + 1/Vmax. Pente = KM/Vmax ; ordonnée à l'origine = 1/Vmax ; abscisse à l'origine = −1/KM.
- Les enzymes allostériques ne suivent **pas** la cinétique de Michaelis–Menten : elles montrent une liaison coopérative au substrat, donnant une courbe sigmoïde (V₀ vs [S]).

## 6. Réactions à plusieurs substrats
- **Réactions séquentielles** (aléatoires ou ordonnées) : formation d'un complexe ternaire enzyme + 2 substrats (ex. lactate déshydrogénase = ordonnée ; créatine kinase = aléatoire).
- **Réactions à double déplacement** (ping-pong) : formation d'un intermédiaire enzyme substitué, sans complexe ternaire (ex. transamination aspartate/α-cétoglutarate).

## 7. Inhibition enzymatique

### 7.1 Inhibiteurs irréversibles
- Liaison covalente (ou non covalente très forte, dissociation négligeable).
- Réactifs de groupe spécifique, marqueurs d'affinité (analogues réactifs du substrat) et **inhibiteurs suicides** (mécanisme-dépendants : l'enzyme transforme elle-même le substrat en inhibiteur, ex. L-déprényl/sélégiline sur la monoamine oxydase, utilisé dans la maladie de Parkinson).
- La **pénicilline** est un inhibiteur suicide de la glycopeptide transpeptidase bactérienne : son cycle β-lactame très réactif forme un dérivé pénicilloyl-sérine stable et inactif, bloquant la formation des ponts peptidiques de la paroi (peptidoglycane) de *S. aureus*.

### 7.2 Inhibiteurs réversibles
| Type | Site de liaison | Effet sur Vmax | Effet sur KM |
| --- | --- | --- | --- |
| Compétitive | Site actif (E libre) | Inchangé | Augmenté (KMapp) |
| Incompétitive | Complexe ES uniquement | Diminué | Diminué |
| Non compétitive (pure) | E libre et complexe ES | Diminué | Inchangé |

- **Compétitive** : peut être surmontée par un excès de substrat (ex. sulfanilamide, analogue du PABA, inhibe la synthèse de l'acide folique bactérien — sans effet chez l'humain qui obtient le folate via l'alimentation).
- **Incompétitive et non compétitive** : ne peuvent pas être surmontées par un excès de substrat.
- Sur un graphique de Lineweaver-Burk : compétitive → même ordonnée à l'origine (1/Vmax), pente plus forte ; incompétitive → droites parallèles (même pente) ; non compétitive pure → même abscisse à l'origine (−1/KM), pente et ordonnée modifiées.

## 8. Étude d'enzymes molécule par molécule
- Permet d'observer la variabilité individuelle des molécules d'enzyme et les fluctuations cinétiques masquées par les mesures d'ensemble (bulk).

## Points à retenir
- Le ΔG renseigne sur la spontanéité, jamais sur la vitesse ; les enzymes abaissent ΔG‡ sans changer le ΔG global ni K'eq.
- KM = [S] pour V₀ = Vmax/2 ; Vmax = k₂[E]T ; kcat/KM mesure l'efficacité catalytique, plafonnée par la diffusion.
- Inhibition compétitive (KM↑, Vmax inchangé) vs incompétitive (KM↓, Vmax↓) vs non compétitive pure (KM inchangé, Vmax↓).
- Inhibiteurs irréversibles notables : suicides (L-déprényl), pénicilline (transpeptidase bactérienne).`;

export const ENZYME_BASICS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Enzymes : concepts de base et cinétique",
    source_label: "MedByJes — Chapitre 8 · Enzymes (Berg, Tymoczko, Gatto & Stryer, Biochemistry, 9e éd.)",
    content_fr: ENZYME_BASICS_COURSE,
  },
  qcm: [
    single("Que mesure le ΔG d'une réaction ?", "B", "Le ΔG renseigne sur la spontanéité (thermodynamique) d'une réaction mais ne donne aucune information sur sa vitesse.", ["La vitesse de la réaction", "La spontanéité (thermodynamique) de la réaction", "La concentration de l'enzyme nécessaire", "L'énergie d'activation uniquement"]),
    single("Une enzyme catalyse une réaction en :", "C", "Les enzymes accélèrent la réaction en abaissant l'énergie d'activation (ΔG‡) nécessaire pour former l'état de transition ; elles ne changent ni le ΔG global ni la constante d'équilibre.", ["Modifiant le ΔG global de la réaction", "Modifiant la constante d'équilibre K'eq", "Abaissant l'énergie d'activation (ΔG‡)", "Consommant de l'énergie de façon irréversible"]),
    single("Que représente X‡ dans le schéma S ⇌ X‡ → P ?", "B", "X‡ désigne l'état de transition, la forme moléculaire de plus haute énergie, ni substrat ni produit.", ["Le produit final", "L'état de transition", "Le complexe enzyme-inhibiteur", "Le cofacteur de l'enzyme"]),
    single("Une diminution de 20 % de ΔG‡ entraîne :", "B", "D'après la relation exponentielle V ∝ e^(−ΔG‡/RT), une baisse de 20 % de ΔG‡ multiplie la vitesse par environ 10.", ["Une diminution de 20 % de la vitesse", "Une augmentation de 10 fois la vitesse", "Aucun effet sur la vitesse", "Une augmentation de 20 fois la vitesse"]),
    single("Le modèle de l'« ajustement induit » (induced fit) décrit :", "B", "Contrairement au modèle clé-serrure de Fischer, l'ajustement induit (Koshland) montre que l'enzyme change de forme pour épouser le substrat lors de la liaison.", ["Une liaison rigide type clé-serrure entre enzyme et substrat", "Un changement de conformation de l'enzyme lors de la liaison au substrat", "La formation d'un produit avant la liaison au substrat", "L'inhibition irréversible d'une enzyme"]),
    single("Dans l'équation de Michaelis-Menten V₀ = Vmax[S]/([S]+KM), que représente KM ?", "B", "KM est par définition la concentration de substrat pour laquelle la vitesse initiale V₀ atteint la moitié de Vmax.", ["La concentration d'enzyme totale", "La concentration de substrat donnant Vmax/2", "La vitesse maximale de la réaction", "Le nombre de tours de l'enzyme par seconde"]),
    single("KM approxime la constante de dissociation du complexe ES uniquement si :", "B", "KM = (k₋₁+k₂)/k₁ ; il ne se réduit à k₋₁/k₁ (constante de dissociation de ES) que si k₋₁ est très supérieur à k₂.", ["k₂ >> k₋₁", "k₋₁ >> k₂", "k₁ = k₂", "[S] >> KM"]),
    single("Vmax est atteinte lorsque :", "C", "Vmax = k₂[E]T est la vitesse maximale, obtenue quand la totalité de l'enzyme disponible est saturée par le substrat, sous forme ES.", ["[S] est très inférieur à KM", "Tout l'enzyme est sous forme libre", "Tout l'enzyme est sous forme de complexe ES", "L'enzyme est inhibée de façon compétitive"]),
    single("Le kcat (ou k₂) d'une enzyme correspond à :", "B", "kcat, aussi appelé turnover number, est le nombre de molécules de substrat transformées en produit par unité de temps par molécule d'enzyme (ou par site actif).", ["La concentration de substrat au demi-Vmax", "Le nombre de molécules de substrat converties en produit par seconde et par site actif", "La constante d'inhibition", "L'énergie de liaison enzyme-substrat"]),
    single("Le rapport kcat/KM mesure :", "B", "kcat/KM est une mesure de l'efficacité catalytique ; sa limite supérieure est fixée par k₁, la vitesse de rencontre diffusion-limitée entre enzyme et substrat (~10⁸-10⁹ M⁻¹s⁻¹ pour les enzymes « catalytiquement parfaites »).", ["La spécificité du substrat uniquement", "L'efficacité catalytique de l'enzyme, limitée par la vitesse de diffusion", "La constante d'équilibre de la réaction globale", "La concentration optimale d'inhibiteur"]),
    single("Dans un graphique de Lineweaver-Burk (1/V₀ en fonction de 1/[S]), la pente de la droite vaut :", "C", "L'équation de Lineweaver-Burk est 1/V₀ = (KM/Vmax)(1/[S]) + 1/Vmax ; la pente de la droite est donc KM/Vmax.", ["Vmax", "1/Vmax", "KM/Vmax", "−1/KM"]),
    single("Quel type d'enzymes présente une courbe sigmoïde de V₀ en fonction de [S], au lieu d'une hyperbole de Michaelis-Menten ?", "B", "Les enzymes allostériques présentent une liaison coopérative au substrat, ce qui donne une courbe sigmoïde plutôt qu'hyperbolique.", ["Les enzymes à cofacteur métallique", "Les enzymes allostériques (liaison coopérative)", "Les enzymes suicides", "Les enzymes à double déplacement"]),
    single("Une réaction à double déplacement (ping-pong) se caractérise par :", "B", "Dans les réactions ping-pong (ex. transamination), le premier substrat se lie, un produit est libéré et forme un intermédiaire covalent avec l'enzyme, puis le second substrat se lie ; il n'y a jamais de complexe ternaire.", ["La formation d'un complexe ternaire enzyme-substrat 1-substrat 2", "La formation d'un intermédiaire enzyme substitué, sans complexe ternaire", "L'absence totale de produit intermédiaire", "Une inhibition obligatoire par le second substrat"]),
    single("Un inhibiteur compétitif :", "B", "L'inhibiteur compétitif entre en compétition avec le substrat pour le site actif ; un excès de substrat peut le déplacer, donc Vmax reste inchangé, mais KMapp augmente.", ["Diminue Vmax et augmente KM", "N'a aucun effet sur Vmax mais augmente le KMapp", "Diminue Vmax sans changer KM", "Diminue à la fois Vmax et KM"]),
    single("Un inhibiteur non compétitif pur :", "B", "L'inhibiteur non compétitif se lie à l'enzyme libre et au complexe ES sans affecter l'affinité apparente pour le substrat (KM inchangé), mais empêche la formation de produit (Vmax diminué), sans pouvoir être surmonté par un excès de substrat.", ["Augmente KM et diminue Vmax", "Ne change pas KM mais diminue Vmax", "Ne change ni KM ni Vmax", "Diminue KM et augmente Vmax"]),
    single("La sulfanilamide agit comme inhibiteur compétitif car :", "A", "La sulfanilamide mime le PABA (para-aminobenzoïque), un précurseur de l'acide folique chez les bactéries ; elle inhibe l'enzyme qui métabolise le PABA. L'être humain n'est pas affecté car il obtient le folate via l'alimentation.", ["Elle ressemble structurellement au PABA et bloque la synthèse d'acide folique bactérien", "Elle forme une liaison covalente irréversible avec l'enzyme cible", "Elle bloque la synthèse de la paroi bactérienne", "Elle inhibe la monoamine oxydase"]),
    single("Un inhibiteur suicide (mécanisme-dépendant) se caractérise par :", "B", "Un inhibiteur suicide se lie d'abord comme un substrat normal ; la catalyse par l'enzyme le convertit en une espèce réactive qui se lie de façon covalente et irréversible à l'enzyme (ex. L-déprényl sur la MAO).", ["Une liaison réversible rapide au site actif", "Le fait que l'enzyme transforme elle-même le substrat en un inhibiteur covalent irréversible", "Une action uniquement sur l'enzyme libre", "Une compétition directe avec le substrat naturel sans catalyse"]),
    single("La pénicilline inhibe de façon irréversible :", "B", "Le cycle β-lactame très réactif de la pénicilline réagit avec une sérine du site actif de la transpeptidase bactérienne, formant un adduit pénicilloyl-sérine stable et inactivant l'enzyme responsable des ponts peptidiques du peptidoglycane.", ["La lysozyme, en clivant le peptidoglycane", "La glycopeptide transpeptidase, en formant un dérivé pénicilloyl-sérine stable", "L'ARN polymérase bactérienne", "La monoamine oxydase"]),
    single("L'étude d'enzymes molécule par molécule permet notamment de :", "B", "Les techniques à l'échelle de la molécule unique révèlent l'hétérogénéité et les fluctuations cinétiques entre molécules d'enzyme individuelles, invisibles dans les mesures classiques en solution (bulk).", ["Mesurer uniquement la Vmax moyenne d'une population d'enzymes", "Observer la variabilité et les fluctuations cinétiques individuelles masquées par les mesures d'ensemble", "Remplacer totalement les mesures de KM", "Étudier uniquement les enzymes allostériques"]),
  ],
  exam: { titre_fr: "Examen chronométré — Enzymes : concepts de base et cinétique", duration_seconds: 1_710 },
};

const CATALYTIC_STRATEGIES_COURSE = `# Chapitre 9 — Stratégies catalytiques des enzymes

## 1. La classification EC (Enzyme Commission)
Les enzymes sont classées en 7 catégories selon le type de réaction catalysée. Numéro EC attribué depuis 1961 ; la 7e classe (translocases) a été ajoutée en août 2018.

| Classe | Type de réaction | Exemple |
| --- | --- | --- |
| 1. Oxydoréductases | Transfert d'électrons / d'hydrogène (redox) | Lactate déshydrogénase |
| 2. Transférases | Transfert d'un groupe fonctionnel | Hexokinase |
| 3. Hydrolases | Hydrolyse (coupure par H₂O) | Trypsine |
| 4. Lyases | Addition/retrait de groupes, formation de doubles liaisons | Pyruvate décarboxylase |
| 5. Isomérases | Réarrangement intramoléculaire | Phosphoglucose isomérase |
| 6. Ligases | Formation de liaison, couplée à l'ATP | ADN ligase |
| 7. Translocases (2018) | Déplacement à travers une membrane | ATP synthase |

## 2. Détail des 7 classes
- **Oxydoréductases** : catalysent le transfert d'électrons ou d'hydrogène lors des réactions redox : Aréduit + Boxydé ↔ Aoxydé + Bréduit. Sous-types : déshydrogénases, réductases, peroxydases, cytochrome oxydase. Exemple clé : la lactate déshydrogénase interconvertit pyruvate ↔ lactate via NADH/NAD⁺.
- **Transférases** : transfèrent un groupe fonctionnel (méthyle, phosphate, amine…) d'une molécule donneuse à une autre : A–X + B → A + B–X. Kinases (ex. hexokinase) : transfèrent un phosphate depuis l'ATP. Transaminases : transfèrent un groupe amine entre acide aminé et acide cétonique. Méthyltransférases : transfèrent un groupe méthyle.
- **Hydrolases** : catalysent l'hydrolyse (coupure de liaison par H₂O) : A–B + H₂O → A–OH + B–H. Protéases/peptidases (trypsine, pepsine), lipases, nucléases, ATPases.
- **Lyases** : rupture de liaisons chimiques par un mécanisme autre que l'hydrolyse ou l'oxydation (souvent une élimination) : A–B ↔ A=B + X. Décarboxylases (retirent le CO₂), aldolases (clivent des liaisons C–C dans les sucres), synthases (≠ synthétases, ex. citrate synthase).
- **Isomérases** : modification structurale d'un composé en une forme isomérique, formule moléculaire inchangée : A ↔ isomère de A. Phosphoglucose isomérase (G6P ↔ F6P), racémases/épimérases (L ↔ D), mutases (déplacement intramoléculaire d'un groupe).
- **Ligases** : unissent deux molécules, en général couplées à l'hydrolyse de l'ATP : A + B + ATP → A–B + ADP + Pi. ADN ligase, synthétases (ex. glutamine synthétase), carboxylases (ex. pyruvate carboxylase).
- **Translocases** (EC 7, créée en août 2018 par l'IUBMB) : déplacement d'ions/molécules à travers les membranes. ATP synthase (complexe V), Na⁺/K⁺-ATPase (3 Na⁺ sortent, 2 K⁺ entrent par ATP hydrolysé).

## 3. Quatre grandes stratégies catalytiques communes
1. **Catalyse covalente** : le site actif contient un nucléophile brièvement modifié de façon covalente.
2. **Catalyse acido-basique générale** : une molécule autre que l'eau donne ou accepte un proton.
3. **Catalyse par approximation** : l'enzyme rapproche deux substrats dans une orientation favorable à la réaction.
4. **Catalyse par ions métalliques** : les métaux peuvent notamment agir comme catalyseurs électrophiles.

## 4. Les protéases : une réaction fondamentalement difficile
- L'hydrolyse des protéines est exergonique mais cinétiquement très lente : la stabilisation par résonance de la liaison peptidique (caractère de double liaison partiel C–N) explique sa résistance à l'hydrolyse.

### Chymotrypsine — une sérine très réactive
- Enzyme protéolytique pancréatique qui hydrolyse les liaisons peptidiques du côté carboxyle des résidus hydrophobes volumineux.
- La **Sérine 195** devient un nucléophile puissant qui attaque le carbonyle de la liaison peptidique du substrat.
- Preuve expérimentale : le DIPF (diisopropylphosphofluoridate) modifie uniquement la Ser195 (sur 28 sérines de l'enzyme), ce qui suffit à inhiber totalement l'enzyme.
- **Triade catalytique** : Asp102 – His57 – Ser195. L'histidine agit comme catalyseur basique (arrache un proton à Ser195, générant un ion alcoxyde réactif) ; l'aspartate oriente l'histidine et la rend meilleure accepteuse de proton.
- **Spécificité** : clive du côté carboxyle des acides aminés aromatiques/hydrophobes volumineux. La poche de spécificité S1 est hydrophobe et positionne la liaison adjacente pour la coupure.
- **Nomenclature de Schechter-Berger** : résidus P1, P2, P3… côté N-terminal de la coupure ; P1′, P2′… côté C-terminal ; sites correspondants sur l'enzyme S1, S2… et S1′, S2′…
- Comparaison chymotrypsine/trypsine/élastase : la même triade catalytique, mais Asp189 (trypsine) attire les résidus basiques, Val190/Val216 (élastase) referment la poche pour les petits résidus. D'autres protéases non homologues utilisent quand même une triade catalytique → évolution convergente (apparue indépendamment au moins 3 fois).

### Trois classes de protéases selon le nucléophile activé
| Classe | Mécanisme d'activation | Exemple |
| --- | --- | --- |
| Cystéine protéase | Cystéine activée par une histidine | Papaïne |
| Protéase aspartique | Molécule d'eau activée par un aspartate | Rénine |
| Métalloprotéase | Molécule d'eau activée par un métal (souvent Zn²⁺) | Thermolysine, carboxypeptidase |

- **Inhibiteurs de protéases, médicaments importants** : Captopril (inhibiteur de l'ECA, régule la pression artérielle) ; Indinavir (inhibiteur de la protéase aspartique du VIH, analogue du substrat, traitement du SIDA).

## 5. L'anhydrase carbonique : rendre une réaction rapide encore plus rapide
- Le CO₂, produit final du métabolisme aérobie, est converti en bicarbonate + proton par l'anhydrase carbonique (réaction inversée dans les poumons pour exhaler le CO₂) : CO₂ + H₂O ↔ H₂CO₃ ↔ HCO₃⁻ + H⁺.
- Rôles physiologiques : formation de l'humeur aqueuse de l'œil ; un déficit est associé à l'ostéopétrose et à un déficit intellectuel. Au moins 7 gènes homologues chez l'humain ; ce fut la première enzyme à zinc découverte.
- Le Zn²⁺ est lié à 4 ligands : 3 histidines (His94, His96, His119) + une molécule d'eau/ion hydroxyde selon le pH. Le pH optimal est 8 ; le Zn²⁺ abaisse le pKa de l'eau de ~15,7 à ~7, générant l'ion OH⁻, nucléophile puissant.
- Mécanisme en 4 étapes : (1) le Zn²⁺ facilite la libération d'un H⁺ à partir de l'eau liée → OH⁻ ; (2) le CO₂ se fixe au site actif ; (3) OH⁻ attaque le CO₂ → HCO₃⁻ ; (4) le site actif est régénéré.

## 6. Les enzymes de restriction
- Les bactéries possèdent des endonucléases de restriction (type II) qui dégradent l'ADN viral en clivant au sein de séquences spécifiques (« cognates »), sans dégrader l'ADN de l'hôte porteur de la même séquence.
- Toutes hydrolysent les liaisons phosphodiester, laissant un phosphoryle en 5′, par déplacement en ligne (in-line) d'une eau activée par du **magnésium** (ex. EcoRV, Asp74/Asp90 coordonnant le Mg²⁺).
- Spécificité par distorsion de l'ADN : les séquences de reconnaissance sont des répétitions inversées à symétrie d'ordre 2 (enzymes = dimères) ; la fixation déforme (kink) l'ADN cognate, rapprochant le phosphoanhydride du Mg²⁺ et augmentant l'énergie de liaison.
- **Protection de l'hôte** : les sites de reconnaissance de l'ADN de l'hôte sont méthylés par des méthylases, ce qui empêche la distorsion nécessaire à la catalyse (système de restriction-modification).

## 7. Les myosines : convertir l'hydrolyse de l'ATP en travail mécanique
- Les myosines utilisent l'énergie de l'hydrolyse de l'ATP pour propulser le mouvement dans la cellule : ATP + H₂O ↔ ADP + Pi.
- L'ATP doit être lié au **Mg²⁺** (ou Mn²⁺) pour être un substrat fonctionnel — vrai pour la plupart des NTPases.
- Des myosines fluorescentes sur actine restent immobiles sans ATP mais se déplacent par pas d'environ 74 nm avec ATP.
- Structure en **boucle P** (P-loop, feuillet β central entouré d'hélices α) partagée par toute une famille de NTPases (adénylate kinase, sous-unité α de la transducine, sous-unité β de l'ATP synthase).

## Points à retenir
- 7 classes EC : oxydoréductases, transférases, hydrolases, lyases, isomérases, ligases, translocases (2018).
- Triade catalytique de la chymotrypsine : Asp102–His57–Ser195 ; trois classes de protéases selon le nucléophile (Cys/His, Asp/H₂O, métal/H₂O).
- L'anhydrase carbonique utilise le Zn²⁺ pour générer un OH⁻ nucléophile ; c'est l'une des enzymes les plus rapides connues.
- Les enzymes de restriction reconnaissent une séquence, la déforment (kink) et clivent avec du Mg²⁺ ; la méthylation protège l'ADN de l'hôte.
- Les myosines couplent hydrolyse de l'ATP (Mg²⁺-dépendante) et mouvement mécanique via la boucle P.`;

export const CATALYTIC_STRATEGIES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Stratégies catalytiques des enzymes",
    source_label: "MedByJes — Chapitre 9 · Stratégies catalytiques (Berg, Tymoczko, Gatto & Stryer, Biochemistry, 9e éd.)",
    content_fr: CATALYTIC_STRATEGIES_COURSE,
  },
  qcm: [
    single("Selon la classification EC, quelle classe catalyse le transfert d'électrons lors de réactions redox ?", "B", "Les oxydoréductases catalysent les réactions de transfert d'électrons/d'hydrogène.", ["Transférases", "Oxydoréductases", "Isomérases", "Ligases"]),
    single("Quelle classe d'enzymes a été officiellement créée en août 2018 par l'IUBMB ?", "C", "Les translocases (EC 7) ont été créées en août 2018 par l'IUBMB.", ["Les hydrolases", "Les lyases", "Les translocases (EC 7)", "Les ligases"]),
    single("Une kinase comme l'hexokinase appartient à quelle classe EC ?", "B", "Les kinases sont des transférases : elles transfèrent un groupe phosphate depuis l'ATP.", ["Oxydoréductases", "Transférases", "Hydrolases", "Isomérases"]),
    single("Quelle(s) enzyme(s) forme(nt) une nouvelle double liaison ou un nouveau cycle par un mécanisme autre que l'hydrolyse ou l'oxydation ?", "B", "Les lyases catalysent une élimination formant souvent une double liaison ou un cycle.", ["Les hydrolases", "Les lyases", "Les ligases", "Les translocases"]),
    single("La phosphoglucose isomérase catalyse la réaction :", "A", "La phosphoglucose isomérase interconvertit glucose-6-phosphate et fructose-6-phosphate.", ["Glucose-6-phosphate ↔ fructose-6-phosphate", "Pyruvate ↔ lactate", "Glutamate ↔ glutamine", "ATP ↔ ADP + Pi"]),
    single("Parmi les propositions suivantes concernant l'hydrolyse des protéines, laquelle est exacte ?", "B", "L'hydrolyse protéique est exergonique mais cinétiquement très lente, d'où le besoin d'un catalyseur.", ["Elle est endergonique et rapide", "Elle est exergonique mais cinétiquement très lente", "Elle est endergonique et cinétiquement très lente", "Elle est exergonique et rapide sans catalyseur"]),
    single("La résistance de la liaison peptidique à l'hydrolyse s'explique principalement par :", "B", "La stabilisation par résonance (caractère partiel de double liaison C–N) explique la résistance de la liaison peptidique.", ["Sa charge négative permanente", "La stabilisation par résonance de la liaison peptidique", "Sa faible polarité", "La présence systématique d'un groupe méthyle"]),
    single("Dans la chymotrypsine, quel résidu devient un nucléophile fort qui attaque le carbonyle du substrat ?", "C", "La sérine 195 devient un nucléophile fort (via déprotonation par His57) qui attaque le carbonyle.", ["Histidine 57", "Aspartate 102", "Sérine 195", "Tryptophane 215"]),
    single("Dans la triade catalytique de la chymotrypsine, quel est le rôle de l'histidine 57 ?", "B", "L'histidine 57 agit comme base, arrachant un proton à la sérine 195 pour générer l'ion alcoxyde.", ["Elle forme la liaison covalente finale avec le substrat", "Elle agit comme catalyseur basique en arrachant un proton à la sérine 195", "Elle constitue la poche de spécificité S1", "Elle active une molécule d'eau par un ion métallique"]),
    single("Le réactif DIPF a permis de démontrer que :", "B", "Le DIPF ne modifie que la sérine 195 (sur 28), ce qui suffit à inhiber totalement l'enzyme — preuve de son rôle essentiel.", ["Toutes les sérines de la chymotrypsine sont indispensables à l'activité", "Seule la sérine 195 est essentielle à l'activité catalytique", "L'histidine 57 est le seul résidu catalytique", "La chymotrypsine ne contient aucune sérine réactive"]),
    single("La spécificité de la chymotrypsine pour les résidus aromatiques/hydrophobes volumineux s'explique par :", "B", "La poche S1, hydrophobe, fixe les résidus aromatiques/hydrophobes volumineux et positionne la liaison à cliver.", ["La présence d'un ion zinc dans le site actif", "La poche de spécificité S1, hydrophobe", "Une charge positive du site actif", "La liaison à un cofacteur magnésium"]),
    single("Quelle protéase utilise une cystéine activée par une histidine comme nucléophile ?", "B", "La papaïne est l'exemple donné de cystéine protéase (cystéine activée par une histidine).", ["La rénine", "La papaïne", "La thermolysine", "La carboxypeptidase"]),
    single("La rénine est un exemple représentatif de quelle classe de protéase ?", "B", "La rénine est l'exemple donné de protéase aspartique (eau activée par un aspartate).", ["Cystéine protéase", "Protéase aspartique", "Métalloprotéase", "Sérine protéase à triade classique"]),
    single("L'indinavir, utilisé dans le traitement du SIDA, est :", "B", "L'indinavir inhibe la protéase aspartique du VIH ; c'est un analogue du substrat de cette protéase.", ["Un inhibiteur de l'enzyme de conversion de l'angiotensine", "Un inhibiteur de la protéase aspartique du VIH, analogue du substrat", "Un inhibiteur de l'anhydrase carbonique", "Un inhibiteur de la myosine"]),
    single("Dans l'anhydrase carbonique, à combien de ligands le Zn²⁺ est-il coordonné, et lesquels ?", "B", "Le Zn²⁺ est lié à 4 ligands : trois histidines (His94, His96, His119) et une molécule d'eau/ion hydroxyde.", ["2 ligands : deux molécules d'eau", "4 ligands : trois histidines + une molécule d'eau/ion hydroxyde", "6 ligands : six histidines", "4 ligands : deux aspartates + deux histidines"]),
    single("Le rôle du Zn²⁺ dans le mécanisme de l'anhydrase carbonique est de :", "A", "Le Zn²⁺ abaisse le pKa de l'eau liée (~15,7 → ~7), générant l'ion OH⁻ nucléophile qui attaque le CO₂.", ["Abaisser le pKa de l'eau liée pour générer un ion hydroxyde nucléophile", "Servir uniquement de charpente structurale sans rôle catalytique", "Activer directement le CO₂ en le méthylant", "Remplacer le rôle de l'histidine catalytique"]),
    single("Les enzymes de restriction de type II clivent l'ADN de l'hôte de façon sélective grâce à :", "B", "La méthylation des sites de reconnaissance dans l'ADN de l'hôte empêche la distorsion nécessaire à la catalyse, protégeant ainsi cet ADN.", ["La dégradation systématique de tout ADN double brin", "La méthylation des séquences de reconnaissance de l'ADN de l'hôte, qui empêche la distorsion nécessaire à la catalyse", "L'absence totale de séquences de reconnaissance dans le génome de l'hôte", "Un pH interne différent de celui de l'ADN viral"]),
    single("Quel cofacteur est indispensable à l'activité catalytique des enzymes de restriction comme EcoRV ?", "C", "Le magnésium (Mg²⁺) est le cofacteur indispensable ; il active la molécule d'eau qui attaque le phosphore.", ["Le zinc (Zn²⁺)", "Le fer (Fe²⁺)", "Le magnésium (Mg²⁺)", "Le calcium (Ca²⁺)"]),
    single("Pour être un substrat fonctionnel de la myosine, l'ATP doit être :", "A", "L'ATP doit être complexé au Mg²⁺ (ou Mn²⁺) pour servir de substrat fonctionnel à la myosine.", ["Lié à un ion Mg²⁺ (ou Mn²⁺)", "Sous forme entièrement déphosphorylée", "Lié à un ion Zn²⁺", "Méthylé au niveau de l'adénine"]),
    single("La structure en « boucle P » (P-loop) retrouvée dans la myosine est également présente dans :", "B", "Le domaine P-loop est partagé par une famille de NTPases : adénylate kinase, sous-unité α de la transducine, sous-unité β de l'ATP synthase, etc.", ["Exclusivement dans les myosines musculaires", "D'autres NTPases comme l'adénylate kinase ou la sous-unité β de l'ATP synthase", "Uniquement les enzymes de restriction", "Uniquement les protéases à sérine"]),
  ],
  exam: { titre_fr: "Examen chronométré — Stratégies catalytiques des enzymes", duration_seconds: 1_800 },
};

const REGULATION_STRATEGIES_COURSE = `# Chapitre 10 — Stratégies de régulation enzymatique

L'activité enzymatique est régulée selon 5 grands mécanismes : (1) contrôle allostérique, (2) existence de formes multiples (isozymes), (3) modification covalente réversible, (4) activation protéolytique, (5) contrôle de la quantité d'enzyme présente (synthèse/dégradation).

## 1. L'aspartate transcarbamoylase (ATCase) — inhibition allostérique par un produit final

### Réaction et rétro-inhibition
- ATCase catalyse la première étape de la voie de synthèse des pyrimidines : carbamoyl-phosphate + aspartate → N-carbamoylaspartate + Pi.
- La **CTP**, produit final de cette voie, inhibe ATCase : exemple classique de **rétro-inhibition** (feedback inhibition), en se liant sur un site allostérique distinct du site actif.
- L'**ATP** est au contraire un **activateur** allostérique d'ATCase (signal indiquant une disponibilité en purines/énergie favorable à la synthèse de pyrimidines).

### Cinétique sigmoïde et coopérativité
- Contrairement aux enzymes michaeliennes (courbe hyperbolique), ATCase présente une courbe **sigmoïde** (vitesse en fonction de [aspartate]), résultant de la coopérativité entre sous-unités.
- Intérêt physiologique : une cinétique sigmoïde crée un effet de seuil, rendant l'enzyme plus sensible aux variations de concentration en substrat autour du point d'inflexion.

### Structure quaternaire
- ATCase native = complexe **c₆r₆** : 2 trimères catalytiques (c3) + 3 dimères régulateurs (r2).
- Le p-hydroxymercuribenzoate dissocie l'enzyme en sous-unités catalytiques et régulatrices, séparables par ultracentrifugation ; leur mélange reconstitue l'enzyme native.
- Les sites actifs se trouvent à l'interface entre sous-unités catalytiques. Le bisubstrat analogue **PALA** a permis d'identifier le site actif et de piéger la transition T→R par cristallographie.

### Modèle T/R (concerté)
- Deux états en équilibre : état **T** (tendu, compact, peu actif, faible affinité) et état **R** (relâché, étendu, très actif, forte affinité).
- En l'absence de substrat, l'équilibre favorise l'état T. Le coefficient allostérique L = [T]/[R] décrit cet équilibre.
- La liaison du substrat déplace l'équilibre vers R : effet **homotropique** (effet du substrat lui-même sur les autres sites).
- ATCase suit le **modèle concerté** (« tout ou rien ») de Monod-Wyman-Changeux : tous les sites actifs sont dans le même état simultanément.
- Les effecteurs allostériques (CTP, ATP) sont des effecteurs **hétérotropiques** : ils modifient la valeur de L sans être eux-mêmes le substrat. CTP stabilise l'état T (courbe vers la droite) ; ATP stabilise l'état R (courbe vers la gauche).

## 2. Les isozymes — régulation spécifique de tissu et de stade développemental
- Les isoenzymes (isozymes) sont codées par des gènes différents, catalysent la même réaction mais peuvent avoir des propriétés cinétiques/régulatrices distinctes ; leur expression peut être tissu-spécifique et/ou dépendante du stade de développement.
- Exemple : la **lactate déshydrogénase (LDH)** est un tétramère combinant les sous-unités H (cœur) et M (muscle) → 5 isozymes possibles (H4, H3M, H2M2, HM3, M4).
- Le profil des isozymes de LDH varie selon le tissu (H4 dominant dans le cœur/globules rouges, M4 dominant dans le muscle/foie) et évolue au cours du développement.
- L'apparition d'isozymes spécifiques dans le sang est un signe clinique de lésion tissulaire (ex. dosage des isoenzymes cardiaques après infarctus).

## 3. La modification covalente réversible

### Généralités
- Modifications courantes : phosphorylation (ATP), acétylation (acétyl-CoA), myristoylation, ADP-ribosylation, farnésylation, γ-carboxylation, sulfatation, ubiquitination.

### Phosphorylation / déphosphorylation
- Les **protéines kinases** attachent un phosphate sur une sérine, thréonine ou tyrosine, en utilisant l'ATP comme donneur. Les **protéines phosphatases** retirent ce phosphate (hydrolyse, libération de Pi).
- Ces deux réactions sont énergétiquement irréversibles dans les conditions cellulaires (kinase et phosphatase empruntent des voies distinctes), ce qui permet un contrôle fin et rapide.
- Pourquoi la phosphorylation est un excellent mode de régulation : grande énergie libre de phosphorylation ; modification forte des interactions électrostatiques ; formation de liaisons hydrogène ; rapidité ; amplification du signal (cascades) ; l'ATP est la monnaie énergétique universelle.
- Exemples de kinases sérine/thréonine et leurs signaux activateurs : PKA (AMPc), PKG (GMPc), kinase Ca²⁺-calmoduline, AMPK (AMP), PKC (diacylglycérol).

### La protéine kinase A (PKA)
- L'épinéphrine (adrénaline) déclenche la réponse « combat ou fuite » et induit la synthèse d'AMPc dans les cellules musculaires.
- PKA inactive = complexe **R2C2** (2 sous-unités régulatrices + 2 catalytiques) ; une séquence pseudo-substrat de R bloque le site actif de C.
- La liaison de 4 molécules d'AMPc sur les sous-unités R provoque leur dissociation des sous-unités C, libérant les sous-unités catalytiques actives.
- Une mutation rendant PKA constitutivement active (C ne se liant plus à R) est une cause du **syndrome de Cushing** (sécrétion incontrôlée de cortisol).
- La phosphoprotéomique étudie l'ensemble des protéines phosphorylées ; l'exercice physique modifie la phosphorylation de plus de 1000 sites sur près de 600 protéines (via PKA, AMPK...), favorisant le métabolisme aérobie.

## 4. L'activation par clivage protéolytique spécifique

### Principe et zymogènes
- Le clivage protéolytique intervient dans : activation des enzymes digestives, coagulation sanguine, activation d'hormones, formation du collagène, développement, mort cellulaire programmée.
- Un **zymogène** (proenzyme) est un précurseur inactif activé par coupure d'une ou plusieurs liaisons peptidiques spécifiques. Contrairement aux autres modes de régulation, l'activation protéolytique est **irréversible**.
- Exemples : pepsinogène → pepsine (estomac) ; chymotrypsinogène → chymotrypsine, trypsinogène → trypsine, procarboxypeptidase → carboxypeptidase (pancréas).

### Chymotrypsinogène → chymotrypsine
- La trypsine clive le chymotrypsinogène (245 résidus, inactif) entre Arg15 et Ile16, générant la π-chymotrypsine (active).
- La π-chymotrypsine s'auto-clive ensuite (perte de 2 dipeptides) pour donner l'α-chymotrypsine mature (3 chaînes A, B, C reliées par ponts disulfure).
- Le clivage permet à l'amino-terminal d'Ile16 de former une interaction électrostatique avec le carboxylate de l'Asp194 : indispensable à la formation du site de liaison du substrat et de la poche oxyanionique.

### Cascade d'activation pancréatique
- L'**entéropeptidase** (intestin) active le trypsinogène en trypsine. La trypsine active ensuite en cascade : chymotrypsinogène, proélastase, procarboxypeptidase, prolipase — et peut aussi s'auto-activer.

### Inhibiteurs spécifiques des protéases
- L'inhibiteur pancréatique de la trypsine se lie très fortement au site actif de toute trypsine activée prématurément, empêchant l'auto-digestion du pancréas (pancréatite aiguë).
- L'**α1-antitrypsine** protège les tissus (notamment pulmonaires) de la dégradation par l'élastase ; un déficit génétique favorise l'**emphysème**. Le tabagisme oxyde une méthionine essentielle de l'α1-antitrypsine, aggravant ce risque.

### La cascade de coagulation
- **Voie intrinsèque** : déclenchée par le contact avec des surfaces anormales → activation du facteur XII (Hageman).
- **Voie extrinsèque** : déclenchée par le facteur tissulaire (TF) libéré lors d'un traumatisme, formant un complexe avec le facteur VII.
- Les deux voies convergent vers la voie commune finale : facteur X → prothrombine (II) → thrombine (IIa) → fibrinogène (I) → fibrine (Ia) → réseau réticulé (facteur XIIIa, une transglutaminase, forme les liaisons croisées Gln-Lys). Chaque facteur activé catalyse l'activation du suivant : cascade amplificatrice.
- La prothrombine contient des résidus γ-carboxyglutamate (Gla) qui fixent le Ca²⁺ et ancrent le zymogène aux plaquettes. Leur synthèse par la γ-glutamyl carboxylase nécessite la **vitamine K** ; le dicoumarol et la **warfarine** inhibent la régénération de la vitamine K active et sont utilisés comme anticoagulants.
- Le **facteur VIII** stimule l'activation du facteur X par le facteur IXa ; son activité est amplifiée par clivage limité par la thrombine (boucle de rétroaction positive). Son absence cause l'**hémophilie A** (maladie récessive liée à l'X).
- Régulation de la coagulation : instabilité de certains facteurs, dilution par le flux sanguin, dégradation par la protéine C (activée par la thrombine), inhibiteurs spécifiques (TFPI, antithrombine III), héparine.
- **Fibrinolyse** : le plasminogène est activé en plasmine (sérine protéase) par le **tPA**, qui dégrade la fibrine ; le tPA est utilisé en clinique pour traiter infarctus du myocarde et AVC.

## Tableau récapitulatif des 5 modes de régulation
| Mécanisme | Exemple | Réversible ? |
| --- | --- | --- |
| Contrôle allostérique | ATCase / CTP, ATP | Oui |
| Isozymes | LDH (H4...M4) | — (formes distinctes) |
| Modification covalente | Phosphorylation par PKA/AMPK | Oui |
| Activation protéolytique | Chymotrypsinogène, cascade de coagulation | Non (irréversible) |
| Contrôle de la quantité d'enzyme | Synthèse / dégradation de la protéine | — |

## Points à retenir
- ATCase (c₆r₆) : CTP inhibe (stabilise T), ATP active (stabilise R) ; modèle concerté MWC, effet homotropique du substrat, effets hétérotropiques des effecteurs.
- Isozymes de LDH (H4→M4) : profils tissu-spécifiques, marqueurs cliniques de lésion (ex. infarctus).
- Phosphorylation/déphosphorylation (Ser/Thr/Tyr, ATP-dépendante) : rapide, réversible, amplifiable en cascade (PKA activée par l'AMPc).
- Activation protéolytique = irréversible (zymogènes) ; cascade de coagulation Ca²⁺/vitamine K-dépendante, régulée par des inhibiteurs spécifiques (α1-antitrypsine, antithrombine III) et la fibrinolyse (tPA).`;

export const REGULATION_STRATEGIES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Stratégies de régulation enzymatique",
    source_label: "MedByJes — Chapitre 10 · Stratégies de régulation (Berg, Tymoczko, Gatto & Stryer, Biochemistry, 9e éd.)",
    content_fr: REGULATION_STRATEGIES_COURSE,
  },
  qcm: [
    single("Que catalyse l'aspartate transcarbamoylase (ATCase) ?", "B", "ATCase catalyse la première étape de la voie de synthèse des pyrimidines.", ["La dernière étape de la synthèse des purines", "La première étape de la synthèse des pyrimidines", "La dégradation de la CTP", "La phosphorylation de l'aspartate"]),
    single("Quel est le rôle de la CTP vis-à-vis d'ATCase ?", "C", "La CTP, produit final de la voie, inhibe ATCase par rétro-inhibition allostérique.", ["Substrat de la réaction", "Cofacteur indispensable au site actif", "Inhibiteur allostérique (rétro-inhibition)", "Produit intermédiaire de la voie"]),
    single("Quel effecteur active allostériquement ATCase ?", "B", "L'ATP est un activateur allostérique d'ATCase, signal d'une disponibilité en purines/énergie.", ["CTP", "ATP", "GTP", "UTP"]),
    single("La courbe vitesse = f([substrat]) d'ATCase est :", "B", "ATCase présente une courbe sigmoïde du fait de la coopérativité entre sous-unités.", ["Hyperbolique, comme Michaelis-Menten", "Sigmoïde, du fait de la coopérativité", "Linéaire", "Exponentielle décroissante"]),
    single("La structure quaternaire native d'ATCase est notée :", "B", "ATCase native = complexe c6r6 (2 trimères catalytiques + 3 dimères régulateurs).", ["c3r3", "c6r6", "c2r2", "c4r4"]),
    single("Quel composé a permis d'identifier le site actif d'ATCase par cristallographie ?", "A", "Le PALA, bisubstrat analogue, a permis d'identifier le site actif et de piéger la transition T→R.", ["Le PALA (bisubstrat analogue)", "Le p-hydroxymercuribenzoate", "La warfarine", "Le dicoumarol"]),
    single("Dans le modèle concerté (Monod-Wyman-Changeux) appliqué à ATCase :", "B", "Toutes les sous-unités sont simultanément dans le même état, T ou R.", ["Chaque sous-unité peut être dans un état différent des autres", "Toutes les sous-unités sont simultanément dans le même état, T ou R", "Seul l'état T existe en présence de substrat", "Le modèle ne s'applique qu'aux enzymes monomériques"]),
    single("Un effet homotropique désigne :", "B", "Un effet homotropique est l'effet du substrat lui-même sur la liaison aux autres sites actifs.", ["L'effet d'un effecteur allostérique différent du substrat", "L'effet du substrat lui-même sur la liaison aux autres sites actifs", "L'effet d'une hormone sur l'expression génique", "L'effet d'un inhibiteur compétitif classique"]),
    single("Les isozymes (isoenzymes) sont définis comme :", "B", "Les isozymes sont des enzymes codées par des gènes différents mais catalysant la même réaction.", ["Des enzymes identiques présentes dans tous les tissus", "Des enzymes codées par des gènes différents mais catalysant la même réaction", "Des formes actives issues d'un clivage protéolytique", "Des variants d'épissage d'un seul et même gène toujours"]),
    single("Concernant la lactate déshydrogénase (LDH) :", "B", "Ses isozymes combinent des sous-unités H et M en tétramères (H4, H3M, H2M2, HM3, M4).", ["Elle n'existe que sous une seule forme", "Ses isozymes combinent des sous-unités H et M en tétramères", "Elle est un dimère de deux sous-unités identiques", "Ses isozymes ne varient jamais selon le tissu"]),
    single("La phosphorylation d'une protéine par une kinase utilise comme donneur de phosphate :", "B", "L'ATP est le donneur de phosphate utilisé par les protéines kinases.", ["Le NADH", "L'ATP", "Le GTP uniquement", "Le Pi libre"]),
    single("Les protéines kinases phosphorylent préférentiellement les résidus :", "B", "Les kinases phosphorylent la sérine, la thréonine et la tyrosine.", ["Lysine, arginine, histidine", "Sérine, thréonine, tyrosine", "Aspartate, glutamate", "Cystéine, méthionine"]),
    single("Sous les conditions cellulaires, phosphorylation et déphosphorylation sont :", "B", "Ce sont des réactions énergétiquement irréversibles, catalysées par deux enzymes distinctes (kinase et phosphatase).", ["Des réactions réversibles au sens thermodynamique strict (même voie aller-retour)", "Des réactions énergétiquement irréversibles, catalysées par deux enzymes distinctes", "Impossibles sans cofacteur métallique", "Catalysées par la même enzyme dans les deux sens"]),
    single("La protéine kinase A (PKA) est activée par :", "B", "La liaison de l'AMPc sur les sous-unités régulatrices de PKA provoque leur dissociation des sous-unités catalytiques.", ["La liaison du Ca2+ directement sur la sous-unité catalytique", "La liaison de l'AMPc sur les sous-unités régulatrices, provoquant leur dissociation", "Le clivage protéolytique de sa sous-unité régulatrice", "La phosphorylation de son propre site actif"]),
    single("Une mutation rendant la sous-unité catalytique de PKA incapable de se lier à la sous-unité régulatrice est associée à :", "C", "Une PKA constitutivement active est une cause du syndrome de Cushing (sécrétion incontrôlée de cortisol).", ["L'hémophilie A", "L'emphysème", "Le syndrome de Cushing", "La pancréatite aiguë"]),
    single("Un zymogène (proenzyme) est :", "B", "Un zymogène est un précurseur inactif activé par clivage protéolytique spécifique.", ["Une enzyme mature toujours active", "Un précurseur inactif activé par clivage protéolytique spécifique", "Un isozyme spécifique d'un tissu", "Un cofacteur nécessaire à l'activité enzymatique"]),
    single("Le passage du chymotrypsinogène à la chymotrypsine active nécessite notamment :", "B", "Un clivage par la trypsine entre Arg15 et Ile16 génère la forme active.", ["Une phosphorylation par PKA", "Un clivage par la trypsine entre Arg15 et Ile16", "La fixation de calcium sur des résidus Gla", "Une acétylation de la lysine 84"]),
    single("Quelle enzyme active le trypsinogène en trypsine dans l'intestin ?", "C", "L'entéropeptidase intestinale active le trypsinogène en trypsine.", ["La chymotrypsine", "L'élastase", "L'entéropeptidase", "Le facteur tissulaire"]),
    single("Un déficit en α1-antitrypsine favorise :", "C", "Un déficit en α1-antitrypsine favorise l'emphysème, par excès d'activité de l'élastase non contrôlée.", ["L'hémophilie A", "Le syndrome de Cushing", "L'emphysème, par excès d'activité de l'élastase", "La pancréatite aiguë"]),
    single("La vitamine K est nécessaire à :", "B", "La vitamine K est nécessaire à la carboxylation de résidus glutamate en γ-carboxyglutamate sur la prothrombine.", ["La phosphorylation de la thrombine", "La carboxylation de résidus glutamate en γ-carboxyglutamate sur la prothrombine", "L'activation du facteur tissulaire", "La dégradation de la fibrine par la plasmine"]),
    single("La warfarine et le dicoumarol agissent comme anticoagulants en :", "B", "Ils inhibent la régénération de la forme active de la vitamine K, nécessaire à la synthèse des résidus Gla.", ["Activant directement la plasmine", "Inhibant la régénération de la forme active de la vitamine K", "Clivant directement le fibrinogène", "Bloquant le facteur tissulaire"]),
    single("Le facteur VIII (facteur antihémophilique) :", "B", "Le facteur VIII stimule l'activation du facteur X par le facteur IXa, et son activité est amplifiée par la thrombine.", ["Est une sérine protéase qui clive directement le facteur X", "Stimule l'activation du facteur X par le facteur IXa et voit son activité amplifiée par la thrombine", "Inhibe la cascade de coagulation", "Est absent chez tous les individus sains"]),
    single("Le tPA (activateur tissulaire du plasminogène) est utilisé en clinique pour :", "B", "Le tPA est utilisé pour traiter l'infarctus du myocarde et l'AVC en dissolvant les caillots.", ["Favoriser la formation de caillots", "Traiter l'infarctus du myocarde et l'AVC en dissolvant les caillots", "Traiter l'emphysème", "Activer la trypsine"]),
  ],
  exam: { titre_fr: "Examen chronométré — Stratégies de régulation enzymatique", duration_seconds: 2_070 },
};
