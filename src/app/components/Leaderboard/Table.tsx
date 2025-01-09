import {
  KeyboardEvent,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ReactI18NextChild } from 'react-i18next';
import List from './List';

// const buttonRefs = useRef(defaultRefArray);
const columns: string[] = ['index', 'name', 'score', 'date'];
const defaultRefArray: Array<HTMLDivElement | HTMLAnchorElement> = [];

const Table = ({ headings, players }) => {
  const [focusedRow, setFocusedRow] = useState(null);
  const rowRefs = useRef(defaultRefArray);

  useEffect(() => {
    setFocusedRow(players[0]);
  }, [players]);

  const rowRefLoad = (row: HTMLDivElement | HTMLAnchorElement | null) => {
    if (row !== null) {
      rowRefs.current.push(row);
    }
  };

  // Roving tabIndex error prevention
  const handleKeyDown = (
    event: KeyboardEvent<
      HTMLTableRowElement | HTMLAnchorElement | HTMLDivElement
    >,
  ) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        break;
    }
  };

  // Roving Tab Index for Table keyboard navigation
  const handleKeyUp = (
    event: React.KeyboardEvent<
      HTMLTableRowElement | HTMLAnchorElement | HTMLDivElement
    >,
  ) => {
    const currentRank =
      event.target instanceof HTMLElement
        ? Number(event.target.dataset.rank)
        : 0;

    if (event.key === 'ArrowDown') {
      const nextRow: number = getNextRowIndex(currentRank, false);

      if (players.length === currentRank) {
        setFocusedRow(players[0]);
        focusRowByIndex(1);
      } else {
        const nextPlayer: number = getNextPlayer(nextRow, false);
        setFocusedRow(players[nextPlayer]);
        focusRowByIndex(nextRow);
      }
    } else if (event.key === 'ArrowUp') {
      if (currentRank === 1) {
        const nextPlayer: number = players.length - 2;
        setFocusedRow(players[nextPlayer]);
        focusRowByIndex(players.length + 1);
      } else {
        const nextRow: number = getNextRowIndex(currentRank, true);
        const nextPlayer: number = getNextPlayer(nextRow, true);
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
  const focusRowByIndex = (index: number) => {
    rowRefs.current[index].focus();
  };

  // TODO: Add something to disable this, say for all time leaderboard
  const insertCutOff = (index: Key | null | number) => {
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
            <td className="bg-error"></td>
            <td className="text-white bg-error">Cutline - Top 16</td>
            <td className="bg-error"></td>
            <td className="text-white bg-error">Cutline - Top 16</td>
          </tr>
        )}
      </>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table
        className="table w-full"
        role="grid"
        aria-label="Table navigated with up and down arrow keys, tab to escape."
      >
        <thead>
          <tr>
            {headings.map(
              (
                heading:
                  | string
                  | number
                  | boolean
                  | ReactElement<
                      unknown,
                      string | JSXElementConstructor<unknown>
                    >
                  | ReactFragment
                  | ReactPortal
                  | Iterable<ReactI18NextChild>
                  | null
                  | undefined,
                index: Key | null | undefined,
              ) => (
                <th
                  key={index}
                  className={`${index === 1 ? 'text-left' : ''} bg-base-300`}
                  scope="col"
                >
                  {heading}
                </th>
              ),
            )}
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
