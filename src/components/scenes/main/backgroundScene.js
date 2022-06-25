import { gsap } from "gsap";
import { stars } from "../../../core/utils/stars";
import { moon } from "../../canvasItems/moon";
import { asteroids } from "../../canvasItems/asteroids";
import { charachterScene } from "./charachterScene";
export function bgScene(context) {
  const tl = gsap.timeline({
    onComplete: function () {
      moon(context);
      asteroids(context);
      charachterScene(context);
    },
  });
  const canvasCtx = context.canvas;

  tl.to(canvasCtx, { duration: 1, x: 100, y: 100 });
  tl.to(
    canvasCtx,
    { duration: 1, backgroundColor: "black", opacity: ".95" },
    "+=0.5"
  );
  tl.to(
    canvasCtx,
    { duration: 1, x: 0, rotation: -360 },
    stars(canvasCtx.width, canvasCtx.height, context)
  );

  return tl;
}
