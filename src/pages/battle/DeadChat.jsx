import React, { useState, useEffect } from "react";
import Messages from "../../components/messages/Messages";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import closeBtn from "../../assets/icons/common/closeBtn.png";
import MobileLayout from "../../layout/MobileLayout";
import { cookies } from "../../api/cookies";
import { instance } from "../../api/axios"


// 프롭스: {chatSaveIdx, room} 요 놈들.. 내려주는  페이지 나중에 확인해서 잡기..
const Chat = ( {chatSaveIdx, room} ) => {
  const nav = useNavigate();
  const curNickname = cookies.get("nickname");

  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getDoneChat = async () => {
      try {
        const response = await instance.get(`chat/chatSave/${chatSaveIdx}`)
        
        // const {messages} = 
        // setMessages(messages.sth);
        
      } catch (error) {
        console.error(error);
      }
    };
    getDoneChat();
  }, []);

  
  
  // messageListGet--> /api/chat/chatSave/{chatSaveIdx}


  return (
    <>
      <MobileLayout>
        <StChatHeader>
          <StChatHeaderCont>
            <StChatClose  onClick={()=>nav(-1)}>
              <StChatCloseImg src={closeBtn} />
            </StChatClose>
            <StChatInfo>
              <StChatInfoSub>
                {room}
              </StChatInfoSub>
            </StChatInfo>
            <StChatSave>
              <StFooDiv />
            </StChatSave>
          </StChatHeaderCont>
        </StChatHeader>
        <Messages messages={messages} />
      </MobileLayout>
    </>
  );
};

export default Chat;


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
