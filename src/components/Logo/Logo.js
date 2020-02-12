import React from "react";
import burgerLogo from "../../assets/images/me.JPG";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Myburger"></img>
  </div>
);

export default logo;
