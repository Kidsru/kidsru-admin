import styles from "./index.module.css";
import Button from "../../SubmitButton/button.jsx";
import EditorButton from "../../EditorButton/resEditorButton.jsx";
import { ReactComponent as UploadIcon } from "../../../../assets/icon/upload.svg";
import { useFastLoadImg } from "./useFastLoadImg.js";

function FastLoadImg({
  title,
  subtitle,
  width,
  imgWidth,
  imgheight,
  gap,
  textarea,
  textareaTitle,
  textareaPlaceholder,
  textareaValue,
  onImageChange,
  src = null,
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
    <div
      className={styles.wrapper}
      style={{ width: `${width}`, gap: `${gap}` }}
    >
      <div className={styles.title_wrapper}>
        <h4 className={styles.title}>
          {title} <span>*</span>
        </h4>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.img_edior} style={{ gap: `${gap}` }}>
        <div className={styles.edior_wrapper}>
          <div className={styles.edior_item}>
            <EditorButton
              type="edit"
              active={isActive}
              text={true}
              onClick={handleEdit}
            />
          </div>
          <div className={styles.edior_item}>
            <EditorButton
              type="download"
              active={isActive}
              text={true}
              onClick={handleDownload}
            />
          </div>
          <div className={styles.edior_item}>
            <EditorButton
              type="delete"
              active={isActive}
              text={true}
              onClick={handleDelete}
            />
          </div>
        </div>
        <div
          className={styles.img_wrapper}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{ width: `${imgWidth}`, height: `${imgheight}` }}
        >
          {img?.url ? (
            <img
              className={`${styles.img_pw} ${
                dragActive ? styles.drag_active : ""
              }`}
              src={img.url}
              alt="Аватар"
              style={{ width: `${imgWidth}`, height: `${imgheight}` }}
            />
          ) : (
            <label
              onClick={handleEdit}
              style={{ width: `${imgWidth}`, height: `${imgheight}` }}
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
      </div>
      {textarea && (
        <div className={styles.textarea}>
          <h4>{textareaTitle}</h4>
          <textarea placeholder={textareaPlaceholder}>{textareaValue}</textarea>
        </div>
      )}
      {showSubmit && (
        <div className={styles.submit_wrapper}>
          <Button type="button" text="Готово" style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
}

export default FastLoadImg;
