import React from "react";
import Footer from "../../components/footer/Footer";
import noSearch from "../../assets/imgs/detail/noSearch.png";
import MobileLayout from "../../layout/MobileLayout.tsx";
import BoardPostCard from "../../components/post/BoardPostCard";
import BoardMainCategory from "../../components/board/BoardMainCategory";
import BoardCategorySlider from "../../components/board/BoardCategorySlider";
import { instance } from "../../api/axios";
import { useState, useEffect, useRef } from "react";
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
  const [maincategory, setMaincategory] = useState("전체");

  const SubCatCallback = (x, y) => {
    setCategory(x);
    setPrevCategory(y);
    setPage(1);
    setData([]);
  };

  const MainCatCallback = (x) => {
    setMaincategory(x);
    setPage(1);
    setData([]);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `/postCards?maincategory=${maincategory}&category=${category}&splitNumber=5&splitPageNumber=${page}`
        );
        setData((prev) => [...prev, ...response.data.postCards]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [maincategory, category, page]);

  return (
    <>
      <MobileLayout>
        <St.Header>
          <St.Wrap>
            <St.Main>훈수게시판</St.Main>
            <BoardMainCategory parentFunction={MainCatCallback} />
            <BoardCategorySlider parentFunction={SubCatCallback} />
          </St.Wrap>
        </St.Header>
        <St.PostCardList ref={postCardContRef}>
          {data.length === 0 ? (
            <St.NoSearchCont>
              <St.NoSearchImg src={noSearch} />
              <St.NoSearchText>
                {maincategory}-{category}에 등록된
                <br />
                게시글이 없습니다.
              </St.NoSearchText>
            </St.NoSearchCont>
          ) : (
            data.map((item) => (
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
            ))
          )}
        </St.PostCardList>
        <Footer />
      </MobileLayout>
    </>
  );
};

export default Board;
