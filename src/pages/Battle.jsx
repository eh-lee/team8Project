import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MobileLayout from "../layout/MobileLayout";
import { Helmet } from "react-helmet";
import YetGuard from "../components/hook/guard/YetGuard.jsx";

const Battle = () => {
  YetGuard();

  return (
    <>
      <Helmet>
        <title>훈수배틀</title>
      </Helmet>
      <MobileLayout>
        <Header />
        <PageWithHeaderAndFooterWrapper></PageWithHeaderAndFooterWrapper>
        <Footer />
      </MobileLayout>
    </>
  );
};

export default Battle;

const PageWithHeaderAndFooterWrapper = styled.div`
  margin: 3.5rem 0 15rem 0;
`;
