import React from 'react';
import './Layout.css';

const Layout= (props)=>{
    return(
        <>
        <h1>Toolbar,SliderDrawer, Backdrop</h1>
        <main className="Content">
            {props.children}
        </main>
        </>
    )

}

export default Layout;