import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, filtersSelector } from '../slices/filtersSlice';
import {
  scheduledTodosCount,
  completedTodosCount,
  importantTodosCount,
  archivedTodosCount,
  todosCount,
} from '../slices/todosSlice';

function FilterTodo() {
  const dispatch = useDispatch();
  const { filter } = useSelector(filtersSelector);

  const allCount = useSelector(todosCount);
  const scheduledCount = useSelector(scheduledTodosCount);
  const completedCount = useSelector(completedTodosCount);
  const importantCount = useSelector(importantTodosCount);
  const archivedCount = useSelector(archivedTodosCount);

  const filters = [
    {
      text: 'All',
      count: allCount,
    },
    {
      text: 'scheduled',
      count: scheduledCount,
    },
    {
      text: 'completed',
      count: completedCount,
    },
    {
      text: 'important',
      count: importantCount,
    },
    {
      text: 'archived',
      count: archivedCount,
      customClass:
        'border-red-300 bg-red-200 hover:bg-red-300 hover:border-red-400',
    },
  ];

  const handleAction = (action, type) => [dispatch(actions[action](type))];

  return (
    <div className="mb-4 mt-1">
      {filters.map((f) => (
        <button
          key={f.text}
          className={
            'py-1 px-2 bg-blue-200 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400 capitalize ' +
            (f.customClass ? f.customClass : '') +
            (filter === f.text ? 'bg-blue-300 hover:border-blue-400 ' : '') +
            (filter === f.text && f.text === 'archived'
              ? ' bg-red-300 border-red-400 hover:border-red-400'
              : ' ')
          }
          onClick={() => handleAction('setFilter', f.text)}
        >
          {f.text} ({f.count})
        </button>
      ))}
    </div>
  );
}

export default FilterTodo;
