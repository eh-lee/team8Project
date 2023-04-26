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
  // padding: 0 5%;
  margin-top: 3px;
  border: 1px solid green;
  width: 100%;
`;

const StMessageContStart = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  // padding: 0 5%;
  margin-top: 3px;
  border: 1px solid green;
`;

const StMsgTextWhite = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: white;
`;

const StMsgTextDark = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: #353535;
`;

const StMsgBoxLight = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;

const StMsgBoxBlue = styled.div`
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
  background: #2979ff;
`;

const StNameRight = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-right: 10px;
`;

const StNameLeft = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: 10px;
`;
