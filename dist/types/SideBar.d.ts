import { FC, HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Predefined styling */
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}
/** Application Sidebar */
declare const SideBar: FC<Props>;
export default SideBar;
