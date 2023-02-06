import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setScore } from 'features/player-input/inputSlice';
import { RootState } from 'store/reducers';
import Input from './Input';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const defaultPlayer = {
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

const Form = ({ submit, players }): JSX.Element => {
  const playerInput = useSelector((state: RootState) => state.playerInput);
  const dispatch = useDispatch();
  const [filteredPlayers, setFilteredPlayers] = useState([defaultPlayer]);

  const handleUpdate = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: string,
  ) => {
    event.preventDefault();
    dispatch(setName(value));
    setFilteredPlayers([]);
  };

  const handlePlayerInput = (event: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = event.target;

    switch (event.target.name) {
      case 'name':
        dispatch(setName(value));
        break;
      default:
        dispatch(setScore(Number(value)));
        break;
    }

    if (name === 'name') {
      handlePrediction(value);
    }
  };

  const handlePrediction = (value: string) => {
    if (value.length > 0) {
      const newPlayers = players.filter((player: { name: string }) => {
        const uniformName: string = player.name.toUpperCase();
        const uniformValue: string = value.toUpperCase();
        if (
          uniformName.startsWith(uniformValue) &&
          uniformValue !== uniformName
        ) {
          return player.name;
        } else {
          return '';
        }
      });

      setFilteredPlayers([...newPlayers]);
    }
  };

  return (
    <>
      <form action="#" onSubmit={submit} className="relative flex input-group">
        <Input name="name" placeholder="Name" func={handlePlayerInput} />
        <div className="absolute bottom-0 w-full">
          <CSSTransition
            in={playerInput.name.length > 0 && players.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <ul className={`absolute drop-shadow-xl hover:drop-shadow-2xl`}>
              {filteredPlayers.map((player, index) => {
                return (
                  <li key={index}>
                    <button
                      className="w-full p-2 text-left text-gray-800 border-0 bg-base-300 hover:bg-base-100"
                      onClick={event => handleUpdate(event, player.name)}
                      name="name"
                    >
                      {player.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </CSSTransition>
        </div>
        <Input name="score" placeholder={1} func={handlePlayerInput} />
        <button
          type="submit"
          className="px-4 text-lg text-white bg-gray-700 lg:text-2xl btn"
        >
          +
        </button>
      </form>
    </>
  );
};

Form.Props = {
  submit: PropTypes.func,
  players: PropTypes.array,
};

export default Form;
