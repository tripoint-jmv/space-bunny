import { gsap } from "gsap";
import { stars } from "../../core/utils/stars";

const moon = (context) => {
  const canvasCtx = context.canvas;

  const canvasWidth = canvasCtx.width;
  const canvasHeight = canvasCtx.height;
  const shipImg = new Image();
  const shipimgXPos = canvasWidth / 1.25;
  const shipimgYPos = canvasHeight / 9.5;
  shipImg.src = "moon.png";
  shipImg.onload = () => {
    context.drawImage(
      shipImg,
      shipimgXPos,
      shipimgYPos,
      canvasWidth / 6,
      canvasHeight / 4
    );
  };
};

export function bgScene(context) {
  const tl = gsap.timeline({
    onComplete: function () {
      moon(context);
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
