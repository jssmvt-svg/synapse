import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const LIPIDS_MEMBRANES_COURSE = `# Chapitre 12 — Lipides et membranes cellulaires

## 1. Les acides gras
- Un acide gras est une chaîne carbonée portant un groupe **carboxyle** (–COOH) à une extrémité et un groupe **méthyle** (–CH₃) à l'autre.
- **Numérotation** : à partir du carboxyle, C1 = carboxyle, C2 = carbone α, C3 = carbone β. À partir de l'extrémité méthyle, le dernier carbone est le carbone **oméga (ω)** : un acide gras « oméga-3 » a sa première double liaison au 3ᵉ carbone à partir du bout méthyle.
- **Saturés vs insaturés** : un acide gras saturé n'a aucune double liaison ; un insaturé en possède au moins une. Dans les systèmes biologiques, les acides gras ont le plus souvent un nombre pair de carbones, les chaînes en C16 et C18 étant les plus fréquentes.
- Les doubles liaisons naturelles sont presque toujours en configuration **cis** ; dans les acides gras polyinsaturés, elles sont séparées par au moins un groupe méthylène (–CH₂–).
- **Propriétés physiques** : une chaîne courte et des doubles liaisons cis augmentent la fluidité ; une chaîne longue et une forte saturation la diminuent (empilement plus compact).

| Nom courant | Carbones | Doubles liaisons |
| --- | --- | --- |
| Palmitate | 16 | 0 |
| Stéarate | 18 | 0 |
| Oléate | 18 | 1 |
| Linoléate | 18 | 2 |
| Linolénate | 18 | 3 |
| Arachidonate | 20 | 4 |

## 2. Les trois grands types de lipides membranaires

### a) Phospholipides
- Composés de 4 éléments : acide(s) gras + plateforme + phosphate + alcool.
- **Plateforme glycérol** (phosphoglycérides) : dérivés du **phosphatidate** (diacylglycérol 3-phosphate) par estérification d'un alcool sur le phosphate. Alcools courants : sérine, éthanolamine, choline, glycérol, inositol → phosphatidylsérine, phosphatidyléthanolamine, phosphatidylcholine, phosphatidylglycérol, phosphatidylinositol.
- **Plateforme sphingosine** : la sphingomyéline est formée par estérification du groupe hydroxyle primaire de la sphingosine avec la phosphorylcholine.

### b) Glycolipides
- Dérivés de la sphingosine, portant un ou plusieurs sucres liés à l'alcool primaire (pas de phosphate).
- **Cérébrosides** = glycolipides les plus simples, un seul sucre (glucose ou galactose). **Gangliosides** = chaîne ramifiée pouvant compter jusqu'à 7 sucres.
- Les parties glucidiques sont exposées à la surface extracellulaire → rôle dans la reconnaissance cellule-cellule.

### c) Cholestérol
- Lipide stéroïdien basé sur le noyau stérane (3 cycles à 6 atomes + 1 cycle à 5 atomes), formule empirique C₂₇H₄₆O.
- Groupe hydroxyle en C3 (interagit avec les têtes polaires des phospholipides), double liaison C5–C6, deux méthyles angulaires en C10/C13, chaîne latérale de 8 carbones en C17.
- Rôles : composant structural des membranes, formation des lipoprotéines plasmatiques, précurseur des acides biliaires et des hormones stéroïdes, précurseur de la vitamine D (via le 7-déhydrocholestérol).

### Cas particulier : lipides des Archées
- Chaînes ramifiées liées par des liaisons **éther** (et non ester) → résistance à l'hydrolyse et à l'oxydation en milieux extrêmes.

Point commun à tous les lipides membranaires : ce sont des molécules **amphipathiques** — queue(s) d'acide gras hydrophobe(s) + tête polaire hydrophile (alcool + phosphate ou sucre).

## 3. Auto-assemblage en bicouches
- L'assemblage en membrane résulte du caractère amphipathique des lipides. Contrairement aux savons (une seule queue) qui forment des micelles, les phospholipides/glycolipides ont deux queues : l'encombrement empêche la micelle et favorise la formation spontanée d'une **bicouche lipidique**.
- Forces en jeu : effet hydrophobe (moteur principal), interactions de van der Waals entre les queues, liaisons électrostatiques et hydrogène entre têtes polaires et eau.
- **Liposomes** : compartiments aqueux entourés d'une bicouche, obtenus par sonication — utilisés comme systèmes de délivrance de médicaments et pour étudier des protéines membranaires reconstituées.
- **Membranes planes bicouches** : formées sur un orifice d'environ 1 mm dans un septum séparant deux compartiments aqueux → permettent de mesurer perméabilité et conductance électrique.
- **Perméabilité** : les bicouches sont très imperméables aux ions et peu perméables aux molécules polaires ; perméabilité croissante approximative : ions (Na⁺, K⁺, Cl⁻) < glucose < tryptophane < urée/glycérol < indole < H₂O.

## 4. Les protéines membranaires
- Elles assurent la plupart des fonctions actives de la membrane (transport, signalisation) — les lipides forment surtout la barrière. Contenu protéique variable, de moins de 20 % à plus de 75 % selon le type cellulaire (ex. cellule de Schwann = peu de protéines, membrane riche en lipides pour la myélinisation ; la sclérose en plaques est une maladie de démyélinisation). Visualisation par électrophorèse SDS-PAGE.

**Modes d'association aux membranes :**
1. **Protéines intégrales (transmembranaires)** : traversent le cœur hydrocarboné de la bicouche. Motif le plus courant : hélices α transmembranaires (ex. bactériorhodopsine, pompe à protons activée par la lumière, 7 hélices) — résidus hydrophobes dans la partie membranaire, résidus polaires/chargés côté cytoplasmique et extracellulaire. Autre motif : feuillets β formant un tonneau/pore (ex. porine bactérienne) — extérieur hydrophobe au contact des lipides, intérieur polaire rempli d'eau.
2. **Protéines périphériques** : liées aux têtes polaires des lipides ou à la surface de protéines intégrales (pas d'insertion dans le cœur hydrophobe).
3. **Ancrage lipidique** : attachement covalent à un lipide inséré dans la membrane.
4. **Insertion partielle** : une portion seulement s'insère dans la membrane, sans la traverser (ex. prostaglandine H2 synthase-1/cyclooxygénase, dont le canal hydrophobe relie le site actif à l'intérieur de la membrane ; l'**aspirine** inhibe l'activité en acétylant la Sérine 530, bloquant ce canal).

## 5. Mobilité latérale et fluidité membranaire
- **FRAP** (Fluorescence Recovery After Photobleaching) : technique mesurant la mobilité latérale — on « blanchit » une zone marquée par fluorescence puis on observe la vitesse de récupération. Distance moyenne parcourue : s = (4Dt)^(1/2), D = coefficient de diffusion.
- **Modèle de la mosaïque fluide** : la membrane est une solution bidimensionnelle de lipides orientés et de protéines globulaires. Diffusion latérale : rapide. Diffusion transversale (**flip-flop**) : très lente sans l'aide d'enzymes (flippases) → explique la stabilité de l'asymétrie membranaire.
- **Facteurs de fluidité** : température de fusion (Tm), qui dépend de la longueur des chaînes d'acides gras et du degré d'insaturation cis (chaînes courtes + insaturation cis = Tm basse = plus fluide) ; le **cholestérol**, qui s'intercale entre les chaînes d'acides gras et perturbe leur empilement compact, régulant la fluidité (ni trop rigide, ni trop fluide).
- **Radeaux lipidiques** (lipid rafts) : complexes dynamiques cholestérol + sphingolipides/glycolipides, concentrés dans des microdomaines ; rôle dans la modulation de la fluidité et la transduction du signal.
- **Asymétrie membranaire** : le feuillet externe et le feuillet interne diffèrent en composition et en activité enzymatique (ex. pompe Na⁺/K⁺-ATPase : 3 Na⁺ sortent, 2 K⁺ entrent, hydrolyse d'ATP).

## 6. Membranes des cellules procaryotes et eucaryotes
- **Coloration de Gram** : Gram positif = une seule membrane entourée d'une paroi épaisse → retient le cristal violet. Gram négatif = deux membranes (interne + externe) séparées par le périplasme contenant une paroi fine → ne retient pas bien le cristal violet.
- **Cellules eucaryotes** (sauf végétaux) : pas de paroi, entourées d'une membrane plasmique unique, mais compartimentées en interne par des membranes (noyau, réticulum endoplasmique, etc.). L'enveloppe nucléaire (double membrane) est reliée au réticulum endoplasmique via des pores nucléaires.

## 7. Fusion et transport membranaire
- **Endocytose médiée par récepteur** : la clathrine forme un manteau qui aide à internaliser les récepteurs et leur cargaison (puits recouverts → vésicule).
- **Exocytose** : fusion d'une membrane interne avec la membrane plasmique pour libérer du contenu (ex. neurotransmetteurs).
- **Cycle du récepteur de la transferrine** : la transferrine liée au fer se fixe sur son récepteur → endocytose → formation d'un endosome → acidification par des pompes à protons → libération du fer, qui traverse la membrane de l'endosome → le complexe transferrine (sans fer)/récepteur retourne à la membrane plasmique.
- **Protéines SNARE** : facilitent la fusion membranaire en formant des faisceaux de quatre hélices étroitement enroulées.

## 8. Cas particulier : la cardiolipine
- Le **diphosphatidylglycérol (cardiolipine)** a une structure inhabituelle : deux phosphatidates reliés par un glycérol central. Charge nette de −2, forme de cône inversé (contrairement à la plupart des phosphoglycérides).
- Localisation : membranes de bactéries, archées, et membrane interne des mitochondries, où elle participe à la structure/fonction du respirasome (synthèse d'ATP).
- Sa synthèse/maintien dépend de l'enzyme **tafazzine**, qui transfère des chaînes de linoléate de la phosphatidylcholine vers la cardiolipine immature.
- **Syndrome de Barth** : mutation réduisant l'activité de la tafazzine → dilatation des cavités cardiaques, intolérance à l'effort, retard de croissance, mitochondries malformées, respirasomes mal assemblés.

## Points à retenir
- Numérotation des acides gras : depuis le carboxyle (α, β...) ou depuis le méthyle terminal (oméga) ; chaîne courte + insaturation cis = forte fluidité.
- Trois lipides membranaires majeurs : phospholipides (glycérol ou sphingosine), glycolipides (sphingosine + sucres, reconnaissance cellulaire), cholestérol (régulateur de fluidité).
- Les bicouches se forment spontanément (deux queues d'acide gras empêchent la micelle) ; très imperméables aux ions, peu perméables aux molécules polaires.
- Protéines membranaires : intégrales (hélices α ou tonneaux β), périphériques, ancrage lipidique, insertion partielle (aspirine/COX).
- Fluidité régulée par la longueur/insaturation des chaînes et par le cholestérol ; flip-flop très lent sans flippases ; asymétrie maintenue (ex. Na⁺/K⁺-ATPase).
- La cardiolipine (mitochondries) dépend de la tafazzine ; son déficit cause le syndrome de Barth.`;

