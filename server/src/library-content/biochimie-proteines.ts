import type { LibraryLearningSeed } from "./biochimie-s1.js";

const letters = ["A", "B", "C", "D", "E"];

function question(
  prompt_fr: string,
  correct: string[],
  explanation_fr: string,
  options: string[],
  multiple_answers: boolean,
) {
  return {
    prompt_fr,
    explanation_fr,
    multiple_answers,
    options: options.map((label_fr, index) => ({
      key: letters[index],
      label_fr,
      correct: correct.includes(letters[index]),
    })),
  };
}

const multi = (
  prompt: string,
  correct: string[],
  explanation: string,
  options: string[],
) => question(prompt, correct, explanation, options, true);

const single = (
  prompt: string,
  correct: string,
  explanation: string,
  options: string[],
) => question(prompt, [correct], explanation, options, false);

const COMPOSITION_COURSE = `# Chapitre 2 — Composition et structure des protéines

## 1. Propriétés générales : la structure dicte la fonction
- Les protéines sont des polymères linéaires d'acides aminés, aux groupes fonctionnels variés.
- Elles interagissent entre elles et avec d'autres macromolécules pour former des complexes ; certaines sont rigides, d'autres flexibles, et cette flexibilité est fonctionnelle.
- **Niveaux d'organisation :** primaire (séquence), secondaire (repliements locaux : hélice α, feuillet β, coudes), tertiaire (repliement de la chaîne entière), quaternaire (assemblage de plusieurs chaînes).

## 2. Les 20 acides aminés
### Stéréochimie et ionisation
- Le carbone α porte NH3+, COO−, H et la chaîne R. Les protéines utilisent les isomères L ; la glycine n'est pas chirale.
- À pH neutre, les acides aminés libres sont des zwitterions. Les transitions correspondent à pK1 (carboxyle) et pK2 (amino).

### Classification des chaînes latérales
| Nature | Acides aminés |
| --- | --- |
| Aliphatiques | Gly, Ala, Val, Leu, Ile |
| Hydroxylées | Ser, Thr, Tyr |
| Soufrées | Cys, Met |
| Acides / amides | Asp, Asn, Glu, Gln |
| Basiques | Lys, Arg, His |
| Aromatiques | Phe, Tyr, Trp |
| Imino-acide | Pro |

### Classes fonctionnelles et pKa
- Hydrophobes : Gly, Ala, Pro, Val, Leu, Ile, Met, Trp, Phe. Polaires non chargés : Ser, Thr, Tyr, Asn, Gln, Cys. Positifs : Lys, Arg, His. Négatifs : Asp, Glu.
- Les groupes ionisables typiques : α-carboxyle 3,1 ; Asp/Glu 4,1 ; His 6,0 ; α-amino 8,0 ; Cys 8,3 ; Tyr 10,0 ; Lys 10,4 ; Arg 12,5.
- Codes : Ala/A, Arg/R, Asn/N, Asp/D, Cys/C, Gln/Q, Glu/E, Gly/G, His/H, Ile/I, Leu/L, Lys/K, Met/M, Phe/F, Pro/P, Ser/S, Thr/T, Trp/W, Tyr/Y, Val/V. Asx/B = Asn ou Asp ; Glx/Z = Gln ou Glu.

## 3. Structure primaire et liaison peptidique
- La liaison peptidique est une condensation entre le carboxyle d'un résidu et l'amine du suivant. La chaîne se lit de N vers C.
- Le squelette porte C=O et N–H ; une protéine compte souvent 50 à 2 000 résidus d'environ 110 Da chacun.
- Deux cystéines oxydées forment un pont disulfure (cystine), réversible par réduction. L'insuline comporte deux ponts inter-chaînes et un pont intra-chaîne.
- La liaison peptidique est non chargée, plane, à caractère de double liaison partielle : sa rotation est interdite. Les rotations φ (N–Cα) et ψ (Cα–carbonyle) déterminent la conformation ; le diagramme de Ramachandran indique les couples permis.

## 4. Peptides biologiquement importants
- Le glutathion est le tripeptide γ-Glu–Cys–Gly. La glutathion peroxydase transforme GSH en GSSG et la glutathion réductase régénère GSH grâce au NADPH issu de la voie des pentoses phosphates.
- **Hormones à connaître :** ocytocine, vasopressine et bradykinine (9 aa) ; angiotensine II (8 aa, ↑ pression) ; glucagon (29 aa, ↑ glycémie) ; insuline (51 aa, ↓ glycémie) ; calcitonine (32 aa, ↓ calcémie) ; PTH (84 aa, ↑ calcémie) ; ANP (28 aa, ↓ pression).

## Points à retenir
- Seuls les L-acides aminés entrent dans les protéines.
- La séquence primaire porte l'information de structure et de fonction.
- La liaison peptidique est plane ; la forme trans est majoritaire, sauf exception de la proline.
- Le NADPH protège les globules rouges du stress oxydatif en régénérant le glutathion.`;

