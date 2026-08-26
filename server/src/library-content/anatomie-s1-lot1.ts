import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const GENERAL_ANATOMY_COURSE = `# Anatomie générale — Lecture 1

## 1. Définition et branches de l'anatomie
- L'**anatomie** est la science qui étudie la structure du corps, du niveau macroscopique au niveau microscopique. Le terme vient du grec *anatome*, « couper, disséquer » : la dissection de cadavres a longtemps été la méthode de référence pour comprendre les structures et fonctions du corps humain.
- Deux grands types d'anatomie :
  - **Anatomie macroscopique (gross anatomy)** : étude des structures visibles à l'œil nu (organes externes et internes).
  - **Anatomie microscopique** : étude des structures fines (tissus et cellules) — se subdivise en **cytologie** (structure et fonction des cellules) et **histologie** (organisation des tissus biologiques).
- L'anatomie macroscopique se subdivise elle-même en trois approches :
  - **Anatomie régionale** : étudie une région précise du corps (tête, thorax...) et la manière dont les différents systèmes y coopèrent.
  - **Anatomie systémique** : étudie ensemble toutes les structures formant un système donné (respiratoire, nerveux...) — un système regroupe des organes apparentés partageant une fonction commune.
  - **Anatomie de surface (anatomie superficielle)** : étude des repères anatomiques externes du corps, visibles sans dissection.

## 2. Position anatomique et positions du corps
- L'anatomie est une science précise grâce à une terminologie universellement admise pour décrire les structures et leur localisation.
- **Position anatomique de référence** : corps debout, yeux dirigés droit devant, membres supérieurs pendant le long du corps avec les paumes tournées vers l'avant et les doigts pointant vers le bas, membres inférieurs parallèles et pieds à plat au sol pointant vers l'avant.
- Autres positions du corps :
  - **Décubitus dorsal (supine)** : sur le dos, face tournée vers le haut.
  - **Décubitus ventral (prone)** : sur le ventre, face tournée vers le bas.
  - **Position de lithotomie** : décubitus dorsal, fesses au bord de la table, hanches et genoux semi-fléchis, cuisses en abduction.

## 3. Plans anatomiques du corps
Les plans anatomiques sont des plans géométriques théoriques qui divisent le corps en sections :
- **Plan sagittal** (latéral, plan Y-Z) : divise le corps en côtés gauche et droit. Le **plan sagittal médian (médiosagittal)** passe par le milieu du corps ; tout autre plan sagittal lui est parallèle.
- **Plan coronal (frontal, plan Y-X)** : divise le corps en portions antérieure et postérieure (dorsale et ventrale).
- **Plan transversal (axial, plan X-Z)** : plan horizontal parallèle au sol, divise le corps en portions supérieure et inférieure.

## 4. Termes descriptifs spécifiques aux membres
- **Proximal** : proche du tronc ; **distal** : éloigné du tronc.
- **Radial** : vers le bord externe (latéral) du membre supérieur ; **ulnaire** : vers le bord interne (médial) du membre supérieur.
- **Tibial** : vers le bord interne du membre inférieur ; **fibulaire (péronier)** : vers le bord externe du membre inférieur.
- **Face palmaire (volaire)** : vers la paume de la main ; **face plantaire** : vers la plante du pied.

## 5. Mouvements articulaires
- **Flexion** : diminue l'angle entre deux segments corporels ; **extension** : augmente cet angle.
- **Abduction** : mouvement qui éloigne de la ligne médiane ; **adduction** : mouvement qui rapproche de la ligne médiane.
- **Rotation médiale (interne)** : rotation vers la ligne médiane ; **rotation latérale (externe)** : rotation à l'opposé de la ligne médiane.
- **Pronation / supination** : mouvements de rotation de l'avant-bras/main autour de leur axe longitudinal. Avec le coude et l'épaule immobiles, tourner la paume vers le haut (position supine) = **supination** ; tourner la paume vers le bas (position prone) = **pronation**. Ces termes s'appliquent aussi au corps entier en décubitus.
- **Circumduction** : mouvement conique d'un membre autour de l'articulation qui le contrôle, combinant flexion/extension/abduction/adduction.

## 6. Terminologie descriptive des reliefs osseux
| Terme | Définition |
| --- | --- |
| Processus | Saillie osseuse |
| Éminence | Projection osseuse, généralement moins marquée qu'un processus |
| Épine | Processus plus long, fin et pointu qu'une éminence (ex. épines vertébrales, servant de repère pour identifier les vertèbres) |
| Tubérosité | Éminence large, rugueuse, de forme variable — souvent site d'insertion tendineuse/ligamentaire |
| Tubercule | Petite éminence rugueuse, souvent site d'insertion tendineuse/ligamentaire |
| Trochanter | Deux processus larges, saillants et rugueux du fémur (grand et petit trochanter) |
| Malléole | Protubérance arrondie adjacente à la cheville (malléole latérale et médiale) |
| Articulation | Zone de contact entre os adjacents |
| Condyle | Processus articulaire arrondi |
| Épicondyle | Projection non articulaire adjacente à un condyle |
| Tête | Extrémité arrondie, articulaire, d'un os |
| Diaphyse (corps) | Portion longue et rectiligne entre les extrémités d'un os long |
| Épiphyse | Portion terminale élargie d'un os long, destinée à l'articulation |
| Col | Segment osseux entre la tête et la diaphyse |
| Crête | Ligne osseuse saillante, fine et tranchante, souvent entre deux masses musculaires |
| Ligne | Surface linéaire surélevée, moins marquée qu'une crête |
| Fosse | Dépression large et peu profonde |
| Fovéa | Dépression punctiforme, plus petite qu'une fosse |
| Gouttière (groove) | Sillon long et étroit |
| Sillon (sulcus) | Gouttière large et longue |
| Fontanelle | Espace membraneux entre les os du crâne du nourrisson |
| Foramen | Orifice traversant un os, passage pour vaisseaux/nerfs |
| Canal | Tunnel osseux prolongé (foramen étendu) |
| Méat | Canal court (ex. méat acoustique externe) |
| Sinus | Cavité au sein d'un os crânien |
| Alvéole | Logette dentaire |

## 7. Terminologie descriptive des vaisseaux, nerfs et tissus mous
- Une terminologie spécifique est également utilisée pour décrire les vaisseaux sanguins et les structures nerveuses associées (trajets, branches, anastomoses).
- **Fascia** : bande ou feuillet de tissu conjonctif, principalement collagénique, situé sous la peau, qui attache, stabilise, enveloppe et sépare les muscles et les autres organes internes.
- Une terminologie propre décrit également les muscles (leur forme, leur disposition en chefs/faisceaux, leur mode d'insertion).

## Points à retenir
- L'anatomie macroscopique se divise en anatomie régionale, systémique et de surface ; l'anatomie microscopique regroupe cytologie et histologie.
- La position anatomique de référence (debout, paumes vers l'avant) est le point de départ de toute description anatomique.
- Les trois plans de référence (sagittal, coronal, transversal) permettent de localiser toute structure dans l'espace.
- Proximal/distal, radial/ulnaire, tibial/fibulaire sont des termes directionnels propres aux membres ; pronation/supination ne doivent pas être confondues avec la rotation médiale/latérale.
- Une terminologie standardisée décrit aussi les reliefs osseux (tubérosité, tubercule, fosse, foramen...), les vaisseaux, les nerfs et les fascias.`;

export const GENERAL_ANATOMY_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Anatomie générale",
    source_label: "Anatomie — UMFT Timisoara, Lecture 1",
    content_fr: GENERAL_ANATOMY_COURSE,
  },
  qcm: [
    single("Que signifie étymologiquement le mot « anatomie » ?", "B", "Le terme vient du grec anatome, signifiant « couper » (dissection).", ["Étudier la vie", "Couper, disséquer", "Mesurer le corps", "Observer sans toucher"]),
    single("Quelle branche de l'anatomie macroscopique étudie les structures visibles sans dissection ?", "C", "L'anatomie de surface (superficielle) étudie les repères anatomiques externes visibles à l'œil nu, sans dissection.", ["L'anatomie régionale", "L'anatomie systémique", "L'anatomie de surface", "L'histologie"]),
    single("Quelle est la différence entre cytologie et histologie ?", "A", "La cytologie étudie la structure et la fonction des cellules ; l'histologie étudie l'organisation des tissus biologiques.", ["La cytologie étudie les cellules, l'histologie les tissus", "La cytologie étudie les tissus, l'histologie les cellules", "Ce sont des synonymes stricts", "La cytologie est une branche de la physiologie, pas de l'anatomie"]),
    single("Décrivez la position anatomique de référence.", "B", "Corps debout, yeux droit devant, membres supérieurs pendants avec paumes vers l'avant, membres inférieurs parallèles et pieds à plat.", ["Décubitus dorsal, bras croisés", "Debout, paumes tournées vers l'avant, pieds parallèles à plat au sol", "Décubitus ventral, bras le long du corps", "Position assise, mains sur les cuisses"]),
    single("Quelle position correspond au décubitus dorsal ?", "A", "Le décubitus dorsal (supine) : la personne est allongée sur le dos, face tournée vers le haut.", ["Allongé sur le dos, face vers le haut", "Allongé sur le ventre, face vers le bas", "Debout en position anatomique", "Assis, hanches fléchies à 90°"]),
    single("Quel plan anatomique divise le corps en portions gauche et droite ?", "B", "Le plan sagittal (latéral) divise le corps en côtés gauche (sinistre) et droit (dextre).", ["Le plan coronal", "Le plan sagittal", "Le plan transversal", "Le plan axial horizontal seul"]),
    single("Quel plan anatomique divise le corps en portions antérieure et postérieure ?", "C", "Le plan coronal (frontal) sépare les portions ventrale (antérieure) et dorsale (postérieure) du corps.", ["Le plan sagittal", "Le plan transversal", "Le plan coronal", "Le plan médian seul"]),
    single("Le plan transversal (axial) divise le corps en quelles portions ?", "A", "Le plan transversal, horizontal, divise le corps en portions supérieure et inférieure.", ["Supérieure et inférieure", "Gauche et droite", "Antérieure et postérieure", "Interne et externe"]),
    single("Dans un membre, que signifie le terme « proximal » ?", "B", "Proximal signifie proche du tronc ; distal signifie éloigné du tronc.", ["Éloigné du tronc", "Proche du tronc", "Vers la ligne médiane", "Vers la face palmaire"]),
    multi("Parmi ces termes, lesquels décrivent le bord externe (latéral) d'un membre ?", ["A", "C"], "Radial (membre supérieur) et fibulaire/péronier (membre inférieur) désignent tous deux le bord externe du membre correspondant.", ["Radial", "Ulnaire", "Fibulaire", "Tibial"]),
    single("Quel terme désigne un mouvement qui diminue l'angle entre deux segments corporels ?", "A", "La flexion diminue l'angle entre deux segments ; l'extension l'augmente.", ["La flexion", "L'extension", "L'abduction", "La circumduction"]),
    single("Quelle est la différence entre abduction et adduction ?", "C", "L'abduction éloigne de la ligne médiane ; l'adduction rapproche de la ligne médiane.", ["Ce sont des synonymes", "L'abduction rapproche, l'adduction éloigne", "L'abduction éloigne de la ligne médiane, l'adduction en rapproche", "Elles ne concernent que le membre supérieur"]),
    single("Comment obtient-on un mouvement de supination de la main ?", "B", "En gardant l'épaule et le coude immobiles, tourner la paume vers le haut (position supine) réalise une supination.", ["En tournant la paume vers le bas", "En tournant la paume vers le haut", "En fléchissant le poignet", "En fléchissant le coude"]),
    single("Qu'est-ce que la circumduction ?", "A", "La circumduction est un mouvement conique d'un membre autour de l'articulation qui le contrôle, combinant flexion, extension, abduction et adduction.", ["Un mouvement conique combinant flexion/extension/abduction/adduction", "Une rotation pure autour d'un axe longitudinal", "Un synonyme de pronation", "Un mouvement propre uniquement à la hanche"]),
    single("Que désigne le terme « tubérosité » en anatomie osseuse ?", "B", "Une tubérosité est une éminence large et rugueuse de forme variable, souvent site d'insertion tendineuse ou ligamentaire.", ["Une petite dépression punctiforme", "Une éminence large et rugueuse, site d'insertion tendineuse/ligamentaire", "Un orifice traversant l'os", "Un canal osseux court"]),
    single("Quelle structure osseuse correspond à un « foramen » ?", "C", "Le foramen est un orifice traversant un os, servant généralement de passage pour des vaisseaux ou des nerfs.", ["Une dépression large et peu profonde", "Une saillie osseuse pointue", "Un orifice traversant l'os, passage vasculo-nerveux", "Un espace membraneux du crâne du nourrisson"]),
    single("Quelle est la différence entre un condyle et un épicondyle ?", "A", "Le condyle est un processus articulaire arrondi ; l'épicondyle est une projection non articulaire adjacente au condyle.", ["Le condyle est articulaire, l'épicondyle ne l'est pas", "L'épicondyle est articulaire, le condyle ne l'est pas", "Ce sont des synonymes", "Le condyle ne concerne que le crâne"]),
    single("Qu'est-ce qu'une fontanelle ?", "B", "Une fontanelle est un espace membraneux non ossifié entre les os du crâne, présent chez le nourrisson.", ["Une petite dépression cartilagineuse", "Un espace membraneux entre les os du crâne du nourrisson", "Un type de suture crânienne définitive", "Un sillon vasculaire du crâne"]),
    single("Qu'est-ce qu'un fascia ?", "C", "Un fascia est une bande ou un feuillet de tissu conjonctif (principalement collagénique) qui attache, stabilise, enveloppe et sépare les muscles et organes internes.", ["Une membrane synoviale articulaire", "Un type de tendon spécialisé", "Un tissu conjonctif qui enveloppe et sépare muscles et organes", "Un repli péritonéal"]),
    single("Quelle branche de l'anatomie macroscopique étudie une région corporelle précise et la coopération des systèmes qui s'y trouvent ?", "A", "L'anatomie régionale se concentre sur une région précise (tête, thorax...) et sur la manière dont différents systèmes y fonctionnent ensemble.", ["L'anatomie régionale", "L'anatomie systémique", "L'anatomie de surface", "La cytologie"]),
  ],
  exam: { titre_fr: "Examen chronométré — Anatomie générale", duration_seconds: 1_600 },
};

