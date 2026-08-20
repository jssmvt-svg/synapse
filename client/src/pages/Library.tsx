import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type LibrarySubject } from "../api";
import { useLang } from "../i18n";

export function Library() {
  const { t, lang } = useLang();
  const [subjects, setSubjects] = useState<LibrarySubject[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getLibrarySubjects().then(setSubjects).catch((err) => setError((err as Error).message));
  }, []);

  if (error) return <main className="library"><p className="error">{error}</p></main>;
  if (!subjects) return <main className="library"><p className="loading-state">{t.loading}</p></main>;

  return (
    <div className="library">
      <div className="platform-header">
        <Link to="/dashboard" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>
            <strong>{t.appName}</strong>
            <small>{t.brandPromise}</small>
          </span>
        </Link>
        <nav className="platform-nav" aria-label="Navigation">
          <Link to="/dashboard">{t.dashboard}</Link>
          <Link to="/library" className="active">{t.libraryTitle}</Link>
          <Link to="/statistics">{t.statistics}</Link>
        </nav>
      </div>
      <header className="library-header">
        <p className="eyebrow">{t.libraryEyebrow}</p>
        <h1>{t.libraryTitle}</h1>
        <p>{t.libraryIntro}</p>
      </header>

      <section className="subject-grid" aria-label={t.libraryTitle}>
        {subjects.map((subject, index) => {
          const title = lang === "fr" ? subject.titre_fr : subject.titre_en;
          const description = lang === "fr" ? subject.description_fr : subject.description_en;
          const hasContent = subject.chapters.length > 0;
          return (
            <Link
              key={subject.slug}
              to={`/library/subject/${subject.slug}`}
              className={`subject-card subject-card-${subject.accent}`}
            >
              <span className="subject-card-index">0{index + 1}</span>
              <span className="subject-card-orb" aria-hidden="true">{title.charAt(0)}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="subject-card-footer">
                <span>{hasContent ? t.subjectChapterCount(subject.chapters.length) : t.libraryComingSoon}</span>
                <strong>{hasContent ? t.subjectExplore : t.subjectView}</strong>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
