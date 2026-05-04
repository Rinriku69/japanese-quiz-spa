package com.rinriku.japanese_quiz.dto;

public record WordDTO(
        Integer id,
        String hiragana,
        String kanji,
        String romaji,
        String meaning
) {
}
