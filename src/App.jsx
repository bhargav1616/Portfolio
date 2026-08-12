import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./components/Layout/AppLayout";
import Preloader from "./components/UI/Preloader";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Resume } from "./Pages/Resume";
import { Project } from "./Pages/Project";
import { Contact } from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "project", element: <Project /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return loading ? <Preloader /> : <RouterProvider router={router} />;
}
