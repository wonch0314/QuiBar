import React, { useState } from "react";
import styles from "./TasteBoard.module.css";
import Board from "../../atoms/Board/Board.jsx";
import Slider from "../../atoms/Slider/Slider";
import { useNavigate } from "react-router-dom";

const alcOptions = {
  title: "알콜 도수",
  options: ["도수낮음", "도수중간", "도수높음"],
};
const tasteOptions = { title: "맛 옵션", options: ["새콤", "달콤", "쌉쌀", "짭짤"] };
const subOptions = {
  title: "서브 옵션",
  options: ["커피", "너티", "초코", "과일", "허브", "생강", "청량", "따뜻"],
};

export default function TasteBoard() {
  const [alc, setAlc] = useState(0);
  const [taste, setTaste] = useState([]);
  const [sub, setSub] = useState([]);
  const navigate = useNavigate();
  const onClick = () => {
    const data = [...taste, ...sub, alcOptions.options[alc]];
    navigate("/cocktail", { state: { type: 1, data } });
  };

  return (
    <div className={styles.frame}>
      <Slider data={alcOptions} handler={setAlc} value={alc} />
      <Board data={tasteOptions} handler={setTaste} />
      <Board data={subOptions} handler={setSub} />
      <button className={styles.myBtn} onClick={onClick}>
        검색
      </button>
    </div>
  );
}
