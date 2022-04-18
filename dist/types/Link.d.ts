import { HTMLAttributes, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    href: string;
    /** Link child elements */
    children?: ReactNode;
}
/** Button */
declare function Link({ children }: Props): JSX.Element;
export default Link;
