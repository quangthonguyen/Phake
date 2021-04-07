import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  axiosGetCartListById,
  axiosAddCart,
  axiosCartItemChangeQuatity,
  axiosRemoveCartItem,
} from "../../API/cart";
import { toggleLoginDialog } from "./dialog";

export const asyncThunkGetCartListById = createAsyncThunk(
  "asyncThunkGetCartListById",
  async (actions, thunkApi) => {
    const product = await axiosGetCartListById(actions);
    return product;
  }
);

export const asyncThunkAddCart = createAsyncThunk(
  "asyncThunkAddCart",
  async (actions, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const state = getState();
    if (!state.user._id) {
      await dispatch(toggleLoginDialog());
      console.log("daaada");
      return thunkApi.rejectWithValue({});
    } else {
      const product = await axiosAddCart(actions);
      return product;
    }
  }
);

export const asyncThunkChangeQuatityItemCart = createAsyncThunk(
  "asyncThunkChangeQuatityItemCart",
  async (actions, thunkApi) => {
    const { id, quatity, index } = actions;
    await axiosCartItemChangeQuatity({ id, quatity });
    return { index, quatity };
  }
);

export const asyncThunkRemoveItemCart = createAsyncThunk(
  "asyncThunkRemoveItemCart",
  async (actions, thunkApi) => {
    axiosRemoveCartItem(actions);
    return actions;
  }
);

const initialState = {
  totalCart: 0,
  data: [],
  addLoading: false,
  dataloading: false,
};
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeAllCart: (state, actions) => {
      state.data = [];
      state.totalCart = 0;
    },
  },
  extraReducers: {
    [asyncThunkAddCart.pending]: (state, actions) => {
      state.addLoading = true;
    },
    [asyncThunkAddCart.fulfilled]: (state, actions) => {
      state.data = [...state.data, actions.payload];
      state.totalCart = state.totalCart + 1;
      state.addLoading = false;
    },
    [asyncThunkAddCart.rejected]: (state, actions) => {
      state.addLoading = false;
    },
    [asyncThunkGetCartListById.pending]: (state, actions) => {
      state.dataloading = true;
    },
    [asyncThunkGetCartListById.fulfilled]: (state, actions) => {
      state.data = actions.payload.data;
      state.totalCart = actions.payload.totalCart;
      state.dataloading = false;
    },
    [asyncThunkChangeQuatityItemCart.fulfilled]: (state, actions) => {
      state.data[actions.payload.index].quatity = actions.payload.quatity;
    },
    [asyncThunkRemoveItemCart.fulfilled]: (state, actions) => {
      state.data = state.data.filter((element) => {
        return element._id !== actions.payload;
      });
      state.totalCart = state.totalCart - 1;
    },
  },
});

export const { changePage, changeRowsPerPage, removeAllCart } = cart.actions;
export default cart.reducer;
