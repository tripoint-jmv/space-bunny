import Canvas from "../core/components/Canvas";
import { gsap } from "gsap";

export default function GameScreen() {
  //TODO: Add random stars to canvas
  //   const stars = (w, h) => {
  //     const canvasSize = canvas.width * canvas.height;
  //   };

  const canvasbg = (context) => {
    // const canvasSize = context.canvas.width * context.canvas.height;
    const tl = gsap.timeline();
    tl.to(context.canvas, { duration: 1, x: 100, y: 100 })
      .to(
        context.canvas,
        { duration: 1, backgroundColor: "black", opacity: "0.85" },
        "+=0.5"
      )
      .to(context.canvas, { duration: 1, x: 0, rotation: -360 }, "+=0.5");
  };

  return <Canvas draw={canvasbg} height="576" width="1024"></Canvas>;
}
