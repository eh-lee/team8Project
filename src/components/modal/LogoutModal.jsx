import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./LogoutModal.style";

const LogoutModal = ({ open, close }) => {
  const navi = useNavigate();

  const modalRef = useRef();

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

  const logout = () => {
    localStorage.removeItem("hoonsoo_access_token");
    localStorage.removeItem("hoonsoo_nickname");
    localStorage.removeItem("hoonsoo_email");
    alert("로그아웃 되었습니다.");
    navi("/");
  };

  return open ? (
    <St.FooBG>
      <St.ChatEndWrap ref={modalRef}>
        <St.ChatEndList column medium>
          <St.ButtonText Large>경고</St.ButtonText>
          <St.ChatEndInfo>로그아웃 하시겠습니까?</St.ChatEndInfo>
        </St.ChatEndList>
        <St.ChatEndList onClick={logout} isLogout cursor>
          <St.ButtonText>로그아웃</St.ButtonText>
        </St.ChatEndList>
        <St.ChatEndList onClick={close} topMargin cursor>
          <St.ButtonText>취소</St.ButtonText>
        </St.ChatEndList>
      </St.ChatEndWrap>
    </St.FooBG>
  ) : null;
};

export default LogoutModal;
