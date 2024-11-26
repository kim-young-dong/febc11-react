import Layout from "@components/Layout";
import Home from "@pages/Home";
import About from "@pages/About";
import TodoList from "@pages/TodoList";
import TodoDetail from "@pages/TodoDetail";
import TodoAdd from "@pages/TodoAdd";
import TodoEdit from "@pages/TodoEdit";
import ErrorPage from "@pages/ErrorPage";

import { createBrowserRouter } from "react-router-dom";

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
            {
              path: ":_id",
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
