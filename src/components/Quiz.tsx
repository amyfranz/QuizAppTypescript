import React, { FC, Fragment, useState } from "react";
import { Question as DisplayQuestion } from "./Question";
import "./Quiz.css";

interface QuizPageProps {
  handleFinish: Function;
  questions: Array<Question>;
  increaseScore: Function;
}

export const Quiz: FC<QuizPageProps> = ({
  increaseScore,
  handleFinish,
  questions,
}) => {
  const [questionNum, setQuestionNum] = useState(0);

  const renderQuestions = () => {
    while (questionNum < 10) {
      return renderQuestion();
    }
    handleFinish();
  };

  const nextQuestion: NextQuestion = (answer) => {
    if (answer === questions[questionNum].correct_answer) {
      increaseScore();
    }
    setQuestionNum(questionNum + 1);
  };

  const renderQuestion = () => {
    return (
      <Fragment>
        <h1>Question number {questionNum + 1}:</h1>
        <DisplayQuestion
          question={questions[questionNum]}
          key={questions[questionNum].question}
          nextQuestion={nextQuestion}
        />
      </Fragment>
    );
  };

  return <Fragment>{renderQuestions()}</Fragment>;
};
