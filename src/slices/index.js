import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todosSlice';
import filtersSlice from './filtersSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
    filters: filtersSlice,
  },
});

export default store;
