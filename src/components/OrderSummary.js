import React,{Component} from 'react';
import './OrderSummary.css';

class OrderSummary extends Component {
  
    render(){
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map((val) => {
        return (
            <li>
                <span style={{textTransform:"capitalize"}}>{val}</span> : {this.props.ingredients[val]}
            </li>
        )
    })
    return (
        <>
        <h4>Order Summary</h4>
        <p>Your delicious burger containes the following ingredients:</p>
        <ul>
           {this.ingredientSummary}
        </ul>
        <p>Total price is <strong>{this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <button className="Button Danger" onClick={this.props.cancelledOrder}>Cancel</button>
        <button className="Button Success" onClick={this.props.continuedOrder}>Continue</button>
        </>
    )
    }

}




   

export default OrderSummary;