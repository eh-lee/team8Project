import React, { useEffect } from "react";

import BasicScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";
import Message from "./message/Message";

// import "./Messages.css";

function Messages({ messages, name }) {
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    // <MessagesWrap>
    <BasicScrollToBottom className="messages">
      {messages?.map((message, i) => {
        return (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        );
      })}
    </BasicScrollToBottom>
    // </MessagesWrap>
  );
}

export default Messages;

const MessagesWrap = styled.div`
  padding: 5% 0;
  overflow: auto;
  /* flex: auto; */
  display: flex;
  height: 400px;
  width: 100%;
  border: 1px solid brown;
`;
