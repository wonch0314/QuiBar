import React from "react";
import CategoryCard from "../../atoms/CategoryCard/CategoryCard";
import styles from "./CategoryBoard.module.css";
import {
  vodka,
  gin,
  rum,
  tequila,
  whiskey,
  brandy,
  liqueur,
  free,
} from "@/assets/category/index.js";

const data = {
  vodka: ["보드카 베이스", "bg-[#1B79FF]"],
  gin: ["진 베이스", "bg-[#7936AD]"],
  rum: ["럼 베이스", "bg-[#FD9B19]"],
  tequila: ["데킬라 베이스", "bg-[#FC3841]"],
  whiskey: ["위스키 베이스", "bg-[#FFEA2E]"],
  brandy: ["브랜디 베이스", "bg-[#72FF50]"],
  liqueur: ["리큐르 베이스", "bg-[#118675]"],
  free: ["논 알코올", "bg-[#AFAFAF]"],
};

const imgData = {
  vodka,
  gin,
  rum,
  tequila,
  whiskey,
  brandy,
  liqueur,
  free,
};

export default function CategoryBoard() {
  return (
    <>
      <div className={styles.frame}>
        {Object.keys(data).map((key, ind) => {
          const [name, color] = data[key];
          return (
            <CategoryCard
              category={key}
              name={name}
              color={color}
              key={ind}
              imgUrl={imgData[key]}
            />
          );
        })}
      </div>

      <CategoryCard category="extra" name="extra" color="bg-[#FFFFFF]" />
    </>
  );
}
