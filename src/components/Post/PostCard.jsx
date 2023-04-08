import React from "react";
import styled from "styled-components";

const PostCard = ({ title, nickname, content, viewCount, commentCount }) => {
  return (
    <PostCardWrap>
      <PostCard_TitleBox>
        <PostCard_Title>{title}</PostCard_Title>
        <PostCard_Nickname>{nickname}</PostCard_Nickname>
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
  border: 1px solid black;
  border-radius: 0.75rem;
  margin: 1.5rem 2rem;
  // greeting 컴포넌트들과 margin값 통일

  padding: 1.2rem;

  display: flex;
  flex-direction: column;
`;

const PostCard_TitleBox = styled.ul`
  /* border: 1px solid orange; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 100%;
  height: 30%;

  gap: 0.2rem;

  margin-bottom: 1rem;
`;

const PostCard_Title = styled.li`
  /* border: 1px solid black; */
  font-size: 1.5rem;
`;

const PostCard_Nickname = styled.li`
  /* border: 1px solid black; */
  font-size: 0.8rem;
  color: gray;
`;

const PostCard_ContentBox = styled.div`
  /* border: 1px solid blue; */
  max-height: 30vh;
  /* height을 안 정해서 스크롤이 안 먹힌 것 */
  width: 100%;
  overflow-y: scroll;
  word-wrap: break-word;
  /* 줄바꿈 기능 */
  display: flex;
  margin-bottom: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PostCard_Content = styled.div`
  /* border: 1px solid black; */

  display: flex;
`;

const PostCard_InfoBox = styled.ul`
  /* border: 1px solid green; */
  border-top: 1px solid gray;

  width: 100%;
  height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 5rem;
`;

const PostCard_ViewCount = styled.li`
  /* border: 1px solid black; */
  height: 1rem;
`;

const PostCard_CommentCount = styled.li`
  /* border: 1px solid black; */
  height: 1rem;
`;

