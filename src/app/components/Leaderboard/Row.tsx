import Label from './Label';

const Row = ({
  index,
  columns,
  rowRefFunc,
  player,
  focusedRow,
  keyDown,
  keyUp,
}) => {
  const rowColor = index > 15 ? 'out' : 'in';
  const colors = {
    out: ['bg-primary-focus/[.5]', 'bg-primary-focus/[.3]'],
    in: ['bg-accent/[.5]', 'bg-accent-focus/[.5]'],
  };
  return (
    <>
      <tr key={index}>
        {columns.map((column, colIndex) => (
          <td
            key={index + colIndex}
            className={`${colIndex === 0 ? 'pl-6' : ''} ${
              index % 2 === 0 ? colors[rowColor][0] : colors[rowColor][1]
            } text-white`}
          >
            <Label
              index={index}
              player={player}
              rowRefFunc={rowRefFunc}
              focusedRow={focusedRow}
              keyDown={keyDown}
              keyUp={keyUp}
              nameCol={colIndex === 1}
            >
              {colIndex === 0 ? index + 1 : player[column]}
              {player['previousPlayer'] && colIndex === 1 ? ' 🏌️‍♂️' : ''}
            </Label>
          </td>
        ))}
      </tr>
    </>
  );
};

export default Row;
