import React from "react";
import { KAKAO_LOGIN_URL } from "../../api/login";
// import kakao from "../../assets/icons/socialLogin/kakao-icon.png";
// import google from "../../assets/icons/socialLogin/google-icon.png";
// import naver from "../../assets/icons/socialLogin/naver-icon.png";
import * as St from "./KakaoLoginBtn.style"

function KakaoLoginBtn() {
  const KaKaoLoginHandler = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <St.KaKaoButton onClick={KaKaoLoginHandler} />
  );
};
export default KakaoLoginBtn;

// function SnsLoginBtn( type ) {

//   const type = {
//   Kakao : { imgUrl: kakao, loginUrl: KAKAO_LOGIN_URL, filter: false, },
//   Google : { imgUrl: google, loginUrl: "", filter: true, },
//   Naver : { imgUrl: naver, loginUrl: "", filter: true, },
//   }

//   const snsLoginHandler = () => {
//     window.location.href = `${type.loginUrl}`;
//   };

//   return (
//     <St.SnsButton 
//     onClick={snsLoginHandler} />
//   );
// };


// export default SnsLoginBtn;


// export const SnsButton = styled.button`
//   border: none;
//   width: 5vh;
//   height: 5vh;
//   border-radius: 50%;
//   background: url(${type.imgUrl}) no-repeat center/100%;
//   cursor: pointer;
// `;