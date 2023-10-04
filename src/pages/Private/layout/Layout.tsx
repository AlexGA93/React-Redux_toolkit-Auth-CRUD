import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../../routes";
import { NotFoundRoute } from "../../../utils";
import { Home } from "../home";
import { Users } from "../users";
import { User } from "../user";
import { Products } from "../products";

import "./layout.scss";

export const Layout = () => {
  return (
    <NotFoundRoute>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.USERS} element={<Users />} />
      <Route path={`${PrivateRoutes.USERS}/:id`} element={<User />} />
      <Route path={PrivateRoutes.PRODUCTS} element={<Products />} />
    </NotFoundRoute>
  );
};

export default Layout;
