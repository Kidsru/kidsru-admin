import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Layout from "../components/Layout/layout";
import { navbar } from "../utils/navbar";
import useTitle from "../hooks/useTitle";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import LazyWrapper from "../components/LazyWrapper/LazyWrapper";
import React, { Suspense } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Cookie dan access tokenni olish funksiyasi
function getAccessTokenFromCookie() {
  const name = "access_token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length);
    }
  }

  return null;
}

// Title o'zgartiruvchi va redirect qiluvchi komponent
function TitleSetterAndAuthGuard() {
  const location = useLocation();
  const token = getAccessTokenFromCookie();

  // Sahifa sarlavhasini o'rnatish
  let title = "";
  if (location.pathname !== "/") {
    const current = navbar.find((item) => item.path === location.pathname);
    title = current?.title || "404 - Page Not Found";
  }
  useTitle(title);

  if (!token && location.pathname !== "/auth") {
    return <Navigate to="/auth" replace />;
  }

  if (token && location.pathname === "/auth") {
    return <Navigate to="/dashboard" replace />;
  }

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TitleSetterAndAuthGuard />
      <Suspense
        fallback={
          <>
            {NProgress.start()}
            <div>Loading page...</div>
          </>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            {navbar
              .filter((item) => !item.hidden)
              .map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={<LazyWrapper>{item.element}</LazyWrapper>}
                />
              ))}
            <Route index element={<Navigate to="/auth" replace />} />
          </Route>

          {navbar
            .filter((item) => item.hidden)
            .map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<LazyWrapper>{item.element}</LazyWrapper>}
              />
            ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
