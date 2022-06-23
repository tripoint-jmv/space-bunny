import { gsap } from "gsap";
import { stars } from "../../core/utils/stars";

export const bgScene = (context) => {
  const tl = gsap.timeline();
  tl.to(context.canvas, { duration: 1, x: 100, y: 100 })
    .to(
      context.canvas,
      { duration: 1, backgroundColor: "black", opacity: "0.85" },
      "+=0.5"
    )
    .to(context.canvas, { duration: 1, x: 0, rotation: -360 }, "+=0.5");
  stars(context.canvas.width, context.canvas.height, context);
};
