import React from "react";
import styles from "./style.module.css";
import { ReactComponent as EditIcon } from "../../../assets/icon/edit.svg";
import { ReactComponent as DownloadIcon } from "../../../assets/icon/download.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icon/delete.svg";

function EditorButton({ type, active, text, onClick }) {
  const baseStyle = {
    width: text ? "126px" : "max-content",
    padding: text ? "15px" : "10px",
    cursor: active ? "pointer" : "not-allowed", // ko‘rsatkich holati
  };

  const getClass = () => {
    if (!active) return styles.no_active;
    if (type === "edit") return styles.edit;
    if (type === "download") return styles.download;
    if (type === "delete") return styles.delete;
  };

  const getText = () => {
    if (!text) return "";
    if (type === "edit") return "Изменить";
    if (type === "download") return "Скачать";
    if (type === "delete") return "Удалить";
  };

  const getIcon = () => {
    if (type === "edit") return <EditIcon />;
    if (type === "download") return <DownloadIcon />;
    if (type === "delete") return <DeleteIcon />;
  };

  return (
    <button
      type="button"
      style={baseStyle}
      className={`${styles.button} ${getClass()}`}
      onClick={active ? onClick : undefined}
    >
      {getText()} {getIcon()}
    </button>
  );
}

export default EditorButton;
