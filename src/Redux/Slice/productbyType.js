import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosGetProductByType } from "../../API/product";

export const asyncThunkGetProductbyType = createAsyncThunk(
  "asyncThunkGetProductbyType",
  async (actions, thunkApi) => {
    const { limit, currentPage, type, sort } = actions;
    const refSort = {
      incPrice: { price: 1 },
      desPrice: { price: -1 },
      new: { _id: -1 },
      common: { _id: 1 },
    };
    console.log("productList", refSort[sort]);
    const productList = await axiosGetProductByType({
      limit,
      currentPage,
      type,
      sort: refSort[sort],
    });

    return productList;
  }
);
const initialState = {
  pagination: {
    limit: 15,
    totalPage: 1,
    currentPage: 1,
  },
  sort: { _id: -1 },
  data: [],
  loading: false,
};
const productByType = createSlice({
  name: "productByType",
  initialState,
  reducers: {
    changeSort(state, actions) {
      state.sort = actions.payload;
    },
  },
  extraReducers: {
    [asyncThunkGetProductbyType.pending]: (state, actions) => {
      state.loading = true;
    },
    [asyncThunkGetProductbyType.fulfilled]: (state, actions) => {
      state.loading = false;
      state.pagination = actions.payload.pagination || initialState.pagination;
      state.data = actions.payload.data || initialState.data;
      state.sort = actions.payload.sort || initialState.sort;
    },
  },
});

export const { changeSort } = productByType.actions;
export default productByType.reducer;
