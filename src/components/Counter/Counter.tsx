import { useState } from "react";
import keyDate from "../../data/keyDate";
import CounterStyled from "./CounterStyled";

const initialState = {
  day: keyDate.getDate(),
  hour: keyDate.getHours(),
  minute: keyDate.getMinutes(),
  second: keyDate.getSeconds(),
};

const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState(initialState);

  return (
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
  );
};
export default Counter;
