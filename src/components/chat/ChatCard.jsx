import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ChatCard = ({ roomName, chatIdx, nickname, maxParty }) => {
  const navigate = useNavigate();

  return (
    <ChatCardWrap
      onClick={() => {
        navigate(`/battle/chat?nickName=${nickname}&roomName=${roomName}`, {
          state: { roomName, maxParty },
        });
      }}
    >
      <PostCardTitleBox>
        <PostCardRow>
          <PostCardTitle>{roomName}</PostCardTitle>
        </PostCardRow>
      </PostCardTitleBox>
    </ChatCardWrap>
  );
};

export default ChatCard;

const PostCardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ChatCardWrap = styled.div`
  /* border: 1px solid red; */
  background-color: white;
  padding: 8% 0 5% 7%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  ${({ isFirst }) => isFirst && `border-top-radius: 1rem;`};

  &:hover {
    cursor: pointer;
  }
`;

const PostCardTitleBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  /* 아이콘 10% 10% */
  gap: 0.5rem;
  /* border: 1px solid green; */
`;

const PostCardTitle = styled.li`
  width: 80%;
  font-size: 1.25rem;
`;
