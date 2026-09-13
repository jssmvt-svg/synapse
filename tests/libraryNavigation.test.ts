import assert from "node:assert/strict";
import test from "node:test";
import {
  authenticatedLibraryRoutePatterns,
  libraryRoutes,
} from "../client/src/libraryRoutes.js";
import { catalogueSubjects, LIBRARY_SUBJECTS } from "../server/src/libraryCatalogue.js";
import { BIOCHIMIE_S1 } from "../server/src/library-content/biochimie-s1.js";
import { BIOCHIMIE_S2 } from "../server/src/library-content/biochimie-s2.js";

test("the authenticated catalogue keeps every supported subject, including an empty one", () => {
  assert.deepEqual(
    LIBRARY_SUBJECTS.map(({ slug, matiere }) => ({ slug, matiere })),
    [
      { slug: "anatomie", matiere: "Anatomie" },
      { slug: "physiologie", matiere: "Physiologie" },
      { slug: "biochimie", matiere: "Biochimie" },
    ],
  );

  const subjects = catalogueSubjects([
    { id: 1, matiere: "Biochimie" },
    { id: 2, matiere: "Physiologie" },
  ]);
  assert.equal(subjects.find(({ slug }) => slug === "anatomie")?.chapters.length, 0);
  assert.equal(subjects.find(({ slug }) => slug === "physiologie")?.chapters.length, 1);
  assert.equal(subjects.find(({ slug }) => slug === "biochimie")?.chapters.length, 1);
});

test("all available Biochimie chapters remain uniquely navigable by direct URL", () => {
  const chapters = [
    ...BIOCHIMIE_S1.map((chapter) => ({ ...chapter, semester: 1 })),
    ...BIOCHIMIE_S2.map((chapter) => ({ ...chapter, semester: 2 })),
  ];

  assert.ok(chapters.length >= 40, "the complete Biochimie catalogue should be available");
  assert.ok(chapters.some(({ titre_fr }) => titre_fr === "La biochimie, une science en évolution"));
  assert.ok(chapters.some(({ titre_fr }) => titre_fr === "Glycolyse"));
  assert.equal(
    new Set(chapters.map(({ semester, ordre }) => `${semester}:${ordre}`)).size,
    chapters.length,
  );

  chapters.forEach((chapter, index) => {
    assert.equal(libraryRoutes.chapter(index + 1), `/library/chapter/${index + 1}`);
    assert.ok(chapter.titre_fr.length > 0);
    assert.ok(chapter.titre_en.length > 0);
  });
});

test("catalogue, subject, chapter, and dashboard recommendation links match authenticated routes", () => {
  assert.equal(libraryRoutes.catalogue, authenticatedLibraryRoutePatterns.catalogue);
  assert.equal(libraryRoutes.subject("biochimie"), "/library/subject/biochimie");
  assert.equal(libraryRoutes.semesterSubject(1, "anatomie"), "/library/semester/1/subject/anatomie");
  assert.equal(
    libraryRoutes.recommendation(42, "resource", 9),
    "/library/chapter/42?activity=resource&resourceId=9",
  );
  assert.equal(
    libraryRoutes.recommendation(42, "flashcards"),
    "/library/chapter/42?activity=flashcards",
  );
  assert.deepEqual(Object.values(authenticatedLibraryRoutePatterns), [
    "/library",
    "/library/chapter/:id",
    "/library/chapter/:id/my-deck",
    "/library/subject/:slug",
    "/library/semester/:semester",
    "/library/semester/:semester/subject/:slug",
  ]);
});