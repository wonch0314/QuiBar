import React from "react";
import styles from "./AlcCard.module.css";
import sample from "../../assets/glass/martini1.png";

export default function AlcCard() {
  return (
    <div className={styles.frame}>
      <div className={styles.imgArea}>
        <img className={styles.myImg} src={sample} alt="" />
      </div>
      <div className={styles.textArea}>
        <p className={styles.name}>루시안 블랙</p>
        <p className={styles.tag}>#달콤 # 쌀쌀</p>
      </div>
    </div>
  );
}
