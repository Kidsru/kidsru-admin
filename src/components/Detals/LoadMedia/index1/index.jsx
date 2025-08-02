import styles from "./index.module.css";
import Button from "../../SubmitButton/button.jsx";
import EditorButton from "../../EditorButton/editorButton.jsx";
import { ReactComponent as UploadIcon } from "../../../../assets/icon/upload.svg";
import { useFastLoadImg } from "./useFastLoadImg.js";

function FastLoadImg({ onImageChange, size, title, src, subtitle = null }) {
  const {
    img,
    isActive,
    dragActive,
    showSubmit,
    fileInputRef,
    handleFileChange,
    handleEdit,
    handleDelete,
    handleDownload,
    handleSubmitClick,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    loading,
  } = useFastLoadImg(src, onImageChange);

  return (
    <div
      className={styles.wrapper}
      style={{ width: size?.wrapper, gap: size?.gap }}
    >
      <div className={styles.title_wrapper}>
        <h4 className={styles.title}>
          {title} <span>*</span>
        </h4>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.img_edior}>
        <div
          style={{ width: size?.image, height: size?.image }}
          className={styles.img_wrapper}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {img?.url ? (
            <img
              style={{ width: size?.image, height: size?.image }}
              className={`${styles.img_pw} ${
                dragActive ? styles.drag_active : ""
              }`}
              src={img.url}
              alt="Аватар"
            />
          ) : (
            <label
              style={{ width: size?.image, height: size?.image }}
              onClick={handleEdit}
              className={`${styles.upload_wrapper} ${
                dragActive ? styles.drag_active : ""
              }`}
            >
              <UploadIcon className={styles.upload_icon} />
              <p className={styles.upload_text}>Перетащите файл или выберите</p>
              <div className={styles.upload_card}>Выбрать файл</div>
            </label>
          )}
          <input
            type="file"
            accept="image/jpeg,image/png"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        <div className={styles.edior_wrapper} style={{ height: size?.image }}>
          <EditorButton
            type="edit"
            active={isActive}
            text={true}
            onClick={handleEdit}
          />
          <EditorButton
            type="download"
            active={isActive}
            text={true}
            onClick={handleDownload}
          />
          <EditorButton
            type="delete"
            active={isActive}
            text={true}
            onClick={handleDelete}
          />
        </div>
      </div>

      {showSubmit && img?.url && (
        <div className={styles.submit_wrapper}>
          <Button
            text={loading ? "Загрузка..." : "Готово"}
            type="button"
            onClick={handleSubmitClick}
            disabled={loading}
          />
        </div>
      )}
    </div>
  );
}

export default FastLoadImg;
