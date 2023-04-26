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
  padding: 10% 0;
  overflow: auto;
  /* flex: auto; */
  display: flex;
  height: 400px;
  width: 100%;
  border: 1px solid brown;
`;

const StMessageCont = styled.div`
  width: 100%;
  /* border: 1px solid purple; */
`;
