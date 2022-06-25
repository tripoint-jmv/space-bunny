import { questions } from "./questions";
import gsap from "gsap";
import Canvas from "../../../core/components/Canvas";
import { Container } from "@chakra-ui/react";
import { Quiz } from "./Quiz";

export default function QuizScreen() {
  const quizScene = (context) => {
    const tl = gsap.timeline();
    tl.add(questions(context));
  };
  return (
    <Container maxW="sm" centerContent>
      <Canvas draw={quizScene} height="576" width="1024" />
      <Quiz />
    </Container>
  );
}
