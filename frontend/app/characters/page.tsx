import { JapaneseCharacter } from "../types/types";


const characterApiUrl = 'http://localhost:8080/characters';

async function getCharacters(): Promise<JapaneseCharacter[]> {
    const res = await fetch(characterApiUrl);
    return await res.json()
}


export default async function Character() {
    const characters: JapaneseCharacter[] = await getCharacters();

    return(
        <div className="flex flex-col gap-6 mx-5 my-2">
            {characters.map(char => (
                <div key={char.id}>
                    <p>Character: {char.character}</p>
                    <p>Type: {char.type}</p>
                    <p>Romaji: {char.romaji}</p>
                </div>
            ))}
        </div>
    )
}