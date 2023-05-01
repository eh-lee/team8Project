import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MobileLayout from "../../layout/MobileLayout";
import Greeting from "../../components/greeting/Greeting";
import GreetingLv from "../../components/greeting/GreetingLv";
import { cookies } from "../../api/cookies";
import HotPostCardSlider from "../../components/post/HotPostCardSlider";
import NewPostCardSlider from "../../components/post/NewPostCardSlider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LiveBattleCard from "../../components/chat/LiveBattleCard";
import NewbieGuard from "../../components/hook/guard/NewbieGuard";

const Home = () => {
  const isLogin = cookies.get("access_token") ? true : false;
  NewbieGuard();

  return (
    <>
      <Helmet>
        <title>훈수</title>
      </Helmet>
      <MobileLayout>
        <Header />
        <PageWithHeaderAndFooterWrapper>
          {isLogin ? (
            <>
              <StGreetingWrap>
                <Greeting />
                <GreetingLv />
              </StGreetingWrap>
            </>
          ) : (
            <StGreetingWrap>
              <Greeting />
              <GreetingLv />
            </StGreetingWrap>
          )}
          <PostCardSliders>
            {/* Hot 게시글 */}
            <HotPostCardSliderCont>
              <PostCardSlider_Info colored="HOT" title=" 훈수" />
              <HotPostCardSlider />
            </HotPostCardSliderCont>

            {/* 실시간 훈수 배틀 */}
            <NewChattingCont>
              <PostCardSlider_Info
                title="실시간 훈수 배틀"
                more="더 보기"
                on="on"
              />
              <LiveBattleCard />
            </NewChattingCont>

            {/* 실시간 게시글 */}
            <NewPostCardSliderCont>
              <PostCardSlider_Info title="실시간 훈수" more="더 보기" />
              <NewPostCardSlider />
            </NewPostCardSliderCont>
          </PostCardSliders>
        </PageWithHeaderAndFooterWrapper>
        <Footer />
      </MobileLayout>
    </>
  );
};

export default Home;

const PageWithHeaderAndFooterWrapper = styled.div`
  /* margin: 3.5rem 0 15rem 0; */
`;

const StGreetingWrap = styled.div`
  background-color: #3a3a59;
  width: 100%;
  height: 204px;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 40px;
  margin-top: 40px;
  /* border: 2px solid red; */
`;

const PostCardSliders = styled.ul`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HotPostCardSliderCont = styled.li`
  /* border: 1px solid blue; */
  margin-top: 16px;
`;

const NewPostCardSliderCont = styled.li``;

const PostCardSlider_Info = ({ colored, title, more, on }) => {
  const nav = useNavigate();
  return (
    <PostCardSliderInfo>
      <PostCardSliderTitle>
        <span className="colored">{colored}</span>
        {title}
      </PostCardSliderTitle>
      <PostCardSliderMore
        onClick={() => {
          if (on !== "on") {
            nav("/totalboard");
          } else {
            nav("/battle");
          }
        }}
      >
        {more}
      </PostCardSliderMore>
    </PostCardSliderInfo>
  );
};

const PostCardSliderInfo = styled.div`
  /* border: 1px solid olivedrab; */
  width: 350px;
  height: 26px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PostCardSliderTitle = styled.h1`
  /* border: 1px solid red; */
  font-weight: 600;
  font-size: 20px;
  color: #2d2d2d;

  /* colored에 스타일주기 */
  span.colored {
    color: #ef3f61;
  }
`;

const PostCardSliderMore = styled.span`
  /* border: 1px solid blue; */
  color: #ef3f61;
  font-size: 0.8rem;
  cursor: pointer;
`;

const NewChattingCont = styled.div``;
