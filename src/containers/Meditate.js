import React, { useState, useRef, useEffect } from "react";
import { useAnimationFrame } from "../hooks/hooks";

import TimerInput from "../components/TimerInput";
import ControlButton from "../components/ControlButton";
import { Container, Row, Col } from "react-bootstrap";

// import DisplayReducingCircle from "../components/DisplayReducingCircle";

import "./Meditate.css";

const MeditateApp = () => {
  const [duration, setDuration] = useState(10 * 60 * 1000);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useAnimationFrame(
    duration,
    isActive,
    isPaused
  );

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

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
    setTimeLeft(duration);
  };
  const pauseTimer = () => {
    setIsActive(false);
    setIsPaused(true);
  };
  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
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
        <p>duration: {duration}</p>
        <p>is active: {isActive.toString()}</p>
        <p>
          timeLeft:
          {displayFormat(calculateTimeLeft(timeLeft).minutes)}:
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
          <ControlButton title="pause" action={() => pauseTimer()} />
          <ControlButton title="reset" action={() => resetTimer()} />
        </Row>
      </Container>
    </div>
  );
};

export default MeditateApp;
