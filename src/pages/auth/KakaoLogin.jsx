import React, { useEffect } from "react";
import axios from "axios";
import MobileLayout from "../../layout/MobileLayout";
import { cookies } from "../../api/cookies"

const KakaoLogin = () => {
  // 통신중인 페이지 => 꾸밈 / isLoading, isError
  const code = new URL(window.location.href).searchParams.get("code");
  console.log('이거좀 찍어봐')
  console.log("카카오 인가 코드==========>", code);

  useEffect(() => {
    if (code) {
      const kakao = async () => {
        // const response = await axios.get(
        //   `http://54.180.30.108:3002/user/kakaoLogin?code=${code}`
        // );
        try {
          // const response = await axios.get(`http://54.180.30.108:3002/user/kakaoLogin?code=${code}`);
          const response = await axios.post(
            "http://52.78.166.176:3000/api/user/kakaoLogin/",
            {code: code},
            {headers : {
              'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8'
            }}
          );
          console.log("response=============>", response)
          if (await response.headers.authorization) {
            cookies.set("accessToken", response.headers.authorization)
            console.log("response=============>", response)
          }

          } 
          catch (error) {
            console.log('error====>', error)
        };
      };
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

  return (
    <MobileLayout>
      <div>KakaoLogin</div>
    </MobileLayout>
  );
};

export default KakaoLogin;
