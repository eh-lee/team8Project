import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const KakaoLogin = () => {
  // 통신중인 페이지 => 꾸밈 / isLoading, isError
  const location = useLocation();
  const KaKaocode = location.search.split("=")[1];
  // console.log(location.search.split('=')[1])

  useEffect(() => {
    async function postKaKaoCode() {
      const response = await axios.post(
        "http://sth/api/user/kakaoLogin",
        KaKaocode
      );
      // .then((response.request.statusCode === 200)=>{
      // navigate('/');
      // })
    }
    postKaKaoCode();
  }, []);

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