export const LIPIDS_MEMBRANES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Lipides et membranes cellulaires",
    source_label: "MedByJes — Chapitre 12 · Lipides et membranes cellulaires (Berg, Tymoczko, Gatto & Stryer, Biochemistry, 9e éd.)",
    content_fr: LIPIDS_MEMBRANES_COURSE,
  },
  qcm: [
    single("Comment appelle-t-on le carbone situé en position 2 d'un acide gras à partir du carboxyle ?", "A", "En numérotant depuis le carboxyle, C1 est le carboxyle lui-même, C2 est le carbone α, C3 le carbone β.", ["Le carbone α", "Le carbone oméga", "Le carbone β", "Le carbone terminal"]),
    single("Un acide gras « oméga-3 » possède sa première double liaison :", "B", "La numérotation oméga part de l'extrémité méthyle terminale ; un oméga-3 a sa première double liaison au 3ᵉ carbone à partir de ce bout.", ["Au 3ᵉ carbone à partir du carboxyle", "Au 3ᵉ carbone à partir du méthyle terminal", "Toujours en position trans", "Uniquement dans les acides gras saturés"]),
    single("Quelle association chaîne carbonée / fluidité est correcte ?", "B", "Une chaîne courte et des doubles liaisons cis empêchent l'empilement compact des chaînes, augmentant la fluidité.", ["Chaîne longue + doubles liaisons cis → forte fluidité", "Chaîne courte + doubles liaisons cis → forte fluidité", "Chaîne courte + acide gras saturé → faible fluidité", "La longueur de chaîne n'influence pas la fluidité"]),
    single("L'oléate (18:1) correspond à :", "B", "18:1 signifie 18 carbones avec une seule double liaison.", ["Un acide gras saturé à 18 carbones", "Un acide gras à 18 carbones avec une double liaison", "Un acide gras à 16 carbones avec une double liaison", "Un acide gras polyinsaturé à 20 carbones"]),
    single("Un phosphoglycéride est composé de :", "B", "Un phosphoglycéride associe un glycérol, deux acides gras, un phosphate et un alcool (sérine, éthanolamine, choline...).", ["Sphingosine + phosphate + sucre", "Glycérol + 2 acides gras + phosphate + alcool", "Cholestérol + acide gras + phosphate", "Glycérol + 3 acides gras uniquement"]),
    single("Le phosphatidate correspond à :", "A", "Le phosphatidate est le diacylglycérol 3-phosphate, précurseur commun des phosphoglycérides.", ["Le diacylglycérol 3-phosphate", "La sphingosine phosphorylée", "Le triacylglycérol", "Le cholestérol estérifié"]),
    single("La sphingomyéline est formée par estérification du groupe hydroxyle primaire de la sphingosine avec :", "B", "La sphingomyéline résulte de l'estérification de la sphingosine par la phosphorylcholine.", ["Le glycérol", "La phosphorylcholine", "L'inositol", "Un sucre simple"]),
    single("Les cérébrosides et gangliosides sont des :", "B", "Ce sont des glycolipides dérivés de la sphingosine, portant un ou plusieurs sucres.", ["Phosphoglycérides", "Glycolipides dérivés de la sphingosine", "Stérols", "Protéines périphériques"]),
    single("Le rôle principal des parties glucidiques des glycolipides, exposées côté extracellulaire, est :", "B", "Ces chaînes glucidiques exposées jouent un rôle dans la reconnaissance cellule-cellule.", ["Le stockage énergétique", "La reconnaissance cellule-cellule", "La catalyse enzymatique", "Le transport des ions"]),
    single("Concernant le cholestérol :", "B", "Le groupe hydroxyle en C3 du cholestérol interagit avec les têtes polaires des phospholipides membranaires.", ["Il n'a aucune interaction avec les phospholipides", "Il possède un hydroxyle en C3 qui interagit avec les têtes polaires des phospholipides", "Il est un phospholipide à base de sphingosine", "Il est absent des membranes animales"]),
    single("Les lipides membranaires des archées se distinguent par :", "B", "Les archées possèdent des liaisons éther (non ester) et des chaînes ramifiées, offrant une résistance en milieux extrêmes.", ["Des liaisons ester et des chaînes linéaires", "Des liaisons éther et des chaînes ramifiées", "L'absence totale de chaîne hydrocarbonée", "Une structure identique à celle des phospholipides bactériens classiques"]),
    single("Pourquoi les phospholipides forment-ils des bicouches plutôt que des micelles, contrairement aux savons ?", "B", "Leurs deux queues d'acides gras créent un encombrement qui empêche la courbure nécessaire à une micelle et favorise la bicouche.", ["Parce qu'ils sont chargés négativement", "Parce qu'ils possèdent deux queues d'acides gras, ce qui empêche la courbure nécessaire à une micelle", "Parce qu'ils sont insolubles dans l'eau", "Parce qu'ils ne contiennent pas de tête polaire"]),
    single("Un liposome est :", "B", "Un liposome est un compartiment aqueux entouré d'une bicouche lipidique, obtenu par sonication.", ["Une protéine transmembranaire", "Un compartiment aqueux entouré d'une bicouche lipidique", "Une micelle de savon", "Un fragment de paroi bactérienne"]),
    single("Concernant la perméabilité des bicouches lipidiques :", "C", "Les bicouches sont très peu perméables aux ions et peu perméables aux molécules polaires ; l'eau les traverse relativement bien en comparaison.", ["Elles sont très perméables aux ions", "Elles sont imperméables à l'eau", "Elles sont très peu perméables aux ions et peu perméables aux molécules polaires", "La perméabilité ne dépend pas de la polarité des molécules"]),
    single("Une protéine intégrale composée de plusieurs hélices α transmembranaires hydrophobes est illustrée par :", "B", "La bactériorhodopsine (7 hélices α transmembranaires) en est l'exemple classique.", ["La porine", "La bactériorhodopsine", "La clathrine", "Le SNARE"]),
    single("Dans la porine, les résidus hydrophobes se situent :", "B", "Contrairement aux hélices α transmembranaires, la porine expose ses résidus hydrophobes à l'extérieur, au contact du cœur lipidique, avec un intérieur polaire rempli d'eau.", ["À l'intérieur du tonneau, au contact de l'eau", "À l'extérieur de la structure, au contact du cœur hydrophobe de la membrane", "Uniquement dans les boucles cytoplasmiques", "Nulle part, la porine est entièrement polaire"]),
    single("L'aspirine inhibe la prostaglandine H2 synthase-1 en :", "B", "L'aspirine acétyle la sérine 530, obstruant le canal hydrophobe reliant le site actif à l'intérieur de la membrane.", ["Bloquant la synthèse du cholestérol", "Acétylant la sérine 530 et obstruant le canal hydrophobe", "Dégradant la bicouche lipidique", "Empêchant la diffusion latérale des lipides"]),
    single("La technique FRAP permet d'étudier :", "B", "FRAP mesure la mobilité latérale des composants membranaires par récupération de fluorescence après photoblanchiment.", ["La composition en acides aminés d'une protéine", "La mobilité latérale des composants membranaires", "La structure cristalline des lipides", "Le pH intracellulaire"]),
    single("Le flip-flop (diffusion transversale) des lipides dans la membrane est :", "B", "Le flip-flop est très lent sans l'aide de flippases, ce qui maintient l'asymétrie membranaire dans le temps.", ["Très rapide et spontané", "Très lent sans l'aide d'enzymes, ce qui maintient l'asymétrie membranaire", "Impossible même avec des enzymes", "Identique en vitesse à la diffusion latérale"]),
    multi("Concernant la cardiolipine, quelles affirmations sont correctes ?", ["A", "B", "C"], "La cardiolipine a une charge nette de -2, une forme de cône inversé, et est essentielle au respirasome mitochondrial ; sa synthèse dépend en revanche bien d'une enzyme spécifique, la tafazzine (D est donc fausse).", ["Elle a une charge nette de -2", "Elle a une forme de cône inversé", "Elle est essentielle à la structure du respirasome mitochondrial", "Sa synthèse ne dépend d'aucune enzyme spécifique"]),
  ],
  exam: { titre_fr: "Examen chronométré — Lipides et membranes cellulaires", duration_seconds: 1_800 },
};

