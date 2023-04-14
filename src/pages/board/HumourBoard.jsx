import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { instance } from "../../api/axios";
import Footer from "../../components/footer/Footer";
import PostCard from "../../components/post/HotPostCard";
// 일단 HotPostCard로 테스트 셋.
import MobileLayout from "../../layout/MobileLayout";

const TotalBoard = () => {
  const [category, setCategory] = useState("전체");
  const [prevCategory, setPrevCategory] = useState("전체");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const navi = useNavigate();

  // const [isFirstRender, setIsFirstRender] = useState(true);

  const categories = [
    "전체",
    "패션/뷰티",
    "맛집/요리/음식",
    "경제/재테크",
    "썸/연애",
    "취미/운동",
    "스포츠",
    "여행",
    "결혼",
    "게임",
    "반려동물",
    "가족",
    "취업/자격증",
    "일상",
    "기타",
  ];

  const handleCategoryClick = (category) => {
    setPrevCategory(prevCategory);
    setCategory(category);
    setPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `/postCards?maincategory=유머&category=${category}&splitNumber=5&splitPageNumber=${page}`
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
    <MobileLayout>
      <PageWithFooterWrapper>
        <BoardHeader>
          <BoardHeaderSub>
            <BoardTitle>훈수게시판</BoardTitle>

            <Row>
              <MainCategory onClick={() => navi("/totalboard")}>
                전체
              </MainCategory>

              <MainCategory isActive onClick={() => navi("/humourboard")}>
                유머
              </MainCategory>

              <MainCategory onClick={() => navi("/seriousboard")}>
                진지
              </MainCategory>
            </Row>
            <CategorySlider>
              {/* <CategorySlider isFirstRender={isFirstRender}> */}
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(item)}
                  style={{ marginLeft: index === 0 ? "1.25rem" : "0.5rem" }}
                  // index={index}
                  // isActive={item === category}
                  // onFocus={() => setIsFirstRender(false)}
                >
                  {item}
                </button>
              ))}
            </CategorySlider>
          </BoardHeaderSub>
        </BoardHeader>

        <PostCardCont ref={postCardContRef}>
          {data?.map((item) => (
            <PostCard
              key={item.postIdx}
              title={item.title}
              nickname={item.nickname}
              content={item.desc}
              viewCount={item.postViewCount}
              commentCount={item.commentCount}
            />
          ))}
        </PostCardCont>
      </PageWithFooterWrapper>
      <Footer />
    </MobileLayout>
  );
};

const PostCardCont = styled.div`
  height: 45.28rem;
  overflow-y: scroll;
`;

const CategorySlider = styled.div`
  padding: 1rem 0;
  width: 400px;
  background-color: white;
  /* overflow-x: scroll; */
  overflow-y: scroll;
  white-space: nowrap;

  & > button {
    display: inline-block;
    background-color: white;
    border: 0.1rem solid rgb(120, 120, 120);
    margin-right: 0.5rem;
    border-radius: 1.75rem;
    padding: 0.25rem 1rem;

    // 처음 렌더링될 때 "전체" 버튼이 active 상태
    /* ${(props) =>
      props.isFirstRender
        ? props.index === 0 &&
          css`
            background-color: rgb(120, 120, 120);
            color: white;
            outline: none;
          `
        : props.isActive &&
          css`
            background-color: rgb(120, 120, 120);
            color: white;
            outline: none;
          `} */
  }

  & > button:focus {
    background-color: rgb(120, 120, 120);
    color: white;
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
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

export default TotalBoard;
