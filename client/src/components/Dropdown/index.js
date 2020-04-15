import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import DownArrow from "@material-ui/icons/KeyboardArrowDownOutlined";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import styles from "./styles";
import { theme } from "../../theme/overrides";
import copy from "../../copy.json";

export const DropDown = ({ intl }) => {
  const node = useRef();
  const classes = styles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = e => {
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
    <MuiThemeProvider theme={theme}>
      <div ref={node} className={classes.root}>
        <Button
          onClick={handleChange}
          color="primary"
          variant="contained"
          endIcon={<DownArrow />}
        >
          {intl.formatMessage(copy.appBar.buttons.buttonRoles)}
        </Button>
        <div className={`${toggleClass}`}>Show Me</div>
      </div>
    </MuiThemeProvider>
  );
};

export default injectIntl(DropDown);
