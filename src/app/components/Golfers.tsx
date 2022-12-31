import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setScore } from 'features/golfer-input/inputSlice';
import { RootState } from 'store/reducers';
import LeaderBoard from './Leaderboard';
import Form from './Form';
import dayjs from 'dayjs';
import GolferData from '../../store/golfers.json';
import YearDisplay from './YearDisplay';

const defaultGolfer = {
  id: -1,
  name: '',
  score: 0,
  date: '',
  inCup: false,
  qualified: false,
  checkedIn: false,
  seed: 16,
  previousPlayer: false,
};

const Golfers = () => {
  const playerInput = useSelector((state: RootState) => state.golferInput);
  const dispatch = useDispatch();
  const [golfers, setGolfers] = useState([defaultGolfer]);

  useEffect(() => {
    setGolfers([...GolferData]);
  }, []);

  // TODO: Move to form when golfers moved to store
  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const updatedPlayer = updatePlayer();

    if (!updatedPlayer) {
      addGolfer();
    }
  };

  // TODO: To Store
  const updatePlayer = () => {
    let locatedGolfer = false;
    const updatedGolfers = golfers.map(golfer => {
      if (golfer.name === playerInput.name) {
        golfer.score = playerInput.score;
        golfer.date = dayjs().format('MM/DD/YYYY');
        locatedGolfer = true;
      }

      return golfer;
    });

    setGolfers(updatedGolfers);
    return locatedGolfer;
  };

  // TODO: To Store
  const addGolfer = () => {
    setGolfers([
      ...golfers,
      {
        id: golfers[golfers.length - 1].id + 1,
        name: playerInput.name,
        score: playerInput.score,
        date: dayjs().format('MM/DD/YYYY'),
        inCup: true,
        qualified: true,
        checkedIn: true,
        seed: 2,
        previousPlayer: false,
      },
    ]);

    dispatch(setName(''));
    dispatch(setScore(0));
  };

  // To Store
  // const deleteGolfer = id => {};

  return (
    <div className="p-10 my-5 bg-gray-200 border-solid rounded-md shadow-sm border-slate-50">
      <h2 className="mb-4 text-lg font-bold text-gray-800">
        <YearDisplay> Individual Qualifying High Scores</YearDisplay>
      </h2>
      <LeaderBoard
        headings={['Rank', 'Name', 'Score', 'Date']}
        players={golfers}
      />
      <hr className="my-4 border-gray-800 border-solid" />
      <h2 className="mb-4 text-lg font-bold text-gray-800">Add Score</h2>
      <Form submit={handleFormSubmit} golfers={golfers} />
    </div>
  );
};

export default Golfers;
