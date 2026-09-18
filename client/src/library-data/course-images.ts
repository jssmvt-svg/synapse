// Images externes insérables dans un cours via [[image:clé]] (cf. MarkdownContent).
// Chaque entrée porte sa légende et son crédit : toute image ajoutée ici doit
// être libre de droits (domaine public ou licence libre) et sa licence vérifiée.
// Fichiers servis depuis client/public/anatomie/.
export interface CourseImage {
  src: string;
  caption: string;
  credit: string;
  license: string;
  sourceUrl: string;
}

const GRAY = "Henry Gray, Anatomy of the Human Body (1918), via Wikimedia Commons";
const gray = (n: number, caption: string): CourseImage => ({
  src: `/anatomie/gray-${n}.png`,
  caption,
  credit: GRAY,
  license: "Domaine public",
  sourceUrl: `https://commons.wikimedia.org/wiki/File:Gray${n}.png`,
});

export const COURSE_IMAGES: Record<string, CourseImage> = {
  "gray-409": gray(409, "Muscles reliant le membre supérieur à la colonne vertébrale (trapèze, grand dorsal, rhomboïdes), vue postérieure"),
  "gray-410": gray(410, "Grand pectoral et muscles de la face antérieure du thorax et de l'épaule"),
  "gray-411": gray(411, "Muscles du thorax et de la face antérieure du bras (biceps brachial, brachial, coracobrachial)"),
  "gray-412": gray(412, "Muscles dorsaux de la scapula et triceps brachial (face postérieure du bras)"),
  "gray-413": gray(413, "Coupe transversale du bras : compartiments antérieur et postérieur, nerfs et vaisseaux"),
  "gray-417": gray(417, "Coupe transversale de l'avant-bras : compartiments musculaires, radius et ulna"),
  "gray-414": gray(414, "Face antérieure de l'avant-bras : muscles du plan superficiel"),
  "gray-415": gray(415, "Face antérieure de l'avant-bras : muscles du plan profond"),
  "gray-418": gray(418, "Face postérieure de l'avant-bras : muscles du plan superficiel"),
  "gray-419": gray(419, "Face postérieure de l'avant-bras : muscles du plan profond"),
  "gray-423": gray(423, "Paume de la main : éminences thénar et hypothénar, gaines des tendons fléchisseurs"),
  "gray-424": gray(424, "Face dorsale de la main : rétinaculum des extenseurs et tendons"),
  "gray-326": gray(326, "Articulations de l'épaule et acromio-claviculaire, ligaments propres de la scapula"),
  "gray-327": gray(327, "Capsule de l'articulation gléno-humérale (distendue), vue antérieure"),
  "gray-329": gray(329, "Articulation du coude gauche : ligaments antérieur et médial"),
  "gray-330": gray(330, "Articulation du coude gauche : ligaments postérieur et latéral"),
  "gray-333": gray(333, "Ligament annulaire du radius, vu d'en haut (articulation radio-ulnaire proximale)"),
};
