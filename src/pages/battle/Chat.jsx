import React, {
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
  useState,
} from "react";
import "./App.css";
import socketIOClient from "socket.io-client";
import { cookies } from "../../api/cookies";
import MobileLayout from "../../layout/MobileLayout";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

const App = () => {
  // const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState([]);
  const socketRef = useRef();

  const nav = useNavigate();
  const nickname = cookies.get("nickname");

  const location = useLocation();
  const { roomName, maxParty } = location.state;

  useEffect(() => {
    socketRef.current = socketIOClient("localhost:4000");

    socketRef.current.on("receive message", (message) => {
      console.log("msg===========>", message);
      setMessageList((messageList) => messageList.concat(message));
    });

    console.log("msgList===========>", messageList);
    return () => {
      socketRef.current.disconnect();
    };
  }, [messageList]);

  //onChange

  /// 아래 두 submit 하나로 통합 필요
  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log("message==========>", value);
  //   console.log("nickname==========>", nickname);
  //   // socketRef.current.emit("send message", { name: name, message: value });
  //   socketRef.current.emit("send message", {
  //     name: nickname,
  //     message: value,
  //   });
  // };

  // 채팅 작성 핸들러
  const newChatsubmitHandler = async (e) => {
    e.preventDefault();
    console.log("message==========>", value);
    console.log("nickname==========>", nickname);

    socketRef.current.emit("send message", {
      name: nickname,
      message: value,
    });

    setValue("");
  };

  // 채팅 onchange 핸들러
  const newChatOnchangeHandler = (e) => {
    setValue(e.target.value);
    console.log("채팅 반영되니?", value);
  };

  return (
    <MobileLayout>
      {/* 배틀 페이지 헤더 */}
      <ChatHeader>
        <ChatHeaderCont>
          <MdArrowBackIosNew
            onClick={() => {
              nav(-1);
            }}
          />
          <WriteCategory>
            <MainCat>{roomName}</MainCat>
            <SubCat>{maxParty}</SubCat>
          </WriteCategory>
          {/* <WritePost onClick={submitHandler}>등록</WritePost> */}
          <div></div>
        </ChatHeaderCont>
      </ChatHeader>
      {/* 배틀 페이지 헤더 */}

      <div className="App">
        <section className="chat-list">
          {messageList.map((item, i) => (
            <div key={i} className="message">
              <p className="username">{item.name.toUpperCase()}</p>
              <p className="message-text">{item.message}</p>
            </div>
          ))}
        </section>
        {/* <form className="chat-form" onSubmit={(e) => submit(e)}>
          <div className="chat-inputs">
            <div style={{ border: "1px solid green" }}>{nickname}</div>
            <input
            type="text"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="유저이름"
            />
            <input
              type="text"
              autoComplete="off"
              // onChange={(e) => setValue(e.target.value)}
              onChange={newChatOnchangeHandler}
              value={value}
              placeholder="메세지입력하기"
            />
          </div>
          <button type="submit">입력하기</button>
        </form> */}
      </div>

      {/* ================== 입력푸터 ================== */}
      <Chatting_Footer>
        <Chatting_FooterInputCont onSubmit={newChatsubmitHandler}>
          <Chatting_Input
            type="text"
            autoComplete="off"
            onChange={newChatOnchangeHandler}
            value={value}
            placeholder="메세지입력하기"
            required
            maxLength="100"
          />
          <Chatting_InputBtn type="submit" onClick={newChatsubmitHandler}>
            등록
          </Chatting_InputBtn>
        </Chatting_FooterInputCont>
      </Chatting_Footer>
      {/* ================== 입력푸터 ================== */}
    </MobileLayout>
  );
};

export default App;

const DetailPost_BackBtn = styled.div`
  /* border: 1px solid green; */
  color: rgb(180, 180, 180);
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

// {/* ================== 입력푸터 ================== */

const Chatting_Footer = styled.footer`
  /* border: 1px solid green; */
  background-color: white;
  max-width: 400px;
  min-height: 30px;
  height: 64px;

  // footer 위에만 그림자 주기
  box-shadow: rgba(100, 100, 111, 0.4) 0px -5px 15px -5px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const Chatting_FooterInputCont = styled.form`
  /* border: 1px solid green; */
  width: 100vw;
  display: flex;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  margin: 0 7.5%;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  align-items: center;
  justify-content: space-between;
`;

const Chatting_Input = styled.textarea`
  resize: none;
  background-color: #f2f2f7;
  border: none;
  border-radius: 20px;
  width: 260px;
  height: 22px;
  /* 나중에 댓글수에 따라 input창 늘려볼까요? */
  /* max-height: 300px; */
  display: flex;
  padding: 10px 16px 0 16px;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Chatting_InputBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #dddde4;
  width: 32px;
  height: 24px;

  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  cursor: pointer;
  &:hover {
    color: #3a3a59;
  }
`;

const ChatHeader = styled.div`
  background-color: white;
  position: fixed;
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
  align-items: flex-end;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  // *============ HEADER 높이 ===============*
  padding-bottom: 2vh;
  height: 5vh;
  // *============ HEADER 높이 ===============*
`;

const MainCat = styled.div``;

const SubCat = styled.div`
  color: rgb(180, 180, 180);
`;

const WriteCategory = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;
