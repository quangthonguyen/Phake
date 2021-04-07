import { Badge, IconButton, makeStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";

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

function ModbileCart(props) {
  const { cartList } = props;
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        classes={{ label: classes.label }}
        onClick={() => history.push("/cart")}
      >
        <Badge badgeContent={cartList.totalCart} color="secondary">
          <ShoppingCart />
        </Badge>
        <FormattedMessage id="bottomAppBar.cart" defaultMessage="Cart" />
      </IconButton>
    </>
  );
}

export default ModbileCart;
