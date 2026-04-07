
interface Quiz {
    questionId:string;
    questionNumber:number;
    questionText:string;
    choices: Choice[];
}

interface Choice{
    id:number;
    character:string;
    romaji:string;
    type:string;
}

async function getQuiz(): Promise<Quiz[]>{
    const res = await fetch('http://localhost:8080/getquiz')
    return res.json()
}


export default async function Quiz(){
    const quizes = await getQuiz()
    return (
        <div>
            {quizes.map(q=>(
                <div key={q.questionNumber}>
                    <div>{q.questionNumber}</div>
                    <div>{q.questionText}</div>
                    {q.choices.map(c=>(
                        <div key={c.id}>{c.romaji}</div>
                    ))}
                </div>
            ))}
        </div>
    )
}