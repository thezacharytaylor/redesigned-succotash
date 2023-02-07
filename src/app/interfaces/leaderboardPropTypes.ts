import { KeyboardEvent } from 'react';
import DefaultPlayer from 'app/interfaces/defaultPlayer';

export default interface LeaderboardTableProps {
  focusedRow: DefaultPlayer | null;
  addRowRef: (row: HTMLDivElement | HTMLAnchorElement | null) => void;
  keyUp: (
    event: KeyboardEvent<
      HTMLTableRowElement | HTMLAnchorElement | HTMLDivElement
    >,
  ) => void;
  keyDown: (
    event: KeyboardEvent<
      HTMLTableRowElement | HTMLAnchorElement | HTMLDivElement
    >,
  ) => void;
}
