import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const initialDate = {
  month: '10',
  year: '2022',
};

const YearDisplay = props => {
  const [cupDate, setCupDate] = useState(initialDate);

  useEffect(() => {
    // Move this into a custom hook
    const currentMonth = dayjs().month();
    let cupYear = dayjs().year().toString();
    let setNextYear = false;

    // if (currentMonth > 9) {
    //   setNextYear = true;
    // }
    // let testIncrem = 4;
    // let testDay = dayjs(`${dayjs().year()}-10-${testIncrem}`).format('dddd');
    // console.log(testDay === dayjs().format('dddd') + ' ' + testBool);

    switch (currentMonth) {
      case 9:
        let firstThursday = 0;
        let locatedFirstThursday = false;

        for (let i = 1; i >= 9; i++) {
          let sampleDay = dayjs(`${dayjs().year()}-10-${i}`).format('dddd');
          if (!locatedFirstThursday) {
            if (sampleDay === 'Thursday') firstThursday = i;
          }
        }

        if (firstThursday < dayjs().day()) {
          setNextYear = true;
        }

        break;
      case 10:
      case 11:
        setNextYear = true;
        break;
      default:
        break;
    }

    if (setNextYear) {
      const nextYear = dayjs().add(1, 'year');
      cupYear = nextYear.year().toString();
    }

    setCupDate({ ...cupDate, year: cupYear });
  }, []);

  return <>{`${cupDate.year} ${props.children}`}</>;
};

export default YearDisplay;
