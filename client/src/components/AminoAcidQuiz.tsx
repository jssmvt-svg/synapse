import { useMemo, useState } from "react";
import { buildAminoAcidQuiz, type QuizQuestion } from "../library-data/amino-acid-quiz";
import { AminoAcidStructure } from "./AminoAcidStructure";
import { useLang } from "../i18n";

const QUESTION_COUNT = 10;

export function AminoAcidQuiz() {
  const { t, lang } = useLang();
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => buildAminoAcidQuiz(undefined, QUESTION_COUNT));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const question = questions[index];
  const done = index >= questions.length;

  const isCorrect = useMemo(
    () => (option: string) => option === question?.target.code3,
    [question],
  );

  function selectOption(code3: string) {
    if (selected) return;
    setSelected(code3);
    if (code3 === question.target.code3) setScore((s) => s + 1);
  }

  function nextQuestion() {
    setSelected(null);
    setIndex((i) => i + 1);
  }

  function restart() {
    setQuestions(buildAminoAcidQuiz(undefined, QUESTION_COUNT));
    setIndex(0);
    setSelected(null);
    setScore(0);
  }

  if (done) {
    return (
      <div className="quiz-view quiz-score">
        <p>{t.quizScore(score, questions.length)}</p>
        <button onClick={restart}>{t.quizRestart}</button>
      </div>
    );
  }

  return (
    <div className="quiz-view">
      <p className="card-progress">{t.quizQuestionProgress(index + 1, questions.length)}</p>
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
        <>
          <p className="quiz-feedback">
            {isCorrect(selected) ? t.quizCorrect : t.quizIncorrect} {question.target.note_fr}
          </p>
          <button onClick={nextQuestion}>{t.quizNextQuestion}</button>
        </>
      )}
    </div>
  );
}
