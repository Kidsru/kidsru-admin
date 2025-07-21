import React from "react";
import styles from "./dashboard.module.css";
import { ReactComponent as DashboardIcon } from "../../assets/icon/dashboard_img.svg";

function Dashboard() {
  const isReady = false;

  return (
    <div className={styles.container}>
      {isReady ? (
        <div className={styles.launch_box}>Launch Ready...</div>
      ) : (
        <div className={styles.dev_box}>
          <div className={styles.title}>
            <h4>Дашборд</h4>
          </div>
          <div className={styles.content}>
            <div className={styles.content_icon_wrapper}>
              <DashboardIcon className={styles.content_icon} />
            </div>
            <div className={styles.content_text}>
              <p>В процессе разработки ...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
