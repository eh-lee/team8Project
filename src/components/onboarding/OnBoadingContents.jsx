import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cancel from "../../assets/icons/common/closeBtn.png";
import * as St from "./OnBoadingContents.style";

const OnBoardingContents = () => {
  const navi = useNavigate();
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <St.FooRight>
        <St.Cancel
          onClick={() => {
            navi("/");
          }}
          src={cancel}
        />
      </St.FooRight>
      {[1, 2, 3].map((pageNumber) =>
        page === pageNumber ? (
          <>
            <St.Wrap>
              <St.Content onboarding2={page === 2} onboarding3={page === 3} />
              <St.DescCont>
                <St.Desc>
                  <St.DescP>
                    {page === 1 && "누군가에게"}
                    {page === 2 && "나에게 이래라 저래라"}
                    {page === 3 && "훈수에 훈수를 두고 싶을 때"}
                  </St.DescP>
                  <St.DescP>
                    {page === 1 && "이래라 저래라 하고 싶을 때"}
                    {page === 2 && "해 줬으면 싶을 때"}
                  </St.DescP>
                </St.Desc>
                <St.DescSub>
                  <St.DescSubP>
                    {page === 1 && "잘 모르고 무식한 사람이"}
                    {page === 2 && "훈수를 겸허히 받아들이겠습니다."}
                    {page === 3 && "⚠️주의⚠️ 과도한 훈수는"}
                  </St.DescSubP>
                  <St.DescSubP>
                    {page === 1 && "신념을 가지면 재밌습니다"}
                    {page === 2 && "아마도요···."}
                    {page === 3 && "정신 건강을 해칠 수 있습니다."}
                  </St.DescSubP>
                </St.DescSub>
              </St.DescCont>
            </St.Wrap>
            <St.Dot dot2={page === 1} dot1={page === 2 || 3} />
            <St.Dot dot3={page === 1 || 2} dot4={page === 3} />
            <St.CurrDot dot1={page === 1} dot2={page === 2} dot3={page === 3} />
          </>
        ) : null
      )}
      <St.AuthBtn onClick={() => navi("/login")}>
        로그인하고 훈수 시작하기
      </St.AuthBtn>
      <St.Btn
        dir="left"
        onClick={() => handlePageChange(page === 1 ? 3 : page - 1)}
      />
      <St.Btn
        dir="right"
        onClick={() => handlePageChange(page === 3 ? 1 : page + 1)}
      />
    </>
  );
};

export default OnBoardingContents;
