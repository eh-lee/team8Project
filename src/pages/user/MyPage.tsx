import React, { useEffect } from "react";
import MyPageMenu from "../../components/menu/MyPageMenu";
import MyPageHeader from "../../components/header/MyPageHeader";
import MobileLayout from "../../layout/MobileLayout";
import MyPageGreeting from "../../components/greeting/MyPageGreeting";

const MyPage: React.FC = () => {
  useEffect(() => {
    document.title = "훈수 - 마이페이지";
  }, []);

  return (
    <>
      <MobileLayout>
        <MyPageHeader />
        <MyPageGreeting />
        <MyPageMenu />
      </MobileLayout>
    </>
  );
};

export default MyPage;
