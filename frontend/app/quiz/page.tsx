import { MultipleChoicesQuiz } from "../types/types"
import QuizContainer from "./QuizContainer";


async function getQuiz(): Promise<MultipleChoicesQuiz[]>{
    const res = await fetch('http://localhost:8080/getquiz')
    return res.json()
}


export default async function Quiz(){
    const quizes: MultipleChoicesQuiz[] = await getQuiz()
    return (
        <main>
            <h1 className="text-center">Japanese Language Quiz</h1>
            <QuizContainer quizes={quizes} />
        </main>
    );
}