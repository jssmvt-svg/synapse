import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const PERITONEUM_COURSE = `# Le péritoine

## 1. Abdomen et cavité abdominale
- L'**abdomen** est la partie inférieure du tronc, sous le diaphragme ; ses parois entourent la **cavité abdominale**.
- La cavité abdominale s'étend en haut jusqu'au diaphragme (sous le rebord costal) et en bas dans le petit bassin osseux. Le plan de **l'ouverture supérieure du bassin** (détroit supérieur) la subdivise en :
  - une partie supérieure plus grande : la **cavité abdominale proprement dite** ;
  - une partie inférieure plus petite : la **cavité pelvienne**.
- Le **détroit supérieur du bassin** est limité en arrière par le promontoire sacré, en avant par le bord supérieur de la symphyse pubienne, et de chaque côté par la ligne innominée (bord antérieur de l'aile du sacrum, ligne arquée, ligne pectinée, crête pubienne).

## 2. Limites de la cavité abdominale
- **Supérieurement** : le diaphragme, qui la sépare de la cavité thoracique.
- **Inférieurement** : elle se poursuit avec la cavité pelvienne au niveau du détroit supérieur.
- **Antérieurement** : la paroi abdominale antérieure, formée par l'oblique externe, l'oblique interne, le transverse de l'abdomen et leurs aponévroses, le fascia transversalis, et une paire de muscles verticaux (les grands droits de l'abdomen).
- **Latéralement** : les côtes inférieures et une partie des muscles de la paroi abdominale antérieure.
- **Postérieurement** : la colonne vertébrale, les muscles qui s'y attachent (diaphragme, psoas majeur, carré des lombes) et le fascia thoraco-lombaire.

## 3. Forme et contenu
- En coupe transversale, la cavité abdominale est en forme de **rein** : la colonne vertébrale fait saillie en arrière sur la ligne médiane, créant une **gouttière paravertébrale** de chaque côté.
- Trois couches de structures se trouvent en arrière de la grande cavité péritonéale, d'arrière en avant :
  1. Reins, uretères et glandes surrénales — dans la gouttière paravertébrale, enveloppés par le fascia de la cavité abdominale.
  2. Aorte abdominale et veine cave inférieure — sur la face antérieure de la colonne vertébrale, enveloppées dans le fascia endo-abdominal.
  3. Estomac, intestins et leurs glandes annexes (foie, pancréas), rate — en avant, plus ou moins entourés par la cavité péritonéale.
- **9 régions abdominales** : les cliniciens divisent la cavité abdominale en 9 régions à l'aide de 4 plans imaginaires (2 horizontaux, 2 verticaux) pour situer les organes et les douleurs. Le **plan transpylorique d'Addison** passe au bord inférieur de L1 (9ᵉ cartilages costaux) ; le **plan intertuberculaire** passe au bord supérieur de L5 (tubercules des crêtes iliaques, 5 cm en arrière de l'épine iliaque antéro-supérieure) ; les 2 plans verticaux relient le milieu de la clavicule au point médio-inguinal.

## 4. Le péritoine
- Le **péritoine** est une vaste membrane séreuse fine qui tapisse l'intérieur de la cavité abdomino-pelvienne, comparable à la plèvre ou au péricarde séreux. Il comporte un feuillet **pariétal** (simple, tapissant les parois) et un feuillet **viscéral** (complexe, formant des replis autour du tube digestif).
- Ces deux feuillets sont séparés par un espace virtuel, la **cavité péritonéale**, contenant un mince film de liquide.

## 5. Replis péritonéaux
- Formés par le feuillet viscéral, ils suspendent de nombreux organes intra-abdominaux (mobilité selon la taille/direction du repli) et livrent passage aux nerfs, vaisseaux et lymphatiques.
- Les organes situés en dehors de la cavité péritonéale (**rétropéritonéaux**) sont fixes.
- La **zygose** est le processus par lequel un organe initialement suspendu par un méso (et donc mobile) fusionne son méso avec le péritoine pariétal, puis les feuillets fusionnés s'atrophient : l'organe devient secondairement rétropéritonéal.
- **Organes primitivement rétropéritonéaux** (n'ont jamais eu de méso) : reins, surrénales, uretères, aorte, veine cave inférieure, bas rectum, canal anal.
- **Organes secondairement rétropéritonéaux** (méso perdu par zygose) : pancréas (sauf la queue), duodénum (sauf les 2 premiers cm), côlon ascendant, côlon descendant, rectum (deux tiers supérieurs).

## 6. Classification des replis péritonéaux
- **Mésentère/mésocôlon** : repli suspendant l'intestin grêle (mésentère) ou le côlon (mésocôlon).
- **Épiploons (omenta)** : replis reliant l'estomac à d'autres viscères — **grand épiploon** (estomac–côlon transverse), **petit épiploon** (estomac–foie), **ligament gastro-splénique** (estomac–rate).
- **Ligaments** : replis reliant des organes entre eux ou à la paroi — ex. ligament spléno-rénal (rein–rate), ligaments coronaires (foie–diaphragme).

## 7. La cavité péritonéale
- C'est le plus vaste et le plus complexe sac séreux du corps, espace virtuel entre feuillets pariétal et viscéral. Chez l'homme, cavité fermée ; chez la femme, elle communique avec l'extérieur via les trompes utérines, l'utérus et le vagin — ce qui explique la fréquence des infections pelviennes chez la femme.
- Elle se divise en :
  - **Grande cavité (grand sac)** : compartiment principal, occupant toute la largeur/longueur de l'abdomen.
  - **Petite cavité (arrière-cavité des épiploons/bourse omentale)** : plus petit compartiment, en arrière de l'estomac, du foie et du petit épiploon, communiquant avec le grand sac par le **foramen épiploïque (de Winslow)**.

## 8. Compartiments supracolique et infracolique
- Le mésocôlon transverse et le côlon transverse divisent la cavité péritonéale en un compartiment **supracolique** (antéro-supérieur) et un compartiment **infracolique** (postéro-inférieur).
- **Compartiment supracolique** : entoure le foie, l'estomac, la rate et la partie supérieure du duodénum ; il est en avant du pancréas, du duodénum, des reins et des surrénales.
  - **Espaces sous-phréniques** : 4 espaces sous le diaphragme, définis par rapport au foie, importants en chirurgie car sièges fréquents d'abcès sous-phréniques :
    1. **Espace antérieur gauche** (sous-phrénique gauche) : entre le lobe gauche du foie et le diaphragme, en avant du ligament triangulaire gauche.
    2. **Bourse omentale (arrière-cavité des épiploons)** : diverticule en arrière de l'estomac, communiquant avec le grand sac par le foramen épiploïque (de Winslow), situé en arrière du bord libre droit du petit épiploon au niveau de T12. Limites du foramen : en avant le bord libre du petit épiploon (canal cholédoque, artère hépatique, veine porte) ; en arrière la veine cave inférieure et la surrénale droite ; en haut le processus caudé du foie ; en bas le premier duodénum. La bourse omentale comporte 3 récessus : supérieur (vestibule derrière le petit épiploon), inférieur (entre les feuillets du grand épiploon) et splénique (entre ligaments gastro-splénique et spléno-rénal).
    3. **Espace antérieur droit** (sous-phrénique droit) : entre la face antérieure du lobe droit du foie et le diaphragme.
    4. **Espace postérieur droit (poche de Morrison, sous-hépatique)** : entre la face postéro-inférieure du foie et le rein droit ; en décubitus dorsal, c'est le point le plus déclive de la cavité péritonéale au-dessus du détroit supérieur — les liquides pathologiques (épanchements, pus, sang) ont tendance à s'y collecter.
- **Compartiment infracolique** : contient les anses jéjuno-iléales, entouré par les côlons ascendant, transverse et descendant. La racine du mésentère le divise en espace infracolique droit (triangulaire) et gauche (quadrangulaire, plus grand, continu avec la cavité pelvienne).
- **Gouttières pariéto-coliques** : droite (latérale au côlon ascendant, continue en haut avec la poche de Morrison et en bas avec le pelvis — voie de propagation d'infection depuis l'appendice ou la poche de Morrison) et gauche (latérale au côlon descendant, limitée en haut par le ligament phrénico-colique, continue en bas avec le pelvis).

## Points à retenir
- Péritoine pariétal (parois) vs viscéral (organes) ; cavité péritonéale = espace virtuel entre les deux.
- Rétropéritonéal primitif (jamais eu de méso) vs secondaire (méso perdu par zygose) — distinction clé pour la chirurgie et l'imagerie.
- Grand sac vs petite cavité (bourse omentale), communiquant par le foramen de Winslow.
- La poche de Morrison est le point le plus déclive en décubitus dorsal : site classique de collection liquidienne.`;

