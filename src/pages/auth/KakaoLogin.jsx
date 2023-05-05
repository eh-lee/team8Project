import React, { useEffect } from "react";
import MobileLayout from "../../layout/MobileLayout";
import KakaoFetchAndPost from "../../components/hook/fetch/KakaoFetchAndPost";
import * as St from "../../components/login/KakaoLogin.style";
import TrueGuard from "../../components/hook/guard/TrueGuard";

const KakaoLogin = () => {
  TrueGuard();
  useEffect(() => {
    document.title = "훈수 - 카카오로그인";
  }, []);

  const code = new URL(window.location.href).searchParams.get("code");

  return (
    <MobileLayout>
      <St.Bg>
        <St.Logo />
      </St.Bg>
      <KakaoFetchAndPost code={code} />
    </MobileLayout>
  );
};

export default KakaoLogin;
