import React, { useRef, useEffect } from "react";

const CanvasReducingCircle = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Draw Circle
    const radius = context.canvas.height / 2;
    const x0 = context.canvas.width / 2;
    const y0 = context.canvas.height / 2;
    const startingAngle = 0 * Math.PI;
    const endingAngle = 1.5 * Math.PI;

    const drawCircle = (ctx) => {
      ctx.beginPath();
      ctx.arc(x0, y0, radius - 10, startingAngle, endingAngle);
      ctx.lineWidth = 5;
      ctx.stroke();
    };

    drawCircle(context);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default CanvasReducingCircle;
