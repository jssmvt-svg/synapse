import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const LOWER_LIMB_JOINTS_COURSE = `# Articulations du membre inférieur — Hanche et genou

## 1. L'articulation coxo-fémorale (hanche)

### 1.1 Généralités
- Articulation **synoviale sphéroïde (énarthrose)**, formée par la réception de la **tête du fémur** dans la cavité en forme de coupe de l'**acétabulum** (cotyle).
- Fonctions principales : supporter le poids du corps en station debout, et transmettre à la tête fémorale les forces générées par les mouvements du tronc pendant la marche.

### 1.2 Surfaces articulaires
- **Tête du fémur** : forme plus de la moitié d'une sphère, entièrement recouverte de cartilage hyalin sauf en un point, la **fovea capitis**, où s'insère le ligament rond (ligamentum teres).
- **Acétabulum** (« coupe à vinaigre ») : présente trois éléments — une **surface semi-lunaire** en forme de fer à cheval (seule partie articulaire, recouverte de cartilage), l'**échancrure acétabulaire** et la **fosse acétabulaire** (non articulaires). Le **labrum acétabulaire (bourrelet cotyloïdien)** augmente la profondeur de l'acétabulum.

### 1.3 Ligaments de la hanche
- **Capsule articulaire** : sac fibreux dense et résistant. Sur l'os coxal, elle s'attache 5-6 mm au-delà du bord acétabulaire ; sur le fémur, elle s'attache en avant à la ligne intertrochantérienne et en arrière à environ 1 cm en avant de la crête intertrochantérienne. Elle est plus épaisse en haut et en avant (où la résistance requise est maximale), plus fine en bas et en arrière. Elle comprend des fibres circulaires et longitudinales.
- **Ligament ilio-fémoral** (ligament en Y de Bigelow) : le plus résistant des ligaments de la hanche, situé en avant de l'articulation ; s'attache en haut à l'épine iliaque antéro-inférieure et se divise en deux faisceaux se terminant sur la ligne intertrochantérienne.
- **Ligament pubo-fémoral (pubo-capsulaire)** : de la crête obturatrice et de la branche supérieure du pubis, se mêlant à la capsule et au faisceau vertical du ligament ilio-fémoral.
- **Ligament ischio-fémoral (ischio-capsulaire)** : bande triangulaire de fibres résistantes partant de l'ischion, en arrière et en dessous de l'acétabulum.
- **Ligament acétabulaire transverse** : portion du labrum dépourvue de cartilage, qui traverse l'échancrure acétabulaire et la transforme en foramen pour le passage des vaisseaux nourriciers.
- **Labrum acétabulaire (glénoïdien)** : rebord fibrocartilagineux fixé au pourtour de l'acétabulum, formant un cercle complet avec le ligament transverse.
- **Ligamentum teres femoris (ligament rond)** : bande triangulaire aplatie, implantée par son apex dans la fovea capitis fémorale, sa base sur les deux bords de l'échancrure acétabulaire.

### 1.4 Membrane synoviale
- Tapisse la face interne de la capsule fibreuse, la portion intracapsulaire du col fémoral, les deux faces du labrum, le ligament transverse, le ligamentum teres et la graisse de la fosse acétabulaire.

### 1.5 Muscles en rapport avec la hanche
- **Antérieur** : psoas major et iliaque (séparés de la capsule par une bourse).
- **Supérieur** : chef réfléchi du droit fémoral, petit fessier (adhérent à la capsule).
- **Médial** : obturateur externe, pectiné.
- **Postérieur** : piriforme, jumeau supérieur, obturateur interne, jumeau inférieur, obturateur externe, carré fémoral.

### 1.6 Vascularisation et innervation
- **Artères** : artère obturatrice, artère circonflexe fémorale médiale, artères glutéales (fessières) supérieure et inférieure.
- **Nerfs** : branches articulaires du plexus sacré, du nerf sciatique et du nerf obturateur.

### 1.7 Mouvements
- Articulation multiaxiale : **flexion-extension** (axe transversal), **abduction-adduction** (axe antéropostérieur), **rotation médiale et latérale** (axe vertical), **circumduction** (combinaison des précédents).

## 2. L'articulation du genou

### 2.1 Généralités
- La plus grande et la plus complexe articulation du corps ; c'est la principale articulation portante.
- Anciennement décrite comme une simple **trochléenne (ginglyme)**, elle est en réalité composée de **trois articulations en une** : deux articulations condylaires (entre chaque condyle fémoral et le ménisque/condyle tibial correspondant) et une articulation fémoro-patellaire (partiellement plane/arthrodiale).

### 2.2 Surfaces articulaires
- Surfaces articulaires des condyles fémoraux médial et latéral, surface trochléaire du fémur, surface articulaire de la patella, surfaces articulaires des condyles tibiaux médial et latéral.

### 2.3 Ligaments du genou
- **Capsule articulaire** : sac fibreux mince, déficient en avant (remplacé par la patella, le quadriceps, les rétinaculums patellaires et le ligament patellaire). S'attache environ à 0,5-1 cm des marges articulaires ; en avant, elle est percée par la bourse suprapatellaire ; en arrière, attachée à la ligne intercondylienne ; latéralement, elle englobe l'origine du poplité. Sur le tibia, elle est déficiente en avant au niveau de la tubérosité tibiale (insertion du ligament patellaire) et présente en arrière un hiatus pour le tendon du poplité.
- **Membrane synoviale** : tapisse la capsule fibreuse ; se prolonge en avant au-dessus de la patella comme **bourse suprapatellaire**, en arrière forme un cul-de-sac autour des ligaments croisés.
- **Ménisques médial et latéral** : lamelles fibrocartilagineuses en croissant qui approfondissent les surfaces du plateau tibial. Bord périphérique épais, convexe, attaché à la capsule ; bord interne mince, concave, libre. Chaque ménisque couvre environ les deux tiers périphériques de la surface articulaire tibiale correspondante.
  - **Ménisque médial** : quasi semi-circulaire, extrémité antérieure fine attachée à la fosse intercondylienne antérieure (en avant du LCA), extrémité postérieure fixée à la fosse intercondylienne postérieure.
  - **Ménisque latéral** : quasi circulaire, couvre une portion plus large de la surface articulaire, extrémité antérieure attachée en avant de l'éminence intercondylienne (près du LCA, avec lequel il fusionne).
- **Ligament patellaire** (ligament antérieur) : portion centrale du tendon commun du quadriceps fémoral, de l'apex de la patella à la tubérosité tibiale.
- **Ligament collatéral tibial (ligament latéral interne)** : bande large, plate et membraneuse, du condyle médial du fémur (sous le tubercule des adducteurs) au condyle et à la face médiale du tibia. Croisé par les tendons de la patte d'oie (sartorius, gracile, semi-tendineux) via une bourse ; adhère intimement au ménisque médial.
- **Ligament collatéral fibulaire (ligament latéral externe)** : cordon fibreux résistant et arrondi, du condyle latéral du fémur à la tête de la fibula ; recouvert par le tendon du biceps fémoral ; sans attache au ménisque latéral.
- **Ligaments croisés** : deux bandes fibreuses épaisses et résistantes reliant directement le fémur et le tibia, intracapsulaires mais extrasynoviales, se croisant en X — d'où leur nom. Ils assurent la **stabilité antéropostérieure** du genou.
  - **Ligament croisé antérieur (LCA)** : de la dépression en avant de l'éminence intercondylienne tibiale (mêlé à l'extrémité antérieure du ménisque latéral) vers le condyle fémoral latéral (partie postéro-médiale).
  - **Ligament croisé postérieur (LCP)** : plus résistant, plus court et moins oblique que le LCA ; de la fosse intercondylienne postérieure du tibia vers le condyle fémoral médial (partie antéro-latérale).
- **Ligament poplité oblique** : bande fibreuse large et plate, faisceau issu du tendon du semi-membraneux ; forme une partie du plancher de la fosse poplitée, sur lequel repose l'artère poplitée.
- **Ligament transverse du genou** : relie le bord antérieur convexe du ménisque latéral à l'extrémité antérieure du ménisque médial ; d'épaisseur variable, parfois absent.
- **Ligaments coronaires** : simples portions de la capsule reliant la périphérie de chaque ménisque au plateau tibial.

### 2.4 Rapports du genou
- **Antérieur** : quadriceps fémoral.
- **Latéral** : tendons du biceps fémoral, poplité, nerf fibulaire commun.
- **Médial** : sartorius, gracile, semi-tendineux, semi-membraneux.
- **Postérieur** : vaisseaux poplités, nerf tibial, poplité, plantaire grêle, chefs médial et latéral du gastrocnémien, ganglions lymphatiques, graisse.

### 2.5 Vascularisation et innervation
- **Artères** : artère géniculaire supérieure (branche de la fémorale), branches géniculaires de la poplitée, branches récurrentes de la tibiale antérieure, branche descendante de la circonflexe fémorale latérale (branche de la profonde fémorale).
- **Nerfs** : branches des nerfs obturateur, fémoral, tibial et fibulaire commun.

### 2.6 Mouvements
- **Flexion et extension** (mouvements principaux/actifs).
- **Rotation médiale et latérale** (mouvements conjoints, possibles uniquement genou fléchi).

## Points à retenir
- La hanche est une énarthrose (sphéroïde) multiaxiale ; le genou combine deux articulations condylaires et une articulation fémoro-patellaire.
- Le ligament ilio-fémoral (Bigelow) est le plus résistant de la hanche ; les ligaments croisés (intracapsulaires, extrasynoviaux) assurent la stabilité antéropostérieure du genou.
- Les ménisques (médial semi-circulaire, latéral quasi circulaire) approfondissent le plateau tibial et se déplacent avec les mouvements du genou.
- Genou : flexion-extension = mouvements principaux ; rotations = mouvements conjoints, uniquement en flexion.`;

