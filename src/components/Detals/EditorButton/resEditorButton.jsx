import React from "react";
import styles from "./style.module.css";
import { ReactComponent as EditIcon } from "../../../assets/icon/edit.svg";
import { ReactComponent as DownloadIcon } from "../../../assets/icon/download.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icon/delete.svg";

function EditorButton({ type, active, text, onClick }) {
  const baseStyle = {
    width: text ? "100%" : "100%",
    cursor: active ? "pointer" : "not-allowed",
  };

  const getClass = () => {
    if (!active) return styles.res_no_active;
    if (type === "edit") return styles.res_edit;
    if (type === "download") return styles.res_download;
    if (type === "delete") return styles.res_delete;
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
      className={`${styles.res_button} ${getClass()}`}
      onClick={active ? onClick : undefined}
    >
      {getIcon()}
      {getText()}
    </button>
  );
}

export default EditorButton;
