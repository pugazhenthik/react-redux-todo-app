import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/todosSlice';
import {
  HiOutlineStar,
  HiStar,
  HiOutlineDotsCircleHorizontal,
  HiOutlineCheckCircle,
  HiOutlineArchive,
} from 'react-icons/hi';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const { id, isCompleted, isImportant, isArchived } = todo;

  const handleComplete = (id) => () => {
    dispatch(
      actions.updateTodo({
        id: id,
        changes: { isCompleted: !isCompleted },
      })
    );
  };
  const handleImportant = (id) => () => {
    dispatch(
      actions.updateTodo({
        id: id,
        changes: { isImportant: !isImportant },
      })
    );
  };
  const handleArchive = (id) => () => {
    dispatch(
      actions.updateTodo({
        id: id,
        changes: { isArchived: !isArchived },
      })
    );
  };
  return (
    <div
      key={todo.id}
      className="p-4 my-4 rounded-md bg-white hover:shadow-blue-100 hover:shadow-lg"
    >
      <div className="flex text-gray-600">
        <div className="items-start">
          <button
            className={'h-8 hover:bg-slate-200 p-1 rounded-md text-2xl '}
            onClick={handleComplete(id)}
          >
            {!isCompleted && (
              <HiOutlineDotsCircleHorizontal></HiOutlineDotsCircleHorizontal>
            )}
            {isCompleted && <HiOutlineCheckCircle></HiOutlineCheckCircle>}
          </button>
        </div>
        <div className="pl-4 flex-grow items-center">{todo.todo}</div>
        <button
          className={
            'ml-2 h-8 hover:bg-slate-200 p-1 rounded-md text-2xl ' +
            (isImportant ? 'text-red-500' : '')
          }
          onClick={handleImportant(id)}
        >
          {!isImportant && <HiOutlineStar></HiOutlineStar>}
          {isImportant && <HiStar></HiStar>}
        </button>
        <button
          className="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md text-2xl"
          onClick={handleArchive(id)}
        >
          <HiOutlineArchive></HiOutlineArchive>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
