import Canvas from "../core/components/Canvas";
import { gsap } from "gsap";
import { bgScene } from "./scenes/backgroundScene";
import { charachterScene } from "./scenes/charachterScene";

export default function GameScreen() {
  const mainScene = (context) => {
    const tl = gsap.timeline({
      onComplete: function () {
        charachterScene(context);
      },
    });
    tl.add(bgScene(context));
  };

  return (
    <>
      <Canvas draw={mainScene} height="576" width="1024" />
    </>
  );
}
