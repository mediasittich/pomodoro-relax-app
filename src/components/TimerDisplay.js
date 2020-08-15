import React from "react";

import "./TimerDisplay.css";

const TimerDisplay = ({ children }) => {
  return <div className="display">{children}</div>;
};

export default TimerDisplay;
