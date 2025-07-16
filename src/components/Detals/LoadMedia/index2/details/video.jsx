import { useState, useRef, useEffect } from "react";
import styles from "./video.module.css";
import EditorButton from "../../../EditorButton/editorButton.jsx";
import { ReactComponent as UploadIcon } from "../../../../../assets/icon/upload.svg";
import VideoPlayer from "./videoPlayer/videoPlayer.jsx";

function Video({ title, load, format, poster }) {
  const [video, setVideo] = useState(null); // { file?, url, formattedName? }
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();

  const getFormattedDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const validateAndSetVideo = (file) => {
    const validTypes = ["video/mp4", "video/webm"];
    const maxSize = 5 * 1024 * 1024;

    if (!file) return;
    if (!validTypes.includes(file.type)) {
      alert("❌ Только форматы MP4 и WebM поддерживаются.");
      return;
    }
    if (file.size > maxSize) {
      alert("❌ Размер файла не должен превышать 5MB.");
      return;
    }

    const formattedDate = getFormattedDate();
    const extension = file.name.split(".").pop();
    const formattedName = `video-${formattedDate}.${extension}`;
    const url = URL.createObjectURL(file);

    setVideo({ file, url, formattedName });
  };

  const validateUrlAndSetVideo = (url) => {
    const isValidVideoUrl = url.match(/^https?:.*\.(mp4|webm)(\?.*)?$/i);
    if (!isValidVideoUrl) return;
    const formattedDate = getFormattedDate();
    const extension = url.split(".").pop().split("?")[0];
    const formattedName = `video-${formattedDate}.${extension}`;
    setVideo({ url, formattedName });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateAndSetVideo(file);
  };

  const handleEdit = () => fileInputRef.current?.click();

  const handleDelete = () => {
    setVideo(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDownload = () => {
    if (!video?.url) return;
    const link = document.createElement("a");
    link.href = video.url;
    link.download = video.formattedName || "video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndSetVideo(file);
    } else {
      const text = e.dataTransfer.getData("text/plain");
      if (text) validateUrlAndSetVideo(text);
    }
  };

  useEffect(() => {
    if (load) setVideo({ url: load, formattedName: format });
  }, [load, format]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>

      <div
        className={`${styles.media_wrapper} ${
          dragActive ? styles.drag_active : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {video?.url ? (
          <VideoPlayer
            className={styles.video}
            src={video.url}
            poster={poster}
          />
        ) : (
          <div className={styles.upload_wrapper} onClick={handleEdit}>
            <UploadIcon className={styles.upload_icon} />
            <p className={styles.upload_text}>
              Перетащите файл сюда или выберите
            </p>
            <div className={styles.upload_card}>Выбрать файл</div>
          </div>
        )}

        <input
          type="file"
          accept="video/mp4,video/webm"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      <div className={styles.edior_wrapper}>
        <EditorButton
          type="edit"
          active={!!video?.url}
          text={false}
          onClick={handleEdit}
        />
        <EditorButton
          type="download"
          active={!!video?.url}
          text={false}
          onClick={handleDownload}
        />
        <EditorButton
          type="delete"
          active={!!video?.url}
          text={false}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

export default Video;