export const LOWER_LIMB_JOINTS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Articulations du membre inférieur (hanche et genou)",
    source_label: "Anatomie — Lecture 5 (suite, articulations)",
    content_fr: LOWER_LIMB_JOINTS_COURSE,
  },
  qcm: [
    single("Quel type d'articulation est la hanche ?", "B", "La hanche est une articulation synoviale sphéroïde (énarthrose ou ball-and-socket).", ["Une trochléenne (ginglyme)", "Une sphéroïde (énarthrose)", "Une plane (arthrodie)", "Une trochoïde (pivot)"]),
    single("Quelle structure occupe la fovea capitis du fémur ?", "C", "La fovea capitis est le point d'insertion du ligamentum teres (ligament rond).", ["Le labrum acétabulaire", "Le ligament ilio-fémoral", "Le ligamentum teres femoris", "Le ligament transverse"]),
    single("Quelle partie de l'acétabulum est réellement articulaire ?", "A", "Seule la surface semi-lunaire (en fer à cheval) de l'acétabulum est articulaire et recouverte de cartilage ; l'échancrure et la fosse acétabulaires ne le sont pas.", ["La surface semi-lunaire", "L'échancrure acétabulaire", "La fosse acétabulaire", "Le labrum seul"]),
    single("Quel est le ligament le plus résistant de la hanche ?", "B", "Le ligament ilio-fémoral (ligament en Y de Bigelow) est le plus résistant des ligaments de la hanche.", ["Le ligament pubo-fémoral", "Le ligament ilio-fémoral", "Le ligament ischio-fémoral", "Le ligamentum teres"]),
    multi("Quels muscles sont en rapport postérieur avec l'articulation de la hanche ?", ["A", "B", "C"], "En arrière de la hanche se trouvent le piriforme, les jumeaux supérieur et inférieur, les obturateurs interne et externe, et le carré fémoral.", ["Piriforme", "Carré fémoral", "Obturateur interne", "Psoas major"]),
    single("Quels mouvements permet l'articulation de la hanche ?", "D", "La hanche est multiaxiale : flexion-extension, abduction-adduction, rotation médiale/latérale et circumduction.", ["Seulement flexion-extension", "Seulement rotation", "Flexion-extension et abduction-adduction uniquement", "Flexion-extension, abduction-adduction, rotations et circumduction"]),
    single("Combien d'articulations composent réellement le genou ?", "C", "Le genou est en réalité composé de trois articulations : deux condylaires fémoro-tibiales et une fémoro-patellaire.", ["Une seule, trochléenne", "Deux, fémoro-tibiales uniquement", "Trois : deux condylaires et une fémoro-patellaire", "Quatre, une par condyle et deux patellaires"]),
    single("Où la capsule du genou est-elle déficiente en avant ?", "B", "La capsule est déficiente en avant, où elle est remplacée par la patella, le quadriceps et les rétinaculums patellaires.", ["Elle n'est jamais déficiente", "En avant, remplacée par la patella et le quadriceps", "En arrière uniquement", "Sur toute sa circonférence"]),
    single("Quelle est la principale différence de forme entre les deux ménisques du genou ?", "A", "Le ménisque médial est quasi semi-circulaire, le ménisque latéral est quasi circulaire et couvre une surface plus large.", ["Le médial est semi-circulaire, le latéral quasi circulaire", "Le latéral est semi-circulaire, le médial quasi circulaire", "Les deux sont identiques en forme", "Seul le ménisque médial existe chez l'humain"]),
    single("Quelle proportion de la surface articulaire tibiale chaque ménisque couvre-t-il environ ?", "B", "Chaque ménisque couvre approximativement les deux tiers périphériques de la surface articulaire tibiale correspondante.", ["Un tiers", "Deux tiers", "La totalité", "Un dixième"]),
    single("Le ligament collatéral fibulaire du genou est-il attaché au ménisque latéral ?", "B", "Non — contrairement au ligament collatéral tibial (adhérent au ménisque médial), le ligament collatéral fibulaire n'a aucune attache au ménisque latéral.", ["Oui, intimement", "Non, il n'y a aucune attache", "Seulement à sa partie postérieure", "Seulement chez l'enfant"]),
    single("Quelle est la fonction principale des ligaments croisés du genou ?", "C", "Les ligaments croisés assurent la stabilité antéropostérieure du genou.", ["La stabilité latérale uniquement", "La lubrification articulaire", "La stabilité antéropostérieure", "L'absorption des chocs uniquement"]),
    single("Les ligaments croisés sont-ils intra- ou extra-synoviaux ?", "B", "Les ligaments croisés sont intracapsulaires mais extrasynoviaux.", ["Intracapsulaires et intrasynoviaux", "Intracapsulaires mais extrasynoviaux", "Extracapsulaires et extrasynoviaux", "Extracapsulaires mais intrasynoviaux"]),
    single("Quel ligament du genou relie l'extrémité antérieure des deux ménisques ?", "A", "Le ligament transverse du genou relie le bord antérieur du ménisque latéral à l'extrémité antérieure du ménisque médial.", ["Le ligament transverse du genou", "Le ligament poplité oblique", "Le ligament croisé antérieur", "Les ligaments coronaires"]),
    single("Que repose sur le ligament poplité oblique ?", "B", "L'artère poplitée repose sur le ligament poplité oblique, qui forme une partie du plancher de la fosse poplitée.", ["Le nerf sciatique", "L'artère poplitée", "La veine grande saphène", "Le muscle gastrocnémien"]),
    single("Quels mouvements du genou sont dits « conjoints » et pourquoi ?", "C", "Les rotations médiale et latérale sont des mouvements conjoints car elles ne sont possibles que lorsque le genou est fléchi, contrairement à la flexion-extension qui est le mouvement principal actif.", ["La flexion, car elle est passive", "L'extension, car elle est active", "Les rotations, car possibles seulement en flexion", "Aucun mouvement n'est conjoint au genou"]),
    single("Quelles structures traversent le hiatus de l'échancrure acétabulaire grâce au ligament transverse ?", "A", "Le ligament acétabulaire transverse convertit l'échancrure en foramen, livrant passage aux vaisseaux nourriciers de l'articulation.", ["Les vaisseaux nourriciers de la hanche", "Le nerf sciatique", "Le tendon du psoas", "La veine fémorale"]),
    single("Quel muscle a son origine sous forme de chef réfléchi en rapport supérieur avec la hanche ?", "B", "Le chef réfléchi du droit fémoral (rectus femoris) est en rapport supérieur avec l'articulation coxo-fémorale.", ["Le psoas major", "Le droit fémoral (chef réfléchi)", "Le sartorius", "Le grand fessier"]),
    single("Quelles artères participent à l'anastomose géniculaire (autour du genou) ?", "D", "Les artères géniculaires supérieures et inférieures (médiales et latérales) et l'artère géniculaire moyenne participent à l'anastomose péri-articulaire du genou.", ["Seulement l'artère poplitée", "Seulement l'artère fémorale", "Seulement les artères tibiales", "Les branches géniculaires de la fémorale et de la poplitée"]),
    single("Quelle bourse sépare la capsule antérieure de la hanche des muscles psoas major et iliaque ?", "A", "Une bourse sépare le psoas major et l'iliaque de la face antérieure de la capsule de la hanche.", ["Une bourse synoviale dédiée", "La bourse suprapatellaire", "La bourse ischiatique", "Aucune, ils sont directement adhérents"]),
  ],
  exam: { titre_fr: "Examen chronométré — Articulations du membre inférieur", duration_seconds: 1_600 },
};

