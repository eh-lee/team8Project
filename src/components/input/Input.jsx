import React from "react";
import styled from "styled-components";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <StInputCont>
    <StForm>
      <StMsginput
        // className="input"
        type="text"
        placeholder="메시지를 입력하세요."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <StSendButton onClick={(e) => sendMessage(e)}>등록</StSendButton>
    </StForm>
  </StInputCont>
);

export default Input;

const StInputCont = styled.div`
  background-color: white;
  width: 400px;
  min-height: 30px;
  height: 64px;

  // footer 위에만 그림자 주기
  box-shadow: rgba(100, 100, 111, 0.4) 0px -5px 15px -5px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const StForm = styled.form`
  // border: 1px solid green;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 7.5%;
  justify-content: space-between;
`;

const StMsginput = styled.input`
  background-color: #f2f2f7;
  border-radius: 20px;
  width: 260px;
  font-size: 14px;
  height: 22px;
  display: flex;
  padding: 5px 16px 5px 16px;
`;

const StSendButton = styled.button`
  border: none;
  background-color: transparent;
  color: #bdbdc9;
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

/* color: #fff !important;
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
`; */
