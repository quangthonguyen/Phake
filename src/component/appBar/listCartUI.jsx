import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FormattedNumber } from "react-intl";
import { useHistory } from "react-router";

const useStyle = makeStyles((theme) => ({
  rootlist: {
    width: "300px",
  },
  cartActions: {
    width: "100%",
    display: "flex",
    gap: "10px",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
}));
function ListCartUI(props) {
  const classes = useStyle();
  const { cartList, handleClose } = props;
  const history = useHistory();
  return (
    <>
      <List dense classes={{ root: classes.rootlist }}>
        {cartList.data.length === 0 && (
          <ListItem button>
            <ListItemText
              primary="Chưa có sản phẩm nào !"
              style={{ textAlign: "center" }}
            />
          </ListItem>
        )}
        {cartList.data.map((value, index) => {
          return (
            <ListItem
              key={index}
              button
              onClick={() => {
                handleClose();
                history.push(`/product/${value.product._id}`);
              }}
            >
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  alt="product image"
                  src={value.product.image[0]}
                />
              </ListItemAvatar>
              <div class={classes.cartText}>
                <ListItemText primary={`${value.product.productName}`} />
                <ListItemText
                  primary={
                    <FormattedNumber
                      value={value.product.price}
                      style="currency"
                      currency="VND"
                    />
                  }
                />
              </div>
            </ListItem>
          );
        })}
        <ListItem>
          <div class={classes.cartActions}>
            <Typography variant="caption" component="h2">
              {`Có ${cartList.totalCart} sp`}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              size="small"
              onClick={() => {
                handleClose();
                history.push("/cart");
              }}
            >
              Xem thêm
            </Button>
          </div>
        </ListItem>
      </List>
    </>
  );
}

export default ListCartUI;
