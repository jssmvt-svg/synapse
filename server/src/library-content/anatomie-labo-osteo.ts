import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

// Chapitre labo : ostéologie du membre supérieur, révision pratique pour
// l'identification des reliefs osseux (préparation TP/examen pratique).
const UPPER_LIMB_OSTEOLOGY_COURSE = `# TP — Ostéologie du membre supérieur (squelette appendiculaire)

## 1. Clavicule
- Os long, seul lien osseux entre le membre supérieur et le squelette axial.
- **Extrémité sternale** (médiale, convexe en avant) s'articule avec le manubrium sternal (articulation sterno-claviculaire).
- **Extrémité acromiale** (latérale, concave en avant) s'articule avec l'acromion de la scapula (articulation acromio-claviculaire).
- Face inférieure marquée par le **tubercule conoïde** et la **ligne trapézoïde** (insertions ligamentaires coraco-claviculaires).

## 2. Scapula (omoplate)
- Os plat triangulaire appliqué sur la face postéro-latérale du thorax.
- **Cavité glénoïde** : surface articulaire peu profonde pour la tête humérale (articulation gléno-humérale).
- **Acromion** : prolongement latéral de l'épine de la scapula, surplombe l'articulation de l'épaule.
- **Processus coracoïde** : projection antérieure en forme de crochet, insertion du biceps brachial (chef court), du coraco-brachial et du petit pectoral.
- **Fosses supra-épineuse et infra-épineuse** : logent respectivement le supra-épineux et l'infra-épineux (muscles de la coiffe des rotateurs).
- **Bord médial (spinal), bord latéral (axillaire), angle inférieur** : repères de palpation clinique.

## 3. Humérus
- **Tête humérale** : hémisphérique, s'articule avec la cavité glénoïde.
- **Col anatomique** vs **col chirurgical** : ce dernier, à la jonction diaphyso-épiphysaire proximale, est un site fréquent de fracture.
- **Tubercule majeur (grand tubercule)** et **tubercule mineur (petit tubercule)** : insertions des muscles de la coiffe des rotateurs, séparés par le **sillon intertuberculaire (gouttière bicipitale)** où chemine le tendon du long biceps.
- **Tubérosité deltoïdienne** : sur la face latérale de la diaphyse, insertion du deltoïde.
- **Sillon du nerf radial** : trajet oblique sur la face postérieure de la diaphyse — un traumatisme diaphysaire à ce niveau expose le nerf radial.
- Extrémité distale : **capitulum** (articulaire avec la tête radiale), **trochlée** (articulaire avec l'ulna), **épicondyle latéral** et **épicondyle médial** (insertions des muscles épicondyliens), **fosse coronoïdienne**, **fosse olécrânienne** et **fosse radiale**.

## 4. Radius
- Os latéral de l'avant-bras (côté du pouce).
- **Tête radiale** (proximale, en forme de disque) s'articule avec le capitulum huméral et l'incisure radiale de l'ulna.
- **Tubérosité radiale** : juste distale au col, insertion du biceps brachial.
- Extrémité distale élargie, porte le **processus styloïde radial** et l'**incisure ulnaire** (articulation radio-ulnaire distale).

## 5. Ulna (cubitus)
- Os médial de l'avant-bras (côté du petit doigt), stabilisateur principal de l'articulation du coude.
- **Olécrâne** : proéminence postéro-proximale, insertion du triceps brachial, forme la pointe du coude.
- **Processus coronoïde** : proéminence antéro-proximale.
- **Incisure trochléaire (grande cavité sigmoïde)** : entre olécrâne et processus coronoïde, s'articule avec la trochlée humérale.
- **Incisure radiale** : surface latérale s'articulant avec la tête radiale (articulation radio-ulnaire proximale).
- Extrémité distale porte la **tête ulnaire** et le **processus styloïde ulnaire**.

## 6. Os de la main
- **Carpe** (8 os courts en 2 rangées) : rangée proximale — scaphoïde, lunatum, triquétrum, pisiforme ; rangée distale — trapèze, trapézoïde, capitatum, hamatum (avec son crochet, le **hamulus**).
- Le **scaphoïde** est l'os carpien le plus fréquemment fracturé (chute sur la main en hyperextension) ; sa vascularisation rétrograde expose à un risque de nécrose avasculaire du pôle proximal.
- **Métacarpe** : 5 os longs (métacarpiens I à V), base proximale, tête distale arrondie.
- **Phalanges** : 3 par doigt (proximale, moyenne, distale) sauf le pouce qui n'en a que 2 (proximale, distale).

## Points à retenir pour le TP
- Savoir différencier la face antérieure/postérieure et le côté droit/gauche de chaque os isolé à partir des repères asymétriques (sillon du nerf radial en postérieur pour l'humérus, processus styloïdes en distal pour radius/ulna, etc.).
- Localiser précisément les surfaces articulaires (cavité glénoïde, capitulum/trochlée, tête radiale, incisure trochléaire) car elles définissent les axes de mobilité des articulations correspondantes.
- Associer chaque relief osseux à son insertion musculaire ou ligamentaire principale (tubercule conoïde, tubérosité deltoïdienne, épicondyles, tubérosité radiale, olécrâne).`;

