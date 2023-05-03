import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import MobileLayout from "../../layout/MobileLayout";
import BoardPostCard from "../../components/post/BoardPostCard";
import InfiniteScroll from "../../components/hook/scroll/InfiniteScroll";
import BoardMainCategory from "../../components/board/BoardMainCategory";
import BoardCategorySlider from "../../components/board/BoardCategorySlider";
import { Helmet } from "react-helmet";
import { instance } from "../../api/axios";
import { useLocation } from "react-router-dom";
import * as St from "../../components/board/Board.style";

const TotalBoard = () => {
  const BoardCallback = (x, y, z) => {
    setPrevCategory(x);
    setCategory(y);
    setPage(z);
  };

  // const MainCatCallback = (x) => {
  //   set
  // }

  const [prevCategory, setPrevCategory] = useState("전체");
  const [category, setCategory] = useState("전체");
  // const [maincategory, setMaincategory] = useState("전체");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const maincategory =
        location.pathname === "/totalboard"
          ? "전체"
          : location.pathname === "/humourboard"
          ? "유머"
          : "진지";

      try {
        const response = await instance.get(
          `/postCards?maincategory=${maincategory}&category=${category}&splitNumber=7&splitPageNumber=${page}`
        );
        if (prevCategory === category) {
          setData((prev) => [...prev, ...response.data.postCards]);
          if (response.data.postCards.length === 0) {
            alert("마지막 게시물입니다.");
          }
        } else {
          setData(response.data.postCards);
          if (response.data.postCards.length === 0) {
            alert(`${category} 게시물이 없습니다.`);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, page]);

  const postCardContRef = useRef(null);
  InfiniteScroll({ postCardContRef, setPage });

  return (
    <>
      <Helmet>
        <title>훈수 — 전체게시판</title>
      </Helmet>
      <MobileLayout>
        <St.Header>
          <St.Wrap>
            <St.Main>훈수게시판</St.Main>
            {/* <BoardMainCategory parentFunction={MainCatCallback}/> */}
            <BoardMainCategory />
            <BoardCategorySlider parentFunction={BoardCallback} />
          </St.Wrap>
        </St.Header>
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
