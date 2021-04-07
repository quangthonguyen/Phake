import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { asyncThunkGetProductbyType } from "../../Redux/Slice/productbyType";
import ProductListByTypeUI from "./UI";

function ProductListByType() {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.productbyType.pagination);
  const loading = useSelector((state) => state.productbyType.loading);
  const data = useSelector((state) => state.productbyType.data);
  const { type, page = 1, sortBy = "commom" } = useParams();
  useEffect(() => {
    dispatch(
      asyncThunkGetProductbyType({
        limit: 15,
        currentPage: page,
        type: type,
        sort: sortBy,
      })
    );
  }, [page, sortBy, type]);
  return (
    <>
      <ProductListByTypeUI
        pagination={pagination}
        sort={sortBy}
        data={data}
        type={type}
        loading={loading}
      />
    </>
  );
}

export default ProductListByType;
