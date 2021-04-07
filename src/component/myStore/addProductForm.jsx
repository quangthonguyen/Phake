import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncThunkAddProduct } from "../../Redux/Slice/addproductDialog";
import AddProductFormUI from "./addProductFormUI";

function AddProductForm() {
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.addProductDialog.loading);
  const error = useSelector((state) => state.addProductDialog.error);
  const dispatch = useDispatch();
  const dispatchAddProduct = useCallback(
    (data) => {
      dispatch(asyncThunkAddProduct(data));
    },
    [dispatch]
  );

  return (
    <>
      <AddProductFormUI
        userid={user._id}
        loading={loading}
        error={error}
        dispatchAddProduct={dispatchAddProduct}
      />
    </>
  );
}

export default AddProductForm;
