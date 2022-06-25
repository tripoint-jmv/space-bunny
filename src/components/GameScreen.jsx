import QuizScreen from "./scenes/quiz/QuizScreen";
import { useState } from "react";
import MainScreen from "./scenes/main/MainScreen";

export default function GameScreen() {
  const [isBattle, setIsBattle] = useState(true);
  /*
   * TODO:
   * Set battle state on collision with asteroid, moon, etc.
   */
  return <>{isBattle ? <QuizScreen /> : <MainScreen />}</>;
}
