import styled from "styled-components";
import kakao from "../../assets/icons/socialLogin/kakao-icon.png";

export const KaKaoButton = styled.button`
  border: none;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background: url(${kakao}) no-repeat center/100%;
  cursor: pointer;
`;