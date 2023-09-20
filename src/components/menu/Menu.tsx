import { Link } from 'react-router-dom';
import { menu } from '../../data/data';
import './menu.scss';
import { listItemType, menuItemType } from '../../types/types';

const Menu = () => {
  return (
    <aside id='sidebar' className='menu'>
      {
        menu.map((menuItem: menuItemType) => (
          <div className="item" key={menuItem.id}>
            <span className="title">{menuItem.title}</span>
            {
              menuItem.listItems.map((listItem: listItemType) => (
                <Link to={listItem.url} className='listItem' key={listItem.id}>
                  <img src={listItem.icon} alt="menu_icon" />
                  <span className='listItemTitle'>{listItem.title}</span>
                </Link>
              ))
            }
        </div>
        ))
      }      
    </aside>
  )
}

export default Menu