import React from "react";
import styles from "./CategoryCard.module.css";
import sample from "@/assets/category/gin.png";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category, name, color, imgUrl }) {
  const [topName, botName] = name.split(" ");
  const navigate = useNavigate();
  const extra_name = ["이봐 술섞개", "늘 마시던걸로 한잔주게!"];
  const onCardClick = () => {
    navigate("/cocktail", { state: { type: 0, data: category } });
  };
  console.log(imgUrl);

  return (
    <div className={styles.frame} onClick={onCardClick}>
      <div className={styles.leftArea}>
        <div className={`${color} ${styles.bar}`} />
        <p className={styles.name}>{name === "extra" ? extra_name[0] : topName}</p>
        <p className={styles.name}>{name === "extra" ? extra_name[1] : botName}</p>
        <p className={styles.special}>{name === "extra" ? "! 무조건 마셔야합니다. !" : ""}</p>
      </div>
      <div className="h-[100px]">
        <img className={styles.myImg} src={imgUrl} />
      </div>
    </div>
  );
}
