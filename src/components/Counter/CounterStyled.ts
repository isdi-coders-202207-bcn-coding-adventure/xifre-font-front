import styled from "styled-components";

const CounterStyled = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  color: #c5d4db;

  & .counter {
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    &-item > *:first-child {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 0.8rem;
      background-color: rgba(255, 198, 1, 255);
      color: rgba(37, 50, 66, 255);
      font-size: 2.8rem;
      font-family: rajdhani, sans-serif;
      width: 7rem;
      height: 7rem;
      font-weight: bold;
      margin-bottom: 3px;
    }
  }
`;

export default CounterStyled;
