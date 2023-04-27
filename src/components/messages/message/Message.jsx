import React from "react";
import styled from "styled-components";

function Message({ message: { user, text }, name }) {
  // function Message({ message: {text} , name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <StMessageContEnd>
      <StNameRight>{trimmedName}</StNameRight>
      <StMsgBoxBlue>
        {/* <StMsgTextWhite>{ReactEmoji.emojify(text)}</StMsgTextWhite> */}
        <StMsgTextWhite>{text}</StMsgTextWhite>
      </StMsgBoxBlue>
    </StMessageContEnd>
  ) : (
    <StMessageContStart>
      <StMsgBoxLight>
        <StMsgTextDark>{text}</StMsgTextDark>
      </StMsgBoxLight>
      <StNameLeft>{user}</StNameLeft>
    </StMessageContStart>
  );
}

export default Message;

const StMessageContEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 400px;
  margin: 16px 10px 0 0;
  // border: 1px solid tomato;
  font-size: 14px;
`;

const StMessageContStart = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;
  margin: 16px 10px 0 10px;
  // border: 1px solid green;
  font-size: 14px;
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
  background: white;
  border-radius: 0 10px 10px 10px;
  padding: 8px 12px;
  display: inline-block;
  max-width: 65%;
`;

const StMsgBoxBlue = styled.div`
  border-radius: 10px 0 10px 10px;
  padding: 8px 12px;
  display: inline-block;
  max-width: 65%;
  background: #ef3f61;
  margin-right: 10px;
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
