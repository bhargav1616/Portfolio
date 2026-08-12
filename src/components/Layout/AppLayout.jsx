import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Headers } from "../UI/Header";
import { Footer } from "../UI/Footer";

export const AppLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <Headers />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