export const GENERAL_ANATOMY_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "D'où vient étymologiquement le mot « anatomie » ?", question_en: "Where does the word \"anatomy\" etymologically come from?", answer_fr: "Du grec anatome, signifiant « couper, disséquer ».", answer_en: "From the Greek anatome, meaning \"to cut up\"." },
  { question_fr: "Quels sont les deux grands types d'anatomie ?", question_en: "What are the two major types of anatomy?", answer_fr: "L'anatomie macroscopique (gross anatomy) et l'anatomie microscopique.", answer_en: "Gross (macroscopic) anatomy and microscopic anatomy." },
  { question_fr: "Que désigne l'anatomie macroscopique ?", question_en: "What does gross anatomy refer to?", answer_fr: "L'étude des structures anatomiques visibles à l'œil nu.", answer_en: "The study of anatomical structures visible to the naked eye." },
  { question_fr: "Quelles sont les deux disciplines de l'anatomie microscopique ?", question_en: "What are the two disciplines of microscopic anatomy?", answer_fr: "La cytologie (structure/fonction des cellules) et l'histologie (organisation des tissus).", answer_en: "Cytology (cell structure/function) and histology (tissue organization)." },
  { question_fr: "Que désigne l'anatomie régionale ?", question_en: "What does regional anatomy refer to?", answer_fr: "L'étude d'une région corporelle précise et de la coopération des systèmes dans cette région.", answer_en: "The study of a specific body region and how systems there work together." },
  { question_fr: "Que désigne l'anatomie systémique ?", question_en: "What does systemic anatomy refer to?", answer_fr: "L'étude conjointe de toutes les structures formant un système donné (ex. système respiratoire).", answer_en: "The joint study of all structures forming a given system (e.g. respiratory system)." },
  { question_fr: "Que désigne l'anatomie de surface ?", question_en: "What does surface anatomy refer to?", answer_fr: "L'étude des repères anatomiques externes visibles sans dissection.", answer_en: "The study of external anatomical landmarks visible without dissection." },
  { question_fr: "Décrivez la position anatomique de référence.", question_en: "Describe the standard anatomical position.", answer_fr: "Debout, yeux droit devant, membres supérieurs pendants paumes vers l'avant, pieds parallèles à plat au sol.", answer_en: "Standing, eyes straight ahead, arms hanging with palms forward, feet parallel and flat on the floor." },
  { question_fr: "Qu'est-ce que le décubitus dorsal (supine) ?", question_en: "What is the supine position?", answer_fr: "La personne est allongée sur le dos, face tournée vers le haut.", answer_en: "The person lies on the back, face directed upward." },
  { question_fr: "Qu'est-ce que le décubitus ventral (prone) ?", question_en: "What is the prone position?", answer_fr: "La personne est allongée sur l'abdomen, face tournée vers le bas.", answer_en: "The person lies on the abdomen, face directed downward." },
  { question_fr: "Décrivez la position de lithotomie.", question_en: "Describe the lithotomy position.", answer_fr: "Décubitus dorsal, fesses au bord de la table, hanches et genoux semi-fléchis, cuisses en abduction.", answer_en: "Supine, buttocks at the edge of the table, hips and knees semiflexed, thighs abducted." },
  { question_fr: "Que divise le plan sagittal ?", question_en: "What does the sagittal plane divide?", answer_fr: "Le corps en côtés gauche (sinistre) et droit (dextre).", answer_en: "The body into left (sinister) and right (dexter) sides." },
  { question_fr: "Qu'est-ce que le plan médiosagittal ?", question_en: "What is the midsagittal plane?", answer_fr: "Le plan sagittal passant par le milieu du corps ; tous les autres plans sagittaux lui sont parallèles.", answer_en: "The sagittal plane through the midline of the body; all other sagittal planes run parallel to it." },
  { question_fr: "Que divise le plan coronal (frontal) ?", question_en: "What does the coronal (frontal) plane divide?", answer_fr: "Le corps en portions dorsale (postérieure) et ventrale (antérieure).", answer_en: "The body into dorsal (posterior) and ventral (anterior) portions." },
  { question_fr: "Que divise le plan transversal (axial) ?", question_en: "What does the transverse (axial) plane divide?", answer_fr: "Le corps en portions supérieure et inférieure ; il est horizontal, parallèle au sol.", answer_en: "The body into superior and inferior portions; it is horizontal, parallel to the ground." },
  { question_fr: "Que signifie « proximal » ?", question_en: "What does \"proximal\" mean?", answer_fr: "Proche du tronc.", answer_en: "Near the trunk." },
  { question_fr: "Que signifie « distal » ?", question_en: "What does \"distal\" mean?", answer_fr: "Éloigné du tronc.", answer_en: "Away from the trunk." },
  { question_fr: "Que signifie « radial » pour le membre supérieur ?", question_en: "What does \"radial\" mean for the upper limb?", answer_fr: "Vers le bord externe (latéral) du membre supérieur.", answer_en: "Toward the outer (lateral) border of the upper limb." },
  { question_fr: "Que signifie « ulnaire » pour le membre supérieur ?", question_en: "What does \"ulnar\" mean for the upper limb?", answer_fr: "Vers le bord interne (médial) du membre supérieur.", answer_en: "Toward the inner (medial) border of the upper limb." },
  { question_fr: "Que signifie « tibial » pour le membre inférieur ?", question_en: "What does \"tibial\" mean for the lower limb?", answer_fr: "Vers le bord interne du membre inférieur.", answer_en: "Toward the inner border of the lower limb." },
  { question_fr: "Que signifie « fibulaire » pour le membre inférieur ?", question_en: "What does \"fibular\" mean for the lower limb?", answer_fr: "Vers le bord externe du membre inférieur.", answer_en: "Toward the outer border of the lower limb." },
  { question_fr: "Quelle est la différence entre face palmaire et face plantaire ?", question_en: "What is the difference between the palmar and plantar surfaces?", answer_fr: "La face palmaire est vers la paume de la main, la face plantaire vers la plante du pied.", answer_en: "The palmar surface faces the palm of the hand, the plantar surface faces the sole of the foot." },
  { question_fr: "Définissez la flexion.", question_en: "Define flexion.", answer_fr: "Mouvement qui diminue l'angle entre deux segments corporels.", answer_en: "A movement that decreases the angle between two body parts." },
  { question_fr: "Définissez l'extension.", question_en: "Define extension.", answer_fr: "Mouvement qui augmente l'angle entre deux segments corporels.", answer_en: "A movement that increases the angle between two body parts." },
  { question_fr: "Définissez l'abduction.", question_en: "Define abduction.", answer_fr: "Mouvement qui éloigne un segment de la ligne médiane.", answer_en: "A movement away from the midline." },
  { question_fr: "Définissez l'adduction.", question_en: "Define adduction.", answer_fr: "Mouvement qui rapproche un segment de la ligne médiane.", answer_en: "A movement toward the midline." },
  { question_fr: "Définissez la rotation médiale.", question_en: "Define medial rotation.", answer_fr: "Mouvement rotatoire vers la ligne médiane, aussi appelé rotation interne.", answer_en: "A rotational movement toward the midline, also called internal rotation." },
  { question_fr: "Définissez la rotation latérale.", question_en: "Define lateral rotation.", answer_fr: "Mouvement rotatoire à l'opposé de la ligne médiane, aussi appelé rotation externe.", answer_en: "A rotational movement away from the midline, also called external rotation." },
  { question_fr: "Comment réalise-t-on une supination de la main ?", question_en: "How is supination of the hand performed?", answer_fr: "En tournant la paume vers le haut, épaule et coude immobiles.", answer_en: "By turning the palm upward, with the shoulder and elbow held still." },
  { question_fr: "Comment réalise-t-on une pronation de la main ?", question_en: "How is pronation of the hand performed?", answer_fr: "En tournant la paume vers le bas, épaule et coude immobiles.", answer_en: "By turning the palm downward, with the shoulder and elbow held still." },
  { question_fr: "Définissez la circumduction.", question_en: "Define circumduction.", answer_fr: "Mouvement conique d'un membre combinant flexion, extension, abduction et adduction.", answer_en: "A conical movement of a limb combining flexion, extension, abduction, and adduction." },
  { question_fr: "Qu'est-ce qu'un processus en anatomie osseuse ?", question_en: "What is a process in bone anatomy?", answer_fr: "Une saillie osseuse.", answer_en: "A bony prominence." },
  { question_fr: "Qu'est-ce qu'une tubérosité ?", question_en: "What is a tuberosity?", answer_fr: "Une éminence large et rugueuse, souvent site d'insertion tendineuse/ligamentaire.", answer_en: "A large, rugose eminence, often a site of tendon/ligament attachment." },
  { question_fr: "Qu'est-ce qu'un tubercule ?", question_en: "What is a tubercle?", answer_fr: "Une petite éminence rugueuse, souvent site d'insertion tendineuse/ligamentaire.", answer_en: "A small, rugose eminence, often a site of tendon/ligament attachment." },
  { question_fr: "Qu'est-ce qu'un trochanter ?", question_en: "What is a trochanter?", answer_fr: "L'un des deux processus larges et rugueux du fémur (grand et petit trochanter).", answer_en: "One of two large, rugose processes of the femur (greater and lesser trochanter)." },
  { question_fr: "Qu'est-ce qu'une malléole ?", question_en: "What is a malleolus?", answer_fr: "Une protubérance arrondie adjacente à l'articulation de la cheville.", answer_en: "A rounded protuberance adjacent to the ankle joint." },
  { question_fr: "Qu'est-ce qu'un condyle ?", question_en: "What is a condyle?", answer_fr: "Un processus articulaire arrondi.", answer_en: "A rounded articular process." },
  { question_fr: "Qu'est-ce qu'un épicondyle ?", question_en: "What is an epicondyle?", answer_fr: "Une projection non articulaire adjacente à un condyle.", answer_en: "A non-articular projection adjacent to a condyle." },
  { question_fr: "Que désigne la diaphyse d'un os long ?", question_en: "What does the diaphysis of a long bone refer to?", answer_fr: "La portion longue et droite entre les extrémités d'un os long.", answer_en: "The long, straight section between the ends of a long bone." },
  { question_fr: "Que désigne l'épiphyse d'un os long ?", question_en: "What does the epiphysis of a long bone refer to?", answer_fr: "La portion terminale élargie, destinée à l'articulation.", answer_en: "The expanded end portion, intended for articulation." },
  { question_fr: "Qu'est-ce qu'une fosse en anatomie osseuse ?", question_en: "What is a fossa in bone anatomy?", answer_fr: "Une dépression large et peu profonde.", answer_en: "A broad, shallow depressed area." },
  { question_fr: "Qu'est-ce qu'une fovéa ?", question_en: "What is a fovea?", answer_fr: "Une dépression punctiforme, plus petite qu'une fosse.", answer_en: "A pit-like depression, smaller than a fossa." },
  { question_fr: "Qu'est-ce qu'un foramen ?", question_en: "What is a foramen?", answer_fr: "Un orifice traversant un os, généralement un passage pour vaisseaux/nerfs.", answer_en: "An opening through a bone, usually a passage for vessels/nerves." },
  { question_fr: "Qu'est-ce qu'un méat en anatomie osseuse ?", question_en: "What is a meatus in bone anatomy?", answer_fr: "Un canal court, comme le méat acoustique externe.", answer_en: "A short canal, such as the external auditory meatus." },
  { question_fr: "Qu'est-ce qu'une fontanelle ?", question_en: "What is a fontanelle?", answer_fr: "Un espace membraneux entre les os du crâne du nourrisson.", answer_en: "A membranous space between the skull bones of an infant." },
  { question_fr: "Qu'est-ce qu'un fascia ?", question_en: "What is a fascia?", answer_fr: "Une bande/feuillet de tissu conjonctif collagénique qui attache, stabilise et sépare muscles et organes.", answer_en: "A band/sheet of collagenous connective tissue that attaches, stabilizes, and separates muscles and organs." },
  { question_fr: "Qu'est-ce qu'une crête osseuse ?", question_en: "What is a bony crest?", answer_fr: "Une ligne osseuse saillante, fine et tranchante, souvent entre deux masses musculaires.", answer_en: "A prominent, thin, sharp bony ridge, often formed between adjacent muscle masses." },
  { question_fr: "Qu'est-ce qu'un sillon (sulcus) ?", question_en: "What is a sulcus?", answer_fr: "Une gouttière longue et large.", answer_en: "A long, wide groove." },
];


