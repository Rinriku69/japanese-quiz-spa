package com.rinriku.japanese_quiz.dto;

public record ChoiceResource(
        Integer id,
        String character,
        String romaji,
        String type
) {
}
