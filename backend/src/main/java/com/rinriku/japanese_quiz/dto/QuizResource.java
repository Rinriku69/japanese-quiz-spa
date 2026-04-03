package com.rinriku.japanese_quiz.dto;

import java.util.List;

public record QuizResource(
        String questionId,
        String questionNumber,
        String questionText,
        List<String> choices
) {
}
