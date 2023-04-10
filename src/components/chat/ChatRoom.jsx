// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

// const Chatroom = () => {
//   const socket = useSelector((state) => state.socketStorage.socket);
//   const { pathname } = useLocation();
//   const [arrivalChat, setArrivalChat] = useState(null); // 도착한 메세지 저장
//   const [chats, setChats] = useState([]);
//   const newChatRef = useRef(null);

//   useEffect(() => {
//     arrivalChat && setChats((prev) => [...prev, arrivalChat]); // 채팅 리스트에 추가
//   }, [arrivalChat]);

//   useEffect(() => {
//     socket.on("message-expert", (chatObj) => {
//       // 메세지 수신
//       const { result, errmsg } = chatObj;
//       setArrivalChat(result);
//     });
//   }, [socket]); // 괄호 안의 변수에 변화가 생기면 useEffect 내부 함수 실행

//   useEffect(() => {
//     // 메세지 수신
//     socket.on("message-expert", (chatObj) => {
//       // 메세지 수신
//       const { result, errmsg } = chatObj;
//       setArrivalChat(result);
//     });
//   }, [socket]);

//   const sendMessage = async () => {
//     if (!newChatRef.current.value) return;

//     await socket.emit("message-expert", {
//       // 메세지 전송
//       room_id: roomId,
//       sender_index: participantId,
//       message: newChatRef.current.value,
//     });

//     newChatRef.current.value = "";
//   };

//   return (
//     <>
//       <input ref={newChatRef} />
//     </>
//   );
// };

// export default ChatRoom;
