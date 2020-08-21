import { useState, useRef, useEffect, useCallback } from "react";

export const useAnimationFrame = (duration) => {
  const requestRef = useRef();
  const startTimeRef = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [savedTime, setSavedTime] = useState(duration);

  function onFrame() {
    // Function to be executed on each animation frame
    // If previousTime doesn't exist
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
    }

    if (isRunning) {
      const deltaTime = Date.now() - startTimeRef.current;

      if (deltaTime < savedTime) {
        setTimeLeft(savedTime - deltaTime);
        loop();
      } else {
        cancelAnimationFrame(onFrame);
        setIsRunning(false);
        setTimeLeft(0); // or duration
        setSavedTime(duration);
        startTimeRef.current = undefined;
        requestRef.current = undefined;
      }
    }
  }

  function loop() {
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
    if (isRunning) {
      setIsRunning(false);
      setSavedTime(timeLeft);
      cancelAnimationFrame(requestRef.current);
      requestRef.current = undefined;
      startTimeRef.current = undefined;
    }
  }

  function resetTimer() {
    if (requestRef.current) {
      setIsRunning(false);
      setTimeLeft(duration);
      setSavedTime(duration);
      cancelAnimationFrame(requestRef.current);
      requestRef.current = undefined;
      startTimeRef.current = undefined;
    }
    setTimeLeft(duration);
    setSavedTime(duration);
  }

  useEffect(() => {
    setTimeLeft(duration);
    setSavedTime(duration);
  }, [duration]);

  useEffect(() => {
    if (isRunning) {
      requestRef.current = requestAnimationFrame(onFrame);
    }
    // If component unmounts, stop animation
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  return [isRunning, timeLeft, startTimer, pauseTimer, resetTimer];
};
