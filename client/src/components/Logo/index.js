import React from "react";
import styles from "./styles";

const Logo = () => {
  const classes = styles();
  return (
    <a href="https://codertalent.io" className={classes.root}>
      <img
        alt="CoderTalent"
        src="https://codertalent.io/wp-content/uploads/2020/03/ct-logo-dark-small.png"
        srcSet="https://codertalent.io/wp-content/uploads/2020/03/ct-logo-dark-small.png 1x, https://codertalent.io/wp-content/uploads/2020/03/ct-logo-dark.png 2x"
      />
    </a>
  );
};

export default Logo;
