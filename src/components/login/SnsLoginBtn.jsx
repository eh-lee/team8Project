import React from "react";
import { KAKAO_LOGIN_URL } from "../../api/login";
import kakao from "../../assets/icons/socialLogin/kakao-icon.png";
import google from "../../assets/icons/socialLogin/google-icon.png";
import naver from "../../assets/icons/socialLogin/naver-icon.png";
import * as St from "./SnsLoginBtn.style"


function SnsLoginBtn({ type }) {

  const snsType = {
  Kakao : { imgUrl: kakao, loginUrl: KAKAO_LOGIN_URL, filter: false, size: 100,},
  Google : { imgUrl: google, loginUrl: "", filter: true, size: 120,},
  Naver : { imgUrl: naver, loginUrl: "", filter: true, size: 100,},
  };

  const snsLoginHandler = () => {
    window.location.href = snsType[type].loginUrl;
  };

  return (
    <St.SnsButton 
    onClick={snsLoginHandler} 
    imgUrl={snsType[type].imgUrl}
    size={snsType[type].size}
    filter={snsType[type].filter}
    />
  );
};

export default SnsLoginBtn;