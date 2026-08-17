import { Router } from "express";
import { db } from "../db.js";
import { authMiddleware, type AuthedRequest } from "../middleware/auth.js";

export const libraryRouter = Router();

libraryRouter.use(authMiddleware);

// Structure connue de la bibliothèque : Année 1, Semestre 1 et Semestre 2.
// Un semestre sans matière seedée en base apparaît simplement vide côté
// front (« contenu à venir »), plutôt que d'être absent de l'arbre.
const KNOWN_STRUCTURE = [{ annee: 1, semestres: [1, 2] }];

libraryRouter.get("/", async (_req: AuthedRequest, res) => {
  const chapters = await db
    .prepare(
      `SELECT id, annee, semestre, matiere, ordre, titre_fr, titre_en,
              description_fr, description_en, icone
       FROM library_chapters
       ORDER BY annee ASC, semestre ASC, matiere ASC, ordre ASC`,
    )
    .all();

  const tree = KNOWN_STRUCTURE.map((annee) => ({
    annee: annee.annee,
    semestres: annee.semestres.map((semestre) => {
      const chaptersForSemestre = chapters.filter(
        (c: any) => c.annee === annee.annee && c.semestre === semestre,
      );
      const matieres = new Map<string, any[]>();
      for (const chapter of chaptersForSemestre) {
        if (!matieres.has(chapter.matiere)) matieres.set(chapter.matiere, []);
        matieres.get(chapter.matiere)!.push(chapter);
      }
      return {
        semestre,
        matieres: Array.from(matieres.entries()).map(([matiere, chapitres]) => ({
          matiere,
          chapitres,
        })),
      };
    }),
  }));

  res.json(tree);
});

libraryRouter.get("/chapters/:id/flashcards", async (req: AuthedRequest, res) => {
  const chapterId = Number(req.params.id);
  const chapter = await db.prepare("SELECT id FROM library_chapters WHERE id = ?").get(chapterId);
  if (!chapter) {
    return res.status(404).json({ error: "Chapitre introuvable" });
  }

  const cards = await db
    .prepare(
      "SELECT id, question_fr, question_en, answer_fr, answer_en FROM library_flashcards WHERE chapter_id = ? ORDER BY ordre ASC",
    )
    .all(chapterId);
  res.json(cards);
});
