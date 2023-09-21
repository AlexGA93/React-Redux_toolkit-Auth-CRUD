import { Outlet } from "react-router-dom";
import { Footer, Menu, Navbar } from "../../components";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <h1>content</h1>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
