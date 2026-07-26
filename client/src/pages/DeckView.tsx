import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, type Flashcard } from "../api";
import { useLang } from "../i18n";

export function DeckView() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    api
      .getFlashcards(Number(id))
      .then(setCards)
      .catch((err) => setError((err as Error).message));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (cards.length === 0) return <p>...</p>;

  const card = cards[index];
  const question = lang === "fr" ? card.question_fr : card.question_en;
  const answer = lang === "fr" ? card.answer_fr : card.answer_en;

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
      <Link to="/dashboard">← {t.dashboard}</Link>
      <p className="card-progress">{t.cardProgress(index + 1, cards.length)}</p>
      <div className="flashcard" onClick={() => setFlipped((f) => !f)}>
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
    </div>
  );
}
