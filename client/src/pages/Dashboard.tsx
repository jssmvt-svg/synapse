import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, type DocumentSummary, type ProgressSummary } from "../api";
import { useAuth } from "../auth";
import { useLang } from "../i18n";
import { libraryRoutes } from "../libraryRoutes";
import { TrialCountdown } from "../components/TrialCountdown";

export function Dashboard() {
  const { t, lang, setLang } = useLang();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<DocumentSummary[]>([]);
  const [selectedDocId, setSelectedDocId] = useState<number | null>(null);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<ProgressSummary | null>(null);
  const [progressError, setProgressError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  async function refreshDocuments() {
    setError(null);
    try {
      setDocuments(await api.listDocuments());
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function refreshProgress() {
    setProgressError(null);
    try {
      setProgress(await api.getProgressSummary());
    } catch (err) {
      setProgressError((err as Error).message);
    }
  }

  useEffect(() => {
    void refreshDocuments();
    void refreshProgress();
  }, []);

  const text = (french: string, english: string) => (lang === "fr" ? french || english : english || french);
  const percent = (value: number) => `${Math.round(value)}%`;
  const actionLink = progress?.recommendation
    ? libraryRoutes.recommendation(
        progress.recommendation.chapterId,
        progress.recommendation.kind,
        progress.recommendation.resourceId,
      )
    : libraryRoutes.catalogue;
  const recommendationCopy = () => {
    switch (progress?.recommendation?.reason) {
      case "resource_incomplete":
        return t.resourceToFinish;
      case "flashcards_to_review":
        return t.flashcardsToReview;
      case "qcm_to_practice":
        return t.qcmToPractice;
      default:
        return t.examToRetry;
    }
  };
  const actionLabel = () => {
    switch (progress?.recommendation?.kind) {
      case "flashcards":
        return t.reviewFlashcards;
      case "qcm":
        return t.retryQcm;
      case "exam":
        return t.takeExam;
      default:
        return t.continueStudying;
    }
  };

  async function onFileChosen(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    try {
      await api.uploadDocument(file);
      await refreshDocuments();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  async function onGenerateFlashcards() {
    if (selectedDocId === null || generating) return;
    setError(null);
    setGenerating(true);
    try {
      const { deckId } = await api.generate(selectedDocId);
      navigate(`/deck/${deckId}`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="dashboard">
      <div className="top-banner">
        <span className="status-dot" aria-hidden="true" />
        {t.onlineBadge}
      </div>
      {user?.role !== "admin" && user?.subscriptionStatus !== "active" && user?.subscriptionStatus !== "trialing" && (
        <div className="access-banner">
          <p className="eyebrow">{t.trialEndedBanner}</p>
          <p>{lang === "fr"
            ? "Contacte l'administration si tu as besoin d'un nouvel accès."
            : "Contact the administration if you need access again."}</p>
        </div>
      )}
      {user?.subscriptionStatus === "trialing" && user?.trialEndsAt && (
        <div className="access-banner access-banner-trial">
          <p>{t.trialActiveUntil}</p>
          <TrialCountdown endsAt={user.trialEndsAt} lang={lang} />
        </div>
      )}
      <header className="dashboard-header">
        <Link to="/dashboard" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>
            <strong>{t.appName}</strong>
            <small>{t.brandPromise}</small>
          </span>
        </Link>
        <div className="header-actions">
          <Link to="/library" className="header-nav-link">
            {t.libraryTitle}
          </Link>
          <Link to="/statistics" className="header-nav-link">
            {t.statistics}
          </Link>
          <div className="language-switcher" aria-label="Language">
            <button
              className={lang === "fr" ? "selected" : ""}
              onClick={() => {
                setLang("fr");
                api.setLang("fr").catch(() => {});
              }}
            >
              FR
            </button>
            <button
              className={lang === "en" ? "selected" : ""}
              onClick={() => {
                setLang("en");
                api.setLang("en").catch(() => {});
              }}
            >
              EN
            </button>
          </div>
          <span className="user-chip">{user?.email}</span>
          <button className="logout-button" onClick={logout}>{t.logout}</button>
        </div>
      </header>

      <section className="dashboard-hero">
        <div>
          <p className="eyebrow">{t.studySpace}</p>
          <h1>{t.dashboardGreeting}</h1>
          <p>{t.dashboardIntro}</p>
        </div>
        <Link to="/library" className="hero-library-link">
          {t.libraryTitle} <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="dashboard-feature-grid" aria-label={t.studyProgress}>
        <Link to="/library" className="dashboard-feature-card">
          <span className="feature-index">01</span>
          <h2>{t.dashboardFeatureCourse}</h2>
          <p>{t.dashboardFeatureCourseCopy}</p>
          <small>{t.libraryTitle} →</small>
        </Link>
        <Link to="/library" className="dashboard-feature-card">
          <span className="feature-index feature-index-violet">02</span>
          <h2>{t.dashboardFeatureExam}</h2>
          <p>{t.dashboardFeatureExamCopy}</p>
          <small>{t.chapterExam} →</small>
        </Link>
        <Link to="/statistics" className="dashboard-feature-card">
          <span className="feature-index feature-index-warm">03</span>
          <h2>{t.dashboardFeatureStats}</h2>
          <p>{t.dashboardFeatureStatsCopy}</p>
          <small>{t.statistics} →</small>
        </Link>
      </section>


    </div>
  );
}
