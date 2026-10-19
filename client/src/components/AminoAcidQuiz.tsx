import { useState } from "react";
import { buildAminoAcidQuiz, type QuizQuestion } from "../library-data/amino-acid-quiz";
import { AMINO_ACIDS, CATEGORY_LABEL_EN, CATEGORY_LABEL_FR } from "../library-data/amino-acids";
import { AminoAcidStructure } from "./AminoAcidStructure";
import { useLang, Back, Fwd } from "../i18n";

// Quiz d'identification portant sur les 20 acides aminés (ordre aléatoire).
// L'élève défile librement avec ← / → ; chaque question ne se répond qu'une
// fois, et le score s'affiche quand les 20 ont été répondues.
const QUESTION_COUNT = AMINO_ACIDS.length;

export function AminoAcidQuiz() {
  const { t, lang, tx } = useLang();
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => buildAminoAcidQuiz(undefined, QUESTION_COUNT));
  const [answers, setAnswers] = useState<(string | null)[]>(() => Array(QUESTION_COUNT).fill(null));
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const selected = answers[index];
  const answeredCount = answers.filter(Boolean).length;
  const score = answers.filter((answer, i) => answer === questions[i].target.code3).length;
  const allAnswered = answeredCount === questions.length;

  function selectOption(code3: string) {
    if (selected) return;
    setAnswers((current) => current.map((answer, i) => (i === index ? code3 : answer)));
  }

  function go(next: number) {
    setIndex(Math.max(0, Math.min(questions.length - 1, next)));
  }

  function restart() {
    setQuestions(buildAminoAcidQuiz(undefined, QUESTION_COUNT));
    setAnswers(Array(QUESTION_COUNT).fill(null));
    setIndex(0);
    setFinished(false);
  }

  if (finished) {
    const missed = questions.filter((q, i) => answers[i] !== q.target.code3);
    return (
      <div className="quiz-view quiz-score">
        <p>{t.quizScore(score, questions.length)}</p>
        {missed.length > 0 && (
          <div className="aa-quiz-missed">
            <p className="hint">{tx("À revoir :", "To review:")}</p>
            <div className="aa-quiz-dots">
              {missed.map((q) => (
                <button
                  key={q.target.code3}
                  type="button"
                  className="aa-quiz-dot is-wrong"
                  onClick={() => { setFinished(false); setIndex(questions.indexOf(q)); }}
                >
                  {lang === "fr" ? q.target.name_fr : q.target.name_en}
                </button>
              ))}
            </div>
          </div>
        )}
        <button onClick={restart}>{t.quizRestart}</button>
      </div>
    );
  }

  const isCorrect = (code3: string) => code3 === question.target.code3;

  return (
    <div className="quiz-view">
      <div className="aa-quiz-top">
        <p className="card-progress">{t.quizQuestionProgress(index + 1, questions.length)}</p>
        <p className="card-progress">{tx(`Score : ${score}/${answeredCount}`, `Score: ${score}/${answeredCount}`)}</p>
      </div>
      <div className="aa-quiz-dots" role="tablist" aria-label={tx("Questions", "Questions")}>
        {questions.map((q, i) => {
          const answer = answers[i];
          const state = !answer ? "" : answer === q.target.code3 ? " is-right" : " is-wrong";
          return (
            <button
              key={q.target.code3}
              type="button"
              className={`aa-quiz-dot${state}${i === index ? " is-current" : ""}`}
              aria-label={tx(`Question ${i + 1}`, `Question ${i + 1}`)}
              aria-current={i === index}
              onClick={() => go(i)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <h3>{t.aminoAcidQuizTitle}</h3>
      <div className="card-visual">
        <AminoAcidStructure aa={question.target} />
      </div>
      <div className="quiz-options">
        {question.options.map((option) => {
          const label = lang === "fr" ? option.name_fr : option.name_en;
          const state = selected
            ? isCorrect(option.code3)
              ? "correct"
              : option.code3 === selected
                ? "incorrect"
                : ""
            : "";
          return (
            <button
              key={option.code3}
              className={`quiz-option ${state}`}
              onClick={() => selectOption(option.code3)}
              disabled={Boolean(selected)}
            >
              {label}
            </button>
          );
        })}
      </div>
      {selected && (
        <p className="quiz-feedback">
          {isCorrect(selected) ? t.quizCorrect : t.quizIncorrect}{" "}
          <strong>
            {lang === "fr" ? question.target.name_fr : question.target.name_en} ({question.target.code3} / {question.target.code1})
          </strong>{" "}
          — {lang === "fr" ? CATEGORY_LABEL_FR[question.target.category] : CATEGORY_LABEL_EN[question.target.category]}.{" "}
          {lang === "fr" ? question.target.note_fr : question.target.note_en}
        </p>
      )}
      <div className="question-navigation">
        <button type="button" className="nav-secondary" disabled={index === 0} onClick={() => go(index - 1)}>
          <Back /> {t.previousQuestion}
        </button>
        {index < questions.length - 1 ? (
          <button type="button" className="nav-secondary" onClick={() => go(index + 1)}>
            {t.nextQuestion} <Fwd />
          </button>
        ) : (
          <button type="button" disabled={!allAnswered} onClick={() => setFinished(true)}>
            {allAnswered
              ? tx("Voir mon score", "See my score")
              : tx(`Encore ${questions.length - answeredCount} à répondre`, `${questions.length - answeredCount} left to answer`)}
          </button>
        )}
      </div>
      {allAnswered && index < questions.length - 1 && (
        <button type="button" className="text-button" onClick={() => setFinished(true)}>
          {tx("Toutes répondues — voir mon score", "All answered — see my score")}
        </button>
      )}
    </div>
  );
}
