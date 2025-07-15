import { useEffect } from "react";
import NProgress from "nprogress";

function LazyWrapper({ children }) {
  useEffect(() => {
    NProgress.done(); 
  }, []);

  return children;
}

export default LazyWrapper;
