import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import './Burger1.css';

const Burger = (props)=>{
    let transfrormedIngredient=Object.keys(props.ingredients)
    .map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((arr,el)=>{               //arr is prev value and el is cur value
        return arr.concat(el);
    },[]);
    if (transfrormedIngredient.length=== 0){
        transfrormedIngredient= <p>Please start adding ingredients</p>
    }
    console.log(transfrormedIngredient);

    return(
        <>
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transfrormedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
        </>
    )
}

export default Burger;