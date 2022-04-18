import {default as TopBar} from "../TopBar";
import {default as Footer} from "../Footer";

import React, {FC, ReactNode} from "react";

export interface Props {
    children: ReactNode
}

const DefaultLayout: FC<Props> = ({children}) => {
    return <div className="main">
            <TopBar />
            <main className="content">
                <div className="container-fluid p-0">
                    {children}
                </div>
            </main>
            <Footer />
        </div>

}

export default DefaultLayout;