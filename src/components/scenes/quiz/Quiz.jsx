import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { generateQuestions } from "../../../core/utils/questionGenerator";

export const Quiz = () => {
  const [additionQ, setAdditionQ] = useState();
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  useEffect(() => {
    const generatedQuestions = generateQuestions();
    generatedQuestions.map((generatedQuestion) => {
      setAdditionQ(generatedQuestion.question);
      setAnswers(generatedQuestion.answers);
      setCorrectAnswer(generatedQuestion.correctAnswer);
    });
  }, []);

  const answeredCorrectly = (choosenAnswer) => {
    if (correctAnswer == choosenAnswer) {
      alert("correct");
    } else {
      alert("incorrect");
    }
  };

  return (
    <VStack zIndex={1} pos="absolute" mt="72" spacing={5} p={-60} mb={10}>
      <Heading size="4xl">{additionQ}</Heading>
      <HStack spacing={5}>
        {answers.map((answer, idx) => (
          <Button
            onClick={() => {
              answeredCorrectly(answer);
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
