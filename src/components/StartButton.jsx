import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { GameStateContext } from "../contexts/GameStateContext";

export default function StartButton(gameStarted) {
  const { setGameStarted } = useContext(GameStateContext);

  return (
    <Button
      onClick={() => {
        setGameStarted(true);
      }}
      colorScheme="blue"
      size="lg"
      top="96"
    >
      Start Game
    </Button>
  );
}
