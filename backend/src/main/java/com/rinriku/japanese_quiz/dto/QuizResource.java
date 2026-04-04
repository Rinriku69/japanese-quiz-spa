package com.rinriku.japanese_quiz.dto;

import com.rinriku.japanese_quiz.entity.Character;

import java.util.List;

public record QuizResource(
        String questionId,
        Integer questionNumber,
        String questionText,
        List<Character> choices
) {
}