const WATER_SOLUBLE_VITAMINS_COURSE = `# Les vitamines hydrosolubles

## 1. Généralités
- Une vitamine est un composé organique essentiel que l'organisme animal ne peut pas synthétiser lui-même (ou en quantité insuffisante), mais qui est nécessaire en petites quantités au métabolisme.
- **Rôles fonctionnels** : précurseurs de coenzymes, action antioxydante, précurseurs d'hormones.
- **Sources** : apportées par l'alimentation (aucun aliment n'est riche en toutes les vitamines à la fois) ; certaines sont synthétisées par la flore intestinale, mais pas en quantité suffisante pour couvrir les besoins. Les besoins varient selon l'espèce, l'âge, le sexe et l'état physiologique (grossesse, allaitement, exercice, nutrition).
- **Classification par solubilité** : hydrosolubles (B1, B2, B3/PP, B5, B6, B9, B12, biotine/B7, vitamine C, vitamine P) vs liposolubles (A, D, E, K).
- **Classification par mode d'action** : cofacteur enzymatique direct (thiamine, riboflavine, acide pantothénique, pyridoxine, acide folique, cobalamine, biotine...) ; sans fonction certaine de cofacteur (calciférols, tocophérols, acide ascorbique) ; substances de type vitaminique (niacine, acide lipoïque, choline, ubiquinone, carnitine, tétrahydrobioptérine).
- **Caractéristiques générales des hydrosolubles** : composés polaires, solubles dans l'eau, produites surtout par plantes et micro-organismes, **non stockées** dans l'organisme (apport alimentaire continu nécessaire), excrétées dans les urines, cofacteurs du métabolisme des glucides/lipides/protéines. L'excès est en général bien toléré et éliminé dans les urines (exceptions : surdosages en acide nicotinique et en B6).

## 2. Vitamine B1 — Thiamine
- **Sources** : céréales complètes, tissus animaux (foie, rein), levure ; thermolabile (détruite à la cuisson).
- **Structure** : sel de thiazolium quaternaire, deux hétérocycles azotés (noyau pyrimidique + noyau thiazolique).
- **Métabolisme** : absorbée au niveau intestinal, convertie dans le foie et le cerveau en **thiamine pyrophosphate (TPP)**, forme active, par la thiamine pyrophosphokinase.
- **Rôle** : cofacteur de la décarboxylation oxydative des α-cétoacides (pyruvate déshydrogénase, α-cétoglutarate déshydrogénase, céto-analogues de leucine/isoleucine/valine) et de la transcétolase de la voie des pentoses phosphates ; favorise le stockage du glycogène hépatique.
- **Carence** : besoin ≈ 1,0–1,2 mg/jour. Symptômes précoces : constipation, perte d'appétit, dépression, neuropathie périphérique. Carence chronique : ataxie, confusion. Maladies : **béribéri** ; **syndrome de Wernicke-Korsakoff** (alcooliques chroniques).

## 3. Vitamine B2 — Riboflavine
- **Sources** : lait et produits laitiers surtout ; relativement thermostable mais se décompose à la **lumière visible**.
- **Structure** : noyau isoalloxazine + ribitol.
- **Formes actives** : **FMN** (flavine mononucléotide) et **FAD** (flavine adénine dinucléotide, synthétisé à partir du FMN).
- **Rôle** : cofacteur des flavoprotéines dans de nombreuses réactions redox (FMNH₂/FADH₂). Exemples : NADH-déshydrogénase (FMN), succinate-déshydrogénase (FAD), acyl-CoA-déshydrogénase (FAD).
- **Carence** : besoin ≈ 1,2–1,7 mg/jour. Symptômes : glossite, chéilite/stomatite angulaire, photophobie. Risque particulier chez le nouveau-né en photothérapie (hyperbilirubinémie), car la riboflavine se décompose à la lumière.

## 4. Vitamine B3 — Niacine (vitamine PP)
- Niacine = acide nicotinique + nicotinamide ; « PP » = Pellagra Preventing. Peut être synthétisée à partir du **tryptophane** (60 mg de tryptophane → 1 mg de niacine, nécessite B1/B2/B6), mais de façon insuffisante.
- **Forme active** : NAD⁺ ou NADP⁺.
- **Rôle** : cofacteur des déshydrogénases (NAD⁺) et oxydoréductases (NADP⁺) du métabolisme glucido-lipidique (ex. lactate déshydrogénase) ; le NAD est aussi substrat des PARP (réparation de l'ADN).
- **Carence** : besoin ≈ 13–19 mg/jour. Carence sévère : **pellagre**, les « 4 D » — Dermatite, Diarrhée, Démence, Décès. Causes associées : maladie de Hartnup, isoniazide. Excès (> 2 g/j) : flush, hépatotoxicité, hyperuricémie.

## 5. Vitamine B5 — Acide pantothénique
- **Sources** : ubiquitaire (tissus animaux, céréales complètes, légumes).
- **Structure** : acide pantoïque + β-alanine.
- **Rôle** : nécessaire à la synthèse du **coenzyme A (CoA)** et composant du domaine ACP (acyl carrier protein) de l'acide gras synthase, sous forme de 4′-phosphopantéthéine. Le groupement thiol transporte les radicaux acyles. Au moins 70 enzymes utilisent le CoA ou l'ACP. La carence est très rare.

## 6. Vitamine B6 — Pyridoxal, pyridoxamine, pyridoxine
- **Structure** : dérivé de la pyridine (3 formes).
- **Forme active** : **pyridoxal phosphate (PLP)**, formé par phosphorylation dans la muqueuse jéjunale.
- **Rôle** : cofacteur des réactions du métabolisme des acides aminés (transamination, décarboxylation, désulfhydratation, déshydratation), de la glycogénolyse (glycogène phosphorylase) et de la synthèse de l'hème (δ-aminolévulinate synthase).
- **Carence** : besoin ≈ 1,4–2,0 mg/jour. Conséquences : **anémie sidéroblastique** (synthèse de l'hème), dysfonction neuronale/convulsions (déficit en GABA). Excès (fortes doses, plusieurs g/jour) : neuropathie sensitive.

## 7. Vitamine B9 — Acide folique (folacine)
- **Structure** : noyau ptéridine + acide para-aminobenzoïque (PABA) → acide ptéroïque, conjugué à l'acide glutamique. L'organisme ne peut synthétiser ni le PABA ni fixer les résidus glutamate → apport alimentaire obligatoire ; 70–95 % détruit à la cuisson.
- **Métabolisme** : réduction hépatique en **tétrahydrofolate (FolH4)**, forme active, par la **dihydrofolate réductase (DHFR)**, NADPH-dépendante.
- **Rôle** : le FolH4 transporte des groupements à un carbone (méthyl, méthylène, formyl...), nécessaire à la synthèse de la sérine, méthionine, glycine, des purines et du **dTMP** (synthèse de l'ADN). Coopère avec la B12 dans la conversion homocystéine → méthionine. La thymidylate synthase et la DHFR sont très actives dans les tissus à forte division cellulaire. Le **méthotrexate** (analogue du 10-méthyl-THF) inhibe la DHFR → utilisé comme anticancéreux.
- **Importance clinique** : la supplémentation périconceptionnelle (400 µg/j) réduit le risque de **spina bifida** (anomalie de fermeture du tube neural). Carence → anémie mégaloblastique/macrocytaire, par défaut de synthèse du dTMP et de l'ADN.

## 8. Vitamine B12 — Cobalamine
- **Sources** : synthétisée uniquement par certains micro-organismes, présente uniquement dans les aliments d'origine animale → risque de carence chez les végétaliens.
- **Structure** : noyau corrine avec un ion cobalt central.
- **Absorption** : estomac (liaison à la protéine R) → duodénum (liaison au **facteur intrinsèque**) → iléon terminal (récepteurs cubilin) → liaison à la transcobalamine II pour la distribution tissulaire.
- **Rôle** (2 réactions cofacteur B12) : réarrangement intramoléculaire par la **méthylmalonyl-CoA mutase** (méthylmalonyl-CoA → succinyl-CoA) ; méthylation par la **méthionine synthase** (homocystéine → méthionine), en régénérant le FolH4 à partir du N5-méthyl-THF.
- **Carence** : grandes réserves hépatiques (≈ 50 % du stock corporel) → carence à installation lente (3–5 ans). Anémie mégaloblastique (dont l'anémie de Biermer, par absence de facteur intrinsèque). **« Piège des folates »** : la carence en B12 bloque la méthionine synthase → le folate reste piégé sous forme N5-méthyl-THF → carence fonctionnelle en folates. Démyélinisation neurologique progressive par accumulation de méthylmalonyl-CoA.

## 9. Vitamine C — Acide ascorbique
- Vitamine uniquement pour l'homme, les primates, le cobaye, les chauves-souris et certains oiseaux/poissons (blocage de la voie de l'acide uronique par absence de gulonolactone oxydase).
- **Formes actives** : acide ascorbique et acide déhydroascorbique. Demi-vie plasmatique courte (≈ 30 min).
- **Rôle** : agent réducteur (réduit les cytochromes a et c) ; cofacteur de l'**hydroxylation de la proline** dans la synthèse du **collagène** ; catabolisme de la tyrosine ; améliore l'absorption intestinale du fer ; antioxydant hydrosoluble.
- **Carence** : besoin ≈ 70 mg/j (adulte). Carence → **scorbut** : ecchymoses faciles, gencives enflées et saignantes, retard de cicatrisation, hémorragies.

## 10. Biotine (vitamine B7/H)
- **Rôle** : cofacteur des **carboxylases** par transfert de CO₂ — acétyl-CoA carboxylase (1ʳᵉ étape de la synthèse des acides gras), pyruvate carboxylase (cycle de Krebs), propionyl-CoA carboxylase.
- **Carence** : rare (après antibiothérapie prolongée ou consommation excessive d'œufs crus — l'**avidine** du blanc d'œuf se lie à la biotine et empêche son absorption).

## 11. Vitamine P — Bioflavonoïdes
- Glycosides polyphénoliques (agrumes, baies, thé vert). Activité antioxydante ; contribue à l'intégrité des vaisseaux sanguins, en synergie avec la vitamine C.

## Points à retenir
- Hydrosolubles = non stockées, apport alimentaire continu, excès généralement éliminé dans les urines.
- Formes actives à connaître : TPP (B1), FMN/FAD (B2), NAD⁺/NADP⁺ (B3), CoA/ACP (B5), PLP (B6), FolH4 (B9), méthylcobalamine/adénosylcobalamine (B12).
- Maladies de carence caractéristiques : béribéri/Wernicke-Korsakoff (B1), pellagre — 4D (B3), anémie sidéroblastique (B6), spina bifida/anémie mégaloblastique (B9), anémie de Biermer + démyélinisation (B12), scorbut (C).
- Le « piège des folates » relie fonctionnellement B9 et B12 via la méthionine synthase.`;

