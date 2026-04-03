package com.rinriku.japanese_quiz.interfaces;

import com.rinriku.japanese_quiz.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CharacterRepository extends JpaRepository<Character,Integer> {
    @Query(value = "Select * FROM characters ORDER By RAND() LIMIT 1", nativeQuery = true)
    Character findRandomCharacter();
}
