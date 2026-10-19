import type { Lang } from "../i18n";
import { useEffect, useMemo, useState } from "react";
import type { LibraryOpenQuestion } from "../api";
import { useLang, Back, Fwd } from "../i18n";
import { MarkdownContent } from "./MarkdownContent";

// Entraînement aux questions ouvertes : révision dans l'ordre (question puis
// corrigé) ou test aléatoire avec auto-évaluation et bilan. Tout reste côté
// client, rien n'est enregistré en base. Utilisé dans un chapitre et pour le
// test multi-chapitres d'une section (questions portant alors `source_*`).

export interface TrainerQuestion extends LibraryOpenQuestion {
  source_key?: string;
  source_fr?: string;
  source_en?: string;
}

type Rating = "known" | "partial" | "missed";
type Mode = "menu" | "practice" | "test" | "results";

const TEST_SIZES = [5, 10, 20];

function localized(lang: Lang, french: string | undefined, english: string | undefined): string {
  return lang === "fr" ? french || english || "" : english || french || "";
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function OpenQuestionsTrainer({
  questions,
  lang,
  onBack,
  title,
}: {
  questions: TrainerQuestion[];
  lang: Lang;
  onBack: () => void;
  title?: string;
}) {
  const { t, tx } = useLang();
  const [mode, setMode] = useState<Mode>("menu");
  const [deck, setDeck] = useState<TrainerQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [draft, setDraft] = useState("");
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [size, setSize] = useState<number>(Math.min(10, questions.length));

  // Sources disponibles (test multi-chapitres) : l'élève choisit les chapitres inclus.
  const sources = useMemo(() => {
    const seen = new Map<string, { key: string; label: string; count: number }>();
    for (const question of questions) {
      if (!question.source_key) continue;
      const entry = seen.get(question.source_key);
      if (entry) entry.count += 1;
      else seen.set(question.source_key, {
        key: question.source_key,
        label: localized(lang, question.source_fr, question.source_en),
        count: 1,
      });
    }
    return [...seen.values()];
  }, [questions, lang]);
  const [excluded, setExcluded] = useState<Set<string>>(new Set());
  const pool = questions.filter((question) => !question.source_key || !excluded.has(question.source_key));

  useEffect(() => {
    setRevealed(false);
    setDraft("");
  }, [index, mode]);

  if (!questions.length) return <p className="hint">{t.noContent}</p>;

  const heading = title ?? tx("Questions ouvertes", "Open questions");
  const question = deck[index];

  const startPractice = () => {
    setDeck(pool);
    setIndex(0);
    setMode("practice");
  };
  const startTest = (items: TrainerQuestion[], count: number) => {
    setDeck(shuffle(items).slice(0, count));
    setRatings([]);
    setIndex(0);
    setMode("test");
  };
  const rate = (rating: Rating) => {
    const next = [...ratings];
    next[index] = rating;
    setRatings(next);
    if (index + 1 < deck.length) setIndex(index + 1);
    else setMode("results");
  };
  const toggleSource = (key: string) => {
    const next = new Set(excluded);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setExcluded(next);
  };

  const topline = (label?: string) => (
    <div className="panel-topline">
      <button type="button" className="text-button" onClick={mode === "menu" ? onBack : () => setMode("menu")}>
        {mode === "menu" ? t.backToLibrary : tx("← Changer de mode", "← Change mode")}
      </button>
      {label && <span className="progress-label">{label}</span>}
    </div>
  );

  const sourceTag = (item: TrainerQuestion) =>
    item.source_key ? <p className="oq-source">{localized(lang, item.source_fr, item.source_en)}</p> : null;

  const answerBlock = (item: TrainerQuestion) => (
    <div className="open-question-answer">
      <p className="eyebrow">{tx("Réponse modèle", "Model answer")}</p>
      <MarkdownContent content={localized(lang, item.answer_fr, item.answer_en)} className="course-copy" />
    </div>
  );

  if (mode === "menu") {
    const maxSize = pool.length;
    const sizes = [...TEST_SIZES.filter((value) => value < maxSize), maxSize];
    const chosenSize = Math.min(size, maxSize);
    return (
      <section className="learning-panel open-questions-panel">
        {topline()}
        <p className="eyebrow">{heading}</p>
        <h2 className="oq-menu-title">
          {tx(`${pool.length} questions avec réponse modèle`, `${pool.length} questions with model answers`)}
        </h2>
        {sources.length > 1 && (
          <div className="oq-sources">
            <p className="hint">{tx("Chapitres inclus :", "Included chapters:")}</p>
            <div className="oq-chip-row">
              {sources.map((source) => (
                <button
                  key={source.key}
                  type="button"
                  className={`oq-chip${excluded.has(source.key) ? "" : " is-on"}`}
                  aria-pressed={!excluded.has(source.key)}
                  onClick={() => toggleSource(source.key)}
                >
                  {source.label} <small>({source.count})</small>
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="oq-mode-grid">
          <div className="oq-mode-card">
            <span className="activity-icon">📖</span>
            <strong>{tx("Réviser", "Review")}</strong>
            <p>{tx("Toutes les questions dans l'ordre : réfléchis, puis affiche la réponse.", "All questions in order: think, then show the answer.")}</p>
            <button type="button" className="nav-secondary" disabled={!pool.length} onClick={startPractice}>
              {tx("Commencer la révision", "Start reviewing")}
            </button>
          </div>
          <div className="oq-mode-card">
            <span className="activity-icon">🎲</span>
            <strong>{tx("Test aléatoire", "Random test")}</strong>
            <p>{tx("Questions tirées au hasard. Réponds, compare au corrigé et note-toi : tu obtiens un score à la fin.", "Randomly drawn questions. Answer, compare with the model answer and rate yourself: you get a score at the end.")}</p>
            {maxSize > 0 && (
              <div className="oq-size-row" role="group" aria-label={tx("Nombre de questions", "Number of questions")}>
                {sizes.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`oq-chip${value === chosenSize ? " is-on" : ""}`}
                    aria-pressed={value === chosenSize}
                    onClick={() => setSize(value)}
                  >
                    {value === maxSize ? tx(`Toutes (${value})`, `All (${value})`) : value}
                  </button>
                ))}
              </div>
            )}
            <button type="button" disabled={!pool.length} onClick={() => startTest(pool, chosenSize)}>
              {tx("Lancer le test", "Start the test")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (mode === "results") {
    const known = ratings.filter((rating) => rating === "known").length;
    const partial = ratings.filter((rating) => rating === "partial").length;
    const missed = ratings.filter((rating) => rating === "missed").length;
    const score = Math.round(((known + partial * 0.5) / deck.length) * 100);
    const toReview = deck.filter((_, i) => ratings[i] !== "known");
    return (
      <section className="learning-panel open-questions-panel">
        {topline()}
        <p className="eyebrow">{tx("Bilan du test", "Test results")}</p>
        <div className="oq-score">
          <strong>{score} %</strong>
          <span>
            {tx(
              `${known} sue${known > 1 ? "s" : ""} · ${partial} partielle${partial > 1 ? "s" : ""} · ${missed} à revoir`,
              `${known} known · ${partial} partial · ${missed} to review`,
            )}
          </span>
        </div>
        <div className="oq-result-actions">
          {toReview.length > 0 && (
            <button type="button" onClick={() => startTest(toReview, toReview.length)}>
              {tx(`Refaire les ${toReview.length} questions non maîtrisées`, `Retry the ${toReview.length} questions not mastered`)}
            </button>
          )}
          <button type="button" className="nav-secondary" onClick={() => startTest(pool, Math.min(size, pool.length))}>
            {tx("Nouveau test aléatoire", "New random test")}
          </button>
        </div>
        {toReview.length > 0 && (
          <>
            <h3 className="oq-review-title">{tx("Questions à retravailler", "Questions to work on")}</h3>
            {deck.map((item, i) =>
              ratings[i] === "known" ? null : (
                <details key={`${item.id}-${i}`} className="oq-review-item">
                  <summary>
                    <span className={`oq-badge oq-badge-${ratings[i]}`}>
                      {ratings[i] === "partial" ? tx("Partiel", "Partial") : tx("À revoir", "Review")}
                    </span>
                    {localized(lang, item.question_fr, item.question_en)}
                  </summary>
                  {sourceTag(item)}
                  {answerBlock(item)}
                </details>
              ),
            )}
          </>
        )}
      </section>
    );
  }

  if (!question) return <p className="hint">{t.noContent}</p>;

  if (mode === "practice") {
    const go = (next: number) => setIndex((next + deck.length) % deck.length);
    return (
      <section className="learning-panel open-questions-panel">
        {topline(tx(`Question ${index + 1} / ${deck.length}`, `Question ${index + 1} / ${deck.length}`))}
        <p className="eyebrow">{heading}</p>
        <p className="hint">
          {tx(
            "Rédige ta réponse de mémoire, puis révèle le corrigé pour la comparer.",
            "Draft your answer from memory, then reveal the model answer to compare.",
          )}
        </p>
        <article className="open-question-card">
          {sourceTag(question)}
          <h2>{localized(lang, question.question_fr, question.question_en)}</h2>
        </article>
        {revealed ? (
          <>
            {answerBlock(question)}
            <button type="button" className="text-button" onClick={() => setRevealed(false)}>
              {tx("Masquer la réponse", "Hide the answer")}
            </button>
          </>
        ) : (
          <button type="button" onClick={() => setRevealed(true)}>
            {tx("Révéler la réponse modèle", "Reveal the model answer")}
          </button>
        )}
        <div className="question-navigation">
          <button type="button" className="nav-secondary" onClick={() => go(index - 1)}>
            <Back /> {tx("Question précédente", "Previous question")}
          </button>
          <button type="button" className="nav-secondary" onClick={() => go(index + 1)}>
            {tx("Question suivante", "Next question")} <Fwd />
          </button>
        </div>
      </section>
    );
  }

  // mode === "test"
  return (
    <section className="learning-panel open-questions-panel">
      {topline(tx(`Question ${index + 1} / ${deck.length}`, `Question ${index + 1} / ${deck.length}`))}
      <div className="oq-progress" aria-hidden="true">
        <span style={{ width: `${(index / deck.length) * 100}%` }} />
      </div>
      <p className="eyebrow">{tx("Test aléatoire", "Random test")} · {heading}</p>
      <article className="open-question-card">
        {sourceTag(question)}
        <h2>{localized(lang, question.question_fr, question.question_en)}</h2>
      </article>
      {!revealed ? (
        <>
          <label className="oq-draft">
            <span className="hint">{tx("Ta réponse (brouillon, non enregistré)", "Your answer (draft, not saved)")}</span>
            <textarea
              rows={5}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={tx("Écris les idées clés…", "Write the key points…")}
            />
          </label>
          <button type="button" onClick={() => setRevealed(true)}>
            {tx("Voir la réponse modèle", "Show the model answer")}
          </button>
        </>
      ) : (
        <>
          {draft.trim() && (
            <div className="oq-draft-recap">
              <p className="eyebrow">{tx("Ta réponse", "Your answer")}</p>
              <p>{draft}</p>
            </div>
          )}
          {answerBlock(question)}
          <p className="hint oq-rate-hint">{tx("Comment t'en es-tu sorti ?", "How did you do?")}</p>
          <div className="oq-rate-row">
            <button type="button" className="oq-rate oq-rate-known" onClick={() => rate("known")}>
              ✓ {tx("Je savais", "I knew it")}
            </button>
            <button type="button" className="oq-rate oq-rate-partial" onClick={() => rate("partial")}>
              ≈ {tx("En partie", "Partly")}
            </button>
            <button type="button" className="oq-rate oq-rate-missed" onClick={() => rate("missed")}>
              ✗ {tx("À revoir", "Need review")}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
