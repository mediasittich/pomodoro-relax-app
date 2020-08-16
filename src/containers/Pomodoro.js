import React, { useState, useEffect } from "react";
import TimerInput from "../components/TimerInput";
import ControlButton from "../components/ControlButton";

import { Container, Row, Col } from "react-bootstrap";

import TimerDisplay from "../components/TimerDisplay";
import DisplayReducingCircle from "../components/DisplayReducingCircle";

import "./Pomodoro.css";
const PomodoroApp = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(minutes * 60);
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  // const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  // Setting the Timer
  const handleUp = () => {
    setMinutes(minutes + 1 * 60);
  };
  const handleDown = () => {
    setMinutes(minutes - 1 * 60);
  };
  // Control the Timer
  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(seconds);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
    } else if (!isActive && secondsLeft !== 0) {
      clearInterval(interval);
    }
    // console.log(seconds);
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  return (
    <div className="app pomodoro-app">
      {/* <div>time left</div> */}

      <Container>
        <Row className="justify-content-center pomodoro-settings">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <p className="lead">Session length</p>
            <TimerInput
              timeSet={seconds}
              handleUp={handleUp}
              handleDown={handleDown}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <p className="lead">Break length</p>
            <TimerInput
              timeSet={seconds}
              handleUp={handleUp}
              handleDown={handleDown}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <DisplayReducingCircle time={seconds} timeremaining={secondsLeft} />
        </Row>
        <Row className="justify-content-center mt-3">
          <ControlButton
            title={isActive ? "pause" : "start"}
            action={toggleTimer}
          />
          <ControlButton title="reset" action={resetTimer} />
        </Row>
      </Container>
    </div>
  );
};

export default PomodoroApp;