export const LOWER_LIMB_JOINTS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel type d'articulation est la coxo-fémorale ?", question_en: "What type of joint is the hip joint?", answer_fr: "Une articulation synoviale sphéroïde (énarthrose).", answer_en: "A synovial ball-and-socket joint (enarthrosis)." },
  { question_fr: "Quels sont les deux os formant l'articulation de la hanche ?", question_en: "Which two bones form the hip joint?", answer_fr: "La tête du fémur et l'acétabulum de l'os coxal.", answer_en: "The head of the femur and the acetabulum of the hip bone." },
  { question_fr: "Qu'est-ce que la fovea capitis ?", question_en: "What is the fovea capitis?", answer_fr: "Une petite dépression sur la tête du fémur, dépourvue de cartilage, où s'insère le ligamentum teres.", answer_en: "A small pit on the femoral head, lacking cartilage, where the ligamentum teres attaches." },
  { question_fr: "Quelle partie de l'acétabulum est articulaire ?", question_en: "Which part of the acetabulum is articular?", answer_fr: "Uniquement la surface semi-lunaire (en fer à cheval).", answer_en: "Only the horseshoe-shaped lunate surface." },
  { question_fr: "Quel structure augmente la profondeur de l'acétabulum ?", question_en: "What structure increases the depth of the acetabulum?", answer_fr: "Le labrum acétabulaire (bourrelet cotyloïdien).", answer_en: "The acetabular labrum." },
  { question_fr: "Quel est le ligament le plus résistant de la hanche ?", question_en: "What is the strongest ligament of the hip?", answer_fr: "Le ligament ilio-fémoral (ligament en Y de Bigelow).", answer_en: "The iliofemoral ligament (Y-ligament of Bigelow)." },
  { question_fr: "Où s'attache le ligament ischio-fémoral ?", question_en: "Where does the ischiofemoral ligament attach?", answer_fr: "De l'ischion, en arrière et en dessous de l'acétabulum, en se mêlant aux fibres circulaires de la capsule.", answer_en: "From the ischium, behind and below the acetabulum, blending with the circular fibers of the capsule." },
  { question_fr: "Quel ligament traverse l'échancrure acétabulaire ?", question_en: "Which ligament crosses the acetabular notch?", answer_fr: "Le ligament acétabulaire transverse.", answer_en: "The transverse acetabular ligament." },
  { question_fr: "Où s'insère le ligamentum teres femoris ?", question_en: "Where does the ligamentum teres femoris insert?", answer_fr: "Par son apex dans la fovea capitis du fémur ; sa base sur les deux bords de l'échancrure acétabulaire.", answer_en: "By its apex into the fovea capitis of the femur; its base on either side of the acetabular notch." },
  { question_fr: "Quels muscles sont antérieurs à la capsule de la hanche ?", question_en: "Which muscles are anterior to the hip capsule?", answer_fr: "Le psoas major et l'iliaque.", answer_en: "The psoas major and iliacus." },
  { question_fr: "Quels muscles sont postérieurs à la hanche ?", question_en: "Which muscles are posterior to the hip?", answer_fr: "Piriforme, jumeau supérieur, obturateur interne, jumeau inférieur, obturateur externe, carré fémoral.", answer_en: "Piriformis, gemellus superior, obturator internus, gemellus inferior, obturator externus, quadratus femoris." },
  { question_fr: "Quelles artères vascularisent l'articulation de la hanche ?", question_en: "Which arteries supply the hip joint?", answer_fr: "L'artère obturatrice, la circonflexe fémorale médiale, et les glutéales supérieure et inférieure.", answer_en: "The obturator artery, medial femoral circumflex artery, and superior/inferior gluteal arteries." },
  { question_fr: "Quels mouvements permet la hanche ?", question_en: "What movements does the hip allow?", answer_fr: "Flexion-extension, abduction-adduction, rotation médiale/latérale, circumduction.", answer_en: "Flexion-extension, abduction-adduction, medial/lateral rotation, circumduction." },
  { question_fr: "En combien d'articulations peut-on décomposer le genou ?", question_en: "Into how many joints can the knee be decomposed?", answer_fr: "Trois : deux condylaires fémoro-tibiales (médiale et latérale) et une fémoro-patellaire.", answer_en: "Three: two femorotibial condylar joints (medial and lateral) and one femoropatellar joint." },
  { question_fr: "Pourquoi la capsule du genou est-elle déficiente en avant ?", question_en: "Why is the knee capsule deficient anteriorly?", answer_fr: "Parce qu'elle est remplacée à cet endroit par la patella, le tendon du quadriceps et les rétinaculums patellaires.", answer_en: "Because it is replaced there by the patella, the quadriceps tendon, and the patellar retinacula." },
  { question_fr: "Qu'est-ce que la ligne arquée (de Douglas) au niveau de la gaine des droits ?", question_en: "What is the arcuate line (of Douglas) at the rectus sheath level?", answer_fr: "Ce n'est pas au genou mais à la paroi abdominale ; à ne pas confondre avec l'attache tibiale postérieure de la capsule du genou.", answer_en: "This is not at the knee but at the abdominal wall; not to be confused with the posterior tibial attachment of the knee capsule." },
  { question_fr: "Quelle est la forme du ménisque médial du genou ?", question_en: "What is the shape of the medial meniscus of the knee?", answer_fr: "Quasi semi-circulaire.", answer_en: "Nearly semicircular." },
  { question_fr: "Quelle est la forme du ménisque latéral du genou ?", question_en: "What is the shape of the lateral meniscus of the knee?", answer_fr: "Quasi circulaire, couvrant une portion plus large de la surface tibiale.", answer_en: "Nearly circular, covering a larger portion of the tibial surface." },
  { question_fr: "Quelle portion de chaque ménisque est libre (non attachée) ?", question_en: "Which portion of each meniscus is free (unattached)?", answer_fr: "Le bord interne, mince et concave.", answer_en: "The inner border, thin and concave." },
  { question_fr: "Qu'est-ce que le ligament patellaire ?", question_en: "What is the patellar ligament?", answer_fr: "La portion centrale du tendon commun du quadriceps fémoral, entre l'apex de la patella et la tubérosité tibiale.", answer_en: "The central portion of the common quadriceps femoris tendon, between the apex of the patella and the tibial tuberosity." },
  { question_fr: "Le ligament collatéral tibial est-il attaché au ménisque médial ?", question_en: "Is the tibial collateral ligament attached to the medial meniscus?", answer_fr: "Oui, il y adhère intimement.", answer_en: "Yes, it is intimately adherent to it." },
  { question_fr: "Le ligament collatéral fibulaire est-il attaché au ménisque latéral ?", question_en: "Is the fibular collateral ligament attached to the lateral meniscus?", answer_fr: "Non, il n'a aucune attache au ménisque latéral.", answer_en: "No, it has no attachment to the lateral meniscus." },
  { question_fr: "Quelle est la fonction des ligaments croisés du genou ?", question_en: "What is the function of the knee's cruciate ligaments?", answer_fr: "Assurer la stabilité antéropostérieure de l'articulation.", answer_en: "To ensure the anteroposterior stability of the joint." },
  { question_fr: "Les ligaments croisés sont-ils synoviaux ?", question_en: "Are the cruciate ligaments synovial?", answer_fr: "Non, ils sont intracapsulaires mais extrasynoviaux.", answer_en: "No, they are intracapsular but extrasynovial." },
  { question_fr: "D'où vers où va le ligament croisé antérieur (LCA) ?", question_en: "Where does the anterior cruciate ligament (ACL) run from and to?", answer_fr: "De la fosse intercondylienne antérieure du tibia vers la partie postéro-médiale du condyle fémoral latéral.", answer_en: "From the anterior intercondylar fossa of the tibia to the posteromedial part of the lateral femoral condyle." },
  { question_fr: "D'où vers où va le ligament croisé postérieur (LCP) ?", question_en: "Where does the posterior cruciate ligament (PCL) run from and to?", answer_fr: "De la fosse intercondylienne postérieure du tibia vers la partie antéro-latérale du condyle fémoral médial.", answer_en: "From the posterior intercondylar fossa of the tibia to the anterolateral part of the medial femoral condyle." },
  { question_fr: "Quel ligament du genou repose sous l'artère poplitée ?", question_en: "Which knee ligament lies beneath the popliteal artery?", answer_fr: "Le ligament poplité oblique, qui forme une partie du plancher de la fosse poplitée.", answer_en: "The oblique popliteal ligament, which forms part of the floor of the popliteal fossa." },
  { question_fr: "Que relie le ligament transverse du genou ?", question_en: "What does the transverse ligament of the knee connect?", answer_fr: "Le bord antérieur convexe du ménisque latéral à l'extrémité antérieure du ménisque médial.", answer_en: "The convex anterior border of the lateral meniscus to the anterior end of the medial meniscus." },
  { question_fr: "Que sont les ligaments coronaires du genou ?", question_en: "What are the coronary ligaments of the knee?", answer_fr: "De simples portions de la capsule reliant la périphérie de chaque ménisque au plateau tibial.", answer_en: "Simple portions of the capsule connecting the periphery of each meniscus to the tibial plateau." },
  { question_fr: "Quelle structure est latérale au genou, en rapport avec le nerf fibulaire commun ?", question_en: "Which structure is lateral to the knee, related to the common fibular nerve?", answer_fr: "Le tendon du biceps fémoral et le muscle poplité.", answer_en: "The biceps femoris tendon and the popliteus muscle." },
  { question_fr: "Quels muscles sont médiaux au genou ?", question_en: "Which muscles are medial to the knee?", answer_fr: "Sartorius, gracile, semi-tendineux, semi-membraneux.", answer_en: "Sartorius, gracilis, semitendinosus, semimembranosus." },
  { question_fr: "Quelles structures sont postérieures au genou ?", question_en: "Which structures are posterior to the knee?", answer_fr: "Les vaisseaux poplités, le nerf tibial, le poplité, le plantaire grêle et les chefs du gastrocnémien.", answer_en: "The popliteal vessels, the tibial nerve, popliteus, plantaris, and the heads of gastrocnemius." },
  { question_fr: "Combien d'artères géniculaires participent à l'anastomose autour du genou ?", question_en: "How many genicular arteries participate in the anastomosis around the knee?", answer_fr: "Cinq : supérieures médiale/latérale, inférieures médiale/latérale, et moyenne.", answer_en: "Five: superior medial/lateral, inferior medial/lateral, and middle." },
  { question_fr: "Que perce l'artère géniculaire moyenne ?", question_en: "What does the middle genicular artery pierce?", answer_fr: "Le ligament poplité oblique, pour vasculariser les ligaments croisés et la synoviale du genou.", answer_en: "The oblique popliteal ligament, to supply the cruciate ligaments and the synovial membrane of the knee." },
  { question_fr: "Quels sont les mouvements principaux (actifs) du genou ?", question_en: "What are the main (active) movements of the knee?", answer_fr: "La flexion et l'extension.", answer_en: "Flexion and extension." },
  { question_fr: "Quels sont les mouvements conjoints du genou ?", question_en: "What are the conjunct movements of the knee?", answer_fr: "La rotation médiale et la rotation latérale, possibles uniquement genou fléchi.", answer_en: "Medial and lateral rotation, possible only when the knee is flexed." },
  { question_fr: "Quels nerfs innervent l'articulation du genou ?", question_en: "Which nerves innervate the knee joint?", answer_fr: "Des branches des nerfs obturateur, fémoral, tibial et fibulaire commun.", answer_en: "Branches of the obturator, femoral, tibial, and common fibular nerves." },
  { question_fr: "Pourquoi qualifie-t-on la hanche d'articulation multiaxiale ?", question_en: "Why is the hip called a multiaxial joint?", answer_fr: "Parce qu'elle permet des mouvements autour de trois axes différents (transversal, antéropostérieur, vertical) plus la circumduction.", answer_en: "Because it allows movement around three different axes (transverse, anteroposterior, vertical) plus circumduction." },
  { question_fr: "Quel muscle sépare le psoas major de la capsule antérieure de la hanche ?", question_en: "What separates the psoas major from the anterior hip capsule?", answer_fr: "Une bourse synoviale.", answer_en: "A synovial bursa." },
  { question_fr: "Quelle est la particularité de la face postérieure de la capsule fibreuse du genou par rapport aux ligaments croisés ?", question_en: "What is notable about the posterior aspect of the knee's fibrous capsule regarding the cruciate ligaments?", answer_fr: "La membrane synoviale s'y projette en avant sous forme de cul-de-sac pour envelopper les ligaments croisés.", answer_en: "The synovial membrane projects forward there as a cul-de-sac to envelop the cruciate ligaments." },
];

