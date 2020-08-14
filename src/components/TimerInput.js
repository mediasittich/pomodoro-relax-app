import React from "react";

const TimerInput = ({ timeSet, handleUp, handleDown }) => {
  return (
    <div>
      <button onClick={handleUp}>+</button>
      <input type="number" value={timeSet / 60} readOnly />
      <button onClick={handleDown}>-</button>
    </div>
  );
};

export default TimerInput;
