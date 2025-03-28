import { useLogout } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Logout = () => {
  const logoutMutation = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => navigate("/login"),
    });
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
