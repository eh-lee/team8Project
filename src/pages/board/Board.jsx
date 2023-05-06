import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import MobileLayout from "../../layout/MobileLayout";
import BoardPostCard from "../../components/post/BoardPostCard";
// import InfiniteScroll from "../../components/hook/scroll/InfiniteScroll";
import BoardMainCategory from "../../components/board/BoardMainCategory";
import BoardCategorySlider from "../../components/board/BoardCategorySlider";
import { instance } from "../../api/axios";
import * as St from "../../components/board/Board.style";

const Board = () => {
  useEffect(() => {
    document.title = "훈수 - 게시판";
  }, []);

  const postCardContRef = useRef(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("전체");
  const [prevCategory, setPrevCategory] = useState("전체");
  // const [prevMaincategory, setPrevMaincategory] = useState("전체");
  const [maincategory, setMaincategory] = useState("전체");

  const BoardCallback = (x, y) => {
    setCategory(x);
    setPrevCategory(y);
    setPage(1);
  };

  const MainCatCallback = (x) => {
    setMaincategory(x);
    // setPrevMaincategory(y);
    setPage(1);
  };

  // useEffect(() => {
  //   if (maincategory !== prevMaincategory || category !== prevCategory) {
  //     setPage(1);
  //   }
  // }, [maincategory, category]);

  // console.log("page=================>", page);

  // console.log("prev=================>", prevCategory);
  // console.log("current=================>", category);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `/postCards?maincategory=${maincategory}&category=${category}&splitNumber=5&splitPageNumber=${page}`
        );

        // if (page === 1) {
        //   if (!response.data.postCards[0]) {
        //     alert(`${category} 게시물이 없습니다.`);
        //   } else {
        //     setData((prev) => [...prev, ...response.data.postCards]);
        //     if (response.data.postCards.length === 0) {
        //       alert("마지막 게시물입니다.");
        //     }
        //   }
        // } else {
        //   setData((prev) => [...prev, ...response.data.postCards]);
        //   if (response.data.postCards.length === 0) {
        //     alert("마지막 게시물입니다.");
        //   }
        // }

        // if (page === 1 && !response.data.postCards[0]) {
        //   alert(`${category} 게시물이 없습니다.`);
        // } else {
        //   setData((prev) => [...prev, ...response.data.postCards]);
        //   if (response.data.postCards.length === 0) {
        //     alert("마지막 게시물입니다.");
        //   }
        // }

        // console.log(response.data.postCards);
        // console.log(page=1 && !response.data.postCards[0]);

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

        // if (prevCategory === category) {
        //   setData((prev) => [...prev, ...response.data.postCards]);
        //   if (response.data.postCards.length === 0) {
        //     alert("마지막 게시물입니다.");
        //   }
        // }

        // if (prevCategory !== category && page > 1) {
        //   setData(response.data.postCards);
        //   if (response.data.postCards.length === 0) {
        //     alert(`${category} 게시물이 없습니다.`);
        //   }

        // } else {
        // setPage(1);
        // setData(response.data.postCards);
        // if (response.data.postCards.length === 0) {
        // alert(`${category} 게시물이 없습니다.`);
        // }
        // }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [maincategory, category, page]);

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

  console.log("page==============>", page);

  // // 인피니티 스크롤에 넘겨주는 페이지??

  // // 인피니티 스크롤에서 받아야지 페이지를

  // // 아!
  // // 페이지를 받는 데가 세 군데
  // // 1. BoardMainCategory -> parentFunction BoardCallback
  // // 2. BoardCategorySlider -> parentFunction MainCatCallback
  // // 3. infiniteScroll -> parentFunction

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await instance.get(
  //         `/postCards?maincategory=${maincategory}&category=${category}&splitNumber=7&splitPageNumber=${page}`
  //       );
  //       if (prevCategory === category) {
  //         setData((prev) => [...prev, ...response.data.postCards]);
  //         if (response.data.postCards.length === 0) {
  //           alert("마지막 게시물입니다.");
  //         }
  //       } else {
  //         setData(response.data.postCards);
  //         if (response.data.postCards.length === 0) {
  //           alert(`${category} 게시물이 없습니다.`);
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [prevCategory, maincategory, category, page]);

  // console.log("main============>", maincategory);
  // console.log("subbbbb============>", category);
  // console.log("paggg============>", page);
  // // 카테고리 변경시 통신 이상 없음

  // const InfiniteCallback = (x) => {
  //   setPage(x);
  //   // 인피니트스크롤의 페이지에 변화가 있을 시 날라오는 콜백
  //   console.log("인피니티스크롤한테 받은 페이지=========>", x);
  // };

  // InfiniteScroll({ postCardContRef, parentFunction: InfiniteCallback });

  return (
    <>
      <MobileLayout>
        <St.Header>
          <St.Wrap>
            <St.Main>훈수게시판</St.Main>
            <BoardMainCategory parentFunction={MainCatCallback} />
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

// for useRef
const PostCardList = styled.div`
  margin-top: 170px;
  height: 45.28rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default Board;
