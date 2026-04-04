package com.rinriku.japanese_quiz.controller;

import com.rinriku.japanese_quiz.dto.QuizResource;
import com.rinriku.japanese_quiz.entity.Character;
import com.rinriku.japanese_quiz.interfaces.CharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;


@RestController
@RequiredArgsConstructor
public class QuizController {
    private final CharacterRepository charRepo;

    @GetMapping("/getquiz")
    List<QuizResource> getQuiz(){
        List<Character> questions = charRepo.findRandomCharacter(10);
        return questions.stream().map(q ->
        {List<Character> othersChoices = charRepo.findRandomCharacter(4).stream().
                filter(oc -> !oc.equals(q))
                .limit(3)
                .toList();
          List<Character> choices = new ArrayList<>();
          choices.add(q);
          choices.addAll(othersChoices);

          Collections.shuffle(choices);
          return  new QuizResource(
                    "1234",
                    1,
                    q.getCharacter(),
                    choices);
        }).toList();
    }


}