export const PERITONEUM_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Péritoine",
    source_label: "Anatomie — Lecture 7 (Péritoine)",
    content_fr: PERITONEUM_COURSE,
  },
  qcm: [
    single("Quelle structure divise la cavité abdominale en cavité abdominale proprement dite et cavité pelvienne ?", "B", "Le plan du détroit supérieur du bassin (pelvic inlet) sépare la cavité abdominale proprement dite (au-dessus) de la cavité pelvienne (en dessous).", ["Le mésocôlon transverse", "Le plan du détroit supérieur du bassin", "Le ligament de Treitz", "Le fascia transversalis"]),
    single("Au niveau de quelle vertèbre passe le plan transpylorique d'Addison ?", "A", "Le plan transpylorique passe au bord inférieur de L1, coupant le rebord costal au niveau des 9es cartilages costaux.", ["L1", "L3", "L5", "T12"]),
    multi("Quelles structures forment la limite postérieure de la cavité abdominale ?", ["A", "B", "C"], "La colonne vertébrale, le diaphragme, le psoas majeur et le carré des lombes forment la paroi postérieure de la cavité abdominale.", ["Colonne vertébrale", "Psoas majeur", "Diaphragme", "Grand droit de l'abdomen"]),
    single("Pourquoi la cavité abdominale est-elle dite « en forme de rein » en coupe transversale ?", "C", "La colonne vertébrale fait saillie postérieurement sur la ligne médiane, créant une gouttière paravertébrale de chaque côté et donnant cette forme.", ["À cause de la position des reins", "À cause de la forme du foie", "À cause de la saillie postérieure de la colonne vertébrale", "À cause de la forme de l'estomac"]),
    single("Quel feuillet du péritoine tapisse les parois de la cavité abdomino-pelvienne ?", "A", "Le péritoine pariétal est un feuillet simple tapissant la surface interne des parois abdomino-pelviennes.", ["Le péritoine pariétal", "Le péritoine viscéral", "Le mésentère", "Le grand épiploon"]),
    single("Qu'est-ce que la zygose ?", "B", "La zygose est le processus par lequel le méso d'un organe fusionne avec le péritoine pariétal puis s'atrophie, rendant l'organe secondairement rétropéritonéal.", ["La formation initiale d'un méso", "La fusion et l'atrophie d'un méso rendant un organe secondairement rétropéritonéal", "La vascularisation d'un organe par le péritoine", "La formation d'un abcès sous-phrénique"]),
    multi("Quels organes sont primitivement rétropéritonéaux (n'ont jamais eu de méso) ?", ["A", "B", "D"], "Les reins, les surrénales, les uretères, l'aorte, la veine cave inférieure, le bas rectum et le canal anal sont primitivement rétropéritonéaux.", ["Reins", "Surrénales", "Pancréas (corps et queue)", "Uretères"]),
    single("Le pancréas est-il primitivement ou secondairement rétropéritonéal (sauf sa queue) ?", "B", "Le pancréas (sauf la queue, intrapéritonéale dans le ligament spléno-rénal) est secondairement rétropéritonéal, ayant perdu son méso par zygose.", ["Primitivement rétropéritonéal", "Secondairement rétropéritonéal", "Totalement intrapéritonéal", "Il n'a jamais de rapport avec le péritoine"]),
    single("Quel repli péritonéal relie l'estomac au côlon transverse ?", "C", "Le grand épiploon relie les deux tiers inférieurs de la grande courbure de l'estomac au côlon transverse.", ["Le petit épiploon", "Le ligament gastro-splénique", "Le grand épiploon", "Le ligament spléno-rénal"]),
    single("Quel repli péritonéal relie l'estomac au foie ?", "A", "Le petit épiploon relie la petite courbure de l'estomac au foie.", ["Le petit épiploon", "Le grand épiploon", "Le ligament gastro-phrénique", "Le mésocôlon transverse"]),
    single("Chez la femme, par quoi la cavité péritonéale communique-t-elle avec l'extérieur ?", "B", "Chez la femme, la cavité péritonéale communique avec l'extérieur via les ostia des trompes utérines, l'utérus et le vagin — expliquant la fréquence des infections pelviennes.", ["Le canal inguinal", "Les trompes utérines, l'utérus et le vagin", "L'ombilic", "Le canal anal"]),
    single("Par quel orifice la bourse omentale communique-t-elle avec le grand sac péritonéal ?", "C", "La bourse omentale (petite cavité) communique avec le grand sac par le foramen épiploïque, ou foramen de Winslow.", ["Le hiatus œsophagien", "L'anneau ombilical", "Le foramen épiploïque (de Winslow)", "Le canal inguinal"]),
    single("Quelles structures longent le bord libre droit du petit épiploon, en avant du foramen de Winslow ?", "D", "Le bord libre droit du petit épiploon contient le canal cholédoque, l'artère hépatique et la veine porte (le canal étant à droite de l'artère, tous deux antérieurs à la veine).", ["L'artère splénique et la veine splénique", "Le nerf vague et l'œsophage", "L'artère gastro-épiploïque et le pylore", "Le canal cholédoque, l'artère hépatique et la veine porte"]),
    single("Quel est l'intérêt clinique de la poche de Morrison ?", "B", "En décubitus dorsal, la poche hépato-rénale de Morrison est le point le plus déclive de la cavité péritonéale au-dessus du détroit supérieur : les épanchements liquidiens (sang, pus) s'y accumulent préférentiellement.", ["Elle contient le pancréas", "C'est le point le plus déclive en décubitus dorsal, site de collection liquidienne", "Elle communique directement avec l'extérieur", "Elle est le siège habituel de la rate"]),
    single("Quelle structure sépare le compartiment supracolique du compartiment infracolique ?", "A", "Le côlon transverse et son méso, le mésocôlon transverse, séparent les compartiments supracolique et infracolique.", ["Le côlon transverse et le mésocôlon transverse", "Le grand épiploon", "Le ligament falciforme", "Le petit épiploon"]),
    single("Quelle gouttière pariéto-colique peut propager une infection depuis l'appendice ?", "B", "La gouttière pariéto-colique droite est continue en haut avec la poche de Morrison et en bas avec le pelvis ; elle peut être infectée par propagation ascendante depuis l'appendice.", ["La gouttière pariéto-colique gauche", "La gouttière pariéto-colique droite", "L'espace sous-phrénique gauche", "La bourse omentale"]),
    single("Quel espace sous-phrénique est limité en haut par le ligament triangulaire gauche ?", "A", "L'espace antérieur gauche (sous-phrénique gauche) se situe entre le lobe gauche du foie et le diaphragme, limité en haut par le ligament triangulaire gauche.", ["L'espace antérieur gauche", "L'espace antérieur droit", "L'espace postérieur droit (Morrison)", "La bourse omentale"]),
    single("Quel organe est séparé de l'estomac par le grand sac péritonéal (et non par la bourse omentale) parmi les structures du lit gastrique ?", "D", "Toutes les structures du lit gastrique sont séparées de l'estomac par la bourse omentale, à l'exception de la rate, séparée par le grand sac.", ["Le pancréas", "Le rein gauche", "La glande surrénale gauche", "La rate"]),
    single("Combien de régions abdominales définit-on classiquement à des fins cliniques ?", "C", "On définit classiquement 9 régions abdominales à l'aide de 4 plans imaginaires (2 horizontaux, 2 verticaux).", ["4", "6", "9", "12"]),
    single("Que devient un organe qui perd son méso par le processus de zygose ?", "B", "Un organe qui perd son méso par zygose devient secondairement rétropéritonéal, alors qu'il possédait initialement un méso (donc était mobile).", ["Il devient intrapéritonéal", "Il devient secondairement rétropéritonéal", "Il disparaît", "Il devient primitivement rétropéritonéal"]),
  ],
  exam: { titre_fr: "Examen chronométré — Péritoine", duration_seconds: 1_600 },
};

