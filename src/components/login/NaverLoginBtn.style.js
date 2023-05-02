import styled from "styled-components";
import naver from "../../assets/icons/socialLogin/naver-icon.png";

export const NaverButton = styled.button`
  border: none;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background: url(${naver}) no-repeat center/100%;
  cursor: pointer;
  filter: grayscale(100%);
`;