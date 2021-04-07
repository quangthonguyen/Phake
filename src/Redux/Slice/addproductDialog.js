import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosAddProduct } from "../../API/product";
import { asyncThunkGetProduct } from "./arrayProduct";

export const asyncThunkAddProduct = createAsyncThunk(
  "asyncThunkAddProduct",
  async (actions, thunkApi) => {
    const product = await axiosAddProduct(actions);
    const state = thunkApi.getState();
    const { limit, currentPage } = state.arrayProduct.pagination;
    const { _id } = state.user;
    await thunkApi.dispatch(
      asyncThunkGetProduct({ limit, currentPage, vendorId: _id })
    );
    return product;
  }
);

const initialState = { open: false, loading: false, error: "" };
const addProductDialog = createSlice({
  name: "addProductDialog",
  initialState,
  reducers: {
    toggleAddProductDialog(state, actions) {
      state.open = !state.open;
    },
  },
  extraReducers: {
    [asyncThunkAddProduct.pending](state, actions) {
      state.loading = true;
    },
    [asyncThunkAddProduct.fulfilled](state, actions) {
      state.loading = false;
      state.open = false;
    },
    [asyncThunkAddProduct.rejected](state, actions) {
      state.loading = false;
      state.error = "Server go wrong!";
    },
  },
});

export const { toggleAddProductDialog } = addProductDialog.actions;
export default addProductDialog.reducer;
