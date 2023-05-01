import React from "react";
import styled from "styled-components";
import level2 from "../../assets/icons/userLevel/level icon=하수, size=18.png";

const FalseGreetingLv = () => {
  const currExp = 0;
  const goalExp = 100;
  const exp = (currExp / goalExp) * 100;

  return (
    <GreetingLvCont>
      <RowMain>
        <GreetingText1>
          <GreetingLvContSub>
            <GreetingLevelImgCont>
              <GreetingLevelImg src={level2} />
            </GreetingLevelImgCont>
            <GreetingLvText1>훈수 하수</GreetingLvText1>
            <GreetingLvText2>까지 앞으로</GreetingLvText2>
          </GreetingLvContSub>
          <LvExperienceBar>
            <ColoredExperienceBar exp={exp} />
          </LvExperienceBar>
        </GreetingText1>

        <Row>
          <GreetingLvPoint1>{currExp}</GreetingLvPoint1>
          <GreetingLvPoint2>/ {goalExp}</GreetingLvPoint2>
        </Row>
      </RowMain>
    </GreetingLvCont>
  );
};

const RowMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LvExperienceBar = styled.div`
  /* width: ${(props) => props.goalExp}%; */

  width: 229px;
  height: 8px;
  background: #f4f4f5;
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
  background-color: #2d2d2d;
  border-radius: 2rem;
  width: ${(props) => props.exp}%;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  height: 34px;
`;

const GreetingLvContSub = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  height: 18px;
  margin-bottom: 4px;
`;

//https://sangjuntech.tistory.com/11

const GreetingLvCont = styled.div`
  display: flex;
  height: 42px;
  margin: 0 25px 16px 25px;
  max-width: 400px;
  /* StMobileLayout과 동일 */
`;

const GreetingLvPoint1 = styled.div`
  height: 34px;
  display: flex;
  align-items: flex-end;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
`;
const GreetingLvPoint2 = styled.div`
  display: flex;
  align-items: center;
  color: #c4c4c4;
  font-weight: 400;
  font-size: 24px;
`;

const GreetingLevelImgCont = styled.div`
  display: flex;
  align-items: center; /* 이미지 세로 중앙 정렬 */
  justify-content: center; /* 이미지 가로 중앙 정렬 */
  width: 18px;
  height: 18px;
  border-radius: 50%; /* 원 모양으로 만들기 */
  margin-right: 4px;
`;

const GreetingLevelImg = styled.img`
  height: 18px;
  width: 18px;
  border: none;
`;

const GreetingText1 = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* max-width: 65%; */
  letter-spacing: 0.025rem;
`;

const GreetingLvText1 = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #ef3f61;
`;

// const GreetingLvText1 = styled.div`
//   font-size: 1rem;
//   font-weight: bold;
//   color: rgb(160, 160, 160);
//   @media (max-width: 400px) {
//   font-size: calc(1rem + (0.8 - 1) * ((100vw - 400px) / (400 - 280)));
//   }
// `;

const GreetingLvText2 = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #f4f4f5;
  letter-spacing: 0rem;
`;

export default FalseGreetingLv;
