import React, { useState } from "react";
import { useAnimationFrame } from "../hooks/hooks";

import TimerInput from "../components/TimerInput";
import ControlButton from "../components/ControlButton";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

import DisplayReducingCircle from "../components/DisplayReducingCircle";

import "./Meditate.css";

const MeditateApp = () => {
  const [duration, setDuration] = useState(10 * 60 * 1000);
  const [show, setShow] = useState(false);

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="app meditation-app">
      <Container className="h-100 d-flex flex-column justify-content-center">
        <Row className="justify-content-center meditation-settings">
          <Button variant="primary" onClick={handleShow}>
            Settings
          </Button>
        </Row>
        <Row className="justify-content-center meditation-settings">
          <Col sm={4}>
            <TimerInput
              timeSet={duration / 60 / 1000}
              handleUp={handleUp}
              handleDown={handleDown}
            />
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col xs={12} md={8} lg={6}>
            <DisplayReducingCircle time={duration} timeremaining={timeLeft} />
          </Col>
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
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="meditation-timer-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="meditation-timer-modal-title">
            Meditation Timer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={8} lg={4} className="mx-auto">
                <div>Duration</div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MeditateApp;
