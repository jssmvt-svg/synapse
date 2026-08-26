import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const UPPER_LIMB_MUSCLES_2_COURSE = `# Muscles du membre supérieur (suite)

## a. Muscles reliant le membre supérieur à la colonne vertébrale

| Muscle | Origine | Insertion | Innervation | Action |
| --- | --- | --- | --- | --- |
| **Trapèze** | Ligne nuchale supérieure, protubérance occipitale externe, ligament nuchal, épineuse de C7 et de toutes les vertèbres thoraciques | Faisceau supérieur → clavicule (1/3 latéral, bord postérieur) ; faisceau moyen → acromion et épine de la scapula ; faisceau inférieur → tubercule deltoïdien de l'épine de la scapula | Nerf accessoire (XI, branche spinale, motrice) + rameaux ventraux C3-C4 (proprioception) | Faisceau supérieur : élève la scapula (avec l'élévateur de la scapula). Faisceau moyen : rétracte la scapula. Faisceau inférieur : abaisse la partie médiale de l'épine scapulaire. Avec le dentelé antérieur, fait pivoter la scapula pour permettre l'abduction du bras au-delà de 90° |
| **Grand dorsal** | Épineuses des 6 dernières vertèbres thoraciques, fascia thoraco-lombaire, crête iliaque (lèvre externe), 3-4 dernières côtes, angle inférieur de la scapula | Coulisse bicipitale (intertuberculaire) de l'humérus | Nerf thoraco-dorsal (issu du cordon postérieur du plexus brachial) | Adduction, extension et rotation médiale de l'humérus |
| **Élévateur de la scapula** | Processus transverses de l'atlas et de l'axis, tubercules postérieurs des processus transverses de C3-C4 | Bord médial de la scapula, près de l'angle supérieur | C3-C4 + nerf scapulaire dorsal (C5) | Élève et stabilise la scapula |
| **Petit et grand rhomboïde** | Épineuses de C7-T1 (petit) et T2-T5 (grand) | Bord médial de la scapula | Nerf scapulaire dorsal (C5) | Rétractent la scapula |

## b. Muscles reliant le membre supérieur à la paroi thoracique

| Muscle | Origine | Insertion | Innervation | Action |
| --- | --- | --- | --- | --- |
| **Grand pectoral** | Moitié sternale de la clavicule, moitié latérale du sternum jusqu'à la 6e-7e cartilage costal, cartilages costaux, aponévrose du grand oblique de l'abdomen | Lèvre latérale de la coulisse bicipitale, par un tendon bilaminaire en U | Nerf pectoral latéral (C5-C7) et nerf pectoral médial (C8-T1) | Faisceau claviculaire : fléchit le bras. Faisceau sterno-costal : adduit et rotation médiale du bras |
| **Petit pectoral** | 3e, 4e, 5e côtes (près des cartilages costaux) | Processus coracoïde de la scapula | Nerf pectoral médial (C8-T1) | Aide le dentelé antérieur à tirer la scapula vers l'avant ; abaisse le moignon de l'épaule ; muscle accessoire de l'inspiration forcée |
| **Subclavier** | 1re côte et son cartilage | Face inférieure de la clavicule | C5-C6 | Stabilise la clavicule en la tirant vers le bas et médialement |
| **Dentelé antérieur** (grand dentelé) | 8 premières côtes (8 digitations) | Face antérieure du bord médial de la scapula | Nerf thoracique long (C5-C7) | Puissant protracteur de la scapula (muscle du boxeur) ; maintient le bord médial de la scapula plaqué contre la paroi thoracique ; avec le trapèze inférieur, fait pivoter la scapula lors de l'abduction au-dessus de l'horizontale |

## c. Muscles de l'épaule (coiffe des rotateurs + deltoïde + grand rond)

| Muscle | Origine | Insertion | Innervation | Action |
| --- | --- | --- | --- | --- |
| **Deltoïde** | Clavicule (1/3 latéral), acromion, épine de la scapula | Tubérosité deltoïdienne (en V) de l'humérus | Nerf axillaire (C5-C6) | Fibres antérieures : flexion et rotation médiale. Fibres postérieures : extension et rotation latérale. Fibres moyennes : abduction puissante de 15° à 90° |
| **Subscapulaire** | Fosse subscapulaire | Petit tubercule (tubérosité mineure) de l'humérus | Nerfs subscapulaires supérieur et inférieur (C5-C6) | Rotateur médial de l'humérus ; stabilise la tête humérale dans la glène (coiffe des rotateurs) |
| **Supra-épineux** | Fosse supra-épineuse (2/3 médiaux) | Facette supérieure du grand tubercule | Nerf suprascapulaire (C5-C6) | Initie les 15 premiers degrés d'abduction, puis assiste le deltoïde |
| **Infra-épineux** | Fosse infra-épineuse (2/3 médiaux) | Facette moyenne du grand tubercule | Nerf suprascapulaire (C5-C6) | Rotateur latéral de l'humérus |
| **Petit rond** | Bord latéral de la scapula (face postérieure) | Facette inférieure du grand tubercule | Nerf axillaire (C5-C6) | Rotateur latéral et faible adducteur de l'humérus |
| **Grand rond** | Angle inférieur de la scapula | Lèvre médiale de la coulisse bicipitale | Nerf subscapulaire inférieur (C5-C7) | Rotateur médial de l'humérus |

## Points à retenir
- Quatre muscles (supra-épineux, infra-épineux, petit rond, subscapulaire) forment la **coiffe des rotateurs**, qui stabilise la tête humérale dans la glène.
- Le dentelé antérieur (nerf thoracique long) et le trapèze inférieur travaillent ensemble pour permettre l'abduction du bras au-delà de 90°.
- Le grand rond et le grand dorsal partagent une action de rotation médiale et d'adduction de l'humérus, mais le grand dorsal a en plus une action d'extension.`;

