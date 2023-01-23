import React from 'react';
import { useRef } from 'react';
import Row from './Row';

const defaultRefArray: (HTMLButtonElement | null)[] = [];
// const buttonRefs = useRef(defaultRefArray);
const rows = ['index', 'name', 'score', 'date'];

const Table = ({ headings, players, addBtnRef }) => {
  // TODO: Resolve these variables
  // Roving tabIndex
  // const firstFocusedItemDate = datesArray[0];
  // const [focusedDate, setFocusedDate] = useState(firstFocusedItemDate);
  // const buttonRefs = useRef([]);

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
          <tr key="cutoff">
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
        aria-labelledby="leaderboard-header"
        role="grid"
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
                    buttonRefFunc={addBtnRef}
                    player={player}
                  />
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
