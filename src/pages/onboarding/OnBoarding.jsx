import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";
import cancel from "../../assets/icons/common/closeBtn.png";
import { useState } from "react";
import vector from "../../assets/icons/common/vector.png";
import onboarding1 from "../../assets/onboarding/onboarding1.png";
import onboarding2 from "../../assets/onboarding/onboarding2.png";
import onboarding3 from "../../assets/onboarding/onboarding3.png";
import OldbieGuard from "../../components/hook/guard/OldbieGuard copy";

const OnBoarding = () => {
  const navi = useNavigate();
  OldbieGuard();

  const [page, setPage] = useState(1);

  const clickLeftHandler = () => {
    if (page === 1) {
      setPage(3);
    } else {
      setPage(page - 1);
    }
  };

  const clickRightHandler = () => {
    if (page === 3) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>훈수 — 온보딩</title>
      </Helmet>
      <MobileLayout>
        <StFooRightDiv>
          <StCancIcon
            onClick={() => {
              navi("/");
            }}
            src={cancel}
          />
        </StFooRightDiv>
        {/* 32 */}
        {page === 1 ? (
          <>
            <StOnbImgWrap>
              <StOnbImgCont></StOnbImgCont>
              {/* 32 */}
              <StOnbDescCont>
                <StOnbDesc>
                  <StMainP>누군가에게</StMainP>
                  <StMainP>이래라 저래라 하고 싶을 때</StMainP>
                </StOnbDesc>
                <StOnbDescSub>
                  <StSubP>잘 모르고 무식한 사람이</StSubP>
                  <StSubP>신념을 가지면 재밌습니다</StSubP>
                </StOnbDescSub>
              </StOnbDescCont>
            </StOnbImgWrap>
            <StPageDot dot2 />
            <StPageDot dot3 />
            <StPageCurrDot dot1 />
          </>
        ) : null}
        {page === 2 ? (
          <>
            <StOnbImgWrap>
              <StOnbImgCont onboarding2></StOnbImgCont>
              {/* 32 */}
              <StOnbDescCont>
                <StOnbDesc>
                  <StMainP>나에게 이래라 저래라</StMainP>
                  <StMainP>해 줬으면 싶을 때</StMainP>
                </StOnbDesc>
                <StOnbDescSub>
                  <StSubP>훈수를 겸허히 받아들이겠습니다.</StSubP>
                  <StSubP>아마도요···.</StSubP>
                </StOnbDescSub>
              </StOnbDescCont>
            </StOnbImgWrap>
            <StPageDot />
            <StPageDot dot3 />
            <StPageCurrDot dot2 />
          </>
        ) : null}
        {page === 3 ? (
          <>
            <StOnbImgWrap>
              <StOnbRow>
                <StOnbImgCont onboarding3></StOnbImgCont>
              </StOnbRow>
              {/* 32 */}
              <StOnbDescCont>
                <StOnbDesc>
                  <StMainP>훈수에 훈수를 두고 싶을 때</StMainP>
                </StOnbDesc>
                <StOnbDescSub>
                  <StSubP>⚠️주의⚠️ 과도한 훈수는</StSubP>
                  <StSubP>정신 건강을 해칠 수 있습니다.</StSubP>
                </StOnbDescSub>
              </StOnbDescCont>
            </StOnbImgWrap>
            <StPageDot />
            <StPageDot dot4 />
            <StPageCurrDot dot3 />
          </>
        ) : null}
        {/* 112 */}
        <StAuthButton onClick={() => navi("/login")}>
          로그인하고 훈수 시작하기
        </StAuthButton>
        <Button dir="left" onClick={clickLeftHandler} />
        <Button dir="right" onClick={clickRightHandler} />
      </MobileLayout>
    </>
  );
};

export default OnBoarding;

const StPageDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  /* background-color: #f2f2f7; */
  background-color: rgb(220, 220, 220);
  position: absolute;
  top: 679px;
  left: 187px;

  ${({ dot2 }) =>
    dot2 &&
    css`
      left: 203px;
    `}
  ${({ dot3 }) =>
    dot3 &&
    css`
      left: 215px;
    `}

  ${({ dot4 }) =>
    dot4 &&
    css`
      left: 199px;
    `}
`;

const StPageCurrDot = styled.div`
  width: 16px;
  height: 8px;
  border-radius: 4px;
  background-color: #3a3a59;
  position: absolute;
  top: 679px;
  left: 183px;

  ${({ dot2 }) =>
    dot2 &&
    css`
      left: 197px;
    `}
  ${({ dot3 }) =>
    dot3 &&
    css`
      left: 211px;
    `}
`;

const StOnbRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = ({ dir, onClick }) => {
  return (
    <Stbutton dir={dir} onClick={onClick}>
      <ButtonImg src={vector} />
    </Stbutton>
  );
};

const Stbutton = styled.button`
  background-color: transparent;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  position: absolute;
  /* z-index: 1; */
  cursor: pointer;
  background: rgba(242, 242, 247, 0.6);
  ${({ dir }) => {
    if (dir === "left") {
      return css`
        left: 2.5rem;
        top: 40%;
        transform: translateY(-50%);
      `;
    }

    if (dir === "right") {
      return css`
        right: 2.5rem;
        top: 40%;
        transform: translateY(-50%) scaleX(-1);
      `;
    }
  }};

  &:hover {
    background: rgb(220, 220, 220);
  }
`;

const ButtonImg = styled.img`
  width: 6.4px;
  height: 12.8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StMainP = styled.p`
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

const StSubP = styled.p`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  color: #8a8a8a;
`;

const StAuthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #ef3f61;
  color: white;
  border-radius: 10px;
  min-width: 342px;
  min-height: 56px;
  font-size: 16px;
  font-weight: 600;

  bottom: 3%;
  left: 29px;
  position: absolute;

  &:hover {
    border: 0.1rem solid ${(props) => props.borderColor};
    background-color: pink;
    cursor: pointer;
  }
`;

const StOnbDescSub = styled.div`
  min-width: 258px;
  min-height: 48px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
const StOnbDesc = styled.div`
  min-width: 282px;
  min-height: 38px;
  max-height: 76px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
const StOnbImgCont = styled.div`
  min-width: 340px;
  min-height: 340px;
  background-image: url(${onboarding1});

  ${({ onboarding2: isOnBoarding }) =>
    isOnBoarding &&
    css`
      background-image: url(${onboarding2});
    `};

  ${({ onboarding3: isOnBoarding }) =>
    isOnBoarding &&
    css`
      background-image: url(${onboarding3});
    `};
`;

const StOnbDescCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const StOnbImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 112px;
  position: absolute;
  top: 15%;
  transform: translateX(8.75%);
`;

const StFooRightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 18px 30px 100px 0;
`;

const StCancIcon = styled.img`
  min-width: 12px;
  min-height: 12px;
  color: #3a3a59;

  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
  }
`;
