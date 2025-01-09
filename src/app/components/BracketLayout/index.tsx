import PropTypes from 'prop-types';
import {
  ArrowPathRoundedSquareIcon,
  ArrowTurnRightUpIcon,
  ArrowTurnRightDownIcon,
} from '@heroicons/react/24/solid';

interface BracketProps {
  players: string[];
}

const BracketLayout: React.FC<BracketProps> = ({ players }) => {
  const rows: string[][] = [];
  for (let i = 0; i < players.length; i += 2) {
    rows.push([players[i], players[i + 1]]);
  }

  return (
    <>
      <table className="table bg-base-300">
        <tbody>
          {rows.map(([player1, player2]) => (
            <tr key={player1 + player2}>
              <td className="p-0.5 bg-base-300">
                <div className="bracket-inner-wrap w-full py-1 px-2 bg-base-200">
                  {player1}
                  <br />
                  <ArrowPathRoundedSquareIcon className="w-5 h-5 mx-auto" />
                  {player2}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BracketLayout;
