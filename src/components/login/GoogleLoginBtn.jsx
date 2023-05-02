import React from "react";
// import { GOOGLE_LOGIN_URL } from "../../api/login";
import * as St from "./GoogleLoginBtn.style"

function GoogleLoginBtn() {
  const GoogleLoginHandler = () => {
    // window.location.href = GOOGLE_LOGIN_URL;
    alert("구현 중인 기능입니다");
  };

  return (
    <St.GoogleButton
      sns="google"
      // url={GOOGLE_LOGIN_URL}
      onClick={GoogleLoginHandler}
    />
  );
}

export default GoogleLoginBtn;