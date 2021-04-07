import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddProductDialog } from "../../Redux/Slice/addproductDialog";
import AddProductDialogUI from "./addProductDialogUI";

function AddProductDialog() {
  const open = useSelector((state) => state.addProductDialog.open);
  const dispatch = useDispatch();
  const handleToggleAddProductDialog = useCallback(() => {
    dispatch(toggleAddProductDialog());
  }, [dispatch]);
  return (
    <>
      <AddProductDialogUI
        open={open}
        toggleAddProductDialog={handleToggleAddProductDialog}
      />
    </>
  );
}

export default AddProductDialog;
