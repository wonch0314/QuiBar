import React from "react";
import styles from "./AlcCard.module.css";
import { glassList } from "@/assets/glass/index.js";

export default function AlcCard({ data }) {
  const { name, tag, glass } = data;
  return (
    <div className={styles.frame}>
      <div className={styles.imgArea}>
        <img className={styles.myImg} src={glassList[glass]} alt={glass} />
      </div>
      <div className={styles.textArea}>
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
      </div>
    </div>
  );
}
