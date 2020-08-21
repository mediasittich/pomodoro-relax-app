import React from "react";

import { calculateTimeLeft, displayFormat } from "../scripts/timerCalculations";

const TimeDisplay = ({ size, time }) => {
  return (
    <text
      x={size / 2}
      y={size / 2}
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="20"
    >
      {displayFormat(calculateTimeLeft(Math.round(time)).minutes)}:
      {displayFormat(calculateTimeLeft(Math.round(time)).seconds)}
    </text>
  );
};

export default TimeDisplay;
