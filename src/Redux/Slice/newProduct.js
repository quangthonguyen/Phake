import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosGetNewProduct } from "../../API/product";

export const asyncThunkGetNewProduct = createAsyncThunk(
  "asyncThunkGetNewProduct",
  async (actions, thunkApi) => {
    const product = await axiosGetNewProduct(actions);
    return product;
  }
);
const initialState = { data: [], loading: false };
const newProduct = createSlice({
  name: "newProduct",
  initialState,
  extraReducers: {
    [asyncThunkGetNewProduct.pending]: (state, actions) => {
      state.loading = true;
    },
    [asyncThunkGetNewProduct.fulfilled]: (state, actions) => {
      state.loading = false;
      state.data = actions.payload.data || initialState.data;
    },
  },
});

export default newProduct.reducer;
