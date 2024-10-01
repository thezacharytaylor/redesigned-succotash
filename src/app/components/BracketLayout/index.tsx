import PropTypes from 'prop-types';

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
      <table className="table">
        <tbody>
          {rows.map(([player1, player2]) => (
            <tr key={player1 + player2}>
              <td>
                <div className="bracket-inner-wrap">
                  {player1}
                  <br />
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
