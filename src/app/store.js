import { configureStore } from '@reduxjs/toolkit';
import { dogListReducer } from './reducers';

export const store = configureStore({
  reducer: dogListReducer,
});
