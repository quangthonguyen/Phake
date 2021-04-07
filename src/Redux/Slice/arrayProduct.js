import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosGetProductList } from "../../API/product";

export const asyncThunkGetProduct = createAsyncThunk(
  "asyncThunkGetProductList",
  async (actions, thunkApi) => {
    const productList = await axiosGetProductList(actions);
    return productList;
  }
);
const initialState = {
  pagination: {
    limit: 5,
    totalPage: 1,
    currentPage: 1,
  },
  data: [],
  loading: false,
};
const arrayProduct = createSlice({
  name: "arrayProduct",
  initialState,
  reducers: {
    changePage(state, actions) {
      state.pagination.currentPage = actions.payload;
    },
    changeRowsPerPage(state, actions) {
      state.pagination.limit = actions.payload;
      state.pagination.currentPage = 1;
    },
  },
  extraReducers: {
    [asyncThunkGetProduct.pending]: (state, actions) => {
      state.loading = true;
    },
    [asyncThunkGetProduct.fulfilled]: (state, actions) => {
      state.loading = false;
      state.pagination = actions.payload.pagination;
      state.data = actions.payload.data;
    },
  },
});

export const { changePage, changeRowsPerPage } = arrayProduct.actions;
export default arrayProduct.reducer;
