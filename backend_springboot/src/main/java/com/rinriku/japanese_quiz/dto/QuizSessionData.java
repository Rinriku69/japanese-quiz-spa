package com.rinriku.japanese_quiz.dto;

import java.util.List;

public record QuizSessionData(
        String questionId,
        Integer questionNumber,
        String questionText,
        List<String> choices,
        String correctAnswer
) {
}
