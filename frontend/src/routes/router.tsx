import HomePage from "@/pages/HomePage";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import ResetPassword from "@/components/ResetPassword";
import ProfilePage from "@/pages/ProfilePage";
import TaskDetailPage from "@/pages/TaskDetailPage";
import TaskCreatePage from "@/pages/TaskCreatePage";
import PrivateRoute from "./PrivateRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/create",
        element: <TaskCreatePage />,
      },
      {
        path: "/detail/:id",
        element: <TaskDetailPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
];

const router = createBrowserRouter(routes);

export default router;
