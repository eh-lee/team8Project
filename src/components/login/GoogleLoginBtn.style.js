import styled from "styled-components";
import google from "../../assets/icons/socialLogin/google-icon.png";

export const GoogleButton = styled.button`
  border: none;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background: url(${google}) no-repeat center/120%;
  cursor: pointer;
  filter: grayscale(100%);
`;