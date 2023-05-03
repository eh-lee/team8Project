import styled from "styled-components";
import logo from "../../assets/icons/logo/loginlogo.png";

const Box = styled.div`
  margin: 20vh 0 7.5vh 0;
  display: flex;
  flex-direction: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const Logo = styled.div`
  background-size: cover;
  background-image: url(${logo});
  width: 80px;
  height: 57px;
`;

export { Box, Logo };