import React from "react";
import TrueGuard from "../../components/hook/guard/TrueGuard";
import LoginForm from "../../components/form/LoginForm";
import LoginFooter from "../../components/footer/LoginFooter";
import LoginHeader from "../../components/header/LoginHeader";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";

const LogInPage = () => {
  TrueGuard();
  return (
    <>
      <Helmet>
        <title>훈수 — 로그인</title>
      </Helmet>
      <MobileLayout>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </MobileLayout>
    </>
  );
};

export default LogInPage;
