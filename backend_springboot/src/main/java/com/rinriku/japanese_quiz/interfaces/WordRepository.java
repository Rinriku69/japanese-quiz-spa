package com.rinriku.japanese_quiz.interfaces;

import com.rinriku.japanese_quiz.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends JpaRepository<Word,Integer> {
}
