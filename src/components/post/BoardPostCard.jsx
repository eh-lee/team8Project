import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";

const BoardPostCard = ({
  mainCategory,
  title,
  content,
  viewCount,
  commentCount,
  postIdx,
  // isFirst, 자식의 자식이 돼 벌임
}) => {
  const navigate = useNavigate();

  return (
    <PostCardWrap
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
      className="no-hover"
    >
      <PostCardTitleBox>
        <PostCardMainCategory>{mainCategory}🤮</PostCardMainCategory>
        <PostCardRow>
          <PostCardTitle>{title}</PostCardTitle>
          <PostCardTitleIcon></PostCardTitleIcon>
          <PostCardTitleIcon></PostCardTitleIcon>
        </PostCardRow>
      </PostCardTitleBox>
      <PostCardContentBox>
        <PostCardContent>{content}</PostCardContent>
      </PostCardContentBox>
      <PostCardInfoBox>
        <PostCardCount>
          <AiOutlineHeart />
          {viewCount}
        </PostCardCount>
        <PostCardCount>
          <AiOutlineEye />
          {viewCount}
        </PostCardCount>
        <PostCardCount>
          <IoChatbubbleOutline />
          {commentCount}
        </PostCardCount>
      </PostCardInfoBox>
    </PostCardWrap>
  );
};

export default BoardPostCard;

const PostCardRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const PostCardTitleIcon = styled.div`
  width: 10%;
`;

const PostCardWrap = styled.div`
  background-color: white;
  padding: 8% 0 5% 7%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  /* ${({ isFirst }) => isFirst && `border-top-radius: 1rem;`}; */
`;

const PostCardTitleBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  /* 아이콘 10% 10% */
  gap: 0.5rem;
`;

const PostCardMainCategory = styled.li`
  font-size: 0.75rem;
  color: gray;
  max-width: 20%;
`;

const PostCardTitle = styled.li`
  width: 80%;
  font-size: 1.5rem;
`;

const PostCardContentBox = styled.div`
  max-height: 4vh;
  /* 최대 2줄 */
  width: 90%;
  margin-top: 2.5%;
  overflow-y: scroll;
  word-wrap: break-word;
  display: flex;
  margin-bottom: 5%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PostCardContent = styled.div`
  color: gray;
  display: flex;
`;

const PostCardInfoBox = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  color: gray;
`;

const PostCardCount = styled.li`
  /* border: 1px solid black; */
  height: 15%;
`;
