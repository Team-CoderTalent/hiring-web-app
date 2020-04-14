import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { injectIntl } from "react-intl";
import styles from "./styles";
import copy from "../../copy.json";

export const SearchBar = ({ intl }) => {
  const classes = styles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={intl.formatMessage(copy.appBar.searchbar)}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default injectIntl(SearchBar);
