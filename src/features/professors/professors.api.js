import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export const getProfessors = createAsyncThunk(
  'professors/getProfessors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/professors`);
      return response.data;
    } catch (error) {
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
