import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo.js";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo></Logo>
      <nav>...</nav>
    </header>
  );
};

export default toolbar;
