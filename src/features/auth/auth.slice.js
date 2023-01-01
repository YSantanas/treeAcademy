import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshToken, register } from './auth.api';

const initialState = {
  isLoading: true,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.token = null;
    });

    builder.addCase(refreshToken.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
