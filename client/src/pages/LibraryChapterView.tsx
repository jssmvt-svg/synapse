import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, type Flashcard, type LibraryChapter } from "../api";
import { useLang } from "../i18n";
import { resolveVisualKey } from "../library-widgets/visual-registry";
import { WIDGET_REGISTRY } from "../library-widgets/widget-registry";

export function LibraryChapterView() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const [chapter, setChapter] = useState<LibraryChapter | null>(null);
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"flashcards" | string>("flashcards");

  useEffect(() => {
    if (!id) return;
    Promise.all([api.getLibraryChapter(Number(id)), api.getLibraryFlashcards(Number(id))])
      .then(([chapterData, cardsData]) => {
        setChapter(chapterData);
        setCards(cardsData);
      })
      .catch((err) => setError((err as Error).message));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (cards.length === 0 || !chapter) return <p>...</p>;

  const widget = chapter.widget_key ? WIDGET_REGISTRY[chapter.widget_key] : undefined;

  const card = cards[index];
  const question = lang === "fr" ? card.question_fr : card.question_en;
  const answer = lang === "fr" ? card.answer_fr : card.answer_en;
  const visual = card.visual_key ? resolveVisualKey(card.visual_key) : null;

  function goNext() {
    setFlipped(false);
    setIndex((i) => Math.min(i + 1, cards.length - 1));
  }
  function goPrevious() {
    setFlipped(false);
    setIndex((i) => Math.max(i - 1, 0));
  }

  return (
    <div className="deck-view">
      <Link to="/library">← {t.libraryTitle}</Link>

      {widget && (
        <div className="chapter-tabs">
          <button
            className={`chapter-tab ${activeTab === "flashcards" ? "active" : ""}`}
            onClick={() => setActiveTab("flashcards")}
          >
            {t.tabFlashcards}
          </button>
          <button
            className={`chapter-tab ${activeTab === chapter.widget_key ? "active" : ""}`}
            onClick={() => setActiveTab(chapter.widget_key!)}
          >
            {lang === "fr" ? widget.label_fr : widget.label_en}
          </button>
        </div>
      )}

      {widget && activeTab === chapter.widget_key ? (
        <widget.Component />
      ) : (
        <>
          <p className="card-progress">{t.cardProgress(index + 1, cards.length)}</p>
          <div className="flashcard" onClick={() => setFlipped((f) => !f)}>
            {visual && <div className="card-visual">{visual}</div>}
            <p>{flipped ? answer : question}</p>
            <span className="flip-hint">{t.flip}</span>
          </div>
          <div className="card-nav">
            <button onClick={goPrevious} disabled={index === 0}>
              {t.previous}
            </button>
            <button onClick={goNext} disabled={index === cards.length - 1}>
              {t.next}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
