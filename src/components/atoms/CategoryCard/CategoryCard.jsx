import React from "react";
import styles from "./CategoryCard.module.css";
import sample from "@/assets/category/gin.png";

export default function CategoryCard({ name, color }) {
  const [topName, botName] = name.split(" ");
  const onCardClick = () => {
    alert(name);
  };

  return (
    <div
      className={styles.frame}
      onClick={() => {
        onCardClick();
      }}
    >
      <div className={styles.leftArea}>
        <div className={`${color} ${styles.bar}`} />
        <p className={styles.name}>{topName}</p>
        <p className={styles.name}>{botName}</p>
      </div>
      <div className="h-[100px]">
        <img className={styles.myImg} src={sample} />
      </div>
    </div>
  );
}
