const Row = ({ index, columns, rowRefFunc, player }) => {
  const test = { index: 0 };

  return (
    <>
      <tr
        key={index}
        role="note"
        tabIndex={0}
        ref={elementRef => {
          rowRefFunc(elementRef);
        }}
        aria-label={`Rank ${index + 1} ${player['name']} scored ${
          player['score']
        } on ${player['date']}`}
      >
        {columns.map((column, colIndex) => (
          <td
            key={index + colIndex}
            className={`${colIndex === 0 ? 'pl-6' : ''} ${
              index % 2 === 0 ? '!bg-green-700' : '!bg-green-900'
            } text-white`}
          >
            {colIndex === 0 ? index + 1 : player[column]}
            {/* {(test.index = colIndex)} */}
          </td>
        ))}
      </tr>
    </>
  );
};

export default Row;
