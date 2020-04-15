import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import DownArrow from "@material-ui/icons/KeyboardArrowDownOutlined";
import { injectIntl } from "react-intl";
import styles from "./styles";
import copy from "../../copy.json";

export const DropDown = ({ intl }) => {
  const node = useRef();
  const classes = styles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  const handleChange = () => setIsOpen(!isOpen);
  const toggleClass = isOpen
    ? `${classes.dropDown} ${classes.dropDownActive}`
    : `${classes.dropDown}`;

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={node} className={classes.root}>
      <Button
        onClick={handleChange}
        variant="contained"
        endIcon={<DownArrow />}
      >
        {intl.formatMessage(copy.appBar.button)}
      </Button>
      <div className={`${toggleClass}`}>Show Me</div>
    </div>
  );
};

export default injectIntl(DropDown);