const STRUCTURE_REVISION = `# Biochimie – Lecture 3 : Structure des protéines (II)

## 1. Structure secondaire
### 1.1 Hélice α
- Liaisons H intra-chaîne CO(i) → NH(i+4), R vers l'extérieur, hélices presque toutes droitières (φ ≈ −60°, ψ ≈ −50°).
- Val, Thr et Ile déstabilisent par encombrement ; Ser et Asp perturbent les liaisons H ; Pro n'a pas de NH et son cycle impose une géométrie défavorable.
### 1.2 Feuillet β
- Chaîne étendue, périodicité 7 Å pour 2 résidus ; liaisons H entre brins adjacents.
- Orientations parallèle, antiparallèle ou mixte ; φ ≈ −120°, ψ ≈ +130°.
### 1.3 Coudes et boucles
- Coude inverse : liaison H CO(i) → NH(i+3), sur quatre résidus. Les boucles de surface assurent notamment la reconnaissance moléculaire.

## 2. Structure tertiaire
- Myoglobine : protéine globulaire compacte, principalement hélicoïdale, avec hème.
- Protéine soluble : surface polaire/chargée, cœur hydrophobe. Protéine-canal : extérieur hydrophobe, canal interne hydrophile.
- Un motif est une structure supersecondaire récurrente (ex. helix-turn-helix) ; un domaine se replie indépendamment dans un même polypeptide.
- **α-kératine :** deux hélices α droitières forment une superhélice gauche, stabilisée par interactions ioniques et de van der Waals ; leucine tous les 7 résidus.
- **Collagène :** triple hélice avec Gly tous les 3 résidus. Ce ne sont pas des hélices α ; la petite glycine seule tient au centre. La substitution d'une glycine peut causer une ostéogenèse imparfaite.

## 3. Structure quaternaire
- Association de sous-unités : homodimère Cro, hémoglobine α2β2, capside du rhinovirus.

## 4. Séquence, repliement et expérience d'Anfinsen
- L'urée détruit les interactions non covalentes ; le β-mercaptoéthanol réduit les ponts disulfure.
- Après retrait contrôlé des réactifs, la ribonucléase retrouve activité et structure : la séquence primaire contient l'information du repliement ; la forme native est la plus stable.

## 5. Repliement des protéines
- Propensions à retenir : Glu favorise l'hélice (1,59), Val le feuillet β (1,87), Gly le coude (1,77). Le contexte structural compte.
- Le repliement est coopératif, de type tout ou rien. Il stabilise progressivement des intermédiaires plutôt que de procéder par recherche aléatoire.
- Les IUP n'ont pas de structure fixe sans partenaire ; les protéines métamorphiques alternent entre conformations proches en énergie.

## 6. Mauvais repliement et maladies
- Les amyloïdoses viennent d'agrégats riches en feuillets β. Un noyau de PrPSc peut recruter et convertir la PrP normale.

## 7. Modifications post-traductionnelles et pièges
- Vitamine C : hydroxylation des prolines du collagène ; carence = scorbut.
- Vitamine K : γ-carboxylation des protéines de coagulation ; carence = hémorragies.
- À distinguer : hélice α i→i+4, coude β i→i+3 ; liaisons H intra-chaîne dans l'hélice mais inter-brins dans le feuillet ; coiled-coil gauche malgré hélices droitières ; collagène ≠ hélice α.`;

