import { Badge, Button, Popover } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { FormattedMessage } from "react-intl";
import ListCartUI from "./listCartUI";

function CartInfoUI(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { cartList } = props;
  return (
    <>
      <div>
        <Button
          startIcon={
            <Badge badgeContent={cartList.totalCart} color="secondary">
              <ShoppingCart />
            </Badge>
          }
          color="inherit"
          size="small"
          onClick={handleClick}
        >
          <FormattedMessage id="appBar.cart" defaultMessage="Cart" />
        </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <ListCartUI cartList={cartList} handleClose={handleClose} />
        </Popover>
      </div>
    </>
  );
}

export default CartInfoUI;