const EMBRYOLOGY_COURSE = `# Anatomie (Embryologie humaine générale) — Lecture 2

## 1. Généralités
- L'**embryologie** est la science de la croissance et du développement d'un organisme avant la naissance ; elle débute avec la fécondation de l'ovule et culmine avec la naissance. Le terme vient du grec *embryo* (« qui se développe à l'intérieur ») et *logos* (« science »).
- Le développement de l'individu de la fécondation à la naissance est le **développement prénatal** ; le développement se poursuit après la naissance jusqu'à environ 25 ans, période dite de **développement postnatal**, elle-même divisée en 5 périodes : nourrisson (naissance-1 an), enfance (2-12 ans), puberté (13-16 ans), adolescence (17-18 ans), âge adulte (19-25 ans).
- Le développement prénatal se divise en trois périodes :
  1. **Période pré-embryonnaire** : de la fécondation à la fin de la 2ᵉ semaine — fécondation, transport du zygote dans la trompe utérine, divisions mitotiques/segmentation, implantation, formation des tissus embryonnaires primordiaux.
  2. **Période embryonnaire** : de la 3ᵉ à la 8ᵉ semaine — différenciation des feuillets germinatifs en organes spécifiques, formation du placenta, du cordon ombilical et des membranes extra-embryonnaires.
  3. **Période fœtale** : de la 9ᵉ semaine à la naissance — croissance et spécialisation intenses des structures corporelles.
- Segmentation + gastrulation + organogenèse = **embryogenèse**.

## 2. Appareils reproducteurs
- **Appareil reproducteur masculin** : structure primaire = **testicule** ; structures secondaires = scrotum, épididyme, canal déférent, vésicules séminales, urètre, prostate, glandes bulbo-urétrales, pénis. Les voies génitales masculines (efférents, épididyme, canal déférent, canal éjaculateur, urètre) conduisent les spermatozoïdes du testicule à l'urètre.
- **Sperme (liquide séminal)** : contient les spermatozoïdes produits par les tubes séminifères + sécrétions des vésicules séminales, de la prostate et des glandes bulbo-urétrales. Numération moyenne : **100 millions/mL**. Contribution des glandes : vésicules séminales 60 %, prostate 30 %, testicules 5 %, glandes bulbo-urétrales 5 %.
- **Appareil reproducteur féminin** : structure primaire = **ovaire** (produit l'ovule, sécrète les hormones du cycle menstruel) ; structures secondaires = trompes utérines, utérus, vagin, vulve, glandes vestibulaires. Les voies génitales féminines (trompe utérine, utérus, vagin) sont le site de la fécondation et du développement embryonnaire.

## 3. Cycle ovarien et cycle menstruel
- **Ovulation** : au cours de chaque cycle, un follicule ovarien mature se rompt et libère son ovule ; ce processus cyclique constitue le **cycle ovarien**, contrôlé par les hormones hypophysaires. Si la femme devient enceinte, le cycle ovarien s'interrompt temporairement.
- **Endomètre** : couche interne de l'utérus, subissant des modifications cycliques mensuelles = **cycle menstruel (cycle endométrial)**, sous l'effet des hormones ovariennes (œstrogène, progestérone), elles-mêmes contrôlées par l'hypothalamus et l'hypophyse.
- Les 4 phases du cycle menstruel :
  1. **Phase menstruelle (jours 1-4)** : les règles. Débute quand l'ovule du cycle précédent n'a pas été fécondé — la chute d'œstrogène/progestérone entraîne la desquamation de l'endomètre fonctionnel (la couche basale reste intacte). En cas de fécondation, le corps jaune puis le placenta poursuivent la sécrétion de progestérone, suspendant le cycle pendant la grossesse.
  2. **Phase proliférative/folliculaire (jours 5-14)** : coïncide avec la sécrétion d'œstrogène par les follicules en maturation ; l'endomètre fonctionnel se reconstitue.
  3. **Phase sécrétoire/lutéale (jours 15-25)** : coïncide avec la sécrétion de progestérone par le corps jaune, préparant l'endomètre à une éventuelle implantation.
  4. **Phase prémenstruelle (jours 26-28)** : douleurs spasmodiques et spotting fréquents, liés à l'ischémie de la paroi utérine consécutive à la chute de progestérone.
- **Contrôle hormonal** : l'hypothalamus sécrète la **GnRH** → stimule l'hypophyse antérieure → sécrétion de **FSH** et **LH** → la FSH fait maturer un/des follicule(s) (secondaire → follicule de De Graaf) → les cellules de la granulosa sécrètent l'**œstrogène** → l'œstrogène déclenche la phase proliférative de l'endomètre (son pic précède le pic de LH) → le **pic de LH déclenche l'ovulation** → les cellules lutéales du corps jaune sécrètent la **progestérone** → la progestérone déclenche la phase sécrétoire de l'endomètre.
- Le cycle menstruel dépend donc du cycle ovarien : l'endomètre répond aux hormones sécrétées par le follicule en développement puis par le corps jaune.

## 4. Division cellulaire et gamétogenèse
- **Mitose** : division des cellules somatiques, en une seule séquence ; les cellules filles ont le même nombre de chromosomes (46) que la cellule mère et sont identiques entre elles.
- **Méiose** : division spécialisée des organes reproducteurs pour produire les gamètes, en deux séquences (méiose I et II) ; les cellules filles ont un nombre haploïde de chromosomes et ne sont pas identiques entre elles.
- **Spermatogenèse** : formation des spermatozoïdes à partir des cellules germinales primordiales (spermatogonies) dans les tubes séminifères. Les spermatogonies A sombres (cellules souches) se divisent par mitose en A sombres (réserve) et A claires ; les A claires forment des spermatogonies B, qui deviennent des spermatocytes primaires (les plus grosses cellules germinales) ; la 1ʳᵉ division méiotique donne 2 spermatocytes secondaires haploïdes ; la 2ᵉ division méiotique donne 4 spermatides haploïdes par spermatocyte primaire — 2 porteuses de 22+X et 2 de 22+Y.
- **Spermiogenèse** : transformation des spermatides en spermatozoïdes matures. Le spermatozoïde comprend une tête, un col, une pièce intermédiaire (corps) et un flagelle ; sa fonction est de transporter l'information génétique jusqu'à l'ovocyte.
- **Ovogenèse** : formation des ovocytes à partir des cellules germinales primordiales, débutant avant la naissance dans le cortex ovarien. Les ovogonies deviennent des ovocytes primaires, qui entament la 1ʳᵉ division méiotique avant la naissance — division arrêtée jusqu'à la puberté. À la puberté, 5 à 50 ovocytes primaires par cycle reprennent leur 1ʳᵉ division méiotique, achevée juste avant l'ovulation : formation d'un ovocyte secondaire (recevant la majorité du cytoplasme) et d'un premier globule polaire. L'ovocyte secondaire entame la 2ᵉ division méiotique à l'ovulation, division achevée seulement après pénétration du spermatozoïde, donnant l'**ovule** (22+X) et un second globule polaire. Au total, un ovocyte primaire donne un seul ovule et trois globules polaires.
- **Follicules ovariens** : petits sacs remplis de liquide dans l'ovaire, sécrétant les hormones du cycle menstruel. La femme naît avec 300 000 à 400 000 follicules à la puberté. Stades : follicule primordial → primaire → secondaire → follicule de De Graaf (mature).
- Après l'ovulation, la paroi du follicule rompu s'effondre et se transforme en **corps jaune** : sous l'effet de la LH, les cellules lutéales sécrètent progestérone et un peu d'œstrogène. En l'absence de grossesse, le corps jaune dure 10 à 14 jours puis dégénère en **corps blanc (albicans)**, masse de tissu fibreux.

## 5. Fécondation
- La **fécondation** a lieu quand le spermatozoïde pénètre l'ovule et que les deux jeux de matériel génétique fusionnent, formant le **zygote** (cellule diploïde unique, 46 chromosomes). Seuls les gamètes (ovule, spermatozoïde) sont haploïdes (23 chromosomes) chez l'humain.
- Étapes de la fécondation : le spermatozoïde traverse la **corona radiata** de l'ovule → pénétration de la **zone pellucide** grâce aux enzymes digestives libérées par l'acrosome (lyse de la zone pellucide et de la membrane plasmique de la tête du spermatozoïde) → passage dans l'espace périvitellin → une **réaction zonale** rend la zone pellucide imperméable aux autres spermatozoïdes → fusion des membranes plasmiques du spermatozoïde et de l'ovule → l'ovocyte achève sa 2ᵉ division méiotique (ovocyte mature + 2ᵉ globule polaire) → formation du **pronucléus féminin** (22+X) → formation du **pronucléus masculin** (le noyau du spermatozoïde gonfle, le flagelle se détache et dégénère) → **formation du zygote** : fusion des deux pronucléus, mélange des 23 chromosomes de chacun → diploïdie (46 chromosomes).
- La fécondation a lieu dans les 24 h suivant l'ovulation, dans la partie la plus dilatée de la trompe utérine, l'**ampoule**.
- Conséquences de la fécondation : détermination du sexe génétique de l'embryon, restauration du nombre diploïde de chromosomes, initiation de la segmentation.

## 6. Détermination du sexe
- Chaque gamète a un nombre haploïde de chromosomes (23) ; chaque cellule somatique a un nombre diploïde (46, en 23 paires) : 22 paires d'**autosomes** + 1 paire de **chromosomes sexuels**.
- Femme : 44 autosomes + paire homomorphe XX. Homme : 44 autosomes + paire hétéromorphe XY.
- Les spermatozoïdes sont de deux types (22+X ou 22+Y) ; les ovules sont d'un seul type (22+X). Un spermatozoïde X donne un enfant 44+XX (fille) ; un spermatozoïde Y donne un enfant 44+XY (garçon). **C'est donc le chromosome paternel qui détermine le sexe de l'enfant, pas le chromosome maternel.**

## 7. Segmentation et formation du blastocyste
- La **segmentation** est une suite de divisions mitotiques du zygote en unités plus petites (**blastomères**), sans augmentation de taille de l'ensemble.
- Les blastomères se divisent en 4, 8, puis 16 cellules jusqu'à former la **morula** (ressemblant à une mûre). Après ~72 h (3 jours) dans la trompe, la morula entre dans la cavité utérine au 4ᵉ jour.
- Les blastomères sont enveloppés par la zone pellucide et se réorganisent en deux groupes : la **masse cellulaire interne (embryoblaste)**, au centre, et la **masse cellulaire externe (trophoblaste)**, en périphérie. L'ensemble devient le **blastocyste**, dont la cavité remplie de liquide est le **blastocèle**. L'embryoblaste donnera l'embryon ; le trophoblaste nourrit l'embryon et formera une grande partie du placenta.
- Le blastocyste s'agrandit, la zone pellucide disparaît, le trophoblaste s'aplatit, l'embryoblaste devient compact et s'accole au trophoblaste en un pôle — le **pôle embryonnaire**. Le blastocyste est alors prêt pour l'implantation.

## 8. Implantation et disque didermique
- Au moment de l'implantation, la muqueuse utérine est en phase sécrétoire/progestative (sous l'effet de la progestérone du corps jaune) : glandes et artères utérines deviennent spiralées, le tissu devient succulent.
- **Implantation** : le blastocyste adhère à la couche superficielle de l'endomètre, généralement sur la paroi postérieure de l'utérus près du fundus. Elle commence vers le **6ᵉ jour** et s'achève vers le **10ᵉ-11ᵉ jour** après la fécondation. C'est par cette adhésion que l'embryon reçoit oxygène et nutriments maternels.
- Au 7ᵉ jour, le trophoblaste se différencie en deux couches : **cytotrophoblaste** (interne, mononucléé, mitotiquement actif) et **syncytiotrophoblaste** (externe, multinucléé, limites cellulaires indistinctes).
- Durant la 2ᵉ semaine, l'implantation s'achève et la masse cellulaire interne se différencie en **épiblaste (ectoderme primitif)** et **hypoblaste (endoderme primitif)**, formant le **disque embryonnaire bilaminaire**.
- **Jour 8** : une petite cavité apparaît entre épiblaste et trophoblaste = **cavité amniotique**. Des cellules du trophoblaste (cellules angiogéniques) forment le toit de cette cavité et sécrètent le liquide amniotique.
- **Jour 9** : les cellules de l'hypoblaste tapissent la cavité du blastocyste, devenue le **sac vitellin primaire** ; les cellules aplaties bordant ce sac forment la **membrane exocoelomique (de Heuser)**. Le disque bilaminaire se retrouve entre la cavité amniotique (au-dessus) et le sac vitellin primaire (en dessous).
- Les cellules du trophoblaste donnent une masse cellulaire, le **mésoderme extra-embryonnaire**, qui sépare la cavité amniotique et le sac vitellin du trophoblaste. De larges cavités s'y forment et fusionnent en un **cœlome extra-embryonnaire (cavité chorionique)** — sauf dans la partie crânienne, où le mésoderme extra-embryonnaire forme le **pédicule de connexion**.
- Le cœlome extra-embryonnaire divise le mésoderme extra-embryonnaire en deux feuillets : **somatique** (tapissant trophoblaste et amnios) et **splanchnique** (recouvrant le sac vitellin). Le mésoderme somatique + les deux couches du trophoblaste = **chorion** ; le mésoderme splanchnique + la partie extra-embryonnaire de l'ectoderme = **amnios**.

## 9. Gastrulation
- La **gastrulation**, événement caractéristique de la 3ᵉ semaine de gestation, forme les **trois feuillets germinatifs** (ectoderme, mésoderme, endoderme) qui donneront tous les tissus et organes du corps. Trois structures se forment durant cette semaine : la ligne primitive, la notochorde et le tube neural.
- La **plaque prochordale** (zone épaissie à une extrémité du disque) détermine les extrémités crâniale et caudale de l'embryon ; elle donnera le feuillet endodermique de la membrane oropharyngée (future bouche).
- **Ligne primitive** (~jour 16) : formée par prolifération des cellules ectodermiques qui migrent vers la ligne médiane et s'y accumulent, définissant la symétrie gauche/droite du corps. Les cellules de la ligne primitive s'invaginent vers l'endoderme, formant la **gouttière primitive**. Depuis le fond de cette gouttière, les cellules migrent entre endoderme et ectoderme pour former le **mésoderme intra-embryonnaire** (3ᵉ feuillet). La ligne primitive donne naissance au mésoderme intra-embryonnaire, au septum transversum et à la notochorde.
- À l'extrémité crâniale de la ligne primitive, les cellules prolifèrent pour former le **nœud primitif (nœud de Hensen)** ; une dépression y apparaît, le **blastopore (fossette primitive)**.
- Les cellules mésenchymateuses migrant du nœud primitif forment le **processus notochordal**, qui croît crânialement jusqu'à la plaque prochordale — future bouche (**membrane oropharyngée**). À l'autre extrémité, l'ectoderme fusionne directement à l'endoderme en la **membrane cloacale** (futur anus primitif).
- **Fonctions de la notochorde** : axe central de l'embryon ; induit la formation du tube neural à partir de l'ectoderme sus-jacent ; fournit la colonne centrale autour de laquelle se développeront les corps vertébraux et les disques intervertébraux.
- **Neurulation** : formation du tube neural à partir de l'ectoderme sus-jacent à la notochorde. Les cellules ectodermiques se différencient en cellules neuro-ectodermiques, qui prolifèrent pour former la **plaque neurale** (de la plaque prochordale au nœud primitif). Les bords de la plaque s'élèvent (**replis neuraux**) sous la pression du mésoderme paraxial de part et d'autre de la notochorde, formant la **gouttière neurale** ; celle-ci s'approfondit et les replis fusionnent en un **tube neural** cylindrique. La partie crâniale du tube neural s'élargit pour former l'encéphale ; la partie caudale reste tubulaire et forme la moelle spinale.
- **Subdivisions du mésoderme intra-embryonnaire** (de part et d'autre du tube neural) :
  - **Mésoderme paraxial** : condensé le long du tube neural/notochorde ; se segmente en **somitomères** (les 1ers, 1-7, en région céphalique, donnent les muscles striés de la tête/cou sans former de somites) puis en **somites** (42-44 paires, en région caudale). Chaque somite se différencie en **sclérotome** (future colonne vertébrale), **myotome** (futurs muscles) et **dermatome** (futur derme).
  - **Mésoderme intermédiaire** : forme l'essentiel de l'**appareil génito-urinaire** (reins, testicules, ovaires...).
  - **Mésoderme de la lame latérale** : se divise, sous l'effet de la formation du cœlome intra-embryonnaire, en feuillet **somatopleural (pariétal)**, contigu à l'ectoderme et contribuant à la paroi du corps, et feuillet **splanchnopleural (viscéral)**, contigu à l'endoderme et contribuant aux parois des viscères (tube digestif, appareil respiratoire).
- Le **cœlome intra-embryonnaire** naît de la fusion de multiples petites cavités du mésoderme de la lame latérale ; au 2ᵉ mois, il se divise en cavité péricardique (antérieure à la plaque prochordale), cavités péritonéales (de part et d'autre) et canaux péricardio-péritonéaux les reliant. Le mésoderme situé en avant de la cavité péricardique, le **septum transversum**, contribue au développement du foie et du diaphragme ; l'épicarde du cœur dérive du mésoderme splanchnopleural situé devant la plaque prochordale.

## Points à retenir
- Développement prénatal : période pré-embryonnaire (semaines 1-2), embryonnaire (semaines 3-8), fœtale (semaine 9-naissance) ; postnatal jusqu'à ~25 ans.
- Cycle menstruel en 4 phases (menstruelle, proliférative, sécrétoire, prémenstruelle), dépendant du cycle ovarien via l'axe hypothalamo-hypophyso-ovarien (GnRH → FSH/LH → œstrogène/progestérone).
- La méiose produit des gamètes haploïdes ; la spermatogenèse donne 4 spermatozoïdes par spermatocyte primaire, l'ovogenèse un seul ovule et trois globules polaires.
- Le sexe génétique est déterminé par le spermatozoïde (porteur de X ou de Y), non par l'ovule.
- Segmentation (zygote → morula → blastocyste) puis implantation (jours 6-11) puis gastrulation (semaine 3, formation des 3 feuillets et du tube neural via la notochorde) constituent l'embryogenèse.`;

