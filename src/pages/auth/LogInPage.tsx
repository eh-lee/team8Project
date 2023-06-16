import React, { useEffect } from "react";
import TrueGuard from "../../components/hook/guard/TrueGuard";
import LoginForm from "../../components/form/LoginForm";
import LoginFooter from "../../components/footer/LoginFooter";
import LoginHeader from "../../components/header/LoginHeader";
import MobileLayout from "../../layout/MobileLayout";

const LogInPage: React.FC = () => {
  TrueGuard();
  useEffect(() => {
    document.title = "훈수 - 로그인";
  }, []);

  return (
    <>
      <MobileLayout>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </MobileLayout>
    </>
  );
};

export default LogInPage;
