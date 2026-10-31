import type { CourseImage } from "./course-images";

// Captures des cours de 2e année (UMFT) : usage personnel de l'admin uniquement.
// Fichiers dans server/private-assets/year2/, servis par GET
// /api/library/year/2/images/:file après contrôle du rôle admin.
const y2 = (file: string, caption: string, source: string): CourseImage => ({
  src: `/api/library/year/2/images/${file}`,
  caption,
  credit: source,
  license: "usage privé",
  sourceUrl: "",
});

export const YEAR2_IMAGES: Record<string, CourseImage> = {
};

void y2;
