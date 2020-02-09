import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControl}>
      {controls.map(control => {
        return (
          <BuildControl
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            key={control.type}
            label={control.label}
            number={props.ingredients[control.type]}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
