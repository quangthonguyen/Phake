import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncThunkChangeQuatityItemCart,
  asyncThunkRemoveItemCart,
} from "../../Redux/Slice/cart";
import CartUI from "./UI";

function Cart() {
  const data = useSelector((state) => state.cart.data);
  const dataloading = useSelector((state) => state.cart.dataloading);
  const dispatch = useDispatch();
  const handleChangeQuatity = useCallback(
    (id, quatity, index) => {
      dispatch(asyncThunkChangeQuatityItemCart({ id, quatity, index }));
    },
    [dispatch]
  );
  const handleRemove = useCallback(
    (id) => {
      dispatch(asyncThunkRemoveItemCart(id));
    },
    [dispatch]
  );
  return (
    <>
      <CartUI
        data={data}
        handleChangeQuatity={handleChangeQuatity}
        handleRemove={handleRemove}
        dataloading={dataloading}
      />
    </>
  );
}

export default Cart;