export const UPPER_LIMB_MUSCLES_2_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Muscles du membre supérieur (suite)",
    source_label: "Anatomie — Lecture 3 (suite)",
    content_fr: UPPER_LIMB_MUSCLES_2_COURSE,
  },
  qcm: [
    single("Quel nerf assure l'innervation motrice du trapèze ?", "B", "Le trapèze est innervé sur le plan moteur par la branche spinale du nerf accessoire (XI) ; les rameaux ventraux C3-C4 apportent la sensibilité proprioceptive.", ["Le nerf scapulaire dorsal", "Le nerf accessoire (XI), branche spinale", "Le nerf thoracique long", "Le nerf suprascapulaire"]),
    single("Quelle partie du trapèze permet, avec le dentelé antérieur, l'abduction du bras au-delà de 90° ?", "C", "La rotation de la scapula nécessaire à l'abduction complète du bras résulte de l'action combinée du trapèze inférieur et du dentelé antérieur.", ["Le faisceau supérieur", "Le faisceau moyen", "Le faisceau inférieur", "Aucun, seul le deltoïde agit"]),
    single("Où s'insère le grand dorsal ?", "A", "Le grand dorsal s'insère dans le plancher de la coulisse intertuberculaire (bicipitale) de l'humérus.", ["Dans la coulisse intertuberculaire de l'humérus", "Sur le processus coracoïde", "Sur la tubérosité deltoïdienne", "Sur l'angle inférieur de la scapula"]),
    single("Quel nerf innerve le grand dorsal ?", "B", "Le grand dorsal est innervé par le nerf thoraco-dorsal, issu du cordon postérieur du plexus brachial.", ["Le nerf thoracique long", "Le nerf thoraco-dorsal", "Le nerf axillaire", "Le nerf scapulaire dorsal"]),
    single("Quel muscle est appelé « muscle du boxeur » ?", "C", "Le dentelé antérieur (grand dentelé) est appelé muscle du boxeur car il protracte puissamment la scapula lors des mouvements de poussée/coup de poing.", ["Le grand pectoral", "Le petit pectoral", "Le dentelé antérieur", "Le subclavier"]),
    single("Quel nerf innerve le dentelé antérieur ?", "A", "Le dentelé antérieur est innervé par le nerf thoracique long (C5-C7), issu directement des racines du plexus brachial.", ["Le nerf thoracique long", "Le nerf pectoral latéral", "Le nerf pectoral médial", "Le nerf axillaire"]),
    multi("Quels muscles composent la coiffe des rotateurs ?", ["A", "B", "C", "D"], "La coiffe des rotateurs regroupe le supra-épineux, l'infra-épineux, le petit rond et le subscapulaire ; ils stabilisent la tête humérale dans la glène.", ["Supra-épineux", "Infra-épineux", "Petit rond", "Subscapulaire", "Grand rond"]),
    single("Quelle est l'action du supra-épineux lors de l'abduction du bras ?", "B", "Le supra-épineux initie les 15 premiers degrés d'abduction, avant que le deltoïde ne prenne le relais.", ["Il assure toute l'abduction du bras", "Il initie les 15 premiers degrés d'abduction", "Il est un rotateur latéral pur", "Il est un extenseur du coude"]),
    single("Quel muscle de la coiffe est un rotateur latéral, avec le petit rond ?", "A", "L'infra-épineux, comme le petit rond, est un rotateur latéral de l'humérus.", ["L'infra-épineux", "Le subscapulaire", "Le supra-épineux", "Le grand rond"]),
    single("Quel muscle de la coiffe des rotateurs est un rotateur médial ?", "C", "Le subscapulaire, contrairement aux trois autres muscles de la coiffe, est rotateur médial de l'humérus.", ["Le supra-épineux", "L'infra-épineux", "Le subscapulaire", "Le petit rond"]),
    single("Quel nerf innerve le deltoïde ?", "D", "Le deltoïde est innervé par le nerf axillaire (C5-C6), tout comme le petit rond.", ["Le nerf suprascapulaire", "Le nerf thoraco-dorsal", "Le nerf scapulaire dorsal", "Le nerf axillaire"]),
    single("Quelle est l'action des fibres moyennes (acromiales) du deltoïde ?", "B", "Les fibres moyennes du deltoïde sont de puissants abducteurs du bras entre 15° et 90°.", ["Flexion du bras", "Abduction du bras de 15° à 90°", "Extension du coude", "Rotation médiale de l'avant-bras"]),
    single("Sur quelle partie du grand tubercule s'insère le supra-épineux ?", "A", "Le supra-épineux s'insère sur la facette supérieure du grand tubercule ; l'infra-épineux sur la facette moyenne, le petit rond sur la facette inférieure.", ["La facette supérieure", "La facette moyenne", "La facette inférieure", "Le petit tubercule"]),
    single("Quel muscle stabilise la clavicule en la tirant vers le bas et médialement ?", "B", "Le subclavius (subclavier), petit muscle entre la clavicule et la 1re côte, stabilise la clavicule lors des mouvements de l'épaule.", ["Le petit pectoral", "Le subclavier", "Le dentelé antérieur", "Le grand pectoral"]),
    single("Quelle est l'action combinée du grand rond et du grand dorsal ?", "C", "Le grand rond et le grand dorsal partagent une action d'adduction et de rotation médiale de l'humérus, le grand dorsal ajoutant une extension.", ["Abduction et rotation latérale", "Flexion et rotation latérale", "Adduction et rotation médiale", "Extension du coude uniquement"]),
    single("Quel muscle relie le membre supérieur à la paroi thoracique et joue un rôle accessoire dans l'inspiration forcée ?", "A", "Le petit pectoral agit comme muscle accessoire de la respiration lors d'un effort inspiratoire forcé.", ["Le petit pectoral", "Le grand rond", "L'élévateur de la scapula", "Le subscapulaire"]),
    single("D'où proviennent les fibres du faisceau claviculaire du grand pectoral fonctionnellement ?", "B", "Le faisceau claviculaire du grand pectoral fléchit le bras au niveau de l'épaule.", ["Il adduit et effectue une rotation médiale du bras", "Il fléchit le bras", "Il abaisse la scapula", "Il est extenseur du coude"]),
    single("Quel nerf innerve le petit et le grand rhomboïde ?", "C", "Le nerf scapulaire dorsal (C5) innerve à la fois l'élévateur de la scapula (en partie) et les rhomboïdes.", ["Le nerf thoracique long", "Le nerf axillaire", "Le nerf scapulaire dorsal", "Le nerf suprascapulaire"]),
    single("Quelle est l'action des rhomboïdes ?", "A", "Les rhomboïdes rétractent la scapula (rapprochement des scapulas de la colonne vertébrale).", ["Rétraction de la scapula", "Protraction de la scapula", "Élévation isolée de la scapula", "Rotation latérale du bras"]),
    single("Quel muscle de la coiffe des rotateurs est innervé par les nerfs subscapulaires supérieur et inférieur ?", "B", "Le subscapulaire est innervé par les nerfs subscapulaires supérieur et inférieur (C5-C6).", ["Le supra-épineux", "Le subscapulaire", "L'infra-épineux", "Le petit rond"]),
  ],
  exam: { titre_fr: "Examen chronométré — Muscles du membre supérieur (suite)", duration_seconds: 1_600 },
};

