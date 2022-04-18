import { FC, HTMLAttributes } from 'react';
import { IMenuItem } from './Menu.types';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    items: IMenuItem[];
}
/** Menu item properties **/
export interface IMenuItemProps {
    data: IMenuItem;
}
/** Simple Menu {menuContext?.menu.map(item => <MenuItem key={item.id} data={item}  />)} */
declare const Menu: FC;
export default Menu;
