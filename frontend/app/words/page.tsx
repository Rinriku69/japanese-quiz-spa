import { JapaneseWord } from "../types/types";


const wordApiUrl = 'http://localhost:8080/words';

async function fetchWords(): Promise<JapaneseWord[]>{
    const res = await fetch(wordApiUrl)
    return await res.json()
}


export default async function Word(){
    const words = await fetchWords();
    return (
        <div>{
            words.map(w=>(
                <div key={w.id}>
                    {w.hiragana} - {w.meaning}
                </div>
            ))}</div>
    );
}