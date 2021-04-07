import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLang = createAsyncThunk(
  "setting",
  async (actions, thunkApi) => {
    return thunkApi.extra;
  }
);
const initialState = { lang: "en" };
const setting = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeLang(state, actions) {
      return { lang: actions.payload };
    },
  },
  extraReducers: {
    [getLang.fulfilled]: (state, actions) => {
      return { lang: actions.payload };
    },
  },
});

export const { changeLang } = setting.actions;
export default setting.reducer;
