package com.rinriku.japanese_quiz.interfaces;

import com.rinriku.japanese_quiz.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<Character,Integer> {
}
