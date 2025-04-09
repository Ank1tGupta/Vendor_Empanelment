import { Navigate } from "react-router-dom";
import { getToken, getUserRole } from "../utils/auth";

const PrivateRoute = ({ children, role }) => {
  const token = getToken();
  const userRole = getUserRole();

  if (!token) return <Navigate to="/login" />;
  if (role && userRole !== role) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
