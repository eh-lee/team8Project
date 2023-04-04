import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Layout from "./layout/Layout";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
