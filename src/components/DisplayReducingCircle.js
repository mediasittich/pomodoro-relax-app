import React from "react";
import { ParentSize } from "@vx/responsive";
import "./DisplayReducingCircle.css";

const DisplayReducingCircle = ({ time, timeremaining }) => {
  return (
    <ParentSize style={{ height: "50vh", width: "100%" }}>
      {(parent) => {
        const strokeWidth = 10;
        const size = parent.height;
        const radius = (0.8 * size) / 2 - strokeWidth * 2;
        const circumference = radius * 2 * Math.PI;
        const timeProportion = timeremaining / time;
        const offset = circumference - timeProportion * circumference;
        return (
          <svg
            className="progress-ring"
            width={parent.width}
            height={parent.height}
            // viewBox={`0 0 ${width} ${height}`}
          >
            <circle
              className="progress-ring__circle"
              stroke="rgba(0,0,0,.2)"
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={parent.width / 2}
              cy={parent.height / 2}
            />
            <circle
              className="progress-ring__circle"
              stroke="white"
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radius}
              cx={parent.width / 2}
              cy={parent.height / 2}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
        );
      }}
    </ParentSize>
  );
};

export default DisplayReducingCircle;
