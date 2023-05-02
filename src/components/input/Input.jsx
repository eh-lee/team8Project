import React from "react";
import * as St from "./Input.style"

const Input = ({ setMessage, sendMessage, message }) => (
  <St.InputCont>
    <St.Form>
      <St.Msginput
        // className="input"
        type="text"
        placeholder="메시지를 입력하세요."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <St.SendButton onClick={(e) => sendMessage(e)}>등록</St.SendButton>
    </St.Form>
  </St.InputCont>
);

export default Input;
