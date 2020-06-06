import React, { FC } from "react";
import { QuizForm } from "./Form";
import "./Welcome.css";

interface WelcomePageProps {
  handleSubmit: HandleSubmit;
}

export const Welcome: FC<WelcomePageProps> = ({ handleSubmit }) => {
  return (
    <div className="WelcomeContainer">
      <h1>Welcome to the Quiz App</h1>
      <h2>Pick your quiz:</h2>
      <QuizForm handleSubmit={handleSubmit} />
    </div>
  );
};
