import Label from './Label';
import DefaultPlayer from 'app/interfaces/defaultPlayer';

interface Props {
  index: number;
  columns: string[];
  rowRefFunc: (row: HTMLDivElement | HTMLAnchorElement | null) => void;
  player: DefaultPlayer;
  focusedRow: DefaultPlayer | null;
  keyDown: (
    event: React.KeyboardEvent<
      HTMLTableRowElement | HTMLAnchorElement | HTMLDivElement
    >,
  ) => void;
  keyUp: (
    event: React.KeyboardEvent<
      HTMLTableRowElement | HTMLAnchorElement | HTMLDivElement
    >,
  ) => void;
}

const Row = (props: Props) => {
  const { index, columns, rowRefFunc, player, focusedRow, keyDown, keyUp } =
    props;
  const rowColor = index > 15 ? 'out' : 'in';
  const colors = {
    out: ['bg-primary-focus/[.5]', 'bg-primary-focus/[.3]'],
    in: ['bg-accent/[.5]', 'bg-accent-focus/[.5]'],
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
