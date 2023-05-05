import styled from "styled-components";


const DetailPostCommentsWrap = styled.section`
  max-width: 400px;
  height: 1000px;
  background-color: #f2f2f7;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const FooterWrap = styled.footer`
  background-color: white;
  max-width: 400px;
  min-height: 30px;
  height: 64px;

  // footer 위에만 그림자 주기
  box-shadow: rgba(100, 100, 111, 0.4) 0px -5px 15px -5px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const FooterInputCont = styled.form`
  width: 100vw;
  display: flex;
  margin: 0 7.5%;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.textarea`
  resize: none;
  background-color: #f2f2f7;
  border: none;
  border-radius: 20px;
  width: 260px;
  height: 32px;
  display: flex;
  padding: 10px 16px 0 16px;
  font-size: 14px;

  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const InputBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #bdbdc9;
  width: 32px;
  height: 24px;

  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  cursor: pointer;
  &:hover {
    color: #3a3a59;
  }
`;

export {
    DetailPostCommentsWrap,
    FooterWrap,
    FooterInputCont,
    Input,
    InputBtn,
}