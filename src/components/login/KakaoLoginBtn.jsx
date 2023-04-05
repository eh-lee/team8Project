import React from "react";
import kakao from "../../assets/icons/kakao-icon.png";
import { KAKAO_LOGIN_URL } from "../../api/login";

function KakaoLoginBtn() {

  const KaKaoLoginHandler = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <button
      sns="kakao"
      url={KAKAO_LOGIN_URL}
      onClick={KaKaoLoginHandler}
      style={{ border: "none" }}
    >
      <img src={kakao} width="30vh" height="30vh" />
    </button>
  );
}

export default KakaoLoginBtn;
