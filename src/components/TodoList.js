import { useSelector } from 'react-redux';
import { todoSelector } from '../slices/todosSlice';
import TodoItem from './TodoItem';
import { filtersSelector } from '../slices/filtersSlice';

function TodoList() {
  const { filter } = useSelector(filtersSelector);

  const todos = useSelector(todoSelector.selectAll).filter((todo) => {
    switch (filter) {
      case 'all':
        return !todo.isArchived;
      case 'scheduled':
        return !todo.isArchived && !todo.isCompleted;
      case 'completed':
        return !todo.isArchived && todo.isCompleted;
      case 'important':
        return !todo.isArchived && todo.isImportant;
      case 'archived':
        return todo.isArchived;
      default:
        return true;
    }
  });

  return (
    <div className="my-4 h-4/5 overflow-scroll">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id}></TodoItem>
      ))}
    </div>
  );
}

export default TodoList;
