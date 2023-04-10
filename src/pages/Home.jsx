import Header from "../components/header/Header";
import styled from "styled-components";
import Greeting from "../components/greeting/Greeting";
import GreetingLv from "../components/greeting/GreetingLv";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import MobileLayout from "../layout/MobileLayout";
// import { instance } from "../api/axios";
import PostCardSlider from "../components/post/PostCardSlider";
import PostCardJr from "../components/post/PostCardJr";
import { instance } from "../api/axios";
import PostCard from "../components/post/PostCard";

const Home = () => {
  const [page, setPage] = useState(1);
  const [hotPostCards, setHotPostCards] = useState([]);

  useEffect(() => {
    const getHotPost = async () => {
      const response = await instance.get("/postCards/hotPostCard");
      setHotPostCards(response.data.postCards);
    };

    getHotPost();
  }, []);

  console.log("postCards", hotPostCards);

  return (
    <>
      <MobileLayout>
        <Header />
        <PageWithHeaderAndFooterWrapper>
          <Greeting />
          <GreetingLv />
          {/* * ================ Young ============== * */}
          <PostCardSlider />

          {hotPostCards?.map((hotPostCard) => {
            return (
              <PostCard
                key={hotPostCard.postIdx}
                category={hotPostCard.category}
                title={hotPostCard.title}
                nickname={hotPostCard.nickname}
                content={hotPostCard.desc}
                viewCount={hotPostCard.postViewCount}
                commentCount={hotPostCard.commentCount}
              />
            );
          })}

          {/* <h1>실시간 게시물</h1> */}
          {/* {
          postCards?.map((postCard) => {
            return (
              <PostCard
                key={postCard.postIdx}
                category={postCard.category} title={postCard.title} nickname={postCard.nickname} content={postCard.desc}
                viewCount={postCard.postViewCount} commentCount={postCard.commentCount}
              />
            )
          })
        } */}
          <PostCardJr />
          {/* * ================ Young ============== *    */}
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
