import React from "react";
import styles from "./input.module.css";

function Input({ text, type, plesholder, value, onChange, name }) {
  return (
    <label className={styles.wrapper}>
      <p className={styles.text}>{text}</p>
      <input
        type={type}
        name={name}
        placeholder={plesholder}
        className={styles.input}
        value={value}
        onChange={onChange}
        autoComplete="off"
        readOnly
        onFocus={(e) => e.target.removeAttribute("readOnly")}
      />
    </label>
  );
}

export default Input;