export const UPPER_LIMB_MUSCLES_2_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel nerf innerve le trapèze sur le plan moteur ?", question_en: "Which nerve motor-innervates the trapezius?", answer_fr: "La branche spinale du nerf accessoire (XI).", answer_en: "The spinal branch of the accessory nerve (XI)." },
  { question_fr: "Quelle est l'action du faisceau supérieur du trapèze ?", question_en: "What is the action of the upper fibers of trapezius?", answer_fr: "Il élève la scapula, avec l'élévateur de la scapula.", answer_en: "It elevates the scapula, along with levator scapulae." },
  { question_fr: "Quelle est l'action du faisceau moyen du trapèze ?", question_en: "What is the action of the middle fibers of trapezius?", answer_fr: "Il rétracte la scapula.", answer_en: "It retracts the scapula." },
  { question_fr: "Où s'insère le grand dorsal ?", question_en: "Where does latissimus dorsi insert?", answer_fr: "Dans le plancher de la coulisse intertuberculaire de l'humérus.", answer_en: "Into the floor of the intertubercular sulcus of the humerus." },
  { question_fr: "Quel nerf innerve le grand dorsal ?", question_en: "Which nerve innervates latissimus dorsi?", answer_fr: "Le nerf thoraco-dorsal.", answer_en: "The thoraco-dorsal nerve." },
  { question_fr: "Quelle est l'action du grand dorsal ?", question_en: "What is the action of latissimus dorsi?", answer_fr: "Adduction, extension et rotation médiale de l'humérus.", answer_en: "Adduction, extension, and medial rotation of the humerus." },
  { question_fr: "Où s'insère l'élévateur de la scapula ?", question_en: "Where does levator scapulae insert?", answer_fr: "Sur le bord médial de la scapula, près de l'angle supérieur.", answer_en: "On the medial border of the scapula, near the superior angle." },
  { question_fr: "Quels muscles rétractent la scapula ?", question_en: "Which muscles retract the scapula?", answer_fr: "Le petit et le grand rhomboïde, et le faisceau moyen du trapèze.", answer_en: "Rhomboid minor and major, and the middle fibers of trapezius." },
  { question_fr: "D'où provient le grand pectoral (origines principales) ?", question_en: "Where does pectoralis major mainly originate?", answer_fr: "Moitié sternale de la clavicule et moitié latérale du sternum jusqu'au 6e-7e cartilage costal.", answer_en: "Sternal half of the clavicle and lateral half of the sternum down to the 6th-7th costal cartilage." },
  { question_fr: "Où s'insère le grand pectoral ?", question_en: "Where does pectoralis major insert?", answer_fr: "Sur la lèvre latérale de la coulisse bicipitale, par un tendon bilaminaire en U.", answer_en: "On the lateral lip of the bicipital groove, via a U-shaped bilaminar tendon." },
  { question_fr: "Quels nerfs innervent le grand pectoral ?", question_en: "Which nerves innervate pectoralis major?", answer_fr: "Le nerf pectoral latéral (C5-C7) et le nerf pectoral médial (C8-T1).", answer_en: "The lateral pectoral nerve (C5-C7) and the medial pectoral nerve (C8-T1)." },
  { question_fr: "Quelle est l'action du petit pectoral, outre son rôle respiratoire accessoire ?", question_en: "What is pectoralis minor's action besides its accessory respiratory role?", answer_fr: "Il aide le dentelé antérieur à tirer la scapula vers l'avant et abaisse le moignon de l'épaule.", answer_en: "It assists serratus anterior in drawing the scapula forward and depresses the point of the shoulder." },
  { question_fr: "Quel muscle stabilise la clavicule entre elle et la 1re côte ?", question_en: "Which muscle stabilizes the clavicle between it and the 1st rib?", answer_fr: "Le subclavier.", answer_en: "The subclavius." },
  { question_fr: "D'où provient le dentelé antérieur ?", question_en: "Where does serratus anterior originate?", answer_fr: "Des 8 premières côtes, par 8 digitations.", answer_en: "From the first 8 ribs, via 8 digitations." },
  { question_fr: "Quel nerf innerve le dentelé antérieur ?", question_en: "Which nerve innervates serratus anterior?", answer_fr: "Le nerf thoracique long (C5-C7).", answer_en: "The long thoracic nerve (C5-C7)." },
  { question_fr: "Pourquoi le dentelé antérieur est-il surnommé « muscle du boxeur » ?", question_en: "Why is serratus anterior nicknamed the \"boxer's muscle\"?", answer_fr: "Parce qu'il protracte puissamment la scapula lors des mouvements de poussée/coup de poing.", answer_en: "Because it powerfully protracts the scapula during pushing/punching movements." },
  { question_fr: "Sur quelle structure s'insère le deltoïde ?", question_en: "Where does the deltoid insert?", answer_fr: "Sur la tubérosité deltoïdienne (en V) de l'humérus.", answer_en: "On the V-shaped deltoid tuberosity of the humerus." },
  { question_fr: "Quel nerf innerve le deltoïde ?", question_en: "Which nerve innervates the deltoid?", answer_fr: "Le nerf axillaire (C5-C6).", answer_en: "The axillary nerve (C5-C6)." },
  { question_fr: "Quelle est l'action des fibres antérieures (claviculaires) du deltoïde ?", question_en: "What is the action of the anterior (clavicular) fibers of deltoid?", answer_fr: "Flexion et rotation médiale du bras.", answer_en: "Flexion and medial rotation of the arm." },
  { question_fr: "Quelle est l'action des fibres postérieures (spinales) du deltoïde ?", question_en: "What is the action of the posterior (spinous) fibers of deltoid?", answer_fr: "Extension et rotation latérale du bras.", answer_en: "Extension and lateral rotation of the arm." },
  { question_fr: "Quels 4 muscles composent la coiffe des rotateurs ?", question_en: "Which 4 muscles make up the rotator cuff?", answer_fr: "Supra-épineux, infra-épineux, petit rond, subscapulaire.", answer_en: "Supraspinatus, infraspinatus, teres minor, subscapularis." },
  { question_fr: "Quelle est la fonction principale du supra-épineux au début de l'abduction ?", question_en: "What is supraspinatus's main function at the start of abduction?", answer_fr: "Il initie les 15 premiers degrés d'abduction du bras.", answer_en: "It initiates the first 15° of arm abduction." },
  { question_fr: "Quel nerf innerve le supra-épineux et l'infra-épineux ?", question_en: "Which nerve innervates supraspinatus and infraspinatus?", answer_fr: "Le nerf suprascapulaire (C5-C6).", answer_en: "The suprascapular nerve (C5-C6)." },
  { question_fr: "Quelle est l'action de l'infra-épineux ?", question_en: "What is the action of infraspinatus?", answer_fr: "Rotateur latéral de l'humérus.", answer_en: "Lateral rotator of the humerus." },
  { question_fr: "Quelle est l'action du subscapulaire ?", question_en: "What is the action of subscapularis?", answer_fr: "Rotateur médial de l'humérus.", answer_en: "Medial rotator of the humerus." },
  { question_fr: "Quel nerf innerve le subscapulaire ?", question_en: "Which nerve innervates subscapularis?", answer_fr: "Les nerfs subscapulaires supérieur et inférieur (C5-C6).", answer_en: "The upper and lower subscapular nerves (C5-C6)." },
  { question_fr: "Quelle est l'action du petit rond ?", question_en: "What is the action of teres minor?", answer_fr: "Rotateur latéral et faible adducteur de l'humérus.", answer_en: "Lateral rotator and weak adductor of the humerus." },
  { question_fr: "Où s'insère le grand rond ?", question_en: "Where does teres major insert?", answer_fr: "Sur la lèvre médiale de la coulisse bicipitale de l'humérus.", answer_en: "On the medial lip of the bicipital groove of the humerus." },
  { question_fr: "Quel nerf innerve le grand rond ?", question_en: "Which nerve innervates teres major?", answer_fr: "Le nerf subscapulaire inférieur.", answer_en: "The lower subscapular nerve." },
  { question_fr: "Quelle est la différence fonctionnelle entre le grand rond et le grand dorsal ?", question_en: "What is the functional difference between teres major and latissimus dorsi?", answer_fr: "Les deux adduisent et effectuent une rotation médiale, mais seul le grand dorsal étend aussi le bras.", answer_en: "Both adduct and medially rotate, but only latissimus dorsi also extends the arm." },
  { question_fr: "Quel muscle rôle joue-t-il conjointement avec le trapèze inférieur pour l'abduction complète du bras ?", question_en: "Which muscle works with the lower trapezius for full arm abduction?", answer_fr: "Le dentelé antérieur.", answer_en: "Serratus anterior." },
  { question_fr: "Combien de rotateurs latéraux compte la coiffe des rotateurs ?", question_en: "How many lateral rotators does the rotator cuff contain?", answer_fr: "Trois : supra-épineux (accessoire), infra-épineux et petit rond.", answer_en: "Three: supraspinatus (accessory), infraspinatus, and teres minor." },
  { question_fr: "Quel muscle de la ceinture scapulaire est innervé par C3 et C4 directement, en plus du nerf scapulaire dorsal ?", question_en: "Which shoulder girdle muscle is innervated directly by C3-C4, plus the dorsal scapular nerve?", answer_fr: "L'élévateur de la scapula.", answer_en: "Levator scapulae." },
  { question_fr: "Quel muscle possède un tendon d'insertion bilaminaire en forme de U ?", question_en: "Which muscle has a U-shaped bilaminar insertion tendon?", answer_fr: "Le grand pectoral.", answer_en: "Pectoralis major." },
];

const UPPER_LIMB_VESSELS_NERVES_COURSE = `# Artères, veines et nerfs du membre supérieur

## 1. Artère axillaire
- Continuation de l'artère subclavière à partir du bord externe de la 1re côte ; devient l'artère brachiale au bord inférieur du grand rond.
- Le petit pectoral la croise et la divise en **3 parties** : 1re partie (proximale au petit pectoral, 1 branche : artère thoracique supérieure), 2e partie (postérieure au petit pectoral, 2 branches : thoraco-acromiale et thoracique latérale), 3e partie (distale au petit pectoral, 3 branches : subscapulaire, circonflexe humérale antérieure et postérieure).
- L'**artère subscapulaire** est la plus volumineuse des branches collatérales ; elle donne l'artère circonflexe scapulaire.
- Les artères circonflexes humérales antérieure et postérieure s'anastomosent autour du col chirurgical de l'humérus.

## 2. Artère brachiale
- Continuation de l'artère axillaire, se termine au coude en donnant les artères radiale et ulnaire.
- Rapports : nerf médian la croise d'avant en arrière dans le tiers moyen du bras ; repose en arrière sur le triceps et le brachial ; superficielle sur tout son trajet (accessible à la palpation/compression).
- Branche principale : **artère brachiale profonde**, qui accompagne le nerf radial dans la gouttière radiale et se termine par les artères collatérales radiale et moyenne, participant à l'anastomose péri-articulaire du coude.

## 3. Artère ulnaire
- Branche terminale la plus volumineuse de l'artère brachiale ; descend obliquement puis verticalement le long du bord médial de l'avant-bras.
- Rapports : nerf médian croise l'artère 2,5 cm sous le coude ; nerf ulnaire longe son bord médial dans les 2/3 distaux.
- Branche principale : **artère interosseuse commune**, qui se divise en interosseuse antérieure (compartiment antérieur) et postérieure (compartiment postérieur, participe à l'anastomose du coude).
- Se termine par la **arcade palmaire superficielle**, complétée latéralement par la branche palmaire superficielle de l'artère radiale ; donne les artères digitales palmaires communes.

## 4. Artère radiale
- Branche terminale la plus petite de l'artère brachiale ; superficielle sur tout son trajet dans l'avant-bras distal.
- Quitte l'avant-bras en s'enroulant autour du bord latéral du poignet pour atteindre la tabatière anatomique.
- Se termine par l'**arcade palmaire profonde**, complétée médialement par la branche profonde de l'artère ulnaire ; donne les artères métacarpiennes palmaires et les artères perforantes.

## 5. Anastomose péri-articulaire du coude
Quatre systèmes anastomotiques relient les branches de l'artère brachiale (collatérales ulnaires sup./inf., collatérales de la brachiale profonde) aux branches récurrentes des artères radiale, ulnaire et interosseuse, garantissant la vascularisation du coude en cas d'occlusion locale.

## 6. Drainage veineux du membre supérieur
- **Veines superficielles** (dans le fascia superficiel, accessibles pour prélèvements/perfusions) : réseau veineux dorsal de la main, veine céphalique (bord latéral), veine basilique (bord médial), veine cubitale médiane (anastomose céphalique→basilique au pli du coude), veine médiane de l'avant-bras.
- **Veines profondes** : veines satellites (venae comitantes) accompagnant les artères radiale, ulnaire et brachiale, se drainant dans la veine axillaire.
- Les veines superficielles et profondes possèdent des valvules, plus nombreuses dans le réseau profond.

## 7. Plexus brachial
- Formé par les rameaux ventraux de **C5 à T1**.
- Quatre composantes successives : **racines** (cou, profondes au scalène antérieur) → **troncs** (supérieur = C5-C6, moyen = C7, inférieur = C8-T1) → **divisions** (antérieure/postérieure, derrière la clavicule) → **cordons** (latéral = divisions antérieures des troncs supérieur/moyen ; médial = division antérieure du tronc inférieur ; postérieur = 3 divisions postérieures), situés dans l'aisselle.
- **17 branches** au total : 5 terminales et 12 collatérales.
- Deux exceptions échappent au plexus brachial : le trapèze (nerf accessoire) et une zone cutanée proche de l'aisselle (nerf intercostobrachial).

### Les 5 nerfs terminaux
| Nerf | Origine | Territoire moteur | Territoire sensitif |
| --- | --- | --- | --- |
| **Axillaire** (C5-C6) | Cordon postérieur | Deltoïde, petit rond | Peau de la région deltoïdienne (moitié inférieure), capsule de l'épaule |
| **Radial** (C5-T1) | Cordon postérieur | Triceps, brachial (inconstant), muscles extenseurs de l'avant-bras | Face postérieure du bras/avant-bras, face dorsale latérale de la main et des 3½ doigts latéraux (jusqu'à la moitié proximale des phalanges moyennes) |
| **Musculo-cutané** (C5-C7) | Cordon latéral | Coraco-brachial, biceps brachial, brachial | Face latérale de l'avant-bras (nerf cutané antébrachial latéral) |
| **Médian** (racines des cordons médial et latéral) | Cordons médial + latéral | Muscles fléchisseurs de l'avant-bras (sauf fléchisseur ulnaire du carpe et moitié médiale du fléchisseur profond des doigts), muscles thénariens (sauf adducteur du pouce), 2 lombricaux latéraux | Peau de la moitié latérale de la paume, face palmaire des 3½ doigts latéraux |
| **Ulnaire** (C7-T1) | Cordon médial | Fléchisseur ulnaire du carpe, moitié médiale du fléchisseur profond des doigts, muscles hypothénariens, 2 lombricaux médiaux, adducteur du pouce, interosseux | Peau de la moitié médiale de la main, face palmaire d'un doigt et demi médial |

### Trajets à retenir
- Le **nerf axillaire** contourne le col chirurgical de l'humérus avec l'artère circonflexe humérale postérieure — vulnérable en cas de fracture/luxation de l'épaule.
- Le **nerf radial** chemine dans la gouttière radiale de l'humérus avec l'artère brachiale profonde — vulnérable en cas de fracture de la diaphyse humérale.
- Le **nerf médian** traverse le canal carpien pour entrer dans la main (site du syndrome du canal carpien).
- Le **nerf ulnaire** passe en arrière de l'épicondyle médial de l'humérus (« nerf du petit os du coude ») avant d'entrer dans la main par le canal ulnaire (canal de Guyon).

## Points à retenir
- L'artère axillaire est divisée en 3 parties par le petit pectoral (1, 2, 3 branches respectivement).
- Ulnaire = branche terminale la plus volumineuse ; radiale = la plus petite mais la plus superficielle et la plus palpable au poignet.
- Le plexus brachial suit la séquence Racines → Troncs → Divisions → Cordons → 5 branches terminales (17 branches au total).
- Le nerf radial (fracture de diaphyse humérale) et le nerf axillaire (luxation d'épaule) sont les nerfs les plus exposés aux traumatismes osseux du bras.`;

