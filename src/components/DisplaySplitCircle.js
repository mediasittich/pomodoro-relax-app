import React from "react";
import { ParentSize } from "@vx/responsive";
import { describeArc } from "../scripts/calcPolarToCartesian";

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
              stroke="#2a5b52"
            />
          </g>
        </svg>
      );
    }}
  </ParentSize>
);

export default DisplaySplitCircle;