const DUODENUM_PANCREAS_COURSE = `# Duodénum et pancréas

## 1. Généralités sur le duodénum
- Le **duodénum** est la première portion, la plus courte, la plus large et la plus fixe de l'intestin grêle. Il s'étend du pylore à l'angle duodéno-jéjunal.
- Son nom vient du grec *do-deka-daktulos* (« 12 doigts »), sa longueur (**25 cm**) correspondant approximativement à la largeur cumulée de 12 doigts (nommé par Hérophile, 300 av. J.-C.).
- Il débute au **pylore** (2,5 cm à droite du plan médian, sur le plan transpylorique) et se termine à la **jonction duodéno-jéjunale** (2,5 cm à gauche du plan médian, légèrement sous le plan transpylorique).
- **Rétropéritonéal**, sauf les 2-3 premiers cm suspendus par le petit épiploon (en haut) et le grand épiploon (en bas).
- **Fonction principale** : digestion — reçoit le chyme gastrique, mélangé à la bile et aux enzymes pancréatiques.
- Le duodénum forme une boucle en « **C** » dont la concavité entoure la tête du pancréas. Il est situé au-dessus de l'ombilic, en regard de L1-L2-L3. Avec le pancréas, c'est la portion la plus profonde du tube digestif, la moins accessible à l'examen physique.

## 2. Les 4 parties du duodénum
| Partie | Longueur | Repères |
| --- | --- | --- |
| **1re (supérieure)** | 5 cm | Du pylore au col de la vésicule biliaire (flexure duodénale supérieure) |
| **2e (descendante)** | 7-10 cm | Bord supérieur de L4 (flexure duodénale inférieure) |
| **3e (horizontale)** | 5-7,5 cm | Croise la VCI et l'aorte |
| **4e (ascendante)** | 2,5 cm | Jusqu'à L2, flexure duodéno-jéjunale |

### 1re partie (supérieure)
- Du pylore, monte en arrière et latéralement à droite jusqu'au col de la vésicule biliaire, puis s'incurve (flexure duodénale supérieure). Reliée au foie par le ligament hépato-duodénal.
- Le **bulbe/capuchon duodénal** (2-3 cm initiaux) est intrapéritonéal, mobile, avec mésentère ; sans plis muqueux circulaires (visible en radiographie baryté) ; c'est le **site le plus fréquent d'ulcère duodénal**.
- Rapports : antérieurement le lobe carré du foie et la vésicule biliaire ; postérieurement la veine porte, l'artère gastroduodénale, le cholédoque ; supérieurement le foramen épiploïque ; inférieurement la tête et le col du pancréas.

### 2e partie (descendante)
- Du col vésiculaire, descend en avant du rein droit jusqu'au bord supérieur de L4 (flexure inférieure). Croisée en son tiers moyen par le côlon transverse. Non recouverte de péritoine en arrière.
- Rapports : antérieurement vésicule biliaire, lobe droit du foie, côlon/mésocôlon transverse, anses grêles ; latéralement côlon ascendant, angle colique droit, lobe droit du foie ; postérieurement rein droit et vaisseaux rénaux droits, VCI, psoas droit ; médialement tête du pancréas, cholédoque.
- Le cholédoque et le canal pancréatique principal la perforent obliquement à 7-10 cm sous le pylore ; le canal pancréatique accessoire la perfore parfois 2 cm au-dessus.

### 3e partie (horizontale)
- Du bord supérieur droit de L4, croise en avant la VCI, se termine devant l'aorte abdominale.
- Rapports : antérieurement racine du mésentère, vaisseaux mésentériques supérieurs, anses jéjunales ; postérieurement psoas droit, uretère droit, VCI, aorte, vaisseaux gonadiques droits ; supérieurement tête du pancréas et son processus unciné ; inférieurement anses jéjunales.

### 4e partie (ascendante)
- Monte à gauche de l'aorte jusqu'au bord supérieur de L2, où elle s'incurve en avant pour former la **flexure duodéno-jéjunale**.
- Rapports : antérieurement côlon/mésocôlon transverse ; postérieurement psoas gauche, chaîne sympathique gauche, vaisseaux gonadiques gauches, veine mésentérique inférieure ; supérieurement corps du pancréas ; à gauche rein et uretère gauches ; à droite racine du mésentère.

## 3. Muscle suspenseur du duodénum (ligament de Treitz)
- Bande fibromusculaire suspendant la flexure duodéno-jéjunale au pilier droit du diaphragme. Fixe la flexure et l'empêche d'être tractée par le poids des anses grêles.

## 4. Muqueuse duodénale
- **Villosités** et **plis circulaires (valvules de Kerckring)** — augmentent la surface d'absorption jusqu'à 1500 fois ; débutent dans la 2e partie, deviennent plus grands et serrés sous le niveau de la grande papille.
- **Sous-muqueuse** : tissu conjonctif lâche, vaisseaux, plexus de Meissner ; caractéristique — **glandes de Brunner**.
- **Musculeuse** : circulaire interne + longitudinale externe, plexus d'Auerbach entre les deux.
- **Grande papille duodénale (papille de Vater)** : projection conique sur la paroi postéro-médiale, 8-10 cm sous le pylore, où s'abouche l'ampoule hépato-pancréatique (jonction cholédoque/canal pancréatique), entourée par le **sphincter d'Oddi** (contrôle le flux biliaire/pancréatique et empêche le reflux duodénal).
- **Petite papille duodénale** : 2 cm en amont de la grande papille, y débouche le canal pancréatique accessoire.

## 5. Vascularisation et innervation du duodénum
- **Artérielle** : moitié supérieure par le tronc cœliaque (artère de l'intestin antérieur) via l'artère pancréatico-duodénale supérieure (branche de la gastroduodénale, divisée en branches antérieure/postérieure) ; moitié inférieure par l'artère mésentérique supérieure (artère de l'intestin moyen) via l'artère pancréatico-duodénale inférieure. Les arcades pancréatico-duodénales antérieure et postérieure résultent de leurs anastomoses.
- **Veineuse** : superficielle aux artères, se draine vers les veines splénique, mésentérique supérieure et porte.
- **Nerveuse** : sympathique T5-T9 (nerfs grands splanchniques) ; parasympathique par les deux vagues via le plexus cœliaque.
- **Lymphatique** : vers les nœuds pancréatico-duodénaux, puis nœuds cœliaques et mésentériques supérieurs, puis tronc lymphatique intestinal vers la citerne du chyle.

## 6. Le pancréas
- Glande **exo-endocrine** allongée, molle, finement lobulée. La partie **exocrine** sécrète le suc pancréatique ; la partie **endocrine** sécrète des hormones (insuline, etc.).
- Situé sur la paroi abdominale postérieure, régions épigastrique et hypochondre gauche, croisant obliquement de la concavité duodénale jusqu'au hile splénique (T12-L3). Majoritairement rétropéritonéal (derrière le plancher séreux de la bourse omentale) ; sa **queue** est intrapéritonéale (ligament spléno-rénal).

### Subdivisions
- **Tête** (avec le **processus unciné**) — disque situé dans la concavité du « C » duodénal, devant L2. 3 bords (supérieur, inférieur, latéral droit), 2 faces (antérieure, postérieure). Le processus unciné s'étend vers la gauche derrière les vaisseaux mésentériques supérieurs.
  - Rapports : bord supérieur (1re partie du duodénum, artère pancréatico-duodénale supérieure) ; bord inférieur (3e partie du duodénum, artère pancréatico-duodénale inférieure) ; bord latéral droit (2e partie du duodénum, arcades pancréatico-duodénales) ; face antérieure (artère gastroduodénale, côlon transverse, racine du mésocôlon transverse, jéjunum) ; face postérieure (VCI, veine rénale gauche, cholédoque, pilier droit du diaphragme).
- **Col** — partie rétrécie reliant tête et corps ; face antéro-supérieure en rapport avec le pylore, face postéro-inférieure avec le début de la veine porte.
- **Corps** (avec le **tuber omentale**) — s'étend vers la gauche, légèrement oblique en haut/arrière, devant la colonne vertébrale au niveau du plan transpylorique. Rapports : bord supérieur (tronc cœliaque au-dessus du tuber omentale, artère hépatique à droite, artère splénique à gauche) ; face antérieure (bourse omentale, estomac) ; face inférieure (flexure duodéno-jéjunale, anses jéjunales, angle colique gauche) ; face postérieure (aorte, origine de l'artère mésentérique supérieure, rein et surrénale gauches, veine splénique).
- **Queue** — extrémité gauche étroite, dans le ligament spléno-rénal avec les vaisseaux spléniques ; intrapéritonéale, mobile (contrairement au reste, rétropéritonéal fixe) ; en rapport avec la face viscérale de la rate.

### Canaux pancréatiques
- **Canal pancréatique principal (de Wirsung)** : débute dans la queue, traverse toute la glande, rejoint le cholédoque pour former l'**ampoule hépato-pancréatique (de Vater)**, s'ouvrant sur la grande papille 8-10 cm sous le pylore. Canal unique dans 90 % des cas.
- **Canal pancréatique accessoire (de Santorini)** : débute dans la partie inférieure de la tête, croise en avant le canal principal, s'ouvre sur la petite papille (2-3 cm au-dessus de la grande papille, 6-8 cm sous le pylore). Communique avec le canal principal dans 40 % des cas.

### Anomalies congénitales
- **Pancréas annulaire** : anneau de tissu pancréatique encerclant la 2e partie du duodénum.
- **Tissu pancréatique accessoire** : nodules jaunâtres (1-6 mm), le plus souvent dans le duodénum, mais aussi estomac, grêle, grand épiploon, hile splénique.

### Vascularisation, innervation, lymphatiques du pancréas
- **Artérielle** : artère splénique (branche du tronc cœliaque, source principale pour corps/queue) avec ses branches (artère pancréatique dorsale, grande artère pancréatique, artère de la queue du pancréas) ; artères pancréatico-duodénales supérieure et inférieure pour la tête (arcades antérieure/postérieure).
- **Veineuse** : veines porte, mésentérique supérieure, splénique.
- **Lymphatique** : corps/queue vers nœuds pancréatico-spléniques (le long de l'artère splénique) ; tête vers nœuds pyloriques ; puis vers nœuds mésentériques supérieurs ou cœliaques.

## 7. Le plexus cœliaque
- Plexus nerveux autonome = ganglions para-aortiques interconnectés (cœliaque, mésentérique supérieur, rénaux), autour des origines des branches majeures de l'aorte abdominale.
- **Parasympathique** : nerf vague (X), les troncs vagaux traversent le plexus sans y faire relais.
- **Sympathique** : nerfs splanchniques.
- Innerve via des plexus périartériels l'œsophage inférieur, l'estomac, le pancréas, la rate, les reins, le foie, la vésicule biliaire, l'intestin grêle et les 2/3 du gros intestin ; transmet la sensibilité viscérale (douleur, réflexes) de l'intestin antérieur et moyen. Le parasympathique stimule sécrétion glandulaire et péristaltisme ; le sympathique les inhibe et redirige le flux sanguin vers les muscles squelettiques.

## Points à retenir
- Duodénum = 4 parties (25 cm), rétropéritonéal sauf le bulbe ; ligament de Treitz fixe la flexure duodéno-jéjunale.
- Grande papille (Vater) = jonction cholédoque + canal de Wirsung, sphincter d'Oddi ; petite papille = canal de Santorini.
- Pancréas = tête (processus unciné) + col + corps (tuber omentale) + queue (seule partie intrapéritonéale, dans le ligament spléno-rénal).
- Vascularisation duodéno-pancréatique = arcades pancréatico-duodénales (tronc cœliaque en haut, mésentérique supérieure en bas), reflétant l'origine embryologique double (intestin antérieur/moyen).`;

