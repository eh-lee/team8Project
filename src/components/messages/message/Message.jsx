import React from "react";
import styled from "styled-components";
// import ChatIcon from "../../../assets/battle/battleChatIcon.png";
import hunsuFace from "../../../assets/battle/battleChatIcon.png";

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <StMessageContEnd>
      <StNameRight>{trimmedName}</StNameRight>

      <StMsgBoxMargenta>
        <StMsgTextWhite>{text}</StMsgTextWhite>
      </StMsgBoxMargenta>
    </StMessageContEnd>
  ) : (
    <StMessageContStart>
      <StChatInfoProfileCont>
        <StChatInfoUserLvImg src={hunsuFace} />
        <StNameLeft>{user === "hunsuBot" ? "훈수봇" : user}</StNameLeft>
      </StChatInfoProfileCont>

      <StMsgBoxLight>
        <StMsgTextDark>{text}</StMsgTextDark>
      </StMsgBoxLight>
    </StMessageContStart>
  );
}

export default Message;

const StMessageContEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 400px;
  margin-top: 16px;
  font-size: 14px;
  // border: 1px solid tomato;
`;

const StChatInfoProfileCont = styled.div`
  // border: 1px solid violet;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: relative;
  max-width: 280px;
  height: 32px;
`;

const StChatInfoUserLvImg = styled.img`
  /* border: 1px solid gray; */
  // border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const StMessageContStart = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 400px;
  margin: 16px 10px 0 25px;
  font-size: 14px;
  flex-direction: column;
  /* border: 1px solid green; */
`;

const StMsgTextWhite = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  word-wrap: break-word;
  color: white;
`;

const StMsgTextDark = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  word-wrap: break-word;
  color: #353535;
`;

const StMsgBoxLight = styled.div`
  border: 1px solid green;
  background: white;
  border-radius: 0 10px 10px 10px;
  padding: 8px 12px;
  display: inline-block;
  max-width: 65%;
  margin-left: 40px;
`;

const StMsgBoxMargenta = styled.div`
  border-radius: 10px 0 10px 10px;
  padding: 8px 12px;
  display: inline-block;
  max-width: 65%;
  background: #ef3f61;
  margin-right: 25px;
`;

const StNameRight = styled.p`
  display: flex;
  align-items: center;
  color: #828282;
  letter-spacing: 0.3px;
  padding-right: 10px;
`;

const StNameLeft = styled.p`
  display: flex;
  align-items: center;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: 10px;
`;
