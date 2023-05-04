import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Messages from "../../components/messages/Messages";
import Input from "../../components/input/Input";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import closeBtn from "../../assets/icons/common/closeBtn.png";
import ModalPortal from "../../components/modal/ModalPortal";
import ChatEndModal from "../../components/modal/ChatEndModal";
import MobileLayout from "../../layout/MobileLayout";
import { cookies } from "../../api/cookies";

const ENDPOINT = "http://localhost:4000";
// const ENDPOINT = "http://43.201.45.82:3000";
let socket;


const Chat = () => {
  const nav = useNavigate();
  const curNickname = cookies.get("nickname");

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [maxParty, setMaxParty] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  const [prevMessages, setPrevMessages] = useState([]);
  const [currParty, setCurrParty] = useState({});

  // for test
  // useEffect(() => {
  //   const fetchAdmin = async () => {
  //     try {
  //       const response = await instanceWithAuth.get(
  //         `/chat/hunsuChat/admin/${room}`
  //       );
  //       console.log("fetchAdmin의 response nickname=========>", response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchAdmin();
  // }, []);
  // for test


  // 룸 입장
  useEffect(() => {
    const { name, room, maxParty } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);
    setMaxParty(maxParty);

    socket.emit("join", { name, room, maxParty }, (error) => {

      if (error) {
        alert(error);
      }
    });
  }, [window.location.search]);

  // 서버에서 messages받아오는 코드
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // ================ socket server와 통신하기 ==================
    socket.on("currParty", ({ numUsers, maxParty, room }) => {
      setCurrParty({ numUsers, maxParty, room });
    });
    // ================ socket server와 통신하기 ==================
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const [isChatEndModalOpen, setIsChatEndModalOpen] = useState(false);

  const ChatEndModalOpenHandler = () => {
    setIsChatEndModalOpen(true);
  };
  const ChatEndModalCloseHandler = () => {
    // console.log("모달이 닫힌거임!");
    setIsChatEndModalOpen(false);
  };


  return (
    <>
      <MobileLayout>
        {/* =========== 모달 =========== */}
        <ModalPortal>
          <ModalCont>
            {isChatEndModalOpen && (
              <ChatEndModal
                open={isChatEndModalOpen}
                close={ChatEndModalCloseHandler}
                isAdmin={isAdmin}
                room={room}
                messages={messages}
              />
            )}
          </ModalCont>
        </ModalPortal>
        {/* =========== 모달 =========== */}
        {/* <FooLayout> */}
        <StChatHeader>
          <StChatHeaderCont>
            {/* 1 */}
            <StChatClose onClick={ChatEndModalOpenHandler}>
              {/* { isAdmin ? <MdOutlineClose onClick={closeBtnHandler}/> : <MdArrowBackIosNew onClick={()=>{nav(-1)}}/> } */}
              <StChatCloseImg src={closeBtn} />

              {/*  */}
            </StChatClose>
            {/* 1 */}
            {/* 2 */}
            <StChatInfo>
              <StChatInfoSub>
                {room} &nbsp; {currParty.numUsers}/{maxParty}
              </StChatInfoSub>
            </StChatInfo>
            {/* 2 */}
            {/* 3 */}
            <StChatSave>
              <StFooDiv />
              {/* <MdOutlineClose onClick={chatSaveHandler} /> */}
            </StChatSave>
            {/* 3 */}
          </StChatHeaderCont>
        </StChatHeader>
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        {/* </FooLayout> */}
      </MobileLayout>
    </>
  );
};

export default Chat;

const ModalCont = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const StChatSave = styled.div`
  margin-right: 7.5%;
`;
// from write

const StChatHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const StChatHeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  // *============ HEADER 높이 ===============*
  padding-bottom: 2vh;
  height: 5vh;
  // *============ HEADER 높이 ===============*
`;

const StChatInfo = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;

const StChatClose = styled.div`
  border: 1px solid brown;
  margin-left: 7.5%;
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const StChatCloseImg = styled.img`
  height: 12px;
  width: 12px;
`;

const StChatInfoSub = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const StFooDiv = styled.div``;