import { JapaneseWord, JapaneseWordResponse } from "../types/types";

const wordApiUrl = "http://localhost:8000/api/words";

async function fetchWords(): Promise<JapaneseWordResponse> {
  const res = await fetch(wordApiUrl);
  return await res.json();
}

export default async function Word() {
  const wordsResponse: JapaneseWordResponse = await fetchWords();
  const words: JapaneseWord[] = wordsResponse.data;
  return (
    <div>
      {words.map((w) => (
        <div key={w.id}>
          {w.hiragana} - {w.meaning}
        </div>
      ))}
    </div>
  );
}
