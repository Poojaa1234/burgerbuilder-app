import React from 'react';
import './BuildControl.css';
import BControl from './BControl';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]

const BuildControl = (props)=>{
    return(
        <>
        <div className="BuildControls">
        <p>Price: <strong>{props.price.toFixed(2)} </strong></p>

            {controls.map((ctrl)=>{
                return <BControl
                 key={ctrl.label} label={ctrl.label}
                 added={()=>props.ingredientAdded(ctrl.type)}
                 remove={()=>props.ingredientRemove(ctrl.type)}
                 disabled={props.disable[ctrl.type]}
                  />
            })}
            <button className="OrderButton" 
            disabled={!props.purchaseable}
            onClick={props.ordered}
            >ORDER NOW</button>
        </div>
        </>
    )
}

export default BuildControl;