import React, { FC } from "react";
import { data } from "../data";
import {QuizForm} from "./Form"

interface WelcomePageProps {
  handleSubmit: HandleSubmit;
}

export const Welcome: FC<WelcomePageProps> = ({ handleSubmit }) => {
  console.log(data.categories);
  return (
    <div>
      <h1>Welcome to </h1>
      <QuizForm handleSubmit={handleSubmit} />
    </div>
  );
};
