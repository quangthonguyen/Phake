import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../API/user";
import { asyncThunkGetCartListById, removeAllCart } from "./cart";
import { toggleLoginDialog, swithToLogIn } from "./dialog";

export const logIn = createAsyncThunk("logIn", async (actions, thunkApi) => {
  const user = await login(actions);
  if (user.data.error) {
    return user.data;
  } else {
    console.log("id", user.data._id);
    await thunkApi.dispatch(toggleLoginDialog());
    await thunkApi.dispatch(asyncThunkGetCartListById(user.data._id));
    return user.data;
  }
});

export const registerThunk = createAsyncThunk(
  "register",
  async (actions, thunkApi) => {
    const user = await register(actions);
    if (user.data.error) {
      return user.data;
    }
    thunkApi.dispatch(swithToLogIn());
    return user.data;
  }
);

export const logOutThunk = createAsyncThunk(
  "logOutThunk",
  async (actions, thunkApi) => {
    localStorage.removeItem("token");
    localStorage.removeItem("acsesstoken");
    thunkApi.dispatch(logOut());
    thunkApi.dispatch(removeAllCart());
  }
);

const initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  __v: "",
  error: "",
  loading: false,
  registerError: "",
  registerLoading: false,
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, actions) {
      return { ...initialState };
    },
  },
  extraReducers: {
    [logIn.pending]: (state, actions) => {
      return { ...state, loading: true };
    },
    [logIn.fulfilled]: (state, actions) => {
      return { ...state, ...actions.payload, loading: false };
    },
    [logIn.rejected]: (state, actions) => {
      return { ...state, ...actions.payload, loading: false };
    },
    [registerThunk.pending]: (state, actions) => {
      return { ...state, registerLoading: true };
    },
    [registerThunk.fulfilled]: (state, actions) => {
      return {
        ...state,
        registerLoading: false,
        email: actions.payload.email,
        registerError: actions.payload.error || "",
      };
    },
    [registerThunk.rejected]: (state, actions) => {
      return {
        ...state,
        registerLoading: false,
        registerError: actions.payload.error,
      };
    },
  },
});

export const { logOut } = user.actions;
export default user.reducer;
