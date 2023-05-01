import React, { useState, useEffect } from "react";
import queryString from "query-string";
// import io from "socket.io-client";
import { io } from "socket.io-client";
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

let socket;
// let newSocket;
// const ENDPOINT = "http://3.35.19.8:3000";
const ENDPOINT = "http://13.209.50.102:3000";
// const ENDPOINT = "http://localhost:4000";

const Chat = () => {
  const nav = useNavigate();
  const curNickname = cookies.get("nickname");

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  //isAdmin for test
  const [isAdmin, setIsAdmin] = useState(false);
  //isAdmin for test

  const [prevMessages, setPrevMessages] = useState([]);
  const [currParty, setCurrParty] = useState({});

  /// ======================== GunSun CODE ========================
  // let [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   socket = io(ENDPOINT);
  //   // 소켓 생성
  //   // newSocket = io(ENDPOINT);

  //   // console.log("WHy Cant read?", newSocket);
  //   // console.log("WHy Cant read?", newSocket.io);
  //   // console.log("WHy Cant read?", newSocket);
  //   // setSocket(newSocket);

  //   if (socket) {
  //     socket.on("testConnect", (msg) => {
  //       // newSocket.on("testConnect", (msg) => {
  //       console.log(msg);
  //     });

  //     socket.on("message", ({ user, text }) => {
  //       // newSocket.on("message", ({ user, text }) => {
  //       console.log(user.text);
  //     });

  //     socket.on("sessionId", ({ sessionId, text }) => {
  //       // newSocket.on("sessionId", ({ sessionId, text }) => {
  //       console.log(sessionId, text);
  //     });
  //   }
  //   return () => {
  //     socket.disconnect();
  //     // newSocket.disconnect();
  //   };
  // }, []);

  // console.log("WHy Cant read?", socket);

  /// ======================== GunSun CODE ========================

  /// ======================== ORIGIN CODE ========================
  useEffect(() => {
    const { name, room, maxParty } = queryString.parse(window.location.search);
    console.log(name, room);
    console.log("rooooooom====================>", room);
    // 여기
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    // socket.on("testConnect", (msg) => {
    //   console.log("msg==============>", msg);
    // });

    socket.on("message", ({ user, text }) => {
      console.log("user.text========>", user.text);
    });

    socket.emit("join", { name, room, maxParty }, () => {
      console.log("조인 emit함===========>", room);
      // if (error) {
      // alert(error);
      // }
      //server => callback()
    });

    socket.on("sessionId", ({ sessionId, text }) => {
      // cosnt sessionData = {session}

      console.log(sessionId, text);
      // text 안 찍힘 서버 코드 확인필요
    });

    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT, window.location.search]);
  // ======================== ORIGIN CODE ========================

  /// ======================== GPT CODE ========================
  // useEffect(() => {
  //   const { name, room, maxParty } = queryString.parse(window.location.search);
  //   console.log(name, room);
  //   console.log("rooooooom====================>", room);

  //   socket = io(ENDPOINT);

  //   setRoom(room);
  //   setName(name);

  //   socket.on("connect", () => {
  //     console.log("Socket connected.");
  //     socket.emit("join", { name, room, maxParty }, (error) => {
  //       console.log("조인 emit함===========>", room);
  //       if (error) {
  //         alert(error);
  //       }
  //     });
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [ENDPOINT, window.location.search]);
  /// ======================== GPT CODE ========================

  // 서버에서 messages받아오는 코드
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("currParty", ({ numUsers, maxParty, room }) => {
      setCurrParty({ numUsers, maxParty, room });
    });
  }, []);

  useEffect(() => {}, [currParty.numUsers]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      // socket.emit("sendMessage", { message });
      socket.emit("message", { room, msg: message });

      setMessage("");
    }
  };

  const [isChatEndModalOpen, setIsChatEndModalOpen] = useState(false);

  const ChatEndModalOpenHandler = () => {
    setIsChatEndModalOpen(true);
  };
  const ChatEndModalCloseHandler = () => {
    setIsChatEndModalOpen(false);
  };

  console.log("open?==========>", isChatEndModalOpen);

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
                {room} &nbsp; {currParty.numUsers}/{currParty.maxParty}
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

// from write

// const StChatCont = styled.div`
//   border: 1px solid blue;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background: #f2f2f7;
//   height: 100vh;
//   /* width: 35%; */
//   width: 400px;
// `;

// const CurrNumUsers = styled.h3`
//   color: red;
// `;

const FooLayout = styled.div`
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 100vh;
  background-color: #f2f2f7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3); /* 그림자 추가 */
  /* padding-bottom: 30px; */
`;

// const Messages = styled.div`
//   padding: 5% 0;
//   overflow: auto;
//   /* flex: auto; */
//   display: flex;
//   height: 400px;
//   width: 100%;
//   border: 1px solid brown;
// `;

// const MessagesWrap = styled.div`
//   padding: 5% 0;
//   overflow: auto;
//   /* flex: auto; */
//   display: flex;
//   height: 400px;
//   width: 100%;
//   border: 1px solid brown;
// `;

// const CurrNumUsers = styled.h3`
//   color: red;
// `;

// const ChatHeader = styled.div`
//   background-color: white;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   max-width: 400px;
//   color: rgb(70, 70, 70);
// `;

// const ChatHeaderCont = styled.div`
//   border: 1px solid tomato;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-end;
//   border-bottom: 0.1rem solid rgb(180, 180, 180);
//   // *============ HEADER 높이 ===============*
//   padding-bottom: 2vh;
//   height: 5vh;
//   // *============ HEADER 높이 ===============*
// `;

// const MainCat = styled.div`
//   /* display:flex; */
//   /* flex-direction:row; */
// `;

// const SubCat = styled.div`
//   color: rgb(180, 180, 180);
// `;

// const WriteCategory = styled.div`
//   gap: 0.25rem;
//   display: flex;
//   font-size: 0.95rem;
//   font-weight: bold;
// `;

const ChatHeader = styled.div`
  // border: 1px solid green;
  background-color: white;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const ChatHeaderCont = styled.div`
  border: 1px solid tomato;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  // *============ HEADER 높이 ===============*
  // padding: 0 7.5%;
  height: 48px;
  // *============ HEADER 높이 ===============*
`;

// const MainCat(chat) = styled.div`
//   font-size: 18px;
//   font-weight: bold;
// `;

// const WriteCategory(chat) = styled.div`
//   gap: 0.25rem;
//   display: flex;
//   font-size: 0.95rem;
//   font-weight: bold;
// `;

const StBackBtn = styled.div`
  color: rgb(180, 180, 180);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const StFooDiv = styled.div``;
