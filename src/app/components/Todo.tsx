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

  // const todoItems = () => [...todoList];

  const completeTodo = id => {
    todoList[id].completed = true;
  };

  return (
    <div className="max-w-md p-10 my-5 bg-gray-200 border-solid rounded-md shadow-sm border-slate-50">
      <input type="text" className="border-gray-500" />
      <hr className="my-4 border-gray-800 border-solid" />
      <h2 className="mb-4 text-lg font-bold">ToDo:</h2>
      <ul className="">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            className={`ml-3 flex items-center ${
              todo.completed ? 'line-through' : ''
            }"`}
          >
            <input
              type="checkbox"
              className="mr-5"
              onChange={() => completeTodo(todo.id)}
              checked={todo.completed ? true : false}
            />
            <label>Learn React</label>
            <button className="inline-block ml-auto mr-3">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
