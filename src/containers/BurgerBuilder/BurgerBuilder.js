import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 10,
      meat: 3
    }
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}></Burger>
        <div>Build Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
