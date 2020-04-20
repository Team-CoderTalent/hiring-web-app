import React, { useContext } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { injectIntl } from "react-intl";
import styles from "./styles";
import copy from "../../copy.json";
import { GlobalContext } from "../../context/GlobalState";

export const SearchBar = ({ intl, searchInput }) => {
  const classes = styles();
  const { searchFilter } = useContext(GlobalContext);

  const handleOnChange = e => {
    searchFilter(e.target.value);
  };
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
        onChange={handleOnChange}
      />
    </div>
  );
};

export default injectIntl(SearchBar);
