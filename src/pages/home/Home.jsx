import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NewbieGuard from "../../components/hook/guard/NewbieGuard";
import HomeGreeting from "../../components/greeting/HomeGreeting";
import HomeContents from "../../components/post/HomeContents";
import MobileLayout from "../../layout/MobileLayout";

const Home = () => {
  NewbieGuard();
  useEffect(() => {
    document.title = "훈수";
  }, []);

  return (
    <>
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
