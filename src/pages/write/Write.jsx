import React from "react";
import WriteForm from "../../components/form/WriteForm";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";

const Write = () => {
  FalseGuard();

  return (
    <>
      <Helmet>
        <title>훈수 — 글쓰기</title>
      </Helmet>
      <MobileLayout>
        <WriteForm />
      </MobileLayout>
    </>
  );
};

export default Write;
