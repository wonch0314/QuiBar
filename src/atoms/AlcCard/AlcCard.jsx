import React from "react";
import styles from "./AlcCard.module.css";
import sample from "../../assets/glass/martini1.png";

export default function AlcCard() {
  return (
    <div className={styles.frame}>
      <div className={styles.imgArea}>
        <img src={sample} alt="" />
      </div>
      <div className={styles.textArea}>
        <p>asd</p>
        <p>asd</p>
      </div>
    </div>
  );
}
