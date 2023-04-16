import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: 'scheduled' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, type) => {
      state.filter = type.payload;
    },
  },
});

export const filtersSelector = (state) => state.filters;

export const { actions } = filtersSlice;

export default filtersSlice.reducer;
