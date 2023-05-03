import React, { useState, useRef } from "react";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import BoardHeader from "../../components/header/BoardHeader";
import MobileLayout from "../../layout/MobileLayout";
import BoardPostCard from "../../components/post/BoardPostCard";
import InfiniteScroll from "../../components/hook/scroll/InfiniteScroll";
import TotalBoardFetch from "../../components/hook/fetch/TotalBoardFetch";
import { Helmet } from "react-helmet";

const TotalBoard = () => {
  const BoardCallback = (x, y, z) => {
    setPrevCategory(x);
    setCategory(y);
    setPage(z);
  };
  const postCardContRef = useRef(null);
  const [prevCategory, setPrevCategory] = useState("전체");
  const [category, setCategory] = useState("전체");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  TotalBoardFetch({ prevCategory, category, setData, page });
  InfiniteScroll({ postCardContRef, setPage });

  return (
    <>
      <Helmet>
        <title>훈수 — 전체게시판</title>
      </Helmet>
      <MobileLayout>
        <BoardHeader parentFunction={BoardCallback} />
        <PostCardList ref={postCardContRef}>
          {data?.map((item) => (
            <BoardPostCard
              key={item.postIdx}
              postIdx={item.postIdx}
              title={item.title}
              nickname={item.nickname}
              content={item.desc}
              likesCount={item.likesCount}
              viewCount={item.postViewCount}
              commentCount={item.commentCount}
              mainCategory={item.maincategory}
              category={item.category}
              // isFirst={idx === 0}
            />
          ))}
        </PostCardList>
        <Footer />
      </MobileLayout>
    </>
  );
};

const PostCardList = styled.div`
  margin-top: 10rem;
  height: 45.28rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default TotalBoard;
