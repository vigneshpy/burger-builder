import React, { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControl from "../../Components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 2,
            cheese: 0,
            meat: 0
        }
    }
  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControl />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
