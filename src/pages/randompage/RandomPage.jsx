import React from "react";
import { bartender } from "@/assets";
import AlcCard from "../../atoms/AlcCard/AlcCard";

export default function RandomPage() {
  return (
    <>
      <p>RandomPage</p>
      <p>듀근듀근 랜덤박스~</p>
      <img src={bartender} />
      <p>손님, 주문하신 술입니다.</p>
      <AlcCard />
    </>
  );
}
