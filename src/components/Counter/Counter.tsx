import CounterStyled from "./CounterStyled";

const Counter = (): JSX.Element => (
  <CounterStyled>
    <li className="counter-item">
      <span className="counter-item__number">02</span>
      <span className="counter-item__data">days</span>
    </li>
    <li className="counter-item">
      <span className="counter-item__number">20</span>
      <span className="counter-item__data">hours</span>
    </li>
    <li className="counter-item">
      <span className="counter-item__number">34</span>
      <span className="counter-item__data">minutes</span>
    </li>
    <li className="counter-item">
      <span className="counter-item__number">09</span>
      <span className="counter-item__data">seconds</span>
    </li>
  </CounterStyled>
);

export default Counter;
