import React from "react";
import PostCard from "../components/post/PostCard";
import Footer from "../components/footer/Footer";
import MobileLayout from "../layout/MobileLayout";
import Header from "../components/header/Header";
import styled from "styled-components";
import Greeting from "../components/greeting/Greeting";
import GreetingLv from "../components/greeting/GreetingLv";

const Home = () => {
  return (
    <>
      <MobileLayout>
        <Header />
        <PageWithHeaderAndFooterWrapper>
          <Greeting />
          <GreetingLv />
        </PageWithHeaderAndFooterWrapper>
        <Footer />
      </MobileLayout>
    </>
  );
};

export default Home;

const PageWithHeaderAndFooterWrapper = styled.div`
  margin: 3.5rem 0 15rem 0;
`;
