import React from 'react';

function Golfers() {
  const [inputGolfer, setInputGolfer] = React.useState('');
  const [golfers, setGolfers] = React.useState([
    {
      name: 'Ken Price',
      score: 20,
      date: '10/24/2022',
      inCup: true,
      qualified: true,
      checkedIn: true,
      seed: 1,
    },
    {
      name: 'David Green',
      score: 20,
      date: '10/24/2022',
      inCup: true,
      qualified: true,
      checkedIn: true,
      seed: 2,
    },
  ]);

  const handleGolferInput = event => {
    setInputGolfer(event.target.value);
  };

  const addGolfer = () => {};

  return (
    <div className="max-w-md p-10 my-5 bg-gray-200 border-solid rounded-md shadow-sm border-slate-50">
      Golfers
    </div>
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
  );
}

export default Golfers;
