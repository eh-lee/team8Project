import axios from "axios";
import { useEffect, useState } from "react";

const FetchKakaoToken = ({ code }) => {
  const [accesstoken, setAccesstoken] = useState("");
  const { REACT_APP_KAKAO_REST_API_KEY, REACT_APP_KAKAO_REDIRECT_URI } =
    process.env;

  return useEffect(() => {
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
    return [accesstoken];
  }, []);
};

export default FetchKakaoToken;
