import React from "react";
import { Container } from "react-bootstrap";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={`page ${styles.page}`}>
      <Container className="text-center">
        <h1>Cover your page.</h1>
        <p className="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
      </Container>
    </main>
  );
};

export default Home;
