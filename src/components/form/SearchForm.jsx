import React, { useState } from "react";
import cancel from "../../assets/icons/common/expand.png";
import { instance } from "../../api/axios";
import * as St from "./SearchForm.style";
import noSearch from "../../assets/imgs/detail/noSearch.png";
import BoardPostCard from "../post/BoardPostCard";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [searched ,setSearched] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    setSearched(input)
    setInput("");

    try {
      const response = await instance.get(`/search/?q=${input}`);
      setData(response.data.data);
    } catch (error) {
      if (error.message) {
        alert("검색 서버가 현재 점검 중입니다.");
      }
      console.error(error);
    };
  };

  const initValueHandler = () => {
    setInput("");
  };

  return (
    <>
      <St.Wrap>
        <St.Form>
          <St.Row>
            <St.LeftBox>
              <St.Search />
            </St.LeftBox>
            <St.Input
              required
              type="text"
              placeholder="검색어를 입력하세요."
              onChange={(e) => inputHandler(e)}
              maxLength="20"
              value={input}
            />
            <St.RightBox>
              <St.Cancel src={cancel} onClick={() => initValueHandler()} />
            </St.RightBox>
          </St.Row>
          <St.InputBtn type="submit" onClick={(e) => searchSubmitHandler(e)}>
            검색
          </St.InputBtn>
        </St.Form>
      </St.Wrap>
      <St.SearchCardList>
        {data.length === 0 ? (
          <St.NoSearchCont>
            <St.NoSearchImg src={noSearch} />
            <St.NoSearchText>
              '{searched}'에 대한
              <br />
              검색결과가 없습니다.
            </St.NoSearchText>
          </St.NoSearchCont>
        ) : (
          data.map((item) => (
            <BoardPostCard
              key={item.postIdx}
              postIdx={item.postIdx}
              title={item.title}
              // nickname={item.nickname}
              content={item.desc}
              // likesCount={item.likesCount}
              viewCount={item.postViewCount}
              // commentCount={item.commentCount}
              mainCategory={item.maincategory}
              category={item.category}
            />
          ))
        )}
      </St.SearchCardList>
    </>
  );
};

export default SearchForm;