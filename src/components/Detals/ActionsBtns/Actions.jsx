import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiArrowUpRightBold } from "react-icons/pi";
import styles from "./Actions.module.css";

function Actions({ onView, onDelete, onEdit, hideView }) {
  return (
    <div className={styles.wrapper}>
      {!hideView && <button onClick={onView} className={`${styles.ActionsBtn} ${styles.arrow}`}><PiArrowUpRightBold></PiArrowUpRightBold></button>}
      <button onClick={onEdit} className={`${styles.ActionsBtn} ${styles.edit}`}><MdOutlineEdit /></button>
      <button onClick={onDelete} className={`${styles.ActionsBtn} ${styles.delete}`}><RiDeleteBin6Line /></button>
    </div>
  );
}

export default Actions;