const LOWER_LIMB_VESSELS_NERVES_COURSE = `# Artères, veines et nerfs du membre inférieur

## 1. Artères du membre inférieur

### 1.1 Artère fémorale
- Artère principale du membre inférieur, **continuation de l'artère iliaque externe**. Elle entre dans le triangle fémoral en arrière du ligament inguinal, au point médio-inguinal.
- Trajet : descend en dedans à travers le triangle fémoral puis le canal des adducteurs ; à l'extrémité inférieure du canal (jonction tiers moyen/tiers inférieur de la cuisse), elle quitte la cuisse par le **hiatus des adducteurs** (ouverture tendineuse du grand adducteur) pour entrer dans la fosse poplitée, où elle devient l'**artère poplitée**.
- **Branches dans le triangle fémoral** — 3 superficielles : épigastrique superficielle, honteuse externe superficielle, circonflexe iliaque superficielle ; et 3 profondes : honteuse externe profonde, rameaux musculaires, **artère fémorale profonde**.
- **Dans le canal des adducteurs** : rameaux musculaires, artère géniculaire descendante.
- **Artère fémorale profonde** : la plus grosse branche de la fémorale, principale source de vascularisation des muscles des trois loges de la cuisse. Ses branches : rameaux musculaires, **artère circonflexe fémorale médiale** (rameau transverse → anastomose cruciforme ; rameau ascendant → anastomose trochantérienne ; rameau acétabulaire ; rameaux rétinaculaires postérieurs vascularisant tête/col fémoral), **artère circonflexe fémorale latérale** (rameau ascendant → anastomose trochantérienne ; rameau transverse → anastomose cruciforme ; rameau descendant → anastomose du genou), et **quatre artères perforantes** (la 4e étant la continuation de la fémorale profonde).

### 1.2 Artère poplitée
- Continuation de l'artère fémorale ; traverse le plancher de la fosse poplitée de dedans en dehors jusqu'au bord inférieur du poplité, où elle se termine en se divisant en **artères tibiales antérieure et postérieure**.
- Rapports : en avant (profond) le plancher poplité (surface poplitée du fémur, genou, fascia du poplité) ; en arrière (superficiel) veine poplitée, nerf tibial, fascia superficiel, peau.
- Branches : cutanées, musculaires (grand adducteur, ischio-jambiers, triceps sural), et **cinq géniculaires** (supérieures médiale/latérale, inférieures médiale/latérale, moyenne) formant l'anastomose géniculaire autour du genou.

### 1.3 Artère tibiale antérieure
- Artère principale de la loge antérieure de la jambe ; plus petite branche terminale de la poplitée. Traverse la membrane interosseuse pour entrer dans la loge antérieure ; descend verticalement jusqu'à mi-chemin entre les malléoles, où elle devient l'**artère dorsale du pied (pédieuse)**.
- Rapports variables avec le tibial antérieur/extenseurs des orteils selon le tiers de jambe ; le **nerf fibulaire profond** est latéral dans les tiers supérieur/inférieur, antérieur dans le tiers moyen.
- Branches : récurrentes tibiales antérieure/postérieure (anastomose du genou), musculaires, malléolaires médiale/latérale antérieures (anastomose de la cheville), artère fibulaire (origine variable).

### 1.4 Artère dorsale du pied (pédieuse)
- Continuation directe de la tibiale antérieure ; se termine en anastomosant avec l'artère plantaire latérale.
- Branches : artères tarsiennes médiale/latérale (réseaux malléolaires), **artère arquée** (donne les artères métatarsiennes dorsales), première artère métatarsienne dorsale.

### 1.5 Artère tibiale postérieure
- Plus grosse des deux branches terminales de la poplitée ; vascularise la loge postérieure, la loge latérale de la jambe et la plante du pied. Accompagnée tout du long par le **nerf tibial**. Se termine en se divisant en artères plantaires latérale (grosse) et médiale (petite).

### 1.6 Artère fibulaire (péronière)
- Plus grosse et plus importante branche de la tibiale postérieure ; vascularise les loges postérieure et latérale de la jambe. Se termine en artères calcanéennes latérales.
- Branches : musculaires, nourricière de la fibula, communicante (avec la tibiale postérieure au-dessus de la cheville), perforante (traverse la membrane interosseuse), calcanéenne latérale.

### 1.7 Arcade plantaire
- Formée par la continuation directe de l'artère plantaire latérale ; complétée médialement par anastomose avec la terminaison de l'artère dorsale du pied. S'étend de la base du 5e métatarsien au premier espace intermétatarsien.
- Branches : 4 artères métatarsiennes plantaires, 3 artères perforantes proximales.

## 2. Veines du membre inférieur

- Trois types : **superficielles**, **perforantes**, **profondes**.
- **Veines profondes** : accompagnent les artères, drainent dans la veine fémorale puis la veine iliaque externe (veines satellites des tibiales antérieure/postérieure, veine poplitée, veine fémorale).
- **Veines superficielles** : drainent dans les veines profondes via les perforantes.
  - **Grande veine saphène** : origine à l'arcade veineuse dorsale du pied, ascend en avant de la malléole médiale, le long de la face médiale de la jambe et de la cuisse, se jette dans la veine fémorale au niveau du triangle fémoral.
  - **Petite veine saphène** : origine au bord latéral du dos du pied, ascend en arrière de la malléole latérale, se jette dans la veine poplitée dans la fosse poplitée ; accompagnée par le nerf sural.
- **Veines perforantes** : connectent les veines superficielles aux veines profondes ; leurs valvules empêchent le reflux profond→superficiel.
- Le sang veineux du membre inférieur est drainé contre la gravité : toutes les veines possèdent des valvules. L'**incompétence des valvules perforantes** permet un reflux vers les veines superficielles, causant leur dilatation — les **varices**.

## 3. Nerfs du membre inférieur

### 3.1 Plexus lombaire
- Réseau situé dans l'épaisseur du **psoas major**, en avant des processus transverses lombaires.
- Formé par l'union des rameaux ventraux de **L1-L3** et de la plus grande partie du rameau ventral de **L4** ; reçoit une contribution du nerf sous-costal (T12). La petite partie inférieure de L4 rejoint L5 pour former le **tronc lombo-sacré** (contribue au plexus sacré).
- **Branches** :
  - Rameau supérieur de L1 (+T12) : **nerf ilio-hypogastrique** (peau région glutéale et paroi abdominale antérieure hypogastrique) et **nerf ilio-inguinal** (moteur oblique interne/transverse, sensitif face médiale supérieure de la cuisse, racine du pénis/scrotum ou mont du pubis/grande lèvre).
  - Rameau inférieur de L1 (+L2) : **nerf génito-fémoral**, se divisant en rameau fémoral (peau du triangle fémoral) et rameau génital (crémaster/scrotum, ou peau du mont du pubis/grande lèvre).
  - Divisions dorsales de L2-L4 : **nerf fémoral**.
  - Divisions dorsales de L2-L3 : **nerf cutané latéral de la cuisse**.
  - Divisions ventrales de L2-L4 : **nerf obturateur**. Un nerf obturateur accessoire (L3-L4) est parfois présent.
- **Nerf fémoral** : principal nerf de la loge antérieure de la cuisse, plus grosse branche du plexus lombaire ; traverse le psoas major, innerve iliaque et pectiné avant d'entrer dans la cuisse sous le ligament inguinal (lacune musculaire), latéral aux vaisseaux fémoraux dans le triangle fémoral. Se divise sous le ligament inguinal en division antérieure (nerfs cutanés médial et intermédiaire de la cuisse ; rameau moteur pour le sartorius) et division postérieure (nerf saphène sensitif — traverse le canal des adducteurs, innerve face médiale de jambe/pied ; quatre rameaux moteurs pour le quadriceps).
- **Nerf obturateur** : descend à travers le psoas major, émerge de son bord médial, traverse le canal obturateur. Division antérieure (rameau articulaire pour la hanche ; moteur pour long/court adducteurs et gracile, parfois pectiné ; cutané face médiale de cuisse) et division postérieure (moteur pour obturateur externe, grand adducteur, court adducteur ; rameau articulaire géniculaire pour le genou).

### 3.2 Plexus sacré
- Situé sur la paroi pelvienne postérieure, en avant du piriforme. Formé par les rameaux ventraux de **L4 (partie descendante), L5, S1-S3**.
- Chacune des 5 racines se divise en division antérieure et postérieure : les 4 divisions postérieures (L4,L5,S1,S2) forment le **nerf fibulaire commun** ; les 5 divisions antérieures forment le **nerf tibial** ; les deux, fusionnés, forment le **nerf sciatique**.
- **Branches terminales** : nerf sciatique (divisions dorsale et ventrale), nerf honteux (divisions ventrales S2-S4).
- **Branches collatérales ventrales** : nerf du carré fémoral et jumeau inférieur (L4-S1), nerf de l'obturateur interne et jumeau supérieur (L5-S2).
- **Branches collatérales dorsales** : nerf du piriforme, nerf glutéal supérieur (moyen/petit fessier, tenseur du fascia lata), nerf glutéal inférieur (grand fessier), nerf cutané perforant.
- **Branche mixte** : nerf cutané postérieur de la cuisse (S1-S3).

### 3.3 Nerf sciatique
- Entre dans la région glutéale par le foramen ischiatique majeur, sous le piriforme ; descend entre le grand trochanter et la tubérosité ischiatique, sous le grand fessier.
- Se divise, au niveau de l'angle supérieur de la fosse poplitée, en ses deux branches terminales : **nerf tibial** et **nerf fibulaire commun**.
- Branches collatérales : articulaires pour la hanche ; musculaires pour semi-tendineux, semi-membraneux, chef long du biceps et une partie du grand adducteur (fibres tibiales) ; musculaire pour le chef court du biceps fémoral (fibres fibulaires communes).

### 3.4 Nerf tibial
- Plus grosse branche terminale du sciatique. Traverse la fosse poplitée, descend en arrière du tibia, passe en arrière/en dessous de la malléole médiale, se termine en nerfs plantaires médial et latéral.
- Branches collatérales : musculaires (gastrocnémien, plantaire grêle, soléaire, poplité, tibial postérieur, fléchisseur commun/propre des orteils), **nerf sural** (avec la branche communicante du fibulaire commun), articulaires (genou, cheville), calcanéennes médiales.
- Territoire : sensitif face postéro-latérale de jambe, face latérale et plante du pied ; moteur loge postérieure de jambe et la plupart des muscles intrinsèques du pied.

### 3.5 Nerf fibulaire (péronier) commun
- Plus petite branche terminale du sciatique ; contourne le col de la fibula pour entrer dans la loge latérale de la jambe.
- Branches terminales : **nerf fibulaire superficiel** (musculo-cutané de jambe — moteur long/court fibulaire, cutané tiers inférieur latéral de jambe et dos du pied) et **nerf fibulaire profond**.
- Territoire : moteur loges latérale et antérieure de jambe ; sensitif face antéro-latérale de jambe et dos du pied.

## Points à retenir
- L'artère fémorale devient poplitée au hiatus des adducteurs ; la poplitée se termine en tibiales antérieure et postérieure.
- La grande saphène draine vers la veine fémorale, la petite saphène vers la veine poplitée ; l'incompétence des perforantes cause les varices.
- Le plexus lombaire (L1-L4) donne principalement les nerfs fémoral et obturateur ; le plexus sacré (L4-S3) donne le nerf sciatique, qui se divise en nerfs tibial et fibulaire commun.`;

