import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, type ProgressSummary } from "../api";
import { useLang } from "../i18n";

function percentage(value: number): string {
  return `${Math.round(value)}%`;
}

export function Statistics() {
  const { t, lang } = useLang();
  const [summary, setSummary] = useState<ProgressSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getProgressSummary().then(setSummary).catch((err) => setError((err as Error).message));
  }, []);

  const text = (french: string, english: string) => (lang === "fr" ? french || english : english || french);

  if (error) {
    return (
      <main className="statistics-page">
        <p className="error">{error}</p>
        <Link to="/dashboard" className="back-link">{t.backDashboard}</Link>
      </main>
    );
  }

  if (!summary) {
    return <main className="statistics-page"><p className="loading-state">{t.loading}</p></main>;
  }

  return (
    <main className="statistics-page">
      <header className="platform-header">
        <Link to="/dashboard" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>
            <strong>{t.appName}</strong>
            <small>{t.brandPromise}</small>
          </span>
        </Link>
        <nav className="platform-nav" aria-label="Navigation">
          <Link to="/dashboard">{t.dashboard}</Link>
          <Link to="/library">{t.libraryTitle}</Link>
          <Link to="/statistics" className="active">{t.statistics}</Link>
        </nav>
      </header>

      <section className="statistics-hero">
        <p className="eyebrow">{t.statistics}</p>
        <h1>{t.statsTitle}</h1>
        <p>{t.statsIntro}</p>
      </section>

      <section className="statistics-metrics" aria-label={t.progressOverview}>
        <article>
          <span>{t.resourcesCompleted}</span>
          <strong>{summary.overall.resourcesCompleted}/{summary.overall.resourceTotal}</strong>
          <small>{t.courseRead}</small>
        </article>
        <article>
          <span>{t.cardsReviewed}</span>
          <strong>{summary.overall.flashcardsReviewed}/{summary.overall.flashcardTotal}</strong>
          <small>{summary.overall.flashcardsMastered} {t.cardsMastered.toLowerCase()}</small>
        </article>
        <article>
          <span>{t.qcmPerformance}</span>
          <strong>{summary.overall.qcmAttempts ? percentage(summary.overall.qcmAverageScore) : "—"}</strong>
          <small>{summary.overall.qcmAttempts} {t.qcmAttempts.toLowerCase()}</small>
        </article>
        <article>
          <span>{t.examCompleted}</span>
          <strong>{summary.overall.examAttempts}</strong>
          <small>{t.examAttempts.toLowerCase()}</small>
        </article>
      </section>

      <section className="statistics-section">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">{t.progressOverview}</p>
            <h2>{t.statsByChapter}</h2>
          </div>
          <Link to="/library" className="hero-library-link">{t.continueStudying} →</Link>
        </div>

        <div className="statistics-chapters">
          {summary.chapters.map((chapter) => {
            const coursePercent = chapter.resource_total
              ? (chapter.resources_completed / chapter.resource_total) * 100
              : 0;
            return (
              <article key={chapter.id} className="statistics-chapter">
                <div className="statistics-chapter-heading">
                  <div>
                    <span className="statistics-chapter-number">
                      {String(chapter.ordre).padStart(2, "0")}
                    </span>
                    <h3>{text(chapter.titre_fr, chapter.titre_en)}</h3>
                  </div>
                  <Link to={`/library/chapter/${chapter.id}`} className="text-button">
                    {t.viewChapter} →
                  </Link>
                </div>
                <div className="chapter-stat-line">
                  <span>{t.courseRead}</span>
                  <strong>{chapter.resources_completed}/{chapter.resource_total}</strong>
                </div>
                <div className="chapter-progress-track" aria-label={`${percentage(coursePercent)} ${t.courseRead}`}>
                  <span style={{ width: `${coursePercent}%` }} />
                </div>
                <div className="chapter-stat-grid">
                  <span>{t.cardsReviewed}<strong>{chapter.flashcards_reviewed}/{chapter.flashcard_total}</strong></span>
                  <span>{t.qcmPerformance}<strong>{chapter.qcm_attempts ? percentage(chapter.qcm_average_score) : "—"}</strong></span>
                  <span>{t.examCompleted}<strong>{chapter.exam_attempts}</strong></span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}