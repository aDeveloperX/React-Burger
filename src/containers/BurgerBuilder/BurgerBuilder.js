import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 2,
  bacon: 1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 1,
      meat: 3
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const oldCounter = this.state.ingredients[type];
    const updatedCounter = oldCounter + 1;

    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCounter;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  removeIngredientHandler = type => {
    const oldCounter = this.state.ingredients[type];
    if (oldCounter >= 1) {
      const updatedCounter = oldCounter - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };

      updatedIngredients[type] = updatedCounter;

      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceAddition;
      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    }
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ingredients={this.state.ingredients}
        ></BuildControls>
      </>
    );
  }
}

export default BurgerBuilder;
