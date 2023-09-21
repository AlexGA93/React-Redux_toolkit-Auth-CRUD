import home from '../assets/icons/home.svg';
import user from '../assets/icons/user.svg';
import product from '../assets/icons/product.svg';
import order from '../assets/icons/order.svg';
import post2 from '../assets/icons/post2.svg';
import element from '../assets/icons/element.svg';
import note from '../assets/icons/note.svg';
import form from '../assets/icons/form.svg';
import calendar from '../assets/icons/calendar.svg';
import setting from '../assets/icons/setting.svg';
import backup from '../assets/icons/backup.svg';
import chart from '../assets/icons/chart.svg';
import log from '../assets/icons/log.svg';

const menuIcons: {[index: string]: string}= {
    "home.svg":home,
    "user.svg":user,
    "product.svg":product,
    "order.svg":order,
    "post2.svg":post2,
    "element.svg":element,
    "note.svg":note,
    "form.svg": form,
    "calendar.svg": calendar,
    "setting.svg": setting,
    "backup.svg": backup,
    "chart.svg": chart,
    "log.svg": log
};


export const handleMenuIcon = (menuIcon: string): string => {
    return menuIcons[menuIcon];
}