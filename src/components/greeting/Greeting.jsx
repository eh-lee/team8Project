import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=72.png";
import { cookies } from "../../api/cookies";

const FalseGreeting = () => {
  const navi = useNavigate();
  const nickname = cookies.get("nickname");
  const isLogin = cookies.get("access_token") ? true : false;

  return (
    <GreetingCont>
      <GreetingText1>
        {isLogin ? (
          <>
            <Row>
              <GreetingNickname onClick={() => navi("/mypage")}>
                {nickname}
              </GreetingNickname>
              <Greeting1>님의</Greeting1>
            </Row>
            <Greeting1>훈수 능력치는?</Greeting1>
          </>
        ) : (
          <>
            <Row>
              <GreetingNickname onClick={() => navi("/login")}>
                로그인
              </GreetingNickname>
              <Greeting1>후</Greeting1>
            </Row>
            <Greeting1>이용 가능합니다.</Greeting1>
          </>
        )}
      </GreetingText1>

      <Column>
        <GreetingLevelImgCont>
          <GreetingLevelImg src={level1} />
        </GreetingLevelImgCont>
        <GreetingLevelName>
          {isLogin ? "훈수 초보" : "훈수 초보"}
        </GreetingLevelName>
      </Column>
    </GreetingCont>
  );
};

const GreetingLevelName = styled.div`
  display: flex;
  justify-content: center;
  color: #ef3f61;
  font-size: 14px;
  font-weight: 600;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 92px;
  gap: 2px;
  /* border: 1px solid green; */
`;

const GreetingCont = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  // postCard와 라인 맞추기 위해 margin값 수정
  margin: 46px 25px 8px 25px;
  /* HeaderNav padding 좌우 값과 동일 */
  max-width: 400px;
  height: 92px;
  /* StMobileLayout과 동일 */
`;

const Row = styled.div`
  display: flex;
  justify-content: row;
`;

const GreetingLevelImgCont = styled.div`
  display: flex;
  border-radius: 50%;
  height: 72px;
  width: 72px;
`;

const GreetingLevelImg = styled.img`
  height: 72px;
  width: 72px;
  border: none;
`;
// 스크롤시 이미지 올라오는 문제 확인 => backGround-image로 줄 수 있는지 확인해보기

const GreetingText1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  justify-content: space-evenly;
  height: 76px;
  /* border: 1px dotted white; */
`;

const Greeting1 = styled.div`
  color: white;
`;

const GreetingNickname = styled.div`
  color: white;
  padding-right: 4px;

  &:hover {
    cursor: pointer;
    color: rgb(220, 220, 220);
  }
`;

export default FalseGreeting;
