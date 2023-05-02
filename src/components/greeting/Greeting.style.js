import styled from "styled-components";

const Wrap = styled.div`
  background-color: #3a3a59;
  width: 100%;
  height: 204px;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 40px;
  margin-top: 40px;
  /* border: 2px solid red; */
`;

const GreetingCont = styled.div`
  display: flex;
  justify-content: space-between;
  // postCard와 라인 맞추기 위해 margin값 수정
  margin: 46px 25px 8px 25px;
  /* HeaderNav padding 좌우 값과 동일 */
  max-width: 400px;
  height: 92px;
  /* StMobileLayout과 동일 */
`;

const GreetingText1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  justify-content: space-evenly;
  height: 76px;
`;

const Row = styled.div`
  display: flex;
  justify-content: row;
`;

const GreetingNickname = styled.div`
  color: white;
  padding-right: 4px;

  &:hover {
    cursor: pointer;
    color: rgb(220, 220, 220);
  }
`;

const Greeting1 = styled.div`
  color: white;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 92px;
  gap: 2px;
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

const GreetingLevelName = styled.div`
  display: flex;
  justify-content: center;
  color: #ef3f61;
  font-size: 14px;
  font-weight: 600;
`;

const GreetingLvCont = styled.div`
  display: flex;
  height: 42px;
  margin: 0 25px 16px 25px;
  max-width: 400px;
  /* StMobileLayout과 동일 */
`;

const Between = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const GreetingText2 = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* max-width: 65%; */
  letter-spacing: 0.025rem;
`;

const GreetingLvContSub = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  height: 18px;
  margin-bottom: 4px;
`;

const GreetingLevelImgCont2 = styled.div`
  display: flex;
  align-items: center; /* 이미지 세로 중앙 정렬 */
  justify-content: center; /* 이미지 가로 중앙 정렬 */
  width: 18px;
  height: 18px;
  border-radius: 50%; /* 원 모양으로 만들기 */
  margin-right: 4px;
`;

const GreetingLevelImg2 = styled.img`
  height: 18px;
  width: 18px;
  border: none;
`;

const GreetingLvText1 = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #ef3f61;
  //   @media (max-width: 400px) {
  //   font-size: calc(1rem + (0.8 - 1) * ((100vw - 400px) / (400 - 280)));
  //   }
`;

const GreetingLvText2 = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #f4f4f5;
  letter-spacing: 0rem;
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

const Baseline = styled.div`
  display: flex;
  align-items: baseline;
  height: 34px;
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

export {
  Wrap,
  Row,
  Column,
  Between,
  Baseline,

  GreetingLvCont,
  GreetingLvContSub,
  GreetingLvPoint1,
  GreetingLvPoint2,
  GreetingLvText1,
  GreetingLvText2,
  GreetingLevelImg,
  GreetingLevelImg2,
  GreetingLevelName,
  GreetingLevelImgCont,
  GreetingLevelImgCont2,

  Greeting1,
  GreetingCont,
  GreetingText1,
  GreetingText2,
  GreetingNickname,
  LvExperienceBar,
  ColoredExperienceBar,
}