import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const Input = ({ name, placeholder, func }) => {
  const playerInput = useSelector((state: RootState) => state.playerInput);

  return (
    <>
      <input
        name={name}
        type="text"
        className={`input input-bordered w-full max-w-xs ${
          name === 'score' && 'max-w-[4rem]'
        }`}
        placeholder={placeholder}
        value={playerInput[name]}
        onChange={func}
      />
    </>
  );
};

export default Input;
