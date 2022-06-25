import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Layout from "./core/components/Layout";
import {
  GameStateContext,
  GameBattleContext,
} from "./contexts/GameStateContext";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [isBattle, setIsBattle] = useState(false);

  return (
    <Layout>
      <GameStateContext.Provider value={{ gameStarted, setGameStarted }}>
        <GameBattleContext.Provider value={{ isBattle, setIsBattle }}>
          <StartScreen />
        </GameBattleContext.Provider>
      </GameStateContext.Provider>
    </Layout>
  );
}

export default App;
