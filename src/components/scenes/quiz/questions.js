import { gsap } from "gsap";

export function questions(context) {
  const tl = gsap.timeline();
  const canvasCtx = context.canvas;

  tl.to(canvasCtx, { x: 0, y: 100 });
  tl.to(canvasCtx, {
    backgroundColor: "black",
    opacity: ".95",
  });
}
