import React, { useEffect } from "react";
import axios from "axios";
import MobileLayout from "../../layout/MobileLayout";
import { cookies } from "../../api/cookies";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  // 통신중인 페이지 => 꾸밈 / isLoading, isError
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("카카오 인가 코드==========>", code);
  const navi = useNavigate();
  const { REACT_APP_SERVER_URL } = process.env;

  useEffect(() => {
    if (code) {
      const kakao = async () => {
        const response = await axios.post(
          `${REACT_APP_SERVER_URL}/user/kakaoLogin`,
          { code: code },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        if (await response) {
          console.log("리프레시 토큰을 찾아서…===========>", response);
          cookies.set("access_token", response.headers.authorization);
          cookies.set("refresh_token", response.headers.refreshtoken);
          // 이거 refsh 없애기로 했나?
          cookies.set("nickname", response.data.nickname);
        }
        return navi("/");
      };
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
