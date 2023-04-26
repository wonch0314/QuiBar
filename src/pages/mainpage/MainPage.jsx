import React, { useEffect, useState } from "react";
import CategoryBoard from "@/components/molecules/category_board/CategoryBoard";
import TasteBoard from "@/components/molecules/TasteBoard/TasteBoard";
import styles from "./MainPage.module.css";

export default function MainPage() {
  const [side, setSide] = useState(0);

  const onClick = (side) => {
    const dict = {
      0: "alc",
      1: "taste",
    };
    setSide((prev) => {
      const prevBtn = document.querySelector(`#${dict[prev]}`);
      const newBtn = document.querySelector(`#${dict[side]}`);
      prevBtn.classList.remove(`${styles.picked}`);
      newBtn.classList.add(`${styles.picked}`);
      return side;
    });
  };

  useEffect(() => {
    setSide(0);
    document.querySelector("#alc").classList.add(`${styles.picked}`);
    document.querySelector("#taste").classList.remove(`${styles.picked}`);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-6">
      <span className={styles.logo}>QUI BAR</span>
      <div className="my-7 flex flex-col">
        <span className={styles.describe}>원하시는 술을</span>
        <span className={styles.describe}>골라보세요</span>
      </div>
      <div className={styles.btnFrame}>
        <button id={"alc"} className={styles.myBtn} onClick={() => onClick(0)}>
          주종별
        </button>
        <button id={"taste"} className={styles.myBtn} onClick={() => onClick(1)}>
          취향별
        </button>
      </div>

      {side === 0 && <CategoryBoard />}
      {side === 1 && <TasteBoard />}
    </div>
  );
}
