import React from "react";
import TimeDisplay from "./TimeDisplay";
import { calculateTimeInSec } from "../scripts/timerCalculations";
import "./DisplayReducingCircle.css";

// TODO: Circle is too slow compared to timer numbers - fix
const DisplayReducingCircle = ({ time, timeremaining }) => {
  const strokeWidth = 2;
  const size = 100;
  const radius = (0.8 * size) / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const timeProportion =
    Math.round(calculateTimeInSec(timeremaining)) / calculateTimeInSec(time);
  const offset = circumference - timeProportion * circumference;
  return (
    <svg
      className="progress-ring"
      width={size}
      height={size}
      viewBox={`0 0 100 100`}
      preserveAspectRatio="xMinYMin meet"
    >
      <circle
        className="progress-ring__circle"
        stroke="rgba(0,0,0,.2)"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="progress-ring__circle"
        stroke="white"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <TimeDisplay size={size} time={timeremaining} />
    </svg>
  );
};

export default DisplayReducingCircle;
