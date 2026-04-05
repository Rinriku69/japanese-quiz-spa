package com.rinriku.japanese_quiz.dto;

import java.util.List;

public record QuizResource(
        String questionId,
        int questionNumber,
        String questionText,
        List<ChoiceResource> choices
) {
}
