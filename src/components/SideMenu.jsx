import React from "react";
import { withStyles } from "@material-ui/core";

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
    color: "#fff",
  },
};

const SideMenu = (props) => {
  const { classes } = props;

  return <aside className={classes.sideMenu}>This is Side Menu.</aside>;
};

export default withStyles(style)(SideMenu);
