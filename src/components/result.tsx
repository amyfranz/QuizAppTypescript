import React from "react";
import "./Result.css";

interface ResultsProps {
  score: number;
}

export const Results: React.FC<ResultsProps> = ({ score }) => {
  return (
    <div className="result">
      <h3>Your final score is </h3>
      <h1>{score}</h1>
      <h2>Well Done!</h2>
    </div>
  );
};
