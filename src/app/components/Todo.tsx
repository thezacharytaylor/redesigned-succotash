import React from 'react';

function Todo() {
  const [todos, setTodos] = React.useState();

  const todoList = [
    {
      id: 1,
      title: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn Routing',
      completed: true,
    },
    {
      id: 3,
      title: 'Learn Tailwind',
      completed: false,
    },
  ];

  const completeTodo = () => {};

  return (
    <div className="border-solid border-slate-50 shadow-sm bg-gray-200 p-10 rounded-md my-5 max-w-md">
      <input type="text" className="border-gray-500" />
      <hr className="my-4 border-solid border-gray-800" />
      <h2 className="mb-4 text-lg font-bold">ToDo:</h2>
      <ul className="">
        <li className="ml-3 flex items-center {{}}">
          <input
            type="checkbox"
            id="1"
            name="todo-1"
            value="learn"
            className="mr-5"
          />
          <label>Learn React</label>
          <button className="ml-auto mr-3">X</button>
        </li>
        <li className="ml-8">Do that</li>
        <li className="ml-8">Learn react</li>
        <li className="ml-8">learn tailwind</li>
      </ul>
    </div>
  );
}

export default Todo;
