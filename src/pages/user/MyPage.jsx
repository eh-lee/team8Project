import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";
import { MdArrowBackIosNew } from "react-icons/md";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=72.png";
import level2 from "../../assets/icons/userLevel/level icon=하수, size=18.png";
import myPageMenu from "../../assets/icons/common/myPageMenu.png";
import ModalPortal from "../../components/modal/ModalPortal";
import LogoutModal from "../../components/modal/LogoutModal";
import SignOutModal from "../../components/modal/SignOutModal";
import { cookies } from "../../api/cookies";

const MyPage = () => {
  const navi = useNavigate();
  const nickname = cookies.get("nickname");

  const currExp = 75;
  const goalExp = 100;
  const exp = (currExp / goalExp) * 100;

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const LogoutModalOpenHandler = () => {
    setIsLogoutModalOpen(true);
  };
  const LogoutModalCloseHandler = () => {
    setIsLogoutModalOpen(false);
  };

  const SignOutModalOpenHandler = () => {
    setIsSignOutModalOpen(true);
  };
  const SignOutModalCloseHandler = () => {
    setIsSignOutModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>훈수 — 마이페이지</title>
      </Helmet>
      <MobileLayout>
        {/* =========== 로그아웃 모달 =========== */}
        <ModalPortal>
          <ModalCont>
            {isLogoutModalOpen && (
              <LogoutModal
                open={isLogoutModalOpen}
                close={LogoutModalCloseHandler}
              />
            )}
          </ModalCont>
        </ModalPortal>
        {/* =========== 로그아웃 모달 =========== */}

        {/* =========== 회원 탈퇴 모달 =========== */}
        <ModalPortal>
          <ModalCont>
            {isSignOutModalOpen && (
              <SignOutModal
                open={isSignOutModalOpen}
                close={SignOutModalCloseHandler}
              />
            )}
          </ModalCont>
        </ModalPortal>
        {/* =========== 회원 탈퇴 모달 =========== */}

        <DetailPost_Header>
          <DetailPost_HeaderCont>
            <DetailPost_BackBtn
              onClick={() => {
                navi(-1);
              }}
            >
              <MdArrowBackIosNew size="1rem" />
            </DetailPost_BackBtn>
            <DetailPost_Category>마이페이지</DetailPost_Category>
            <DetailPost_MenuBtn></DetailPost_MenuBtn>
          </DetailPost_HeaderCont>
        </DetailPost_Header>
        <StMyPageHeaderWrap>
          {/* ============== FalseGreeting ============== */}
          <GreetingCont>
            <Column>
              <GreetingLevelImgCont>
                <GreetingLevelImg src={level1} />
              </GreetingLevelImgCont>
              <StMyPageLevelUserInfoCont>
                <StMyPageLevelNickname>{nickname}</StMyPageLevelNickname>
                <GreetingLevelName>훈수 초보</GreetingLevelName>
                <StMyPageLevelEmail>hoonsoo123@naver.com</StMyPageLevelEmail>
              </StMyPageLevelUserInfoCont>
            </Column>
          </GreetingCont>
          {/* ============== FalseGreeting ============== */}

          {/* ============== FalseGreetingLv ============== */}
          {/* <FalseGreetingLv /> */}
          <GreetingLvCont>
            <RowMain>
              <GreetingText1>
                <GreetingLvContSub>
                  <StGreetingLevelImgCont>
                    <StGreetingLevelImg src={level2} />
                  </StGreetingLevelImgCont>
                  <GreetingLvText1>훈수 하수</GreetingLvText1>
                  <GreetingLvText2>까지 앞으로</GreetingLvText2>
                </GreetingLvContSub>
                <LvExperienceBar>
                  <ColoredExperienceBar exp={exp} />
                </LvExperienceBar>
              </GreetingText1>

              <Row>
                <GreetingLvPoint1>{currExp}</GreetingLvPoint1>
                <GreetingLvPoint2>/{goalExp}</GreetingLvPoint2>
              </Row>
            </RowMain>
          </GreetingLvCont>
          {/* ============== FalseGreetingLv ============== */}
        </StMyPageHeaderWrap>
        <StMyPageMenuWrap>
          <StMyPageMenu>
            <StMyPageMenuText>서비스 정보</StMyPageMenuText>
            <StMyPageMenuIcon src={myPageMenu} />
          </StMyPageMenu>
          <StMyPageMenu onClick={LogoutModalOpenHandler}>
            <StMyPageMenuText isLogout>로그아웃</StMyPageMenuText>
            <StMyPageMenuIcon src={myPageMenu} />
          </StMyPageMenu>
          <StMyPageMenu onClick={SignOutModalOpenHandler}>
            <StMyPageMenuText>회원 탈퇴</StMyPageMenuText>
            <StMyPageMenuIcon src={myPageMenu} />
          </StMyPageMenu>
        </StMyPageMenuWrap>
      </MobileLayout>
      {/* gif테스트 */}
      {/* <div>
        gif테스트
        <img src={gifTest} alt="웅 안 돼~"/>
      </div> */}
    </>
  );
};

