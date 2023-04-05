import React from "react";
import styled from "styled-components";
// import Footer from "./components/footer/Footer";
import { GlobalStyles } from "./GlobalStyles";
// import Layout from "./layout/Layout";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyles />
      <ResponsiveContainer>
        <Router />
      </ResponsiveContainer>
    </>
  );
}

const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default App;
