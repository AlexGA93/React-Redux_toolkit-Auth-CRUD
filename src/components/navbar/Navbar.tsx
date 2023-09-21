import Logo from '../../assets/icons/logo.svg';
import Search from '../../assets/icons/search.svg';
import App from '../../assets/icons/app.svg';
import Expand from '../../assets/icons/expand.svg';
import Notifications from '../../assets/icons/notifications.svg';
import Settings from '../../assets/icons/settings.svg';

import './navbar.scss';

const Navbar = (): JSX.Element => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Admin Page</span>
      </div>
      <div className="icons">
        <img src={Search} alt="search" className='icon' />
        <img src={App} alt="app" className='icon' />
        <img src={Expand} alt="expand" className='icon' />
        <div className="notification">
          <img src={Notifications} alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load" alt="john_photo" />
          <span>John</span>
        </div>
        <img src={Settings} alt="settings" className='icon' />
      </div>
    </nav>
  )
}

export default Navbar