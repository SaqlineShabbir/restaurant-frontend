import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  token: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    userLoggedOut: (state, action) => {
      state.user = undefined;
      state.token = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
