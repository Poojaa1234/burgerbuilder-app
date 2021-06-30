import React from 'react';
import burgerlogo from "../Navigation/images/burger-logo.png";
import './Logo.css';

const Logo = (props) => {
    return(
        <div className="Logo" style={{height:props.height}}>
            <img src={burgerlogo}  alt="Logo"></img>
        </div>
    )

}

export default Logo;