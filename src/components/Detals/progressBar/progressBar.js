import styles from "./menuBar.module.css";

const ProgressBar = ({ percent, progressText, width }) => {
  const progressPercentage = Math.round(percent); 

  return (
    <div style={{width:width ? "100%" : "140px"}} className={styles.progress_wrapper}>
      <div className={styles.progress_bar_bg}>
        <div
          className={styles.progress_bar_fill}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {progressText && (
        <div className={styles.progress_text}>
          {progressPercentage}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