export const LOWER_LIMB_VESSELS_NERVES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Artères, veines et nerfs du membre inférieur",
    source_label: "Anatomie — Lecture 6 (membre inférieur)",
    content_fr: LOWER_LIMB_VESSELS_NERVES_COURSE,
  },
  qcm: [
    single("De quelle artère l'artère fémorale est-elle la continuation ?", "B", "L'artère fémorale est la continuation directe de l'artère iliaque externe.", ["L'artère hypogastrique", "L'artère iliaque externe", "L'artère poplitée", "L'artère obturatrice"]),
    single("Par où l'artère fémorale quitte-t-elle la cuisse pour devenir poplitée ?", "C", "Elle quitte la cuisse par le hiatus des adducteurs, ouverture tendineuse du grand adducteur.", ["Le canal obturateur", "Le foramen ischiatique", "Le hiatus des adducteurs", "Le canal inguinal"]),
    single("Quelle est la plus grosse branche de l'artère fémorale ?", "A", "L'artère fémorale profonde est la plus grosse branche de la fémorale et la principale source de vascularisation des muscles de la cuisse.", ["L'artère fémorale profonde", "L'artère circonflexe iliaque superficielle", "L'artère géniculaire descendante", "L'artère honteuse externe"]),
    single("En quelles artères se termine l'artère poplitée ?", "B", "L'artère poplitée se termine en se divisant en artères tibiales antérieure et postérieure.", ["Fémorale profonde et superficielle", "Tibiales antérieure et postérieure", "Fibulaire et plantaire", "Dorsale du pied et plantaire"]),
    single("Que devient l'artère tibiale antérieure au niveau de la cheville ?", "C", "L'artère tibiale antérieure devient l'artère dorsale du pied (pédieuse) au niveau de la cheville.", ["L'artère plantaire médiale", "L'artère fibulaire", "L'artère dorsale du pied", "L'arcade plantaire"]),
    single("Quel nerf accompagne l'artère tibiale postérieure sur tout son trajet ?", "B", "Le nerf tibial accompagne l'artère tibiale postérieure tout au long de son trajet.", ["Le nerf fibulaire profond", "Le nerf tibial", "Le nerf sural", "Le nerf saphène"]),
    single("Quelle artère est la plus grosse branche de la tibiale postérieure ?", "A", "L'artère fibulaire (péronière) est la plus grosse et la plus importante branche de la tibiale postérieure.", ["L'artère fibulaire", "L'artère plantaire médiale", "L'artère tarsienne latérale", "L'artère arquée"]),
    single("Comment est complétée médialement l'arcade plantaire ?", "C", "L'arcade plantaire, continuation de l'artère plantaire latérale, est complétée médialement par anastomose avec la terminaison de l'artère dorsale du pied.", ["Par l'artère tibiale antérieure", "Par l'artère fémorale profonde", "Par l'artère dorsale du pied", "Par l'artère fibulaire"]),
    single("Quels sont les trois types de veines du membre inférieur ?", "D", "Les veines du membre inférieur sont classées en superficielles, perforantes et profondes.", ["Superficielles, profondes et lymphatiques", "Profondes, artérielles et perforantes", "Saphènes, poplitées et fémorales", "Superficielles, perforantes et profondes"]),
    single("Où se jette la grande veine saphène ?", "B", "La grande veine saphène se jette dans la veine fémorale au niveau du triangle fémoral.", ["Dans la veine poplitée", "Dans la veine fémorale", "Dans la veine iliaque interne", "Dans la veine tibiale postérieure"]),
    single("Où se jette la petite veine saphène ?", "A", "La petite veine saphène se jette dans la veine poplitée, dans la fosse poplitée.", ["Dans la veine poplitée", "Dans la veine fémorale", "Dans la grande veine saphène uniquement", "Dans la veine tibiale antérieure"]),
    single("Que provoque l'incompétence des valvules des veines perforantes ?", "C", "Elle permet un reflux de sang vers les veines superficielles, causant leur dilatation : les varices.", ["Une thrombose artérielle", "Une ischémie musculaire", "Des varices par reflux superficiel", "Un lymphœdème"]),
    single("Dans quel muscle le plexus lombaire est-il situé ?", "B", "Le plexus lombaire est situé dans l'épaisseur du psoas major.", ["Le grand fessier", "Le psoas major", "Le carré des lombes", "L'iliaque"]),
    multi("Quelles racines forment principalement le plexus lombaire ?", ["A", "B"], "Le plexus lombaire est formé par L1-L3 et la plus grande partie de L4, avec une contribution de T12.", ["L1 à L3", "La majeure partie de L4", "S1 à S3", "L5 uniquement"]),
    single("Quel est le principal nerf de la loge antérieure de la cuisse ?", "C", "Le nerf fémoral est le principal nerf de la loge antérieure de la cuisse et la plus grosse branche du plexus lombaire.", ["Le nerf obturateur", "Le nerf cutané latéral de la cuisse", "Le nerf fémoral", "Le nerf ilio-inguinal"]),
    single("Par où le nerf obturateur pénètre-t-il la cuisse ?", "B", "Le nerf obturateur pénètre la cuisse médiale par le canal obturateur.", ["Le hiatus des adducteurs", "Le canal obturateur", "Le foramen ischiatique majeur", "La lacune musculaire"]),
    single("Devant quel muscle le plexus sacré est-il situé ?", "A", "Le plexus sacré est situé sur la paroi pelvienne postérieure, en avant du piriforme.", ["Le piriforme", "L'obturateur interne", "Le grand fessier", "Le carré fémoral"]),
    single("Quelles divisions du plexus sacré forment le nerf tibial ?", "C", "Les cinq divisions ventrales (antérieures) de L4 à S3 forment le nerf tibial.", ["Les divisions dorsales de L4-S2", "Les divisions ventrales de S2-S4 uniquement", "Les cinq divisions ventrales de L4 à S3", "Aucune, il vient uniquement du nerf obturateur"]),
    single("Où le nerf sciatique se divise-t-il en ses deux branches terminales ?", "B", "Le nerf sciatique se divise au niveau de l'angle supérieur de la fosse poplitée.", ["Dans la région glutéale", "À l'angle supérieur de la fosse poplitée", "Au niveau de la cheville", "Dans le canal obturateur"]),
    single("Quel nerf contourne le col de la fibula ?", "D", "Le nerf fibulaire commun contourne le col de la fibula pour entrer dans la loge latérale de la jambe.", ["Le nerf tibial", "Le nerf saphène", "Le nerf sural", "Le nerf fibulaire commun"]),
  ],
  exam: { titre_fr: "Examen chronométré — Vaisseaux et nerfs du membre inférieur", duration_seconds: 1_600 },
};

