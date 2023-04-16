import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: todoAdapter.addOne,
    updateTodo: todoAdapter.updateOne,
    removeTodo: todoAdapter.removeOne,
  },
});

export const todoSelector = todoAdapter.getSelectors((state) => state.todos);

export const todosCount = (state) =>
  todoSelector.selectAll(state).filter((todo) => !todo.isArchived).length;

export const scheduledTodosCount = (state) =>
  todoSelector
    .selectAll(state)
    .filter((todo) => !todo.isCompleted && !todo.isArchived).length;

export const completedTodosCount = (state) =>
  todoSelector
    .selectAll(state)
    .filter((todo) => todo.isCompleted && !todo.isArchived).length;

export const importantTodosCount = (state) =>
  todoSelector
    .selectAll(state)
    .filter((todo) => todo.isImportant && !todo.isArchived).length;

export const archivedTodosCount = (state) =>
  todoSelector.selectAll(state).filter((todo) => todo.isArchived).length;

export const { actions } = todosSlice;
export default todosSlice.reducer;
