import React from "react";
import * as St from "./NaverLoginBtn.style"

// import { NAVER_LOGIN_URL } from "../../api/login";

const NaverLoginBtn = () => {
  const NaverLoginHandler = () => {
    // window.location.href = NAVER_LOGIN_URL;
    alert("구현 중인 기능입니다");
  };

  return (
    <St.NaverButton onClick={() => NaverLoginHandler()} />
  );
};

export default NaverLoginBtn;