import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  var counter = 0;
  let transformedIngredients = Object.keys(props.ingredients).map(key => {
    console.log(props.ingredients);
    return [...Array(props.ingredients[key])].map((_, i) => {
      counter++;
      return <BurgerIngredient key={key + i} type={key}></BurgerIngredient>;
    });
  });
  if (counter === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default Burger;
