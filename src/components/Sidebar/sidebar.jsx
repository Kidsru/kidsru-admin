import { BsBellFill } from "react-icons/bs";
import { RiHomeFill } from "react-icons/ri";
import {
  FaUserFriends,
  FaChalkboardTeacher,
  FaElementor,
  FaUserCircle,
} from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { GiBrickWall } from "react-icons/gi";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
import ConstructorMap from "./constructorMap/index.jsx";

const Sidebar = ({ resize }) => {
  const [openUsers, setOpenUsers] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
  const [openBlocks, setOpenBlocks] = useState(false);
  const [openConstructor, setOpenConstructor] = useState(false);

  const navigate = useNavigate()

  function logout(navigate) {
    document.cookie = "access_token=; path=/; max-age=0";
    navigate("/auth");
    window.location.reload()
  }

  return (
    <div className={styles.sidebarWrapper} style={{ width: `${resize}px` }}>
      <div className={styles.sidebar} style={{ width: `${resize + 15}px` }}>
        <div className={styles.title}>
          <p>KIDS</p>
        </div>
        <div className={`${styles.menu} ${styles.topMenu}`}>
          <p className={styles.subtitle}>Главное меню</p>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <RiHomeFill className={styles.icon} />
            <p className={styles.menuText}>Дашборд</p>
          </NavLink>

          <NavLink
            to="/user"
            onClick={(e) => {
              setOpenUsers((prev) => !prev);
            }}
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <FaUserFriends className={styles.icon} />
            <p className={styles.menuText}>Пользователи</p>
            {openUsers ? (
              <IoIosArrowDown className={styles.arrowIcon} />
            ) : (
              <IoIosArrowForward className={styles.arrowIcon} />
            )}
          </NavLink>
          {openUsers && (
            <div className={styles.subList}>
              <NavLink
                to="/user/questionnaire"
                className={({ isActive }) =>
                  `${styles.subItem} ${isActive ? styles.active : ""}`
                }
              >
                <span className={styles.dot}></span>
                <p>Опросник</p>
              </NavLink>
            </div>
          )}

          <NavLink
            to="/mentors"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <FaChalkboardTeacher className={styles.icon} />
            <p className={styles.menuText}>Менторы</p>
          </NavLink>

          <NavLink
            to="/course"
            onClick={(e) => {
              setOpenCourse((prev) => !prev);
            }}
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <FaElementor className={styles.icon} />
            <p className={styles.menuText}>Курс</p>
            {openCourse ? (
              <IoIosArrowDown className={styles.arrowIcon} />
            ) : (
              <IoIosArrowForward className={styles.arrowIcon} />
            )}
          </NavLink>
          {openCourse && (
            <div className={styles.subList}>
              {["module", "block", "lesson", "game"].map((item) => (
                <NavLink
                  key={item}
                  to={`/course/${item}`}
                  className={({ isActive }) =>
                    `${styles.subItem} ${isActive ? styles.active : ""}`
                  }
                >
                  <span className={styles.dot}></span>
                  <p>
                    {item === "module"
                      ? "Модуль"
                      : item === "block"
                        ? "Блок"
                        : item === "lesson"
                          ? "Урок"
                          : "Игра"}
                  </p>
                </NavLink>
              ))}
            </div>
          )}

          <NavLink
            to="/mainBlocks"
            onClick={(e) => {
              setOpenBlocks((prev) => !prev);
            }}
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <GiBrickWall className={styles.icon} />
            <p className={styles.menuText}>Основные блоки</p>
            {openBlocks ? (
              <IoIosArrowDown className={styles.arrowIcon} />
            ) : (
              <IoIosArrowForward className={styles.arrowIcon} />
            )}
          </NavLink>
          {openBlocks && (
            <div className={styles.subList}>
              {[
                { to: "lessonMap", text: "Карта уроков" },
                { to: "dictionary", text: "Словарь" },
                { to: "achievements", text: "Достижения" },
              ].map(({ to, text }) => (
                <NavLink
                  key={to}
                  to={`/mainBlocks/${to}`}
                  className={({ isActive }) =>
                    `${styles.subItem} ${isActive ? styles.active : ""}`
                  }
                >
                  <span className={styles.dot}></span>
                  <p>{text}</p>
                </NavLink>
              ))}
            </div>
          )}

          <NavLink
            to="/constructor"
            onClick={(e) => {
              setOpenConstructor((prev) => !prev);
            }}
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <PiSquaresFourFill className={styles.icon} />
            <p className={styles.menuText}>Конструктор</p>
            {openConstructor ? (
              <IoIosArrowDown className={styles.arrowIcon} />
            ) : (
              <IoIosArrowForward className={styles.arrowIcon} />
            )}
          </NavLink>
          {openConstructor && <ConstructorMap />}
        </div>

        <div className={`${styles.menu} ${styles.bottomMenu}`}>
          <p className={styles.subtitle}>Общее</p>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <IoIosSettings className={styles.icon} />
            <p className={styles.menuText}>Настройки</p>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.active : ""}`
            }
          >
            <FaUserCircle className={styles.icon} />
            <p className={styles.menuText}>Профиль</p>
          </NavLink>
        </div>

        <div
          onClick={() => logout(navigate)}
          className={`${styles.menuItem} ${styles.logout}`}
        >
          <RxExit className={styles.icon} />
          <p className={styles.menuText}>Выйти</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
