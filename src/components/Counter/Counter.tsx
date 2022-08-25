import { useEffect, useState } from "react";
import { keyDate } from "../../data/keyDate";
import useTimer from "../../hooks/useTimer";
import CounterStyled from "./CounterStyled";

const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState(keyDate);
  const { timer } = useTimer();

  useEffect(() => {
    timer(setCounter);
  }, [timer]);

  const isCounterOver =
    counter.day === 0 &&
    counter.hour === 0 &&
    counter.minute === 0 &&
    counter.second === 0;

  return (
    <>
      {!isCounterOver && (
        <CounterStyled>
          <li className="counter-item">
            <span className="counter-item__number">{counter.day}</span>
            <span className="counter-item__data">days</span>
          </li>
          <li className="counter-item">
            <span className="counter-item__number">{counter.hour}</span>
            <span className="counter-item__data">hours</span>
          </li>
          <li className="counter-item">
            <span className="counter-item__number">{counter.minute}</span>
            <span className="counter-item__data">minutes</span>
          </li>
          <li className="counter-item">
            <span className="counter-item__number">{counter.second}</span>
            <span className="counter-item__data">seconds</span>
          </li>
        </CounterStyled>
      )}
      {isCounterOver && <></>}
    </>
  );
};
export default Counter;
