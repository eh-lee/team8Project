import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostCard = ({
  mainCategory,
  title,
  content,
  viewCount,
  commentCount,
  postCardIdx,
}) => {
  const navigate = useNavigate();

  return (
    <PostCardWrap
      onClick={() => {
        navigate(`/board/${postCardIdx}`);
      }}
      className="no-hover"
    >
      <PostCard_TitleBox>
        <PostCard_MainCategory>{mainCategory}</PostCard_MainCategory>
        <PostCard_Title>{title}</PostCard_Title>
      </PostCard_TitleBox>
      <PostCard_ContentBox>
        <PostCard_Content>{content}</PostCard_Content>
      </PostCard_ContentBox>
      <PostCard_InfoBox>
        <PostCard_ViewCount>{viewCount}</PostCard_ViewCount>
        <PostCard_CommentCount>{commentCount}</PostCard_CommentCount>
      </PostCard_InfoBox>
    </PostCardWrap>
  );
};

export default PostCard;

const PostCardWrap = styled.div`
  /* border: 1px solid black; */
  border-radius: 0.75rem;
  background-color: #f4f4f5;

  /* width: 280px; */
  width: 17.5rem;

  padding: 1rem 0;

  display: flex;
  flex-direction: column;
`;

const PostCard_TitleBox = styled.ul`
  /* border: 1px solid orange; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 15.5rem;
  height: 2.5rem;

  gap: 0.5rem;

  margin-left: 1rem;

  margin-bottom: 0.3rem;
`;

const PostCard_MainCategory = styled.li`
  font-size: 0.6rem;
  color: gray;
`;

const PostCard_Title = styled.li`
  /* border: 1px solid black; */
  font-size: 1.5rem;
`;

const PostCard_ContentBox = styled.div`
  /* border: 1px solid blue; */
  max-height: 30vh;
  /* height을 안 정해서 스크롤이 안 먹힌 것 */
  width: 15.5rem;
  overflow-y: scroll;
  word-wrap: break-word;
  /* 줄바꿈 기능 */
  display: flex;
  margin-bottom: 0.5rem;
  margin-left: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PostCard_Content = styled.div`
  /* border: 1px solid black; */
  color: gray;
  display: flex;
`;

const PostCard_InfoBox = styled.ul`
  /* border: 1px solid green; */
  border-top: 1px solid gray;

  width: 15.5rem;
  height: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 5rem;
  margin-left: 1rem;
`;

const PostCard_ViewCount = styled.li`
  /* border: 1px solid black; */
  height: 1rem;
`;

const PostCard_CommentCount = styled.li`
  /* border: 1px solid black; */
  height: 1rem;
`;
