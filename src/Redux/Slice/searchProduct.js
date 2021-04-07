import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosSearchProduct } from "../../API/product";

export const asyncThunkSearchProduct = createAsyncThunk(
  "asyncThunkSearchProduct",
  async (actions, thunkApi) => {
    const productList = await axiosSearchProduct(actions);
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
const searchProduct = createSlice({
  name: "searchProduct",
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
    [asyncThunkSearchProduct.pending]: (state, actions) => {
      state.loading = true;
    },
    [asyncThunkSearchProduct.fulfilled]: (state, actions) => {
      state.loading = false;
      state.pagination = actions.payload.pagination || initialState.pagination;
      state.data = actions.payload.data || initialState.data;
    },
  },
});

export const { changePage, changeRowsPerPage } = searchProduct.actions;
export default searchProduct.reducer;
