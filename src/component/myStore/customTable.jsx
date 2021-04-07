import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddProductDialog } from "../../Redux/Slice/addproductDialog";
import {
  asyncThunkGetProduct,
  changePage,
  changeRowsPerPage,
} from "../../Redux/Slice/arrayProduct";
import CustomTableUI from "./customTableUI";

function CustomTable() {
  const pagination = useSelector((state) => state.arrayProduct.pagination);
  const data = useSelector((state) => state.arrayProduct.data);
  const loading = useSelector((state) => state.arrayProduct.loading);
  const userId = useSelector((state) => state.user._id);
  const dispatch = useDispatch();
  const dispatchChangePage = useCallback(
    (page) => {
      dispatch(changePage(page));
    },
    [dispatch]
  );
  const dispatchChangeRowsPerPage = useCallback(
    (row) => {
      dispatch(changeRowsPerPage(row));
    },
    [dispatch]
  );
  const handletoggleAddProdcutDiaglog = useCallback(() => {
    dispatch(toggleAddProductDialog());
  }, [dispatch]);
  useEffect(() => {
    dispatch(
      asyncThunkGetProduct({
        limit: pagination.limit,
        currentPage: pagination.currentPage,
        vendorId: userId,
      })
    );
  }, [pagination.limit, pagination.currentPage, dispatch, userId]);
  return (
    <>
      <CustomTableUI
        pagination={pagination}
        dispatchChangePage={dispatchChangePage}
        dispatchChangeRowsPerPage={dispatchChangeRowsPerPage}
        data={data}
        loading={loading}
        handletoggleAddProdcutDiaglog={handletoggleAddProdcutDiaglog}
      />
    </>
  );
}

export default CustomTable;
