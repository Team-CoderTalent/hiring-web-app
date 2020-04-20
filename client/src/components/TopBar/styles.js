import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  appBar: {
    backgroundColor: "white",
    boxShadow: "none",
  },
  toolBar: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
}));

export default styles;
