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

function TitleSetter() {
  const location = useLocation();
  let title = "";

  if (location.pathname !== "/") {
    const current = navbar.find((item) => item.path === location.pathname);
    title = current?.title || "404 - Page Not Found";
  }

  useTitle(title);
  return null;
}

// Suspense wrapper ichida fallback loader bo‘ladi
function App() {
  return (
    <Router>
      <ScrollToTop />
      <TitleSetter />
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
                  element={
                    <LazyWrapper>{item.element}</LazyWrapper>
                  }
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
                element={
                  <LazyWrapper>{item.element}</LazyWrapper>
                }
              />
            ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
