import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
