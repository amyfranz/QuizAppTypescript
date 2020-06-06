import React, { FC, Fragment, useState } from "react";
import { Welcome } from "./components/Welcome";
import { Quiz } from "./components/Quiz";
import { Results } from "./components/result";
import "./App.css";
const URL = "https://opentdb.com/api.php?amount=10";

const App: FC = () => {
  const [page, setPage] = useState("welcome");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const handleSubmit: HandleSubmit = (difficulty, category) => {
    console.log(difficulty);
    fetch(`${URL}&category=${category}&difficulty=${difficulty}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        setPage("quiz");
      });
  };
  const handleFinish: HandleFinish = () => {
    setPage("result");
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  if (page === "welcome") return <Welcome handleSubmit={handleSubmit} />;

  if (page === "quiz" && questions.length > 0)
    return (
      <Fragment>
        <p>Your score: {score}</p>
        <Quiz
          questions={questions}
          handleFinish={handleFinish}
          increaseScore={increaseScore}
        />
      </Fragment>
    );
  if (page === "result") return <Results score={score} />;

  return <h1>Default</h1>;
};

export default App;
