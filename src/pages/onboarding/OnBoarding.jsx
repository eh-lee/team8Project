import React from "react";
import OldbieGuard from "../../components/hook/guard/OldbieGuard";
import MobileLayout from "../../layout/MobileLayout";
import OnBoardingContents from "../../components/onboarding/OnBoadingContents";
import { Helmet } from "react-helmet";
import { cookies } from "../../api/cookies";

const OnBoarding = () => {
  OldbieGuard();
  cookies.set("isFirst", "F", { path: "/" });

  return (
    <>
      <Helmet>
        <title>훈수 — 온보딩</title>
      </Helmet>
      <MobileLayout>
        <OnBoardingContents />
      </MobileLayout>
    </>
  );
};

export default OnBoarding;
