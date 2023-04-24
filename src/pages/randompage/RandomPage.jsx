import React from "react";
import { bartender } from "@/assets";
import AlcCard from "@/components/atoms/AlcCard/AlcCard";
import styles from "./RandomPage.module.css";

export default function RandomPage() {
  return (
    <div className={styles.frame}>
      <p>RandomPage</p>
      <p>듀근듀근 랜덤박스~</p>
      <img className={styles.myImg} src={bartender} />
      <p>손님, 주문하신 술입니다.</p>
      <AlcCard />
    </div>
  );
}
