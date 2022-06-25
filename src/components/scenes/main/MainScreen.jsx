import gsap from "gsap";
import Canvas from "../../../core/components/Canvas";
import { bgScene } from "./backgroundScene";

export default function MainScreen() {
  const mainScene = (context) => {
    const tl = gsap.timeline({
      defaults: { duration: "stagger", ease: "Power4" },
    });
    tl.add(bgScene(context));
  };
  return <Canvas draw={mainScene} height="576" width="1024"></Canvas>;
}
