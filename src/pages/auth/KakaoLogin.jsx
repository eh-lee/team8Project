import React, { useEffect, useState } from "react";
import axios from "axios";
import MobileLayout from "../../layout/MobileLayout";
import { cookies } from "../../api/cookies";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/axios";
import styled from "styled-components";
import loading from "../../assets/etc/loading.gif";

const KakaoLogin = () => {
  const navi = useNavigate();
  const { REACT_APP_KAKAO_REST_API_KEY, REACT_APP_KAKAO_REDIRECT_URI } =
    process.env;

  // 1. Redirect_URI에서 카카오 인가 코드 받음

  const [accesstoken, setAccesstoken] = useState("");
  const code = new URL(window.location.href).searchParams.get("code");
  console.log("로컬 클라 코드==========>", code);

  // 2. 받은 인가 코드를 카카오에 날려서 토큰 받아오기
  useEffect(() => {
    if (code) {
      console.log("=============카카오 토큰 get 요청 날라감=============");
      const kakao = async () => {
        console.log("=============카카오 토큰 get 요청 날라감=============");
        try {
          const res = await axios.get(
            `https://kauth.kakao.com/oauth/token?client_id=${REACT_APP_KAKAO_REST_API_KEY}&grant_type=authorization_code&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&client_secret=u8rQ5HJHR7WhNfSWqe7HJpqz2Hau4Iax&code=${code}`
          );
          console.log("카카오 response ==================>", res);
          console.log("token=======>", res.data.access_token);
          setAccesstoken(res.data.access_token);
        } catch (err) {
          console.err(err);
        }
      };
      kakao();
    }
  }, []);

  console.log(accesstoken);

  // 3. 받아온 토큰을 우리 내부 서버에 POST하기

  useEffect(() => {
    if (accesstoken) {
      console.log("atkn=======>", accesstoken);
      const postToken = async () => {
        console.log("=============카카오 토큰 post 요청 날라감=============");
        try {
          // const response = await axios.post(
          // `http://43.201.45.82:3000/api/auth/kakaoLogin`,
          const response = await instance.post(
            `/auth/kakaoLogin`,
            { accessToken: accesstoken },
            {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          );
          if (await response) {
            cookies.set("access_token", response.headers.authorization, {
              path: "/",
            });
            cookies.set("nickname", response.data.nickname, { path: "/" });
            cookies.set("email", response.data.email, { path: "/" });
            cookies.set("isNewbie", "F", { path: "/" });
          }
          return navi("/");
        } catch (err) {
          console.error(err);
        }
      };
      postToken();
    }
  }, [accesstoken]);

  return (
    <MobileLayout>
      {/* 로딩 화면 테스트 */}
      <LoadingGif />
      {/* 로딩 화면 테스트 */}
    </MobileLayout>
  );
};

export default KakaoLogin;

const LoadingGif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url(${loading});
  width: ${loading.width}px;
  height: ${loading.height}px;
`;
