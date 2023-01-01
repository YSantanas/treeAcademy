import { createSlice } from '@reduxjs/toolkit';
import { getProfessors } from './professors.api';

const initialState = {
  isLoading: true,
  professors: [],
  error: null,
};

const professorsSlice = createSlice({
  name: 'professors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfessors.fulfilled, (state, action) => {
      state.professors = action.payload;
    });
    builder.addCase(getProfessors.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const professorsReducer = professorsSlice.reducer;
