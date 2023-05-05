import React, { useRef, useState } from "react";
import cancel from "../../assets/icons/common/expand.png";
import { instance } from "../../api/axios";
import * as St from "./SearchForm.style";
import BoardPostCard from "../post/BoardPostCard";
import styled from "styled-components";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.get(`/search/?q=${input}`);
      console.log("response===========>", response.data);
      setInput("");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const initValueHandler = () => {
    setInput("");
  };

  return (
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
      <SearchCardList>
        {data?.map((item) => (
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
        ))}
      </SearchCardList>
    </St.Wrap>
  );
};

export default SearchForm;

const SearchCardList = styled.div`
  margin-top: 10rem;
  height: 45.28rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
