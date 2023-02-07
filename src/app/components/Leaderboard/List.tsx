import React, { Key, KeyboardEvent } from 'react';
import Row from './Row';
import DefaultPlayer from 'app/interfaces/defaultPlayer';

interface Props {
  players: DefaultPlayer[];
  columns: string[];
  addRowRef: (row: HTMLDivElement | HTMLAnchorElement | null) => void;
  insertCutOff: (index: Key | null | number) => JSX.Element;
  focusedRow: DefaultPlayer | null;
  keyUp: (
    event: KeyboardEvent<
      HTMLTableRowElement | HTMLAnchorElement | HTMLDivElement
    >,
  ) => void;
  keyDown: (
    event: React.KeyboardEvent<
      HTMLTableRowElement | HTMLAnchorElement | HTMLDivElement
    >,
  ) => void;
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
