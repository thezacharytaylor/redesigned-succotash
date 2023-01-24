import { CSSTransition } from 'react-transition-group';
import Row from './Row';

const List = ({
  players,
  columns,
  addRowRef,
  insertCutOff,
  focusedRow,
  keyUp,
  keyDown,
}) => {
  return (
    <>
      {players
        .sort((a, b) => b.score - a.score)
        .map((player, index) => {
          return (
            <>
              {insertCutOff(index)}
              <Row
                key={index}
                index={index}
                columns={columns}
                rowRefFunc={addRowRef}
                player={player}
                focusedRow={focusedRow}
                keyDown={keyDown}
                keyUp={keyUp}
              />
            </>
          );
        })}
    </>
  );
};

export default List;