export const COMPOSITION_PROTEINS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Composition et structure des protéines",
    source_label: "MedByJes — Chapitre 2 · Composition et structure des protéines (Berg, Tymoczko, Gatto & Stryer, Biochemistry, 9e éd.)",
    content_fr: COMPOSITION_COURSE,
  },
  qcm: [
    multi("Propriétés générales des protéines :", ["A", "B", "D", "E"], "Les protéines sont des polymères aux groupes fonctionnels variés ; elles peuvent former des complexes et leur structure dicte leur fonction. Certaines sont flexibles.", ["Ce sont des polymères linéaires d'acides aminés.", "Elles présentent une grande variété de groupes fonctionnels.", "Toutes les protéines sont rigides.", "Elles peuvent former des complexes avec d'autres macromolécules.", "La structure d'une protéine détermine sa fonction."]),
    multi("Les niveaux d'organisation des protéines :", ["A", "B", "D", "E"], "L'hélice α est une structure secondaire. La structure tertiaire concerne la chaîne entière et l'assemblage de chaînes est quaternaire.", ["La structure primaire est la séquence d'acides aminés.", "La structure secondaire correspond au repliement régulier de résidus voisins.", "L'hélice α est un exemple de structure tertiaire.", "La structure tertiaire correspond au repliement de la chaîne entière.", "L'assemblage de six molécules d'insuline illustre la structure quaternaire."]),
    multi("Chiralité des acides aminés :", ["A", "B", "C"], "Les isomères L et D sont des images miroir ; seules les formes L sont présentes dans les protéines. La glycine n'est pas chirale car elle porte deux hydrogènes.", ["Le carbone α porte quatre groupes différents.", "Les acides aminés existent sous forme d'isomères L et D.", "Les isomères L et D sont images l'un de l'autre dans un miroir.", "Les protéines contiennent à la fois des isomères L et D.", "La glycine possède un carbone α asymétrique."]),
    multi("Notation R/S des stéréoisomères :", ["A", "C", "D", "E"], "Les priorités suivent le numéro atomique et le substituant de plus faible priorité est orienté à l'opposé. S = antihoraire ; R = horaire.", ["La priorité des substituants est attribuée selon le numéro atomique.", "Le substituant de plus faible priorité est orienté vers l'observateur.", "S vient de sinister et correspond à une progression antihoraire.", "R vient de rectus et correspond à une progression horaire.", "La progression se lit de la priorité la plus haute vers la plus basse."]),
    multi("État d'ionisation des acides aminés libres :", ["A", "B", "D", "E"], "À pH neutre, le zwitterion porte NH3+ et COO−. À pH acide les groupes sont protonés ; à pH basique ils sont déprotonés.", ["À pH neutre, ils existent sous forme d'ions dipolaires.", "Le zwitterion porte un groupe NH3+ et un groupe COO−.", "À pH très acide, les deux groupes sont déprotonés.", "À pH très basique, les deux groupes sont déprotonés.", "Les transitions sont décrites par pK1 et pK2."]),
    multi("Acides aminés à chaîne latérale aliphatique :", ["A", "B", "D", "E"], "La sérine est hydroxylée ; glycine, valine, leucine et isoleucine sont aliphatiques.", ["Glycine", "Valine", "Sérine", "Leucine", "Isoleucine"]),
    multi("Chaînes latérales particulières :", ["A", "B", "E"], "Cys et Met sont soufrées ; Ser et Thr sont hydroxylées ; Arg porte un guanidinium et His un imidazole ; Trp contient un indole.", ["La cystéine et la méthionine contiennent du soufre.", "La sérine et la thréonine contiennent un groupe hydroxyle.", "L'arginine contient un groupe imidazole.", "L'histidine contient un groupe guanidinium.", "Le tryptophane contient un groupe indole."]),
    multi("Les acides aminés aromatiques et la proline :", ["A", "B", "C"], "Phe, Tyr et Trp sont aromatiques. Tyr est également hydroxylée ; Pro est cyclique, imino-acide et Phe est hydrophobe.", ["Phénylalanine, tyrosine et tryptophane possèdent un cycle aromatique.", "La tyrosine peut être classée parmi les aromatiques et les hydroxylés.", "La proline est un imino-acide.", "La proline possède une chaîne latérale linéaire.", "La phénylalanine est un acide aminé polaire."]),
    multi("Les acides aminés chargés :", ["A", "B", "D", "E"], "Asn et Gln sont des amides polaires non chargés. Les charges indiquées sont celles au pH physiologique ; le pKa de His est voisin de 6.", ["Lysine, arginine et histidine sont chargés positivement au pH physiologique.", "Aspartate et glutamate sont chargés négativement au pH physiologique.", "Asparagine et glutamine sont chargées négativement.", "La charge indiquée est celle attendue au pH physiologique.", "L'histidine a un pKa voisin de 6."]),
    multi("À propos de l'histidine :", ["A", "B", "D", "E"], "Son pKa ≈ 6 la rend apte à accepter ou céder un proton ; elle porte un imidazole. 10,4 est le pKa de la lysine.", ["Son pKa est proche du pH physiologique.", "Elle peut accepter ou céder un proton facilement au pH physiologique.", "Son pKa est de 10,4.", "Elle contient un cycle imidazole.", "Elle fait partie des acides aminés chargés positivement."]),
    multi("Les pKa des groupes ionisables :", ["A", "B", "C", "E"], "Les valeurs typiques sont 3,1 pour α-carboxyle, 8,0 pour α-amino, 8,3 pour Cys et 12,5 pour Arg. Tyr est à 10,0.", ["α-carboxyle terminal : 3,1.", "α-amino terminal : 8,0.", "Cystéine : 8,3.", "Tyrosine : 12,5.", "Arginine : 12,5."]),
    multi("Concernant les valeurs de pKa dans les protéines :", ["A", "C", "D", "E"], "Ce sont des valeurs typiques dépendantes de la température, de la force ionique et du microenvironnement.", ["Sept des vingt acides aminés ont une chaîne latérale facilement ionisable.", "Les valeurs de pKa sont strictement constantes quelles que soient les conditions.", "Elles dépendent de la température.", "Elles dépendent de la force ionique.", "Elles dépendent du microenvironnement du groupe ionisable."]),
    multi("Abréviations des acides aminés :", ["A", "B", "D", "E"], "W est Trp, K est Lys, E est Glu et Q est Gln. Les deux codes d'ambiguïté sont Asx/B et Glx/Z.", ["W désigne le tryptophane.", "K désigne la lysine.", "E désigne la glutamine.", "Asx (B) désigne l'asparagine ou l'acide aspartique.", "Glx (Z) désigne la glutamine ou l'acide glutamique."]),
    multi("Pourquoi ces 20 acides aminés ? Les hypothèses avancées incluent :", ["A", "B", "C"], "La raison exacte reste inconnue. Les hypothèses mentionnent polyvalence chimique, disponibilité prébiotique et réactivité potentielle des plus gros acides aminés.", ["Ils offrent une grande polyvalence chimique.", "Ils étaient disponibles pour les réactions prébiotiques.", "Des acides aminés plus gros seraient trop réactifs.", "La raison exacte est parfaitement établie.", "Ils sont les seuls acides aminés existant dans la nature."]),
    multi("La formation de la liaison peptidique :", ["A", "B", "D", "E"], "C'est une condensation avec perte d'eau entre le carboxyle et l'amine, réversible à l'équilibre. L'hydrolyse, elle, consomme de l'eau.", ["Elle unit deux acides aminés.", "Elle s'accompagne de la perte d'une molécule d'eau.", "Elle s'accompagne de l'incorporation d'une molécule d'eau.", "Elle est réversible.", "Elle relie le carboxyle d'un résidu à l'amine du suivant."]),
    multi("Directionnalité et description du polypeptide :", ["A", "C", "D", "E"], "La chaîne est polarisée N→C. Les C=O et N–H du squelette permettent les liaisons H et les chaînes latérales constituent la partie variable.", ["Un polypeptide possède une directionnalité, aussi appelée polarité.", "Par convention, l'extrémité carboxy-terminale est le début de la chaîne.", "Le squelette possède un potentiel de liaisons hydrogène grâce aux C=O et aux N–H.", "La partie variable est constituée des chaînes latérales.", "La masse moléculaire moyenne d'un résidu est de 110 g·mol−1."]),
    multi("Taille et masse des protéines :", ["A", "B", "C", "D"], "Une protéine de 300 résidus a une masse d'environ 33 kDa (300 × 110 Da). Les protéines ne comptent pas toutes plus de 2 000 résidus.", ["La plupart des protéines comptent de 50 à 2 000 acides aminés.", "Le dalton correspond approximativement à la masse d'un atome d'hydrogène.", "Une protéine de 300 résidus a une masse d'environ 33 kDa.", "La masse des protéines s'exprime couramment en kilodaltons.", "Toutes les protéines comptent plus de 2 000 résidus."]),
    multi("Les ponts disulfures :", ["A", "C", "D", "E"], "Deux cystéines s'oxydent via leurs thiols pour former la cystine, avec libération de 2 H+ et 2 e− ; le processus est réversible par réduction.", ["Ils résultent de l'oxydation de deux cystéines.", "Ils résultent de la réduction de deux méthionines.", "Le produit formé est parfois appelé cystine.", "Leur formation libère 2 H+ et 2 e−.", "Ils sont réversibles par réduction."]),
    multi("L'insuline et le travail de Sanger :", ["A", "B", "C", "E"], "Sanger a séquencé l'insuline en 1953, démontrant qu'une protéine a une séquence définie de L-acides aminés. L'insuline a des ponts inter- et intra-chaîne.", ["Sanger a déterminé la séquence de l'insuline en 1953.", "L'insuline comporte des ponts disulfures inter-chaînes et un pont intra-chaîne.", "Ce travail a montré qu'une protéine possède une séquence précisément définie.", "L'insuline contient des D-acides aminés.", "L'insuline est une hormone protéique."]),
    multi("Pourquoi connaître la séquence d'une protéine ?", ["A", "B", "C", "D"], "La séquence aide à comprendre fonction, structure 3D, maladie et évolution. Elle ne prédit pas directement la vitesse de toutes les réactions cellulaires.", ["Elle est généralement essentielle pour élucider la fonction.", "Elle détermine la structure tridimensionnelle.", "Ses altérations peuvent conduire à un dysfonctionnement et une maladie.", "Elle renseigne sur l'histoire évolutive de la protéine.", "Elle permet de prédire directement la vitesse de toutes les réactions cellulaires."]),
    multi("Caractéristiques de la liaison peptidique :", ["B", "C", "D"], "La liaison peptidique est non chargée, plane et à caractère partiel de double liaison : la rotation autour d'elle est interdite.", ["Elle est chargée négativement.", "Elle est essentiellement plane.", "Six atomes se situent dans le plan : Cα, C, O, N, H et Cα.", "Elle possède un caractère partiel de double liaison par résonance.", "La rotation autour de cette liaison est libre."]),
    multi("Longueurs de liaison et configuration cis/trans :", ["A", "B", "D", "E"], "C–N mesure 1,32 Å, plus court que N–Cα (1,45 Å). La forme trans est majoritaire ; la proline est l'exception classique.", ["La liaison C–N de l'unité peptidique mesure 1,32 Å.", "La liaison N–Cα mesure 1,45 Å.", "La liaison C–N est plus longue que la liaison N–Cα.", "La forme trans est fortement favorisée dans la plupart des cas.", "Quand une proline suit un autre acide aminé, les formes cis et trans sont à peu près équiprobables."]),
    multi("Angles de torsion du squelette polypeptidique :", ["A", "B", "C", "E"], "φ est la rotation N–Cα, ψ celle Cα–carbonyle ; les valeurs vont de −180° à +180° mais les couples stériquement gênés sont exclus.", ["L'angle φ décrit la rotation autour de la liaison N–Cα.", "L'angle ψ décrit la rotation autour de la liaison Cα–carbonyle.", "Ces angles varient de −180° à +180°.", "Toutes les combinaisons d'angles φ et ψ sont permises.", "Le diagramme de Ramachandran représente les couples sans encombrement stérique."]),
    multi("Le glutathion :", ["A", "B", "C", "D"], "Le GSH est γ-Glu–Cys–Gly. Le NADPH de la voie des pentoses régénère le GSH ; un déficit en G6PD rend au contraire sensible au stress oxydatif.", ["C'est un tripeptide γ-glutamyl-cystéinyl-glycine.", "Il protège contre les espèces réactives de l'oxygène.", "Le GSSG est converti en GSH par la glutathion réductase, aux dépens du NADPH.", "Le NADPH nécessaire provient de la voie des pentoses phosphates.", "Un déficit en glucose-6-phosphate déshydrogénase protège du stress oxydatif."]),
    multi("Hormones peptidiques :", ["A", "B", "D", "E"], "L'ocytocine et la vasopressine comptent 9 aa ; l'angiotensine II (8 aa) augmente la pression, la calcitonine abaisse la calcémie, la PTH l'augmente et l'ANP baisse la pression.", ["L'ocytocine et la vasopressine comptent chacune 9 acides aminés.", "L'angiotensine II compte 8 acides aminés et élève la pression artérielle.", "La calcitonine élève la calcémie.", "La parathormone compte 84 acides aminés et élève la calcémie.", "Le peptide natriurétique auriculaire abaisse la pression artérielle."]),
  ],
  exam: { titre_fr: "Examen chronométré — Composition et structure des protéines", duration_seconds: 1_500 },
};

