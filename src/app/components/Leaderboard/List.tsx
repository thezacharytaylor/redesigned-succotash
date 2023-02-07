import React from 'react';
import Row from './Row';
import DefaultPlayer from 'app/interfaces/defaultPlayer';
import LeaderboardTableProps from 'app/interfaces/leaderboardPropTypes';

interface Props extends LeaderboardTableProps {
  players: DefaultPlayer[];
  columns: string[];
  insertCutOff: (index: React.Key | null | number) => JSX.Element;
}

const List = (props: Props): JSX.Element => {
  const {
    players,
    columns,
    focusedRow,
    addRowRef,
    insertCutOff,
    keyUp,
    keyDown,
  } = props;

  // TODO: Move Cutline to after row component call.
  return (
    <>
      {players
        .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
        .map((player: DefaultPlayer, index: number) => {
          return (
            <React.Fragment key={index}>
              {insertCutOff(index)}
              <Row
                key={index}
                index={index}
                columns={columns}
                addRowRef={addRowRef}
                player={player}
                focusedRow={focusedRow}
                keyDown={keyDown}
                keyUp={keyUp}
              />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default List;
