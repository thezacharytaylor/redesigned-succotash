import YearDisplay from '../YearDisplay';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Table from './Table';

const defaultRefArray: (HTMLButtonElement | null)[] = [];

const Leaderboard = ({ headings, players }) => {
  const buttonRefs = useRef(defaultRefArray);

  const buttonRefLoad = button => {
    buttonRefs.current.push(button);
  };

  return (
    <>
      <h2
        className="mb-4 text-lg font-bold text-gray-800"
        id="leaderboard-header"
      >
        <YearDisplay> Individual Qualifying High Scores</YearDisplay>
      </h2>
      {players.length > 0 && (
        <Table
          headings={headings}
          players={players}
          addBtnRef={buttonRefLoad}
        />
      )}
      {players.length === 0 &&
        (
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
        ) + ' Processing...'}
    </>
  );
};

Leaderboard.Props = {
  headings: PropTypes.array,
  players: PropTypes.array,
};

export default Leaderboard;