export default MyPage;

const ModalCont = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const StMyPageHeaderWrap = styled.div`
  /* border: 1px solid green;; */
  background-color: #3a3a59;
  height: 130px;
  border-bottom-right-radius: 40px;
  margin-top: 48px;
  padding: 16px 25px;
`;

// 마이페이지 헤더 ==================================================
const DetailPost_Header = styled.header`
  background-color: #3a3a59;
  position: fixed;
  /* top: 0; */

  width: 100%;
  min-width: 200px;
  max-width: 400px;

  /* HEADER 높이 맞춤 */
  /* height: 7vh; */
  /* height: 95px; */
  height: 48px;
  z-index: 1;

  /* border: 1px solid orange; */

  border-bottom: 0.1rem solid rgba(90, 81, 81, 0.617);
`;

const DetailPost_HeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;

  /* HEADER 높이 맞춤 */
  /* height: 7vh; */
  height: 48px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 7.5%;
`;

const DetailPost_BackBtn = styled.div`
  /* border: 1px solid green; */
  color: rgb(180, 180, 180);
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const DetailPost_Category = styled.div`
  /* border: 1px solid blue; */
  letter-spacing: 0.0125em;
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: white;
`;

const DetailPost_MenuBtn = styled.div`
  /* border: 1px solid burlywood; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  color: rgb(180, 180, 180);
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

// FalseGreeting ==================================================

const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;
  height: 88px;
  /* border: 1px solid green; */
`;

const GreetingCont = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  // postCard와 라인 맞추기 위해 margin값 수정
  /* margin: 4.5rem 2rem 0 2rem; */
  /* HeaderNav padding 좌우 값과 동일 */
  max-width: 400px;
  /* StMobileLayout과 동일 */
`;

const GreetingLevelImgCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const GreetingLevelImg = styled.img`
  height: 72px;
  width: 72px;
  /* cursor: pointer; */
`;

const StMyPageLevelUserInfoCont = styled.ul`
  /* border: 1px solid blueviolet; */
  margin-left: 16px;
  height: 68px;
  display: flex;
  gap: 7px;
  flex-direction: column;
  justify-content: center;
`;

const StMyPageLevelNickname = styled.li`
  color: white;
  font-size: 24px;
`;

const GreetingLevelName = styled.li`
  color: #f26581;
  font-size: 14px;
  font-weight: bold;
`;

const StMyPageLevelEmail = styled.li`
  color: white;
  font-size: 10px;
`;
// FalseGreetingLv ==================================================

const GreetingLvCont = styled.div`
  /* border: 1px solid tomato; */
  width: 340px;
  height: 42px;
  display: flex;
  /* justify-content: space-between; */
  /* min-width: 280px; */
`;

const RowMain = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const GreetingText1 = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* max-width: 65%; */
  letter-spacing: 0.025rem;
`;

const GreetingLvContSub = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: row;
  align-items: center;
`;

const StGreetingLevelImgCont = styled.div`
  display: flex;
  align-items: center; /* 이미지 세로 중앙 정렬 */
  justify-content: center; /* 이미지 가로 중앙 정렬 */
  width: 1.3rem;
  aspect-ratio: 1;
  border-radius: 50%; /* 원 모양으로 만들기 */
  overflow: hidden;
  margin-right: 0.25rem;
`;

const StGreetingLevelImg = styled.img`
  height: 100%;
  border: none;
`;

const GreetingLvText1 = styled.div`
  margin-left: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #ef3f61;
`;

const GreetingLvText2 = styled.div`
  font-size: 14px;
  color: #f4f4f5;
  letter-spacing: 0rem;
`;

const LvExperienceBar = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  /* width: ${(props) => props.goalExp}%; */

  height: 0.5rem;
  background-color: rgb(230, 230, 230);
  border-radius: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  top: 0.18rem;
`;

const ColoredExperienceBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #ef3f61;
  border-radius: 2rem;
  width: ${(props) => props.exp}%;
`;

const Row = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: baseline;
`;

const GreetingLvPoint1 = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  color: white;
  /* line-height: 38px; */
`;

const GreetingLvPoint2 = styled.div`
  display: flex;
  align-items: center;
  color: #c4c4c4;
  font-size: 24px;
`;

// 메뉴
const StMyPageMenuWrap = styled.ul`
  margin-top: 15px;
  width: 400px;
  height: 168px;
  /* border: 1px solid blanchedalmond; */
`;

const StMyPageMenu = styled.li`
  /* border: 1px solid turquoise; */
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e1e2e4;
  cursor: pointer;
`;

const StMyPageMenuText = styled.div`
  /* border: 1px solid blueviolet; */
  margin-left: 24px;
  ${({ isLogout }) =>
    isLogout &&
    css`
      color: #ef3f61;
    `};
`;

const StMyPageMenuIcon = styled.img`
  /* border: 1px solid blue; */
  width: 6px;
  height: 12px;
  margin-right: 24px;
`;
