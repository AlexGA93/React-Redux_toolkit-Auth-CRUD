import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "..";

interface Props {
  validation: boolean;
}

const AuthGuard = ({ validation }: Props) => {
  // check redux state
  let provisionalState = {
    name: "John",
    email: "jDoe@,ail.com",
    role: "admin",
  };

  return provisionalState.name ? (
    validation ? (
      <Outlet />
    ) : (
      <Navigate replace to={PrivateRoutes.PRIVATE} />
    )
  ) : (
    <Navigate replace to={PublicRoutes.PUBLIC} />
  );
};

export default AuthGuard;
