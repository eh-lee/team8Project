import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import * as St from "./SignOutModal.style";

const SignOutModal = ({ open, close }) => {
  const navi = useNavigate();
  const modalRef = useRef();
  const email = localStorage.getItem("hoonsoo_email");

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
      const res = await instanceWithAuth.delete("/user/leave", {
        email: email,
      });
      navi("/");
    } catch (err) {
      console.error(err);
    }
    localStorage.removeItem("hoonsoo_access_token");
    localStorage.removeItem("hoonsoo_nickname");
    localStorage.removeItem("hoonsoo_email");
  };

  return open ? (
    <St.FooBG>
      <St.ChatEndWrap ref={modalRef}>
        <St.ChatEndList column medium>
          <St.ButtonText Large>경고</St.ButtonText>
          <St.ChatEndInfo>정말 계정을 삭제하시겠습니까?</St.ChatEndInfo>
        </St.ChatEndList>
        <St.ChatEndList onClick={signout} isLogout cursor>
          <St.ButtonText>회원탈퇴</St.ButtonText>
        </St.ChatEndList>
        <St.ChatEndList onClick={close} topMargin cursor>
          <St.ButtonText>취소</St.ButtonText>
        </St.ChatEndList>
      </St.ChatEndWrap>
    </St.FooBG>
  ) : null;
};

export default SignOutModal;
