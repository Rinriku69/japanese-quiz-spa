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