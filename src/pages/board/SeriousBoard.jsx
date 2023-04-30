import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../api/axios";
import Footer from "../../components/footer/Footer";
import BoardPostCard from "../../components/post/BoardPostCard";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";
import BoardCategorySlider from "../../components/board/BoardCategorySlider";

const SeriousBoard = () => {
  const BoardCallback = (x, y, z) => {
    setPrevCategory(x);
    setCategory(y);
    setPage(z);
  };

  const [prevCategory, setPrevCategory] = useState("전체");
  const [category, setCategory] = useState("전체");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const navi = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `/postCards?maincategory=진지&category=${category}&splitNumber=7&splitPageNumber=${page}`
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

  useEffect(() => {
    const handleScroll = () => {
      const postCardCont = postCardContRef.current;

      if (!postCardCont) {
        return;
      }

      const isBottom =
        postCardCont.scrollHeight - postCardCont.scrollTop ===
        postCardCont.clientHeight;

      if (isBottom) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    postCardContRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      postCardContRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>훈수 — 전체게시판</title>
      </Helmet>
      <MobileLayout>
        <PageWithFooterWrapper>
          <BoardHeader>
            <BoardHeaderSub>
              <BoardTitle>훈수게시판</BoardTitle>
              <Row>
                <MainCategory onClick={() => navi("/totalboard")}>
                  전체
                </MainCategory>
                <MainCategory onClick={() => navi("/humourboard")}>
                  유머
                </MainCategory>
                <MainCategory isActive onClick={() => navi("/seriousboard")}>
                  진지
                </MainCategory>
              </Row>
              <BoardCategorySlider parentFunction={BoardCallback} />
            </BoardHeaderSub>
          </BoardHeader>
          <PostCardCont ref={postCardContRef}>
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
          </PostCardCont>
        </PageWithFooterWrapper>
        <Footer />
      </MobileLayout>
    </>
  );
};

const PostCardCont = styled.div`
  height: 45.28rem;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PageWithFooterWrapper = styled.div`
  /* 9.9rem으로 하면 인피니티 스크롤 안 되니 refactor할 때 주의 */
  /* 9.9rem으로 하면 인피니티 스크롤 안 되니 refactor할 때 주의 */
  margin-top: 10rem;
  /* 9.9rem으로 하면 인피니티 스크롤 안 되니 refactor할 때 주의 */
  /* 9.9rem으로 하면 인피니티 스크롤 안 되니 refactor할 때 주의 */
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const BoardHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  padding-top: 0.75rem;
  width: 100%;
  max-width: 400px;
  font-size: 1.25rem;
  color: rgb(70, 70, 70);
`;

const BoardHeaderSub = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
`;

const MainCategory = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 0.75rem;
  text-decoration: none;

  color: ${(props) =>
    props.isActive ? "rgb(70, 70, 70)" : "rgb(180, 180, 180)"};
  border-bottom: ${(props) =>
    props.isActive
      ? "0.2rem solid rgb(70, 70, 70)"
      : "0.1rem solid rgb(180, 180, 180)"};

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: rgb(70, 70, 70);
    border-bottom: 0.2rem solid rgb(70, 70, 70);
  }
`;

const BoardTitle = styled.div`
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export default SeriousBoard;