export const DUODENUM_PANCREAS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Duodénum et pancréas",
    source_label: "Anatomie — Lecture 8 (Duodénum et pancréas)",
    content_fr: DUODENUM_PANCREAS_COURSE,
  },
  qcm: [
    single("D'où vient le nom « duodénum » ?", "C", "Du grec « do-deka-daktulos », signifiant 12 doigts, car sa longueur (25 cm) correspond approximativement à la largeur cumulée de 12 doigts.", ["Du nom de son découvreur", "De sa forme en C", "Du grec signifiant « 12 doigts », en référence à sa longueur", "Du latin signifiant « premier segment »"]),
    single("Quelle est la longueur totale approximative du duodénum ?", "B", "Le duodénum mesure environ 25 cm de long.", ["10 cm", "25 cm", "50 cm", "75 cm"]),
    single("Quelle portion du duodénum est intrapéritonéale, le reste étant rétropéritonéal ?", "A", "Les 2-3 premiers centimètres (bulbe/capuchon duodénal) sont intrapéritonéaux ; le reste du duodénum est rétropéritonéal.", ["Les 2-3 premiers cm (bulbe duodénal)", "La 2e partie (descendante)", "La 4e partie (ascendante)", "Le duodénum est entièrement intrapéritonéal"]),
    single("Quel est le site le plus fréquent d'ulcère duodénal ?", "C", "Le bulbe (capuchon) duodénal, dépourvu de plis muqueux circulaires, est le site le plus fréquent d'ulcération duodénale.", ["La 3e partie horizontale", "La flexure duodéno-jéjunale", "Le bulbe (capuchon) duodénal", "La grande papille"]),
    single("Quelle structure croise la 2e partie (descendante) du duodénum en son tiers moyen ?", "B", "Le côlon transverse croise la 2e partie du duodénum en son tiers moyen.", ["Le côlon ascendant", "Le côlon transverse", "L'aorte abdominale", "La veine cave inférieure"]),
    single("Quelle structure croise la 3e partie (horizontale) du duodénum en avant ?", "A", "La 3e partie horizontale du duodénum croise en avant la veine cave inférieure, puis se termine devant l'aorte abdominale.", ["La veine cave inférieure", "La veine porte", "L'artère splénique", "Le canal cholédoque"]),
    single("Quelle structure suspend la flexure duodéno-jéjunale au pilier droit du diaphragme ?", "C", "Le ligament de Treitz (muscle suspenseur du duodénum) fixe la flexure duodéno-jéjunale au pilier droit du diaphragme.", ["Le ligament falciforme", "Le petit épiploon", "Le ligament de Treitz (muscle suspenseur du duodénum)", "Le mésocôlon transverse"]),
    single("Quelle glande est une caractéristique histologique distinctive de la sous-muqueuse duodénale ?", "B", "Les glandes de Brunner sont caractéristiques de la sous-muqueuse duodénale (sécrétion alcaline protégeant la muqueuse).", ["Les glandes de Lieberkühn", "Les glandes de Brunner", "Les glandes fundiques", "Les glandes pyloriques"]),
    single("À quelle distance du pylore se situe la grande papille duodénale (de Vater) ?", "C", "La grande papille duodénale se situe à 8-10 cm distalement au pylore.", ["1-2 cm", "4-6 cm", "8-10 cm", "15-20 cm"]),
    single("Quel sphincter entoure l'ampoule hépato-pancréatique au niveau de la grande papille ?", "A", "Le sphincter d'Oddi entoure l'ampoule de Vater, contrôlant le flux biliaire/pancréatique et empêchant le reflux duodénal.", ["Le sphincter d'Oddi", "Le sphincter pylorique", "Le sphincter iléo-cæcal", "Le sphincter anal interne"]),
    single("Où s'ouvre le canal pancréatique accessoire (de Santorini) ?", "B", "Le canal accessoire de Santorini s'ouvre sur la petite papille duodénale, 2-3 cm en amont de la grande papille.", ["Sur la grande papille duodénale", "Sur la petite papille duodénale, en amont de la grande papille", "Directement dans l'estomac", "Dans le canal cholédoque uniquement"]),
    multi("Quelles artères vascularisent le duodénum, reflétant son origine embryologique double ?", ["A", "B"], "La moitié supérieure du duodénum est vascularisée par le tronc cœliaque (intestin antérieur) via l'artère pancréatico-duodénale supérieure, la moitié inférieure par l'artère mésentérique supérieure (intestin moyen) via l'artère pancréatico-duodénale inférieure.", ["Tronc cœliaque (via l'artère pancréatico-duodénale supérieure)", "Artère mésentérique supérieure (via l'artère pancréatico-duodénale inférieure)", "Artère mésentérique inférieure", "Artère rénale gauche"]),
    single("Quelle est la seule partie du pancréas qui soit intrapéritonéale ?", "D", "La queue du pancréas, logée dans le ligament spléno-rénal avec les vaisseaux spléniques, est la seule partie intrapéritonéale et mobile du pancréas.", ["La tête", "Le col", "Le corps", "La queue"]),
    single("Quel processus s'étend depuis la partie inféro-gauche de la tête du pancréas, derrière les vaisseaux mésentériques supérieurs ?", "B", "Le processus unciné est un prolongement en crochet de la tête du pancréas, s'étendant vers la gauche derrière les vaisseaux mésentériques supérieurs.", ["Le tuber omentale", "Le processus unciné", "Le processus caudé", "Le processus papillaire"]),
    single("Quelle structure vasculaire principale vascularise le corps et la queue du pancréas ?", "A", "L'artère splénique, branche du tronc cœliaque, est la source principale de vascularisation du corps et de la queue du pancréas.", ["L'artère splénique", "L'artère mésentérique inférieure", "L'artère gastroduodénale seule", "L'artère rénale gauche"]),
    single("Dans quel canal la bile et le suc pancréatique fusionnent-ils avant de pénétrer le duodénum ?", "C", "Le cholédoque et le canal pancréatique principal (de Wirsung) fusionnent pour former l'ampoule hépato-pancréatique (de Vater), qui s'ouvre sur la grande papille.", ["Le canal cystique", "Le canal hépatique commun", "L'ampoule hépato-pancréatique (de Vater)", "Le canal de Santorini seul"]),
    single("Qu'est-ce que le pancréas annulaire ?", "B", "Le pancréas annulaire est une anomalie congénitale où un anneau de tissu pancréatique encercle la 2e partie du duodénum.", ["Une absence congénitale de queue pancréatique", "Un anneau de tissu pancréatique encerclant la 2e partie du duodénum", "Une duplication du canal de Wirsung", "Une fusion anormale tête-queue"]),
    single("D'où provient l'innervation parasympathique du plexus cœliaque ?", "A", "L'innervation parasympathique du plexus cœliaque provient du nerf vague (X) ; les troncs vagaux le traversent sans y faire relais synaptique.", ["Le nerf vague (X)", "Les nerfs grands splanchniques", "Le nerf phrénique", "La chaîne sympathique lombaire"]),
    single("Quel effet le parasympathique exerce-t-il, via le plexus cœliaque, sur le tube digestif ?", "C", "Le parasympathique (vagal) stimule la sécrétion glandulaire et favorise le péristaltisme et la digestion.", ["Il inhibe le péristaltisme", "Il constricte les vaisseaux sanguins digestifs", "Il stimule la sécrétion glandulaire et le péristaltisme", "Il redirige le sang vers les muscles squelettiques"]),
    single("Quelles structures se trouvent dans le porta hepatis (hile hépatique) et sont en rapport direct avec la tête du pancréas via le ligament hépato-duodénal ?", "D", "Le bord libre du petit épiploon (bord antérieur du foramen de Winslow, en rapport avec la 1re partie du duodénum) contient le cholédoque, l'artère hépatique et la veine porte.", ["Seulement l'artère splénique", "Seulement la veine mésentérique supérieure", "Seulement le canal de Wirsung", "Le cholédoque, l'artère hépatique et la veine porte"]),
  ],
  exam: { titre_fr: "Examen chronométré — Duodénum et pancréas", duration_seconds: 1_600 },
};

