import axios from "axios";
import { cookies } from "../../../api/cookies";
import { instance } from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const KakaoFetchAndPost = ({ code }) => {
  const navi = useNavigate();
  const { REACT_APP_KAKAO_REST_API_KEY, REACT_APP_KAKAO_REDIRECT_URI } =
    process.env;

  const [accesstoken, setAccesstoken] = useState("");

  useEffect(() => {
    const fetchKakaoToken = async () => {
      try {
        const res = await axios.get(
          `https://kauth.kakao.com/oauth/token?client_id=${REACT_APP_KAKAO_REST_API_KEY}&grant_type=authorization_code&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&client_secret=u8rQ5HJHR7WhNfSWqe7HJpqz2Hau4Iax&code=${code}`
        );
        setAccesstoken(res.data.access_token);
      } catch (err) {
        console.error(err);
      }
    };

    if (code) {
      fetchKakaoToken();
    }
  }, [code, REACT_APP_KAKAO_REST_API_KEY, REACT_APP_KAKAO_REDIRECT_URI]);

  useEffect(() => {
    const postToken = async () => {
      try {
        const response = await instance.post(
          `/auth/kakaoLogin`,
          { accessToken: accesstoken },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
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

    if (accesstoken) {
      postToken();
    }
  }, [accesstoken, navi]);

  return null;
};

export default KakaoFetchAndPost;
