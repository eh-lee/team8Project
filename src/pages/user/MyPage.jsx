import React from "react";
import MyPageMenu from "../../components/menu/MyPageMenu";
import MobileLayout from "../../layout/MobileLayout";
import MyPageHeader from "../../components/header/MyPageHeader";
import MyPageGreeting from "../../components/greeting/MyPageGreeting";
import { Helmet } from "react-helmet";

const MyPage = () => {
  return (
    <>
      <Helmet>
        <title>훈수 — 마이페이지</title>
      </Helmet>
      <MobileLayout>
        <MyPageHeader />
        <MyPageGreeting />
        <MyPageMenu />
      </MobileLayout>
    </>
  );
};

export default MyPage;
