import React from "react";

import { Button } from "react-bootstrap";

const ControlButton = ({ title, action }) => {
  return <Button onClick={action}>{title}</Button>;
};

export default ControlButton;
