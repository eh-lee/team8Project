import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Router from "./shared/Router";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ResponsiveContainer>
        <Router />
      </ResponsiveContainer>
    </>
  );
};

const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default App;
