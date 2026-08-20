import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, type DocumentSummary, type ProgressSummary } from "../api";
import { useAuth } from "../auth";
import { useLang } from "../i18n";

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
    ? `/library/chapter/${progress.recommendation.chapterId}?activity=${progress.recommendation.kind}${
        progress.recommendation.resourceId ? `&resourceId=${progress.recommendation.resourceId}` : ""
      }`
    : "/library";
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
      <header className="dashboard-header">
        <h1>{t.appName}</h1>
        <div className="header-actions">
          <Link to="/library" className="library-link">
            {t.libraryTitle}
          </Link>
          <button
            className="lang-toggle"
            onClick={() => {
              const next = lang === "fr" ? "en" : "fr";
              setLang(next);
              api.setLang(next).catch(() => {});
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <span>{user?.email}</span>
          <button onClick={logout}>{t.logout}</button>
        </div>
      </header>

      <section className="progress-dashboard" aria-labelledby="study-progress-title">
        <div className="progress-section-heading">
          <div>
            <p className="eyebrow">{t.progressOverview}</p>
            <h2 id="study-progress-title">{t.studyProgress}</h2>
          </div>
          <Link to="/library" className="library-link">
            {t.continueStudying} →
          </Link>
        </div>
        {progressError ? (
          <p className="error">{progressError}</p>
        ) : !progress ? (
          <p className="loading-state">{t.loading}</p>
        ) : (
          <>
            <div className="progress-metric-grid">
              <article className="progress-metric">
                <span>{t.resourcesCompleted}</span>
                <strong>
                  {progress.overall.resourcesCompleted}/{progress.overall.resourceTotal}
                </strong>
              </article>
              <article className="progress-metric">
                <span>{t.cardsReviewed}</span>
                <strong>
                  {progress.overall.flashcardsReviewed}/{progress.overall.flashcardTotal}
                </strong>
                <small>{progress.overall.flashcardsMastered} {t.cardsMastered.toLowerCase()}</small>
              </article>
              <article className="progress-metric">
                <span>{t.qcmPerformance}</span>
                <strong>
                  {progress.overall.qcmAttempts ? percent(progress.overall.qcmAverageScore) : "—"}
                </strong>
                <small>{progress.overall.qcmAttempts} QCM</small>
              </article>
              <article className="progress-metric">
                <span>{t.examCompleted}</span>
                <strong>{progress.overall.examAttempts}</strong>
              </article>
            </div>

            {progress.recommendation && (
              <article className="next-action-card">
                <div>
                  <p className="eyebrow">{t.nextBestAction}</p>
                  <h3>{text(progress.recommendation.title_fr, progress.recommendation.title_en)}</h3>
                  <p>{recommendationCopy()}</p>
                </div>
                <Link to={actionLink} className="next-action-link">
                  {actionLabel()} →
                </Link>
              </article>
            )}

            <div className="progress-detail-grid">
              <section className="progress-detail-card">
                <h3>{t.chapterProgress}</h3>
                {progress.chapters.map((chapter) => (
                  <Link key={chapter.id} to={`/library/chapter/${chapter.id}`} className="chapter-progress-row">
                    <div>
                      <strong>{text(chapter.titre_fr, chapter.titre_en)}</strong>
                      <span>
                        {chapter.resources_completed}/{chapter.resource_total} {t.resourcesCompleted.toLowerCase()}
                      </span>
                    </div>
                    <div className="chapter-progress-stats">
                      <span>{chapter.flashcards_reviewed} {t.cardsReviewed.toLowerCase()}</span>
                      <span>
                        {chapter.qcm_attempts ? percent(chapter.qcm_average_score) : t.noAttempts}
                      </span>
                    </div>
                  </Link>
                ))}
              </section>
              <section className="progress-detail-card">
                <h3>{t.learningActivity}</h3>
                {progress.recentActivity.length === 0 ? (
                  <p className="hint">{t.noLearningActivity}</p>
                ) : (
                  <ul className="activity-list">
                    {progress.recentActivity.map((activity, index) => (
                      <li key={`${activity.type}-${activity.occurred_at}-${index}`}>
                        <span className="activity-dot" aria-hidden="true" />
                        <div>
                          <strong>{text(activity.titre_fr, activity.titre_en)}</strong>
                          <span>
                            {activity.type === "resource"
                              ? text(activity.item_fr ?? t.resourcesCompleted, activity.item_en ?? t.resourcesCompleted)
                              : activity.type === "flashcard"
                                ? `${t.flashcards} · ${activity.score}/5`
                                : activity.type === "qcm"
                                  ? `QCM · ${percent(activity.score ?? 0)}`
                                  : `${t.chapterExam} · ${percent(activity.score ?? 0)}`}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </>
        )}
      </section>

      <div className="workspace">
        <section className="col col-sources">
          <h2>{t.sourcesTitle}</h2>
          <p>{t.uploadPrompt}</p>
          <input
            ref={fileInput}
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={onFileChosen}
            aria-label={t.uploadButton}
          />
          {error && <p className="error">{error}</p>}

          {documents.length === 0 ? (
            <p>{t.noDocuments}</p>
          ) : (
            <ul className="document-list">
              {documents.map((doc) => (
                <li
                  key={doc.id}
                  className={`document-row${doc.id === selectedDocId ? " selected" : ""}`}
                  onClick={() => setSelectedDocId(doc.id)}
                >
                  <span>{doc.filename}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="col col-chat">
          <h2>{t.chatTitle}</h2>
          <div className="mascot-card">
            <div className="mascot-avatar" aria-hidden="true">
              🐱
            </div>
            <p className="mascot-bubble">{t.sageIntro}</p>
          </div>
          <div className="chat-input-row">
            <input disabled placeholder={t.chatPlaceholder} aria-label={t.chatPlaceholder} />
            <button disabled>{t.chatSend}</button>
          </div>
          <span className="badge">{t.comingSoon}</span>
        </section>

        <section className="col col-studio">
          <h2>{t.studioTitle}</h2>
          <div className="studio-grid">
            <button
              className="studio-action"
              disabled={selectedDocId === null || generating}
              onClick={onGenerateFlashcards}
            >
              {t.studioFlashcards}
              {generating ? (
                <span className="badge">{t.generating}</span>
              ) : selectedDocId === null ? (
                <span className="hint">{t.selectDocumentHint}</span>
              ) : null}
            </button>
            <button disabled className="studio-action">
              {t.studioAudio}
              <span className="badge">{t.comingSoon}</span>
            </button>
            <button disabled className="studio-action">
              {t.studioVideo}
              <span className="badge">{t.comingSoon}</span>
            </button>
            <button disabled className="studio-action">
              {t.studioQuiz}
              <span className="badge">{t.comingSoon}</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
