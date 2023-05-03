import styled from "styled-components";

const Wrap = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: white;

  width: 166px;
  height: 132px;

  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TitleBox = styled.ul`
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 134px;
  height: 70px;

  gap: 4px;

  margin: 12px 16px 4px 16px;

`;

const MainCat = styled.li`
  /* border: 1px solid black; */
  height: 18px;
  font-size: 10px;
  color: gray;
`;

//* =========== Cat. Label ===============
const CatLabel = styled.button`
  color: white;
  background: #3a3a59;
  border-radius: 100px;
  padding: 0 4px 0px 6px;
  border: none;
  font-size: 10px;
`;
//* =========== Cat. Label ===============

const Title = styled.li`
  /* border: 1px solid black; */
  font-size: 18px;
  color: #2D2D2D;
  height: 48px;

  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  word-wrap: break-word;
`;

const Content = styled.div`
  /* border: 1px solid black; */

  max-height: 10vh;
  width: 134px;
  height: 36px;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  word-wrap: break-word;

  margin-left: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #8A8A8A;
  font-size: 14px;
`;

export { Wrap, TitleBox, CatLabel, MainCat, Title, Content }