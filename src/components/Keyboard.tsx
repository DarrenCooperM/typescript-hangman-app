import React from "react";
import KEYS from "./Letters/Keys";
import styles from "./Letters/Keyboard.module.css";

export default function Keyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        return (
          <button className={`${styles.btn}`} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
