import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

const drawerWidth = 240;

export const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      maxWidth: "100%",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
  })
);
