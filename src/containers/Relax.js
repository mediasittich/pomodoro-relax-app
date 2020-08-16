import React from "react";

import DisplaySplitCircle from "../components/DisplaySplitCircle";
import styles from "./Relax.module.css";

const RelaxApp = () => {
  return (
    <div className={`app ${styles.relaxApp}`}>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <p className={styles.text}></p>
        <div className={styles.dotContainer}>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.conicCircle}>
          <DisplaySplitCircle />
        </div>
      </div>
    </div>
  );
};

export default RelaxApp;
