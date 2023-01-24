const Row = ({
  index,
  columns,
  rowRefFunc,
  player,
  focusedRow,
  keyDown,
  keyUp,
}) => {
  return (
    <>
      <tr
        key={index}
        data-rank={index + 1}
        role="note"
        onKeyDown={event => keyDown(event)}
        onKeyUp={event => keyUp(event)}
        tabIndex={focusedRow === player ? 0 : -1}
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
          </td>
        ))}
      </tr>
    </>
  );
};

export default Row;
