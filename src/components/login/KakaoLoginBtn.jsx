// import React from "react";
// import kakao from "../../assets/icons/kakao-icon.png";
// import { KAKAO_LOGIN_URL } from "../../api/login";
// import styled from "styled-components";

// function KakaoLoginBtn() {
//   const KaKaoLoginHandler = () => {
//     window.location.href = KAKAO_LOGIN_URL;
//     console.log("btnPage--------->", KAKAO_LOGIN_URL);
//   };

//   return (
//     <KaKaoButton
//       src={kakao}
//       sns="kakao"
//       url={KAKAO_LOGIN_URL}
//       onClick={KaKaoLoginHandler}
//     ></KaKaoButton>
//   );
// }

// const KaKaoButton = styled.button`
//   border: 1px solid yellow;
//   width: 5vh;
//   height: 5vh;
//   border-radius: 50%;
// `;
// export default KakaoLoginBtn;

import React from "react";
import kakao from "../../assets/icons/kakao-icon.png";
import { KAKAO_LOGIN_URL } from "../../api/login";
import styled from "styled-components";

function KakaoLoginBtn() {
  const KaKaoLoginHandler = () => {
    window.location.href = KAKAO_LOGIN_URL;
    console.log("btnPage--------->", KAKAO_LOGIN_URL);
  };

  return (
    <KaKaoButton onClick={KaKaoLoginHandler}>
      <Icon src={kakao} />
    </KaKaoButton>
  );
}

const KaKaoButton = styled.button`
  border: none;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background: url(${kakao}) no-repeat center/100%;
  cursor: pointer;
`;

const Icon = styled.img`
  display: none;
`;

export default KakaoLoginBtn;
