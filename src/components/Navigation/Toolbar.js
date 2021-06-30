import React from 'react';
import './Toolbar.css';
import Logo from '../Navigation/Logo';
import NavigationItems from '../Navigation/NavigationItems';
import DrawerToggle from '../Navigation/DrawerToggle';


const Toolbar = (props)=>{
    return(
        <header className="Toolbar">
            <DrawerToggle clicked = {props.drawerToggleClick}/>
            <Logo />
            <nav className="DesktopOnly">
             <NavigationItems />
             </nav>
        </header>
    )
}
export default Toolbar;