import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AccessDeniedPage from "./pages/AccessDeniedPage";

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { username, role } = useAuth();

  if (!username) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <AccessDeniedPage />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
