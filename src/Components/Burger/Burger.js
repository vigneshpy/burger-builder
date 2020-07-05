import React from 'react';
import classes from './Burger.css';
import BurgerIng from './BurgerIng';
const Burger =(props)=>{
    console.log(Object.keys( props.ingredients ))
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIng key={igKey + i} types={igKey} />;
            } );
        } ).reduce((pr,el)=>(pr.concat(el)),[]);
   if(transformedIngredients.length===0){
    transformedIngredients="Please select the Ingredients";
   }
return(
<div className={classes.Burger}>
<BurgerIng types="bread-top"/>
{transformedIngredients}
<BurgerIng types="bread-bottom"/>

</div>


);
}


export default Burger;

