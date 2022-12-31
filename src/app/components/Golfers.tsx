import { useEffect, useState } from 'react';
// import { getEvents } from 'features/calendar/calendarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setScore } from 'features/golfer-input/inputSlice';
import { RootState } from 'store/reducers';
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
  const input = useSelector(state => state.golferInput);
  const disptach = useDispatch();
  const [golferInput, setGolferInput] = useState(initialInput);
  const [golfers, setGolfers] = useState([defaultGolfer]);
  const [filteredGolfers, setFilteredGolfers] = useState([defaultGolfer]);

  useEffect(() => {
    setGolfers([...GolferData]);
  }, []);

  const handleGolferInput = (event: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = event.target;
    setGolferInput({ ...golferInput, [name]: value });

    if (name === 'name') {
      handlePrediction(value);
    }
  };

  const handlePrediction = value => {
    if (value.length > 0) {
      const newGolfers = golfers.filter(golfer => {
        const uniformName: string = golfer.name.toUpperCase();
        const uniformValue: string = value.toUpperCase();
        return uniformName.startsWith(uniformValue) ? golfer.name : '';
      });

      setFilteredGolfers([...newGolfers]);
    }
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
      <h2 className="mb-4 text-lg font-bold text-gray-800">
        <YearDisplay> Individual Qualifying High Scores</YearDisplay>
      </h2>
      <LeaderBoard
        headings={['Rank', 'Name', 'Score', 'Date']}
        players={golfers}
      />
      <hr className="my-4 border-gray-800 border-solid" />
      <h2 className="mb-4 text-lg font-bold text-gray-800">Add Score</h2>
      <Form
        submit={handleFormSubmit}
        input={handleGolferInput}
        info={golferInput}
        golfers={filteredGolfers}
      />
    </div>
  );
};

export default Golfers;
