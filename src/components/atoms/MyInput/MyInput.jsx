import React from "react";
import styles from "./MyInput.module.css";

export default function MyInput() {
  return (
    <>
      MyInput
      <div className={styles.frame}>
        <input className={styles.myInput} type="text" placeholder="Search" />
      </div>
    </>
  );
}
