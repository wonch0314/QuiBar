import React from "react";
import CategoryCard from "../../atoms/CategoryCard/CategoryCard";
import styles from "./CategoryBoard.module.css";

const category = [
  "보드카 베이스",
  "진 베이스",
  "럼 베이스",
  "데킬라 베이스",
  "위스키 베이스",
  "브랜디 베이스",
  "리큐르 베이스",
  "논 알코올",
];
const color = [
  "bg-[#1B79FF]",
  "bg-[#7936AD]",
  "bg-[#FD9B19]",
  "bg-[#FC3841]",
  "bg-[#FFEA2E]",
  "bg-[#72FF50]",
  "bg-[#118675]",
  "bg-[#AFAFAF]",
];

export default function CategoryBoard() {
  return (
    <>
      <p>Category</p>
      <div className={styles.frame}>
        {color.map((_, ind) => {
          return <CategoryCard name={category[ind]} color={color[ind]} key={ind} />;
        })}
      </div>

      <CategoryCard name="이봐 술섞개" color="bg-[#FFFFFF]" />
    </>
  );
}
