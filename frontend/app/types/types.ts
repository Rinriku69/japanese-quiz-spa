export interface JapaneseWord {
    id: number;
    hiragana: string;
    kanji: string | null;
    romaji: string;
    meaning: string;
}


export interface JapaneseCharacter {
    id: number;
    character: string;
    romaji: string;
    type: string;
}

export interface JapaneseCharacterResponse{
    data: JapaneseCharacter[];
}

export interface JapaneseWordResponse{
    data: JapaneseWord[];
}

export interface MultipleChoicesQuiz {
    questionId: string;
    questionNumber: number;
    questionText: string;
    choices: Choice[];
}

export interface Choice {
    id: number;
    character: string;
    romaji: string;
    type: string;
}