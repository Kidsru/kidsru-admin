import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import { navbar } from "../../utils/navbar";
import NavBar from "../NavBar/NavBar";
import "./layout.css"



const Layout = () => {
  const location = useLocation()
  const currentPath = location.pathname;
  const currentRoute = navbar.find(route => route.path === currentPath);
  const isSidebarHidden = currentRoute && currentRoute.hidden === true;

  return (
    <div className="layout">
      <div className="sideBar">{!isSidebarHidden && <Sidebar />}</div>
      <div className="content">
        <NavBar />
        <div style={{marginTop:"85px", padding: "30px"}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;