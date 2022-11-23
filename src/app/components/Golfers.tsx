import React, { useState } from 'react';
import LeaderBoard from './Leaderboard';
import Form from './Form';

const initialInput = {
  name: '',
  score: 1,
};

const initialGolfers = [
  {
    id: 1,
    name: 'Ken Price',
    score: 18,
    date: '10/24/2022',
    inCup: true,
    qualified: true,
    checkedIn: true,
    seed: 1,
    previousPlayer: false,
  },
  {
    id: 2,
    name: 'David Green',
    score: 19,
    date: '10/24/2022',
    inCup: true,
    qualified: true,
    checkedIn: true,
    seed: 2,
    previousPlayer: true,
  },
];

function Golfers() {
  const [golferInput, setGolferInput] = useState(initialInput);
  const [golfers, setGolfers] = useState(initialGolfers);

  const handleGolferInput = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setGolferInput({ ...golferInput, [name]: value });
  };

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const updatedGolfer = updateGolfer();

    if (!updatedGolfer) {
      addGolfer();
    }
  };

  const updateGolfer = () => {
    let locatedGolfer = false;
    const updatedGolfers = golfers.map(golfer => {
      if (golfer.name === golferInput.name) {
        golfer.score = golferInput.score;
        locatedGolfer = true;
      }

      return golfer;
    });

    setGolfers(updatedGolfers);
    return locatedGolfer;
  };

  const addGolfer = () => {
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
        previousPlayer: false,
      },
    ]);

    setGolferInput({ name: '', score: 1 });
  };

  // const deleteGolfer = id => {};

  return (
    <div className="p-10 my-5 bg-gray-200 border-solid rounded-md shadow-sm border-slate-50">
      <Form
        submit={handleFormSubmit}
        input={handleGolferInput}
        info={golferInput}
      />
      <hr className="my-4 border-gray-800 border-solid" />
      <h2 className="mb-4 text-lg font-bold">Golfers:</h2>
      <LeaderBoard
        headings={['Rank', 'Name', 'Score', 'Date']}
        players={golfers}
      />
    </div>
  );
}

export default Golfers;
