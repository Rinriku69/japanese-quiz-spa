package com.rinriku.japanese_quiz.interfaces;

import com.rinriku.japanese_quiz.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CharacterRepository extends JpaRepository<Character,Integer> {
    @Query(value = "Select * FROM characters ORDER By RAND() LIMIT :amount", nativeQuery = true)
    List<Character> findRandomCharacter(@Param("amount") int amount);
}
