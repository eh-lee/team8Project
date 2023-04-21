import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import TrueGreeting from "../components/greeting/trueGreeting/TrueGreeting";
import TrueGreetingLv from "../components/greeting/trueGreeting/TrueGreetingLv";
import Footer from "../components/footer/Footer";
import MobileLayout from "../layout/MobileLayout";
import FalseGreeting from "../components/greeting/falseGreeting/FalseGreeting";
import FalseGreetingLv from "../components/greeting/falseGreeting/FalseGreetingLv";
import { cookies } from "../api/cookies";
import HotPostCardSlider from "../components/post/HotPostCardSlider";
import NewPostCardSlider from "../components/post/NewPostCardSlider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Chatting from "./chatting/Chatting";

const Home = () => {
  const isLogin = cookies.get("access_token") ? true : false;
  console.log("======* .env *=====", process.env);

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
              <TrueGreeting />
              <TrueGreetingLv />
            </>
          ) : (
            <>
              <FalseGreeting />
              <FalseGreetingLv />
            </>
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
              <Chatting />
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
  margin: 3.5rem 0 15rem 0;
`;

const PostCardSliders = styled.ul`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HotPostCardSliderCont = styled.li`
  margin-top: 4rem;
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
  width: 21rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PostCardSliderTitle = styled.h1`
  /* border: 1px solid red; */
  font-size: 1.5rem;
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
