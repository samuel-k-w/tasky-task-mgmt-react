import HomePage from "@/pages/HomePage";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import ResetPassword from "@/components/ResetPassword";
import ProfilePage from "@/pages/ProfilePage";
import TaskDetailPage from "@/pages/TaskDetailPage";
import TaskCreatePage from "@/pages/TaskCreatePage";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
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
];

const router = createBrowserRouter(routes);

export default router;