export const LOWER_LIMB_VESSELS_NERVES_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "De quelle artère l'artère fémorale est-elle la continuation ?", question_en: "Which artery is the femoral artery a continuation of?", answer_fr: "De l'artère iliaque externe.", answer_en: "Of the external iliac artery." },
  { question_fr: "Où l'artère fémorale entre-t-elle dans le triangle fémoral ?", question_en: "Where does the femoral artery enter the femoral triangle?", answer_fr: "En arrière du ligament inguinal, au point médio-inguinal.", answer_en: "Behind the inguinal ligament, at the mid-inguinal point." },
  { question_fr: "Par quelle structure l'artère fémorale quitte-t-elle la cuisse ?", question_en: "Through which structure does the femoral artery leave the thigh?", answer_fr: "Le hiatus des adducteurs (ouverture tendineuse du grand adducteur).", answer_en: "The adductor hiatus (a tendinous opening in the adductor magnus)." },
  { question_fr: "Comment s'appelle l'artère fémorale une fois dans la fosse poplitée ?", question_en: "What is the femoral artery called once in the popliteal fossa?", answer_fr: "L'artère poplitée.", answer_en: "The popliteal artery." },
  { question_fr: "Combien de branches superficielles nait de la fémorale dans le triangle fémoral ?", question_en: "How many superficial branches arise from the femoral artery in the femoral triangle?", answer_fr: "Trois : épigastrique superficielle, honteuse externe superficielle, circonflexe iliaque superficielle.", answer_en: "Three: superficial epigastric, superficial external pudendal, superficial circumflex iliac." },
  { question_fr: "Quelle est la plus grosse branche de l'artère fémorale ?", question_en: "What is the largest branch of the femoral artery?", answer_fr: "L'artère fémorale profonde.", answer_en: "The profunda femoris artery." },
  { question_fr: "Que vascularise principalement l'artère fémorale profonde ?", question_en: "What does the profunda femoris artery mainly supply?", answer_fr: "Les muscles des trois loges de la cuisse.", answer_en: "The muscles of all three compartments of the thigh." },
  { question_fr: "Combien d'artères perforantes naissent de la fémorale profonde ?", question_en: "How many perforating arteries arise from the profunda femoris?", answer_fr: "Quatre, la 4e étant sa continuation directe.", answer_en: "Four, the fourth being its direct continuation." },
  { question_fr: "En quoi se termine l'artère poplitée ?", question_en: "What does the popliteal artery terminate into?", answer_fr: "Elle se divise en artères tibiales antérieure et postérieure.", answer_en: "It divides into the anterior and posterior tibial arteries." },
  { question_fr: "Combien d'artères géniculaires forment l'anastomose autour du genou ?", question_en: "How many genicular arteries form the anastomosis around the knee?", answer_fr: "Cinq (supérieures médiale/latérale, inférieures médiale/latérale, moyenne).", answer_en: "Five (superior medial/lateral, inferior medial/lateral, middle)." },
  { question_fr: "Quelle artère traverse la membrane interosseuse de la jambe ?", question_en: "Which artery crosses the interosseous membrane of the leg?", answer_fr: "L'artère tibiale antérieure, pour entrer dans la loge antérieure de la jambe.", answer_en: "The anterior tibial artery, to enter the anterior compartment of the leg." },
  { question_fr: "Comment s'appelle l'artère tibiale antérieure au niveau du pied ?", question_en: "What is the anterior tibial artery called at the level of the foot?", answer_fr: "L'artère dorsale du pied (pédieuse).", answer_en: "The dorsalis pedis artery." },
  { question_fr: "Quelle artère naît de l'artère arquée du pied ?", question_en: "Which arteries arise from the arcuate artery of the foot?", answer_fr: "Les artères métatarsiennes dorsales.", answer_en: "The dorsal metatarsal arteries." },
  { question_fr: "Quelle est la plus grosse des deux branches terminales de la poplitée ?", question_en: "Which is the larger of the two terminal branches of the popliteal artery?", answer_fr: "L'artère tibiale postérieure.", answer_en: "The posterior tibial artery." },
  { question_fr: "Quel nerf accompagne l'artère tibiale postérieure ?", question_en: "Which nerve accompanies the posterior tibial artery?", answer_fr: "Le nerf tibial.", answer_en: "The tibial nerve." },
  { question_fr: "En quoi se termine l'artère tibiale postérieure ?", question_en: "What does the posterior tibial artery terminate into?", answer_fr: "Les artères plantaires latérale (grosse) et médiale (petite).", answer_en: "The (larger) lateral and (smaller) medial plantar arteries." },
  { question_fr: "Quelle est la plus grosse branche de l'artère tibiale postérieure ?", question_en: "What is the largest branch of the posterior tibial artery?", answer_fr: "L'artère fibulaire (péronière).", answer_en: "The fibular (peroneal) artery." },
  { question_fr: "Comment est complétée l'arcade plantaire ?", question_en: "How is the plantar arch completed?", answer_fr: "Médialement, par anastomose avec la terminaison de l'artère dorsale du pied.", answer_en: "Medially, by anastomosis with the terminal part of the dorsalis pedis artery." },
  { question_fr: "Quels sont les trois types de veines du membre inférieur ?", question_en: "What are the three types of lower limb veins?", answer_fr: "Superficielles, perforantes, profondes.", answer_en: "Superficial, perforating, deep." },
  { question_fr: "D'où provient la grande veine saphène ?", question_en: "Where does the great saphenous vein originate?", answer_fr: "De l'arcade veineuse dorsale du pied.", answer_en: "From the dorsal venous arch of the foot." },
  { question_fr: "Où se jette la grande veine saphène ?", question_en: "Where does the great saphenous vein drain?", answer_fr: "Dans la veine fémorale, au niveau du triangle fémoral.", answer_en: "Into the femoral vein, at the femoral triangle." },
  { question_fr: "Où se jette la petite veine saphène ?", question_en: "Where does the small saphenous vein drain?", answer_fr: "Dans la veine poplitée.", answer_en: "Into the popliteal vein." },
  { question_fr: "Quel nerf accompagne la petite veine saphène ?", question_en: "Which nerve accompanies the small saphenous vein?", answer_fr: "Le nerf sural.", answer_en: "The sural nerve." },
  { question_fr: "Quel est le rôle des valvules des veines perforantes ?", question_en: "What is the role of the valves in perforating veins?", answer_fr: "Empêcher le reflux de sang des veines profondes vers les superficielles.", answer_en: "To prevent backflow of blood from the deep veins into the superficial veins." },
  { question_fr: "Que cause l'incompétence des valvules perforantes ?", question_en: "What does incompetence of perforator valves cause?", answer_fr: "Des varices, par dilatation des veines superficielles.", answer_en: "Varicose veins, through dilation of the superficial veins." },
  { question_fr: "Dans quel muscle est situé le plexus lombaire ?", question_en: "In which muscle is the lumbar plexus located?", answer_fr: "Le psoas major.", answer_en: "The psoas major." },
  { question_fr: "Quelles racines forment le plexus lombaire ?", question_en: "Which roots form the lumbar plexus?", answer_fr: "L1-L3 et la plus grande partie de L4, avec une contribution de T12.", answer_en: "L1-L3 and the larger part of L4, with a T12 contribution." },
  { question_fr: "Que forme la partie inférieure de L4 avec L5 ?", question_en: "What does the lower part of L4 form with L5?", answer_fr: "Le tronc lombo-sacré, qui contribue au plexus sacré.", answer_en: "The lumbosacral trunk, which contributes to the sacral plexus." },
  { question_fr: "Quel est le plus grand nerf issu du plexus lombaire ?", question_en: "What is the largest nerve arising from the lumbar plexus?", answer_fr: "Le nerf fémoral.", answer_en: "The femoral nerve." },
  { question_fr: "Sous quel ligament le nerf fémoral passe-t-il pour entrer dans la cuisse ?", question_en: "Under which ligament does the femoral nerve pass to enter the thigh?", answer_fr: "Le ligament inguinal (via la lacune musculaire).", answer_en: "The inguinal ligament (via the lacuna musculorum)." },
  { question_fr: "Quel nerf sensitif est le rameau terminal de la division postérieure du nerf fémoral ?", question_en: "Which sensory nerve is the terminal branch of the femoral nerve's posterior division?", answer_fr: "Le nerf saphène.", answer_en: "The saphenous nerve." },
  { question_fr: "Par où le nerf obturateur pénètre-t-il la cuisse médiale ?", question_en: "Through what does the obturator nerve enter the medial thigh?", answer_fr: "Le canal obturateur.", answer_en: "The obturator canal." },
  { question_fr: "En avant de quel muscle le plexus sacré est-il situé ?", question_en: "In front of which muscle is the sacral plexus located?", answer_fr: "Le piriforme.", answer_en: "The piriformis." },
  { question_fr: "Quelles racines forment le plexus sacré ?", question_en: "Which roots form the sacral plexus?", answer_fr: "La partie descendante de L4, L5, S1, S2, S3.", answer_en: "The descending part of L4, L5, S1, S2, S3." },
  { question_fr: "Quelles divisions forment le nerf fibulaire commun ?", question_en: "Which divisions form the common fibular nerve?", answer_fr: "Les quatre divisions dorsales (postérieures) de L4, L5, S1, S2.", answer_en: "The four dorsal (posterior) divisions of L4, L5, S1, S2." },
  { question_fr: "Quelles divisions forment le nerf tibial ?", question_en: "Which divisions form the tibial nerve?", answer_fr: "Les cinq divisions ventrales (antérieures) de L4 à S3.", answer_en: "The five ventral (anterior) divisions of L4 to S3." },
  { question_fr: "Comment naît le nerf sciatique ?", question_en: "How does the sciatic nerve arise?", answer_fr: "De la fusion du nerf fibulaire commun et du nerf tibial.", answer_en: "From the fusion of the common fibular nerve and the tibial nerve." },
  { question_fr: "Par où le nerf sciatique entre-t-il dans la région glutéale ?", question_en: "How does the sciatic nerve enter the gluteal region?", answer_fr: "Par le foramen ischiatique majeur, sous le piriforme.", answer_en: "Through the greater sciatic foramen, below the piriformis." },
  { question_fr: "Où le nerf sciatique se divise-t-il en ses deux branches terminales ?", question_en: "Where does the sciatic nerve divide into its two terminal branches?", answer_fr: "À l'angle supérieur de la fosse poplitée.", answer_en: "At the superior angle of the popliteal fossa." },
  { question_fr: "En quoi se termine le nerf tibial au pied ?", question_en: "What does the tibial nerve terminate into at the foot?", answer_fr: "Les nerfs plantaires médial et latéral.", answer_en: "The medial and lateral plantar nerves." },
  { question_fr: "Que contourne le nerf fibulaire commun ?", question_en: "What does the common fibular nerve wrap around?", answer_fr: "Le col de la fibula.", answer_en: "The neck of the fibula." },
  { question_fr: "Quelles sont les deux branches terminales du nerf fibulaire commun ?", question_en: "What are the two terminal branches of the common fibular nerve?", answer_fr: "Les nerfs fibulaires superficiel et profond.", answer_en: "The superficial and deep fibular nerves." },
];

const ABDOMINAL_WALL_COURSE = `# Paroi abdominale antéro-latérale

## 1. Limites
- La paroi abdominale antéro-latérale est une structure musculo-aponévrotique confinée aux faces antérieure et latérales de l'abdomen.
- **Limites** : en haut le processus xiphoïde et les rebords costaux ; en bas la partie antérieure de la crête iliaque, le ligament inguinal, le tubercule pubien, la crête pubienne et la symphyse pubienne ; latéralement, la ligne médio-axillaire la sépare de la paroi abdominale postérieure.

## 2. Couches de la paroi, de la superficie vers la profondeur
1. **Peau**.
2. **Fascia superficiel** : couche unique sur la majeure partie de la paroi, mais divisible en deux feuillets près de l'aine — le **fascia de Camper** (couche graisseuse superficielle) et le **fascia de Scarpa** (couche membraneuse profonde, de type fibreux élastique).
3. **Muscle oblique externe** (le plus superficiel latéralement).
4. **Muscle grand droit de l'abdomen** (le plus superficiel médialement).
5. **Muscle oblique interne**.
6. **Muscle transverse de l'abdomen**.
7. **Fascia transversalis**.

## 3. Les trois muscles larges

### 3.1 Muscle oblique externe
- **Origine** : huit digitations charnues des faces externes des huit dernières côtes ; fibres orientées en bas et en dedans.
- **Insertion** : les fibres les plus postérieures descendent verticalement vers le tiers antérieur de la lèvre externe de la crête iliaque (bord postérieur libre du muscle) ; les fibres restantes se terminent en une large aponévrose insérée sur la **ligne blanche**, du processus xiphoïde à la symphyse pubienne. Le bord libre inférieur de l'aponévrose, épaissi et enroulé sur lui-même, forme le **ligament inguinal**.
- **Ligne blanche** : structure fibreuse médiane, du xiphoïde à la symphyse pubienne, formée par la fusion des aponévroses des muscles de la paroi antérieure.
- **Innervation** : rameaux ventraux des six derniers nerfs thoraciques (T7-T12).

### 3.2 Muscle oblique interne
- Plus petit et plus mince que l'oblique externe ; situé profondément par rapport à lui.
- **Origine** : deux tiers latéraux de la face supérieure du ligament inguinal ; deux tiers antérieurs de la crête iliaque (zone intermédiaire) ; fascia thoraco-lombaire. Fibres orientées en haut et en dedans (perpendiculaires à celles de l'oblique externe).
- **Insertion** : la majorité des fibres se terminent en une aponévrose insérée sur les 7e, 8e et 9e cartilages costaux et sur la ligne blanche. Les fibres les plus postérieures s'insèrent sur le bord inférieur des trois dernières côtes. Les fibres inférieures, arquées au-dessus du canal inguinal, descendent s'insérer sur la crête pubienne et la ligne pectinéale, fusionnant avec des fibres du transverse de l'abdomen pour former le **tendon conjoint**.
- **Innervation** : T7-T12 et L1, via les nerfs ilio-hypogastrique et ilio-inguinal (plexus lombaire).

### 3.3 Muscle transverse de l'abdomen
- Le plus profond des trois muscles larges ; fibres majoritairement horizontales/transverses.
- **Origine** : tiers latéral de la face supérieure du ligament inguinal ; deux tiers antérieurs de la crête iliaque (lèvre interne) ; fascia thoraco-lombaire ; faces internes des six dernières côtes et leurs cartilages costaux.
- **Insertion** : les fibres inguinales s'arquent en arrière pour former le toit du canal inguinal puis descendent en dedans former une aponévrose fusionnant avec celle de l'oblique interne (tendon conjoint), insérée sur la crête pubienne et la partie médiale du pecten pubis. La majorité des fibres se terminent en une aponévrose insérée sur la ligne blanche.
- **Innervation** : T7-T12 et L1, via les nerfs ilio-hypogastrique et ilio-inguinal.

## 4. Structures dérivées des muscles larges
1. **Ligament inguinal** (de Poupart) : bord libre inférieur de l'aponévrose de l'oblique externe, tendu entre l'épine iliaque antéro-supérieure et le tubercule pubien.
2. **Ligament lacunaire** (de Gimbernat) : portion de l'aponévrose de l'oblique externe réfléchie en arrière et en dehors, attachée à la ligne pectinéale ; base concave formant la limite médiale de l'anneau fémoral ; apex correspondant au tubercule pubien.
3. **Tendon conjoint (falx inguinalis)** : fusion des fibres aponévrotiques inférieures de l'oblique interne et du transverse, arquées au-dessus du cordon spermatique, insérées sur la crête pubienne et la ligne pectinéale médiale.
4. **Muscle crémaster** : boucles musculaires dérivées des fibres arquées inférieures de l'oblique interne, formant l'enveloppe du cordon spermatique et du testicule.
5. **Ligament inguinal réfléchi** (de Colles) : couche triangulaire de fibres tendineuses, expansion du ligament lacunaire et du pilier inférieur de l'anneau inguinal superficiel, passant en arrière du cordon spermatique.
6. **Ligament de Cooper** (pectinéal) : bande fibreuse résistante, extension latérale de la base du ligament lacunaire le long de la ligne pectinéale.

## 5. Le muscle grand droit de l'abdomen
- Muscle pair, long, plat, en bandelette, s'étendant verticalement de la symphyse pubienne au rebord costal, le long de la ligne blanche qui sépare les muscles droits gauche et droit.
- **Origine** : deux chefs tendineux — chef médial (face antérieure de la symphyse pubienne) et chef latéral (partie latérale de la crête pubienne et tubercule pubien).
- **Insertion** : quatre digitations charnues sur la paroi thoracique antérieure, le long d'une ligne horizontale passant latéralement depuis le xiphoïde, sur les 5e, 6e et 7e cartilages costaux.
- **Innervation** : les cinq derniers nerfs intercostaux et le nerf sous-costal (T7-T12).
- **Action** : flexion du tronc sur le bassin.

## 6. Muscle pyramidal
- Rudimentaire chez l'humain ; petit muscle triangulaire, en avant de la partie inférieure du grand droit, à l'intérieur de sa gaine. Base en avant du pubis, apex dirigé vers le haut et en dedans.
- **Origine** : face antérieure du corps du pubis et ligament pubien antérieur. **Insertion** : ligne blanche, à mi-chemin entre l'ombilic et la symphyse pubienne. **Innervation** : nerf sous-costal (T12). **Action** : tend la ligne blanche.

## 7. Fonctions des muscles de la paroi abdominale antérieure
1. Fournir un support résistant et extensible aux viscères abdominaux contre la gravité et les protéger des traumatismes.
2. Comprimer le contenu abdominal pour augmenter la pression intra-abdominale, contribuant aux actes expulsifs et expiratoires.
3. Mobiliser le tronc et maintenir la posture.

## 8. Mouvements du tronc
- **Flexion du tronc** (surtout lombaire) : principalement par le grand droit de l'abdomen.
- **Flexion latérale** : par contraction unilatérale des muscles obliques.
- **Rotation** : par contraction combinée de l'oblique externe d'un côté et de l'oblique interne du côté opposé.

## 9. La gaine des droits
- Gaine aponévrotique enveloppant le grand droit (et le pyramidal s'il est présent), formée par les aponévroses des muscles larges de la paroi antérieure.
- **Paroi antérieure** : complète sur toute la longueur du muscle. **Paroi postérieure** : déficiente en dessous — présente un bord libre concave inférieurement, la **ligne arquée (ligne de Douglas)**, entre l'ombilic et la symphyse pubienne ; en dessous de ce niveau, le muscle repose directement sur le fascia transversalis.
- **Au-dessus de la ligne arquée** : paroi antérieure = fusion de l'aponévrose de l'oblique externe avec le feuillet antérieur de l'aponévrose de l'oblique interne ; paroi postérieure = fusion de l'aponévrose du transverse avec le feuillet postérieur de l'aponévrose de l'oblique interne.
- **En dessous de la ligne arquée** : paroi antérieure = les trois aponévroses réunies (transverse et oblique interne fusionnées, oblique externe séparé) ; paroi postérieure déficiente, formée uniquement par le fascia transversalis.
- **Contenu de la gaine des droits** : 2 muscles (grand droit et pyramidal si présent) ; 2 artères (épigastriques supérieure et inférieure) ; 2 veines (épigastriques supérieure et inférieure) ; 6 nerfs (parties terminales des six derniers nerfs thoraciques, dont les cinq derniers intercostaux et le nerf sous-costal).

## Points à retenir
- Trois muscles larges (oblique externe, oblique interne, transverse) s'insèrent sur la ligne blanche ; leurs fibres inférieures forment le tendon conjoint qui renforce le canal inguinal.
- Le ligament inguinal est le bord libre inférieur enroulé de l'aponévrose de l'oblique externe.
- La ligne arquée (de Douglas) marque la limite en dessous de laquelle la paroi postérieure de la gaine des droits disparaît, laissant le muscle reposer sur le fascia transversalis.
- Innervation segmentaire T7-T12 (+L1 pour oblique interne/transverse via ilio-hypogastrique/ilio-inguinal) pour l'ensemble de la paroi.`;