export const WATER_SOLUBLE_VITAMINS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Vitamines hydrosolubles",
    source_label: "MedByJes — Les vitamines hydrosolubles (Berg, Tymoczko, Gatto & Stryer, Biochemistry, 9e éd.)",
    content_fr: WATER_SOLUBLE_VITAMINS_COURSE,
  },
  qcm: [
    single("Parmi les vitamines suivantes, laquelle est liposoluble ?", "C", "La vitamine K est liposoluble (avec A, D, E). Les vitamines B et C sont hydrosolubles.", ["Vitamine B2", "Vitamine C", "Vitamine K", "Vitamine B9"]),
    single("La forme active de la thiamine (vitamine B1) est :", "D", "La thiamine est convertie dans le foie et le cerveau en thiamine pyrophosphate (TPP), sa forme active.", ["Le FAD", "Le NAD+", "Le pyridoxal phosphate", "La thiamine pyrophosphate (TPP)"]),
    single("La vitamine B1 est un cofacteur essentiel de laquelle des enzymes suivantes ?", "A", "La TPP est cofacteur de la décarboxylation oxydative des α-cétoacides, notamment la pyruvate déshydrogénase.", ["Pyruvate déshydrogénase", "Méthionine synthase", "Acétyl-CoA carboxylase", "Dihydrofolate réductase"]),
    single("Le syndrome de Wernicke-Korsakoff est associé à une carence en :", "B", "C'est une forme sévère de carence en thiamine (B1), fréquente chez les alcooliques chroniques.", ["Vitamine B6", "Vitamine B1", "Vitamine B12", "Vitamine C"]),
    single("La riboflavine (vitamine B2) est particulièrement sensible à :", "C", "La riboflavine est relativement stable à la chaleur mais se décompose à la lumière visible.", ["La chaleur", "L'acidité", "La lumière visible", "L'oxygène"]),
    single("Les formes coenzymatiques actives de la vitamine B2 sont :", "B", "Ce sont le FMN (flavine mononucléotide) et le FAD (flavine adénine dinucléotide).", ["NAD+ et NADP+", "FMN et FAD", "TPP et TDP", "PLP et PMP"]),
    single("La vitamine PP (niacine) peut être synthétisée dans l'organisme à partir de :", "B", "La niacine peut être synthétisée à partir du tryptophane, mais de façon inefficace.", ["La méthionine", "Le tryptophane", "La lysine", "La phénylalanine"]),
    single("La carence sévère en niacine provoque une maladie caractérisée par les « 4 D ». Il s'agit de :", "C", "La pellagre se manifeste par Dermatite, Diarrhée, Démence, Décès.", ["Le béribéri", "Le scorbut", "La pellagre", "L'anémie pernicieuse"]),
    single("La vitamine B5 (acide pantothénique) entre dans la composition de :", "B", "L'acide pantothénique est indispensable à la synthèse du coenzyme A.", ["L'hème", "Le coenzyme A", "Le FAD", "Le tétrahydrofolate"]),
    single("Le pyridoxal phosphate (vitamine B6) est le cofacteur principal des réactions de :", "B", "Le PLP est le cofacteur central des réactions de transamination.", ["Carboxylation", "Transamination", "Méthylation", "Hydroxylation"]),
    single("Une carence en vitamine B6 peut entraîner :", "B", "La carence en B6 altère la synthèse de l'hème, provoquant une anémie sidéroblastique.", ["Une anémie mégaloblastique", "Une anémie sidéroblastique", "Une anémie hémolytique", "Une anémie ferriprive"]),
    single("L'enzyme convertissant l'acide folique en tétrahydrofolate (forme active) est :", "B", "La dihydrofolate réductase (DHFR), NADPH-dépendante, réduit le folate en tétrahydrofolate.", ["La méthionine synthase", "La dihydrofolate réductase (DHFR)", "La méthylmalonyl-CoA mutase", "La thymidylate synthase"]),
    single("La supplémentation en acide folique en péri-conception vise principalement à prévenir :", "A", "400 µg/jour de folates avant la conception réduisent le risque de spina bifida.", ["Le spina bifida (anomalies de fermeture du tube neural)", "Le scorbut", "La pellagre", "Le rachitisme"]),
    single("L'absorption de la vitamine B12 nécessite obligatoirement :", "B", "Le facteur intrinsèque, sécrété par l'estomac, est indispensable à l'absorption iléale de la B12.", ["La vitamine C", "Le facteur intrinsèque", "L'acide gastrique seul", "La transcobalamine I"]),
    single("Le « piège des folates » (folate trap) résulte d'un déficit en :", "B", "En cas de carence en B12, la méthionine synthase est bloquée, piégeant le folate sous forme N5-méthyl-THF.", ["Vitamine B9 uniquement", "Vitamine B12, par blocage de la méthionine synthase", "Vitamine B6", "Vitamine C"]),
    single("L'accumulation de méthylmalonyl-CoA lors d'une carence en vitamine B12 est principalement responsable de :", "B", "L'excès de méthylmalonyl-CoA perturbe la synthèse des acides gras et endommage la myéline.", ["L'anémie mégaloblastique", "La démyélinisation neurologique", "Le scorbut", "La pellagre"]),
    single("La vitamine C intervient dans l'hydroxylation de la proline lors de la synthèse de :", "B", "La vitamine C est cofacteur des hydroxylases de la proline, indispensables à la maturation du collagène.", ["L'hémoglobine", "Le collagène", "La myéline", "L'insuline"]),
    single("La biotine (vitamine B7/H) est le cofacteur des réactions de :", "C", "La biotine est le cofacteur des carboxylases (pyruvate carboxylase, acétyl-CoA carboxylase...).", ["Décarboxylation oxydative", "Transamination", "Carboxylation", "Oxydoréduction"]),
  ],
  exam: { titre_fr: "Examen chronométré — Vitamines hydrosolubles", duration_seconds: 1_620 },
};

