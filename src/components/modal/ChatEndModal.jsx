import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:4000";
let socket;

// const ChatEndModal = ({ open, close, isAdmin, room, messages }) => {
const ChatEndModal = ({ open, close, room, messages }) => {
  // nickname: 방을 만든 사람의 nickname

  const nav = useNavigate();

  const modalRef = useRef();

  //   console.log("모달로 내려온 isAdmin", isAdmin)
  console.log("모달로 내려온 messages", messages);
  console.log("모달로 내려온 room", room);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, open, close]);

  //   const [isAdmin, setIsAdmin] = useState(true);
  //   임시

  const chatSaveHandler = async () => {
    // [추가] 2
    // [ V ] isAdmin ? <onClick = {chatSaveHandler} /> : null
    // [  ]통신 확인 필요
    try {
      console.log("messages보낸다~~");
      await instanceWithAuth.post("/chat/chatsave", messages);
    } catch (error) {
      console.error(error);
    }
  };

  const endChatHandler = async () => {
    socket = io(ENDPOINT);
    // [추가] 1
    // [V] isAdmin ? <onClick = {chatSaveHandler} /> : null
    console.log("room============>", room);
    socket.disconnect();
    try {
      await instanceWithAuth.delete(`/chat/hunsuChat/${room}`);
    } catch (error) {
      console.error(error);
    }

    nav("/battle");
  };

  const isAdmin = true;
  //   const isAdmin = false;

  //   useEffect(()=>{
  //     console.log("close========>", close);
  // }, [close])

  return open ? (
    <>
      {isAdmin ? (
        <StFooBG>
          <StChatEndWrap ref={modalRef}>
            <StChatEndList column large>
              {/* <StChatColumn> */}
              <ButtonText Large>채팅방 나가기</ButtonText>
              <StChatEndInfo>
                배틀 종료 선택시, 채팅이 종료됩니다.
                <StFooBr />
                저장을 원하시는 경우 저장 후 종료하십시오.
              </StChatEndInfo>
              {/* </StChatColumn> */}
            </StChatEndList>

            <StChatEndRowList>
              <StRowButtonText onClick={endChatHandler} left>
                배틀 종료
              </StRowButtonText>
              <StRowButtonText onClick={chatSaveHandler}>
                저장 후 종료
              </StRowButtonText>
            </StChatEndRowList>

            <StChatEndList onClick={close} topMargin cursor>
              <ButtonText>취소</ButtonText>
            </StChatEndList>
          </StChatEndWrap>
        </StFooBG>
      ) : (
        <StFooBG>
          <StChatEndWrap ref={modalRef}>
            <StChatEndList column medium>
              {/* <StChatColumn> */}
              <ButtonText Large>채팅방 나가기</ButtonText>
              <StChatEndInfo>
                배틀 종료 선택 시, 채팅방을 나갑니다.
              </StChatEndInfo>
              {/* </StChatColumn> */}
            </StChatEndList>
            <StChatEndList
              onClick={() => {
                nav("/battle");
              }}
              delete
              cursor
            >
              <ButtonText>배틀 종료</ButtonText>
            </StChatEndList>
            <StChatEndList onClick={close} topMargin cursor>
              <ButtonText>취소</ButtonText>
            </StChatEndList>
          </StChatEndWrap>
        </StFooBG>
      )}
    </>
  ) : null;
};

export default ChatEndModal;

const StFooBr = styled.br``;

const StFooBG = styled.div`
  position: fixed;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StChatEndWrap = styled.ul`
  position: absolute;
  background-color: transparent;
  top: 35%;
  left: 7.5%;
  width: 340px;
  //   height: 176px;
`;

const StChatEndList = styled.ul`
  width: 340px;
  height: 56px;
  /* border: 1px solid darkorchid; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #cccccc;
  background-color: white;
  color: #2d2d2d;
  border-radius: 10px 10px 0 0;
  ${({ cursor }) =>
    cursor &&
    css`
      cursor: pointer;
    `};

  ${({ delete: isDelete }) =>
    isDelete &&
    css`
      color: #eb5147;
      border-bottom: none;
      border-radius: 0 0 10px 10px;
    `};

  ${({ topMargin }) =>
    topMargin &&
    css`
      margin-top: 8px;
      border-radius: 10px;
    `};

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};

  ${({ medium }) =>
    medium &&
    css`
      height: 73px;
    `};

  ${({ large }) =>
    large &&
    css`
      height: 91px;
    `};
`;

const StChatEndRowList = styled.ul`
  width: 340px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  background-color: white;
  color: #2d2d2d;
  /* border-radius: 10px 10px 0 0; */
  color: #eb5147;
  border-bottom: none;

  border-radius: 0 0 10px 10px;
`;

const StRowButtonText = styled.li`
  width: 170px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  ${({ left: isLeft }) =>
    isLeft &&
    css`
      border-right: 1px solid #cccccc;
    `};
`;

const ButtonText = styled.li`
  //   text-align: center;
  font-size: 16px;
  font-weight: 600;
  ${({ Large: isLarge }) =>
    isLarge &&
    css`
      font-size: 18px;
    `};
`;

const StChatEndInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

// // ====
// <StFooBG onClick={close} ref={modalRef}>
// <StChatEndWrap>
//   <StChatEndList column>
//     {/* <StChatColumn> */}
//     <ButtonText Large>채팅방 나가기</ButtonText>
//     <StChatEndInfo>배틀 종료 선택 시, 채팅방을 나갑니다.</StChatEndInfo>
//     {/* </StChatColumn> */}
//   </StChatEndList>
//   <StChatEndList onClick={nav("/battle")} delete>
//     <ButtonText>배틀 종료</ButtonText>
//   </StChatEndList>
//   <StChatEndList topMargin>
//     <ButtonText>취소</ButtonText>
//   </StChatEndList>
// </StChatEndWrap>
// </StFooBG>
