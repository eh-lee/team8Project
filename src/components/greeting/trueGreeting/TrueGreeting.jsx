import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../../api/cookies";
import level1 from "../../../assets/icons/userLevel/level icon=초보, size=72.png";

const TrueGreeting = () => {
  const navi = useNavigate();
  return (
    <GreetingCont>
      <GreetingText1>
        <Row>
          <GreetingNickname>{cookies.get("nickname")}</GreetingNickname>
          <Greeting1>님의</Greeting1>
        </Row>
        <Greeting1>훈수 능력치는?</Greeting1>
      </GreetingText1>

      <Column>
        <GreetingLevelImgCont>
          <GreetingLevelImg src={level1} onClick={() => navi("/mypage")} />
        </GreetingLevelImgCont>
        <GreetingLevelName>훈수 초보</GreetingLevelName>
      </Column>
    </GreetingCont>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
  gap: 5px;
`;

const GreetingLevelName = styled.div`
  display: flex;
  justify-content: center;
  color: #ef3f61;
  font-size: 14px;
  font-weight: bold;
`;

const GreetingCont = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  // postCard와 라인 맞추기 위해 margin값 수정
  margin: 4.5rem 2rem 0 2rem;
  /* HeaderNav padding 좌우 값과 동일 */
  max-width: 400px;
  /* StMobileLayout과 동일 */
`;

const Row = styled.div`
  display: flex;
  justify-content: row;
`;

const GreetingLevelImgCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 20%; */ //넓이 설정시 이미지 잘림
  /* height: 74px; */
  aspect-ratio: 1;
  height: 4.2rem;
  border-radius: 50%;
  overflow: hidden;
`;

const GreetingLevelImg = styled.img`
  height: 100%;
  border: none;
  cursor: pointer;
`;
// 스크롤시 이미지 올라오는 문제 확인 => backGround-image로 줄 수 있는지 확인해보기

const GreetingText1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: space-evenly;
`;
const Greeting1 = styled.div`
  color: #2d2d2d;
`;

const GreetingNickname = styled.div`
  color: #2d2d2d;
`;

export default TrueGreeting;
