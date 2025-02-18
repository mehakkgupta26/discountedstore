import { createSlice } from '@reduxjs/toolkit';



const authSlice = createSlice({
  name: 'auth',
  initialState:{
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
