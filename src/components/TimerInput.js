import React from "react";
import { InputGroup, Form } from "react-bootstrap";

const TimerInput = ({ timeSet, handleUp, handleDown }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text onClick={handleUp}>+</InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control value={timeSet / 60} readOnly={true}></Form.Control>
      <InputGroup.Append>
        <InputGroup.Text onClick={handleDown}>-</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default TimerInput;
