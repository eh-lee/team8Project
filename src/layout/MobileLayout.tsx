import styled from "styled-components";
import React, { useEffect } from "react";

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);
    return () => window.removeEventListener("resize", setScreenSize);
  }, []);

  return <StMobileLayout>{children}</StMobileLayout>;
};

export default MobileLayout;

const StMobileLayout = styled.div`
  width: 100%;
  height: 100vh;
  /* 컨텐츠가 없는 경우에도 화면이 잘리지 않도록 100vh */
  position: relative;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  /* 스크롤 */
  margin: 0 auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3); /* 그림자 추가 */
  background-color: white;

  @media screen and (min-width: 400px) {
    /* @media screen and (min-width: 400px) { */
    /* min-width로 반응형 width 조절 */
    /* 520px: 카카오 로그인 max-width와 통일 */
    width: 400px;
  }
`;
