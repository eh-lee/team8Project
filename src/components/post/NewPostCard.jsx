import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NewPostCard = ({ postIdx, mainCategory, category, title, content }) => {
  const navigate = useNavigate();

  return (
    <PostCardJrWrap
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
    >
      <PostCardJr_TitleBox>
        <PostCardJr_MainCategory>
          {mainCategory}🌝{category}
        </PostCardJr_MainCategory>
        <PostCardJr_Title>{title}</PostCardJr_Title>
      </PostCardJr_TitleBox>
      <PostCardJr_ContentBox>
        <PostCardJr_Content>{content}</PostCardJr_Content>
      </PostCardJr_ContentBox>
    </PostCardJrWrap>
  );
};

export default NewPostCard;

const PostCardJrWrap = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: white;

  width: 150px;
  height: 100px;

  padding: 1rem 0;

  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PostCardJr_TitleBox = styled.ul`
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* width: 6rem; */
  width: 88px;
  height: 2rem;

  gap: 0.2rem;

  margin-left: 1rem;

  margin-bottom: 1rem;
`;

const PostCardJr_MainCategory = styled.li`
  font-size: 0.6rem;
  color: gray;
`;

const PostCardJr_Title = styled.li`
  font-size: 1.3rem;
`;

const PostCardJr_ContentBox = styled.div`
  /* border: 1px solid black; */

  max-height: 10vh;
  width: 88px;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  word-wrap: break-word;

  margin-left: 1rem;

  display: flex;
`;

const PostCardJr_Content = styled.div`
  display: flex;
  color: gray;
  font-size: 0.8rem;
`;
