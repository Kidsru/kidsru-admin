import { useState, useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import { navbar } from "../../utils/navbar";
import NavBar from "../NavBar/NavBar";
import styles from "./layout.module.css";
import Resizer from "../Detals/Resizer/resizer";

const STORAGE_KEY = "sidebarResizeWidth";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentRoute = navbar.find((route) => route.path === currentPath);
  const isSidebarHidden = currentRoute && currentRoute.hidden === true;

const getInitialResize = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const parsed = parseInt(stored);

  if (isNaN(parsed) || parsed < 265 || parsed > 580) {
    return 265;
  }

  return parsed;
};


  const [thisResize, setThisResize] = useState(getInitialResize);
  const isResizing = useRef(false);

  const startResize = () => {
    isResizing.current = true;
  };

  const stopResize = () => {
    isResizing.current = false;
  };

  const resizeWithX = (x) => {
    const newMargin = Math.min(580, Math.max(265, x - 15));
    setThisResize(newMargin);
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    resizeWithX(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isResizing.current || e.touches.length === 0) return;
    resizeWithX(e.touches[0].clientX);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, thisResize.toString());
  }, [thisResize]);

  return (
    <div
      className={styles.layout}
      onMouseMove={handleMouseMove}
      onMouseUp={stopResize}
      onMouseLeave={stopResize}
      onTouchMove={handleTouchMove}
      onTouchEnd={stopResize}
    >
      <div className={styles.sideBar}>
        {!isSidebarHidden && <Sidebar resize={thisResize} />}
        <Resizer
          onMouseDown={startResize}
          onTouchStart={startResize}
          style={{ marginLeft: `${thisResize}px` }}
        />
      </div>

      <div className={styles.content}>
        <NavBar resize={thisResize} />
        <div style={{ marginTop: "85px", padding: "30px"}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
