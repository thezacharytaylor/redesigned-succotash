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

const Form = ({ submit, players }) => {
  const playerInput = useSelector((state: RootState) => state.playerInput);
  const dispatch = useDispatch();
  const [filteredPlayers, setFilteredPlayers] = useState([defaultPlayer]);

  const handleUpdate = event => {
    event.preventDefault();
    dispatch(setName(event.target.value));
    setFilteredPlayers([]);
  };

  const handlePlayerInput = (event: {
    target: { name: string; value: any };
  }) => {
    const { name, value } = event.target;

    switch (event.target.name) {
      case 'name':
        dispatch(setName(value));
        break;
      default:
        dispatch(setScore(value));
        break;
    }

    if (name === 'name') {
      handlePrediction(value);
    }
  };

  const handlePrediction = value => {
    if (value.length > 0) {
      const newPlayers = players.filter(player => {
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
                      className="w-full p-2 text-left text-gray-800 bg-gray-100 border-0 hover:bg-gray-300"
                      onClick={event => handleUpdate(event)}
                      name="name"
                      value={player.name}
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
