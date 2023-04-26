import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AlcCard from "@/components/atoms/AlcCard/AlcCard.jsx";
import styles from "./CocktailPage.module.css";

export default function CocktailPage() {
  const { state } = useLocation();
  const { type, data } = state;

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <button className={styles.myBtn} onClick={() => navigate("/main")}>
        {"BACK"}
      </button>
      <p>{type} - CocktailPage</p>
      <p>{JSON.stringify(data)}</p>
      <AlcCard />
      <AlcCard />
      <AlcCard />
      <AlcCard />
    </div>
  );
}
