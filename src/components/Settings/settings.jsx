import React from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";
import styles from "./settings.module.css";
import Profile from "./details/Profile/main.jsx";
import Main from "./details/Main/main.jsx";


function Dashboard() {
  const location = useLocation();

  if (location.pathname === "/settings" || location.pathname === "/settings/") {
    return <Navigate to="/settings/main" replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_box}>
        <div className={styles.title}>
            <h4>Настройки</h4>
          </div>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.card_nav}>
              <NavLink
                to="/settings/main"
                className={({ isActive }) =>
                  [styles.card_nav_link, isActive ? styles.active : ""].join(" ")
                }
              >
                Основные
              </NavLink>
              <NavLink
                to="/settings/profile"
                className={({ isActive }) =>
                  [styles.card_nav_link, isActive ? styles.active : ""].join(" ")
                }
              >
                Профиль
              </NavLink>
            </div>

            <div className={styles.card_content}>
              {location.pathname === "/settings/main" && <Main />}
              {location.pathname === "/settings/profile" && <Profile />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
