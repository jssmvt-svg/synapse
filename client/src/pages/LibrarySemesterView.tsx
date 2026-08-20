import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, type StudySemesterDetail } from "../api";
import { useLang } from "../i18n";

export function LibrarySemesterView() {
  const { semester } = useParams<{ semester: string }>();
  const { lang, t } = useLang();
  const [detail, setDetail] = useState<StudySemesterDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const number = Number(semester);
    if (!Number.isInteger(number)) return;
    setDetail(null);
    setError(null);
    api.getStudySemester(number).then(setDetail).catch((err) => setError((err as Error).message));
  }, [semester]);

  if (error) {
    return (
      <main className="library">
        <section className="access-message">
          <p className="eyebrow">{lang === "fr" ? "Accès à la première année" : "Year one access"}</p>
          <h1>{lang === "fr" ? "Ce semestre est verrouillé" : "This semester is locked"}</h1>
          <p>{error}</p>
          <Link to="/membership" className="hero-library-link">{lang === "fr" ? "Voir l’abonnement" : "View membership"}</Link>
        </section>
      </main>
    );
  }
  if (!detail) return <main className="library"><p className="loading-state">{t.loading}</p></main>;

  const title = lang === "fr" ? detail.semester.title_fr : detail.semester.title_en;
  const description = lang === "fr" ? detail.semester.description_fr : detail.semester.description_en;

  return (
    <main className="library">
      <div className="platform-header">
        <Link to="/dashboard" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span><strong>{t.appName}</strong><small>{t.brandPromise}</small></span>
        </Link>
        <nav className="platform-nav" aria-label="Navigation">
          <Link to="/dashboard">{t.dashboard}</Link>
          <Link to="/library" className="active">{t.libraryTitle}</Link>
          <Link to="/membership">{lang === "fr" ? "Mon abonnement" : "My membership"}</Link>
        </nav>
      </div>
      <header className="semester-header">
        <Link to="/library" className="back-link">{lang === "fr" ? "← Retour aux semestres" : "← Back to semesters"}</Link>
        <p className="eyebrow">{lang === "fr" ? "Première année · UMFT" : "Year one · UMFT"}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <section className="subject-grid" aria-label={lang === "fr" ? "Matières" : "Subjects"}>
        {detail.subjects.map((subject, index) => {
          const subjectTitle = lang === "fr" ? subject.titre_fr : subject.titre_en;
          const subjectDescription = lang === "fr" ? subject.description_fr : subject.description_en;
          return (
            <Link
              key={subject.slug}
              to={`/library/semester/${detail.semester.semester_number}/subject/${subject.slug}`}
              className={`subject-card subject-card-${subject.accent}`}
            >
              <span className="subject-card-index">0{index + 1}</span>
              <span className="subject-card-orb" aria-hidden="true">{subjectTitle.charAt(0)}</span>
              <h2>{subjectTitle}</h2>
              <p>{subjectDescription}</p>
              <div className="subject-card-footer">
                <span>{subject.chapters.length
                  ? `${subject.chapters.length} ${lang === "fr" ? "chapitres" : "chapters"}`
                  : (lang === "fr" ? "Contenu à venir" : "Content coming soon")}</span>
                <strong>{lang === "fr" ? "Explorer →" : "Explore →"}</strong>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}