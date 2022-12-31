import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setScore } from 'features/golfer-input/inputSlice';
import { RootState } from 'store/reducers';
import Input from './Input';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const defaultGolfer = {
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

const Form = ({ submit, golfers }) => {
  const playerInput = useSelector((state: RootState) => state.golferInput);
  const dispatch = useDispatch();
  const [filteredGolfers, setFilteredGolfers] = useState([defaultGolfer]);

  const handleUpdate = (event, golferName) => {
    event.preventDefault();
    dispatch(setName(event.target.value));
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
      const newGolfers = golfers.filter(golfer => {
        const uniformName: string = golfer.name.toUpperCase();
        const uniformValue: string = value.toUpperCase();
        return uniformName.startsWith(uniformValue) ? golfer.name : '';
      });

      setFilteredGolfers([...newGolfers]);
    }
  };

  return (
    <>
      <form action="#" onSubmit={submit} className="relative flex input-group">
        <Input name="name" placeholder="Name" func={handlePlayerInput} />
        <div className="absolute bottom-0 w-full">
          <CSSTransition
            in={playerInput.name.length > 0 && golfers.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <ul
              className={`absolute bg-white drop-shadow-xl hover:drop-shadow-2xl`}
            >
              {filteredGolfers.map((golfer, index) => {
                return (
                  <li key={index}>
                    <button
                      className="w-full p-2 text-left text-gray-800 bg-transparent border-0 hover:bg-gray-300"
                      onClick={event => handleUpdate(event, golfer.name)}
                      name="name"
                      value={golfer.name}
                    >
                      {golfer.name}
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
  input: PropTypes.func,
  info: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
  }),
};

export default Form;
