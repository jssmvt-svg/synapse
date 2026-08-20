import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, type LibrarySubject, type StudySemesterDetail } from "../api";
import { useLang } from "../i18n";

export function LibrarySubjectView() {
  const { slug, semester } = useParams<{ slug: string; semester?: string }>();
  const { t, lang } = useLang();
  const [subject, setSubject] = useState<LibrarySubject | null>(null);
  const [semesterDetail, setSemesterDetail] = useState<StudySemesterDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setSubject(null);
    setError(null);
    const semesterNumber = Number(semester);
    if (Number.isInteger(semesterNumber)) {
      api
        .getStudySemester(semesterNumber)
        .then((detail) => {
          setSemesterDetail(detail);
          const found = detail.subjects.find((candidate) => candidate.slug === slug);
          if (!found) throw new Error("Matière introuvable");
          setSubject(found);
        })
        .catch((err) => setError((err as Error).message));
      return;
    }
    api.getLibrarySubject(slug).then(setSubject).catch((err) => setError((err as Error).message));
  }, [slug, semester]);

  if (error) return <main className="library"><p className="error">{error}</p></main>;
  if (!subject) return <main className="library"><p className="loading-state">{t.loading}</p></main>;

  const title = lang === "fr" ? subject.titre_fr : subject.titre_en;
  const description = lang === "fr" ? subject.description_fr : subject.description_en;

  return (
    <main className="library">
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

      <header className={`subject-header subject-header-${subject.accent}`}>
        <Link to={semesterDetail ? `/library/semester/${semesterDetail.semester.semester_number}` : "/library"} className="back-link">
          {semesterDetail
            ? (lang === "fr" ? "← Retour aux matières" : "← Back to subjects")
            : t.backToSubjects}
        </Link>
        <p className="eyebrow">{t.libraryTitle}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      {subject.chapters.length === 0 ? (
        <section className="subject-empty-state">
          <span className="subject-empty-mark" aria-hidden="true">+</span>
          <h2>{t.subjectEmptyTitle}</h2>
          <p>{t.subjectEmptyCopy(title)}</p>
          <Link to={semesterDetail ? `/library/semester/${semesterDetail.semester.semester_number}` : "/library"} className="hero-library-link">
            {semesterDetail ? (lang === "fr" ? "Retour aux matières" : "Back to subjects") : t.backToSubjects}
          </Link>
        </section>
      ) : (
        <section aria-labelledby="subject-chapters-heading">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">{t.subjectChapterCount(subject.chapters.length)}</p>
              <h2 id="subject-chapters-heading">{t.subjectChapters}</h2>
            </div>
          </div>
          <div className="subject-chapter-grid">
            {subject.chapters.map((chapter) => (
              <Link key={chapter.id} to={`/library/chapter/${chapter.id}`} className="subject-chapter-card">
                <span className="chapter-number">{String(chapter.ordre).padStart(2, "0")}</span>
                <span className="chapter-context">
                  {t.anneeLabel(chapter.annee)} · {t.semestreLabel(chapter.semestre)}
                </span>
                <h3>{lang === "fr" ? chapter.titre_fr : chapter.titre_en}</h3>
                <p>{lang === "fr" ? chapter.description_fr : chapter.description_en}</p>
                <small>{t.subjectOpenChapter} →</small>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}