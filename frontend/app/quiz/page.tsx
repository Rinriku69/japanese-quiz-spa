import { MultipleChoicesQuiz } from "../types/types";
import QuizContainer from "./QuizContainer";

async function getQuiz(): Promise<MultipleChoicesQuiz[]> {
  const res = await fetch("http://localhost:8080/getquiz");
  return res.json();
}

export default async function Quiz() {
  const quizes: MultipleChoicesQuiz[] = await getQuiz();
  return (
    <main>
      <QuizContainer quizes={quizes} />
    </main>
  );
}