export const EMBRYOLOGY_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Embryologie humaine générale",
    source_label: "Anatomie — UMFT Timisoara, Lecture 2",
    content_fr: EMBRYOLOGY_COURSE,
  },
  qcm: [
    single("Quelle est la définition de l'embryologie ?", "A", "L'embryologie est l'étude de la croissance et du développement d'un organisme avant la naissance, de la fécondation à la naissance.", ["L'étude du développement avant la naissance", "L'étude du développement après la naissance uniquement", "L'étude exclusive du système reproducteur adulte", "L'étude de la génétique des populations"]),
    single("Jusqu'à quel âge se poursuit le développement postnatal ?", "C", "Le développement postnatal se poursuit jusqu'à environ 25 ans.", ["10 ans", "18 ans", "25 ans", "30 ans"]),
    single("Quelle est la structure reproductrice primaire chez l'homme ?", "B", "Le testicule est la structure reproductrice primaire masculine.", ["La prostate", "Le testicule", "L'épididyme", "Le canal déférent"]),
    single("Quelle glande contribue le plus au volume du sperme ?", "A", "Les vésicules séminales contribuent à environ 60% du volume du liquide séminal.", ["Les vésicules séminales (60%)", "La prostate (60%)", "Les testicules (60%)", "Les glandes bulbo-urétrales (60%)"]),
    single("Quelle est la structure reproductrice primaire chez la femme ?", "C", "L'ovaire est la structure reproductrice primaire féminine : il produit l'ovule et sécrète les hormones du cycle.", ["L'utérus", "La trompe utérine", "L'ovaire", "Le vagin"]),
    single("Que se passe-t-il durant la phase menstruelle du cycle ?", "B", "La chute d'œstrogène/progestérone entraîne la desquamation de l'endomètre fonctionnel (les règles).", ["L'endomètre se reconstitue sous l'effet de l'œstrogène", "L'endomètre fonctionnel se desquame suite à la chute hormonale", "Le corps jaune se forme", "L'ovulation a lieu"]),
    single("Quelle hormone domine la phase sécrétoire (lutéale) du cycle menstruel ?", "A", "La progestérone, sécrétée par le corps jaune, domine la phase sécrétoire et prépare l'endomètre à l'implantation.", ["La progestérone", "La FSH", "La GnRH", "Le seul œstrogène"]),
    single("Quel événement hormonal déclenche l'ovulation ?", "C", "Le pic (surge) de LH déclenche l'ovulation.", ["Le pic de FSH", "La chute de GnRH", "Le pic de LH", "La chute d'œstrogène"]),
    single("Quelle est la différence fondamentale entre mitose et méiose ?", "B", "La mitose donne des cellules filles diploïdes identiques en une division ; la méiose donne des cellules filles haploïdes non identiques en deux divisions successives.", ["Elles sont identiques", "La mitose est diploïde/identique, la méiose haploïde/non identique", "La méiose ne concerne que les cellules somatiques", "La mitose a lieu uniquement dans les gonades"]),
    single("Combien de spermatozoïdes sont produits à partir d'un seul spermatocyte primaire ?", "C", "Un spermatocyte primaire donne 4 spermatides, qui deviennent 4 spermatozoïdes (spermiogenèse).", ["1", "2", "4", "8"]),
    single("Combien d'ovules sont produits à partir d'un seul ovocyte primaire ?", "A", "Un ovocyte primaire ne donne qu'un seul ovule (et trois globules polaires), du fait des divisions inégales du cytoplasme.", ["1", "2", "3", "4"]),
    single("Quel est le nombre moyen approximatif de follicules chez une femme au début de la puberté ?", "B", "Environ 300 000 à 400 000 follicules ovariens.", ["30 000 à 40 000", "300 000 à 400 000", "3 millions", "700 000 à 800 000"]),
    single("Que devient le corps jaune en l'absence de grossesse ?", "C", "En l'absence de grossesse, le corps jaune dure 10 à 14 jours puis dégénère en corps blanc (albicans), une masse de tissu fibreux.", ["Il persiste indéfiniment", "Il se transforme directement en placenta", "Il dégénère en corps blanc (albicans)", "Il devient un follicule de De Graaf"]),
    single("Où et quand a lieu la fécondation ?", "A", "La fécondation a lieu dans l'ampoule de la trompe utérine, dans les 24 heures suivant l'ovulation.", ["Dans l'ampoule de la trompe utérine, sous 24h après l'ovulation", "Dans l'utérus, 5 jours après l'ovulation", "Dans l'ovaire lui-même", "Dans le vagin"]),
    single("Quel chromosome détermine le sexe génétique de l'enfant ?", "B", "C'est le chromosome apporté par le spermatozoïde (X ou Y) qui détermine le sexe, et non celui de l'ovule (toujours X).", ["Le chromosome de l'ovule", "Le chromosome du spermatozoïde", "Les deux à parts égales", "Aucun, c'est aléatoire indépendamment des gamètes"]),
    single("Qu'est-ce que la morula ?", "C", "La morula est l'amas de blastomères (cluster ressemblant à une mûre) formé après plusieurs divisions du zygote, avant la formation du blastocyste.", ["Le premier stade après la fécondation immédiate", "Le nom du disque embryonnaire bilaminaire", "L'amas de blastomères ressemblant à une mûre", "La cavité du blastocyste"]),
    multi("Quelles structures dérivent du blastocyste ?", ["A", "B"], "Le blastocyste comprend l'embryoblaste (donnera l'embryon) et le trophoblaste (nourrit l'embryon, formera une grande partie du placenta).", ["L'embryoblaste", "Le trophoblaste", "Le corps jaune", "La zone pellucide persistante"]),
    single("Quand débute et s'achève typiquement l'implantation ?", "B", "L'implantation débute vers le 6e jour et s'achève vers le 10e-11e jour après la fécondation.", ["Jours 1-3", "Jours 6-11", "Jours 15-20", "Jours 25-28"]),
    single("En quoi se différencie la masse cellulaire interne durant la 2e semaine ?", "A", "Elle se différencie en épiblaste (ectoderme primitif) et hypoblaste (endoderme primitif), formant le disque embryonnaire bilaminaire.", ["Épiblaste et hypoblaste", "Cytotrophoblaste et syncytiotrophoblaste", "Mésoderme et endoderme uniquement", "Amnios et chorion"]),
    single("Quel événement caractérise la gastrulation ?", "C", "La gastrulation forme les trois feuillets germinatifs (ectoderme, mésoderme, endoderme) durant la 3e semaine.", ["La formation du blastocyste", "L'implantation dans l'endomètre", "La formation des trois feuillets germinatifs", "La fécondation elle-même"]),
    single("Quelles structures se forment durant la 3e semaine de développement ?", "B", "La ligne primitive, la notochorde et le tube neural se forment durant la 3e semaine (gastrulation).", ["Le blastocyste et la morula", "La ligne primitive, la notochorde et le tube neural", "Le cordon ombilical uniquement", "Les membres primordiaux"]),
    single("Quelles sont les fonctions de la notochorde ?", "A", "Axe central de l'embryon, induction de la formation du tube neural, et support pour le développement des corps vertébraux.", ["Axe central, induction du tube neural, support vertébral", "Formation exclusive du placenta", "Production des gamètes", "Formation du liquide amniotique uniquement"]),
    single("Que devient la partie crâniale du tube neural ?", "C", "La partie crâniale du tube neural s'élargit pour former l'encéphale ; la partie caudale reste tubulaire et forme la moelle spinale.", ["Elle forme la moelle spinale", "Elle dégénère", "Elle forme l'encéphale", "Elle forme le cœur"]),
    single("Que devient le mésoderme intermédiaire ?", "B", "Le mésoderme intermédiaire forme l'essentiel de l'appareil génito-urinaire (reins, testicules, ovaires).", ["Les muscles striés du tronc", "L'appareil génito-urinaire", "Le tube digestif", "Le système nerveux central"]),
    single("En quoi se divise le mésoderme de la lame latérale sous l'effet du cœlome intra-embryonnaire ?", "A", "En feuillet somatopleural (pariétal, contigu à l'ectoderme) et feuillet splanchnopleural (viscéral, contigu à l'endoderme).", ["Somatopleural et splanchnopleural", "Épiblaste et hypoblaste", "Cytotrophoblaste et syncytiotrophoblaste", "Sclérotome et dermatome"]),
  ],
  exam: { titre_fr: "Examen chronométré — Embryologie humaine générale", duration_seconds: 2_000 },
};

