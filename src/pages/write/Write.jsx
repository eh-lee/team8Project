import React, { useEffect } from "react";
import WriteForm from "../../components/form/WriteForm";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import MobileLayout from "../../layout/MobileLayout";

const Write = () => {
  FalseGuard();
  useEffect(() => {
    document.title = "훈수 — 글쓰기";
  }, []);

  return (
    <>
      <MobileLayout>
        <WriteForm />
      </MobileLayout>
    </>
  );
};

export default Write;
