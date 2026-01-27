import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home/Home.jsx";
import AboutUs from "./About/AboutUs.jsx";
import Service from "./Pages/Service.jsx";
import About from "./About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/", element: <Home />
  },
  {
    path: "/about", element: <AboutUs />
  },
  {
    path: "/service", element: <Service />
  },
  {
    path: "/projects", element: <Home />
  },
  {
    path: "/pages", element: <Home />
  },
  {
    path: "/blog", element: <Home />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
