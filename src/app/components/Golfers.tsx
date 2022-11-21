import React from 'react';

const initialInput = {
  name: '',
  score: 0,
};

const initialGolfers = [
  {
    id: 1,
    name: 'Ken Price',
    score: 20,
    date: '10/24/2022',
    inCup: true,
    qualified: true,
    checkedIn: true,
    seed: 1,
  },
  {
    id: 2,
    name: 'David Green',
    score: 18,
    date: '10/24/2022',
    inCup: true,
    qualified: true,
    checkedIn: true,
    seed: 2,
  },
];

function Golfers() {
  const [golferInput, setGolferInput] = React.useState(initialInput);
  const [golfers, setGolfers] = React.useState(initialGolfers);

  const handleGolferInput = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setGolferInput({ ...golferInput, [name]: value });
  };

  const addGolfer = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setGolfers([
      ...golfers,
      {
        id: golfers[golfers.length - 1].id + 1,
        name: golferInput.name,
        score: golferInput.score,
        date: new Date().toLocaleDateString('en-US'),
        inCup: true,
        qualified: true,
        checkedIn: true,
        seed: 2,
      },
    ]);

    setGolferInput({ name: '', score: 0 });
  };

  // const deleteGolfer = id => {};

  return (
    <div className="max-w-md p-10 my-5 bg-gray-200 border-solid rounded-md shadow-sm border-slate-50">
      <form action="#" onSubmit={addGolfer}>
        <input
          name="name"
          type="text"
          className="border-gray-500"
          // placeholder="Name"
          value={golferInput.name}
          onChange={handleGolferInput}
        />
        <input
          name="score"
          type="number"
          className="border-gray-500"
          placeholder="0"
          value={golferInput.score}
          onChange={handleGolferInput}
        />
        <button type="submit" className="px-2 text-white bg-gray-700">
          +
        </button>
      </form>
      <hr className="my-4 border-gray-800 border-solid" />
      <h2 className="mb-4 text-lg font-bold">Golfers:</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {golfers.map((golfer, index) => (
            <tr key={golfer.id}>
              <td>{index + 1}</td>
              <td>{golfer.name}</td>
              <td>{golfer.score}</td>
              <td>{golfer.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Golfers;