export const UPPER_LIMB_VESSELS_NERVES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Artères, veines et nerfs du membre supérieur",
    source_label: "Anatomie — Lecture 4",
    content_fr: UPPER_LIMB_VESSELS_NERVES_COURSE,
  },
  qcm: [
    single("Quel muscle croise et divise l'artère axillaire en 3 parties ?", "B", "Le petit pectoral croise l'artère axillaire en superficie et la divise en 3 parties (1, 2 et 3 branches respectivement).", ["Le grand pectoral", "Le petit pectoral", "Le subclavier", "Le dentelé antérieur"]),
    single("Quelle est la branche la plus volumineuse de l'artère axillaire ?", "C", "L'artère subscapulaire, issue de la 3e partie de l'axillaire, est sa branche collatérale la plus volumineuse.", ["L'artère thoracique supérieure", "L'artère thoraco-acromiale", "L'artère subscapulaire", "L'artère circonflexe humérale antérieure"]),
    single("En quoi devient l'artère axillaire au bord inférieur du grand rond ?", "A", "L'artère axillaire se prolonge en artère brachiale au bord inférieur du grand rond.", ["L'artère brachiale", "L'artère radiale", "L'artère ulnaire", "L'artère subscapulaire"]),
    single("Quel nerf croise l'artère brachiale d'avant en arrière dans le tiers moyen du bras ?", "B", "Le nerf médian croise l'artère brachiale d'latéral à médial dans le tiers moyen du bras.", ["Le nerf ulnaire", "Le nerf médian", "Le nerf radial", "Le nerf musculo-cutané"]),
    single("Quelle artère accompagne le nerf radial dans la gouttière radiale de l'humérus ?", "C", "L'artère brachiale profonde chemine avec le nerf radial dans la gouttière (gorge) radiale.", ["L'artère ulnaire", "L'artère radiale", "L'artère brachiale profonde", "L'artère interosseuse commune"]),
    single("Quelle est la branche terminale la plus volumineuse de l'artère brachiale ?", "A", "L'artère ulnaire est la branche terminale la plus volumineuse de l'artère brachiale.", ["L'artère ulnaire", "L'artère radiale", "L'artère interosseuse commune", "L'artère collatérale radiale"]),
    single("Quelle artère complète latéralement l'arcade palmaire superficielle ?", "B", "L'arcade palmaire superficielle, continuation de l'artère ulnaire, est complétée latéralement par la branche palmaire superficielle de l'artère radiale.", ["L'artère interosseuse antérieure", "La branche palmaire superficielle de l'artère radiale", "L'artère brachiale profonde", "L'artère subscapulaire"]),
    single("Quelle artère complète médialement l'arcade palmaire profonde ?", "C", "L'arcade palmaire profonde, continuation de l'artère radiale, est complétée médialement par la branche profonde de l'artère ulnaire.", ["L'artère interosseuse postérieure", "L'artère collatérale ulnaire", "La branche profonde de l'artère ulnaire", "L'artère métacarpienne palmaire"]),
    single("Où se situe l'artère radiale dans sa portion distale de l'avant-bras ?", "A", "Dans sa partie distale, l'artère radiale est superficielle, couverte seulement par la peau et le fascia, ce qui la rend facilement palpable (pouls radial).", ["Superficielle, couverte de peau et de fascia", "Profonde sous le brachio-radial", "Sous le fléchisseur ulnaire du carpe", "Elle n'est pas palpable"]),
    multi("Quelles sont les veines superficielles principales du membre supérieur ?", ["A", "B", "C"], "Le réseau veineux superficiel comprend notamment la veine céphalique, la veine basilique et la veine cubitale médiane, toutes situées dans le fascia superficiel.", ["Veine céphalique", "Veine basilique", "Veine cubitale médiane", "Veine axillaire"]),
    single("Quelle veine relie la veine céphalique à la veine basilique au pli du coude ?", "B", "La veine cubitale médiane shunte le sang de la veine céphalique vers la veine basilique au niveau du coude — c'est le site classique de prélèvement veineux.", ["La veine médiane de l'avant-bras", "La veine cubitale médiane", "La veine axillaire", "Le réseau veineux dorsal"]),
    single("Où se drainent les veines profondes (satellites) du membre supérieur ?", "C", "Les veines satellites des artères radiale, ulnaire et brachiale convergent vers la veine axillaire.", ["Dans la veine céphalique", "Dans la veine basilique uniquement", "Dans la veine axillaire", "Directement dans la veine subclavière"]),
    single("Quelles racines forment le plexus brachial ?", "D", "Le plexus brachial est formé par les rameaux ventraux de C5 à T1.", ["C1 à C4", "C3 à C7", "C4 à C8", "C5 à T1"]),
    single("Quel tronc du plexus brachial est formé par la racine C7 seule ?", "B", "Le tronc moyen est formé uniquement par la racine C7.", ["Le tronc supérieur", "Le tronc moyen", "Le tronc inférieur", "Aucun, tous combinent 2 racines"]),
    single("Quel cordon du plexus brachial est formé par les 3 divisions postérieures des troncs ?", "C", "Le cordon postérieur résulte de l'union des divisions postérieures des 3 troncs (supérieur, moyen, inférieur).", ["Le cordon latéral", "Le cordon médial", "Le cordon postérieur", "Aucun, les divisions postérieures ne fusionnent pas"]),
    single("Combien de branches totales possède le plexus brachial ?", "A", "Le plexus brachial donne 17 branches au total : 5 terminales et 12 collatérales.", ["17 (5 terminales + 12 collatérales)", "12 (5 terminales + 7 collatérales)", "5 terminales uniquement", "20 branches"]),
    multi("Quels sont les 5 nerfs terminaux du plexus brachial ?", ["A", "B", "C", "D", "E"], "Les 5 branches terminales sont le nerf axillaire, le nerf radial, le nerf musculo-cutané, le nerf médian et le nerf ulnaire.", ["Nerf axillaire", "Nerf radial", "Nerf musculo-cutané", "Nerf médian", "Nerf ulnaire"]),
    single("Quel nerf est vulnérable lors d'une luxation de l'épaule, en raison de son trajet autour du col chirurgical de l'humérus ?", "B", "Le nerf axillaire contourne le col chirurgical de l'humérus avec l'artère circonflexe humérale postérieure, ce qui le rend vulnérable lors des luxations gléno-humérales.", ["Le nerf musculo-cutané", "Le nerf axillaire", "Le nerf médian", "Le nerf ulnaire"]),
    single("Quel nerf est particulièrement exposé lors d'une fracture de la diaphyse humérale ?", "C", "Le nerf radial chemine dans la gouttière radiale de l'humérus, ce qui l'expose lors des fractures de la diaphyse humérale.", ["Le nerf axillaire", "Le nerf médian", "Le nerf radial", "Le nerf ulnaire"]),
    single("Par quel canal le nerf médian entre-t-il dans la main ?", "A", "Le nerf médian traverse le canal carpien, site du syndrome du canal carpien en cas de compression.", ["Le canal carpien", "Le canal ulnaire (canal de Guyon)", "La tabatière anatomique", "Le canal huméral"]),
    single("Où passe le nerf ulnaire au niveau du coude ?", "B", "Le nerf ulnaire passe en arrière de l'épicondyle médial de l'humérus, où il est palpable et vulnérable aux traumatismes.", ["En avant de l'épicondyle latéral", "En arrière de l'épicondyle médial", "Dans la gouttière radiale", "Dans le canal carpien"]),
  ],
  exam: { titre_fr: "Examen chronométré — Vaisseaux et nerfs du membre supérieur", duration_seconds: 1_680 },
};

