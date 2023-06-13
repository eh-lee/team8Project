import React, { useEffect, useState } from "react";
import WriteForm from "../../components/form/WriteForm";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import MobileLayout from "../../layout/MobileLayout.tsx";
import { Loading } from "../../components/onboarding/Loading";

const Write = () => {
  FalseGuard();
  useEffect(() => {
    document.title = "훈수 — 글쓰기";
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? <Loading /> : null}
      <MobileLayout>
        <WriteForm setLoading={setLoading} />
      </MobileLayout>
    </>
  );
};

export default Write;
