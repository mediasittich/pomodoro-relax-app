import React, { useCallback, useEffect, useRef } from "react";

// import { ReactComponent as Circle } from "../assets/image/circle.svg";
import "./DisplaySplitCircle.css";

const DisplaySplitCircle = ({ totalTime, breatheTime, holdTime }) => {
  return (
    <div className="split-circle__container">
      <div className="circle"></div>
      <p>Text</p>
      <div className="dot-container">
        <div className="dot"></div>
      </div>
      <div class="conic-circle">
        <svg width="400" height="400">
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="gray"
            stroke-width="3"
            fill="none"
          />
          <g fill="none" stroke-width="10">
            <path
              d="M 265.7556720183616 334.81910694487505 A 150 150 0 0 0 200 50"
              stroke="#4ca493"
            />
            <path
              d="M 111.83221215612905 321.3525491562421 A 150 150 0 0 0 288.167787843871 321.3525491562421"
              stroke="#fff"
            />
            <path
              d="M 199.99999999999997 50 A 150 150 0 0 0 111.83221215612905 321.3525491562421"
              stroke="#2a5b52"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DisplaySplitCircle;
