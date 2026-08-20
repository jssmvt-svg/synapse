import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import { api, type StudySemester } from "../api";
import { useLang } from "../i18n";

export function Library() {
  const { t, lang } = useLang();
  const { user } = useAuth();
  const [semesters, setSemesters] = useState<StudySemester[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getStudySemesters().then(setSemesters).catch((err) => setError((err as Error).message));
  }, []);

  if (error) return <main className="library"><p className="error">{error}</p></main>;
  if (!semesters) return <main className="library"><p className="loading-state">{t.loading}</p></main>;

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
          <Link to="/membership">{lang === "fr" ? "Mon abonnement" : "My membership"}</Link>
          {user?.role === "admin" && <Link to="/admin">{lang === "fr" ? "Administration" : "Admin"}</Link>}
        </nav>
      </div>
      <header className="library-header">
        <p className="eyebrow">{t.libraryEyebrow}</p>
        <h1>{t.libraryTitle}</h1>
        <p>{lang === "fr"
          ? "Première année UMFT : choisis ton semestre, puis avance à ton rythme dans chaque matière."
          : "UMFT year one: choose your semester, then progress through every subject at your own pace."}</p>
      </header>

      <section className="semester-grid" aria-label={t.libraryTitle}>
        {semesters.map((semester) => {
          const title = lang === "fr" ? semester.title_fr : semester.title_en;
          const description = lang === "fr" ? semester.description_fr : semester.description_en;
          const destination = semester.has_access ? `/library/semester/${semester.semester_number}` : "/membership";
          return (
            <Link
              key={semester.id}
              to={destination}
              className={`semester-card ${semester.has_access ? "semester-card-open" : "semester-card-locked"}`}
            >
              <span className="semester-card-number">0{semester.semester_number}</span>
              <span className="semester-card-kicker">{lang === "fr" ? "Première année" : "Year one"}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="semester-card-footer">
                <span>{semester.subject_count} {lang === "fr" ? "matières" : "subjects"} · {semester.chapter_count} {lang === "fr" ? "chapitres" : "chapters"}</span>
                <strong>{semester.has_access
                  ? (lang === "fr" ? "Ouvrir le semestre →" : "Open semester →")
                  : (semester.is_published
                    ? (lang === "fr" ? "Abonnement requis →" : "Subscription required →")
                    : (lang === "fr" ? "Bientôt disponible" : "Coming soon"))}</strong>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
