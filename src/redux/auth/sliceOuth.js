import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";

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
        state.token = action.paylaud.token;
        state.user = action.paylaud.user;
        state.isLoading = true;
        state.isErro = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isErro = action.paylaud;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isErro = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.paylaud.token;
        state.user = action.paylaud.user;
        state.isLoading = true;
        state.isErro = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isErro = action.paylaud;
      });
  },
});
