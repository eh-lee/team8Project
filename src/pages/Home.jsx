import React from "react";
import PostCard from "../components/Post/PostCard";
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
        <PageWithHeaderWrapper>
          <Greeting />
          <GreetingLv />
          <PostCard
            // title={title} nickname={nickname} content={content}
            title="타이틀을 막 바꿀 수 있지요하하하하하"
            nickname="하하하하하하하하하하하하하하하"
            content="시작 ! 컨텐츠 길어지면 어떻게 될까요"
            viewCount="viewCount"
            commentCount="commentCount"
          />
          <PostCard
            // title={title} nickname={nickname} content={content}
            title="타이틀을 막 바꿀 수 있지요하하하하하"
            nickname="하하하하하하하하하하하하하하하"
            content="시작 ! 컨텐츠 길어지면 어떻게 될까요"
            viewCount="viewCount"
            commentCount="commentCount"
          />
          <PostCard
            // title={title} nickname={nickname} content={content}
            title="타이틀을 막 바꿀 수 있지요하하하하하"
            nickname="하하하하하하하하하하하하하하하"
            content="시작 ! 컨텐츠 길어지면 어떻게 될까요"
            viewCount="viewCount"
            commentCount="commentCount"
          />
          <PostCard
            // title={title} nickname={nickname} content={content}
            title="타이틀을 막 바꿀 수 있지요하하하하하"
            nickname="하하하하하하하하하하하하하하하"
            content="시작 ! 컨텐츠 길어지면 어떻게 될까요"
            viewCount="viewCount"
            commentCount="commentCount"
          />
          <PostCard
            // title={title} nickname={nickname} content={content}
            title="타이틀을 막 바꿀 수 있지요하하하하하"
            nickname="하하하하하하하하하하하하하하하"
            content="시작 ! 컨텐츠 길어지면 어떻게 될까요"
            viewCount="viewCount"
            commentCount="commentCount"
          />
          <PostCard
            // title={title} nickname={nickname} content={content}
            title="타이틀을 막 바꿀 수 있지요하하하하하"
            nickname="하하하하하하하하하하하하하하하"
            content="시작 ! 컨텐츠 길어지면 어떻게 될까요"
            viewCount="viewCount"
            commentCount="commentCount"
          />
        </PageWithHeaderWrapper>
        <Footer />
      </MobileLayout>
    </>
  );
};

export default Home;

const PageWithHeaderWrapper = styled.div`
  margin: 3.5rem 0 15rem 0;
`;
