import React, {HTMLAttributes, ReactNode} from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement>{

    /** Button child elements */
    children?: ReactNode,

    /** Predefined styling */
    variant?: 'primary' | 'secondary',

    onClick?: () => void
}

/** Button */
function Button({children, variant = 'primary', ...props}: Props) {
    return (
        <button {...props} style={{
            backgroundColor: variant === 'primary' ? 'blue' : 'gray',
            color: 'white',
            border: "none",
            padding: "5px 10px"
        }}>
            {children}
        </button>
    );
}

export default Button;