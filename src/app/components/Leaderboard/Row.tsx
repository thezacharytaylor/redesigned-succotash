const Row = ({ index, rows, buttonRefFunc, player }) => {
  return (
    <>
      <tr key={index}>
        {rows.map((row, rowIndex) => (
          <td
            key={index + rowIndex}
            className={`${rowIndex === 0 ? 'pl-6' : ''} ${
              index % 2 === 0 ? '!bg-green-700' : '!bg-green-900'
            }`}
          >
            <div
              className="p-0 text-white bg-transparent border-none cursor-default"
              role="note"
              // TODO: move tab index to function. Allow table select, then take control of arrow keys to navigate table freely.
              // https://github.com/thezacharytaylor/workshop-interactions-mechanics/blob/main/components/date-picker/date-picker.js
              tabIndex={0}
              ref={elementRef => {
                buttonRefFunc(elementRef);
              }}
            >
              {rowIndex === 0 ? index + 1 : player[row]}
            </div>
          </td>
        ))}
      </tr>
    </>
  );
};

export default Row;
