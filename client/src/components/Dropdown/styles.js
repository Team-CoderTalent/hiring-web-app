import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: theme.spacing(5),
  },
  dropDown: {
    display: "none",
  },
  dropDownActive: {
    display: "block",
  },
}));

export default styles;
