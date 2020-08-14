import React, { useState, useEffect } from "react";

import TimerInput from "../components/TimerInput";
import ControlButton from "../components/ControlButton";

import TimerDisplay from "../components/TimerDisplay";
import DisplayReducingCircle from "../components/DisplayReducingCircle";

import "./Meditate.css";

const MeditateApp = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(minutes * 60);
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  // const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  // Setting the Timer
  const handleUp = () => {
    setMinutes(minutes + 1 * 60);
  };
  const handleDown = () => {
    setMinutes(minutes - 1 * 60);
  };
  // Control the Timer
  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(seconds);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
    } else if (!isActive && secondsLeft !== 0) {
      clearInterval(interval);
    }
    // console.log(seconds);
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  // console.log(isActive);
  // console.log(minutes);
  return (
    <div className="app mediation-app">
      {/* <div>time left</div> */}
      <div className="app-content">
        <TimerInput
          timeSet={seconds}
          handleUp={handleUp}
          handleDown={handleDown}
        />
        <TimerDisplay>
          <DisplayReducingCircle time={seconds} timeremaining={secondsLeft} />
        </TimerDisplay>
        <ControlButton
          title={isActive ? "pause" : "start"}
          action={toggleTimer}
        />
        <ControlButton title="reset" action={resetTimer} />
      </div>
    </div>
  );
};

export default MeditateApp;
