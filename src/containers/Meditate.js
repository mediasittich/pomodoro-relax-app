import React, { useState } from "react";

import TimerInput from "../components/TimerInput";
import ControlButton from "../components/ControlButton";

const MeditateApp = () => {
  const [timeSet, setTimeSet] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  // Setting the Timer
  const handleUp = () => {
    setTimeSet(timeSet + 1 * 60);
  };
  const handleDown = () => {
    setTimeSet(timeSet - 1 * 60);
  };
  // Control the Timer
  const startTimer = () => {
    setIsActive(true);
  };
  const stopTimer = () => {
    setIsActive(false);
  };

  console.log(isActive);
  console.log(timeSet);
  return (
    <div>
      <h1>Meditation Timer Page</h1>
      <div>time left</div>
      <div>
        <TimerInput
          timeSet={timeSet}
          handleUp={handleUp}
          handleDown={handleDown}
        />
        <ControlButton title="start" action={startTimer} />
        <ControlButton title="stop" action={stopTimer} />
      </div>
    </div>
  );
};

export default MeditateApp;
