import React from "react";
import "./DisplayReducingCircle.css";

const DisplayReducingCircle = ({ time, timeremaining }) => {
  const size = 120;
  const strokeWidth = 4;
  const radius = size / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const timeProportion = timeremaining / time;
  const offset = circumference - timeProportion * circumference;

  // Draw Circle
  return (
    <div>
      <svg className="progress-ring" width={size} height={size}>
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
      </svg>
    </div>
  );
};

export default DisplayReducingCircle;
