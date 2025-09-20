import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../util/axios";


export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const results = await API.post("/auth/login", credentials);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: results.data.token,
          email: results.data.email,
          userName: results.data.userName,
          role: results.data.role,
          userId: results.data.userId,
        })
      );
      return results.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.invalid || "login failed");
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const results = await API.post("/auth/signup", userData);
      return results.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "signup failed");
    }
  }
);

const details = JSON.parse(localStorage.getItem("auth"))

const initialState = {
  userName: details?.userName || null,
  loading: false,
  emailAddr: details?.email || null,
  role: details?.role || null,
  error: null,
  token: details?.token || null,
  userId: details?.userId || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userName = null;
      state.token = null;
      state.emailAddr = null;
      state.role = null;
      state.userId = null
      localStorage.removeItem("auth");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userName = action.payload.userName;
        state.token = action.payload.token;
        state.emailAddr = action.payload.email;
        state.role = action.payload.role;
        state.userId = action.payload.userId
        state.error = action.payload.invalid || 'login failed'
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.userName = action.payload.userName;
        state.token = action.payload.token;
        state.emailAddr = action.payload.email;
        state.role = action.payload.role;
        state.userId = action.payload.userId
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;