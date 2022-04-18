import React, {FC, HTMLAttributes, useEffect} from 'react'
import { IMenu, IMenuItem } from './Menu.types';
import { menuService } from './services'

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    items: IMenuItem[]
}

/** Menu item properties **/
export interface IMenuItemProps {
    data: IMenuItem
}



/** Simple Menu {menuContext?.menu.map(item => <MenuItem key={item.id} data={item}  />)} */
const Menu: FC = () => {
    //const [id, setId] = useState(0);
    const id = 1;

    /*useEffect(() => {
        console.log("INIT")
    });*/

    /*useEffect(() => {
        // subscribe to home component messages
        const subscription = menuService.onChange().subscribe(id => {
            if (id) {
                //setId(id);
                console.log("select ", id)
            } else {
                //
                //setId(0);
                console.log("unselect all")
            }
        });
    });*/

    const menu: IMenu =  {
        items: [
            {
                id: 1,
                name: "Home " + id,
                href: "/"
            },
            {
                id: 2,
                name: "Users",
                href: "/users"
            },
            {
                id: 3,
                name: "Settings",
                href: "/settings"
            }
        ]
    }
    return (
        <ul className="sidebar-nav">
            {menu.items.map((item: IMenuItem) => <MenuItem key={item.id} data={item} />)}
        </ul>
    );
}

/** Menu item, that cn also be a menu header **/
const MenuItem = ({ data }: IMenuItemProps) => {
    return  <li className="sidebar-item">
        <a className="sidebar-link" href="#">
                <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">{data.name}</span>
        </a>
    </li>
}

export default Menu;