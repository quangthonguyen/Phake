import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import { Home, ShoppingCart, Ballot, Person } from "@material-ui/icons";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import CartInfo from "../appBar/cartInfo";
import ListUI from "../List/ListUI";
import DrawerUI from "./drawer";
import UserDrawer from "./userDrawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  rootToolBar: { justifyContent: "space-around", padding: "0px" },
  label: {
    flexDirection: "column",
    fontSize: theme.spacing(1.2),
    gap: "2px",
  },
}));

function BottomAppBar() {
  const classes = useStyles();
  const [Catagory, setCatagory] = useState(false);
  const toggleCatagory = () => {
    setCatagory((state) => !state);
  };
  const [User, setUser] = useState(false);
  const toggleUser = () => {
    setUser((state) => !state);
  };
  const history = useHistory();
  return (
    <>
      <DrawerUI open={Catagory} toggleDrawer={toggleCatagory} anchor="left">
        <ListUI toggleCatagory={toggleCatagory} />
      </DrawerUI>
      <DrawerUI open={User} toggleDrawer={toggleUser} anchor="right">
        <UserDrawer toggleDrawer={toggleUser} />
      </DrawerUI>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar classes={{ root: classes.rootToolBar }}>
          <IconButton
            edge="start"
            color="inherit"
            classes={{ label: classes.label }}
            onClick={() => history.push("/")}
          >
            <Home />
            <FormattedMessage id="bottomAppBar.home" defaultMessage="Home" />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            classes={{ label: classes.label }}
            onClick={toggleCatagory}
          >
            <Ballot />
            <FormattedMessage
              id="bottomAppBar.category"
              defaultMessage="Category"
            />
          </IconButton>
          <CartInfo />
          {/* <IconButton
            edge="start"
            color="inherit"
            classes={{ label: classes.label }}
            onClick={() => history.push("/cart")}
          >
            <ShoppingCart />
            <FormattedMessage id="bottomAppBar.cart" defaultMessage="Cart" />
          </IconButton> */}
          <IconButton
            edge="start"
            color="inherit"
            classes={{ label: classes.label }}
            onClick={toggleUser}
          >
            <Person />
            <FormattedMessage id="bottomAppBar.user" defaultMessage="User" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default BottomAppBar;
