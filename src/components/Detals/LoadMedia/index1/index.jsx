import styles from "./index.module.css";
import Button from "../../SubmitButton/button.jsx";
import EditorButton from "../../EditorButton/editorButton.jsx";
import { ReactComponent as UploadIcon } from "../../../../assets/icon/upload.svg";
import { useFastLoadImg } from "./useFastLoadImg.js";

function FastLoadImg({ onImageChange, src = null }) {
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
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <h4 className={styles.title}>
          Загрузите фотографию профиля <span>*</span>
        </h4>
        <p className={styles.subtitle}>
          Пожалуйста, загрузите файл в формате jpeg, png и убедитесь, что размер
          файла не превышает 5 МБ.
        </p>
      </div>

      <div className={styles.img_edior}>
        <div
          className={styles.img_wrapper}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {img?.url ? (
            <img
              className={`${styles.img_pw} ${dragActive ? styles.drag_active : ""}`}
              src={img.url}
              alt="Аватар"
            />
          ) : (
            <label
              onClick={handleEdit}
              className={`${styles.upload_wrapper} ${dragActive ? styles.drag_active : ""}`}
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

        <div className={styles.edior_wrapper}>
          <EditorButton type="edit" active={isActive} text={true} onClick={handleEdit} />
          <EditorButton type="download" active={isActive} text={true} onClick={handleDownload} />
          <EditorButton type="delete" active={isActive} text={true} onClick={handleDelete} />
        </div>
      </div>

      {showSubmit && (
        <div className={styles.submit_wrapper}>
          <Button text="Готово" type="button" onClick={handleSubmitClick} />
        </div>
      )}
    </div>
  );
}

export default FastLoadImg;
