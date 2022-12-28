import React from 'react';
import PropTypes from 'prop-types';

const Leaderboard = ({ headings, players }) => {
  return (
    <table className="w-full table-auto">
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
              <td className="text-center">{index + 1}</td>
              <td>{golfer.name}</td>
              <td className="text-center">{golfer.score}</td>
              <td className="text-center">{golfer.date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

Leaderboard.Props = {
  headings: PropTypes.array,
  players: PropTypes.array,
};

export default Leaderboard;
