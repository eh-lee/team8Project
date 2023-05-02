import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MobileLayout from "../../layout/MobileLayout";
import Greeting from "../../components/greeting/Greeting";
import GreetingLv from "../../components/greeting/GreetingLv";
import HotPostCardSlider from "../../components/post/HotPostCardSlider";
import NewPostCardSlider from "../../components/post/NewPostCardSlider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LiveBattleCard from "../../components/chat/LiveBattleCard";
import NewbieGuard from "../../components/hook/guard/NewbieGuard";

const Home = () => {
  NewbieGuard();

  return (
    <>
      <Helmet>
        <title>훈수</title>
      </Helmet>
      <MobileLayout>
        <Header />
        {/* 0. Greeting 컴포넌트로 통합
        <XXXStGreetingWrap>
          <Greeting />
          <GreetingLv />
        </XXXStGreetingWrap>
        */}
        <XXXStGreetingWrap>
          <Greeting />
          <GreetingLv />
        </XXXStGreetingWrap>

        {/* ======================================================================= */}
        {/* ======================================================================= */}
        <XXXPostCardSliders>
          {/* 2. HomeContents 컴포넌트 만들기
         <XXXPostCardSliders>
            <HotPostCardSlider/> 
            <LiveBattleCard/>
            <NewPostCardSlider/>
         <XXXPostCardSliders/>  */}
          {/* =================================================== */}
          {/* 1. HotPostCardSlider 컴포넌트에 XXX 넣기 */}
          <XXXHotPostCardSliderCont>
            <XXXPostCardSliderInfo colored="HOT" title=" 훈수" />
            <HotPostCardSlider />
          </XXXHotPostCardSliderCont>

          {/* 1. LiveBattleCard 컴포넌트에 XXX 넣기 */}
          <XXXNewChattingCont>
            <XXXPostCardSliderInfo
              title="실시간 훈수 배틀"
              more="더 보기"
              on="on"
            />
            <LiveBattleCard />
          </XXXNewChattingCont>

          {/* 1. NewPostCardSlider 컴포넌트에 XXX 넣기 */}
          <XXXNewPostCardSliderCont>
            <XXXPostCardSliderInfo title="실시간 훈수" more="더 보기" />
            <NewPostCardSlider />
          </XXXNewPostCardSliderCont>
          {/* =================================================== */}
        </XXXPostCardSliders>
        {/* ======================================================================= */}
        {/* ======================================================================= */}

        <Footer />
      </MobileLayout>
    </>
  );
};

export default Home;

const XXXStGreetingWrap = styled.div`
  background-color: #3a3a59;
  width: 100%;
  height: 204px;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 40px;
  margin-top: 40px;
  /* border: 2px solid red; */
`;

const XXXPostCardSliders = styled.ul`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const XXXHotPostCardSliderCont = styled.li`
  /* border: 1px solid blue; */
  margin-top: 16px;
`;

const XXXNewPostCardSliderCont = styled.li``;

const XXXPostCardSliderInfo = ({ colored, title, more, on }) => {
  const nav = useNavigate();
  return (
    <XXXPostCardSliderInfoXXX>
      <XXXPostCardSliderTitle>
        <span className="colored">{colored}</span>
        {title}
      </XXXPostCardSliderTitle>
      <XXXPostCardSliderMore
        onClick={() => {
          if (on !== "on") {
            nav("/totalboard");
          } else {
            nav("/battle");
          }
        }}
      >
        {more}
      </XXXPostCardSliderMore>
    </XXXPostCardSliderInfoXXX>
  );
};

const XXXPostCardSliderInfoXXX = styled.div`
  /* border: 1px solid olivedrab; */
  width: 350px;
  height: 26px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const XXXPostCardSliderTitle = styled.h1`
  /* border: 1px solid red; */
  font-weight: 600;
  font-size: 20px;
  color: #2d2d2d;

  /* colored에 스타일주기 */
  span.colored {
    color: #ef3f61;
  }
`;

const XXXPostCardSliderMore = styled.span`
  /* border: 1px solid blue; */
  color: #ef3f61;
  font-size: 0.8rem;
  cursor: pointer;
`;

const XXXNewChattingCont = styled.div``;
