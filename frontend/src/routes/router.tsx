import HomePage from "@/pages/HomePage";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import ResetPassword from "@/components/ResetPassword";

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
        path: "/create",
        element: <div>login</div>,
      },
      {
        path: "/detail/:id",
        element: <div>login</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
