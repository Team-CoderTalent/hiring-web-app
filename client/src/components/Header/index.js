import React from "react";
import Typography from "@material-ui/core/Typography";
import { injectIntl } from "react-intl";
import styles from "./styles";
import copy from "../../copy.json";

export const Header = ({ intl }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h1" gutterBottom>
        {intl.formatMessage(copy.headline)}
      </Typography>
      <Typography variant="h6" className={classes.headline}>
        {intl.formatMessage(copy.header)}
      </Typography>
    </div>
  );
};

export default injectIntl(Header);
