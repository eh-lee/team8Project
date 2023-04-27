import React, { useEffect } from "react";

import BasicScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";
import Message from "./message/Message";

function Messages({ messages, name }) {
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <MessagesWrap>
      {/* <BasicScrollToBottom className="messages"> */}
      <BasicScrollToBottom>
        {messages?.map((message, i) => {
          return (
            <StMessageCont key={i}>
              <Message message={message} name={name} />
            </StMessageCont>
          );
        })}
      </BasicScrollToBottom>
    </MessagesWrap>
  );
}

export default Messages;

const MessagesWrap = styled.div`
  margin-top: 12.2%;
  overflow: auto;
  display: flex;
  height: 85%;
  width: 100%;
  overflow: none;
  // border: 1px solid brown;
  /* padding-top: 30px; */
  /* padding: 30px 0; */
  background-color: #f2f2f7;
`;

const StMessageCont = styled.div`
  width: 100%;
  /* border: 1px solid purple; */
`;
