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

  // Roving Tab Index for Table keyboard navigation
  const handleKeyUp = event => {
    const currentRank = Number(event.target.dataset.rank);

    if (event.key === 'ArrowDown') {
      const nextRow = getNextRowIndex(currentRank, false);

      if (players.length === currentRank) {
        setFocusedRow(players[0]);
        focusRowByIndex(0);
      } else {
        const nextPlayer = getNextPlayer(nextRow, false);
        setFocusedRow(players[nextPlayer]);
        focusRowByIndex(nextRow);
      }
    } else if (event.key === 'ArrowUp') {
      if (currentRank === 1) {
        const nextPlayer = players.length - 2;
        setFocusedRow(players[nextPlayer]);
        focusRowByIndex(players.length + 1);
      } else {
        const nextRow = getNextRowIndex(currentRank, true);
        const nextPlayer = getNextPlayer(nextRow, true);
        setFocusedRow(players[nextPlayer]);
        focusRowByIndex(nextRow);
      }
    }
  };

  // TODO: If an option to disable cutoff is ever built in, this needs to be factored in here
  const getNextRowIndex = (rank: number, subtract: boolean) => {
    if (subtract && rank === 17) {
      return rank;
    } else if (rank === 1995) {
      return subtract ? 16 : 18;
    } else {
      return subtract ? rank - 1 : rank + 1;
    }
  };

  const getNextPlayer = (next: number, subtract: boolean) => {
    if (players.length === next - 1) {
      return 0;
    } else if (subtract && next === 1) {
      return players.length - 1;
    } else if (next === 17) {
      return subtract ? 15 : 16;
    } else if (next === 16) {
      return subtract ? next - 2 : next;
    } else {
      return subtract ? next - 2 : next;
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
            data-rank={1995}
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
      <table
        className="table w-full table-zebra"
        role="grid"
        aria-label="Table navigated with up and down arrow keys, tab to escape."
      >
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
