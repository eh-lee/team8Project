import styled from "styled-components";

const InputCont = styled.div`
  background-color: white;
  width: 400px;
  min-height: 30px;
  height: 64px;

  // footer 위에만 그림자 주기
  box-shadow: rgba(100, 100, 111, 0.4) 0px -5px 15px -5px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 7.5%;
  justify-content: space-between;
`;

const Msginput = styled.input`
  background-color: #f2f2f7;
  border-radius: 20px;
  width: 260px;
  font-size: 14px;
  height: 22px;
  display: flex;
  padding: 5px 16px 5px 16px;
`;

const SendButton = styled.button`
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
    InputCont,
    Form,
    Msginput,
    SendButton,
}
