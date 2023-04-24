import React from "react";
import CategoryBoard from "../../molecules/category_board/CategoryBoard";
import RandomPage from "../randompage/RandomPage";

export default function MainPage() {
  return (
    <div>
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
