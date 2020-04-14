import React, { useState } from "react";
import styles from "./styles";

const DropDown = () => {
  const classes = styles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleClass = isOpen
    ? `${classes.dropDown} ${classes.dropDownActive}`
    : `${classes.dropDown}`;

  return (
    <div className={classes.root}>
      <div onClick={toggle}>Hello</div>
      <div className={`${toggleClass}`}>Show Me</div>
    </div>
  );
};

export default DropDown;
