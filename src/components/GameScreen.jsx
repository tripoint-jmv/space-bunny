import QuizScreen from "./scenes/quiz/QuizScreen";
import { useContext, useState } from "react";
import MainScreen from "./scenes/main/MainScreen";
import { GameBattleContext } from "../contexts/GameStateContext";

export default function GameScreen() {
  const { isBattle } = useContext(GameBattleContext);

  return <>{isBattle ? <QuizScreen /> : <MainScreen />}</>;
}
