import React from "react";
import hunsuFace from "../../assets/battle/battleChatIcon.png";
import * as St from "./Message.style"

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <St.MessageContEnd>
      <St.NameRight>{trimmedName}</St.NameRight>

      <St.MsgBoxMargenta>
        <St.MsgTextWhite>{text}</St.MsgTextWhite>
      </St.MsgBoxMargenta>
    </St.MessageContEnd>
  ) : (
    <St.MessageContStart>
      <St.ChatInfoProfileCont>
        <St.ChatInfoUserLvImg src={hunsuFace} />
        <St.NameLeft>{user === "hunsuBot" ? "훈수봇" : user}</St.NameLeft>
      </St.ChatInfoProfileCont>

      <St.MsgBoxLight>
        <St.MsgTextDark>{text}</St.MsgTextDark>
      </St.MsgBoxLight>
    </St.MessageContStart>
  );
}

export default Message;