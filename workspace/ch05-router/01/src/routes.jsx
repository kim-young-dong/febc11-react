import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Layout from "./layout";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter(
  [
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    // {
    //   path: "/about",
    //   element: <About />,
    // },
    // {
    //   path: "/contact",
    //   element: <Contact />,
    // },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
