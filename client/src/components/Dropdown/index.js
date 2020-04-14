import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DownArrow from "@material-ui/icons/KeyboardArrowDownOutlined";
import { injectIntl } from "react-intl";
import styles from "./styles";
import copy from "../../copy.json";

export const DropDown = ({ intl }) => {
  const classes = styles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleClass = isOpen
    ? `${classes.dropDown} ${classes.dropDownActive}`
    : `${classes.dropDown}`;

  return (
    <div className={classes.root}>
      <Button onClick={toggle} variant="contained" endIcon={<DownArrow />}>
        {intl.formatMessage(copy.appBar.button)}
      </Button>
      <div className={`${toggleClass}`}>Show Me</div>
    </div>
  );
};

export default injectIntl(DropDown);
