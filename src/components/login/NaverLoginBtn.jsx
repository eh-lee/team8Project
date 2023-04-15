import React from "react";
import naver from "../../assets/icons/naver-icon.png";
// import { NAVER_LOGIN_URL } from "../../api/login";
import styled from "styled-components";

function NaverLoginBtn() {
  const NaverLoginHandler = () => {
    // window.location.href = NAVER_LOGIN_URL;
  };

  return (
    <NaverButton>
      {/* <NaverButton sns="naver" url={NAVER_LOGIN_URL} onClick={NaverLoginHandler}> */}
      <Icon src={naver} />
    </NaverButton>
  );
}

const NaverButton = styled.button`
  border: none;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background: url(${naver}) no-repeat center/100%;
  cursor: pointer;
`;

const Icon = styled.img`
  display: none;
`;

export default NaverLoginBtn;
