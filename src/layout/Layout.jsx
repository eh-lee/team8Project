import React from "react";
import styled from "styled-components";
// import { IMAGES, PATH } from "../constants/index";

const Layout = ({ children }) => {
  return (
    // <LayoutBox url={IMAGES.background}>
    <LayoutBox>
      {/* <StLogoImg>
        <img src="./public/img/ex1.jpg" alt="members" />
      </StLogoImg>
      <StMadeby style={{ backgroundColor: "black" }}>
        
      </StMadeby>
      <StRabbit style={{ backgroundColor: "black" }}>
        
      </StRabbit>
      <StSum url={IMAGES.backEarth} /> */}
      <Box>
        <DivLayout2>{children}</DivLayout2>
      </Box>
    </LayoutBox>
  );
};

export default Layout;

const LayoutBox = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  /* background: #f9f3ea; */
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Box = styled.div`
  //핸드폰 화면에 맞춤 처리
  display: flex;
  /* margin-left: 20%; */
  justify-content: center;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.4);
  z-index: 1;
  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 625px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const DivLayout2 = styled.div`
  //핸드폰 화면에 맞춤 처리
  @media screen and (max-width: 420px) {
    width: 100%;
    margin: auto;
    background-color: #bebebe;
  }
  width: 460px;
  height: 100vh;
  position: relative;
  /* position: absolute; */
  /* position: fixed; */
  margin-left: 0 auto;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  z-index: 1;
  /* margin: auto; */
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.4);
  overflow: auto;
`;

// =======================================================================
// *=================== 이하 모바일 콘테이너 바깥 화면 추후 작업 ==================*
// =======================================================================

const StLogoImg = styled.div`
  position: fixed;
  top: 7.8125vw;
  left: 7.0313vw;
  img {
    width: 17.1354vw;
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`;

const StMadeby = styled.div`
  position: fixed;
  top: 7.8125vw;
  right: 5%;
  img {
    width: 8.4896vw;
  }
  @media screen and (max-width: 1000px) {
    img {
      width: 15vw;
    }
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`;

const StRabbit = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  img {
    width: 30.4375vw;
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`;

const StSum = styled.div`
  width: 1158px;
  height: 240px;
  position: absolute;
  margin-left: 20%;
  bottom: 0;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  /* @media screen and (max-width: 625px) {
    display: none;
  } */
  /* background-color: aqua; */
`;

// export const LayoutBox2 = styled.div`
//   display: flex;
//   margin: 0 auto;
//   justify-content: center;
//   background: radial-gradient(
//     74.59% 151.97% at 76.76% 29.32%,
//     #787878 0%,
//     #000000 100%
//   );
//   mix-blend-mode: overlay;
// `;

const DeskTopLayout = styled.div`
  width: 375px;
  height: 100vh;
  position: relative;
  background-color: #f9f3ea;
  display: flex;
  flex-direction: column;
`;
