import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import Video from "./details/video.jsx";
import SubmitButton from "../../SubmitButton/button.jsx";


function LoadMedia({
  video_1,
  format_1,
  poster_1,
  video_2,
  format_2,
  poster_2,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <h4 className={styles.title}>
          Загрузите видео <span>*</span>
        </h4>
        <p className={styles.subtitle}>
          Пожалуйста, загрузите файл в формате mp4, webM и убедитесь, что размер
          файла не превышает 5 МБ.
        </p>
      </div>
      <div className={styles.video_wrapper}>
        <Video
          title={"Начальное видео"}
          poster={poster_1}
          load={video_1}
          format={format_1}
        />
        <div className={styles.video_center_line}>&nbsp;</div>
        <Video
          title={"Конечное видео"}
          poster={poster_2}
          load={video_2}
          format={format_2}
        />
      </div>
      <div className={styles.submit_wrapper}>
        <SubmitButton type="button" text="Готово" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default LoadMedia;
