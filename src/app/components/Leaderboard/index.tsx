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
            .map((player, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-300'}
              >
                <td className="pl-6">{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
                <td>{player.date}</td>
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
