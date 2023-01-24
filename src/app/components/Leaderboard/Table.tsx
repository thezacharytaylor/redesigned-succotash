import { useEffect, useRef, useState } from 'react';
import List from './List';

// const buttonRefs = useRef(defaultRefArray);
const columns = ['index', 'name', 'score', 'date'];
const defaultRefArray: HTMLDivElement[] = [];

const Table = ({ headings, players }) => {
  const firstFocusedItem = players[0];
  const [testItem, setTestItem] = useState({ id: 0, rank: 0 });
  const [focusedRow, setFocusedRow] = useState(null);
  const rowRefs = useRef(defaultRefArray);

  useEffect(() => {
    setFocusedRow(players[0]);
  }, [players]);

  const rowRefLoad = row => {
    if (row !== null) {
      rowRefs.current.push(row);
    }
  };

  // Roving tabIndex error prevention
  const handleKeyDown = event => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        break;
    }
  };

  const logIssues = (plyr, rank, length) => {
    setTestItem({
      id: plyr !== undefined ? plyr.id : 'cutoff',
      rank: Number(rank),
    });
    console.log(
      'ID: ' +
        (plyr !== undefined ? plyr.id : 'cutoff') +
        ' | Rank: ' +
        Number(rank) +
        ' | Array Length: ' +
        length,
    );
    console.log(plyr);
  };

  // TODO: Allow roving index on table display for easier navigation
  const handleKeyUp = event => {
    const currentIndex = players[Number(event.target.dataset.rank)];

    if (event.key === 'ArrowDown') {
      // if (currentIndex + 7 <= players.length - 1) {
      const nextRow = Number(event.target.dataset.rank) + 1;
      console.log(nextRow);
      logIssues(currentIndex, event.target.dataset.rank, players.length);
      setFocusedRow(players[nextRow]);
      focusRowByIndex(nextRow);

      // } else {
      // focusRowByIndex(players.length + 1);
      // }
    } else if (event.key === 'ArrowUp') {
      // if (currentIndex - 7 > 0) {
      const nextRow = Number(event.target.dataset.rank) - 1;
      console.log(nextRow);
      logIssues(currentIndex, event.target.dataset.rank, players.length);
      setFocusedRow(players[nextRow]);
      focusRowByIndex(nextRow);
    }
  };

  // Set focus to new ref
  const focusRowByIndex = index => {
    rowRefs.current[index].focus();
  };

  // TODO: Add something to disable this, say for all time leaderboard
  const insertCutOff = index => {
    return (
      <>
        {index === 16 && (
          <tr
            data-rank={17}
            key="cutoff"
            role="note"
            // tabIndex={0}
            onKeyDown={event => handleKeyDown(event)}
            onKeyUp={event => handleKeyUp(event)}
            tabIndex={focusedRow === 16 ? 0 : -1}
            ref={elementRef => {
              rowRefLoad(elementRef);
            }}
            aria-label="Cut Off Line for Qualficiations"
          >
            <td className="bg-red-800"></td>
            <td className="text-white bg-red-800">Cutline - Top 16</td>
            <td className="bg-red-800"></td>
            <td className="text-white bg-red-800">Cutline - Top 16</td>
          </tr>
        )}
      </>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-zebra" role="grid">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th
                key={index}
                className={`${
                  index === 1 ? 'text-left' : ''
                } !bg-green-900 text-white`}
                scope="col"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <List
            players={players}
            columns={columns}
            addRowRef={rowRefLoad}
            insertCutOff={insertCutOff}
            focusedRow={focusedRow}
            keyDown={handleKeyDown}
            keyUp={handleKeyUp}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
