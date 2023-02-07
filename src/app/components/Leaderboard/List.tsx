import React, { Key, KeyboardEvent } from 'react';
import Row from './Row';
import DefaultPlayer from 'app/interfaces/defaultPlayer';

interface Props {
  players: DefaultPlayer[];
  columns: string[];
  addRowRef: (row: HTMLDivElement | null) => void;
  insertCutOff: (index: Key | null | number) => JSX.Element;
  focusedRow: number | null;
  keyUp: (event: KeyboardEvent<HTMLTableRowElement>) => void;
  keyDown: (event: React.KeyboardEvent<HTMLTableRowElement>) => void;
}

const List = (props: Props): JSX.Element => {
  const {
    players,
    columns,
    addRowRef,
    insertCutOff,
    focusedRow,
    keyUp,
    keyDown,
  } = props;

  const checkKey = (num: Key | null | undefined | number, key: boolean) => {
    if (typeof num === 'number') {
      return key ? num + 22 : num;
    } else {
      return 0;
    }
  };
  // TODO: Move Cutline to after row component call.
  return (
    <>
      {players
        .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
        .map((player: DefaultPlayer, index: React.Key | null | undefined) => {
          return (
            <React.Fragment key={checkKey(index, true)}>
              {insertCutOff(checkKey(index, false))}
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
            </React.Fragment>
          );
        })}
    </>
  );
};

export default List;
