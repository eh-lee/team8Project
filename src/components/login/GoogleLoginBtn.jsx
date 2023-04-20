import React from "react";
import google from "../../assets/icons/socialLogin/google-icon.png";
// import { GOOGLE_LOGIN_URL } from "../../api/login";
import styled from "styled-components";

function GoogleLoginBtn() {
  const GoogleLoginHandler = () => {
    // window.location.href = GOOGLE_LOGIN_URL;
    alert("구현 중인 기능입니다");
  };

  return (
    <GoogleButton
      sns="google"
      // url={GOOGLE_LOGIN_URL}
      onClick={GoogleLoginHandler}
    >
      <Icon src={google} />
    </GoogleButton>
  );
}

const GoogleButton = styled.button`
  border: none;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background: url(${google}) no-repeat center/120%;
  cursor: pointer;
  filter: grayscale(100%);
`;

const Icon = styled.img`
  display: none;
`;

export default GoogleLoginBtn;
