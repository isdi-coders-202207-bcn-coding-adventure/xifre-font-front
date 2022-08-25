import styled from "styled-components";
import Header from "../Header/Header";
import Counter from "../Counter/Counter";
import { Navigate, Route, Routes } from "react-router-dom";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  color: white;
`;

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Counter />} />
        <Route path="/register" element={<Navigate to="/home" />} />
      </Routes>
    </StyledContainer>
  );
};

export default Layout;
