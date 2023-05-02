import React from "react";
import WriteForm from "../../components/form/WriteForm";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import WriteFooter from "../../components/footer/WriteFooter";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Write = () => {
  FalseGuard();

  const [isWritingImg, setIsWritingImg] = useState(false);
  const handleIsWritingImg = (callBackData) => {
    setIsWritingImg(callBackData);
  };

  // 이미지 업로드 기능 코드
  useEffect(() => {
    if (isWritingImg) {
      console.log("지금 이미지 작성중이라구~!", isWritingImg);
    } else {
      console.log("지금 이미지 작성 안함.", isWritingImg);
    }
  }, [isWritingImg]);

  return (
    <>
      <Helmet>
        <title>훈수 — 글쓰기</title>
      </Helmet>
      <MobileLayout>
        <WriteForm />
        <WriteFooter handleIsWritingImg={handleIsWritingImg} />
      </MobileLayout>
    </>
  );
};

export default Write;
