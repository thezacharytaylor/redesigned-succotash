import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const Form = ({ submit, input, info, golfers }) => {
  const handlePrediction = () => {
    return <p className="absolute px-2 bg-white">Hi yea</p>;
  };

  return (
    <>
      <form action="#" onSubmit={submit} className="relative flex">
        <Input name="name" placeholder="Name" value={info.name} func={input} />
        <CSSTransition
          in={info.name.length > 0 && golfers.length > 0}
          timeout={300}
          classNames="slide-vertical"
          unmountOnExit
        >
          <ul className="absolute p-2 bg-white -bottom-10">
            {golfers.map((golfer, index) => {
              return <li key={index}>{golfer.name}</li>;
            })}
          </ul>
        </CSSTransition>
        <Input name="score" placeholder={1} value={info.score} func={input} />
        <button
          type="submit"
          className="px-4 text-lg text-white bg-gray-700 lg:text-2xl"
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
