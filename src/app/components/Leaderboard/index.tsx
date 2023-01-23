import YearDisplay from '../YearDisplay';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Table from './Table';
import Loading from './Loading';

const Leaderboard = ({ headings, players }) => {
  return (
    <>
      <h2
        className="mb-4 text-lg font-bold text-gray-800"
        id="leaderboard-header"
      >
        <YearDisplay> Individual Qualifying High Scores</YearDisplay>
      </h2>
      {players.length > 0 && <Table headings={headings} players={players} />}
      {players.length === 0 && <Loading />}
    </>
  );
};

Leaderboard.Props = {
  headings: PropTypes.array,
  players: PropTypes.array,
};

export default Leaderboard;
