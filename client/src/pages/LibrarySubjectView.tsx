import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, type LibrarySubject, type StudySemesterDetail } from "../api";
import { useLang } from "../i18n";

type ChapterSection = "cours" | "laboratoire";

export function LibrarySubjectView() {
  const { slug, semester } = useParams<{ slug: string; semester?: string }>();
  const { t, lang } = useLang();
  const [subject, setSubject] = useState<LibrarySubject | null>(null);
  const [semesterDetail, setSemesterDetail] = useState<StudySemesterDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<ChapterSection | null>(null);

  useEffect(() => {
    if (!slug) return;
    setSubject(null);
    setError(null);
    setActiveSection(null);
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
      ) : activeSection === null ? (
        <SubjectSectionPicker
          chapters={subject.chapters}
          onSelect={setActiveSection}
        />
      ) : (
        <SectionChapterGrid
          chapters={subject.chapters.filter((chapter) => (chapter.section ?? "cours") === activeSection)}
          section={activeSection}
          lang={lang}
          onBack={() => setActiveSection(null)}
        />
      )}
    </main>
  );
}

function SubjectSectionPicker({
  chapters,
  onSelect,
}: {
  chapters: LibrarySubject["chapters"];
  onSelect: (section: ChapterSection) => void;
}) {
  const { t } = useLang();
  const coursCount = chapters.filter((chapter) => (chapter.section ?? "cours") === "cours").length;
  const laboCount = chapters.filter((chapter) => chapter.section === "laboratoire").length;

  return (
    <section aria-labelledby="subject-section-heading">
      <div className="section-title-row">
        <div>
          <h2 id="subject-section-heading">{t.subjectChapters}</h2>
        </div>
      </div>
      <div className="subject-section-grid">
        <button type="button" className="subject-section-card" onClick={() => onSelect("cours")}>
          <span className="chapter-number">{String(coursCount).padStart(2, "0")}</span>
          <h3>{t.sectionCours}</h3>
          <p>{t.sectionCoursCopy}</p>
          <small>{t.subjectExplore} →</small>
        </button>
        <button type="button" className="subject-section-card" onClick={() => onSelect("laboratoire")}>
          <span className="chapter-number">{String(laboCount).padStart(2, "0")}</span>
          <h3>{t.sectionLaboratoires}</h3>
          <p>{t.sectionLaboratoiresCopy}</p>
          <small>{t.subjectExplore} →</small>
        </button>
      </div>
    </section>
  );
}

function SectionChapterGrid({
  chapters,
  section,
  lang,
  onBack,
}: {
  chapters: LibrarySubject["chapters"];
  section: ChapterSection;
  lang: "fr" | "en";
  onBack: () => void;
}) {
  const { t } = useLang();

  return (
    <section aria-labelledby="subject-chapters-heading">
      <div className="section-title-row">
        <div>
          <button type="button" className="text-button" onClick={onBack}>
            {t.sectionBack}
          </button>
          <p className="eyebrow">{t.subjectChapterCount(chapters.length)}</p>
          <h2 id="subject-chapters-heading">
            {section === "cours" ? t.sectionCours : t.sectionLaboratoires}
          </h2>
        </div>
      </div>
      {chapters.length === 0 ? (
        <p className="hint">{t.sectionEmptyLabo}</p>
      ) : (
        <div className="subject-chapter-grid">
          {chapters.map((chapter) => (
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
      )}
    </section>
  );
}