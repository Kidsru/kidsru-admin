import styles from "./card.module.css";
import Button from "../../../../../Detals/SubmitButton/button.jsx";
import EditorButton from "../../../../../Detals/EditorButton/editorButton.jsx";
import { ReactComponent as UploadIcon } from "../../../../../../assets/icon/upload.svg";
import { ReactComponent as CloseIcon } from "../../../../../../assets/icon/close.svg";
import { useFastLoadImg } from "./useFastLoadImg.js";

function FastLoadImg({
  onImageChange,
  width,
  card,
  title,
  textarea,
  textareaContent,
  src = null,
  onRemove,
}) {
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
  } = useFastLoadImg(src, onImageChange);

  return (
    <div className={styles.wrapper} style={{ width: `${card}` }}>
      <button className={styles.remove_card} onClick={onRemove}>
        <CloseIcon />
      </button>
      <h4 className={styles.title}>{title}</h4>
      <div
        className={styles.img_wrapper}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {img?.url ? (
          <img
            className={`${styles.img_pw} ${
              dragActive ? styles.drag_active : ""
            }`}
            src={img.url}
            alt="Аватар"
            style={{
              width: `${width}`,
              height: `${width}`,
            }}
          />
        ) : (
          <label
            onClick={handleEdit}
            className={`${styles.upload_wrapper} ${
              dragActive ? styles.drag_active : ""
            }`}
            style={{ width: `${width}`, height: `${width}` }}
          >
            <UploadIcon className={styles.upload_icon} />
            <p className={styles.upload_text}>Перетащите файл или выберите</p>
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
      <div className={styles.edior_wrapper}>
        <EditorButton
          type="edit"
          active={isActive}
          text={false}
          onClick={handleEdit}
        />
        <EditorButton
          type="download"
          active={isActive}
          text={false}
          onClick={handleDownload}
        />
        <EditorButton
          type="delete"
          active={isActive}
          text={false}
          onClick={handleDelete}
        />
      </div>
      {textarea && (
        <div className={styles.textarea}>
          <h4>{textareaContent[0].title}</h4>
          <textarea placeholder={textareaContent[0].placeholder}>
            {textareaContent[0].value}
          </textarea>
        </div>
      )}
    </div>
  );
}

export default FastLoadImg;
