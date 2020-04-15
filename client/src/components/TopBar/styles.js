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
}));

export default styles;