const STOMACH_SPLEEN_LIVER_COURSE = `# Estomac, rate et foie

## 1. L'estomac — généralités
- Portion la plus dilatée du tube digestif, en forme de **J**, située sous le diaphragme légèrement à gauche de la ligne médiane (hypochondre gauche, région ombilicale, épigastre). Majoritairement sous le rebord costal gauche. Organe **intrapéritonéal**.
- **Fonctions** : brassage/fragmentation des aliments et mélange au suc gastrique ; stockage temporaire des aliments ; sécrétion du **facteur intrinsèque**, nécessaire à l'absorption de la vitamine B12.

### Caractères extérieurs
- **2 orifices** : cardia (jonction avec l'œsophage) et pylore (jonction avec le duodénum).
- **2 courbures** : grande courbure (présente l'**incisure cardiaque**, séparant le fundus de l'œsophage) et petite courbure (présente l'**incisure angulaire**, indiquant la jonction corps/antre pylorique).
- **2 faces** : antérieure (antéro-supérieure) et postérieure (postéro-inférieure).

### Les 4 parties
1. **Cardia** — autour de l'orifice cardial.
2. **Fundus** — dôme au-dessus du plan horizontal de l'incisure cardiaque ; atteint en général le 5e espace intercostal gauche, sous le mamelon.
3. **Corps** — partie principale, entre fundus et antre pylorique.
4. **Partie pylorique** — subdivisée en antre pylorique, canal pylorique, et pylore (portion sphinctérienne distale).

### Rapports péritonéaux
- L'estomac est couvert de péritoine sauf le long des vaisseaux des courbures et une petite **zone nue** postérieure près du cardia (en rapport avec le pilier gauche du diaphragme).
- Replis péritonéaux : **petit épiploon** (petite courbure → foie) ; **grand épiploon** (2/3 inférieurs de la grande courbure → côlon transverse) ; **ligament gastro-splénique** (tiers supérieur de la grande courbure/fundus → rate) ; **ligament gastro-phrénique** (sommet du fundus → diaphragme).

### Rapports viscéraux
- **Face antérieure** : à droite, impression gastrique du lobe gauche du foie et, près du pylore, du lobe carré ; à gauche, diaphragme et grill costal ; en bas, paroi abdominale antérieure.
- **Face postérieure** : forme le **lit gastrique** avec diaphragme, rein gauche, surrénale gauche, pancréas, mésocôlon transverse, angle colique gauche, artère splénique, rate. Toutes ces structures sont séparées de l'estomac par la bourse omentale, sauf la **rate**, séparée par le grand sac.

### Structure microscopique
- 4 tuniques de dehors en dedans : **séreuse** (péritoine), **musculeuse** (3 couches de muscle lisse — longitudinale externe, circulaire moyenne, oblique interne), **sous-muqueuse** (tissu aréolaire lâche), **muqueuse** (épaisse, veloutée, plis temporaires/rugae disparaissant en distension).

### Vascularisation et innervation
- **Artérielle** (riche, issue du tronc cœliaque) : artère gastrique gauche (branche directe du tronc cœliaque) ; artère gastrique droite (branche de l'hépatique commune) ; artère gastro-épiploïque gauche (branche de la splénique) ; artère gastro-épiploïque droite (branche de la gastro-duodénale) ; artères gastriques courtes (5 à 7, branches de la splénique).
- **Veineuse** : correspond aux artères, se draine vers la veine porte.
- **Nerveuse** : sympathique T6-T10 (nerfs grands splanchniques, plexus cœliaque et hépatique) ; parasympathique directement issu des nerfs vagues.

## 2. La rate
- Grande masse cunéiforme de tissu vasculaire et lymphoïde, rouge violacé, située en haut et en arrière de la cavité abdominale, dans l'hypochondre gauche entre le fundus gastrique et le diaphragme, en arrière de la ligne médio-axillaire, en regard des 9e, 10e et 11e côtes.
- **Fonctions** : destruction des globules rouges sénescents ; production de lymphocytes.

### Caractères extérieurs
- **2 pôles/extrémités** : antérieur et postérieur.
- **3 bords** : supérieur, inférieur, intermédiaire.
- **2 faces** : diaphragmatique et viscérale.

### Pôles et bords
- **Pôle antérieur** (extrémité latérale) : large, en rapport avec l'angle colique gauche en avant et le ligament phrénico-colique en dessous.
- **Pôle postérieur** (extrémité médiale) : arrondi, dirigé vers la colonne vertébrale, en rapport avec le pôle supérieur du rein gauche.
- **Bord supérieur** : fin, convexe, sépare face viscérale (impression gastrique) et face diaphragmatique ; présente 1-2 encoches près de son extrémité antérieure (vestiges du développement lobulé de la rate).
- **Bord inférieur** : sépare face viscérale (impression rénale) et face diaphragmatique ; correspond au bord inférieur de la 11e côte.
- **Bord intermédiaire** : sépare les impressions gastrique et rénale sur la face viscérale.

### Faces
- **Face diaphragmatique** : lisse, convexe.
- **Face viscérale** : concave, irrégulière, 4 impressions — **gastrique** (la plus grande, entre bords supérieur et intermédiaire, contient le hile splénique), **rénale** (entre bords intermédiaire et inférieur), **colique** (triangulaire, angle colique gauche) et **pancréatique** (occasionnelle, queue du pancréas).

### Rapports péritonéaux
- La rate est entièrement enveloppée de péritoine sauf au hile, d'où partent 2 replis : le **ligament gastro-splénique** (hile → tiers supérieur de la grande courbure, contient les vaisseaux gastriques courts) et le **ligament spléno-rénal** (hile → face antérieure du rein gauche, contient la queue du pancréas, les vaisseaux spléniques, les nœuds pancréatico-spléniques).

### Vascularisation et innervation
- **Artère splénique**, plus grosse branche du tronc cœliaque, chemine dans le ligament spléno-rénal, se divise en 5+ branches au hile.
- **Veine splénique** — s'unit aux veines mésentériques inférieure et supérieure (en arrière du pancréas) pour former la veine porte.
- **Nerfs** issus du plexus cœliaque.

## 3. Le foie
- Plus grosse **glande** du corps, occupant l'hypochondre droit, la partie supérieure de l'épigastre et une partie de l'hypochondre gauche, sous le diaphragme. S'étend jusqu'au 5e espace intercostal (droit et gauche) ; en médial, bord supérieur au niveau de l'appendice xiphoïde ; bord inférieur tranchant croisant la ligne médiane au niveau du plan transpylorique (L1).
- Comporte des parties exocrine et endocrine.

### Fonctions
- Métabolisme des glucides, lipides et protéines ; détoxification des médicaments/poisons ; stockage du glycogène et des vitamines liposolubles ; sécrétion de la bile.

### Caractères extérieurs
- **2 faces** : diaphragmatique et viscérale ; **1 bord** : le bord inférieur, où les deux faces se rejoignent en avant.
- **Face diaphragmatique** : zones péritonéales lisses (supérieure, antérieure, droite) + **zone nue** (dépourvue de péritoine), postérieure ; la VCI est logée dans un sillon profond de la partie gauche de la zone nue. Ligaments péritonéaux : coronaire, triangulaires droit et gauche, falciforme.
- **Face viscérale** : plate/concave, séparée en avant de la face diaphragmatique par le bord inférieur, en arrière du diaphragme par le feuillet postérieur du ligament coronaire. Éléments notables : fosse vésiculaire, fosse pour la VCI, fissure du ligament rond, fissure du ligament veineux, **porta hepatis** (hile hépatique). Couverte de péritoine sauf à la fosse vésiculaire et au porta hepatis.
- **Bord inférieur** : sépare les 2 faces ; arrondi latéralement, fin et tranchant médialement ; présente 2 encoches (pour le ligament rond, à droite du plan médian ; encoche cystique, ~5 cm à droite, correspondant souvent au fundus vésiculaire). En médial : du 9e cartilage costal droit au 8e gauche (remonte donc vers la gauche) ; sur le plan médian, au niveau du plan transpylorique.

### Lobes du foie
- **Lobes anatomiques (face diaphragmatique)** : droit et gauche, séparés par le ligament falciforme.
- **Lobes anatomiques (face viscérale)** : 4 lobes délimités par des fissures/fosses en H — droit, gauche, **carré**, **caudé**.
  - Lobe droit : à droite de la fosse vésiculaire et du sillon de la VCI.
  - Lobe gauche : à gauche des fissures des ligaments rond et veineux.
  - Lobe carré : entre fosse vésiculaire et fissure du ligament rond, sous le porta hepatis.
  - Lobe caudé : entre sillon de la VCI et fissure du ligament veineux, au-dessus du porta hepatis ; présente un processus papillaire (à gauche) et un processus caudé (relie au reste du foie, au-dessus du porta hepatis).

### Rapports péritonéaux
- Zones non couvertes de péritoine : **zone nue** (triangulaire, face postérieure du lobe droit), **fosse vésiculaire**, **sillon de la VCI**, **sillon du ligament veineux**, **porta hepatis**.

### Ligaments du foie
- **Faux ligaments** (replis péritonéaux) : falciforme, coronaire, triangulaire droit, triangulaire gauche, petit épiploon.
- **Vrais ligaments** (vestiges fœtaux) : ligament rond (vestige de la veine ombilicale), ligament veineux (vestige du canal veineux d'Arantius).

### Rapports — face diaphragmatique
- **Supérieur** : coupoles diaphragmatiques (séparent des poumons/plèvre correspondants) ; centre phrénique (sépare du péricarde).
- **Antérieur** : appendice xiphoïde, paroi abdominale antérieure ; le ligament falciforme s'y attache.
- **Droit/latéral** : récessus costo-diaphragmatique de la plèvre, 10e-11e côtes.
- **Postérieur** : zone nue directement au contact du diaphragme ; surrénale droite près du sillon de la VCI ; le plancher du sillon de la VCI est perforé par les veines hépatiques ; lobe caudé en rapport avec le récessus supérieur de la bourse omentale ; fissure du ligament veineux (profonde, à gauche du lobe caudé) ; œsophage abdominal (juste à gauche de la partie supérieure de cette fissure, empreinte œsophagienne) ; fundus gastrique juste à gauche de cette empreinte.

### Rapports — face viscérale
- Face inférieure du lobe gauche : empreinte gastrique (face antéro-supérieure de l'estomac).
- Fissure du ligament rond : à gauche du lobe carré.
- Face inférieure du lobe droit : lobe carré en rapport avec le pylore et le 1er duodénum ; fosse vésiculaire (vésicule biliaire) à droite du lobe carré ; angle colique droit (empreinte colique) à droite de la vésicule ; jonction 1re/2e parties du duodénum (empreinte duodénale) ; rein droit (empreinte rénale), postérieur à l'empreinte colique et à droite de l'empreinte duodénale.
- **Porta hepatis** : fissure horizontale entre lobes carré et caudé. Y **entrent** : branches droite/gauche de l'artère hépatique (antérieures, à gauche), veine porte (postérieure). En **sortent** : canaux hépatiques droit/gauche (antérieurs, à droite). Contient aussi nœuds lymphatiques et nerfs.

### Vascularisation et innervation
- Organe hautement vascularisé, **double apport sanguin** : sang artériel oxygéné par l'**artère hépatique propre** ; sang veineux riche en nutriments par la **veine porte**.
- Le sang veineux hépatique est drainé majoritairement par **3 grosses veines hépatiques**, s'ouvrant directement dans la VCI.
- Nerfs : plexus cœliaque.

### Appareil biliaire extra-hépatique
- 5 composants : canaux hépatiques droit et gauche → canal hépatique commun → **vésicule biliaire** → canal cystique → **canal cholédoque** (bile duct), qui reçoit la bile du foie, la stocke/concentre dans la vésicule, et la déverse dans la 2e partie du duodénum.

## Points à retenir
- Estomac : 4 parties (cardia, fundus, corps, pylore) ; lit gastrique séparé de l'estomac par la bourse omentale, sauf la rate (grand sac).
- Rate : 2 pôles, 3 bords, 2 faces, 4 impressions viscérales ; ligaments gastro-splénique et spléno-rénal.
- Foie : lobes anatomiques droit/gauche (face diaphragmatique) vs droit/gauche/carré/caudé (face viscérale, figure en H) ; porta hepatis = entrée artère+veine porte, sortie canaux biliaires.
- Foie = double vascularisation (artère hépatique + veine porte), drainage par 3 veines hépatiques vers la VCI.`;

export const STOMACH_SPLEEN_LIVER_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Estomac, rate et foie",
    source_label: "Anatomie — Lecture 9 (Estomac, rate et foie)",
    content_fr: STOMACH_SPLEEN_LIVER_COURSE,
  },
  qcm: [
    single("Quelle est la forme générale de l'estomac ?", "B", "L'estomac est en forme de J, situé sous le diaphragme légèrement à gauche de la ligne médiane.", ["En forme de S", "En forme de J", "En forme de U", "En forme de C"]),
    single("Quelle sécrétion gastrique est nécessaire à l'absorption de la vitamine B12 ?", "A", "Le facteur intrinsèque, sécrété par l'estomac, est nécessaire à l'absorption de la vitamine B12.", ["Le facteur intrinsèque", "La gastrine", "La pepsine", "L'acide chlorhydrique seul"]),
    single("Quelle incisure de la petite courbure indique la jonction entre le corps et l'antre pylorique ?", "C", "L'incisure angulaire (angular notch), sur la petite courbure, indique la jonction entre le corps et la partie pylorique de l'estomac.", ["L'incisure cardiaque", "Le cardia", "L'incisure angulaire", "Le pylore"]),
    single("Quelles structures forment le lit gastrique, séparées de l'estomac par la bourse omentale (sauf une exception) ?", "D", "Le lit gastrique comprend diaphragme, rein gauche, surrénale gauche, pancréas, mésocôlon transverse, angle colique gauche, artère splénique et rate — toutes séparées de l'estomac par la bourse omentale sauf la rate, séparée par le grand sac.", ["Uniquement le foie et la vésicule biliaire", "Uniquement le duodénum", "Uniquement le côlon transverse", "Diaphragme, rein/surrénale gauches, pancréas, mésocôlon transverse, angle colique gauche, rate"]),
    single("Quel organe du lit gastrique est séparé de l'estomac par le grand sac péritonéal plutôt que par la bourse omentale ?", "B", "La rate est la seule structure du lit gastrique séparée de l'estomac par le grand sac péritonéal, et non la bourse omentale.", ["Le rein gauche", "La rate", "Le pancréas", "L'angle colique gauche"]),
    single("Combien de couches musculaires composent la tunique musculeuse de l'estomac ?", "C", "La tunique musculeuse de l'estomac comporte 3 couches de muscle lisse : longitudinale externe, circulaire moyenne, oblique interne.", ["1", "2", "3", "4"]),
    single("Quelle artère est une branche directe du tronc cœliaque vascularisant l'estomac ?", "A", "L'artère gastrique gauche est une branche directe du tronc cœliaque.", ["L'artère gastrique gauche", "L'artère gastrique droite", "L'artère gastro-épiploïque droite", "Les artères gastriques courtes"]),
    single("En regard de quelles côtes se situe la rate ?", "C", "La rate se situe en arrière de la ligne médio-axillaire, en regard des 9e, 10e et 11e côtes.", ["6e, 7e et 8e côtes", "8e et 9e côtes", "9e, 10e et 11e côtes", "11e et 12e côtes"]),
    multi("Quelles sont les principales fonctions de la rate ?", ["A", "B"], "Les principales fonctions de la rate sont la destruction des globules rouges sénescents et la production de lymphocytes.", ["Destruction des globules rouges", "Production de lymphocytes", "Sécrétion de bile", "Sécrétion d'insuline"]),
    single("Quelle impression, sur la face viscérale de la rate, est la plus grande et contient le hile splénique ?", "A", "L'impression gastrique, produite par le fundus de l'estomac, est la plus grande impression de la face viscérale et contient le hile de la rate.", ["L'impression gastrique", "L'impression rénale", "L'impression colique", "L'impression pancréatique"]),
    single("Quel ligament relie le hile de la rate à la face antérieure du rein gauche et contient la queue du pancréas ?", "B", "Le ligament spléno-rénal (lienorenal) relie le hile splénique au rein gauche et contient la queue du pancréas, les vaisseaux spléniques et les nœuds pancréatico-spléniques.", ["Le ligament gastro-splénique", "Le ligament spléno-rénal", "Le ligament falciforme", "Le ligament gastro-phrénique"]),
    single("De quelle artère la veine splénique participe-t-elle à la formation, en s'unissant aux veines mésentériques ?", "C", "La veine splénique s'unit aux veines mésentériques inférieure et supérieure, en arrière du pancréas, pour former la veine porte.", ["L'artère hépatique", "L'artère gastrique gauche", "La veine porte", "La veine cave inférieure"]),
    single("Quel organe est décrit comme la plus grosse glande du corps ?", "A", "Le foie est la plus grosse glande du corps, occupant l'hypochondre droit et une partie de l'épigastre/hypochondre gauche.", ["Le foie", "Le pancréas", "La rate", "La glande surrénale"]),
    single("Quelle structure sépare les lobes anatomiques droit et gauche du foie sur sa face diaphragmatique ?", "B", "Le ligament falciforme, par son attache, sépare les lobes droit et gauche du foie sur la face diaphragmatique.", ["Le ligament rond", "Le ligament falciforme", "Le ligament coronaire", "La fissure du ligament veineux"]),
    single("Combien de lobes anatomiques distingue-t-on sur la face viscérale du foie ?", "C", "Sur la face viscérale, on distingue 4 lobes anatomiques (droit, gauche, carré, caudé), délimités par des fissures/fosses formant une figure en H.", ["2", "3", "4", "5"]),
    single("Où se situe le lobe carré du foie ?", "A", "Le lobe carré se situe entre la fosse vésiculaire et la fissure du ligament rond, sous le porta hepatis.", ["Entre la fosse vésiculaire et la fissure du ligament rond", "Entre le sillon de la VCI et la fissure du ligament veineux", "À droite de la fosse vésiculaire", "À gauche de la fissure du ligament rond"]),
    single("Où se situe le lobe caudé du foie par rapport au porta hepatis ?", "B", "Le lobe caudé se situe entre le sillon de la VCI et la fissure du ligament veineux, au-dessus du porta hepatis.", ["En dessous du porta hepatis", "Au-dessus du porta hepatis, entre le sillon de la VCI et la fissure du ligament veineux", "À droite de la fosse vésiculaire", "Dans la zone nue du foie"]),
    multi("Quelles structures pénètrent dans le foie au niveau du porta hepatis ?", ["A", "B"], "Au porta hepatis pénètrent les branches droite et gauche de l'artère hépatique (en avant, à gauche) et la veine porte (en arrière) ; en sortent les canaux hépatiques droit et gauche.", ["Branches de l'artère hépatique", "Veine porte", "Canaux hépatiques droit et gauche", "Veine cave inférieure"]),
    single("Quelles veines drainent la majorité du sang veineux du foie directement vers la veine cave inférieure ?", "C", "Trois grosses veines hépatiques drainent la majorité du sang veineux du foie et s'ouvrent directement dans la veine cave inférieure.", ["Les veines porte accessoires", "La veine splénique", "Les 3 grosses veines hépatiques", "Les veines pancréatico-duodénales"]),
    single("Quel est le trajet de la bile depuis le foie jusqu'au duodénum, dans l'ordre ?", "D", "La bile suit le trajet : canaux hépatiques droit/gauche → canal hépatique commun → vésicule biliaire (stockage) → canal cystique → canal cholédoque → 2e partie du duodénum.", ["Vésicule biliaire → canal cystique → canaux hépatiques → cholédoque", "Cholédoque → vésicule biliaire → canaux hépatiques → duodénum", "Canal cystique → canaux hépatiques → cholédoque → vésicule biliaire", "Canaux hépatiques → canal hépatique commun → vésicule biliaire → canal cystique → cholédoque → duodénum"]),
  ],
  exam: { titre_fr: "Examen chronométré — Estomac, rate et foie", duration_seconds: 1_600 },
};