export const EMBRYOLOGY_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Que signifie « embryologie » ?", question_en: "What does \"embryology\" mean?", answer_fr: "L'étude de la croissance et du développement d'un organisme avant la naissance.", answer_en: "The study of the growth and development of an organism prior to birth." },
  { question_fr: "Quelle est la structure reproductrice primaire chez l'homme ?", question_en: "What is the primary reproductive structure in males?", answer_fr: "Le testicule.", answer_en: "The testis." },
  { question_fr: "Quelle est la structure reproductrice primaire chez la femme ?", question_en: "What is the primary reproductive structure in females?", answer_fr: "L'ovaire.", answer_en: "The ovary." },
  { question_fr: "Quel est le nombre moyen de spermatozoïdes par mL de sperme ?", question_en: "What is the average sperm count per mL of semen?", answer_fr: "Environ 100 millions par mL.", answer_en: "About 100 million per mL." },
  { question_fr: "Quelle glande contribue le plus au volume du sperme ?", question_en: "Which gland contributes most to semen volume?", answer_fr: "Les vésicules séminales (environ 60%).", answer_en: "The seminal vesicles (about 60%)." },
  { question_fr: "Combien de temps dure en moyenne la phase menstruelle ?", question_en: "How long does the menstrual phase typically last?", answer_fr: "1 à 4 jours.", answer_en: "1 to 4 days." },
  { question_fr: "Quelle hormone domine la phase proliférative ?", question_en: "Which hormone dominates the proliferative phase?", answer_fr: "L'œstrogène, sécrété par les follicules en maturation.", answer_en: "Estrogen, secreted by the maturing follicles." },
  { question_fr: "Quelle hormone domine la phase sécrétoire ?", question_en: "Which hormone dominates the secretory phase?", answer_fr: "La progestérone, sécrétée par le corps jaune.", answer_en: "Progesterone, secreted by the corpus luteum." },
  { question_fr: "Quelle hormone hypothalamique déclenche l'axe de régulation du cycle menstruel ?", question_en: "Which hypothalamic hormone triggers the menstrual cycle regulation axis?", answer_fr: "La GnRH (gonadotropin-releasing hormone).", answer_en: "GnRH (gonadotropin-releasing hormone)." },
  { question_fr: "Quelles hormones hypophysaires sont stimulées par la GnRH ?", question_en: "Which pituitary hormones are stimulated by GnRH?", answer_fr: "La FSH et la LH.", answer_en: "FSH and LH." },
  { question_fr: "Quel évènement déclenche le pic de LH ?", question_en: "What does the LH surge trigger?", answer_fr: "L'ovulation.", answer_en: "Ovulation." },
  { question_fr: "Combien de divisions comporte la méiose ?", question_en: "How many divisions does meiosis involve?", answer_fr: "Deux divisions successives (méiose I et II).", answer_en: "Two successive divisions (meiosis I and II)." },
  { question_fr: "Combien de spermatozoïdes résultent d'un spermatocyte primaire ?", question_en: "How many sperm result from one primary spermatocyte?", answer_fr: "Quatre spermatozoïdes.", answer_en: "Four spermatozoa." },
  { question_fr: "Combien d'ovules résultent d'un ovocyte primaire ?", question_en: "How many ova result from one primary oocyte?", answer_fr: "Un seul ovule (et trois globules polaires).", answer_en: "One ovum (and three polar bodies)." },
  { question_fr: "Quelles sont les parties du spermatozoïde mature ?", question_en: "What are the parts of the mature spermatozoon?", answer_fr: "Tête, col, pièce intermédiaire (corps) et flagelle.", answer_en: "Head, neck, connecting piece (body), and tail." },
  { question_fr: "Que sont les follicules ovariens ?", question_en: "What are ovarian follicles?", answer_fr: "De petits sacs remplis de liquide dans l'ovaire, sécrétant les hormones du cycle menstruel.", answer_en: "Small fluid-filled sacs in the ovary, secreting the hormones of the menstrual cycle." },
  { question_fr: "Quels sont les 4 stades de développement des follicules ovariens ?", question_en: "What are the four developmental stages of ovarian follicles?", answer_fr: "Primordial, primaire, secondaire, de De Graaf (mature).", answer_en: "Primordial, primary, secondary, Graafian (mature)." },
  { question_fr: "Que devient le follicule rompu après l'ovulation ?", question_en: "What does the ruptured follicle become after ovulation?", answer_fr: "Le corps jaune.", answer_en: "The corpus luteum." },
  { question_fr: "Que devient le corps jaune s'il n'y a pas de grossesse ?", question_en: "What happens to the corpus luteum if pregnancy does not occur?", answer_fr: "Il dégénère en corps blanc (albicans) après 10-14 jours.", answer_en: "It degenerates into the corpus albicans after 10-14 days." },
  { question_fr: "Où et quand a lieu la fécondation ?", question_en: "Where and when does fertilization occur?", answer_fr: "Dans l'ampoule de la trompe utérine, dans les 24h suivant l'ovulation.", answer_en: "In the ampulla of the uterine tube, within 24 hours of ovulation." },
  { question_fr: "Qu'est-ce que la réaction zonale ?", question_en: "What is the zona reaction?", answer_fr: "Un changement des propriétés de la zone pellucide après pénétration d'un spermatozoïde, la rendant imperméable aux autres spermatozoïdes.", answer_en: "A change in the properties of the zona pellucida after sperm penetration, making it impermeable to other sperm." },
  { question_fr: "Quel est le résultat final de la fécondation en termes de nombre de chromosomes ?", question_en: "What is the final chromosomal outcome of fertilization?", answer_fr: "La formation d'un zygote diploïde à 46 chromosomes.", answer_en: "The formation of a diploid zygote with 46 chromosomes." },
  { question_fr: "Quelles sont les trois conséquences de la fécondation ?", question_en: "What are the three consequences of fertilization?", answer_fr: "Détermination du sexe génétique, restauration de la diploïdie, initiation de la segmentation.", answer_en: "Determination of genetic sex, restoration of diploidy, initiation of cleavage." },
  { question_fr: "Combien d'autosomes et de chromosomes sexuels possède une cellule somatique humaine ?", question_en: "How many autosomes and sex chromosomes does a human somatic cell have?", answer_fr: "44 autosomes (22 paires) et 2 chromosomes sexuels (1 paire).", answer_en: "44 autosomes (22 pairs) and 2 sex chromosomes (1 pair)." },
  { question_fr: "Quel gamète détermine le sexe génétique de l'enfant ?", question_en: "Which gamete determines the genetic sex of the child?", answer_fr: "Le spermatozoïde (porteur de X ou de Y) ; l'ovule est toujours porteur de X.", answer_en: "The spermatozoon (carrying X or Y); the egg always carries X." },
  { question_fr: "Qu'est-ce que la morula ?", question_en: "What is the morula?", answer_fr: "L'amas de blastomères formé par segmentation du zygote, ressemblant à une mûre.", answer_en: "The cluster of blastomeres formed by cleavage of the zygote, resembling a mulberry." },
  { question_fr: "Quand la morula entre-t-elle dans la cavité utérine ?", question_en: "When does the morula enter the uterine cavity?", answer_fr: "Vers le 4e jour, après ~72h dans la trompe utérine.", answer_en: "Around day 4, after ~72 hours in the uterine tube." },
  { question_fr: "En quoi se différencie le blastocyste ?", question_en: "What does the blastocyst differentiate into?", answer_fr: "En embryoblaste (masse cellulaire interne) et trophoblaste (masse cellulaire externe).", answer_en: "Into the embryoblast (inner cell mass) and trophoblast (outer cell mass)." },
  { question_fr: "Que devient l'embryoblaste ?", question_en: "What does the embryoblast become?", answer_fr: "L'embryon.", answer_en: "The embryo." },
  { question_fr: "Que devient le trophoblaste ?", question_en: "What does the trophoblast become?", answer_fr: "Une grande partie du placenta ; il nourrit l'embryon.", answer_en: "A large part of the placenta; it nourishes the embryo." },
  { question_fr: "Où se situe typiquement le site d'implantation ?", question_en: "Where is the implantation site typically located?", answer_fr: "Sur la paroi postérieure de l'utérus, près du fundus.", answer_en: "On the posterior wall of the uterus, near the fundus." },
  { question_fr: "Quand débute et se termine l'implantation ?", question_en: "When does implantation begin and end?", answer_fr: "Débute vers le 6e jour, s'achève vers le 10e-11e jour après fécondation.", answer_en: "Begins around day 6, completes around day 10-11 after fertilization." },
  { question_fr: "En quelles deux couches se différencie le trophoblaste au 7e jour ?", question_en: "Into which two layers does the trophoblast differentiate on day 7?", answer_fr: "Cytotrophoblaste (interne) et syncytiotrophoblaste (externe).", answer_en: "Cytotrophoblast (inner) and syncytiotrophoblast (outer)." },
  { question_fr: "En quoi se différencie la masse cellulaire interne durant la 2e semaine ?", question_en: "What does the inner cell mass differentiate into during week 2?", answer_fr: "En épiblaste (ectoderme primitif) et hypoblaste (endoderme primitif).", answer_en: "Into epiblast (primitive ectoderm) and hypoblast (primitive endoderm)." },
  { question_fr: "Qu'est-ce que le disque embryonnaire bilaminaire ?", question_en: "What is the bilaminar embryonic disc?", answer_fr: "Le disque formé par l'épiblaste et l'hypoblaste durant la 2e semaine.", answer_en: "The disc formed by the epiblast and hypoblast during week 2." },
  { question_fr: "Que forme le mésoderme extra-embryonnaire au niveau crânial ?", question_en: "What does extraembryonic mesoderm form cranially?", answer_fr: "Le pédicule de connexion.", answer_en: "The connecting stalk." },
  { question_fr: "Quels sont les trois événements caractéristiques de la gastrulation ?", question_en: "What are the three characteristic events of gastrulation?", answer_fr: "La formation de la ligne primitive, de la notochorde et du tube neural.", answer_en: "Formation of the primitive streak, the notochord, and the neural tube." },
  { question_fr: "Quand apparaît la ligne primitive ?", question_en: "When does the primitive streak appear?", answer_fr: "Vers le 16e jour de développement.", answer_en: "Around day 16 of development." },
  { question_fr: "Que forment les cellules migrant depuis le fond de la gouttière primitive ?", question_en: "What do cells migrating from the floor of the primitive groove form?", answer_fr: "Le mésoderme intra-embryonnaire, le 3e feuillet germinatif.", answer_en: "The intraembryonic mesoderm, the third germ layer." },
  { question_fr: "Qu'est-ce que le nœud de Hensen ?", question_en: "What is Hensen's node?", answer_fr: "Une élévation arrondie à l'extrémité crâniale de la ligne primitive.", answer_en: "A rounded elevation at the cranial end of the primitive streak." },
  { question_fr: "Que devient la membrane oropharyngée ?", question_en: "What does the oropharyngeal membrane become?", answer_fr: "La future bouche.", answer_en: "The future mouth." },
  { question_fr: "Que devient la membrane cloacale ?", question_en: "What does the cloacal membrane become?", answer_fr: "L'anus primordial.", answer_en: "The primordial anus." },
  { question_fr: "Quelles sont les trois fonctions de la notochorde ?", question_en: "What are the three functions of the notochord?", answer_fr: "Axe central de l'embryon, induction du tube neural, support pour la colonne vertébrale.", answer_en: "Central axis of the embryo, induction of the neural tube, support for the vertebral column." },
  { question_fr: "Qu'est-ce que la neurulation ?", question_en: "What is neurulation?", answer_fr: "Le processus de formation du tube neural à partir de l'ectoderme sus-jacent à la notochorde.", answer_en: "The process of neural tube formation from the ectoderm overlying the notochord." },
  { question_fr: "Que devient la partie crâniale du tube neural ?", question_en: "What does the cranial part of the neural tube become?", answer_fr: "L'encéphale.", answer_en: "The brain." },
  { question_fr: "Que devient la partie caudale du tube neural ?", question_en: "What does the caudal part of the neural tube become?", answer_fr: "La moelle spinale.", answer_en: "The spinal cord." },
  { question_fr: "En quelles trois parties se divise le mésoderme intra-embryonnaire de part et d'autre du tube neural ?", question_en: "Into what three parts does the intraembryonic mesoderm divide on either side of the neural tube?", answer_fr: "Mésoderme paraxial, intermédiaire et de la lame latérale.", answer_en: "Paraxial, intermediate, and lateral plate mesoderm." },
  { question_fr: "En quoi se segmente le mésoderme paraxial ?", question_en: "What does the paraxial mesoderm segment into?", answer_fr: "En somatomères puis en somites (42-44 paires).", answer_en: "Into somatomeres and then somites (42-44 pairs)." },
  { question_fr: "En quelles trois structures se différencie chaque somite ?", question_en: "What three structures does each somite differentiate into?", answer_fr: "Sclérotome (colonne vertébrale), myotome (muscles) et dermatome (derme).", answer_en: "Sclerotome (vertebral column), myotome (muscles), and dermatome (dermis)." },
  { question_fr: "Que forme le mésoderme intermédiaire ?", question_en: "What does the intermediate mesoderm form?", answer_fr: "L'essentiel de l'appareil génito-urinaire.", answer_en: "Most of the genitourinary system." },
  { question_fr: "En quels deux feuillets se divise le mésoderme de la lame latérale ?", question_en: "Into what two layers does the lateral plate mesoderm split?", answer_fr: "Somatopleural (pariétal) et splanchnopleural (viscéral).", answer_en: "Somatopleuric (parietal) and splanchnopleuric (visceral)." },
  { question_fr: "Que devient le septum transversum ?", question_en: "What does the septum transversum become?", answer_fr: "Il contribue au développement du foie et du diaphragme.", answer_en: "It contributes to the development of the liver and diaphragm." },
];

