import { HTMLAttributes, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Button child elements */
    children?: ReactNode;
    /** Predefined styling */
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}
/** Button */
declare function TopBar({ children, variant, ...props }: Props): JSX.Element;
export default TopBar;
