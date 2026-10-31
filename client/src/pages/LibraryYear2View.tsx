import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type LibrarySubject } from "../api";
import { useLang } from "../i18n";
import { libraryRoutes } from "../libraryRoutes";

// Année 2 : espace de révision privé de l'admin (le serveur répond 404 aux élèves).
export function LibraryYear2View() {
  const { lang, t, tx } = useLang();
  const [subjects, setSubjects] = useState<LibrarySubject[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getYear2().then((data) => setSubjects(data.subjects)).catch((err) => setError((err as Error).message));
  }, []);

  if (error) return <main className="library"><p className="error">{error}</p></main>;
  if (!subjects) return <main className="library"><p className="loading-state">{t.loading}</p></main>;

  return (
    <main className="library">
      <div className="platform-header">
        <Link to="/dashboard" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span><strong>{t.appName}</strong><small>{t.brandPromise}</small></span>
        </Link>
        <nav className="platform-nav" aria-label="Navigation">
          <Link to="/dashboard">{t.dashboard}</Link>
          <Link to={libraryRoutes.catalogue}>{t.libraryTitle}</Link>
          <Link to={libraryRoutes.year2} className="active">Year 2</Link>
        </nav>
      </div>
      <header className="semester-header">
        <Link to={libraryRoutes.catalogue} className="back-link">{tx("← Retour à la bibliothèque", "← Back to library")}</Link>
        <p className="eyebrow">{tx("Deuxième année · privé (admin)", "Year two · private (admin)")}</p>
        <h1>Year 2</h1>
        <p>{tx(
          "Synthèses des cours de 2e année, visibles uniquement par toi.",
          "Year-two course summaries, visible only to you.",
        )}</p>
      </header>
      <section className="subject-grid" aria-label={tx("Matières", "Subjects")}>
        {subjects.map((subject, index) => {
          const subjectTitle = lang === "fr" ? subject.titre_fr : subject.titre_en;
          const subjectDescription = lang === "fr" ? subject.description_fr : subject.description_en;
          return (
            <Link
              key={subject.slug}
              to={libraryRoutes.subject(subject.slug)}
              className={`subject-card subject-card-${subject.accent}`}
            >
              <span className="subject-card-index">0{index + 1}</span>
              <span className="subject-card-orb" aria-hidden="true">{subjectTitle.charAt(0)}</span>
              <h2>{subjectTitle}</h2>
              <p>{subjectDescription}</p>
              <div className="subject-card-footer">
                <span>{subject.chapters.length
                  ? `${subject.chapters.length} ${tx("chapitres", "chapters")}`
                  : tx("Contenu à venir", "Content coming soon")}</span>
                <strong>{tx("Explorer →", "Explore →")}</strong>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
