import React from "react";
import styled from "styled-components";

const GreetingLv = () => {
  const currExp = 170;
  const goalExp = 200;
  const exp = (currExp / goalExp) * 100;
  //currExp, goalExp 동적 관리 셋업
  return (
    // isLogin? : ver 두 개 만들기
    <GreetingLvCont>
      <RowMain>
        <GreetingText1>
          <GreetingLvContSub>
            <GreetingLevelImgCont>
              <GreetingLevelImg
                src="img/testImg2.jpg"
                style={{ filter: "grayscale(100%)" }}
              />
            </GreetingLevelImgCont>
            <GreetingLvText1>야만을 벗어난 훈수꾼</GreetingLvText1>
            <GreetingLvText2>이 되기까지</GreetingLvText2>
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
  );
};

const RowMain = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LvExperienceBar = styled.div`
  /* border: 1px solid red; */
  width: 100%;
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
  background-color: rgb(200, 200, 200);
  border-radius: 2rem;
  width: ${(props) => props.exp}%;
`;

const Row = styled.div`
  display: flex;
  justify-content: row;
`;

const GreetingLvContSub = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: row;
  align-items: center;
`;

//https://sangjuntech.tistory.com/11

const GreetingLvCont = styled.div`
  display: flex;
  justify-content: space-between;
  // postCard와 라인 맞추기 위해 margin값 수정
  margin: 1rem 2rem 0 2rem;
  /* HeaderNav padding 좌우 값과 동일 */
  max-width: 400px;
  /* StMobileLayout과 동일 */
`;

const GreetingLvPoint1 = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
`;
const GreetingLvPoint2 = styled.div`
  display: flex;
  align-items: center;
  color: rgb(160, 160, 160);
  font-size: 1.3rem;
`;

const GreetingLevelImgCont = styled.div`
  display: flex;
  align-items: center; /* 이미지 세로 중앙 정렬 */
  justify-content: center; /* 이미지 가로 중앙 정렬 */
  width: 1.3rem;
  aspect-ratio: 1;
  border-radius: 50%; /* 원 모양으로 만들기 */
  overflow: hidden;
  margin-right: 0.25rem;
`;

const GreetingLevelImg = styled.img`
  height: 100%;
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
  font-size: 0.95rem;
  font-weight: bold;
  /* color: rgb(213, 135, 135); */
  color: rgb(160, 160, 160);
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
  font-size: 0.9rem;
  color: rgb(160, 160, 160);
  letter-spacing: 0rem;
`;

export default GreetingLv;
