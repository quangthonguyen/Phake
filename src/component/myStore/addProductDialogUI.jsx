import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import AddProductForm from "./addProductForm";

function AddProductDialogUI(prors) {
  const { open, toggleAddProductDialog } = prors;
  return (
    <>
      <Dialog open={open} onClose={toggleAddProductDialog}>
        <DialogTitle id="alert-dialog-title">Add product</DialogTitle>
        <DialogContent>
          <AddProductForm />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddProductDialogUI;
