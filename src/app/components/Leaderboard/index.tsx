import YearDisplay from '../YearDisplay';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import Row from './Row';

const defaultRefArray: (HTMLButtonElement | null)[] = [];

const Leaderboard = ({ headings, players }) => {
  const buttonRefs = useRef(defaultRefArray);
  const rows = ['index', 'name', 'score', 'date'];

  const buttonRefLoad = button => {
    buttonRefs.current.push(button);
  };

  const insertCutOff = index => {
    console.log(index === 15);

    return (
      <>
        {index === 16 && (
          <tr key="cutoff" className="bg-red-700">
            <td className="bg-red-700"></td>
            <td className="bg-red-700">
              <div className="p-0 bg-transparent border-none cursor-default">
                Cut Off
              </div>
            </td>
            <td className="bg-red-700"></td>
            <td className="bg-red-700">Cut Off</td>
          </tr>
        )}
      </>
    );
  };

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
              .map((player, index) => {
                return (
                  <>
                    {insertCutOff(index)}
                    <Row
                      key={index}
                      index={index}
                      rows={rows}
                      buttonRefFunc={buttonRefLoad}
                      player={player}
                    />
                  </>
                );
              })}
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
