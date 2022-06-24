export const asteroids = (context) => {
  const canvasCtx = context.canvas;

  const canvasWidth = canvasCtx.width;
  const canvasHeight = canvasCtx.height;

  const asteroidImg = new Image();

  const asteroidXPos = canvasWidth / 4;
  const asteroidYPos = canvasHeight / 1.5;
  asteroidImg.src = "../asteroids/asteroid.svg";
  asteroidImg.onload = () => {
    context.drawImage(
      asteroidImg,
      asteroidXPos,
      asteroidYPos,
      canvasWidth / 6,
      canvasHeight / 4
    );
  };
};
