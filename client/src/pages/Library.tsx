import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth";
import { api, type StudySemester } from "../api";
import { useLang } from "../i18n";
import { SearchBar } from "../components/SearchBar";
import { libraryRoutes } from "../libraryRoutes";

export function Library() {
  const { t, lang, tx } = useLang();
  const { user, setUser } = useAuth();
  const [searchParams] = useSearchParams();
  const [semesters, setSemesters] = useState<StudySemester[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getStudySemesters().then(setSemesters).catch((err) => setError((err as Error).message));
  }, []);

  // Le webhook Stripe active l'accès en tâche de fond ; on rafraîchit l'utilisateur
  // au retour du paiement pour ne pas laisser afficher le bandeau "essai terminé".
  useEffect(() => {
    if (searchParams.get("checkout") === "success") {
      api.me().then(setUser).catch(() => {});
    }
  }, [searchParams, setUser]);

  // Pendant l'essai gratuit, seul le semestre 1 est ouvert.
  const onTrial = user?.role !== "admin" && user?.subscriptionStatus === "trialing";

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
          <Link to={libraryRoutes.catalogue} className="active">{t.libraryTitle}</Link>
          <Link to="/statistics">{t.statistics}</Link>
          {user?.role === "admin" && <Link to={libraryRoutes.year2}>Year 2</Link>}
          {user?.role === "admin" && <Link to="/admin">{tx("Administration", "Admin")}</Link>}
        </nav>
      </div>
      <SearchBar />
      <header className="library-header">
        <p className="eyebrow">{t.libraryEyebrow}</p>
        <h1>{t.libraryTitle}</h1>
        <p>{tx("Première année UMFT : choisis ton semestre, puis avance à ton rythme dans chaque matière.", "UMFT year one: choose your semester, then progress through every subject at your own pace.")}</p>
      </header>

      <section className="semester-grid" aria-label={t.libraryTitle}>
        {semesters.map((semester) => {
          const title = lang === "fr" ? semester.title_fr : semester.title_en;
          const description = lang === "fr" ? semester.description_fr : semester.description_en;
          const destination = semester.has_access ? libraryRoutes.semester(semester.semester_number) : "/dashboard";
          return (
            <Link
              key={semester.id}
              to={destination}
              className={`semester-card ${semester.has_access ? "semester-card-open" : "semester-card-locked"}`}
            >
              <span className="semester-card-number">0{semester.semester_number}</span>
              <span className="semester-card-kicker">{tx("Première année", "Year one")}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="semester-card-footer">
                <span>{semester.subject_count} {tx("matières", "subjects")} · {semester.chapter_count} {tx("chapitres", "chapters")}</span>
                <strong>{semester.has_access
                  ? (tx("Ouvrir le semestre →", "Open semester →"))
                  : (semester.is_published
                    ? (onTrial
                      ? tx("Réservé aux abonnés →", "Subscribers only →")
                      : tx("Accès requis →", "Access required →"))
                    : (tx("Bientôt disponible", "Coming soon")))}</strong>
              </div>
            </Link>
          );
        })}
        {user?.role === "admin" && (
          <Link to={libraryRoutes.year2} className="semester-card semester-card-open">
            <span className="semester-card-number">Y2</span>
            <span className="semester-card-kicker">{tx("Deuxième année · privé", "Year two · private")}</span>
            <h2>Year 2</h2>
            <p>{tx("Tes synthèses de 2e année (visible seulement par toi).", "Your year-two summaries (only visible to you).")}</p>
            <div className="semester-card-footer">
              <span>Admin</span>
              <strong>{tx("Ouvrir →", "Open →")}</strong>
            </div>
          </Link>
        )}
      </section>
    </div>
  );
}
