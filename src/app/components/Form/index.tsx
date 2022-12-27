import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const Form = ({ submit, input, info }) => {
  return (
    <>
      <form action="#" onSubmit={submit} className="flex">
        <Input name="name" placeholder="Name" value={info.name} func={input} />
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
