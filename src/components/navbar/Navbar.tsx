import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import App from "../../assets/icons/app.svg";
import Expand from "../../assets/icons/expand.svg";
import Logo from "../../assets/icons/logo.svg";
import Notifications from "../../assets/icons/notifications.svg";
import Search from "../../assets/icons/search.svg";
import Settings from "../../assets/icons/settings.svg";
import { ReduxStoreType, UserStateType } from "../../types";
import "./navbar.scss";
import { clearLocalStorage, userKey } from "../../utils/localStorage";
import { useEffect } from "react";


const Navbar = (): JSX.Element => {
  const navigate = useNavigate();

  const userState: UserStateType = useSelector(
    (state: ReduxStoreType) => state.userReducer
  );
  
  const handleLogout = () => {
    clearLocalStorage(userKey);
    navigate('/public/welcome');
  };

  const handleLogin = () => {
    navigate("/public/login");
  };

  useEffect(() => {

  }, [userState]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Admin Page</span>
      </div>

      {userState.user.title === "" ? (
        <div className="default">
          <div className="buttons">
            <Button
              variant="outlined"
              startIcon={<LoginIcon />}
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </div>
        </div>
      ) : (
        <div className="logged">
          <img src={Search} alt="search" className="icon" />
          <img src={App} alt="app" className="icon" />
          <img src={Expand} alt="expand" className="icon" />
          <div className="notification">
            <img src={Notifications} alt="notification" />
            <span>1</span>
          </div>
          <div className="user">
            <img
              src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load"
              alt="john_photo"
            />
            <span>John</span>
          </div>
          <img src={Settings} alt="settings" className="icon" />
          <Button
            variant="outlined"
            startIcon={<LogoutIcon />}
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
