import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import StartButton from "./StartButton";
import { GameStateContext } from "../contexts/GameStateContext";

export default function StartScreen() {
  const { gameStarted } = useContext(GameStateContext);
  console.log(gameStarted);
  return (
    <>
      {!gameStarted ? (
        <StartButton />
      ) : (
        <Text>Game Started = {gameStarted.toString()}</Text>
      )}
    </>
  );
}
