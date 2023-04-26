import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import battle1 from "../../assets/battle/battle1.png"
import battle2 from "../../assets/battle/battle2.png"
import battleParty from "../../assets/battle/battleCurrParty.png"

const ChatCard = ({ idx, roomName, chatIdx, nickname, maxParty }) => {
  const navigate = useNavigate();

  return (
    <StChatCardWrap
      onClick={() => {
        navigate(`/battle/chat?name=${nickname}&room=${roomName}`);
      }}
    >
      <StChatCardInfoCont>
        <StChatCardInfoTitleBox>
          <StChatCardTitleImg src={idx %2 === 0 ? battle2 : battle1} />
          <StChatCardTitle>{roomName}</StChatCardTitle>
        </StChatCardInfoTitleBox>
        {/* {currParty}\ */}
        <StChatCardInfoPartyBox>
          <StChatCardPartyImg src={battleParty} />
          <StChatCardParty>{maxParty}</StChatCardParty>
        </StChatCardInfoPartyBox>
      </StChatCardInfoCont>
    </StChatCardWrap>
  );
};

export default ChatCard;

const StChatCardWrap = styled.div`
  /* border: 1px solid red; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  /* ${({ isFirst }) => isFirst && `border-top-radius: 1rem;`}; */

  &:hover {
    cursor: pointer;
  }
`;

const StChatCardInfoCont = styled.ul`
  /* border: 1px solid green; */
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StChatCardInfoTitleBox = styled.li`
  display: flex;
  align-items: flex-start;
  width: 70%;
  margin: 16px 25px;
  /* border: 1px solid tomato; */
`;

const StChatCardTitleImg = styled.img`
  height: 56px;
  width: 56px;
`;

const StChatCardTitle = styled.h2`
  margin: 2px 0 0 8px;
  display: flex;
  justify-content: flex-start;
  width: 90%;
  /* border: 1px solid green; */
  font-size: 16px;
`;

const StChatCardInfoPartyBox = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 11%;
  margin: 16px 25px;
  /* border: 1px solid tomato; */
`;

const StChatCardPartyImg = styled.img`
  margin-right: 4px;
  height: 14px;
  width: 15px;
  /* border: 1px solid tomato; */
`;

const StChatCardParty = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 18px;
  display: flex;
  font-size: 14px;
  /* border: 1px solid tomato; */
`;