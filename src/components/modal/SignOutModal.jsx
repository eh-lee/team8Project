import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../api/cookies";
import { instanceWithAuth } from "../../api/axios";

const SignOutModal = ({ open, close }) => {
  const navi = useNavigate();
  const modalRef = useRef();
  const email = cookies.get('email');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, open, close]);

  const signout = async () => {
    try {
        const res = await instanceWithAuth.delete("/user/delete", { "email" : email })
        console.log(res);
        // alert(res.data.msg)
        navi("/");
        // navi("/onboarding");
        
    } catch (err) {
        console.error(err);
    } 
    
    // 왜 안 되나 체크 4/21 17:44
    // [Refactor] 인터셉터로 처리하게
    cookies.remove("access_token");
    cookies.remove("refresh_token");
    cookies.remove("nickname");
    cookies.remove("email");
  };

  return open ? (
    (
        <StFooBG>
          <StChatEndWrap ref={modalRef}>
            <StChatEndList column medium>
              <ButtonText Large>경고</ButtonText>
              <StChatEndInfo>
                정말 계정을 삭제하시겠습니까?
              </StChatEndInfo>
            </StChatEndList>
            <StChatEndList
              onClick={signout}
              isLogout
              cursor
            >
              <ButtonText>회원탈퇴</ButtonText>
            </StChatEndList>
            <StChatEndList onClick={close} topMargin cursor>
              <ButtonText>취소</ButtonText>
            </StChatEndList>
          </StChatEndWrap>
        </StFooBG>
      )
  ) : null;
};

export default SignOutModal;

const StFooBG = styled.div`
  position: fixed;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StChatEndWrap = styled.ul`
  position: absolute;
  background-color: transparent;
  top: 35%;
  left: 7.5%;
  width: 340px;
  //   height: 176px;
`;

const StChatEndList = styled.ul`
  width: 340px;
  height: 56px;
  /* border: 1px solid darkorchid; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #cccccc;
  background-color: white;
  color: #2d2d2d;
  border-radius: 10px 10px 0 0;
  ${({ cursor }) =>
    cursor &&
    css`
      cursor: pointer;
    `};

  ${({ isLogout }) =>
    isLogout &&
    css`
      color: #eb5147;
      border-bottom: none;
      border-radius: 0 0 10px 10px;
    `};

  ${({ topMargin }) =>
    topMargin &&
    css`
      margin-top: 8px;
      border-radius: 10px;
    `};

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};

  ${({ medium }) =>
    medium &&
    css`
      height: 73px;
    `};

  ${({ large }) =>
    large &&
    css`
      height: 91px;
    `};
`;

const ButtonText = styled.li`
  font-size: 16px;
  font-weight: 600;
  ${({ Large: isLarge }) =>
    isLarge &&
    css`
      font-size: 18px;
    `};
`;

const StChatEndInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;
