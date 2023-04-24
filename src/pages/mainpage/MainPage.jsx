import React from "react";
import CategoryBoard from "@/components/molecules/category_board/CategoryBoard";
import RandomPage from "../randompage/RandomPage";
import BottomBar from "@/components/molecules/bottom_bar/BottomBar";

export default function MainPage() {
  return (
    <div>
      <BottomBar />
      <hr />
      <RandomPage />
      <hr />
      <p>Bar Qui</p>
      <p>원하시는 술을 골라보세요!</p>
      <div>주종별 & 추천별 버튼 공간</div>
      <CategoryBoard />
    </div>
  );
}
