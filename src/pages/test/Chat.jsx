import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { MdArrowBackIosNew } from "react-icons/md";

// import "./Chat.css";
// import InfoBar from "../../components/infoBar/InfoBar";
import Messages from "../../components/messages/Messages";
import Input from "../../components/input/Input";
import TextContainer from "../../components/textContainer/TextContainer";
import styled from "styled-components";

import onlineIcon from "../../assets/icons/test/onlineIcon.png";
import closeIcon from "../../assets/icons/test/closeIcon.png";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";

const ENDPOINT = "http://localhost:4000";
let socket;

// const Chat = ({ location }) => {
// location 없어두 되나..?

const Chat = () => {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // 그 전의 대화 내용
  const [prevMessages, setPrevMessages] = useState([]);

  // const [test, setTest] = useState({});
  const [currParty, setCurrParty] = useState({});

  //[추가] -1
  //  [ V ] //axios.delete? 이거 명세 필요 이거 처리랑
  //[추가] 0
  // [ V ]chatRoom? css
  // 채팅 그.. wrap 밖에.. 그.. 하나 더.. 그.. 넣기.. 배경.. 그거..

  const closeBtnHandler = async () => {
    // [추가] 1
    // [  ] isAdmin ? <onClick = {chatSaveHandler} /> : null
    console.log("room============>", room);
    socket.disconnect();
    try {
      await instanceWithAuth.delete(`/chat/hunsuChat/${room}`);
    } catch (error) {
      console.error(error);
    }

    nav(-1);
  };

  const chatSaveHandler = async () => {
    // [추가] 2
    // [  ] isAdmin ? <onClick = {chatSaveHandler} /> : null
    try {
      console.log("messages보낸다~~");
      await instanceWithAuth.post("/chat/chatsave", messages);
    } catch (error) {
      console.error(error);
    }
  };

  // [추가] 3
  // [  ] !isAdmin ?  <onClick = {nav('-1')} /> : null

  //================================================================

  //1.
  ////3. 모달에서 방 만들 때, errorMSG 가공해서 알럿에!

  ////////////////////////////////
  //04/27 12:24
  //delete관련..!
  //3. isAdmin 명세 요청........핳;; (일단 비밀)
  //closeBtn은 방을 만든 사람만 보이는데, 그걸 판별하는 건, isAdmin키.
  // <방 생성자>
  //isAdmin키의 값은, 방을 최초에 만든 사람이 POST 할 때의 토큰 값에 저장된 닉네임, 즉, 방을 만든 사람의 닉네임
  // <방 접속자>
  //방에 접속하는 유저들의 경로는 배틀페이지->챗카드인데, 배틀페이지에서 GET을 할 때, isAdmin을 받고,
  //ChatCard에 들어갔을 때, 앞서 받은 isAdmin의 값과 자신의 nickname이 일치하지 않으면(할 수가 없겠쥬?)
  //closeBtn === null
  ////////////////////////////////

  //1.isAdmin 키를 방을 만들 때 저장해 주고(state로든 브라우저 저장소에든)
  //로그아웃 했을 때는?.. isAdmin 안 지우기? (정 안 되면.. 다른 컴퓨터면 문제됨)어쨋뜬 서버에서 해 줘야 하는데 하기 시름// 로컬스토리지로 채팅방으로 넘겨주고
  //2.closeBtn자체를 isAdmin ? <closeBtn /> : null

  // 룸 입장
  useEffect(() => {
    // 여기선 name과 room을 url에서 가져온다.
    // 이유는 setRoom과 setName이 적용되기 전에 socket.emit('join')이 실행되기 때문이다.
    // url에서 가져오는 방법이 아닌 다른 방법으로 name과 room을 가져오려면
    // 미리 정해진 방법으로 name과 room을 가져오는 것이 아닌
    // socket.emit('join')이 실행되기 전에 setRoom과 setName이 실행되도록 해야 한다.

    const { name, room, maxParty } = queryString.parse(window.location.search);
    console.log(name, room);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room, maxParty }, (error) => {
      console.log("rooom===========>", room);
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, window.location.search]);

  // 서버에서 messages받아오는 코드
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    // ================ socket server와 통신하기 ==================
    // 이걸로 현재 인원 체크해서 카드에 표시하기 like, currParty.numUsers/maxParty
    // * socket에 있는 Key name { numUsers, room } 으로 인자 받기
    socket.on("currParty", ({ numUsers, maxParty, room }) => {
      setCurrParty({ numUsers, maxParty, room });
    });
    // ================ socket server와 통신하기 ==================
  }, []);

  // 자기가 친 채팅 내역이 있는 사람만 자기 채팅 우측에, 없으면 다 왼쪽
  // name === {nickname} ? <> el.<>

  console.log("mess===========>", messages);
  console.log("crr===========>", currParty);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <FooLayout>
      <ChatHeader>
        <ChatHeaderCont>
          <StBackBtn
            onClick={() => {
              nav(-1);
            }}
          >
            <MdArrowBackIosNew />
          </StBackBtn>
          <WriteCategory>
            <MainCat>
              {room} &nbsp; {currParty.numUsers}/{currParty.maxParty}
            </MainCat>
            <button onClick={closeBtnHandler}>채팅방 나가기</button>
            <button onClick={chatSaveHandler}>채팅 기록하기</button>
            {/* room 글자 수 제한 걸기 */}
          </WriteCategory>
          <StFooDiv />
        </ChatHeaderCont>
      </ChatHeader>

      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </FooLayout>
  );
};

export default Chat;

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
  /* border: 2px solid red; */
  /* position: fixed; */
  /* top: 0; */
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
  background-color: white;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const ChatHeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  // *============ HEADER 높이 ===============*
  padding: 0 7.5%;
  height: 48px;
  // *============ HEADER 높이 ===============*
`;

const MainCat = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const WriteCategory = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;

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
