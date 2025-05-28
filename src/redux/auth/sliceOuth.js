import { createSlice } from "@reduxjs/toolkit";
import { login, refreshUser, register } from "./operation";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoading: false,
  isLoginIn: false,
  isErro: false,
  isRefresh: false,
};

const slise = createSlice({
  name: "auth",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isErro = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
        state.isLoginIn = true;
        state.isErro = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isErro = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isErro = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
        state.isLoginIn = true;
        state.isErro = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isErro = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isErro = false;
        state.isRefresh = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isErro = false;
        state.isLoginIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isErro = action.payload;
        state.isRefresh = false;
      });
  },
});

export const authReducer = slise.reducer;
