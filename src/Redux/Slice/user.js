import { createSlice } from '@reduxjs/toolkit';

const initialState = { firstName: '', lastName: '' };
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser() {
      return { firstName: 'Nguyen', lastName: 'Tho' };
    },
  },
});

export const { getUser } = user.actions;
export default user.reducer;
