export interface JapaneseWord {
    id: number;
    hiragana: string;
    kanji: string | null;
    meaning: string;
    romaji: string;
}

export interface JapaneseCharacter {
    id: number;
    character: string;
    romaji: string;
    type: string;
}