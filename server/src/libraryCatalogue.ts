export const LIBRARY_SUBJECTS = [
  {
    slug: "anatomie",
    matiere: "Anatomie",
    titre_fr: "Anatomie",
    titre_en: "Anatomy",
    description_fr: "Structure et organisation du corps humain.",
    description_en: "Structure and organization of the human body.",
    accent: "coral",
  },
  {
    slug: "physiologie",
    matiere: "Physiologie",
    titre_fr: "Physiologie",
    titre_en: "Physiology",
    description_fr: "Fonctionnement des systèmes et grands équilibres du corps.",
    description_en: "How body systems work and maintain their balance.",
    accent: "teal",
  },
  {
    slug: "biochimie",
    matiere: "Biochimie",
    titre_fr: "Biochimie",
    titre_en: "Biochemistry",
    description_fr: "Les bases moléculaires essentielles pour comprendre le vivant.",
    description_en: "Essential molecular foundations for understanding life.",
    accent: "violet",
  },
] as const;

export function catalogueSubjects<T extends { matiere: string }>(chapters: T[]) {
  return LIBRARY_SUBJECTS.map((subject) => ({
    ...subject,
    chapters: chapters.filter((chapter) => chapter.matiere === subject.matiere),
  }));
}
// Année 2 : réservée à l'admin (canOpenStudyContent refuse toute année ≠ 1 aux
// élèves). Catalogue séparé pour ne pas afficher de cartes vides en année 1 ;
// les noms de matière sont distincts de ceux de l'année 1 (« Biochimie
// clinique » ≠ « Biochimie ») pour que /subjects/:slug ne mélange pas les années.
export const LIBRARY_SUBJECTS_Y2 = [
  {
    slug: "y2-genetique",
    matiere: "Génétique",
    titre_fr: "Génétique médicale",
    titre_en: "Medical Genetics",
    description_fr: "Rôle de la génétique en médecine, génome humain, ADN, réplication et ARN.",
    description_en: "Role of genetics in medicine, human genome, DNA, replication and RNA.",
    accent: "violet",
  },
  {
    slug: "y2-histologie",
    matiere: "Histologie",
    titre_fr: "Histologie",
    titre_en: "Histology",
    description_fr: "Colorations, tissus et organes au microscope.",
    description_en: "Stainings, tissues and organs under the microscope.",
    accent: "coral",
  },
  {
    slug: "y2-biochimie-clinique",
    matiere: "Biochimie clinique",
    titre_fr: "Biochimie clinique",
    titre_en: "Clinical Biochemistry",
    description_fr: "Contrôle qualité, bilan sanguin et urinaire, marqueurs cardiaques.",
    description_en: "Quality control, blood and urine tests, cardiac markers.",
    accent: "teal",
  },
  {
    slug: "y2-microbiologie",
    matiere: "Microbiologie",
    titre_fr: "Microbiologie",
    titre_en: "Microbiology",
    description_fr: "Prélèvements et milieux de culture au laboratoire.",
    description_en: "Clinical samples and culture media in the lab.",
    accent: "violet",
  },
  {
    slug: "y2-parasitologie",
    matiere: "Parasitologie",
    titre_fr: "Parasitologie",
    titre_en: "Parasitology",
    description_fr: "Parasites humains : cours et travaux pratiques.",
    description_en: "Human parasites: lectures and practicals.",
    accent: "coral",
  },
] as const;

export function catalogueSubjectsY2<T extends { matiere: string }>(chapters: T[]) {
  return LIBRARY_SUBJECTS_Y2.map((subject) => ({
    ...subject,
    chapters: chapters.filter((chapter) => chapter.matiere === subject.matiere),
  }));
}
