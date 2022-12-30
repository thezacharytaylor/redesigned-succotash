import React from 'react';
import PropTypes from 'prop-types';

const Leaderboard = ({ headings, players }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className={index === 1 ? 'text-left' : ''}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players
            .sort((a, b) => b.score - a.score)
            .map((golfer, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-300'}
              >
                <td className="pl-6">{index + 1}</td>
                <td>{golfer.name}</td>
                <td>{golfer.score}</td>
                <td>{golfer.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

Leaderboard.Props = {
  headings: PropTypes.array,
  players: PropTypes.array,
};

export default Leaderboard;
