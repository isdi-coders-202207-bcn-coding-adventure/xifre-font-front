import styled from "styled-components";

const CounterStyled = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
  background-color: rgba(37, 50, 66, 255);
  color: #c5d4db;

  & .counter {
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    &-item > *:first-child {
      padding: 2rem;
      border-radius: 0.8rem;
      background-color: rgba(255, 198, 1, 255);
      color: rgba(37, 50, 66, 255);
    }
  }
`;

export default CounterStyled;
