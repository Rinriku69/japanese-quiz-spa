"use client";
import { MultipleChoicesQuiz } from "../types/types";
import { useState } from "react";
export default function QuizContainer({
  quizes,
}: {
  quizes: MultipleChoicesQuiz[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const currentQuiz = quizes[currentIndex];

  const handleSelect = (choiceId: number) => {
    setUserAnswers({ ...userAnswers, [currentQuiz.questionNumber]: choiceId });

    if (currentIndex < quizes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col p-4 border-4 border-red-300 h-svh gap-20">
      <h2 className="text-xl font-bold align-center">
        Qustion {currentQuiz.questionNumber}:
      </h2>
      <div className="flex  justify-center items-center p-32 bg-blue-400/70 ">
        <h2 className="text-4xl font-extrabold ">{currentQuiz.questionText}</h2>
      </div>

      <div className="mt-4 grid grid-cols-2 h-100">
        {currentQuiz.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice.id)}
            className={`p-2 border rounded ${
              userAnswers[currentQuiz.questionNumber] === choice.id
                ? "bg-blue-500 text-white"
                : "bg-white"
            } text-black hover:bg-gray-300 transition-color  `}
          >
            {choice.character} ({choice.romaji})
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 text-black"
        >
          Back
        </button>

        <span>
          {currentIndex + 1} / {quizes.length}
        </span>

        {currentIndex < quizes.length - 1 ? (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="px-4 py-2 bg-gray-200 rounded text-black"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => console.log("ส่งคำตอบ:", userAnswers)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
