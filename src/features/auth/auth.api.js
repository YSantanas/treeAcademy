import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const { response } = await axios.post(`${BASE_URL}/auth/register`, data);
      localStorage.setItem('token', response.data.token);
      message.success('Register successfully');
      return response.data;
    } catch (error) {
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, data);
      localStorage.setItem('token', response.data.token);
      message.success(`Bienvenido ${response.data.user.name}`);
      return response.data;
    } catch (error) {
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token');
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
