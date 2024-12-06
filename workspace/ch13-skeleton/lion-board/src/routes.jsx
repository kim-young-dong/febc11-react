import Edit from "@pages/board/Edit";
import List from "@pages/board/List";
import Add from "@pages/board/New";
import Detail from "@pages/board/Detail";
import Home from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "@pages/user/Login";
import Signup from "@pages/user/Signup";
import Layout from "@components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ":type", element: <List /> },
      { path: ":type/new", element: <Add /> },
      { path: ":type/:_id", element: <Detail /> },
      { path: ":type/:_id/edit", element: <Edit /> },
      { path: ":users/login", element: <Login /> },
      { path: ":users/signup", element: <Signup /> },
    ],
  },
]);

export default router;
