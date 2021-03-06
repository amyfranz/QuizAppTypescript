import React, { useState } from "react";
import { data } from "../data";

interface QuizFormProps {
  handleSubmit: HandleSubmit;
}

export const QuizForm: React.FC<QuizFormProps> = ({ handleSubmit }) => {
  const [{ difficulty, category }, setOptions] = useState({
    difficulty: data.difficulties[0].value,
    category: data.categories[0].id.toString(),
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(difficulty, category);
      }}
    >
      <label>Difficulty:  </label>
      <select
        name="difficulty"
        onChange={(e) => setOptions({ difficulty: e.target.value, category })}
      >
        {data.difficulties.map((difficulty: Difficulty) => (
          <option key={difficulty.value} value={difficulty.value}>
            {difficulty.label}
          </option>
        ))}
      </select>
      <br />
      <label>Category:  </label>
      <select
        name="category"
        onChange={(e) => setOptions({ difficulty, category: e.target.value })}
      >
        {data.categories.map((category: Category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <br />
      <button type="submit">Let's Go</button>
    </form>
  );
};
