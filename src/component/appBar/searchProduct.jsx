import { debounce } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncThunkSearchProduct } from "../../Redux/Slice/searchProduct";
import SearchInputUI from "./searchInputUI";

function SearchProduct() {
  const data = useSelector((state) => state.searchProduct.data);
  const dispatch = useDispatch();
  const debounSearch = useCallback(
    debounce((search) => {
      dispatch(
        asyncThunkSearchProduct({ limit: 5, currentPage: 1, search: search })
      );
    }, 1000),
    [dispatch]
  );
  return (
    <>
      <SearchInputUI handleSearch={debounSearch} data={data} />
    </>
  );
}

export default SearchProduct;
