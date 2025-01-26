import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    let maxx = canvas.width;
    let maxy = canvas.height;
    let halfx = maxx / 2;
    let halfy = maxy / 2;
    const dotCount = 200;
    const dots = [];

    const colors = ["#DA70D6", "#FF69B4", "#9400D3", "#FFFFFF"];

    class Dot {
      constructor() {
        this.rad_x = 2 * Math.random() * halfx;
        this.rad_y = 2 * Math.random() * halfy;
        this.alpha = Math.random() * 360;
        this.speed = Math.random() * 100 < 50 ? 1 : -1;
        this.speed *= 0.1;
        this.size = Math.random() * 5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        const dx = halfx + this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
        const dy = halfy + this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
        context.fillStyle = this.color;
        context.fillRect(dx, dy, this.size, this.size);
      }

      move() {
        this.alpha += this.speed;

        if (Math.random() * 100 < 5) {
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }
      }
    }

    for (let i = 0; i < dotCount; i++) {
      dots.push(new Dot());
    }

    const render = () => {
      context.fillStyle = "#000000";
      context.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dotCount; i++) {
        dots[i].draw();
        dots[i].move();
      }
      requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", () => {
      resizeCanvas();
      maxx = canvas.width;
      maxy = canvas.height;
      halfx = maxx / 2;
      halfy = maxy / 2;
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "-100",
      }}
    />
  );
};

export default Background;
