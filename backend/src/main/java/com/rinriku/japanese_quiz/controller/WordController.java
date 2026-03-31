package com.rinriku.japanese_quiz.controller;

import com.rinriku.japanese_quiz.dto.WordDTO;
import com.rinriku.japanese_quiz.interfaces.WordRepository;
import com.rinriku.japanese_quiz.entity.Word;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WordController {
    private WordRepository wordRepo;

    public WordController(WordRepository wordRepo) {
        this.wordRepo = wordRepo;
    }


    @GetMapping("/words")
    public List<WordDTO> getWord(){
        List<Word> rawWords = wordRepo.findAll();
        return  rawWords.stream().map(word-> new WordDTO(
                word.getId(),
                word.getHiragana(),
                word.getKanji(),
                word.getRomaji(),
                word.getMeaning()))
                .toList();
    }


}
