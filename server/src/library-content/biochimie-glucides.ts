import type { LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const GLUCIDES_COURSE = `# Chapitre 11 — Les glucides

## 1. Classification et cyclisation
- Un monosaccharide est un **aldose** (fonction aldéhyde en C1, ex. glucose) ou un **cétose** (fonction cétone, ex. fructose).
- En solution, un monosaccharide se cyclise : la forme linéaire (représentation de Fischer) et la forme cyclique (représentation de Haworth) coexistent en équilibre. Le glucose forme un cycle à 6 sommets (**pyranose**) ; le fructose peut former un cycle à 6 (pyranose) ou à 5 sommets (**furanose**).
- La cyclisation crée un nouveau carbone asymétrique, le **carbone anomérique** : les deux formes obtenues (α et β) sont des **anomères**.

## 2. Sucres réducteurs
- Un sucre dont le carbone anomérique est libre (non engagé dans une liaison) peut s'ouvrir et réduire un oxydant : c'est un **sucre réducteur**. Le test de Fehling/Benedict (Cu²⁺, bleu → Cu₂O, précipité rouge brique) détecte cette propriété.
- Le glucose, le maltose et le lactose sont des sucres réducteurs ; le saccharose, dont les deux carbones anomériques sont engagés dans la liaison glycosidique, ne l'est pas.

## 3. Liaisons glycosidiques
- La **liaison O-glycosidique** unit le carbone anomérique d'un sucre à un groupe hydroxyle (d'un autre sucre, d'une protéine via Ser/Thr, d'un lipide...).
- La **liaison N-glycosidique** unit le carbone anomérique à un groupe amine (ex. bases azotées des nucléosides ; ou l'azote de l'asparagine dans les glycoprotéines N-liées).
- Un sucre phosphorylé (ex. glucose-6-phosphate) forme une **liaison phosphoester**.

## 4. Disaccharides
| Disaccharide | Composition | Liaison | Réducteur ? |
| --- | --- | --- | --- |
| Saccharose (sucrose) | Glucose + Fructose | α1→β2 | Non |
| Lactose | Galactose + Glucose | β1→4 | Oui |
| Maltose | Glucose + Glucose | α1→4 | Oui |

L'hydrolyse du saccharose en glucose + fructose (« sucre inverti ») change le pouvoir rotatoire de la solution.

## 5. Polysaccharides

| Polysaccharide | Liaisons | Ramification | Digestible par l'humain ? |
| --- | --- | --- | --- |
| Glycogène (réserve animale, foie/muscle) | α1→4, branchements α1→6 | Forte (tous les 8-10 résidus) | Oui |
| Amylose (amidon végétal) | α1→4 | Aucune (linéaire) | Oui |
| Amylopectine (amidon végétal) | α1→4, branchements α1→6 | Moins fréquente que le glycogène | Oui |
| Cellulose | β1→4 | Aucune (linéaire) | Non (pas de cellulase) |

La configuration β de la cellulose empêche l'organisme humain de la digérer ; elle constitue la fibre alimentaire et la paroi végétale.

## 6. Glycoconjugués
- **Glycoprotéine** : protéine portant une chaîne glucidique représentant moins d'environ 15 % de sa masse.
- **Protéoglycane** : assemblage où la composante glucidique dépasse 15 % de la masse, formée de longues chaînes de **glycosaminoglycanes (GAG)** (ex. l'agrécane du cartilage, riche en chondroïtine sulfate).
- Deux types de glycosylation :
  - **N-liée** : la chaîne glucidique (débutant par N-acétylglucosamine) est fixée sur l'azote amide de l'**asparagine** (Asn), au sein d'un motif consensus Asn-X-Ser/Thr.
  - **O-liée** : la chaîne glucidique est fixée sur l'oxygène hydroxyle de la **sérine** ou de la **thréonine**.
- Les **glycosyltransférases** sont les enzymes qui catalysent l'ajout séquentiel des résidus glucidiques lors de la glycosylation.
- La glycosylation module la fonction des protéines : par exemple, le nombre de chaînes glucidiques portées par l'**érythropoïétine (EPO)** influence sa demi-vie plasmatique.

**Exemples de glycosaminoglycanes (GAG) :**

| GAG | Localisation / rôle |
| --- | --- |
| Héparine | Anticoagulant naturel, utilisé en pharmacologie |
| Chondroïtine sulfate | Cartilage |
| Acide hyaluronique | Liquide synovial, matrice extracellulaire |

## 7. Corrélations cliniques
- **Hémoglobine glyquée (HbA1c)** : le glucose sanguin se fixe de façon non enzymatique et irréversible sur l'hémoglobine (glycation). Le taux d'HbA1c reflète la glycémie moyenne des ~3 derniers mois et sert au suivi du diabète.
- **Réabsorption rénale du glucose** : le glucose filtré par le glomérule est normalement entièrement réabsorbé dans le tubule proximal. Au-delà du seuil rénal (~1,80 g/L, soit ~10 mmol/L), la capacité de réabsorption est dépassée et du glucose apparaît dans les urines (**glycosurie**), comme dans le diabète non contrôlé.

## Points à retenir
- Sucre réducteur = carbone anomérique libre ; le test de Fehling/Benedict le détecte.
- Glycogène et amylopectine sont branchés (α1-4/α1-6) ; la cellulose est linéaire et non digestible (β1-4).
- Glycoprotéine (<15 % glucides) vs protéoglycane (>15 % glucides, GAG) ; glycosylation N-liée (Asn) vs O-liée (Ser/Thr).
- L'HbA1c reflète la glycémie moyenne sur ~3 mois ; la glycosurie apparaît au-delà du seuil de réabsorption rénale du glucose.`;

export const GLUCIDES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Les glucides",
    source_label: "Notes de cours personnelles — Chapitre 11, Glucides",
    content_fr: GLUCIDES_COURSE,
  },
  qcm: [
    single("Quelle est la différence entre un aldose et un cétose ?", "A", "Un aldose porte une fonction aldéhyde (en C1) ; un cétose porte une fonction cétone.", ["Un aldose a une fonction aldéhyde, un cétose une fonction cétone", "Un aldose est toujours plus gros qu'un cétose", "Seul le cétose peut se cycliser", "Un aldose ne contient pas de carbone anomérique"]),
    single("Quel cycle forme typiquement le glucose en solution ?", "B", "Le glucose forme majoritairement un cycle à 6 sommets, le pyranose.", ["Un furanose (5 sommets)", "Un pyranose (6 sommets)", "Un cycle à 4 sommets", "Il ne se cyclise jamais"]),
    single("Qu'est-ce que le carbone anomérique ?", "C", "Le carbone anomérique est le nouveau centre asymétrique créé lors de la cyclisation d'un ose, donnant naissance aux formes α et β.", ["Le carbone portant la fonction alcool primaire", "Le premier carbone de la chaîne, toujours identique en α et β", "Le nouveau centre asymétrique créé lors de la cyclisation", "Le carbone qui porte le groupement phosphate"]),
    single("Qu'est-ce qui définit un sucre réducteur ?", "B", "Un sucre réducteur possède un carbone anomérique libre, capable de réduire un oxydant comme le Cu2+ (test de Fehling/Benedict).", ["Il contient un groupe phosphate", "Son carbone anomérique est libre (non engagé dans une liaison)", "Il est toujours un disaccharide", "Il ne peut pas former de liaison glycosidique"]),
    single("Pourquoi le saccharose n'est-il pas un sucre réducteur ?", "A", "Dans le saccharose, les deux carbones anomériques du glucose et du fructose sont engagés dans la liaison glycosidique, ne laissant aucun carbone anomérique libre.", ["Ses deux carbones anomériques sont engagés dans la liaison glycosidique", "Il ne contient pas de fructose", "Il est trop gros pour réagir", "Il ne possède aucun carbone anomérique"]),
    single("Quelle liaison caractérise le lactose (galactose + glucose) ?", "C", "Le lactose est formé par une liaison β1→4 entre galactose et glucose.", ["α1→4", "α1→2", "β1→4", "β1→6"]),
    multi("Parmi ces disaccharides, lesquels sont des sucres réducteurs ?", ["A", "B"], "Le lactose et le maltose ont un carbone anomérique libre et sont réducteurs ; le saccharose ne l'est pas.", ["Lactose", "Maltose", "Saccharose", "Aucun des trois"]),
    single("Quelle est la différence structurale principale entre le glycogène et la cellulose ?", "C", "Le glycogène est branché en liaisons α1-4/α1-6 (digestible), la cellulose est linéaire en liaisons β1-4 (non digestible par l'humain).", ["Le glycogène est fait de fructose, la cellulose de glucose", "La cellulose est branchée, le glycogène est linéaire", "Le glycogène est en liaisons α (branché), la cellulose en liaisons β (linéaire)", "Il n'y a aucune différence structurale"]),
    single("Pourquoi l'être humain ne peut-il pas digérer la cellulose ?", "B", "L'humain ne possède pas de cellulase, l'enzyme capable d'hydrolyser les liaisons β1-4 de la cellulose.", ["Parce que la cellulose est toxique", "Parce qu'il ne possède pas l'enzyme cellulase (liaisons β1-4)", "Parce que la cellulose ne contient pas de glucose", "Parce que la cellulose est trop soluble"]),
    single("Quelle est la différence entre une glycoprotéine et un protéoglycane ?", "B", "Une glycoprotéine porte moins de 15% de glucides en masse ; un protéoglycane en porte plus de 15%, sous forme de longues chaînes de GAG.", ["Une glycoprotéine ne contient aucun glucide", "Un protéoglycane contient plus de 15% de glucides (GAG), une glycoprotéine moins de 15%", "Un protéoglycane est toujours plus petit qu'une glycoprotéine", "Ce sont des synonymes stricts"]),
    single("Sur quel acide aminé s'effectue la glycosylation N-liée ?", "B", "La glycosylation N-liée se fait sur l'azote amide de l'asparagine (Asn), selon un motif Asn-X-Ser/Thr.", ["La sérine", "L'asparagine", "La thréonine", "La lysine"]),
    multi("Sur quels acides aminés s'effectue la glycosylation O-liée ?", ["A", "B"], "La glycosylation O-liée se fait sur le groupe hydroxyle de la sérine ou de la thréonine.", ["Sérine", "Thréonine", "Asparagine", "Lysine"]),
    single("Quel est le rôle d'une glycosyltransférase ?", "A", "Les glycosyltransférases catalysent l'ajout de résidus glucidiques lors de la glycosylation des protéines/lipides.", ["Catalyser l'ajout de résidus glucidiques (glycosylation)", "Hydrolyser les liaisons glycosidiques", "Transporter le glucose à travers la membrane", "Phosphoryler le glucose"]),
    single("Quel glycosaminoglycane est utilisé pharmacologiquement comme anticoagulant ?", "B", "L'héparine, un GAG naturel, est utilisée comme anticoagulant.", ["La chondroïtine sulfate", "L'héparine", "L'acide hyaluronique", "Le kératane sulfate"]),
    single("Que reflète le taux d'hémoglobine glyquée (HbA1c) ?", "C", "L'HbA1c résulte de la fixation non enzymatique du glucose sur l'hémoglobine ; son taux reflète la glycémie moyenne des ~3 derniers mois.", ["La glycémie instantanée au moment du prélèvement", "La quantité de fer lié à l'hémoglobine", "La glycémie moyenne des ~3 derniers mois", "La présence d'une anémie hémolytique"]),
    single("Que se passe-t-il lorsque la glycémie dépasse le seuil de réabsorption rénale du glucose ?", "B", "Au-delà du seuil rénal (~1,80 g/L), la capacité de réabsorption tubulaire est dépassée et du glucose apparaît dans les urines (glycosurie).", ["Le glucose est entièrement réabsorbé quelle que soit la glycémie", "Du glucose apparaît dans les urines (glycosurie)", "Le rein cesse totalement de filtrer le glucose", "La glycémie redescend automatiquement à la normale"]),
  ],
  exam: { titre_fr: "Examen chronométré — Les glucides", duration_seconds: 1_500 },
};
