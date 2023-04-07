import React from "react";
import styled from "styled-components";
import { cookies } from "../../api/cookies";

const Greeting = () => {
  return (
    <GreetingCont>
      <GreetingText1>
        <Row>
          <GreetingNickname>{cookies.get("nickname")}</GreetingNickname>
          <Greeting1>님의</Greeting1>
        </Row>
        <Greeting1>훈수 능력치는?</Greeting1>
      </GreetingText1>
      <GreetingLevelImgCont>
        <GreetingLevelImg src="img/testImg1.jpg" />
      </GreetingLevelImgCont>
    </GreetingCont>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: row;
`;

const GreetingCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4.5rem 1rem 0 1rem;
  /* HeaderNav padding 좌우 값과 동일 */
  max-width: 400px;
  /* StMobileLayout과 동일 */
`;

const GreetingLevelImgCont = styled.div`
  display: flex;
  align-items: center; /* 이미지 세로 중앙 정렬 */
  justify-content: center; /* 이미지 가로 중앙 정렬 */
  width: 20%;
  aspect-ratio: 1; /* 가로 세로 비율을 유지하면서 크기 지정 */
  border-radius: 50%; /* 원 모양으로 만들기 */
  overflow: hidden; /* border-radius 적용하기 위한 설정 */
`;

const GreetingLevelImg = styled.img`
  height: 100%;
  border: none;
`;

const GreetingText1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: space-evenly;
`;
const Greeting1 = styled.div``;

const GreetingNickname = styled.div`
  color: rgb(76, 76, 198);
`;

export default Greeting;
