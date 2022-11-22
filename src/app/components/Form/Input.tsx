const Input = ({ name, placeholder, value, func }) => {
  return (
    <>
      <input
        name={name}
        type="text"
        className="border-gray-500"
        placeholder={placeholder}
        value={value}
        onChange={func}
      />
    </>
  );
};

export default Input;
