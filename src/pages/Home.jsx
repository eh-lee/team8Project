import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../api/axios";
import Header from "../components/header/Header";
import Greeting from "../components/greeting/Greeting";
import GreetingLv from "../components/greeting/GreetingLv";
import Footer from "../components/footer/Footer";
import MobileLayout from "../layout/MobileLayout";
import PostCardJr from "../components/post/PostCardJr";
import PostCard from "../components/post/PostCard";
import PostCardSlider from "../components/post/PostCardSlider";

const Home = () => {
  const [hotPostCards, setHotPostCards] = useState([]);

  useEffect(() => {
    const getHotPost = async () => {
      const response = await instance.get("/postCards/hotPostCard");
      setHotPostCards(response.data.postCards);
    };
    getHotPost();
  }, []);
  console.log(hotPostCards)


  return (
    <>
      <MobileLayout>
        <Header />
        <PageWithHeaderAndFooterWrapper>
          <Greeting />
          <GreetingLv />

          {/* * ================ Young ============== * */}
          <br />
          <PostCardSlider />
          <h1>Hot 게시물</h1>
          {hotPostCards?.map((hotPostCard) => {
            return (
              <PostCard
                key={hotPostCard.postIdx}
                mainCategory={hotPostCard.maincategory}
                title={hotPostCard.title}
                content={hotPostCard.desc}
                viewCount={hotPostCard.postViewCount}
                commentCount={hotPostCard.commentCount}
              />
            );
          })}

          <h1>실시간 게시물</h1>
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
