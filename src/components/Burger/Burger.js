import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(key => {
    var array = [];
    console.log(props.ingredients[key]);
    for (let a = 0; a < props.ingredients[key]; a++) {
      array.push(<BurgerIngredient type={key}></BurgerIngredient>);
    }
    return array;
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default Burger;