export const UPPER_LIMB_OSTEOLOGY_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Ostéologie du membre supérieur",
    source_label: "TP Anatomie — Squelette appendiculaire, membre supérieur",
    content_fr: UPPER_LIMB_OSTEOLOGY_COURSE,
  },
  qcm: [
    single("Quel os relie le membre supérieur au squelette axial ?", "B", "La clavicule est le seul lien osseux entre le membre supérieur et le squelette axial, via l'articulation sterno-claviculaire.", ["La scapula", "La clavicule", "L'humérus", "La première côte"]),
    single("Avec quelle structure s'articule le processus coracoïde ?", "C", "Le processus coracoïde n'est pas une surface articulaire mais un site d'insertion musculaire (biceps chef court, coraco-brachial, petit pectoral) et ligamentaire.", ["La tête humérale", "L'acromion", "Aucune surface articulaire : c'est un site d'insertion musculo-ligamentaire", "La clavicule"]),
    single("Quelle structure sépare le tubercule majeur du tubercule mineur de l'humérus ?", "A", "Le sillon intertuberculaire (gouttière bicipitale) sépare les deux tubercules et livre passage au tendon du long biceps.", ["Le sillon intertuberculaire (gouttière bicipitale)", "Le col chirurgical", "La fosse coronoïdienne", "La tubérosité deltoïdienne"]),
    single("Quel repère osseux huméral est en rapport direct avec le nerf radial ?", "B", "Le sillon du nerf radial, sur la face postérieure de la diaphyse humérale, expose le nerf radial en cas de fracture diaphysaire à ce niveau.", ["La tubérosité deltoïdienne", "Le sillon du nerf radial", "L'épicondyle médial", "Le col anatomique"]),
    single("Quelle portion de l'humérus s'articule avec l'ulna au coude ?", "C", "La trochlée humérale s'articule avec l'incisure trochléaire de l'ulna ; le capitulum s'articule avec la tête radiale.", ["Le capitulum", "L'épicondyle latéral", "La trochlée", "La fosse radiale"]),
    single("Quel os de l'avant-bras porte la tubérosité radiale ?", "A", "La tubérosité radiale, juste distale au col du radius, est le site d'insertion du tendon du biceps brachial.", ["Le radius", "L'ulna", "L'humérus", "Le scaphoïde"]),
    single("Quelle structure ulnaire forme la pointe du coude ?", "B", "L'olécrâne, proéminence postéro-proximale de l'ulna, forme la pointe du coude et reçoit l'insertion du triceps brachial.", ["Le processus coronoïde", "L'olécrâne", "La tête ulnaire", "Le processus styloïde ulnaire"]),
    single("Quelle incisure de l'ulna s'articule avec la trochlée humérale ?", "C", "L'incisure trochléaire (grande cavité sigmoïde), délimitée par l'olécrâne et le processus coronoïde, s'articule avec la trochlée humérale.", ["L'incisure radiale", "L'incisure ulnaire", "L'incisure trochléaire", "La fosse olécrânienne"]),
    single("Quel os carpien est le plus fréquemment fracturé ?", "A", "Le scaphoïde est le plus fréquemment fracturé, typiquement lors d'une chute sur la main en hyperextension.", ["Le scaphoïde", "Le lunatum", "Le pisiforme", "L'hamatum"]),
    single("Pourquoi la fracture du scaphoïde expose-t-elle à un risque de nécrose avasculaire ?", "B", "La vascularisation du scaphoïde est rétrograde (entrant par le pôle distal) : une fracture peut priver le pôle proximal de son apport sanguin.", ["Le scaphoïde n'a aucune vascularisation propre", "Sa vascularisation rétrograde expose le pôle proximal à une interruption de l'apport sanguin", "Le scaphoïde est un os spongieux sans corticale", "Il s'agit d'un os sésamoïde non vascularisé"]),
    multi("Quels os composent la rangée proximale du carpe ?", ["A", "B", "C", "D"], "La rangée proximale comprend, de latéral en médial : scaphoïde, lunatum, triquétrum et pisiforme.", ["Scaphoïde", "Lunatum", "Triquétrum", "Pisiforme"]),
    single("Combien de phalanges possède le pouce ?", "B", "Le pouce ne possède que 2 phalanges (proximale et distale), contrairement aux autres doigts qui en ont 3.", ["3", "2", "1", "4"]),
    single("Quelle structure scapulaire loge le muscle supra-épineux ?", "A", "La fosse supra-épineuse, au-dessus de l'épine de la scapula, loge le muscle supra-épineux (coiffe des rotateurs).", ["La fosse supra-épineuse", "La fosse infra-épineuse", "La cavité glénoïde", "Le processus coracoïde"]),
    single("Quelle extrémité de la clavicule s'articule avec le manubrium sternal ?", "A", "L'extrémité sternale (médiale) de la clavicule s'articule avec le manubrium sternal à l'articulation sterno-claviculaire.", ["L'extrémité sternale", "L'extrémité acromiale", "Le tubercule conoïde", "La ligne trapézoïde"]),
    single("Quelle est la fonction de l'incisure radiale de l'ulna ?", "C", "L'incisure radiale de l'ulna s'articule avec la tête radiale à l'articulation radio-ulnaire proximale, permettant la pronosupination.", ["Insertion du triceps", "Articulation avec le capitulum huméral", "Articulation avec la tête radiale (radio-ulnaire proximale)", "Passage du nerf ulnaire"]),
    single("Quel repère distal du radius s'articule avec l'ulna ?", "B", "L'incisure ulnaire, à l'extrémité distale du radius, s'articule avec la tête ulnaire à l'articulation radio-ulnaire distale.", ["Le processus styloïde radial", "L'incisure ulnaire", "La tubérosité radiale", "La tête radiale"]),
    single("Quel os carpien de la rangée distale porte un crochet (hamulus) ?", "D", "L'hamatum (os crochu) porte le hamulus, un crochet osseux palpable en regard du canal carpien.", ["Le trapèze", "Le trapézoïde", "Le capitatum", "L'hamatum"]),
    single("À quelle articulation participe l'acromion ?", "B", "L'acromion s'articule avec l'extrémité acromiale de la clavicule à l'articulation acromio-claviculaire.", ["Gléno-humérale", "Acromio-claviculaire", "Sterno-claviculaire", "Radio-ulnaire"]),
    single("Quelle fosse humérale distale accueille le processus coronoïde de l'ulna en flexion du coude ?", "A", "La fosse coronoïdienne, en avant, accueille le processus coronoïde ulnaire lors de la flexion complète du coude.", ["La fosse coronoïdienne", "La fosse olécrânienne", "La fosse radiale", "La fosse supra-épineuse"]),
    single("Quelle fosse humérale accueille l'olécrâne en extension complète du coude ?", "B", "La fosse olécrânienne, sur la face postérieure distale de l'humérus, accueille l'olécrâne lors de l'extension complète du coude.", ["La fosse coronoïdienne", "La fosse olécrânienne", "La fosse radiale", "La fosse infra-épineuse"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Ostéologie du membre supérieur", duration_seconds: 1_600 },
};

// Chapitre labo : ostéologie du membre inférieur, révision pratique pour
// l'identification des reliefs osseux (préparation TP/examen pratique).
const LOWER_LIMB_OSTEOLOGY_COURSE = `# TP — Ostéologie du membre inférieur (squelette appendiculaire)

## 1. Os coxal (hanche)
- Résulte de la fusion de 3 os primitivement distincts au niveau du **cotyle (acétabulum)** : **ilium**, **ischium** et **pubis**.
- **Ilium** : partie supéro-latérale, présente la **crête iliaque** (repère de palpation), l'**épine iliaque antéro-supérieure (EIAS)** et l'**épine iliaque postéro-supérieure (EIPS)**.
- **Ischium** : partie postéro-inférieure, présente la **tubérosité ischiatique** (support du poids du corps en position assise, insertion des muscles ischio-jambiers) et l'**épine ischiatique**.
- **Pubis** : partie antéro-médiale, les deux pubis s'unissent à la **symphyse pubienne**.
- **Grande incisure ischiatique** et **petite incisure ischiatique** : séparées par l'épine ischiatique, livrent passage à des structures vasculo-nerveuses (dont le nerf sciatique par la grande incisure).
- **Foramen obturé** : large orifice antéro-inférieur, fermé par la membrane obturatrice.
- **Acétabulum** : cavité articulaire profonde recevant la tête fémorale (articulation coxo-fémorale), formée par la contribution des 3 os.

## 2. Fémur
- Os le plus long et le plus solide du corps.
- **Tête fémorale** : sphérique, porte la **fovéa capitis** (insertion du ligament de la tête fémorale, voie d'entrée d'une artère nourricière accessoire).
- **Col fémoral** : oblique, site fréquent de fracture chez le sujet âgé (fracture du col du fémur), zone à vascularisation précaire.
- **Grand trochanter** et **petit trochanter** : reliefs latéral et médial, insertions des muscles pelvi-trochantériens et du psoas-iliaque respectivement, reliés par la **ligne intertrochantérique** (antérieure) et la **crête intertrochantérique** (postérieure).
- **Ligne âpre** : crête rugueuse longitudinale sur la face postérieure de la diaphyse, insertion de nombreux muscles (adducteurs, vaste latéral/médial).
- Extrémité distale : **condyle médial** et **condyle latéral**, séparés en arrière par la **fosse intercondylaire**, **épicondyle médial** et **épicondyle latéral**, **surface patellaire (trochlée fémorale)** en avant.

## 3. Patella (rotule)
- Le plus gros os sésamoïde du corps, inclus dans le tendon du quadriceps.
- Face postérieure articulaire, divisée par une crête verticale en deux facettes (médiale et latérale) répondant à la trochlée fémorale.
- Base (proximale, large) et apex (distal, pointu, donnant insertion au ligament patellaire).

## 4. Tibia
- Os médial de la jambe, principal os porteur.
- Extrémité proximale : **condyle médial** et **condyle latéral**, séparés par l'**éminence intercondylaire (épines tibiales)** ; **tubérosité tibiale** en avant (insertion du ligament patellaire).
- Diaphyse triangulaire à la palpation, **crête tibiale (bord antérieur)** directement sous-cutanée.
- Extrémité distale : **malléole médiale**, articulaire avec le talus.

## 5. Fibula (péroné)
- Os latéral, grêle, non porteur de poids (rôle de stabilisation latérale et insertion musculaire).
- **Tête fibulaire** (proximale) s'articule avec la face postéro-latérale du condyle tibial latéral.
- Extrémité distale : **malléole latérale**, articulaire avec le talus, descend plus bas que la malléole médiale.
- Le nerf fibulaire commun (nerf sciatique poplité externe) contourne le col de la fibula, superficiel et vulnérable aux traumatismes à ce niveau.

## 6. Os du pied
- **Tarse** (7 os) : **talus** (s'articule avec le tibia et la fibula à la mortaise tibio-fibulaire, transmet le poids du corps au pied), **calcanéus** (le plus volumineux, forme le talon, insertion du tendon calcanéen/tendon d'Achille), **naviculaire**, **cuboïde**, **cunéiformes médial, intermédiaire et latéral**.
- **Métatarse** : 5 os longs (métatarsiens I à V), base proximale, tête distale.
- **Phalanges** : 3 par orteil (proximale, moyenne, distale) sauf l'hallux (gros orteil) qui n'en a que 2.
- Les **arches plantaires** (longitudinale médiale, longitudinale latérale, transversale) répartissent les contraintes mécaniques du pied.

## Points à retenir pour le TP
- Différencier fémur droit/gauche à partir de l'orientation de la tête (médiale) et de la fosse intercondylaire (postérieure).
- Identifier tibia vs fibula par la taille (le tibia est porteur, massif ; la fibula est grêle) et la position des malléoles (médiale pour le tibia, latérale et plus distale pour la fibula).
- Repérer les 3 composantes de l'os coxal (ilium, ischium, pubis) et leur convergence au niveau de l'acétabulum.
- Associer chaque relief à sa fonction : trochanters et ligne âpre (insertions musculaires du fémur), tubérosité tibiale (insertion du ligament patellaire), malléoles (stabilité de la cheville).`;

export const LOWER_LIMB_OSTEOLOGY_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Fiche pratique — Ostéologie du membre inférieur",
    source_label: "TP Anatomie — Squelette appendiculaire, membre inférieur",
    content_fr: LOWER_LIMB_OSTEOLOGY_COURSE,
  },
  qcm: [
    single("Quels sont les 3 os primitifs constituant l'os coxal ?", "B", "L'os coxal résulte de la fusion de l'ilium, de l'ischium et du pubis au niveau de l'acétabulum.", ["Fémur, tibia, fibula", "Ilium, ischium, pubis", "Ilium, sacrum, coccyx", "Ischium, pubis, sacrum"]),
    single("Quelle structure de l'ischium supporte le poids du corps en position assise ?", "C", "La tubérosité ischiatique supporte le poids du corps en position assise et donne insertion aux muscles ischio-jambiers.", ["L'épine ischiatique", "La grande incisure ischiatique", "La tubérosité ischiatique", "Le foramen obturé"]),
    single("Quelle structure livre passage au nerf sciatique en quittant le bassin ?", "A", "La grande incisure (échancrure) ischiatique, transformée en foramen par le ligament sacro-épineux, livre passage au nerf sciatique.", ["La grande incisure ischiatique", "La petite incisure ischiatique", "Le foramen obturé", "La symphyse pubienne"]),
    single("Quelle structure fémorale reçoit l'insertion du ligament de la tête fémorale ?", "B", "La fovéa capitis, dépression au sommet de la tête fémorale, reçoit l'insertion du ligament de la tête fémorale (ligament rond).", ["Le col fémoral", "La fovéa capitis", "Le grand trochanter", "La ligne âpre"]),
    single("Pourquoi la fracture du col fémoral est-elle particulièrement à risque chez le sujet âgé ?", "C", "Le col fémoral a une vascularisation précaire, exposant à un risque élevé de nécrose avasculaire de la tête fémorale après fracture.", ["Le col fémoral est extra-articulaire", "Le col fémoral est le site d'insertion du quadriceps", "Sa vascularisation précaire expose à un risque de nécrose avasculaire", "Le col fémoral est un os spongieux sans corticale"]),
    single("Quelle crête rugueuse longitudinale postérieure du fémur donne insertion aux muscles adducteurs ?", "A", "La ligne âpre, sur la face postérieure de la diaphyse fémorale, donne insertion à de nombreux muscles dont les adducteurs.", ["La ligne âpre", "La ligne intertrochantérique", "La crête intertrochantérique", "La ligne intercondylaire"]),
    single("Quel est le plus gros os sésamoïde du corps ?", "B", "La patella (rotule) est le plus gros os sésamoïde du corps, incluse dans le tendon du quadriceps.", ["Le calcanéus", "La patella", "Le talus", "Le naviculaire"]),
    single("Quelle structure tibiale reçoit l'insertion du ligament patellaire ?", "C", "La tubérosité tibiale, sur la face antérieure du tibia proximal, reçoit l'insertion du ligament patellaire.", ["L'éminence intercondylaire", "La malléole médiale", "La tubérosité tibiale", "Le condyle latéral"]),
    single("Quel os de la jambe n'est pas porteur de poids ?", "B", "La fibula est un os grêle, non porteur de poids, qui joue un rôle de stabilisation latérale et d'insertion musculaire.", ["Le tibia", "La fibula", "Le talus", "Le calcanéus"]),
    single("Quel nerf est vulnérable au contact du col de la fibula ?", "A", "Le nerf fibulaire commun contourne le col de la fibula de façon superficielle, le rendant vulnérable aux traumatismes à ce niveau.", ["Le nerf fibulaire commun", "Le nerf tibial", "Le nerf sciatique", "Le nerf saphène"]),
    single("Quel os tarsien s'articule directement avec le tibia et la fibula ?", "C", "Le talus s'articule avec le tibia et la fibula à la mortaise tibio-fibulaire, transmettant le poids du corps au pied.", ["Le calcanéus", "Le naviculaire", "Le talus", "Le cuboïde"]),
    single("Quel os tarsien forme le talon et reçoit le tendon calcanéen ?", "B", "Le calcanéus, le plus volumineux des os tarsiens, forme le talon et reçoit l'insertion du tendon calcanéen (tendon d'Achille).", ["Le talus", "Le calcanéus", "Le cuboïde", "Le naviculaire"]),
    multi("Quels os composent le tarse ?", ["A", "B", "C", "D"], "Le tarse comprend 7 os : talus, calcanéus, naviculaire, cuboïde, et les 3 cunéiformes (médial, intermédiaire, latéral).", ["Talus", "Calcanéus", "Naviculaire", "Cuboïde"]),
    single("Combien de phalanges possède l'hallux (gros orteil) ?", "B", "L'hallux ne possède que 2 phalanges (proximale et distale), contrairement aux autres orteils qui en ont 3.", ["3", "2", "1", "4"]),
    single("Quelle malléole descend le plus distalement, servant de repère de stabilité latérale de la cheville ?", "B", "La malléole latérale (extrémité distale de la fibula) descend plus bas que la malléole médiale, renforçant la stabilité latérale de la cheville.", ["La malléole médiale (tibia)", "La malléole latérale (fibula)", "L'apex de la patella", "La tête fibulaire"]),
    single("Quelle structure sépare les condyles fémoraux en arrière ?", "C", "La fosse intercondylaire sépare les condyles médial et latéral du fémur sur sa face postérieure.", ["La ligne âpre", "La surface patellaire", "La fosse intercondylaire", "La ligne intertrochantérique"]),
    single("Quelle articulation reçoit la tête fémorale ?", "A", "L'acétabulum (cotyle) de l'os coxal reçoit la tête fémorale à l'articulation coxo-fémorale (hanche).", ["L'acétabulum", "La symphyse pubienne", "Le foramen obturé", "L'éminence intercondylaire"]),
    single("Quel relief osseux fémoral proximal donne insertion au muscle psoas-iliaque ?", "B", "Le petit trochanter, sur la face médiale de l'extrémité proximale du fémur, reçoit l'insertion du psoas-iliaque.", ["Le grand trochanter", "Le petit trochanter", "La ligne âpre", "Le col fémoral"]),
    single("Combien d'arches plantaires participent à la répartition des contraintes mécaniques du pied ?", "C", "Trois arches plantaires (longitudinale médiale, longitudinale latérale et transversale) répartissent les contraintes du pied.", ["1", "2", "3", "4"]),
    single("Quelle structure sépare les condyles tibiaux au niveau de l'extrémité proximale ?", "A", "L'éminence intercondylaire (épines tibiales) sépare les condyles médial et latéral du tibia proximal.", ["L'éminence intercondylaire", "La tubérosité tibiale", "La malléole médiale", "La crête tibiale"]),
  ],
  exam: { titre_fr: "Examen pratique chronométré — Ostéologie du membre inférieur", duration_seconds: 1_600 },
};
