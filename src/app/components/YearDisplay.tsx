import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import useFirstThursday from 'app/hooks/useFirstThursday';

const YearDisplay = props => {
  const [cupDate, setCupDate] = useFirstThursday();

  return <>{`${cupDate['date']} ${props.children}`}</>;
};

export default YearDisplay;
