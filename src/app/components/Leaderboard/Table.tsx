import { useRef, useState } from 'react';
import List from './List';

// const buttonRefs = useRef(defaultRefArray);
const columns = ['index', 'name', 'score', 'date'];
const defaultRefArray: (HTMLDivElement | null)[] = [];

const Table = ({ headings, players }) => {
  const firstFocusedItem = players[0];
  const [focusedRow, setFocusedRow] = useState(firstFocusedItem);
  const rowRefs = useRef(defaultRefArray);

  const rowRefLoad = row => {
    rowRefs.current.push(row);
  };

  // Roving tabIndex
  const handleKeyDown = event => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        break;
    }
  };

  // TODO: Resolve
  const handleKeyUp = event => {
    // const currentIndex = datesArray.indexOf(event.target.dataset.date);
    // if (event.key === 'ArrowRight') {
    //   if (currentIndex >= datesArray.length - 1) {
    //     focusDayByIndex(0);
    //   } else {
    //     focusDayByIndex(currentIndex + 1);
    //   }
    // } else if (event.key === 'ArrowLeft') {
    //   if (currentIndex === 0) {
    //     focusDayByIndex(datesArray.length - 1);
    //   } else {
    //     focusDayByIndex(currentIndex - 1);
    //   }
    // } else if (event.key === 'ArrowDown') {
    //   if (currentIndex + 7 <= datesArray.length - 1) {
    //     focusDayByIndex(currentIndex + 7);
    //   } else {
    //     focusDayByIndex(datesArray.length - 1);
    //   }
    // } else if (event.key === 'ArrowUp') {
    //   if (currentIndex - 7 > 0) {
    //     focusDayByIndex(currentIndex - 7);
    //   } else {
    //     focusDayByIndex(0);
    //   }
    // }
  };

  // TODO: Resolve
  const focusDayByIndex = index => {
    // buttonRefs.current[index].focus();
  };

  // TODO: Add something to disable this, say for all time leaderboard
  const insertCutOff = index => {
    return (
      <>
        {index === 16 && (
          <tr
            key="cutoff"
            role="note"
            tabIndex={0}
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
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
