import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HomeGreeting from "../../components/greeting/HomeGreeting";
import NewbieGuard from "../../components/hook/guard/NewbieGuard";
import HomeContents from "../../components/post/HomeContents";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";

const Home = () => {
  NewbieGuard();

  return (
    <>
      <Helmet>
        <title>훈수</title>
      </Helmet>
      <MobileLayout>
        <Header />
        <HomeGreeting />
        <HomeContents />
        <Footer />
      </MobileLayout>
    </>
  );
};

export default Home;
