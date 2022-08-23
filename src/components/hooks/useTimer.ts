import { useCallback } from "react";
import { IKeyDate, keyDate } from "../../data/keyDate";

const useTimer = () => {
  const timer = useCallback(
    (setter: React.Dispatch<React.SetStateAction<IKeyDate>>) => {
      let counterDate = { ...keyDate };
      let seconds = counterDate.second;

      setInterval(() => {
        seconds -= 1;

        setter({ ...counterDate, second: seconds });
        counterDate = {
          ...counterDate,
          second: seconds,
        };

        if (seconds === 0) {
          setter({
            ...counterDate,
            minute: counterDate.minute - 1,
            second: 60,
          });

          counterDate = {
            ...counterDate,
            minute: counterDate.minute - 1,
            second: 60,
          };

          seconds = 60;
        }

        if (counterDate.minute === 0) {
          setter({
            ...counterDate,
            hour: counterDate.hour - 1,
            minute: 60,
          });

          counterDate = {
            ...counterDate,
            hour: counterDate.hour - 1,
            minute: 60,
          };
        }

        if (counterDate.hour === 0) {
          setter({ ...counterDate, day: counterDate.day - 1, hour: 24 });
          counterDate = { ...counterDate, day: counterDate.day - 1, hour: 24 };
        }
      }, 1000);
    },
    []
  );

  return {
    timer,
  };
};

export default useTimer;
