import React, { useEffect, useState } from 'react';
import LeaderBoard from './Leaderboard';
import Form from './Form';
import dayjs from 'dayjs';
import GolferData from '../../store/golfers.json';
import YearDisplay from './YearDisplay';

const initialInput = {
  name: '',
  score: 1,
};

const defaultGolfer = {
  id: 0,
  name: '',
  score: 0,
  date: '',
  inCup: false,
  qualified: false,
  checkedIn: false,
  seed: 16,
  previousPlayer: false,
};

function Golfers() {
  const [golferInput, setGolferInput] = useState(initialInput);
  const [golfers, setGolfers] = useState([defaultGolfer]);

  useEffect(() => {
    setGolfers([...GolferData]);
  }, []);

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
        golfer.date = dayjs().format('MM/DD/YYYY');
        locatedGolfer = true;
      }

      return golfer;
    });

    setGolfers(updatedGolfers);
    return locatedGolfer;
  };

  // This might need to be a custom hook
  const addGolfer = () => {
    setGolfers([
      ...golfers,
      {
        id: golfers[golfers.length - 1].id + 1,
        name: golferInput.name,
        score: golferInput.score,
        date: dayjs().format('MM/DD/YYYY'),
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
      <h2 className="mb-4 text-lg font-bold">
        <YearDisplay> Individual Qualifying High Scores</YearDisplay>
      </h2>
      <LeaderBoard
        headings={['Rank', 'Name', 'Score', 'Date']}
        players={golfers}
      />
    </div>
  );
}

export default Golfers;
