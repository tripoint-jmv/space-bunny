import { gsap } from "gsap";
import { useEffect } from "react";

export const charachterScene = (context) => {
  const tl = gsap.timeline();

  const canvasCtx = context.canvas;
  const canvasWidth = canvasCtx.width;
  const canvasHeight = canvasCtx.height;

  const image = new Image();
  image.src = "../bunny/Idle_000.png";

  const imgXPos = 0;
  const imgYPos = canvasHeight / 1.5;

  class Sprite {
    constructor({ position, velocity, image, imgW, imgH }) {
      this.position = position;
      this.image = image;
      this.imgW = imgW;
      this.imgH = imgH;
    }

    draw() {
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        canvasWidth / 4,
        canvasHeight / 4
      );
    }
  }

  const bunny = new Sprite({
    position: {
      x: 0,
      y: canvasHeight / 1.5,
    },
    image: image,
    imgW: canvasWidth / 4,
    imgH: canvasHeight / 4,
  });

  const keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    s: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
  };

  function animate() {
    window.requestAnimationFrame(animate);
    if (keys.w.pressed && lastKey === "w") bunny.position.y -= 3;
    else if (keys.a.pressed && lastKey === "a") bunny.position.x -= 3;
    else if (keys.s.pressed && lastKey === "s") bunny.position.y += 3;
    else if (keys.d.pressed && lastKey === "d") bunny.position.x += 3;
    bunny.draw();
  }

  animate();

  let lastKey = "";
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "w":
        keys.w.pressed = true;
        lastKey = "w";
        break;
      case "a":
        keys.a.pressed = true;
        lastKey = "a";
        break;
      case "s":
        keys.s.pressed = true;
        lastKey = "s";
        break;
      case "d":
        keys.d.pressed = true;
        lastKey = "d";
        break;
    }
  });
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "w":
        keys.w.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "s":
        keys.s.pressed = false;
        break;
      case "d":
        keys.d.pressed = false;
        break;
    }
  });

  tl.add(canvasCtx, charachterScene);

  return tl;
};
