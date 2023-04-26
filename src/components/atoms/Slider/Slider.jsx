import React from "react";
import styles from "./Slider.module.css";

export default function Slider({ data, value, handler }) {
  const { title, options } = data;
  return (
    <div>
      <div>
        <p className={"text-3xl font-bold"}>{title}</p>
      </div>
      <div className={styles.board}>
        <input
          className="w-full"
          type="range"
          min={0}
          max={2}
          step={1}
          value={value}
          onChange={(e) => handler(e.target.value)}
        />
        <div className="flex justify-between w-full">
          {options.map((option, ind) => {
            return <span key={ind}>{option}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
