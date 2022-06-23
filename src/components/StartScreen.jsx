import { useContext } from "react";
import StartButton from "./StartButton";
import { GameStateContext } from "../contexts/GameStateContext";
import GameScreen from "./GameScreen";
import { Center } from "@chakra-ui/react";

export default function StartScreen() {
  const { gameStarted } = useContext(GameStateContext);

  return <>{!gameStarted ? <StartButton /> : <GameScreen />}</>;
}
