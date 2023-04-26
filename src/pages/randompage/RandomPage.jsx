import React from "react";
import { bartender } from "@/assets";
import AlcCard from "@/components/atoms/AlcCard/AlcCard";
import styles from "./RandomPage.module.css";
import { useEffect } from "react";
import cocktailData from "@/assets/cocktail_list.json";
import { useNavigate } from "react-router-dom";

const getRandom = () => {
  const keys = Object.keys(cocktailData);
  const key = keys[Math.floor(Math.random() * keys.length)];

  const alcs = cocktailData[key];
  const alc = alcs[Math.floor(Math.random() * alcs.length)];
  return alc;
};

export default function RandomPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const alc = getRandom();

  return (
    <>
      <button className={styles.myBtn} onClick={() => navigate("/main")}>
        홈으로
      </button>
      <div className={styles.frame}>
        <p className="text-[64px] mb-[50px]">듀근듀근 랜덤박스~</p>
        <img className={styles.myImg} src={bartender} />
        <p className="text-[36px] mb-[50px]">손님, 주문하신 술입니다.</p>
        <AlcCard data={alc} />
      </div>
    </>
  );
}