export const STRUCTURE_PROTEINS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "revision",
    titre_fr: "Fiche de révision — Structure des protéines (II)",
    source_label: "Biochimie – Lecture 3 · Structure des protéines (II), Berg Biochemistry 9e, sections 2.3 à 2.6, UMFT 2025-2026",
    content_fr: STRUCTURE_REVISION,
  },
  qcm: [
    single("La structure secondaire d'une protéine est stabilisée par :", "B", "Par définition, les liaisons H concernent les groupes NH et C=O du squelette peptidique ; les chaînes R ne sont pas impliquées.", ["des ponts disulfure entre cystéines", "des liaisons hydrogène entre les groupes NH et C=O du squelette peptidique", "des interactions entre chaînes latérales R éloignées dans la séquence", "des liaisons ioniques entre sous-unités différentes"]),
    single("Dans une hélice α, la liaison hydrogène s'établit entre le CO du résidu i et le NH du résidu :", "D", "Dans l'hélice α, le motif est i → i+4. Il ne faut pas le confondre avec le coude β i → i+3.", ["i + 1", "i + 2", "i + 3", "i + 4"]),
    single("Concernant les groupes R dans une hélice α :", "C", "Les chaînes latérales R rayonnent vers l'extérieur ; les CO et NH du squelette forment les liaisons H.", ["ils pointent vers l'axe central de l'hélice", "ils forment les liaisons H qui stabilisent l'hélice", "ils rayonnent vers l'extérieur de l'axe de l'hélice", "ils sont obligatoirement hydrophobes"]),
    single("Les hélices α rencontrées dans les protéines sont :", "B", "Les hélices droitières sont énergétiquement plus favorables ; les hélices gauchères sont très rares.", ["presque toutes gauchères", "presque toutes droitières", "en proportions égales", "toujours gauchères"]),
    single("Quel acide aminé déstabilise l'hélice α parce qu'il ne possède pas de groupe NH ?", "C", "La proline n'a pas de NH donneur de liaison H et son cycle empêche l'angle φ requis.", ["Glycine", "Sérine", "Proline", "Valine"]),
    single("Val, Thr et Ile déstabilisent l'hélice α principalement parce qu'ils :", "B", "Leurs chaînes latérales ramifiées créent un encombrement stérique.", ["sont chargés négativement", "ont une chaîne latérale ramifiée créant des clashes stériques", "ne possèdent pas de groupe NH", "forment des ponts disulfure"]),
    single("Sur le diagramme de Ramachandran, l'hélice α droitière se situe approximativement à :", "A", "La zone habituelle de l'hélice α droitière est φ ≈ −60°, ψ ≈ −50°.", ["φ ≈ −60°, ψ ≈ −50°", "φ ≈ +60°, ψ ≈ +60°", "φ ≈ −120°, ψ ≈ +130°", "φ ≈ 0°, ψ ≈ 0°"]),
    single("Contrairement à l'hélice α, la chaîne polypeptidique d'un brin β est :", "B", "Le brin β est la forme étendue de la chaîne polypeptidique.", ["enroulée plus serrée", "complètement étendue", "stabilisée uniquement par des ponts disulfure", "toujours circulaire"]),
    single("Dans un feuillet β, les liaisons hydrogène se font :", "B", "Les liaisons H d'un feuillet β sont établies entre brins adjacents, contrairement à l'hélice α.", ["à l'intérieur d'un même brin, entre i et i+4", "entre brins adjacents", "entre les chaînes latérales R", "entre le brin et les molécules d'eau uniquement"]),
    single("Les brins d'un feuillet β peuvent être :", "C", "Les trois arrangements existent : parallèle, antiparallèle ou mixte.", ["uniquement parallèles", "uniquement antiparallèles", "parallèles, antiparallèles ou mixtes", "uniquement perpendiculaires"]),
    single("Sur la représentation d'un brin β, la distance de 7 Å correspond à :", "B", "Le brin β a une périodicité de 7 Å pour deux résidus ; les R alternent de part et d'autre du plan.", ["un seul résidu", "deux résidus", "un tour complet d'hélice", "l'épaisseur du feuillet"]),
    single("Dans un coude inverse, la liaison H relie le CO du résidu i au NH du résidu :", "B", "Le coude inverse suit le motif i → i+3 et fait faire demi-tour sur quatre résidus.", ["i + 2", "i + 3", "i + 4", "i + 5"]),
    single("Les boucles de surface d'un fragment d'anticorps ont pour rôle principal :", "B", "Les boucles exposées assurent la reconnaissance et les interactions moléculaires.", ["de stabiliser le cœur hydrophobe", "de médier les interactions avec d'autres molécules", "de former les ponts disulfure", "de constituer le site catalytique enzymatique"]),
    single("La myoglobine est décrite comme :", "B", "La myoglobine est une protéine globulaire compacte, largement hélicoïdale, associée à un hème.", ["une protéine fibreuse riche en feuillets β", "une protéine globulaire compacte, majoritairement hélicoïdale, avec un hème", "un homodimère sans groupement prosthétique", "une protéine intrinsèquement non structurée"]),
    single("Dans une protéine globulaire soluble :", "B", "Les résidus polaires ou chargés sont préférentiellement en surface, tandis que le cœur est hydrophobe et compact.", ["la surface est hydrophobe et l'intérieur chargé", "la surface porte de nombreux AA chargés et l'intérieur est hydrophobe et tassé", "surface et intérieur ont la même composition", "l'intérieur est rempli d'eau"]),
    single("Une protéine-canal enchâssée dans la membrane possède :", "A", "L'extérieur contacte les lipides et est hydrophobe ; le canal interne contacte le soluté et est hydrophile.", ["un extérieur hydrophobe et un canal interne hydrophile", "un extérieur hydrophile et un canal interne hydrophobe", "une surface entièrement chargée", "aucune structure secondaire"]),
    single("Le motif helix-turn-helix est typiquement retrouvé dans :", "A", "Le motif helix-turn-helix est un motif de protéines de liaison à l'ADN.", ["les protéines de liaison à l'ADN", "les protéines membranaires", "les protéines fibreuses du collagène", "les prions"]),
    single("Un domaine protéique est défini comme :", "B", "Un domaine est une région qui se replie indépendamment au sein d'une même chaîne, reliée par un linker flexible ; ce n'est pas une sous-unité.", ["une chaîne polypeptidique distincte associée aux autres", "une région se repliant indépendamment dans un même polypeptide, reliée par un linker flexible", "un site de fixation d'un ion métallique", "une région exclusivement composée de feuillets β"]),
    single("Dans l'α-kératine :", "B", "Deux hélices α droitières s'enroulent en une superhélice gauche : c'est un piège classique.", ["deux hélices gauchères forment une superhélice droite", "deux hélices α droitières forment une superhélice gauche", "trois hélices α forment un câble droit", "les brins β s'associent en feuillet torsadé"]),
    single("Le coiled-coil de l'α-kératine est stabilisé par :", "B", "Le coiled-coil est stabilisé par des interactions ioniques et de van der Waals ; la répulsion des prolines concerne le collagène.", ["des ponts disulfure exclusivement", "des interactions ioniques et de van der Waals", "la répulsion stérique des prolines", "des liaisons covalentes C–C"]),
    single("Dans les répétitions heptadiques d'un coiled-coil, le résidu qui revient tous les 7 acides aminés est :", "C", "Les leucines forment la face hydrophobe d'interaction des deux hélices.", ["la glycine", "la proline", "la leucine", "la cystéine"]),
    single("Dans le collagène, la glycine apparaît :", "B", "Les motifs fréquents sont Gly-Pro-Hyp et Gly-Pro-Pro : une glycine est donc présente tous les trois résidus.", ["tous les 2 résidus", "tous les 3 résidus", "tous les 4 résidus", "uniquement aux extrémités"]),
    single("Concernant les chaînes hélicoïdales du collagène, quelle affirmation est exacte ?", "B", "Chaque chaîne du collagène n'est pas une hélice α : elle est stabilisée par la répulsion stérique des cycles proline, tandis que les trois chaînes interagissent par liaisons H.", ["Ce sont des hélices α stabilisées par des liaisons H intra-chaîne", "Ce ne sont pas des hélices α ; elles sont stabilisées par la répulsion stérique des cycles proline", "Elles sont stabilisées par des ponts disulfure", "Elles ne présentent aucune interaction entre elles"]),
    single("Seule la glycine peut occuper l'intérieur du câble superhélicoïdal du collagène parce que :", "B", "L'intérieur est très encombré et la glycine, avec R = H, a la plus petite chaîne latérale.", ["elle est chargée", "l'intérieur est très encombré et elle a la plus petite chaîne latérale", "elle forme des ponts disulfure", "elle est hydroxylée"]),
    single("L'ostéogenèse imparfaite résulte d'une mutation qui :", "B", "Cette maladie des os de verre est liée à la substitution d'une glycine du collagène.", ["supprime l'hydroxylation des prolines", "remplace une glycine par un autre acide aminé", "ajoute une cystéine en position C-terminale", "empêche la formation du groupement hème"]),
    single("L'hémoglobine humaine illustre la structure quaternaire sous forme :", "B", "L'hémoglobine humaine est un tétramère α2β2.", ["d'un homodimère", "d'un tétramère α2β2", "d'un monomère à hème", "d'une triple hélice"]),
    single("Dans l'expérience d'Anfinsen, le rôle du β-mercaptoéthanol est de :", "B", "Le β-mercaptoéthanol réduit les ponts disulfure ; l'urée ou le chlorure de guanidinium perturbe les interactions non covalentes.", ["rompre les interactions non covalentes", "réduire les ponts disulfure", "hydrolyser les liaisons peptidiques", "hydroxyler les prolines"]),
    single("Si l'urée n'est pas retirée lors de la renaturation de la ribonucléase :", "B", "Les huit cystéines s'apparient au hasard selon 105 combinaisons possibles, dont 104 inactives : c'est la ribonucléase brouillée.", ["l'enzyme retrouve immédiatement 100 % de son activité", "les 8 cystéines s'apparient au hasard selon 105 combinaisons possibles, dont 104 inactives", "les liaisons peptidiques sont rompues", "la protéine forme un amyloïde"]),
    single("La conclusion majeure de l'expérience d'Anfinsen est que :", "B", "L'information nécessaire au repliement est contenue dans la structure primaire ; la forme native est la plus stable, d'énergie la plus basse.", ["le repliement nécessite obligatoirement des chaperons", "l'information nécessaire au repliement est contenue dans la structure primaire", "la structure quaternaire précède la structure tertiaire", "la forme native est la forme d'énergie la plus élevée"]),
    single("La courbe abrupte et sigmoïde du dépliement en fonction du dénaturant montre que le repliement est :", "B", "Le repliement est hautement coopératif : une solution partiellement dénaturée contient surtout des molécules natives et dépliées, pas des états à moitié repliés.", ["un processus aléatoire", "un processus hautement coopératif, de type tout ou rien", "un processus toujours irréversible", "indépendant de la température"]),
    single("Selon la table des propensions, l'acide aminé le plus favorable au feuillet β est :", "C", "À retenir : Glu favorise l'hélice (1,59), Val le feuillet β (1,87) et Gly le coude (1,77).", ["Glu (1,59)", "Gly (1,77)", "Val (1,87)", "Pro (0,31)"]),
    single("La séquence VDLLKN, retrouvée en hélice α dans une protéine et en brin β dans une autre, montre que :", "B", "Le contexte structural environnant influence la conformation ; la prédiction à partir de la séquence seule reste difficile.", ["la séquence n'a aucune influence sur la structure", "le contexte structural environnant influence la conformation adoptée", "cette séquence est intrinsèquement non structurée", "les deux protéines sont des prions"]),
    single("Une protéine intrinsèquement non structurée :", "B", "Une IUP n'adopte pas de structure définie dans les conditions physiologiques tant qu'elle n'interagit pas avec un partenaire. Les conformations d'énergies proches décrivent une protéine métamorphique.", ["est toujours pathologique", "n'adopte pas de structure définie tant qu'elle n'interagit pas avec d'autres molécules", "possède plusieurs conformations d'énergies égales en équilibre permanent", "est riche en ponts disulfure"]),
    single("Dans le modèle protein-only de transmission des prions :", "B", "Un noyau de PrPSc recrute et convertit la protéine PrP normale, ce qui propage l'agrégat.", ["un ARN viral convertit la protéine normale", "un noyau de PrP-Sc recrute et convertit le pool de PrP normale", "les protéines sont dégradées par le protéasome", "les feuillets β sont convertis en hélices α"]),
    single("Une carence en vitamine C empêche l'hydroxylation des prolines du collagène et provoque :", "B", "La vitamine C est nécessaire à l'hydroxylation des prolines du collagène ; sa carence provoque le scorbut. La vitamine K est liée à la coagulation.", ["des hémorragies par défaut de coagulation", "le scorbut", "une ostéogenèse imparfaite", "une amyloïdose"]),
  ],
  exam: { titre_fr: "Examen chronométré — Structure des protéines (II)", duration_seconds: 2_100 },
};