const UPPER_LIMB_MUSCLES_JOINTS_1_COURSE = `# Anatomie — Muscles et articulations du membre supérieur (Lecture 3)

## 1. Organisation générale
Les structures du membre supérieur sont décrites sous les rubriques suivantes : muscles reliant le membre supérieur à la colonne vertébrale, muscles reliant le membre supérieur à la paroi thoracique, muscles de l'épaule, du bras, de l'avant-bras et de la main.

## 2. Muscles du bras
Le bras est enveloppé d'un fascia profond en manchon, divisé en compartiments antérieur et postérieur par des septa intermusculaires. Les muscles du compartiment antérieur sont surtout fléchisseurs/pronateurs, ceux du compartiment postérieur extenseurs/supinateurs ; ils agissent le plus souvent en synergie.

### A. Compartiment antérieur du bras (innervés par le nerf musculo-cutané)
| Muscle | Origine | Insertion | Innervation | Action |
| --- | --- | --- | --- | --- |
| **Biceps brachial** | Chef long : tubercule supraglénoïdien (dans la capsule de l'épaule) ; chef court : apex du processus coracoïde (avec le coracobrachial) | Tubérosité radiale (tendon) et fascia de l'avant-bras médial (via l'aponévrose bicipitale, qui protège l'artère brachiale et le nerf médian) | Musculo-cutané (C5-C7) | Supinateur puissant coude fléchi ; fléchisseur puissant de l'avant-bras coude étendu ; fléchisseur faible de l'épaule |
| **Coracobrachial** | Apex du processus coracoïde | Face médiale de la diaphyse humérale, au niveau de la tubérosité deltoïdienne | Musculo-cutané (le traverse) | Fléchisseur et adducteur faible du bras |
| **Brachial** | Faces antéro-médiale et antéro-latérale de la diaphyse humérale | Tubérosité de l'ulna, juste distale au coude | Musculo-cutané (parfois 1/3 latéral par le radial) | Principal fléchisseur du coude ; forme le plancher de la fosse cubitale, profondément au biceps |

### B. Compartiment postérieur du bras
Le **triceps brachial** est le seul muscle de ce compartiment. Trois chefs : long (tubercule infraglénoïdien), latéral (humérus, au-dessus du sillon radial) et médial (humérus, en dessous du sillon radial — le plus profond, recouvert par les deux autres). Insertion : face supérieure postérieure de l'olécrane. Innervation : nerf radial (C7-C8). Action : extension du coude.

## 3. Compartiments fasciaux de l'avant-bras
L'avant-bras est enveloppé du fascia antébrachial, attaché au bord postérieur sous-cutané de l'ulna. Des septa relient ce fascia aux os, délimitant, avec la membrane interosseuse, plusieurs compartiments, chacun avec ses propres muscles, nerfs et vascularisation. Près du poignet, deux épaississements du fascia — les **rétinaculums fléchisseur et extenseur** — maintiennent les tendons digitaux en place. Classiquement, l'avant-bras est divisé en compartiment antérieur et compartiment postérieur.

## 4. Muscles du compartiment antérieur de l'avant-bras
Ces muscles réalisent globalement la flexion du poignet/des doigts et la pronation. Ils sont divisés en superficiels et profonds.

### A. Groupe superficiel (5 muscles)
| Muscle | Origine | Insertion | Innervation | Action |
| --- | --- | --- | --- | --- |
| **Rond pronateur** | Chef huméral (épicondyle médial) + chef ulnaire (processus coronoïde) — le nerf médian passe entre les deux chefs | Tiers moyen de la face latérale du radius | Médian | Principal pronateur ; aide à la flexion du coude |
| **Fléchisseur radial du carpe** | Épicondyle médial (origine commune des fléchisseurs) | Bases des 2e et 3e métacarpiens | Médian | Flexion du poignet (avec le FCU) ; abduction du poignet (avec le brachioradial) — son tendon repère l'artère radiale au poignet |
| **Long palmaire** | Épicondyle médial | Rétinaculum fléchisseur + aponévrose palmaire | Médian | Flexion du poignet, tension de l'aponévrose palmaire |
| **Fléchisseur ulnaire du carpe** | Chef huméral (épicondyle médial) + chef ulnaire (olécrane, bord postérieur de l'ulna) — le nerf ulnaire passe entre les deux chefs | Pisiforme, hamulus de l'hamatum, base du 5e métacarpien | Ulnaire | Adduction du poignet (avec l'ECU) ; flexion du poignet (avec le FCR) |
| **Fléchisseur superficiel des doigts** | Chef huméro-ulnaire (épicondyle médial, processus coronoïde) + chef radial (ligne oblique antérieure du radius) | 4 tendons vers les phalanges moyennes des 4 doigts médiaux | Médian | Flexion des articulations interphalangiennes proximales (IPP) ; aide à la flexion du poignet |

### B. Groupe profond (3 muscles)
| Muscle | Origine | Insertion | Innervation | Action |
| --- | --- | --- | --- | --- |
| **Long fléchisseur du pouce** (latéral) | Face antérieure du radius (2/3 supérieurs) et membrane interosseuse adjacente | Base de la phalange distale du pouce | Interosseux antérieur (branche du médian) | Flexion de la phalange distale du pouce (seul muscle à le faire) ; flexion secondaire de la phalange proximale/1er métacarpien |
| **Fléchisseur profond des doigts** (médial) | Faces antérieure/médiale de l'ulna (3/4 supérieurs), aponévrose, olécrane et processus coronoïde | Bases des phalanges distales des 4 doigts médiaux (perfore le tendon du FDS) | Moitié médiale : ulnaire ; moitié latérale : interosseux antérieur (médian) | Flexion des articulations interphalangiennes distales (IPD) ; donne origine aux muscles lombricaux |
| **Carré pronateur** (distal) | Crête oblique du 1/4 inférieur de la face antérieure de l'ulna | Fibres superficielles : 1/4 distal du radius ; fibres profondes : zone triangulaire au-dessus de l'échancrure ulnaire | Interosseux antérieur (médian) | Principal pronateur ; assisté par le rond pronateur en pronation rapide/forcée |

## 5. Muscles du compartiment postérieur de l'avant-bras
### A. Groupe superficiel (7 muscles)
| Muscle | Origine | Insertion | Innervation | Action |
| --- | --- | --- | --- | --- |
| **Brachioradial** | Crête supra-épicondylaire (proximale) de l'humérus | Extrémité distale du radius, près du processus styloïde | Radial | Fléchisseur du coude (bien qu'anatomiquement classé extenseur) ; recouvre l'artère et le nerf radiaux distalement |
| **Long extenseur radial du carpe** | 1/3 inférieur de la crête supracondylaire latérale de l'humérus | Face dorsale de la base du 2e métacarpien | Radial | Extension du poignet (avec l'ECU) ; abduction du poignet (avec le FCR) |
| **Court extenseur radial du carpe** | Tendon commun, épicondyle latéral + ligament latéral du coude | Face dorsale de la base du 3e métacarpien | Radial | Extension du poignet (avec l'ECU) ; abduction du poignet (avec le FCR) |
| **Extenseur des doigts** | Épicondyle latéral | 4 tendons vers l'expansion extensrice, dos des phalanges moyennes/distales des 4 doigts médiaux | Radial | Extension des 4 doigts médiaux ; peut aider à l'extension du poignet |
| **Extenseur du petit doigt** | Tendon commun, épicondyle latéral | Via l'expansion extensrice, dos des phalanges du petit doigt | Radial | Extension du petit doigt ; aide à l'extension du poignet |
| **Extenseur ulnaire du carpe** | Tendon commun, épicondyle latéral + aponévrose (bord postérieur de l'ulna) | Face médiale de la base du 5e métacarpien | Radial | Extension du poignet (avec l'ECR) ; adduction du poignet (avec le FCU) |
| **Anconé** | Épicondyle latéral | Face latérale de l'olécrane, 1/4 supérieur de la face postérieure de l'ulna | Radial | Extenseur faible du coude |

### B. Groupe profond (5 muscles)
Aucun ne franchit l'articulation du coude ; tous naissent du radius, de l'ulna et de la membrane interosseuse ; tous innervés par le **nerf interosseux postérieur** (branche profonde du radial).
| Muscle | Origine | Insertion | Action |
| --- | --- | --- | --- |
| **Supinateur** | Épicondyle latéral, ligament latéral du coude, ligament annulaire, crête supinatrice de l'ulna | Tiers supérieur des faces postérieure/latérale du radius | Supination de l'avant-bras |
| **Long abducteur du pouce** | Face postérieure de l'ulna et du radius (sous les lignes obliques postérieures), membrane interosseuse | Bord latéral de la base du 1er métacarpien | Abduction du pouce |
| **Court extenseur du pouce** | Face postérieure du radius (sous l'origine du LAP), membrane interosseuse | Face dorsale de la base de la phalange proximale du pouce | Extension du pouce (MCP et CMC) |
| **Long extenseur du pouce** | Tiers moyen de la face postérieure de l'ulna, membrane interosseuse | Face dorsale de la base de la phalange distale du pouce | Extension des articulations du pouce ; aide à l'extension du poignet |
| **Extenseur de l'index** | Face postérieure de l'ulna (sous l'origine du LEP), membrane interosseuse | Via l'expansion extensrice, dos des phalanges moyenne/distale de l'index | Extension de l'index ; aide à l'extension du poignet |

## 6. Muscles de la main
Deux groupes : les muscles **extrinsèques** (situés dans l'avant-bras, assurent la prise de force) et les muscles **intrinsèques** (situés dans la main, assurent la motricité fine). Groupes de muscles intrinsèques : muscles thénariens, muscles hypothénariens, lombricaux, interosseux.

### A. Muscles thénariens
Forment l'éminence thénar (base du pouce, côté radial de la paume), responsables de la motricité fine du pouce.
| Muscle | Origine | Insertion | Action |
| --- | --- | --- | --- |
| **Court abducteur du pouce** (le plus superficiel) | Tubercule du scaphoïde, crête du trapèze, rétinaculum fléchisseur | Face latérale de la base de la phalange proximale du pouce | Abduction du pouce |
| **Court fléchisseur du pouce** | Chef superficiel : rétinaculum fléchisseur ; chef profond : trapézoïde et capitatum | Face latérale de la base de la phalange proximale du pouce | Flexion du pouce |
| **Opposant du pouce** | Rétinaculum fléchisseur, crête du trapèze | Bord latéral de la face palmaire du 1er métacarpien | Opposition du pouce ; creuse la paume |
| **Adducteur du pouce** (le plus profond) | Chef oblique : capitatum, bases des 2e/3e métacarpiens ; chef transverse : 2/3 distaux de la face antérieure du 3e métacarpien | Face médiale de la base de la phalange proximale du pouce | Adduction du pouce, force de la prise |

**Innervation thénarienne** : abducteur court, opposant et chef latéral du court fléchisseur → **nerf médian** ; chef médial du court fléchisseur et adducteur → **nerf ulnaire**.

### B. Muscles hypothénariens
Forment l'éminence hypothénar (base du 5e doigt, côté ulnaire de la paume) ; organisation similaire aux muscles thénariens. Tous innervés par le **nerf ulnaire**.
- **Palmaire bref** : muscle petit et mince, très superficiel dans le tissu sous-cutané de l'éminence hypothénar. Origine : aponévrose palmaire et rétinaculum fléchisseur ; insertion : derme du bord médial de la main. Action : plisse la peau de l'éminence hypothénar, accentue la courbure de la main, améliore la prise.
- **Abducteur du 5e doigt** : bord ulnaire de la paume.
- **Fléchisseur du 5e doigt** : même plan que l'abducteur, côté radial.
- **Opposant du 5e doigt** : triangulaire, sous l'abducteur et le fléchisseur.

### C. Muscles lombricaux
Quatre muscles numérotés 1 à 4 de latéral à médial, nommés ainsi pour leur forme allongée en ver.
- Origine : lombricaux 1 et 2 (unipennés) — bord latéral des deux tendons latéraux du fléchisseur profond des doigts ; lombricaux 3 et 4 (bipennés) — faces adjacentes des trois tendons médiaux du fléchisseur profond.
- Insertion : croisent le bord radial des articulations métacarpophalangiennes pour s'insérer sur le bord latéral de l'expansion digitale dorsale du doigt correspondant (2e à 5e).
- Innervation : les deux lombricaux médiaux (annulaire, auriculaire) par le nerf ulnaire ; les deux lombricaux latéraux (index, médius) par le nerf médian.
- Action : fléchissent l'articulation métacarpophalangienne, étendent les articulations interphalangiennes proximale et distale.

### D. Muscles interosseux
Situés entre les métacarpiens, en deux groupes : **interosseux dorsaux** (4) et **interosseux palmaires** (3). Innervation : nerf ulnaire pour les deux groupes.
- **Interosseux palmaires** : adduisent les doigts à l'articulation métacarpophalangienne (mnémotechnique : PAD, palmaires ADduisent).
- **Interosseux dorsaux** : abduisent les doigts à l'articulation métacarpophalangienne (mnémotechnique : DAB, dorsaux ABduisent).

## 7. Classification des articulations
### A. Classification fonctionnelle (degré de mobilité)
- **Synarthroses** : articulations immobiles (sutures crâniennes de l'adulte, articulations cartilagineuses primaires chez l'enfant en croissance).
- **Amphiarthroses** : légèrement mobiles (articulations cartilagineuses secondaires, syndesmoses).
- **Diarthroses** : librement mobiles, degré de mobilité maximal (articulations synoviales).

### B. Classification structurale (tissu conjonctif et présence d'une cavité)
1. **Articulations fibreuses** :
   - **Sutures** : surfaces articulaires reliées par une fine couche de tissu conjonctif ; propres au crâne.
   - **Syndesmoses** (amphiarthroses) : deux os reliés par des ligaments/membranes solides (articulation radio-ulnaire interosseuse, tibio-fibulaire interosseuse).
   - **Gomphoses** : fixent les dents dans leurs alvéoles osseuses (maxillaire, mandibule).
2. **Articulations cartilagineuses** : os entièrement reliés par du cartilage (hyalin ou fibrocartilage) ; permettent plus de mouvement que les fibreuses, moins que les synoviales.
   - **Synchondroses** (primaires) : 1re articulation costo-sternale, jonction épiphyse-diaphyse de l'os long en croissance.
   - **Symphyses** (secondaires) : symphyse pubienne, symphyse sacro-coccygienne, disques intervertébraux, plaques de croissance épiphysaires.
3. **Articulations synoviales** : possèdent une cavité ; les extrémités osseuses sont enfermées dans une capsule fibreuse, séparées par une cavité articulaire remplie de **liquide synovial**. Dites diarthrodiales ; ce sont les plus fréquentes et les plus mobiles chez les mammifères.

### C. Caractéristiques des articulations synoviales
- Surfaces articulaires recouvertes d'une fine plaque de cartilage hyalin.
- Cavité articulaire enveloppée d'une **capsule articulaire** = capsule fibreuse externe + **membrane synoviale** interne, tapissant toute la cavité sauf les cartilages articulaires.
- La membrane synoviale produit le liquide synovial : lubrification des surfaces articulaires et nutrition des cartilages.
- La cavité peut être incomplètement/complètement divisée par des **disques articulaires/ménisques**.
- Structures additionnelles possibles dans la cavité : coussinets graisseux, tendons, **bourses**.
- **Bourse** : petit sac tapissé de synoviale, rempli de liquide synovial, situé aux points de friction articulaire. Facilite la liberté de mouvement, protège les surfaces articulaires ; peut s'enflammer (**bursite**) après infection ou usage excessif.

### D. Sous-classification des articulations synoviales (selon forme et mouvements permis)
| Type | Description | Exemples |
| --- | --- | --- |
| **Charnière (hinge)** | Mouvement dans un seul plan (flexion/extension) | Coude, cheville, genou |
| **En selle (saddle)** | Surfaces opposées concave-convexe réciproques | Articulations carpométacarpiennes |
| **Plane** | Surfaces relativement plates, glissement | Acromio-claviculaire, sous-talienne |
| **Pivot** | Rotation seule, autour d'un pivot osseux central entouré d'un anneau ostéo-ligamentaire | Radio-ulnaires proximale et distale, atlanto-axoïdienne |
| **Condylienne (ellipsoïde)** | Surface convexe articulant avec une cavité elliptique concave | Métacarpophalangienne, métatarsophalangienne |
| **Sphéroïde (ball-and-socket)** | Surface sphérique s'articulant dans une cavité en cupule ; mouvement libre selon de nombreux axes | Hanche, épaule |

## 8. Articulation de l'épaule (glénohumérale)
- Articulation entre la tête de l'humérus et la cavité glénoïde de la scapula. **Articulation la plus mobile du corps**, et donc l'une des moins stables — articulation la plus fréquemment luxée, avec un risque élevé de luxation récidivante. Type : **synoviale sphéroïde (énarthrose)**.
- **Surfaces articulaires** : grosse tête arrondie de l'humérus contre la cavité glénoïde peu profonde de la scapula, légèrement approfondie par un anneau fibrocartilagineux, le **labrum glénoïdien**.
- **Ligaments de l'épaule** :
  - **Capsule articulaire** : couche fibreuse attachée médialement aux marges de la cavité glénoïde (au-delà du labrum) et latéralement au col anatomique de l'humérus (sauf en bas, où elle descend 1,5 cm ou plus sur le col chirurgical). Elle englobe le chef long du biceps brachial dans la cavité articulaire.
  - Elle est renforcée : en haut par le supra-épineux ; en bas par le chef long du triceps ; en arrière par l'infra-épineux et le petit rond ; en avant par le sous-scapulaire.
  - Trois ouvertures capsulaires : communication antérieure (sous le processus coracoïde) avec une bourse sous le sous-scapulaire ; ouverture postérieure inconstante avec une bourse sous l'infra-épineux ; ouverture entre les tubercules huméraux pour le passage du tendon du long biceps.
  - **Ligaments glénohuméraux (LGH)** : supérieur, moyen, inférieur — situés sur la face antérieure de l'articulation.
  - **Ligament coraco-huméral** : du bord latéral du processus coracoïde vers le grand tubercule, se mêlant au tendon du supra-épineux ; renforce le haut de la capsule.
  - **Ligament huméral transverse** : large bande fibreuse pontant le sillon bicipital entre les tubercules, transformant le sillon en canal pour le tendon du chef long du biceps.
  - **Labrum glénoïdien** : rebord fibrocartilagineux triangulaire autour de la cavité glénoïde, continu en haut avec le tendon du long biceps.
- **Membrane synoviale** : tapisse la face interne de la capsule, se réfléchit sur le labrum et sur l'humérus jusqu'au bord articulaire de la tête.
- **Ligaments accessoires** : **ligament coraco-acromial** (entre processus coracoïde et acromion, protège le sommet de l'articulation) ; **arche coraco-acromiale** (formée par le processus coracoïde, l'acromion et le ligament coraco-acromial), qui protège la tête humérale et empêche son déplacement supérieur au-delà de la cavité glénoïde.
- **Bourses associées** : sous-scapulaire (entre le tendon du sous-scapulaire et le col de la scapula, communique souvent avec l'articulation) ; sous-acromiale (= sous-deltoïdienne, entre le ligament coraco-acromial/acromion et le tendon du supra-épineux/capsule) ; infra-épineuse (entre le tendon de l'infra-épineux et la capsule postéro-latérale, peut communiquer avec l'articulation).
- **Muscles en rapport** : au-dessus, le supra-épineux ; en dessous, le chef long du triceps ; en avant, le sous-scapulaire ; en arrière, l'infra-épineux et le petit rond ; à l'intérieur, le tendon du long biceps. Le deltoïde recouvre l'articulation en avant, en arrière et latéralement.
- **Vascularisation/innervation** : artères circonflexes humérales antérieure et postérieure ; nerfs axillaire et suprascapulaire.
- **Mouvements** : flexion/extension (plan sagittal, axe frontal) ; abduction/adduction (plan frontal, axe sagittal) ; rotation médiale/latérale (plan transversal, axe vertical) ; circumduction (combinaison des précédents).

## 9. Articulation du coude
- Le coude (*articulatio cubiti*) est une **articulation ginglyme (charnière)** entre l'extrémité distale de l'humérus et les extrémités proximales du radius et de l'ulna. Elle comprend deux articulations : **huméro-ulnaire** (trochlée humérale/incisure trochléaire de l'ulna) et **huméro-radiale** (capitulum huméral/tête radiale).
- L'**articulation radio-ulnaire proximale (supérieure)** partage la même capsule que le coude mais est généralement considérée comme une articulation distincte. Le coude compte donc 3 articulations, dites **articulations cubitales** : huméro-ulnaire, huméro-radiale et radio-ulnaire proximale.
- **Surfaces articulaires** : capitulum + trochlée de l'humérus (en haut) ; face supérieure de la tête radiale + incisure trochléaire de l'ulna (en bas).
- **Ligaments** : capsule épaissie médialement et latéralement (moins en avant/arrière), décrite en 4 ligaments distincts : antérieur, postérieur, collatéral radial, collatéral ulnaire.
  - **Ligament antérieur** : large et fin, couvre la face antérieure de l'articulation, attaché de l'épicondyle médial et de l'humérus au processus coronoïde et au ligament annulaire ; en relation avec le brachial en avant.
  - **Ligament postérieur** : mince et membraneux, fibres transverses et obliques, de l'humérus (près du capitulum et de la trochlée, marges de la fosse olécrânienne) vers l'olécrane et l'ulna en arrière de l'incisure radiale.
  - **Ligament collatéral radial (latéral externe)** : de l'épicondyle latéral au ligament annulaire, se mêle au tendon d'origine du supinateur.
  - **Ligament collatéral ulnaire (latéral interne)** : bande triangulaire épaisse, portions antérieure (épicondyle médial → processus coronoïde) et postérieure (épicondyle médial → olécrane) ; en relation avec le triceps, le fléchisseur ulnaire du carpe et le nerf ulnaire ; donne origine à une partie du fléchisseur superficiel des doigts.
- **Membrane synoviale** : très étendue, tapisse les fosses coronoïde, radiale et olécrânienne, se réfléchit sur la face profonde de la capsule, forme une poche entre l'incisure radiale, le ligament annulaire et la circonférence de la tête radiale.
- **Bourses du coude** : bourse subtendineuse de l'olécrane (entre tendon tricipital et olécrane), bourse sous-cutanée de l'olécrane (entre peau et olécrane), bourse bicipito-radiale (entre tendon bicipital et tubérosité radiale), bourse interosseuse.
- **Vascularisation** : anastomoses entre l'artère brachiale profonde et les collatérales ulnaires supérieure/inférieure, avec les récurrentes ulnaire (antérieure/postérieure/interosseuse) et radiale — réseau anastomotique complet autour de l'articulation.
- **Innervation** : branche du nerf ulnaire (entre l'épicondyle médial et l'olécrane), filaments du musculo-cutané, du radial et du médian.

## 10. Articulation radio-ulnaire proximale
- Type : **synoviale pivot**. Surfaces articulaires : circonférence de la tête radiale et anneau fibro-osseux formé par l'incisure radiale de l'ulna et le ligament annulaire.
- **Ligaments** : capsule articulaire (continue avec celle du coude, attachée au ligament annulaire) ; **ligament annulaire** (bande fibreuse solide encerclant la tête radiale, la maintenant contre l'incisure radiale, attachée aux marges de l'incisure, se mêlant latéralement au ligament collatéral radial) ; **ligament carré** (fin, du col du radius à la partie supérieure de la fosse supinatrice de l'ulna, sous l'incisure radiale).
- **Membrane synoviale** : tapisse la capsule et le ligament annulaire, continue avec celle du coude ; empêchée de herniation par le ligament carré. Relations : supinateur en avant/latéralement, anconé en arrière.
- **Vascularisation/innervation** : branches articulaires de l'anastomose du côté latéral du coude ; branches articulaires du musculo-cutané, du médian, du radial et de l'ulnaire.
- **Mouvements** : rotation de la tête radiale dans l'anneau formé par le ligament annulaire et l'incisure radiale — rotation vers l'avant = **pronation**, rotation vers l'arrière = **supination**.

## Points à retenir
- Compartiment antérieur du bras (biceps, coracobrachial, brachial — nerf musculo-cutané) = fléchisseurs ; compartiment postérieur (triceps — nerf radial) = extenseur.
- Compartiment antérieur de l'avant-bras (majoritairement nerf médian, sauf FCU et moitié médiale du FDP = ulnaire) = flexion/pronation ; compartiment postérieur (entièrement nerf radial) = extension/supination.
- Muscles de la main : thénariens (médian, sauf adducteur et chef médial du court fléchisseur = ulnaire), hypothénariens (ulnaire), lombricaux (2 latéraux = médian, 2 médiaux = ulnaire), interosseux (ulnaire ; palmaires ADduisent, dorsaux ABduisent).
- Classification structurale des articulations : fibreuses (sutures, syndesmoses, gomphoses), cartilagineuses (synchondroses, symphyses), synoviales (avec cavité et liquide synovial).
- L'épaule est l'articulation la plus mobile mais la moins stable du corps (luxations fréquentes) ; le coude comprend 3 articulations (huméro-ulnaire, huméro-radiale, radio-ulnaire proximale) partageant la même capsule.`;

