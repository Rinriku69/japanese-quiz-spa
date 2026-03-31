package com.rinriku.japanese_quiz.controller;

import com.rinriku.japanese_quiz.dto.CharacterDTO;
import com.rinriku.japanese_quiz.entity.Character;
import com.rinriku.japanese_quiz.interfaces.CharacterRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CharacterController {
    private CharacterRepository charRepo;

    public CharacterController(CharacterRepository charRepo){
        this.charRepo = charRepo;
    }

    @GetMapping("/characters")
    public List<CharacterDTO> getCharacters(){
        List<Character> rawChars = charRepo.findAll();
        return rawChars.stream().map( c -> new CharacterDTO(
             c.getId(),c.getCharacter(), c.getRomaji(), c.getType()
        )).toList();
    }
}
