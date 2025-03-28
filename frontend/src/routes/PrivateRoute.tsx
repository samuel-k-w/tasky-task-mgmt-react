import useAuthStore from "@/store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.token);
  //   const isAuthenticated = !!localStorage.getItem("token");
  //   const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
