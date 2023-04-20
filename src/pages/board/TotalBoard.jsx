import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { instance } from "../../api/axios";
import Footer from "../../components/footer/Footer";
import BoardPostCard from "../../components/post/BoardPostCard";
// import HorizontalScroll from "../../components/hook/scroll/HorizontalScroll";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";

const TotalBoard = () => {
  const [category, setCategory] = useState("전체");
  const [prevCategory, setPrevCategory] = useState("전체");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const navi = useNavigate();

  // const [isFirstRender, setIsFirstRender] = useState(true);
  // 처음 렌더링시 개별 카테고리의 전체에 포커싱 주기

  // const scrollRef = HorizontalScroll();
  // 카테고리 슬라이더에 호리즌탈 커스텀 스크롤 주기

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
          `/postCards?maincategory=전체&category=${category}&splitNumber=7&splitPageNumber=${page}`
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
                <MainCategory isActive onClick={() => navi("/totalboard")}>
                  전체
                </MainCategory>

                <MainCategory onClick={() => navi("/humourboard")}>
                  유머
                </MainCategory>

                <MainCategory onClick={() => navi("/seriousboard")}>
                  진지
                </MainCategory>
              </Row>
              <CategorySlider>
                {/* <CategorySlider ref={scrollRef}> */}
                {/* <CategorySlider isFirstRender={isFirstRender}> */}
                {categories.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(item)}
                    style={{ marginLeft: index === 0 ? "7%" : "2%" }}
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
              <BoardPostCard
                key={item.postIdx}
                postIdx={item.postIdx}
                title={item.title}
                nickname={item.nickname}
                content={item.desc}
                viewCount={item.postViewCount}
                likesCount={item.likesCount}
                commentCount={item.commentCount}
                mainCategory={item.maincategory}
                category={item.category}
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
  /* height: 70vh; */
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CategorySlider = styled.div`
  padding: 5% 0;
  width: 400px;
  background-color: rgb(220, 220, 220, 0.35);
  /* overflow-x: scroll; */
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  white-space: nowrap;

  & > button {
    display: inline-block;
    color: #ef3f61;
    background-color: white;
    border: 0.1rem solid rgb(180, 180, 180);
    margin-right: 1%;
    border-radius: 1.75rem;
    padding: 0.3rem 1rem;

    // 처음 렌더링될 때 "전체" 버튼이 active 상태
    /* ${(props) =>
      props.isFirstRender
        ? props.index === 0 &&
          css`
            background-color: rgb(239, 63, 97);
            color: white;
            outline: none;
          `
        : props.isActive &&
          css`
            background-color: rgb(239, 63, 97);
            color: white;
            outline: none;
          `} */
  }

  & > button:focus {
    background-color: rgb(239, 63, 97);
    /* theme color */
    color: white;
    border: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

// ================= for horizontal scroll ===================
// const CategorySlider = styled.div`
//   padding: 1rem 0;
//   width: 400px;
//   background-color: white;
//   /* overflow-x: scroll; */
//   overflow: auto;
//   white-space: nowrap;

//   & > button {
//     display: inline-block;
//     background-color: white;
//     border: 0.1rem solid rgb(120, 120, 120);
//     margin-right: 0.5rem;
//     border-radius: 1.75rem;
//     padding: 0.25rem 1rem;

//     // 처음 렌더링될 때 "전체" 버튼이 active 상태
//     /* ${(props) =>
//       props.isFirstRender
//         ? props.index === 0 &&
//           css`
//             background-color: rgb(120, 120, 120);
//             color: white;
//             outline: none;
//           `
//         : props.isActive &&
//           css`
//             background-color: rgb(120, 120, 120);
//             color: white;
//             outline: none;
//           `} */
//   }

//   & > button:focus {
//     background-color: rgb(120, 120, 120);
//     color: white;
//     outline: none;
//   }

//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

// ================= for horizontal scroll ===================

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
  /* width: 100%; */
  width: 100vw;
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
