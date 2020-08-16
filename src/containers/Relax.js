import React from "react";

import DisplaySplitCircle from "../components/DisplaySplitCircle";
import Circle from "../assets/image/circle.svg";
import styles from "./Relax.module.css";

const RelaxApp = () => {
  const totalTime = 7500;
  const breatheTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  let textInner = "";

  return (
    <div className={`app ${styles.relaxApp}`}>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <p className={styles.text}></p>
        <div className={styles.dotContainer}>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.conicCircle}>
          {/* <Circle /> */}
          <DisplaySplitCircle />
        </div>
      </div>
    </div>
  );
};

export default RelaxApp;