export const PERITONEUM_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Qu'est-ce que le péritoine ?", question_en: "What is the peritoneum?", answer_fr: "Une membrane séreuse fine tapissant l'intérieur de la cavité abdomino-pelvienne.", answer_en: "A thin serous membrane lining the interior of the abdominopelvic cavity." },
  { question_fr: "Quels sont les deux feuillets du péritoine ?", question_en: "What are the two layers of the peritoneum?", answer_fr: "Le feuillet pariétal (tapisse les parois) et le feuillet viscéral (entoure les organes).", answer_en: "The parietal layer (lines the walls) and the visceral layer (surrounds the organs)." },
  { question_fr: "Qu'est-ce que la cavité péritonéale ?", question_en: "What is the peritoneal cavity?", answer_fr: "Un espace virtuel entre les feuillets pariétal et viscéral du péritoine, contenant un mince film de liquide.", answer_en: "A potential space between the parietal and visceral layers of the peritoneum, containing a thin film of fluid." },
  { question_fr: "Qu'est-ce qu'un organe rétropéritonéal primitif ?", question_en: "What is a primarily retroperitoneal organ?", answer_fr: "Un organe qui n'a jamais eu de méso, comme les reins, les surrénales, les uretères ou l'aorte.", answer_en: "An organ that never had a mesentery, such as the kidneys, adrenal glands, ureters, or aorta." },
  { question_fr: "Qu'est-ce que la zygose ?", question_en: "What is zygosis?", answer_fr: "Le processus par lequel un organe initialement suspendu par un méso fusionne celui-ci avec le péritoine pariétal puis l'atrophie, devenant secondairement rétropéritonéal.", answer_en: "The process by which an organ initially suspended by a mesentery fuses it with the parietal peritoneum and then absorbs it, becoming secondarily retroperitoneal." },
  { question_fr: "Citez deux organes secondairement rétropéritonéaux.", question_en: "Name two secondarily retroperitoneal organs.", answer_fr: "Le pancréas (sauf la queue) et le duodénum (sauf les 2 premiers cm).", answer_en: "The pancreas (except the tail) and the duodenum (except the first 2 cm)." },
  { question_fr: "Quel repli péritonéal relie l'estomac au foie ?", question_en: "Which peritoneal fold connects the stomach to the liver?", answer_fr: "Le petit épiploon.", answer_en: "The lesser omentum." },
  { question_fr: "Quel repli péritonéal relie l'estomac au côlon transverse ?", question_en: "Which peritoneal fold connects the stomach to the transverse colon?", answer_fr: "Le grand épiploon.", answer_en: "The greater omentum." },
  { question_fr: "Quel repli péritonéal relie l'estomac à la rate ?", question_en: "Which peritoneal fold connects the stomach to the spleen?", answer_fr: "Le ligament gastro-splénique.", answer_en: "The gastrosplenic ligament." },
  { question_fr: "Comment se nomme la petite cavité péritonéale située en arrière de l'estomac ?", question_en: "What is the small peritoneal cavity located behind the stomach called?", answer_fr: "La bourse omentale (arrière-cavité des épiploons).", answer_en: "The omental bursa (lesser sac)." },
  { question_fr: "Par quel orifice la bourse omentale communique-t-elle avec le grand sac ?", question_en: "Through which opening does the omental bursa communicate with the greater sac?", answer_fr: "Le foramen épiploïque (foramen de Winslow).", answer_en: "The epiploic foramen (foramen of Winslow)." },
  { question_fr: "Quelles structures forment le bord antérieur du foramen de Winslow ?", question_en: "What structures form the anterior border of the foramen of Winslow?", answer_fr: "Le bord libre droit du petit épiploon, contenant le cholédoque, l'artère hépatique et la veine porte.", answer_en: "The right free border of the lesser omentum, containing the bile duct, hepatic artery, and portal vein." },
  { question_fr: "Comment se nomme la poche péritonéale entre le foie et le rein droit ?", question_en: "What is the peritoneal pouch between the liver and right kidney called?", answer_fr: "La poche de Morrison (espace hépato-rénal).", answer_en: "Morrison's pouch (hepatorenal recess)." },
  { question_fr: "Pourquoi la poche de Morrison a-t-elle une importance clinique particulière ?", question_en: "Why is Morrison's pouch particularly clinically important?", answer_fr: "En décubitus dorsal, c'est le point le plus déclive de la cavité péritonéale au-dessus du pelvis, où les liquides pathologiques tendent à s'accumuler.", answer_en: "In the supine position, it is the most dependent part of the peritoneal cavity above the pelvis, where pathological fluids tend to accumulate." },
  { question_fr: "Qu'est-ce qui sépare le compartiment supracolique du compartiment infracolique ?", question_en: "What separates the supracolic from the infracolic compartment?", answer_fr: "Le côlon transverse et son méso, le mésocôlon transverse.", answer_en: "The transverse colon and its mesentery, the transverse mesocolon." },
  { question_fr: "Quels organes se trouvent dans le compartiment supracolique ?", question_en: "Which organs lie in the supracolic compartment?", answer_fr: "Le foie, l'estomac, la rate et la partie supérieure du duodénum.", answer_en: "The liver, stomach, spleen, and the superior part of the duodenum." },
  { question_fr: "Quel contenu remplit le compartiment infracolique ?", question_en: "What fills the infracolic compartment?", answer_fr: "Les anses du jéjunum et de l'iléon.", answer_en: "The coils of the jejunum and ileum." },
  { question_fr: "Que sont les gouttières pariéto-coliques ?", question_en: "What are the paracolic gutters?", answer_fr: "Des espaces latéraux aux côlons ascendant (droit) et descendant (gauche), reliant les compartiments supra- et infracolique au pelvis.", answer_en: "Lateral spaces alongside the ascending (right) and descending (left) colon, connecting the supra- and infracolic compartments to the pelvis." },
  { question_fr: "Pourquoi les infections pelviennes sont-elles plus fréquentes chez la femme ?", question_en: "Why are pelvic infections more common in women?", answer_fr: "Parce que la cavité péritonéale communique avec l'extérieur via les trompes utérines, l'utérus et le vagin.", answer_en: "Because the peritoneal cavity communicates with the exterior via the uterine tubes, uterus, and vagina." },
  { question_fr: "Quel ligament relie le rein à la rate ?", question_en: "Which ligament connects the kidney to the spleen?", answer_fr: "Le ligament spléno-rénal (lienorenal).", answer_en: "The lienorenal (splenorenal) ligament." },
  { question_fr: "Combien y a-t-il d'espaces sous-phréniques classiquement décrits ?", question_en: "How many subphrenic spaces are classically described?", answer_fr: "Quatre.", answer_en: "Four." },
  { question_fr: "Quel est le bord de la cavité péritonéale limité en haut par le ligament phrénico-colique ?", question_en: "Which border of the peritoneal cavity is limited above by the phrenicocolic ligament?", answer_fr: "La gouttière pariéto-colique gauche.", answer_en: "The left paracolic gutter." },
  { question_fr: "Quel plan sépare la cavité abdominale de la cavité pelvienne ?", question_en: "Which plane separates the abdominal cavity from the pelvic cavity?", answer_fr: "Le plan du détroit supérieur du bassin (pelvic inlet).", answer_en: "The plane of the pelvic inlet." },
  { question_fr: "Où passe le plan transpylorique d'Addison ?", question_en: "Where does the transpyloric plane of Addison pass?", answer_fr: "Au bord inférieur de L1, au niveau des 9es cartilages costaux.", answer_en: "At the lower border of L1, at the level of the 9th costal cartilages." },
  { question_fr: "Combien de régions abdominales cliniques distingue-t-on ?", question_en: "How many clinical abdominal regions are distinguished?", answer_fr: "Neuf régions.", answer_en: "Nine regions." },
  { question_fr: "Quelle forme prend la cavité abdominale en coupe transversale ?", question_en: "What shape does the abdominal cavity take in transverse section?", answer_fr: "Une forme de rein, du fait de la saillie postérieure de la colonne vertébrale.", answer_en: "A kidney shape, due to the posterior protrusion of the vertebral column." },
  { question_fr: "Qu'appelle-t-on la « gouttière paravertébrale » ?", question_en: "What is the 'paravertebral gutter'?", answer_fr: "L'espace creux de chaque côté de la colonne vertébrale, dans la cavité abdominale.", answer_en: "The hollow space on each side of the vertebral column within the abdominal cavity." },
  { question_fr: "Quelles structures se situent dans la couche la plus postérieure du contenu abdominal ?", question_en: "Which structures lie in the most posterior layer of abdominal contents?", answer_fr: "Les reins, les uretères et les glandes surrénales.", answer_en: "The kidneys, ureters, and adrenal glands." },
  { question_fr: "Qu'est-ce qu'un méso ?", question_en: "What is a mesentery?", answer_fr: "Un repli péritonéal double feuillet qui suspend un organe et lui apporte vaisseaux, nerfs et lymphatiques.", answer_en: "A double-layered peritoneal fold that suspends an organ and carries its vessels, nerves, and lymphatics." },
  { question_fr: "Quelle est la différence entre mésentère et mésocôlon ?", question_en: "What is the difference between the mesentery and the mesocolon?", answer_fr: "Le mésentère suspend l'intestin grêle, le mésocôlon suspend le côlon.", answer_en: "The mesentery suspends the small intestine, the mesocolon suspends the colon." },
  { question_fr: "Chez qui la cavité péritonéale est-elle fermée ?", question_en: "In whom is the peritoneal cavity closed?", answer_fr: "Chez l'homme.", answer_en: "In males." },
  { question_fr: "Quel espace sous-phrénique est appelé « poche sous-hépatique droite » ?", question_en: "Which subphrenic space is called the 'right subhepatic space'?", answer_fr: "La poche de Morrison (espace postérieur droit).", answer_en: "Morrison's pouch (right posterior space)." },
  { question_fr: "Que contient le ligament gastro-splénique ?", question_en: "What does the gastrosplenic ligament contain?", answer_fr: "Les vaisseaux gastriques courts.", answer_en: "The short gastric vessels." },
  { question_fr: "Que contient le ligament spléno-rénal ?", question_en: "What does the lienorenal ligament contain?", answer_fr: "La queue du pancréas, les vaisseaux spléniques et les nœuds pancréatico-spléniques.", answer_en: "The tail of the pancreas, splenic vessels, and pancreaticosplenic lymph nodes." },
];