export const UPPER_LIMB_MUSCLES_JOINTS_1_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Muscles et articulations du membre supérieur",
    source_label: "Anatomie — UMFT Timisoara, Lecture 3",
    content_fr: UPPER_LIMB_MUSCLES_JOINTS_1_COURSE,
  },
  qcm: [
    single("Quel nerf innerve les trois muscles du compartiment antérieur du bras ?", "B", "Le biceps brachial, le coracobrachial et le brachial sont tous innervés par le nerf musculo-cutané.", ["Le nerf radial", "Le nerf musculo-cutané", "Le nerf médian", "Le nerf ulnaire"]),
    single("D'où proviennent les deux chefs du biceps brachial ?", "A", "Le chef long naît du tubercule supraglénoïdien, le chef court de l'apex du processus coracoïde.", ["Tubercule supraglénoïdien et processus coracoïde", "Épicondyle médial et processus coronoïde", "Olécrane et processus coracoïde", "Tête humérale et col chirurgical"]),
    single("Quelle structure est protégée par l'aponévrose bicipitale ?", "C", "L'aponévrose bicipitale protège l'artère brachiale et le nerf médian sous-jacents.", ["Le nerf radial", "L'artère radiale", "L'artère brachiale et le nerf médian", "Le nerf axillaire"]),
    single("Quel muscle forme le plancher de la fosse cubitale ?", "B", "Le brachial, profond au biceps, forme le plancher de la fosse cubitale.", ["Le biceps brachial", "Le brachial", "Le coracobrachial", "Le triceps"]),
    single("Combien de chefs comporte le triceps brachial et où s'insère-t-il ?", "A", "Trois chefs (long, latéral, médial), insertion sur la face supérieure postérieure de l'olécrane.", ["Trois chefs, insertion sur l'olécrane", "Deux chefs, insertion sur la tubérosité radiale", "Quatre chefs, insertion sur le processus coronoïde", "Un seul chef, insertion sur l'épicondyle"]),
    single("Quel nerf passe entre les deux chefs du rond pronateur ?", "C", "Le nerf médian passe entre le chef huméral et le chef ulnaire du rond pronateur.", ["Le nerf ulnaire", "Le nerf radial", "Le nerf médian", "Le nerf musculo-cutané"]),
    single("Quel nerf passe entre les deux chefs du fléchisseur ulnaire du carpe ?", "B", "Le nerf ulnaire pénètre l'avant-bras en passant entre les deux chefs du fléchisseur ulnaire du carpe.", ["Le nerf médian", "Le nerf ulnaire", "Le nerf radial", "Le nerf musculo-cutané"]),
    single("Quel est le seul muscle capable de fléchir l'articulation interphalangienne du pouce ?", "A", "Le long fléchisseur du pouce est le seul muscle fléchissant les articulations interphalangiennes du pouce.", ["Le long fléchisseur du pouce", "Le court fléchisseur du pouce", "L'adducteur du pouce", "L'opposant du pouce"]),
    single("Quelle est l'action principale du carré pronateur ?", "C", "Le carré pronateur est le principal pronateur de l'avant-bras, assisté par le rond pronateur en pronation rapide/forcée.", ["Supination principale", "Flexion du coude", "Principal pronateur de l'avant-bras", "Extension du poignet"]),
    single("Quel muscle du compartiment postérieur superficiel est en réalité un fléchisseur du coude malgré sa classification ?", "B", "Le brachioradial, bien que classé parmi les extenseurs (origine/innervation), est un fléchisseur du coude.", ["L'anconé", "Le brachioradial", "L'extenseur des doigts", "L'extenseur ulnaire du carpe"]),
    single("Quel nerf innerve tous les muscles profonds du compartiment postérieur de l'avant-bras ?", "A", "Le nerf interosseux postérieur (branche profonde du radial) innerve les 5 muscles profonds postérieurs.", ["Le nerf interosseux postérieur (branche du radial)", "Le nerf médian", "Le nerf ulnaire", "Le nerf musculo-cutané"]),
    single("Quelle est l'action du supinateur ?", "C", "Le supinateur assure la supination de l'avant-bras.", ["La pronation de l'avant-bras", "L'extension du poignet", "La supination de l'avant-bras", "L'abduction du pouce"]),
    multi("Quels muscles innervent les muscles thénariens via le nerf médian ?", ["A", "B"], "L'abducteur court du pouce et l'opposant du pouce (ainsi que le chef latéral du court fléchisseur) sont innervés par le nerf médian ; l'adducteur et le chef médial du court fléchisseur sont innervés par l'ulnaire.", ["Court abducteur du pouce", "Opposant du pouce", "Adducteur du pouce", "Chef médial du court fléchisseur du pouce"]),
    single("Quel nerf innerve tous les muscles hypothénariens ?", "B", "Tous les muscles hypothénariens (palmaire bref, abducteur, fléchisseur, opposant du 5e doigt) sont innervés par le nerf ulnaire.", ["Le nerf médian", "Le nerf ulnaire", "Le nerf radial", "Le nerf musculo-cutané"]),
    single("Quels lombricaux sont innervés par le nerf médian ?", "A", "Les deux lombricaux latéraux (index et médius) sont innervés par le nerf médian ; les deux médiaux par l'ulnaire.", ["Les deux lombricaux latéraux (index, médius)", "Les deux lombricaux médiaux (annulaire, auriculaire)", "Les quatre lombricaux", "Aucun lombrical"]),
    single("Quelle est l'action des interosseux palmaires ?", "B", "Les interosseux palmaires adduisent les doigts à l'articulation métacarpophalangienne (PAD).", ["Ils abduisent les doigts", "Ils adduisent les doigts", "Ils fléchissent le poignet", "Ils étendent le coude"]),
    single("Quelle est la différence entre synarthrose et diarthrose ?", "C", "Synarthrose = articulation immobile ; diarthrose = articulation librement mobile (mobilité maximale, articulations synoviales).", ["Ce sont des synonymes", "Synarthrose = mobile, diarthrose = immobile", "Synarthrose = immobile, diarthrose = librement mobile", "Elles ne concernent que le crâne"]),
    single("À quelle catégorie structurale appartiennent les sutures crâniennes ?", "A", "Les sutures sont un type d'articulation fibreuse, propre au crâne.", ["Articulation fibreuse", "Articulation cartilagineuse", "Articulation synoviale", "Aucune des trois"]),
    single("Que produit la membrane synoviale d'une articulation synoviale ?", "B", "La membrane synoviale produit le liquide synovial, qui lubrifie les surfaces articulaires et nourrit les cartilages.", ["Du cartilage hyalin", "Du liquide synovial", "Du tissu fibreux capsulaire", "Des ligaments collatéraux"]),
    single("Qu'est-ce qu'une bourse synoviale ?", "C", "Une bourse est un petit sac tapissé de synoviale, rempli de liquide synovial, situé aux points de friction articulaire ; elle peut s'enflammer (bursite).", ["Un type d'articulation fibreuse", "Un ligament collatéral", "Un sac synovial situé aux points de friction articulaire", "Un disque articulaire cartilagineux"]),
    single("Quel type d'articulation synovial permet uniquement un mouvement de rotation ?", "A", "L'articulation pivot permet uniquement la rotation, autour d'un pivot osseux central entouré d'un anneau ostéo-ligamentaire.", ["Pivot", "Charnière", "En selle", "Sphéroïde"]),
    single("Pourquoi l'épaule est-elle l'articulation la plus fréquemment luxée du corps ?", "B", "C'est l'articulation la plus mobile du corps, ce qui la rend aussi l'une des moins stables.", ["Car sa capsule est particulièrement épaisse", "Car sa grande mobilité s'accompagne d'une faible stabilité", "Car elle ne possède pas de ligaments", "Car elle est dépourvue de labrum"]),
    single("Quelle structure approfondit la cavité glénoïde de la scapula ?", "C", "Le labrum glénoïdien, un anneau fibrocartilagineux, approfondit légèrement mais efficacement la cavité glénoïde.", ["Le ligament coraco-huméral", "La capsule articulaire seule", "Le labrum glénoïdien", "Le ligament huméral transverse"]),
    single("Quelle structure transforme le sillon bicipital en canal pour le tendon du long biceps ?", "A", "Le ligament huméral transverse ponte le sillon bicipital, le transformant en canal pour le tendon du long biceps.", ["Le ligament huméral transverse", "Le ligament coraco-acromial", "Le labrum glénoïdien", "Le ligament glénohuméral inférieur"]),
    single("Quelle structure protège le sommet de l'articulation de l'épaule et empêche le déplacement supérieur de la tête humérale ?", "B", "L'arche coraco-acromiale (processus coracoïde, acromion, ligament coraco-acromial) protège le sommet de l'articulation.", ["Le ligament glénohuméral moyen", "L'arche coraco-acromiale", "Le labrum glénoïdien seul", "Le ligament huméral transverse"]),
    single("Combien d'articulations comprend la région du coude (articulations cubitales) ?", "C", "Trois articulations : huméro-ulnaire, huméro-radiale et radio-ulnaire proximale, partageant la même capsule.", ["Une seule", "Deux", "Trois", "Quatre"]),
    single("Quelles surfaces forment l'articulation huméro-ulnaire ?", "A", "La trochlée de l'humérus et l'incisure trochléaire de l'ulna.", ["Trochlée humérale et incisure trochléaire de l'ulna", "Capitulum huméral et tête radiale", "Tête radiale et incisure radiale de l'ulna", "Tête humérale et cavité glénoïde"]),
    single("Quel ligament du coude est en relation avec le nerf ulnaire ?", "B", "Le ligament collatéral ulnaire (interne) est en relation avec le triceps, le fléchisseur ulnaire du carpe et le nerf ulnaire.", ["Le ligament collatéral radial", "Le ligament collatéral ulnaire", "Le ligament annulaire", "Le ligament antérieur"]),
    single("Quel type d'articulation synoviale est le coude (huméro-ulnaire) ?", "C", "Le coude est une articulation ginglyme (charnière), permettant flexion/extension dans un seul plan.", ["Pivot", "Sphéroïde", "Charnière (ginglyme)", "En selle"]),
    single("Quel mouvement permet l'articulation radio-ulnaire proximale ?", "A", "Elle permet uniquement des mouvements de rotation de la tête radiale (pronation en avant, supination en arrière).", ["Rotation de la tête radiale (pronation/supination)", "Flexion/extension", "Abduction/adduction", "Circumduction complète"]),
  ],
  exam: { titre_fr: "Examen chronométré — Muscles et articulations du membre supérieur", duration_seconds: 2_400 },
};

