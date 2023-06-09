import React, { useEffect } from "react";
import OldbieGuard from "../../components/hook/guard/OldbieGuard";
import MobileLayout from "../../layout/MobileLayout";
import OnBoardingContents from "../../components/onboarding/OnBoadingContents";

const OnBoarding: React.FC = () => {
  OldbieGuard();
  document.cookie = `hoonsoo_isFirst=F; path=/;`;

  useEffect(() => {
    document.title = "훈수 - 온보딩";
  }, []);

  return (
    <>
      <MobileLayout>
        <OnBoardingContents />
      </MobileLayout>
    </>
  );
};

export default OnBoarding;