export const DUODENUM_PANCREAS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Combien de parties compose le duodénum et quelle est sa longueur totale ?", question_en: "How many parts make up the duodenum and what is its total length?", answer_fr: "4 parties, pour une longueur totale d'environ 25 cm.", answer_en: "4 parts, for a total length of about 25 cm." },
  { question_fr: "Quelle est la longueur approximative de la 1re partie (supérieure) du duodénum ?", question_en: "What is the approximate length of the 1st (superior) part of the duodenum?", answer_fr: "5 cm.", answer_en: "5 cm." },
  { question_fr: "Quelle est la longueur approximative de la 2e partie (descendante) du duodénum ?", question_en: "What is the approximate length of the 2nd (descending) part of the duodenum?", answer_fr: "7 à 10 cm.", answer_en: "7 to 10 cm." },
  { question_fr: "Qu'est-ce que le bulbe (capuchon) duodénal ?", question_en: "What is the duodenal cap (bulb)?", answer_fr: "La partie initiale légèrement dilatée du duodénum (2-3 cm), intrapéritonéale, mobile, sans plis circulaires — site fréquent d'ulcère.", answer_en: "The slightly dilated initial part of the duodenum (2-3 cm), intraperitoneal, mobile, without circular folds — a common ulcer site." },
  { question_fr: "Quelle structure suspend la flexure duodéno-jéjunale ?", question_en: "Which structure suspends the duodenojejunal flexure?", answer_fr: "Le muscle suspenseur du duodénum (ligament de Treitz).", answer_en: "The suspensory muscle of the duodenum (ligament of Treitz)." },
  { question_fr: "Où s'attache le ligament de Treitz en haut ?", question_en: "Where does the ligament of Treitz attach superiorly?", answer_fr: "Au pilier droit du diaphragme.", answer_en: "To the right crus of the diaphragm." },
  { question_fr: "Quels sont les plis muqueux typiques de l'intestin grêle, présents dans le duodénum ?", question_en: "What are the typical mucosal folds of the small intestine, found in the duodenum?", answer_fr: "Les plis circulaires (valvules de Kerckring), qui augmentent la surface d'absorption jusqu'à 1500 fois.", answer_en: "The circular folds (valves of Kerckring), which increase the absorption surface up to 1500-fold." },
  { question_fr: "Quelle glande caractérise la sous-muqueuse duodénale ?", question_en: "Which gland characterizes the duodenal submucosa?", answer_fr: "Les glandes de Brunner.", answer_en: "Brunner's glands." },
  { question_fr: "Qu'est-ce que la grande papille duodénale (papille de Vater) ?", question_en: "What is the major duodenal papilla (papilla of Vater)?", answer_fr: "Le point d'abouchement de l'ampoule hépato-pancréatique dans le duodénum, 8-10 cm sous le pylore.", answer_en: "The point where the hepatopancreatic ampulla opens into the duodenum, 8-10 cm distal to the pylorus." },
  { question_fr: "Quel sphincter entoure l'ampoule de Vater ?", question_en: "Which sphincter surrounds the ampulla of Vater?", answer_fr: "Le sphincter d'Oddi.", answer_en: "The sphincter of Oddi." },
  { question_fr: "Où s'ouvre le canal pancréatique accessoire de Santorini ?", question_en: "Where does the accessory pancreatic duct of Santorini open?", answer_fr: "Sur la petite papille duodénale, 2-3 cm en amont de la grande papille.", answer_en: "On the minor duodenal papilla, 2-3 cm proximal to the major papilla." },
  { question_fr: "Quelle artère vascularise la moitié supérieure du duodénum ?", question_en: "Which artery supplies the upper half of the duodenum?", answer_fr: "L'artère pancréatico-duodénale supérieure, branche de l'artère gastro-duodénale (tronc cœliaque).", answer_en: "The superior pancreaticoduodenal artery, a branch of the gastroduodenal artery (celiac trunk)." },
  { question_fr: "Quelle artère vascularise la moitié inférieure du duodénum ?", question_en: "Which artery supplies the lower half of the duodenum?", answer_fr: "L'artère pancréatico-duodénale inférieure, branche de l'artère mésentérique supérieure.", answer_en: "The inferior pancreaticoduodenal artery, a branch of the superior mesenteric artery." },
  { question_fr: "Le pancréas est-il un organe exocrine, endocrine, ou les deux ?", question_en: "Is the pancreas an exocrine, endocrine, or dual gland?", answer_fr: "Les deux : exo-endocrine.", answer_en: "Both: an exo-endocrine gland." },
  { question_fr: "En combien de parties le pancréas est-il subdivisé ?", question_en: "Into how many parts is the pancreas subdivided?", answer_fr: "Quatre : tête, col, corps, queue.", answer_en: "Four: head, neck, body, tail." },
  { question_fr: "Qu'est-ce que le processus unciné du pancréas ?", question_en: "What is the uncinate process of the pancreas?", answer_fr: "Un prolongement en crochet de la tête, s'étendant vers la gauche derrière les vaisseaux mésentériques supérieurs.", answer_en: "A hook-like extension of the head, extending leftward behind the superior mesenteric vessels." },
  { question_fr: "Quelle est la seule partie du pancréas qui soit intrapéritonéale et mobile ?", question_en: "Which is the only intraperitoneal and mobile part of the pancreas?", answer_fr: "La queue, logée dans le ligament spléno-rénal.", answer_en: "The tail, housed in the lienorenal ligament." },
  { question_fr: "Quel canal pancréatique est présent seul dans 90 % des cas ?", question_en: "Which pancreatic duct is the sole duct in 90% of cases?", answer_fr: "Le canal pancréatique principal (de Wirsung).", answer_en: "The main pancreatic duct (of Wirsung)." },
  { question_fr: "Qu'est-ce que le tuber omentale ?", question_en: "What is the tuber omentale?", answer_fr: "Un processus du corps du pancréas qui fait saillie au-dessus de la petite courbure de l'estomac, en contact avec le petit épiploon.", answer_en: "A process of the pancreatic body projecting above the lesser curvature of the stomach, in contact with the lesser omentum." },
  { question_fr: "Quelle artère est la source principale de vascularisation du corps et de la queue du pancréas ?", question_en: "Which artery is the main blood supply to the body and tail of the pancreas?", answer_fr: "L'artère splénique.", answer_en: "The splenic artery." },
  { question_fr: "Qu'est-ce que le pancréas annulaire ?", question_en: "What is annular pancreas?", answer_fr: "Une anomalie congénitale où un anneau de tissu pancréatique encercle la 2e partie du duodénum.", answer_en: "A congenital anomaly where a ring of pancreatic tissue encircles the second part of the duodenum." },
  { question_fr: "Où se trouve le plus souvent le tissu pancréatique accessoire ?", question_en: "Where is accessory pancreatic tissue most commonly found?", answer_fr: "Dans le duodénum.", answer_en: "In the duodenum." },
  { question_fr: "Quel plexus autonome innerve le pancréas, le foie, la rate et une grande partie du tube digestif ?", question_en: "Which autonomic plexus innervates the pancreas, liver, spleen, and much of the GI tract?", answer_fr: "Le plexus cœliaque (solaire).", answer_en: "The celiac (solar) plexus." },
  { question_fr: "D'où provient l'innervation parasympathique du plexus cœliaque ?", question_en: "Where does the parasympathetic innervation of the celiac plexus come from?", answer_fr: "Du nerf vague (X).", answer_en: "The vagus nerve (X)." },
  { question_fr: "D'où provient l'innervation sympathique du plexus cœliaque ?", question_en: "Where does the sympathetic innervation of the celiac plexus come from?", answer_fr: "Des nerfs splanchniques.", answer_en: "The splanchnic nerves." },
  { question_fr: "Quel effet le sympathique exerce-t-il sur la digestion via le plexus cœliaque ?", question_en: "What effect does the sympathetic system have on digestion via the celiac plexus?", answer_fr: "Il inhibe le péristaltisme et constricte les vaisseaux sanguins digestifs.", answer_en: "It inhibits peristalsis and constricts digestive blood vessels." },
  { question_fr: "À quel niveau vertébral se situe la tête du pancréas ?", question_en: "At which vertebral level does the head of the pancreas lie?", answer_fr: "En regard de L2.", answer_en: "At the level of L2." },
  { question_fr: "Quelles veines drainent le pancréas ?", question_en: "Which veins drain the pancreas?", answer_fr: "Les veines porte, mésentérique supérieure et splénique.", answer_en: "The portal, superior mesenteric, and splenic veins." },
  { question_fr: "Quelle structure croise en avant le canal pancréatique principal pour rejoindre la petite papille ?", question_en: "Which structure crosses in front of the main pancreatic duct to reach the minor papilla?", answer_fr: "Le canal pancréatique accessoire (de Santorini).", answer_en: "The accessory pancreatic duct (of Santorini)." },
  { question_fr: "Quelle est la relation postérieure principale de la tête du pancréas ?", question_en: "What is the main posterior relation of the head of the pancreas?", answer_fr: "La veine cave inférieure, la veine rénale gauche et le canal cholédoque.", answer_en: "The inferior vena cava, left renal vein, and common bile duct." },
];

