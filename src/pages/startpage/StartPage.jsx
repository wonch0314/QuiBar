import React from "react";
import styles from "./StartPage.module.css";
import { martini } from "@/assets/glass/index.js";
import { useNavigate } from "react-router-dom";

const content = "퀴바를 여행하는 히치하이커들을 위한 안내서";

export default function StartPage() {
  const navigate = useNavigate();

  const enterBtn = () => {
    alert("환영합니다!");
    navigate("./main");
  };

  return (
    <div className="p-4">
      <div className={styles.frame}>
        {/* 이름 */}
        <div>
          <p className={styles.name1}>Bar</p>
          <p className={styles.name2}>Qui</p>
        </div>
        {/* 글라스 이미지 */}
        <img className={styles.myImg} src={martini} />
        {/* 서브 타이틀 & 설명 */}
        <span className={styles.subtitle}>Cocktail | Masitnun Anzu</span>
        <div className={styles.content}>{content}</div>
        <button onClick={enterBtn} className={styles.btn}>
          입장
        </button>

        <span className={styles.saying}>
          An intelligent man is sometimes forced to be drunk to spend time with his fools
          <br />
          -Ernest Hemingway
        </span>
      </div>
    </div>
  );
}
