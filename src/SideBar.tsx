import React, {FC, HTMLAttributes} from 'react';
import Menu from "./Menu";

export interface Props extends HTMLAttributes<HTMLButtonElement>{

    /** Predefined styling */
    variant?: 'primary' | 'secondary',

    onClick?: () => void
}

/** Application Sidebar */
const SideBar: FC<Props> = ({children, variant = 'primary', ...props}) => {
    return (
        <nav {...props} id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="index.html">
                    <span className="align-middle">UNO</span>
                </a>

                <Menu />


                <div className="sidebar-cta">
                    <div className="sidebar-cta-content">
                        <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                        <div className="mb-3 text-sm">
                            Are you looking for more components? Check out our premium version.
                        </div>
                        <div className="d-grid">
                            <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SideBar;