export const STOMACH_SPLEEN_LIVER_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la forme générale de l'estomac ?", question_en: "What is the general shape of the stomach?", answer_fr: "En forme de J.", answer_en: "J-shaped." },
  { question_fr: "Quelles sont les 4 parties de l'estomac ?", question_en: "What are the 4 parts of the stomach?", answer_fr: "Cardia, fundus, corps, partie pylorique.", answer_en: "Cardia, fundus, body, pyloric part." },
  { question_fr: "Quelle incisure sépare le fundus de l'œsophage sur la grande courbure ?", question_en: "Which notch separates the fundus from the esophagus on the greater curvature?", answer_fr: "L'incisure cardiaque.", answer_en: "The cardiac notch." },
  { question_fr: "Quelle incisure de la petite courbure indique la jonction corps/antre pylorique ?", question_en: "Which notch on the lesser curvature marks the body/pyloric antrum junction?", answer_fr: "L'incisure angulaire.", answer_en: "The angular notch (incisura angularis)." },
  { question_fr: "Quelle sécrétion gastrique est nécessaire à l'absorption de la vitamine B12 ?", question_en: "Which gastric secretion is required for vitamin B12 absorption?", answer_fr: "Le facteur intrinsèque.", answer_en: "Intrinsic factor." },
  { question_fr: "Quel repli péritonéal relie la petite courbure de l'estomac au foie ?", question_en: "Which peritoneal fold connects the lesser curvature of the stomach to the liver?", answer_fr: "Le petit épiploon.", answer_en: "The lesser omentum." },
  { question_fr: "Quelles structures forment le lit gastrique (postérieur à l'estomac) ?", question_en: "Which structures form the stomach bed (posterior to the stomach)?", answer_fr: "Diaphragme, rein et surrénale gauches, pancréas, mésocôlon transverse, angle colique gauche, artère splénique, rate.", answer_en: "Diaphragm, left kidney and suprarenal gland, pancreas, transverse mesocolon, left colic flexure, splenic artery, spleen." },
  { question_fr: "Quelle structure du lit gastrique n'est pas séparée de l'estomac par la bourse omentale ?", question_en: "Which stomach-bed structure is NOT separated from the stomach by the omental bursa?", answer_fr: "La rate (séparée par le grand sac).", answer_en: "The spleen (separated by the greater sac)." },
  { question_fr: "Combien de couches composent la tunique musculeuse gastrique ?", question_en: "How many layers make up the gastric muscular coat?", answer_fr: "Trois : longitudinale externe, circulaire moyenne, oblique interne.", answer_en: "Three: outer longitudinal, middle circular, inner oblique." },
  { question_fr: "Quelle artère de l'estomac est une branche directe du tronc cœliaque ?", question_en: "Which gastric artery is a direct branch of the celiac trunk?", answer_fr: "L'artère gastrique gauche.", answer_en: "The left gastric artery." },
  { question_fr: "Combien de pôles, bords et faces possède la rate ?", question_en: "How many poles, borders, and surfaces does the spleen have?", answer_fr: "2 pôles, 3 bords, 2 faces.", answer_en: "2 poles, 3 borders, 2 surfaces." },
  { question_fr: "Quelles sont les 4 impressions de la face viscérale de la rate ?", question_en: "What are the 4 impressions on the visceral surface of the spleen?", answer_fr: "Gastrique, rénale, colique, pancréatique.", answer_en: "Gastric, renal, colic, pancreatic." },
  { question_fr: "Quelle impression splénique est la plus grande et contient le hile ?", question_en: "Which splenic impression is the largest and contains the hilum?", answer_fr: "L'impression gastrique.", answer_en: "The gastric impression." },
  { question_fr: "Quel ligament relie le hile de la rate au rein gauche ?", question_en: "Which ligament connects the splenic hilum to the left kidney?", answer_fr: "Le ligament spléno-rénal.", answer_en: "The lienorenal (splenorenal) ligament." },
  { question_fr: "Que contient le ligament spléno-rénal ?", question_en: "What does the lienorenal ligament contain?", answer_fr: "La queue du pancréas, les vaisseaux spléniques et les nœuds pancréatico-spléniques.", answer_en: "The tail of the pancreas, splenic vessels, and pancreaticosplenic nodes." },
  { question_fr: "Quelle veine se forme par l'union de la veine splénique et des veines mésentériques ?", question_en: "Which vein forms from the union of the splenic and mesenteric veins?", answer_fr: "La veine porte.", answer_en: "The portal vein." },
  { question_fr: "Quelles sont les principales fonctions du foie ?", question_en: "What are the main functions of the liver?", answer_fr: "Métabolisme des glucides/lipides/protéines, détoxification, stockage du glycogène et des vitamines liposolubles, sécrétion de bile.", answer_en: "Carbohydrate/fat/protein metabolism, detoxification, storage of glycogen and fat-soluble vitamins, bile secretion." },
  { question_fr: "Quel ligament sépare les lobes anatomiques droit et gauche du foie sur sa face diaphragmatique ?", question_en: "Which ligament separates the right and left anatomical lobes of the liver on its diaphragmatic surface?", answer_fr: "Le ligament falciforme.", answer_en: "The falciform ligament." },
  { question_fr: "Combien de lobes anatomiques distingue-t-on sur la face viscérale du foie et lesquels ?", question_en: "How many anatomical lobes are seen on the visceral surface of the liver, and which?", answer_fr: "Quatre : droit, gauche, carré, caudé.", answer_en: "Four: right, left, quadrate, caudate." },
  { question_fr: "Où se situe le lobe carré du foie ?", question_en: "Where is the quadrate lobe of the liver located?", answer_fr: "Entre la fosse vésiculaire et la fissure du ligament rond, sous le porta hepatis.", answer_en: "Between the gallbladder fossa and the fissure for the ligamentum teres, below the porta hepatis." },
  { question_fr: "Où se situe le lobe caudé du foie ?", question_en: "Where is the caudate lobe of the liver located?", answer_fr: "Entre le sillon de la VCI et la fissure du ligament veineux, au-dessus du porta hepatis.", answer_en: "Between the IVC groove and the fissure for the ligamentum venosum, above the porta hepatis." },
  { question_fr: "Qu'est-ce que la « zone nue » du foie ?", question_en: "What is the 'bare area' of the liver?", answer_fr: "Une zone triangulaire de la face postérieure du lobe droit, dépourvue de péritoine, au contact direct du diaphragme.", answer_en: "A triangular area on the posterior aspect of the right lobe, devoid of peritoneum, in direct contact with the diaphragm." },
  { question_fr: "Quelles structures pénètrent au porta hepatis ?", question_en: "Which structures enter at the porta hepatis?", answer_fr: "Les branches droite et gauche de l'artère hépatique et la veine porte.", answer_en: "The right and left branches of the hepatic artery and the portal vein." },
  { question_fr: "Quelles structures sortent au porta hepatis ?", question_en: "Which structures exit at the porta hepatis?", answer_fr: "Les canaux hépatiques droit et gauche.", answer_en: "The right and left hepatic ducts." },
  { question_fr: "Quelles sont les deux sources de vascularisation du foie ?", question_en: "What are the two sources of blood supply to the liver?", answer_fr: "L'artère hépatique propre (sang oxygéné) et la veine porte (sang riche en nutriments).", answer_en: "The proper hepatic artery (oxygenated blood) and the portal vein (nutrient-rich blood)." },
  { question_fr: "Quelles veines drainent la majorité du sang hépatique vers la VCI ?", question_en: "Which veins drain most hepatic blood into the IVC?", answer_fr: "Les trois grosses veines hépatiques.", answer_en: "The three large hepatic veins." },
  { question_fr: "Quels sont les vrais ligaments du foie, vestiges de structures fœtales ?", question_en: "What are the true ligaments of the liver, remnants of fetal structures?", answer_fr: "Le ligament rond (veine ombilicale) et le ligament veineux (canal veineux d'Arantius).", answer_en: "The ligamentum teres (umbilical vein) and the ligamentum venosum (ductus venosus)." },
  { question_fr: "Quels sont les 5 composants de l'appareil biliaire extra-hépatique ?", question_en: "What are the 5 components of the extrahepatic biliary apparatus?", answer_fr: "Canaux hépatiques droit/gauche, canal hépatique commun, vésicule biliaire, canal cystique, canal cholédoque.", answer_en: "Right/left hepatic ducts, common hepatic duct, gallbladder, cystic duct, bile (common) duct." },
  { question_fr: "Que reçoit, stocke et transmet la vésicule biliaire ?", question_en: "What does the gallbladder receive, store, and transmit?", answer_fr: "La bile, provenant du foie, stockée et concentrée avant d'être transmise à la 2e partie du duodénum.", answer_en: "Bile, from the liver, stored and concentrated before being delivered to the second part of the duodenum." },
  { question_fr: "Quel lobe hépatique produit l'empreinte gastrique sur sa face inférieure ?", question_en: "Which hepatic lobe produces the gastric impression on its inferior surface?", answer_fr: "Le lobe gauche.", answer_en: "The left lobe." },
];