export const ABDOMINAL_WALL_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Paroi abdominale antéro-latérale",
    source_label: "Anatomie — Paroi abdominale antéro-latérale",
    content_fr: ABDOMINAL_WALL_COURSE,
  },
  qcm: [
    single("Quelle est la limite inférieure de la paroi abdominale antéro-latérale ?", "C", "En bas, la paroi est limitée par la partie antérieure de la crête iliaque, le ligament inguinal, le tubercule pubien, la crête pubienne et la symphyse pubienne.", ["Le processus xiphoïde", "Les rebords costaux", "La crête iliaque, le ligament inguinal et la symphyse pubienne", "La ligne médio-axillaire"]),
    single("Quel muscle est le plus superficiel latéralement dans la paroi abdominale ?", "B", "L'oblique externe est le plus superficiel des muscles larges, latéralement.", ["Le transverse de l'abdomen", "L'oblique externe", "L'oblique interne", "Le grand droit"]),
    single("Comment se nomment les deux feuillets du fascia superficiel près de l'aine ?", "A", "Le fascia de Camper (graisseux, superficiel) et le fascia de Scarpa (membraneux, profond).", ["Camper et Scarpa", "Colles et Cooper", "Gimbernat et Bigelow", "Poupart et Douglas"]),
    single("D'où proviennent les huit digitations charnues d'origine de l'oblique externe ?", "B", "L'oblique externe naît de huit digitations charnues des faces externes des huit dernières côtes.", ["Des processus transverses lombaires", "Des faces externes des huit dernières côtes", "De la crête iliaque uniquement", "Du fascia thoraco-lombaire uniquement"]),
    single("Comment se forme le ligament inguinal ?", "C", "Le ligament inguinal est le bord libre inférieur de l'aponévrose de l'oblique externe, épaissi et enroulé sur lui-même.", ["Par fusion des trois aponévroses", "Par le fascia transversalis seul", "Par le bord libre enroulé de l'aponévrose de l'oblique externe", "Par le tendon conjoint"]),
    single("Quelle est l'orientation des fibres de l'oblique interne par rapport à celles de l'oblique externe ?", "B", "Les fibres de l'oblique interne sont orientées en haut et en dedans, perpendiculaires à celles de l'oblique externe.", ["Parallèles", "Perpendiculaires", "Identiques en direction", "Obliques à 45° dans le même sens"]),
    single("Comment se forme le tendon conjoint ?", "A", "Le tendon conjoint résulte de la fusion des fibres aponévrotiques inférieures de l'oblique interne et du transverse de l'abdomen.", ["Fusion des fibres inférieures de l'oblique interne et du transverse", "Fusion des trois muscles larges entiers", "Repli du ligament inguinal", "Expansion du grand droit"]),
    single("Quelle est l'orientation principale des fibres du muscle transverse de l'abdomen ?", "C", "Les fibres du transverse de l'abdomen sont majoritairement horizontales/transverses.", ["Verticales", "Obliques en bas et en dedans", "Horizontales", "Obliques en haut et en dehors"]),
    single("Qu'est-ce que le ligament de Gimbernat (lacunaire) ?", "B", "C'est une portion de l'aponévrose de l'oblique externe réfléchie en arrière, attachée à la ligne pectinéale, formant la limite médiale de l'anneau fémoral.", ["Une expansion du transverse de l'abdomen", "Une portion réfléchie de l'aponévrose de l'oblique externe, bordant l'anneau fémoral", "Le tendon conjoint lui-même", "Une bande du fascia de Scarpa"]),
    single("D'où proviennent les boucles du muscle crémaster ?", "A", "Le crémaster dérive des fibres arquées inférieures de l'oblique interne.", ["Des fibres arquées inférieures de l'oblique interne", "Du transverse de l'abdomen uniquement", "Du grand droit de l'abdomen", "Du fascia transversalis"]),
    single("Sur quoi s'insère le chef médial du grand droit de l'abdomen ?", "C", "Le chef médial du grand droit naît de la face antérieure de la symphyse pubienne.", ["La crête iliaque", "Le tubercule pubien uniquement", "La face antérieure de la symphyse pubienne", "Le processus xiphoïde"]),
    single("Quelle est l'action principale du grand droit de l'abdomen ?", "B", "Le grand droit assure la flexion du tronc sur le bassin.", ["La rotation du tronc", "La flexion du tronc sur le bassin", "L'extension du tronc", "La flexion latérale isolée"]),
    single("Comment s'obtient la rotation du tronc ?", "A", "Par la contraction combinée de l'oblique externe d'un côté et de l'oblique interne du côté opposé.", ["Contraction de l'oblique externe d'un côté et de l'oblique interne du côté opposé", "Contraction bilatérale du grand droit", "Contraction isolée du transverse", "Contraction du pyramidal"]),
    single("Où s'insère le muscle pyramidal ?", "C", "Le pyramidal s'insère sur la ligne blanche, à mi-chemin entre l'ombilic et la symphyse pubienne.", ["Sur le processus xiphoïde", "Sur la crête iliaque", "Sur la ligne blanche entre ombilic et symphyse pubienne", "Sur le ligament inguinal"]),
    single("Quelle est l'action du muscle pyramidal ?", "B", "Le pyramidal tend la ligne blanche.", ["Il fléchit le tronc", "Il tend la ligne blanche", "Il fait tourner le tronc", "Il comprime les viscères"]),
    multi("Quelles sont les fonctions des muscles de la paroi abdominale antérieure ?", ["A", "B", "C"], "Ils soutiennent/protègent les viscères, augmentent la pression intra-abdominale (expulsion/expiration), et permettent le mouvement/la posture du tronc.", ["Soutenir et protéger les viscères", "Augmenter la pression intra-abdominale", "Mobiliser le tronc et maintenir la posture", "Produire les sucs digestifs"]),
    single("Qu'est-ce que la ligne arquée (de Douglas) ?", "C", "C'est le bord libre concave inférieur de la paroi postérieure de la gaine des droits, en dessous duquel cette paroi postérieure disparaît.", ["Le bord libre de l'oblique externe", "Une ligne cutanée sans rapport musculaire", "Le bord inférieur de la paroi postérieure de la gaine des droits", "Une structure exclusive au muscle pyramidal"]),
    single("En dessous de la ligne arquée, sur quoi repose directement le grand droit ?", "A", "En dessous de la ligne arquée, la paroi postérieure de la gaine est déficiente et le muscle repose directement sur le fascia transversalis.", ["Le fascia transversalis", "Le péritoine pariétal directement", "L'aponévrose de l'oblique externe", "Le ligament inguinal"]),
    single("Combien de nerfs contient la gaine des droits ?", "D", "La gaine des droits contient six nerfs : les parties terminales des six derniers nerfs thoraciques (cinq intercostaux + sous-costal).", ["Deux", "Quatre", "Huit", "Six"]),
    single("Quelle innervation segmentaire commune partagent les trois muscles larges de l'abdomen ?", "B", "Les trois muscles larges sont innervés par les rameaux ventraux de T7 à T12 (avec L1 en plus pour l'oblique interne et le transverse via les nerfs ilio-hypogastrique/ilio-inguinal).", ["C5 à C8", "T7 à T12", "L2 à L4", "S1 à S3"]),
  ],
  exam: { titre_fr: "Examen chronométré — Paroi abdominale antéro-latérale", duration_seconds: 1_600 },
};

