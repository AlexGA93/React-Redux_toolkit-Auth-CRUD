import { Outlet } from "react-router-dom";
import { Menu } from "../../../components";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
