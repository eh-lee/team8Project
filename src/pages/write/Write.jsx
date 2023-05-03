import React from "react";
import WriteForm from "../../components/form/WriteForm";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import WriteFooter from "../../components/footer/WriteFooter";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Write = () => {
  FalseGuard();

  return (
    <>
      <Helmet>
        <title>훈수 — 글쓰기</title>
      </Helmet>
      <MobileLayout>
        <WriteForm />
        {/* <WriteFooter /> */}
      </MobileLayout>
    </>
  );
};

export default Write;
