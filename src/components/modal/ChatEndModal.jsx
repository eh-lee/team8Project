import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import io from "socket.io-client";
import * as St from "./ChatEndModal.style";

const ENDPOINT = "http://localhost:4000";
let socket;

// const ChatEndModal = ({ open, close, isAdmin, room, messages }) => {
const ChatEndModal = ({ open, close, room, messages }) => {
  // nickname: 방을 만든 사람의 nickname
  const nickname = localStorage.getItem("nickname");

  const nav = useNavigate();

  const modalRef = useRef();

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
      await instanceWithAuth.post("/chat/chatsave", {
        nickname: nickname,
        room: room,
        saveDataChat: messages,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const endChatHandler = async () => {
    socket = io(ENDPOINT);
    // [추가] 1
    // [V] isAdmin ? <onClick = {chatSaveHandler} /> : null
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
        <St.FooBG>
          <St.ChatEndWrap ref={modalRef}>
            <St.ChatEndList column large>
              {/* <StChatColumn> */}
              <St.ButtonText Large>채팅방 나가기</St.ButtonText>
              <St.ChatEndInfo>
                배틀 종료 선택시, 채팅이 종료됩니다.
                <St.FooBr />
                저장을 원하시는 경우 저장 후 종료하십시오.
              </St.ChatEndInfo>
              {/* </StChatColumn> */}
            </St.ChatEndList>

            <St.ChatEndRowList>
              <St.RowButtonText onClick={endChatHandler} left>
                배틀 종료
              </St.RowButtonText>
              <St.RowButtonText onClick={chatSaveHandler}>
                저장 후 종료
              </St.RowButtonText>
            </St.ChatEndRowList>

            <St.ChatEndList onClick={close} topMargin cursor>
              <St.ButtonText>취소</St.ButtonText>
            </St.ChatEndList>
          </St.ChatEndWrap>
        </St.FooBG>
      ) : (
        <St.FooBG>
          <St.ChatEndWrap ref={modalRef}>
            <St.ChatEndList column medium>
              {/* <StChatColumn> */}
              <St.ButtonText Large>채팅방 나가기</St.ButtonText>
              <St.ChatEndInfo>
                배틀 종료 선택 시, 채팅방을 나갑니다.
              </St.ChatEndInfo>
              {/* </StChatColumn> */}
            </St.ChatEndList>
            <St.ChatEndList
              onClick={() => {
                nav("/battle");
              }}
              delete
              cursor
            >
              <St.ButtonText>배틀 종료</St.ButtonText>
            </St.ChatEndList>
            <St.ChatEndList onClick={close} topMargin cursor>
              <St.ButtonText>취소</St.ButtonText>
            </St.ChatEndList>
          </St.ChatEndWrap>
        </St.FooBG>
      )}
    </>
  ) : null;
};

export default ChatEndModal;

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
