import { useCallback } from "react";
import { calculateDate, fullKeyDate, IKeyDate, keyDate } from "../data/keyDate";

const useTimer = () => {
  const timer = useCallback(
    (setter: React.Dispatch<React.SetStateAction<IKeyDate>>) => {
      let counterDate = { ...keyDate };
      let seconds = counterDate.second;

      let counterCount = calculateDate;

      counterDate = {
        ...counterDate,
        day: counterCount < 86400000 ? 0 : counterDate.day,
        hour: counterCount < 3600000 ? 0 : counterDate.hour,
      };

      setInterval(() => {
        seconds -= 1;
        counterCount -= 1000;

        if (counterCount < 0) {
          return;
        }

        setter({ ...counterDate, second: seconds });
        counterDate = {
          ...counterDate,
          second: seconds,
        };

        if (seconds === 0) {
          setter({
            ...counterDate,
            minute: counterDate.minute === 0 ? 0 : counterDate.minute - 1,
            second: counterDate.minute === 0 ? 0 : counterDate.second - 1,
          });

          counterDate = {
            ...counterDate,
            minute: counterDate.minute === 0 ? 0 : counterDate.minute - 1,
            second: counterDate.minute === 0 ? 0 : counterDate.second - 1,
          };

          seconds = 60;
        }

        if (counterDate.minute === 0) {
          setter({
            ...counterDate,
            hour: counterDate.hour === 0 ? 0 : counterDate.hour - 1,
            minute: counterDate.hour === 0 ? 0 : 60,
          });

          counterDate = {
            ...counterDate,
            hour: counterDate.hour === 0 ? 0 : counterDate.hour - 1,
            minute: counterDate.hour === 0 ? 0 : 60,
          };
        }

        if (counterDate.hour === 0) {
          setter({
            ...counterDate,
            day: counterDate.day === 0 ? 0 : counterDate.day - 1,
            hour: counterDate.day === 0 ? 0 : 24,
          });
          counterDate = {
            ...counterDate,
            day: counterDate.day === 0 ? 0 : counterDate.day - 1,
            hour: counterDate.day === 0 ? 0 : 24,
          };
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
