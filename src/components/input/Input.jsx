import React from "react";
import styled from "styled-components";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <StForm>
    <StMsginput
      className="input"
      type="text"
      placeholder="메시지를 입력하세요."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <StSendButton onClick={(e) => sendMessage(e)}>전송</StSendButton>
  </StForm>
);

export default Input;

const StForm = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

const StMsginput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
`;

const StSendButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;

  &:hover {
    cursor: pointer;
  }
`;
