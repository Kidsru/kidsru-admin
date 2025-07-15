// components/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Sozlamalar (ixtiyoriy)
NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    NProgress.start();          // Loaderni boshlaydi
    window.scrollTo(0, 0);      // Scrollni yuqoriga chiqaradi

    // Sahifa tayyor bo‘lgach loaderni tugatadi
    setTimeout(() => {
      NProgress.done();
    }, 500); // bu vaqtni real yuklanishga qarab sozlashingiz mumkin

  }, [pathname]);

  return null;
}

export default ScrollToTop;
