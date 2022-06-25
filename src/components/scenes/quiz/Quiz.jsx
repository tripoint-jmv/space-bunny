import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import {
  GameBattleContext,
  GameStateContext,
} from "../../../contexts/GameStateContext";
import { generateQuestions } from "./questionGenerator";

export const Quiz = () => {
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [isRightAnswer, setIsRightAnswer] = useState();
  const [questionsCount, setQuestionsCount] = useState(0);

  const { setIsBattle } = useContext(GameBattleContext);

  useEffect(() => {
    const generatedQuestions = generateQuestions();
    generatedQuestions.map((generatedQuestion) => {
      setQuestion(generatedQuestion.question);
      setAnswers(generatedQuestion.answers);
      setCorrectAnswer(generatedQuestion.correctAnswer);
    });

    if (questionsCount === 3) {
      setIsBattle(false);
    }
  }, [questionsCount]);

  /**
   * Need to go back to main screen after 3 correct answers
   * Game over after 3 wrong answers
   */

  /**
   * TODO:
   * Make a pretty screen / animation instead of this
   * boring alert when an answer is selected.
   *  Works for now though.
   */
  const answered = (choosenAnswer) => {
    if (correctAnswer == choosenAnswer) {
      alert("correct");
      setIsRightAnswer(true);
    } else {
      alert("incorrect");
      setIsRightAnswer(false);
    }
  };

  return (
    <VStack zIndex={1} pos="absolute" mt="72" spacing={5} p={-60} mb={10}>
      <Heading size="4xl">{question}</Heading>
      <HStack spacing={5}>
        {answers.map((answer, idx) => (
          <Button
            onClick={() => {
              answered(answer);
              setQuestionsCount(questionsCount + 1);
            }}
            key={idx}
            bgColor={"white"}
            color={"green"}
            size={"lg"}
          >
            {answer}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};