export const UPPER_LIMB_VESSELS_NERVES_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "En quoi se prolonge l'artère subclavière au bord externe de la 1re côte ?", question_en: "What does the subclavian artery continue as at the outer border of the 1st rib?", answer_fr: "En artère axillaire.", answer_en: "The axillary artery." },
  { question_fr: "Combien de parties le petit pectoral divise-t-il dans l'artère axillaire ?", question_en: "Into how many parts does pectoralis minor divide the axillary artery?", answer_fr: "Trois parties.", answer_en: "Three parts." },
  { question_fr: "Quelle branche naît de la 1re partie de l'artère axillaire ?", question_en: "Which branch arises from the 1st part of the axillary artery?", answer_fr: "L'artère thoracique supérieure.", answer_en: "The superior thoracic artery." },
  { question_fr: "Quelles branches naissent de la 2e partie de l'artère axillaire ?", question_en: "Which branches arise from the 2nd part of the axillary artery?", answer_fr: "L'artère thoraco-acromiale et l'artère thoracique latérale.", answer_en: "The thoraco-acromial artery and the lateral thoracic artery." },
  { question_fr: "En quoi devient l'artère axillaire au bord inférieur du grand rond ?", question_en: "What does the axillary artery become at the lower border of teres major?", answer_fr: "L'artère brachiale.", answer_en: "The brachial artery." },
  { question_fr: "Quel nerf croise l'artère brachiale dans le tiers moyen du bras ?", question_en: "Which nerve crosses the brachial artery in the middle third of the arm?", answer_fr: "Le nerf médian.", answer_en: "The median nerve." },
  { question_fr: "Quelle est la plus grosse branche de l'artère brachiale ?", question_en: "What is the largest branch of the brachial artery?", answer_fr: "L'artère brachiale profonde.", answer_en: "The profunda brachii artery." },
  { question_fr: "Quel nerf accompagne l'artère brachiale profonde ?", question_en: "Which nerve accompanies the profunda brachii artery?", answer_fr: "Le nerf radial, dans la gouttière radiale.", answer_en: "The radial nerve, in the radial groove." },
  { question_fr: "Quelle est la branche terminale la plus volumineuse de l'artère brachiale ?", question_en: "What is the largest terminal branch of the brachial artery?", answer_fr: "L'artère ulnaire.", answer_en: "The ulnar artery." },
  { question_fr: "Quel nerf longe le bord médial de l'artère ulnaire dans les 2/3 distaux de l'avant-bras ?", question_en: "Which nerve lies medial to the ulnar artery in the distal two-thirds of the forearm?", answer_fr: "Le nerf ulnaire.", answer_en: "The ulnar nerve." },
  { question_fr: "En quoi se divise l'artère interosseuse commune ?", question_en: "What does the common interosseous artery divide into?", answer_fr: "En artères interosseuses antérieure et postérieure.", answer_en: "Into anterior and posterior interosseous arteries." },
  { question_fr: "Quelle arcade palmaire continue directement l'artère ulnaire ?", question_en: "Which palmar arch is the direct continuation of the ulnar artery?", answer_fr: "L'arcade palmaire superficielle.", answer_en: "The superficial palmar arch." },
  { question_fr: "Quelle arcade palmaire continue directement l'artère radiale ?", question_en: "Which palmar arch is the direct continuation of the radial artery?", answer_fr: "L'arcade palmaire profonde.", answer_en: "The deep palmar arch." },
  { question_fr: "Où se situe l'artère radiale au niveau du poignet et de la main ?", question_en: "Where is the radial artery located at the wrist/hand?", answer_fr: "Elle contourne le bord latéral du poignet pour atteindre la tabatière anatomique.", answer_en: "It winds around the lateral aspect of the wrist to reach the anatomical snuffbox." },
  { question_fr: "Quelles veines forment le réseau veineux superficiel du membre supérieur ?", question_en: "Which veins make up the superficial venous network of the upper limb?", answer_fr: "Réseau veineux dorsal, veine céphalique, veine basilique, veine cubitale médiane, veine médiane de l'avant-bras.", answer_en: "Dorsal venous network, cephalic vein, basilic vein, median cubital vein, median vein of the forearm." },
  { question_fr: "Où se draine la veine céphalique ?", question_en: "Where does the cephalic vein drain?", answer_fr: "Dans la veine axillaire, après avoir traversé le sillon delto-pectoral.", answer_en: "Into the axillary vein, after crossing the deltopectoral groove." },
  { question_fr: "Où se draine la veine basilique ?", question_en: "Where does the basilic vein drain?", answer_fr: "Elle devient la veine axillaire au bord inférieur du grand rond.", answer_en: "It becomes the axillary vein at the lower border of teres major." },
  { question_fr: "Quel est le rôle de la veine cubitale médiane ?", question_en: "What is the role of the median cubital vein?", answer_fr: "Elle shunte le sang de la veine céphalique vers la veine basilique au pli du coude.", answer_en: "It shunts blood from the cephalic vein to the basilic vein at the elbow crease." },
  { question_fr: "Quelles racines forment le plexus brachial ?", question_en: "Which roots form the brachial plexus?", answer_fr: "Les rameaux ventraux de C5 à T1.", answer_en: "The ventral rami of C5 to T1." },
  { question_fr: "Quel tronc du plexus brachial est formé par C5-C6 ?", question_en: "Which trunk of the brachial plexus is formed by C5-C6?", answer_fr: "Le tronc supérieur.", answer_en: "The superior trunk." },
  { question_fr: "Quel tronc du plexus brachial est formé par C8-T1 ?", question_en: "Which trunk of the brachial plexus is formed by C8-T1?", answer_fr: "Le tronc inférieur.", answer_en: "The inferior trunk." },
  { question_fr: "Où se situent les divisions du plexus brachial ?", question_en: "Where are the divisions of the brachial plexus located?", answer_fr: "Derrière la clavicule.", answer_en: "Behind the clavicle." },
  { question_fr: "Comment se forme le cordon latéral du plexus brachial ?", question_en: "How is the lateral cord of the brachial plexus formed?", answer_fr: "Par l'union des divisions antérieures des troncs supérieur et moyen.", answer_en: "By the union of the anterior divisions of the superior and middle trunks." },
  { question_fr: "Comment se forme le cordon médial du plexus brachial ?", question_en: "How is the medial cord of the brachial plexus formed?", answer_fr: "Il continue la division antérieure du tronc inférieur.", answer_en: "It continues the anterior division of the inferior trunk." },
  { question_fr: "Comment se forme le cordon postérieur du plexus brachial ?", question_en: "How is the posterior cord of the brachial plexus formed?", answer_fr: "Par l'union des 3 divisions postérieures des troncs.", answer_en: "By the union of the 3 posterior divisions of the trunks." },
  { question_fr: "Combien de branches terminales possède le plexus brachial ?", question_en: "How many terminal branches does the brachial plexus have?", answer_fr: "5.", answer_en: "5." },
  { question_fr: "Quel muscle échappe à l'innervation du plexus brachial et pourquoi ?", question_en: "Which muscle escapes brachial plexus innervation, and why?", answer_fr: "Le trapèze, innervé par le nerf accessoire (XI).", answer_en: "The trapezius, innervated by the accessory nerve (XI)." },
  { question_fr: "Quel nerf terminal du plexus brachial innerve le deltoïde et le petit rond ?", question_en: "Which terminal nerve of the brachial plexus innervates the deltoid and teres minor?", answer_fr: "Le nerf axillaire.", answer_en: "The axillary nerve." },
  { question_fr: "Quel nerf terminal innerve le triceps brachial ?", question_en: "Which terminal nerve innervates triceps brachii?", answer_fr: "Le nerf radial.", answer_en: "The radial nerve." },
  { question_fr: "Quel nerf terminal innerve le coraco-brachial, le biceps et le brachial ?", question_en: "Which terminal nerve innervates coracobrachialis, biceps, and brachialis?", answer_fr: "Le nerf musculo-cutané.", answer_en: "The musculocutaneous nerve." },
  { question_fr: "Quel nerf traverse le canal carpien ?", question_en: "Which nerve passes through the carpal tunnel?", answer_fr: "Le nerf médian.", answer_en: "The median nerve." },
  { question_fr: "Quel nerf innerve les muscles hypothénariens et les interosseux ?", question_en: "Which nerve innervates the hypothenar and interosseous muscles?", answer_fr: "Le nerf ulnaire.", answer_en: "The ulnar nerve." },
  { question_fr: "Par quel canal le nerf ulnaire entre-t-il dans la main ?", question_en: "Through which canal does the ulnar nerve enter the hand?", answer_fr: "Le canal ulnaire (canal de Guyon).", answer_en: "The ulnar canal (Guyon's canal)." },
  { question_fr: "Quel nerf est vulnérable en arrière de l'épicondyle médial de l'humérus ?", question_en: "Which nerve is vulnerable behind the medial epicondyle of the humerus?", answer_fr: "Le nerf ulnaire.", answer_en: "The ulnar nerve." },
  { question_fr: "Quel nerf innerve la peau de la moitié latérale de la paume ?", question_en: "Which nerve innervates the skin of the lateral half of the palm?", answer_fr: "Le nerf médian.", answer_en: "The median nerve." },
];

