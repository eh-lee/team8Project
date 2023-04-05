import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MobileLayout from "../../layout/MobileLayout";

const KakaoLogin = () => {
  // 통신중인 페이지 => 꾸밈 / isLoading, isError

  let testCode = new URL(window.location.href).searchParams.get("code");
  console.log("testCode------>", testCode);

  const location = useLocation();
  const KaKaocode = { code: location.search.split("=")[1] };
  // console.log(location.search.split('=')[1])

  useEffect(() => {
    async function postKaKaoCode() {
      const response = await axios.post(
        "http://54.180.30.108:3002/user/kakaoLogin/",
        KaKaocode
      );
    }
    postKaKaoCode();
  }, []);

  return (
    <MobileLayout>
      <div>KakaoLogin</div>
    </MobileLayout>
  );
};

export default KakaoLogin;
