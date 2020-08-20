import { useState, useRef, useEffect } from "react";

export const useAnimationFrame = (duration) => {
  const requestRef = useRef();
  const startTimeRef = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);

  function onFrame() {
    // Function to be executed on each animation frame
    console.log("frame...");
    // If previousTime doesn't exist
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
    }

    if (isRunning) {
      // do stuff...
      const deltaTime = Date.now() - startTimeRef.current;

      // console.log("start time: ", startTimeRef.current);
      // console.log("delta: ", deltaTime);
      if (deltaTime < duration) {
        setTimeLeft(duration - deltaTime);
        loop();
      } else {
        cancelAnimationFrame(onFrame);
        setIsRunning(false);
        setTimeLeft(0);
        startTimeRef.current = undefined;
        requestRef.current = undefined;
      }
    }
  }

  function loop() {
    // console.log("loop function");
    // Call onFrame() on next animation frame
    requestRef.current = requestAnimationFrame(onFrame);
  }

  function startTimer() {
    if (!isRunning) {
      console.log("Starting timer...");
      setIsRunning(true);
      startTimeRef.current = Date.now();
      loop();
    }
  }

  function pauseTimer() {
    console.log("Timer paused...");
  }

  function resetTimer() {
    console.log("Resetting timer...");
    // do stuff...
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = undefined;
      startTimeRef.current = undefined;
      setIsRunning(false);
      setTimeLeft(duration);
    }

    console.log(requestRef.current);
  }

  useEffect(() => {
    console.log("useEffect 1");
  }, []);

  useEffect(() => {
    console.log("useEffect when isRunning is changed to ", isRunning);

    if (isRunning) {
      requestRef.current = requestAnimationFrame(onFrame);
    }
    // If component unmounts, stop animation
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  return [isRunning, timeLeft, setTimeLeft, startTimer, pauseTimer, resetTimer];
};