const LOWER_LIMB_MUSCLES_COURSE = `# Muscles du membre inférieur

Les muscles du membre inférieur sont classés en 4 groupes régionaux : région iliaque, cuisse/fesse, jambe, pied.

## A. Muscles de la région iliaque

| Muscle | Origine | Insertion | Innervation | Action |
| --- | --- | --- | --- | --- |
| **Grand psoas** | Disques intervertébraux et corps T12-L5, processus transverses lombaires, arcades tendineuses | Petit trochanter du fémur | Rameaux ventraux L2-L4 | Fléchisseur principal de la cuisse à la hanche ; à partir du fémur fixe, fléchit le tronc (passage couché→assis) |
| **Petit psoas** (présent chez ~50%) | Disque T12-L1 | Éminence ilio-pubienne | Rameau de L1 | Faible fléchisseur du tronc |
| **Iliaque** | Fosse iliaque, lèvre interne de la crête iliaque | Fusionne avec le grand psoas sur le petit trochanter | Nerf fémoral | Avec le psoas (iliopsoas) : flexion de la cuisse et du rachis lombaire |

## B. Muscles de la cuisse et de la fesse

### B.1 Muscles antérieurs de la cuisse
- **Sartorius** : le plus long muscle du corps ; épine iliaque antéro-supérieure → face médiale du tibia. Nerf fémoral. Fléchit hanche et genou, adduit et fait une rotation latérale de la cuisse (position du tailleur).
- **Quadriceps fémoral** (4 chefs, tous se terminent par le tendon quadricipital → patella → tendon patellaire → tubérosité tibiale ; tous innervés par le nerf fémoral ; tous extenseurs du genou) :
  - Droit fémoral (rectus femoris) : épine iliaque antéro-inférieure ; seul chef bi-articulaire, fléchit aussi la hanche.
  - Vaste latéral, vaste médial, vaste intermédiaire : origine sur le fémur (ligne intertrochantérienne, ligne âpre, diaphyse).
- **Articulaire du genou** : détaché du vaste intermédiaire ; tracte la membrane synoviale vers le haut lors de l'extension du genou.

### B.2 Muscles médiaux (adducteurs)
| Muscle | Insertion | Innervation | Particularité |
| --- | --- | --- | --- |
| **Gracile** | Face médiale du tibia | Branche antérieure du nerf obturateur | Seul adducteur non attaché au fémur ; adducteur + fléchisseur du genou + rotateur médial de jambe |
| **Pectiné** | Ligne du petit trochanter à la ligne âpre | Nerf fémoral (fibres antérieures) + nerf obturateur (fibres postérieures) | Double innervation |
| **Long adducteur** | Tiers moyen de la ligne âpre | Branche antérieure du nerf obturateur | Puissant adducteur et rotateur médial |
| **Court adducteur** | Ligne du petit trochanter à la ligne âpre | Branche antérieure du nerf obturateur | — |
| **Grand adducteur** | Portion adductrice (branche ischio-pubienne) + portion ischio-jambière (tubérosité ischiatique) | Nerf obturateur (portion adductrice) + nerf tibial (portion ischio-jambière) | Muscle composite ; la portion ischio-jambière est un faible extenseur de hanche |

### B.3 Muscles de la région glutéale
| Muscle | Innervation | Action principale |
| --- | --- | --- |
| **Grand glutéal** | Nerf glutéal inférieur (L5, S1-S2) | Extenseur et rotateur latéral de la hanche ; aide au passage assis→debout |
| **Moyen glutéal** | Nerf glutéal supérieur (L5, S1) | Abducteur et rotateur médial ; stabilise le bassin à la marche |
| **Petit glutéal** | Nerf glutéal supérieur | Abducteur et rotateur médial |
| **Tenseur du fascia lata** | Nerf glutéal supérieur | Soutient le fémur sur le tibia en station debout |
| **Piriforme** | Rameaux ventraux S1-S2 | Rotateur latéral de la hanche |
| **Obturateur interne** | Nerf de l'obturateur interne (L5-S1) | Rotateur latéral de la hanche |
| **Jumeau supérieur** | Nerf de l'obturateur interne | Rotateur latéral |
| **Jumeau inférieur** | Nerf du carré fémoral (L4-S1) | Rotateur latéral |
| **Carré fémoral** | Nerf du carré fémoral | Rotateur latéral |
| **Obturateur externe** | Branche postérieure du nerf obturateur | Rotateur latéral |

### B.4 Muscles ischio-jambiers (postérieurs de la cuisse)
Caractéristiques communes : tous naissent de la tubérosité ischiatique, s'insèrent sur un os de la jambe, sont innervés par la partie tibiale du nerf sciatique, fléchissent le genou et étendent la hanche, et croisent 2 articulations (hanche et genou).
- **Semi-tendineux** → face médiale du tibia (derrière sartorius et gracile).
- **Semi-membraneux** → condyle médial du tibia (face postérieure).
- **Biceps fémoral** (chef long : tubérosité ischiatique, nerf tibial ; chef court : ligne âpre, nerf fibulaire commun) → tête de la fibula.

## C. Muscles de la jambe (3 compartiments)

### C.a Compartiment antérieur (extenseur)
Tous innervés par le nerf fibulaire profond, tous dorsi-fléchisseurs de la cheville. Tous naissent de la fibula sauf le tibial antérieur (né du tibia).
- **Tibial antérieur** : chef dorsi-fléchisseur ; inverse aussi le pied.
- **Long extenseur de l'hallux**, **long extenseur des orteils**, **3e fibulaire (peroneus tertius)** : dorsi-flexion ± extension des orteils ± éversion (3e fibulaire).

### C.b Compartiment latéral
- **Long fibulaire** et **court fibulaire** : nerf fibulaire superficiel ; évertent le pied (le long fibulaire est le principal éverseur).

### C.c Compartiment postérieur
- **Groupe superficiel** (nerf tibial) : **gastrocnémien** (2 chefs fémoraux) + **soléaire** (forment ensemble le triceps sural, tendon d'Achille → calcanéus, fléchisseurs plantaires puissants) ; **plantaire** (faible fléchisseur plantaire accessoire).
- **Groupe profond** (nerf tibial) : **poplité** (déverrouille le genou en rotation latérale du fémur en début de flexion) ; **long fléchisseur des orteils** ; **long fléchisseur de l'hallux** ; **tibial postérieur** (inverseur principal du pied).

## D. Muscles du pied
- **Extrinsèques** : tendons des muscles de jambe qui se prolongent dans le pied (éversion, inversion, flexion plantaire/dorsale).
- **Intrinsèques** : situés dans le pied, responsables des mouvements fins des orteils ; répartis sur le **dos** du pied (court extenseur des orteils, court extenseur de l'hallux) et la **plante** du pied (muscles intrinsèques plantaires, extrinsèques et intrinsèques combinés).

## Points à retenir
- Le quadriceps fémoral (4 chefs) est le seul groupe extenseur du genou, tous innervés par le nerf fémoral.
- Les ischio-jambiers (semi-tendineux, semi-membraneux, biceps fémoral) sont tous fléchisseurs du genou et extenseurs de la hanche, innervés par le nerf tibial (sauf le chef court du biceps fémoral, nerf fibulaire commun).
- Le compartiment antérieur de la jambe dorsi-fléchit (nerf fibulaire profond), le compartiment postérieur fléchit plantairement (nerf tibial), le compartiment latéral évertit (nerf fibulaire superficiel).
- Le triceps sural (gastrocnémien + soléaire) forme le tendon calcanéen (d'Achille).`;

