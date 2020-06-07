type HandleSubmit = (difficulty: string, category: string) => void;
type Function = () => void;
type NextQuestion = (answer: string) => void;
type Score = number;
type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};
type Difficulty = { label: string; value: string };
type Category = { id: int; name: string };
