import styled from "styled-components";

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

export {
    GreetingCont,
    GreetingText1,
    Row,
    GreetingNickname,
    Greeting1,
    Column,
    GreetingLevelImgCont,
    GreetingLevelImg,
    GreetingLevelName,
}