import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  api,
  type ExamAttemptResult,
  type ExamReviewItem,
  type Flashcard,
  type LibraryChapterDetail,
  type LibraryQcmQuestion,
  type LibraryResource,
  type QcmAttemptResult,
} from "../api";
import { useLang } from "../i18n";

type Activity = "hub" | "resource" | "qcm" | "flashcards" | "exam";

function localized(
  lang: "fr" | "en",
  french: string | undefined,
  english: string | undefined,
): string {
  return lang === "fr" ? french || english || "" : english || french || "";
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

function ResourceReader({
  resource,
  lang,
  completed,
  onComplete,
}: {
  resource: LibraryResource;
  lang: "fr" | "en";
  completed: boolean;
  onComplete: () => void;
}) {
  const { t } = useLang();
  const content = localized(lang, resource.content_fr, resource.content_en);
  const title = localized(lang, resource.titre_fr, resource.titre_en);

  return (
    <article className="learning-panel resource-reader">
      <div className="resource-reader-header">
        <div>
          <p className="eyebrow">{resource.resource_type === "course" ? t.course : t.revisionSheet}</p>
          <h2>{title}</h2>
        </div>
        {resource.source_label && (
          <span className="source-pill">
            {t.source}: {resource.source_label}
          </span>
        )}
      </div>
      {content ? (
        <div className="course-copy">
          {content.split(/\n{2,}/).map((paragraph, index) => (
            <p key={`${resource.id}-${index}`}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p className="hint">{t.noContent}</p>
      )}
      <div className="resource-completion">
        {completed ? (
          <span className="completion-badge">✓ {t.completedResource}</span>
        ) : (
          <button type="button" onClick={onComplete}>
            {t.markComplete}
          </button>
        )}
      </div>
    </article>
  );
}

function QcmPractice({
  chapter,
  questions,
  lang,
  onBack,
}: {
  chapter: LibraryChapterDetail;
  questions: LibraryQcmQuestion[];
  lang: "fr" | "en";
  onBack: () => void;
}) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<QcmAttemptResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const question = questions[index];

  useEffect(() => {
    setSelected([]);
    setResult(null);
    setError(null);
  }, [index]);

  if (!question) return <p className="hint">{t.noContent}</p>;

  const toggleOption = (key: string) => {
    if (result) return;
    if (question.multiple_answers) {
      setSelected((current) =>
        current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
      );
    } else {
      setSelected([key]);
    }
  };

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      setResult(await api.submitQcmAttempt(chapter.chapter.id, question.id, selected));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="learning-panel practice-panel">
      <div className="panel-topline">
        <button type="button" className="text-button" onClick={onBack}>
          {t.backToLibrary}
        </button>
        <span className="progress-label">{t.questionProgress(index + 1, questions.length)}</span>
      </div>
      <div className="question-heading">
        <p className="eyebrow">{t.practice}</p>
        <h2>{localized(lang, question.prompt_fr, question.prompt_en)}</h2>
        <p className="hint">{question.multiple_answers ? t.chooseSeveral : t.chooseOne}</p>
      </div>
      <div className="option-list">
        {question.options.map((option) => {
          const isSelected = selected.includes(option.key);
          const isCorrect = result?.correction.correctOptionKeys.includes(option.key);
          return (
            <label
              key={option.id}
              className={`option-row ${isSelected ? "selected" : ""} ${
                result && isCorrect ? "correct" : ""
              } ${result && isSelected && !isCorrect ? "incorrect" : ""}`}
            >
              <input
                type={question.multiple_answers ? "checkbox" : "radio"}
                name={`qcm-${question.id}`}
                checked={isSelected}
                onChange={() => toggleOption(option.key)}
                disabled={Boolean(result)}
              />
              <span>
                <strong>{option.key}.</strong> {localized(lang, option.label_fr, option.label_en)}
              </span>
            </label>
          );
        })}
      </div>
      {error && <p className="error">{error}</p>}
      {result ? (
        <div className={`correction-box ${result.isCorrect ? "is-correct" : "needs-review"}`}>
          <strong>{result.isCorrect ? `✓ ${t.correct}` : `↺ ${t.incorrect}`}</strong>
          <p>
            {t.expectedAnswer}: {result.correction.correctOptionKeys.join(", ")}
          </p>
          <p>
            <strong>{t.explanation}:</strong>{" "}
            {localized(lang, result.correction.explanation_fr, result.correction.explanation_en)}
          </p>
          <button
            type="button"
            onClick={() => {
              setIndex((current) => Math.min(current + 1, questions.length - 1));
            }}
            disabled={index === questions.length - 1}
          >
            {t.nextQuestion}
          </button>
        </div>
      ) : (
        <button type="button" onClick={submit} disabled={submitting || selected.length === 0}>
          {submitting ? t.loading : t.submitAnswer}
        </button>
      )}
    </section>
  );
}

function FlashcardReview({
  chapter,
  cards,
  lang,
  onBack,
}: {
  chapter: LibraryChapterDetail;
  cards: Flashcard[];
  lang: "fr" | "en";
  onBack: () => void;
}) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mastery, setMastery] = useState<Record<number, number>>(
    Object.fromEntries(chapter.progress.flashcards.map((item) => [item.flashcard_id, item.mastery])),
  );
  const [saving, setSaving] = useState(false);
  const card = cards[index];

  if (!card) return <p className="hint">{t.noContent}</p>;

  const rate = async (value: number) => {
    setSaving(true);
    try {
      await api.rateLibraryFlashcard(chapter.chapter.id, card.id, value);
      setMastery((current) => ({ ...current, [card.id]: value }));
      setFlipped(false);
      setIndex((current) => (current + 1) % cards.length);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="learning-panel flashcard-panel">
      <div className="panel-topline">
        <button type="button" className="text-button" onClick={onBack}>
          {t.backToLibrary}
        </button>
        <span className="progress-label">{t.flashcardProgress(index + 1, cards.length)}</span>
      </div>
      <p className="eyebrow">{t.flashcards}</p>
      <p className="hint">{t.prioritizeHint}</p>
      <button
        type="button"
        className={`study-flashcard ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped((current) => !current)}
        aria-label={t.flip}
      >
        <span className="flashcard-face">{localized(lang, flipped ? card.answer_fr : card.question_fr, flipped ? card.answer_en : card.question_en)}</span>
        <span className="flip-hint">{t.flip}</span>
      </button>
      <div className="mastery-actions">
        <button type="button" className="mastery-difficult" disabled={saving || !flipped} onClick={() => rate(1)}>
          {t.difficult}
        </button>
        <button type="button" className="mastery-review" disabled={saving || !flipped} onClick={() => rate(3)}>
          {t.reviewIt}
        </button>
        <button type="button" className="mastery-known" disabled={saving || !flipped} onClick={() => rate(5)}>
          {t.knowIt}
        </button>
      </div>
      {mastery[card.id] !== undefined && <p className="saved-note">{t.masterySaved}</p>}
    </section>
  );
}

function ExamReview({
  result,
  questions,
  lang,
  onRestart,
}: {
  result: ExamAttemptResult;
  questions: LibraryQcmQuestion[];
  lang: "fr" | "en";
  onRestart: () => void;
}) {
  const { t } = useLang();
  return (
    <section className="learning-panel exam-result">
      <p className="eyebrow">{result.timedOut ? t.timeExpired : t.examFinished}</p>
      <h2>{t.score(result.correctCount, result.questionCount)}</h2>
      <p className="result-score">{Math.round(result.score)}%</p>
      <div className="exam-review-list">
        {result.review.map((item: ExamReviewItem, index) => {
          const question = questions.find((candidate) => candidate.id === item.questionId);
          return (
            <article key={item.questionId} className="exam-review-item">
              <h3>
                {index + 1}. {localized(lang, item.prompt_fr, item.prompt_en)}
              </h3>
              <p>
                <strong>{t.selectedAnswer}:</strong>{" "}
                {item.selectedOptionKeys.length ? item.selectedOptionKeys.join(", ") : "—"}
              </p>
              <p>
                <strong>{t.expectedAnswer}:</strong> {item.correctOptionKeys.join(", ")}
              </p>
              <p>
                <strong>{t.explanation}:</strong>{" "}
                {localized(
                  lang,
                  item.explanation_fr,
                  item.explanation_en,
                )}
              </p>
              {question && (
                <div className="review-options">
                  {question.options.map((option) => (
                    <span
                      key={option.id}
                      className={item.correctOptionKeys.includes(option.key) ? "review-correct" : ""}
                    >
                      {option.key}. {localized(lang, option.label_fr, option.label_en)}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
      <button type="button" onClick={onRestart}>
        {t.beginExam}
      </button>
    </section>
  );
}

function TimedExam({
  chapter,
  exam,
  questions,
  lang,
  onBack,
}: {
  chapter: LibraryChapterDetail;
  exam: LibraryChapterDetail["exams"][number];
  questions: LibraryQcmQuestion[];
  lang: "fr" | "en";
  onBack: () => void;
}) {
  const { t } = useLang();
  const [session, setSession] = useState<{ sessionId: number; expiresAt: number; questionOrders: number[] } | null>(null);
  const [remaining, setRemaining] = useState(0);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [result, setResult] = useState<ExamAttemptResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const submittingRef = useRef(false);
  const examQuestions = session
    ? session.questionOrders
        .map((ordre) => questions.find((question) => question.ordre === ordre))
        .filter((question): question is LibraryQcmQuestion => Boolean(question))
    : [];
  const examQuestion = examQuestions[index];

  const finish = useCallback(async () => {
    if (!session || submittingRef.current || result) return;
    submittingRef.current = true;
    setError(null);
    try {
      setResult(await api.submitChapterExam(chapter.chapter.id, exam.id, session.sessionId, answers));
      setSession(null);
    } catch (err) {
      setError((err as Error).message);
      submittingRef.current = false;
    }
  }, [answers, chapter.chapter.id, exam.id, result, session]);

  useEffect(() => {
    if (!session || result) return;
    const tick = () => {
      const value = Math.max(0, Math.ceil((session.expiresAt - Date.now()) / 1000));
      setRemaining(value);
      if (value === 0) void finish();
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [finish, result, session]);

  const start = async () => {
    setError(null);
    try {
      const started = await api.startChapterExam(chapter.chapter.id, exam.id);
      const orderedQuestions = started.questionOrders
        .map((ordre) => questions.find((question) => question.ordre === ordre))
        .filter((question): question is LibraryQcmQuestion => Boolean(question));
      setAnswers(Object.fromEntries(orderedQuestions.map((question) => [String(question.id), []])));
      setIndex(0);
      setResult(null);
      submittingRef.current = false;
      setSession({
        sessionId: started.sessionId,
        expiresAt: started.expiresAt,
        questionOrders: started.questionOrders,
      });
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (result) return <ExamReview result={result} questions={questions} lang={lang} onRestart={start} />;

  if (!session) {
    return (
      <section className="learning-panel exam-intro">
        <button type="button" className="text-button" onClick={onBack}>
          {t.backToLibrary}
        </button>
        <p className="eyebrow">{t.chapterExam}</p>
        <h2>{localized(lang, exam.titre_fr, exam.titre_en)}</h2>
        <p>{t.examIntro(Math.ceil(exam.duration_seconds / 60), exam.question_count)}</p>
        <p className="hint">{t.examWarning}</p>
        {error && <p className="error">{error}</p>}
        <button type="button" onClick={start}>
          {t.beginExam}
        </button>
      </section>
    );
  }

  if (!examQuestion) return <p className="hint">{t.noContent}</p>;

  const selected = answers[String(examQuestion.id)] ?? [];
  const setSelected = (key: string) => {
    setAnswers((current) => {
      const currentKeys = current[String(examQuestion.id)] ?? [];
      const next = examQuestion.multiple_answers
        ? currentKeys.includes(key)
          ? currentKeys.filter((item) => item !== key)
          : [...currentKeys, key]
        : [key];
      return { ...current, [String(examQuestion.id)]: next };
    });
  };

  return (
    <section className="learning-panel practice-panel exam-active">
      <div className="exam-toolbar">
        <span>{t.questionProgress(index + 1, examQuestions.length)}</span>
        <strong>
          {t.timeRemaining}: <span className={remaining < 60 ? "time-critical" : ""}>{formatTime(remaining)}</span>
        </strong>
      </div>
      <p className="eyebrow">{t.chapterExam}</p>
      <h2>{localized(lang, examQuestion.prompt_fr, examQuestion.prompt_en)}</h2>
      <p className="hint">{examQuestion.multiple_answers ? t.chooseSeveral : t.chooseOne}</p>
      <div className="option-list">
        {examQuestion.options.map((option) => (
          <label key={option.id} className={`option-row ${selected.includes(option.key) ? "selected" : ""}`}>
            <input
              type={examQuestion.multiple_answers ? "checkbox" : "radio"}
              name={`exam-${examQuestion.id}`}
              checked={selected.includes(option.key)}
              onChange={() => setSelected(option.key)}
            />
            <span>
              <strong>{option.key}.</strong> {localized(lang, option.label_fr, option.label_en)}
            </span>
          </label>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="question-navigation">
        <button type="button" onClick={() => setIndex((current) => Math.max(0, current - 1))} disabled={index === 0}>
          {t.previousQuestion}
        </button>
        {index === examQuestions.length - 1 ? (
          <button type="button" onClick={() => void finish()}>
            {t.finishExam}
          </button>
        ) : (
          <button type="button" onClick={() => setIndex((current) => current + 1)}>
            {t.nextQuestion}
          </button>
        )}
      </div>
    </section>
  );
}

export function LibraryChapterView() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const [detail, setDetail] = useState<LibraryChapterDetail | null>(null);
  const [activity, setActivity] = useState<Activity>("hub");
  const [resourceId, setResourceId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    api
      .getLibraryChapter(Number(id))
      .then(setDetail)
      .catch((err) => setError((err as Error).message));
  }, [id]);

  if (error) return <main className="learning-shell"><p className="error">{error}</p></main>;
  if (!detail) return <main className="learning-shell"><p className="loading-state">{t.loading}</p></main>;

  const completedResources = new Set(
    detail.progress.resources.filter((resource) => resource.completed_at).map((resource) => resource.resource_id),
  );
  const activeResource = detail.resources.find((resource) => resource.id === resourceId) ?? detail.resources[0];
  const exam = detail.exams[0];

  const completeResource = async (resource: LibraryResource) => {
    await api.completeLibraryResource(detail.chapter.id, resource.id, true);
    setDetail((current) =>
      current
        ? {
            ...current,
            progress: {
              ...current.progress,
              resources: [
                ...current.progress.resources.filter((item) => item.resource_id !== resource.id),
                { resource_id: resource.id, completed_at: Date.now(), updated_at: Date.now() },
              ],
            },
          }
        : current,
    );
  };

  const openResource = (resource: LibraryResource) => {
    setResourceId(resource.id);
    setActivity("resource");
  };

  return (
    <main className="learning-shell">
      <header className="learning-header">
        <Link to="/library" className="back-link">{t.backToLibrary}</Link>
        <div>
          <p className="eyebrow">{detail.chapter.matiere}</p>
          <h1>{localized(lang, detail.chapter.titre_fr, detail.chapter.titre_en)}</h1>
          <p className="chapter-lead">{localized(lang, detail.chapter.description_fr, detail.chapter.description_en)}</p>
        </div>
        <div className="learning-summary">
          <span>{detail.resources.length} {t.course.toLowerCase()}</span>
          <span>{detail.qcm.length} QCM</span>
          <span>{detail.flashcards.length} {t.flashcards.toLowerCase()}</span>
        </div>
      </header>

      {activity === "hub" && (
        <section className="learning-hub">
          <div className="activity-grid">
            {detail.resources.map((resource) => (
              <button key={resource.id} type="button" className="activity-card" onClick={() => openResource(resource)}>
                <span className="activity-icon">{resource.resource_type === "course" ? "📖" : "🗒️"}</span>
                <span className="eyebrow">{resource.resource_type === "course" ? t.course : t.revisionSheet}</span>
                <strong>{localized(lang, resource.titre_fr, resource.titre_en)}</strong>
                <small>{completedResources.has(resource.id) ? `✓ ${t.completed}` : t.continueAction}</small>
              </button>
            ))}
            <button type="button" className="activity-card" onClick={() => setActivity("qcm")}>
              <span className="activity-icon">✓</span>
              <span className="eyebrow">{t.practice}</span>
              <strong>{detail.qcm.length} questions corrigées</strong>
              <small>{t.continueAction}</small>
            </button>
            <button type="button" className="activity-card" onClick={() => setActivity("flashcards")}>
              <span className="activity-icon">◇</span>
              <span className="eyebrow">{t.flashcards}</span>
              <strong>{detail.flashcards.length} cartes</strong>
              <small>{t.continueAction}</small>
            </button>
            {exam && (
              <button type="button" className="activity-card activity-card-accent" onClick={() => setActivity("exam")}>
                <span className="activity-icon">⏱</span>
                <span className="eyebrow">{t.chapterExam}</span>
                <strong>{localized(lang, exam.titre_fr, exam.titre_en)}</strong>
                <small>{t.examIntro(Math.ceil(exam.duration_seconds / 60), exam.question_count)}</small>
              </button>
            )}
          </div>
        </section>
      )}

      {activity === "resource" && activeResource && (
        <ResourceReader
          resource={activeResource}
          lang={lang}
          completed={completedResources.has(activeResource.id)}
          onComplete={() => void completeResource(activeResource)}
        />
      )}
      {activity === "qcm" && (
        <QcmPractice chapter={detail} questions={detail.qcm} lang={lang} onBack={() => setActivity("hub")} />
      )}
      {activity === "flashcards" && (
        <FlashcardReview chapter={detail} cards={detail.flashcards} lang={lang} onBack={() => setActivity("hub")} />
      )}
      {activity === "exam" && exam && (
        <TimedExam chapter={detail} exam={exam} questions={detail.qcm} lang={lang} onBack={() => setActivity("hub")} />
      )}
    </main>
  );
}