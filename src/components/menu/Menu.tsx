import { Link } from 'react-router-dom';
import { menu } from '../../data/data';
import './menu.scss';
import { listItemType, menuItemType } from '../../types/dataTypes';
import { handleMenuIcon } from '../../utils/utils';


const Menu = () => {
  return (
    <aside id='sidebar' className='menu'>
      {
        menu.map((menuItem: menuItemType) => (
          <div className="item" key={menuItem.id}>
            <span className="title">{menuItem.title}</span>
            {
              menuItem.listItems.map((listItem: listItemType) => (
                <Link to={`layout/${listItem.url}`} className='listItem' key={listItem.id}>
                  
                  <img src={handleMenuIcon(listItem.icon)} alt="icon" />
                  
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