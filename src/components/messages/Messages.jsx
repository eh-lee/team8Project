import React, { useEffect } from "react";
import BasicScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
import * as St from "./Messages.style"

function Messages({ messages, name }) {
  useEffect(() => {
    console.log('Messages컴포넌트에 프롭스로 내려온' ,messages);
  }, [messages]);

  return (
    <St.MessagesWrap>
      {/* <BasicScrollToBottom className="messages"> */}
      <BasicScrollToBottom>
        {messages?.map((message, i) => {
          return (
            <St.MessageCont key={i}>
              <Message message={message} name={name} />
            </St.MessageCont>
          );
        })}
      </BasicScrollToBottom>
    </St.MessagesWrap>
  );
}

export default Messages;