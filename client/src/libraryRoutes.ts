export const libraryRoutes = {
  catalogue: "/library",
  semester: (semester: number | string) => `/library/semester/${semester}`,
  subject: (slug: string) => `/library/subject/${encodeURIComponent(slug)}`,
  semesterSubject: (semester: number | string, slug: string) =>
    `/library/semester/${semester}/subject/${encodeURIComponent(slug)}`,
  chapter: (chapterId: number | string) => `/library/chapter/${chapterId}`,
  personalDeck: (chapterId: number | string) => `/library/chapter/${chapterId}/my-deck`,
  recommendation: (
    chapterId: number,
    activity: string,
    resourceId?: number,
  ) =>
    `${libraryRoutes.chapter(chapterId)}?activity=${encodeURIComponent(activity)}${
      resourceId ? `&resourceId=${resourceId}` : ""
    }`,
} as const;

export const authenticatedLibraryRoutePatterns = {
  catalogue: "/library",
  chapter: "/library/chapter/:id",
  personalDeck: "/library/chapter/:id/my-deck",
  subject: "/library/subject/:slug",
  semester: "/library/semester/:semester",
  semesterSubject: "/library/semester/:semester/subject/:slug",
} as const;