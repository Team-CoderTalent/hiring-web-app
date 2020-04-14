import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import styles from "./styles";
import SearchBar from "../SearchBar";
import Dropdown from "../Dropdown";
import { theme } from "../../theme/overrides";

const TopBar = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <SearchBar />
            <Dropdown />
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default TopBar;
