import React from "react";
import PostCard from "../components/Post/PostCard";
import Footer from "../components/footer/Footer";
import MobileLayout from "../layout/MobileLayout";
import Header from "../components/header/Header";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <MobileLayout>
        <Header />
        <HeaderWrapper>
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
        </HeaderWrapper>
        <Footer />
      </MobileLayout>
    </>
  );
};

export default Home;

const HeaderWrapper = styled.div`
  margin-top: 3.5rem;
`;
