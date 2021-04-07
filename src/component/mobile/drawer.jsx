import { Drawer } from "@material-ui/core";
import React from "react";

function DrawerUI(props) {
  const { open, toggleDrawer, anchor, children } = props;
  return (
    <>
      <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
        {children}
      </Drawer>
    </>
  );
}

export default DrawerUI;
