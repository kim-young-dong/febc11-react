import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("@components/Layout"));
const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const TodoList = lazy(() => import("@pages/TodoList"));
const TodoDetail = lazy(() => import("@pages/TodoDetail"));
const TodoAdd = lazy(() => import("@pages/TodoAdd"));
const TodoEdit = lazy(() => import("@pages/TodoEdit"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "list",
          element: <TodoList />,
          children: [
            {
              path: "add",
              element: <TodoAdd />,
            },
          ],
        },
        {
          path: "list/:_id",
          element: <TodoDetail />,
          children: [
            {
              path: "edit",
              element: <TodoEdit />,
            },
          ],
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
