import React from "react";
import styles from "./TasteBoard.module.css";

const alcOptions = "도수높음 도수중간 도수낮음".split(" ");
const tasteOptions = { title: "맛 옵션", options: ["새콤", "달콤", "쌉쌀", "짭짤"] };
const subOptions = {
  title: "서브 옵션",
  options: ["커피", "너티", "초코", "과일", "허브", "생강", "청량", "따뜻"],
};

const Board = ({ data, pickHandler }) => {
  const { title, options } = { ...data };

  const onClick = (qwe) => {
    const btn = document.querySelector(`#${qwe}`);
    btn.classList.toggle(`${styles.picked}`);
  };

  return (
    <>
      <p className={"text-3xl font-bold"}>{title}</p>
      <div className={styles.board}>
        {options.map((option, ind) => {
          return (
            <button className={styles.item} id={option} key={ind} onClick={() => onClick(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default function TasteBoard() {
  return (
    <>
      TasteBoard
      <div className={styles.frame}>
        <div></div>
        <p>맛</p>
        <Board data={tasteOptions} />
        <Board data={subOptions} />
      </div>
    </>
  );
}