export const ABDOMINAL_WALL_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la limite supérieure de la paroi abdominale antéro-latérale ?", question_en: "What is the superior limit of the anterolateral abdominal wall?", answer_fr: "Le processus xiphoïde et les rebords costaux.", answer_en: "The xiphoid process and the costal margins." },
  { question_fr: "Quelle ligne sépare la paroi abdominale antérieure de la paroi postérieure ?", question_en: "Which line separates the anterior from the posterior abdominal wall?", answer_fr: "La ligne médio-axillaire.", answer_en: "The midaxillary line." },
  { question_fr: "Nommez les couches de la paroi abdominale, de la superficie vers la profondeur.", question_en: "Name the layers of the abdominal wall, from superficial to deep.", answer_fr: "Peau, fascia superficiel, oblique externe/grand droit, oblique interne, transverse de l'abdomen, fascia transversalis.", answer_en: "Skin, superficial fascia, external oblique/rectus abdominis, internal oblique, transversus abdominis, transversalis fascia." },
  { question_fr: "Comment s'appellent les deux feuillets du fascia superficiel près de l'aine ?", question_en: "What are the two layers of superficial fascia near the groin called?", answer_fr: "Le fascia de Camper (graisseux) et le fascia de Scarpa (membraneux).", answer_en: "Camper's fascia (fatty) and Scarpa's fascia (membranous)." },
  { question_fr: "D'où naît le muscle oblique externe ?", question_en: "Where does the external oblique muscle arise from?", answer_fr: "De huit digitations charnues des faces externes des huit dernières côtes.", answer_en: "From eight fleshy slips on the outer surfaces of the lower eight ribs." },
  { question_fr: "Quelle est l'orientation des fibres de l'oblique externe ?", question_en: "What is the fiber orientation of the external oblique?", answer_fr: "Inféro-médiale (vers le bas et en dedans).", answer_en: "Inferomedial (downward and medial)." },
  { question_fr: "Comment se forme le ligament inguinal ?", question_en: "How is the inguinal ligament formed?", answer_fr: "Par le bord libre inférieur, épaissi et enroulé, de l'aponévrose de l'oblique externe.", answer_en: "By the thickened, rolled-inward free lower border of the external oblique aponeurosis." },
  { question_fr: "Sur quelle structure médiane s'insèrent les trois muscles larges ?", question_en: "On which midline structure do the three flat muscles insert?", answer_fr: "La ligne blanche.", answer_en: "The linea alba." },
  { question_fr: "Quelle est l'innervation de l'oblique externe ?", question_en: "What is the innervation of the external oblique?", answer_fr: "Les rameaux ventraux des six derniers nerfs thoraciques (T7-T12).", answer_en: "The anterior primary rami of the lower six thoracic nerves (T7-T12)." },
  { question_fr: "Où naît le muscle oblique interne ?", question_en: "Where does the internal oblique arise from?", answer_fr: "Deux tiers latéraux du ligament inguinal, deux tiers antérieurs de la crête iliaque, fascia thoraco-lombaire.", answer_en: "Lateral two-thirds of the inguinal ligament, anterior two-thirds of the iliac crest, thoracolumbar fascia." },
  { question_fr: "Quelle est l'orientation des fibres de l'oblique interne par rapport à l'oblique externe ?", question_en: "What is the fiber orientation of the internal oblique relative to the external oblique?", answer_fr: "Perpendiculaire (supéro-médiale).", answer_en: "Perpendicular (superomedial)." },
  { question_fr: "Qu'est-ce que le tendon conjoint ?", question_en: "What is the conjoint tendon?", answer_fr: "La fusion des fibres aponévrotiques inférieures de l'oblique interne et du transverse de l'abdomen, insérée sur la crête pubienne et la ligne pectinéale.", answer_en: "The fusion of the lower aponeurotic fibers of internal oblique and transversus abdominis, inserting on the pubic crest and pectineal line." },
  { question_fr: "Quelle est l'orientation des fibres du transverse de l'abdomen ?", question_en: "What is the fiber orientation of transversus abdominis?", answer_fr: "Principalement horizontale/transverse.", answer_en: "Mainly horizontal/transverse." },
  { question_fr: "D'où naît le muscle transverse de l'abdomen ?", question_en: "Where does transversus abdominis arise from?", answer_fr: "Tiers latéral du ligament inguinal, deux tiers antérieurs de la crête iliaque, fascia thoraco-lombaire, six dernières côtes.", answer_en: "Lateral third of the inguinal ligament, anterior two-thirds of the iliac crest, thoracolumbar fascia, lower six ribs." },
  { question_fr: "Qu'est-ce que le ligament lacunaire (de Gimbernat) ?", question_en: "What is the lacunar (Gimbernat's) ligament?", answer_fr: "Une portion de l'aponévrose de l'oblique externe réfléchie en arrière, formant la limite médiale de l'anneau fémoral.", answer_en: "A portion of the external oblique aponeurosis reflected backward, forming the medial boundary of the femoral ring." },
  { question_fr: "D'où dérive le muscle crémaster ?", question_en: "What does the cremaster muscle derive from?", answer_fr: "Des fibres arquées inférieures de l'oblique interne.", answer_en: "The lower arched fibers of the internal oblique." },
  { question_fr: "Qu'est-ce que le ligament de Cooper ?", question_en: "What is the ligament of Cooper?", answer_fr: "Une bande fibreuse résistante, extension latérale de la base du ligament lacunaire le long de la ligne pectinéale.", answer_en: "A strong fibrous band, a lateral extension from the base of the lacunar ligament along the pectineal line." },
  { question_fr: "D'où naissent les deux chefs du grand droit de l'abdomen ?", question_en: "Where do the two heads of rectus abdominis arise from?", answer_fr: "Chef médial : face antérieure de la symphyse pubienne ; chef latéral : crête et tubercule pubiens.", answer_en: "Medial head: anterior surface of the pubic symphysis; lateral head: pubic crest and tubercle." },
  { question_fr: "Sur quels cartilages costaux s'insère le grand droit de l'abdomen ?", question_en: "On which costal cartilages does rectus abdominis insert?", answer_fr: "Les 5e, 6e et 7e cartilages costaux, par quatre digitations charnues.", answer_en: "The 5th, 6th, and 7th costal cartilages, via four fleshy slips." },
  { question_fr: "Quelle est l'action du grand droit de l'abdomen ?", question_en: "What is the action of rectus abdominis?", answer_fr: "La flexion du tronc sur le bassin.", answer_en: "Flexion of the trunk on the pelvis." },
  { question_fr: "Qu'est-ce que le muscle pyramidal chez l'humain ?", question_en: "What is the pyramidalis muscle in humans?", answer_fr: "Un muscle rudimentaire, petit et triangulaire, en avant de la partie inférieure du grand droit.", answer_en: "A rudimentary, small triangular muscle, anterior to the lower part of rectus abdominis." },
  { question_fr: "Quelle est l'action du muscle pyramidal ?", question_en: "What is the action of pyramidalis?", answer_fr: "Tendre la ligne blanche.", answer_en: "To tense the linea alba." },
  { question_fr: "Comment obtient-on la flexion latérale du tronc ?", question_en: "How is lateral flexion of the trunk achieved?", answer_fr: "Par la contraction unilatérale des muscles obliques.", answer_en: "By unilateral contraction of the oblique muscles." },
  { question_fr: "Comment obtient-on la rotation du tronc ?", question_en: "How is trunk rotation achieved?", answer_fr: "Par la contraction combinée de l'oblique externe d'un côté et de l'oblique interne du côté opposé.", answer_en: "By combined contraction of the external oblique on one side and the internal oblique on the opposite side." },
  { question_fr: "Qu'est-ce que la gaine des droits ?", question_en: "What is the rectus sheath?", answer_fr: "Une gaine aponévrotique enveloppant le grand droit (et le pyramidal), formée par les aponévroses des muscles larges.", answer_en: "An aponeurotic sheath enclosing rectus abdominis (and pyramidalis), formed from the aponeuroses of the flat muscles." },
  { question_fr: "Qu'est-ce que la ligne arquée (de Douglas) ?", question_en: "What is the arcuate line (of Douglas)?", answer_fr: "Le bord libre concave inférieur de la paroi postérieure de la gaine des droits, en dessous duquel cette paroi disparaît.", answer_en: "The concave free lower margin of the posterior wall of the rectus sheath, below which that wall disappears." },
  { question_fr: "Sur quoi repose le grand droit en dessous de la ligne arquée ?", question_en: "What does rectus abdominis rest on below the arcuate line?", answer_fr: "Directement sur le fascia transversalis.", answer_en: "Directly on the transversalis fascia." },
  { question_fr: "Combien de muscles contient la gaine des droits ?", question_en: "How many muscles does the rectus sheath contain?", answer_fr: "Deux : le grand droit et le pyramidal (si présent).", answer_en: "Two: rectus abdominis and pyramidalis (if present)." },
  { question_fr: "Quelles artères se trouvent dans la gaine des droits ?", question_en: "Which arteries are found in the rectus sheath?", answer_fr: "Les artères épigastriques supérieure et inférieure.", answer_en: "The superior and inferior epigastric arteries." },
  { question_fr: "Combien de nerfs contient la gaine des droits ?", question_en: "How many nerves does the rectus sheath contain?", answer_fr: "Six : les parties terminales des six derniers nerfs thoraciques.", answer_en: "Six: the terminal parts of the lower six thoracic nerves." },
];
