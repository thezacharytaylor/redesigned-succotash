import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

function useFirstThursday(initialDate = { date: '', override: false }) {
  const [dateInfo, setDateInfo] = useState(initialDate);

  // Ideally move this out of a useEffect.
  useEffect(
    () => {
      let cupYear = dayjs().year().toString();
      let overrideSwitch = false;

      if (dateInfo['date'].length > 0) {
        overrideSwitch = true;
        cupYear = initialDate['date'];
      }

      if (!dateInfo['override']) {
        const currentMonth = dayjs().month();
        let nextYear = false;

        switch (currentMonth) {
          case 9:
            let firstThursday = 0;
            const locatedFirstThursday = false;

            for (let i = 1; i >= 9; i++) {
              const sampleDay = dayjs(`${dayjs().year()}-10-${i}`).format(
                'dddd',
              );
              if (!locatedFirstThursday) {
                if (sampleDay === 'Thursday') firstThursday = i;
              }
            }

            if (firstThursday < dayjs().day()) {
              nextYear = true;
            }

            break;
          case 10:
          case 11:
            nextYear = true;
            break;
          default:
            break;
        }

        if (nextYear) {
          const nextYear = dayjs().add(1, 'year');
          cupYear = nextYear.year().toString();
        }
      }

      setDateInfo({ ...dateInfo, date: cupYear, override: overrideSwitch });
    }, // eslint-disable-next-line
    [],
  );

  return [dateInfo, setDateInfo];
}

export default useFirstThursday;
