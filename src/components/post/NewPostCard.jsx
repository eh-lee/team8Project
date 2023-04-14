import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NewPostCard = ({ postIdx, mainCategory, title, content }) => {
  const navigate = useNavigate();

  return (
    <PostCardJrWrap
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
    >
      <PostCardJr_TitleBox>
        <PostCardJr_MainCategory>{mainCategory}</PostCardJr_MainCategory>
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
  border-radius: 0.75rem;
  background-color: #f4f4f5;

  width: 8rem;

  padding: 1rem;

  display: flex;
  flex-direction: column;
`;

const PostCardJr_TitleBox = styled.ul`
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 6rem;
  height: 2rem;

  gap: 0.2rem;

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
  border: 1px solid black;

  max-height: 10vh;
  width: 100%;
  overflow-y: scroll;
  word-wrap: break-word;

  display: flex;
`;

const PostCardJr_Content = styled.div`
  display: flex;
  color: gray;
`;
