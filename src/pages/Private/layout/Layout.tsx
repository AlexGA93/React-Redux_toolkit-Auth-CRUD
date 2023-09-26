import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../../routes";
import { NotFoundRoute } from "../../../utils";
import { Home } from "../home";
import "./layout.scss";

export const Layout = () => {
  return (
    <NotFoundRoute>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </NotFoundRoute>
  );
};

export default Layout;
