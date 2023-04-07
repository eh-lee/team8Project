import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MobileLayout from "../layout/MobileLayout";

const Battle = () => {
  return (
    <MobileLayout>
      <Header />
      <PageWithHeaderAndFooterWrapper></PageWithHeaderAndFooterWrapper>
      <Footer />
    </MobileLayout>
  );
};

export default Battle;

const PageWithHeaderAndFooterWrapper = styled.div`
  margin: 3.5rem 0 15rem 0;
`;
