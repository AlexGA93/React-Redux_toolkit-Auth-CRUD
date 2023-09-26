import { Login, Welcome } from ".";
import { PublicRoutes } from "../../routes";
import { NotFoundRoute } from "../../utils";
import { Navigate, Route } from "react-router-dom";

const Public = () => {
  return (
    <NotFoundRoute>
      <Route path="/" element={<Navigate to={PublicRoutes.WELCOME} />} />
      <Route path={PublicRoutes.WELCOME} element={<Welcome />} />
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
    </NotFoundRoute>
  );
};

export default Public;
