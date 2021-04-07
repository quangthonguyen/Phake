import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosGetProductById } from "../../API/product";

export const asyncThunkGetProductById = createAsyncThunk(
  "asyncThunkGetProductById",
  async (actions, thunkApi) => {
    const product = await axiosGetProductById(actions);
    return product;
  }
);
const initialState = {
  image: [],
  _id: "",
  productName: " ",
  price: 0,
  stock: 1,
  description: " ",
  type: " ",
  vendor: {
    _id: "",
    firstName: "",
    lastName: "",
  },
  loading: false,
};
const productDetail = createSlice({
  name: "productDetail",
  initialState,
  extraReducers: {
    [asyncThunkGetProductById.pending]: (state, actions) => {
      state.loading = true;
    },
    [asyncThunkGetProductById.fulfilled]: (state, actions) => {
      return { ...actions.payload, loading: false };
    },
  },
});

export const { changePage, changeRowsPerPage } = productDetail.actions;
export default productDetail.reducer;
