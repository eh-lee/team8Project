import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Greeting from "../components/greeting/Greeting";
import GreetingLv from "../components/greeting/GreetingLv";
import Footer from "../components/footer/Footer";
import MobileLayout from "../layout/MobileLayout";
import HotPostCardSlider from "../components/post/HotPostCardSlider";
import { useNavigate } from "react-router-dom";
import NewPostCardSlider from "../components/post/NewPostCardSlider";

const Home = () => {

  return (
    <>
      <MobileLayout>
        <Header />
        <PageWithHeaderAndFooterWrapper>
          <Greeting />
          <GreetingLv />

          <PostCardSliders>
            {/* Hot 게시글 */}
            <HotPostCardSliderCont>
              <PostCardSlider_Info title="HOT 훈수" more="더보기" />
              <HotPostCardSlider />
            </HotPostCardSliderCont>

            {/* 실시간 게시글 */}
            <NewPostCardSliderCont>
              <PostCardSlider_Info title="실시간 훈수" more="더보기" />
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
`

const HotPostCardSliderCont = styled.li`
  margin-top: 4rem;
`;

const NewPostCardSliderCont = styled.li`
  
`

const PostCardSlider_Info = ({ title, more }) => {
  const nav = useNavigate();
  return (
    <PostCardSliderInfo>
      <PostCardSliderTitle>{title}</PostCardSliderTitle>
      <PostCardSliderMore onClick={() => { nav('/board') }}>{more}</PostCardSliderMore>
    </PostCardSliderInfo>
  )
}

const PostCardSliderInfo = styled.div`
  /* border: 1px solid olivedrab; */
  width: 21rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const PostCardSliderTitle = styled.h1`
  /* border: 1px solid red; */
  font-size: 1.5rem;
`

const PostCardSliderMore = styled.span`
  /* border: 1px solid blue; */
  color: gray;
  font-size: 0.8rem;
  cursor: pointer;
`