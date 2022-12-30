const Input = ({ name, placeholder, value, func }) => {
  return (
    <>
      <input
        name={name}
        type="text"
        className={`input input-bordered w-full max-w-xs ${
          name === 'score' && 'max-w-[4rem]'
        }`}
        placeholder={placeholder}
        value={value}
        onChange={func}
      />
    </>
  );
};

export default Input;
