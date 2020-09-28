import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ProductConsumer } from "../../contextAPI/Context";
import "./navbar.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();

  const { children } = props;
  return (
    <ProductConsumer>
      {value => {
        const {} = value;

        return (
          <div className="navbarMain">
            <div className={classes.root}>
              <CssBaseline />
              <main className={classes.content}>{children}</main>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
