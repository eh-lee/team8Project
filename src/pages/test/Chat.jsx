import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import InfoBar from "../../components/infoBar/InfoBar";
import Messages from "../../components/messages/Messages";
import Input from "../../components/input/Input";
import TextContainer from "../../components/textContainer/TextContainer";
import styled from "styled-components";

import onlineIcon from "../../assets/icons/test/onlineIcon.png";
import closeIcon from "../../assets/icons/test/closeIcon.png";
import { useNavigate } from "react-router-dom";

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

  const closeBtnHandler = () => {
    // POST messages
    // instanceWithAuth.post
    nav("/battle");
  };

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

  // {name: test1, message: hi} >> arr[0].name
  // const msgList = [
  //   { name: "test1", message: "msg1" },
  //   { name: "test2", message: "msg2" },
  // ];
  // 자기가 친 채팅 내역이 있는 사람만 자기 채팅 우측에, 없으면 다 왼쪽
  // name === {nickname} ? <> el.<>

  console.log("mess===========>", messages);
  console.log("crr===========>", currParty);
  // console.log("test=========>", test);
  // console.log("test=========>", message);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      // console.log(message)
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <FooLayout>
      <div className="outerContainer">
        <div className="container">
          {/* <InfoBar room={room} /> */}

          <div className="infoBar">
            <div className="leftInnerContainer">
              <img className="onlineIcon" src={onlineIcon} alt="online icon" />
              <h3>{room}</h3>
              <CurrNumUsers>
                {currParty.numUsers}/{currParty.maxParty}
              </CurrNumUsers>
            </div>
            <div className="rightInnerContainer">
              {/*  */}
              {/* <a href="/"> */}
              <img src={closeIcon} alt="close icon" onClick={closeBtnHandler} />
              {/* </a> */}
              {/*  */}
            </div>
          </div>

          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
        <TextContainer users={users} />
      </div>
    </FooLayout>
  );
};

export default Chat;

const CurrNumUsers = styled.h3`
  color: red;
`;
const FooLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  /* border: 1px solid tomato; */
`;
