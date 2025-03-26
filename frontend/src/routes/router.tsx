import HomePage from "@/pages/HomePage";
import { createBrowserRouter, RouteObject } from "react-router-dom";

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
        element: <div>login</div>,
      },
      {
        path: "/register",
        element: <div>login</div>,
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
