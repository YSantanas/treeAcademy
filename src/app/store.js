import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/auth.slice';
import { professorsReducer } from '../features/professors/professors.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    professors: professorsReducer,
  },
});
