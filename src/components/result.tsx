import React from "react";
import "./Result.css";

interface ResultsProps {
  score: number;
  startOver: Function;
}

export const Results: React.FC<ResultsProps> = ({ score, startOver }) => {
  return (
    <div className="result">
      <h3>Your final score is </h3>
      <h1>{score}</h1>
      <h2>Well Done!</h2>
      <button onClick={() => startOver()}>Start Again</button>
    </div>
  );
};
