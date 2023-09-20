import './navbar.scss';

const Navbar = (): JSX.Element => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Admin Page</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="search" className='icon' />
        <img src="app.svg" alt="app" className='icon' />
        <img src="expand.svg" alt="expand" className='icon' />
        <div className="notification">
          <img src="notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load" alt="john_photo" />
          <span>John</span>
        </div>
        <img src="settings.svg" alt="settings" className='icon' />
      </div>
    </nav>
  )
}

export default Navbar