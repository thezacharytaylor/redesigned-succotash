import { CSSTransition } from 'react-transition-group';
import Row from './Row';

const List = ({ players, rows, addBtnRef, insertCutOff }) => {
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
                rows={rows}
                buttonRefFunc={addBtnRef}
                player={player}
              />
            </>
          );
        })}
    </>
  );
};

export default List;
