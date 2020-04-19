import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { injectIntl } from "react-intl";
import styles from "./styles";
import { theme } from "../../theme/overrides";
import copy from "../../copy.json";

export const CheckboxLabel = ({
  intl,
  checkboxContract,
  checkboxPermanent,
}) => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <FormGroup row className={classes.root}>
        <FormControlLabel
          control={
            <Checkbox
              {...checkboxPermanent}
              value={intl.formatMessage(copy.permanent)}
            />
          }
          label={intl.formatMessage(copy.permanent)}
        />
        <FormControlLabel
          control={
            <Checkbox
              {...checkboxContract}
              value={intl.formatMessage(copy.contract)}
            />
          }
          label={intl.formatMessage(copy.contract)}
        />
      </FormGroup>
    </MuiThemeProvider>
  );
};

export default injectIntl(CheckboxLabel);
