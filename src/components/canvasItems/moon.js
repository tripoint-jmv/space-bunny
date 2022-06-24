export const moon = (context) => {
  const canvasCtx = context.canvas;

  const canvasWidth = canvasCtx.width;
  const canvasHeight = canvasCtx.height;
  const moonImg = new Image();
  const moonXPos = canvasWidth / 1.25;
  const moonYPos = canvasHeight / 9.5;
  moonImg.src = "moon.png";
  moonImg.onload = () => {
    context.drawImage(
      moonImg,
      moonXPos,
      moonYPos,
      canvasWidth / 6,
      canvasHeight / 4
    );
  };
};
