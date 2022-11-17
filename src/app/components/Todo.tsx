import React from 'react';

function Todo() {
  const [todoInput, setTodoInput] = React.useState('');
  const [todos, setTodos] = React.useState([
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
  ]);

  // const todoItems = () => [...todoList];

  const handleTodoInput = event => {
    setTodoInput(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        title: todoInput,
        completed: false,
      },
    ]);

    setTodoInput('');
  };

  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md p-10 my-5 bg-gray-200 border-solid rounded-md shadow-sm border-slate-50">
      <form action="#" onSubmit={addTodo}>
        <input
          type="text"
          className="border-gray-500"
          value={todoInput}
          onChange={handleTodoInput}
        />
        <button type="submit" className="px-2 text-white bg-gray-700">
          +
        </button>
      </form>
      <hr className="my-4 border-gray-800 border-solid" />
      <h2 className="mb-4 text-lg font-bold">ToDo:</h2>
      <ul className="">
        {todos.map((todo, index) => (
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
            <label>{todo.title}</label>
            <button
              className="inline-block ml-auto mr-3"
              onClick={() => deleteTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
