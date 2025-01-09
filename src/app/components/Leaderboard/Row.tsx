import Label from './Label';
import DefaultPlayer from 'app/interfaces/defaultPlayer';
import LeaderboardTableProps from 'app/interfaces/leaderboardPropTypes';

interface Props extends LeaderboardTableProps {
  index: number;
  columns: string[];
  player: DefaultPlayer;
}

const Row = (props: Props) => {
  const { index, columns, addRowRef, player, focusedRow, keyDown, keyUp } =
    props;
  const rowColor = index > 15 ? 'out' : 'in';
  const colors = {
    in: ['bg-primary-focus/[.5]', 'bg-secondary-focus/[.5]'],
    out: ['bg-accent/[.5]', 'bg-accent-focus/[.5]'],
  };
  return (
    <>
      <tr key={index}>
        {columns.map((column: string | number, colIndex: number) => (
          <td
            key={index + colIndex}
            className={`${colIndex === 0 ? 'pl-6' : ''} ${
              index % 2 === 0 ? colors[rowColor][0] : colors[rowColor][1]
            } text-white`}
          >
            <Label
              index={index}
              player={player}
              addRowRef={addRowRef}
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
