import React from "react";
import kakao from "../../assets/icons/kakao-icon.png";

function KakaoLoginBtn() {
  const REST_API_KEY = "a5cd0f6d81237b9b30804bf56fabe6d0";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
