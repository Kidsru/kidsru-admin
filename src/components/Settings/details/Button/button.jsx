import React from "react";
import styles from "./button.module.css";

function Button({ text, type = "button", ...rest }) {
  return (
    <button type={type} className={styles.button} {...rest}>
      {text}
    </button>
  );
}

export default Button;
