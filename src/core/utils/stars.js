import gsap from "gsap";

export const stars = (w, h, context) => {
  const canvasSize = w * h;
  const starsFraction = canvasSize / 2000;
  for (let i = 0; i < starsFraction; i++) {
    //Set up random elements
    let xPos = gsap.utils.random(2, w - 2);
    let yPos = gsap.utils.random(2, h - 2);
    let alpha = gsap.utils.random(0.5, 1);
    let size = gsap.utils.random(1, 2);

    //Add stars
    context.fillStyle = "#ffffff";
    context.globalAlpha = alpha;
    context.fillRect(xPos, yPos, size, size);
  }
};
