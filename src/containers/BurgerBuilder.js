import React,{Component} from 'react';
import Burger from '../components/Burger';
import BuildControl from '../components/BuildControl';

const IngredientPrices = {
    salad:0.5,
    cheese:0.4,
    meat:0.8,
    bacon: 1.0
}

class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients :{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            totalPrice: 4,
            purchaseable:true
        }
    }

    updatePurchaseState = (ingredients)=>{
    
        const sum = Object.keys(ingredients).map((val)=>{
          return ingredients[val]
        }).reduce((sum,el)=>{
            return sum+el
        },0);
        this.setState({
            purchaseable:sum>0
        })
    }

    addIngredientHandler = (type)=>{
         const oldCount = this.state.ingredients[type]
         console.log(oldCount)
         const updatedCount = oldCount + 1;
         const updatedIngredients = {
             ...this.state.ingredients
         }
         updatedIngredients[type] = updatedCount;
         const priceAddition = IngredientPrices[type]
         const OldPrice = this.state.totalPrice;
         const newPrice=OldPrice + priceAddition;
         this.setState({
             totalPrice:newPrice,
             ingredients:updatedIngredients
         })
         this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type]
         if(oldCount<=0){
             return;
         }
         const updatedCount = oldCount - 1;
         const updatedIngredients = {
             ...this.state.ingredients
         }
         updatedIngredients[type] = updatedCount;
         const priceReduction = IngredientPrices[type]
         const OldPrice = this.state.totalPrice;
         const newPrice=OldPrice - priceReduction;
         this.setState({
             totalPrice:newPrice,
             ingredients:updatedIngredients
         })
         this.updatePurchaseState(updatedIngredients);
        
    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0
        }
        
        return(
            <>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControl ingredientAdded = {this.addIngredientHandler} 
            ingredientRemove={this.removeIngredientHandler}
            disable={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable} />
            </>
        )
    }

}

export default BurgerBuilder;