import React from "react";

const ControlButton = ({ title, action }) => {
  return (
    <div>
      <button onClick={action}>{title}</button>
    </div>
  );
};

export default ControlButton;
