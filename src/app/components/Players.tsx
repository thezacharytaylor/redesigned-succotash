import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setScore } from 'features/player-input/inputSlice';
import { RootState } from 'store/reducers';
import LeaderBoard from './Leaderboard';
import Form from './Form';
import dayjs from 'dayjs';
import PlayerData from '../../store/golfers.json';
import DefaultPlayer from 'app/interfaces/defaultPlayer';

const defaultPlayer: DefaultPlayer = {
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

const Players = () => {
  const playerInput = useSelector((state: RootState) => state.playerInput);
  const dispatch = useDispatch();
  const [players, setPlayers] = useState<DefaultPlayer[]>([defaultPlayer]);

  useEffect((): void => {
    setPlayers([...PlayerData]);
  }, []);

  // TODO: Move to form when players moved to store
  // TODO: Make Slice
  // TODO: Make/Add reducer
  // TODO: Cleanup code
  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const updatedPlayer: boolean = updatePlayer();

    if (!updatedPlayer) {
      addPlayer();
    }
  };

  // TODO: To Store
  const updatePlayer = (): boolean => {
    let locatedPlayer = false;
    const updatedPlayers: DefaultPlayer[] = players.map(
      (golfer: DefaultPlayer) => {
        if (golfer.name === playerInput.name) {
          golfer.score = playerInput.score;
          golfer.date = dayjs().format('MM/DD/YYYY');
          locatedPlayer = true;
        }

        return golfer;
      },
    );

    setPlayers(updatedPlayers);
    return locatedPlayer;
  };

  // TODO: To Store
  const addPlayer = (): void => {
    setPlayers([
      ...players,
      {
        id: players[players.length - 1].id + 1,
        name: playerInput.name,
        score: +playerInput.score,
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
  // const deletePlayer = id => {};

  return (
    <div className="p-10 my-5 border-solid rounded-md shadow-sm bg-primary-content border-slate-50">
      <LeaderBoard
        headings={['Rank', 'Name', 'Score', 'Date']}
        players={players}
      />
      <hr className="my-4 border-solid border-secondary-content" />
      <h2 className="mb-4 text-lg font-bold text-gray-800">Add Score</h2>
      <Form submit={handleFormSubmit} players={players} />
    </div>
  );
};

export default Players;