const FAT_SOLUBLE_VITAMINS_COURSE = `# Vitamines liposolubles (A, D, E, K) et cofacteurs apparentés

## 1. Caractéristiques générales des vitamines liposolubles
- Ce sont A, E et K ; la vitamine **D est en réalité une pro-hormone**.
- Molécules non polaires, hydrophobes, dérivées de l'isoprène. Nécessitent une absorption lipidique normale (sels biliaires) et sont transportées dans le sang via les lipoprotéines ou des protéines de liaison spécifiques.
- **Stockage** : foie (A, D, K), tissu adipeux (E). Élimination biliaire → cycle entéro-hépatique → fèces ; certains métabolites passent dans l'urine.

## 2. Vitamine A (rétinol, rétinoïdes)
- **Sources** : provitamines A/carotènes (végétaux) ; rétinoïdes (uniquement produits animaux : foie, huiles de poisson, jaune d'œuf).
- **Structure** : 3 molécules biologiquement actives — rétinol, rétinal (rétinaldéhyde) et acide rétinoïque, dérivées du β-carotène.
- **Métabolisme** : le β-carotène est clivé en rétinal dans la muqueuse intestinale, réduit en rétinol ; estérifié puis transporté par les chylomicrons vers le foie, stocké sous forme d'esters de rétinyle. Transport foie → tissus périphériques via la **RBP** (retinol binding protein), complexée à la transthyrétine.
- **Rôles** :
  - **Contrôle génique** : le rétinol et l'acide rétinoïque se lient à des récepteurs nucléaires (facteurs de transcription ligand-dépendants) qui se fixent sur les RARE, régulant des gènes de croissance/différenciation ; l'acide rétinoïque est essentiel à l'embryogenèse précoce.
  - **Autres rôles** : synthèse des glycoprotéines/mucus (via le rétinyl-phosphate) ; inhibe la kératinisation excessive ; nécessaire à la synthèse hépatique de la **transferrine**.
  - **Vision** : la **rhodopsine** (scotopsine + 11-cis-rétinal) est le pigment photosensible des bâtonnets ; à la lumière, isomérisation 11-cis → tout-trans-rétinal → activation de la transducine → chute du GMPc → hyperpolarisation → influx nerveux.
- **Carence** : héméralopie (cécité nocturne), puis xérophtalmie (kératinisation cornéenne), anémie de type carence en fer (via la transferrine).
- **Toxicité** (hypervitaminose A) : céphalées, hypertension intracrânienne, hépatomégalie, épaississement osseux, alopécie.

## 3. Vitamine D (calciférols)
- N'est pas une vraie vitamine : synthétisée dans la peau sous UV (7-déhydrocholestérol → cholécalciférol/D3), sa principale source ; considérée comme une **pro-hormone**. Vitamine D2 (ergocalciférol) issue des végétaux.
- **Forme active** : **calcitriol** (1,25-dihydroxyvitamine D3), obtenue par 25-hydroxylation hépatique puis 1-hydroxylation rénale.
- **Rôle** : agit avec la PTH et la calcitonine pour réguler l'homéostasie calcium/phosphate ; se lie à des récepteurs nucléaires → induit l'expression de la **calbindine**, protéine facilitant l'absorption intestinale du calcium ; diminue l'excrétion rénale de calcium/phosphate ; favorise la minéralisation osseuse.
- **Carence** : **rachitisme** (enfant, minéralisation osseuse défectueuse) ; **ostéomalacie** (adulte, déminéralisation).
- **Toxicité** : hypercalcémie, calcinose. L'exposition solaire excessive n'entraîne PAS d'intoxication (capacité limitée de synthèse cutanée du précurseur).

## 4. Vitamine E (tocophérols)
- **Sources** : huiles végétales (maïs, soja).
- **Structure** : dérivés méthylés du tocol ; 4 formes (α, β, γ, δ) — l'**α-tocophérol** a l'activité biologique relative la plus élevée (100).
- **Métabolisme** : absorption dépendante de la bile (chylomicrons) ; s'accumule surtout dans le **tissu adipeux** (principal site de stockage) et les membranes cellulaires.
- **Rôle** : antioxydant naturel, piège les radicaux libres et protège les acides gras polyinsaturés membranaires de la peroxydation. Après avoir neutralisé un radical peroxyle, l'α-tocophérol est **régénéré par la vitamine C**. Action synergique avec le sélénium (glutathion peroxydase).
- **Carence** : fragilité érythrocytaire → **anémie hémolytique** par dommage oxydatif ; myopathie, ataxie avec dégénérescence rétinienne.

## 5. Vitamine K
- **Sources** : K1/phylloquinone (légumes verts), K2/ménaquinone (synthèse bactérienne intestinale), K3/ménadione (forme synthétique, hydrosoluble).
- **Rôle majeur** : maintien des facteurs de coagulation **II, VII, IX, X** ainsi que des protéines C et S, par **γ-carboxylation** post-traductionnelle de résidus glutamate (cofacteur de la glutamyl-carboxylase). La prothrombine γ-carboxylée chélate le calcium.
- Le **dicoumarol** et la **warfarine** bloquent la régénération de la forme hydroquinone de la vitamine K → utilisés comme anticoagulants.
- Également impliquée dans la carboxylation de l'**ostéocalcine** (métabolisme osseux, avec vitamines C et D).
- **Carence** : rare chez l'adulte sain (synthèse bactérienne de K2) ; risque accru après antibiothérapie prolongée. Chez le **nouveau-né** : intestin stérile à la naissance → risque de maladie hémorragique sans supplémentation.

## 6. Cofacteurs de type vitaminique
- Agissent comme des vitamines mais sont normalement synthétisés par l'organisme ; un apport externe peut devenir indispensable en cas de défaut de synthèse.
- **Ubiquinone (CoQ10)** : synthétisée à partir de la tyrosine et du farnésylpyrophosphate ; transporteur d'électrons entre les complexes I et III de la chaîne respiratoire.
- **L-Carnitine** : synthétisée à partir de la lysine et de la méthionine. Transporte les acides gras à longue chaîne à travers la membrane mitochondriale interne (indispensable à la β-oxydation) ; le muscle cardiaque/squelettique ne peut pas la synthétiser. Carence : fatigue musculaire, cardiomyopathie, accumulation de lipides neutres dans muscle/cœur/foie.
- **Acide α-lipoïque** : cofacteur des complexes multienzymatiques de décarboxylation des α-cétoacides (pyruvate déshydrogénase, α-cétoglutarate déshydrogénase), avec TPP, CoA, FAD, NAD.
- **Tétrahydrobioptérine (BH4)** : synthétisée à partir du GTP ; cofacteur de la phénylalanine-4-hydroxylase (Phe → Tyr — son déficit cause la phénylcétonurie), de la tyrosine-3-hydroxylase et de la NO synthase.

## Points à retenir
- Liposolubles = A, D, E, K ; D est en réalité une pro-hormone. Absorption bile-dépendante, stockage hépatique (A, D, K) ou adipeux (E).
- Vitamine A : vision (rhodopsine), contrôle génique (RARE), transferrine ; carence → xérophtalmie.
- Vitamine D : calcitriol → calbindine → absorption intestinale du calcium ; carence → rachitisme/ostéomalacie.
- Vitamine E : antioxydant membranaire, régénéré par la vitamine C ; carence → anémie hémolytique.
- Vitamine K : γ-carboxylation des facteurs II, VII, IX, X (+ protéines C/S, ostéocalcine) ; warfarine = anticoagulant en bloquant sa régénération.
- Cofacteurs vitaminiques : CoQ10 (chaîne respiratoire), carnitine (β-oxydation), acide lipoïque (décarboxylation oxydative), BH4 (hydroxylases, NO synthase).`;

