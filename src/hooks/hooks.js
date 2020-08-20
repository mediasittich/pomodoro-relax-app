import { useState, useRef, useEffect } from "react";

export const useAnimationFrame = (duration, isActive, isPaused) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    console.log(isActive);

    function onFrame() {
      if (previousTimeRef.current !== undefined) {
        const elapsed = Date.now() - previousTimeRef.current;
        setTimeLeft((prevTimeLeft) => prevTimeLeft - elapsed);
      }
      previousTimeRef.current = Date.now();

      requestRef.current = requestAnimationFrame(onFrame);
    }
    function loop() {
      console.log("loop function");
      requestRef.current = requestAnimationFrame(onFrame);
    }
    function onStart() {
      console.log(">>>> start with time ");
      loop();
    }

    if (isActive) {
      onStart();
    }

    if (isPaused) {
    }
    // requestRef.current = requestAnimationFrame(onFrame);
    // If component unmounts, stop animation
    return () => cancelAnimationFrame(requestRef.current);
  }, [isActive, isPaused]);

  return [timeLeft, setTimeLeft];
};
