import styled from "styled-components";
import AuthInput from "../elem/AuthInput"
import AuthButton from "../elem/AuthButton";
import SnsLoginBtn from "../elem/SnsLoginBtn"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5vw;
`;

const Wrap = styled.form`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5vh;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
`;

export { AuthInput, AuthButton, SnsLoginBtn, Wrap, Row, Column, Cont }