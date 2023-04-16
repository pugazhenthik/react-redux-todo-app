import React from 'react';

function FilterTodo() {
  return (
    <div className="mb-4 mt-1">
      <button
        href=""
        className="py-1 px-2 bg-blue-200 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400"
      >
        All (6)
      </button>
      <button
        href=""
        className="py-1 px-2 bg-blue-200 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400"
      >
        Freelancer (4)
      </button>
      <button
        href=""
        className="py-1 px-2 bg-red-200 rounded-md border-2 border-red-300 text-sm text-gray-800 mr-2 hover:bg-red-300 hover:border-red-400"
      >
        My Project (2)
      </button>
    </div>
  );
}

export default FilterTodo;
