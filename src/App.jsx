import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Resume } from './Pages/Resume';
import { Project } from './Pages/Project';
import { Contact } from './Pages/Contact';

import { AppLayout } from './components/Layout/AppLayout';
import Preloader from './components/UI/Preloader'; // 🔄 Import preloader

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "project",
        element: <Project />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ],
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load time (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 🔁 Show preloader first
  if (loading) return <Preloader />;

  return <RouterProvider router={router} />;
};

export default App;
