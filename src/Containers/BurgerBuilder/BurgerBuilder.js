import React, { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

const IngPrice = 
  { salad: 0.4 , bacon: 0.7 , cheese: 0.5 , meat: 1.4 };

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable:false
  };
  updatePurchase=(ingredients)=>{
    // const ingredients={...this.state.ingredients};
    const sum=Object.keys(ingredients).map((igkey)=>{
      return ingredients[igkey];
    }).reduce((tot,current)=>(tot+current),0)

    this.setState({purchasable:sum>0})
    console.log(sum)
    console.log(sum>0)

  }
  
  addIng = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const UpdatedIng = { ...this.state.ingredients };
    UpdatedIng[type] = updatedCount;
    //getting ingridient price and current totalPrice to get total prices
    var oldprice=this.state.totalPrice;
    var ingPrice=IngPrice[type];
    let newPrice = oldprice + ingPrice;


    this.setState({  ingredients: UpdatedIng,totalPrice:newPrice });
this.updatePurchase(UpdatedIng);

  };
  rmvIng = (types) => {
    const ingredientsCount=this.state.ingredients[types];
    const newIng={ ...this.state.ingredients };
    //array value does not contain negative values
    const updatedCount =(ingredientsCount===0)?ingredientsCount :ingredientsCount - 1;
    var oldprice=this.state.totalPrice;
    var ingPrice=IngPrice[types];
    newIng[types]=updatedCount;
    const newPrice = oldprice - ingPrice;
    this.setState({  ingredients: newIng,totalPrice:newPrice });
this.updatePurchase(newIng);


  };
  render() {
    const isDisabled={
    ...this.state.ingredients
    }


    for(let key in isDisabled){
      isDisabled[key]=isDisabled[key]<=0;
    }
 


    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
           
        <BuildControls
          ingredients={this.state.ingredients}
          addBtn={this.addIng}
          lessBtn={this.rmvIng}
          disabled={isDisabled}
          price={this.state.totalPrice}
          order={this.updatePurchase}
          purchasable={this.state.purchasable}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
