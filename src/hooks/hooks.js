import { useState, useRef, useEffect } from "react";

export const useAnimationFrame = (duration) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);

  function onFrame() {
    // Function to be executed on each animation frame
    console.log("frame...");
    // If previousTime exists
    if (previousTimeRef.current !== undefined) {
      // do stuff...
      const newElapsed = Date.now() - previousTimeRef.current;
      setElapsed((prevElapsed) => prevElapsed + newElapsed);
      console.log("elapsed time: ", elapsed);
      setTimeLeft((prevTimeLeft) => prevTimeLeft - newElapsed);
    }
    // Else set previousTime to current time
    previousTimeRef.current = Date.now();

    loop();
  }

  function loop() {
    console.log("loop function");
    // Call onFrame() on next animation frame
    requestRef.current = requestAnimationFrame(onFrame);
  }

  function startTimer() {
    if (!isRunning) {
      console.log("Starting timer...");
      setIsRunning(true);
      loop();
    }
  }

  function resetTimer() {
    console.log("Resetting timer...");
    // do stuff...
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = undefined;
      previousTimeRef.current = undefined;
      setIsRunning(false);
      setElapsed(0);
      setTimeLeft(duration);
    }

    console.log(requestRef.current);
  }

  useEffect(() => {
    console.log("useEffect 1");
  }, []);

  useEffect(() => {
    console.log("useEffect when isRunning is changed to ", isRunning);
    // cancel animationFrame
    // set states properly
    if (isRunning) {
      requestRef.current = requestAnimationFrame(onFrame);
    }
    // If component unmounts, stop animation
    return () => cancelAnimationFrame(requestRef.current);

    // return () => {
    //   cleanup
    // }
  }, [isRunning]);

  return [isRunning, elapsed, timeLeft, setTimeLeft, startTimer, resetTimer];
};

// function start() {
//   if (!requestRef.current) {
//     requestRef.current = requestAnimationFrame(loop);
//   }
// }
// function stop() {
//   if (requestRef.current) {
//     window.cancelAnimationFrame(loop);
//     requestRef.current = undefined;
//   }
// }

// function doStuff() {
//   console.log("doing stuff...");
// }

// function onFrame() {
//   if (previousTimeRef.current !== undefined) {
//     const elapsed = Date.now() - previousTimeRef.current;
//     setTimeLeft((prevTimeLeft) => prevTimeLeft - elapsed);
//   }

// }

// function onStart() {
//   console.log(">>>> start with time ");
//   loop();
// }
