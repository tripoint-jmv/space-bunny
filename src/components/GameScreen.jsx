import Canvas from "../core/components/Canvas";
import { gsap } from "gsap";
import { bgScene } from "./scenes/backgroundScene";

export default function GameScreen() {
  const mainScene = (context) => {
    gsap.timeline().add(bgScene(context));
  };

  return <Canvas draw={mainScene} height="576" width="1024"></Canvas>;
}
