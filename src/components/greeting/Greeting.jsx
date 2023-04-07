import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../api/cookies";

const Greeting = () => {
  const navi = useNavigate();
  return (
    // isLogin? : ver 두 개 만들기
    <GreetingCont>
      <GreetingText1>
        <Row>
          <GreetingNickname>{cookies.get("nickname")}</GreetingNickname>
          <Greeting1>님의</Greeting1>
        </Row>
        <Greeting1>훈수 능력치는?</Greeting1>
      </GreetingText1>
      <GreetingLevelImgCont>
        <GreetingLevelImg
          src="img/testImg1.jpg"
          style={{ filter: "grayscale(100%)" }}
          onClick={() => navi("/mypage")}
        />
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
  align-items: center;
  justify-content: center;
  width: 20%;
  /* aspect-ratio: 1; */
  /* height: 74px; */
  height: 4.6rem;
  border-radius: 50%;
  overflow: hidden;
`;

const GreetingLevelImg = styled.img`
  height: 100%;
  border: none;
  cursor: pointer;
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
  /* color: rgb(76, 76, 198); */
  color: rgb(213, 135, 135);
`;

export default Greeting;
