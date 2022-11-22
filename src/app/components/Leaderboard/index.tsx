import React from 'react';
import PropTypes from 'prop-types';

const Leaderboard = ({ headings, players }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {players
          .sort((a, b) => b.score - a.score)
          .map((golfer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{golfer.name}</td>
              <td>{golfer.score}</td>
              <td>{golfer.date}</td>
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
