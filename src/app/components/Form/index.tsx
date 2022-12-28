import PropTypes from 'prop-types';
import Input from './Input';
import { CSSTransition } from 'react-transition-group';

const Form = ({ submit, input, info, golfers }) => {
  // const [valueState, setValueState] = useState(info.name);

  const handleUpdate = (event, golferName) => {
    event.preventDefault();
    // nameField = golfer.name;
    // console.log(nameField);
    // if (nameField.current !== undefined) {
    //   // nameField.current = golferName;
    //   console.log(nameField.current);
    // }
    // return <p className="absolute px-2 bg-white">Hi yea</p>;
  };

  return (
    <>
      <form action="#" onSubmit={submit} className="relative flex">
        <Input name="name" placeholder="Name" value={info.name} func={input} />
        <div className="absolute bottom-0 w-full">
          <CSSTransition
            in={info.name.length > 0 && golfers.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <ul className={`absolute bg-white`}>
              {golfers.map((golfer, index) => {
                return (
                  <li key={index}>
                    <button
                      className="w-full p-2 text-left bg-transparent border-0 hover:bg-gray-300"
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
