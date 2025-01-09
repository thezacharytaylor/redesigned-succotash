import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setScore } from 'features/player-input/inputSlice';
import { RootState } from 'store/reducers';
import Form from './Form';
import dayjs from 'dayjs';
import BracketLayout from './BracketLayout';
import PlayerData from '../../store/golfers.json';
import DefaultPlayer from 'app/interfaces/defaultPlayer';

// TODO: Monitor if all quarters/semis/finals are set, to for a11y nav? or just make an a11y nav?
// TODO: Add a11y nav for bracket
// TODO: Style brackets
// TODO: feed one sheet here/monitor state to appropriately display brackets
// TODO: Show brackets & show scores of brackets

const defaultPlayer: DefaultPlayer = {
  id: -1,
  name: '',
  score: 0,
  date: '',
  inCup: false,
  qualified: false,
  checkedIn: false,
  seed: 16,
  previousPlayer: false,
};

const Players = () => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState<DefaultPlayer[]>([defaultPlayer]);

  useEffect((): void => {
    setPlayers([...PlayerData]);
  }, []);
};

const Bracket = () => {
  return (
    <div className="my-5 border-solid rounded-md shadow-sm bg-primary-content border-slate-50">
      <div className="overflow-x-auto flex">
        <BracketLayout
          players={[
            'Jon Smith',
            'Hank Hull',
            'Chris Crill',
            'Dani Sprinkle',
            'Jeremy Morris',
            "Tom O'Conner",
            'Mike Smith',
            "Antonio T'Von",
          ]}
        />
        <BracketLayout
          players={[
            'Jon Smith',
            'Dani Sprinkle',
            'Jeremy Morris',
            'Mike Smith',
          ]}
        />
        <BracketLayout players={['Dani Sprinkle', 'Mike Smith']} />
        <BracketLayout players={['Dani Sprinkle', 'Tiffany Taylor']} />
        <BracketLayout players={['Tiffany Taylor', 'Jasmine Hiller']} />
        <BracketLayout
          players={[
            'Cave Johnson',
            'Tiffany Taylor',
            'Jasmine Hiller',
            'Haeley Toomey',
          ]}
        />
        <BracketLayout
          players={[
            'Cave Johnson',
            'Caroline Potato',
            'Roderick Strong',
            'Tiffany Taylor',
            'Jasmine Hiller',
            'Floor Jensen',
            'Haley Toomey',
            'Adam Cole',
          ]}
        />
      </div>
      <table className="table w-full">
        <tbody>
          <tr>
            <td className="p-0.5">Jon Smith</td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5">Hank Hull</td>
          </tr>
          <tr>
            <td className="p-0.5">Chris Stewart</td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5">Kyle Paper</td>
          </tr>
          <tr>
            <td className="p-0.5">Jon Smith</td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5">Hank Hull</td>
          </tr>
          <tr>
            <td className="p-0.5">Jon Smith</td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5">Hank Hull</td>
          </tr>
          <tr>
            <td className="p-0.5">Jon Smith</td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5"></td>
            <td className="p-0.5">Hank Hull</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bracket;