export const LOWER_LIMB_MUSCLES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Muscles du membre inférieur",
    source_label: "Anatomie — Lecture 5 (membre inférieur)",
    content_fr: LOWER_LIMB_MUSCLES_COURSE,
  },
  qcm: [
    single("Quel nerf innerve le grand psoas ?", "C", "Le grand psoas est innervé directement par les rameaux ventraux de L2 à L4.", ["Le nerf fémoral", "Le nerf obturateur", "Les rameaux ventraux L2-L4", "Le nerf sciatique"]),
    single("Où s'insère l'iliopsoas ?", "A", "Le grand psoas et l'iliaque fusionnent et s'insèrent sur le petit trochanter du fémur.", ["Le petit trochanter du fémur", "Le grand trochanter du fémur", "La ligne âpre", "La tubérosité tibiale"]),
    single("Quel muscle antérieur de la cuisse est le seul bi-articulaire du quadriceps ?", "B", "Le droit fémoral (rectus femoris) est le seul chef du quadriceps à croiser à la fois la hanche et le genou, fléchissant la hanche en plus d'étendre le genou.", ["Le vaste latéral", "Le droit fémoral", "Le vaste médial", "Le vaste intermédiaire"]),
    single("Quel nerf innerve tous les chefs du quadriceps fémoral ?", "D", "Les 4 chefs du quadriceps sont innervés par le nerf fémoral.", ["Le nerf obturateur", "Le nerf sciatique", "Le nerf fibulaire", "Le nerf fémoral"]),
    single("Quel est le seul muscle adducteur de la cuisse non attaché au fémur ?", "A", "Le gracile est le seul muscle du compartiment adducteur qui ne s'attache pas au fémur ; il descend jusqu'au tibia.", ["Le gracile", "Le pectiné", "Le long adducteur", "Le grand adducteur"]),
    single("Quelle particularité présente l'innervation du pectiné ?", "B", "Le pectiné a une double innervation : ses fibres antérieures par le nerf fémoral, ses fibres postérieures par le nerf obturateur.", ["Il est innervé uniquement par le nerf obturateur", "Il a une double innervation (fémoral + obturateur)", "Il est innervé par le nerf sciatique", "Il n'a aucune innervation motrice directe"]),
    single("Quel muscle adducteur est un muscle composite avec une portion « ischio-jambière » ?", "C", "Le grand adducteur comprend une portion adductrice (nerf obturateur) et une portion ischio-jambière (nerf tibial), qui agit comme faible extenseur de hanche.", ["Le gracile", "Le long adducteur", "Le grand adducteur", "Le court adducteur"]),
    single("Quel nerf innerve le grand glutéal ?", "A", "Le grand glutéal est innervé par le nerf glutéal inférieur (L5, S1-S2).", ["Le nerf glutéal inférieur", "Le nerf glutéal supérieur", "Le nerf sciatique", "Le nerf obturateur"]),
    single("Quelle est l'action principale du moyen et du petit glutéal ?", "B", "Le moyen et le petit glutéal sont abducteurs et rotateurs médiaux de la cuisse, essentiels à la stabilisation du bassin pendant la marche.", ["Extenseurs de la hanche", "Abducteurs et rotateurs médiaux de la hanche", "Fléchisseurs du genou", "Rotateurs latéraux uniquement"]),
    multi("Quels muscles glutéaux profonds sont rotateurs latéraux de la hanche ?", ["A", "B", "C", "D"], "Le piriforme, l'obturateur interne, les jumeaux supérieur/inférieur, le carré fémoral et l'obturateur externe sont tous rotateurs latéraux de la hanche.", ["Piriforme", "Obturateur interne", "Carré fémoral", "Obturateur externe", "Moyen glutéal"]),
    single("Quelle caractéristique commune partagent tous les muscles ischio-jambiers ?", "D", "Tous les ischio-jambiers naissent de la tubérosité ischiatique, s'insèrent sur un os de la jambe, sont innervés par la partie tibiale du sciatique, et fléchissent le genou tout en étendant la hanche.", ["Ils sont tous innervés par le nerf fémoral", "Ils sont tous fléchisseurs de hanche", "Ils naissent tous du fémur", "Ils naissent tous de la tubérosité ischiatique et fléchissent le genou"]),
    single("Quel chef du biceps fémoral est innervé par le nerf fibulaire commun, à la différence des autres ischio-jambiers ?", "B", "Le chef court du biceps fémoral est innervé par la partie fibulaire commune du nerf sciatique, contrairement au reste des ischio-jambiers (partie tibiale).", ["Le chef long", "Le chef court", "Les deux chefs", "Aucun, tous sont innervés par le nerf tibial"]),
    single("Quel muscle antérieur de la jambe n'est pas issu de la fibula, contrairement aux autres muscles du compartiment antérieur ?", "A", "Le tibial antérieur naît du tibia, alors que les 3 autres muscles du compartiment antérieur (long extenseur de l'hallux, long extenseur des orteils, 3e fibulaire) naissent de la fibula.", ["Le tibial antérieur", "Le long extenseur de l'hallux", "Le long extenseur des orteils", "Le 3e fibulaire"]),
    single("Quel nerf innerve tous les muscles du compartiment antérieur de la jambe ?", "C", "Le nerf fibulaire profond innerve tous les muscles du compartiment antérieur, dorsi-fléchisseurs de la cheville.", ["Le nerf tibial", "Le nerf fibulaire superficiel", "Le nerf fibulaire profond", "Le nerf sciatique"]),
    single("Quelle est l'action principale des muscles du compartiment latéral de la jambe ?", "B", "Le long et le court fibulaire (compartiment latéral, nerf fibulaire superficiel) sont les principaux éverseurs du pied.", ["La dorsi-flexion", "L'éversion du pied", "L'inversion du pied", "L'extension du genou"]),
    single("Quels 2 muscles forment le triceps sural ?", "A", "Le gastrocnémien (2 chefs) et le soléaire forment ensemble le triceps sural, se terminant par le tendon calcanéen.", ["Gastrocnémien et soléaire", "Gastrocnémien et plantaire", "Soléaire et poplité", "Tibial postérieur et soléaire"]),
    single("Quelle est l'action du poplité ?", "C", "Le poplité déverrouille le genou en début de flexion, par rotation latérale du fémur sur le tibia fixé.", ["Fléchisseur plantaire puissant", "Extenseur du genou", "Déverrouille le genou par rotation latérale du fémur", "Inverseur du pied uniquement"]),
    single("Quel muscle profond postérieur de la jambe est le principal inverseur du pied ?", "D", "Le tibial postérieur est le principal inverseur du pied.", ["Le poplité", "Le long fléchisseur des orteils", "Le long fléchisseur de l'hallux", "Le tibial postérieur"]),
    single("Quel nerf innerve tous les muscles du groupe postérieur profond de la jambe ?", "B", "Le poplité, le long fléchisseur des orteils, le long fléchisseur de l'hallux et le tibial postérieur sont tous innervés par le nerf tibial.", ["Le nerf fibulaire profond", "Le nerf tibial", "Le nerf fibulaire superficiel", "Le nerf fémoral"]),
    single("Comment se répartissent les muscles intrinsèques du pied ?", "A", "Les muscles intrinsèques du pied se répartissent entre le dos du pied et la plante (surface plantaire).", ["Entre le dos et la plante du pied", "Uniquement sur le dos du pied", "Uniquement dans la plante du pied", "Répartis autour de la cheville uniquement"]),
  ],
  exam: { titre_fr: "Examen chronométré — Muscles du membre inférieur", duration_seconds: 1_600 },
};

