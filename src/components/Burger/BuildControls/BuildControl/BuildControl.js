import React from "react";
import classes from "./buildControl.module.css";

const buildControl = props => {
  <div className={classes.buildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button>Less</button>
    <button>more</button>
  </div>;
};
