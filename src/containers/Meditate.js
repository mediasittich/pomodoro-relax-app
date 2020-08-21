import React, { useState } from "react";
import { useAnimationFrame } from "../hooks/hooks";

import TimerInput from "../components/TimerInput";
import ControlButton from "../components/ControlButton";
import { Container, Row, Col } from "react-bootstrap";

import DisplayReducingCircle from "../components/DisplayReducingCircle";

import "./Meditate.css";

const MeditateApp = () => {
  const [duration, setDuration] = useState(10 * 60 * 1000);

  const [
    isRunning,
    timeLeft,
    startTimer,
    pauseTimer,
    resetTimer,
  ] = useAnimationFrame(duration);

  const handleUp = () => {
    if (duration < 60 * 60 * 1000) {
      setDuration(duration + 1 * 60 * 1000);
    }
  };
  const handleDown = () => {
    if (duration > 1 * 60 * 1000) {
      setDuration(duration - 1 * 60 * 1000);
    }
  };

  return (
    <div className="app meditation-app">
      <Container>
        <Row className="justify-content-center meditation-settings">
          <Col sm={4}>
            <TimerInput
              timeSet={duration / 60 / 1000}
              handleUp={handleUp}
              handleDown={handleDown}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <DisplayReducingCircle time={duration} timeremaining={timeLeft} />
        </Row>
        <Row className="justify-content-center mt-3">
          {!isRunning ? (
            <ControlButton title="start" action={() => startTimer()} />
          ) : (
            <ControlButton title="pause" action={() => pauseTimer()} />
          )}

          <ControlButton title="reset" action={() => resetTimer()} />
        </Row>
      </Container>
    </div>
  );
};

export default MeditateApp;
