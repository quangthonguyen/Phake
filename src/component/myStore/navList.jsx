import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleAddProductDialog } from "../../Redux/Slice/addproductDialog";
import NavListUI from "./navListUI";

function NavList() {
  const dispatch = useDispatch();
  const handletoggleAddProdcutDiaglog = useCallback(() => {
    dispatch(toggleAddProductDialog());
  }, [dispatch]);
  return (
    <>
      <NavListUI toogleAddProductDiaglePror={handletoggleAddProdcutDiaglog} />
    </>
  );
}

export default NavList;
