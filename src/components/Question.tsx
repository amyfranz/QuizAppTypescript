import React, { FC } from "react";
import "./Quiz.css";

interface QuestionPageProps {
  question: Question;
  nextQuestion: NextQuestion;
}

export const Question: FC<QuestionPageProps> = ({ question, nextQuestion }) => {
  function shuffle(a: Array<string>) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const buttonArray: Array<string> =
    question.type === "boolean"
      ? ["True", "False"]
      : shuffle([question.correct_answer, ...question.incorrect_answers]);

  return (
    <div className="quiz">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      {buttonArray.map((button) => (
        <button
          dangerouslySetInnerHTML={{ __html: button }}
          onClick={() => nextQuestion(button)}
          key={button}
        />
      ))}
    </div>
  );
};
