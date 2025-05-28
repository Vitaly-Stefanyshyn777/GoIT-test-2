import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHedar = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credential);
      setAuthHedar(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credential);
      setAuthHedar(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("токен");
    }
    setAuthHedar(token);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
