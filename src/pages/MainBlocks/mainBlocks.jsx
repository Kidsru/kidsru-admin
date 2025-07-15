import { Navigate, useLocation } from "react-router-dom";

const MainBlocks = () => {
     const location = useLocation();

  if (location.pathname === "/mainBlocks") {
    return <Navigate to="/mainBlocks/lessonMap" replace />;
  }
  return (
    <>
        
    </>
  )
}

export default MainBlocks