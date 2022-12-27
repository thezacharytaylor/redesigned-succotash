import useFirstThursday from 'app/hooks/useFirstThursday';

const YearDisplay = props => {
  const [cupDate] = useFirstThursday();

  return <>{`${cupDate['date']} ${props.children}`}</>;
};

export default YearDisplay;
