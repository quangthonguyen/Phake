import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false, value: 0 };
const dialog = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    toggleLoginDialog(state, actions) {
      state.open = !state.open;
    },
    swithToLogIn(state, actions) {
      state.value = 0;
    },
    swithToRegister(state, actions) {
      state.value = 1;
    },
    SwithTo(state, actions) {
      state.value = actions.payload;
    },
  },
});

export const { toggleLoginDialog, swithToLogIn, SwithTo } = dialog.actions;
export default dialog.reducer;
