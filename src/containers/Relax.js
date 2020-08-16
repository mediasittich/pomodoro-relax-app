import React, { useState, useEffect } from "react";

import TimerInput from "../components/TimerInput";
import ControlButton from "../components/ControlButton";

import TimerDisplay from "../components/TimerDisplay";
import DisplaySplitCircle from "../components/DisplaySplitCircle";

import "./Relax.css";

const RelaxApp = () => {
  const totalTime = 7500;
  const breatheTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  return (
    <div className="app relax-app">
      {/* <div>time left</div> */}
      <div className="app-content">
        <TimerDisplay>
          <DisplaySplitCircle
            totalTime={totalTime}
            breatheTime={breatheTime}
            holdTime={holdTime}
          />
        </TimerDisplay>
      </div>
    </div>
  );
};

export default RelaxApp;
