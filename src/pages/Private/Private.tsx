import { lazy } from "react";
import { Route } from "react-router-dom";
import { Menu } from "../../components";
import { PrivateRoutes } from "../../routes";
import { NotFoundRoute } from "../../utils";

// lazy loading - layout
const Layout = lazy(() => import("./layout/Layout"));

const Private = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <NotFoundRoute>
            <Route path={`/${PrivateRoutes.LAYOUT}/*`} element={<Layout />} />
          </NotFoundRoute>
        </div>
      </div>
    </div>
  );
};

export default Private;