export const UPPER_LIMB_MUSCLES_JOINTS_1_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quels sont les trois muscles du compartiment antérieur du bras ?", question_en: "What are the three muscles of the anterior arm compartment?", answer_fr: "Biceps brachial, coracobrachial et brachial.", answer_en: "Biceps brachii, coracobrachialis, and brachialis." },
  { question_fr: "Quel nerf innerve les muscles du compartiment antérieur du bras ?", question_en: "Which nerve innervates the anterior arm compartment muscles?", answer_fr: "Le nerf musculo-cutané.", answer_en: "The musculocutaneous nerve." },
  { question_fr: "D'où naissent les deux chefs du biceps brachial ?", question_en: "Where do the two heads of biceps brachii originate?", answer_fr: "Chef long : tubercule supraglénoïdien ; chef court : apex du processus coracoïde.", answer_en: "Long head: supraglenoid tubercle; short head: apex of the coracoid process." },
  { question_fr: "Quelles sont les actions du biceps brachial ?", question_en: "What are the actions of biceps brachii?", answer_fr: "Supinateur puissant coude fléchi, fléchisseur du coude étendu, fléchisseur faible de l'épaule.", answer_en: "Powerful supinator with elbow flexed, elbow flexor when extended, weak shoulder flexor." },
  { question_fr: "Quel muscle est perforé par le nerf musculo-cutané ?", question_en: "Which muscle is pierced by the musculocutaneous nerve?", answer_fr: "Le coracobrachial.", answer_en: "Coracobrachialis." },
  { question_fr: "Quel muscle forme le plancher de la fosse cubitale ?", question_en: "Which muscle forms the floor of the cubital fossa?", answer_fr: "Le brachial.", answer_en: "Brachialis." },
  { question_fr: "Quel est le seul muscle du compartiment postérieur du bras ?", question_en: "What is the only muscle of the posterior arm compartment?", answer_fr: "Le triceps brachial.", answer_en: "Triceps brachii." },
  { question_fr: "Où s'insère le triceps brachial ?", question_en: "Where does triceps brachii insert?", answer_fr: "Sur la face supérieure postérieure de l'olécrane.", answer_en: "On the posterior part of the superior surface of the olecranon." },
  { question_fr: "Quel nerf passe entre les deux chefs du rond pronateur ?", question_en: "Which nerve passes between the two heads of pronator teres?", answer_fr: "Le nerf médian.", answer_en: "The median nerve." },
  { question_fr: "Quelle est l'action principale du rond pronateur ?", question_en: "What is the main action of pronator teres?", answer_fr: "Principal pronateur de l'avant-bras ; aide à la flexion du coude.", answer_en: "Main pronator of the forearm; assists elbow flexion." },
  { question_fr: "Quel tendon repère l'artère radiale au poignet ?", question_en: "Which tendon serves as a landmark for the radial artery at the wrist?", answer_fr: "Le tendon du fléchisseur radial du carpe.", answer_en: "The tendon of flexor carpi radialis." },
  { question_fr: "De quoi le long palmaire est-il l'origine anatomique ?", question_en: "What structure is palmaris longus the origin of, anatomically?", answer_fr: "L'aponévrose palmaire, qui représente la partie distale de son tendon.", answer_en: "The palmar aponeurosis, which represents the distal part of its tendon." },
  { question_fr: "Quel nerf passe entre les deux chefs du fléchisseur ulnaire du carpe ?", question_en: "Which nerve passes between the two heads of flexor carpi ulnaris?", answer_fr: "Le nerf ulnaire.", answer_en: "The ulnar nerve." },
  { question_fr: "Sur quel os sésamoïde s'insère principalement le fléchisseur ulnaire du carpe ?", question_en: "Onto which sesamoid bone does flexor carpi ulnaris mainly insert?", answer_fr: "Le pisiforme.", answer_en: "The pisiform." },
  { question_fr: "Quelle articulation fléchit le fléchisseur superficiel des doigts ?", question_en: "Which joint does flexor digitorum superficialis flex?", answer_fr: "Les articulations interphalangiennes proximales (IPP) des 4 doigts médiaux.", answer_en: "The proximal interphalangeal (PIP) joints of the medial four digits." },
  { question_fr: "Quel est le seul muscle fléchissant l'articulation interphalangienne du pouce ?", question_en: "What is the only muscle that flexes the interphalangeal joint of the thumb?", answer_fr: "Le long fléchisseur du pouce.", answer_en: "Flexor pollicis longus." },
  { question_fr: "Quelle articulation fléchit le fléchisseur profond des doigts ?", question_en: "Which joint does flexor digitorum profundus flex?", answer_fr: "Les articulations interphalangiennes distales (IPD) des 4 doigts médiaux.", answer_en: "The distal interphalangeal (DIP) joints of the medial four digits." },
  { question_fr: "De quel muscle le fléchisseur profond des doigts donne-t-il origine ?", question_en: "Which muscles originate from flexor digitorum profundus?", answer_fr: "Les muscles lombricaux de la paume.", answer_en: "The lumbrical muscles of the palm." },
  { question_fr: "Quel muscle est le principal pronateur de l'avant-bras (assisté par le rond pronateur en pronation forcée) ?", question_en: "Which muscle is the chief pronator of the forearm (assisted by pronator teres in forceful pronation)?", answer_fr: "Le carré pronateur.", answer_en: "Pronator quadratus." },
  { question_fr: "Pourquoi le brachioradial est-il classé parmi les extenseurs malgré son action de fléchisseur ?", question_en: "Why is brachioradialis classified as an extensor muscle despite acting as a flexor?", answer_fr: "Son origine et son innervation sont caractéristiques d'un extenseur (nerf radial), bien qu'il fléchisse le coude.", answer_en: "Its origin and innervation are characteristic of an extensor (radial nerve), even though it flexes the elbow." },
  { question_fr: "Quel nerf innerve tous les muscles superficiels du compartiment postérieur de l'avant-bras ?", question_en: "Which nerve innervates all superficial posterior forearm muscles?", answer_fr: "Le nerf radial.", answer_en: "The radial nerve." },
  { question_fr: "Quel nerf innerve tous les muscles profonds du compartiment postérieur de l'avant-bras ?", question_en: "Which nerve innervates all deep posterior forearm muscles?", answer_fr: "Le nerf interosseux postérieur, branche profonde du nerf radial.", answer_en: "The posterior interosseous nerve, a deep branch of the radial nerve." },
  { question_fr: "Quelle est l'action du supinateur ?", question_en: "What is the action of the supinator muscle?", answer_fr: "La supination de l'avant-bras.", answer_en: "Supination of the forearm." },
  { question_fr: "Quels sont les deux groupes de muscles intrinsèques de la main formant les éminences de la paume ?", question_en: "What are the two groups of intrinsic hand muscles forming the palm eminences?", answer_fr: "Les muscles thénariens et hypothénariens.", answer_en: "The thenar and hypothenar muscles." },
  { question_fr: "Quel muscle thénarien est le plus profond ?", question_en: "Which thenar muscle lies deepest?", answer_fr: "L'adducteur du pouce.", answer_en: "Adductor pollicis." },
  { question_fr: "Quels muscles thénariens sont innervés par le nerf ulnaire ?", question_en: "Which thenar muscles are innervated by the ulnar nerve?", answer_fr: "Le chef médial du court fléchisseur du pouce et l'adducteur du pouce.", answer_en: "The medial head of flexor pollicis brevis and adductor pollicis." },
  { question_fr: "Quel nerf innerve tous les muscles hypothénariens ?", question_en: "Which nerve innervates all hypothenar muscles?", answer_fr: "Le nerf ulnaire.", answer_en: "The ulnar nerve." },
  { question_fr: "Quelle est l'action du palmaire bref ?", question_en: "What is the action of palmaris brevis?", answer_fr: "Plisse la peau de l'éminence hypothénar, améliore la prise.", answer_en: "Wrinkles the skin of the hypothenar eminence, improving grip." },
  { question_fr: "Combien de muscles lombricaux existe-t-il et comment sont-ils numérotés ?", question_en: "How many lumbrical muscles are there and how are they numbered?", answer_fr: "Quatre, numérotés 1 à 4 de latéral à médial.", answer_en: "Four, numbered 1 to 4 from lateral to medial." },
  { question_fr: "Quelle est l'action des muscles lombricaux ?", question_en: "What is the action of the lumbrical muscles?", answer_fr: "Flexion de l'articulation métacarpophalangienne, extension des interphalangiennes proximale et distale.", answer_en: "Flexion of the metacarpophalangeal joint, extension of the proximal and distal interphalangeal joints." },
  { question_fr: "Quels lombricaux sont innervés par le nerf ulnaire ?", question_en: "Which lumbricals are innervated by the ulnar nerve?", answer_fr: "Les deux lombricaux médiaux (annulaire et auriculaire).", answer_en: "The two medial lumbricals (ring and little finger)." },
  { question_fr: "Combien d'interosseux dorsaux et palmaires existe-t-il ?", question_en: "How many dorsal and palmar interossei are there?", answer_fr: "Quatre dorsaux et trois palmaires.", answer_en: "Four dorsal and three palmar." },
  { question_fr: "Quelle est l'action des interosseux dorsaux ?", question_en: "What is the action of the dorsal interossei?", answer_fr: "Abduction des doigts à l'articulation métacarpophalangienne.", answer_en: "Abduction of the fingers at the metacarpophalangeal joint." },
  { question_fr: "Quels sont les trois types structuraux d'articulations fibreuses ?", question_en: "What are the three structural types of fibrous joints?", answer_fr: "Sutures, syndesmoses, gomphoses.", answer_en: "Sutures, syndesmoses, gomphoses." },
  { question_fr: "Donnez un exemple de synchondrose (articulation cartilagineuse primaire).", question_en: "Give an example of a synchondrosis (primary cartilaginous joint).", answer_fr: "La première articulation costo-sternale.", answer_en: "The first costosternal joint." },
  { question_fr: "Donnez un exemple de symphyse (articulation cartilagineuse secondaire).", question_en: "Give an example of a symphysis (secondary cartilaginous joint).", answer_fr: "La symphyse pubienne.", answer_en: "The pubic symphysis." },
  { question_fr: "Qu'est-ce qui tapisse la cavité d'une articulation synoviale, hormis les cartilages ?", question_en: "What lines the cavity of a synovial joint, except over the cartilages?", answer_fr: "La membrane synoviale.", answer_en: "The synovial membrane." },
  { question_fr: "Quel type d'articulation synoviale est le coude ?", question_en: "What type of synovial joint is the elbow?", answer_fr: "Une articulation charnière (ginglyme).", answer_en: "A hinge (ginglymus) joint." },
  { question_fr: "Quel type d'articulation synoviale sont les articulations carpométacarpiennes ?", question_en: "What type of synovial joint are the carpometacarpal joints?", answer_fr: "Des articulations en selle.", answer_en: "Saddle joints." },
  { question_fr: "Quel type d'articulation synoviale sont l'épaule et la hanche ?", question_en: "What type of synovial joint are the shoulder and hip?", answer_fr: "Des articulations sphéroïdes (ball-and-socket).", answer_en: "Ball-and-socket joints." },
  { question_fr: "Pourquoi l'épaule est-elle l'articulation la plus mobile mais la moins stable ?", question_en: "Why is the shoulder the most mobile but least stable joint?", answer_fr: "Sa cavité glénoïde est peu profonde par rapport à la grosse tête humérale.", answer_en: "Its glenoid cavity is shallow relative to the large humeral head." },
  { question_fr: "Quelle structure approfondit légèrement la cavité glénoïde ?", question_en: "What structure slightly deepens the glenoid cavity?", answer_fr: "Le labrum glénoïdien.", answer_en: "The glenoid labrum." },
  { question_fr: "Quel tendon est englobé dans la capsule de l'épaule ?", question_en: "Which tendon is enclosed within the shoulder joint capsule?", answer_fr: "Le tendon du chef long du biceps brachial.", answer_en: "The tendon of the long head of biceps brachii." },
  { question_fr: "Quel muscle renforce la capsule de l'épaule en avant ?", question_en: "Which muscle reinforces the shoulder capsule anteriorly?", answer_fr: "Le sous-scapulaire.", answer_en: "Subscapularis." },
  { question_fr: "Quels muscles renforcent la capsule de l'épaule en arrière ?", question_en: "Which muscles reinforce the shoulder capsule posteriorly?", answer_fr: "L'infra-épineux et le petit rond.", answer_en: "Infraspinatus and teres minor." },
  { question_fr: "Quelle structure forme l'arche coraco-acromiale ?", question_en: "What structures form the coracoacromial arch?", answer_fr: "Le processus coracoïde, l'acromion, et le ligament coraco-acromial entre eux.", answer_en: "The coracoid process, the acromion, and the coracoacromial ligament between them." },
  { question_fr: "Quelle bourse est aussi appelée bourse sous-deltoïdienne ?", question_en: "Which bursa is also called the subdeltoid bursa?", answer_fr: "La bourse sous-acromiale.", answer_en: "The subacromial bursa." },
  { question_fr: "Combien d'articulations comprend la région du coude au total ?", question_en: "How many joints does the elbow region contain in total?", answer_fr: "Trois : huméro-ulnaire, huméro-radiale, radio-ulnaire proximale.", answer_en: "Three: humeroulnar, humeroradial, proximal radioulnar." },
  { question_fr: "Quelles surfaces forment l'articulation huméro-radiale ?", question_en: "What surfaces form the humeroradial joint?", answer_fr: "Le capitulum de l'humérus et la tête du radius.", answer_en: "The capitulum of the humerus and the head of the radius." },
  { question_fr: "Quel ligament du coude se mêle au tendon du supinateur ?", question_en: "Which elbow ligament blends with the tendon of supinator?", answer_fr: "Le ligament collatéral radial.", answer_en: "The radial collateral ligament." },
  { question_fr: "Quelles bourses sont associées au coude ?", question_en: "Which bursae are associated with the elbow?", answer_fr: "Subtendineuse et sous-cutanée de l'olécrane, bicipito-radiale, interosseuse.", answer_en: "Subtendinous and subcutaneous olecranon bursae, bicipitoradial bursa, interosseous bursa." },
  { question_fr: "Quel type d'articulation synoviale est l'articulation radio-ulnaire proximale ?", question_en: "What type of synovial joint is the proximal radioulnar joint?", answer_fr: "Une articulation pivot.", answer_en: "A pivot joint." },
  { question_fr: "Quel ligament maintient la tête radiale contre l'incisure radiale de l'ulna ?", question_en: "Which ligament holds the radial head against the radial notch of the ulna?", answer_fr: "Le ligament annulaire.", answer_en: "The annular ligament." },
  { question_fr: "Que produit une rotation vers l'avant au niveau de l'articulation radio-ulnaire proximale ?", question_en: "What does forward rotation at the proximal radioulnar joint produce?", answer_fr: "La pronation.", answer_en: "Pronation." },
];
