import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <p1>{props.number}</p1>
      <button className={classes.More} onClick={props.added}>
        more
      </button>
    </div>
  );
};

export default buildControl;
