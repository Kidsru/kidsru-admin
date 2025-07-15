import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import Button from "../../SubmitButton/button.jsx";
import EditorButton from "../../EditorButton/editorButton.jsx";
import { ReactComponent as UploadIcon } from "../../../../assets/icon/upload.svg";

function LoadImg({ onImageChange }) {
  const [img, setImg] = useState(null); // { file, url }
  const [showSubmit, setShowSubmit] = useState(true);
  const [dragActive, setDragActive] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const fileInputRef = useRef();

  const isActive = Boolean(img);

  useEffect(() => {
    if (confirmed && img && onImageChange) {
      onImageChange(img);
    } else if (!confirmed && onImageChange) {
      onImageChange(null);
    }
  }, [img, confirmed, onImageChange]);

  const validateAndSetImage = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/bmp",
    ];
    const maxSize = 5 * 1024 * 1024;

    if (!file) return;

    if (!validTypes.includes(file.type)) {
      alert("❌ Принимаются только файлы JPEG, PNG, WEBP, GIF или BMP.");
      return;
    }

    if (file.size > maxSize) {
      alert("❌ Размер файла не должен превышать 5 МБ.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const imgEl = new Image();
      imgEl.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const size = 1024;
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");

          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, size, size);

          const scale = Math.min(size / imgEl.width, size / imgEl.height);
          const x = (size - imgEl.width * scale) / 2;
          const y = (size - imgEl.height * scale) / 2;

          ctx.drawImage(imgEl, x, y, imgEl.width * scale, imgEl.height * scale);

          canvas.toBlob((blob) => {
            if (!blob) {
                alert("Ошибка: Не удалось обработать изображение.");
              return;
            }
            const resizedFile = new File([blob], file.name, {
              type: file.type,
            });
            const imageUrl = URL.createObjectURL(blob);
            setImg({ file: resizedFile, url: imageUrl });
            setShowSubmit(true);
            setConfirmed(false);
          }, file.type);
        } catch (err) {
            alert("Ошибка: Не удалось обработать изображение на холсте.");
          console.error(err);
        }
      };

      imgEl.onerror = () => alert("❌ Не удалось загрузить изображение.");
      imgEl.src = event.target.result;
    };

    reader.onerror = () => alert("❌ Ошибка при чтении файла.");
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateAndSetImage(file);
  };

  const handleEdit = () => fileInputRef.current?.click();

  const handleDelete = () => {
    setImg(null);
    setShowSubmit(true);
    setConfirmed(false);
    fileInputRef.current.value = "";
  };

  const handleDownload = () => {
    if (!img) return;
    const link = document.createElement("a");
    link.href = img.url;
    const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
    link.download = `avatar_image (${formattedDate}).${
      img.file.type.split("/")[1]
    }`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmitClick = () => {
    setShowSubmit(false);
    setConfirmed(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetImage(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <div className={styles.title}>
          Загрузите фотографию профиля <span>*</span>
        </div>
        <div className={styles.subtitle}>
          Пожалуйста, загрузите файл в формате jpeg, png и убедитесь, что размер
          файла не превышает 5 МБ.
        </div>
      </div>

      <div className={styles.img_edior}>
        <div
          className={`${styles.img_wrapper}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {img ? (
            <img
              className={`${styles.img_pw} ${
                dragActive ? styles.drag_active : ""
              }`}
              src={img.url}
              alt="Avatar"
            />
          ) : (
            <label
              className={`${styles.upload_wrapper} ${
                dragActive ? styles.drag_active : ""
              }`}
              onClick={handleEdit}
            >
              <UploadIcon className={styles.upload_icon} />
              <p className={styles.upload_text}>Перетащите файл или выберите</p>
              <div className={styles.upload_card}>Выбрать файл</div>
            </label>
          )}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif,image/bmp"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        <div className={styles.edior_wrapper}>
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

      {showSubmit && (
        <div className={styles.submit_wrapper}>
          <Button text="Готово" type="button" onClick={handleSubmitClick} />
        </div>
      )}
    </div>
  );
}

export default LoadImg;
