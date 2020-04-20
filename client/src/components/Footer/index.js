import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "./styles";

const Footer = () => {
  const classes = styles();
  return (
    <footer className={classes.root}>
      <a
        className={classes.githubLink}
        href="https://bit.ly/2Vny5hp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </footer>
  );
};

export default Footer;
