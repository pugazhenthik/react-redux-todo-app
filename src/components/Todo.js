import FilterTodo from './FilterTodo';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function Todo() {
  return (
    <div className="flex max-w-5xl bg-blue-50 p-4 h-screen mx-auto">
      <div className="flex-grow relative p-4">
        <FilterTodo></FilterTodo>
        <TodoList></TodoList>
        <AddTodo></AddTodo>
      </div>
    </div>
  );
}

export default Todo;
