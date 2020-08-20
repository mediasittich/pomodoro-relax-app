import React, { useState, useRef, useEffect } from "react";
import { useAnimationFrame } from "../hooks/hooks";

import TimerInput from "../components/TimerInput";
import ControlButton from "../components/ControlButton";
import { Container, Row, Col } from "react-bootstrap";

// import DisplayReducingCircle from "../components/DisplayReducingCircle";

import "./Meditate.css";

const MeditateApp = () => {
  const [duration, setDuration] = useState(3 * 60 * 1000);
  // const [isActive, setIsActive] = useState(false);
  // const [isRunning, setIsRunning] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);
  const [
    isRunning,
    elapsed,
    timeLeft,
    setTimeLeft,
    startTimer,
    resetTimer,
  ] = useAnimationFrame(duration);
  // const start = useAnimationFrame(isRunning);

  const handleUp = () => {
    if (duration < 60 * 60 * 1000) {
      setDuration(duration + 1 * 60 * 1000);
    }
  };
  const handleDown = () => {
    if (duration > 0) {
      setDuration(duration - 1 * 60 * 1000);
    }
  };

  const calculateTimeLeft = (difference) => {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  const displayFormat = (val) => ("0" + val).slice(-2);

  //
  // console.log(startTime);
  return (
    <div className="app meditation-app">
      <Container>
        <p>
          duration: {displayFormat(calculateTimeLeft(duration).minutes)}:
          {displayFormat(calculateTimeLeft(duration).seconds)}
        </p>
        <p>isRunning: {isRunning.toString()}</p>
        <p>
          {/* {elapsed} */}
          {displayFormat(calculateTimeLeft(elapsed).minutes)}:
          {displayFormat(calculateTimeLeft(elapsed).seconds)}
        </p>
        <p>
          timeLeft: {displayFormat(calculateTimeLeft(timeLeft).minutes)}:
          {displayFormat(calculateTimeLeft(timeLeft).seconds)}
        </p>

        <Row className="justify-content-center meditation-settings">
          <Col sm={4}>
            <TimerInput
              timeSet={duration / 60 / 1000}
              handleUp={handleUp}
              handleDown={handleDown}
            />
          </Col>
        </Row>
        {/* <Row className="justify-content-center">
          <DisplayReducingCircle time={seconds} timeremaining={''} />
        </Row> */}
        <Row className="justify-content-center mt-3">
          <ControlButton title="start" action={() => startTimer()} />
          {/* <ControlButton title="pause" action={() => pauseTimer()} /> */}
          <ControlButton title="reset" action={() => resetTimer()} />
        </Row>
      </Container>
    </div>
  );
};

export default MeditateApp;
