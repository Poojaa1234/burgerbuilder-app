import React from 'react';
import NavigationItems from '../Navigation/NavigationItems';
import Logo from '../Navigation/Logo';
import './Sidedrawer.css';
import Backdrop from '../UI/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if(props.open){
        attachedClasses = ["SideDrawer","Open"]
    }
    return(
        <>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className=  {attachedClasses.join(' ')}>
        <Logo height="11%"/>
        <nav>
        <NavigationItems />
        </nav>
        </div>
        </>
    )
}
export default SideDrawer;