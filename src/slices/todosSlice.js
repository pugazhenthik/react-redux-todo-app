import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: todoAdapter.addOne,
    removeTodo: todoAdapter.removeOne,
  },
});

export const todoSelector = todoAdapter.getSelectors((state) => state.todos);

export const { actions } = todosSlice;
export default todosSlice.reducer;
