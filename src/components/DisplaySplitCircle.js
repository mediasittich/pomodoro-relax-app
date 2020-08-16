import React, { useCallback, useEffect, useRef } from "react";
import { ParentSize } from "@vx/responsive";
import { describeArc } from "../scripts/calcPolarToCartesian";

// import { ReactComponent as Circle } from "../assets/image/circle.svg";
import "./DisplaySplitCircle.css";

const DisplaySplitCircle = () => (
  <ParentSize>
    {(parent) => {
      const strokeWidth = 10;
      const size = parent.height;
      const radius = size / 2 - strokeWidth;
      return (
        <svg width="100%" height="100%">
          <circle
            cx={parent.width / 2}
            cy={parent.height / 2}
            r={radius}
            stroke="gray"
            stroke-width="3"
            fill="none"
          />
          <g fill="none" stroke-width="10">
            <path
              d={`${describeArc(
                parent.width / 2,
                parent.height / 2,
                radius,
                0,
                0.4 * 360
              )}`}
              // d="M 265.7556720183616 334.81910694487505 A 150 150 0 0 0 200 50"
              stroke="#4ca493"
            />
            <path
              d={`${describeArc(
                parent.width / 2,
                parent.height / 2,
                radius,
                0.4 * 360,
                0.6 * 360
              )}`}
              // d="M 111.83221215612905 321.3525491562421 A 150 150 0 0 0 288.167787843871 321.3525491562421"
              stroke="#fff"
            />
            <path
              d={`${describeArc(
                parent.width / 2,
                parent.height / 2,
                radius,
                0.6 * 360,
                360
              )}`}
              // d="M 199.99999999999997 50 A 150 150 0 0 0 111.83221215612905 321.3525491562421"
              stroke="#2a5b52"
            />
          </g>
        </svg>
      );
    }}
  </ParentSize>
);

export default DisplaySplitCircle;
