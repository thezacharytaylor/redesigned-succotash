import YearDisplay from '../YearDisplay';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const Leaderboard = ({ headings, players }) => {
  const buttonRefs = useRef([]);
  const identifer = 3;
  const rows = ['index', 'name', 'score', 'date'];

  {
    /* useEffect(() => {
    buttonRefs.current = [''];
  }, []); */
  }

  const handleKeyUp = event => {
    //
  };

  return (
    <>
      <h2
        className="mb-4 text-lg font-bold text-gray-800"
        id="leaderboard-header"
      >
        <YearDisplay> Individual Qualifying High Scores</YearDisplay>
      </h2>
      <div className="overflow-x-auto">
        <table
          className="table w-full table-zebra"
          aria-labelledby="leaderboard-header"
          role="grid"
        >
          <thead>
            <tr>
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className={index === 1 ? 'text-left' : ''}
                  scope="col"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players
              .sort((a, b) => b.score - a.score)
              .map((player, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-300'}
                >
                  {rows.map((row, rowIndex) => (
                    <td className={`${rowIndex === 0 ? 'pl-6' : ''}`}>
                      <button className="p-0 bg-transparent border-none cursor-default">
                        {rowIndex === 0 ? index + 1 : player[row]}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

Leaderboard.Props = {
  headings: PropTypes.array,
  players: PropTypes.array,
};

export default Leaderboard;
