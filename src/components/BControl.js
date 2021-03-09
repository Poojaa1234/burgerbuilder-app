import React from 'react';
import './BControl.css'

const BControl = (props)=>{
    return(
        <>
        <div className="BuildControl">
        <div className="Label" >{props.label}</div>
        <button className="Less" onClick={props.remove} disabled={props.disabled}>Less</button>
        <button className="More" onClick={props.added}>More</button>
        </div>
        </>
    )

}
export default BControl;