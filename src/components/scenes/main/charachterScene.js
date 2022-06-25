import { gsap } from "gsap";

export const charachterScene = (context) => {
  const tl = gsap.timeline();

  const canvasCtx = context.canvas;
  const canvasWidth = canvasCtx.width;
  const canvasHeight = canvasCtx.height;

  const image = new Image();
  const imgXPos = 0;
  const imgYPos = canvasHeight / 1.5;
  image.src = "../bunny/Idle_000.png";
  image.onload = () => {
    context.drawImage(
      image,
      imgXPos,
      imgYPos,
      canvasWidth / 4,
      canvasHeight / 4
    );
  };
  tl.add(canvasCtx, charachterScene);

  return tl;
};
