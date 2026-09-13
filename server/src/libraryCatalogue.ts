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