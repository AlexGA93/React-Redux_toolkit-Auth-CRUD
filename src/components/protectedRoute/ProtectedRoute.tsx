import { Navigate, Outlet } from "react-router-dom";

interface AuthenticationType {
  canActivate: boolean;
  redirectPath?: string;
}

/* 
component that checks if can activate
If can activate, react-router-dom will load all the routes in our structure
If cannot activate, react-router-dom will redirect us to a default path
*/
const ProtectedRoute = ({
  canActivate,
  redirectPath = "/",
}: AuthenticationType) =>
  !canActivate ? <Navigate to={redirectPath} replace /> : <Outlet /> ;

export default ProtectedRoute;
