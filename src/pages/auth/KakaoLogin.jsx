import React, { useEffect } from "react";
import axios from "axios";

const KakaoLogin = () => {
  // 통신중인 페이지 => 꾸밈 / isLoading, isError
  const code = new URL(window.location.href).searchParams.get("code")

  useEffect(() => {
    if (code) {
      const kakao = async () => {
        const response = await axios.get(`http://54.180.30.108:3002/user/kakaoLogin?code=${code}`);
        // try {
        //   const response = await axios.get(`http://54.180.30.108:3002/user/kakaoLogin?code=${code}`);

        //   } catch (error) {

        // };
      }
      // async function postKaKaoCode() {
      //   const response = await axios.post(
      //     "http://54.180.30.108:3002/user/kakaoLogin/",
      //     KaKaocode
      //   );
      // }
      // postKaKaoCode();
      kakao();
    }
  }, []);

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