export const FAT_SOLUBLE_VITAMINS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Vitamines liposolubles et cofacteurs apparentés",
    source_label: "MedByJes — Vitamines liposolubles A, D, E, K (Berg, Tymoczko, Gatto & Stryer, Biochemistry, 9e éd.)",
    content_fr: FAT_SOLUBLE_VITAMINS_COURSE,
  },
  qcm: [
    single("Parmi les vitamines liposolubles, laquelle est en réalité considérée comme une pro-hormone ?", "B", "La vitamine D peut être synthétisée par la peau et agit comme une hormone stéroïde (calcitriol).", ["Vitamine A", "Vitamine D", "Vitamine E", "Vitamine K"]),
    single("Quel est le site principal de stockage de la vitamine E dans l'organisme ?", "B", "Du fait de sa nature lipophile, la vitamine E s'accumule surtout dans le tissu adipeux.", ["Le foie", "Le tissu adipeux", "Le rein", "Les muscles squelettiques"]),
    single("Quelle protéine assure le transport plasmatique du rétinol du foie vers les tissus extrahépatiques ?", "C", "Le rétinol est transporté par la RBP, complexée à la transthyrétine.", ["L'albumine", "La transthyrétine seule", "La retinol binding protein (RBP)", "La CRBP"]),
    single("Le pigment photosensible des bâtonnets, la rhodopsine, résulte de l'association de :", "B", "La rhodopsine est formée par la scotopsine (opsine des bâtonnets) et le 11-cis-rétinal.", ["Opsine + acide rétinoïque", "Scotopsine + 11-cis-rétinal", "Transducine + tout-trans-rétinal", "Scotopsine + acide rétinoïque"]),
    single("Une carence prolongée en vitamine A peut entraîner une anémie, principalement en raison :", "B", "Le rétinol/l'acide rétinoïque sont nécessaires à la synthèse hépatique de la transferrine ; leur carence limite la mobilisation du fer.", ["D'une inhibition directe de l'érythropoïétine", "D'une synthèse hépatique réduite de la transferrine", "D'une toxicité médullaire du rétinol", "D'une carence secondaire en vitamine B12"]),
    single("La forme biologiquement active de la vitamine D, le calcitriol, correspond à :", "C", "Le calcitriol (1,25-(OH)2D3) résulte de la 25-hydroxylation hépatique puis de la 1-hydroxylation rénale.", ["Le cholécalciférol (vitamine D3)", "L'ergocalciférol (vitamine D2)", "Le 1,25-dihydroxyvitamine D3", "Le 25-hydroxyvitamine D3"]),
    single("Le calcitriol favorise l'absorption intestinale du calcium principalement en :", "B", "Le calcitriol induit l'expression de la calbindine, protéine qui facilite l'absorption intestinale du calcium.", ["Inhibant la parathormone", "Stimulant l'expression de la calbindine", "Bloquant la réabsorption tubulaire distale", "Activant directement l'ostéocalcine"]),
    single("Chez l'enfant, la carence en vitamine D est responsable de :", "B", "Le rachitisme (minéralisation osseuse défectueuse) touche l'enfant en croissance.", ["L'ostéomalacie", "Le rachitisme", "La xérophtalmie", "L'ostéoporose post-ménopausique"]),
    single("Pourquoi une exposition solaire excessive n'entraîne-t-elle pas d'intoxication à la vitamine D ?", "B", "La capacité de formation du précurseur cutané (7-déhydrocholestérol) est limitée, empêchant toute intoxication par voie cutanée.", ["Le rayonnement UV détruit l'excès de vitamine D formée", "La capacité de formation du précurseur cutané est limitée", "La vitamine D cutanée n'est jamais absorbée dans le sang", "La peau ne contient pas de récepteurs à la vitamine D"]),
    single("Le tocophérol ayant la plus forte activité biologique relative (100) est :", "C", "L'α-tocophérol possède l'activité biologique relative la plus élevée parmi les tocophérols naturels.", ["Le β-tocophérol", "Le γ-tocophérol", "L'α-tocophérol", "Le δ-tocophérol"]),
    single("Après avoir neutralisé un radical peroxyle lipidique, la forme active de l'α-tocophérol peut être régénérée grâce à :", "C", "La vitamine C permet de régénérer l'α-tocophérol oxydé.", ["La vitamine K", "Le sélénium seul", "La vitamine C (ascorbate)", "La vitamine A"]),
    single("La principale manifestation clinique de la carence en vitamine E est :", "B", "La carence en vitamine E fragilise la membrane des globules rouges, favorisant l'anémie hémolytique.", ["Une tendance hémorragique", "Une fragilité érythrocytaire prédisposant à l'anémie hémolytique", "Un rachitisme", "Une héméralopie"]),
    single("Quels facteurs de coagulation dépendent de la vitamine K pour leur activation ?", "B", "Les facteurs vitamine K-dépendants sont II, VII, IX, X, ainsi que les protéines C et S.", ["I, V, VIII, XII", "II, VII, IX, X", "III, IV, VI, XI", "Uniquement le fibrinogène"]),
    single("La warfarine agit comme anticoagulant en :", "B", "La warfarine inhibe la régénération de la forme hydroquinone de la vitamine K, nécessaire à la γ-carboxylation.", ["Inhibant directement la thrombine", "Bloquant la régénération de la forme hydroquinone de la vitamine K", "Chélatant le calcium plasmatique", "Détruisant la flore intestinale productrice de vitamine K2"]),
    single("La γ-carboxylation des résidus glutamate (formation de résidus Gla) est nécessaire, entre autres, à l'activation de :", "A", "La vitamine K est nécessaire à la carboxylation de protéines osseuses comme l'ostéocalcine, en plus des facteurs de coagulation.", ["L'ostéocalcine", "La rhodopsine", "La calbindine", "La transferrine"]),
    single("Chez le nouveau-né, le risque de carence en vitamine K est augmenté principalement car :", "B", "L'intestin stérile du nouveau-né limite la synthèse bactérienne de vitamine K2.", ["Le foie néonatal ne stocke pas les lipides", "L'intestin est stérile à la naissance", "Le nouveau-né ne possède pas de facteurs de coagulation", "La vitamine K3 est toxique chez le nouveau-né"]),
    single("L'ubiquinone (coenzyme Q10) intervient dans la chaîne respiratoire mitochondriale en tant que :", "B", "L'ubiquinone transporte les électrons entre les complexes I (et II) et le complexe III.", ["Accepteur final d'électrons", "Transporteur d'électrons entre les complexes I et III", "Cofacteur de la pyruvate déshydrogénase", "Donneur de protons pour l'ATP synthase uniquement"]),
    single("La L-carnitine est indispensable à la β-oxydation des acides gras car elle permet :", "A", "La L-carnitine transporte les acides gras à longue chaîne à travers la membrane mitochondriale interne.", ["Leur transport à travers la membrane mitochondriale interne", "Leur estérification avec l'acide palmitique dans l'entérocyte", "Leur liaison à la retinol binding protein", "Leur carboxylation vitamine K-dépendante"]),
  ],
  exam: { titre_fr: "Examen chronométré — Vitamines liposolubles et cofacteurs apparentés", duration_seconds: 1_620 },
};
