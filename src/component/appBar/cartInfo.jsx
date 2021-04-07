import { useMediaQuery } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncThunkGetCartListById } from "../../Redux/Slice/cart";
import ModbileCart from "../mobile/modbileCart";
import CartInfoUI from "./cartInfoUI";

function CartInfo() {
  const id = useSelector((state) => state.user._id);
  const dispatch = useDispatch();
  useEffect(() => {
    id !== "" && dispatch(asyncThunkGetCartListById(id));
  }, [id, dispatch]);
  const cartList = useSelector((state) => state.cart);
  const matches = useMediaQuery(
    (theme) => {
      return theme.breakpoints.up("md");
    },
    { noSsr: true }
  );
  return (
    <>
      {matches ? (
        <CartInfoUI cartList={cartList} />
      ) : (
        <ModbileCart cartList={cartList} />
      )}
    </>
  );
}

export default CartInfo;
