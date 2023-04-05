import React from "react";
import kakao from "../../assets/icons/kakao-icon.png";
import { KAKAO_LOGIN_URL } from "../../api/login";

function KakaoLoginBtn() {

  const KaKaoLoginHandler = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <button
      src={kakao}
      sns="kakao"
      url={KAKAO_LOGIN_URL}
      onClick={KaKaoLoginHandler}
    >
      카카오로 로그인하기
    </button>
  );
}

export default KakaoLoginBtn;
