/** Single menu item data **/
export interface IMenuItem {
    id: number;
    name: string;
    isHeader?: boolean;
    href?: string;
}
export interface IMenu {
    items: IMenuItem[];
}
