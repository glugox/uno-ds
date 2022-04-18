import React, {HTMLAttributes, ReactNode} from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement>{

    href: string,

    /** Link child elements */
    children?: ReactNode,
}

/** Button */
function Link({children}: Props) {
    return (
        <a>
            {children}
        </a>
    );
}

export default Link;