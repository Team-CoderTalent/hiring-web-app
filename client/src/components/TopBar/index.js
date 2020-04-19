import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import styles from "./styles";
import SearchBar from "../SearchBar";
import Dropdown from "../Dropdown";
import { theme } from "../../theme/overrides";
import copy from "../../copy.json";

export const TopBar = ({ intl, searchTerm }) => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar disableGutters>
            <SearchBar searchInput={searchTerm} />
            <Dropdown />
            <Button
              variant="contained"
              color="secondary"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScwS44_Ock6nUNJRVNfReXo6zzTehk9lEP-yt-47XQ2KAKYxQ/viewform"
            >
              {intl.formatMessage(copy.appBar.buttons.buttonCompany)}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
};

export default injectIntl(TopBar);
