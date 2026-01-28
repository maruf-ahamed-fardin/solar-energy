import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home/Home.jsx";
import AboutUs from "./About/AboutUs.jsx";
import Service from "./Pages/Service.jsx";
import About from "./About/About.jsx";
import Contactus from "./Pages/ContactUs.jsx";
import OurServices from "./Pages/OurServices.jsx";
import Projects from "./Pages/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/", element: <Home />
  },
  {
    path: "/about", element: <About />
  },
  {
    path: "/ourservices", element: <OurServices />
  },
  {
    path: "/contact", element: <Contactus />
  },
  {
    path: "/project", element: <Projects />
  },
  {
    path: "/blog", element: <Home />
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
