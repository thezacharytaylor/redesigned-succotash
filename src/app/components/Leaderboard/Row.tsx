import React from 'react';

const Row = ({ index, rows, buttonRefFunc, player }) => {
  return (
    <>
      <tr
        key={index}
        className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-300'}
      >
        {rows.map((row, rowIndex) => (
          <td
            key={index + rowIndex}
            className={`${rowIndex === 0 ? 'pl-6' : ''}`}
          >
            <button
              className="p-0 bg-transparent border-none cursor-default"
              ref={elementRef => {
                buttonRefFunc(elementRef);
              }}
            >
              {rowIndex === 0 ? index + 1 : player[row]}
            </button>
          </td>
        ))}
      </tr>
    </>
  );
};

export default Row;