export const LOWER_LIMB_MUSCLES_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quels muscles composent l'iliopsoas ?", question_en: "Which muscles make up iliopsoas?", answer_fr: "Le grand psoas et l'iliaque.", answer_en: "Psoas major and iliacus." },
  { question_fr: "Quelle est l'action de l'iliopsoas ?", question_en: "What is the action of iliopsoas?", answer_fr: "Fléchisseur principal de la cuisse à la hanche.", answer_en: "Chief flexor of the thigh at the hip." },
  { question_fr: "Quel nerf innerve l'iliaque ?", question_en: "Which nerve innervates iliacus?", answer_fr: "Le nerf fémoral.", answer_en: "The femoral nerve." },
  { question_fr: "Pourquoi appelle-t-on le sartorius le « muscle du tailleur » ?", question_en: "Why is sartorius called the \"tailor's muscle\"?", answer_fr: "Parce qu'il place le membre inférieur dans la position du tailleur assis (flexion, abduction, rotation latérale de la hanche).", answer_en: "Because it places the lower limb into the cross-legged tailor's sitting position (hip flexion, abduction, lateral rotation)." },
  { question_fr: "Quels sont les 4 chefs du quadriceps fémoral ?", question_en: "What are the 4 heads of quadriceps femoris?", answer_fr: "Droit fémoral, vaste latéral, vaste médial, vaste intermédiaire.", answer_en: "Rectus femoris, vastus lateralis, vastus medialis, vastus intermedius." },
  { question_fr: "Quel chef du quadriceps est aussi fléchisseur de hanche ?", question_en: "Which quadriceps head also flexes the hip?", answer_fr: "Le droit fémoral (seul chef bi-articulaire).", answer_en: "Rectus femoris (the only biarticular head)." },
  { question_fr: "Où s'insère le quadriceps fémoral ?", question_en: "Where does quadriceps femoris insert?", answer_fr: "Sur la tubérosité tibiale via le tendon quadricipital, la patella et le tendon patellaire.", answer_en: "On the tibial tuberosity via the quadriceps tendon, patella, and patellar tendon." },
  { question_fr: "Quel muscle est détaché du vaste intermédiaire et tracte la synoviale du genou ?", question_en: "Which muscle is detached from vastus intermedius and pulls up the knee synovium?", answer_fr: "L'articulaire du genou.", answer_en: "Articularis genus." },
  { question_fr: "Quel est le seul adducteur de la cuisse non attaché au fémur ?", question_en: "Which is the only thigh adductor not attached to the femur?", answer_fr: "Le gracile.", answer_en: "Gracilis." },
  { question_fr: "Quelle particularité présente l'innervation du pectiné ?", question_en: "What is unique about pectineus's innervation?", answer_fr: "Double innervation : nerf fémoral (fibres antérieures) et nerf obturateur (fibres postérieures).", answer_en: "Dual innervation: femoral nerve (anterior fibers) and obturator nerve (posterior fibers)." },
  { question_fr: "Quelles sont les deux portions du grand adducteur ?", question_en: "What are the two parts of adductor magnus?", answer_fr: "La portion adductrice et la portion ischio-jambière.", answer_en: "The adductor part and the hamstring part." },
  { question_fr: "Quel nerf innerve la portion ischio-jambière du grand adducteur ?", question_en: "Which nerve innervates the hamstring part of adductor magnus?", answer_fr: "La partie tibiale du nerf sciatique.", answer_en: "The tibial part of the sciatic nerve." },
  { question_fr: "Quel nerf innerve le grand glutéal ?", question_en: "Which nerve innervates gluteus maximus?", answer_fr: "Le nerf glutéal inférieur.", answer_en: "The inferior gluteal nerve." },
  { question_fr: "Quelle est l'action du grand glutéal ?", question_en: "What is the action of gluteus maximus?", answer_fr: "Extenseur et rotateur latéral de la hanche.", answer_en: "Extensor and lateral rotator of the hip." },
  { question_fr: "Quel nerf innerve le moyen et le petit glutéal ?", question_en: "Which nerve innervates gluteus medius and minimus?", answer_fr: "Le nerf glutéal supérieur.", answer_en: "The superior gluteal nerve." },
  { question_fr: "Quelle est l'action du moyen glutéal pendant la marche ?", question_en: "What is gluteus medius's action during walking?", answer_fr: "Il stabilise le bassin (abducteur et rotateur médial de hanche).", answer_en: "It stabilizes the pelvis (hip abductor and medial rotator)." },
  { question_fr: "Quels muscles glutéaux profonds sont tous rotateurs latéraux de la hanche ?", question_en: "Which deep gluteal muscles are all lateral rotators of the hip?", answer_fr: "Piriforme, obturateur interne, jumeaux supérieur/inférieur, carré fémoral, obturateur externe.", answer_en: "Piriformis, obturator internus, gemelli superior/inferior, quadratus femoris, obturator externus." },
  { question_fr: "D'où naissent tous les muscles ischio-jambiers ?", question_en: "Where do all hamstring muscles originate?", answer_fr: "De la tubérosité ischiatique.", answer_en: "From the ischial tuberosity." },
  { question_fr: "Quel nerf innerve les ischio-jambiers (sauf le chef court du biceps fémoral) ?", question_en: "Which nerve innervates the hamstrings (except biceps femoris short head)?", answer_fr: "La partie tibiale du nerf sciatique.", answer_en: "The tibial part of the sciatic nerve." },
  { question_fr: "Quel nerf innerve le chef court du biceps fémoral ?", question_en: "Which nerve innervates the short head of biceps femoris?", answer_fr: "La partie fibulaire commune du nerf sciatique.", answer_en: "The common fibular part of the sciatic nerve." },
  { question_fr: "Où s'insère le semi-tendineux ?", question_en: "Where does semitendinosus insert?", answer_fr: "Sur la face médiale du tibia, derrière le sartorius et le gracile.", answer_en: "On the medial surface of the tibia, behind sartorius and gracilis." },
  { question_fr: "Quel muscle antérieur de la jambe naît du tibia (et non de la fibula) ?", question_en: "Which anterior leg muscle originates from the tibia (not the fibula)?", answer_fr: "Le tibial antérieur.", answer_en: "Tibialis anterior." },
  { question_fr: "Quel nerf innerve tous les muscles du compartiment antérieur de la jambe ?", question_en: "Which nerve innervates all anterior compartment leg muscles?", answer_fr: "Le nerf fibulaire profond.", answer_en: "The deep fibular (peroneal) nerve." },
  { question_fr: "Quel muscle est le principal évertisseur du pied ?", question_en: "Which muscle is the chief evertor of the foot?", answer_fr: "Le long fibulaire (long péronier).", answer_en: "Fibularis (peroneus) longus." },
  { question_fr: "Quels muscles forment le triceps sural ?", question_en: "Which muscles form the triceps surae?", answer_fr: "Le gastrocnémien et le soléaire.", answer_en: "Gastrocnemius and soleus." },
  { question_fr: "Où s'insère le tendon calcanéen (d'Achille) ?", question_en: "Where does the calcaneal (Achilles) tendon insert?", answer_fr: "Sur la face postérieure du calcanéus.", answer_en: "On the posterior surface of the calcaneus." },
  { question_fr: "Quelle est l'action du muscle poplité ?", question_en: "What is the action of popliteus?", answer_fr: "Il déverrouille le genou verrouillé par rotation latérale du fémur en début de flexion.", answer_en: "It unlocks the locked knee by laterally rotating the femur at the start of flexion." },
  { question_fr: "Quel muscle profond de la jambe est le principal inverseur du pied ?", question_en: "Which deep leg muscle is the chief invertor of the foot?", answer_fr: "Le tibial postérieur.", answer_en: "Tibialis posterior." },
  { question_fr: "Quel nerf innerve tous les muscles du groupe postérieur profond de la jambe ?", question_en: "Which nerve innervates all deep posterior compartment leg muscles?", answer_fr: "Le nerf tibial.", answer_en: "The tibial nerve." },
  { question_fr: "Comment se divisent les muscles du pied selon leur origine ?", question_en: "How are foot muscles divided based on their origin?", answer_fr: "En muscles extrinsèques (originaires de la jambe) et intrinsèques (situés dans le pied).", answer_en: "Into extrinsic muscles (originating in the leg) and intrinsic muscles (located within the foot)." },
];
