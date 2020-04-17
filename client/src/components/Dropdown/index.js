import React from "react";
import Button from "@material-ui/core/Button";
import DownArrow from "@material-ui/icons/KeyboardArrowDownOutlined";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { injectIntl } from "react-intl";
import styles from "./styles";
import { theme } from "../../theme/overrides";
import copy from "../../copy.json";

export const DropDown = ({ intl }) => {
  const classes = styles();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <>
          <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
              <Button
                {...bindTrigger(popupState)}
                color="primary"
                variant="contained"
                endIcon={<DownArrow />}
              >
                {intl.formatMessage(copy.appBar.buttons.buttonRoles)}
              </Button>
            </div>
          </MuiThemeProvider>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2}>Sill Work In Progress</Box>
          </Popover>
        </>
      )}
    </PopupState>
  );
};

export default injectIntl(DropDown);
