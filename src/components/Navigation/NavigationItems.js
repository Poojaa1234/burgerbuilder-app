import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../Navigation/NavigationItem';

const NavigationItems = (props) =>{
    return(
            <ul  className="NavigationItems">
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
            </ul>
    )

}

export default NavigationItems;