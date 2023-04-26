import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AlcCard from "@/components/atoms/AlcCard/AlcCard.jsx";
import styles from "./CocktailPage.module.css";
import cocktail from "@/assets/cocktail_list.json";

const getTaste = (taste) => {
  const retList = [];
  Object.keys(cocktail).forEach((key) => {
    cocktail[`${key}`].forEach((alc) => {
      const { tag } = alc;
      let flag = 0;
      taste.forEach((t) => {
        if (tag.includes(t)) {
          flag = 1;
        }
      });
      flag === 1 && retList.push(alc);
    });
  });
  console.log(retList);
  return retList;
};

export default function CocktailPage() {
  const { state } = useLocation();
  const { type, data } = state;
  let alcList;
  let top;

  const navigate = useNavigate();
  if (type === 0) {
    alcList = cocktail[data];
    top = `${data.toUpperCase()} 베이스 칵테일`;
  } else {
    alcList = getTaste(data);
    top = "취향에 맞는 칵테일";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <button className={styles.myBtn} onClick={() => navigate("/main")}>
        돌아가기
      </button>
      <p className="my-[48px] text-4xl text-center text-blue-300">{top}</p>
      {alcList.map((alc, ind) => {
        return <AlcCard data={alc} key={ind} />;
      })}
    </div>
  );
}
