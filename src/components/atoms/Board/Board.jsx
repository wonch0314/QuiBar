import React from "react";
import styles from "./Board.module.css";

export default function Board({ data, handler }) {
  const { title, options } = { ...data };

  const onClick = (option) => {
    const btn = document.querySelector(`#${option}`);
    btn.classList.toggle(`${styles.picked}`);

    handler((prev) => {
      if (prev.includes(option)) {
        return [...prev.filter((o) => o !== option)];
      } else {
        return [...prev, option];
      }
    });
  };

  return (
    <>
      <div>
        <p className={"text-3xl font-bold"}>{title}</p>
      </div>
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
}
